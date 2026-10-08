# HENIX — catálogo de impressões 3D

Catálogo estático feito com HTML, CSS, JavaScript e Bootstrap 5, pronto para publicação gratuita no GitHub Pages.

## Adicionar ou editar produtos

Abra `products.js` e copie um item existente. Use `categories` para cadastrar uma ou várias categorias e `images` para cadastrar uma ou várias fotos:

```javascript
{
  id: 7,
  name: 'Dragão Articulado',
  categories: ['Presentes', 'Colecionáveis', 'Decoração'],
  description: 'Dragão articulado impresso em 3D.',
  color: '#6d5cae',
  icon: 'bi-stars',
  images: [
    'https://seu-site.com/fotos/dragao-frente.jpg',
    'https://seu-site.com/fotos/dragao-lado.jpg',
    'https://seu-site.com/fotos/dragao-detalhe.jpg'
  ],
  prices: {
    whatsapp: 'R$ 79',
    mercadoLivre: 'R$ 84',
    shopee: 'R$ 86'
  },
  links: {
    mercadoLivre: 'https://produto.mercadolivre.com.br/SEU-ANUNCIO',
    shopee: 'https://shopee.com.br/SEU-ANUNCIO'
  }
}
```

No catálogo, o primeiro item de `images` aparece no card. Ao abrir o produto, as outras imagens aparecem como miniaturas clicáveis. Os filtros são criados automaticamente com base em todas as categorias usadas nos produtos.

O preço do WhatsApp usa automaticamente o número da HENIX. Se o preço ou o link de um canal ficar vazio, a opção correspondente não aparece como botão de compra. A logo está em `assets/henix-logo.png` e o favicon em `assets/favicon.png`.

## Publicar no GitHub Pages

1. Crie um repositório público no GitHub, por exemplo `catalogo-henix`.
2. Dentro desta pasta, rode:

```bash
git init
git add .
git commit -m "Cria catálogo HENIX"
git branch -M main
git remote add origin https://github.com/SEU-USUARIO/catalogo-henix.git
git push -u origin main
```

3. No GitHub, abra **Settings → Pages**.
4. Em **Build and deployment**, escolha **Deploy from a branch**, branch `main` e pasta `/ (root)`.
5. Salve. O endereço será parecido com `https://SEU-USUARIO.github.io/catalogo-henix/`.
