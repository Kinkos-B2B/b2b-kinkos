'use client'

import { useRef } from 'react'

import Image from 'next/image'

import { Box, Text } from '@chakra-ui/react'
import { useGSAP } from '@gsap/react'

import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

// GSAP ScrollTrigger 플러그인 등록
gsap.registerPlugin(ScrollTrigger)

export const BizIntroductionFadeSection = () => {
  const containerRef = useRef<HTMLDivElement>(null)
  const firstBgRef = useRef<HTMLDivElement>(null)
  const secondBgRef = useRef<HTMLDivElement>(null)
  const firstTextRef = useRef<HTMLDivElement>(null)
  const secondTextRef = useRef<HTMLDivElement>(null)

  useGSAP(
    () => {
      const container = containerRef.current
      const firstBg = firstBgRef.current
      const secondBg = secondBgRef.current
      const firstText = firstTextRef.current
      const secondText = secondTextRef.current

      if (!container || !firstBg || !secondBg || !firstText || !secondText)
        return

      // 초기 상태 설정
      gsap.set(firstBg, { opacity: 1 })
      gsap.set(secondBg, { opacity: 0 })
      gsap.set(firstText, { opacity: 1 })
      gsap.set(secondText, { opacity: 0 })

      // ScrollTrigger 타임라인 생성
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: container,
          start: 'top top',
          end: '+=150%',
          scrub: 1,
          pin: true,
          pinSpacing: true,
          markers: false,
          invalidateOnRefresh: true,
        },
      })

      // 1. 첫 번째 텍스트 페이드 아웃
      tl.to(firstText, {
        opacity: 0,
        duration: 0.5,
        ease: 'power2.inOut',
      })
        // 2. 첫 번째 배경 페이드 아웃과 동시에 두 번째 배경 페이드 인
        .to(
          firstBg,
          {
            opacity: 0,
            duration: 1,
            ease: 'power2.inOut',
          },
          '<0.3',
        )
        .to(
          secondBg,
          {
            opacity: 1,
            duration: 1,
            ease: 'power2.inOut',
          },
          '<',
        )
        // 3. 두 번째 텍스트 페이드 인
        .to(
          secondText,
          {
            opacity: 1,
            duration: 0.8,
            ease: 'power2.out',
          },
          '<0.5',
        )
    },
    { scope: containerRef, dependencies: [] },
  )

  return (
    <Box
      ref={containerRef}
      w={'100%'}
      h={'100vh'}
      position={'relative'}
      display={'flex'}
      alignItems={'center'}
      justifyContent={'center'}
      overflow={'hidden'}
    >
      {/* 첫 번째 배경 이미지 */}
      <Box
        ref={firstBgRef}
        position={'absolute'}
        top={'50%'}
        left={'50%'}
        transform={'translate(-50%, -50%)'}
        w={'1920px'}
        h={'1280px'}
        overflow={'hidden'}
      >
        <Image
          src={'/images/biz/introduce/fade-bg-1.png'}
          alt="비즈니스 맞춤 솔루션"
          width={1920}
          height={1280}
          priority
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            objectPosition: '50% 50%',
          }}
        />
        {/* 어두운 오버레이 */}
        <Box
          position={'absolute'}
          top={0}
          left={0}
          right={0}
          bottom={0}
          bg={'rgba(0, 0, 0, 0.3)'}
          pointerEvents={'none'}
        />
      </Box>

      {/* 두 번째 배경 이미지 */}
      <Box
        ref={secondBgRef}
        position={'absolute'}
        top={'50%'}
        left={'50%'}
        transform={'translate(-50%, -50%)'}
        w={'1920px'}
        h={'1282px'}
        overflow={'hidden'}
      >
        <Image
          src={'/images/biz/introduce/fade-bg-2.png'}
          alt="비즈니스 가치를 디자인하는 킨코스"
          width={1920}
          height={1282}
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            objectPosition: '50% 50%',
          }}
        />
        {/* 어두운 오버레이 */}
        <Box
          position={'absolute'}
          top={0}
          left={0}
          right={0}
          bottom={0}
          bg={'rgba(0, 0, 0, 0.55)'}
          pointerEvents={'none'}
        />
      </Box>

      {/* 첫 번째 텍스트 콘텐츠 */}
      <Box
        ref={firstTextRef}
        position={'absolute'}
        top={'50%'}
        left={'50%'}
        transform={'translate(-50%, -50%)'}
        display={'flex'}
        flexDirection={'column'}
        gap={'24px'}
        alignItems={'center'}
        zIndex={1}
        w={'100%'}
        px={'20px'}
      >
        <Box
          display={'flex'}
          flexDirection={'column'}
          gap={'20px'}
          alignItems={'center'}
        >
          <Text
            textStyle={'pre-display-3'}
            color={'grey.0'}
            textAlign={'center'}
            whiteSpace={'pre-wrap'}
          >
            30년 노하우로 완성되는
            {'\n'}
            비즈니스 맞춤 솔루션
          </Text>
        </Box>

        <Text
          textStyle={'pre-heading-2'}
          color={'grey.0'}
          textAlign={'center'}
          whiteSpace={'pre-wrap'}
        >
          성공적인 비즈니스는 차별화된 아이디어와
          {'\n'}
          그것을 완벽하게 구현하는 실행력에 달려있습니다.
        </Text>
      </Box>

      {/* 두 번째 텍스트 콘텐츠 */}
      <Box
        ref={secondTextRef}
        position={'absolute'}
        top={'50%'}
        left={'50%'}
        transform={'translate(-50%, -50%)'}
        display={'flex'}
        flexDirection={'column'}
        gap={'24px'}
        alignItems={'center'}
        zIndex={1}
        w={'100%'}
        px={'20px'}
      >
        <Box
          display={'flex'}
          flexDirection={'column'}
          gap={'20px'}
          alignItems={'center'}
        >
          <Text
            textStyle={'pre-display-3'}
            color={'grey.0'}
            textAlign={'center'}
            whiteSpace={'pre-wrap'}
          >
            비즈니스 가치를
            {'\n'}
            디자인하는 킨코스
          </Text>
        </Box>

        <Text
          textStyle={'pre-heading-2'}
          color={'grey.0'}
          textAlign={'center'}
          whiteSpace={'pre-wrap'}
          w={'100%'}
        >
          고객의 비즈니스 가치를 높이는 모든 디자인과
          {'\n'}
          제작 과정을 하나로 연결하는 최적의 맞춤 솔루션을 제공합니다.
        </Text>
      </Box>
    </Box>
  )
}
