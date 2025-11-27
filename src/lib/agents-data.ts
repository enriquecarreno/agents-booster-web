// AGENTS BOOSTER - Data de Agentes
// Fuente: AGENTS-BOOSTER-MASTER-DOC.md

export interface AgentLevel {
  id: string;
  name: string;
  tagline: string;
  price: number | null; // null = custom
  setup: number | null;
  interactions: number | string;
  features: string[];
  popular?: boolean;
  isCustom?: boolean;
}

export interface Addon {
  id: string;
  name: string;
  price: number;
  setup: number;
  description: string;
  availableFor: string[]; // level IDs
}

export interface Agent {
  id: string;
  name: string;
  icon: string;
  tagline: string;
  description: string;
  available: boolean; // true o beta
  metrics: {
    label: string;
    value: string;
  }[];
  painPoints?: {
    title: string;
    problem: string;
    cost: string;
  }[];
  solutions?: {
    title: string;
    description: string;
    bullets: string[];
  }[];
  useCases?: {
    industry: string;
    icon: string;
    use: string;
    impact: string;
  }[];
  levels?: AgentLevel[];
  addons?: Addon[];
  faqs?: {
    question: string;
    answer: string;
  }[];
}

// ============================================
// AGENTE DE VENTAS
// ============================================
export const SALES_AGENT: Agent = {
  id: 'ventas',
  name: 'Agente de Ventas',
  icon: '💰',
  tagline: 'Tu vendedor 24/7 que nunca duerme',
  description: 'Atiende clientes, cotiza, procesa pedidos y actualiza tu CRM automáticamente. Como tener un equipo de ventas trabajando las 24 horas.',
  available: true,
  metrics: [
    { label: 'Conversión', value: '+35%' },
    { label: 'Disponibilidad', value: '24/7' },
    { label: 'Respuesta', value: '<3s' },
  ],
  painPoints: [
    {
      title: 'Pérdida de ventas fuera de horario',
      problem: '40% de leads contactan fuera de horario',
      cost: '$2,000-5,000/mes en ventas perdidas'
    },
    {
      title: 'Respuestas lentas matan conversión',
      problem: 'Cada minuto reduce conversión en 5%',
      cost: '-45% en tasa de conversión'
    },
    {
      title: 'Tareas repetitivas consumen tiempo',
      problem: '60% del tiempo en responder lo mismo',
      cost: '120 horas/mes del equipo'
    },
    {
      title: 'Inconsistencia en la experiencia',
      problem: 'Cada vendedor responde diferente',
      cost: '30% de leads sin seguimiento adecuado'
    },
  ],
  solutions: [
    {
      title: 'Captura y Califica Leads Automáticamente',
      description: 'Detección inteligente de intención y scoring en tiempo real',
      bullets: [
        'Preguntas contextuales inteligentes',
        'Scoring automático (frío/tibio/caliente)',
        'Enrutamiento al vendedor correcto'
      ]
    },
    {
      title: 'Cotiza y Negocia en Tiempo Real',
      description: 'Procesa pedidos completos sin intervención humana',
      bullets: [
        'Integración con catálogo y pricing',
        'Cálculo de descuentos automático',
        'Generación de cotizaciones PDF',
        'Links de pago directo'
      ]
    },
    {
      title: 'Actualiza CRM y Hace Seguimientos',
      description: 'Sincronización bidireccional con tu sistema',
      bullets: [
        'Notas automáticas de cada conversación',
        'Recordatorios de seguimiento',
        'Handoff inteligente a humanos'
      ]
    },
  ],
  useCases: [
    {
      industry: 'E-commerce & Retail',
      icon: '🏪',
      use: 'Atiende consultas, recomienda, procesa pedidos 24/7',
      impact: '+40% ventas nocturnas, -70% carrito abandonado'
    },
    {
      industry: 'B2B Sales',
      icon: '🏢',
      use: 'Califica leads, agenda demos, envía propuestas',
      impact: '+50% leads calificados, -30% ciclo de venta'
    },
    {
      industry: 'Inmobiliarias',
      icon: '🏠',
      use: 'Info propiedades, agenda visitas, seguimiento',
      impact: '+60% agendamientos, 100% seguimiento'
    },
  ],
  levels: [
    {
      id: 'entrepreneur',
      name: 'Entrepreneur Kit',
      tagline: 'Perfecto para emprendedores y negocios pequeños',
      price: 49,
      setup: 150,
      interactions: 500,
      features: [
        '1 canal (WhatsApp, Instagram o Webchat)',
        'Catálogo pequeño (≈100 productos)',
        'FAQs y políticas básicas',
        'Dashboard semanal básico',
        'Integración con Google Sheets',
        'Soporte por email'
      ]
    },
    {
      id: 'run',
      name: 'Run',
      tagline: 'Para negocios en crecimiento',
      price: 299,
      setup: 700,
      interactions: 2000,
      features: [
        'Multi-canal básico (hasta 3 canales)',
        'Catálogo ampliado',
        'Envío de links de pago',
        'Registro automático de leads en CRM',
        'Reportes por canal y conversión',
        'Soporte prioritario'
      ]
    },
    {
      id: 'grow',
      name: 'Grow',
      tagline: 'Para negocios escalando',
      price: 699,
      setup: 1500,
      interactions: 5000,
      popular: true,
      features: [
        'Integración CRM read/write completa',
        'Inventario en tiempo real',
        'Cálculo de envíos automático',
        'Dashboards de funnel de ventas',
        'Recomendaciones next best action',
        'Account manager compartido'
      ]
    },
    {
      id: 'command',
      name: 'Command',
      tagline: 'Para operaciones enterprise',
      price: 1399,
      setup: 2800,
      interactions: 10000,
      features: [
        'Detección de fraude y riesgo',
        'Multi-bodega y stock avanzado',
        'Escenarios what-if de ventas',
        'SLA 99.9% formalizable',
        'Soporte 24/7 crítico',
        'Infraestructura priorizada'
      ]
    },
  ],
  addons: [
    {
      id: 'interactions-500',
      name: '+500 conversaciones',
      price: 9,
      setup: 0,
      description: 'Interacciones adicionales por mes',
      availableFor: ['entrepreneur', 'run', 'grow', 'command']
    },
    {
      id: 'interactions-2000',
      name: '+2,000 conversaciones',
      price: 29,
      setup: 0,
      description: 'Pack de interacciones para alto volumen',
      availableFor: ['entrepreneur', 'run', 'grow', 'command']
    },
    {
      id: 'channel',
      name: 'Canal adicional',
      price: 10,
      setup: 50,
      description: 'WhatsApp, Instagram, Messenger, etc.',
      availableFor: ['entrepreneur', 'run']
    },
    {
      id: 'data-connector-basic',
      name: 'Data Connector Basic',
      price: 19,
      setup: 100,
      description: 'Sheets/CSV sync',
      availableFor: ['entrepreneur']
    },
    {
      id: 'data-connector-payments',
      name: 'Data Connector Payments',
      price: 19,
      setup: 150,
      description: 'Integración con pasarelas de pago',
      availableFor: ['entrepreneur', 'run']
    },
  ],
  faqs: [
    {
      question: '¿El agente puede cerrar ventas solo o necesita un humano?',
      answer: 'Puede hacer ambas. En modo autónomo, puede procesar pedidos completos si configuras pagos. O puede calificar, cotizar y pasar a vendedor humano. Tú decides el nivel de autonomía.'
    },
    {
      question: '¿Qué pasa si un cliente hace una pregunta que el agente no sabe responder?',
      answer: 'El agente escala automáticamente a un humano. Puede ser instantáneo (transfiere conversación) o asíncrono (notifica). Tú defines las reglas de escalamiento.'
    },
    {
      question: '¿Se integra con mi CRM actual?',
      answer: 'Sí. Tenemos conectores para HubSpot, Salesforce, Pipedrive, Zoho y 20+ CRMs. Si usas uno custom, integramos vía API. Sincronización bidireccional.'
    },
    {
      question: '¿Cómo maneja objeciones de clientes?',
      answer: 'Entrenado en técnicas de ventas consultivas. Maneja objeciones comunes con respuestas configurables. Para casos complejos, ofrece agendar call con especialista.'
    },
    {
      question: '¿Puedo personalizar el tono y personalidad del agente?',
      answer: 'Totalmente. En el setup defines: tono (formal/casual), personalidad (empático/directo/consultivo), límites, y frases específicas. Se adapta a tu marca.'
    },
    {
      question: '¿Qué tan rápido aprende de nuestros productos?',
      answer: 'En el setup inicial (5-7 días) entrenamos con tu catálogo, FAQs y políticas. Después aprende de cada interacción. En 30 días está optimizado para tu negocio.'
    },
  ]
};

// ============================================
// AGENTE DE OPERACIONES
// ============================================
export const OPERATIONS_AGENT: Agent = {
  id: 'operaciones',
  name: 'Agente de Operaciones',
  icon: '📦',
  tagline: 'Tu copiloto operativo que nunca falla',
  description: 'Gestiona inventario, forecast de demanda, monitorea excepciones y optimiza la cadena de suministro en tiempo real.',
  available: true,
  metrics: [
    { label: 'Quiebres', value: '-83%' },
    { label: 'Precisión', value: '91%' },
    { label: 'Monitoreo', value: '24/7' },
  ],
  painPoints: [
    {
      title: 'Quiebres de stock frecuentes',
      problem: 'No sabes que te quedaste sin stock hasta que un cliente lo pide',
      cost: '$3,000-8,000/mes en ventas perdidas'
    },
    {
      title: 'Forecast manual inexacto',
      problem: 'Excel con datos desactualizados, sobrestock y faltantes',
      cost: '25-40% de capital en inventario muerto'
    },
    {
      title: 'Reacción tardía a problemas',
      problem: 'Te enteras de crisis cuando ya es tarde',
      cost: '5-10 días para resolver vs 1 día'
    },
    {
      title: 'Coordinación manual ineficiente',
      problem: '40% del tiempo en comunicación repetitiva',
      cost: '80 horas/mes del equipo operativo'
    },
  ],
  solutions: [
    {
      title: 'Forecast Inteligente Multi-Variable',
      description: 'Machine learning sobre tu histórico',
      bullets: [
        'Ajuste automático por estacionalidad',
        'Consideración de promociones',
        'Alertas proactivas de demanda inusual'
      ]
    },
    {
      title: 'Monitoreo y Alertas en Tiempo Real',
      description: 'Nunca te quedas sin stock crítico',
      bullets: [
        'Alertas de punto de reorden automático',
        'Detección de anomalías en consumo',
        'Tracking de pedidos a proveedores',
        'Dashboard de KPIs operativos'
      ]
    },
    {
      title: 'Automatización de Tareas Repetitivas',
      description: 'Libera a tu equipo del trabajo manual',
      bullets: [
        'Generación automática de POs',
        'Comunicación con proveedores',
        'Actualización de ERP en tiempo real',
        'Reportes automáticos'
      ]
    },
  ],
  useCases: [
    {
      industry: 'Retail Multi-Tienda',
      icon: '🏪',
      use: 'Balancea inventario, previene quiebres, optimiza transferencias',
      impact: '-83% quiebres, -35% overstock, +22% rotación'
    },
    {
      industry: 'Manufactura',
      icon: '🏭',
      use: 'Gestiona insumos, prevé producción, coordina proveedores',
      impact: '-40% inventario de seguridad, +95% on-time'
    },
    {
      industry: 'Restaurantes & Food',
      icon: '🍔',
      use: 'Controla perecederos, prevé demanda, reduce merma',
      impact: '-60% merma, -30% costos de insumos'
    },
  ],
  levels: [
    {
      id: 'core',
      name: 'Core',
      tagline: 'Forecast simple para iniciar',
      price: 429,
      setup: 900,
      interactions: 10000,
      features: [
        'Forecast de demanda básico',
        'Alertas de stock crítico',
        'Dashboard semanal',
        'Integración con 1 ERP/WMS',
        'Análisis de tendencias básico',
        'Soporte por email'
      ]
    },
    {
      id: 'growth',
      name: 'Growth',
      tagline: 'Reglas SS/ROP + integración profunda',
      price: 949,
      setup: 2000,
      interactions: 50000,
      popular: true,
      features: [
        'Reglas Safety Stock y ROP automáticas',
        'Integración profunda ERP/WMS',
        'Alertas multi-canal (Slack, Teams, Email)',
        'Recomendaciones de reabastecimiento',
        'Análisis de excepciones',
        'Account manager compartido'
      ]
    },
    {
      id: 'elite',
      name: 'Elite',
      tagline: 'MRP multi-nivel + capacidad finita',
      price: 1799,
      setup: 3600,
      interactions: 250000,
      features: [
        'MRP multi-nivel completo',
        'Capacidad finita y planificación',
        'Multi-bodega y redistribución',
        'Monitoreo de excepciones 24/7',
        'Órdenes de compra automáticas',
        'SLA 99.9% + soporte 24/7'
      ]
    },
  ],
  addons: [
    {
      id: 'alert-channel',
      name: 'Canal de alertas adicional',
      price: 15,
      setup: 50,
      description: 'Slack, Teams, WhatsApp, Email',
      availableFor: ['core', 'growth', 'elite']
    },
    {
      id: 'warehouse-pack',
      name: 'Warehouse Pack',
      price: 79,
      setup: 400,
      description: 'Bodega/ubicación adicional',
      availableFor: ['growth', 'elite']
    },
    {
      id: 'supplier-automation',
      name: 'Supplier Automation',
      price: 149,
      setup: 800,
      description: 'Envío automático de órdenes de compra',
      availableFor: ['growth', 'elite']
    },
  ],
  faqs: [
    {
      question: '¿El agente puede hacer pedidos a proveedores automáticamente?',
      answer: 'Sí, pero tú decides el nivel de autonomía. Puede generar OCs para tu aprobación, o enviarlas directo si configuras reglas (ej: <$5K automático).'
    },
    {
      question: '¿Cómo se integra con nuestro ERP actual?',
      answer: 'Integraciones nativas con SAP, Oracle, Odoo, QuickBooks y 30+ ERPs. Sistema custom: API REST en el setup. Sincronización bidireccional en tiempo real.'
    },
    {
      question: '¿Qué tan preciso es el forecast realmente?',
      answer: '91% precisión promedio en 8 empresas LATAM. Mejora con más histórico. En 90 días, típicamente >95% para productos de alta rotación.'
    },
    {
      question: '¿Puede manejar múltiples bodegas/sucursales?',
      answer: 'Sí. Gestiona inventario distribuido, balancea entre locaciones, sugiere transferencias óptimas y coordina reposiciones por ubicación.'
    },
  ]
};

// ============================================
// AGENTES BETA (Marketing, RRHH, Asistente)
// ============================================
export const MARKETING_AGENT: Agent = {
  id: 'marketing',
  name: 'Agente de Marketing',
  icon: '📢',
  tagline: 'Tu equipo creativo que nunca descansa',
  description: 'Crea contenido, programa campañas, optimiza estrategias en redes y Ads. Tu CMO asistido por IA.',
  available: false,
  metrics: [
    { label: 'Engagement', value: '+42%' },
    { label: 'Tiempo', value: '-60%' },
    { label: 'Output', value: '3x' },
  ],
};

export const HR_AGENT: Agent = {
  id: 'rrhh',
  name: 'Agente de RRHH',
  icon: '👥',
  tagline: 'Tu HR partner que escala contigo',
  description: 'Recluta, filtra candidatos, agenda entrevistas, responde consultas internas y gestiona onboarding.',
  available: false,
  metrics: [
    { label: 'Screening', value: '-75%' },
    { label: 'Satisfacción', value: '95%' },
    { label: 'Disponibilidad', value: '24/7' },
  ],
};

export const ASSISTANT_AGENT: Agent = {
  id: 'asistente',
  name: 'Agente Asistente',
  icon: '🎯',
  tagline: 'Tu EA ejecutivo siempre disponible',
  description: 'Asistente ejecutivo que gestiona agenda, emails, tareas, coordina reuniones y te mantiene organizado 24/7.',
  available: false,
  metrics: [
    { label: 'Tiempo ahorrado', value: '8h/semana' },
    { label: 'Organización', value: '100%' },
    { label: 'Meetings perdidos', value: '0' },
  ],
};

// ============================================
// AGENTE PERSONALIZADO (6to agente)
// ============================================
export const CUSTOM_AGENT: Agent = {
  id: 'personalizado',
  name: 'Agente Personalizado',
  icon: '⚙️',
  tagline: 'Construimos el agente que necesitas',
  description: 'Un agente 100% a tu medida para cualquier proceso específico de tu negocio. Diseñamos, entrenamos y desplegamos el agente perfecto para tus necesidades únicas.',
  available: true,
  metrics: [
    { label: 'Personalización', value: '100%' },
    { label: 'Industrias', value: 'Todas' },
    { label: 'Flexibilidad', value: 'Total' },
  ],
  painPoints: [
    {
      title: 'Procesos únicos sin solución estándar',
      problem: 'Tu negocio tiene workflows específicos que ningún software cubre',
      cost: 'Oportunidades perdidas por falta de automatización'
    },
    {
      title: 'Múltiples sistemas desconectados',
      problem: 'Necesitas integrar sistemas legacy o propietarios',
      cost: 'Horas perdidas en trabajo manual entre plataformas'
    },
    {
      title: 'Requisitos de industria específicos',
      problem: 'Regulaciones o procesos únicos de tu sector',
      cost: 'Soluciones genéricas no cumplen compliance'
    },
  ],
  solutions: [
    {
      title: 'Diseño 100% Personalizado',
      description: 'Construimos el agente exacto que necesitas',
      bullets: [
        'Análisis profundo de tus procesos',
        'Diseño de workflows específicos',
        'Integración con cualquier sistema',
        'Reglas de negocio a tu medida'
      ]
    },
    {
      title: 'Entrenamiento Especializado',
      description: 'IA entrenada con tu conocimiento único',
      bullets: [
        'Aprende de tu histórico y documentación',
        'Entiende tu jerga y procesos internos',
        'Se adapta a tu cultura organizacional',
        'Mejora continua con feedback'
      ]
    },
    {
      title: 'Soporte Enterprise Completo',
      description: 'Equipo dedicado para tu éxito',
      bullets: [
        'Equipo técnico asignado',
        'SLA personalizado con garantías',
        'Infraestructura dedicada opcional',
        'Roadmap prioritario de features'
      ]
    },
  ],
  useCases: [
    {
      industry: 'Industrias Reguladas',
      icon: '🏥',
      use: 'Healthcare, Finanzas, Legal: agentes con compliance específico',
      impact: '100% cumplimiento normativo + automatización'
    },
    {
      industry: 'Procesos Complejos',
      icon: '⚙️',
      use: 'Workflows multi-etapa, aprobaciones, integraciones legacy',
      impact: 'Automatización de procesos únicos de tu empresa'
    },
    {
      industry: 'Multi-Función',
      icon: '🎯',
      use: 'Agente híbrido que combina ventas + ops + soporte',
      impact: 'Solución única para necesidades específicas'
    },
  ],
  levels: [
    {
      id: 'custom-basic',
      name: 'Custom Basic',
      tagline: 'Agente personalizado para proceso específico',
      price: 2500,
      setup: 5000,
      interactions: 'Ilimitado',
      features: [
        'Diseño de agente para 1 proceso específico',
        'Integraciones con hasta 3 sistemas',
        'Workflows personalizados',
        'Entrenamiento con tu data',
        'Dashboard personalizado',
        'Soporte prioritario'
      ]
    },
    {
      id: 'custom-advanced',
      name: 'Custom Advanced',
      tagline: 'Suite completa multi-proceso',
      price: 5000,
      setup: 10000,
      interactions: 'Ilimitado',
      popular: true,
      features: [
        'Agente complejo multi-proceso',
        'Integraciones ilimitadas',
        'Workflows avanzados con aprobaciones',
        'ML personalizado sobre tu histórico',
        'SLA 99.9% formalizado',
        'Account manager dedicado',
        'Soporte 24/7 crítico'
      ]
    },
    {
      id: 'custom-enterprise',
      name: 'Custom Enterprise',
      tagline: 'Solución enterprise con infraestructura dedicada',
      price: null,
      setup: null,
      interactions: 'Ilimitado',
      isCustom: true,
      features: [
        'Múltiples agentes coordinados',
        'Infraestructura dedicada',
        'Equipo de desarrollo asignado',
        'Data science team dedicado',
        'SLA personalizado con penalidades',
        'Roadmap prioritario',
        'Success manager dedicado',
        'White-glove onboarding'
      ]
    },
  ],
  faqs: [
    {
      question: '¿Qué tan complejo puede ser el agente que construyen?',
      answer: 'Cualquier nivel de complejidad. Desde automatizar un proceso simple hasta crear un agente que coordine múltiples departamentos con decenas de integraciones. Hemos construido desde agentes de nicho muy específico hasta suites completas enterprise.'
    },
    {
      question: '¿Cuánto tiempo toma desarrollar un agente personalizado?',
      answer: 'Depende de la complejidad. Un agente básico: 3-4 semanas. Uno avanzado: 6-8 semanas. Enterprise multi-agente: 10-12 semanas. Incluye: análisis, diseño, desarrollo, entrenamiento, testing y go-live.'
    },
    {
      question: '¿Pueden integrar con nuestros sistemas propietarios?',
      answer: 'Sí. Integramos con cualquier sistema que tenga API (REST, SOAP, GraphQL) o base de datos accesible. Si no tiene API, evaluamos otras opciones (RPA, webhooks, etc.). No hay límite técnico.'
    },
    {
      question: '¿Qué pasa si nuestras necesidades cambian después?',
      answer: 'El agente es 100% tuyo y evolutivo. Incluimos iteraciones y ajustes durante los primeros 90 días. Después, puedes contratar desarrollo adicional o ajustes mayores. El agente crece contigo.'
    },
    {
      question: '¿Es solo para empresas grandes?',
      answer: 'No. Hemos construido agentes personalizados desde startups con procesos únicos hasta enterprises. Si tu necesidad es específica y no la cubren los agentes estándar, Custom es para ti, sin importar el tamaño.'
    },
  ]
};

// ============================================
// EXPORTS Y HELPERS
// ============================================
export const ALL_AGENTS = [
  SALES_AGENT,
  OPERATIONS_AGENT,
  MARKETING_AGENT,
  HR_AGENT,
  ASSISTANT_AGENT,
  CUSTOM_AGENT, // 6to agente
];

export function getAgentById(id: string): Agent | undefined {
  return ALL_AGENTS.find(a => a.id === id);
}

export function getAvailableAgents(): Agent[] {
  return ALL_AGENTS.filter(a => a.available);
}

export function getBetaAgents(): Agent[] {
  return ALL_AGENTS.filter(a => !a.available);
}
