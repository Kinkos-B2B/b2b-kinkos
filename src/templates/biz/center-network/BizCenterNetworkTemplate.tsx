'use client'

import { useEffect, useState } from 'react'

import { Box, VStack } from '@chakra-ui/react'

import { LAYOUT } from '@/constants/layout'
import { ROUTES } from '@/constants/routes'
import { GetRelatedBizParamsTypeEnumTypeOptions } from '@/helper/options'

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
    {
      url: '/images/biz/network/biz-network-1.png',
      alt: '5_센터네트워크_1_킨코스코리아 센터 외관 전경, 유리 건물 외벽에 킨코스 로고 간판이 설치된 모습',
    },
    {
      url: '/images/biz/network/biz-network-2.png',
      alt: '5_센터네트워크_2_킨코스 삼성센터 전면 전경, 주차장과 간판이 함께 보이는 매장 입구 모습',
    },
    {
      url: '/images/biz/network/biz-network-3.png',
      alt: '5_센터네트워크_3_킨코스코리아 전국 물류 네트워크 지도, 서울·경기·부산 거점을 중심으로 연결된 물류 동선 시각화 이미지',
    },
  ],
}

export const bizDescriptionBannerMockData: BizDescriptionBannerData = {
  title: '본사와 지점이 동시에\n킨코스를 이용할 수 있을까요?',
  badgeText: '전국 20여 개 센터, 기업 전용 네트워크 지원',
  description:
    '본사와 지점이 동시에 동일한 서비스 품질을 누릴 수 있도록,\n기업 전용 네트워크 체계를 통해 대규모 프로젝트도 안정적으로 지원합니다.',
}

const descriptionItemMockData1: BizDescriptionItem = {
  title: '다수 거점 운영',
  description:
    '서울 및 수도권 주요 지역과 부산 센터를 포함한 20여 개 센터를 운영합니다.',
  images: [
    {
      url: '/images/biz/network/biz-network-4.png',
      alt: '5_센터네트워크_4_킨코스 거점지 지원센터 외관, 파란색 간판이 부착된 인쇄 서비스 매장 모습',
    },
    {
      url: '/images/biz/network/biz-network-5.png',
      alt: '5_센터네트워크_5_킨코스 보안 제작 지원 센터 내부의 대형 디지털 인쇄 장비와 작업 공간 전경',
    },
    {
      url: '/images/biz/network/biz-network-6.png',
      alt: '5_센터네트워크_6_서울 도심 속 주요 오피스 밀집 구역에 위치한 킨코스 강남역센터 외관, 매장 입구 모습',
    },
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
    {
      url: '/images/biz/network/biz-network-7.png',
      alt: '5_센터네트워크_7_킨코스 센터 매장 내부 전경, 직원들이 고객 주문을 처리하고 인쇄 장비를 운영하는 모습',
    },
    {
      url: '/images/biz/network/biz-network-8.png',
      alt: '5_센터네트워크_8_킨코스 보안 제작 지원 센터 내부 전경, 다수의 인쇄 장비가 정렬된 생산 라인 환경',
    },
    {
      url: '/images/biz/network/biz-network-8-2.png',
      alt: '5_센터네트워크_9_킨코스 생산 센터 내부 전경, 24시간 주말에도 긴급 제작 요청건에 대응 가능한 생산 라인 환경',
    },
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
    {
      url: '/images/biz/network/biz-network-9.png',
      alt: '5_센터네트워크_9_킨코스 대형 실사 출력 장비가 설치된 제작 공간, 직원들이 출력물을 점검 중인 모습',
    },
    {
      url: '/images/biz/network/biz-network-10.png',
      alt: '5_센터네트워크_10_출고를 기다리는 완성 인쇄물 더미, 투명 보호 필름으로 포장된 상태의 인쇄물 적재 모습',
    },
    {
      url: '/images/biz/network/biz-network-11.png',
      alt: '5_센터네트워크_11_킨코스 물류 창고 내부 전경, 전국 각지 배송을 위해 출고 대기 중인 포장 박스들이 정리된 모습',
    },
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
    '전국 배포 프로젝트 지원이 가능한\n생산 공장을 방문해 보고 싶으신가요?',
  description:
    '상담 신청 시 공장 관람을 요청하시면 전체 제작 과정을 투명하게 보여 드립니다.​',
  buttonText: '생산 공장 관람 요청​',
  thumbnailUrl: [
    {
      url: '/images/biz/network/biz-network-12.png',
      alt: '5_센터네트워크_12_킨코스 생산센터 내 출력장비들이 가동되는 모습, 대형 실사물과 그래픽 출력 작업이 진행 중인 현장 영상',
    },
  ],
  moreInfoLink: {
    url: 'https://youtu.be/9_cNmJAsfME?si=065afGog8MR944L2',
    target: '_blank',
  },
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
          {
            url: '/images/biz/network/biz-network-13.png',
            alt: '5_센터네트워크_13_킨코스 매장 내부 전경, 직원들이 센터 방문 고객의 주문을 확인하고 신속하게 처리하는 모습',
          },
          {
            url: '/images/biz/network/biz-network-14.png',
            alt: '5_센터네트워크_14_직원이 포장된 인쇄물을 박스에 담아 출고를 준비하는 과정, 킨코스의 세심한 포장 작업 장면',
          },
          {
            url: '/images/biz/network/biz-network-15.png',
            alt: '5_센터네트워크_15_킨코스 매장 내 고객용 PC 존, 출력 및 파일 편집이 가능한 셀프 스테이션 공간',
          },
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
          {
            url: '/images/biz/network/biz-network-16.png',
            alt: '5_센터네트워크_16_킨코스 물류 담당자가 출고용 박스를 검수하고 체크리스트를 확인하는 장면',
          },
          {
            url: '/images/biz/network/biz-network-17.png',
            alt: '5_센터네트워크_17_킨코스 배송 차량이 물류 센터 앞에 대기 중인 모습, 전국 출고를 위한 전용 배송 차량',
          },
          {
            url: '/images/biz/network/biz-network-18.png',
            alt: '5_센터네트워크_18_직원들이 완충 포장된 인쇄물을 확인하고 출하 준비를 진행하는 킨코스 작업 현장',
          },
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
        <Box px={{ sm: '40px', base: '20px', lg: '0px' }}>
          <BizDescriptionBanner
            title={bizDescriptionBannerMockData.title}
            badgeText={bizDescriptionBannerMockData.badgeText}
            description={bizDescriptionBannerMockData.description}
          />
        </Box>
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
          type={GetRelatedBizParamsTypeEnumTypeOptions.NETWORK}
        />
      </VStack>
    </VStack>
  )
}
