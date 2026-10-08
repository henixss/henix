# Plano — catálogo HENIX

## Abordagem

Site local simples, sem serviços gerenciados, para publicação gratuita no GitHub Pages. A página é estática e usa Bootstrap 5 via CDN. O catálogo é alimentado pelo array `products` em `products.js`, incluindo preço e link de compra para WhatsApp, Mercado Livre e Shopee.

## Atualizações desta versão

- Marca alterada de Forma3D para HENIX.
- Logo fornecida pelo usuário incorporada em `assets/henix-logo.png`.
- Favicon gerado em `assets/favicon.png`.
- WhatsApp atualizado para +55 22 99836-7881.
- Modal de produto com três opções de compra e preços independentes.
- Mercado Livre e Shopee aparecem somente quando preço e link forem preenchidos.

## Estrutura

- `index.html`: estrutura da página, logo, favicon e modal de compra.
- `styles.css`: identidade visual, layout responsivo e componentes de marketplace.
- `products.js`: fonte de dados editável de produtos, preços e links.
- `app.js`: renderização, busca, filtros, WhatsApp e canais de compra.
- `assets/henix-logo.png`: logo original fornecida.
- `assets/favicon.png`: versão reduzida usada no navegador.
- `README.md`: instruções de manutenção e publicação.
