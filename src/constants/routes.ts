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
      GIFT_PROMOTIONAL_DESIGN: '/solutions/design/gift-promotional-design',
      POP_DESIGN: '/solutions/design/pop-design',
      VMD_3D: '/solutions/design/vmd-3d',
    },
    PRODUCTION: {
      SAFETY_SIGN: '/solutions/production/safety-sign',
      SEASONAL_PRINTING: '/solutions/production/seasonal-printing',
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
      FRANCHISE_PRINTING: '/solutions/online-order/franchise-printing',
    },
  },
  CUSTOMER_REVIEW: '/customer-review',
  CUSTOMER_REVIEW_DETAIL: '/customer-review/:id',

  PROBLEM: '/problem-solve',
  PROBLEM_DETAIL: '/problem-solve/:id',
  EXPERT: '/expert',
  EXPERT_DETAIL: '/expert/:id',
  SUPPORT: '/support',
  FAQ: '/faq',
} as const
