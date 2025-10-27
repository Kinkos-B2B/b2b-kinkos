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
    badgeText: '인쇄 제작 솔루션',
    titleText: '복잡한 과정을 쉽게\n해결합니다.',
    image: '/images/biz/introduce/introduction-slider-card-img.png',
    buttons: [
      {
        text: '안전 사인물 제작 관리',
        href: ROUTES.BIZ.PRODUCTION,
      },
      {
        text: '안전 사인물 제작 관리',
        href: ROUTES.BIZ.PRODUCTION,
      },
      {
        text: '안전 사인물 제작 관리',
        href: ROUTES.BIZ.PRODUCTION,
      },
      {
        text: '안전 사인물 제작 관리',
        href: ROUTES.BIZ.PRODUCTION,
      },
    ],
  },
  {
    badgeText: '인쇄 제작 솔루션',
    titleText: '복잡한 과정을 쉽게\n해결합니다.',
    image: '/images/biz/introduce/introduction-slider-card-img.png',
    buttons: [
      {
        text: '안전 사인물 제작 관리',
        href: ROUTES.BIZ.PRODUCTION,
      },
      {
        text: '안전 사인물 제작 관리',
        href: ROUTES.BIZ.PRODUCTION,
      },
      {
        text: '안전 사인물 제작 관리',
        href: ROUTES.BIZ.PRODUCTION,
      },
      {
        text: '안전 사인물 제작 관리',
        href: ROUTES.BIZ.PRODUCTION,
      },
    ],
  },
  {
    badgeText: '인쇄 제작 솔루션',
    titleText: '복잡한 과정을 쉽게\n해결합니다.',
    image: '/images/biz/introduce/introduction-slider-card-img.png',
    buttons: [
      {
        text: '안전 사인물 제작 관리',
        href: ROUTES.BIZ.PRODUCTION,
      },
      {
        text: '안전 사인물 제작 관리',
        href: ROUTES.BIZ.PRODUCTION,
      },
      {
        text: '안전 사인물 제작 관리',
        href: ROUTES.BIZ.PRODUCTION,
      },
      {
        text: '안전 사인물 제작 관리',
        href: ROUTES.BIZ.PRODUCTION,
      },
    ],
  },
  {
    badgeText: '인쇄 제작 솔루션',
    titleText: '복잡한 과정을 쉽게\n해결합니다.',
    image: '/images/biz/introduce/introduction-slider-card-img.png',
    buttons: [
      {
        text: '안전 사인물 제작 관리',
        href: ROUTES.BIZ.PRODUCTION,
      },
      {
        text: '안전 사인물 제작 관리',
        href: ROUTES.BIZ.PRODUCTION,
      },
      {
        text: '안전 사인물 제작 관리',
        href: ROUTES.BIZ.PRODUCTION,
      },
      {
        text: '안전 사인물 제작 관리',
        href: ROUTES.BIZ.PRODUCTION,
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
