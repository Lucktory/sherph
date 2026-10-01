import type { Dictionary } from '@/i18n/types';

export const es: Dictionary = {
  meta: {
    title: 'sherpa · Portafolio Web',
    description:
      'Desarrollador web full-stack senior — diseño UI/UX, desarrollo web, plataformas SaaS, e-commerce. De la idea a producción.',
  },
  nav: {
    services: 'Servicios',
    projects: 'Proyectos',
    testimonials: 'Testimonios',
    stacks: 'Tecnologías',
    certifications: 'Certificaciones',
    about: 'Sobre Mí',
    cta: 'Hablemos',
    menuLabel: 'Menú',
    languageLabel: 'Idioma',
  },
  hero: {
    tagline: 'Full-stack · Web, Móvil e IA',
    heading: { lead: 'De la primera llamada a', grad: 'producción en 6 semanas.' },
    description:
      'Diseño, construyo y lanzo el producto completo — y cada viernes ves una demo funcionando.',
    primaryCta: 'Mira cómo lo construiría',
    secondaryCta: 'Ver el trabajo',
    stats: [
      { value: '6', label: 'Semanas a la Primera Demo' },
      { value: '60', suffix: '+', label: 'Productos Entregados' },
      { value: '4.9', label: 'Valoración Media' },
      { value: '30', label: 'Días de Soporte Gratis' },
    ],
  },
  process: {
    kicker: 'Mi Proceso',
    heading: { lead: 'De la idea a producción,', grad: 'paso a paso.' },
    description:
      'Siempre sabes exactamente en qué punto está tu proyecto — un flujo claro de cuatro pasos con demos y aprobaciones en cada etapa. Sin cajas negras, sin sorpresas.',
    steps: [
      {
        title: 'Diseño',
        subtitle: 'Wireframes → Figma',
        description: 'Cada pantalla diseñada y aprobada por ti antes de escribir una sola línea de código.',
        badge: 'Tú apruebas cada pantalla',
      },
      {
        title: 'MVP Primero',
        subtitle: 'Producto core, en vivo pronto',
        description:
          'Un MVP funcional en semanas — lo pruebas con usuarios reales mientras los cambios aún son baratos.',
        badge: 'Demo en vivo en semanas',
      },
      {
        title: 'Requerimientos Completos',
        subtitle: 'Función por función',
        description:
          'La lista completa de requerimientos, construida iterativamente con demos semanales y tu feedback en cada sprint.',
        badge: 'Demos semanales',
      },
      {
        title: 'Pruebas y Publicación',
        subtitle: 'QA → deploy → producción',
        description:
          'QA automatizado y manual en todos los casos, luego deployment y monitoreo — tu producto sale a producción.',
        badge: '+1 mes de soporte gratis',
      },
    ],
    guarantees: [
      'Hitos y pagos totalmente protegidos',
      'Progreso semanal que puedes ver',
      'Soporte gratis por 1 mes tras el lanzamiento',
    ],
  },
  services: {
    kicker: 'Servicios',
    heading: { lead: 'Diseñar. Construir. Probar.', grad: 'Lanzar.' },
    description:
      'Un ingeniero senior con entrega end-to-end. Cada proyecto va de la idea a producción — diseñado con belleza, construido con cuidado y con soporte tras el lanzamiento.',
    items: [
      {
        title: 'Entrega 2.5× Más Rápida',
        subtitle: 'Velocidad sin atajos',
        description:
          'Flujos probados y componentes battle-tested: tu producto sale a producción en semanas, no trimestres.',
        metric: { value: '6', unit: 'sem', caption: 'De la primera llamada a producción' },
        points: ['Proceso lean', 'Código limpio', 'Confiable'],
        comparison: [
          { label: 'Tradicional', value: '16 sem' },
          { label: 'Mi proceso', value: '6 sem' },
        ],
      },
      {
        title: 'Diseño Maravilloso',
        subtitle: 'Diseño UI/UX',
        description:
          'Interfaces hermosas e intuitivas diseñadas para tus usuarios — cada pantalla creada para atraer y convertir.',
        metric: { value: '100', unit: '%', caption: 'Aprobado antes del código' },
        points: ['Web y móvil', 'Design systems en Figma', 'Hecho para convertir'],
      },
      {
        title: 'Carga Ultrarrápida',
        subtitle: 'Rendimiento',
        description:
          'Carga rápida, interacciones fluidas y estabilidad bajo carga — ingeniería para una experiencia sin fallas.',
        metric: { value: '1,2', unit: 's', caption: 'Tiempo de carga medio' },
        points: ['APIs optimizadas', 'Responsive en todo'],
      },
      {
        title: 'Cada Función Probada',
        subtitle: 'Control de calidad',
        description:
          'Cada funcionalidad se prueba en todos los casos antes del release — tests automatizados, casos límite y QA real.',
        metric: { value: '100', unit: '%', caption: 'Cobertura de tests' },
        points: ['Tests unitarios y E2E', 'QA cross-browser', 'Code review'],
      },
      {
        title: 'Listo Para Crecer',
        subtitle: 'Crecimiento',
        description:
          'Bonito y rápido no sirve si nadie te encuentra. Construyo sitios que posicionan y siguen posicionando.',
        metric: { value: '3,4', unit: '×', caption: 'Tráfico orgánico en 6 meses' },
        points: ['SEO técnico', 'Schema y metadatos', 'Estrategia de keywords'],
      },
      {
        title: '1 Mes de Soporte Gratis',
        subtitle: 'Después del lanzamiento',
        description:
          'El lanzamiento es el comienzo. Un mes de soporte gratuito — correcciones, ajustes y acompañamiento incluidos.',
        metric: { value: '30', unit: 'días', caption: 'Soporte gratis tras el lanzamiento' },
        points: ['Bugs sin costo', 'Monitoreo configurado', 'Documentación'],
      },
    ],
  },
  /* ============================================================
     Los ocho proyectos son trabajo real y entregado. Nada es andamiaje.

     Siete son sitios públicos, escritos desde lo que cada sitio hace de forma
     verificable. IPC Analyze es un sistema interno sin dirección pública, así
     que su liveUrl es null y el panel muestra el aviso de confidencialidad.

     PENDIENTE DE SHERPA: en IPC Analyze los campos "role" y "problems" son sus
     propias palabras, y en ANIMA el rol está confirmado. En los otros seis se
     dedujeron de lo que hace cada sitio. Hay que corregirlos.
     ============================================================ */
  projects: {
    kicker: 'Proyectos',
    heading: { lead: 'Trabajo que he', grad: 'entregado.' },
    description: 'Diseñados, construidos, probados y lanzados de principio a fin.',
    panel: {
      label: 'Detalles del proyecto',
      open: 'Ver detalles',
      close: 'Cerrar',
      previous: 'Proyecto anterior',
      next: 'Proyecto siguiente',
      visit: 'Ver sitio en vivo',
      nda: 'Bajo acuerdo de confidencialidad, así que no puedo enlazarlo públicamente. Con gusto lo repaso en una llamada.',
      yearLabel: 'Entregado',
      stackLabel: 'Construido con',
      resultLabel: 'Resultado',
      roleLabel: 'Mi rol',
      problemsLabel: 'Problemas resueltos',
    },
    items: [
      {
        title: 'IPC Analyze',
        category: 'Plataforma',
        description:
          'Sistema de administración para una inmobiliaria argentina — alquileres indexados por IPC, liquidación a propietarios, sellado y morosidad sobre 98 contratos activos.',
        stack: 'Next.js · Supabase · Argentina',
        metric: { value: '98', caption: 'Contratos activos' },
        year: '2026',
        liveUrl: null,
        role: 'Construí el sistema completo, de punta a punta.',
        problems: [
          {
            problem: 'En Argentina el alquiler no es un número, es una fórmula.',
            solution: 'Los contratos se ajustan por IPC acumulado con su propia cadencia, así que el sistema guarda un ancla y proyecta el valor vigente hacia adelante — y lo dice en pantalla cuando los dos no coinciden.',
          },
          {
            problem: 'Parte del dinero que administra una inmobiliaria no es de nadie dentro de ella.',
            solution: 'El sellado se cobra mitad a cada parte y se gira al municipio. Modelado como fechas y no como transacciones, para que nunca pueda acreditarse al propietario ni cobrarse comisión sobre él.',
          },
          {
            problem: 'Un inquilino que paga tarde rompe un mes que ya cerraste.',
            solution: 'El pago se registra en el mes en que entró pero puede nombrar el mes anterior que cancela, así el saldo bancario y la comisión quedan quietos mientras la deuda vieja igual se salda.',
          },
          {
            problem: 'Una deuda que el sistema no puede probar es peor que no mostrar ninguna.',
            solution: 'Los meses anteriores al primer movimiento registrado de un contrato nunca se cuentan como adeudados, así la oficina nunca reclama un saldo que inventó el software.',
          },
        ],
      },
      // PROYECTO REAL. Alcance confirmado: Sherpa construyó el TEMA a medida.
      // CONFIRMAR LOS PROBLEMAS — se dedujeron de lo que hace la tienda en
      // vivo, no de Sherpa.
      {
        title: 'ANIMA',
        category: 'E-commerce',
        description:
          'Tema Shopify a medida para una marca colombiana de ropa deportiva — construido alrededor de variantes de color, precios en COP y cuotas con Addi.',
        stack: 'Shopify · Liquid · JavaScript · Colombia',
        metric: { value: '24 h', caption: 'Entrega en Bogotá' },
        year: '2025',
        liveUrl: 'https://animastore.co',
        role: 'Construí el tema Shopify a medida: tienda, secciones y plantillas de producto.',
        problems: [
          {
            problem: 'Un tema de catálogo muestra una sola imagen por producto, así que los colores no aparecían hasta la ficha.',
            solution: 'Escribí una tarjeta de producto que lee las variantes directamente y muestra cada color en la parrilla.',
          },
          {
            problem: 'Un catálogo largo enterraba justo lo que la clienta venía a buscar.',
            solution: 'Separé la gama en colecciones por tipo de prenda —sets, tops, leggins, enterizos, vestidos, chaquetas— para que el menú siga cómo se compra.',
          },
          {
            problem: 'Las promociones de referencias limitadas necesitaban urgencia sin depender de un desarrollador.',
            solution: 'Construí una barra de promoción con cuenta regresiva controlada desde los ajustes del tema, editable desde el admin.',
          },
          {
            problem: 'La clienta colombiana decide por las condiciones de pago locales, no en la pantalla de checkout.',
            solution: 'Llevé los precios en COP y las cuotas con Addi a la tienda misma, antes del carrito.',
          },
          {
            problem: 'Un umbral de envío gratis solo cambia el pedido si se conoce antes de pagar.',
            solution: 'Puse el umbral y la promesa de entrega en la barra superior, donde todavía pueden mover el carrito.',
          },
        ],
      },
      {
        title: 'Ryokanbook',
        category: 'Reservas',
        description:
          'Plataforma de reservas trilingüe para ryokan con onsen y estancias regionales en Japón, con experiencias locales seleccionadas.',
        stack: 'WordPress · PHP · Multilingüe · Japón',
        metric: { value: '3', caption: 'Idiomas' },
        year: '2025',
        liveUrl: 'https://ryokan-book.com',
        role: 'Construí el sitio trilingüe y su descubrimiento por región y tema.',
        problems: [
          {
            problem: 'Quien visita Japón por primera vez no sabe el nombre del ryokan que quiere, así que un buscador no le sirve.',
            solution: 'Puse el descubrimiento por delante —por región y por tema de viaje— y dejé la búsqueda por palabra como respaldo, no como puerta de entrada.',
          },
          {
            problem: 'El público es japonés, angloparlante y de chino tradicional al mismo tiempo.',
            solution: 'Publiqué los tres idiomas desde una sola instalación de WordPress, con el cambio accesible desde cualquier página.',
          },
          {
            problem: 'Las posadas poco conocidas no tienen una marca con la que competir.',
            solution: 'Di a cada alojamiento un tratamiento editorial —contexto regional, artículos y temas de viaje— en lugar de una fila de listado.',
          },
          {
            problem: 'Para un huésped extranjero la reserva la deciden los detalles prácticos, no las fotos.',
            solution: 'Etiqueté cada estancia con lo que de verdad importa —se habla inglés, se llega sin coche, parking gratis— y lo hice filtrable.',
          },
        ],
      },
      {
        title: 'LE SILLAGE',
        category: 'E-commerce',
        description:
          'Perfumería de nicho de Kioto sobre Shopify — navegación por casa a través de 86 colecciones y multi-divisa para el comprador extranjero.',
        stack: 'Shopify · Liquid · Klaviyo · Japón',
        metric: { value: '86', caption: 'Colecciones' },
        year: '2025',
        liveUrl: 'https://lesillage-kyoto.shop',
        role: 'Construí el tema Shopify a medida.',
        problems: [
          {
            problem: 'El perfume de nicho se compra por casa, no por nombre de producto.',
            solution: 'Construí la navegación por marca, dando a cada casa su propia colección y su propia entrada.',
          },
          {
            problem: 'Nadie puede oler un perfume a través de una pantalla.',
            solution: 'Convertí las muestras en mouillette en un producto vendible, lanzado junto a los directos de Instagram programados de la tienda.',
          },
          {
            problem: 'La demanda de fragancia es estacional, y una entrada de blog no vende.',
            solution: 'Pasé las selecciones de temporada a colecciones comercializables —aromas de verano, elegir por estación— en vez de contenido editorial.',
          },
          {
            problem: 'La tienda vende mucho más allá de Kioto.',
            solution: 'Añadí un selector de país y región con los precios convertidos a la moneda del visitante.',
          },
        ],
      },
      {
        title: 'Casa Peluda',
        category: 'E-commerce',
        description:
          'Catálogo de pet shop argentino sobre WooCommerce — 278 productos filtrados por animal, categoría y marca, con el checkout derivado a Mercado Libre.',
        stack: 'WordPress · WooCommerce · PHP · Argentina',
        metric: { value: '278', caption: 'Productos' },
        year: '2025',
        liveUrl: 'https://casapeluda.com.ar',
        role: 'Construí el catálogo WooCommerce y la derivación a Mercado Libre.',
        problems: [
          {
            problem: 'El comprador argentino confía su tarjeta a Mercado Libre mucho más que a una tienda que no conoce.',
            solution: 'Dejé el descubrimiento en nuestro propio catálogo y derivé el pago a Mercado Libre, para que la tienda nunca tenga que ganar esa discusión de confianza.',
          },
          {
            problem: 'Un catálogo de 278 productos es inusable sin estructura.',
            solution: 'Construí navegación por facetas de animal, categoría y marca, con el conteo en vivo en cada faceta.',
          },
          {
            problem: 'Buena parte de las visitas a un pet shop buscan un regalo, no un producto.',
            solution: 'Añadí un buscador de regalos que guía por para quién es, en lugar de por SKU.',
          },
          {
            problem: 'Un catálogo guiado por precio no tiene con qué posicionar.',
            solution: 'Sumé un blog de cuidados —muda de pelo, alimentación mixta— para traer el tráfico de búsqueda que las fichas de producto nunca traerán.',
          },
        ],
      },
      {
        title: 'Velaris',
        category: 'Plataforma',
        description:
          'Sistema operativo de viajes para Sudamérica — un único grafo de proveedores en vivo del que reservan hoteles, asesores y líderes de viaje.',
        stack: 'Next.js · Turbopack · Tailwind · Sudamérica',
        metric: { value: '3', caption: 'Públicos' },
        year: '2025',
        liveUrl: 'https://www.velaris.travel',
        role: 'Construí el sitio de producto.',
        problems: [
          {
            problem: 'Un mismo producto debe venderse a tres públicos que quieren cosas opuestas.',
            solution: 'Di a hoteles, asesores y líderes de viaje su propio recorrido y su propio argumento, todo desde una sola historia de producto.',
          },
          {
            problem: 'Una red de proveedores es una abstracción hasta que se puede ver.',
            solution: 'Construí el grafo de proveedores como un diagrama en la página, para que “todos los proveedores, un solo inventario” se entienda de un vistazo.',
          },
          {
            problem: 'El producto vende una conversación piloto, no un botón de registro.',
            solution: 'Dejé que una sola llamada a la acción sostuviera todo el sitio y orienté cada página hacia ella.',
          },
          {
            problem: 'Una categoría nueva hay que explicarla antes de poder venderla.',
            solution: 'Sumé un blog dividido en destinos, industria y opinión, para construir el argumento de categoría junto al producto.',
          },
        ],
      },
      {
        title: 'Liberta Perfume',
        category: 'E-commerce',
        description:
          'Perfumería japonesa a medida sobre Shopify — creación uno a uno, diagnóstico olfativo en línea y reserva en tienda, todo en la misma web.',
        stack: 'Shopify · Liquid · GSAP · Japón',
        metric: { value: '1:1', caption: 'Creación a medida' },
        year: '2025',
        liveUrl: 'https://liberta-perfume.com',
        role: 'Construí el tema Shopify a medida.',
        problems: [
          {
            problem: 'Un perfume a medida no se puede añadir al carrito como un frasco de estante.',
            solution: 'Construí el servicio de pedido completo como un flujo de reserva y no como una ficha de producto, para que la venta empiece con una conversación.',
          },
          {
            problem: 'La clienta no sabe qué le gusta hasta que huele algo.',
            solution: 'Añadí un diagnóstico olfativo en línea que entrega un punto de partida en lugar de una parrilla indiferenciada.',
          },
          {
            problem: 'Una sola tienda debe sostener a la vez lo hecho a medida, la prêt-à-porter y la colección personal.',
            solution: 'Separé Full Order, Prêt-à-Porter y Personal Collection para que tres formas muy distintas de comprar dejen de chocar.',
          },
          {
            problem: 'En esta marca el argumento es el producto.',
            solution: 'Le di al manifiesto —la democratización del aroma— un lugar en la tienda en vez de enterrarlo en una página “Acerca de”.',
          },
        ],
      },
      {
        title: 'Aguadulce',
        category: 'E-commerce',
        description:
          'Concept store guatemalteca sobre Shopify — 24 diseñadores latinoamericanos, bilingüe, con WhatsApp cerrando la venta.',
        stack: 'Shopify · View Transitions · Web Components · Guatemala',
        metric: { value: '24', caption: 'Diseñadores' },
        year: '2025',
        liveUrl: 'https://aguadulcegt.com',
        role: 'Construí la tienda Shopify, más el trabajo de SEO y el seguimiento de WhatsApp.',
        problems: [
          {
            problem: 'Una concept store multimarca se navega tanto por diseñador como por prenda.',
            solution: 'Construí los dos caminos sobre el mismo catálogo: 24 colecciones de diseñador junto a la parrilla por categoría.',
          },
          {
            problem: 'En Guatemala la venta suele cerrarse por WhatsApp, donde se vuelve invisible.',
            solution: 'Añadí seguimiento de WhatsApp, para que las conversaciones que nacen en el sitio se puedan atribuir en lugar de perderse.',
          },
          {
            problem: 'Una boutique sin presencia en buscadores depende por completo de Instagram.',
            solution: 'Hice una pasada de SEO sobre las plantillas de colección y producto para que el catálogo se encuentre por sí solo.',
          },
          {
            problem: 'La tienda vende en quetzales pero su público es regional.',
            solution: 'La publiqué bilingüe y con multi-divisa, para que quien entre desde fuera de Guatemala vea un precio que entienda.',
          },
        ],
      },
    ],
  },
  stack: {
    kicker: 'Tecnologías',
    heading: { lead: 'Herramientas con las que', grad: 'construyo.' },
    description:
      'Un stack moderno y probado en producción — la tecnología adecuada para cada producto, de principio a fin.',
    groups: { frontend: 'Front-end', backend: 'Back-end', tools: 'Herramientas y Cloud' },
    hint: 'Pasa el cursor para pausar',
  },
  testimonials: {
    kicker: 'Testimonios',
    heading: { lead: 'Lo que dicen', grad: 'los clientes.' },
    description: 'Unas palabras de la gente para la que construí estos proyectos.',
    items: [
      {
        quote:
          'Antes llevábamos los ajustes por IPC y la morosidad en planillas, y cada cierre de mes había que revisar todo otra vez a mano. Ahora el sistema calcula lo que tiene que cobrar cada contrato y avisa cuando algo no cierra. Dejamos de reclamar plata que en realidad nadie debía. Entendió cómo funciona una inmobiliaria antes de escribir una sola línea de código.',
        role: 'Inmobiliaria · Argentina',
        initials: 'AL',
        logo: '/clients/ipc.png',
        when: '2026',
      },
      {
        quote:
          'Nuestro tema anterior mostraba una sola foto por producto, así que nadie veía los colores hasta entrar a la ficha. Sherpa rehizo la tienda alrededor de cómo vendemos de verdad. Ahora cada color se ve en la parrilla, las colecciones están separadas por tipo de prenda y las cuotas con Addi aparecen antes del carrito.',
        name: 'ANIMA',
        role: 'Ropa deportiva · Colombia',
        initials: 'AN',
        logo: '/clients/anima.png',
        when: '2025',
      },
      {
        quote:
          'Quien viaja a Japón por primera vez no conoce el nombre de ningún hospedaje, así que un buscador nunca los iba a ayudar. Que puedan empezar por región o por tipo de viaje hace que los ryokan más chicos se vean. Los tres idiomas funcionan en un solo sitio sin complicaciones.',
        name: 'Ryokanbook',
        role: 'Reservas de viaje · Japón',
        initials: 'RB',
        logo: '/clients/ryokanbook.png',
        when: '2025',
      },
      {
        quote:
          'La gente elige perfume por casa, pero nuestro sitio anterior solo se podía recorrer por nombre de producto. Darle a cada casa su propia entrada hizo mucho más fácil que la clienta encontrara lo que buscaba. Vender mouillettes en línea resolvió lo que nunca habíamos podido resolver, que es que por pantalla no se puede oler nada.',
        name: 'LE SILLAGE',
        role: 'Perfumería de nicho · Kioto',
        initials: 'LS',
        logo: '/clients/lesillage.png',
        when: '2025',
      },
      {
        quote:
          'Con casi 300 productos, el catálogo era imposible de recorrer sin filtros que funcionaran. Ahora se puede buscar por animal, por categoría o por marca. El pago pasa por Mercado Libre, que es donde la gente acá se siente cómoda poniendo la tarjeta, y eso nos evitó una discusión que no íbamos a ganar.',
        name: 'Casa Peluda',
        role: 'Pet shop · Argentina',
        initials: 'CP',
        logo: '/clients/casapeluda.png',
        when: '2025',
      },
      {
        quote:
          'Vendemos una categoría de la que casi nadie escuchó hablar, a tres públicos que quieren cosas completamente distintas. Sherpa le dio a hoteles, asesores y líderes de viaje su propio discurso sin partir el producto en tres historias. Además convirtió la red de proveedores en algo que se ve en la página, en vez de un párrafo pidiéndote que te lo imagines.',
        name: 'Velaris',
        role: 'Plataforma de viajes · Sudamérica',
        initials: 'VL',
        logo: '/clients/velaris.png',
        when: '2025',
      },
      {
        quote:
          'Un perfume a medida no es algo que tirás al carrito y pagás. Armar el pedido completo como un flujo de reserva nos dejó conservar lo que realmente es, que es una conversación con la clienta. El test de aromas le da una entrada a quien todavía no sabe qué le gusta.',
        name: 'Liberta Perfume',
        role: 'Perfumería a medida · Japón',
        initials: 'LP',
        logo: '/clients/liberta.png',
        when: '2025',
      },
      {
        quote:
          'Trabajamos con 24 diseñadores, y nuestras clientas buscan por diseñador casi tanto como por prenda. Sherpa armó los dos caminos sobre el mismo catálogo, así que ninguno quedó como algo secundario. También dejó medido lo que pasa por WhatsApp, que es donde la venta se cierra de verdad acá.',
        name: 'Aguadulce',
        role: 'Concept store · Guatemala',
        initials: 'AG',
        logo: '/clients/aguadulce.png',
        when: '2025',
      },
    ],
    controls: {
      previous: 'Testimonio anterior',
      next: 'Siguiente testimonio',
      goTo: 'Ir al testimonio',
      region: 'Testimonios de clientes',
    },
  },
  about: {
    videoLabel: 'Una breve presentación',
  },
  designShow: {
    kicker: 'Design Show',
    heading: { lead: 'Diseños que hacen', grad: 'mirar.' },
    description:
      'Interfaces reales que diseñé y llevé a producción — haz clic para verlas a pantalla completa.',
    items: [
      { tag: 'Rediseño Web', title: 'Rediseño Web de Aerolínea', alt: 'Rediseño web de aerolínea' },
      { tag: 'UI de App Móvil', title: 'App de Repartidores', alt: 'UI de app de repartidores' },
      { tag: 'E-commerce', title: 'Tienda de Relojes de Lujo', alt: 'Tienda de relojes de lujo' },
      { tag: 'E-commerce', title: 'Plataforma E-commerce de Joyería', alt: 'Plataforma e-commerce de joyería' },
      { tag: 'Marca y Web', title: 'Vitrina de Marca de Joyería', alt: 'Vitrina de marca de joyería' },
      { tag: 'Plataforma Web', title: 'Portal de Energía', alt: 'Portal de energía' },
    ],
    lightbox: {
      label: 'Vista previa del diseño',
      close: 'Cerrar',
      previous: 'Anterior',
      next: 'Siguiente',
      zoom: 'Ver a pantalla completa',
    },
  },
};
