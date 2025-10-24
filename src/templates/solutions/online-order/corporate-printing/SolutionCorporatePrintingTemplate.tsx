'use client'

import { useEffect, useRef } from 'react'

import { Box, Container, HStack, Text, VStack } from '@chakra-ui/react'

import gsap from 'gsap'
import { useInView } from 'react-intersection-observer'

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
  badge: '기업 전용 인쇄물',
  title: (
    <VStack
      textAlign={'center'}
      textStyle={'pre-display-3'}
      gap={'0px'}
      px={'20px'}
    >
      <Text color={'primary.4'}>기업 전용 인쇄몰</Text>
      <Text>아직도 복잡하게 주문하세요?</Text>
    </VStack>
  ),
  heroContent: (
    <>
      <Text textStyle={'pre-display-3'} color={'grey.0'}>
        기업 인쇄물 관리, <br />
        이제 스마트하게 해결하세요!
      </Text>
      <Text textStyle={'pre-heading-3'} color={'grey.0'} as={'span'}>
        {
          "지점마다 다른 디자인, 복잡한 주문 절차, 불투명한 예산 관리..혹시 이런 고민을 하고 계신가요?\n기업 인쇄물 주문, 이제 '"
        }
        <Text textStyle={'pre-heading-3'} color={'secondary.3'} as={'span'}>
          기업 전용 인쇄몰
        </Text>
        <Text textStyle={'pre-heading-3'} color={'grey.0'} as={'span'}>
          {"'로 쉽고 빠르게 해결하세요."}
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
      <Text as={'span'}>고민은 끝!</Text>
      <br />

      <Text as={'span'}>
        <Text textStyle={'pre-display-4'} color={'primary.4'} as={'span'}>
          기업 전용 인쇄몰 솔루션
        </Text>
        <Text as={'span'}>이 필요한 이유</Text>
      </Text>
    </Text>
  ),
  cards: [
    {
      title: '브랜드 이미지 통일',
      description:
        '우리 회사 전용 디자인 템플릿으로 어디서든 일관된 브랜드 이미지를 유지하세요.',
    },
    {
      title: '클릭 한 번으로 주문 끝',
      description:
        '복잡한 텍스트 입력 없이 클릭만으로 주문이 완료되는 자동화 시스템을 경험하세요.',
    },
    {
      title: '비용 절감 효과',
      description:
        '부서별 예산 한도 설정과 자동 차단 기능으로 불필요한 지출을 막아줍니다.',
    },
    {
      title: '실수 없는 결과물',
      description:
        '전문가가 검증한 데이터로 오타나 인쇄 사고 걱정 없이 안심하고 주문하세요.',
    },
  ],
}

const featureData: FeatureItem[] = [
  {
    title: '우리 회사만을 위한 맞춤형 전용몰',
    description:
      '기업의 브랜드 아이덴티티에 맞춰 자주 사용하는 인쇄물을 구성하고, 사이트 디자인까지 맞춤 제작해 드립니다.',
    type: 'table',
    tableData: [
      {
        category: '맞춤 디자인 템플릿',
        kinkos: 'O',
        competitorA: 'X',
        competitorB: 'X',
      },
      {
        category: '사이트 디자인 맞춤 제작',
        kinkos: 'O',
        competitorA: 'O',
        competitorB: 'O',
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
    title: '똑똑한 자동화 주문 시스템',
    description:
      '텍스트 입력 없이 클릭만으로 주문이 가능해져\n업무 효율을 극대화하고, 불필요한 시간 낭비를 줄여줍니다.',
    type: 'table',
    tableData: [
      {
        category: '간편성 및 자동화 수준',
        kinkos: 'O',
        competitorA: 'O',
        competitorB: 'O',
      },
      {
        category: '내부DB 연동 개발 여부',
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
    title: '강력한 관리 기능으로 통제권 UP!',
    description:
      '매장별, 지점별 예산 한도를 설정하고 주문 권한을 세밀하게 제어할 수 있습니다. 또한, 간소화된 승인 절차와 실시간 주문 내역 확인으로 관리의 투명성을 높여줍니다.',
    type: 'table',
    tableData: [
      {
        category: '예산 한도 설정 기능',
        kinkos: 'O',
        competitorA: 'X',
        competitorB: 'O',
      },
      {
        category: '역할별 주문 권한 설정 기능',
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
    title: '누구나 쉽게! 최고의 편의성',
    description:
      '처음 사용하는 직원도 쉽게 따라 할 수 있는 이용 가이드와 온라인 교육을 지원합니다. 또한, 고객사의 보안 정책에 맞춰 안전하게 운영되며, 직접 체험해 볼 수 있는 데모몰을 제공합니다.',

    type: 'table',
    tableData: [
      {
        category: '온보딩 교육 지원',
        kinkos: 'O',
        competitorA: 'X',
        competitorB: 'X',
      },
      {
        category: '데모몰 지원',
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

export const SolutionCorporatePrintingTemplate = () => {
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
