'use client'

import Link from 'next/link'

import { Box, Flex, Heading, Image, chakra } from '@chakra-ui/react'

import { ROUTES } from '@/constants/routes'
import { CustomerReviewSolutionSolutionTypeEnumType } from '@/helper/options'

const SOLUTION_CARD_MAP = {
  [CustomerReviewSolutionSolutionTypeEnumType.BRANDING_DESIGN]: {
    id: 'branding-design',
    title: '브랜딩 디자인',
    iconBg: '#fafdbf',
    href: ROUTES.SOLUTIONS.DESIGN.BRANDING,
    iconSrc:
      '/images/solutions/solution-link-card/e6be096d0bea0e69ac159e30d3b845e3967d16f2.svg',
  },
  [CustomerReviewSolutionSolutionTypeEnumType.MARKET_ANALYSIS_BASED]: {
    id: 'market-analysis',
    title: '굿즈&판촉물 디자인',
    iconBg: '#d5f8f5',
    href: ROUTES.SOLUTIONS.DESIGN.GIFT_PROMOTIONAL_DESIGN,
    iconSrc:
      '/images/solutions/solution-link-card/a2faa5ce816a3b9b3b43726d263ac142dd690837.svg',
  },
  [CustomerReviewSolutionSolutionTypeEnumType.POP_DESIGN]: {
    id: 'store-pop',
    title: '매장 POP 디자인',
    iconBg: '#ffe9ed',
    href: ROUTES.SOLUTIONS.DESIGN.POP_DESIGN,
    iconSrc:
      '/images/solutions/solution-link-card/e8e3628a6a01d777dd8a7e79d773a7c7174d6d5d.svg',
  },
  [CustomerReviewSolutionSolutionTypeEnumType.VMD_3D]: {
    id: 'vmd-3d',
    title: 'VMD(3D) 디자인',
    iconBg: '#e9ebff',
    href: ROUTES.SOLUTIONS.DESIGN.VMD_3D,
    iconSrc:
      '/images/solutions/solution-link-card/c748259c2897a21d59014e976677f08b841c9302.svg',
  },
  [CustomerReviewSolutionSolutionTypeEnumType.ALL_IN_ONE]: {
    id: 'all-in-one',
    title: '통합제작 All-in-One',
    iconBg: '#ffeddb',
    href: ROUTES.SOLUTIONS.PRODUCTION.ALL_IN_ONE,
    iconSrc:
      '/images/solutions/solution-link-card/de3ffa9a68d6d24270d31c69c8f80e29d5392a8a.svg',
  },
  [CustomerReviewSolutionSolutionTypeEnumType.LOGISTICS_MANAGEMENT]: {
    id: 'logistics',
    title: '통합제작 물류관리',
    iconBg: '#d9f7fd',
    href: ROUTES.SOLUTIONS.PRODUCTION.LOGISTICS,
    iconSrc:
      '/images/solutions/solution-link-card/ec1aab818c560687d2e84f0441e3f2884e331695.svg',
  },
  [CustomerReviewSolutionSolutionTypeEnumType.DIGITAL_VIDEO]: {
    id: 'digital-video',
    title: '디지털 영상 제작',
    iconBg: '#ffe9fa',
    href: ROUTES.SOLUTIONS.VIDEO_AI.DIGITAL_VIDEO,
    iconSrc:
      '/images/solutions/solution-link-card/450c6376f920ad69483597b1851586021c0d39ca.svg',
  },
  [CustomerReviewSolutionSolutionTypeEnumType.AR_PRINT]: {
    id: 'ar-print',
    title: 'AR 인쇄물 제작',
    iconBg: '#e5f7da',
    href: ROUTES.SOLUTIONS.VIDEO_AI.AR_PRINTING,
    iconSrc:
      '/images/solutions/solution-link-card/a887f85b21ef4c7598d52d9fd4084de9fb5d35d3.svg',
  },
  [CustomerReviewSolutionSolutionTypeEnumType.EX_SENSITIVITY_ANALYSIS]: {
    id: 'ex-emotion',
    title: 'EX감성 분석',
    iconBg: '#f2ecdb',
    href: ROUTES.SOLUTIONS.VIDEO_AI.EMOTION_ANALYSIS,
    iconSrc:
      '/images/solutions/solution-link-card/627321dfae15310aa4d95e7ff074a1b4d250c987.svg',
  },
  [CustomerReviewSolutionSolutionTypeEnumType.BUSINESS_CARD_SITE]: {
    id: 'online-business-card',
    title: '온라인 명함 주문 관리',
    iconBg: '#d1ecff',
    href: ROUTES.SOLUTIONS.ONLINE_ORDER.BUSINESS_CARD,
    iconSrc:
      '/images/solutions/solution-link-card/833d685a925d4af2fa91758133528ecb153d2af0.svg',
  },
  [CustomerReviewSolutionSolutionTypeEnumType.CORPORATE_PRINT_MALL]: {
    id: 'enterprise-print-mall',
    title: '기업 전용 인쇄몰',
    iconBg: '#e9e9e9',
    href: ROUTES.SOLUTIONS.ONLINE_ORDER.CORPORATE_PRINTING,
    iconSrc:
      '/images/solutions/solution-link-card/81d337dc10a7cacff672a93176a3be3506a31fa6.svg',
  },
  [CustomerReviewSolutionSolutionTypeEnumType.FRANCHISE_PRINT_MALL]: {
    id: 'franchise-print-mall',
    title: '프랜차이즈 전용 인쇄몰',
    iconBg: '#e9e9e9',
    href: ROUTES.SOLUTIONS.ONLINE_ORDER.CORPORATE_PRINTING,
    iconSrc:
      '/images/solutions/solution-link-card/81d337dc10a7cacff672a93176a3be3506a31fa6.svg',
  },
  [CustomerReviewSolutionSolutionTypeEnumType.SEASONAL_PRINT]: {
    id: 'seasonal-print',
    title: '시즌성 인쇄물 제작관리',
    iconBg: '#e9e9e9',
    href: ROUTES.SOLUTIONS.PRODUCTION.SEASONAL_PRINTING,
    iconSrc:
      '/images/solutions/solution-link-card/81d337dc10a7cacff672a93176a3be3506a31fa6.svg',
  },
  [CustomerReviewSolutionSolutionTypeEnumType.SAFETY_SIGNAGE]: {
    id: 'safety-signage',
    title: '안전 사인물 제작관리',
    iconBg: '#e9e9e9',
    href: ROUTES.SOLUTIONS.PRODUCTION.SAFETY_SIGN,
    iconSrc:
      '/images/solutions/solution-link-card/81d337dc10a7cacff672a93176a3be3506a31fa6.svg',
  },
}

const IconBackground = ({
  bg,
  children,
}: {
  bg: string
  children: React.ReactNode
}) => (
  <Box
    position="absolute"
    bottom={{ sm: '20px', base: '30px' }}
    right={{ sm: '20px', base: '24px' }}
    width={{ lg: '100px', sm: '80px', base: '70px' }}
    height={{ lg: '100px', sm: '80px', base: '70px' }}
    borderRadius={{ sm: '28px', base: '24px' }}
    display="flex"
    alignItems="center"
    justifyContent="center"
    bg={bg}
  >
    {children}
  </Box>
)

// 아이콘 컴포넌트
const SolutionIcon = ({ src, alt }: { src: string; alt: string }) => (
  <Image
    src={src}
    alt={alt}
    width={{ lg: '60px', sm: '50px', base: '40px' }}
    height={{ lg: '60px', sm: '50px', base: '40px' }}
    objectFit="contain"
  />
)

// 개별 솔루션 카드
interface SolutionCardItemProps {
  type: CustomerReviewSolutionSolutionTypeEnumType
}

export const SolutionCardItem = ({ type }: SolutionCardItemProps) => {
  const solution = SOLUTION_CARD_MAP[type]

  return (
    <Link href={solution.href}>
      <Box
        bg="grey.0"
        borderRadius="28px"
        boxShadow="0px 20px 48px 0px rgba(1,45,181,0.12)"
        overflow="hidden"
        position="relative"
        h={{ sm: '200px', lg: '220px', base: '120px' }}
        p={{ lg: '36px 36px 48px 36px', base: '28px 24px 40px 24px' }}
      >
        <Flex
          direction="column"
          gap="24px"
          h="full"
          justify={{ base: 'center', sm: 'start' }}
        >
          <Heading as="h3" textStyle={'pre-heading-1'}>
            {solution.title}
          </Heading>
        </Flex>
        <IconBackground bg={solution.iconBg}>
          <SolutionIcon src={solution.iconSrc} alt={solution.title} />
        </IconBackground>
      </Box>
    </Link>
  )
}
