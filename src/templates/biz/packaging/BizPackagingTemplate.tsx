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
  badge: '포장&배송',
  title: '맞춤형 포장으로,\n원하는 순간까지 완벽히 전달합니다.',
  description:
    '인쇄물 제작에서 끝나지 않고,\n고객의 손에 닿는 마지막 순간까지 안전하게 전달되도록 책임집니다.',
  images: [
    '/images/biz/hero/biz-hero-intro-1.jpg',
    '/images/biz/hero/biz-hero-intro-2.jpg',
    '/images/biz/hero/biz-hero-intro-3.jpg',
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
    '/images/biz/packaging/packaging-1.png',
    '/images/biz/packaging/packaging-2.png',
    '/images/biz/packaging/packaging-3.png',
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
    '/images/biz/packaging/packaging-1.png',
    '/images/biz/packaging/packaging-2.png',
    '/images/biz/packaging/packaging-3.png',
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
    '/images/biz/packaging/packaging-1.png',
    '/images/biz/packaging/packaging-2.png',
    '/images/biz/packaging/packaging-3.png',
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
          '/images/biz/packaging/packaging-1.png',
          '/images/biz/packaging/packaging-2.png',
          '/images/biz/packaging/packaging-3.png',
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
          '/images/biz/packaging/packaging-1.png',
          '/images/biz/packaging/packaging-2.png',
          '/images/biz/packaging/packaging-3.png',
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
