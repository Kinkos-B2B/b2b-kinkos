'use client'

import { useEffect, useState } from 'react'

import { Box, VStack } from '@chakra-ui/react'

import { LAYOUT } from '@/constants/layout'
import { ROUTES } from '@/constants/routes'
import { GetRelatedBizParamsTypeEnumTypeOptions } from '@/helper/options'

import { BizDescriptionWithBannerListSection } from '../common-section-layout/BizDescriptionWithBannerListSection'
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
  badge: '인력 & 지원',
  title: '전문가의 역량으로,\n끝까지 책임을 다합니다.',
  description:
    '기획부터 디자인, 제작, 사후관리까지 전문 인력이 전담하여\n기업 고객의 비즈니스를 안정적으로 지원합니다.',
  images: [
    {
      url: '/images/biz/support/biz-support-1.png',
      alt: '4_인력지원_1_디자이너들이 태블릿과 노트북을 활용해 로고와 스티커 디자인 시안을 검토하는 협업 회의 모습',
    },
    {
      url: '/images/biz/support/biz-support-2.png',
      alt: '4_인력지원_2_킨코스 직원이 제본 작업 중 품질을 확인하며 인쇄물을 정리하는 모습',
    },
    {
      url: '/images/biz/support/biz-support-3.png',
      alt: '4_인력지원_3_킨코스 디자이너가 모니터로 제품 패키지 디자인을 검수하고 수정하는 모습',
    },
  ],
}

export const bizDescriptionBannerMockData: BizDescriptionBannerData = {
  title: '단순 제작이 아니라\n기획부터 디자인까지 함께할 수 있을까요?',
  badgeText: '전담 기획·디자인 전문가 지원',
  description:
    '킨코스는 단순 인쇄 대행이 아닌 기획 단계부터 참여해,\n맞춤형 디자인을 제공하며 업종과 브랜드에 최적화된 솔루션을 제안합니다.',
}

const descriptionItemMockData1: BizDescriptionItem = {
  title: '전담 인력 배정',
  description:
    '고객사 전담 전문가(영업대표) 및 디자이너가 기획부터 디자인을 전담합니다.',
  images: [
    {
      url: '/images/biz/support/biz-support-4.png',
      alt: '4_인력지원_4_회의실에서 노트북과 대형 화면을 통해 마케팅 영상을 공유하며 회의하는 킨코스 팀원들',
    },
    {
      url: '/images/biz/support/biz-support-5.png',
      alt: '4_인력지원_5_그래픽 디자이너가 모니터로 인쇄 디자인 파일을 작업 중인 모습, 정돈된 사무 공간과 전문 장비 환경',
    },
    {
      url: '/images/biz/support/biz-support-5-2.png',
      alt: '4_인력지원_6_회의실에서 대형 스크린을 통해 고객의 요구사항을 공유하고 솔루션을 논의하는 장면',
    },
  ],
  infos: [
    {
      name: '전담 인력 매칭',
      description:
        '고객의 문제에 다양한 해결 경험과 노하우를 보유한 전담 전문가를 매칭합니다.',
    },
    {
      name: '원스톱 지원',
      description:
        '기획부터 디자인까지 원스톱으로 지원하여 고객의 니즈를 심도 있게 파악하여 해결합니다.',
    },
  ],
}

const descriptionItemMockData2: BizDescriptionItem = {
  title: '빠른 시안 제안',
  description: '다수의 시안을 빠르게 제시하고 선택의 폭을 넓힙니다.',
  images: [
    {
      url: '/images/biz/support/biz-support-6.png',
      alt: '4_인력지원_6_디자인 시안과 인쇄물 샘플을 검토하며 브랜드 캠페인 기획을 논의하는 킨코스 미팅 장면',
    },
    {
      url: '/images/biz/support/biz-support-7.png',
      alt: '4_인력지원_7_태블릿과 종이 도면을 보며 제품 패키지 구조를 논의하는 기획자와 디자이너의 협업 장면',
    },
    {
      url: '/images/biz/support/biz-support-7-2.png',
      alt: '4_인력지원_9_킨코스 디자이너들이 다수의 인쇄물 샘플을 직접 보고 검토하며 논의하는 장면',
    },
  ],
  infos: [
    {
      name: '크리에이티브 역량',
      description:
        '고객이 요청한 디자인 시안 뿐 아니라, 다양한 시안을 추가적으로 제안하여 더 나은 선택을 돕습니다.',
    },
  ],
}

const descriptionItemMockData3: BizDescriptionItem = {
  title: '브랜드 최적화 디자인',
  description: '업종 특성과 브랜드 아이덴티티에 맞춘 전문 디자인을 제공합니다.',
  images: [
    {
      url: '/images/biz/support/biz-support-8.png',
      alt: '4_인력지원_8_킨코스 로고가 새겨진 다이어리와 캘린더 세트, 기업용 오피스 디자인 키트 구성 이미지',
    },

    {
      url: '/images/biz/support/biz-support-9.png',
      alt: '4_인력지원_8_킨코스 로고가 새겨진 다이어리와 캘린더 세트, 기업용 오피스 디자인 키트 구성 이미지',
    },
    {
      url: '/images/biz/support/biz-support-10.png',
      alt: '4_인력지원_8_킨코스 로고가 새겨진 다이어리와 캘린더 세트, 기업용 오피스 디자인 키트 구성 이미지',
    },
  ],
  infos: [
    {
      name: '완성도 높은 결과물',
      description:
        '브랜드 아이덴티티에 대한 깊은 이해를 바탕으로 완성도 높은 디자인 결과물을 만듭니다.',
    },
  ],
}

export const bizDescriptionMockData = [
  descriptionItemMockData1,
  descriptionItemMockData2,
  descriptionItemMockData3,
]

export const bizVideoSectionMockData: BizVideoSectionData = {
  title: '킨코스의 전문 인력과\n지원되고 있는 솔루션이 궁금하신가요?',
  description:
    '전문가 리스트를 확인하고 상담 신청을 통해 상세 솔루션을 받아보실 수 있습니다.',
  buttonText: '전문가 연결하기',
  buttonLink: ROUTES.EXPERT,
  moreInfoButtonText: '관련 콘텐츠 보러가기',
  thumbnailUrl: [
    {
      url: '/images/biz/support/biz-support-11.png',
      alt: '4_인력지원_11_킨코스 직원들이 브랜드 굿즈와 캘린더 키트를 활용해 협업 아이디어를 논의하는 회의 장면, 브랜딩 디자인 솔루션 예시',
    },
  ],
  moreInfoLink: {
    url: ROUTES.SOLUTIONS.DESIGN.BRANDING,
    target: '_self',
  },
}

export const bizDescriptionWithBannerMockData: BizDescriptionWithBannerProps[] =
  [
    {
      banner: {
        title: '문제나 클레임이 발생하면\n바로 해결해줄 수 있을까요?',
        badgeText: '1:1 맞춤 케어 및 신속 대응',
        description:
          '킨코스는 고객사마다 전담 영업대표(전문가)와 CS팀을 배치하여,\n문제 발생 시 신속하게 대응하는 체계를 운영합니다.',
      },
      descriptionItem: {
        title: '끝까지 책임지는 전담팀',
        images: [
          {
            url: '/images/biz/support/biz-support-12.png',
            alt: '4_인력지원_12_킨코스 사무실 전경, 각 부서 직원들이 개별 모니터에서 업무를 수행하는 오피스 환경',
          },
          {
            url: '/images/biz/support/biz-support-13.png',
            alt: '4_인력지원_13_킨코스 QC ZONE 안내판, 품질 점검을 위한 전용 확인 구역 표시 이미지',
          },
          {
            url: '/images/biz/support/biz-support-14.png',
            alt: '4_인력지원_14_QC ZONE 점검 체크리스트, 인쇄물 출하 전 품질 검수 절차를 안내하는 문서 이미지',
          },
        ],
        infos: [
          {
            name: '1:1 전담 케어',
            description: '영업대표가 실시간 소통으로 고객을 밀착 관리합니다.',
          },
          {
            name: '신속한 클레임 처리',
            description: '오류 발생 시 즉시 재제작 및 문제 해결을 진행합니다.',
          },
          {
            name: '실시간 소통 채널',
            description:
              '카카오톡, 메신저, 전화 등 다양한 채널을 통한 즉각 대응을 지원합니다.',
          },
        ],
        pdfLinkButton: {
          text: '킨코스 전문가의 문제 해결 방법과 노하우가 궁금하시다면 오른쪽 버튼을 클릭해주세요.',
          link: ROUTES.PROBLEM,
        },
      },
    },
    {
      banner: {
        title: '작업 후에도 지속적인\n관리와 개선이 가능할까요?',
        badgeText: '사후관리 & 개선 제안까지 책임',
        description:
          '킨코스는 납품 이후에도 제작 이력과 피드백을 분석해 개선안을 제안하며,\n장기적인 파트너십을 통해 지속적인 성과를 창출합니다.',
      },
      descriptionItem: {
        title: '지속 관리 서비스',
        images: [
          {
            url: '/images/biz/support/biz-support-15.png',
            alt: '4_인력지원_15_킨코스 디자이너가 듀얼 모니터로 디자인 시안을 검토하며 고객사의 피드백을 반영한 업무 중인 모습',
          },
          {
            url: '/images/biz/support/biz-support-16.png',
            alt: '4_인력지원_16_킨코스 디자인팀 사무실 내부, 협업 중인 디자이너들과 그래픽 디자인 작업 장면',
          },
          {
            url: '/images/biz/support/biz-support-17.png',
            alt: '4_인력지원_19_킨코스 전담 영업대표가 고객의 의견과 피드백을 PC 화면으로 확인하고 있는 장면',
          },
        ],
        infos: [
          {
            name: '전담 히스토리 관리',
            description:
              '업무 히스토리를 관리하며 지속적으로 품질을 유지하고 개선합니다.',
          },
          {
            name: '사후 피드백 반영',
            description:
              '고객 의견을 수집해 디자인·제작 프로세스를 개선합니다.',
          },
          {
            name: '지속 제안 서비스',
            description:
              '업종별 성공 사례와 최신 트렌드를 기반으로 새로운 대안을 제안합니다.',
          },
        ],
      },
    },
  ]

export const BizSupportTemplate = () => {
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
          type={GetRelatedBizParamsTypeEnumTypeOptions.SUPPORT}
        />
      </VStack>
    </VStack>
  )
}
