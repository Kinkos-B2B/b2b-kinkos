'use client'

import React, { useCallback, useEffect, useRef, useState } from 'react'

import Link from 'next/link'

import {
  Box,
  Button,
  Flex,
  HStack,
  IconButton,
  Text,
  VStack,
} from '@chakra-ui/react'
import { CaretLeftIcon, CaretRightIcon } from '@phosphor-icons/react/dist/ssr'

import Autoplay from 'embla-carousel-autoplay'
import useEmblaCarousel from 'embla-carousel-react'

import { Badge } from '@/components/ui/badge'
import { useMediaQuery } from '@/hooks/useMediaQuery'

import { HomeSolutionSliderItem } from '../HomeIntroduceSolution'
import { HomeSolutionSliderCard } from './HomeSolutionSliderCard'
import './home-slider.css'

interface SolutionSliderProps {
  slides: HomeSolutionSliderItem[]
}

export const HomeSolutionSlider: React.FC<SolutionSliderProps> = ({
  slides,
}) => {
  const isMobile = useMediaQuery(['(max-width: 1280px)'], { ssr: true })[0]

  const ref = useRef<HTMLDivElement>(null)

  const tabButtonsRef = useRef<HTMLButtonElement[]>([])

  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop: true,
      align: 'center',
      containScroll: 'trimSnaps',
    },
    isMobile ? [Autoplay({ delay: 2500 })] : [],
  )

  const [selectedIndex, setSelectedIndex] = useState(0)

  const scrollPrev = useCallback(() => {
    if (emblaApi) {
      emblaApi.scrollPrev()
      tabButtonsRef.current[emblaApi.selectedScrollSnap()].scrollIntoView({
        behavior: 'smooth',
        block: 'nearest',
        inline: 'start',
      })
    }
  }, [emblaApi])

  const scrollNext = useCallback(() => {
    if (emblaApi) {
      emblaApi.scrollNext()
      tabButtonsRef.current[emblaApi.selectedScrollSnap()].scrollIntoView({
        behavior: 'smooth',
        block: 'nearest',
        inline: 'start',
      })
    }
  }, [emblaApi])

  const scrollTo = useCallback(
    (index: number) => {
      if (emblaApi) {
        emblaApi.scrollTo(index)
        tabButtonsRef.current[emblaApi.selectedScrollSnap()].scrollIntoView({
          behavior: 'smooth',
          block: 'nearest',
          inline: 'start',
        })
      }
    },
    [emblaApi],
  )

  const onSelect = useCallback(
    (e: any) => {
      console.log(e)
      if (!emblaApi) return
      setSelectedIndex(emblaApi.selectedScrollSnap())
      if (isMobile) {
        return
      }
      tabButtonsRef.current[emblaApi.selectedScrollSnap()].scrollIntoView({
        behavior: 'smooth',
        block: 'nearest',
        inline: 'start',
      })
    },
    [emblaApi, isMobile],
  )

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
    <VStack gap="24px" align="stretch" width="100%" mx="auto" maxW="1280px">
      {/* 헤더 섹션 */}
      <VStack gap="16px" align="stretch">
        <Box>
          <Badge
            size={{ base: 'lg', sm: 'xl', lg: 'xl' }}
            colorPalette="secondary"
            variant="subtle"
          >
            솔루션
          </Badge>
        </Box>

        <Flex justify="space-between" align="center" width="100%">
          <Text
            color="grey.10"
            textStyle={'pre-display-3'}
            whiteSpace={{ base: 'pre-line', sm: 'nowrap' }}
          >
            {'킨코스가 제안하는\n비즈니스 맞춤 솔루션'}
          </Text>

          <HStack gap="10px" display={{ base: 'none', lg: 'flex' }}>
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
        </Flex>
      </VStack>

      <VStack gap={{ lg: '64px', sm: '48px', base: '40px' }}>
        <Box position="relative" width="100%">
          <HStack
            gap="8px"
            overflowX="auto"
            pb="4px"
            scrollBehavior="smooth"
            ref={ref}
            position="relative"
            css={{
              scrollbar: 'hidden',
            }}
          >
            {slides?.map((tab, index) => {
              return (
                <Button
                  size={{ base: 'sm', sm: 'md', lg: 'lg' }}
                  lineHeight={'1'}
                  colorPalette="black"
                  key={index}
                  ref={(el) => {
                    if (el) {
                      tabButtonsRef.current[index] = el
                    }
                  }}
                  onClick={(e) => {
                    e.currentTarget.scrollIntoView({
                      behavior: 'smooth',
                      block: 'nearest',
                      inline: 'start',
                    })
                    scrollTo(index)
                  }}
                  variant={selectedIndex === index ? 'solid' : 'outline'}
                >
                  {tab.badge}
                </Button>
              )
            })}
          </HStack>
        </Box>
        <Box
          w={'100vw'}
          overflow={'hidden'}
          className="home-solution-slider"
          pb={'121px'}
          mb={'-121px'}
        >
          <div className="embla" ref={emblaRef}>
            <div className="embla__container">
              {slides.map((slide, index) => (
                <div key={index} className="embla__slide">
                  <Box
                    h={'100%'}
                    className={`slide ${selectedIndex === index ? 'active' : ''}`}
                  >
                    <Link href={slide.href}>
                      <HomeSolutionSliderCard
                        href={slide.href}
                        badge={slide.badge}
                        title={slide.title || slide.badge}
                        image={slide.image}
                        features={slide.features || []}
                        alt={slide.alt}
                      />
                    </Link>
                  </Box>
                </div>
              ))}
            </div>
          </div>
        </Box>
      </VStack>
    </VStack>
  )
}
