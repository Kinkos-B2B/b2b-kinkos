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
  badge: '시즌성 인쇄물 제작관리',
  title: (
    <VStack
      textAlign={'center'}
      textStyle={'pre-display-3'}
      gap={'0px'}
      px={'20px'}
    >
      <Text color={'primary.4'}>매년 똑같은 다이어리,캘린더</Text>
      <Text>올해는 다르게 만들고 싶나요?</Text>
    </VStack>
  ),
  heroContent: (
    <>
      <Text textStyle={'pre-display-3'} color={'grey.0'}>
        {
          '"어떤 디자인이 우리 브랜드를 잘 보여줄까?“\n "수량이 적은데 제작이 가능할까?"'
        }
      </Text>
      <Text textStyle={'pre-heading-3'} color={'grey.0'} as={'span'}>
        {
          '매년 반복되는 다이어리, 캘린더를 넘어, 올해는 우리 회사만의 특별한 가치를 선물합니다.\n받는 사람 모두의 마음에 오래도록 기억될 진솔한 스토리를 담아 완성합니다.'
        }
      </Text>
    </>
  ),
  buttonContent: '지금 전문가 연결하기',
  link: '/solutions/online-order/corporate-printing',
  image: {
    url: '/images/solutions/production/seasonal-printing/solution-seasonal-printing-1.png',
    alt: '6_시즌성 인쇄물 제작관리_1_킨코스 로고가 인쇄된 파우치와 다이어리, 캘린더, 펜 세트 구성, 기업용 시즌 선물 키트 예시',
  },
}

const cardsMockData = {
  title: (
    <Text textStyle={'pre-display-4'} textAlign={'center'}>
      <Text as={'span'}>고민은 끝!</Text>
      <br />

      <Text as={'span'}>
        <Text textStyle={'pre-display-4'} color={'primary.4'} as={'span'}>
          킨코스 시즌성 인쇄물 제작관리 솔루션
        </Text>
        <Text as={'span'}>이 필요한 이유</Text>
      </Text>
    </Text>
  ),
  cards: [
    {
      title: '아이디어 고민 끝',
      description:
        '국내외 성공 사례를 바탕으로 브랜드 가치를 높일 최적의 아이디어를 제안해 드립니다.',
    },
    {
      title: '최고의 브랜딩 효과',
      description:
        '기획부터 구성품 하나까지 브랜드 아이덴티티에 맞춰 고민하고 제작합니다.',
    },
    {
      title: '수량, 예산 걱정 끝',
      description:
        '10권부터 대량제작까지 원하는 수량과 예산에 맞춰 최적의 솔루션을 제안해 드립니다.',
    },
    {
      title: '확인만 하면 끝',
      description:
        '아이디어 기획, 디자인, 제작 방식 선택 등 복잡한 과정은 킨코스가 해결합니다.',
    },
  ],
}

const featureData: FeatureItem[] = [
  {
    title: '회사와 직원을 위한 디자인',
    type: 'description',
    description:
      '최신 트렌드를 넘어, 직원들이 먼저 애정을 갖는 디자인을 기획합니다. 직원들의 만족도와 자부심이 될 결과물은 가장 강력한 브랜딩 자산이 됩니다.',

    descriptionData: [
      '회사의 가치를 트렌디한 디자인에 담아, 감각적인 데스크테리어 소품이 되는 다이어리와 캘린더를 만듭니다.',
      '업무 효율을 높이는 실용성은 물론, 책상을 꾸미는 즐거움까지 더해 매일 펼쳐보고 싶은 다이어리와 캘린더로 디자인합니다.',
      '직원들의 책상 위를 빛내는 다이어리와 캘린더는 소속감과 자부심을 높여, 기업의 가치를 알리는 가장 효과적인 브랜딩이 됩니다.',
    ],
    imageData: [
      {
        url: '/images/solutions/production/seasonal-printing/solution-seasonal-printing-2.png',
        alt: '6_시즌성 인쇄물 제작관리_2_오렌지와 블루 컬러의 킨코스 다이어리 표지 디자인, 브랜드 아이덴티티를 반영한 맞춤형 인쇄물 예시',
      },
      {
        url: '/images/solutions/production/seasonal-printing/solution-seasonal-printing-3.png',
        alt: '6_시즌성 인쇄물 제작관리_3_화이트 데스크 위 다이어리와 탁상 캘린더 세트, 오피스 데스크테리어용 시즌 인쇄물 구성 예시',
      },
    ],
  },
  {
    title: '보는 그대로, 만져보고 결정',
    description:
      '"시안과 똑같을까?", "처음 시도하는 제작이라 불안한데..." 와 같은 고민을 해결하기 위해, 직접 만져보고 결정하도록 제작 샘플을 제공합니다.',

    type: 'description',
    descriptionData: [
      '화면으로만 보던 내지 디자인의 인쇄 색감, 종이의 질감과 두께를 샘플로 직접 만져보며 꼼꼼하게 확인하세요.',
      '결과 예측이 어려운 새로운 커스텀 제작은, 실물 샘플로 퀄리티를 먼저 검증하고 안전하게 진행하세요.',
      '실제 펜으로 필기감을 테스트하거나 제본 상태를 점검하는 등, 최종 사용자의 실용성까지 미리 확인하고 개선할 수 있어요.',
      '내부 보고나 최종 의사결정이 필요할 때, 관계자들에게 완성품을 직접 보여주며 가장 빠르고 정확하게 소통할 수 있어요.',
    ],

    imageData: [
      {
        url: '/images/solutions/production/seasonal-printing/solution-seasonal-printing-4.png',
        alt: '6_시즌성 인쇄물 제작관리_4_킨코스 브랜딩 디자인의 블루 다이어리와 캘린더 세트를 포장 중인 모습, 사내 증정용 제작 예시',
      },
      {
        url: '/images/solutions/production/seasonal-printing/solution-seasonal-printing-5.png',
        alt: '6_시즌성 인쇄물 제작관리_5_킨코스 다이어리에 필기 테스트를 하는 장면, 내지 품질과 필기감 검증을 위한 샘플 테스트 과정',
      },
    ],
  },
  {
    title: '일상에 가치를 더하는 구성',
    type: 'description',
    description:
      "예산과 목적에 맞춰 최적의 제작 방법을 제안합니다. 일상에 필요한 실용적인 아이템을 구성하여, '버려지지 않고 오래도록 쓰이는' 결과물을 만듭니다.",
    descriptionData: [
      '다이어리, 캘린더 외에 스티커, 메모지, 파우치 등 일상에서 계속 손이 가는 실용적인 아이템으로 추가 구성을 제안합니다.',
      '정해진 예산 안에서 최대의 효과를 낼 수 있도록 다양한 재질, 후가공, 제본 방식을 가장 효율적으로 맞춤 조합합니다.',
      '1년 내내 책상 위에서, 가방 속에서 자연스럽게 브랜드를 노출하는 가장 효과적인 마케팅 도구가 되도록 설계합니다.',
    ],
    imageData: [
      {
        url: '/images/solutions/production/seasonal-printing/solution-seasonal-printing-6.png',
        alt: '6_시즌성 인쇄물 제작관리_6_킨코스의 펜, 파일, 메모지 등 사무용 인쇄물 세트, 실용성과 디자인을 결합한 구성 예시',
      },
      {
        url: '/images/solutions/production/seasonal-printing/solution-seasonal-printing-7.png',
        alt: '6_시즌성 인쇄물 제작관리_7_킨코스 로고가 인쇄된 캘린더와 노트, 패키지 박스 구성, 미니멀한 디자인의 시즌 기프트 세트 예시',
      },
    ],
  },

  {
    title: '끝까지 책임지는 제작과 배송',
    type: 'description',
    description:
      '숙련된 전문가가 인쇄부터 제본까지 전 과정을 직접 관리합니다. 제품 파손을 막는 안전한 포장 시스템으로 약속된 날짜와 장소에 정확히 납품합니다.',

    descriptionData: [
      '평균 10년 이상 경력의 인쇄/제작 전문가가 초기 상담부터 최종 납품까지 전 과정을 1:1로 직접 관리합니다.',
      '제품의 부피와 무게에 맞는 맞춤형 박스와 파손 방지 완충재를 사용하여, 단 한 개의 손상도 발생하지 않도록 안전하게 포장합니다.',
      '담당자님께서 직원들과 약속한 날짜에 맞춰 완벽하게 전달될 수 있도록, 전국 어디든 정확한 배송을 책임집니다.',
    ],

    imageData: [
      {
        url: '/images/solutions/production/seasonal-printing/solution-seasonal-printing-8.png',
        alt: '6_시즌성 인쇄물 제작관리_8_에어캡으로 안전하게 포장된 킨코스 다이어리 제품, 파손 방지를 위한 맞춤형 포장 시스템 예시',
      },
      {
        url: '/images/solutions/production/seasonal-printing/solution-seasonal-printing-9.png',
        alt: '6_시즌성 인쇄물 제작관리_9_킨코스 로고가 새겨진 택배 박스를 들고 있는 배송 직원, 전국 단위 안전 배송 서비스 예시',
      },
    ],
  },
]
export const SolutionSeasonalPrintingTemplate = () => {
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
          solutionId={GetSolutionExpertListParamsTypeEnumType.SEASONAL_PRINT}
        />
      </Box>

      <Box py="80px" w={'100%'} bg="primary.1">
        <SolutionMoreInfoSection linkCard={['SOLUTION', 'REVIEW', 'PROBLEM']} />
      </Box>
      <SolutionConnectExportBottomBar stickyRef={stickyRef} />
    </VStack>
  )
}
