'use client'

import { useEffect, useRef } from 'react'

import { Box, Container, HStack, Text, VStack } from '@chakra-ui/react'

import gsap from 'gsap'
import { useInView } from 'react-intersection-observer'

import { Button } from '@/components/ui/button'
import { ROUTES } from '@/constants/routes'
import { GetSolutionExpertListParamsTypeEnumType } from '@/helper/options'

import { SolutionConnectExportBottomBar } from '../../common/SolutionConnectExportBottomBar'
import {
  FeatureItem,
  SolutionFeatureSection,
} from '../../common/SolutionFeatureSection'
import { SolutionHeroSection } from '../../common/SolutionHeroSection'
import { SolutionMoreInfoSection } from '../../common/SolutionMoreInfoSection'
import { SolutionReleatedExportSection } from '../../common/SolutionReleatedExportSection'
import { SoultionCardsSection } from '../../common/SoultionCardsSection'

const heroMockData = {
  badge: '프랜차이즈 전용 인쇄몰',
  title: (
    <VStack textAlign={'center'} textStyle={'pre-display-3'} gap={'0px'}>
      <Text color={'primary.4'}>프랜차이즈 인쇄물 관리, </Text>
      <Text whiteSpace="nowrap">하나의 시스템으로 통합하세요! </Text>
    </VStack>
  ),
  heroContent: (
    <>
      <Text textStyle={'pre-display-3'} color={'grey.0'}>
        {'본사는 브랜드 관리 때문에…\n가맹점은 복잡한 주문 때문에... '}
      </Text>
      <Text textStyle={'pre-heading-3'} color={'grey.0'} as={'span'}>
        지점마다 제각각인 홍보물, 본사와의 소통 지연, 불투명한 비용 문제까지
        <br />
        이제 프랜차이즈의 모든 인쇄물 관리를
        <Text textStyle={'pre-heading-3'} color={'secondary.3'} as={'span'}>
          {" '프랜차이즈 전용 인쇄몰'"}
        </Text>
        <Text textStyle={'pre-heading-3'} color={'grey.0'} as={'span'}>
          로 스마트하게 해결하세요!
        </Text>
      </Text>
    </>
  ),
  buttonContent: '지금 전문가 연결하기',
  link: '/solutions/online-order/corporate-printing',
}

const cardsMockData = {
  title: (
    <Text textStyle={'pre-display-4'} textAlign={'center'}>
      <Text as={'span'}>프랜차이즈 솔루션으로 </Text>
      <Text textStyle={'pre-display-4'} color={'primary.4'} as={'span'}>
        본사와 가맹점 모두가 만족하는 이유
      </Text>
    </Text>
  ),
  cards: [
    {
      title: '브랜드 이미지 통일',
      description:
        '정해진 디자인 템플릿으로 브랜드의 일관성을 유지하고, 점주님은 디자인 걱정 없이, 클릭 몇 번으로 간편하게 주문합니다.',
    },
    {
      title: '업무는 간단히, 효율은 최고로',
      description:
        '본사는 전국 주문을 한눈에 파악하고, 점주님은 24시간 언제든 필요할 때 주문하며 매장 운영에만 집중할 수 있습니다.',
    },
    {
      title: '투명한 비용 관리',
      description:
        '주문 가능한 항목과 금액이 투명하게 보여 과지출을 막아주고, 본사와 가맹점 모두의 비용을 아낄 수 있습니다.',
    },
    {
      title: '제작부터 배송까지',
      description:
        '주문하신 홍보물을 매장별로 꼼꼼하게 포장하여 전국 어디든 배송해 드립니다. 점주님은 신경 쓸 필요 없이 매장에서 편하게 받으시면 됩니다.',
    },
  ],
}

const featureData: FeatureItem[] = [
  {
    title: '본사/가맹점 맞춤 주문 시스템',
    description:
      '하나의 몰 안에서 본사 지원 품목과 가맹점 자부담 품목의 신청 및 결제 과정을 완벽하게 분리하여, 목적에 따라 명확하고 편리하게 운영할 수 있습니다.',
    type: 'table',
    tableData: [
      {
        category: '품목별 결제방식 분리 기능',
        kinkos: 'O',
        competitorA: 'X',
        competitorB: 'X',
      },
      {
        category: '주문채널의 통합기능',
        kinkos: 'O',
        competitorA: 'O',
        competitorB: 'X',
      },
    ],
    imageData: [
      {
        imageUrl: '/images/solutions/solutions-hero-section.jpg',
      },
      {
        imageUrl: '/images/solutions/solutions-feature-mock-img.jpg',
      },
    ],
  },
  {
    title: '가맹점별 예산 및 권한 관리',
    description:
      '각 가맹점의 예산 한도를 설정하고 주문 가능한 품목을 제어하는 등 세밀한 권한 관리가 가능하여, 본사의 체계적인 비용 통제를 돕습니다.',
    type: 'table',
    tableData: [
      {
        category: '가맹점별 예산 설정기능',
        kinkos: 'O',
        competitorA: 'X',
        competitorB: 'X',
      },
      {
        category: '품목별 주문 권한 제어기능',
        kinkos: 'O',
        competitorA: 'X',
        competitorB: 'X',
      },
    ],
    imageData: [
      {
        imageUrl: '/images/solutions/solutions-hero-section.jpg',
      },
      {
        imageUrl: '/images/solutions/solutions-feature-mock-img.jpg',
      },
    ],
  },
  {
    title: '한눈에 보는 주문 관리 시스템',
    description:
      '전국 가맹점의 주문 현황을 실시간으로 파악하고, 간소화된 승인 절차를 통해 관리 업무의 효율성과 투명성을 동시에 높여줍니다.',
    type: 'table',
    tableData: [
      {
        category: '실시간 주문 대시보드 기능',
        kinkos: 'O',
        competitorA: 'O',
        competitorB: 'O',
      },
      {
        category: '원클릭 주문 승인 및 반려 기능',
        kinkos: 'O',
        competitorA: 'X',
        competitorB: 'X',
      },
    ],

    imageData: [
      {
        imageUrl: '/images/solutions/solutions-hero-section.jpg',
      },
      {
        imageUrl: '/images/solutions/solutions-feature-mock-img.jpg',
      },
    ],
  },
  {
    title: '누구나 쉬운 사용 환경',
    description:
      '처음 사용하는 점주님도 바로 적응할 수 있도록 온라인 가이드와 맞춤형 데모몰 체험을 지원하여, 쉽고 빠른 도입이 가능합니다.',

    type: 'table',
    tableData: [
      {
        category: '이용 가이드 제공',
        kinkos: 'O',
        competitorA: 'X',
        competitorB: 'X',
      },
      {
        category: '데모몰 체험 지원',
        kinkos: 'O',
        competitorA: 'X',
        competitorB: 'X',
      },
    ],

    imageData: [
      {
        imageUrl: '/images/solutions/solutions-hero-section.jpg',
      },
      {
        imageUrl: '/images/solutions/solutions-feature-mock-img.jpg',
      },
    ],
  },
]

export const SolutionFranchisePrintingTemplate = () => {
  const { ref, inView } = useInView()
  const stickyRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (inView) {
      gsap.to(stickyRef.current, {
        bottom: '20px',
        duration: 0.3,
        ease: 'ease-in-out',
      })
    } else {
      gsap.to(stickyRef.current, {
        bottom: '-100px',
        duration: 0.3,
        ease: 'ease-in-out',
      })
    }
  }, [inView])

  return (
    <VStack position={'relative'} gap={'0px'}>
      <Box w={'100%'}>
        <SolutionHeroSection introBlockData={heroMockData} />
      </Box>
      <Box
        py={{ base: '100px', sm: '140px', lg: '160px' }}
        ref={ref}
        w={'100%'}
      >
        <Container>
          <SoultionCardsSection {...cardsMockData} />
        </Container>
      </Box>

      <Box bg={'primary.2'} w={'100%'}>
        <SolutionFeatureSection featureItems={featureData} />
      </Box>

      <Box
        py={{ base: '100px 80px', sm: '140px 100px', lg: '160px 120px' }}
        w={'100%'}
      >
        <SolutionReleatedExportSection
          solutionId={
            GetSolutionExpertListParamsTypeEnumType.MARKET_ANALYSIS_BASED
          }
        />
      </Box>

      <Box py="80px" w={'100%'} bg="primary.1">
        <SolutionMoreInfoSection linkCard={['SOLUTION', 'REVIEW', 'PROBLEM']} />
      </Box>
      <SolutionConnectExportBottomBar stickyRef={stickyRef} />
    </VStack>
  )
}
