# Forma3D — catálogo de impressões 3D

Catálogo estático feito com **HTML, CSS, JavaScript e Bootstrap 5**. Não precisa de banco de dados nem servidor: é ideal para publicar gratuitamente no GitHub Pages.

## Adicionar ou editar produtos

Abra `products.js` e copie um item existente. Altere:

- `name`: nome da peça;
- `category`: `Casa`, `Presentes` ou `Organização`;
- `price`: texto do preço;
- `description`: descrição curta;
- `color`: cor da arte automática quando não houver foto;
- `icon`: um ícone do [Bootstrap Icons](https://icons.getbootstrap.com/);
- `image`: link público da foto. Se ficar vazio, a arte colorida é usada.

O número do WhatsApp está em `index.html` e `app.js`. Troque `5500000000000` pelo seu número com código do país, somente números.

## Publicar no GitHub Pages

1. Crie um repositório público no GitHub, por exemplo `catalogo-3d`.
2. Dentro desta pasta, rode:

```bash
git init
git add .
git commit -m "Cria catálogo de impressões 3D"
git branch -M main
git remote add origin https://github.com/SEU-USUARIO/catalogo-3d.git
git push -u origin main
```

3. No GitHub, abra **Settings → Pages**.
4. Em **Build and deployment**, escolha **Deploy from a branch**, branch `main` e pasta `/ (root)`.
5. Salve. O endereço será parecido com `https://SEU-USUARIO.github.io/catalogo-3d/`.

O site usa CDNs para Bootstrap, Bootstrap Icons e a fonte. Por isso, ele não precisa de uma etapa de build.
