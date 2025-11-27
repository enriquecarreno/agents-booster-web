// EXPANSION PACKS - Descripciones detalladas
// Para sistema interactivo de mejoras por nivel

export interface ExpansionPackDetail {
  id: string;
  name: string;
  price: number;
  setup: number;
  shortDesc: string; // Descripción corta para cards
  fullDesc: string; // Descripción completa con beneficios
  whatItDoes: string[]; // Qué hace específicamente
  bestFor: string; // Para quién es ideal
  icon: string;
}

// EXPANSION PACKS - AGENTE DE VENTAS
export const SALES_EXPANSION_PACKS: Record<string, ExpansionPackDetail> = {
  'interactions-500': {
    id: 'interactions-500',
    name: '+500 Conversaciones',
    price: 9,
    setup: 0,
    icon: '💬',
    shortDesc: 'Más capacidad para atender clientes',
    fullDesc: '500 conversaciones adicionales por mes para crecer sin límites',
    whatItDoes: [
      'Aumenta tu límite mensual de conversaciones',
      'Perfecto para picos de demanda estacionales',
      'Sin necesidad de cambiar de plan',
      'Se activa inmediatamente'
    ],
    bestFor: 'Negocios con tráfico variable o campañas puntuales'
  },
  'interactions-2000': {
    id: 'interactions-2000',
    name: '+2,000 Conversaciones',
    price: 29,
    setup: 0,
    icon: '💬',
    shortDesc: 'Pack de alto volumen para escalar',
    fullDesc: '2,000 conversaciones adicionales - ahorra $7/mes vs packs pequeños',
    whatItDoes: [
      'Cuadruplica tu capacidad de conversaciones',
      'Ahorro del 68% vs comprar 4 packs de 500',
      'Ideal para Black Friday, Cyber Monday, etc.',
      'Roll-over de conversaciones no usadas'
    ],
    bestFor: 'E-commerce con campañas grandes o crecimiento acelerado'
  },
  'channel': {
    id: 'channel',
    name: 'Canal Adicional',
    price: 10,
    setup: 50,
    icon: '📱',
    shortDesc: 'Expande a más plataformas',
    fullDesc: 'Agrega WhatsApp, Instagram, Messenger, Telegram o Webchat',
    whatItDoes: [
      'El agente atiende en un canal nuevo',
      'Misma personalidad y conocimiento',
      'Dashboard unificado de todos los canales',
      'Respuestas sincronizadas entre plataformas'
    ],
    bestFor: 'Negocios que quieren estar donde están sus clientes'
  },
  'data-connector-basic': {
    id: 'data-connector-basic',
    name: 'Data Connector Basic',
    price: 19,
    setup: 100,
    icon: '📊',
    shortDesc: 'Sincroniza con Google Sheets o CSV',
    fullDesc: 'Conecta tu agente con Google Sheets, Excel o archivos CSV',
    whatItDoes: [
      'Actualiza catálogo desde una hoja de cálculo',
      'Exporta conversaciones a Sheets automáticamente',
      'Sincronización bidireccional cada hora',
      'Perfecto si no tienes CRM todavía'
    ],
    bestFor: 'Emprendedores que usan Sheets para gestionar su negocio'
  },
  'data-connector-payments': {
    id: 'data-connector-payments',
    name: 'Data Connector Payments',
    price: 19,
    setup: 150,
    icon: '💳',
    shortDesc: 'Acepta pagos directamente',
    fullDesc: 'Integra Stripe, PayPal, Mercado Pago o tu pasarela de pagos',
    whatItDoes: [
      'El agente envía links de pago al instante',
      'Confirma pagos automáticamente',
      'Actualiza estado de pedidos en tiempo real',
      'Soporta múltiples monedas y métodos'
    ],
    bestFor: 'Negocios que quieren cerrar ventas en la conversación'
  }
};

// EXPANSION PACKS - AGENTE DE OPERACIONES
export const OPS_EXPANSION_PACKS: Record<string, ExpansionPackDetail> = {
  'alert-channel': {
    id: 'alert-channel',
    name: 'Canal de Alertas Adicional',
    price: 15,
    setup: 50,
    icon: '🔔',
    shortDesc: 'Recibe alertas donde las necesites',
    fullDesc: 'Agrega Slack, Microsoft Teams, WhatsApp o Email para alertas',
    whatItDoes: [
      'Notificaciones en tiempo real a tu canal preferido',
      'Alertas de stock crítico, forecast y excepciones',
      'Configuración de alertas por rol/persona',
      'Integración lista en 24 horas'
    ],
    bestFor: 'Equipos que trabajan en Slack/Teams y necesitan notificaciones instantáneas'
  },
  'warehouse-pack': {
    id: 'warehouse-pack',
    name: 'Warehouse Pack',
    price: 79,
    setup: 400,
    icon: '🏭',
    shortDesc: 'Gestiona bodegas/ubicaciones extra',
    fullDesc: 'Cada bodega, centro de distribución o ubicación adicional',
    whatItDoes: [
      'Monitoreo independiente por bodega',
      'Recomendaciones de transferencias entre bodegas',
      'Forecast específico por ubicación',
      'Balance automático de inventario'
    ],
    bestFor: 'Retail multi-tienda, manufactura con múltiples plantas, distribuidores'
  },
  'supplier-automation': {
    id: 'supplier-automation',
    name: 'Supplier Automation',
    price: 149,
    setup: 800,
    icon: '📧',
    shortDesc: 'Pedidos automáticos a proveedores',
    fullDesc: 'Genera y envía órdenes de compra automáticamente a tus proveedores',
    whatItDoes: [
      'Creación automática de POs cuando alcanzas ROP',
      'Envío por email directo al proveedor',
      'Seguimiento de pedidos pendientes',
      'Alertas si el proveedor no confirma'
    ],
    bestFor: 'Operaciones que hacen 10+ órdenes/semana y quieren automatizar completamente'
  }
};

// Helper function to get expansion pack details
export function getExpansionPackDetails(packId: string, agentType: 'sales' | 'ops'): ExpansionPackDetail | undefined {
  if (agentType === 'sales') {
    return SALES_EXPANSION_PACKS[packId];
  } else {
    return OPS_EXPANSION_PACKS[packId];
  }
}
