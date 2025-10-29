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
  badge: 'EX감성 분석',
  title: (
    <VStack
      textAlign={'center'}
      textStyle={'pre-display-3'}
      gap={'0px'}
      px={'20px'}
    >
      <Text color={'primary.4'}>우리 디자인, 소비자가 진짜로 보고 있나요?</Text>
      <Text>예쁜 디자인이 전달력 높은 디자인일까요? </Text>
    </VStack>
  ),
  heroContent: (
    <>
      <Text textStyle={'pre-display-3'} color={'grey.0'}>
        {
          '“이번 신제품은 제품명이 핵심인데, 잘 보일려나?“\n “경쟁사와는 확실한 차별점이 있어야 할텐데…”'
        }
      </Text>
      <Text textStyle={'pre-heading-3'} color={'grey.0'} as={'span'}>
        <Text as={'span'}>킨코스 </Text>
        <Text as={'span'} color={'secondary.3'}>
          {"'EX감성 분석'"}
        </Text>
        <Text as={'span'}>
          이 그 답을 데이터로 보여드립니다. <br />
          AI가 소비자의 시선이 어디에 머무는지, 어떤 감정을 느끼는지 대신 분석해
          드립니다.
          <br />
          이제 추측이 아닌, 과학적인 데이터로 사람들의 마음을 사로잡는 디자인을
          만드세요!
        </Text>
      </Text>
    </>
  ),
  buttonContent: '지금 전문가 연결하기',
  link: '/solutions/online-order/corporate-printing',
  image: {
    url: '/images/solutions/video-ai/emotion-analysis/solution-ex-1.png',
    alt: '11_EX감성 분석_1_소비자가 진열대에서 가장 눈에 띄는 상품 패키지를 고르는 장면, EX감성 분석을 통한 패키지 디자인의 주목성 측정 예시',
  },
}

const cardsMockData = {
  title: (
    <Text textStyle={'pre-display-4'} textAlign={'center'}>
      <Text as={'span'}>더 이상 정답 없는 디자인 고민은 끝! </Text>
      <br />
      <Text as={'span'}>
        <Text textStyle={'pre-display-4'} color={'primary.4'} as={'span'}>
          킨코스 EX감성 분석 솔루션
        </Text>
        <Text as={'span'}>이 필요한 이유</Text>
      </Text>
    </Text>
  ),
  cards: [
    {
      title: '메시지 전달력 강화',
      description:
        '상품과 프로모션을 가장 효과적으로 전달할 수 있도록, 소비자의 시선이 어디에 머무는지 정확한 데이터로 보여드립니다.',
    },
    {
      title: '이기는 디자인',
      description:
        '경쟁 제품과의 객관적인 비교 분석을 바탕으로, 효과적인 디자인 개선 방향을 안내해드립니다.',
    },
    {
      title: '소비자 시선 선점',
      description:
        '매대 POP나 포스터에 대한 시선 데이터를 기반으로, 가장 효과적인 홍보물 배치 방법을 제안합니다.',
    },
    {
      title: '이해하기 쉬운 보고서',
      description:
        '광고 성과의 이유를 추측하지 마세요. 클릭을 유도한 시선 데이터를 분석하여 디자인 개선을 위한 핵심 인사이트를 제공합니다.',
    },
  ],
}

const featureData: FeatureItem[] = [
  {
    title: '상품/프로모션이 눈에 들어와요',
    type: 'description',
    description:
      '소비자의 시선이 머무는 위치를 데이터로 분석해, 제품이나 프로모션 문구가 가장 잘 보이는 디자인을 제안합니다.',

    descriptionData: [
      '우리가 가장 중요하게 생각하는 상품명이나 프로모션 문구가 소비자 눈에 먼저 들어오는지 확인해요.',
      '음식 이미지가 식욕을 자극하는지, 제품 사진 속 조명, 질감이 신선하게 전달되는지 알 수 있어요.',
      '프로모션 문구나 가격 표시가 지나치게 작거나 복잡하지 않은지도 점검해 한눈에 이해되게 만들어드려요.',
    ],
    imageData: [
      {
        url: '/images/solutions/video-ai/emotion-analysis/solution-ex-2.png',
        alt: '11_EX감성 분석_2_EX감성으로 분석한 초코칩 패키지 디자인 A·B·C 시안별 시선 주목도 비교 결과, 제품명과 용량 표기의 주목 비율 시각화 예시',
      },
      {
        url: '/images/solutions/video-ai/emotion-analysis/solution-ex-3.png',
        alt: '11_EX감성 분석_3_식음료 매장 포스터의 할인 이벤트 영역별 시선 주목도 분석 화면, 각 문구의 시각적 전달력을 수치화한 예시',
      },
      {
        url: '/images/solutions/video-ai/emotion-analysis/solution-ex-4.png',
        alt: '11_EX감성 분석_4_도시락 프로모션 이미지의 시선 집중 지점 분석 결과, 제품 사진과 문구별 체류시간을 표시한 시선 이동 경로 예시',
      },
    ],
  },
  {
    title: "'우리다움’을 찾아주는 패키지 디자인",
    description:
      '브랜드의 감성과 결을 잃지 않으면서도, 경쟁 제품 속에서 확실히 눈에 띄는 디자인을 찾아드립니다.',

    type: 'description',
    descriptionData: [
      '우리 브랜드의 색감과 톤이 어떤 인상을 주는지, 신제품 패키지에서도 일관되게 전달되는지 확인해요.',
      '수많은 경쟁사 제품 속에서도 ‘우리 브랜드답다’는 차별 포인트를 찾아, 소비자에게 자연스럽게 각인시켜요.',
      '패키지의 배경 대비, 글자 크기, 문구 위치 등을 검증해 누구나 편안하게 읽을 수 있는 구조로 다듬어요.',
    ],

    imageData: [
      {
        url: '/images/solutions/video-ai/emotion-analysis/solution-ex-5.png',
        alt: '11_EX감성 분석_5_비타민 영양제 패키지 디자인 개선 전후 시선 주목도 비교 결과, 제품명과 설명 영역의 전달력 향상 효과를 시각화한 예시',
      },
      {
        url: '/images/solutions/video-ai/emotion-analysis/solution-ex-6.png',
        alt: '11_EX감성 분석_6_경쟁 제품 대비 디자인 요소와 색상 포지셔닝을 분석한 그래프, EX감성을 활용한 브랜드 아이덴티티 일관성 분석 예시',
      },
    ],
  },
  {
    title: '가장 눈에 띄는 자리를 찾아드려요',
    type: 'description',
    description:
      '소비자가 매대 앞을 지나칠 때, 매장에 들어설 때 등 다양한 상황에서 어디를 가장 먼저 보는지 분석해 홍보물이 가장 잘 보이는 자리를 찾아드립니다.',
    descriptionData: [
      '매대 POP, 쇼카드, 포스터의 시선 흐름을 분석해, 시선 유도에 유리한 위치를 도출해요.',
      '주류·음료·편의점 진열대 환경을 반영해, 신제품이 가장 눈에 띄는 비주얼 구성을 제안해요.',
      '복잡한 상품 정보 속에서도 브랜드 로고와 핵심 문구가 빠르게 인식되도록 시선 동선을 설계해요.',
    ],
    imageData: [
      {
        url: '/images/solutions/video-ai/emotion-analysis/solution-ex-7.png',
        alt: '11_EX감성 분석_7_편의점 외부 매장 전면에 설치된 여러 프로모션 포스터, EX감성 분석을 통한 시선 유입 위치 확인 예시',
      },
      {
        url: '/images/solutions/video-ai/emotion-analysis/solution-ex-8.png',
        alt: '11_EX감성 분석_8_EX감성 분석으로 제안된 X배너, 포스터 등 POSM 설치 위치 표시 화면, 시선 유도 효과가 높은 구좌 추천 예시',
      },
    ],
  },

  {
    title: '알기 쉬운 광고 성과 예측/분석',
    type: 'description',
    description:
      '소재 성과가 좋았던 이유, 감으로 추측하지 마세요. 디자인을 잘 몰라도, 누구나 이해하기 쉬운 맞춤형 보고서로 쉽게 분석할 수 있습니다.',

    descriptionData: [
      '배너·SNS 광고에서 소비자가 먼저 본 문구와 이미지의 순서를 시선 데이터로 분석해요.',
      '클릭을 유발한 ‘결정적 시선 포인트’를 찾아내, 다음 마케팅 전략에 반영할 수 있게 도와드려요.',
      '복잡한 분석 과정 없이, 보기 쉽게 정리된 맞춤형 리포트를 통해 클라이언트나 내부 회의에서 설득하기 좋은 자료로 제공드려요.',
    ],

    imageData: [
      {
        url: '/images/solutions/video-ai/emotion-analysis/solution-ex-9.png',
        alt: '11_EX감성 분석_9_다양한 온라인 광고 이미지 중 시선 주목도가 가장 높은 소재를 식별한 결과 화면, 디지털 광고 효율 예측 예시',
      },
      {
        url: '/images/solutions/video-ai/emotion-analysis/solution-ex-10.png',
        alt: '11_EX감성 분석_10_퍼포먼스 광고 소재 CTA 버튼 개선 전후의 시선 주목도 비교 결과, 클릭 유도 문구의 시각 전달력 향상 분석 예시',
      },
    ],
  },
]

export const SolutionEmotionAnalysisTemplate = () => {
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
            GetSolutionExpertListParamsTypeEnumType.EX_SENSITIVITY_ANALYSIS
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
