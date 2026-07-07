import { Benefit, Product, Solution, ProcessStep, PostSalesService, CommercialArgument, FaqItem } from './types';

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

export const productsData: Product[] = [
  {
    id: 'p1',
    slug: 'panel-solar-monocristalino-perc-450w-550w',
    name: 'Panel Solar Monocristalino PERC 450W / 550W Tier 1',
    category: 'panels',
    description: 'Módulo fotovoltaico de alta eficiencia con tecnología de celdas partidas (Half-Cell) y resistencia a climas extremos (granizo y vientos).',
    specifications: [
      'Eficiencia de módulo superior al 21.3%',
      'Garantía de potencia lineal por 25 años',
      'Certificación Bloomberg Tier 1',
      'Excelente desempeño con baja radiación solar'
    ],
    idealFor: ['Hogares', 'Comercios', 'Kits on-grid', 'Kits híbridos'],
    detailIntro: 'Es el componente principal para convertir radiación solar en energía eléctrica. Se usa como base de sistemas residenciales, comerciales y kits solares dimensionados a medida.',
    detailPoints: [
      'Conviene cuando se busca buena generación diaria en techos o estructuras con espacio disponible.',
      'Se combina con inversores on-grid, híbridos u off-grid según el tipo de instalación.',
      'La cantidad de paneles se define por consumo mensual, espacio, orientación y objetivo de ahorro.'
    ],
    consultationFocus: 'dimensionar cantidad de paneles, potencia de inversor y estructura necesaria',
    image: 'https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?auto=format&fit=crop&q=80&w=800',
    badge: 'Más Vendido'
  },
  {
    id: 'p2',
    slug: 'panel-solar-bifacial-monocristalino-550w',
    name: 'Panel Solar Bifacial Monocristalino 550W',
    category: 'panels',
    description: 'Módulo de doble cara que absorbe radiación por el frente y por el dorso mediante el rebote de luz (albedo), incrementando la generación hasta un 25%.',
    specifications: [
      'Generación adicional del 5% al 25% por cara posterior',
      'Vidrio templado doble de alta resistencia',
      'Ideal para montaje en suelo, campos o pérgolas elevadas',
      'Mayor durabilidad contra la degradación PID'
    ],
    idealFor: ['Campos', 'Estructuras elevadas', 'Comercios con playa', 'Instalaciones en suelo'],
    detailIntro: 'Panel pensado para proyectos donde la cara posterior puede aprovechar el reflejo del suelo o de superficies claras, aumentando la producción total del sistema.',
    detailPoints: [
      'Rinde especialmente bien en instalaciones elevadas, pérgolas solares o montaje sobre suelo.',
      'Necesita revisar albedo, altura de montaje y sombras para justificar la inversión.',
      'Puede formar parte de kits rurales, comerciales o instalaciones de mayor escala.'
    ],
    consultationFocus: 'evaluar si el lugar permite aprovechar la generación bifacial',
    image: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&q=80&w=800',
    badge: 'Alta Tecnología'
  },
  {
    id: 'p3',
    slug: 'inversor-hibrido-inteligente-deye-solis-5kw-10kw',
    name: 'Inversor Híbrido Inteligente Deye / Solis 5kW / 10kW',
    category: 'inverters',
    description: 'El cerebro de la instalación solar. Gestiona de manera eficiente los paneles, las baterías de almacenamiento, los consumos y la red eléctrica.',
    specifications: [
      'Inyección a red (On-Grid) y función de respaldo (UPS)',
      'Compatible con baterías de Litio y de Gel',
      'Pantalla táctil LCD de configuración intuitiva',
      'Monitoreo móvil por Wi-Fi / App móvil integrado'
    ],
    idealFor: ['Hogares con cortes', 'Comercios críticos', 'Sistemas con baterías', 'Autoconsumo con respaldo'],
    detailIntro: 'Inversor indicado cuando se busca ahorro diario, posibilidad de respaldo ante cortes y crecimiento futuro con baterías.',
    detailPoints: [
      'Administra paneles, baterías, red eléctrica y cargas críticas desde un mismo equipo.',
      'Permite priorizar autoconsumo, respaldo o carga de baterías según la necesidad.',
      'La potencia se define por consumos simultáneos, autonomía requerida y capacidad de paneles.'
    ],
    consultationFocus: 'definir potencia, banco de baterías y consumos críticos a respaldar',
    image: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&q=80&w=800',
    badge: 'Premium'
  },
  {
    id: 'p4',
    slug: 'inversor-on-grid-monofasico-trifasico-solis',
    name: 'Inversor On-Grid Monofásico y Trifásico Solis',
    category: 'inverters',
    description: 'Inversores para inyección directa a red. Pensados para el autoconsumo inmediato en comercios y oficinas con consumos mayoritariamente diurnos.',
    specifications: [
      'Eficiencia máxima de conversión de hasta 98.7%',
      'Doble o triple rastreador MPPT para diferentes orientaciones',
      'Diseño compacto sin ventiladores externos (silencioso)',
      'Apto para Ley de Generación Distribuida'
    ],
    idealFor: ['Comercios', 'Oficinas', 'Industrias pequeñas', 'Hogares con consumo diurno'],
    detailIntro: 'Equipo para instalaciones conectadas a red, orientado a reducir consumo eléctrico durante las horas de sol sin utilizar baterías.',
    detailPoints: [
      'Es una opción eficiente cuando el mayor consumo ocurre de día.',
      'Puede acompañarse con trámite de generación distribuida si corresponde.',
      'Se dimensiona según potencia contratada, perfil de consumo y disponibilidad de techo.'
    ],
    consultationFocus: 'evaluar autoconsumo, conexión monofásica o trifásica y retorno estimado',
    image: 'https://images.unsplash.com/photo-1621905252507-b354bc25edac?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'p5',
    slug: 'bateria-litio-lifepo4-48v-100ah-4-8kwh',
    name: 'Batería de Litio LiFePO4 48V 100Ah (4.8kWh)',
    category: 'batteries',
    description: 'Módulos de Litio Ferro-Fosfato de diseño modular para rack. Carga ultra rápida, alta densidad energética y máxima seguridad operativa.',
    specifications: [
      'Más de 6.000 ciclos de vida útil al 80% DoD',
      'BMS (Battery Management System) inteligente incorporado',
      'Garantía oficial del fabricante por 10 años',
      'Conexión en paralelo escalable hasta 15 unidades'
    ],
    idealFor: ['Respaldo ante cortes', 'Sistemas híbridos', 'Off-grid exigente', 'Cargas críticas'],
    detailIntro: 'Batería modular para almacenar energía y sostener consumos cuando no hay sol o cuando la red eléctrica falla.',
    detailPoints: [
      'Aporta mayor vida útil y mejor profundidad de descarga que alternativas tradicionales.',
      'Se puede escalar sumando módulos si la autonomía requerida crece.',
      'Debe seleccionarse junto con el inversor para asegurar compatibilidad de comunicación y carga.'
    ],
    consultationFocus: 'calcular autonomía, potencia de respaldo y compatibilidad con el inversor',
    image: 'https://images.unsplash.com/photo-1611273426858-450d8e3c9fce?auto=format&fit=crop&q=80&w=800',
    badge: 'Larga Vida Útil'
  },
  {
    id: 'p6',
    slug: 'bateria-gel-ciclo-profundo-12v-200ah',
    name: 'Batería de Gel Ciclo Profundo 12V 200Ah',
    category: 'batteries',
    description: 'Batería de ácido-plomo regulada por válvula (VRLA) con electrolito gelificado, ideal para respaldo y sistemas de energía aislada económicos.',
    specifications: [
      'Excelente relación costo-beneficio inicial',
      'Libre de mantenimiento y sin emanación de gases',
      'Hasta 1.200 ciclos al 50% de descarga',
      'Ideal para puestos de campo de bajo y medio consumo'
    ],
    idealFor: ['Kits rurales simples', 'Boyeros', 'Iluminación', 'Respaldo económico'],
    detailIntro: 'Alternativa de almacenamiento robusta para consumos moderados, instalaciones aisladas y proyectos donde se prioriza inversión inicial contenida.',
    detailPoints: [
      'Funciona bien en sistemas simples de baja y media demanda.',
      'Requiere controlar profundidad de descarga para cuidar su vida útil.',
      'Se suele usar en bancos de baterías para lograr el voltaje y autonomía necesarios.'
    ],
    consultationFocus: 'armar banco de baterías según consumo, autonomía y presupuesto',
    image: 'https://images.unsplash.com/photo-1595079676339-1534801ad6cf?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'p7',
    slug: 'regulador-carga-mppt-epever-40a-60a',
    name: 'Regulador de Carga MPPT EPEVER 40A / 60A',
    category: 'controllers',
    description: 'Controlador de carga inteligente de alta eficiencia que maximiza la transferencia de energía desde los paneles a las baterías.',
    specifications: [
      'Tecnología MPPT avanzada con eficiencia de seguimiento de hasta 99.5%',
      'Reconocimiento automático del voltaje del sistema (12V/24V/36V/48V)',
      'Pantalla digital para ver estado de carga e historial de generación',
      'Protección electrónica contra polaridad inversa y sobrecarga'
    ],
    idealFor: ['Kits off-grid', 'Bancos de baterías', 'Casillas rurales', 'Sistemas de baja potencia'],
    detailIntro: 'Controlador que optimiza la carga de baterías desde los paneles solares, especialmente en sistemas aislados.',
    detailPoints: [
      'Ayuda a extraer más energía disponible del arreglo fotovoltaico.',
      'Protege las baterías y mejora el control de carga del sistema.',
      'Se elige según corriente, voltaje del banco de baterías y potencia de paneles.'
    ],
    consultationFocus: 'validar corriente, voltaje y cantidad de paneles del kit',
    image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'p8',
    slug: 'estructuras-montaje-aluminio-al6005-t5',
    name: 'Estructuras de Montaje de Aluminio Al6005-T5',
    category: 'structures',
    description: 'Perfilería de aluminio anodizado y herrajes de acero inoxidable preensamblados de alta durabilidad para resistir ráfagas de viento de hasta 130 km/h.',
    specifications: [
      'Modelos específicos para techos de chapa trapezoidal, sinusoidal o tejas',
      'Totalmente inmunes a la corrosión galvánica y oxidación',
      'Instalación rápida mediante uniones autoperforantes aisladas',
      'Ángulos de inclinación ajustables para optimizar la captación invernal'
    ],
    idealFor: ['Techos de chapa', 'Techos de teja', 'Montaje en suelo', 'Instalaciones a medida'],
    detailIntro: 'Sistema mecánico que fija los paneles al techo o al suelo con la inclinación y seguridad adecuadas para cada instalación.',
    detailPoints: [
      'Debe elegirse según tipo de cubierta, orientación, viento y cantidad de paneles.',
      'Una estructura correcta evita filtraciones, vibraciones y pérdidas por mala inclinación.',
      'Es parte clave del dimensionamiento, no un accesorio genérico.'
    ],
    consultationFocus: 'relevar tipo de techo, medidas, orientación y cantidad de módulos',
    image: 'https://images.unsplash.com/photo-1548613053-220ef3db44af?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'p9',
    slug: 'tablero-protecciones-electricas-ac-dc',
    name: 'Tablero de Protecciones Eléctricas Integradas AC/DC',
    category: 'electrical',
    description: 'Tablero premontado diseñado bajo normativas AEA para salvaguardar la integridad de los equipos solares, el inmueble y los usuarios.',
    specifications: [
      'Lado DC: Fusibles gPV, portafusibles de 1000V y descargadores de sobretensión',
      'Lado AC: Interruptor termomagnético, disyuntor diferencial y protector de tensión',
      'Gabinete estanco IP65 resistente al polvo y la humedad con visor transparente',
      'Probado y cableado listo para su interconexión segura'
    ],
    idealFor: ['Instalaciones completas', 'Kits solares', 'Hogares', 'Comercios'],
    detailIntro: 'Conjunto de protecciones para cuidar equipos, instalación eléctrica y personas, tanto del lado de paneles como del lado de corriente alterna.',
    detailPoints: [
      'Reduce riesgos por sobretensiones, cortocircuitos y fallas de aislación.',
      'Debe adaptarse a la potencia del sistema, tipo de inversor y normativa aplicable.',
      'Permite entregar una instalación más prolija, mantenible y segura.'
    ],
    consultationFocus: 'definir protecciones AC/DC correctas para el sistema completo',
    image: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&q=80&w=800',
    badge: 'Seguridad Certificada'
  },
  {
    id: 'p10',
    slug: 'cable-solar-fotovoltaico-mc4-4mm-6mm',
    name: 'Cable Solar Fotovoltaico MC4 de 4mm y 6mm',
    category: 'electrical',
    description: 'Conductores de cobre estañado de múltiples filamentos con doble aislamiento XLPE para tendidos a la intemperie y conexiones estancas.',
    specifications: [
      'Certificación TÜV EN 50618 (Especial para energía fotovoltaica)',
      'Resistente a rayos UV, ozono, ácidos y temperaturas extremas (-40°C a 90°C)',
      'Conectores tipo MC4 con estanqueidad IP68 instalados a medida',
      'Disponibles en colores rojo (positivo) y negro (negativo) para evitar errores'
    ],
    idealFor: ['Conexionado de paneles', 'Kits solares', 'Reposiciones', 'Instaladores'],
    detailIntro: 'Cableado específico para instalaciones fotovoltaicas expuestas a intemperie, temperatura y radiación UV.',
    detailPoints: [
      'No conviene reemplazarlo por cable común cuando el tramo queda expuesto al exterior.',
      'La sección se define según corriente, distancia y caída de tensión admisible.',
      'Puede entregarse como insumo suelto o parte de un kit armado.'
    ],
    consultationFocus: 'calcular metros, sección y conectores necesarios para la instalación',
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80&w=800'
  }
];

export const productCategoryLabels: Record<Product['category'] | 'all', string> = {
  all: 'Todos',
  panels: 'Paneles Solares',
  inverters: 'Inversores',
  batteries: 'Baterías',
  controllers: 'Reguladores',
  structures: 'Estructuras',
  electrical: 'Insumos / Cables',
};

export function getProductBySlug(slug: string) {
  return productsData.find((product) => product.slug === slug);
}

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
    recommendedKit: 'Sistema Híbrido LUZ SOLAR Home (3kW a 5kW con almacenamiento de Litio)'
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
    recommendedKit: 'Sistema On-Grid Autoconsumo Comercial (10kW a 30kW)'
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
