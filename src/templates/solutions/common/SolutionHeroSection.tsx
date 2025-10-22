'use client'

import { ReactElement, useEffect, useRef } from 'react'

import {
  Center,
  Container,
  Image,
  Text,
  useBreakpoint,
  useBreakpointValue,
} from '@chakra-ui/react'
import { Box, VStack } from '@chakra-ui/react'
import { useGSAP } from '@gsap/react'

import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'

interface Props {
  badge: string
  title: ReactElement
  heroContent: ReactElement
  buttonContent: string
  link: string
}

const SolutionHeroSectionIntroBlock = ({
  badge,
  title,
  buttonContent,
  link,
}: Props) => {
  return (
    <VStack gap={'40px'}>
      <VStack gap={'20px'}>
        <Badge variant="subtle" colorPalette="primary">
          {badge}
        </Badge>
        {title}
      </VStack>
      <Button variant="solid" colorPalette="primary" size={'lg'}>
        {buttonContent}
      </Button>
    </VStack>
  )
}

export const SolutionHeroSection = ({
  introBlockData,
}: {
  introBlockData: Props
}) => {
  const startPointY = useBreakpointValue({
    base: 64 + 80,
    sm: 80 + 80,
    lg: 160 + 90,
  })

  const sectionRef = useRef<HTMLDivElement>(null)
  const imageRef = useRef<HTMLImageElement>(null) // 절대 위치 이미지 박스
  const imageBoxRef = useRef<HTMLDivElement>(null) // 절대 위치 이미지 박스
  const introBlockRef = useRef<HTMLDivElement>(null) // 소개 블록 박스

  const dimOverlayRef = useRef<HTMLDivElement>(null) // dim overlay
  const dimOverlayTextRef = useRef<HTMLDivElement>(null) // dim overlay text

  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger)
    // 초기 상태 설정

    gsap.set(dimOverlayRef.current, {
      opacity: 0,
    })

    gsap.set(dimOverlayTextRef.current, {
      opacity: 0,
      y: 50,
    })

    // 섹션 pin 애니메이션
    ScrollTrigger.create({
      trigger: introBlockRef.current,
      start: `top top+=${startPointY}px`,
      end: '+=100%',
      pin: true,
      invalidateOnRefresh: true,
    })

    // 1) 마스터 핀: 섹션 범위 안에서만 고정
    ScrollTrigger.create({
      trigger: imageBoxRef.current,
      start: 'top top',
      endTrigger: sectionRef.current,
      end: 'bottom bottom', // 섹션 bottom이 뷰포트 top에 닿으면 핀 해제
      pin: true,
      anticipatePin: 1,
      pinSpacing: true,
      invalidateOnRefresh: true,
    })

    // 2) 단계 시퀀스: 300px(이미지) → 100px(dim) → 100px(text)
    const tl = gsap.timeline({
      defaults: { ease: 'none' },
      scrollTrigger: {
        trigger: imageBoxRef.current,
        start: 'top top',
        end: '+=500', // 총 500px 구간만 진행(핀은 위에서 더 길게 유지 가능)
        scrub: true,
        invalidateOnRefresh: true,
      },
    })

    // 0~300px: 이미지 풀사이즈
    tl.to(imageRef.current, {
      width: '100dvw',
      height: '100dvh',
      borderRadius: 0,
      duration: 3, // 비율값(3:1:1) → 300px에 해당
      invalidateOnRefresh: true,
    })

    // 300~400px: dimOverlay 0→1
    tl.to(dimOverlayRef.current, {
      opacity: 1,
      duration: 1, // 100px 구간
      invalidateOnRefresh: true,
    })

    // 400~500px: dimOverlayText 등장
    tl.to(dimOverlayTextRef.current, {
      y: 0,
      opacity: 1,
      duration: 1, // 100px 구간
      invalidateOnRefresh: true,
    })
  })

  return (
    <VStack
      w="100%"
      pt={{ base: '64px', sm: '80px', lg: '160px' }}
      overflow={'hidden'}
      gap={'0px'}
      h={'300dvh'}
      ref={sectionRef}
    >
      <Box ref={introBlockRef}>
        <SolutionHeroSectionIntroBlock {...introBlockData} />
      </Box>
      <Box
        ref={imageBoxRef}
        w="100%"
        h={'100dvh'}
        display="flex"
        py={'100px'}
        justifyContent="center"
        alignItems="center"
        position="relative"
        style={{
          borderRadius: '28px',
        }}
      >
        <Center
          ref={dimOverlayRef}
          position="absolute"
          top="0"
          left="0"
          bg={'rgba(0, 0, 0, 0.5)'}
          w="100%"
          h="100%"
          opacity={0}
          zIndex="1"
        >
          <VStack gap={'28px'} textAlign={'center'} ref={dimOverlayTextRef}>
            {introBlockData.heroContent}
          </VStack>
        </Center>
        <Image
          ref={imageRef}
          src={'/images/solutions/solutions-hero-section.jpg'}
          alt="solution hero section"
          w={{
            base: 'calc(100vw - 40px)',
            sm: 'calc(100vw - 80px)',
            lg: '1280px',
          }}
          h={'calc(100dvh - 170px)'}
          borderRadius={'28px'}
          objectFit="cover"
        />
      </Box>
    </VStack>
  )
}
