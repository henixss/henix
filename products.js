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
    color: "#d17d92", icon: "bi-controller", images: ['https://media.printables.com/media/prints/415707/images/3449181_9e2abecb-e7c7-43c0-bcdd-86eed26c1c6e/thumbs/inside/1280x960/png/simple-triforce-with-godess-symbols-from-zelda.webp', 'https://media.printables.com/media/comment_images/b0/b1d3f3-5337-4a1d-8dc4-e3cc1362dc64/thumbs/outside/320x240/jpg/20231201_221045.webp'],
    prices: { whatsapp: '', mercadoLivre: '', shopee: '' },
    links: { mercadoLivre: '', shopee: '' }
  },
  {
    id: 7,
    name: "DeLorean Time Travel Car", categories: ["Geek", "Filmes", "Decoração", "Miniaturas"],
    description: "Miniatura inspirada no carro de viagem no tempo.",
    color: "#d96b3d", icon: "bi-stars", images: ['https://media.printables.com/media/prints/ed101061-7385-4007-9066-8d0d5324fb3f/images/11218471_9450cd8a-50d0-4425-ab7d-dd880bd4e399_aa7e87b6-9d88-4d2e-99bb-00dbf5bb603e/thumbs/inside/1280x960/png/game-over15.webp'],
    prices: { whatsapp: '', mercadoLivre: '', shopee: '' },
    links: { mercadoLivre: '', shopee: '' }
  },
  {
    id: 8,
    name: "Base para Cubo Mágico Estilo Grego", categories: ["Geek", "Jogos", "Decoração"],
    description: "Base decorativa para cubo mágico com estilo arquitetônico grego.",
    color: "#829b84", icon: "bi-key", images: ['https://media.printables.com/media/prints/1001902/images/7625899_f9884c3e-2579-4051-b664-43c60b889fb0_03054168-29a2-4e8e-badf-12e9fe10e56e/thumbs/inside/1280x960/png/0018.webp'],
    prices: { whatsapp: '', mercadoLivre: '', shopee: '' },
    links: { mercadoLivre: '', shopee: '' }
  },
  {
    id: 9,
    name: "Emblema VW Decepticon", categories: ["Geek", "Transformers", "Automotivo", "Decoração"],
    description: "Emblema decorativo inspirado no universo Transformers e na Volkswagen.",
    color: "#e0a15c", icon: "bi-image", images: ['https://media.printables.com/media/prints/c714d82c-7ce3-48fe-862b-3e18a8dc2145/images/9918571_e022af47-66e4-49be-bbd3-d8c49552e519_bbd9f21c-2fb4-40f5-9576-e9dca631f73b/thumbs/inside/1280x960/png/screenshot-2025-06-01-130925.webp', 'https://media.printables.com/media/prints/bde79e36-cbac-4790-86e6-6b06067e7384/images/9920125_651fce29-763c-4148-84df-6c44e80e9c7b_4e1c9a60-a4fd-40f9-a74b-d060367d549a/thumbs/inside/1280x960/jpeg/img_2119.webp'],
    prices: { whatsapp: '', mercadoLivre: '', shopee: '' },
    links: { mercadoLivre: '', shopee: '' }
  },
  {
    id: 10,
    name: "Arma Portal do Rick", categories: ["Geek", "Rick and Morty", "Decoração", "Cosplay"],
    description: "Peça inspirada na arma portal do universo Rick and Morty.",
    color: "#9b7bb0", icon: "bi-code-slash", images: ['https://media.printables.com/media/prints/932118/images/7104761_e1d1b028-27dc-487d-9f4d-6a4a848f7192_e71d40e2-cf1d-46b7-929c-491d02cd41be/thumbs/inside/1280x960/jpg/img_2767.webp', 'https://media.printables.com/media/comment_images/4e/8c59a8-e52b-421c-80d2-d6771d2cba25/thumbs/outside/320x240/jpg/photo-aug-01-2025-4-18-03-pm.webp'],
    prices: { whatsapp: '', mercadoLivre: '', shopee: '' },
    links: { mercadoLivre: '', shopee: '' }
  },
  {
    id: 11,
    name: "Suporte de Livros Pilar Grego", categories: ["Casa", "Decoração", "Organização"],
    description: "Suporte de livros com visual inspirado em um pilar grego.",
    color: "#5d8ca5", icon: "bi-dice-5", images: ['https://media.printables.com/media/prints/180175/images/1690468_bda163ab-fc09-433c-aa0a-b079daf6a1eb/thumbs/inside/1280x960/png/greek-bookend.webp', 'https://media.printables.com/media/prints/180175/images/1684822_4e1e5662-1ed6-4ed2-8cb0-a6027989bd28/thumbs/inside/1280x960/png/image2.webp'],
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
    color: "#e0a15c", icon: "bi-image", images: ['https://media.printables.com/media/prints/1209229/images/9079462_1c6d7f39-3162-4735-9358-0abf742a4185_ab0fa90d-7de0-4646-a02b-505e1d697702/thumbs/inside/1280x960/jpg/20250224_170902.webp'],
    prices: { whatsapp: '', mercadoLivre: '', shopee: '' },
    links: { mercadoLivre: '', shopee: '' }
  },
  {
    id: 28,
    name: "Suguru Geto Jujutsu Kaisen", categories: ["Geek", "Jujutsu Kaisen", "Anime", "Colecionáveis"],
    description: "Peça inspirada no personagem Suguru Geto de Jujutsu Kaisen.",
    color: "#9b7bb0", icon: "bi-code-slash", images: ['https://media.printables.com/media/prints/1c9ca538-2acf-4caa-8725-e85e5c273e9a/images/12060858_d5d7f8e1-1cb0-4a97-aac6-90388a6121e3_edcacd71-f4d8-4485-a57c-1fc7bef09f63/thumbs/inside/1280x960/jpg/a6700154.webp'],
    prices: { whatsapp: '', mercadoLivre: '', shopee: '' },
    links: { mercadoLivre: '', shopee: '' }
  },
  {
    id: 29,
    name: "Pingente Sailor Moon", categories: ["Geek", "Sailor Moon", "Anime", "Pingente"],
    description: "Pingente inspirado no universo Sailor Moon.",
    color: "#5d8ca5", icon: "bi-dice-5", images: ['https://media.printables.com/media/prints/571075/images/4568518_8aec5b91-3307-4297-b031-d2ee4c2a7447/thumbs/inside/1280x960/png/sailormoon-v1.webp', 'https://media.printables.com/media/comment_images/ee/507887-6da6-477b-8887-f2fcea823c85/thumbs/outside/320x240/jpg/20240315_120555.webp'],
    prices: { whatsapp: '', mercadoLivre: '', shopee: '' },
    links: { mercadoLivre: '', shopee: '' }
  },
  {
    id: 30,
    name: "Chaveiro Kuromi", categories: ["Geek", "Sanrio", "Anime", "Chaveiro"],
    description: "Chaveiro da Kuromi com troca fácil de filamento.",
    color: "#d17d92", icon: "bi-controller", images: ['https://media.printables.com/media/prints/692140/images/5441413_1d3d5f7b-2f82-4804-b908-b45e100357b4_868ad6c9-7178-4d16-991a-c1227c728ce8/thumbs/inside/1280x960/jpg/img_20231224_1102142122.webp', 'https://media.printables.com/media/comment_images/47/b96b06-e128-40d9-a4b3-2bcf8141b1e3/thumbs/outside/320x240/jpg/1000008453.webp'],
    prices: { whatsapp: '', mercadoLivre: '', shopee: '' },
    links: { mercadoLivre: '', shopee: '' }
  },
  {
    id: 31,
    name: "Brinco Kaonashi", categories: ["Geek", "Studio Ghibli", "Anime", "Acessórios"],
    description: "Brinco inspirado no personagem Kaonashi.",
    color: "#d96b3d", icon: "bi-stars", images: ['https://media.printables.com/media/prints/810861/images/6269403_cdaa711c-3c05-4b4f-a520-e087da10fe9d_083ab9a9-a051-41d3-91e6-09b568c2e292/thumbs/inside/1280x960/jpeg/photo1710801304-1.webp', 'https://media.printables.com/media/comment_images/d5/d9805e-c1db-47eb-981a-71d89a26f5e3/thumbs/outside/320x240/jpg/243.webp'],
    prices: { whatsapp: '', mercadoLivre: '', shopee: '' },
    links: { mercadoLivre: '', shopee: '' }
  },
  {
    id: 32,
    name: "Peça de Cabelo Skull and Sword Nelliel", categories: ["Geek", "Bleach", "Anime", "Cosplay"],
    description: "Peça de cabelo inspirada na máscara de Nelliel de Bleach.",
    color: "#829b84", icon: "bi-key", images: ['https://media.printables.com/media/prints/605ceeb1-ea29-47e7-a15c-10c4581422b4/images/10665888_941e9e70-1bfa-419b-9451-49cf0dc6c3ce_4d188ed1-5538-415a-8817-f6e16aeb3c54/thumbs/inside/1280x960/jpeg/hairpiece-zoomed-in.webp', 'https://media.printables.com/media/comment_images/01/fc2b16-3959-488f-be26-7f227a047a53/thumbs/outside/320x240/jpg/image_1764936761571383.webp'],
    prices: { whatsapp: '', mercadoLivre: '', shopee: '' },
    links: { mercadoLivre: '', shopee: '' }
  },
  {
    id: 34,
    name: "Decoração Hunter x Hunter", categories: ["Geek", "Hunter x Hunter", "Anime", "Decoração"],
    description: "Peça decorativa inspirada em Hunter x Hunter.",
    color: "#9b7bb0", icon: "bi-code-slash", images: ['https://media.printables.com/media/prints/3195d4db-7af0-43a9-b174-b29de5eaca9f/images/13812463_3d7ab3c4-a2cb-45b8-8e94-4a9f747beba2_daeed43b-de02-430a-a824-29836ebb95c1/thumbs/inside/1280x960/png/screenshot-2026-09-14-184029.webp'],
    prices: { whatsapp: '', mercadoLivre: '', shopee: '' },
    links: { mercadoLivre: '', shopee: '' }
  },
  {
    id: 35,
    name: "Kit Kunai", categories: ["Geek", "Naruto", "Anime", "Cosplay"],
    description: "Kit de kunais inspirado em Naruto.",
    color: "#5d8ca5", icon: "bi-dice-5", images: ['https://media.printables.com/media/prints/679197/images/5347119_aa6ff059-0c5b-4702-9841-e1e8971cb666_ec917e2c-890d-4e98-856a-d2734d342d55/thumbs/inside/1280x960/jpg/dsc08874.webp', 'https://media.printables.com/media/comment_images/eb/b43bc2-937e-4481-8df6-b23329d010e4/thumbs/outside/320x240/jpg/20260927_123520.webp'],
    prices: { whatsapp: '', mercadoLivre: '', shopee: '' },
    links: { mercadoLivre: '', shopee: '' }
  },
  {
    id: 36,
    name: "Eeveevolutions Kanto", categories: ["Geek", "Pokémon", "Decoração", "Colecionáveis"],
    description: "Conjunto com Eevee e evoluções da região de Kanto.",
    color: "#d17d92", icon: "bi-controller", images: ['https://media.printables.com/media/prints/a407a350-6d3c-49c5-97d9-c8155796bfa7/images/12686848_b98f41d3-29db-4fa9-bfa4-ff0cb6488ab1_680d3a9b-d70d-4b76-a495-cf523b182064/thumbs/inside/1280x960/png/front.webp'],
    prices: { whatsapp: '', mercadoLivre: '', shopee: '' },
    links: { mercadoLivre: '', shopee: '' }
  },
  {
    id: 37,
    name: "Pokébola", categories: ["Geek", "Pokémon", "Decoração", "Colecionáveis"],
    description: "Pokébola decorativa inspirada no universo Pokémon.",
    color: "#d96b3d", icon: "bi-stars", images: ['https://media.printables.com/media/prints/374028/images/3560403_e02489d5-ede2-488f-b91a-09c993f8535f/thumbs/inside/1280x960/jpg/20230119_102028.webp'],
    prices: { whatsapp: '', mercadoLivre: '', shopee: '' },
    links: { mercadoLivre: '', shopee: '' }
  },
  {
    id: 38,
    name: "Batarang Dobrável Batman", categories: ["Geek", "Batman", "Cosplay", "Decoração"],
    description: "Batarang dobrável inspirado em Batman Arkham Knight.",
    color: "#829b84", icon: "bi-key", images: ['https://media.printables.com/media/prints/07ee60f5-1abe-42b5-8400-4ff3cccd9648/images/13606106_456c6571-4baf-4c6e-b9de-47f5b0997f97_9b4dbb00-1c55-4a8b-b681-2806d80b554e/thumbs/inside/1280x960/png/batarang2.webp', 'https://media.printables.com/media/prints/647b3c08-a337-494c-a84e-833943ef9f50/images/13606107_5be4e133-0faf-4855-9c01-52ab68b5dce3_c5ea0429-1cb2-44d2-8185-5bf403812a18/thumbs/inside/1280x960/png/batarang1.webp'],
    prices: { whatsapp: '', mercadoLivre: '', shopee: '' },
    links: { mercadoLivre: '', shopee: '' }
  },
  {
    id: 39,
    name: "Pokébola Decorativa", categories: ["Geek", "Pokémon", "Decoração"],
    description: "Peça decorativa em formato de Pokébola.",
    color: "#e0a15c", icon: "bi-image", images: ['https://media.printables.com/media/prints/7a95fa7c-1b8c-439a-996b-dd476abf8e71/images/13716890_e369ee53-0ff6-4aa7-a0a0-52e760f5904b_858f4b27-a456-40dd-ad96-58f70b0f941c/thumbs/inside/1280x960/png/screenshot-2026-09-01-200510.webp'],
    prices: { whatsapp: '', mercadoLivre: '', shopee: '' },
    links: { mercadoLivre: '', shopee: '' }
  },
  {
    id: 40,
    name: "Máscara Sub-Zero", categories: ["Geek", "Fortnite", "Cosplay", "Acessórios"],
    description: "Máscara inspirada no personagem Sub-Zero.",
    color: "#9b7bb0", icon: "bi-code-slash", images: ['https://media.printables.com/media/prints/1835082/images/13755278_e3367541-6b43-48bc-8439-58191ca13732_ec591432-70c3-4af7-b7ab-60fa60e91e08/thumbs/inside/1280x960/png/image_1835082.webp'],
    prices: { whatsapp: '', mercadoLivre: '', shopee: '' },
    links: { mercadoLivre: '', shopee: '' }
  },
  {
    id: 41,
    name: "Decoração Como Treinar o Seu Dragão", categories: ["Geek", "Filmes", "Decoração", "Colecionáveis"],
    description: "Peça decorativa inspirada em Como Treinar o Seu Dragão.",
    color: "#5d8ca5", icon: "bi-dice-5", images: ['https://media.printables.com/media/prints/0ae5f983-50df-4f14-b8b4-3d003ff66c45/images/13722830_9b2a9094-f53e-4d4d-8ddf-f7eee7ef0487_0e605513-1313-4e45-8141-ff4b41581837/thumbs/inside/1280x960/png/screenshot-2026-09-02-190731.webp'],
    prices: { whatsapp: '', mercadoLivre: '', shopee: '' },
    links: { mercadoLivre: '', shopee: '' }
  },
  {
    id: 42,
    name: "Crânio Cubone Pokémon", categories: ["Geek", "Pokémon", "Decoração", "Colecionáveis"],
    description: "Peça decorativa inspirada no crânio do Pokémon Cubone.",
    color: "#d17d92", icon: "bi-controller", images: ['https://media.printables.com/media/prints/1053983/images/7985347_0c060acf-6c87-4cbf-8f1a-931127eea392_66c25dcf-d757-49ef-9e1e-161923bce16f/thumbs/inside/1280x960/png/cubone-skull1.webp'],
    prices: { whatsapp: '', mercadoLivre: '', shopee: '' },
    links: { mercadoLivre: '', shopee: '' }
  },
  {
    id: 43,
    name: "Máscara Sakai Ghost of Tsushima", categories: ["Geek", "Games", "Cosplay", "Acessórios"],
    description: "Máscara inspirada no clã Sakai de Ghost of Tsushima.",
    color: "#d96b3d", icon: "bi-stars", images: ['https://media.printables.com/media/prints/35f8562d-e7e7-4634-8fcc-9827c8a849a2/images/13753326_f638784b-04aa-4230-84cb-58a7b716d363_a8e9505b-98ae-4364-a87d-9984bbcd1c3a/thumbs/inside/1280x960/png/untitled.webp'],
    prices: { whatsapp: '', mercadoLivre: '', shopee: '' },
    links: { mercadoLivre: '', shopee: '' }
  },
  {
    id: 44,
    name: "Xadrez Pokémon", categories: ["Geek", "Pokémon", "Jogos de Tabuleiro", "Colecionáveis"],
    description: "Conjunto de xadrez inspirado no universo Pokémon.",
    color: "#829b84", icon: "bi-key", images: ['https://media.printables.com/media/comment_images/29/6a0487-6ed3-4cde-89a3-a7aece75fbde/thumbs/inside/1920x1440/png/6.webp'],
    prices: { whatsapp: '', mercadoLivre: '', shopee: '' },
    links: { mercadoLivre: '', shopee: '' }
  }
];
