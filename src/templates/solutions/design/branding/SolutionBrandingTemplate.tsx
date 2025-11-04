'use client'

import { useEffect, useRef } from 'react'

import { Box, Container, HStack, Text, VStack } from '@chakra-ui/react'

import gsap from 'gsap'
import { useInView } from 'react-intersection-observer'

import {
  GetRelatedSolutionParamsTypeEnumTypeOptions,
  GetSolutionExpertListParamsTypeEnumType,
} from '@/helper/options'
import { HOME_INTRODUCE_SOLUTION_SLIDERS } from '@/templates/home/section/2/HomeIntroduceSolution'

import { SolutionConnectExportBottomBar } from '../../common/SolutionConnectExportBottomBar'
import {
  FeatureItem,
  SolutionFeatureSection,
} from '../../common/SolutionFeatureSection'
import {
  SolutionHeroSection,
  SolutionHeroSectionProps,
} from '../../common/SolutionHeroSection'
import { SolutionMoreInfoSection } from '../../common/SolutionMoreInfoSection'
import { SolutionReleatedExportSection } from '../../common/SolutionReleatedExportSection'
import { SoultionCardsSection } from '../../common/SoultionCardsSection'

const heroMockData: SolutionHeroSectionProps = {
  badge: '브랜딩 디자인',
  title: (
    <VStack
      textAlign={'center'}
      textStyle={'pre-display-3'}
      gap={'0px'}
      px={'20px'}
    >
      <Text color={'primary.4'} as={'span'}>
        브랜드 디자인,
      </Text>
      <Text>아직도 시안 파일만 받고 계신가요?</Text>
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
  image: {
    url: '/images/solutions/design/branding/solution-branding-1.png',
    alt: '1_브랜딩 디자인_1_브랜드 로고와 패키지, 스티커 등 통일된 디자인 요소로 구성된 베이커리 브랜드 브랜딩 예시',
  },
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
          브랜딩 디자인 솔루션
        </Text>
        <Text as={'span'}>이 필요한 이유</Text>
      </Text>
    </Text>
  ),
  cards: [
    {
      title: '설명 한 번으로 일관되게',
      description:
        '한 번의 설명으로 충분합니다. 브랜드 스타일을 기억하여 모든 작업에 일관되게 적용합니다.',
      icon: HOME_INTRODUCE_SOLUTION_SLIDERS[0].features?.[0].icon,
    },
    {
      title: '아이디어, 바로 눈앞에',
      description:
        '초기 아이디어를 구체적인 디자인으로 시각화하여 보여드립니다.',
      icon: HOME_INTRODUCE_SOLUTION_SLIDERS[0].features?.[1].icon,
    },
    {
      title: '알아서, 더 좋게',
      description:
        '"더 좋은 방법은 없을까?" 항상 먼저 고민하고, 수준 높은 디자인을 먼저 제안합니다.',
      icon: HOME_INTRODUCE_SOLUTION_SLIDERS[0].features?.[2].icon,
    },
    {
      title: '제작까지, 한번에',
      description:
        '기획부터 최종 제작까지 전 과정을 책임집니다. 번거로운 과정 없이 핵심 업무에만 집중하세요.',
      icon: HOME_INTRODUCE_SOLUTION_SLIDERS[0].features?.[3].icon,
    },
  ],
}

const featureData: FeatureItem[] = [
  {
    title: '100+ 분야별 브랜드 전문가',
    description:
      '100명 이상의 디자인 전문가가 일반 인쇄물부터 패키지, 특수 가공인쇄물까지 각 분야에 맞춰 최적의 결과물을 제공합니다.',
    type: 'table',
    tableData: [
      {
        category: '산업별\n담당 디자이너 배정',
        kinkos: 'O',
        competitorA: 'O',
        competitorB: 'X',
      },
      {
        category: '백업 디자이너 배정',
        kinkos: 'O',
        competitorA: 'X',
        competitorB: 'X',
      },
    ],

    imageData: [
      {
        url: '/images/solutions/design/branding/solution-branding-2.png',
        alt: '1_브랜딩 디자인_2_킨코스 디자이너들이 커피 브랜드의 패키지 디자인 시안을 모니터로 검토하며 논의하는 모습',
      },
      {
        url: '/images/solutions/design/branding/solution-branding-3.png',
        alt: '1_브랜딩 디자인_3_킨코스 디자인팀이 프랜차이즈 브랜드의 홍보물 시안을 회의실에서 공유하며 전략을 논의하는 장면',
      },
    ],
  },
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
        url: '/images/solutions/design/branding/solution-branding-4.png',
        alt: '1_브랜딩 디자인_4_시안을 회의실에서 공유하며 전략을 논의하는 장면',
      },
      {
        url: '/images/solutions/design/branding/solution-branding-5.png',
        alt: '1_브랜딩 디자인_5_팀원들이 노트북과 태블릿을 통해 로고와 스티커 디자인을 검토하며 브랜딩 아이디어를 논의하는 협업 회의',
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
        url: '/images/solutions/design/branding/solution-branding-6.png',
        alt: '1_브랜딩 디자인_6_킨코스 제작 전문가가 인쇄된 패키지 제품의 색상과 인쇄 품질을 확인하는 검수 과정',
      },
      {
        url: '/images/solutions/design/branding/solution-branding-7.png',
        alt: '1_브랜딩 디자인_7_킨코스 고객지원 담당자가 전화 상담과 주문 관리 시스템을 통해 고객 프로젝트를 관리하는 모습',
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
        url: '/images/solutions/design/branding/solution-branding-8.png',
        alt: '1_브랜딩 디자인_8_킨코스 제작팀이 대형 인쇄물을 작업대 위에서 정성스럽게 포장 준비하는 과정',
      },
      {
        url: '/images/solutions/design/branding/solution-branding-9.png',
        alt: '1_브랜딩 디자인_9_킨코스 생산센터에서 전문가들이 대형 인쇄 장비로 브랜드 홍보물을 출력하고 품질을 점검하는 장면',
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
          solutionId={GetSolutionExpertListParamsTypeEnumType.BRANDING_DESIGN}
        />
      </Box>

      <Box py="80px" w={'100%'} bg="primary.1">
        <SolutionMoreInfoSection
          type={GetRelatedSolutionParamsTypeEnumTypeOptions.BRANDING_DESIGN}
        />
      </Box>
      <SolutionConnectExportBottomBar stickyRef={stickyRef} />
    </VStack>
  )
}
