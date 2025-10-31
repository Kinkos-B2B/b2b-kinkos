import { useCallback, useEffect, useState } from 'react'

import { Box, HStack, IconButton, VStack } from '@chakra-ui/react'
import { CaretLeftIcon, CaretRightIcon } from '@phosphor-icons/react'

import Autoplay from 'embla-carousel-autoplay'
import useEmblaCarousel from 'embla-carousel-react'

import { ROUTES } from '@/constants/routes'
import { useMediaQuery } from '@/hooks/useMediaQuery'

import {
  BizIntroductionSliderCard,
  BizIntroductionSliderCardProps,
} from '../components/BizIntroductionSliderCard'
import '../components/biz-introduction-slider.css'

const cards: BizIntroductionSliderCardProps[] = [
  {
    badgeText: '디자인 기획 솔루션',
    titleText: '비즈니스 가치를\n디자인합니다.',
    image: '/images/biz/introduce/introduction-slider-card-img-1.png',
    buttons: [
      {
        text: '브랜딩 디자인',
        href: ROUTES.SOLUTIONS.DESIGN.BRANDING,
      },
      {
        text: '굿즈 & 판촉물 디자인',
        href: ROUTES.SOLUTIONS.DESIGN.GIFT_PROMOTIONAL_DESIGN,
      },
      {
        text: '매장 POP 디자인',
        href: ROUTES.SOLUTIONS.DESIGN.POP_DESIGN,
      },
      {
        text: 'VMD(3D) 디자인',
        href: ROUTES.SOLUTIONS.DESIGN.VMD_3D,
      },
    ],
  },
  {
    badgeText: '인쇄 제작 솔루션',
    titleText: '복잡한 과정을 쉽게\n해결합니다.',
    image: '/images/biz/introduce/introduction-slider-card-img-2.png',
    buttons: [
      {
        text: '안전 사인물 제작관리',
        href: ROUTES.SOLUTIONS.PRODUCTION.SAFETY_SIGN,
      },
      {
        text: '시즌성 인쇄물 제작관리',
        href: ROUTES.SOLUTIONS.PRODUCTION.SEASONAL_PRINTING,
      },
      {
        text: '통합제작 물류관리',
        href: ROUTES.SOLUTIONS.PRODUCTION.LOGISTICS,
      },
      {
        text: '통합제작 All-in-One',
        href: ROUTES.SOLUTIONS.PRODUCTION.ALL_IN_ONE,
      },
    ],
  },
  {
    badgeText: '디지털 혁신 솔루션',
    titleText: '더 스마트하게\n혁신합니다.',
    image: '/images/biz/introduce/introduction-slider-card-img-3.png',
    buttons: [
      [
        {
          text: '디지털 영상 제작',
          href: ROUTES.SOLUTIONS.VIDEO_AI.DIGITAL_VIDEO || '',
        },
        {
          text: 'AR 인쇄물 제작',
          href: ROUTES.SOLUTIONS.VIDEO_AI.AR_PRINTING || '',
        },
      ],
      [
        {
          text: 'EX감성 분석',
          href: ROUTES.SOLUTIONS.VIDEO_AI.EMOTION_ANALYSIS || '',
        },
        {
          text: '기업 전용 인쇄몰',
          href: ROUTES.SOLUTIONS.ONLINE_ORDER.CORPORATE_PRINTING || '',
        },
      ],
      {
        text: '온라인 명함 주문 관리',
        href: ROUTES.SOLUTIONS.ONLINE_ORDER.BUSINESS_CARD,
      },
      {
        text: '프랜차이즈 전용 인쇄몰',
        href: ROUTES.SOLUTIONS.ONLINE_ORDER.FRANCHISE_PRINTING,
      },
    ],
  },
]

export const BizIntroductionSlider = () => {
  const [selectedIndex, setSelectedIndex] = useState(0)
  const isMobile = useMediaQuery(['(max-width: 1280px)'], { ssr: true })[0]

  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop: true,
      align: 'center',
      containScroll: 'trimSnaps',
    },
    isMobile ? [Autoplay({ delay: 2500 })] : [],
  )

  const scrollPrev = useCallback(() => {
    if (emblaApi) {
      emblaApi.scrollPrev()
    }
  }, [emblaApi])

  const scrollNext = useCallback(() => {
    if (emblaApi) {
      emblaApi.scrollNext()
    }
  }, [emblaApi])

  const onSelect = useCallback(() => {
    if (!emblaApi) return
    setSelectedIndex(emblaApi.selectedScrollSnap())
  }, [emblaApi])

  useEffect(() => {
    if (!emblaApi) return

    emblaApi.on('select', onSelect)
    emblaApi.on('reInit', onSelect)

    return () => {
      emblaApi.off('select', onSelect)
      emblaApi.off('reInit', onSelect)
    }
  }, [emblaApi, onSelect])

  return (
    <VStack gap={'0px'} pt={{ lg: '120px', sm: '100px', base: '64px' }}>
      <HStack
        gap="10px"
        justify={'end'}
        w={'1280px'}
        display={{ base: 'none', lg: 'flex' }}
      >
        <IconButton
          variant={'capsule'}
          size={'md'}
          bg={'grey.10'}
          onClick={scrollPrev}
        >
          <CaretLeftIcon />
        </IconButton>
        <IconButton
          variant={'capsule'}
          size={'md'}
          bg={'grey.10'}
          onClick={scrollNext}
        >
          <CaretRightIcon />
        </IconButton>
      </HStack>
      <Box className="biz-introduction-slider" w={'100dvw'}>
        <div className="embla" ref={emblaRef}>
          <div className="embla__container">
            {cards.map((slide, index) => (
              <div key={index} className="embla__slide">
                <Box
                  ml={
                    index === 0 ?
                      { lg: '48px', sm: '40px', base: '20px' }
                    : '0px'
                  }
                  className={`slide ${selectedIndex === index ? 'active' : ''}`}
                  boxShadow="0px 30px 80px 0px rgba(1, 45, 181, 0.12)"
                >
                  <BizIntroductionSliderCard {...slide} />
                </Box>
              </div>
            ))}
          </div>
        </div>
      </Box>
    </VStack>
  )
}
