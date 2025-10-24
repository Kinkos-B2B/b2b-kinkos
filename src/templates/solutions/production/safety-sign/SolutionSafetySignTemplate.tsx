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
  badge: '안전 사인물 제작관리',
  title: (
    <VStack
      textAlign={'center'}
      textStyle={'pre-display-3'}
      gap={'0px'}
      px={'20px'}
    >
      <Text color={'primary.4'}>우리 현장 환경에 꼭 맞는 안전 사인물,</Text>
      <Text>아직도 직접 챙기시나요?</Text>
    </VStack>
  ),
  heroContent: (
    <>
      <Text textStyle={'pre-display-3'} color={'grey.0'}>
        {'“어떤 소재가 가장 효과적일까?“\n "전국 현장 시공은 어떻게 하지?"'}
      </Text>
      <Text textStyle={'pre-heading-3'} color={'grey.0'} as={'span'}>
        {
          '킨코스는 물류/건설 현장을 직접 분석하여, 법규 준수는 물론 작업자의 안전 의식을 높이는 최적의 사인물 솔루션을 기획부터 시공까지 한번에 제안합니다.\n이제 현장에서 완성된 안전 시스템을 확인하세요!'
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
      <Text as={'span'}>안전 관리 담당자의 고민 끝!</Text>
      <br />
      <Text as={'span'}>
        <Text textStyle={'pre-display-4'} color={'primary.4'} as={'span'}>
          킨코스 안전 사인물 제작관리 솔루션
        </Text>
        <Text as={'span'}>이 필요한 이유</Text>
      </Text>
    </Text>
  ),
  cards: [
    {
      title: '규정·규격 실패 걱정 끝',
      description:
        '안전 전문가가 현장과 법규를 분석해 꼭 맞게 제작하니, 잘못된 제작으로 인한 과태료, 재작업 등의 비용과 시간 낭비가 없습니다.',
    },
    {
      title: '최고의 안전 효과',
      description:
        '현장 환경(저조도, 옥외 등)과 예산에 맞춰 가장 눈에 잘 띄는 축광·반사 소재 등을 추천하므로, 최소 비용으로 최대의 안전 효과를 볼 수 있습니다.',
    },
    {
      title: '전국 현장 품질 유지',
      description:
        '전국 모든 현장에 통일된 디자인과 검증된 품질의 사인물을 깔끔하게 설치하여, 전사적인 안전 관리 시스템의 퀄리티를 지킬 수 있습니다.',
    },
    {
      title: '확인만 하면 끝',
      description:
        '현장 실측, 소재 선택, 맞춤 디자인, 긴급 제작 등 복잡하고 번거로운 과정은 저희가 알아서 합니다. 더 중요한 안전 기획 및 관리 업무에 집중하세요.',
    },
  ],
}

const featureData: FeatureItem[] = [
  {
    title: '실패 없는 안전 사인물, 현장 방문부터',
    type: 'description',
    description:
      '안전사인물 담당자가 직접 현장에 찾아가 고객 요구사항을 확인하고, 가장 효과적인 설치 위치와 방법을 찾아냅니다.',
    descriptionData: [
      '직접 방문해 작업자의 동선과 위험 요소를 파악하고, 시선이 가장 많이 머무는 최적의 위치를 찾아냅니다.',
      '설치할 곳의 벽면(샌드위치 패널, 콘크리트 등) 상태와 환경을 미리 확인하여, 시간이 지나도 ‘튼튼하고 안전하게’ 유지될 방법을 제안합니다.',
      '대규모 물류센터, 활발한 건설 현장, 소규모 창고 등 어떤 곳이든 현장 특성에 맞는 가장 효과적인 방법을 찾습니다.',
    ],
    imageData: [
      {
        imageUrl: '/images/solutions/solutions-hero-section.jpg',
      },
      {
        imageUrl: '/images/solutions/solutions-feature-mock-img.jpg',
      },
      {
        imageUrl: '/images/solutions/solutions-feature-mock-img.jpg',
      },
    ],
  },
  {
    title: '맞춤 디자인과 시뮬레이션으로 미리 확인',
    description:
      '실측한 공간과 현장 특성에 맞춰 디자인하고, 설치 후의 모습을 합성 시뮬레이션 이미지로 미리 보여드립니다.',

    type: 'description',
    descriptionData: [
      '기업의 로고와 색상 등 고유 스타일을 디자인에 반영하여, 통일성 있고 체계적인 안전 시스템 이미지를 구축합니다.',
      '산업안전보건법 등 관련 법규를 완벽히 준수하면서도, 현장의 주요 위험 요소를 직관적으로 인지할 수 있도록 디자인합니다.',
      '실제 현장 사진에 디자인 시안을 합성하여, 주변 설비나 환경과의 조화를 미리 확인함으로써 시공 후의 만족도를 높입니다.',
    ],

    imageData: [
      {
        imageUrl: '/images/solutions/solutions-hero-section.jpg',
      },
      {
        imageUrl: '/images/solutions/solutions-feature-mock-img.jpg',
      },
      {
        imageUrl: '/images/solutions/solutions-feature-mock-img.jpg',
      },
    ],
  },
  {
    title: '최적의 소재와 제작 방법 선택',
    type: 'description',
    description:
      '예산, 현장 환경, 사용 목적에 맞춰 가장 효과적인 소재와 제작 방식을 제안합니다.',
    descriptionData: [
      '오래 사용하는 설비·구역 표지는 내구성이 뛰어난 소재로, 짧게 쓰는 행사나 임시 구역 표지는 가성비 좋은 소재로 제작하여 예산을 최적화합니다.',
      '햇빛이 강한 야외에는 변색에 강한 UV 소재를, 습기가 많은 곳에는 방수 소재를 사용하여 사인물의 수명을 늘립니다.',
      '정전 시에도 대피로를 알려주는 축광·반사 시트를, 지게차 등 장비의 이동이 잦은 곳에는 충격에 강한 소재를 사용하는 등 실제 상황까지 고려합니다.',
    ],
    imageData: [
      {
        imageUrl: '/images/solutions/solutions-hero-section.jpg',
      },
      {
        imageUrl: '/images/solutions/solutions-feature-mock-img.jpg',
      },
      {
        imageUrl: '/images/solutions/solutions-feature-mock-img.jpg',
      },
    ],
  },

  {
    title: '제작, 배송, 시공까지 한번에',
    type: 'description',
    description:
      '디자인이 확정되면 그대로 제작하여 원하시는 곳으로 배송하거나, 전문가가 직접 방문하여 시공까지 마무리합니다.',
    descriptionData: [
      '이메일 확인이 어려운 현장을 감안하여 카카오톡과 유선으로 실시간 소통합니다. 긴급 요청은 1:1로 신속하게 응대하며, 지방의 긴급 건은 퀵으로 배송합니다.',
      '킨코스의 전문 시공팀이 전국에 있는 현장으로 직접 찾아가 설치합니다. 여러 지역의 동시 오픈이나 점검 일정도 문제없이 맞춰 드립니다.',
      '사인물의 소재와 모양에 맞춰 에어캡 등으로 안전하게 포장하고, 필요시 직접 배송하여 파손 위험을 원천 차단합니다.',
      '물류센터 오픈이나 현장 점검 일정에 맞춰 약속한 날짜 안에 반드시 시공을 완료합니다. 설치 후에는 담당자님과 함께 결과물을 꼼꼼히 확인하며 마무리합니다.',
    ],

    imageData: [
      {
        imageUrl: '/images/solutions/solutions-hero-section.jpg',
      },
      {
        imageUrl: '/images/solutions/solutions-feature-mock-img.jpg',
      },
      {
        imageUrl: '/images/solutions/solutions-feature-mock-img.jpg',
      },
    ],
  },
]

export const SolutionSafetySignTemplate = () => {
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
