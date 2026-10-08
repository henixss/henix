const WHATSAPP = '5522998367881';
const grid = document.querySelector('#productGrid');
const emptyState = document.querySelector('#emptyState');
const searchInput = document.querySelector('#searchInput');
const modal = new bootstrap.Modal(document.querySelector('#productModal'));
let currentFilter = 'Todos';

function whatsappLink(product) {
  return `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(`Oi! Tenho interesse na peça ${product.name}.`)}`;
}

function productCard(product) {
  const visual = product.image ? `<img src="${product.image}" alt="${product.name}" loading="lazy">` : `<div class="product-art" style="--art-color:${product.color}"><i class="bi ${product.icon}"></i><span>HENIX</span></div>`;
  const prices = Object.values(product.prices || {}).filter(Boolean).length;
  return `<div class="col-sm-6 col-lg-4"><article class="product-card" tabindex="0" data-id="${product.id}" role="button" aria-label="Ver detalhes de ${product.name}"><div class="card-visual">${visual}<span class="category-tag">${product.category}</span><span class="view-icon"><i class="bi bi-arrow-up-right"></i></span></div><div class="card-copy"><div><h3>${product.name}</h3><p>${product.description}</p></div><strong>${prices} ${prices === 1 ? 'opção' : 'opções'} de compra</strong></div></article></div>`;
}

function render() {
  const term = searchInput.value.toLowerCase().trim();
  const filtered = products.filter(p => (currentFilter === 'Todos' || p.category === currentFilter) && (`${p.name} ${p.description} ${p.category}`).toLowerCase().includes(term));
  grid.innerHTML = filtered.map(productCard).join('');
  emptyState.classList.toggle('d-none', filtered.length > 0);
  document.querySelectorAll('.product-card').forEach(card => { card.addEventListener('click', () => openProduct(Number(card.dataset.id))); card.addEventListener('keydown', e => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); openProduct(Number(card.dataset.id)); } }); });
}

function purchaseOption(label, icon, price, href, enabled = true) {
  if (!price) return '';
  const action = enabled && href ? `<a class="purchase-button" href="${href}" target="_blank" rel="noopener">Comprar <i class="bi bi-arrow-up-right"></i></a>` : '<span class="purchase-pending">Link em breve</span>';
  return `<div class="purchase-option"><div class="purchase-channel"><i class="bi ${icon}"></i><span>${label}</span></div><strong>${price}</strong>${action}</div>`;
}

function openProduct(id) {
  const p = products.find(product => product.id === id);
  const prices = p.prices || {};
  const links = p.links || {};
  document.querySelector('#modalCategory').textContent = `/ ${p.category}`;
  document.querySelector('#productModalLabel').textContent = p.name;
  document.querySelector('#modalDescription').textContent = p.description;
  document.querySelector('#modalArt').style.setProperty('--art-color', p.color);
  document.querySelector('#modalArt').innerHTML = p.image ? `<img src="${p.image}" alt="${p.name}">` : `<i class="bi ${p.icon}"></i>`;
  document.querySelector('#purchaseOptions').innerHTML = [
    purchaseOption('WhatsApp', 'bi-whatsapp', prices.whatsapp, whatsappLink(p)),
    purchaseOption('Mercado Livre', 'bi-bag', prices.mercadoLivre, links.mercadoLivre),
    purchaseOption('Shopee', 'bi-shop', prices.shopee, links.shopee)
  ].join('');
  modal.show();
}

document.querySelectorAll('.filter-btn').forEach(button => button.addEventListener('click', () => { currentFilter = button.dataset.filter; document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active')); button.classList.add('active'); render(); }));
searchInput.addEventListener('input', render);
render();
