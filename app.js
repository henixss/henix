const WHATSAPP = '5522998367881';
const grid = document.querySelector('#productGrid');
const emptyState = document.querySelector('#emptyState');
const searchInput = document.querySelector('#searchInput');
const filterWrap = document.querySelector('.filter-wrap');
const modal = new bootstrap.Modal(document.querySelector('#productModal'));
let currentFilter = 'Todos';

function categoriesOf(product) { return Array.isArray(product.categories) ? product.categories : [product.category].filter(Boolean); }
function imagesOf(product) { if (Array.isArray(product.images)) return product.images.filter(Boolean); return product.image ? [product.image] : []; }
function whatsappLink(product) { return `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(`Oi! Tenho interesse na peça ${product.name}.`)}`; }

function renderFilters() {
  const categories = [...new Set(products.flatMap(categoriesOf))].sort((a, b) => a.localeCompare(b, 'pt-BR'));
  filterWrap.innerHTML = ['Todos', ...categories].map(category => `<button class="filter-btn ${category === currentFilter ? 'active' : ''}" data-filter="${category}">${category}</button>`).join('');
  filterWrap.querySelectorAll('.filter-btn').forEach(button => button.addEventListener('click', () => { currentFilter = button.dataset.filter; renderFilters(); render(); }));
}

function productCard(product) {
  const categories = categoriesOf(product);
  const images = imagesOf(product);
  const visual = images.length ? `<img src="${images[0]}" alt="${product.name}" loading="lazy">` : `<div class="product-art" style="--art-color:${product.color}"><i class="bi ${product.icon}"></i><span>HENIX</span></div>`;
  const prices = Object.values(product.prices || {}).filter(Boolean).length;
  return `<div class="col-sm-6 col-lg-4"><article class="product-card" tabindex="0" data-id="${product.id}" role="button" aria-label="Ver detalhes de ${product.name}"><div class="card-visual">${visual}<span class="category-tag">${categories.join(' · ')}</span>${images.length > 1 ? `<span class="photo-count"><i class="bi bi-images"></i> ${images.length}</span>` : ''}<span class="view-icon"><i class="bi bi-arrow-up-right"></i></span></div><div class="card-copy"><div><h3>${product.name}</h3><p>${product.description}</p></div><strong>${prices} ${prices === 1 ? 'opção' : 'opções'} de compra</strong></div></article></div>`;
}

function render() {
  const term = searchInput.value.toLowerCase().trim();
  const filtered = products.filter(p => { const categories = categoriesOf(p); return (currentFilter === 'Todos' || categories.includes(currentFilter)) && (`${p.name} ${p.description} ${categories.join(' ')}`).toLowerCase().includes(term); });
  grid.innerHTML = filtered.map(productCard).join('');
  emptyState.classList.toggle('d-none', filtered.length > 0);
  document.querySelectorAll('.product-card').forEach(card => { card.addEventListener('click', () => openProduct(Number(card.dataset.id))); card.addEventListener('keydown', e => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); openProduct(Number(card.dataset.id)); } }); });
}

function purchaseOption(label, icon, price, href) {
  if (!price) return '';
  const action = href ? `<a class="purchase-button" href="${href}" target="_blank" rel="noopener">Comprar <i class="bi bi-arrow-up-right"></i></a>` : '<span class="purchase-pending">Link em breve</span>';
  return `<div class="purchase-option"><div class="purchase-channel"><i class="bi ${icon}"></i><span>${label}</span></div><strong>${price}</strong>${action}</div>`;
}

function renderGallery(product) {
  const images = imagesOf(product);
  const art = document.querySelector('#modalArt');
  art.style.setProperty('--art-color', product.color);

  if (!images.length) {
    art.innerHTML = `<i class="bi ${product.icon}"></i>`;
    return;
  }

  const slides = images.map((image, index) => `<div class="carousel-item ${index === 0 ? 'active' : ''}"><img src="${image}" alt="${product.name} — foto ${index + 1}"></div>`).join('');
  const controls = images.length > 1 ? `<button class="carousel-control-prev" type="button" data-bs-target="#productGallery" data-bs-slide="prev" aria-label="Imagem anterior"><span class="carousel-control-prev-icon"></span></button><button class="carousel-control-next" type="button" data-bs-target="#productGallery" data-bs-slide="next" aria-label="Próxima imagem"><span class="carousel-control-next-icon"></span></button>` : '';
  const indicators = images.length > 1 ? `<div class="carousel-indicators">${images.map((_, index) => `<button type="button" data-bs-target="#productGallery" data-bs-slide-to="${index}" class="${index === 0 ? 'active' : ''}" aria-label="Ir para a imagem ${index + 1}"></button>`).join('')}</div>` : '';

  art.innerHTML = `<div id="productGallery" class="carousel slide gallery-carousel" data-bs-interval="false">${indicators}<div class="carousel-inner">${slides}</div>${controls}</div>`;
}

function openProduct(id) {
  const p = products.find(product => product.id === id);
  const prices = p.prices || {};
  const links = p.links || {};
  document.querySelector('#modalCategory').textContent = `/ ${categoriesOf(p).join(' · ')}`;
  document.querySelector('#productModalLabel').textContent = p.name;
  document.querySelector('#modalDescription').textContent = p.description;
  renderGallery(p);
  document.querySelector('#purchaseOptions').innerHTML = [purchaseOption('WhatsApp', 'bi-whatsapp', prices.whatsapp, whatsappLink(p)), purchaseOption('Mercado Livre', 'bi-bag', prices.mercadoLivre, links.mercadoLivre), purchaseOption('Shopee', 'bi-shop', prices.shopee, links.shopee)].join('');
  modal.show();
}

searchInput.addEventListener('input', render);
renderFilters();
render();
