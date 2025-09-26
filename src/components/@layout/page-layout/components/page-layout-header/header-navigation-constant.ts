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
          label: '시장분석 기반제작',
          href: ROUTES.SOLUTIONS.DESIGN.MARKET_ANALYSIS,
        },
        {
          label: '매장 POP 디자인',
          href: ROUTES.SOLUTIONS.DESIGN.POP_DESIGN,
        },
        { label: 'VMD(3D) 제작', href: ROUTES.SOLUTIONS.DESIGN.VMD_3D },
      ],
    },
    {
      title: '인쇄 제작 솔루션',
      items: [
        {
          label: '안전사인물 제작관리',
          href: ROUTES.SOLUTIONS.PRODUCTION.SAFETY_SIGN,
        },
        {
          label: '시즌성 인쇄물 제작관리',
          href: ROUTES.SOLUTIONS.PRODUCTION.SEASONAL_PRINTING,
        },
        {
          label: '통합제작 All-in-One',
          href: ROUTES.SOLUTIONS.PRODUCTION.ALL_IN_ONE,
        },
        {
          label: '통합제작 물류관리',
          href: ROUTES.SOLUTIONS.PRODUCTION.LOGISTICS,
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
          label: '명함 주문 사이트',
          href: ROUTES.SOLUTIONS.ONLINE_ORDER.BUSINESS_CARD,
        },
        {
          label: '기업 인쇄몰',
          href: ROUTES.SOLUTIONS.ONLINE_ORDER.CORPORATE_PRINTING,
        },
      ],
    },
  ],
}

export const PROBLEM_SOLVE_NAVIGATION_ITEMS: NavigationItem = {
  label: '고민해결',
  subItems: [
    {
      title: '계약고민',
      items: [
        {
          label: '법인 계약 고민',
          href: ROUTES.PROBLEM.CONTRACT.CORPORATE,
        },
        {
          label: '결제 방법 고민',
          href: ROUTES.PROBLEM.CONTRACT.PAYMENT,
        },
      ],
    },
    {
      title: '제작고민',
      items: [
        {
          label: '디자인 고민',
          href: ROUTES.PROBLEM.PRODUCTION.DESIGN,
        },
        { label: 'POP 고민', href: ROUTES.PROBLEM.PRODUCTION.POP },
        { label: '영상 고민', href: ROUTES.PROBLEM.PRODUCTION.VIDEO },
      ],
    },
    {
      title: '주문고민',
      items: [
        { label: '사이트 고민', href: ROUTES.PROBLEM.ORDER.SITE },
        {
          label: '주문 관리 고민',
          href: ROUTES.PROBLEM.ORDER.MANAGEMENT,
        },
      ],
    },
    {
      title: '배송/설치고민',
      items: [
        { label: '포장 고민', href: ROUTES.PROBLEM.DELIVERY.PACKAGING },
        { label: '배송 고민', href: ROUTES.PROBLEM.DELIVERY.SHIPPING },
        { label: '보관 고민', href: ROUTES.PROBLEM.DELIVERY.STORAGE },
      ],
    },
    {
      title: '비용 고민',
      items: [
        { label: '효과 고민', href: ROUTES.PROBLEM.COST.EFFECTIVENESS },
        {
          label: '비용 관리 고민',
          href: ROUTES.PROBLEM.COST.MANAGEMENT,
        },
      ],
    },
  ],
}

export const HEADER_NAVIGATION_ITEMS: NavigationItem[] = [
  BIZ_NAVIGATION_ITEMS,
  SOLUTION_NAVIGATION_ITEMS,
  { label: '고객후기', href: ROUTES.CUSTOMER_REVIEW },
  PROBLEM_SOLVE_NAVIGATION_ITEMS,
  { label: '전문가', href: ROUTES.EXPERT },
  { label: '주요질문', href: ROUTES.FAQ },
]
