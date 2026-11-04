/* Produtos importados das coleções públicas da HENIX no Printables e no MakerWorld.
   Preencha prices e links antes de publicar. Imagens não disponíveis ficam em images: []. */
const products = [
  {
    id: 1,
    name: "Hatsune Miku Lego", categories: ["Geek", "Hatsune Miku"],
    description: "Miniatura da Hatsune Miku em versão chibi, com visual icônico e detalhes encantadores para decorar sua coleção.",
    color: "#d96b3d", icon: "bi-stars", images: ["https://media.printables.com/media/prints/821d0207-40c2-4291-af6a-fe7dedd26b30/images/10877382_e524683e-302e-4c02-81c8-36b8a08f82a6_addf9d46-2e0f-46eb-b98a-c5374910de4e/thumbs/inside/1280x960/png/hm.webp"],
    prices: { whatsapp: '', mercadoLivre: '', shopee: '' },
    links: { mercadoLivre: '', shopee: '' }
  },
  {
    id: 2,
    name: "Chaveiro Decepticon", categories: ["Geek", "Chaveiro", "Pingente", "Transformers"],
    description: "Pingente dos Decepticons, com design marcante inspirado no universo Transformers, ideal para fãs e colecionadores.",
    color: "#829b84", icon: "bi-key", images: [],
    prices: { whatsapp: '', mercadoLivre: '', shopee: '' },
    links: { mercadoLivre: '', shopee: '' }
  },
  {
    id: 3,
    name: "Painel Imperial", categories: ["Geek", "Star Wars", "Quadro", "Decoração"],
    description: "Painel Imperial com visual inspirado no universo Star Wars, ideal para decorar ambientes.",
    color: "#e0a15c", icon: "bi-image", images: [],
    prices: { whatsapp: '', mercadoLivre: '', shopee: '' },
    links: { mercadoLivre: '', shopee: '' }
  },
  {
    id: 4,
    name: "Pingente Programação Python", categories: ["Geek", "Chaveiro", "Pingente", "Programação"],
    description: "Pingente do logo Python em duas cores, ideal para programadores e entusiastas da tecnologia.",
    color: "#9b7bb0", icon: "bi-code-slash", images: [],
    prices: { whatsapp: '', mercadoLivre: '', shopee: '' },
    links: { mercadoLivre: '', shopee: '' }
  },
  {
    id: 5,
    name: "Caixa Para Dados RPG", categories: ["RPG", "Geek", "Jogos de Tabuleiro", "Acessórios"],
    description: "Caixa para dados de RPG, ideal para guardar e organizar seus dados com praticidade e estilo.",
    color: "#5d8ca5", icon: "bi-dice-5", images: [],
    prices: { whatsapp: '', mercadoLivre: '', shopee: '' },
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
    color: "#d17d92", icon: "bi-controller", images: [],
    prices: { whatsapp: '', mercadoLivre: '', shopee: '' },
    links: { mercadoLivre: '', shopee: '' }
  },
  {
    id: 13,
    name: "Batarang", categories: ["Geek", "Batman", "Cosplay", "Decoração"],
    description: "Batarang inspirado no universo Batman.",
    color: "#d96b3d", icon: "bi-stars", images: [],
    prices: { whatsapp: '', mercadoLivre: '', shopee: '' },
    links: { mercadoLivre: '', shopee: '' }
  },
  {
    id: 14,
    name: "Chaveiro Circuito Eletrônico", categories: ["Geek", "Chaveiro", "Tecnologia", "Pingente"],
    description: "Chaveiro com visual de circuito eletrônico.",
    color: "#829b84", icon: "bi-key", images: [],
    prices: { whatsapp: '', mercadoLivre: '', shopee: '' },
    links: { mercadoLivre: '', shopee: '' }
  },
  {
    id: 15,
    name: "Chaveiro EVA 01 Evangelion", categories: ["Geek", "Evangelion", "Chaveiro", "Anime"],
    description: "Chaveiro inspirado no EVA 01 de Neon Genesis Evangelion.",
    color: "#e0a15c", icon: "bi-image", images: [],
    prices: { whatsapp: '', mercadoLivre: '', shopee: '' },
    links: { mercadoLivre: '', shopee: '' }
  },
  {
    id: 16,
    name: "Kit Porta-copos Batman", categories: ["Geek", "Batman", "Casa", "Decoração"],
    description: "Conjunto de porta-copos inspirado no universo Batman.",
    color: "#9b7bb0", icon: "bi-code-slash", images: [],
    prices: { whatsapp: '', mercadoLivre: '', shopee: '' },
    links: { mercadoLivre: '', shopee: '' }
  },
  {
    id: 17,
    name: "Poções Minecraft", categories: ["Geek", "Minecraft", "Decoração", "Colecionáveis"],
    description: "Miniaturas de poções inspiradas em Minecraft.",
    color: "#5d8ca5", icon: "bi-dice-5", images: [],
    prices: { whatsapp: '', mercadoLivre: '', shopee: '' },
    links: { mercadoLivre: '', shopee: '' }
  },
  {
    id: 18,
    name: "Eevee Low-Poly", categories: ["Geek", "Pokémon", "Decoração", "Colecionáveis"],
    description: "Miniatura low-poly inspirada no Pokémon Eevee.",
    color: "#d17d92", icon: "bi-controller", images: [],
    prices: { whatsapp: '', mercadoLivre: '', shopee: '' },
    links: { mercadoLivre: '', shopee: '' }
  },
  {
    id: 19,
    name: "Quadro Anime Ranma 1/2", categories: ["Geek", "Anime", "Quadro", "Decoração"],
    description: "Quadro decorativo inspirado no anime Ranma 1/2.",
    color: "#d96b3d", icon: "bi-stars", images: [],
    prices: { whatsapp: '', mercadoLivre: '', shopee: '' },
    links: { mercadoLivre: '', shopee: '' }
  },
  {
    id: 20,
    name: "Acessórios de Cabelo Anime", categories: ["Geek", "Anime", "Acessórios", "Moda"],
    description: "Acessórios de cabelo com inspiração em anime.",
    color: "#829b84", icon: "bi-key", images: [],
    prices: { whatsapp: '', mercadoLivre: '', shopee: '' },
    links: { mercadoLivre: '', shopee: '' }
  },
  {
    id: 21,
    name: "Presilhas Mina Ashiro Kaiju Nº 8", categories: ["Geek", "Anime", "Acessórios", "Cosplay"],
    description: "Presilhas inspiradas na personagem Mina Ashiro de Kaiju Nº 8.",
    color: "#e0a15c", icon: "bi-image", images: [],
    prices: { whatsapp: '', mercadoLivre: '', shopee: '' },
    links: { mercadoLivre: '', shopee: '' }
  },
  {
    id: 22,
    name: "Molde de Bombas de Banho Gato Anime", categories: ["Casa", "Anime", "Acessórios"],
    description: "Molde híbrido de gato com inspiração em anime.",
    color: "#9b7bb0", icon: "bi-code-slash", images: [],
    prices: { whatsapp: '', mercadoLivre: '', shopee: '' },
    links: { mercadoLivre: '', shopee: '' }
  },
  {
    id: 23,
    name: "Pingente Sailor Moon Space-Time Key", categories: ["Geek", "Sailor Moon", "Anime", "Pingente"],
    description: "Pingente inspirado na chave do espaço-tempo de Sailor Moon.",
    color: "#5d8ca5", icon: "bi-dice-5", images: [],
    prices: { whatsapp: '', mercadoLivre: '', shopee: '' },
    links: { mercadoLivre: '', shopee: '' }
  },
  {
    id: 24,
    name: "Quadro Totoro", categories: ["Geek", "Studio Ghibli", "Anime", "Quadro", "Decoração"],
    description: "Quadro decorativo inspirado em Totoro.",
    color: "#d17d92", icon: "bi-controller", images: [],
    prices: { whatsapp: '', mercadoLivre: '', shopee: '' },
    links: { mercadoLivre: '', shopee: '' }
  },
  {
    id: 25,
    name: "Garota Anime com Suporte", categories: ["Geek", "Anime", "Decoração", "Colecionáveis"],
    description: "Miniatura de personagem anime com opção de suporte.",
    color: "#d96b3d", icon: "bi-stars", images: [],
    prices: { whatsapp: '', mercadoLivre: '', shopee: '' },
    links: { mercadoLivre: '', shopee: '' }
  },
  {
    id: 26,
    name: "Marcador de Página Naruto", categories: ["Geek", "Naruto", "Anime", "Acessórios"],
    description: "Marcador de página inspirado em Naruto.",
    color: "#829b84", icon: "bi-key", images: [],
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
  },
  {
    id: 45,
    name: "Ducky Bun Fidget Keychain (Dim Sum)", categories: ["Chaveiros", "Geek", "Fidget", "Animais"],
    description: "Chaveiro interativo em formato de cestinha com patinhos removíveis. Também pode ser usado como acessório de bolsa, brinquedo fidget ou item colecionável.",
    color: "#d96b3d", icon: "bi-key", images: ["https://makerworld.bblmw.com/makerworld/model/USe3a7f1c8bdc5de/design/2024-11-03_22c15fca7049b.jpg", "https://makerworld.bblmw.com/makerworld/model/USe3a7f1c8bdc5de/design/2024-11-03_33a6a847a300b.jpeg", "https://makerworld.bblmw.com/makerworld/model/USe3a7f1c8bdc5de/design/2024-11-03_91efd65c9b49a.jpeg", "https://makerworld.bblmw.com/makerworld/model/USe3a7f1c8bdc5de/design/2024-11-03_dbbff71e043d3.jpeg"],
    prices: { whatsapp: '', mercadoLivre: '', shopee: '' },
    links: { mercadoLivre: '', shopee: '' },
    source: "https://makerworld.com/en/models/754411-ducky-bun-fidget-keychain-dim-sum"
  },
  {
    id: 46,
    name: "Ghost — Gamer Mini Figure", categories: ["Chaveiros", "Geek", "Games", "Call of Duty"],
    description: "Chaveiro em miniatura do Ghost, com estilo chibi e detalhes inspirados em Call of Duty. Uma peça leve para usar nas chaves, mochila ou como presente para fãs de games.",
    color: "#829b84", icon: "bi-controller", images: ["https://makerworld.bblmw.com/makerworld/model/US81cb12caa6382f/design/2025-09-07_43d4002c5b6b58.png", "https://makerworld.bblmw.com/makerworld/model/US81cb12caa6382f/design/2025-09-07_f73d7fe8f416a.webp", "https://makerworld.bblmw.com/makerworld/model/US81cb12caa6382f/design/2025-09-07_ce35a69ef4e35.png"],
    prices: { whatsapp: '', mercadoLivre: '', shopee: '' },
    links: { mercadoLivre: '', shopee: '' },
    source: "https://makerworld.com/en/models/1481168-ghost-gamer-mini-figure"
  },
  {
    id: 47,
    name: "Suporte de Protetor Labial Owala", categories: ["Chaveiros", "Acessórios", "Organização"],
    description: "Suporte de protetor labial com argola para chaveiro. Uma solução compacta para manter o protetor labial sempre à mão.",
    color: "#e0a15c", icon: "bi-bag-heart", images: ["https://makerworld.bblmw.com/makerworld/model/US599edd90ba6660/design/2025-05-24_d02f296fadf3e.jpg"],
    prices: { whatsapp: '', mercadoLivre: '', shopee: '' },
    links: { mercadoLivre: '', shopee: '' },
    source: "https://makerworld.com/en/models/1451161-owala-chapstick-holder-keychain"
  },
  {
    id: 48,
    name: "Chaveiro Macaron de Coração Clicky", categories: ["Chaveiros", "Fidget", "Doces", "Geek"],
    description: "Chaveiro em formato de macaron de coração com mecanismo clicky. Uma peça fofa, divertida e gostosa de apertar.",
    color: "#9b7bb0", icon: "bi-heart", images: ["https://makerworld.bblmw.com/makerworld/model/US6c9bf513c269ce/design/2025-02-09_4941718ebb729.jpg", "https://makerworld.bblmw.com/makerworld/model/US6c9bf513c269ce/design/2025-02-09_94980a8e65f9e.gif", "https://makerworld.bblmw.com/makerworld/model/US6c9bf513c269ce/design/2025-02-09_288ebf28309dc.jpg"],
    prices: { whatsapp: '', mercadoLivre: '', shopee: '' },
    links: { mercadoLivre: '', shopee: '' },
    source: "https://makerworld.com/en/models/1091700-clicky-heart-macaron-keychain"
  },
  {
    id: 49,
    name: "Chaveiro Sabre de Luz Retrátil", categories: ["Chaveiros", "Geek", "Star Wars", "Fidget"],
    description: "Chaveiro inspirado em um sabre de luz com mecanismo retrátil. Uma miniatura divertida para fãs de Star Wars e colecionadores.",
    color: "#5d8ca5", icon: "bi-stars", images: ["https://makerworld.bblmw.com/makerworld/model/US9df16be4fd1c6f/design/2024-06-06_88d35cea01d9e.jpg"],
    prices: { whatsapp: '', mercadoLivre: '', shopee: '' },
    links: { mercadoLivre: '', shopee: '' },
    source: "https://makerworld.com/en/models/485656-lightsaber-keychain-retractable"
  },
  {
    id: 50,
    name: "Pocket Pets — Cachorrinho Beagle", categories: ["Chaveiros", "Animais", "Articulados", "Fidget"],
    description: "Cachorrinho articulado de bolso, impresso em uma peça e com movimento flexível. Pode ser usado como chaveiro, brinquedo ou miniatura colecionável.",
    color: "#d17d92", icon: "bi-dog", images: ["https://makerworld.bblmw.com/makerworld/model/US127bbb512ec548/design/2024-12-18_4a715e2f83608.jpg", "https://makerworld.bblmw.com/makerworld/model/US127bbb512ec548/design/2024-12-18_be3b85445e6fb.jpg", "https://makerworld.bblmw.com/makerworld/model/US127bbb512ec548/design/2024-12-18_1bd3262ca04bd.jpg"],
    prices: { whatsapp: '', mercadoLivre: '', shopee: '' },
    links: { mercadoLivre: '', shopee: '' },
    source: "https://makerworld.com/en/models/891565-pocket-pets-pocket-puppy-beagle"
  },
  {
    id: 51,
    name: "Chaveiro Fidget Motor Rotativo", categories: ["Chaveiros", "Automotivo", "Fidget", "Engenharia"],
    description: "Réplica compacta de um motor rotativo com mecanismo funcional. Basta girar a peça para ativar o movimento, criando um chaveiro interativo e diferente.",
    color: "#d96b3d", icon: "bi-gear", images: ["https://makerworld.bblmw.com/makerworld/model/US7f7d2bb6f0290a/design/2024-10-08_94dc4b1b29e53.jpeg", "https://makerworld.bblmw.com/makerworld/model/US7f7d2bb6f0290a/design/2024-10-08_eb4fd746763ee.jpeg", "https://makerworld.bblmw.com/makerworld/model/US7f7d2bb6f0290a/design/2024-10-08_b2da5eeef93dd.jpeg"],
    prices: { whatsapp: '', mercadoLivre: '', shopee: '' },
    links: { mercadoLivre: '', shopee: '' },
    source: "https://makerworld.com/en/models/690174-rotary-engine-fidget-keychain"
  },
  {
    id: 52,
    name: "Porta-batom com Ornamento e Chaveiro", categories: ["Chaveiros", "Acessórios", "Organização"],
    description: "Porta-batom compacto com ornamento decorativo e argola para chaveiro. Prático para levar seu batom ou item pequeno favorito.",
    color: "#829b84", icon: "bi-lipstick", images: ["https://makerworld.bblmw.com/makerworld/model/US73d38e417549e5/design/34fd59c8387644de.png"],
    prices: { whatsapp: '', mercadoLivre: '', shopee: '' },
    links: { mercadoLivre: '', shopee: '' },
    source: "https://makerworld.com/en/models/2893394-lipstick-case-with-ornament-keychain"
  },
  {
    id: 53,
    name: "Chaveiro Creeper Minecraft", categories: ["Chaveiros", "Minecraft", "Geek", "Games"],
    description: "Chaveiro inspirado no Creeper de Minecraft, ideal para fãs do jogo e para personalizar mochila, estojo ou estojo de ferramentas.",
    color: "#e0a15c", icon: "bi-grid-3x3-gap", images: ["https://makerworld.bblmw.com/makerworld/model/US820d9342f3ea7b/design/2025-04-29_195bb2cc062308.png"],
    prices: { whatsapp: '', mercadoLivre: '', shopee: '' },
    links: { mercadoLivre: '', shopee: '' },
    source: "https://makerworld.com/en/models/1367797-minecraft-creeper-keychain"
  },
  {
    id: 54,
    name: "Mini Ghostface — Brinquedo ou Chaveiro", categories: ["Chaveiros", "Geek", "Filmes", "Terror"],
    description: "Miniatura do Ghostface que pode ser usada como brinquedo ou chaveiro. Uma peça compacta para fãs de filmes de terror.",
    color: "#9b7bb0", icon: "bi-mask", images: ["https://makerworld.bblmw.com/makerworld/model/US945c1d3206b829/design/2025-10-06_57df5fe2299b1.png"],
    prices: { whatsapp: '', mercadoLivre: '', shopee: '' },
    links: { mercadoLivre: '', shopee: '' },
    source: "https://makerworld.com/en/models/1862420-mini-ghostface-no-ams-toy-keychain"
  },
  {
    id: 55,
    name: "Chaveiro Pikachu Amigurumi", categories: ["Chaveiros", "Pokémon", "Geek", "Animais"],
    description: "Chaveiro inspirado no Pikachu em estilo amigurumi. Uma opção divertida para fãs de Pokémon e colecionadores.",
    color: "#5d8ca5", icon: "bi-lightning", images: ["https://makerworld.bblmw.com/makerworld/model/US9d965528633ef4/design/2023-12-13_968757b180c18.jpg"],
    prices: { whatsapp: '', mercadoLivre: '', shopee: '' },
    links: { mercadoLivre: '', shopee: '' },
    source: "https://makerworld.com/en/models/92128-amigurumi-pikachu-keychain"
  },
  {
    id: 56,
    name: "Chaveiro StealthClip EDC", categories: ["Chaveiros", "Ferramentas", "EDC", "Fidget"],
    description: "Chaveiro EDC resistente com clip integrado, pegada texturizada e visual tático. Pode ser preso a bolso, cinto ou mochila para ficar sempre acessível.",
    color: "#d17d92", icon: "bi-tools", images: ["https://makerworld.bblmw.com/makerworld/model/US1fe994ee13721a/design/2025-02-17_666848ac8bedf.gif", "https://makerworld.bblmw.com/makerworld/model/US1fe994ee13721a/design/2025-02-17_d422b447ca348.gif", "https://makerworld.bblmw.com/makerworld/model/US1fe994ee13721a/design/2025-02-17_406803b3c50bf.jpg"],
    prices: { whatsapp: '', mercadoLivre: '', shopee: '' },
    links: { mercadoLivre: '', shopee: '' },
    source: "https://makerworld.com/en/models/1121570-stealthclip-edc-knuckle-style-keychain"
  },
  {
    id: 57,
    name: "Chapéu de Palha do Luffy — One Piece", categories: ["Chaveiros", "One Piece", "Anime", "Geek"],
    description: "Chaveiro inspirado no chapéu de palha do Monkey D. Luffy, perfeito para fãs de One Piece e colecionadores de anime.",
    color: "#d96b3d", icon: "bi-sun", images: ["https://makerworld.bblmw.com/makerworld/model/US33fbf7099c5587/design/2024-04-30_fd00003eb6fb6.png"],
    prices: { whatsapp: '', mercadoLivre: '', shopee: '' },
    links: { mercadoLivre: '', shopee: '' },
    source: "https://makerworld.com/en/models/449131-one-piece-straw-hat-keychain-monkey-d-luffy"
  },
  {
    id: 58,
    name: "Coleção de Chaveiros Super Mario", categories: ["Chaveiros", "Super Mario", "Nintendo", "Geek"],
    description: "Coleção de chaveiros inspirados no universo Super Mario, com opções divertidas para fãs da Nintendo e colecionadores.",
    color: "#829b84", icon: "bi-controller", images: ["https://makerworld.bblmw.com/makerworld/model/USbf737b5602517e/design/2025-12-01_2e91e0aacb709.jpg"],
    prices: { whatsapp: '', mercadoLivre: '', shopee: '' },
    links: { mercadoLivre: '', shopee: '' },
    source: "https://makerworld.com/en/models/2064946-super-mario-keychain-collection"
  },
  {
    id: 59,
    name: "Chaveiro ou Tag Personalizável do Spotify", categories: ["Chaveiros", "Música", "Personalizáveis", "Acessórios"],
    description: "Tag personalizável inspirada no Spotify para levar sua música, artista ou playlist favorita com você.",
    color: "#e0a15c", icon: "bi-music-note-beamed", images: ["https://makerworld.bblmw.com/makerworld/model/US97116991d738d3/design/2025-08-01_618525a1847ab.png"],
    prices: { whatsapp: '', mercadoLivre: '', shopee: '' },
    links: { mercadoLivre: '', shopee: '' },
    source: "https://makerworld.com/en/models/1660269-customizable-spotify-keychain-tag"
  },
  {
    id: 60,
    name: "Chaveiro Estrela do Super Mario Bros", categories: ["Chaveiros", "Super Mario", "Nintendo", "Geek"],
    description: "Chaveiro em formato de estrela inspirado em Super Mario Bros. Uma peça colorida para fãs da Nintendo.",
    color: "#9b7bb0", icon: "bi-star", images: ["https://makerworld.bblmw.com/makerworld/model/US813059708258c0/design/6eb70cd93a52d12e.png"],
    prices: { whatsapp: '', mercadoLivre: '', shopee: '' },
    links: { mercadoLivre: '', shopee: '' },
    source: "https://makerworld.com/en/models/2534511-super-mario-bros-star-keychain"
  },
  {
    id: 61,
    name: "Chaveiro Stranger Things", categories: ["Chaveiros", "Stranger Things", "Séries", "Geek"],
    description: "Chaveiro inspirado na série Stranger Things, ideal para fãs da produção e para completar uma coleção geek.",
    color: "#5d8ca5", icon: "bi-tv", images: ["https://makerworld.bblmw.com/makerworld/model/US7a34f94a21b3e5/design/ecb47749e07e1eeb.png"],
    prices: { whatsapp: '', mercadoLivre: '', shopee: '' },
    links: { mercadoLivre: '', shopee: '' },
    source: "https://makerworld.com/en/models/1951455-stranger-things-keychain"
  },
  {
    id: 62,
    name: "Chaveiro Bloco de Pergunta Super Mario", categories: ["Chaveiros", "Super Mario", "Nintendo", "Geek"],
    description: "Chaveiro inspirado no bloco de pergunta de Super Mario, reconhecido pelo visual amarelo e pelo símbolo de interrogação.",
    color: "#d17d92", icon: "bi-question-square", images: ["https://makerworld.bblmw.com/makerworld/model/USe4d940380283be/design/2024-11-11_b28327e7f9b4c.jpg", "https://makerworld.bblmw.com/makerworld/model/USe4d940380283be/design/2024-11-07_6f4189473672d.jpg"],
    prices: { whatsapp: '', mercadoLivre: '', shopee: '' },
    links: { mercadoLivre: '', shopee: '' },
    source: "https://makerworld.com/en/models/588101-super-mario-question-block-keychain"
  },
  {
    id: 63,
    name: "Chaveiro Logo Batman", categories: ["Chaveiros", "Batman", "DC", "Geek"],
    description: "Chaveiro com o icônico logo do Batman, uma peça simples e marcante para fãs de super-heróis.",
    color: "#d96b3d", icon: "bi-shield-shaded", images: ["https://makerworld.bblmw.com/makerworld/model/US177145bf6ee243/design/2024-12-03_3982a4768830e.jpg"],
    prices: { whatsapp: '', mercadoLivre: '', shopee: '' },
    links: { mercadoLivre: '', shopee: '' },
    source: "https://makerworld.com/en/models/845203-batman-logo-keychain"
  },
  {
    id: 64,
    name: "Mini Instax 12 Fidget Keychain", categories: ["Chaveiros", "Fidget", "Fotografia", "Acessórios"],
    description: "Mini chaveiro inspirado em uma câmera instantânea Instax, com interação fidget e visual de miniatura.",
    color: "#829b84", icon: "bi-camera", images: ["https://makerworld.bblmw.com/makerworld/model/US2cf76a1338333/design/2025-07-23_65f2258f903b4.jpg"],
    prices: { whatsapp: '', mercadoLivre: '', shopee: '' },
    links: { mercadoLivre: '', shopee: '' },
    source: "https://makerworld.com/en/models/1182412-mini-instax-12-fidget-keychain"
  },
  {
    id: 65,
    name: "Chaveiro Barra de Chocolate", categories: ["Chaveiros", "Doces", "Presentes", "Acessórios"],
    description: "Chaveiro em formato de barra de chocolate, uma peça divertida para usar nas chaves, mochila ou como lembrancinha.",
    color: "#e0a15c", icon: "bi-cup-hot", images: ["https://makerworld.bblmw.com/makerworld/model/USf6576061ab9df5/design/2024-12-30_70a84a6656cce.jpg"],
    prices: { whatsapp: '', mercadoLivre: '', shopee: '' },
    links: { mercadoLivre: '', shopee: '' },
    source: "https://makerworld.com/en/models/928796-chocolate-bar-keychain"
  },
  {
    id: 66,
    name: "Chaveiro Cute R.E.P.O.", categories: ["Chaveiros", "Games", "Geek", "Colecionáveis"],
    description: "Chaveiro fofo inspirado no jogo R.E.P.O., ideal para fãs de games e para personalizar mochila ou estojo.",
    color: "#9b7bb0", icon: "bi-robot", images: ["https://makerworld.bblmw.com/makerworld/model/US458a7dafe8ced/design/2025-03-18_b5c2ade735d4e8.jpg"],
    prices: { whatsapp: '', mercadoLivre: '', shopee: '' },
    links: { mercadoLivre: '', shopee: '' },
    source: "https://makerworld.com/en/models/1222994-cute-r-e-p-o-keychain-from-repo-video-game"
  }
];
