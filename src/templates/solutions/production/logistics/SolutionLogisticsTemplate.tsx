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
  badge: '통합제작 물류관리',
  title: (
    <VStack textAlign={'center'} textStyle={'pre-display-3'} gap={'0px'}>
      <Text color={'primary.4'}>우리 회사 인쇄물 관리,</Text>
      <Text whiteSpace="nowrap">아직도 제작 따로, 물류 따로 맡기시나요?</Text>
    </VStack>
  ),
  heroContent: (
    <>
      <Text textStyle={'pre-display-3'} color={'grey.0'}>
        {
          '"물류창고에서 출고되는 데 3일이나 걸린다고…?"\n "전국 지점별로 포장 · 배송이 어렵다고…?"'
        }
      </Text>
      <Text textStyle={'pre-heading-3'} color={'grey.0'} as={'span'}>
        {
          '복잡한 인쇄물 관리, 이제 킨코스에 맡기고 핵심 업무에 집중하세요. 제작부터 컴플라이언스\n기준에 맞춘 보관, 재고 관리, 전국 배송까지 원클릭 통합 솔루션으로 제공해드립니다.'
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
      <Text as={'span'}>
        <Text textStyle={'pre-display-4'} color={'primary.4'} as={'span'}>
          킨코스 통합제작 물류관리 솔루션
        </Text>
        <Text as={'span'}>이 필요한 이유</Text>
      </Text>
    </Text>
  ),
  cards: [
    {
      title: '통합 관리, 빠른 출고',
      description:
        '제작사, 물류사, 배송사를 따로 관리할 필요 없습니다. 제작 완료 후 바로 입고, 요청 즉시 출고되어 비즈니스 속도가 빨라집니다.',
    },
    {
      title: '파손 걱정 끝',
      description:
        '인쇄물을 가장 잘 아는 제작 전문가가 직접 보관하므로, 훼손 위험 없이 최상의 품질을 유지하고 문제 발생 시 즉시 재제작하여 대응합니다.',
    },
    {
      title: '실시간 재고 관리',
      description:
        '실시간 재고 현황을 공유하고, 재고 소진 시점에 맞춰 선제적으로 생산을 준비하므로 재고 부족으로 인한 홍보·영업 활동 중단을 막을 수 있습니다.',
    },
    {
      title: '확인만 하면 끝',
      description:
        '제작, 입고, 보관, 재고 확인, 출고 요청 등 복잡한 과정은 킨코스가 알아서 합니다. 담당자님은 시스템에서 결과만 확인하세요.',
    },
  ],
}

const featureData: FeatureItem[] = [
  {
    title: '실패 없는 인쇄물 관리, 제작부터 보관까지',
    type: 'description',
    description:
      '킨코스는 생산 전문 센터 바로 인접한 곳에 물류 창고를 직접 운영합니다. 별도의 물류 업체와 계약하거나, 제작물을 제3의 장소로 이동시키는 불필요한 과정이 없습니다.',
    descriptionData: [
      '제작 완료와 동시에 입고 처리되어 시간과 물류비를 혁신적으로 절감합니다.',
      '바이오·제약사의 컴플라이언스 규정을 완벽히 이해하고, 규정에 맞춰 입고 및 증빙 처리를 대행합니다.',
      '인쇄물을 가장 잘 아는 전문가가 직접 관리하여, 습도, 온도, 오염 등 외부 요인으로부터 자산을 안전하게 보호합니다.',
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
    title: '기업 맞춤형 시스템으로 실시간 확인',
    description:
      '킨코스가 제공하는 기업 맞춤형 온라인 시스템을 통해 보관 중인 재고 현황을 PC와 모바일로 실시간 파악하고, 필요한 만큼 즉시 출고 요청할 수 있습니다.',
    type: 'description',
    descriptionData: [
      '실시간 재고 현황과 물품 이미지를 온라인으로 바로 확인하고 파악할 수 있습니다.',
      '사용자별로 시스템 접근 권한을 설정하여 체계적이고 안전한 관리가 가능합니다.',
      '클릭 몇 번으로 원하는 곳으로의 출고 및 배송 요청이 완료되어 업무가 간편해집니다.',
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
    title: '가장 효과적인 배송 방법 선택',
    type: 'description',
    description:
      '단순 보관만 하는 물류 업체와 달리, 킨코스는 복잡한 배송 요청에 특화된 시스템과 노하우를 갖추고 있습니다.',

    descriptionData: [
      '전국 드럭스토어, 병원, 지점 등 수많은 곳으로 각기 다른 품목을 보내야 할 때, 시스템을 통해 오류 없이 분류하고 신속하게 배송합니다.',
      '긴급한 요청 건은 퀵 서비스를 활용하여 즉시 대응하고, 납품 일정을 반드시 준수합니다.',
      '품목의 특성에 맞춰 가장 안전하게 포장하고, 파손 위험 없는 배송 방법을 선택하여 고객 만족도를 높입니다.',
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
    title: '제작, 보관, 배송까지 한 번에',
    type: 'description',
    description:
      '디자인 의뢰부터 전국 지점 납품 확인서 수령까지, 킨코스가 모든 과정을 책임집니다.복잡하게 얽혀 있던 인쇄물 관리 업무, 이제 킨코스 창구 하나로 통합하여 해결하세요.',

    descriptionData: [
      '서울, 경기, 지방 어디든 상관없습니다. 킨코스의 통합 시스템은 전국 단위의 제작 및 물류 관리에 최적화되어 있습니다.',
      '행사나 캠페인 일정에 맞춰 제작, 보관, 배송 스케줄을 완벽하게 관리하여 차질 없는 비즈니스 활동을 보장합니다.',
      '최종 입고확인증을 수령하여 전달해 드리는 것까지, 담당자님의 업무가 완벽하게 마무리될 수 있도록 킨코스가 끝까지 함께합니다.',
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

export const SolutionLogisticsTemplate = () => {
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
