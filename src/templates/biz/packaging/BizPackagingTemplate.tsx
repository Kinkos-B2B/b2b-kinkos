'use client'

import { useEffect, useState } from 'react'

import { Box, VStack } from '@chakra-ui/react'

import { LAYOUT } from '@/constants/layout'
import { ROUTES } from '@/constants/routes'

import { BizDescriptionWithBannerListSection } from '../common-section-layout/BizDescriptionWithBannerListSection'
import { BizDescriptionWithBannerSection } from '../common-section-layout/BizDescriptionWithBannerSection'
import { BizHeroSection } from '../common-section-layout/BizHeroSection'
import { BizMoreInfoSection } from '../common-section-layout/BizMoreInfoSection'
import { BizOrderedDescriptionSection } from '../common-section-layout/BizOrderedDescriptionSection'
import { BizViedoSection } from '../common-section-layout/BizYoutubeSection'
import { BizDescriptionBanner } from '../common-section-layout/components/BizDescriptionBanner'
import {
  BizDescriptionBannerData,
  BizDescriptionItem,
  BizDescriptionWithBannerProps,
  BizHeroSectionData,
  BizVideoSectionData,
} from '../types'

export const heroSectionMockData: BizHeroSectionData = {
  badge: '포장 & 배송',
  title: '맞춤형 포장으로,\n원하는 순간까지 완벽히 전달합니다.',
  description:
    '인쇄물 제작에서 끝나지 않고,\n고객의 손에 닿는 마지막 순간까지 안전하게 전달되도록 책임집니다.',
  images: [
    {
      url: '/images/biz/packaging/biz-packaging-1.png',
      alt: '2_포장배송_2_킨코스 직원이 로고가 새겨진 텀블러를 개별 박스에 포장하고 있는 장면, 맞춤형 패키징을 통한 안전한 납품 준비 과정',
    },
    {
      url: '/images/biz/packaging/biz-packaging-2.png',
      alt: '2_포장배송_1_킨코스 로고가 인쇄된 골판지 박스가 쌓여 있는 모습, 인쇄물 전용 포장 자재를 준비하는 킨코스 포장 공정 현장',
    },
    {
      url: '/images/biz/packaging/biz-packaging-3.png',
      alt: '2_포장배송_3_킨코스 로고가 부착된 배송 차량이 도심 도로를 주행 중인 모습, 전국 매장과 행사장으로 인쇄물을 직접 배송하는 장면',
    },
  ],
}

export const bizDescriptionBannerMockData: BizDescriptionBannerData = {
  title: '각 지점·매장별로 다른\n포장과 배송이 가능할까요?',
  badgeText: '매장별 맞춤형 패키징 & 분할 배송 서비스',
  description:
    '킨코스는 고객사의 전국 매장별 소분과 라벨링을 거쳐 안전하게 포장하며,\n현장에서 바로 활용할 수 있도록 제공합니다.',
}

const descriptionItemMockData1: BizDescriptionItem = {
  title: '제품 특성에 따른 맞춤 포장',
  description: '포스터, 포맥스 등 제품 특성에 따른 맞춤 포장을 제공합니다.',
  images: [
    {
      url: '/images/biz/packaging/biz-packaging-4.png',
      alt: '2_포장배송_4_버블랩으로 보호 포장된 POP와 인쇄물이 포장대 위에 놓여 있는 모습, 파손 방지를 위한 완충 포장 과정',
    },
    {
      url: '/images/biz/packaging/biz-packaging-5.png',
      alt: '2_포장배송_5_배너, 포스터 등 롤형 인쇄물이 개별 비닐 포장된 상태로 정리된 모습, 매장별 납품을 위한 분할 포장 과정',
    },
    {
      url: '/images/biz/packaging/biz-packaging-6.png',
      alt: '2_포장배송_6_킨코스 직원이 인쇄물을 분류하고 봉투에 담는 장면, 세트 단위 패키징 및 캠페인 물류 준비 과정',
    },
  ],
  infos: [
    {
      name: '맞춤 포장 제공',
      description:
        '지류 포스터, 윈도우 시트지, 포맥스 등 각기 다른 제작물들의 특성에 맞춘 맞춤 포장을 제공합니다.',
    },
  ],
}

const descriptionItemMockData2: BizDescriptionItem = {
  title: '분할 배송 서비스',
  description: '전국 각 지점에 위치한 매장으로 개별 분할 배송을 드립니다.',
  images: [
    {
      url: '/images/biz/packaging/biz-packaging-7.png',
      alt: '2_포장배송_7_엘리베이터 안에 세로로 세워진 대형 판넬 박스와 납품 박스들이 적재된 모습, 물류 출하 직전 단계의 배송 준비 장면',
    },
    {
      url: '/images/biz/packaging/biz-packaging-8.png',
      alt: '2_포장배송_8_킨코스 물류 구역 내 운반 카트와 적재된 박스 더미, 배송 전 분류 및 이동을 위한 준비 공간',
    },
    {
      url: '/images/biz/packaging/biz-packaging-9.png',
      alt: '2_포장배송_9_킨코스 직원이 로고가 인쇄된 박스를 들고 배송 차량 쪽으로 이동하는 장면, 고객사로 직접 납품하는 마지막 단계',
    },
  ],
  infos: [
    {
      name: '개별 분할 배송',
      description:
        '전국에 위치한 각 매장, 지점으로 배송받아 바로 물품을 사용할 수 있게끔 제공합니다.',
    },
  ],
}

const descriptionItemMockData3: BizDescriptionItem = {
  title: '안전한 보호 포장',
  description:
    '파손·습기·이동 중 충격에 대비해 안전하게 포장하여 배송드립니다.',
  images: [
    {
      url: '/images/biz/packaging/biz-packaging-10.png',
      alt: '2_포장배송_10_킨코스 포장 구역 내 버블랩과 스트레치 필름이 걸려 있는 포장 자재대, 보호 포장을 위한 자재 관리 시스템',
    },
    {
      url: '/images/biz/packaging/biz-packaging-11.png',
      alt: '2_포장배송_11_킨코스 직원들이 대형 간판 인쇄물을 버블랩으로 감싸며 테이핑 작업을 진행하는 모습, 파손 방지를 위한 보호 포장 과정',
    },
    {
      url: '/images/biz/packaging/biz-packaging-12.png',
      alt: '2_포장배송_12_주황색 완충 포장재가 정리된 박스, 소형 인쇄물과 굿즈 포장을 위한 맞춤형 보호 자재 준비 모습',
    },
  ],
  infos: [
    {
      name: '파손 예방',
      description:
        '충격에 약한 폼보드 등의 제작물은 파손을 방지하는 포장 방법을 사용합니다.',
    },
  ],
}

export const bizDescriptionMockData = [
  descriptionItemMockData1,
  descriptionItemMockData2,
  descriptionItemMockData3,
]

export const bizVideoSectionMockData: BizVideoSectionData = {
  title: '킨코스 포장 & 배송 센터를\n직접 방문해 보고 싶으신가요?',
  description:
    '상담 신청 시 센터 관람을 요청하시면 전체 포장 & 배송 과정을 투명하게 보여 드립니다.',
  buttonText: '센터 관람 요청',
  moreInfoButtonText: '관련 콘텐츠 보러가기',
  thumbnailUrl: [
    {
      url: '/images/biz/packaging/biz-packaging-13.png',
      alt: '2_포장배송_13_킨코스 물류 창고 내부, 팔레트 위에 포장된 납품 박스들이 정렬되어 있는 모습, 전국 배송을 위한 출고 대기 구역',
    },
  ],
  moreInfoLink: {
    url: ROUTES.SOLUTIONS.PRODUCTION.LOGISTICS,
    target: '_self',
  },
}

export const bizDescriptionWithBannerMockData: BizDescriptionWithBannerProps[] =
  [
    {
      banner: {
        title: '쇼카드·POP 등 다양한 판촉물을\n묶음으로 받아볼 수 있을까요?',
        badgeText: '세트 단위 패키징 & 일괄 납품',
        description:
          '캠페인·프로모션 진행 시 필요한 홍보물을 세트 단위로 구성하여,\n현장에서 바로 활용할 수 있도록 일괄 패키징 후 납품합니다.',
      },
      descriptionItem: {
        title: '효율적인 판촉물 패키징 관리',
        images: [
          {
            url: '/images/biz/packaging/biz-packaging-14.png',
            alt: '2_포장배송_14_투명 비닐로 개별 포장된 소형 인쇄물 세트가 포장대 위에 놓여 있는 모습, 세트 단위 납품을 위한 세밀한 포장 과정',
          },
          {
            url: '/images/biz/packaging/biz-packaging-15.png',
            alt: '2_포장배송_15_킨코스 로고가 인쇄된 소형 진열대 POP 샘플, 완성된 제작물이 납품 전 품질 검수 중인 모습',
          },
          {
            url: '/images/biz/packaging/biz-packaging-16.png',
            alt: '2_포장배송_16_제작 완료된 명함 및 쇼카드를 개별 포장해 배송 준비 중인 모습',
          },
        ],
        infos: [
          {
            name: '세트 단위 패키징',
            description:
              '쇼카드, POP, 배너 등 판촉물 구성품을 매장 단위로 묶음 포장합니다.',
          },
          {
            name: '프로모션 키트 제작',
            description:
              '본사 지침에 맞춰 키트를 구성하여 현장에서 바로 활용할 수 있도록 지원합니다.',
          },
          {
            name: '효율적 물류 관리',
            description: '중복이나 누락 없이 정확히 관리하여 납품합니다.',
          },
        ],
        pdfLinkButton: {
          text: '킨코스가 제공하는 배송/설치 관련 고민 해결 방법을 확인하시려면 오른쪽 버튼을 클릭해주세요.',
          link: ROUTES.PROBLEM + '?tab=DELIVERY_INSTALLATION#post-list',
        },
      },
    },
    {
      banner: {
        title: '원하는 일정과 현장 상황에 맞춰\n정확히 배송받을 수 있을까요?',
        badgeText: '시간·장소 맞춤형 전국 배송망',
        description:
          '킨코스는 수도권과 주요 거점을 중심으로 신속한 물류망을 운영하며,\n긴급 프로젝트에도 신속히 대응합니다.',
      },
      descriptionItem: {
        title: '맞춤형 배송 솔루션',
        images: [
          {
            url: '/images/biz/packaging/biz-packaging-17.png',
            alt: '2_포장배송_16_킨코스에서 제작한 행사 안내 스탠드를 전시장 입구에 설치하고 있는 장면, 납품 후 현장 설치 지원 예시',
          },
          {
            url: '/images/biz/packaging/biz-packaging-18.png',
            alt: '2_포장배송_17_킨코스 직원들이 전시회 부스에 배너와 POP를 설치 중인 모습, 제작물 배송 후 현장 세팅까지 진행하는 모습',
          },
          {
            url: '/images/biz/packaging/biz-packaging-19.png',
            alt: '2_포장배송_19_도심 거점 물류망을 활용해 고객이 수령을 희망하는 곳으로 빠르게 배송 중인 킨코스 물류 배송 차량의 모습',
          },
        ],
        infos: [
          {
            name: '납기 맞춤 배송',
            description:
              '납기가 중요한 행사 일정, 오픈 일정에 맞추어 배송합니다.',
          },
          {
            name: '특수 현장 대응',
            description:
              '물류센터, 행사장, 매장 등 다양한 현장에 직접 배송합니다.',
          },
          {
            name: '도심 거점 물류망',
            description:
              '서울 및 수도권, 부산 등 도심 거점 센터를 활용하여 신속히 납품합니다.',
          },
        ],
      },
    },
  ]

export const BizPackagingTemplate = () => {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY
      console.log('Scroll position:', scrollTop) // 디버깅용
      setIsScrolled(scrollTop > 0)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <VStack gap={'0px'} position={'relative'}>
      <VStack w={'100%'} position={'sticky'} top={`${LAYOUT.HEADER.HEIGHT}`}>
        <BizHeroSection {...heroSectionMockData} />
        <Box
          position={'absolute'}
          top={`-${LAYOUT.HEADER.HEIGHT}`}
          left={'0'}
          right={'0'}
          bottom={'0'}
          bg={'greytransparent.4'}
          zIndex={'1'}
          opacity={isScrolled ? 1 : 0}
          transition={'opacity 0.3s ease-in-out'}
          pointerEvents={isScrolled ? 'auto' : 'none'}
        ></Box>
      </VStack>

      <VStack
        gap={'0px'}
        zIndex={'sticky'}
        bg={'white'}
        w={'100%'}
        pt={{ lg: '160px', sm: '140px', base: '100px' }}
      >
        <BizDescriptionBanner
          title={bizDescriptionBannerMockData.title}
          badgeText={bizDescriptionBannerMockData.badgeText}
          description={bizDescriptionBannerMockData.description}
        />
        <BizOrderedDescriptionSection data={bizDescriptionMockData} />
        <BizViedoSection data={bizVideoSectionMockData} />
        <BizDescriptionWithBannerListSection
          data={bizDescriptionWithBannerMockData}
        />
        <BizMoreInfoSection
          onSolutionClick={() => console.log('솔루션 클릭')}
          onReviewClick={() => console.log('고객후기 클릭')}
          onProblemClick={() => console.log('고민해결 클릭')}
          onExpertClick={() => console.log('전문가 클릭')}
        />
      </VStack>
    </VStack>
  )
}
