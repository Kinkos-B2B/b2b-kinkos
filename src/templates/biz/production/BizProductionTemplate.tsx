'use client'

import { useEffect, useState } from 'react'

import { Box, VStack } from '@chakra-ui/react'

import { LAYOUT } from '@/constants/layout'

import { BizDescriptionWithBannerSection } from '../common-section-layout/BizDescriptionWithBannerSection'
import { BizHeroSection } from '../common-section-layout/BizHeroSection'
import { BizMoreInfoSection } from '../common-section-layout/BizMoreInfoSection'
import { BizOrderedDescriptionSection } from '../common-section-layout/BizOrderedDescriptionSection'
import { BizViedoSection } from '../common-section-layout/BizYoutubeSection'
import { BizDescriptionBanner } from '../common-section-layout/components/BizDescriptionBanner'
import {
  BizDescriptionBannerData,
  BizDescriptionItem,
  BizHeroSectionData,
  BizVideoSectionData,
} from '../types'

export const heroSectionMockData: BizHeroSectionData = {
  badge: '생산&제작',
  title: '우리의 기술력,\n당신의 성공을 인쇄합니다.',
  description:
    '대량부터 소량까지, 킨코스의 첨단 인프라와 스마트한 생산 공정으로\n당신의 비즈니스를 최고 품질로 완성하세요.',
  images: [
    '/images/biz/hero/biz-hero-intro-1.jpg',
    '/images/biz/hero/biz-hero-intro-2.jpg',
    '/images/biz/hero/biz-hero-intro-3.jpg',
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
    '/images/biz/production/production-1.png',
    '/images/biz/production/production-2.png',
    '/images/biz/production/production-3.png',
    '/images/biz/production/production-4.png',
    '/images/biz/production/production-5.png',
    '/images/biz/production/production-6.png',
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
    '/images/biz/production/production-1.png',
    '/images/biz/production/production-1.png',
    '/images/biz/production/production-1.png',
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
    '/images/biz/production/production-1.png',
    '/images/biz/production/production-1.png',
    '/images/biz/production/production-1.png',
  ],
  infos: [
    {
      name: ['프랜차이즈 센터', '바이오 센터'],
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
    '고객 관람을 요청하시면 전체 제작 과정을 투명하게 보여 드립니다.',
  buttonText: '평촌 생산 공장 관람',
  buttonLink: 'https://www.pluuug.com/form/gmD1ac03mB',
}

export const bizDescriptionWithBannerMockData = [
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
        '/images/biz/production/production-1.png',
        '/images/biz/production/production-1.png',
        '/images/biz/production/production-1.png',
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
        '/images/biz/production/production-1.png',
        '/images/biz/production/production-1.png',
        '/images/biz/production/production-1.png',
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
