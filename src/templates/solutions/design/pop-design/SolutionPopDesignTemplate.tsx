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

const heroMockData = {
  badge: '매장 POP 디자인',
  title: (
    <VStack
      textAlign={'center'}
      textStyle={'pre-display-3'}
      gap={'0px'}
      px={'20px'}
    >
      <Text color={'primary.4'}>우리 매장 환경에 꼭 맞는 POP,</Text>
      <Text>아직도 직접 고민하시나요?</Text>
    </VStack>
  ),
  heroContent: (
    <>
      <Text textStyle={'pre-display-3'} color={'grey.0'}>
        {'"사이즈가 안 맞으면 어떡하지?"\n "어떤 소재가 가장 좋을까?"'}
      </Text>
      <Text textStyle={'pre-heading-3'} color={'grey.0'} as={'span'}>
        {
          '킨코스는 매장 현장을 직접 분석하여, 사이즈부터 소재, 설치 시공까지 가장 효과적인 POP 제작 솔루션을 한 번에 제안합니다.\n이제 설치된 POP를 매장에서 확인하세요!'
        }
      </Text>
    </>
  ),
  buttonContent: '지금 전문가 연결하기',
  link: '/solutions/online-order/corporate-printing',
  image: {
    url: '/images/solutions/design/pop-design/solution-pop-design-1.png',
    alt: '3_매장 POP 디자인_1_유리창에 부착된 주스 프로모션 포스터, 매장 외부에서도 잘 보이는 투명형 POP 디자인 예시',
  },
}

const cardsMockData = {
  title: (
    <VStack gap={'0px'}>
      <Text textStyle={'pre-display-4'}>담당자의 고민, 매장 POP 디자인</Text>
      <Text textStyle={'pre-display-4'} color={'primary.4'}>
        킨코스가 해결해드립니다.
      </Text>
    </VStack>
  ),
  cards: [
    {
      title: '사이즈 실패 걱정 끝',
      description:
        '전문가가 직접 매장을 재서 딱 맞게 만드니, 잘못된 제작으로 인한 비용과 시간 낭비가 없습니다.',
      icon: HOME_INTRODUCE_SOLUTION_SLIDERS[2].features?.[0].icon,
    },
    {
      title: '최고의 광고 효과',
      description:
        '매장 환경과 예산에 맞춰 가장 눈에 잘 띄는 소재를 추천해 드리므로, 적은 비용으로도 큰 홍보 효과를 볼 수 있습니다.',
      icon: HOME_INTRODUCE_SOLUTION_SLIDERS[2].features?.[1].icon,
    },
    {
      title: '동일한 품질 유지',
      description:
        '전국 모든 매장에 통일된 디자인과 깔끔한 설치를 보장하여, 브랜드 이미지를 지킬 수 있습니다.',
      icon: HOME_INTRODUCE_SOLUTION_SLIDERS[2].features?.[2].icon,
    },
    {
      title: '확인만 하면 끝',
      description:
        '사이즈 측정, 소재 선택, 디자인 제작 등 복잡한 과정은 킨코스가 알아서 합니다. 더 중요한 기획 업무에 집중하세요.',
      icon: HOME_INTRODUCE_SOLUTION_SLIDERS[2].features?.[3].icon,
    },
  ],
}

const featureData: FeatureItem[] = [
  {
    title: '실패 없는 POP 제작, 현장 방문부터',
    type: 'description',
    description:
      '전문가가 직접 매장에 찾아가 공간 크기를 재고, 가장 눈에 잘 띄는 곳이 어디인지 확인합니다.',
    descriptionData: [
      '전문가가 직접 방문해 고객의 시선이 가장 많이 머무는 곳의 위치를 찾아냅니다.',
      '설치할 곳의 상태를 미리 확인하여 ‘튼튼하고 안전하게’ 설치할 방법을 제안합니다.',
      '일반 매장, 팝업스토어, 전시장 등 어떤 곳이든 가장 효과적인 방법을 찾기 위해 방문합니다.',
    ],
    imageData: [
      {
        url: '/images/solutions/design/pop-design/solution-pop-design-2.png',
        alt: '3_매장 POP 디자인_2_킨코스 시공 전문가가 매장 앞에 배너형 POP를 설치하며 사이즈와 위치를 점검하는 장면',
      },
      {
        url: '/images/solutions/design/pop-design/solution-pop-design-3.png',
        alt: '3_매장 POP 디자인_3_분식 매장 벽면에 메뉴판과 포스터를 일관된 디자인으로 배치한 실내 POP 인테리어 예시',
      },
      {
        url: '/images/solutions/design/pop-design/solution-pop-design-4.png',
        alt: '3_매장 POP 디자인_4_전문 시공팀이 사다리를 이용해 대형 메뉴 보드를 벽면에 설치하며 길이를 측정하는 모습',
      },
    ],
  },
  {
    title: '맞춤 디자인과 3D 이미지로 미리 확인',
    description:
      '측정한 공간에 딱 맞는 디자인을 하고, 설치 후의 모습을 3D 이미지 또는 매장합성 시뮬레이션 이미지로 미리 보여드립니다.',
    type: 'description',
    descriptionData: [
      '기업의 로고와 색상 등 고유 스타일을 디자인에 반영하여 정체성을 살립니다.',
      '설치 장소와 목적에 맞춰 가장 효과적인 디자인을 제안합니다.',
      '실제 매장 사진에 디자인을 합성하여 주변 환경과의 조화를 미리 확인합니다.',
      '다양한 각도의 3D 이미지로 실제 설치 모습을 예측하여 실패 확률을 줄입니다.',
    ],

    imageData: [
      {
        url: '/images/solutions/design/pop-design/solution-pop-design-5.png',
        alt: '3_매장 POP 디자인_5_카페 테이블 위에 배치된 아크릴 거치형 안내 POP, 텀블러 할인과 주문 안내 문구가 인쇄된 홍보물',
      },
      {
        url: '/images/solutions/design/pop-design/solution-pop-design-6.png',
        alt: '3_매장 POP 디자인_6_크기별로 제작된 아크릴 거치형 POP 세트, 다양한 매장 환경에 맞춘 사이즈 비교 예시',
      },
    ],
  },
  {
    title: '가장 좋은 소재와 방법 선택',
    type: 'description',
    description:
      '예산과 사용 목적에 맞춰 가장 효과적인 소재와 제작 방식을 정합니다.',
    descriptionData: [
      '오랫동안 사용할 매장 POP는 튼튼하게, 짧게 쓰는 행사장·팝업스토어 POP는 가성비 좋게. 예산과 목적에 맞춰 가장 합리적인 소재를 제안합니다.',
      '햇빛이 강한 창가에는 변색에 강한 소재를, 습기가 많은 곳에는 방수 처리된 소재를 써야 오래갑니다. 이처럼 설치될 곳의 환경까지 꼼꼼히 따져보고 제안합니다.',
      '멀리서도 시선을 끌어야 한다면 반짝이는 소재를, 손이 자주 닿는 곳이라면 오염에 강한 소재를 사용하는 등 고객의 행동까지 고려하여 효과를 높입니다.',
    ],
    imageData: [
      {
        url: '/images/solutions/design/pop-design/solution-pop-design-7.png',
        alt: '3_매장 POP 디자인_7_분홍색 배경 위 여름 세일 30_ 할인 이벤트 포스터, 시즌성 프로모션 POP 디자인 예시',
      },
      {
        url: '/images/solutions/design/pop-design/solution-pop-design-8.png',
        alt: '3_매장 POP 디자인_8_방수 처리된 소재로 제작된 공룡 캐릭터 POP 인쇄물, 습기 많은 환경에서도 사용할 수 있는 내수성 소재 예시',
      },
    ],
  },

  {
    title: '제작, 배송, 설치까지 한 번에',
    type: 'description',
    description:
      '디자인이 확정되면 그대로 제작하여 원하시는 곳으로 배송하거나, 직접 방문하여 설치까지 마무리합니다.',
    descriptionData: [
      '배송 중 제품이 망가질까 걱정하지 마세요. 소재와 모양에 맞춰 가장 안전하게 포장하고, 필요시 직접 배송하여 파손 위험을 원천 차단합니다.',
      '서울, 경기, 지방 어디든 상관없습니다. 킨코스의 전문 시공팀이 전국에 있는 매장으로 직접 찾아가 설치해 드리므로, 여러 지역으로 요청하셔도 문제없습니다.',
      '일반 매장은 물론, 야간이나 특정 시간에만 작업해야 하는 백화점, 대형 쇼핑몰 설치도 문제없습니다. 복잡한 규정을 미리 파악하고 주변에 피해 없이 깔끔하게 시공합니다.',
      '매장 오픈이나 행사 일정에 맞춰 약속한 날짜 안에 반드시 설치를 완료합니다. 설치 후에는 담당자님과 함께 결과물을 꼼꼼히 확인하여 마무리합니다.',
    ],

    imageData: [
      {
        url: '/images/solutions/design/pop-design/solution-pop-design-9.png',
        alt: '3_매장 POP 디자인_9_킨코스 로고가 부착된 흰색 배송 차량이 도심 도로를 달리며 POP 자재를 운송하는 모습',
      },
      {
        url: '/images/solutions/design/pop-design/solution-pop-design-10.png',
        alt: '3_매장 POP 디자인_10_킨코스 시공팀이 행사장 내부에서 인물형 스탠딩 POP을 설치하는 장면, 이벤트 안내용 입간판 예시',
      },
    ],
  },
]

export const SolutionPopDesignTemplate = () => {
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
          solutionId={GetSolutionExpertListParamsTypeEnumType.POP_DESIGN}
        />
      </Box>

      <Box py="80px" w={'100%'} bg="primary.1">
        <SolutionMoreInfoSection
          type={GetRelatedSolutionParamsTypeEnumTypeOptions.POP_DESIGN}
        />
      </Box>
      <SolutionConnectExportBottomBar stickyRef={stickyRef} />
    </VStack>
  )
}
