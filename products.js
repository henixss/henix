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
    description: 'Painel Imperial, exibindo a frase "MAY THE FOURTH BE WITH YOU"(QUE A QUARTA ESTEJA COM VOCÊ) em Aurebesh. Dimensões: 18 × 0,5 × 20 cm.',
    color: '#e0a15c', icon: 'bi-stars', images: ['https://media.printables.com/media/prints/470168/images/3852464_d7699839-ce95-400e-9554-189561c81bc4/thumbs/inside/1280x960/png/jedi_may4th_2023-may-04_05-12-36pm-000_customizedview10587824148.webp'],
    prices: { whatsapp: 'R$ 26', mercadoLivre: '', shopee: '' },
    links: { mercadoLivre: '', shopee: '' }
  },
  {
    id: 4,
    name: 'Pingente Programação Python', categories: ['Geek', 'Chaveiro', 'Pingente'],
    description: 'Pingente do logo Python em duas cores, ideal para programadores e entusiastas da tecnologia. Dimensões: 5 × 4,5 cm.',
    color: '#9b7bb0', icon: 'bi-rocket-takeoff', images: ['https://media.printables.com/media/prints/831780/images/6411576_071a7221-d8a6-445d-973e-242a9572a660_cfb4841f-d912-463c-a03b-0dee1daeb779/thumbs/inside/1280x960/png/screenshot-from-2024-04-04-09-40-59.webp','https://media.printables.com/media/prints/831780/images/6411527_0cde4f1c-2472-45d7-a7d7-41d17237b257_0db79d34-a9ba-48e6-af77-73cc144091bb/thumbs/inside/1280x960/jpg/img_20240404_081106.webp'],
    prices: { whatsapp: 'R$ 3', mercadoLivre: '', shopee: '' },
    links: { mercadoLivre: '', shopee: '' }
  },
  {
    id: 5,
    name: 'Caixa Para Dados RPG', categories: ['RPG', 'Geek', 'Jogos de Tabuleiro', 'Acessórios'],
    description: 'Caixa para dados de RPG, ideal para guardar e organizar seus dados com praticidade e estilo durante suas aventuras. Dimensões: 9 × 7 × 2 cm.',
    color: '#5d8ca5', icon: 'bi-grid-3x3-gap', images: ['https://media.printables.com/media/prints/616127/images/4889981_16a837ea-e8f5-40ac-9af7-e11cfa9b4bbb_d1794cfc-799a-468f-b6dc-5c9f6e0b4b48/tempimageblk7gf.gif'],
    prices: { whatsapp: 'R$ 18', mercadoLivre: '', shopee: '' },
    links: { mercadoLivre: '', shopee: '' }
  },
  {
    id: 6,
    name: "Simple Triforce Zelda", categories: ["Geek", "Zelda", "Decoração"],
    description: "Peça decorativa inspirada no universo de Zelda.",
    color: "#d17d92", icon: "bi-controller", images: [],
    prices: { whatsapp: '', mercadoLivre: '', shopee: '' },
    links: { mercadoLivre: '', shopee: '' }
  },
  {
    id: 7,
    name: "DeLorean Time Travel Car", categories: ["Geek", "Filmes", "Decoração", "Miniaturas"],
    description: "Miniatura inspirada no carro de viagem no tempo.",
    color: "#d96b3d", icon: "bi-stars", images: [],
    prices: { whatsapp: '', mercadoLivre: '', shopee: '' },
    links: { mercadoLivre: '', shopee: '' }
  },
  {
    id: 8,
    name: "Base para Cubo Mágico Estilo Grego", categories: ["Geek", "Jogos", "Decoração"],
    description: "Base decorativa para cubo mágico com estilo arquitetônico grego.",
    color: "#829b84", icon: "bi-key", images: [],
    prices: { whatsapp: '', mercadoLivre: '', shopee: '' },
    links: { mercadoLivre: '', shopee: '' }
  },
  {
    id: 9,
    name: "Emblema VW Decepticon", categories: ["Geek", "Transformers", "Automotivo", "Decoração"],
    description: "Emblema decorativo inspirado no universo Transformers e na Volkswagen.",
    color: "#e0a15c", icon: "bi-image", images: [],
    prices: { whatsapp: '', mercadoLivre: '', shopee: '' },
    links: { mercadoLivre: '', shopee: '' }
  },
  {
    id: 10,
    name: "Arma Portal do Rick", categories: ["Geek", "Rick and Morty", "Decoração", "Cosplay"],
    description: "Peça inspirada na arma portal do universo Rick and Morty.",
    color: "#9b7bb0", icon: "bi-code-slash", images: [],
    prices: { whatsapp: '', mercadoLivre: '', shopee: '' },
    links: { mercadoLivre: '', shopee: '' }
  },
  {
    id: 11,
    name: "Suporte de Livros Pilar Grego", categories: ["Casa", "Decoração", "Organização"],
    description: "Suporte de livros com visual inspirado em um pilar grego.",
    color: "#5d8ca5", icon: "bi-dice-5", images: [],
    prices: { whatsapp: '', mercadoLivre: '', shopee: '' },
    links: { mercadoLivre: '', shopee: '' }
  },
  {
    id: 12,
    name: "BMO Adventure Time", categories: ["Geek", "Adventure Time", "Decoração", "Colecionáveis"],
    description: "Peça decorativa inspirada no personagem BMO de Adventure Time.",
    color: "#d17d92", icon: "bi-controller", images: ['https://media.printables.com/media/prints/4988b8bc-59f6-4a1c-bd50-3ba80cb96d46/images/11428024_8d538a31-f2b2-4181-9f05-08ccd7060a47_24583442-c1f6-40bc-925b-2d96f2991d40/thumbs/inside/1280x960/webp/bmo.webp', 'https://media.printables.com/media/prints/07c090d3-67ee-480d-9b9b-8471b5b443cd/images/11428026_785d56f3-dbbe-4261-8fac-6e2aab4d05cb_09c4b47d-8dae-486b-8894-2fd5f40755bb/thumbs/inside/1280x960/webp/bmo-photo.webp'],
    prices: { whatsapp: '', mercadoLivre: '', shopee: '' },
    links: { mercadoLivre: '', shopee: '' }
  },
  {
    id: 13,
    name: "Batarang", categories: ["Geek", "Batman", "Cosplay", "Decoração"],
    description: "Batarang inspirado no universo Batman.",
    color: "#d96b3d", icon: "bi-stars", images: ['https://media.printables.com/media/prints/84071af9-e8bd-4760-8077-81694c41b7f8/images/10710436_5413bea5-d7fe-4d1e-bac7-0de5da3125b0_a69c7d2b-4cbf-4599-b4bf-b5937d60a3a5/thumbs/inside/1280x960/png/model.webp'],
    prices: { whatsapp: '', mercadoLivre: '', shopee: '' },
    links: { mercadoLivre: '', shopee: '' }
  },
  {
    id: 14,
    name: "Chaveiro Circuito Eletrônico", categories: ["Geek", "Chaveiro", "Tecnologia", "Pingente"],
    description: "Chaveiro com visual de circuito eletrônico.",
    color: "#829b84", icon: "bi-key", images: ['https://media.printables.com/media/prints/d16de03a-d499-4e98-b6cb-53b80d9f0b0f/images/9613840_61d5f09b-35a4-4725-a912-d411c87621f6_e12c8d29-a587-4f4d-99aa-c2b6b49564a5/thumbs/cover/320x240/png/skjermbilde-2025-04-27-122347.webp', 'https://media.printables.com/media/comment_images/3a/948ec4-a7d1-4b6a-862c-daadbaaa287a/thumbs/outside/320x240/jpg/20250519_203917.webp'],
    prices: { whatsapp: '', mercadoLivre: '', shopee: '' },
    links: { mercadoLivre: '', shopee: '' }
  },
  {
    id: 15,
    name: "Chaveiro EVA 01 Evangelion", categories: ["Geek", "Evangelion", "Chaveiro", "Anime"],
    description: "Chaveiro inspirado no EVA 01 de Neon Genesis Evangelion.",
    color: "#e0a15c", icon: "bi-image", images: ['https://media.printables.com/media/prints/1103661/images/8341720_418a8ce4-005b-4e14-a4bb-e3c09ff86a54_85f105ca-9c69-4ded-b578-8e31ccfaa860/thumbs/inside/1280x960/jpg/img_4129.webp', 'https://media.printables.com/media/comment_images/82/2f8c1c-1c01-44f9-b8d9-fccdaf99dfbe/thumbs/outside/320x240/jpg/eva-keychains.webp'],
    prices: { whatsapp: '', mercadoLivre: '', shopee: '' },
    links: { mercadoLivre: '', shopee: '' }
  },
  {
    id: 16,
    name: "Kit Porta-copos Batman", categories: ["Geek", "Batman", "Casa", "Decoração"],
    description: "Conjunto de porta-copos inspirado no universo Batman.",
    color: "#9b7bb0", icon: "bi-code-slash", images: ['https://media.printables.com/media/prints/478100/images/4028107_4886826b-7624-4cc4-b23e-82d0dfc18488/thumbs/inside/1280x960/jpg/cover.webp', 'https://media.printables.com/media/comment_images/e0/1d0ff3-51fa-4c15-9f7e-7db875bc857a/thumbs/outside/320x240/jpg/win_20250506_17_59_10_pro.webp'],
    prices: { whatsapp: '', mercadoLivre: '', shopee: '' },
    links: { mercadoLivre: '', shopee: '' }
  },
  {
    id: 17,
    name: "Poções Minecraft", categories: ["Geek", "Minecraft", "Decoração", "Colecionáveis"],
    description: "Miniaturas de poções inspiradas em Minecraft.",
    color: "#5d8ca5", icon: "bi-dice-5", images: ['https://media.printables.com/media/prints/dee0d339-4045-495c-ab56-a696aec6d67f/images/10979541_98a5adb4-34c7-4cfc-aa0d-9bb1b950c586_57cabfb4-ee5e-433f-9a36-2b97d3ab4455/thumbs/inside/1280x960/png/potion-led.webp', 'https://media.printables.com/media/comment_images/3e/3e369f-5dea-42cb-bbab-8e702baa3ddc/thumbs/outside/320x240/jpg/image_1769803446926141.webp'],
    prices: { whatsapp: '', mercadoLivre: '', shopee: '' },
    links: { mercadoLivre: '', shopee: '' }
  },
  {
    id: 18,
    name: "Eevee Low-Poly", categories: ["Geek", "Pokémon", "Decoração", "Colecionáveis"],
    description: "Miniatura low-poly inspirada no Pokémon Eevee.",
    color: "#d17d92", icon: "bi-controller", images: ['https://media.printables.com/media/prints/284/images/2017_5f084ce2-e2d3-47eb-90c2-ddd5ceacd6d8/thumbs/inside/1280x960/jpg/09922cabe7e455a53688cb862b9ab97c_preview_featured.webp', 'https://media.printables.com/media/comment_images/89/6741cb-ee0f-4a82-951f-dc898fbe62db/thumbs/outside/320x240/jpg/lxxd6pj6.webp'],
    prices: { whatsapp: '', mercadoLivre: '', shopee: '' },
    links: { mercadoLivre: '', shopee: '' }
  },
  {
    id: 19,
    name: "Quadro Anime Ranma 1/2", categories: ["Geek", "Anime", "Quadro", "Decoração"],
    description: "Quadro decorativo inspirado no anime Ranma 1/2.",
    color: "#d96b3d", icon: "bi-stars", images: ['https://media.printables.com/media/prints/1138495/images/8590722_1bb36d4f-e9bd-4473-9f29-6e7be5515342_96a9d6db-68c7-49bb-91da-9488d2814ee8/thumbs/inside/1280x960/jpg/ranma-anime-wall-art.webp'],
    prices: { whatsapp: '', mercadoLivre: '', shopee: '' },
    links: { mercadoLivre: '', shopee: '' }
  },
  {
    id: 20,
    name: "Acessórios de Cabelo Anime", categories: ["Geek", "Anime", "Acessórios", "Moda"],
    description: "Acessórios de cabelo com inspiração em anime.",
    color: "#829b84", icon: "bi-key", images: ['https://media.printables.com/media/prints/bf22cc98-9a11-44f8-964d-af8f0565830c/images/12130883_93a27e96-8857-4be8-afaa-b2db1508a627_3414ef1c-d1fc-413a-a1cf-f6d8a7eba649/thumbs/inside/1280x960/png/screenshot-2026-02-22-155847.webp'],
    prices: { whatsapp: '', mercadoLivre: '', shopee: '' },
    links: { mercadoLivre: '', shopee: '' }
  },
  {
    id: 21,
    name: "Presilhas Mina Ashiro Kaiju Nº 8", categories: ["Geek", "Anime", "Acessórios", "Cosplay"],
    description: "Presilhas inspiradas na personagem Mina Ashiro de Kaiju Nº 8.",
    color: "#e0a15c", icon: "bi-image", images: ['https://media.printables.com/media/prints/c421d4f3-45fc-4086-b223-96777020c686/images/10350114_d6f4e0d8-7fc4-4046-aa3c-8ab0777753d3_6485ddd5-b267-436c-8651-65bfcddff9b7/thumbs/inside/1280x960/png/brave_6qvyuhknlu.webp'],
    prices: { whatsapp: '', mercadoLivre: '', shopee: '' },
    links: { mercadoLivre: '', shopee: '' }
  },
  {
    id: 22,
    name: "Molde de Bombas de Banho Gato Anime", categories: ["Casa", "Anime", "Acessórios"],
    description: "Molde híbrido de gato com inspiração em anime.",
    color: "#9b7bb0", icon: "bi-code-slash", images: ['https://media.printables.com/media/prints/600810/images/4781873_a0fe9b54-eba3-4b7e-8d3a-f150f3bc34ef_a3a420c7-8b81-4320-b947-63c2f29103ac/thumbs/inside/1280x960/jpg/animecatsample.webp'],
    prices: { whatsapp: '', mercadoLivre: '', shopee: '' },
    links: { mercadoLivre: '', shopee: '' }
  },
  {
    id: 23,
    name: "Pingente Sailor Moon Space-Time Key", categories: ["Geek", "Sailor Moon", "Anime", "Pingente"],
    description: "Pingente inspirado na chave do espaço-tempo de Sailor Moon.",
    color: "#5d8ca5", icon: "bi-dice-5", images: ['https://media.printables.com/media/prints/573325/images/4585123_5ea9edb9-167e-4e69-a8dd-21309c110771/thumbs/inside/1280x960/jpg/render-photo-2.webp'],
    prices: { whatsapp: '', mercadoLivre: '', shopee: '' },
    links: { mercadoLivre: '', shopee: '' }
  },
  {
    id: 24,
    name: "Quadro Totoro", categories: ["Geek", "Studio Ghibli", "Anime", "Quadro", "Decoração"],
    description: "Quadro decorativo inspirado em Totoro.",
    color: "#d17d92", icon: "bi-controller", images: ['https://media.printables.com/media/prints/e5b94725-0c48-4d85-a849-8df8a5855d15/images/13866985_ef881687-d011-49e8-bd09-ced92e6c19f8_2bd67de5-8dc0-4bbc-bf2c-31aa082853ae/thumbs/inside/1280x960/png/1.webp', 'https://media.printables.com/media/comment_images/3c/6b39f1-6976-47fd-906e-bc43fcfb1671/thumbs/outside/320x240/jpg/image_1791103052248063.webp'],
    prices: { whatsapp: '', mercadoLivre: '', shopee: '' },
    links: { mercadoLivre: '', shopee: '' }
  },
  {
    id: 25,
    name: "Garota Anime com Suporte", categories: ["Geek", "Anime", "Decoração", "Colecionáveis"],
    description: "Miniatura de personagem anime com opção de suporte.",
    color: "#d96b3d", icon: "bi-stars", images: ['https://media.printables.com/media/prints/5071718b-c9dd-476c-9353-cdde1bf18abb/images/9406879_49b55bf9-ed5d-441d-b636-23c51b2c9f0e_6e1e41ec-1346-46fe-9c63-569bd4a24af3/thumbs/inside/1280x960/jpg/img_20250403_132108.webp'],
    prices: { whatsapp: '', mercadoLivre: '', shopee: '' },
    links: { mercadoLivre: '', shopee: '' }
  },
  {
    id: 26,
    name: "Marcador de Página Naruto", categories: ["Geek", "Naruto", "Anime", "Acessórios"],
    description: "Marcador de página inspirado em Naruto.",
    color: "#829b84", icon: "bi-key", images: ['https://media.printables.com/media/prints/1148238/images/8668165_33e9c30d-fc4d-4485-874c-01fef5e29e7f_a9b78e81-6de1-4668-88f8-ea43a4585869/thumbs/inside/1280x960/png/image-1.webp'],
    prices: { whatsapp: '', mercadoLivre: '', shopee: '' },
    links: { mercadoLivre: '', shopee: '' }
  },
  {
    id: 27,
    name: "Símbolo de Raiva Anime", categories: ["Geek", "Anime", "Decoração"],
    description: "Símbolo decorativo inspirado na linguagem visual dos animes.",
    color: "#e0a15c", icon: "bi-image", images: [],
    prices: { whatsapp: '', mercadoLivre: '', shopee: '' },
    links: { mercadoLivre: '', shopee: '' }
  },
  {
    id: 28,
    name: "Suguru Geto Jujutsu Kaisen", categories: ["Geek", "Jujutsu Kaisen", "Anime", "Colecionáveis"],
    description: "Peça inspirada no personagem Suguru Geto de Jujutsu Kaisen.",
    color: "#9b7bb0", icon: "bi-code-slash", images: [],
    prices: { whatsapp: '', mercadoLivre: '', shopee: '' },
    links: { mercadoLivre: '', shopee: '' }
  },
  {
    id: 29,
    name: "Pingente Sailor Moon", categories: ["Geek", "Sailor Moon", "Anime", "Pingente"],
    description: "Pingente inspirado no universo Sailor Moon.",
    color: "#5d8ca5", icon: "bi-dice-5", images: [],
    prices: { whatsapp: '', mercadoLivre: '', shopee: '' },
    links: { mercadoLivre: '', shopee: '' }
  },
  {
    id: 30,
    name: "Chaveiro Kuromi", categories: ["Geek", "Sanrio", "Anime", "Chaveiro"],
    description: "Chaveiro da Kuromi com troca fácil de filamento.",
    color: "#d17d92", icon: "bi-controller", images: [],
    prices: { whatsapp: '', mercadoLivre: '', shopee: '' },
    links: { mercadoLivre: '', shopee: '' }
  },
  {
    id: 31,
    name: "Brinco Kaonashi", categories: ["Geek", "Studio Ghibli", "Anime", "Acessórios"],
    description: "Brinco inspirado no personagem Kaonashi.",
    color: "#d96b3d", icon: "bi-stars", images: [],
    prices: { whatsapp: '', mercadoLivre: '', shopee: '' },
    links: { mercadoLivre: '', shopee: '' }
  },
  {
    id: 32,
    name: "Peça de Cabelo Skull and Sword Nelliel", categories: ["Geek", "Bleach", "Anime", "Cosplay"],
    description: "Peça de cabelo inspirada na máscara de Nelliel de Bleach.",
    color: "#829b84", icon: "bi-key", images: [],
    prices: { whatsapp: '', mercadoLivre: '', shopee: '' },
    links: { mercadoLivre: '', shopee: '' }
  },
  {
    id: 33,
    name: "Suporte para Espada Sting", categories: ["Geek", "Senhor dos Anéis", "Decoração", "Organização"],
    description: "Suporte decorativo para a espada Sting.",
    color: "#e0a15c", icon: "bi-image", images: [],
    prices: { whatsapp: '', mercadoLivre: '', shopee: '' },
    links: { mercadoLivre: '', shopee: '' }
  },
  {
    id: 34,
    name: "Decoração Hunter x Hunter", categories: ["Geek", "Hunter x Hunter", "Anime", "Decoração"],
    description: "Peça decorativa inspirada em Hunter x Hunter.",
    color: "#9b7bb0", icon: "bi-code-slash", images: [],
    prices: { whatsapp: '', mercadoLivre: '', shopee: '' },
    links: { mercadoLivre: '', shopee: '' }
  },
  {
    id: 35,
    name: "Kit Kunai", categories: ["Geek", "Naruto", "Anime", "Cosplay"],
    description: "Kit de kunais inspirado em Naruto.",
    color: "#5d8ca5", icon: "bi-dice-5", images: [],
    prices: { whatsapp: '', mercadoLivre: '', shopee: '' },
    links: { mercadoLivre: '', shopee: '' }
  },
  {
    id: 36,
    name: "Eeveevolutions Kanto", categories: ["Geek", "Pokémon", "Decoração", "Colecionáveis"],
    description: "Conjunto com Eevee e evoluções da região de Kanto.",
    color: "#d17d92", icon: "bi-controller", images: [],
    prices: { whatsapp: '', mercadoLivre: '', shopee: '' },
    links: { mercadoLivre: '', shopee: '' }
  },
  {
    id: 37,
    name: "Pokébola", categories: ["Geek", "Pokémon", "Decoração", "Colecionáveis"],
    description: "Pokébola decorativa inspirada no universo Pokémon.",
    color: "#d96b3d", icon: "bi-stars", images: [],
    prices: { whatsapp: '', mercadoLivre: '', shopee: '' },
    links: { mercadoLivre: '', shopee: '' }
  },
  {
    id: 38,
    name: "Batarang Dobrável Batman", categories: ["Geek", "Batman", "Cosplay", "Decoração"],
    description: "Batarang dobrável inspirado em Batman Arkham Knight.",
    color: "#829b84", icon: "bi-key", images: [],
    prices: { whatsapp: '', mercadoLivre: '', shopee: '' },
    links: { mercadoLivre: '', shopee: '' }
  },
  {
    id: 39,
    name: "Pokébola Decorativa", categories: ["Geek", "Pokémon", "Decoração"],
    description: "Peça decorativa em formato de Pokébola.",
    color: "#e0a15c", icon: "bi-image", images: [],
    prices: { whatsapp: '', mercadoLivre: '', shopee: '' },
    links: { mercadoLivre: '', shopee: '' }
  },
  {
    id: 40,
    name: "Máscara Sub-Zero Fortnite", categories: ["Geek", "Fortnite", "Cosplay", "Acessórios"],
    description: "Máscara inspirada no personagem Sub-Zero.",
    color: "#9b7bb0", icon: "bi-code-slash", images: [],
    prices: { whatsapp: '', mercadoLivre: '', shopee: '' },
    links: { mercadoLivre: '', shopee: '' }
  },
  {
    id: 41,
    name: "Decoração Como Treinar o Seu Dragão", categories: ["Geek", "Filmes", "Decoração", "Colecionáveis"],
    description: "Peça decorativa inspirada em Como Treinar o Seu Dragão.",
    color: "#5d8ca5", icon: "bi-dice-5", images: [],
    prices: { whatsapp: '', mercadoLivre: '', shopee: '' },
    links: { mercadoLivre: '', shopee: '' }
  },
  {
    id: 42,
    name: "Crânio Cubone Pokémon", categories: ["Geek", "Pokémon", "Decoração", "Colecionáveis"],
    description: "Peça decorativa inspirada no crânio do Pokémon Cubone.",
    color: "#d17d92", icon: "bi-controller", images: [],
    prices: { whatsapp: '', mercadoLivre: '', shopee: '' },
    links: { mercadoLivre: '', shopee: '' }
  },
  {
    id: 43,
    name: "Máscara Sakai Ghost of Tsushima", categories: ["Geek", "Games", "Cosplay", "Acessórios"],
    description: "Máscara inspirada no clã Sakai de Ghost of Tsushima.",
    color: "#d96b3d", icon: "bi-stars", images: [],
    prices: { whatsapp: '', mercadoLivre: '', shopee: '' },
    links: { mercadoLivre: '', shopee: '' }
  },
  {
    id: 44,
    name: "Xadrez Pokémon", categories: ["Geek", "Pokémon", "Jogos de Tabuleiro", "Colecionáveis"],
    description: "Conjunto de xadrez inspirado no universo Pokémon.",
    color: "#829b84", icon: "bi-key", images: [],
    prices: { whatsapp: '', mercadoLivre: '', shopee: '' },
    links: { mercadoLivre: '', shopee: '' }
  }
];
