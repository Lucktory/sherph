import type { Dictionary } from '@/i18n/types';

export const pt: Dictionary = {
  meta: {
    title: 'sherpa · Desenvolvimento web sob medida',
    description:
      'Desenvolvo seu software sob medida. Sites, lojas online e sistemas para o seu negócio, prontos para funcionar.',
  },
  nav: {
    process: 'Processo',
    services: 'Serviços',
    designShow: 'Designs',
    projects: 'Projetos',
    testimonials: 'Depoimentos',
    stacks: 'Tecnologias',
    certifications: 'Certificações',
    about: 'Sobre Mim',
    cta: 'Vamos Conversar',
    menuLabel: 'Menu',
    languageLabel: 'Idioma',
  },
  hero: {
    tagline: 'Sites · Lojas online · Apps sob medida',
    heading: { lead: 'Seu site no ar', grad: 'em 6 semanas.' },
    description:
      'Desde a primeira conversa eu projeto, construo e lanço tudo, e toda sexta você vê funcionando.',
    primaryCta: 'Veja como eu construiria',
    secondaryCta: 'Ver o trabalho',
    stats: [
      { value: '6', label: 'Semanas até a Primeira Demo' },
      { value: '60', suffix: '+', label: 'Produtos Entregues' },
      { value: '4,9', label: 'Avaliação Média' },
      { value: '30', label: 'Dias de Suporte Grátis' },
    ],
  },
  process: {
    kicker: 'Meu Processo',
    heading: { lead: 'Da ideia ao ar,', grad: 'passo a passo.' },
    description:
      'Você sempre sabe exatamente onde seu projeto está - um fluxo claro de quatro passos com demos e aprovações em cada etapa. Sem caixa-preta, sem surpresas.',
    steps: [
      {
        title: 'Design',
        subtitle: 'Wireframes → Figma',
        description: 'Cada tela desenhada e aprovada por você antes de escrever uma única linha de código.',
        badge: 'Você aprova cada tela',
      },
      {
        title: 'MVP Primeiro',
        subtitle: 'Produto core, no ar cedo',
        description:
          'Um MVP funcional em semanas - você testa com usuários reais enquanto as mudanças ainda são baratas.',
        badge: 'Demo ao vivo em semanas',
      },
      {
        title: 'Requisitos Completos',
        subtitle: 'Recurso por recurso',
        description:
          'A lista completa de requisitos, construída iterativamente com demos semanais e seu feedback a cada sprint.',
        badge: 'Demos semanais',
      },
      {
        title: 'Teste e Publicação',
        subtitle: 'QA → deploy → no ar',
        description:
          'QA automatizado e manual em todos os casos, depois deploy e monitoramento - seu produto vai ao ar.',
        badge: '+1 mês de suporte grátis',
      },
    ],
    guarantees: [
      'Marcos e pagamentos totalmente protegidos',
      'Progresso semanal que você pode ver',
      'Suporte grátis por 1 mês após o lançamento',
    ],
  },
  services: {
    kicker: 'Serviços',
    heading: { lead: 'Projetar. Construir. Testar.', grad: 'Lançar.' },
    description:
      'Um engenheiro sênior com entrega end-to-end. Cada projeto vai da ideia ao ar - belamente desenhado, cuidadosamente construído e com suporte após o lançamento.',
    items: [
      {
        title: 'Entrega 2,5× Mais Rápida',
        subtitle: 'Velocidade sem atalhos',
        description:
          'Fluxos comprovados e componentes testados: seu produto vai ao ar em semanas, não trimestres.',
        metric: { value: '6', unit: 'sem', caption: 'Da primeira conversa ao ar' },
        points: ['Processo lean', 'Código limpo', 'Confiável'],
        comparison: [
          { label: 'Tradicional', value: '16 sem' },
          { label: 'Meu processo', value: '6 sem' },
        ],
      },
      {
        title: 'Design Incrível',
        subtitle: 'Design UI/UX',
        description:
          'Interfaces lindas e intuitivas desenhadas para seus usuários - cada tela criada para engajar e converter.',
        metric: { value: '100', unit: '%', caption: 'Aprovado antes do código' },
        points: ['Web e mobile', 'Design systems no Figma', 'Feito para converter'],
      },
      {
        title: 'Carregamento Ultrarrápido',
        subtitle: 'Desempenho',
        description:
          'Carregamento rápido, interações fluidas e estabilidade sob carga - engenharia para uma experiência sem falhas.',
        metric: { value: '1,2', unit: 's', caption: 'Tempo médio de carregamento' },
        points: ['APIs otimizadas', 'Responsivo em tudo'],
      },
      {
        title: 'Cada Recurso Testado',
        subtitle: 'Garantia de qualidade',
        description:
          'Cada funcionalidade é testada em todos os casos antes do release - testes automatizados, casos extremos e QA real.',
        metric: { value: '100', unit: '%', caption: 'Cobertura de testes' },
        points: ['Testes unitários e E2E', 'QA cross-browser', 'Code review'],
      },
      {
        title: 'Pronto Para Crescer',
        subtitle: 'Crescimento',
        description:
          'Bonito e rápido não adianta se ninguém encontra. Construo sites que ranqueiam e continuam ranqueando.',
        metric: { value: '3,4', unit: '×', caption: 'Tráfego orgânico em 6 meses' },
        points: ['SEO técnico', 'Schema e metadados', 'Estratégia de keywords'],
      },
      {
        title: '1 Mês de Suporte Grátis',
        subtitle: 'Após o lançamento',
        description:
          'O lançamento é o começo. Um mês de suporte gratuito - correções, ajustes e acompanhamento incluídos.',
        metric: { value: '30', unit: 'dias', caption: 'Suporte grátis após o lançamento' },
        points: ['Bugs sem custo', 'Monitoramento configurado', 'Documentação'],
      },
    ],
  },
  /* ============================================================
     Os oito projetos são trabalho real e entregue. Nada aqui é andaime.

     Sete são sites públicos, escritos a partir do que cada site verificavelmente
     faz. O IPC Analyze é um sistema interno sem endereço público, então seu
     liveUrl é null e o painel mostra o aviso de confidencialidade.

     PENDENTE COM SHERPA: no IPC Analyze os campos "role" e "problems" são as
     palavras dele, e na ANIMA o papel está confirmado. Nos outros seis foram
     deduzidos do que cada site faz. Precisam de correção.
     ============================================================ */
  projects: {
    kicker: 'Projetos',
    heading: { lead: 'Trabalho que eu', grad: 'entreguei.' },
    description: 'Projetados, construídos, testados e lançados de ponta a ponta.',
    panel: {
      label: 'Detalhes do projeto',
      open: 'Ver detalhes',
      close: 'Fechar',
      previous: 'Projeto anterior',
      next: 'Próximo projeto',
      visit: 'Ver site no ar',
      nda: 'Sob acordo de confidencialidade, então não posso divulgar o link publicamente. Posso mostrar em uma call.',
      yearLabel: 'Entregue',
      stackLabel: 'Construído com',
      resultLabel: 'Resultado',
      roleLabel: 'Meu papel',
      problemsLabel: 'Problemas resolvidos',
    },
    items: [
      {
        title: 'IPC Analyze',
        category: 'Plataforma',
        description:
          'Sistema de administração para uma imobiliária argentina - aluguéis indexados ao IPC, acerto com proprietários, imposto de selo e inadimplência em 98 contratos ativos.',
        stack: 'Next.js · Supabase · Argentina',
        metric: { value: '98', caption: 'Contratos ativos' },
        year: '2026',
        liveUrl: null,
        role: 'Construí o sistema inteiro, de ponta a ponta.',
        problems: [
          {
            problem: 'Na Argentina o aluguel não é um número, é uma fórmula.',
            solution: 'Os contratos se ajustam pelo IPC acumulado na própria cadência, então o sistema guarda uma âncora e projeta o valor vigente para a frente - e avisa na tela quando os dois divergem.',
          },
          {
            problem: 'Parte do dinheiro que uma imobiliária administra não é de ninguém dentro dela.',
            solution: 'O imposto de selo é cobrado metade de cada lado e repassado ao município. Modelado como datas e não como transações, para nunca poder ser creditado ao proprietário nem gerar comissão.',
          },
          {
            problem: 'Um inquilino que paga atrasado quebra um mês que você já fechou.',
            solution: 'O pagamento entra no mês em que chegou mas pode nomear o mês antigo que quita, então o saldo bancário e a comissão ficam parados enquanto a dívida velha é baixada.',
          },
          {
            problem: 'Uma dívida que o sistema não consegue provar é pior do que não mostrar nenhuma.',
            solution: 'Os meses anteriores ao primeiro movimento registrado de um contrato nunca contam como devidos, então o escritório nunca cobra um saldo que o software inventou.',
          },
        ],
      },
      // PROJETO REAL. Escopo confirmado: Sherpa construiu o TEMA sob medida.
      // CONFIRMAR OS PROBLEMAS - foram deduzidos do que a loja no ar faz, não
      // informados por Sherpa.
      {
        title: 'ANIMA',
        category: 'E-commerce',
        description:
          'Tema Shopify sob medida para uma marca colombiana de roupa esportiva - construído em torno de variantes de cor, preços em COP e parcelamento com Addi.',
        stack: 'Shopify · Liquid · JavaScript · Colômbia',
        metric: { value: '24 h', caption: 'Entrega em Bogotá' },
        year: '2025',
        liveUrl: 'https://animastore.co',
        role: 'Construí o tema Shopify sob medida: loja, seções e templates de produto.',
        problems: [
          {
            problem: 'Um tema de prateleira mostra uma imagem por produto, então as cores só apareciam na página do item.',
            solution: 'Escrevi um card de produto que lê as variantes direto e coloca cada cor na grade.',
          },
          {
            problem: 'Um catálogo corrido enterrava justamente o que a cliente veio procurar.',
            solution: 'Separei a linha em coleções por tipo de peça - conjuntos, tops, leggings, macacões, vestidos, jaquetas - para o menu seguir como se compra.',
          },
          {
            problem: 'As promoções de referências limitadas precisavam de urgência sem depender de um desenvolvedor.',
            solution: 'Construí uma barra de promoção com contagem regressiva controlada pelas configurações do tema, editável no admin.',
          },
          {
            problem: 'A cliente colombiana decide pelas condições de pagamento locais, não na tela de checkout.',
            solution: 'Levei os preços em COP e o parcelamento com Addi para a própria loja, antes do carrinho.',
          },
          {
            problem: 'Um limite de frete grátis só muda o pedido se for conhecido antes do checkout.',
            solution: 'Coloquei o limite e a promessa de entrega na barra superior, onde ainda conseguem mexer no carrinho.',
          },
        ],
      },
      {
        title: 'Ryokanbook',
        category: 'Reservas',
        description:
          'Plataforma de reservas trilíngue para ryokan com onsen e estadias regionais no Japão, com experiências locais selecionadas.',
        stack: 'WordPress · PHP · Multilíngue · Japão',
        metric: { value: '3', caption: 'Idiomas' },
        year: '2025',
        liveUrl: 'https://ryokan-book.com',
        role: 'Construí o site trilíngue e a descoberta por região e tema.',
        problems: [
          {
            problem: 'Quem visita o Japão pela primeira vez não sabe o nome do ryokan que quer, então uma caixa de busca não ajuda.',
            solution: 'Coloquei a descoberta na frente - por região e por tema de viagem - e deixei a busca por palavra como apoio, não como porta de entrada.',
          },
          {
            problem: 'O público é japonês, de língua inglesa e de chinês tradicional ao mesmo tempo.',
            solution: 'Publiquei os três idiomas a partir de uma única instalação do WordPress, com a troca acessível de qualquer página.',
          },
          {
            problem: 'As pousadas menos conhecidas não têm marca para disputar atenção.',
            solution: 'Dei a cada propriedade um tratamento editorial - contexto regional, matérias e temas de viagem - em vez de uma linha de listagem.',
          },
          {
            problem: 'Para um hóspede estrangeiro quem decide a reserva são os detalhes práticos, não as fotos.',
            solution: 'Marquei cada estadia com o que realmente importa - fala-se inglês, dá para chegar sem carro, estacionamento grátis - e tornei isso filtrável.',
          },
        ],
      },
      {
        title: 'LE SILLAGE',
        category: 'E-commerce',
        description:
          'Perfumaria de nicho de Quioto no Shopify - navegação por casa em 86 coleções e multimoeda para o comprador de fora.',
        stack: 'Shopify · Liquid · Klaviyo · Japão',
        metric: { value: '86', caption: 'Coleções' },
        year: '2025',
        liveUrl: 'https://lesillage-kyoto.shop',
        role: 'Construí o tema Shopify sob medida.',
        problems: [
          {
            problem: 'Perfume de nicho se compra por casa, não por nome de produto.',
            solution: 'Construí a navegação por marca, dando a cada casa a própria coleção e a própria porta de entrada.',
          },
          {
            problem: 'Ninguém consegue sentir um perfume pela tela.',
            solution: 'Transformei as fitas de teste em produto vendável, lançado junto com as lives de Instagram programadas da loja.',
          },
          {
            problem: 'A procura por fragrância é sazonal, e um post de blog não vende.',
            solution: 'Transformei as seleções de estação em coleções vendáveis - perfumes de verão, escolher por estação - em vez de conteúdo editorial.',
          },
          {
            problem: 'A loja vende muito além de Quioto.',
            solution: 'Adicionei um seletor de país e região com os preços convertidos para a moeda do visitante.',
          },
        ],
      },
      {
        title: 'Casa Peluda',
        category: 'E-commerce',
        description:
          'Catálogo de pet shop argentino no WooCommerce - 278 produtos filtrados por animal, categoria e marca, com o checkout entregue ao Mercado Livre.',
        stack: 'WordPress · WooCommerce · PHP · Argentina',
        metric: { value: '278', caption: 'Produtos' },
        year: '2025',
        liveUrl: 'https://casapeluda.com.ar',
        role: 'Construí o catálogo WooCommerce e a passagem para o Mercado Livre.',
        problems: [
          {
            problem: 'O comprador argentino confia o cartão ao Mercado Livre muito mais do que a uma loja que não conhece.',
            solution: 'Mantive a descoberta no nosso próprio catálogo e passei o pagamento ao Mercado Livre, para a loja nunca precisar vencer essa discussão de confiança.',
          },
          {
            problem: 'Um catálogo de 278 produtos é inutilizável sem estrutura.',
            solution: 'Construí navegação por facetas de animal, categoria e marca, com contagem ao vivo em cada faceta.',
          },
          {
            problem: 'Boa parte das visitas a um pet shop procura um presente, não um produto.',
            solution: 'Adicionei um buscador de presentes que guia por para quem é, e não por SKU.',
          },
          {
            problem: 'Um catálogo guiado por preço não tem com o que ranquear.',
            solution: 'Somei um blog de cuidados - troca de pelo, alimentação mista - para trazer a busca que as páginas de produto nunca trarão.',
          },
        ],
      },
      {
        title: 'Velaris',
        category: 'Plataforma',
        description:
          'Sistema operacional de viagens para a América do Sul - um único grafo de fornecedores ao vivo do qual hotéis, consultores e líderes de viagem reservam.',
        stack: 'Next.js · Turbopack · Tailwind · América do Sul',
        metric: { value: '3', caption: 'Públicos' },
        year: '2025',
        liveUrl: 'https://www.velaris.travel',
        role: 'Construí o site de produto.',
        problems: [
          {
            problem: 'Um mesmo produto precisa vender para três públicos que querem coisas opostas.',
            solution: 'Dei a hotéis, consultores e líderes de viagem a própria trilha e o próprio argumento, tudo a partir de uma só história de produto.',
          },
          {
            problem: 'Uma rede de fornecedores é abstração até alguém conseguir vê-la.',
            solution: 'Construí o grafo de fornecedores como um diagrama na página, para que “todos os fornecedores, um só estoque” entre de relance.',
          },
          {
            problem: 'O produto vende uma conversa piloto, não um botão de cadastro.',
            solution: 'Deixei uma única chamada para ação sustentar o site inteiro e orientei cada página até ela.',
          },
          {
            problem: 'Uma categoria nova precisa ser explicada antes de poder ser vendida.',
            solution: 'Somei um blog dividido em destinos, indústria e opinião, para construir o argumento de categoria junto do produto.',
          },
        ],
      },
      {
        title: 'Liberta Perfume',
        category: 'E-commerce',
        description:
          'Perfumaria japonesa sob medida no Shopify - criação um a um, diagnóstico olfativo online e reserva na loja, tudo no mesmo site.',
        stack: 'Shopify · Liquid · GSAP · Japão',
        metric: { value: '1:1', caption: 'Criação sob medida' },
        year: '2025',
        liveUrl: 'https://liberta-perfume.com',
        role: 'Construí o tema Shopify sob medida.',
        problems: [
          {
            problem: 'Um perfume sob medida não entra no carrinho como um frasco de prateleira.',
            solution: 'Construí o serviço de pedido completo como um fluxo de reserva, e não como página de produto, para a venda começar por uma conversa.',
          },
          {
            problem: 'A cliente não sabe do que gosta antes de sentir algum cheiro.',
            solution: 'Adicionei um diagnóstico olfativo online que entrega um ponto de partida em vez de uma grade indiferenciada.',
          },
          {
            problem: 'Uma só loja precisa sustentar o sob medida, o prêt-à-porter e a coleção pessoal ao mesmo tempo.',
            solution: 'Separei Full Order, Prêt-à-Porter e Personal Collection para três formas muito diferentes de comprar pararem de se atropelar.',
          },
          {
            problem: 'Nesta marca o argumento é o produto.',
            solution: 'Dei ao manifesto - a democratização do aroma - um lugar na loja, em vez de enterrá-lo numa página “Sobre”.',
          },
        ],
      },
      {
        title: 'Aguadulce',
        category: 'E-commerce',
        description:
          'Concept store guatemalteca no Shopify - 24 designers latino-americanos, bilíngue, com o WhatsApp fechando a venda.',
        stack: 'Shopify · View Transitions · Web Components · Guatemala',
        metric: { value: '24', caption: 'Designers' },
        year: '2025',
        liveUrl: 'https://aguadulcegt.com',
        role: 'Construí a loja Shopify, mais o trabalho de SEO e o rastreio de WhatsApp.',
        problems: [
          {
            problem: 'Uma concept store multimarca é navegada tanto por designer quanto por peça.',
            solution: 'Construí os dois caminhos sobre o mesmo catálogo: 24 coleções de designer ao lado da grade por categoria.',
          },
          {
            problem: 'Na Guatemala a venda costuma fechar no WhatsApp, onde ela some.',
            solution: 'Adicionei rastreio de WhatsApp, para as conversas que nascem no site poderem ser atribuídas em vez de se perderem.',
          },
          {
            problem: 'Uma boutique sem presença em buscadores depende inteiramente do Instagram.',
            solution: 'Fiz uma passada de SEO nos templates de coleção e produto para o catálogo ser encontrado sozinho.',
          },
          {
            problem: 'A loja vende em quetzales mas o público é regional.',
            solution: 'Publiquei bilíngue e com multimoeda, para quem entra de fora da Guatemala ver um preço que entende.',
          },
        ],
      },
    ],
  },
  stack: {
    kicker: 'Tecnologias',
    heading: { lead: 'Ferramentas com que', grad: 'eu construo.' },
    description:
      'Um stack moderno e testado em produção - a tecnologia certa para cada produto, de ponta a ponta.',
    groups: { frontend: 'Front-end', backend: 'Back-end', tools: 'Ferramentas e Cloud' },
    hint: 'Passe o cursor para pausar',
  },
  testimonials: {
    kicker: 'Depoimentos',
    heading: { lead: 'O que dizem', grad: 'os clientes.' },
    description: 'Algumas palavras das pessoas para quem eu construí esses projetos.',
    items: [
      {
        quote:
          'Antes a gente controlava os ajustes por IPC e a inadimplência em planilhas, e todo fechamento de mês era revisar tudo de novo na mão. Agora o sistema calcula o que cada contrato deveria estar cobrando e avisa quando alguma coisa não bate. Paramos de cobrar dinheiro que ninguém devia de verdade. Ele entendeu como funciona uma imobiliária antes de escrever qualquer código.',
        role: 'Imobiliária · Argentina',
        initials: 'AL',
        logo: '/clients/ipc.png',
        when: '2026',
      },
      {
        quote:
          'Nosso tema antigo só mostrava uma foto por produto, então ninguém via as cores antes de clicar. O Sherpa refez a loja em torno de como a gente vende de verdade. Agora cada cor aparece na grade, as coleções estão separadas por tipo de peça e o parcelamento com Addi fica ali antes do carrinho.',
        name: 'ANIMA',
        role: 'Roupa esportiva · Colômbia',
        initials: 'AN',
        logo: '/clients/anima.png',
        when: '2025',
      },
      {
        quote:
          'Quem vai ao Japão pela primeira vez não sabe o nome de nenhuma pousada, então uma caixa de busca nunca ia ajudar. Deixar que comecem por região ou por tipo de viagem faz com que os ryokan menores sejam vistos. Os três idiomas rodam em um site só, sem complicação.',
        name: 'Ryokanbook',
        role: 'Reservas de viagem · Japão',
        initials: 'RB',
        logo: '/clients/ryokanbook.png',
        when: '2025',
      },
      {
        quote:
          'As pessoas escolhem perfume por casa, mas o site antigo só dava para navegar por nome de produto. Dar a cada casa a própria porta de entrada deixou muito mais fácil a cliente achar o que queria. Vender as fitas de teste online resolveu o que a gente nunca tinha conseguido resolver, que é não dar para sentir cheiro pela tela.',
        name: 'LE SILLAGE',
        role: 'Perfumaria de nicho · Quioto',
        initials: 'LS',
        logo: '/clients/lesillage.png',
        when: '2025',
      },
      {
        quote:
          'Com quase 300 produtos, o catálogo era impossível de percorrer sem filtros que funcionassem. Agora dá para buscar por animal, por categoria ou por marca. O pagamento passa pelo Mercado Livre, que é onde as pessoas aqui se sentem à vontade para colocar o cartão, e isso nos poupou uma discussão que a gente não ia ganhar.',
        name: 'Casa Peluda',
        role: 'Pet shop · Argentina',
        initials: 'CP',
        logo: '/clients/casapeluda.png',
        when: '2025',
      },
      {
        quote:
          'A gente vende uma categoria da qual quase ninguém ouviu falar, para três públicos que querem coisas completamente diferentes. O Sherpa deu a hotéis, consultores e líderes de viagem o próprio discurso sem partir o produto em três histórias. Ele também transformou a rede de fornecedores em algo que dá para ver na página, em vez de um parágrafo pedindo que você imagine.',
        name: 'Velaris',
        role: 'Plataforma de viagens · América do Sul',
        initials: 'VL',
        logo: '/clients/velaris.png',
        when: '2025',
      },
      {
        quote:
          'Um perfume sob medida não é algo que você joga no carrinho e paga. Montar o pedido completo como um fluxo de reserva deixou a gente manter o que ele realmente é, que é uma conversa com a cliente. O teste de aromas dá uma entrada para quem ainda não sabe do que gosta.',
        name: 'Liberta Perfume',
        role: 'Perfumaria sob medida · Japão',
        initials: 'LP',
        logo: '/clients/liberta.png',
        when: '2025',
      },
      {
        quote:
          'A gente trabalha com 24 designers, e nossas clientes procuram por designer quase tanto quanto por peça. O Sherpa construiu os dois caminhos sobre o mesmo catálogo, então nenhum ficou em segundo plano. Ele também deixou medido o que acontece no WhatsApp, que é onde a venda fecha de verdade aqui.',
        name: 'Aguadulce',
        role: 'Concept store · Guatemala',
        initials: 'AG',
        logo: '/clients/aguadulce.png',
        when: '2025',
      },
    ],
    controls: {
      previous: 'Depoimento anterior',
      next: 'Próximo depoimento',
      goTo: 'Ir para o depoimento',
      region: 'Depoimentos de clientes',
    },
  },
  about: {
    videoLabel: 'Uma breve apresentação',
  },
  designShow: {
    kicker: 'Design Show',
    heading: { lead: 'Designs que fazem', grad: 'olhar.' },
    description: 'Interfaces reais que eu desenhei e coloquei no ar - clique para ver em tela cheia.',
    items: [
      {
        tag: 'Redesign Web',
        title: 'Redesign de Site de Companhia Aérea',
        alt: 'Redesign de site de companhia aérea',
      },
      { tag: 'UI de App Mobile', title: 'App de Entregadores', alt: 'UI de app de entregadores' },
      { tag: 'E-commerce', title: 'Loja de Relógios de Luxo', alt: 'Loja de relógios de luxo' },
      { tag: 'E-commerce', title: 'Plataforma E-commerce de Joias', alt: 'Plataforma e-commerce de joias' },
      { tag: 'Marca e Web', title: 'Vitrine de Marca de Joias', alt: 'Vitrine de marca de joias' },
      { tag: 'Plataforma Web', title: 'Portal de Energia', alt: 'Portal de energia' },
    ],
    lightbox: {
      label: 'Prévia do design',
      close: 'Fechar',
      previous: 'Anterior',
      next: 'Próximo',
      zoom: 'Ver em tela cheia',
    },
  },
};
