import { Benefit, Product, CatalogProduct, Solution, ProcessStep, PostSalesService, CommercialArgument, FaqItem } from './types';

export const benefitsData: Benefit[] = [
  {
    id: 'b1',
    title: 'Ahorro Eléctrico Inmediato',
    description: 'Reducí hasta un 90% el costo de tu factura de luz desde el primer día y protegé tus finanzas de los aumentos de tarifas.',
    iconName: 'TrendingDown',
  },
  {
    id: 'b2',
    title: 'Energía Limpia y Sustentable',
    description: 'Generá electricidad libre de emisiones de CO2. Sumá valor ecológico a tu propiedad y obtené certificaciones verdes para tu negocio.',
    iconName: 'Leaf',
  },
  {
    id: 'b3',
    title: 'Solución para Todo Perfil',
    description: 'Diseñamos sistemas adaptados para hogares urbanos, comercios, talleres de industrias pequeñas y campos sin conexión a red.',
    iconName: 'Compass',
  },
  {
    id: 'b4',
    title: 'Acompañamiento Técnico Total',
    description: 'Te asesoramos antes, durante y después de la compra. Tu tranquilidad técnica y el óptimo rendimiento es nuestra prioridad.',
    iconName: 'ShieldCheck',
  },
];

// Educational content. These are solution concepts, not products for sale.
export const solarTopicsData: Product[] = [
  {
    id: 'p1',
    slug: 'kits-solares-on-grid',
    name: 'Kits Solares On-Grid',
    category: 'kits',
    description: 'Sistemas fotovoltaicos conectados a la red eléctrica para generar energía solar durante el día, reducir el consumo de la distribuidora y bajar significativamente la factura de luz.',
    specifications: [
      'Paneles solares fotovoltaicos, inversor on-grid y estructura de montaje.',
      'Protecciones eléctricas AC y DC, cableado solar, conectores y accesorios.',
      'Sistema de monitoreo y materiales de instalación según el alcance del proyecto.',
      'Opcionales: limitadores de inyección, medidores inteligentes, monitoreo avanzado, protecciones adicionales, ingeniería y puesta en marcha.'
    ],
    idealFor: [
      'Viviendas',
      'Comercios',
      'Oficinas',
      'Industrias',
      'Establecimientos rurales con acceso a red',
      'Instituciones y edificios públicos'
    ],
    detailIntro: 'Los kits solares on-grid son sistemas fotovoltaicos diseñados para trabajar conectados a la red eléctrica. Permiten generar energía solar durante el día para reducir el consumo proveniente de la distribuidora eléctrica y son actualmente una de las soluciones más utilizadas en viviendas, comercios e industrias por su excelente relación entre inversión y ahorro energético.',
    detailPoints: [
      'Cómo funciona: durante las horas de sol, los paneles generan energía eléctrica en corriente continua (DC). El inversor on-grid transforma esa energía en corriente alterna (AC) para alimentar los consumos de la instalación. La energía producida se consume en tiempo real y, en algunos casos, los excedentes pueden inyectarse a la red según la normativa y las condiciones de la distribuidora local.',
      'Beneficios: reducen considerablemente el consumo de energía de red, requieren bajo mantenimiento, generan electricidad limpia sin emisiones contaminantes, permiten recuperar la inversión mediante el ahorro energético y pueden ampliarse incorporando más paneles o nuevos equipos.',
      'Diferencia frente a un sistema híbrido: los sistemas on-grid trabajan conectados a la red eléctrica y normalmente no incluyen baterías. Su objetivo principal es reducir el consumo eléctrico y maximizar el ahorro. Los sistemas híbridos incorporan baterías y permiten contar con respaldo energético durante cortes de suministro.',
      'Cómo elegir el kit adecuado: el tamaño del sistema depende del consumo mensual de energía, la potencia contratada, el espacio disponible para paneles, el tipo de conexión eléctrica, el objetivo de ahorro y la posibilidad de ampliación futura.',
      'Aplicaciones: disponemos de sistemas residenciales compactos, soluciones comerciales, instalaciones industriales de gran potencia, sistemas trifásicos y proyectos de autoconsumo con limitación de inyección.',
      'Asesoramiento técnico integral: analizamos cada instalación para recomendar la mejor configuración según el perfil de consumo y las necesidades del cliente, con sistemas eficientes, seguros y adaptados a cada caso.'
    ],
    detailSections: [
      {
        title: '¿Cómo funciona un sistema on-grid?',
        body: [
          'Durante las horas de sol, los paneles solares generan energía eléctrica en corriente continua (DC). El inversor on-grid transforma esa energía en corriente alterna (AC) para alimentar los consumos de la instalación.',
          'La energía solar producida se consume en tiempo real, reduciendo la demanda tomada de la red eléctrica. En algunos casos, los excedentes pueden inyectarse a la red según la normativa y las condiciones de la distribuidora local.'
        ]
      },
      {
        title: '¿Qué incluye un kit solar on-grid?',
        body: ['Los kits pueden incluir:'],
        items: [
          'Paneles solares fotovoltaicos',
          'Inversor on-grid',
          'Estructura de montaje',
          'Protecciones eléctricas AC y DC',
          'Cableado solar',
          'Conectores y accesorios',
          'Sistema de monitoreo',
          'Materiales de instalación'
        ],
        subsections: [
          {
            title: 'También pueden incorporarse opcionalmente',
            body: 'Limitadores de inyección, medidores inteligentes, sistemas de monitoreo avanzado, protecciones adicionales, ingeniería y puesta en marcha.'
          }
        ]
      },
      {
        title: 'Beneficios de los sistemas on-grid',
        subsections: [
          {
            title: 'Ahorro en la factura eléctrica',
            body: 'Reducen considerablemente el consumo de energía de red.'
          },
          {
            title: 'Bajo mantenimiento',
            body: 'Los sistemas solares requieren muy poco mantenimiento y poseen larga vida útil.'
          },
          {
            title: 'Energía limpia y renovable',
            body: 'Generan electricidad sin emisiones contaminantes.'
          },
          {
            title: 'Retorno de inversión',
            body: 'Permiten recuperar la inversión mediante el ahorro energético generado durante años.'
          },
          {
            title: 'Escalabilidad',
            body: 'Pueden ampliarse fácilmente incorporando más paneles o nuevos equipos.'
          }
        ]
      },
      {
        title: '¿Para quiénes están recomendados?',
        body: ['Los kits solares on-grid son ideales para:'],
        items: [
          'Viviendas',
          'Comercios',
          'Oficinas',
          'Industrias',
          'Establecimientos rurales con acceso a red',
          'Instituciones y edificios públicos'
        ]
      },
      {
        title: '¿Qué diferencia hay entre un sistema on-grid y uno híbrido?',
        body: [
          'Los sistemas on-grid trabajan conectados a la red eléctrica y normalmente no incluyen baterías. Su objetivo principal es reducir el consumo eléctrico y maximizar el ahorro.',
          'En cambio, los sistemas híbridos incorporan baterías y permiten contar con respaldo energético durante cortes de suministro.'
        ]
      },
      {
        title: '¿Cómo elegir el kit adecuado?',
        body: ['El tamaño del sistema depende de:'],
        items: [
          'Consumo mensual de energía',
          'Potencia contratada',
          'Espacio disponible para paneles',
          'Tipo de conexión eléctrica',
          'Objetivo de ahorro',
          'Posibilidad de ampliación futura'
        ],
        subsections: [
          {
            title: 'Análisis técnico',
            body: 'Nuestro equipo realiza el análisis técnico de cada instalación para recomendar la mejor configuración según el perfil de consumo y las necesidades del cliente.'
          }
        ]
      },
      {
        title: 'Aplicaciones residenciales, comerciales e industriales',
        body: ['Disponemos de kits solares on-grid para distintas escalas de proyecto:'],
        items: [
          'Sistemas residenciales compactos',
          'Soluciones comerciales',
          'Instalaciones industriales de gran potencia',
          'Sistemas trifásicos',
          'Proyectos de autoconsumo con limitación de inyección'
        ]
      }
    ],
    consultationFocus: 'analizar consumo, espacio disponible, tipo de conexión y kit solar on-grid recomendado',
    image: 'https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?auto=format&fit=crop&q=80&w=800',
    badge: 'Autoconsumo'
  },
  {
    id: 'p2',
    slug: 'kits-solares-hibridos',
    name: 'Kits Solares Hibridos',
    category: 'kits',
    description: 'Sistemas solares con paneles, inversores híbridos y baterías para generar, almacenar y administrar energía, reduciendo consumo de red y brindando respaldo ante cortes.',
    specifications: [
      'Paneles solares fotovoltaicos, inversor híbrido y baterías de litio.',
      'Sistema de monitoreo, estructuras de montaje, protecciones eléctricas AC/DC, cableado y conectores.',
      'Materiales de instalación según el alcance técnico del proyecto.',
      'Opcionales: respaldo parcial o total, tablero de cargas críticas, limitadores de inyección, monitoreo remoto avanzado y expansión futura de baterías.'
    ],
    idealFor: [
      'Viviendas con cortes frecuentes',
      'Comercios con equipos críticos',
      'Oficinas',
      'Industrias',
      'Campos y establecimientos rurales',
      'Sistemas de telecomunicaciones',
      'Instalaciones que requieren continuidad operativa'
    ],
    detailIntro: 'Los kits solares híbridos combinan paneles solares, inversores híbridos y baterías para generar, almacenar y administrar energía de manera inteligente. Permiten reducir el consumo eléctrico de red y, al mismo tiempo, contar con respaldo energético durante cortes de suministro.',
    detailPoints: [
      'Cómo funciona: durante el día, los paneles solares alimentan los consumos eléctricos y el excedente puede cargar baterías para utilizarse posteriormente.',
      'Respaldo energético: cuando baja la generación solar o se produce un corte, el sistema puede abastecer automáticamente los consumos críticos con la energía acumulada.',
      'Ventajas: aportan independencia energética, optimización del autoconsumo, gestión inteligente de fuentes y posibilidad de ampliar paneles o baterías.',
      'Equipos respaldables: iluminación, heladeras, freezers, bombas de agua, informática, cámaras, internet, comunicaciones, equipos médicos y consumos críticos seleccionados.',
      'Baterías: los sistemas modernos utilizan principalmente baterías de litio LiFePO4 por vida útil, seguridad, rendimiento, bajo mantenimiento y profundidad de descarga.',
      'Dimensionamiento: se define por consumo energético, potencia requerida, autonomía deseada, cantidad de equipos críticos, espacio disponible, conexión eléctrica y ampliación futura.'
    ],
    detailSections: [
      {
        title: '¿Cómo funciona un sistema híbrido?',
        body: [
          'Durante el día, los paneles solares generan energía para alimentar los consumos eléctricos de la instalación. El excedente puede utilizarse para cargar las baterías y almacenarse para ser utilizado posteriormente.',
          'Cuando la generación solar disminuye o se produce un corte de energía, el sistema puede abastecer automáticamente los consumos críticos utilizando la energía acumulada en las baterías.',
          'Los inversores híbridos administran de manera automática la interacción entre paneles solares, red eléctrica, banco de baterías y consumos de la instalación.'
        ]
      },
      {
        title: '¿Qué incluye un kit solar híbrido?',
        body: ['Dependiendo de la configuración, un kit híbrido puede incluir:'],
        items: [
          'Paneles solares fotovoltaicos',
          'Inversor híbrido',
          'Baterías de litio',
          'Sistema de monitoreo',
          'Estructuras de montaje',
          'Protecciones eléctricas AC y DC',
          'Cableado y conectores',
          'Materiales de instalación'
        ],
        subsections: [
          {
            title: 'También pueden incorporarse',
            body: 'Sistemas de respaldo parcial o total, tableros de cargas críticas, limitadores de inyección, monitoreo remoto avanzado y expansión futura de baterías.'
          }
        ]
      },
      {
        title: 'Principales ventajas de los sistemas híbridos',
        subsections: [
          {
            title: 'Respaldo ante cortes de energía',
            body: 'Permiten mantener funcionando equipos esenciales cuando se interrumpe el suministro eléctrico.'
          },
          {
            title: 'Mayor independencia energética',
            body: 'Reducen la dependencia de la red eléctrica utilizando energía solar almacenada.'
          },
          {
            title: 'Optimización del autoconsumo',
            body: 'La energía generada puede aprovecharse incluso durante la noche gracias al almacenamiento en baterías.'
          },
          {
            title: 'Gestión inteligente de energía',
            body: 'Los sistemas híbridos priorizan automáticamente la fuente energética más conveniente.'
          },
          {
            title: 'Escalabilidad',
            body: 'Es posible ampliar la capacidad agregando más paneles o baterías.'
          }
        ]
      },
      {
        title: 'Aplicaciones frecuentes',
        body: ['Los kits híbridos son ideales para:'],
        items: [
          'Viviendas con cortes frecuentes',
          'Comercios con equipos críticos',
          'Oficinas',
          'Industrias',
          'Campos y establecimientos rurales',
          'Sistemas de telecomunicaciones',
          'Instalaciones que requieren continuidad operativa'
        ]
      },
      {
        title: '¿Qué equipos pueden respaldarse?',
        body: ['Dependiendo del tamaño del sistema y del banco de baterías, pueden mantenerse operativos:'],
        items: [
          'Iluminación',
          'Heladeras y freezers',
          'Bombas de agua',
          'Equipos informáticos',
          'Cámaras de seguridad',
          'Internet y comunicaciones',
          'Equipos médicos',
          'Consumos críticos seleccionados'
        ]
      },
      {
        title: 'Tipos de baterías utilizadas',
        body: ['Actualmente los sistemas híbridos modernos utilizan principalmente baterías de litio LiFePO4 debido a sus ventajas:'],
        items: [
          'Mayor vida útil',
          'Alta seguridad',
          'Mejor rendimiento',
          'Bajo mantenimiento',
          'Mayor profundidad de descarga'
        ]
      },
      {
        title: '¿Cómo elegir un kit híbrido?',
        body: ['La selección depende de:'],
        items: [
          'Consumo energético',
          'Potencia requerida',
          'Tiempo de autonomía deseado',
          'Cantidad de equipos críticos',
          'Espacio disponible',
          'Tipo de conexión eléctrica',
          'Posibilidad de ampliación futura'
        ],
        subsections: [
          {
            title: 'Diseño equilibrado',
            body: 'Nuestro equipo analiza cada instalación para diseñar una solución equilibrada entre autonomía, rendimiento e inversión.'
          }
        ]
      },
      {
        title: 'Soluciones residenciales, comerciales e industriales',
        body: ['Disponemos de kits híbridos:'],
        items: [
          'Monofásicos y trifásicos',
          'De pequeña, mediana y gran potencia',
          'Compatibles con distintas marcas de baterías',
          'Escalables y preparados para futuras ampliaciones'
        ]
      },
      {
        title: 'Asesoramiento técnico especializado',
        body: [
          'Diseñamos sistemas híbridos personalizados para maximizar el ahorro energético y garantizar respaldo eléctrico confiable.',
          'Consultanos y te ayudamos a encontrar la mejor solución híbrida para tu hogar, comercio o industria.'
        ]
      }
    ],
    consultationFocus: 'dimensionar paneles, inversor híbrido, banco de baterías, autonomía y cargas críticas a respaldar',
    image: 'https://images.unsplash.com/photo-1613665813446-82a78c468a1d?auto=format&fit=crop&q=80&w=800',
    badge: 'Con respaldo'
  },
  {
    id: 'p3',
    slug: 'kits-solares-off-grid',
    name: 'Kits Solares Off-Grid',
    category: 'kits',
    description: 'Sistemas fotovoltaicos autónomos para generar y almacenar energía eléctrica sin conexión a la red, ideales para zonas rurales, lugares aislados y proyectos que requieren independencia energética total.',
    specifications: [
      'Paneles solares fotovoltaicos, inversor off-grid y baterías de litio o ciclo profundo.',
      'Regulador de carga solar, protecciones eléctricas AC/DC, estructuras de montaje, cableado y conectores.',
      'Sistema de monitoreo y materiales de instalación según la potencia y autonomía requerida.',
      'Opcionales: generador de respaldo, transferencia automática, expansión futura de baterías, monitoreo remoto y tablero de cargas críticas.'
    ],
    idealFor: [
      'Campos y establecimientos rurales',
      'Viviendas aisladas',
      'Cabañas',
      'Bombeo solar',
      'Motorhomes y camping',
      'Telecomunicaciones',
      'Cámaras y sistemas de seguridad',
      'Iluminación autónoma',
      'Refugios y puestos de trabajo remotos'
    ],
    detailIntro: 'Los kits solares off-grid son sistemas fotovoltaicos autónomos diseñados para generar y almacenar energía eléctrica sin necesidad de conexión a la red eléctrica. Utilizan paneles solares, inversores off-grid y bancos de baterías para abastecer consumos de manera continua, confiable e independiente.',
    detailPoints: [
      'Cómo funciona: durante el día, los paneles solares generan energía para alimentar los consumos y recargar las baterías. La energía almacenada se utiliza durante la noche o en momentos de baja generación solar.',
      'Autonomía total: los sistemas off-grid trabajan completamente independientes de la red eléctrica y permiten disponer de energía en zonas aisladas, rurales o remotas.',
      'Componentes principales: pueden incluir paneles solares, inversor off-grid, baterías de litio o ciclo profundo, regulador de carga, protecciones AC/DC, estructuras, cableado, conectores y monitoreo.',
      'Aplicaciones: se utilizan en campos, viviendas aisladas, cabañas, bombeo solar, motorhomes, camping, telecomunicaciones, cámaras, seguridad, iluminación autónoma y puestos remotos.',
      'Equipos alimentables: según la capacidad del sistema, pueden alimentar iluminación, televisores, heladeras, bombas de agua, herramientas eléctricas, comunicaciones, computadoras, electrodomésticos y viviendas rurales completas.',
      'Dimensionamiento: se define a partir del consumo energético diario, potencia simultánea requerida, horas de autonomía deseadas, ubicación geográfica, días de respaldo y posibilidad de ampliación futura.'
    ],
    detailSections: [
      {
        title: '¿Cómo funciona un sistema off-grid?',
        body: [
          'Durante el día, los paneles solares generan energía eléctrica que alimenta los consumos y recarga las baterías. La energía almacenada puede utilizarse posteriormente durante la noche o en momentos de baja generación solar.',
          'El inversor off-grid administra la energía del sistema y suministra corriente alterna para alimentar equipos eléctricos convencionales.',
          'Los sistemas autónomos trabajan completamente independientes de la red eléctrica.'
        ]
      },
      {
        title: '¿Qué incluye un kit solar off-grid?',
        body: ['Dependiendo de la configuración y potencia requerida, un kit puede incluir:'],
        items: [
          'Paneles solares fotovoltaicos',
          'Inversor off-grid',
          'Baterías de litio o ciclo profundo',
          'Regulador de carga solar',
          'Protecciones eléctricas AC y DC',
          'Estructuras de montaje',
          'Cableado y conectores',
          'Sistema de monitoreo',
          'Materiales de instalación'
        ],
        subsections: [
          {
            title: 'También pueden incorporarse',
            body: 'Generadores de respaldo, sistemas automáticos de transferencia, expansión futura de baterías, monitoreo remoto y tableros de cargas críticas.'
          }
        ]
      },
      {
        title: 'Principales ventajas de los sistemas off-grid',
        subsections: [
          {
            title: 'Independencia energética total',
            body: 'No requieren conexión a la red eléctrica.'
          },
          {
            title: 'Solución para zonas aisladas',
            body: 'Permiten disponer de energía en lugares rurales o alejados.'
          },
          {
            title: 'Energía limpia y renovable',
            body: 'Generan electricidad utilizando energía solar.'
          },
          {
            title: 'Bajo mantenimiento',
            body: 'Los equipos modernos requieren mantenimiento mínimo.'
          },
          {
            title: 'Escalabilidad',
            body: 'Pueden ampliarse agregando paneles y baterías.'
          }
        ]
      },
      {
        title: 'Aplicaciones frecuentes',
        body: ['Los kits solares off-grid se utilizan ampliamente en:'],
        items: [
          'Campos y establecimientos rurales',
          'Viviendas aisladas',
          'Cabañas',
          'Bombeo solar',
          'Motorhomes y camping',
          'Telecomunicaciones',
          'Cámaras y sistemas de seguridad',
          'Iluminación autónoma',
          'Refugios y puestos de trabajo remotos'
        ]
      },
      {
        title: '¿Qué equipos pueden alimentar?',
        body: ['Dependiendo de la capacidad del sistema:'],
        items: [
          'Iluminación',
          'Televisores',
          'Heladeras',
          'Bombas de agua',
          'Herramientas eléctricas',
          'Equipos de comunicación',
          'Computadoras',
          'Electrodomésticos',
          'Sistemas completos de viviendas rurales'
        ]
      },
      {
        title: 'Tipos de baterías',
        body: [
          'Los sistemas off-grid modernos utilizan principalmente baterías de litio LiFePO4 por su mayor vida útil, mejor rendimiento, alta eficiencia, menor mantenimiento y mayor profundidad de descarga.',
          'También existen opciones más económicas con baterías de plomo de ciclo profundo para aplicaciones específicas.'
        ]
      },
      {
        title: '¿Cómo elegir el kit adecuado?',
        body: ['Para dimensionar correctamente un sistema off-grid es necesario analizar:'],
        items: [
          'Consumo energético diario',
          'Potencia simultánea requerida',
          'Horas de autonomía deseadas',
          'Ubicación geográfica',
          'Días de respaldo necesarios',
          'Posibilidad de ampliación futura'
        ],
        subsections: [
          {
            title: 'Dimensionamiento confiable',
            body: 'Un correcto dimensionamiento es fundamental para asegurar el funcionamiento confiable del sistema.'
          }
        ]
      },
      {
        title: 'Soluciones para viviendas, campos y aplicaciones móviles',
        body: ['Disponemos de kits:'],
        items: [
          'Residenciales rurales',
          'Para bombeo solar',
          'Para motorhomes y camping',
          'Para telecomunicaciones',
          'De pequeña y gran potencia',
          'Monofásicos y trifásicos'
        ]
      },
      {
        title: 'Asesoramiento técnico especializado',
        body: [
          'Diseñamos sistemas autónomos personalizados según las necesidades reales de cada proyecto, optimizando autonomía, inversión y rendimiento energético.',
          'Consultanos para desarrollar una solución off-grid eficiente, segura y preparada para crecer junto a tus necesidades energéticas.'
        ]
      }
    ],
    consultationFocus: 'dimensionar consumo diario, potencia simultánea, banco de baterías, horas de autonomía, respaldo y ampliación futura',
    image: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&q=80&w=800',
    badge: 'Autonomía total'
  },
  {
    id: 'p4',
    slug: 'movilidad-electrica',
    name: 'Cargadores para Vehiculos Electricos',
    category: 'mobility',
    description: 'Cargadores inteligentes Growatt THOR para vehículos eléctricos, con carga AC segura, control por app, RFID, programación horaria, integración solar y gestión dinámica de potencia.',
    specifications: [
      'Gama Growatt THOR disponible: 07AS-P monofásico 230V de 7 kW, 11AS-P trifásico 400V de 11 kW y 22AS-P trifásico 400V de 22 kW.',
      'Conector Tipo 2 IEC 62196-2, compatible con prácticamente todos los vehículos eléctricos comercializados en Europa, Latinoamérica y gran parte del mercado mundial.',
      'Funciones inteligentes: Fast Mode, programación horaria, Off-Peak Mode, control por app ShinePhone, RFID, PV Linkage Mode y Load Balancing.',
      'Protecciones incorporadas contra sobretensión, subtensión, sobrecorriente, cortocircuito, fuga a tierra, sobretemperatura, rayos y corriente continua residual, con grado IP65 para interior o exterior.'
    ],
    idealFor: [
      'Hoteles',
      'Estaciones de servicio',
      'Centros comerciales',
      'Industrias',
      'Estacionamientos',
      'Empresas con flotas corporativas',
      'Usuarios residenciales con vehículo eléctrico',
      'Proyectos solares con carga vehicular'
    ],
    detailIntro: 'La movilidad eléctrica requiere equipos específicos para transferir energía de manera segura desde la red o desde sistemas de generación renovable hacia el vehículo. Los cargadores inteligentes Growatt THOR son estaciones de carga AC para vehículos eléctricos, pensadas para uso residencial, comercial e industrial.',
    detailPoints: [
      'Cómo funciona: la energía llega desde la red eléctrica en corriente alterna y el cargador se comunica con el vehículo para indicarle cuánta potencia puede tomar de forma segura. La conversión AC a DC se realiza dentro del automóvil mediante el cargador interno.',
      'Modelos disponibles: THOR 07AS-P monofásico 230V de 7 kW, THOR 11AS-P trifásico 400V de 11 kW y THOR 22AS-P trifásico 400V de 22 kW.',
      'Tiempos aproximados: para una batería de 60 kWh, una carga puede tomar 8 a 10 horas con 7 kW, 5 a 6 horas con 11 kW y 2,5 a 3 horas con 22 kW, según el estado inicial y las limitaciones del vehículo.',
      'Aplicaciones comerciales: hoteles, estaciones de servicio, centros comerciales e industrias pueden sumar carga EV como servicio diferencial, nueva unidad de negocio o infraestructura para flotas.',
      'Integración solar: con PV Linkage Mode, cuando la instalación fotovoltaica genera más energía de la que consume el edificio, el cargador puede usar ese excedente para cargar el vehículo.',
      'Gestión de potencia: Load Balancing mide el consumo total del edificio y reduce automáticamente la potencia de carga para no superar el límite contratado ni disparar protecciones.'
    ],
    detailSections: [
      {
        title: 'Introducción a la movilidad eléctrica',
        body: [
          'Un vehículo eléctrico almacena energía en baterías de litio que deben recargarse periódicamente desde la red eléctrica o desde sistemas de generación renovable.',
          'A diferencia de un vehículo convencional, los vehículos eléctricos requieren equipos específicos denominados EV Chargers o estaciones de carga para vehículos eléctricos.',
          'Los cargadores inteligentes Growatt THOR permiten realizar esta tarea de manera segura, eficiente y automatizada.'
        ]
      },
      {
        title: '¿Qué es un cargador AC?',
        body: [
          'Los modelos Growatt THOR son cargadores de corriente alterna (AC). La energía llega desde la red eléctrica en corriente alterna y el cargador se comunica con el vehículo para indicarle cuánta potencia puede tomar de forma segura.',
          'El cargador no carga directamente la batería: la conversión AC a DC se realiza dentro del propio automóvil mediante el cargador interno u On Board Charger.'
        ],
        items: [
          'Potencia del cargador THOR',
          'Potencia admitida por el vehículo',
          'Capacidad de la batería'
        ]
      },
      {
        title: 'Gama Growatt THOR disponible',
        items: [
          'THOR 07AS-P: monofásico 230V, 7 kW',
          'THOR 11AS-P: trifásico 400V, 11 kW',
          'THOR 22AS-P: trifásico 400V, 22 kW'
        ],
        subsections: [
          {
            title: 'Aplicación',
            body: 'Los modelos de 11 y 22 kW están diseñados tanto para aplicaciones residenciales como comerciales.'
          }
        ]
      },
      {
        title: 'Tiempos aproximados de carga',
        body: ['Para un vehículo con batería de 60 kWh, los tiempos estimados son:'],
        items: [
          '7 kW: 8 a 10 horas',
          '11 kW: 5 a 6 horas',
          '22 kW: 2,5 a 3 horas'
        ],
        subsections: [
          {
            title: 'Variables',
            body: 'El tiempo real depende del estado de carga inicial y de las limitaciones propias del vehículo.'
          }
        ]
      },
      {
        title: '¿Dónde tiene sentido instalar un cargador EV?',
        subsections: [
          {
            title: 'Hoteles',
            body: 'El huésped permanece varias horas estacionado, por lo que incluso un cargador de 7 kW puede recuperar entre 50 y 70 kWh durante una noche y convertirse en un servicio diferencial.'
          },
          {
            title: 'Estaciones de servicio',
            body: 'Permite atraer usuarios de vehículos eléctricos mientras consumen en minimercado o cafetería, y habilita una nueva unidad de negocio basada en venta de energía.'
          },
          {
            title: 'Centros comerciales',
            body: 'El vehículo permanece detenido durante horas y la carga puede ofrecerse gratuita, bonificada, con cobro por kWh o con cobro por tiempo de ocupación.'
          },
          {
            title: 'Industrias',
            body: 'La carga interna acompaña la incorporación de utilitarios eléctricos, autoelevadores eléctricos y flotas corporativas, reduciendo costos operativos y mejorando la sustentabilidad.'
          }
        ]
      },
      {
        title: 'Compatibilidad universal',
        body: [
          'Los cargadores THOR utilizan conector Tipo 2 IEC 62196-2, compatible con prácticamente todos los vehículos eléctricos comercializados en Europa, Latinoamérica y gran parte del mercado mundial.',
          'Growatt indica compatibilidad con todas las marcas de vehículos eléctricos.'
        ]
      },
      {
        title: 'Funciones inteligentes',
        subsections: [
          {
            title: 'Fast Mode',
            body: 'Carga a máxima potencia disponible, ideal para estaciones de servicio, comercios y usuarios que necesitan carga rápida.'
          },
          {
            title: 'Programación horaria',
            body: 'Permite definir hora de inicio, hora de finalización, energía objetivo en kWh y presupuesto máximo.'
          },
          {
            title: 'Off-Peak Mode',
            body: 'Permite cargar durante horarios de tarifa reducida en mercados con tarifas diferenciadas por horario.'
          },
          {
            title: 'Control por APP',
            body: 'Mediante ShinePhone, el usuario puede iniciar o detener carga, programar horarios, ver consumos y consultar estadísticas.'
          },
          {
            title: 'RFID',
            body: 'Permite habilitar la carga únicamente mediante tarjetas RFID, ideal para hoteles, empresas, flotas corporativas y estacionamientos.'
          }
        ]
      },
      {
        title: 'Integración con energía solar',
        body: [
          'Los cargadores THOR pueden trabajar junto con sistemas fotovoltaicos.',
          'Cuando la instalación solar genera más energía de la que consume el edificio, el cargador utiliza automáticamente ese excedente para cargar el vehículo.'
        ],
        items: [
          'Mayor autoconsumo solar',
          'Menor energía inyectada a la red',
          'Menor costo operativo',
          'Carga del vehículo con energía renovable'
        ],
        subsections: [
          {
            title: 'PV Linkage Mode',
            body: 'Growatt denomina PV Linkage Mode a la función que prioriza excedentes fotovoltaicos para la carga del vehículo.'
          }
        ]
      },
      {
        title: 'Load Balancing',
        body: [
          'El cargador mide el consumo total del edificio mediante un transformador de corriente o medidor inteligente.',
          'Si aumenta el consumo interno por aires acondicionados, motores, bombas o equipamiento industrial, el cargador reduce automáticamente su potencia para no superar el límite contratado ni disparar protecciones.'
        ]
      },
      {
        title: 'Protecciones incorporadas',
        body: ['Los THOR incorporan protección frente a:'],
        items: [
          'Sobretensión',
          'Subtensión',
          'Sobrecorriente',
          'Cortocircuito',
          'Fuga a tierra',
          'Sobretemperatura',
          'Protección contra rayos',
          'Detección de corriente continua residual'
        ],
        subsections: [
          {
            title: 'Instalación interior o exterior',
            body: 'Además poseen grado de protección IP65 para instalación interior o exterior.'
          }
        ]
      },
      {
        title: 'Propuesta comercial',
        subsections: [
          {
            title: 'Nivel 1 - Punto de carga básico',
            body: 'Cargador THOR, protecciones, instalación y puesta en marcha.'
          },
          {
            title: 'Nivel 2 - Punto de carga inteligente',
            body: 'THOR con gestión por app, RFID, control de usuarios y reportes de consumo.'
          },
          {
            title: 'Nivel 3 - Estación de carga solar',
            body: 'Cargador THOR, sistema fotovoltaico, gestión inteligente, Load Balancing y monitoreo remoto.'
          }
        ]
      }
    ],
    consultationFocus: 'definir modelo THOR, potencia monofásica o trifásica, instalación eléctrica, control de usuarios, integración solar y Load Balancing',
    image: 'https://www.manuelacanteros.com/wp-content/uploads/2026/06/Cargador-de-Vehiculos-Electricos-Growatt-Thor-7kW-Monofasico.png',
    badge: 'Carga EV'
  },
  {
    id: 'p16',
    slug: 'estaciones-de-carga-portatiles',
    name: 'Estaciones de Carga Portátiles',
    category: 'storage',
    description: 'Sistemas portátiles de almacenamiento de energía diseñados para alimentar equipos eléctricos y electrónicos en cualquier lugar, de manera segura, silenciosa y sin necesidad de combustibles.',
    specifications: [
      'Equipo todo en uno con batería de alta capacidad, inversor incorporado, salidas AC/DC, USB, USB-C y sistema de carga inteligente.',
      'Funcionamiento silencioso, sin humo ni combustibles, ideal para respaldo energético, emergencias, camping, motorhomes y trabajo móvil.',
      'Protecciones electrónicas contra sobrecarga, cortocircuito y sobretemperatura, más pantalla de monitoreo según modelo.',
      'Carga desde red eléctrica, paneles solares, vehículo o generador, con opciones de carga ultrarrápida y gestión inteligente de energía.'
    ],
    idealFor: [
      'Respaldo ante cortes',
      'Camping y motorhomes',
      'Actividades al aire libre',
      'Trabajo móvil',
      'Telecomunicaciones y conectividad',
      'Iluminación portátil',
      'Notebooks, celulares, cámaras y drones',
      'Herramientas eléctricas',
      'Equipos médicos pequeños'
    ],
    detailIntro: 'Las estaciones de carga portátiles son sistemas de almacenamiento de energía diseñados para alimentar equipos eléctricos y electrónicos en cualquier lugar, de manera segura, silenciosa y sin necesidad de combustibles. Son una solución práctica y versátil para respaldo energético, actividades al aire libre, emergencias, trabajos móviles, motorhomes, camping y aplicaciones profesionales.',
    detailPoints: [
      'Integran batería, inversor, salidas de energía, carga inteligente, protecciones electrónicas y pantalla de monitoreo en un solo equipo transportable.',
      'Permiten almacenar energía y utilizarla posteriormente para alimentar múltiples dispositivos y equipos eléctricos.',
      'La elección depende de potencia de los equipos, autonomía deseada, capacidad de batería, salidas requeridas, portabilidad y compatibilidad solar.'
    ],
    detailSections: [
      {
        title: '¿Qué es una estación de carga portátil?',
        body: [
          'Una estación de energía portátil integra en un solo equipo los componentes necesarios para almacenar energía y entregarla a distintos dispositivos de forma segura.'
        ],
        items: [
          'Batería de alta capacidad',
          'Inversor incorporado',
          'Salidas AC y DC',
          'Puertos USB y USB-C',
          'Sistema de carga inteligente',
          'Protecciones electrónicas',
          'Pantalla de monitoreo'
        ]
      },
      {
        title: '¿Para qué sirven?',
        body: [
          'Las estaciones portátiles pueden cubrir usos residenciales, recreativos y profesionales cuando se necesita energía sin depender de la red eléctrica.'
        ],
        items: [
          'Respaldo ante cortes de energía',
          'Camping y actividades al aire libre',
          'Motorhomes y viajes',
          'Alimentar notebooks y celulares',
          'Equipos de trabajo móvil',
          'Herramientas eléctricas',
          'Cámaras y drones',
          'Iluminación portátil',
          'Equipos médicos pequeños',
          'Telecomunicaciones y conectividad'
        ]
      },
      {
        title: 'Principales ventajas',
        subsections: [
          {
            title: 'Energía portátil y silenciosa',
            body: 'Funcionan sin ruido, humo ni combustibles.'
          },
          {
            title: 'Fácil transporte',
            body: 'Están diseñadas para trasladarse cómodamente gracias a su formato compacto.'
          },
          {
            title: 'Carga múltiple de dispositivos',
            body: 'Permiten alimentar simultáneamente distintos equipos mediante múltiples salidas.'
          },
          {
            title: 'Seguridad y protección',
            body: 'Incorporan sistemas electrónicos avanzados de protección contra sobrecarga, cortocircuito y sobretemperatura.'
          },
          {
            title: 'Compatibilidad solar',
            body: 'Muchos modelos permiten recargarse mediante paneles solares, logrando sistemas totalmente autónomos.'
          }
        ]
      },
      {
        title: 'Tipos de salidas disponibles',
        body: ['Dependiendo del modelo, pueden incluir:'],
        items: [
          'Tomas AC 220V',
          'USB',
          'USB-C Power Delivery',
          'Salidas DC',
          'Encendedor vehicular 12V',
          'Carga inalámbrica'
        ]
      },
      {
        title: '¿Cómo se cargan?',
        body: [
          'Las estaciones portátiles pueden cargarse desde distintas fuentes. Algunos modelos incorporan carga ultrarrápida y gestión inteligente de energía.'
        ],
        items: [
          'Red eléctrica',
          'Paneles solares',
          'Vehículo',
          'Generadores'
        ]
      },
      {
        title: 'Tecnologías de batería',
        body: [
          'La mayoría de los equipos modernos utilizan baterías de litio LiFePO4 o litio de alta densidad energética.'
        ],
        items: [
          'Mayor vida útil',
          'Alta seguridad',
          'Bajo mantenimiento',
          'Excelente rendimiento'
        ]
      },
      {
        title: '¿Cómo elegir una estación portátil?',
        body: ['La elección depende de los consumos reales y del contexto de uso:'],
        items: [
          'Potencia de los equipos a alimentar',
          'Tiempo de autonomía deseado',
          'Capacidad de batería',
          'Tipo de salidas requeridas',
          'Portabilidad necesaria',
          'Compatibilidad solar'
        ],
        subsections: [
          {
            title: 'Análisis correcto',
            body: 'Un correcto análisis permite seleccionar el equipo ideal para cada aplicación.'
          }
        ]
      },
      {
        title: 'Aplicaciones residenciales, recreativas y profesionales',
        body: ['Disponemos de estaciones de carga:'],
        items: [
          'Compactas y ultraportátiles',
          'De respaldo residencial',
          'Para trabajo profesional',
          'Compatibles con paneles solares',
          'De alta capacidad energética'
        ]
      },
      {
        title: 'Beneficios de combinar con energía solar',
        body: ['La integración con paneles solares permite:'],
        items: [
          'Recarga autónoma',
          'Mayor independencia energética',
          'Uso prolongado en exteriores',
          'Reducción del consumo eléctrico convencional'
        ]
      }
    ],
    consultationFocus: 'definir potencia de equipos, autonomía deseada, capacidad de batería, salidas requeridas, portabilidad, compatibilidad solar y forma de recarga',
    image: 'https://www.manuelacanteros.com/wp-content/uploads/2026/06/Growatt-Infinity-1300-Pro-estacion-de-energia-portatil.png',
    badge: 'Portátil'
  },
  {
    id: 'p5',
    slug: 'paneles-solares',
    name: 'Paneles Solares',
    category: 'solar',
    description: 'Los paneles solares fotovoltaicos permiten transformar la energía del sol en electricidad para abastecer viviendas, comercios, industrias y aplicaciones rurales. Son el componente principal de cualquier sistema de energía solar y representan una solución eficiente, sustentable y de bajo mantenimiento para reducir el consumo eléctrico y ganar independencia energética.',
    specifications: [
      'Paneles monocristalinos de alta eficiencia para instalaciones residenciales, comerciales e industriales.',
      'Compatibles con inversores on-grid, híbridos, off-grid y reguladores MPPT según el diseño del sistema.',
      'Estructura de aluminio, vidrio templado y cajas de conexión preparadas para trabajo a la intemperie.',
      'Selección por potencia, tensión de operación, dimensiones, garantía y compatibilidad con el resto del proyecto.'
    ],
    idealFor: [
      'Kits solares nuevos',
      'Ampliaciones de sistemas fotovoltaicos',
      'Viviendas',
      'Comercios',
      'Industrias',
      'Campos y sistemas autónomos'
    ],
    detailIntro: 'Los paneles solares fotovoltaicos permiten transformar la energía del sol en electricidad para abastecer viviendas, comercios, industrias y aplicaciones rurales. Son el componente principal de cualquier sistema de energía solar y representan una solución eficiente, sustentable y de bajo mantenimiento para reducir el consumo eléctrico y ganar independencia energética.',
    detailPoints: [
      'La elección del panel depende de la potencia requerida, el espacio disponible, la orientación del techo, el tipo de inversor y el objetivo de generación.',
      'Pueden instalarse en techos, estructuras sobre suelo, pérgolas técnicas o soportes especiales según el proyecto.',
      'Un buen dimensionamiento evita sobredimensionar equipos y mejora el retorno de inversión del sistema completo.'
    ],
    detailSections: [
      {
        title: '¿Para qué sirven los paneles solares?',
        items: [
          'Reducir el consumo de energía de red',
          'Disminuir el costo de la factura eléctrica',
          'Alimentar sistemas aislados sin acceso a red eléctrica',
          'Proveer energía de respaldo junto con baterías',
          'Abastecer bombas solares, cámaras, iluminación y equipos rurales',
          'Desarrollar proyectos comerciales e industriales de gran escala'
        ]
      },
      {
        title: 'Tipos de paneles solares',
        subsections: [
          {
            title: 'Paneles monocristalinos',
            body: 'Son los más utilizados actualmente debido a su alta eficiencia y excelente rendimiento en espacios reducidos.'
          },
          {
            title: 'Paneles bifaciales',
            body: 'Permiten captar radiación solar tanto en la cara frontal como posterior, aumentando la generación energética en determinadas condiciones de instalación.'
          },
          {
            title: 'Paneles tipo N y dual glass',
            body: 'Tecnologías de última generación con mayor vida útil, menor degradación y mejor comportamiento térmico.'
          }
        ]
      },
      {
        title: '¿Cómo elegir el panel solar adecuado?',
        body: ['La elección depende de varios factores:'],
        items: [
          'Consumo energético diario o mensual',
          'Espacio disponible para instalación',
          'Tipo de sistema (on-grid, híbrido u off-grid)',
          'Potencia requerida',
          'Presupuesto disponible',
          'Condiciones climáticas y orientación del techo'
        ]
      },
      {
        title: 'Aplicaciones frecuentes',
        items: [
          'Viviendas',
          'Comercios',
          'Industrias',
          'Campos y establecimientos rurales',
          'Sistemas de bombeo solar',
          'Motorhomes y camping',
          'Telecomunicaciones',
          'Sistemas autónomos',
        ]
      },
      {
        title: 'Ventajas de la energía solar',
        items: [
          'Ahorro económico',
          'Energía limpia y renovable',
          'Bajo mantenimiento',
          'Larga vida útil',
          'Incremento del valor de la propiedad',
          'Independencia energética'
        ]
      },
    ],
    consultationFocus: 'definir potencia, cantidad de módulos, compatibilidad con inversor, estructura y objetivo de generación',
    image: 'https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?auto=format&fit=crop&q=80&w=800',
    badge: 'Generación'
  },
  {
    id: 'p6',
    slug: 'inversores',
    name: 'Inversores',
    category: 'solar',
    description: 'Los inversores solares son el corazón electrónico de una instalación fotovoltaica. Su función principal es convertir la corriente continua (DC) generada por los paneles solares en corriente alterna (AC), permitiendo alimentar equipos eléctricos y conectar el sistema a la red eléctrica o a bancos de baterías.',
    specifications: [
      'Conversión de corriente continua (DC) de los paneles en corriente alterna (AC) utilizable por la instalación.',
      'Opciones on-grid, híbridas y off-grid para proyectos residenciales, comerciales, industriales y rurales.',
      'Modelos monofásicos y trifásicos, con uno o múltiples MPPT según arreglo fotovoltaico y escala del sistema.',
      'Funciones disponibles según modelo: monitoreo WiFi, protección eléctrica integrada, compatibilidad con baterías de litio y gestión avanzada de energía.'
    ],
    idealFor: [
      'Viviendas',
      'Comercios',
      'Industrias',
      'Oficinas',
      'Sistemas on-grid',
      'Sistemas con baterías',
      'Campos y establecimientos rurales',
      'Instalaciones críticas'
    ],
    detailIntro: 'Los inversores solares son el corazón electrónico de una instalación fotovoltaica. Su función principal es convertir la corriente continua (DC) generada por los paneles solares en corriente alterna (AC), permitiendo alimentar equipos eléctricos y conectar el sistema a la red eléctrica o a bancos de baterías.',
    detailPoints: [
      'La correcta selección del inversor es fundamental para lograr un sistema eficiente, seguro y confiable.',
      'Muchos modelos actuales incorporan monitoreo WiFi, múltiples seguidores MPPT, protecciones integradas y funciones avanzadas de gestión energética.',
      'El dimensionamiento debe contemplar potencia total de consumo, conexión eléctrica, cantidad de paneles, baterías, potencia de arranque, ampliación futura y disponibilidad de red.'
    ],
    detailSections: [
      {
        title: '¿Qué hace un inversor solar?',
        body: [
          'El inversor administra y optimiza la energía generada por los paneles solares para que pueda utilizarse en consumos eléctricos, sistemas conectados a red o instalaciones con baterías.',
          'La selección correcta del equipo define la eficiencia, seguridad, confiabilidad y posibilidad de crecimiento de todo el sistema fotovoltaico.'
        ],
        items: [
          'Alimentar consumos eléctricos',
          'Inyectar excedentes a la red',
          'Cargar bancos de baterías',
          'Gestionar sistemas de respaldo energético',
          'Supervisar la producción solar',
          'Proteger la instalación eléctrica'
        ]
      },
      {
        title: 'Tipos de inversores solares',
        subsections: [
          {
            title: 'Inversores On-Grid',
            body: 'Están diseñados para instalaciones conectadas a la red eléctrica. Permiten reducir el consumo de energía de red aprovechando la generación solar durante el día. Son ideales para viviendas, comercios, industrias y oficinas.'
          },
          {
            title: 'Inversores Híbridos',
            body: 'Combinan energía solar, red eléctrica y baterías. Permiten disponer de respaldo energético durante cortes de suministro y optimizar el autoconsumo. Son recomendables para sistemas con baterías, lugares con cortes frecuentes, instalaciones críticas y proyectos que buscan mayor independencia energética.'
          },
          {
            title: 'Inversores Off-Grid',
            body: 'Funcionan de manera completamente autónoma, sin conexión a la red eléctrica. Se utilizan en sistemas aislados alimentados por paneles solares y baterías, como campos, establecimientos rurales, motorhomes, cabañas, telecomunicaciones y bombeo solar.'
          }
        ]
      },
      {
        title: '¿Cómo elegir el inversor adecuado?',
        body: ['La selección depende de varios factores técnicos:'],
        items: [
          'Potencia total de consumo',
          'Tipo de conexión eléctrica monofásica o trifásica',
          'Cantidad de paneles solares',
          'Necesidad de baterías',
          'Potencia de arranque de los equipos',
          'Posibilidad de ampliación futura',
          'Disponibilidad de red eléctrica'
        ],
        subsections: [
          {
            title: 'Dimensionamiento correcto',
            body: 'Un correcto dimensionamiento garantiza mayor eficiencia, seguridad y vida útil del sistema.'
          }
        ]
      },
      {
        title: 'Marcas y tecnologías',
        body: [
          'Trabajamos con inversores solares de marcas reconocidas internacionalmente, seleccionadas por su confiabilidad, soporte técnico y compatibilidad con distintas tecnologías de paneles y baterías.'
        ],
        items: [
          'Equipos monofásicos y trifásicos',
          'Modelos con uno o múltiples MPPT',
          'Monitoreo remoto',
          'Compatibilidad con baterías de litio',
          'Aplicaciones residenciales e industriales'
        ]
      },
      {
        title: 'Beneficios de un buen inversor solar',
        items: [
          'Mayor eficiencia energética',
          'Mejor aprovechamiento de los paneles',
          'Protección eléctrica avanzada',
          'Monitoreo de generación en tiempo real',
          'Mayor vida útil del sistema',
          'Escalabilidad y expansión futura'
        ]
      }
    ],
    consultationFocus: 'elegir tipo de inversor, potencia total, conexión monofásica o trifásica, cantidad de paneles, necesidad de baterías, MPPT, monitoreo y ampliación futura',
    image: 'https://www.manuelacanteros.com/wp-content/uploads/2026/06/Inversor-GoodWe-GW1500-XS-G3.png',
    badge: 'Conversión'
  },
  {
    id: 'p7',
    slug: 'baterias-de-litio',
    name: 'Baterías de Litio',
    category: 'storage',
    description: 'Baterías solares para almacenar la energía generada por paneles y utilizarla durante la noche, días nublados o cortes de energía. Son clave en sistemas híbridos y off-grid porque aportan autonomía, respaldo y mayor independencia de la red eléctrica.',
    specifications: [
      'Tecnología LiFePO4 recomendada para sistemas solares modernos por vida útil, eficiencia, seguridad y profundidad de descarga.',
      'Aplicación en sistemas híbridos, off-grid, respaldo energético, telecomunicaciones, cámaras, motorhomes, embarcaciones y UPS solares.',
      'Compatibilidad con inversores híbridos y off-grid monofásicos o trifásicos, según tensión, comunicación, BMS y capacidad.',
      'Opciones modulares con expansión futura, trabajo en paralelo, monitoreo remoto y gestión de múltiples módulos de almacenamiento.'
    ],
    idealFor: [
      'Sistemas híbridos residenciales',
      'Sistemas off-grid',
      'Respaldo ante cortes',
      'Campos y zonas rurales',
      'Telecomunicaciones',
      'Cámaras de seguridad',
      'Motorhomes y embarcaciones',
      'Equipos críticos y UPS solares'
    ],
    detailIntro: 'Las baterías solares permiten almacenar la energía generada por los paneles para utilizarla posteriormente cuando no hay generación disponible, como durante la noche, días nublados o cortes de energía. Son un componente fundamental en sistemas híbridos y off-grid, ya que brindan autonomía energética, respaldo y mayor independencia de la red eléctrica.',
    detailPoints: [
      'Durante el día, la energía generada por los paneles puede cargar las baterías; luego esa energía almacenada se utiliza cuando disminuye o desaparece la generación solar.',
      'Los inversores híbridos y off-grid administran automáticamente la carga y descarga para optimizar rendimiento y vida útil.',
      'La capacidad necesaria depende del consumo energético diario, horas de autonomía deseadas, potencia de equipos críticos, tipo de sistema y posibilidad de ampliación futura.'
    ],
    detailSections: [
      {
        title: '¿Para qué sirven las baterías solares?',
        body: [
          'Las baterías almacenan energía para cubrir consumos cuando los paneles no están generando y para sostener equipos importantes ante interrupciones del suministro.'
        ],
        items: [
          'Utilizar electricidad durante la noche',
          'Mantener consumos críticos ante cortes de energía',
          'Mejorar el autoconsumo solar',
          'Alimentar instalaciones aisladas',
          'Reducir la dependencia de la red eléctrica',
          'Garantizar continuidad operativa en equipos importantes'
        ]
      },
      {
        title: 'Tipos de baterías para energía solar',
        subsections: [
          {
            title: 'Baterías de Litio LiFePO4',
            body: 'Son la tecnología más avanzada y recomendada para sistemas solares modernos por mayor vida útil, alta eficiencia, mayor profundidad de descarga, menor mantenimiento, carga más rápida y seguridad.'
          },
          {
            title: 'Baterías de ciclo profundo',
            body: 'Son una tecnología tradicional utilizada en aplicaciones off-grid y sistemas autónomos. Se destacan por menor inversión inicial, buena robustez y amplia disponibilidad.'
          }
        ]
      },
      {
        title: 'Aplicaciones ideales de litio LiFePO4',
        items: [
          'Sistemas híbridos',
          'Instalaciones residenciales',
          'Comercios',
          'Sistemas de respaldo',
          'Aplicaciones industriales',
          'Proyectos que requieren alta eficiencia y baja intervención'
        ]
      },
      {
        title: 'Usos frecuentes de ciclo profundo',
        items: [
          'Sistemas rurales',
          'Bombeo solar',
          'Motorhomes',
          'Instalaciones pequeñas'
        ]
      },
      {
        title: '¿Cómo funciona un banco de baterías?',
        body: [
          'Durante el día, la energía solar puede utilizarse para cargar las baterías. Posteriormente, esa energía almacenada se usa cuando disminuye la generación solar o cuando se produce un corte.',
          'Los inversores híbridos y off-grid administran la carga y descarga de forma automática para cuidar rendimiento, seguridad y vida útil.'
        ]
      },
      {
        title: '¿Qué capacidad de batería necesito?',
        body: ['La capacidad adecuada se define a partir del uso real del sistema:'],
        items: [
          'Consumo energético diario',
          'Cantidad de horas de autonomía deseadas',
          'Potencia de los equipos críticos',
          'Tipo de sistema solar',
          'Posibilidad de ampliación futura'
        ],
        subsections: [
          {
            title: 'Equilibrio técnico y económico',
            body: 'Un correcto dimensionamiento permite lograr un equilibrio adecuado entre autonomía, rendimiento e inversión.'
          }
        ]
      },
      {
        title: 'Aplicaciones frecuentes',
        items: [
          'Sistemas híbridos residenciales',
          'Sistemas off-grid',
          'Respaldo energético',
          'Campos y zonas rurales',
          'Telecomunicaciones',
          'Cámaras de seguridad',
          'Motorhomes y embarcaciones',
          'Equipos críticos y UPS solares'
        ]
      },
      {
        title: 'Beneficios de incorporar baterías',
        subsections: [
          {
            title: 'Respaldo ante cortes eléctricos',
            body: 'Permiten mantener funcionando equipos importantes durante interrupciones del suministro.'
          },
          {
            title: 'Mayor aprovechamiento de la energía solar',
            body: 'La energía generada durante el día puede utilizarse también durante la noche.'
          },
          {
            title: 'Independencia energética',
            body: 'Reducen la dependencia de la red eléctrica.'
          },
          {
            title: 'Gestión inteligente de energía',
            body: 'Ayudan a optimizar consumos y horarios de utilización.'
          }
        ]
      },
      {
        title: 'Compatibilidad y expansión',
        body: [
          'Disponemos de baterías compatibles con múltiples marcas de inversores híbridos y off-grid, tanto monofásicos como trifásicos.'
        ],
        items: [
          'Ampliar capacidad futura',
          'Trabajar en paralelo',
          'Integrar monitoreo remoto',
          'Gestionar múltiples módulos de almacenamiento'
        ]
      }
    ],
    consultationFocus: 'calcular capacidad útil, autonomía requerida, consumos críticos, tipo de sistema solar, compatibilidad con inversor, tensión, comunicación BMS, monitoreo y expansión futura',
    image: 'https://www.manuelacanteros.com/wp-content/uploads/2026/05/Bateria-de-Litio-Deye-16-kWh.png',
    badge: 'LiFePO4'
  },
  {
    id: 'p8',
    slug: 'estructuras-para-paneles',
    name: 'Estructuras para Paneles Solares',
    category: 'solar',
    description: 'Sistemas de soporte para fijar módulos fotovoltaicos de manera segura, eficiente y duradera sobre techos, cubiertas o instalaciones en suelo, garantizando estabilidad mecánica y óptimo aprovechamiento de la radiación solar.',
    specifications: [
      'Sistemas de soporte para techos, cubiertas, instalaciones en suelo y proyectos fotovoltaicos de distintas escalas.',
      'Opciones coplanares, inclinadas, para suelo, miniriel y sistemas compactos según superficie y objetivo de instalación.',
      'Materiales habituales: aluminio anodizado, acero galvanizado y acero inoxidable, con resistencia mecánica y protección anticorrosiva.',
      'Componentes de montaje como perfiles estructurales, mordazas, tornillería inoxidable, grampas, soportes, anclajes, uniones y accesorios de puesta a tierra.'
    ],
    idealFor: [
      'Viviendas',
      'Comercios',
      'Industrias',
      'Campos y establecimientos rurales',
      'Parques fotovoltaicos',
      'Bombeo solar',
      'Cocheras solares',
      'Motorhomes y aplicaciones móviles'
    ],
    detailIntro: 'Las estructuras para paneles solares son los sistemas de soporte que permiten fijar los módulos fotovoltaicos de manera segura, eficiente y duradera sobre techos, cubiertas o instalaciones en suelo. Una correcta estructura es fundamental para garantizar la estabilidad mecánica, la seguridad de la instalación y el óptimo aprovechamiento de la radiación solar.',
    detailPoints: [
      'Permiten fijar los paneles solares de forma segura, resistir cargas de viento y condiciones climáticas, y proteger la instalación a largo plazo.',
      'Cada tipo de estructura se selecciona según las características del proyecto y de la superficie de instalación.',
      'Un correcto diseño estructural es esencial para garantizar seguridad, durabilidad, mantenimiento ordenado y mejor rendimiento energético.'
    ],
    detailSections: [
      {
        title: '¿Para qué sirven las estructuras solares?',
        body: [
          'Las estructuras solares sostienen los módulos fotovoltaicos y definen cómo quedan orientados, inclinados y fijados durante toda la vida útil de la instalación.'
        ],
        items: [
          'Fijar los paneles solares de forma segura',
          'Resistir cargas de viento y condiciones climáticas',
          'Optimizar la orientación e inclinación de los módulos',
          'Facilitar el montaje y mantenimiento',
          'Proteger la instalación a largo plazo'
        ]
      },
      {
        title: 'Tipos de estructuras para paneles solares',
        subsections: [
          {
            title: 'Estructuras coplanares',
            body: 'Permiten instalar los paneles paralelos al techo existente. Son ideales para techos de chapa, cubiertas inclinadas, viviendas, comercios e industrias.'
          },
          {
            title: 'Estructuras inclinadas',
            body: 'Permiten modificar el ángulo de inclinación de los paneles para mejorar el rendimiento solar. Se utilizan frecuentemente sobre techo plano, sistemas de autoconsumo y proyectos donde se busca optimizar la orientación solar.'
          },
          {
            title: 'Estructuras para suelo',
            body: 'Diseñadas para instalaciones en terreno o parques solares, como campos, industrias, grandes potencias, sistemas rurales y plantas fotovoltaicas.'
          },
          {
            title: 'Miniriel y sistemas compactos',
            body: 'Soluciones rápidas y eficientes para instalaciones residenciales y comerciales de pequeña y mediana escala.'
          }
        ]
      },
      {
        title: 'Materiales utilizados',
        body: [
          'Las estructuras solares modernas se fabrican generalmente con materiales resistentes a la intemperie y pensados para larga vida útil.'
        ],
        items: [
          'Aluminio anodizado',
          'Acero galvanizado',
          'Acero inoxidable',
          'Alta resistencia mecánica',
          'Protección anticorrosiva',
          'Bajo mantenimiento'
        ]
      },
      {
        title: 'Factores importantes para elegir una estructura',
        body: ['La selección depende de las condiciones técnicas del proyecto y de la superficie donde se instalarán los paneles:'],
        items: [
          'Tipo de techo o superficie',
          'Cantidad de paneles',
          'Zona climática',
          'Cargas de viento',
          'Inclinación requerida',
          'Tipo de panel solar',
          'Facilidad de instalación y mantenimiento'
        ],
        subsections: [
          {
            title: 'Diseño estructural',
            body: 'Un correcto diseño estructural es esencial para garantizar seguridad y durabilidad.'
          }
        ]
      },
      {
        title: 'Aplicaciones frecuentes',
        items: [
          'Viviendas',
          'Comercios',
          'Industrias',
          'Campos y establecimientos rurales',
          'Cocheras solares',
          'Parques fotovoltaicos',
          'Bombeo solar',
          'Motorhomes y aplicaciones móviles'
        ]
      },
      {
        title: '¿Qué incluye un sistema de montaje?',
        body: ['Dependiendo del proyecto, puede incluir:'],
        items: [
          'Perfiles estructurales',
          'Mordazas de fijación',
          'Tornillería inoxidable',
          'Grampas intermedias y finales',
          'Soportes y anclajes',
          'Kits de unión',
          'Bases para suelo o techo',
          'Accesorios de puesta a tierra'
        ]
      },
      {
        title: 'Ventajas de una estructura de calidad',
        subsections: [
          {
            title: 'Mayor seguridad',
            body: 'Garantiza estabilidad frente a viento y cargas climáticas.'
          },
          {
            title: 'Mejor rendimiento energético',
            body: 'Permite optimizar orientación e inclinación de los paneles.'
          },
          {
            title: 'Mayor durabilidad',
            body: 'Protege la instalación durante muchos años.'
          },
          {
            title: 'Instalación más rápida y ordenada',
            body: 'Facilita el trabajo técnico y el mantenimiento futuro.'
          }
        ]
      },
      {
        title: 'Soluciones para todo tipo de proyectos',
        items:[
          'Techos de chapa',
          'Techos planos',
          'Techos inclinados',
          'Instalaciones en suelo',
          'Sistemas residenciales',
          'Proyectos comerciales e industriales'
        ]
      }
    ],
    consultationFocus: 'definir tipo de techo o superficie, cantidad de paneles, zona climática, cargas de viento, inclinación requerida, tipo de panel y sistema de montaje',
    image: 'https://images.unsplash.com/photo-1548613053-220ef3db44af?auto=format&fit=crop&q=80&w=800',
    badge: 'Montaje'
  },
  {
    id: 'p9',
    slug: 'baterias-de-plomo',
    name: 'Baterías de Plomo',
    category: 'storage',
    description: 'Baterías de plomo AGM, gel y ciclo profundo para almacenamiento solar, UPS, telecomunicaciones, respaldo energético e instalaciones aisladas que buscan confiabilidad, disponibilidad y menor inversión inicial.',
    specifications: [
      'Tecnologías AGM, gel, ciclo profundo e inundadas según aplicación, presupuesto y régimen de uso.',
      'Opciones selladas VRLA libres de mantenimiento para respaldo, telecomunicaciones, UPS y bancos solares.',
      'Bancos configurables en 12V, 24V o 48V de acuerdo con el inversor, cargador y autonomía requerida.',
      'Marcas disponibles como Leoch, Ultracell, Vision y Ritar, con capacidades para respaldo y energía solar.'
    ],
    idealFor: [
      'Sistemas solares off-grid',
      'Sistemas híbridos con respaldo',
      'UPS y energía crítica',
      'Telecomunicaciones',
      'Motorhomes y náutica',
      'Electrificación rural'
    ],
    detailIntro: 'Las baterías de plomo continúan siendo una tecnología muy utilizada para almacenar energía en sistemas solares fotovoltaicos, telecomunicaciones, UPS, respaldo energético e instalaciones aisladas. Su bajo costo inicial, amplia disponibilidad y compatibilidad con muchos equipos las mantienen vigentes en proyectos residenciales, comerciales, industriales y rurales.',
    detailPoints: [
      'Las baterías AGM son selladas, seguras, libres de mantenimiento y muy utilizadas en sistemas solares, UPS, alarmas, telecomunicaciones y respaldo energético.',
      'Las baterías GEL ofrecen mejor desempeño ante descargas profundas, mayor vida útil y muy buen comportamiento para uso solar intensivo.',
      'El dimensionamiento debe contemplar tensión del sistema, consumo diario, autonomía, frecuencia de uso, espacio disponible y presupuesto.'
    ],
    detailSections: [
      {
        title: '¿Qué es una batería de plomo?',
        body: [
          'Una batería de plomo almacena energía eléctrica en forma química y la libera cuando el sistema la necesita. Está compuesta por placas positivas de dióxido de plomo, placas negativas de plomo, electrolito a base de ácido sulfúrico, separadores aislantes y una carcasa de protección.',
          'Durante la descarga se produce una reacción química que entrega electricidad. Durante la carga, esa reacción se invierte para volver a almacenar energía.'
        ]
      },
      {
        title: 'Principales tipos de baterías de plomo',
        subsections: [
          {
            title: 'Plomo ácido inundadas',
            body: 'Son las baterías tradicionales con electrolito líquido libre. Tienen menor costo inicial y tecnología muy probada, pero requieren reposición de agua, ventilación adecuada y mayor cuidado operativo.'
          },
          {
            title: 'AGM',
            body: 'Utilizan separadores de fibra de vidrio absorbente que retienen el electrolito y evitan derrames. Son selladas, libres de mantenimiento, con baja emisión de gases y buen desempeño en altas corrientes.'
          },
          {
            title: 'GEL',
            body: 'Usan un electrolito espesado mediante sílice. Son recomendables para ciclo profundo, energía solar y bancos que requieren mejor comportamiento ante descargas profundas.'
          },
          {
            title: 'Ciclo profundo',
            body: 'Están diseñadas para soportar cargas y descargas repetidas. Pueden encontrarse en tecnología AGM o GEL y son adecuadas para almacenamiento energético, sistemas solares aislados, motorhomes, náutica y bancos de baterías.'
          }
        ]
      },
      {
        title: 'AGM o GEL: cuál elegir',
        subsections: [
          {
            title: 'AGM',
            body: 'Convienen para sistemas pequeños y económicos, respaldo ocasional, UPS, telecomunicaciones, alarmas, motorhomes y aplicaciones donde se busca buena relación costo-beneficio.'
          },
          {
            title: 'GEL',
            body: 'Suelen ser la mejor opción para uso solar más intensivo porque ofrecen mayor vida útil, más ciclos de carga y descarga, mejor comportamiento ante descargas profundas y buena resistencia a temperaturas elevadas.'
          },
          {
            title: 'Litio en grandes instalaciones',
            body: 'En proyectos de mayor escala muchas instalaciones migran hacia baterías de litio, aunque las baterías GEL siguen siendo una alternativa competitiva cuando el presupuesto inicial es un factor clave.'
          }
        ]
      },
      {
        title: 'Aplicaciones frecuentes',
        items: [
          'Sistemas solares off-grid e híbridos',
          'Bombeo solar y electrificación rural',
          'UPS, centros de datos y equipos médicos',
          'Telecomunicaciones y monitoreo remoto',
          'Motorhomes, casas rodantes, embarcaciones y vehículos especiales',
          'Automatización, seguridad y alumbrado autónomo'
        ]
      },
      {
        title: 'Ventajas de las baterías de plomo',
        items: [
          'Tecnología madura y confiable',
          'Menor inversión inicial',
          'Amplia disponibilidad',
          'Fácil reemplazo',
          'Compatibilidad con una gran variedad de inversores y cargadores',
          'Muy buen desempeño para respaldo energético'
        ]
      },
      {
        title: 'Marcas y modelos disponibles',
        subsections: [
          {
            title: 'AGM',
            body: 'Leoch AGM, Ultracell AGM, Vision AGM y Ritar AGM. Entre las opciones disponibles se destacan baterías Leoch LPS12 de 55Ah, 115Ah y 230Ah.'
          },
          {
            title: 'GEL',
            body: 'Ultracell GEL, Leoch GEL y Vision GEL. Entre las opciones disponibles se destacan baterías Ultracell UCG de 150Ah, 200Ah y 275Ah.'
          }
        ]
      },
      {
        title: 'Consideraciones de selección',
        body: [
          'Antes de elegir una batería conviene evaluar voltaje del sistema, consumo diario, autonomía requerida, frecuencia de uso, profundidad de descarga, espacio disponible, presupuesto y compatibilidad con el cargador o inversor.',
          'Un correcto dimensionamiento mejora la vida útil del banco, evita descargas profundas frecuentes y permite obtener mejor rendimiento en sistemas solares o de respaldo.'
        ]
      },
      {
        title: 'Asesoramiento técnico',
        body: [
          'Seleccionamos baterías AGM y GEL para aplicaciones solares, industriales y de respaldo energético, considerando consumo, autonomía, presupuesto, condiciones de instalación y posibilidad de ampliación futura.'
        ]
      },
      {
        title: 'Ventajas de las baterías de plomo',
        items: [
          'Tecnología madura y confiable',
          'Menor inversión inicial',
          'Amplia disponibilidad',
          'Fácil reemplazo',
          'Compatibilidad con una gran variedad de inversores y cargadores',
          'Muy buen desempeño para respaldo energético'
        ]
      }
    ],
    consultationFocus: 'definir tensión del banco, capacidad en Ah, tecnología AGM/GEL/ciclo profundo, consumo diario, autonomía, profundidad de descarga, cargador compatible y posibilidad de ampliación futura',
    image: 'https://images.unsplash.com/photo-1601034913836-a1f43e143611?auto=format&fit=crop&q=80&w=800',
    badge: 'AGM y GEL'
  },
  {
    id: 'p10',
    slug: 'luminarias-y-camaras',
    name: 'Luminarias y Cámaras',
    category: 'electrical',
    description: 'Luminarias solares y cámaras de seguridad autónomas para iluminar y monitorear espacios sin conexión a red eléctrica, reduciendo consumo y simplificando instalaciones en hogares, comercios, industrias y campos.',
    specifications: [
      'Equipos autónomos con panel solar, batería recargable, control electrónico, tecnología LED o cámara integrada y sensores inteligentes.',
      'Luminarias solares para patios, jardines, entradas, accesos, veredas, calles internas, galpones, depósitos, estacionamientos y espacios públicos.',
      'Cámaras solares WiFi o 4G con funciones como visión nocturna, detección de movimiento, audio bidireccional, monitoreo remoto y alertas.',
      'Soluciones de bajo mantenimiento para iluminación, vigilancia, seguridad perimetral y puntos sin suministro eléctrico.'
    ],
    idealFor: [
      'Viviendas',
      'Comercios',
      'Industrias',
      'Campos y zonas rurales',
      'Obras y construcciones',
      'Espacios públicos',
      'Perímetros rurales',
      'Lugares sin suministro eléctrico'
    ],
    detailIntro: 'Las luminarias solares y cámaras de seguridad solares funcionan utilizando energía solar, permitiendo iluminar y monitorear espacios sin necesidad de conexión a la red eléctrica. Son ideales cuando se busca mejorar la seguridad, reducir consumo eléctrico y simplificar la instalación.',
    detailPoints: [
      'Durante el día, el panel solar carga la batería interna; durante la noche o ante detección de movimiento, el equipo usa esa energía almacenada automáticamente.',
      'Las luminarias solares permiten iluminar exteriores sin cableado eléctrico complejo, con sensores crepusculares o de movimiento según el modelo.',
      'Las cámaras solares permiten monitoreo autónomo con conectividad inalámbrica, visión nocturna, grabación automática y control desde celular.'
    ],
    detailSections: [
      {
        title: '¿Cómo funcionan los sistemas solares autónomos?',
        body: [
          'Estos equipos integran panel solar, batería recargable, sistema electrónico de control, tecnología LED o cámara integrada y sensores inteligentes.',
          'Durante el día, el panel solar carga la batería interna. Luego, el sistema utiliza esa energía almacenada para funcionar automáticamente durante la noche o cuando detecta movimiento.'
        ]
      },
      {
        title: 'Luminarias solares',
        body: [
          'Permiten iluminar espacios exteriores de manera eficiente y automática, sin depender de cableado eléctrico complejo.'
        ],
        items: [
          'Patios y jardines',
          'Entradas y accesos',
          'Veredas',
          'Campos y zonas rurales',
          'Calles internas',
          'Galpones y depósitos',
          'Espacios públicos',
          'Estacionamientos'
        ],
        subsections: [
          {
            title: 'Instalación simple',
            body: 'No requieren cableado eléctrico complejo y reducen obras civiles.'
          },
          {
            title: 'Ahorro energético',
            body: 'Funcionan completamente con energía solar.'
          },
          {
            title: 'Encendido automático',
            body: 'Muchos modelos incorporan sensores crepusculares y de movimiento.'
          },
          {
            title: 'Bajo mantenimiento',
            body: 'Los sistemas LED solares poseen larga vida útil.'
          }
        ]
      },
      {
        title: 'Cámaras de seguridad solares',
        body: [
          'Permiten monitorear espacios de manera autónoma utilizando energía solar y conectividad inalámbrica.'
        ],
        items: [
          'Viviendas',
          'Comercios',
          'Campos',
          'Perímetros rurales',
          'Obras y construcciones',
          'Galpones',
          'Establecimientos alejados',
          'Lugares sin suministro eléctrico'
        ],
        subsections: [
          {
            title: 'Funciones habituales',
            body: 'Según el modelo, pueden incluir conectividad WiFi o 4G, visión nocturna, detección de movimiento, grabación automática, audio bidireccional, monitoreo remoto desde celular, alertas en tiempo real y almacenamiento local o en nube.'
          }
        ]
      },
      {
        title: 'Beneficios de los sistemas solares de seguridad',
        subsections: [
          {
            title: 'Independencia eléctrica',
            body: 'Funcionan incluso en lugares sin red eléctrica.'
          },
          {
            title: 'Seguridad permanente',
            body: 'Permiten iluminación y monitoreo continuo.'
          },
          {
            title: 'Menor costo de instalación',
            body: 'Reducen la necesidad de cableados extensos y obras civiles.'
          },
          {
            title: 'Energía renovable',
            body: 'Utilizan energía limpia y gratuita.'
          }
        ]
      },
      {
        title: '¿Cómo elegir el sistema adecuado?',
        body: ['La selección depende de las condiciones del lugar y del objetivo de seguridad o iluminación. Para definir el equipo se evalúa:'],
        items: [
          'Tamaño del área a iluminar o monitorear',
          'Nivel de iluminación requerido',
          'Autonomía deseada',
          'Disponibilidad solar',
          'Tipo de conectividad necesaria',
          'Calidad de imagen requerida',
          'Ubicación de instalación'
        ]
      },
      {
        title: 'Soluciones disponibles',
        body: ['Disponemos de soluciones para hogares, comercios, industrias, campos y espacios públicos:'],
        items: [
          'Reflectores solares',
          'Farolas solares',
          'Luminarias LED autónomas',
          'Cámaras solares WiFi',
          'Cámaras solares 4G',
          'Kits de vigilancia autónomos',
          'Sistemas de iluminación y seguridad integrados'
        ]
      },
      {
        title: 'Compatibilidad y automatización',
        body: [
          'Muchos sistemas permiten control remoto desde aplicaciones móviles, programación horaria, detección inteligente de movimiento e integración con sistemas de seguridad.'
        ]
      }
    ],
    consultationFocus: 'definir área a iluminar o monitorear, autonomía deseada, disponibilidad solar, conectividad WiFi/4G, calidad de imagen, sensores, ubicación y nivel de seguridad requerido',
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=800',
    badge: 'Solar autónomo'
  },
  {
    id: 'p12',
    slug: 'bombas-de-calor-piscina',
    name: 'Bombas de Calor Piscina',
    category: 'water',
    description: 'Bombas de calor para piscinas residenciales, comerciales y recreativas que climatizan el agua de manera eficiente, aprovechando la energía térmica del aire para extender la temporada de uso con bajo consumo eléctrico.',
    specifications: [
      'Climatización eficiente mediante intercambio térmico aire-agua, sin generar calor directo con resistencias eléctricas.',
      'Equipos inverter o on/off según presupuesto, uso esperado y necesidad de eficiencia.',
      'Dimensionamiento por volumen de agua, piscina cubierta o descubierta, temperatura deseada, zona climática y tiempo de calentamiento.',
      'Compatibles con sistemas fotovoltaicos y colectores solares térmicos para reducir el costo operativo.'
    ],
    idealFor: [
      'Piscinas residenciales',
      'Quinchos y complejos recreativos',
      'Hoteles',
      'Cabañas',
      'Clubes',
      'Piscinas cubiertas',
      'Piscinas climatizadas comerciales',
      'Usuarios que quieren extender la temporada'
    ],
    detailIntro: 'Las bombas de calor para piscinas permiten climatizar el agua de manera eficiente y económica, aprovechando la energía térmica presente en el aire para mantener una temperatura confortable durante gran parte del año. Son una de las soluciones más eficientes para calefacción de piscinas por su bajo consumo eléctrico y excelente rendimiento energético.',
    detailPoints: [
      'La bomba extrae calor del aire exterior y lo transfiere al agua mediante un intercambiador térmico de alta eficiencia.',
      'Permite climatizar grandes volúmenes de agua con menor consumo que sistemas eléctricos resistivos tradicionales.',
      'Puede combinarse con generación fotovoltaica o colectores solares térmicos para reducir aún más el costo de climatización.'
    ],
    detailSections: [
      {
        title: '¿Cómo funciona una bomba de calor para piscina?',
        body: [
          'La bomba de calor extrae calor del aire exterior y lo transfiere al agua de la piscina mediante un intercambiador térmico de alta eficiencia.',
          'A diferencia de otros sistemas de calefacción tradicionales, no genera calor directamente mediante resistencias eléctricas. Aprovecha energía del ambiente y logra consumos eléctricos considerablemente menores.'
        ]
      },
      {
        title: 'Principales ventajas',
        subsections: [
          {
            title: 'Bajo consumo energético',
            body: 'Permiten climatizar grandes volúmenes de agua con un consumo eléctrico reducido.'
          },
          {
            title: 'Extensión de temporada',
            body: 'Mantienen el agua a temperatura confortable durante más meses del año.'
          },
          {
            title: 'Funcionamiento automático',
            body: 'Los equipos regulan automáticamente la temperatura seleccionada.'
          },
          {
            title: 'Energía limpia y eficiente',
            body: 'Reducen el consumo de combustibles fósiles y las emisiones contaminantes.'
          },
          {
            title: 'Compatibilidad con energía solar',
            body: 'Pueden combinarse con sistemas fotovoltaicos para disminuir aún más el costo operativo.'
          }
        ]
      },
      {
        title: 'Aplicaciones frecuentes',
        body: ['Las bombas de calor son ideales para:'],
        items: [
          'Piscinas residenciales',
          'Quinchos y complejos recreativos',
          'Hoteles',
          'Cabañas',
          'Clubes',
          'Piscinas cubiertas',
          'Piscinas climatizadas comerciales'
        ]
      },
      {
        title: 'Qué tener en cuenta para elegir el equipo',
        body: [
          'Un correcto dimensionamiento es fundamental para garantizar eficiencia, confort térmico y buen rendimiento durante la temporada de uso.'
        ],
        items: [
          'Volumen de agua de la piscina',
          'Piscina descubierta o cubierta',
          'Temperatura deseada',
          'Zona climática',
          'Uso estacional o anual',
          'Existencia de cobertor térmico',
          'Tiempo requerido de calentamiento'
        ]
      },
      {
        title: 'Tipos de bombas de calor',
        subsections: [
          {
            title: 'Bombas de calor inverter',
            body: 'Regulan automáticamente su potencia para optimizar consumo y mantener temperatura estable con mayor eficiencia.'
          },
          {
            title: 'Bombas de calor on/off',
            body: 'Funcionan a potencia fija y representan una alternativa más económica para determinadas aplicaciones.'
          }
        ]
      },
      {
        title: 'Beneficios de combinar con energía solar',
        body: [
          'La combinación de bomba de calor y energía solar fotovoltaica permite reducir significativamente el costo de climatización, aprovechar la generación solar durante el día, mejorar el retorno de inversión y disminuir el impacto ambiental.',
          'También es posible complementar el sistema con colectores solares térmicos para maximizar la eficiencia.'
        ]
      },
      {
        title: 'Qué puede incluir una instalación',
        items: [
          'Bomba de calor',
          'Base de apoyo',
          'Conexiones hidráulicas',
          'Válvulas y accesorios',
          'Tablero eléctrico y protecciones',
          'Automatización y control',
          'Integración con filtrado existente'
        ]
      },
      {
        title: 'Mantenimiento y vida útil',
        body: [
          'Las bombas de calor modernas requieren bajo mantenimiento y poseen larga vida útil cuando son correctamente instaladas y dimensionadas.',
          'El mantenimiento básico incluye limpieza periódica, control de circulación de agua, verificación eléctrica e hidráulica y protección adecuada del equipo.'
        ]
      }
    ],
    consultationFocus: 'calcular volumen de piscina, temperatura objetivo, zona climática, piscina cubierta o descubierta, cobertor térmico, tiempo de calentamiento, tipo inverter/on-off, hidráulica e integración solar',
    image: 'https://images.unsplash.com/photo-1572331165267-854da2b10ccc?auto=format&fit=crop&q=80&w=800',
    badge: 'Climatización'
  },
  {
    id: 'p13',
    slug: 'colectores-solares-piscina',
    name: 'Colectores Solares Piscina',
    category: 'water',
    description: 'Colectores solares para piscinas que climatizan el agua utilizando directamente la energía del sol, con una solución eficiente, ecológica y de muy bajo costo operativo para extender la temporada de uso.',
    specifications: [
      'Climatización solar térmica mediante circulación del agua de piscina por colectores expuestos al sol.',
      'Instalación en techos, estructuras metálicas, superficies inclinadas o espacios cercanos a la piscina.',
      'Sistemas poliméricos y modulares de alta resistencia, bajo mantenimiento y capacidad ampliable.',
      'Dimensionamiento por tamaño de piscina, volumen de agua, ubicación geográfica, temperatura deseada, superficie disponible y cobertor térmico.'
    ],
    idealFor: [
      'Piscinas residenciales',
      'Complejos recreativos',
      'Hoteles',
      'Clubes',
      'Cabañas',
      'Piscinas descubiertas',
      'Piscinas climatizadas de uso estacional',
      'Proyectos comerciales y turísticos'
    ],
    detailIntro: 'Los colectores solares para piscinas permiten climatizar el agua utilizando directamente la energía del sol. Son una excelente alternativa para extender la temporada de uso de la piscina y mantener una temperatura más confortable sin depender exclusivamente de sistemas eléctricos o combustibles tradicionales.',
    detailPoints: [
      'El agua circula mediante el sistema de filtrado a través de colectores instalados en techos o estructuras expuestas al sol.',
      'Los colectores absorben radiación solar y transfieren ese calor al agua, que luego retorna climatizada a la piscina.',
      'Pueden combinarse con bombas de calor y sistemas automáticos de control para mejorar eficiencia y estabilidad de temperatura.'
    ],
    detailSections: [
      {
        title: '¿Cómo funcionan los colectores solares para piscinas?',
        body: [
          'El agua de la piscina circula mediante el sistema de filtrado a través de los colectores solares instalados generalmente sobre techos o estructuras expuestas al sol.',
          'Los colectores absorben la radiación solar y transfieren ese calor al agua, que luego retorna climatizada a la piscina.',
          'El sistema funciona de manera automática y aprovecha energía completamente renovable.'
        ]
      },
      {
        title: 'Principales ventajas',
        subsections: [
          {
            title: 'Bajo costo de funcionamiento',
            body: 'Utilizan energía solar gratuita para climatizar el agua.'
          },
          {
            title: 'Energía limpia y sustentable',
            body: 'No generan emisiones contaminantes ni consumen combustibles fósiles.'
          },
          {
            title: 'Extensión de temporada',
            body: 'Permiten utilizar la piscina durante más meses del año.'
          },
          {
            title: 'Bajo mantenimiento',
            body: 'Los sistemas solares térmicos poseen larga vida útil y requieren mantenimiento mínimo.'
          },
          {
            title: 'Integración con otros sistemas',
            body: 'Pueden combinarse con bombas de calor y sistemas automáticos de control.'
          }
        ]
      },
      {
        title: 'Aplicaciones frecuentes',
        body: ['Los colectores solares son ideales para:'],
        items: [
          'Piscinas residenciales',
          'Complejos recreativos',
          'Hoteles',
          'Clubes',
          'Cabañas',
          'Piscinas descubiertas',
          'Piscinas climatizadas de uso estacional'
        ]
      },
      {
        title: 'Tipos de colectores solares para piscinas',
        subsections: [
          {
            title: 'Colectores solares poliméricos',
            body: 'Son los más utilizados para climatización de piscinas por su alta resistencia, eficiencia y bajo mantenimiento.'
          },
          {
            title: 'Sistemas modulares',
            body: 'Permiten ampliar la capacidad agregando nuevos colectores según la necesidad térmica del proyecto.'
          }
        ]
      },
      {
        title: '¿Cómo elegir el sistema adecuado?',
        body: [
          'Una correcta relación entre superficie de colectores y superficie de piscina es fundamental para obtener buen rendimiento.'
        ],
        items: [
          'Tamaño de la piscina',
          'Volumen de agua',
          'Ubicación geográfica',
          'Nivel de temperatura deseado',
          'Uso estacional o anual',
          'Superficie disponible para instalación',
          'Existencia de cobertor térmico'
        ]
      },
      {
        title: 'Instalación de colectores solares',
        body: ['Los sistemas generalmente incluyen colectores, fijaciones, hidráulica, accesorios y automatización de circulación. Pueden instalarse sobre techos, estructuras metálicas, superficies inclinadas o espacios cercanos a la piscina.'],
        items: [
          'Colectores solares',
          'Estructuras de fijación',
          'Cañerías hidráulicas',
          'Válvulas y accesorios',
          'Automatización de circulación',
          'Integración con sistema de filtrado'
        ]
      },
      {
        title: 'Beneficios de combinar con bomba de calor',
        items: [
          'Reducir aún más el consumo eléctrico',
          'Mejorar la eficiencia general',
          'Mantener temperatura más estable',
          'Extender el período de climatización'
        ]
      },
      {
        title: 'Mantenimiento y vida útil',
        body: [
          'Los colectores solares modernos poseen alta durabilidad y requieren mantenimiento mínimo.',
          'Se recomienda realizar verificación periódica de conexiones, limpieza general del sistema, control hidráulico y de circulación, y protección adecuada durante períodos de inactividad.'
        ]
      },
      {
        title: 'Soluciones residenciales y comerciales',
        body: ['Disponemos de sistemas de climatización solar para:'],
        items: [
          'Piscinas pequeñas y medianas',
          'Grandes superficies de agua',
          'Instalaciones recreativas',
          'Proyectos comerciales y turísticos'
        ]
      }
    ],
    consultationFocus: 'definir tamaño y volumen de piscina, superficie disponible, ubicación geográfica, temperatura deseada, uso estacional o anual, cobertor térmico, hidráulica, filtrado existente e integración con bomba de calor',
    image: 'https://images.unsplash.com/photo-1564501049412-61c2a3083791?auto=format&fit=crop&q=80&w=800',
    badge: 'Solar térmico'
  },
  {
    id: 'p14',
    slug: 'bombeo-solar',
    name: 'Bombeo Solar',
    category: 'water',
    description: 'Bombas solares de agua para extraer, impulsar o distribuir agua usando energía fotovoltaica, reduciendo el uso de combustibles o energía eléctrica convencional en aplicaciones rurales, agrícolas, ganaderas, residenciales e industriales.',
    specifications: [
      'Bombas solares sumergibles para pozos, perforaciones rurales y bombeo de gran profundidad.',
      'Bombas solares de superficie para riego, transferencia de agua, presurización, tanques, ríos, cisternas o reservorios.',
      'Sistemas con paneles solares, bomba, variador/controlador, protecciones, cableado, estructuras, sensores y automatización.',
      'Configuraciones solares directas, con respaldo eléctrico, con baterías o híbridas según continuidad requerida.'
    ],
    idealFor: [
      'Consumo humano',
      'Abastecimiento ganadero',
      'Riego agrícola',
      'Tanques australianos',
      'Sistemas de presurización',
      'Pozos y perforaciones',
      'Viviendas rurales',
      'Campos y estancias',
      'Sistemas de agua aislados'
    ],
    detailIntro: 'Las bombas solares de agua permiten extraer, impulsar o distribuir agua utilizando energía solar fotovoltaica. Son una solución eficiente, sustentable y de bajo mantenimiento para aplicaciones rurales, ganaderas, agrícolas, residenciales e industriales.',
    detailPoints: [
      'Los paneles solares alimentan directamente la bomba o un variador/controlador solar especializado durante las horas de sol.',
      'El sistema puede bombear agua desde perforaciones, pozos, tanques, ríos o reservorios hacia puntos de consumo o almacenamiento.',
      'Un correcto cálculo hidráulico y energético es fundamental para garantizar rendimiento, caudal y confiabilidad.'
    ],
    detailSections: [
      {
        title: '¿Cómo funciona una bomba solar?',
        body: [
          'Los paneles solares generan energía eléctrica que alimenta directamente la bomba o un variador/controlador solar especializado.',
          'Durante las horas de sol, el sistema bombea agua desde perforaciones, pozos, tanques, ríos o reservorios hacia los puntos de consumo o almacenamiento.'
        ],
        items: [
          'Funcionamiento directo con energía solar',
          'Respaldo eléctrico',
          'Bancos de baterías',
          'Sistemas híbridos'
        ]
      },
      {
        title: 'Aplicaciones frecuentes',
        body: ['Las bombas solares son ideales para:'],
        items: [
          'Bombeo de agua para consumo humano',
          'Abastecimiento ganadero',
          'Riego agrícola',
          'Llenado de tanques australianos',
          'Sistemas de presurización',
          'Viviendas rurales',
          'Campos y estancias',
          'Fuentes y reservorios',
          'Sistemas de agua aislados'
        ]
      },
      {
        title: 'Principales ventajas',
        subsections: [
          {
            title: 'Bajo costo operativo',
            body: 'Funcionan utilizando energía solar gratuita.'
          },
          {
            title: 'Independencia energética',
            body: 'Permiten abastecer agua en lugares sin acceso a red eléctrica.'
          },
          {
            title: 'Bajo mantenimiento',
            body: 'Los equipos modernos requieren mantenimiento mínimo.'
          },
          {
            title: 'Energía limpia y renovable',
            body: 'No generan emisiones contaminantes ni dependen de combustibles fósiles.'
          },
          {
            title: 'Funcionamiento automático',
            body: 'Muchos sistemas incorporan automatización y protección inteligente.'
          }
        ]
      },
      {
        title: 'Tipos de bombas solares',
        subsections: [
          {
            title: 'Bombas solares sumergibles',
            body: 'Se utilizan para extracción desde perforaciones o pozos profundos. Son ideales para pozos de agua, perforaciones rurales y bombeo de gran profundidad.'
          },
          {
            title: 'Bombas solares de superficie',
            body: 'Se utilizan para impulsión de agua desde reservorios, tanques, ríos o cisternas. Son adecuadas para riego, transferencia de agua, presurización y sistemas superficiales.'
          }
        ]
      },
      {
        title: 'Sistemas con variador solar',
        body: [
          'Los variadores o controladores solares optimizan el funcionamiento de la bomba regulando automáticamente velocidad, arranque y protección del sistema.'
        ],
        items: [
          'Operación solar directa',
          'Conmutación automática con red o generador',
          'Monitoreo remoto',
          'Protección contra trabajo en seco',
          'Automatización de llenado de tanques'
        ]
      },
      {
        title: '¿Cómo elegir una bomba solar?',
        body: [
          'La selección depende de varios factores técnicos. Un correcto cálculo hidráulico y energético es fundamental para garantizar rendimiento y confiabilidad.'
        ],
        items: [
          'Caudal requerido',
          'Altura de bombeo',
          'Distancia de impulsión',
          'Profundidad del pozo',
          'Horas de funcionamiento deseadas',
          'Disponibilidad solar',
          'Tipo de aplicación'
        ]
      },
      {
        title: 'Qué incluye un sistema de bombeo solar',
        body: ['Dependiendo del proyecto, puede incluir:'],
        items: [
          'Paneles solares',
          'Bomba solar',
          'Variador/controlador',
          'Estructuras de montaje',
          'Protecciones eléctricas',
          'Cableado solar',
          'Sensores y automatización',
          'Tanques y accesorios hidráulicos'
        ]
      },
      {
        title: 'Soluciones para distintas aplicaciones',
        body: ['Disponemos de sistemas:'],
        items: [
          'Residenciales',
          'Ganaderos',
          'Agrícolas',
          'Industriales',
          'Para perforaciones profundas',
          'Para riego solar',
          'Para abastecimiento autónomo de agua'
        ]
      },
      {
        title: 'Compatibilidad y expansión',
        body: ['Los sistemas pueden diseñarse para:'],
        items: [
          'Trabajar con red eléctrica y solar',
          'Incorporar baterías',
          'Expandir potencia solar',
          'Automatizar completamente el bombeo'
        ]
      }
    ],
    consultationFocus: 'calcular caudal requerido, altura de bombeo, distancia de impulsión, profundidad del pozo, horas de funcionamiento, disponibilidad solar, tipo de bomba, controlador, respaldo y automatización',
    image: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&q=80&w=800',
    badge: 'Agua solar'
  },
  {
    id: 'p15',
    slug: 'termotanque-solar',
    name: 'Termotanque Solar',
    category: 'water',
    description: 'Termotanques solares para calentar agua sanitaria usando energía del sol, reduciendo significativamente el consumo de electricidad o gas en viviendas, comercios, industrias y establecimientos rurales.',
    specifications: [
      'Sistemas con colectores térmicos o tubos de vacío que transfieren calor solar al agua almacenada en el tanque.',
      'Opciones presurizadas y no presurizadas según presión de red, confort requerido y tipo de instalación hidráulica.',
      'Equipos de distintas capacidades para viviendas, grandes consumos, comercios, industrias y establecimientos rurales.',
      'Posibilidad de respaldo eléctrico o a gas para garantizar agua caliente en días de baja radiación solar.'
    ],
    idealFor: [
      'Viviendas',
      'Complejos turísticos',
      'Hoteles',
      'Quinchos',
      'Gimnasios',
      'Industrias',
      'Establecimientos rurales',
      'Vestuarios y sanitarios'
    ],
    detailIntro: 'Los termotanques solares permiten calentar agua utilizando la energía del sol, reduciendo significativamente el consumo de electricidad o gas. Son una solución eficiente, sustentable y de bajo costo operativo para producir agua caliente sanitaria con energía limpia y renovable.',
    detailPoints: [
      'El sistema capta radiación solar mediante colectores térmicos o tubos de vacío y transfiere ese calor al agua almacenada.',
      'Durante el día, el agua se calienta de manera natural y queda disponible para duchas, cocinas, lavaderos y usos sanitarios.',
      'Muchos sistemas incorporan respaldo eléctrico o a gas para garantizar disponibilidad de agua caliente incluso con baja radiación.'
    ],
    detailSections: [
      {
        title: '¿Cómo funciona un termotanque solar?',
        body: [
          'El sistema capta la radiación solar mediante colectores térmicos o tubos de vacío, transfiriendo ese calor al agua almacenada en el tanque.',
          'Durante el día, el agua se calienta de manera natural utilizando energía solar, quedando disponible para duchas, cocinas, lavaderos y distintos usos sanitarios.',
          'Muchos sistemas incorporan respaldo eléctrico o a gas para garantizar disponibilidad de agua caliente incluso en días de baja radiación solar.'
        ]
      },
      {
        title: 'Principales ventajas',
        subsections: [
          {
            title: 'Ahorro energético',
            body: 'Permiten reducir considerablemente el consumo de electricidad o gas destinado al calentamiento de agua.'
          },
          {
            title: 'Energía renovable y sustentable',
            body: 'Funcionan utilizando energía solar limpia y gratuita.'
          },
          {
            title: 'Bajo mantenimiento',
            body: 'Los equipos modernos requieren mantenimiento mínimo y poseen larga vida útil.'
          },
          {
            title: 'Retorno de inversión',
            body: 'El ahorro generado permite recuperar la inversión a mediano plazo.'
          },
          {
            title: 'Compatibilidad',
            body: 'Pueden integrarse en viviendas, comercios, industrias y establecimientos rurales.'
          }
        ]
      },
      {
        title: 'Tipos de termotanques solares',
        subsections: [
          {
            title: 'Tubos de vacío',
            body: 'Utilizan tubos de vidrio de alta eficiencia térmica para captar y conservar mejor el calor solar. Tienen excelente rendimiento, buen comportamiento en invierno y alta eficiencia térmica.'
          },
          {
            title: 'Sistemas presurizados',
            body: 'Funcionan con presión de red y permiten alimentar múltiples puntos de consumo con mayor confort.'
          },
          {
            title: 'Sistemas no presurizados',
            body: 'Trabajan a presión atmosférica y son una alternativa más económica para aplicaciones residenciales simples o zonas rurales.'
          }
        ]
      },
      {
        title: 'Aplicaciones frecuentes',
        body: ['Los termotanques solares son ideales para:'],
        items: [
          'Viviendas',
          'Complejos turísticos',
          'Hoteles',
          'Quinchos',
          'Gimnasios',
          'Industrias',
          'Establecimientos rurales',
          'Vestuarios y sanitarios'
        ]
      },
      {
        title: '¿Cómo elegir el termotanque adecuado?',
        body: [
          'Un correcto dimensionamiento garantiza mayor eficiencia y confort en el uso diario de agua caliente.'
        ],
        items: [
          'Cantidad de personas',
          'Consumo diario de agua caliente',
          'Cantidad de baños y puntos de uso',
          'Tipo de instalación hidráulica',
          'Zona climática',
          'Disponibilidad de espacio para instalación'
        ]
      },
      {
        title: 'Qué incluye una instalación',
        body: ['Dependiendo del proyecto, la instalación puede incluir:'],
        items: [
          'Termotanque solar',
          'Tubos de vacío o colectores',
          'Estructura de soporte',
          'Cañerías y aislaciones',
          'Válvulas y accesorios',
          'Respaldo eléctrico o a gas',
          'Automatización y control'
        ]
      },
      {
        title: 'Combinación con energía fotovoltaica',
        body: [
          'La combinación de termotanques solares y paneles solares fotovoltaicos permite maximizar el ahorro energético total de la vivienda o comercio.'
        ]
      },
      {
        title: 'Mantenimiento y vida útil',
        body: [
          'Los termotanques solares modernos poseen larga vida útil y requieren mantenimiento mínimo.',
          'Se recomienda verificar conexiones, controlar válvulas y aislaciones, limpiar tubos o colectores y revisar el sistema de respaldo.'
        ]
      },
      {
        title: 'Soluciones residenciales y comerciales',
        body: ['Disponemos de equipos:'],
        items: [
          'Presurizados y no presurizados',
          'De distintas capacidades',
          'Para viviendas y grandes consumos',
          'Adaptados a distintas condiciones climáticas'
        ]
      }
    ],
    consultationFocus: 'definir cantidad de personas, consumo diario de agua caliente, baños y puntos de uso, tipo de instalación hidráulica, presión, zona climática, espacio disponible, capacidad y respaldo eléctrico o a gas',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=800',
    badge: 'Agua caliente'
  }
];
export const productCategoryLabels: Record<Product['category'] | 'all', string> = {
  all: 'Todos',
  kits: 'Kits Solares',
  solar: 'Equipos solares',
  storage: 'Baterías',
  electrical: 'Eléctrica y seguridad',
  water: 'Agua y climatización',
  mobility: 'Movilidad eléctrica',
};

export function getSolarTopicBySlug(slug: string) {
  return solarTopicsData.find((product) => product.slug === slug);
}

// Local commercial catalogue. A published Google Sheet can add products or
// override one of these records by using the same slug.
export const catalogProductsData: CatalogProduct[] = [
  {
    id: 'cat-panel-550w',
    slug: 'panel-solar-monocristalino-550w',
    name: 'Panel solar monocristalino 550 W',
    category: 'solar',
    description: 'Módulo fotovoltaico de alta potencia para sistemas residenciales, comerciales y ampliaciones de instalaciones existentes.',
    specifications: ['Potencia nominal: 550 W', 'Tecnología monocristalina', 'Marco de aluminio y vidrio templado', 'Compatible con estructuras para techo o suelo'],
    idealFor: ['Sistemas on-grid', 'Sistemas híbridos', 'Instalaciones comerciales'],
    detailIntro: 'Panel solar de 550 W pensado para generar energía limpia en instalaciones de distinta escala. La cantidad de módulos se define según consumo, espacio disponible y configuración del inversor.',
    detailPoints: ['Se puede incorporar a un sistema nuevo o a una ampliación técnicamente compatible.', 'La potencia final del sistema se calcula combinando paneles, inversor, protecciones y estructura de montaje.', 'Consultá por disponibilidad de marca, ficha técnica y compatibilidad antes de comprar.'],
    consultationFocus: 'stock, ficha técnica, cantidad de paneles y compatibilidad con tu sistema',
    image: 'https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?auto=format&fit=crop&q=80&w=800',
    badge: 'Venta unitaria',
    price: 185000,
    currency: 'USD',
    priceNote: 'Precio de referencia por unidad. No incluye estructura ni instalación.',
    availability: 'Consultar stock',
  },
  {
    id: 'cat-inversor-hibrido-6kw',
    slug: 'inversor-hibrido-6kw',
    name: 'Inversor híbrido 6 kW',
    category: 'solar',
    description: 'Inversor híbrido para administrar paneles, red eléctrica y baterías en proyectos con ahorro y respaldo energético.',
    specifications: ['Potencia nominal: 6 kW', 'Operación con paneles, red y baterías', 'Monitoreo remoto compatible', 'Protecciones y configuración según proyecto'],
    idealFor: ['Viviendas con respaldo', 'Comercios', 'Sistemas híbridos'],
    detailIntro: 'Equipo central para un sistema híbrido: gestiona el uso de energía solar, la carga de baterías y el suministro de la red según la configuración definida para cada proyecto.',
    detailPoints: ['El modelo exacto debe validarse por tensión, fases, potencia de consumo y banco de baterías.', 'Puede integrarse con un tablero de cargas críticas para respaldo ante cortes.', 'El precio no contempla baterías, paneles, protecciones ni mano de obra.'],
    consultationFocus: 'compatibilidad eléctrica, configuración de baterías y stock del inversor',
    image: 'https://images.unsplash.com/photo-1497440001374-f26997328c1b?auto=format&fit=crop&q=80&w=800',
    badge: 'Respaldo',
    price: 1650000,
    currency: 'USD',
    priceNote: 'Precio de referencia del equipo. Configuración e instalación se cotizan aparte.',
    availability: 'Consultar stock',
  },
  {
    id: 'cat-bateria-lifepo4-5kwh',
    slug: 'bateria-lifepo4-5kwh',
    name: 'Batería de litio LiFePO4 5 kWh',
    category: 'storage',
    description: 'Batería de litio para almacenamiento solar y respaldo de consumos críticos en instalaciones compatibles.',
    specifications: ['Capacidad nominal: 5 kWh', 'Tecnología LiFePO4', 'Sistema de gestión de batería integrado', 'Capacidad ampliable según compatibilidad'],
    idealFor: ['Sistemas híbridos', 'Respaldo de cargas críticas', 'Ampliaciones de autonomía'],
    detailIntro: 'Una batería LiFePO4 permite almacenar energía generada durante el día para usarla cuando baja la producción solar o ante un corte de la red.',
    detailPoints: ['La autonomía real depende de la potencia y el tiempo de uso de las cargas a respaldar.', 'Debe seleccionarse junto con un inversor compatible y las protecciones correspondientes.', 'Consultá por ciclos, garantía y disponibilidad de la marca vigente.'],
    consultationFocus: 'autonomía requerida, compatibilidad con inversor y stock de baterías',
    image: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&q=80&w=800',
    badge: 'Almacenamiento',
    price: 2450000,
    currency: 'USD',
    priceNote: 'Precio de referencia por batería. No incluye inversor ni instalación.',
    availability: 'Consultar stock',
  },
];

export const solutionsData: Solution[] = [
  {
    id: 's1',
    title: 'Hogares',
    iconName: 'Home',
    tagline: 'Confort familiar, ahorro sostenible y respaldo absoluto.',
    description: 'Eliminá el impacto de las tarifas eléctricas y mantené tus electrodomésticos protegidos y funcionando las 24 horas, incluso durante cortes prolongados de la red pública mediante almacenamiento inteligente.',
    keyFeatures: [
      'Sistemas híbridos con baterías que actúan como UPS silenciosa en milisegundos.',
      'Amortización financiera atractiva y revalorización inmediata de tu propiedad.',
      'Monitoreo remoto simple en tu celular para ver tu ahorro en tiempo real.',
      'Diseño arquitectónicamente estético que respeta la fachada de tu vivienda.'
    ],
    recommendedKit: 'Sistema Híbrido LUZ SOLAR Home (1.5kW a 8kW con almacenamiento de Litio)'
  },
  {
    id: 's2',
    title: 'Comercios',
    iconName: 'Building2',
    tagline: 'Eficiencia operativa diurna y posicionamiento ecológico.',
    description: 'Reducí drásticamente tus costos fijos mensuales durante las horas de mayor actividad comercial (de 8:00 a 19:00). Potenciá el valor de tu negocio de cara a clientes comprometidos con el cuidado ambiental.',
    keyFeatures: [
      'Inyección directa On-Grid: máxima velocidad de retorno de inversión.',
      'Beneficios impositivos según la Ley de Generación Distribuida vigente.',
      'Sistemas escalables sin interrumpir el funcionamiento normal del local.',
      'Disminución del calor en el techo del comercio por sombreado de paneles.'
    ],
    recommendedKit: 'Sistema On-Grid Autoconsumo Comercial (10kW a 50kW)'
  },
  {
    id: 's3',
    title: 'Pequeñas Industrias',
    iconName: 'Factory',
    tagline: 'Estabilidad de potencia, picos controlados y resiliencia.',
    description: 'Mitigá las penalizaciones por consumo reactivo, controlá los picos de potencia máxima contratada y protegé las líneas de producción y maquinaria sensible contra microcortes o anomalías de tensión en la red.',
    keyFeatures: [
      'Sistemas solares trifásicos de alta potencia sincronizados con generadores.',
      'Monitoreo de red avanzado para auditoría y optimización de flujos de potencia.',
      'Estructuras industriales reforzadas aptas para techos de naves industriales.',
      'Soporte técnico preferencial con planes de mantenimiento de alto nivel.'
    ],
    recommendedKit: 'Sistema Industrial Trifásico Integrado (30kW a 100kW)'
  },
  {
    id: 's4',
    title: 'Campos y Zonas Rurales',
    iconName: 'Tractor',
    tagline: 'Independencia total del tendido eléctrico tradicional.',
    description: 'Llevá energía confiable adonde no llega la red eléctrica. Desarrollá soluciones autónomas de bombeo de agua, iluminación perimetral, alimentación de boyeros, puestos rurales, ordeñadoras y cámaras de seguridad.',
    keyFeatures: [
      'Sistemas Off-Grid autónomos robustos con bancos de baterías sobredimensionados.',
      'Bombeo solar directo: agua a demanda sin depender de combustibles fósiles.',
      'Equipos con protecciones especiales para resistir polvo, humedad e insectos.',
      'Asesoramiento geográfico de radiación solar para optimizar la inclinación en campo.'
    ],
    recommendedKit: 'Sistema Autónomo Off-Grid Agro con Respaldo Remoto'
  }
];

export const processStepsData: ProcessStep[] = [
  {
    stepNumber: 1,
    title: 'Relevamiento de Consumo',
    description: 'Analizamos tus últimas facturas eléctricas, comprendemos tu perfil de cargas (horarios de consumo) y el espacio disponible para los paneles en tus techos.',
    badge: 'Análisis Inicial'
  },
  {
    stepNumber: 2,
    title: 'Ingeniería y Diseño',
    description: 'Nuestros ingenieros calculan la capacidad exacta del inversor, la cantidad de paneles, y el conexionado óptimo para brindarte el mejor rendimiento.',
    badge: 'Propuesta Técnica'
  },
  {
    stepNumber: 3,
    title: 'Presupuesto y Retorno',
    description: 'Te presentamos una cotización llave en mano, detallando los costos, las proyecciones de ahorro mensual y el plazo estimado de recupero de la inversión.',
    badge: 'Decisión Comercial'
  },
  {
    stepNumber: 4,
    title: 'Instalación Homologada',
    description: 'Técnicos certificados realizan la instalación mecánica y eléctrica con la máxima prolijidad y seguridad, bajo estándares internacionales.',
    badge: 'Puesta en Marcha'
  },
  {
    stepNumber: 5,
    title: 'Monitoreo y Soporte',
    description: 'Conectamos tu inversor al Wi-Fi, te enseñamos a usar la app para seguir la generación diaria y te acompañamos con nuestro soporte post venta preventivo.',
    badge: 'Garantía LUZ SOLAR'
  }
];

export const postSalesServicesData: PostSalesService[] = [
  {
    id: 'ps1',
    title: 'Diagnóstico Avanzado de Fallas',
    description: 'Identificación precisa de anomalías en inversores, strings de paneles y bancos de almacenamiento de baterías. Usamos herramientas de medición especializadas y cámaras termográficas para localizar puntos calientes ocultos.',
    iconName: 'ShieldAlert'
  },
  {
    id: 'ps2',
    title: 'Mantenimiento Preventivo Planificado',
    description: 'Limpieza profesional de la suciedad acumulada sobre los cristales solares, verificación de torque en terminales eléctricos, revisión de estanqueidad de tableros, medición de resistencia de puesta a tierra y testeo de protecciones.',
    iconName: 'Wrench'
  },
  {
    id: 'ps3',
    title: 'Reposición y Ampliación de Sistemas',
    description: 'Contamos con stock propio y permanente de paneles, inversores y componentes para reponer equipos dañados por granizo u otras contingencias. Te ayudamos a escalar tu sistema sumando más paneles o baterías.',
    iconName: 'RefreshCw'
  },
  {
    id: 'ps4',
    title: 'Soporte e Intervención de Emergencias',
    description: 'Guardia técnica dedicada para resolver de forma ágil inconvenientes operativos graves. Asistencia telefónica directa para reconfiguración de inversores y resolución de dudas sobre el estado de carga.',
    iconName: 'Zap'
  },
  {
    id: 'ps5',
    title: 'Seguimiento Remoto Activo',
    description: 'Monitoreamos a distancia de forma periódica el correcto funcionamiento de tu planta de generación a través de la plataforma en la nube. Te notificamos preventivamente si detectamos mermas extrañas en la producción.',
    iconName: 'Activity'
  }
];

export const commercialArgumentsData: CommercialArgument[] = [
  {
    id: 'ca1',
    title: 'Trayectoria y Solidez Técnica',
    description: 'No somos meros vendedores de cajas. Nuestro equipo técnico e ingenieril cuenta con certificaciones internacionales y amplia experiencia en obras de variada escala.',
    iconName: 'Award',
  },
  {
    id: 'ca2',
    title: 'Materiales 100% Certificados',
    description: 'Trabajamos únicamente con marcas globales del ranking Bloomberg Tier 1. Garantizamos que cada cable, soporte y disyuntor cumple estrictamente las normas eléctricas.',
    iconName: 'ThumbsUp',
  },
  {
    id: 'ca3',
    title: 'Diseño a Medida del Cliente',
    description: 'Evitamos las soluciones genéricas sobre/sub-dimensionadas. Modelamos el comportamiento solar de tu espacio para entregarte un kit equilibrado y financieramente inteligente.',
    iconName: 'Users',
  },
  {
    id: 'ca4',
    title: 'Servicio Post Venta de Respaldo Real',
    description: 'Garantizamos soporte real continuo. Seguimos a tu lado mucho después de que los instaladores terminen el trabajo, asegurando que tu inversión rinda por décadas.',
    iconName: 'HeartHandshake',
  }
];

export const faqsData: FaqItem[] = [
  {
    id: 'faq1',
    question: '¿Cuánto puedo ahorrar realmente con energía solar?',
    answer: 'El ahorro varía según el sistema, pero en sistemas On-Grid o híbridos de autoconsumo podés reducir entre un 70% y un 90% de tu costo variable de electricidad. La inversión genera retornos inmediatos al disminuir la demanda de la red comercial.',
    category: 'Ahorro e Inversión'
  },
  {
    id: 'faq2',
    question: '¿Sirve para una casa residencial o solo es viable para empresas?',
    answer: 'Sirve perfectamente para ambas. En hogares aporta confort familiar, mitiga el gasto de climatización veraniega y te inmuniza de los cortes de luz si sumás baterías de respaldo. En empresas, optimiza fuertemente el flujo de caja operativo diurno.',
    category: 'Aplicaciones'
  },
  {
    id: 'faq3',
    question: '¿Qué diferencia hay entre un sistema On-Grid (conectado) y un Off-Grid (aislado)?',
    answer: 'Los sistemas On-Grid inyectan la energía solar directamente en tu red doméstica o comercial y si te sobra, la exportás a la red pública (Generación Distribuida). No usan baterías y se apagan por seguridad ante cortes de red. Los sistemas Off-Grid son 100% autónomos y requieren baterías de almacenamiento para operar de noche o ante cortes de energía eléctrica.',
    category: 'Tecnología'
  },
  {
    id: 'faq4',
    question: '¿Los paneles solares funcionan en días nublados o lluviosos?',
    answer: 'Sí, siguen generando energía a partir de la radiación solar difusa que traspasa las nubes, aunque su rendimiento se reduce a un 10% - 25% de un día totalmente soleado. Durante la noche, el sistema utiliza la energía acumulada en las baterías (en sistemas Off-Grid o híbridos) o recurre a la red tradicional (en sistemas On-Grid).',
    category: 'Tecnología'
  },
  {
    id: 'faq5',
    question: '¿Qué garantías tienen los equipos que venden?',
    answer: 'Nuestros paneles solares de marcas Tier 1 cuentan con una garantía de producto de 12 a 15 años y una garantía de generación de potencia lineal garantizada del 80% o superior durante 25 años. Los inversores cuentan con garantías de 5 a 10 años, y las baterías de Litio cuentan con 10 años de garantía oficial.',
    category: 'Garantía y Seguridad'
  },
  {
    id: 'faq6',
    question: '¿Realizan el trámite de medidor bidireccional de Generación Distribuida?',
    answer: 'Sí. Nos encargamos del relevamiento, diseño de los planos eléctricos y la firma digital del ingeniero matriculado para presentar toda la documentación técnica ante la distribuidora de energía eléctrica de tu zona, completando el trámite para que puedas vender tu excedente energético de forma legal y segura.',
    category: 'Servicios'
  },
  {
    id: 'faq7',
    question: '¿Publican precios o conviene pedir consulta?',
    answer: 'La página puede mostrar productos y orientar precios cuando estén validados, pero la cotización final se confirma por WhatsApp porque depende de marca disponible, cantidad, envío, instalación y dimensionamiento del sistema.',
    category: 'Cotización'
  },
  {
    id: 'faq8',
    question: '¿Desde dónde venden y cómo entregan los productos?',
    answer: 'La base comercial está en Morón y hacen envíos a todo el país. Por el momento no se comunica tienda, depósito o punto fijo de retiro: la entrega o retiro se coordina según cada operación.',
    category: 'Entrega'
  }
];
