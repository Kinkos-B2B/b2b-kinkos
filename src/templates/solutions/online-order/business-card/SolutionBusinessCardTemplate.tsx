'use client'

import { useEffect, useRef } from 'react'

import { Box, Container, HStack, Text, VStack } from '@chakra-ui/react'

import gsap from 'gsap'
import { useInView } from 'react-intersection-observer'

import { Button } from '@/components/ui/button'
import { ROUTES } from '@/constants/routes'
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
  badge: '온라인 명함 주문 관리',
  title: (
    <VStack
      textAlign={'center'}
      textStyle={'pre-display-3'}
      gap={'0px'}
      px={'20px'}
    >
      <Text color={'primary.4'}>신입사원 명함신청, </Text>
      <Text>아직도 이메일로 받으세요?</Text>
    </VStack>
  ),
  heroContent: (
    <>
      <Text textStyle={'pre-display-3'} color={'grey.0'}>
        {
          '“디자인이 자꾸 달라지면 어떡하지…?“\n “오타가 생기면 책임은 누가 지지…?“'
        }
      </Text>

      <Text textStyle={'pre-heading-3'} color={'grey.0'} as={'span'}>
        킨코스는 기업의 브랜드 가이드라인은 지키면서, 명함 신청부터 제작,
        배송까지 모든 과정을
        <br /> 자동화하는 온라인 주문 관리 솔루션을 제공합니다.
      </Text>
    </>
  ),
  buttonContent: '지금 전문가 연결하기',
  link: '/solutions/online-order/corporate-printing',
  image: {
    url: '/images/solutions/online-order/business-card/solution-business-card-1.png',
    alt: '12_온라인 명함 주문 관리_1_기업 로고가 인쇄된 명함 더미, 브랜드 아이덴티티를 유지하는 통일된 디자인의 명함 인쇄물 예시',
  },
}

const cardsMockData = {
  title: (
    <Text textStyle={'pre-display-4'} textAlign={'center'}>
      <Text as={'span'}>
        <Text textStyle={'pre-display-4'} color={'primary.4'} as={'span'}>
          킨코스 온라인 명함 주문 관리 솔루션
        </Text>
        <Text as={'span'}>이 필요한 이유</Text>
      </Text>
    </Text>
  ),
  cards: [
    {
      title: '체계적인 브랜드 관리',
      description:
        '전 직원이 승인된 동일 템플릿만 사용하게 하여, 언제 누가 주문하든 통일성 있는 기업 브랜드 아이덴티티를 유지합니다.',
      icon: HOME_INTRODUCE_SOLUTION_SLIDERS[11].features?.[0].icon,
    },
    {
      title: '투명한 예산관리',
      description:
        '부서별, 개인별 주문 내역과 비용을 시스템에서 한눈에 관리할 수 있어, 예산 계획과 집행이 투명하고 간편해집니다.',
      icon: HOME_INTRODUCE_SOLUTION_SLIDERS[11].features?.[1].icon,
    },
    {
      title: '불필요한 업무 제거',
      description:
        '담당자가 일일이 정보를 챙기는 대신, 직원들이 자동 입력된 정보로 직접 주문하여 업무 과정이 간소화됩니다.',
      icon: HOME_INTRODUCE_SOLUTION_SLIDERS[11].features?.[2].icon,
    },
    {
      title: '확인만 하면 주문 끝',
      description:
        '오타나 디자인 오류 걱정 없이, 자동 입력된 정보가 맞는지 확인만 하세요. 명함 시안이 즉시 완성됩니다.',
      icon: HOME_INTRODUCE_SOLUTION_SLIDERS[11].features?.[3].icon,
    },
  ],
}

const featureData: FeatureItem[] = [
  {
    title: '자동 데이터 연동으로 오타 없는 디자인',
    type: 'description',
    description:
      '사내 데이터와 연동된 임직원 정보가 명함 템플릿에 자동으로 적용됩니다. 담당자가 직접 입력하지 않아 오타나 디자인 가이드라인 위반 등의 담당자의 오류를 원천적으로 차단합니다.',

    descriptionData: [
      '직급이나 부서별로 템플릿을 다르게 설정하면, 시스템이 자동으로 알맞은 디자인을 적용하여 브랜드 통일성을 유지합니다.',
      '명함뿐만 아니라 쇼핑백, 대봉투, 소봉투 등 필요한 서식 인쇄물을 등록하여 동일한 자동화 방식으로 신속하게 제작할 수 있습니다.',
      '담당자는 자동 완성된 시안을 확인하고 클릭 한 번으로 주문을 승인하여, 불필요한 정보 취합 및 교정 업무를 없앨 수 있습니다.',
    ],
    imageData: [
      {
        url: '/images/solutions/online-order/business-card/solution-business-card-2.png',
        alt: '12_온라인 명함 주문 관리_2_킨코스 온라인 명함 주문 관리 시스템의 명함 템플릿 선택 화면, 승인된 디자인 중 선택 신청하는 인터페이스 예시',
      },
      {
        url: '/images/solutions/online-order/business-card/solution-business-card-3.png',
        alt: '12_온라인 명함 주문 관리_3_임직원 정보가 자동으로 입력되는 명함 신청 양식 화면, 로그인 계정 기반 자동 기입 기능 예시',
      },
    ],
  },
  {
    title: '주문 전 ‘실시간 미리보기’로 최종 확인',
    description:
      '자동 입력된 정보가 반영된 명함 시안을 주문 전 실시간으로 직접 확인하고 최종 컨펌할 수 있어, 제작 후 발생할 수 있는 오류를 방지합니다.',

    type: 'description',
    descriptionData: [
      '화면에 보이는 모습 그대로 인쇄되어, 폰트나 레이아웃 깨짐 등 예상치 못한 인쇄 사고를 막아줍니다.',
      'PC, 모바일 등 기기 제약 없이 어디서든 시안을 확인하고 즉시 승인하여 주문 지연을 방지합니다.',
      '국문/영문 또는 직책별로 사전 승인된 여러 디자인 템플릿을 선택하여, 내 정보가 적용된 모습을 실시간으로 비교하고 최종 선택할 수 있습니다.',
    ],

    imageData: [
      {
        url: '/images/solutions/online-order/business-card/solution-business-card-4.png',
        alt: '12_온라인 명함 주문 관리_4_명함 디자인 편집 후 미리보기 화면, 자동 반영된 정보로 최종 디자인을 확인하는 실시간 시안 검토 예시',
      },
      {
        url: '/images/solutions/online-order/business-card/solution-business-card-5.png',
        alt: '12_온라인 명함 주문 관리_5_모바일 화면에서 명함 템플릿을 선택하는 사용자, 모바일, PC 등 기기 제약 없이 주문 가능한 온라인 명함 신청 예시',
      },
    ],
  },
  {
    title: '관리자 전용 대시보드로 ‘원클릭 승인’',
    type: 'description',
    description:
      '관리자는 전 직원의 명함 신청 현황을 대시보드에서 한눈에 확인하고, 클릭 한 번으로 간편하게 승인 또는 반려할 수 있습니다.',
    descriptionData: [
      '신청부터 발송까지 모든 단계를 대시보드에서 한눈에 확인하고, 필터링 기능으로 원하는 주문 건을 빠르게 찾을 수 있습니다.',
      '여러 주문 건을 한 번에 확인하고 클릭 한 번으로 승인하거나 반려할 수 있어 반복적인 승인 업무가 획기적으로 줄어듭니다.',
      '부서/개인별 주문 이력과 비용 데이터를 관리하고 리포트로 생성하여, 예산 관리 및 지출 증빙에 활용할 수 있습니다.',
    ],

    imageData: [
      {
        url: '/images/solutions/online-order/business-card/solution-business-card-6.png',
        alt: '12_온라인 명함 주문 관리_6_관리자 대시보드의 주문 승인 관리 화면, 명함 주문 건을 클릭 한 번으로 승인 또는 취소할 수 있는 예시',
      },
      {
        url: '/images/solutions/online-order/business-card/solution-business-card-7.png',
        alt: '12_온라인 명함 주문 관리_7_관리자가 주문 내역을 엑셀로 다운로드하는 화면, 부서별 주문 이력과 비용 데이터 관리 기능 예시',
      },
    ],
  },

  {
    title: '신청부터 배송까지, 복잡한 과정은 한 번에',
    type: 'description',
    description:
      '직원이 온라인으로 신청하고 관리자가 승인하면, 이후 제작부터 개별 포장, 지정 주소 배송까지 킨코스가 알아서 처리해 드립니다.',

    descriptionData: [
      '임직원이 PC나 모바일로 언제든 직접 명함을 신청하여, 담당자의 주문 취합 업무를 없애줍니다.',
      '승인된 주문은 킨코스의 전문가가 고품질 인쇄 및 검수까지 책임져, 브랜드 가치를 높이는 결과물을 보장합니다.',
      '제작된 명함은 직원별로 깔끔하게 개별 포장되어, 관리자가 직접 분류하고 나눠주는 번거로운 과정이 사라집니다.',
      '본사, 지사, 재택근무지 등 원하는 곳으로 직접 배송해, 담당자가 수령 후 재발송해야 하는 수고를 덜어줍니다.',
    ],

    imageData: [
      {
        url: '/images/solutions/online-order/business-card/solution-business-card-8.png',
        alt: '12_온라인 명함 주문 관리_8_제작 완료된 명함을 개별 포장해 배송 준비 중인 현장, 직원별 맞춤 포장 및 검수 과정 예시',
      },
      {
        url: '/images/solutions/online-order/business-card/solution-business-card-9.png',
        alt: '12_온라인 명함 주문 관리_9_고객이 완성된 명함을 원하는 곳으로 빠르게 수령하고 확인하는 장면, 고품질 인쇄와 정확한 정보 반영을 보여주는 결과물 예시',
      },
    ],
  },
]

export const SolutionBusinessCardTemplate = () => {
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
            GetSolutionExpertListParamsTypeEnumType.BUSINESS_CARD_SITE
          }
        />
      </Box>
      <Box py="80px" w={'100%'} bg="primary.1">
        <SolutionMoreInfoSection
          type={GetRelatedSolutionParamsTypeEnumTypeOptions.BUSINESS_CARD_SITE}
        />
      </Box>
      <SolutionConnectExportBottomBar stickyRef={stickyRef} />
    </VStack>
  )
}
