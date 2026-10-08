/*
  COMO ADICIONAR UMA PEÇA:
  1. Copie um bloco abaixo.
  2. Troque nome, categoria, descrição e imagem.
  3. Em prices, informe um preço para cada canal.
  4. Em links, cole o link direto do anúncio do Mercado Livre e da Shopee.
  5. Deixe price ou url vazio para esconder aquela opção de compra.
*/
const products = [
  {
    id: 1,
    name: 'Vaso Orbital', category: 'Casa',
    description: 'Vaso escultural com curvas orgânicas para plantas pequenas e grandes ideias.',
    color: '#d96b3d', icon: 'bi-flower1', image: '',
    prices: { whatsapp: 'R$ 49', mercadoLivre: '', shopee: '' },
    links: { mercadoLivre: '', shopee: '' }
  },
  {
    id: 2,
    name: 'Suporte Loop', category: 'Organização',
    description: 'Suporte minimalista para fones, cabos e tudo aquilo que merece seu lugar.',
    color: '#829b84', icon: 'bi-headphones', image: '',
    prices: { whatsapp: 'R$ 29', mercadoLivre: 'R$ 34', shopee: 'R$ 36' },
    links: { mercadoLivre: '', shopee: '' }
  },
  {
    id: 3,
    name: 'Porta-incenso Arco', category: 'Casa',
    description: 'Uma pequena peça de presença marcante para seus momentos de pausa.',
    color: '#e0a15c', icon: 'bi-stars', image: '',
    prices: { whatsapp: 'R$ 35', mercadoLivre: 'R$ 40', shopee: 'R$ 42' },
    links: { mercadoLivre: '', shopee: '' }
  },
  {
    id: 4,
    name: 'Miniatura Astro', category: 'Presentes',
    description: 'Um presente divertido para quem coleciona histórias e objetos únicos.',
    color: '#9b7bb0', icon: 'bi-rocket-takeoff', image: '',
    prices: { whatsapp: 'R$ 39', mercadoLivre: 'R$ 44', shopee: 'R$ 46' },
    links: { mercadoLivre: '', shopee: '' }
  },
  {
    id: 5,
    name: 'Organizador Grid', category: 'Organização',
    description: 'Módulos que se adaptam à sua mesa e deixam o essencial sempre à mão.',
    color: '#5d8ca5', icon: 'bi-grid-3x3-gap', image: '',
    prices: { whatsapp: 'R$ 42', mercadoLivre: 'R$ 47', shopee: 'R$ 49' },
    links: { mercadoLivre: '', shopee: '' }
  },
  {
    id: 6,
    name: 'Cachepô Pétala', category: 'Presentes',
    description: 'Textura delicada e design leve para presentear com mais significado.',
    color: '#d17d92', icon: 'bi-heart', image: '',
    prices: { whatsapp: 'R$ 45', mercadoLivre: 'R$ 50', shopee: 'R$ 52' },
    links: { mercadoLivre: '', shopee: '' }
  }
];
