import { ROUTES } from '@/constants/routes'

export interface SubMenuItem {
  label: string
  href: string
}

export interface SubMenuCategory {
  title: string
  href?: string
  items?: SubMenuItem[]
}

export interface NavigationItem {
  label: string
  href?: string
  subItems?: SubMenuCategory[]
}

export const BIZ_NAVIGATION_ITEMS: NavigationItem = {
  label: '킨코스 비즈',
  subItems: [
    {
      title: '생산 & 제작',
      href: ROUTES.BIZ.PRODUCTION,
    },
    {
      title: '포장 & 배송',
      href: ROUTES.BIZ.PACKAGING,
    },
    {
      title: 'IT & 보안',
      href: ROUTES.BIZ.IT_SECURITY,
    },
    {
      title: '인력 & 지원',
      href: ROUTES.BIZ.SUPPORT,
    },
    {
      title: '센터 네트워크',
      href: ROUTES.BIZ.NETWORK,
    },
    {
      title: '킨코스 소개',
      href: ROUTES.BIZ.INTRODUCTION,
    },
  ],
}

export const SOLUTION_NAVIGATION_ITEMS: NavigationItem = {
  label: '솔루션',
  subItems: [
    {
      title: '디자인 기획 솔루션',
      items: [
        {
          label: '브랜딩 디자인',
          href: ROUTES.SOLUTIONS.DESIGN.BRANDING,
        },
        {
          label: '굿즈&판촉물 디자인',
          href: ROUTES.SOLUTIONS.DESIGN.GIFT_PROMOTIONAL_DESIGN,
        },
        {
          label: '매장 POP 디자인',
          href: ROUTES.SOLUTIONS.DESIGN.POP_DESIGN,
        },
        { label: 'VMD(3D) 디자인', href: ROUTES.SOLUTIONS.DESIGN.VMD_3D },
      ],
    },
    {
      title: '인쇄 제작 솔루션',
      items: [
        {
          label: '안전 사인물 제작관리',
          href: ROUTES.SOLUTIONS.PRODUCTION.SAFETY_SIGN,
        },
        {
          label: '시즌성 인쇄물 제작관리',
          href: ROUTES.SOLUTIONS.PRODUCTION.SEASONAL_PRINTING,
        },
        {
          label: '통합제작 물류관리',
          href: ROUTES.SOLUTIONS.PRODUCTION.LOGISTICS,
        },
        {
          label: '통합제작 All-in-One',
          href: ROUTES.SOLUTIONS.PRODUCTION.ALL_IN_ONE,
        },
      ],
    },
    {
      title: '영상 / AI 솔루션',
      items: [
        {
          label: '디지털 영상 제작',
          href: ROUTES.SOLUTIONS.VIDEO_AI.DIGITAL_VIDEO,
        },
        {
          label: 'AR 인쇄물 제작',
          href: ROUTES.SOLUTIONS.VIDEO_AI.AR_PRINTING,
        },
        {
          label: 'EX감성 분석',
          href: ROUTES.SOLUTIONS.VIDEO_AI.EMOTION_ANALYSIS,
        },
      ],
    },
    {
      title: '온라인 주문 솔루션',
      items: [
        {
          label: '온라인  명함 주문 관리',
          href: ROUTES.SOLUTIONS.ONLINE_ORDER.BUSINESS_CARD,
        },
        {
          label: '기업 전용 인쇄몰',
          href: ROUTES.SOLUTIONS.ONLINE_ORDER.CORPORATE_PRINTING,
        },
        {
          label: '프렌차이즈 전용 인쇄물',
          href: ROUTES.SOLUTIONS.ONLINE_ORDER.FRANCHISE_PRINTING,
        },
      ],
    },
  ],
}

export const CUSTOMER_REVIEW_NAVIGATION_ITEM: NavigationItem = {
  label: '고객후기',
  href: ROUTES.CUSTOMER_REVIEW,
}

export const PROBLEM_SOLVE_NAVIGATION_ITEM: NavigationItem = {
  label: '고민해결',
  href: ROUTES.PROBLEM,
}

export const EXPERT_NAVIGATION_ITEM: NavigationItem = {
  label: '전문가',
  href: ROUTES.EXPERT,
}

export const FAQ_NAVIGATION_ITEM: NavigationItem = {
  label: '주요질문',
  href: ROUTES.FAQ,
}

export const HEADER_NAVIGATION_ITEMS: NavigationItem[] = [
  BIZ_NAVIGATION_ITEMS,
  SOLUTION_NAVIGATION_ITEMS,
  CUSTOMER_REVIEW_NAVIGATION_ITEM,
  PROBLEM_SOLVE_NAVIGATION_ITEM,
  EXPERT_NAVIGATION_ITEM,
  FAQ_NAVIGATION_ITEM,
]
