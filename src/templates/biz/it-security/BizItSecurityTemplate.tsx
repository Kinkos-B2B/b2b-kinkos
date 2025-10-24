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
  badge: 'IT&보안',
  title: '스마트한 주문,\n철저한 보안으로 안심을 제공합니다.',
  description:
    '기업 전용 온라인 주문 관리부터 보안 제작 지원 센터까지,\n킨코스는 기술과 보안 역량을 결합해 신뢰할 수 있는 비즈니스 파트너가 됩니다.',
  images: [
    '/images/biz/hero/biz-hero-intro-1.jpg',
    '/images/biz/hero/biz-hero-intro-2.jpg',
    '/images/biz/hero/biz-hero-intro-3.jpg',
  ],
}

export const bizDescriptionBannerMockData: BizDescriptionBannerData = {
  title: '기밀성이 중요한 제작물도\n안전하게 맡길 수 있을까요?',
  badgeText: '킨코스 보안 제작 지원 센터 운영',
  description:
    '킨코스는 기밀 유출이 절대 허용하지 않기 위한 철저한 출입 통제와 보안 프로세스를 기반으로\n시험지, 정부용 제작물 등을 안전하게 제작합니다.',
}

const descriptionItemMockData1: BizDescriptionItem = {
  title: '출입 제한 구역',
  description: '지정 인원 외 출입이 불가합니다.',
  images: [
    '/images/biz/it-security/it-security-1.png',
    '/images/biz/it-security/it-security-2.png',
    '/images/biz/it-security/it-security-3.png',
  ],
  infos: [
    {
      name: '출입 제한 장치',
      description:
        '물리적 보안 장치 강화를 통해 지정 인원 외 출입이 불가합니다.',
    },
  ],
}

const descriptionItemMockData2: BizDescriptionItem = {
  title: '보안 감시 체계',
  description: 'CCTV 및 접근 기록을 철저히 관리합니다.',
  images: [
    '/images/biz/it-security/it-security-1.png',
    '/images/biz/it-security/it-security-2.png',
    '/images/biz/it-security/it-security-3.png',
  ],
  infos: [
    {
      name: '접근 기록 관리',
      description:
        '철저한 보안 감시 체계를 통해 기밀 유출 가능성을 차단합니다.',
    },
  ],
}

const descriptionItemMockData3: BizDescriptionItem = {
  title: '고품질 대량 제작',
  description: '기밀을 유지하면서 대량 제작물의 일관된 품질을 보장합니다.',
  images: [
    '/images/biz/it-security/it-security-1.png',
    '/images/biz/it-security/it-security-2.png',
    '/images/biz/it-security/it-security-3.png',
  ],
  infos: [
    {
      name: '고품질 보안 제작',
      description:
        '시험지, 정부 보안 출력물 등 대량 출력물의 기밀 유지와 품질을 동시에 보장합니다.',
    },
  ],
}

export const bizDescriptionMockData = [
  descriptionItemMockData1,
  descriptionItemMockData2,
  descriptionItemMockData3,
]

export const bizVideoSectionMockData: BizVideoSectionData = {
  title: '킨코스 보안 제작 지원 센터를\n직접 방문해 보고 싶으신가요?',
  description: '킨코스 담당자와의 사전 일정 예약을 통해 관람할 수 있습니다.',
  buttonText: '센터 관람 요청',
  moreInfoLink: {
    url: 'https://youtu.be/s_VC4H4LNZo?si=3qUMCajvAxGokHET',
    target: '_blank',
  },
}

export const bizDescriptionWithBannerMockData: BizDescriptionWithBannerProps[] =
  [
    {
      banner: {
        title: '여러 부서와 지점의 인쇄물을\n한 번에 관리할 수 있을까요?',
        badgeText: '기업 전용 인쇄몰을 통한 편리한 주문 관리',
        description:
          '킨코스는 기업 고객을 위해 폐쇄형 주문 시스템을 구축하고,\n본사·지점·가맹점 모두가 동일한 플랫폼에서 주문·승인·배송을 관리할 수 있도록 합니다.',
      },
      descriptionItem: {
        title: '온라인 주문 관리 솔루션',
        images: [
          '/images/biz/it-security/it-security-1.png',
          '/images/biz/it-security/it-security-2.png',
          '/images/biz/it-security/it-security-3.png',
        ],
        infos: [
          {
            name: '기업 전용 인쇄몰',
            description:
              '기업 홍보물, 매장 POP, 사내 인쇄물을 일괄적으로 관리할 수 있습니다.',
          },
          {
            name: '프랜차이즈 전용 인쇄몰',
            description:
              '가맹점별 발주와 예산 통제를 지원하여 프랜차이즈 업종에 특화된 브랜드 관리 시스템을 제공합니다.',
          },
          {
            name: '온라인 명함 주문 관리',
            description:
              '온라인으로 전사 직원들의 명함 제작과 승인, 주문까지 원스톱으로 운영합니다.',
          },
        ],
        pdfLinkButton: {
          text: '킨코스가 제공하고 있는 법인 기업 대상 전용 인쇄몰이 궁금하시다면 오른쪽 버튼을 클릭해주세요.',
          link: ROUTES.SOLUTIONS.ONLINE_ORDER.CORPORATE_PRINTING,
        },
      },
    },
    {
      banner: {
        title: '기업 기밀과 개인정보는\n안전하게 지켜질까요?',
        badgeText: 'ISO/IEC 27001 인증 보안 관리 체계',
        description:
          '킨코스는 국제 정보보호 관리 체계(ISO/IEC 27001) 인증을 획득하여,\n고객의 기밀 데이터와 개인 정보를 글로벌 기준에 따라 안전하게 보호합니다.',
      },
      descriptionItem: {
        title: '철저한 보안 관리 역량',
        images: [
          '/images/biz/it-security/it-security-1.png',
          '/images/biz/it-security/it-security-2.png',
          '/images/biz/it-security/it-security-3.png',
        ],
        infos: [
          {
            name: 'ISO/IEC 27001 인증',
            description: '국제 표준 기반의 정보보호 관리 체계를 준수합니다.',
          },
          {
            name: '데이터 암호화 및 관리',
            description: '제작 파일과 고객 정보를 안전하게 처리합니다.',
          },
        ],
      },
    },
  ]

export const BizItSecurityTemplate = () => {
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
