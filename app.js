const grid = document.querySelector('#productGrid');
const emptyState = document.querySelector('#emptyState');
const searchInput = document.querySelector('#searchInput');
const modal = new bootstrap.Modal(document.querySelector('#productModal'));
let currentFilter = 'Todos';

function productCard(product) {
  const visual = product.image
    ? `<img src="${product.image}" alt="${product.name}" loading="lazy">`
    : `<div class="product-art" style="--art-color:${product.color}"><i class="bi ${product.icon}"></i><span>FORMA<span>3D</span></span></div>`;
  return `<div class="col-sm-6 col-lg-4"><article class="product-card" tabindex="0" data-id="${product.id}" role="button" aria-label="Ver detalhes de ${product.name}"><div class="card-visual">${visual}<span class="category-tag">${product.category}</span><span class="view-icon"><i class="bi bi-arrow-up-right"></i></span></div><div class="card-copy"><div><h3>${product.name}</h3><p>${product.description}</p></div><strong>${product.price}</strong></div></article></div>`;
}

function render() {
  const term = searchInput.value.toLowerCase().trim();
  const filtered = products.filter(p => (currentFilter === 'Todos' || p.category === currentFilter) && (`${p.name} ${p.description} ${p.category}`).toLowerCase().includes(term));
  grid.innerHTML = filtered.map(productCard).join('');
  emptyState.classList.toggle('d-none', filtered.length > 0);
  document.querySelectorAll('.product-card').forEach(card => { card.addEventListener('click', () => openProduct(Number(card.dataset.id))); card.addEventListener('keydown', e => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); openProduct(Number(card.dataset.id)); } }); });
}

function openProduct(id) {
  const p = products.find(product => product.id === id);
  document.querySelector('#modalCategory').textContent = `/ ${p.category}`;
  document.querySelector('#productModalLabel').textContent = p.name;
  document.querySelector('#modalDescription').textContent = p.description;
  document.querySelector('#modalPrice').textContent = p.price;
  document.querySelector('#modalArt').style.setProperty('--art-color', p.color);
  document.querySelector('#modalArt').innerHTML = p.image ? `<img src="${p.image}" alt="${p.name}">` : `<i class="bi ${p.icon}"></i>`;
  document.querySelector('#modalWhatsapp').href = `https://wa.me/5500000000000?text=${encodeURIComponent(`Oi! Tenho interesse na peça ${p.name}.`)}`;
  modal.show();
}

document.querySelectorAll('.filter-btn').forEach(button => button.addEventListener('click', () => { currentFilter = button.dataset.filter; document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active')); button.classList.add('active'); render(); }));
searchInput.addEventListener('input', render);
render();
