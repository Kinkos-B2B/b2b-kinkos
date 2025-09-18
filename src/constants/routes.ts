export const ROUTES = {
  HOME: '/',
  BIZ: {
    PRODUCTION: '/biz/production',
    PACKAGING: '/biz/packaging',
    IT_SECURITY: '/biz/it-security',
    SUPPORT: '/biz/support',
    NETWORK: '/biz/network',
    INTRODUCTION: '/biz/introduction',
  },
  SOLUTIONS: {
    DESIGN: {
      BRANDING: '/solutions/design/branding',
      MARKET_ANALYSIS: '/solutions/design/market-analysis',
      POP_DESIGN: '/solutions/design/pop-design',
      VMD_3D: '/solutions/design/vmd-3d',
    },
    PRODUCTION: {
      ALL_IN_ONE: '/solutions/production/all-in-one',
      LOGISTICS: '/solutions/production/logistics',
    },
    VIDEO_AI: {
      DIGITAL_VIDEO: '/solutions/video-ai/digital-video',
      AR_PRINTING: '/solutions/video-ai/ar-printing',
      EMOTION_ANALYSIS: '/solutions/video-ai/emotion-analysis',
    },
    ONLINE_ORDER: {
      BUSINESS_CARD: '/solutions/online-order/business-card',
      CORPORATE_PRINTING: '/solutions/online-order/corporate-printing',
    },
  },
  CUSTOMER_REVIEW: '/customer-review',
  PROBLEM: {
    CONTRACT: {
      CORPORATE: '/problem/contract/corporate',
      PAYMENT: '/problem/contract/payment',
    },
    PRODUCTION: {
      DESIGN: '/problem/production/design',
      POP: '/problem/production/pop',
      VIDEO: '/problem/production/video',
    },
    ORDER: {
      SITE: '/problem/order/site',
      MANAGEMENT: '/problem/order/management',
    },
    DELIVERY: {
      PACKAGING: '/problem/delivery/packaging',
      SHIPPING: '/problem/delivery/shipping',
      STORAGE: '/problem/delivery/storage',
    },
    COST: {
      EFFECTIVENESS: '/problem/cost/effectiveness',
      MANAGEMENT: '/problem/cost/management',
    },
  },
  EXPERT: '/portfolio',
  SUPPORT: '/support',
  FAQ: '/faq',
} as const
