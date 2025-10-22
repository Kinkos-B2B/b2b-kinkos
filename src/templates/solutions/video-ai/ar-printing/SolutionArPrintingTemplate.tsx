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
  badge: 'AR 인쇄물 제작',
  title: (
    <VStack textAlign={'center'} textStyle={'pre-display-3'} gap={'0px'}>
      <Text color={'primary.4'}>보는 인쇄에서 참여하는 인쇄로 </Text>
      <Text whiteSpace="nowrap">새로운 인터랙티브 경험을 만들어보세요! </Text>
    </VStack>
  ),
  heroContent: (
    <>
      <Text textStyle={'pre-display-3'} color={'grey.0'}>
        {
          'AR로 전하는 입체적인 브랜드 스토리\n 이제 브랜드의 경험을 인쇄하세요!'
        }
      </Text>
      <Text textStyle={'pre-heading-3'} color={'grey.0'} as={'span'}>
        {'사용자가 직접 참여하고, 체험하고, 공유할 수 있는\n'}
        <Text as="span" color="secondary.3">
          인터랙티브 커뮤니케이션 경험
        </Text>
        <Text as={'span'}>을 제공합니다.</Text>
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
          AR 인쇄물 제작 솔루션
        </Text>
        <Text as={'span'}>이 필요한 이유</Text>
      </Text>
    </Text>
  ),
  cards: [
    {
      title: '오래 기억되는 브랜드',
      description:
        '인쇄물에 적용된 AR 기술로 영상과 소리를 직접 체험하는 특별한 경험은 브랜드 인지도와 호감도를 효과적으로 높여줍니다.',
    },
    {
      title: '참여형 콘텐츠 제작',
      description:
        '고객이 직접 참여하고 공유하는 인터랙티브 콘텐츠를 통해, 고객 스스로 브랜드 홍보대사가 되는 강력한 바이럴 효과를 경험해 보세요.',
    },
    {
      title: '다양한 비즈니스 연결',
      description:
        '영상, 3D 모델, 웹페이지 등 어떤 콘텐츠든 인쇄물에 연결하여 프로모션, 전시, 교육 등 다양한 비즈니스 목적에 맞춰 활용할 수 있습니다.',
    },
    {
      title: '경쟁사 차별화 방법',
      description:
        '인쇄물에 AR 기술을 더하는 것만으로, 고객에게는 신선한 재미를 주고 경쟁사와는 다른 혁신적인 브랜드 이미지를 제공합니다.',
    },
  ],
}

const featureData: FeatureItem[] = [
  {
    title: '앱 설치 없는 간편한 실행',
    type: 'description',
    description:
      '인쇄물 디자인을 인식하면 앱 설치 없이 AR 콘텐츠가 즉시 재생됩니다. 고객의 이탈을 막고 누구나 쉽게 체험할 수 있는 최적의 접근성을 제공합니다.',

    descriptionData: [
      '인쇄물에 디자인된 특정 이미지를 마커로 인식하여 AR 콘텐츠를 실행합니다.',
      '별도의 앱 설치 없이, 스마트폰 기본 카메라와 웹 브라우저를 통해 Web AR이 구동됩니다.',
      'iOS, Android 등 주요 모바일 운영체제에 자동으로 호환되어 안정적인 실행 환경을 제공합니다.',
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
    title: '인쇄물 재작업 없는 실시간 콘텐츠 관리',
    description:
      '관리자 페이지를 통해 인쇄물에 연결된 영상, 3D 모델, 웹 링크 등을 언제든지 직접 수정하고 업데이트할 수 있습니다. 재인쇄 비용 없이 항상 최신 정보를 유지하세요.',
    type: 'description',
    descriptionData: [
      '인쇄물에 연결된 영상, 3D 모델, 웹 링크 등 모든 AR 콘텐츠를 실시간으로 교체할 수 있습니다.',
      '특정 날짜와 시간에만 AR 콘텐츠가 노출되도록 캠페인 기간을 설정하거나 예약할 수 있습니다.',
      '캠페인 목적에 따라 3D 모델, CTA 버튼 등 특정 AR 기능을 선택적으로 활성화하거나 비활성화합니다.',
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
    title: '데이터 기반의 성과 분석 리포트',
    type: 'description',
    description:
      '사용자 참여 횟수, 콘텐츠별 체류 시간 등 마케팅에 필요한 핵심 데이터를 수집합니다. 캠페인 성과를 객관적으로 측정하고 분석합니다.',
    descriptionData: [
      '총 실행 수, 순 방문자 수, 평균 체류 시간 등 캠페인 성과 분석에 필요한 핵심 지표를 측정합니다.',
      '콘텐츠 내 버튼별 클릭률(CTR), 특정 기능 사용 빈도 등 사용자의 상호작용 데이터를 상세히 분석합니다.',
      '사용자가 일간, 주간, 월간 등 원하는 기간을 직접 설정하여 성과 리포트를 생성하고 확인할 수 있습니다.',
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
    title: '구매를 촉진하는 행동 유도 기능',
    type: 'description',
    description:
      '3D 모델 조작, 쿠폰 발급, 설문 참여, SNS 공유 등 체적인 행동을 이끌어내는 기능들을 AR 콘텐츠에 직접 삽입하여 실질적인 마케팅 목표를 지원합니다.',
    descriptionData: [
      '구매 페이지 이동, 전화 걸기, 앱 다운로드 등 명확한 행동을 유도하는 CTA(Call-to-Action) 버튼을 삽입합니다.',
      '이벤트 응모, 설문 조사, 문의 접수 등을 위한 입력 폼을 연동하여 잠재 고객 정보를 수집합니다.',
      '콘텐츠를 SNS로 공유하게 하거나, 즉시 사용 가능한 쿠폰 및 할인코드를 발급하여 바이럴과 구매 전환을 유도합니다.',
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

export const SolutionArPrintingTemplate = () => {
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
