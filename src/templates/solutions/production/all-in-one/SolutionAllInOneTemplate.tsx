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
  badge: '통합제작 올인원',
  title: (
    <VStack
      textAlign={'center'}
      textStyle={'pre-display-3'}
      gap={'0px'}
      px={'20px'}
    >
      <Text color={'primary.4'}>인쇄 디자인, 제작, 배송,</Text>
      <Text>아직도 따로 맡기세요? </Text>
    </VStack>
  ),
  heroContent: (
    <>
      <Text textStyle={'pre-display-3'} color={'grey.0'}>
        {
          '"시안 언제 나오지? 인쇄품질은 괜찮을까…?"\n "지점별로 나눠 보내야 하는데…?"'
        }
      </Text>
      <Text textStyle={'pre-heading-3'} color={'grey.0'} as={'span'}>
        {
          '킨코스 전담팀이 디자인 기획부터 제작, 개별 포장과 배송까지 모든 과정을 책임집니다.\n여러 업체와 소통하는 번거로움 없이, 이제 마케팅 본연의 업무에만 집중하세요.'
        }
      </Text>
    </>
  ),
  buttonContent: '지금 전문가 연결하기',
  link: '/solutions/online-order/corporate-printing',
  image: {
    url: '/images/solutions/production/all-in-one/solution-all-in-one-1.png',
    alt: '8_통합제작 올인원_1_Cafe Kinkos 로고가 인쇄된 포장 박스와 스티커, 친환경 용기 세트 구성 예시, 브랜드 맞춤형 패키지 디자인 샘플',
  },
}

const cardsMockData = {
  title: (
    <Text textStyle={'pre-display-4'} textAlign={'center'}>
      <Text as={'span'}>
        <Text textStyle={'pre-display-4'} color={'primary.4'} as={'span'}>
          킨코스 통합제작 올인원 솔루션
        </Text>
        <Text as={'span'}>이 필요한 이유</Text>
      </Text>
    </Text>
  ),
  cards: [
    {
      title: '전략적인 디자인 기획',
      description:
        '이벤트나 홍보 목적에 맞춰 고객의 아이디어를 기획·디자인하여 가장 효과적인 인쇄물로 완성합니다.',
      icon: HOME_INTRODUCE_SOLUTION_SLIDERS[7].features?.[0].icon,
    },
    {
      title: '데이터 기반 공정 관리',
      description:
        'MES(생산 공정 관리)를 통해 컬러부터 후가공까지 전 공정을 데이터로 제어하여, 모든 제작물의 품질을 동일하게 유지합니다.',
      icon: HOME_INTRODUCE_SOLUTION_SLIDERS[7].features?.[1].icon,
    },
    {
      title: '원스톱 물류 솔루션',
      description:
        '제작물 분류부터 개별 포장, 전국 지점별 맞춤 배송까지. 킨코스가 복잡한 물류 과정을 한 번에 해결해 드립니다.',
      icon: HOME_INTRODUCE_SOLUTION_SLIDERS[7].features?.[2].icon,
    },
    {
      title: '신속한 위기 대응',
      description:
        '킨코스는 자체 생산 전문센터를 통해, 긴급 추가 제작 등 어떤 돌발 상황에도 신속하게 대응합니다.',
      icon: HOME_INTRODUCE_SOLUTION_SLIDERS[7].features?.[3].icon,
    },
  ],
}

const featureData: FeatureItem[] = [
  {
    title: '아이디어를 현실로, ‘전략적 디자인 기획’',

    type: 'description',
    description:
      '고객의 아이디어를 효과적인 인쇄물로 구현합니다. 컨셉 디자인부터 시작하여, 브로슈어, 리플렛 등 각 인쇄물의 특성에 맞는 최적의 디자인 시안을 기획하여 제안합니다.',

    descriptionData: [
      '전문적인 디자인 상담을 통해 아이디어를 명확히 하고, 인쇄물의 디자인 컨셉과 전체적인 방향을 정합니다.',
      '킨코스 전문 디자인 센터의 디자이너들이 제안하는 다양한 시안을 직접 비교하며, 가장 효과적인 디자인을 선택할 수 있습니다.',
      '최종 선택된 디자인을 완벽한 인쇄용 파일로 제작하고 검토합니다. 이 파일은 실제 인쇄 시 오류가 발생하지 않도록 제작센터로 안전하게 전달됩니다.',
    ],
    imageData: [
      {
        url: '/images/solutions/production/all-in-one/solution-all-in-one-2.png',
        alt: '8_통합제작 올인원_2_킨코스 전문 디자인 센터에서 제품 패키지 시안을 검토 중인 디자이너 팀, 브랜드 맞춤형 디자인 협업 과정',
      },
      {
        url: '/images/solutions/production/all-in-one/solution-all-in-one-3.png',
        alt: '8_통합제작 올인원_3_인쇄 색상과 품질을 점검하는 소프트웨어 화면, 데이터 기반 공정 관리 시스템 예시',
      },
    ],
  },
  {
    title: '소재부터 후가공까지, 전문제작 컨설팅',
    description:
      '제작물의 용도와 예산에 맞춰 최적의 용지, 코팅, 제본 방식 등 디테일한 부분까지 전문가가 직접 컨설팅하여 제작물의 완성도를 관리합니다.',

    type: 'description',
    descriptionData: [
      '제작물의 용도와 컨셉에 맞춰 종이의 종류, 두께, 질감까지 가장 어울리는 소재를 추천합니다.',
      '수량과 납기, 원하는 품질에 따라 디지털 또는 옵셋 인쇄, 실사출력 등 가장 효율적인 제작 방식을 제안합니다.',
      '코팅, 금박, 형압 등 디자인의 완성도를 높이고 내구성을 더하는 최적의 후가공 조합을 찾아드립니다.',
      '정해진 예산 안에서 최고의 결과물을 낼 수 있도록, 각 공정별로 비용 효율적인 대안을 제시합니다.',
    ],

    imageData: [
      {
        url: '/images/solutions/production/all-in-one/solution-all-in-one-4.png',
        alt: '8_통합제작 올인원_4_킨코스 로고가 인쇄된 명함 샘플 클로즈업, 고품질 인쇄와 후가공을 적용한 인쇄물 예시',
      },
      {
        url: '/images/solutions/production/all-in-one/solution-all-in-one-5.png',
        alt: '8_통합제작 올인원_5_질감과 색감이 다른 다양한 인쇄용 종이 샘플, 제작물 용도에 따른 소재 컨설팅 예시',
      },
    ],
  },
  {
    title: '수량에 맞춘 ‘개별 포장 및 맞춤 배송’',
    type: 'description',
    description:
      '전국 매장, 부서별, 담당자별로 필요한 수량에 맞춰 정확하게 소분·포장하고, 각기 다른 주소로 직접 배송합니다.',
    descriptionData: [
      '지점, 부서, 담당자별로 필요한 수량을 오차 없이 정확하게 분류하여 포장 전 단계부터 완벽하게 준비합니다.',
      '분류된 제작물을 각 수령처 정보(예: 강남점, 마케팅팀)를 기입하여 개별 포장하므로 수령 후 관리가 편합니다.',
      '한 번의 주문으로 본사, 전국 지점, 행사장 등 원하는 다수의 주소로 직접 발송하여 물류 과정을 통합 관리합니다.',
    ],
    imageData: [
      {
        url: '/images/solutions/production/all-in-one/solution-all-in-one-6.png',
        alt: '8_통합제작 올인원_6_둥근 종이 포스터 케이스가 대량 포장된 모습, 실사 출력물의 안전한 포장 및 보관 예시',
      },
      {
        url: '/images/solutions/production/all-in-one/solution-all-in-one-7.png',
        alt: '8_통합제작 올인원_7_지역별로 분류된 배송용 박스가 운반 카트에 적재된 물류센터 현장, 지점별 맞춤 포장 및 출고 관리',
      },
    ],
  },

  {
    title: '처음부터 끝까지, ‘1:1 전담 매니저 케어’',
    type: 'description',
    description:
      '디자인 기획 단계부터 최종 배송 완료까지, 배정된 전담 매니저가 모든 과정을 1:1로 책임지고 관리합니다.',

    descriptionData: [
      '전담 매니저가 기획부터 최종 납품까지 모든 공정을 직접 챙기고 책임지므로, 고객은 진행 상황만 편하게 체크하면 됩니다.',
      '제작 과정에서 발생하는 모든 돌발 상황이나 문제에 대해 전담 매니저가 즉시 파악하고 직접 해결하여 리스크를 최소화합니다.',
      '담당 매니저가 고객의 과거 주문 이력과 스타일을 파악하고 있어, 재주문이나 추가 프로젝트 진행 시 더욱 빠르고 정확한 소통이 가능합니다.',
    ],

    imageData: [
      {
        url: '/images/solutions/production/all-in-one/solution-all-in-one-8.png',
        alt: '8_통합제작 올인원_8_회의 테이블에서 패키지 디자인 기획안을 논의하는 킨코스 담당자와 고객, 1_1 전담 매니저 상담 장면',
      },
      {
        url: '/images/solutions/production/all-in-one/solution-all-in-one-9.png',
        alt: '8_통합제작 올인원_9_비용 분석 차트와 그래프가 인쇄된 서류, 인쇄 제작 프로젝트의 예산 관리 및 효율 분석 자료 예시',
      },
    ],
  },
]

export const SolutionAllInOneTemplate = () => {
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
          solutionId={GetSolutionExpertListParamsTypeEnumType.ALL_IN_ONE}
        />
      </Box>

      <Box py="80px" w={'100%'} bg="primary.1">
        <SolutionMoreInfoSection
          type={GetRelatedSolutionParamsTypeEnumTypeOptions.ALL_IN_ONE}
        />
      </Box>
      <SolutionConnectExportBottomBar stickyRef={stickyRef} />
    </VStack>
  )
}
