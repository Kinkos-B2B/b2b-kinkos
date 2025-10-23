'use client'

import { useEffect, useState } from 'react'

import { Box, VStack } from '@chakra-ui/react'

import { LAYOUT } from '@/constants/layout'
import { ROUTES } from '@/constants/routes'

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
  badge: '센터 네트워크',
  title: '도심 주요 거점 네트워크로,\n더 가까이 더 편리하게 지원합니다.',
  description:
    '서울과 부산을 비롯한 주요 거점 센터를 통해 고객사 가까이에서 서비스를 제공하며,\n고객이 언제 어디서든 편리하게 서비스를 이용할 수 있도록 지원합니다.',
  images: [
    '/images/biz/hero/biz-hero-intro-1.jpg',
    '/images/biz/hero/biz-hero-intro-2.jpg',
    '/images/biz/hero/biz-hero-intro-3.jpg',
  ],
}

export const bizDescriptionBannerMockData: BizDescriptionBannerData = {
  title: '본사와 지점이 동시에\n킨코스를 이용할 수 있을까요?',
  badgeText: '20여 개 센터, 기업 전용 네트워크 지원',
  description:
    '본사와 지점이 동시에 동일한 서비스 품질을 누릴 수 있도록,\n기업 전용 네트워크 체계를 통해 대규모 프로젝트도 안정적으로 지원합니다.',
}

const descriptionItemMockData1: BizDescriptionItem = {
  title: '다수 거점 운영',
  description:
    '서울 및 수도권 주요 지역과 부산 센터를 포함한 20여 개 센터를 운영합니다.',
  images: [
    '/images/biz/it-security/it-security-1.png',
    '/images/biz/it-security/it-security-2.png',
    '/images/biz/it-security/it-security-3.png',
  ],
  infos: [
    {
      name: '전국 주요 거점 센터',
      description: '전국 주요 거점을 통해 고객의 비즈니스를 빠르게 지원합니다.',
    },
    {
      name: '생산공장 및 서포트 센터',
      description:
        '대량 출력 및 특수 제작을 위한 별도의 생산공장과 서포트 센터를 통해 효율적으로 지원합니다.',
    },
  ],
}

const descriptionItemMockData2: BizDescriptionItem = {
  title: '24시간 대응 센터',
  description:
    '24시간 운영되는 일부 센터를 통해 심야 및 주말 등 긴급 상황에도 신속 대응이 가능합니다.',
  images: [
    '/images/biz/it-security/it-security-1.png',
    '/images/biz/it-security/it-security-2.png',
    '/images/biz/it-security/it-security-3.png',
  ],
  infos: [
    {
      name: '24시간 대응 센터',
      description:
        '킨코스는 갑자기 발생한 긴급 요청에도 빠른 지원이 가능합니다.',
    },
  ],
}

const descriptionItemMockData3: BizDescriptionItem = {
  title: '대규모 프로젝트 대응',
  description: '대량 제작 및 전국 배포 프로젝트 지원이 가능합니다.',
  images: [
    '/images/biz/it-security/it-security-1.png',
    '/images/biz/it-security/it-security-2.png',
    '/images/biz/it-security/it-security-3.png',
  ],
  infos: [
    {
      name: '전국 배송망 구축',
      description:
        '전국 센터를 거점으로 한 물류 배송망 구축을 통해 원활한 대규모 프로젝트 대응이 가능합니다.',
    },
  ],
}

export const bizDescriptionMockData = [
  descriptionItemMockData1,
  descriptionItemMockData2,
  descriptionItemMockData3,
]

export const bizVideoSectionMockData: BizVideoSectionData = {
  title:
    '주말에 발생한 긴급 행사 물품,\n빠르게 제작해드리는 생산 공장 관람을\n희망하시나요?',
  description: '사전 예약을 통해 전체 제작 과정을 투명하게 보여드립니다.',
  buttonText: '가산 생산 공장 관람',
  buttonLink: 'https://www.pluuug.com/form/gmD1ac03mB',
}

export const bizDescriptionWithBannerMockData: BizDescriptionWithBannerProps[] =
  [
    {
      banner: {
        title: '직원들이 각자 가까운 센터에서\n자유롭게 이용할 수 있을까요?',
        badgeText: '임직원 누구나 활용 가능한 편의 서비스',
        description:
          '기업 임직원이 가까운 센터를 자유롭게 활용할 수 있도록\n편리한 서비스 환경을 마련하고 있습니다.',
      },
      descriptionItem: {
        title: '편리한 센터 이용',
        images: [
          '/images/biz/it-security/it-security-1.png',
          '/images/biz/it-security/it-security-2.png',
          '/images/biz/it-security/it-security-3.png',
        ],
        infos: [
          {
            name: '가까운 센터 활용',
            description:
              '직원들이 가까운 센터를 직접 방문하여 출력·제작을 의뢰할 수 있습니다.',
          },
          {
            name: '일관된 품질 보장',
            description:
              '어떤 센터를 이용하더라도 동일한 절차와 품질을 보장합니다.',
          },
          {
            name: '손쉬운 접근성',
            description:
              '온라인 발주 후 센터 방문 픽업까지 원스톱으로 이용할 수 있습니다.',
          },
        ],
      },
    },
    {
      banner: {
        title: '전국 단위 프로젝트도\n문제없이 진행할 수 있을까요?',
        badgeText: '동시 대응 가능한 광역 네트워크',
        description:
          '킨코스는 수도권과 부산 거점을 기반으로,\n기업 고객의 전국 단위 프로젝트도 차질 없이 진행하며 현장 납품까지 원스톱으로 지원합니다.',
      },
      descriptionItem: {
        title: '전국 동시 대응',
        images: [
          '/images/biz/it-security/it-security-1.png',
          '/images/biz/it-security/it-security-2.png',
          '/images/biz/it-security/it-security-3.png',
        ],
        infos: [
          {
            name: '전국 프로젝트 대응',
            description:
              '수도권과 지방 거점이 협력하여 전국 단위 프로젝트를 동시 진행합니다.',
          },
          {
            name: '현장 맞춤 대응',
            description:
              '행사장·매장 등 프로젝트 현장에 직접 배송을 지원합니다.',
          },
          {
            name: '안정적 물류 연계',
            description:
              '각 센터와 배송망이 유기적으로 연결되어 안정적인 납품을 보장합니다.',
          },
        ],
      },
    },
  ]

export const BizCenterNetworkTemplate = () => {
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
        pt={'160px'}
      >
        <BizDescriptionBanner
          title={bizDescriptionBannerMockData.title}
          badgeText={bizDescriptionBannerMockData.badgeText}
          description={bizDescriptionBannerMockData.description}
        />
        <BizOrderedDescriptionSection data={bizDescriptionMockData} />
        <BizViedoSection data={bizVideoSectionMockData} />
        <VStack py={'160px'} gap={'160px'} w={'100%'}>
          {bizDescriptionWithBannerMockData.map((item, index) => (
            <BizDescriptionWithBannerSection
              key={index}
              banner={item.banner}
              descriptionItem={item.descriptionItem}
            />
          ))}
        </VStack>

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
