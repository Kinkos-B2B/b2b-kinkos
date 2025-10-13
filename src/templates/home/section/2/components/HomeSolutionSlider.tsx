'use client'

import React, { useMemo, useRef, useState } from 'react'

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

import Slider from 'react-slick'
import 'slick-carousel/slick/slick-theme.css'
import 'slick-carousel/slick/slick.css'

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
  const sliderRef = useRef<Slider>(null)

  const [currentSlide, setCurrentSlide] = useState(0)

  const handleSlideChange = (index: number) => {
    setCurrentSlide(index)
  }

  const goToPrev = () => {
    sliderRef.current?.slickPrev()
  }

  const goToNext = () => {
    sliderRef.current?.slickNext()
  }

  const sliderSettings = {
    centerMode: true,
    focusOnSelect: true,
    infinite: true,
    slidesToShow: 1,
    centerPadding: '460px',
    speed: 500,
  }

  return (
    <VStack gap="24px" align="stretch" width="100%" mx="auto" maxW="1280px">
      {/* 헤더 섹션 */}
      <VStack gap="16px" align="stretch">
        <Box>
          <Badge size="xl" colorPalette="secondary" variant="subtle">
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
              onClick={goToPrev}
            >
              <CaretLeftIcon />
            </IconButton>
            <IconButton
              variant={'capsule'}
              size={'md'}
              bg={'grey.10'}
              onClick={goToNext}
            >
              <CaretRightIcon />
            </IconButton>
          </HStack>
        </Flex>
      </VStack>

      <VStack gap={'64px'}>
        <Box position="relative" width="100%">
          <HStack gap="8px" overflowX="auto" pb="4px" scrollBehavior="smooth">
            {slides?.map((tab, index) => {
              return (
                <Button
                  size={'md'}
                  colorPalette="black"
                  key={index}
                  onClick={() => {
                    sliderRef.current?.slickGoTo(index)
                  }}
                  variant={currentSlide === index ? 'solid' : 'outline'}
                >
                  {tab.title}
                </Button>
              )
            })}
          </HStack>
        </Box>
        <Box w={'100vw'}>
          <Slider
            ref={sliderRef}
            {...sliderSettings}
            className="center"
            afterChange={(e) => {
              handleSlideChange(e)
            }}
          >
            {slides.map((slide, index) => (
              <Box
                key={index}
                borderRadius={'20px'}
                overflow={'hidden'}
                bg={'white'}
                position={'relative'}
                cursor={'pointer'}
                css={{
                  '&:before': {
                    content: '""',
                    borderRadius: '20px',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    inset: 0,
                    height: '100%',
                    zIndex: 1,
                  },
                }}
                tabIndex={-1}
                aspectRatio={'500 / 281'}
                w={'100%'}
                boxShadow={'0 30px 80px 0 rgba(1, 45, 181, 0.1)'}
              >
                <Image
                  w={'100%'}
                  h={'100%'}
                  src={slide.image}
                  alt={slide.title}
                />
              </Box>
            ))}
          </Slider>
        </Box>
      </VStack>
    </VStack>
  )
}
