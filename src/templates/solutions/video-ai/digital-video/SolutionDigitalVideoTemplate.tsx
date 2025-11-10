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
  badge: '디지털 영상 제작',
  title: (
    <VStack
      textAlign={'center'}
      textStyle={'pre-display-3'}
      gap={'0px'}
      px={'20px'}
    >
      <Text color={'primary.4'}>매장 DID 영상, </Text>
      <Text>어떻게 바꿀지 고민되세요? </Text>
    </VStack>
  ),
  heroContent: (
    <>
      <Text textStyle={'pre-display-3'} color={'grey.0'}>
        {
          '“오래된 메뉴판, 어떻게 바꿔야 할까…?“\n “신메뉴 출시는 어떻게 알려야 효과적일까…?“'
        }
      </Text>
      <Text textStyle={'pre-heading-3'} color={'grey.0'} as={'span'}>
        {
          '메뉴판 디자인 노하우로 매장에서 가장 주목받는 영상을 만듭니다.\n키오스크·DID 영상 기획부터 제작까지, 지금 바로 전문가에게 맡기세요.'
        }
      </Text>
    </>
  ),
  buttonContent: '지금 전문가 연결하기',
  link: '/solutions/online-order/corporate-printing',
  image: {
    url: '/images/solutions/video-ai/digital-video/solution-digital-1.mp4',
    alt: '9_디지털영상제작_1_제주 유기농 말차라떼 신메뉴 홍보 영상, 시즌 메뉴 프로모션용 프랜차이즈 카페 매장 DID 영상 예시',
  },
}

const cardsMockData = {
  title: (
    <Text textStyle={'pre-display-4'} textAlign={'center'}>
      <Text as={'span'}>고민은 끝!</Text>
      <br />

      <Text as={'span'}>
        <Text textStyle={'pre-display-4'} color={'primary.4'} as={'span'}>
          킨코스 디지털 영상 제작 솔루션
        </Text>
        <Text as={'span'}>이 필요한 이유</Text>
      </Text>
    </Text>
  ),
  cards: [
    {
      title: '경험 기반 기획',
      description:
        '인쇄물 디자인 경험을 바탕으로 고객의 시선을 끄는 가장 효과적인 영상 콘셉트를 제안합니다.',
      icon: HOME_INTRODUCE_SOLUTION_SLIDERS[8].features?.[0].icon,
    },
    {
      title: 'AI 기반의 빠른 제작',
      description:
        'AI 기술로 영상 시안을 빠르게 제작하고 데이터로 효과를 검증하여, 제작 기간을 단축하고 성공률을 높입니다.',
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 16 16"
          fill="none"
        >
          <path
            d="M13.2533 12.4881H11.8726V3.40039H13.2533V12.4881Z"
            fill="white"
          />
          <path
            d="M2.7002 12.4881L5.96375 3.40039H7.56415L10.834 12.4881H9.35911L6.79847 5.06355H6.72316L4.15624 12.4881H2.7002ZM9.12062 8.92961V10.0844H4.40101V8.92961H9.12062Z"
            fill="white"
          />
        </svg>
      ),
    },
    {
      title: '목적 중심 맞춤 제작',
      description:
        '신제품 홍보, 프로모션 등 비즈니스 목적과 전략에 정확히 맞는 영상 콘텐츠를 맞춤 제작합니다.',
      icon: HOME_INTRODUCE_SOLUTION_SLIDERS[8].features?.[2].icon,
    },
    {
      title: '인쇄물까지 통합 관리',
      description:
        '영상 콘텐츠와 함께 메뉴판, 포스터 등 인쇄물까지 원스톱으로 관리하여 담당자의 업무 효율을 높여 드립니다.',
      icon: HOME_INTRODUCE_SOLUTION_SLIDERS[8].features?.[3].icon,
    },
  ],
}

const featureData: FeatureItem[] = [
  {
    title: '움직임으로 시선 끌기',
    type: 'description',
    description:
      '보기 좋은 인쇄물처럼 화면을 안정적으로 구성하고, 여기에 생생한 움직임을 더해 고객의 시선이 자연스럽게 영상에 머물도록 만듭니다.',

    descriptionData: [
      '인쇄물처럼 안정적이고 읽기 편한 레이아웃을 기본으로 영상을 구성합니다.',
      '고객의 눈이 가장 중요한 정보(제품, 가격 등)로 자연스럽게 향하도록 움직임을 설계합니다.',
      '영상의 내용에 맞춰 때로는 빠르고 경쾌하게, 때로는 부드럽고 고급스럽게 속도감을 조절합니다.',
      '특정 단어나 이미지가 깜빡이거나 커지는 등, 꼭 봐야 할 핵심 정보를 강조하는 효과를 적용합니다.',
    ],
    imageData: [
      {
        url: '/images/solutions/video-ai/digital-video/solution-digital-2.gif',
        alt: '9_디지털영상제작_2_가을 시즌 메뉴 ‘제주 유기농 말차라떼’ 홍보 영상, 제주산 유기농 말차를 활용한 카페 프로모션 콘텐츠 예시',
      },
    ],
  },
  {
    title: '눈이 즐거운 특수 효과',
    description:
      '단순히 글자만 나오는 영상을 넘어, 다채로운 그래픽과 특수 효과를 사용해 고객의 눈을 사로잡습니다. 복잡한 매장 안에서도 영상이 단번에 눈에 띄게 합니다.',
    type: 'description',
    descriptionData: [
      '전문적인 느낌을 주는 최신 모션 그래픽 기술을 사용하여 영상의 완성도를 높입니다.',
      '주변 조명이나 배경에도 영상이 묻히지 않고 선명하게 보이도록 색상과 밝기를 최적화합니다.',
      "글자가 살아 움직이는 듯한 '키네틱 타이포그래피' 효과로 메시지의 전달력을 강화합니다.",
    ],

    imageData: [
      {
        url: '/images/solutions/video-ai/digital-video/solution-digital-4.gif',
        alt: '9_디지털영상제작_4__원하는 건 뭐든지 만들어줄게_라는 메시지를 전달하는 모션그래픽 영상, 킨코스 영상 제작 솔루션 홍보용 키네틱 타이포그래피 예시',
      },
      {
        url: '/images/solutions/video-ai/digital-video/solution-digital-5.gif',
        alt: '9_디지털영상제작_5_실사 인쇄 기계가 작동하며 ‘인쇄회사 맞는데 영상도 해’ 문구가 함께 등장하는 장면, 킨코스의 디지털 영상 제작 서비스 소개 콘텐츠 예시',
      },
    ],
  },
  {
    title: '인터랙션을 만드는 영상 효과',
    type: 'description',
    description:
      '모든 영상을 똑같이 만들지 않습니다. 신메뉴 영상은 ‘주문하고 싶다’는 반응을, 할인 이벤트는 ‘참여해야겠다’는 행동을 이끌어내도록, 고객의 인터랙션을 유발하는 최적의 영상 효과를 골라 사용합니다.',
    descriptionData: [
      '식욕을 돋우는 색감이나 호기심을 유발하는 연출 등 고객의 구매 심리를 자극하는 효과를 설계합니다.',
      "'지금 주문하세요', '직원에게 문의하세요' 등 고객의 다음 행동을 유도하는 명확한 문구를 포함합니다.",
      '짧은 시간 안에 고객의 감성적 반응(재미, 공감, 감동 등)을 이끌어내는 스토리텔링 기법을 적용합니다.',
    ],
    imageData: [
      {
        url: '/images/solutions/video-ai/digital-video/solution-digital-6.mp4',
        alt: '9_디지털영상제작_6_한식, 일식, 양식 등 다양한 음식이 빠르게 전환되며 시선을 끄는 모션그래픽 광고 영상, 매장 프로모션용 메뉴 홍보 콘텐츠 예시',
      },
    ],
  },

  {
    title: '영상과 인쇄물의 브랜드 일관성',
    type: 'description',
    description:
      '영상 속 특수 효과들이 매장의 포스터, 메뉴판 디자인과 잘 어울리도록 만듭니다. 고객이 어디를 보더라도 통일된 느낌을 받아 브랜드를 더 전문적으로 느끼게 합니다.',
    descriptionData: [
      '브랜드의 폰트, 컬러, 로고 등 디자인 요소를 영상과 인쇄물에 동일하게 적용하여 관리합니다.',
      '신메뉴, 이벤트 등 특정 캠페인의 영상과 인쇄 홍보물이 동일한 디자인으로 보이게 합니다.',
      '디지털과 아날로그 매체 전반에 걸쳐 일관된 디자인을 노출하여 전문적이고 신뢰도 높은 브랜드 이미지를 구축합니다.',
    ],

    imageData: [
      {
        url: '/images/solutions/video-ai/digital-video/solution-digital-7.png',
        alt: '9_디지털영상제작_7_매장 유리창에 부착된 햄버거 프로모션 포스터, 시즌 이벤트 홍보를 위한 인쇄용 POP 디지털 영상 제작 예시',
      },

      {
        url: '/images/solutions/video-ai/digital-video/solution-digital-8.gif',
        alt: '9_디지털영상제작_8_패스트푸드 매장 테이블 위 전자 디스플레이에 재생되는 햄버거 프로모션 영상, 매장 내 디지털 사이니지용 광고 콘텐츠 예시',
      },
    ],
  },
]

export const SolutionDigitalVideoTemplate = () => {
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
          solutionId={GetSolutionExpertListParamsTypeEnumType.DIGITAL_VIDEO}
        />
      </Box>

      <Box py="80px" w={'100%'} bg="primary.1">
        <SolutionMoreInfoSection
          type={GetRelatedSolutionParamsTypeEnumTypeOptions.DIGITAL_VIDEO}
        />
      </Box>
      <SolutionConnectExportBottomBar stickyRef={stickyRef} />
    </VStack>
  )
}
