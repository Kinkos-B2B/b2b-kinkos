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
import { SolutionHeroSection } from '../../common/SolutionHeroSection'
import { SolutionMoreInfoSection } from '../../common/SolutionMoreInfoSection'
import { SolutionReleatedExportSection } from '../../common/SolutionReleatedExportSection'
import { SoultionCardsSection } from '../../common/SoultionCardsSection'
import { useSolutionBottomBar } from '../../hooks/useSolutionBottomBar'

const heroMockData = {
  badge: '기업 전용 인쇄몰',
  title: (
    <VStack
      textAlign={'center'}
      textStyle={'pre-display-3'}
      gap={'0px'}
      px={'20px'}
    >
      <Text color={'primary.4'}>기업 인쇄물</Text>
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
  image: {
    url: '/images/solutions/online-order/corporate-printing/solution-corporate-printing-1.png',
    alt: '13_기업 전용 인쇄몰_1_브런치 카페 유리창에 부착된 샐러드 프로모션 포스터, 매장마다 동일한 인쇄물을 빠르게 주문하고 제작할 수 있는 기업 전용 인쇄몰 솔루션 예시',
  },
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
      icon: HOME_INTRODUCE_SOLUTION_SLIDERS[12].features?.[0].icon,
    },
    {
      title: '클릭 한 번으로 주문 끝',
      description:
        '복잡한 텍스트 입력 없이 클릭만으로 주문이 완료되는 자동화 시스템을 경험하세요.',
      icon: HOME_INTRODUCE_SOLUTION_SLIDERS[12].features?.[1].icon,
    },
    {
      title: '비용 절감 효과',
      description:
        '부서별 예산 한도 설정과 자동 차단 기능으로 불필요한 지출을 막아줍니다.',
      icon: HOME_INTRODUCE_SOLUTION_SLIDERS[12].features?.[2].icon,
    },
    {
      title: '실수 없는 결과물',
      description:
        '전문가가 검증한 데이터로 오타나 인쇄 사고 걱정 없이 안심하고 주문하세요.',
      icon: HOME_INTRODUCE_SOLUTION_SLIDERS[12].features?.[3].icon,
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
        url: '/images/solutions/online-order/corporate-printing/solution-corporate-printing-2.png',
        alt: '13_기업 전용 인쇄몰_2_킨코스 기업 전용 인쇄몰 관리자 화면, 인쇄물 카테고리를 고객사 맞춤으로 설정할 수 있는 옵션 구성 예시',
      },
      {
        url: '/images/solutions/online-order/corporate-printing/solution-corporate-printing-3.png',
        alt: '13_기업 전용 인쇄몰_3_기업 로고와 색상 포인트, 전용 카테고리 세팅 등 브랜드별 커스터마이징 기능을 안내하는 인쇄몰 화면 예시',
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
        url: '/images/solutions/online-order/corporate-printing/solution-corporate-printing-4.png',
        alt: '13_기업 전용 인쇄몰_4_배너 상품 상세 페이지의 옵션 선택 화면, 사이즈 및 거치대 선택 등 인쇄물 옵션별 자동 견적 기능 예시',
      },
      {
        url: '/images/solutions/online-order/corporate-printing/solution-corporate-printing-5.png',
        alt: '13_기업 전용 인쇄몰_5_각 계정별 인쇄물 주문 내역 리스트 화면, 주문 상태와 승인 이력을 실시간으로 관리할 수 있는 예시',
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
        url: '/images/solutions/online-order/corporate-printing/solution-corporate-printing-6.png',
        alt: '13_기업 전용 인쇄몰_6_부서별 인쇄 예산 현황을 보여주는 예산 관리 시스템 화면, 사용 금액과 진행 현황을 한눈에 확인할 수 있는 예시',
      },
      {
        url: '/images/solutions/online-order/corporate-printing/solution-corporate-printing-7.png',
        alt: '13_기업 전용 인쇄몰_7_관리자 권한으로 부서별 인쇄 예산을 설정하는 화면, 예산을 배분·조정할 수 있는 기능 예시',
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
        url: '/images/solutions/online-order/corporate-printing/solution-corporate-printing-8.png',
        alt: '13_기업 전용 인쇄몰_8_게시판 형식의 이용 가이드 페이지 화면, 인쇄몰 사용 방법과 공지사항을 한눈에 확인할 수 있는 관리자 가이드 예시',
      },
      {
        url: '/images/solutions/online-order/corporate-printing/solution-corporate-printing-9.png',
        alt: '13_기업 전용 인쇄몰_9_회의실에서 킨코스 기업 전용 인쇄몰 화면을 보며 논의 중인 직원들, 전용몰 구축 및 온보딩 교육 상황 예시 복사본',
      },
    ],
  },
]

export const SolutionCorporatePrintingTemplate = () => {
  const { ref, stickyRef } = useSolutionBottomBar()

  return (
    <VStack position={'relative'} gap={'0px'}>
      <Box w={'100%'} ref={ref}>
        <SolutionHeroSection introBlockData={heroMockData} />
      </Box>
      <Box py={{ base: '100px', sm: '140px', lg: '160px' }} w={'100%'}>
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
            GetSolutionExpertListParamsTypeEnumType.CORPORATE_PRINT_MALL
          }
        />
      </Box>

      <Box py="80px" w={'100%'} bg="primary.1">
        <SolutionMoreInfoSection
          type={
            GetRelatedSolutionParamsTypeEnumTypeOptions.CORPORATE_PRINT_MALL
          }
        />
      </Box>
      <SolutionConnectExportBottomBar stickyRef={stickyRef} />
    </VStack>
  )
}
