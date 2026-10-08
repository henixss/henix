# HENIX — catálogo de impressões 3D

Catálogo estático feito com HTML, CSS, JavaScript e Bootstrap 5, pronto para publicação gratuita no GitHub Pages.

## Adicionar ou editar produtos

Abra `products.js` e copie um item existente. Altere `name`, `category`, `description`, `color`, `icon` e `image` conforme o produto. Para os preços, preencha o objeto `prices`:

```javascript
prices: {
  whatsapp: 'R$ 49',
  mercadoLivre: 'R$ 54',
  shopee: 'R$ 56'
}
```

O preço do WhatsApp usa automaticamente o número da HENIX. Para os outros canais, cole os links diretos dos anúncios:

```javascript
links: {
  mercadoLivre: 'https://produto.mercadolivre.com.br/SEU-ANUNCIO',
  shopee: 'https://shopee.com.br/SEU-ANUNCIO'
}
```

Se o preço ou o link ficar vazio, a opção correspondente não aparece como botão de compra. A logo está em `assets/henix-logo.png` e o favicon em `assets/favicon.png`.

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
