const products = [
  {
    id: 1,
    name: 'Hatsune Miku Lego', categories: ['Geek','Hatsune Miku'],
    description: 'Miniatura da Hatsune Miku em versão chibi, com visual icônico e detalhes encantadores para decorar sua coleção. Dimensões: 10,73 × 4,76 × 10,09 cm.',
    color: '#d96b3d', icon: 'bi-flower1', images: ['https://media.printables.com/media/prints/821d0207-40c2-4291-af6a-fe7dedd26b30/images/10877382_e524683e-302e-4c02-81c8-36b8a08f82a6_addf9d46-2e0f-46eb-b98a-c5374910de4e/thumbs/inside/1280x960/png/hm.webp',''],
    prices: { whatsapp: 'R$ 23', mercadoLivre: '', shopee: '' },
    links: { mercadoLivre: '', shopee: '' }
  },
  {
    id: 2,
    name: 'Chaveiro Decepticon', categories: ['Geek', 'Chaveiro', 'Pingente', 'Transformers'],
    description: 'Pingente dos Decepticons, com design marcante inspirado no universo Transformers, ideal para fãs e colecionadores. Dimensões: 0,6 × 3,5 × 3,7 cm.',
    color: '#829b84', icon: 'bi-headphones', images: ['https://media.printables.com/media/prints/9fb286f9-201a-4180-ba5c-612d8c30cc10/images/9910888_9be79367-939d-4ed2-8ebf-01d114382725_d664a013-875a-42fd-87dc-3e02261321df/thumbs/inside/1280x960/jpeg/img_2100.webp','https://media.printables.com/media/prints/f16a5916-bddf-4124-b6e6-abd2d87e138b/images/9910913_79e12053-fead-4e86-aa2e-6968ffd09316_c9ccffc8-9714-4c02-9366-52ca2bf5c1bf/thumbs/inside/1280x960/png/chatgpt-image-31-mai-2025-13_20_04.webp'],
    prices: { whatsapp: 'R$ 3', mercadoLivre: '', shopee: '' },
    links: { mercadoLivre: '', shopee: '' }
  },
  {
    id: 3,
    name: 'Painel Imperial', categories: ['Geek', 'Star Wars', 'Quadro', 'Decoração'],
    description: 'Painel Imperial, exibindo a frase "MAY THE FOURTH BE WITH YOU"(QUE A QUARTA ESTEJA COM VOCÊ) em Aurebesh.. Dimensões: 18 × 0,5 × 20 cm.',
    color: '#e0a15c', icon: 'bi-stars', images: ['https://media.printables.com/media/prints/470168/images/3852464_d7699839-ce95-400e-9554-189561c81bc4/thumbs/inside/1280x960/png/jedi_may4th_2023-may-04_05-12-36pm-000_customizedview10587824148.webp'],
    prices: { whatsapp: 'R$ 26', mercadoLivre: '', shopee: '' },
    links: { mercadoLivre: '', shopee: '' }
  },
  {
    id: 4,
    name: 'Pingente Programação Python', categories: ['Geek', 'Chaveiro', 'Pingente'],
    description: 'Pingente do logo Python em duas cores, ideal para programadores e entusiastas da tecnologia. Dimensões estimadas: 5 × 4,5 cm.',
    color: '#9b7bb0', icon: 'bi-rocket-takeoff', images: ['https://media.printables.com/media/prints/831780/images/6411576_071a7221-d8a6-445d-973e-242a9572a660_cfb4841f-d912-463c-a03b-0dee1daeb779/thumbs/inside/1280x960/png/screenshot-from-2024-04-04-09-40-59.webp','https://media.printables.com/media/prints/831780/images/6411527_0cde4f1c-2472-45d7-a7d7-41d17237b257_0db79d34-a9ba-48e6-af77-73cc144091bb/thumbs/inside/1280x960/jpg/img_20240404_081106.webp'],
    prices: { whatsapp: 'R$ 3', mercadoLivre: '', shopee: '' },
    links: { mercadoLivre: '', shopee: '' }
  },
  {
    id: 5,
    name: 'Organizador Grid', categories: ['Organização', 'Escritório'],
    description: 'Módulos que se adaptam à sua mesa e deixam o essencial sempre à mão.',
    color: '#5d8ca5', icon: 'bi-grid-3x3-gap', images: [],
    prices: { whatsapp: 'R$ 42', mercadoLivre: 'R$ 47', shopee: 'R$ 49' },
    links: { mercadoLivre: '', shopee: '' }
  },
  {
    id: 6,
    name: 'Cachepô Pétala', categories: ['Presentes', 'Casa', 'Decoração'],
    description: 'Textura delicada e design leve para presentear com mais significado.',
    color: '#d17d92', icon: 'bi-heart', images: [],
    prices: { whatsapp: 'R$ 45', mercadoLivre: 'R$ 50', shopee: 'R$ 52' },
    links: { mercadoLivre: '', shopee: '' }
  }
];
