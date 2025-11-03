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
  badge: 'VMD 3D 디자인',
  title: (
    <VStack
      textAlign={'center'}
      textStyle={'pre-display-3'}
      gap={'0px'}
      px={'20px'}
    >
      <Text color={'primary.4'}>팝업스토어, VMD 기획,</Text>
      <Text>아직도 혼자 고민하세요?</Text>
    </VStack>
  ),
  heroContent: (
    <>
      <Text textStyle={'pre-display-3'} color={'grey.0'}>
        {'"시선을 끌려면 어떻게 하지…?"\n "제작에 문제가 생기면 어떻게 하지…?"'}
      </Text>
      <Text textStyle={'pre-heading-3'} color={'grey.0'} as={'span'}>
        {
          '킨코스는 이벤트와 팝업스토어에서도 상품이 가장 돋보일 수 있도록, \n3D 시뮬레이션으로 매대를 기획하고 실물 샘플로 빠르게 검증하는 통합 제작 솔루션을 제공합니다.'
        }
      </Text>
    </>
  ),
  buttonContent: '지금 전문가 연결하기',
  link: '/solutions/online-order/corporate-printing',
  image: {
    url: '/images/solutions/design/vmd-3d/solution-vmd-3d-1.png',
    alt: '4_VMD 디자인_1_킨코스의 캐릭터와 달 이미지를 활용한 전시 부스 디자인, 브랜드 콘셉트를 시각적으로 구현한 VMD 연출 예시',
  },
}

const cardsMockData = {
  title: (
    <Text textStyle={'pre-display-4'} textAlign={'center'}>
      <Text as={'span'}>
        <Text textStyle={'pre-display-4'} color={'primary.4'} as={'span'}>
          킨코스 VMD(3D) 디자인 솔루션
        </Text>
        <Text as={'span'}>이 필요한 이유</Text>
      </Text>
    </Text>
  ),
  cards: [
    {
      title: '확실한 행사 성공',
      description:
        '고객의 시선을 사로잡을 가장 효과적인 매대와 포토존을 3D로 미리 기획하여 성공적인 공간을 연출합니다.',
    },
    {
      title: '맞춤형 예산 컨설팅',
      description:
        '단기 팝업은 가성비 좋게, VIP 행사는 품격있게. 행사 성격에 꼭 맞는 맞춤 예산을 제안합니다.',
    },
    {
      title: '돌발 상황 신속 대응',
      description:
        '행사 당일 POP가 부족하거나 파손돼도 즉시 추가 제작하여 신속하게 해결합니다.',
    },
    {
      title: '비용 절감과 친환경',
      description:
        '재사용이 가능한 모듈형 설계와 친환경 소재를 제안하여, 비용 절감과 ESG 경영을 동시에 지원합니다.',
    },
  ],
}

const featureData: FeatureItem[] = [
  {
    title: '머릿속 아이디어를 ‘보이는 이미지’로',
    type: 'description',
    description:
      '행사 컨셉과 상품에 맞춰, 머릿속으로만 그리던 이벤트 공간(매대, 포토월 등)을 실감나는 3D 이미지로 정확하게 만들어 드립니다.',
    descriptionData: [
      '간단한 손 스케치나 아이디어만 주시면, 전문가가 바로 실물 같은 3D 설계 이미지로 만들어 드립니다.',
      '행사가 열릴 장소의 사진에 3D 이미지를 합성해, 설치 후의 모습을 미리 보여드립니다. 현장과 잘 어울리는지 정확히 판단할 수 있습니다.',
      '제작할 매대에 실제 상품을 올려놓았을 때의 모습을 3D 이미지로 보여드립니다. 어떻게 진열해야 상품이 돋보일지 미리 알 수 있습니다.',
    ],
    imageData: [
      {
        url: '/images/solutions/design/vmd-3d/solution-vmd-3d-2.png',
        alt: '4_VMD 디자인_2_화이트톤의 팝업 카페 부스 3D 시뮬레이션, 브랜드 색상을 반영한 공간 연출 디자인',
      },

      {
        url: '/images/solutions/design/vmd-3d/solution-vmd-3d-3.png',
        alt: '4_VMD 디자인_3_식물 패턴 그래픽이 적용된 제품 진열대 3D 모델링, 전시용 매대 디자인 예시',
      },
    ],
  },
  {
    title: '가상으로 미리 설치하여 동선까지 체크',
    description:
      '디자인한 매대를 실제 행사장 사진에 합성해, 다른 시설물과 잘 어울리는지, 고객 동선의 불편함을 미리 확인하여 문제점을 개선합니다.',
    type: 'description',
    descriptionData: [
      '고객의 이동에 불편함은 없는지, 공간이 너무 좁아 복잡해지지는 않을지 미리 점검하고 체크합니다.',
      '행사장 입구나 길목 등 주요 위치에서 고객 눈에 로고나 중요 상품이 잘 보이는지 확인하고, 안 보이는 곳이 없도록 디자인을 조정합니다.',
      '천장이 너무 낮거나, 바닥이 울퉁불퉁하지 않은 지 등 설치 시 발생할 수 있는 모든 현장 변수를 미리 체크하여 당일의 실수를 막습니다.',
    ],

    imageData: [
      {
        url: '/images/solutions/design/vmd-3d/solution-vmd-3d-4.png',
        alt: '4_VMD 디자인_4_킨코스 부스의 3D 시뮬레이션 뷰, 방문 동선을 분석한 행사장 공간 배치 예시',
      },

      {
        url: '/images/solutions/design/vmd-3d/solution-vmd-3d-5.png',
        alt: '4_VMD 디자인_5_행사 담당자가 태블릿을 통해 전시 부스 배치를 설명하는 모습, 현장 설치 컨설팅 장면',
      },
    ],
  },
  {
    title: '3D 프린터로 빠르고 정확한 샘플 제작',
    type: 'description',
    description:
      '실제 모습이 궁금하시다고요? 3D 프린터로 빠르게 샘플을 만들어, 촉박한 일정 속에서도 직접 만져보고 디자인과 구조를 확정할 수 있습니다.',
    descriptionData: [
      '컴퓨터로만 보던 디자인을 실물로 직접 만져보고, 디자인이 생각대로 잘 나왔는지 눈으로 확인할 수 있습니다.',
      '샘플 위에 실제 상품을 올려보며, 사이즈는 맞는지, 튼튼하게 고정되는지 등을 미리 테스트하여 문제점을 개선합니다.',
      '일반 샘플 제작에 며칠씩 소요되는 것과 달리, 3D 프린터는 단기간에 제작이 완료되므로 일정이 급한 팝업스토어 프로젝트에 매우 유용합니다.',
    ],
    imageData: [
      {
        url: '/images/solutions/design/vmd-3d/solution-vmd-3d-6.png',
        alt: '4_VMD 디자인_6_3D 프린터 장비로 전시용 샘플 부품을 출력하는 과정, 실물 제작 전 프로토타입 확인 예시',
      },
      {
        url: '/images/solutions/design/vmd-3d/solution-vmd-3d-7.png',
        alt: '4_VMD 디자인_7_LED 조명 아래 킨코스 캐릭터 모양의 입체 사인물을 UV 인쇄로 출력 중인 장비 내부 모습',
      },
    ],
  },

  {
    title: '아이디어부터 철거까지, 복잡한 과정은 한번에',
    type: 'description',
    description:
      '기획, 디자인, 제작, 그리고 행사 당일 설치와 끝난 뒤 뒷정리(철거)까지. 신경 쓸 일 없도록 킨코스가 전부 알아서 해드립니다.',
    descriptionData: [
      '아이디어만 주시면, 킨코스가 예산에 맞춰 가장 효과적인 3D 디자인과 실행 계획을 제안해 드립니다.',
      '확정된 계획을 바탕으로 3D 이미지를 만들고, 실물 샘플로 미리 확인시켜 드립니다. 제작이 잘못될 걱정이 없습니다.',
      '최종 결정된 디자인 그대로, 약속한 날짜에 맞춰 높은 품질의 결과물을 제작하여 납품합니다.',
      '행사 당일 전문팀이 방문하여 완벽하게 설치하고, 행사가 끝나면 뒷정리와 철거까지 깔끔하게 마무리합니다.',
    ],

    imageData: [
      {
        url: '/images/solutions/design/vmd-3d/solution-vmd-3d-8.png',
        alt: '4_VMD 디자인_8_보라색 텐트와 배너로 구성된 행사 홍보 부스 전면 뷰, 통일된 색상으로 브랜딩된 VMD 공간 연출',
      },
      {
        url: '/images/solutions/design/vmd-3d/solution-vmd-3d-9.png',
        alt: '4_VMD 디자인_9_전문 시공팀이 전시 부스를 설치 중인 모습, 배너 고정과 구조물 조립 과정',
      },
    ],
  },
]

export const SolutionVmd3dTemplate = () => {
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
          solutionId={GetSolutionExpertListParamsTypeEnumType.VMD_3D}
        />
      </Box>

      <Box py="80px" w={'100%'} bg="primary.1">
        <SolutionMoreInfoSection
          type={GetRelatedSolutionParamsTypeEnumTypeOptions.VMD_3D}
        />
      </Box>
      <SolutionConnectExportBottomBar stickyRef={stickyRef} />
    </VStack>
  )
}
