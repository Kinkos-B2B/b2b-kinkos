'use client'

import React, { useCallback, useEffect, useRef, useState } from 'react'

import {
  Box,
  Button,
  Flex,
  HStack,
  IconButton,
  Image,
  Text,
  VStack,
} from '@chakra-ui/react'
import { CaretLeftIcon, CaretRightIcon } from '@phosphor-icons/react/dist/ssr'

import useEmblaCarousel from 'embla-carousel-react'

import { Badge } from '@/components/ui/badge'

import './home-slider.css'

interface SolutionSliderProps {
  slides: {
    title: string
    image: string
  }[]
}

export const HomeSolutionSlider: React.FC<SolutionSliderProps> = ({
  slides,
}) => {
  const ref = useRef<HTMLDivElement>(null)

  const tabButtonsRef = useRef<HTMLButtonElement[]>([])

  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: 'center',
    containScroll: 'trimSnaps',
  })

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

  const onSelect = useCallback(() => {
    if (!emblaApi) return
    setSelectedIndex(emblaApi.selectedScrollSnap())
    tabButtonsRef.current[emblaApi.selectedScrollSnap()].scrollIntoView({
      behavior: 'smooth',
      block: 'nearest',
      inline: 'start',
    })
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
            fontSize={{ base: '32px', sm: '40px', lg: '48px' }}
            fontWeight="700"
            color="grey.10"
            letterSpacing="-0.48px"
            lineHeight="1.4"
            whiteSpace="nowrap"
          >
            킨코스가 제안하는 비즈니스 맞춤 솔루션
          </Text>

          <HStack gap="10px">
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
          {/* <Box
            position="absolute"
            top="0px"
            bottom="0px"
            left="0"
            w="30px"
            height={'48px'}
            zIndex={1}
            bgGradient={
              'linear-gradient(270deg, #FFF 0%, rgba(255, 255, 255, 0.00) 100%)'
            }
          /> */}

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
                  size={{ base: 'md', lg: 'lg' }}
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
                  {tab.title}
                </Button>
              )
            })}
          </HStack>
        </Box>
        <Box w={'100vw'} overflow={'hidden'}>
          <div className="embla" ref={emblaRef}>
            <div className="embla__container">
              {slides.map((slide, index) => (
                <div key={index} className="embla__slide">
                  <Box
                    borderRadius={'20px'}
                    overflow={'hidden'}
                    bg={'white'}
                    position={'relative'}
                    cursor={'pointer'}
                    tabIndex={-1}
                    boxShadow={'0 30px 80px 0 rgba(1, 45, 181, 0.1)'}
                    maxW={{
                      base: 'calc(100vw - 40px)',
                      sm: '70vw',
                      lg: '1000px',
                    }}
                    maxH={'563px'}
                    aspectRatio={'16/9'}
                    className={`slide ${selectedIndex === index ? 'active' : ''}`}
                  >
                    <Image
                      w={'100%'}
                      h={'100%'}
                      src={slide.image}
                      alt={slide.title}
                      objectFit="cover"
                    />
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
