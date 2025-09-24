'use client'

import { useEffect, useState } from 'react'

import { Box, Container, Text, VStack } from '@chakra-ui/react'

import { BizDescriptionWithBannerSection } from '../common-section-layout/BizDescriptionWithBannerSection'
import { BizHeroSection } from '../common-section-layout/BizHeroSection'
import { BizMoreInfoSection } from '../common-section-layout/BizMoreInfoSection'
import { BizOrderedDescriptionSection } from '../common-section-layout/BizOrderedDescriptionSection'
import { BizViedoSection } from '../common-section-layout/BizYoutubeSection'
import { BizDescriptionBanner } from '../common-section-layout/components/BizDescriptionBanner'

export const heroSectionMockData = {
  badge: '생산&제작',
  title: '우리의 기술력,\n당신의 성공을 인쇄합니다',
  description:
    '대량부터 소량까지, 킨코스의 첨단 인프라와 스마트한 생산 공정으로\n당신의 비즈니스를 최고 품질로 완성하세요.',
  images: [
    '/images/home/biz/biz-card-1.png',
    '/images/home/biz/biz-card-2.png',
    '/images/home/biz/biz-card-3.png',
    '/images/home/biz/biz-card-4.png',
    '/images/home/biz/biz-card-1.png',
    '/images/home/biz/biz-card-2.png',
    '/images/home/biz/biz-card-3.png',
  ],
}

const descriptionItemMockData = {
  title: '스마트형 생산공장',
  description:
    '대량부터 소량까지, 킨코스의 첨단 인프라와 스마트한 생산 공정으로\n당신의 비즈니스를 최고 품질로 완성하세요.',
  images: [
    '/images/biz/production/production-1.png',
    '/images/biz/production/production-2.png',
    '/images/biz/production/production-3.png',
    '/images/biz/production/production-4.png',
    '/images/biz/production/production-5.png',
  ],
  factoryInfo: [
    {
      name: '평촌 1, 2공장',
      description: '실사출력 및 아크릴, 대형 현수막, 사인물 제작',
    },
    {
      name: '평촌 1, 2공장',
      description: '실사출력 및 아크릴, 대형 현수막, 사인물 제작',
    },
    {
      name: '평촌 1, 2공장',
      description: '실사출력 및 아크릴, 대형 현수막, 사인물 제작',
    },
    {
      name: '평촌 1, 2공장',
      description: '실사출력 및 아크릴, 대형 현수막, 사인물 제작',
    },
  ],
}

export const bizDescriptionMockData = [
  descriptionItemMockData,
  descriptionItemMockData,
  descriptionItemMockData,
]

export const bizDescriptionBannerMockData = {
  title:
    '대규모 프로젝트나 특수 인쇄물을 맡겨도\n안정적으로 처리할 수 있을까요?',
  badgeText: '킨코스, 믿을 수 있는 생산 인프라',
  description:
    '킨코스는 B2B 기업 고객의 다양한 요구에\n최적화된 스마트형 생산 공장과 전문 지원 센터를 통해 최고 품질의 인쇄를 약속드립니다.',
}

export const bizDescriptionWithBannerMockData = {
  banner: {
    title:
      '대규모 프로젝트나 특수 인쇄물을 맡겨도\n안정적으로 처리할 수 있을까요?',
    badgeText: '킨코스, 믿을 수 있는 생산 인프라',
    description:
      '킨코스는 B2B 기업 고객의 다양한 요구에\n최적화된 스마트형 생산 공장과 전문 지원 센터를 통해 최고 품질의 인쇄를 약속드립니다.',
  },
  descriptionItem: descriptionItemMockData,
}

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
      <VStack w={'100%'} position={'sticky'} top={'90px'}>
        <BizHeroSection {...heroSectionMockData} />
        <Box
          position={'absolute'}
          top={'0px'}
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
      <VStack gap={'0px'} zIndex={'sticky'} bg={'white'} w={'100%'}>
        <BizDescriptionBanner
          title={bizDescriptionBannerMockData.title}
          badgeText={bizDescriptionBannerMockData.badgeText}
          description={bizDescriptionBannerMockData.description}
        />
        <BizOrderedDescriptionSection data={bizDescriptionMockData} />
        <BizViedoSection />
        <BizDescriptionWithBannerSection
          banner={bizDescriptionWithBannerMockData.banner}
          descriptionItem={bizDescriptionWithBannerMockData.descriptionItem}
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
