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
  badge: '굿즈&판촉물 디자인',
  title: (
    <VStack textAlign={'center'} textStyle={'pre-display-3'} gap={'0px'}>
      <Text color={'primary.4'}>잘 팔리는 굿즈, 기억에 남는 판촉물</Text>
      <Text whiteSpace="nowrap">혹시 고민하고 계신가요?</Text>
    </VStack>
  ),
  heroContent: (
    <>
      <Text textStyle={'pre-display-3'} color={'grey.0'}>
        {'쉽게 버려지고 잊히는 굿즈와 판촉물,\n이제 고객이 기억하게 만드세요!'}
      </Text>
      <Text textStyle={'pre-heading-3'} color={'grey.0'} as={'span'}>
        {
          '행사 때만 반짝 쓰이고 잊히는 기념품 대신,\n고객의 취향과 사용성을 반영한 굿즈로 색다른 브랜드 경험을 제공해 보세요.'
        }
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
          굿즈&판촉물 디자인 솔루션
        </Text>
        <Text as={'span'}>이 필요한 이유</Text>
      </Text>
    </Text>
  ),
  cards: [
    {
      title: '브랜드 각인 효과',
      description:
        '일상에서 자주 쓰이는 굿즈와 판촉물로 고객에게 브랜드를 가장 자연스럽게 알릴 수 있습니다.',
    },
    {
      title: '차별화된 고객 경험',
      description:
        '기업의 특성을 살린 감각적인 굿즈와 판촉물로 고객에게 특별한 브랜드 경험을 제공합니다.',
    },
    {
      title: '효율적 예산 활용',
      description:
        '소량 제작부터 단가 비교 제안까지, 주어진 예산을 가장 효율적으로 사용할 수 있도록 지원합니다.',
    },
    {
      title: '제작 리스크 최소화',
      description:
        '3D 시안과 샘플링 과정으로 재작업의 위험과 불필요한 시간 낭비를 확실하게 줄여드립니다.',
    },
  ],
}

const featureData: FeatureItem[] = [
  {
    title: '맞춤형 기획, 디자인, 제작 원스톱 제작',
    description:
      '콘셉트 기획부터 디자인, 제작, 패키징·납품까지 모든 과정을 한 번에 제공해 드립니다.',
    type: 'table',
    tableData: [
      {
        category: '서비스 통합 여부',
        kinkos: 'O',
        competitorA: 'X',
        competitorB: 'X',
      },
      {
        category: '전담 매니저 관리 여부',
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
    title: '부담 없는 소량 제작',
    description:
      '필요할 때 필요한 만큼만 주문 제작하여, 재고 부담 없이 빠르게 받아보고 바로 사용할 수 있습니다.',
    type: 'table',
    tableData: [
      {
        category: '최소 주문 수량',
        kinkos: '소량 가능',
        competitorA: '일부 소량 가능',
        competitorB: '대량 가능',
      },
      {
        category: '재고관리/물류창고',
        kinkos: '보유',
        competitorA: '미보유',
        competitorB: '미보유',
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
    title: '합리적인 제작단가',
    description:
      '체계적인 생산 시스템과 파트너사 비교 견적을 통해 품질은 지키고 단가는 합리적으로 제공합니다.',
    type: 'table',
    tableData: [
      {
        category: '견적 내역 상세 공개',
        kinkos: 'O',
        competitorA: 'X',
        competitorB: 'X',
      },
      {
        category: '직접 생산상식',
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
    title: '3D 시안, 샘플링 제안',
    description:
      '실제 제작 전에 3D 시안과 실물 샘플을 제안하여, 결과물을 사전에 검증할 수 있도록 합니다.',
    type: 'table',
    tableData: [
      {
        category: '3D 시안 제공',
        kinkos: 'O',
        competitorA: 'O',
        competitorB: 'X',
      },
      {
        category: '제작 샘플 제공',
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
export const SolutionGiftPromotionalDesignTemplate = () => {
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
