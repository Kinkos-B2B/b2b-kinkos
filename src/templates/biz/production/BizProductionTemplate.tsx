'use client'

import { useEffect, useState } from 'react'

import { Box, VStack } from '@chakra-ui/react'

import { LAYOUT } from '@/constants/layout'
import { GetRelatedBizParamsTypeEnumTypeOptions } from '@/helper/options'

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
  badge: '생산 & 제작',
  title: '우리의 기술력,\n당신의 성공을 인쇄합니다.',
  description:
    '대량부터 소량까지, 킨코스의 첨단 인프라와 스마트한 생산 공정으로\n당신의 비즈니스를 최고 품질로 완성하세요.',
  images: [
    {
      url: '/images/biz/production/biz-production-1.png',
      alt: '킨코스 생산센터 내 대형 실사 출력 장비가 가동 중인 모습, 고해상도 인쇄와 대형 그래픽 출력이 가능한 첨단 장비 환경',
    },
    {
      url: '/images/biz/production/biz-production-2.png',
      alt: 'SIGN & GRAPHICS 생산 센터에서 에서 직원이 커팅 장비를 조작하며, 실내외 사인물 및 그래픽 소재를 정밀 가공하고 있는 현장',
    },
    {
      url: '/images/biz/production/biz-production-3.png',
      alt: '킨코스 디지털 인쇄실 전경, 코니카미놀타 고속 디지털 인쇄기가 일렬로 배치된 대량 인쇄 대응 시스템',
    },
  ],
}

export const bizDescriptionBannerMockData: BizDescriptionBannerData = {
  title:
    '대규모 프로젝트나 특수 인쇄물을 맡겨도\n안정적으로 처리할 수 있을까요?',
  badgeText: '킨코스, 믿을 수 있는 생산 인프라',
  description:
    '킨코스는 B2B 기업 고객의 다양한 요구에\n최적화된 스마트형 생산 공장과 전문 지원 센터를 통해 최고 품질의 인쇄를 약속드립니다.',
}

const descriptionItemMockData1: BizDescriptionItem = {
  title: '스마트형 생산공장',
  description:
    '첨단 장비와 스마트 공정 관리 시스템(MES)으로 제작,\n생산 시스템을 갖추고 있어 어떤 규모의 인쇄도 흔들림 없는 품질을 유지합니다.',
  images: [
    {
      url: '/images/biz/production/biz-production-4.png',
      alt: '킨코스 생산센터 내부의 디지털 인쇄 장비가 정렬된 모습, 효율적 공정과 품질 일관성을 위한 스마트 인쇄 라인',
    },
    {
      url: '/images/biz/production/biz-production-5.png',
      alt: '다양한 대형 실사 출력 장비가 설치된 킨코스 인쇄실, HP 장비를 통한 실사물 및 특수 소재 인쇄 작업 환경',
    },
    {
      url: '/images/biz/production/biz-production-6.png',
      alt: '킨코스 서포트 센터 공간 내부 전경, 출력 및 제본 장비가 정돈된 상태로 배치된 인하우스형 제작실',
    },
  ],
  infos: [
    {
      name: '평촌 공장',
      description: '실사 출력 및 아크릴, 대형 현수막, 사인물 제작',
    },
    {
      name: '가산 공장',
      description: '디지털 출력 및 대량 인쇄물 제작',
    },
  ],
}

const descriptionItemMockData2: BizDescriptionItem = {
  title: 'B2B 서포트 센터',
  description:
    '리테일 매장과 분리된 B2B 전용 센터에서 기업 인쇄물을 더욱 빠르고 신속하게 처리합니다.',
  images: [
    {
      url: '/images/biz/production/biz-production-7.png',
      alt: '킨코스 직원이 제본된 인쇄물을 검수하고 정리하는 모습, 맞춤 제작물의 품질 확인 및 포장 전 공정 관리 장면',
    },
    {
      url: '/images/biz/production/biz-production-8.png',
      alt: '1_생산제작_8_킨코스 직원이 제본된 인쇄물을 검수하고 정리하는 모습, 맞춤 제작물의 품질 확인 및 포장 전 공정 관리 장면',
    },
    {
      url: '/images/biz/production/biz-production-8-2.png',
      alt: '1_생산제작_8_킨코스 직원이 제본된 인쇄물을 검수하고 정리하는 모습, 맞춤 제작물의 품질 확인 및 포장 전 공정 관리 장면',
    },
  ],
  infos: [
    {
      name: ['삼성 서포트 센터', '가산 서포트 센터'],
    },
  ],
}

const descriptionItemMockData3: BizDescriptionItem = {
  title: 'B2B 분야별 제작 전문센터',
  description:
    '바이오, 프랜차이즈 등 각 산업의 특성을 완벽하게 이해하고 전문적인 제작을 지원합니다.',
  images: [
    {
      url: '/images/biz/production/biz-production-9.png',
      alt: '1_생산제작_9_킨코스에서 시제품 및 맞춤 제작에 활용되는 3D 프린터 장비, 정밀한 출력 테스트를 수행 중인 모습',
    },
    {
      url: '/images/biz/production/biz-production-10.png',
      alt: '1_생산제작_10_매장 내 메뉴판과 POP가 실제 매장 환경에 설치된 예시, 킨코스에서 제작된 프랜차이즈 맞춤형 출력물 적용 사례',
    },
    {
      url: '/images/biz/production/biz-production-10-2.png',
      alt: '1_생산제작_12_프랜차이즈 매장 내 프로모션 포스터가 부착된 예시, 눈에 가장 잘 띄는 효과적인 디자인으로 제작된 사례',
    },
  ],
  infos: [
    {
      name: ['프랜차이즈 센터', '바이오 서포트 센터'],
    },
  ],
}

export const bizDescriptionMockData = [
  descriptionItemMockData1,
  descriptionItemMockData2,
  descriptionItemMockData3,
]

export const bizVideoSectionMockData: BizVideoSectionData = {
  title: '킨코스 생산 & 제작 센터를\n직접 방문해 보고 싶으신가요?',
  description:
    '상담 신청 시 공장 관람을 요청하시면 전체 제작 과정을 투명하게 보여 드립니다.',
  buttonText: '생산 공장 관람 요청',
  thumbnailUrl: [
    {
      url: '/images/biz/production/biz-production-11.png',
      alt: '1_생산제작_11_킨코스 생산센터 내 출력장비들이 가동되는 모습, 대형 실사물과 그래픽 출력 작업이 진행 중인 현장 영상',
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
        title: '대량 생산은 물론,\n긴급한 소량 인쇄도 가능할까요?',
        badgeText: '대량과 소량, 모두를 위한 제작 장비',
        description:
          '킨코스는 모기업 코니카미놀타의 최신식 장비를 비롯해 다양한 최고급 장비를 보유하고 있습니다.\n이 장비들은 대량 생산의 효율성뿐만 아니라, 소량 생산에 대한 유연한 대응을 가능하게 합니다.',
      },
      descriptionItem: {
        title: '다양한 제작 장비',
        images: [
          {
            url: '/images/biz/production/biz-production-12.png',
            alt: '1_생산제작_12_대형 실사 출력기와 라미네이팅 장비가 정렬된 킨코스 실사 인쇄 존, 출력 후 후가공 공정까지 이어지는 장비 배치 모습',
          },
          {
            url: '/images/biz/production/biz-production-13.png',
            alt: '1_생산제작_13_킨코스 Cutting Zone 내부, 대형 커팅 장비가 설치된 공간에서 인쇄물 절단 및 재단 작업이 이루어지는 장면',
          },
          {
            url: '/images/biz/production/biz-production-14.png',
            alt: '1_생산제작_14_킨코스 생산센터 내 최신 UV 잉크젯 프린터 장비가 가동 중인 모습, 대형 인쇄물 제작과 고품질 그래픽 출력에 활용되는 설비',
          },
        ],
        infos: [
          {
            name: '고품질 인쇄 장비',
            description:
              '코니카미놀타의 최신 디지털 인쇄기로 선명한 컬러와 정교한 디테일을 구현합니다.',
          },
          {
            name: '고급 후가공 장비',
            description:
              '멀티 컷팅기, 대형 접지기 등 전문 후가공 장비를 통해 인쇄물의 완성도를 한 차원 높여줍니다.',
          },
          {
            name: '사인물 제작 장비',
            description:
              'HP 장비를 포함한 최고 품질의 장비로 대형 현수막, POP, 사인물 등 특수 인쇄물까지 완벽하게 제작합니다.',
          },
        ],
      },
    },
    {
      banner: {
        title: '환경을 생각하는\n인쇄 솔루션도 제공하나요?',
        badgeText: 'ESG 경영 파트너, 킨코스',
        description:
          '킨코스는 지속 가능한 성장을 추구하며, 당신의 비즈니스와 함께 더 나은 미래를 만들어 가고자 합니다.',
      },
      descriptionItem: {
        title: '환경을 생각하는 솔루션',
        images: [
          {
            url: '/images/biz/production/biz-production-15.png',
            alt: '1_생산제작_16_킨코스 직원이 인쇄 공정 중 용지를 정렬하며 품질을 점검하는 장면, 인쇄물 접지 및 후가공 과정의 세밀한 관리 모습.png',
          },
          {
            url: '/images/biz/production/biz-production-16.png',
            alt: '1_생산제작_16_킨코스 직원이 인쇄 공정 중 용지를 정렬하며 품질을 점검하는 장면, 인쇄물 접지 및 후가공 과정의 세밀한 관리 모습.png',
          },
          {
            url: '/images/biz/production/biz-production-17.png',
            alt: '1_생산제작_17_킨코스 생산센터 내 부품 및 토너 보관 창고, 코니카미놀타 토너 박스와 장비 부품이 체계적으로 정리된 모습',
          },
        ],
        infos: [
          {
            name: '친환경 인쇄 솔루션',
            description:
              'FSC® 인증 용지 사용, 식물성 잉크 사용 등 환경 보호를 위한 킨코스의 노력을 소개합니다.',
          },
          {
            name: '지속 가능한 미래',
            description:
              '킨코스는 당신의 비즈니스 성공뿐만 아니라, 환경적 책임을 다하는 파트너로서 지속 가능한 미래를 함께 만들어가겠습니다.',
          },
        ],
      },
    },
  ]

export const BizProductionTemplate = () => {
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
        pt={{ lg: '160px', sm: '140px', base: '100px' }}
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
        <BizDescriptionWithBannerListSection
          data={bizDescriptionWithBannerMockData}
        />

        <BizMoreInfoSection
          type={GetRelatedBizParamsTypeEnumTypeOptions.PRODUCTION}
        />
      </VStack>
    </VStack>
  )
}
