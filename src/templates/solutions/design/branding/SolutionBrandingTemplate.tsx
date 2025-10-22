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
  badge: '브랜딩 디자인',
  title: (
    <VStack textAlign={'center'} textStyle={'pre-display-3'} gap={'0px'}>
      <Text color={'primary.4'}>브랜드 디자인, </Text>
      <Text whiteSpace="nowrap">아직도 시안 파일만 받고 계신가요?</Text>
    </VStack>
  ),
  heroContent: (
    <>
      <Text textStyle={'pre-display-3'} color={'grey.0'}>
        {
          '디자인 따로, 제작 따로?\n시간 낭비는 줄이고 결과의 완성도를 높이세요.'
        }
      </Text>
      <Text textStyle={'pre-heading-3'} color={'grey.0'} as={'span'}>
        {
          '반복되는 설명, 아쉬운 시안, 분리된 기획과 제작의 시간 낭비는 이제 그만.\n브랜드에 대한 깊은 이해를 바탕으로 기획부터 제작까지, 완성도 높은 결과물을 만듭니다.\n단순한 협업 그 이상의 파트너십을 경험하세요.'
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
      <Text>고민은 끝!</Text>
      <Text as={'span'}>
        <Text textStyle={'pre-display-4'} color={'primary.4'} as={'span'}>
          브랜딩 디자인 솔루션
        </Text>
        <Text as={'span'}>이 필요한 이유</Text>
      </Text>
    </Text>
  ),
  cards: [
    {
      title: '한 번의 설명, 일관된 결과',
      description:
        '한 번의 설명으로 충분합니다. 브랜드 스타일을 기억하여 모든 작업에 일관되게 적용합니다.',
    },
    {
      title: '아이디어, 바로 눈앞에',
      description:
        '초기 아이디어를 구체적인 디자인으로 시각화하여 보여드립니다.',
    },
    {
      title: '알아서, 더 좋게',
      description:
        '"더 좋은 방법은 없을까?" 항상 먼저 고민하고, 수준 높은 디자인을 먼저 제안합니다',
    },
    {
      title: '제작까지, 한번에',
      description:
        '기획부터 최종 제작까지 전 과정을 책임집니다. 번거로운 과정 없이 핵심 업무에만 집중하세요.',
    },
  ],
}

const featureData: FeatureItem[] = [
  {
    title: '1:1 브랜드 전담 매니저',
    description:
      '고객사별 전담 매니저가 배정되어 일관된 소통을 지원합니다. 브랜드에 대한 이해를 바탕으로 원활한 프로젝트 관리가 가능합니다.',
    type: 'table',
    tableData: [
      {
        category: '브랜드 담당\n매니저 배정',
        kinkos: 'O',
        competitorA: 'X',
        competitorB: 'X',
      },
      {
        category: '10년 이상의\n프로젝트 경력자 지정 ',
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
    title: '3만+ 기업의 경험, 리스크 없는 선택.',
    description:
      '30년간 3만여 고객사의 인쇄물을 제작하며 쌓아온 독보적인\n노하우로 인쇄 사고 등의 리스크를 사전에 방지합니다. 검증된\n파트너와 함께 안정적으로 결과물을 받아보세요.',
    type: 'table',
    tableData: [
      {
        category: '데이터 검수시스템 보유',
        kinkos: 'O',
        competitorA: 'X',
        competitorB: 'X',
      },
      {
        category: '단계별 품질관리(QC)\n시스템 관리 ',
        kinkos: 'O',
        competitorA: 'X',
        competitorB: 'X',
      },
      {
        category: '인쇄사고 리스크 관리',
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
    title: '디자인부터 납품까지, 한 번에 해결.',
    description:
      '디자인부터 인쇄, 후가공, 포장, 배송까지 전 과정을 통합하여 관리합니다. 단일화된 채널을 통해 담당자의 업무 효율을 높여 드립니다.',
    type: 'table',
    tableData: [
      {
        category: '전 공정 100% 자체\n제작 시스템',
        kinkos: 'O',
        competitorA: 'X',
        competitorB: 'X',
      },
      {
        category: '1:1 전담 신속 대응\n채널',
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

export const SolutionBrandingTemplate = () => {
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
