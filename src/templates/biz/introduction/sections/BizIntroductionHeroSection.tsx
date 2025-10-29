'use client'

import { useRef } from 'react'

import Image from 'next/image'

import { Box, Text, chakra } from '@chakra-ui/react'
import { useGSAP } from '@gsap/react'

import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

// GSAP ScrollTrigger 플러그인 등록
gsap.registerPlugin(ScrollTrigger)

export const BizIntroductionHeroSection = () => {
  const heroContainerRef = useRef<HTMLDivElement>(null)
  const introductionIntroTextBoxRef = useRef<HTMLDivElement>(null)
  const introduceHeroBgBoxRef = useRef<HTMLDivElement>(null)
  const introduceHeroTextBoxRef = useRef<HTMLDivElement>(null)

  useGSAP(
    () => {
      const heroContainer = heroContainerRef.current
      const introTextBox = introductionIntroTextBoxRef.current
      const heroBgBox = introduceHeroBgBoxRef.current

      if (!heroContainer || !introTextBox || !heroBgBox) return

      // 초기 상태 설정
      gsap.set(introTextBox, {
        opacity: 1,
        y: 0,
        invalidateOnRefresh: true,
      })

      // ScrollTrigger 타임라인 생성
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: heroContainer,
          start: 'top top',
          end: '+=220%',
          scrub: 1,
          pin: true,
          pinSpacing: true,
          markers: false,
          invalidateOnRefresh: true,
        },
      })

      // 1. 텍스트 애니메이션 - 위로 이동하면서 페이드아웃
      tl.to(introTextBox, {
        y: -200,
        opacity: 0,
        ease: 'power2.inOut',
        duration: 1,
        invalidateOnRefresh: true,
      })
        // 2. 배경 박스 확장 - 전체 화면으로 확장
        .to(
          heroBgBox,
          {
            width: '100vw',
            height: '100vh',
            top: '0px',
            left: '50%',
            xPercent: -50,
            borderRadius: '0px',
            ease: 'power2.out',
            duration: 1.5,
            invalidateOnRefresh: true,
          },
          '<0.5',
        )
        .to(
          introduceHeroTextBoxRef.current,
          {
            opacity: 1,
            duration: 0.1,
            invalidateOnRefresh: true,
          },
          '>-0.3',
        )
    },
    { scope: heroContainerRef, dependencies: [] },
  )

  return (
    <Box
      ref={heroContainerRef}
      w={'100%'}
      h={'100vh'}
      position={'relative'}
      display={'flex'}
      flexDirection={'column'}
      alignItems={'center'}
      justifyContent={'center'}
      overflow={'hidden'}
    >
      <Box
        ref={introductionIntroTextBoxRef}
        position={'absolute'}
        top={{ lg: '120px', sm: '80px', base: '60px' }}
        left={'50%'}
        transform={'translateX(-50%)'}
        zIndex={10}
        textAlign={'center'}
        w={'100%'}
      >
        <Box
          display={'flex'}
          justifyContent={'center'}
          overflow={'hidden'}
          w={'100%'}
        >
          <Text textStyle="pre-display-2" color="primary.4" as={'span'}>
            킨코스,
          </Text>
          <Text
            textStyle="pre-display-2"
            color="grey.10"
            as={'span'}
            ml={'8px'}
          >
            성공 파트너
          </Text>
        </Box>
        <Box display={'flex'} justifyContent={'center'} overflow={'hidden'}>
          <Text
            textStyle="pre-display-2"
            color="grey.10"
            as={'span'}
            whiteSpace={{ base: 'pre-line', sm: 'nowrap' }}
          >
            {'비즈니스 가치를\n실현하세요'}
          </Text>
        </Box>
      </Box>
      <Box
        ref={introduceHeroBgBoxRef}
        position={'absolute'}
        top={{ lg: '380px', sm: '320px', base: '280px' }}
        left={'50%'}
        transform={'translateX(-50%)'}
        borderRadius={'28px 28px 0 0'}
        w={{
          lg: '1280px',
          sm: 'calc(100vw - 80px)',
          base: 'calc(100vw - 40px)',
        }}
        h={'calc(100dvh - 380px)'}
        overflow={'hidden'}
      >
        <chakra.video
          src={`/images/biz/introduce/biz-introduction-1.mp4`}
          autoPlay
          loop
          muted
          playsInline
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            objectFit: 'cover',
            objectPosition: 'center',
            width: '100%',
            height: '100%',
          }}
        />
        {/* <Image
          alt="hero bg"
          width={1920}
          height={1280}
          priority
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            objectFit: 'cover',
            objectPosition: 'center',
            width: '100%',
            height: '100%',
          }}
        /> */}

        <Box
          bg={'rgba(0, 0, 0, 0.2)'}
          w={'100%'}
          h={'100%'}
          position={'absolute'}
          top={'0'}
          left={'0'}
          zIndex={1000}
        />

        <Box
          ref={introduceHeroTextBoxRef}
          maxW={'1280px'}
          opacity={0}
          top={'180px'}
          left={'50%'}
          transform={'translateX(-50%)'}
          w={{
            lg: '1280px',
            sm: 'calc(100vw - 40px)',
            base: 'calc(100vw - 40px)',
          }}
          position={'absolute'}
          zIndex={1000}
          display={'flex'}
          flexDirection={'column'}
          gap={'20px'}
        >
          <Text textStyle={'pre-display-2'} color={'grey.0'}>
            {'"We Print\nYour Business Success"'}
          </Text>
          <Text textStyle={'pre-heading-1'} color={'grey.0'}>
            킨코스는 단순 출력을 넘어, 통합된 시스템으로 비즈니스의 문제를
            <br />
            해결하고 성장을 지원합니다.
          </Text>
        </Box>
      </Box>
    </Box>
  )
}
