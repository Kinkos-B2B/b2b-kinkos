import { useEffect, useRef, useState } from 'react'

import { Box, Image, Text, VStack } from '@chakra-ui/react'

import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Lottie from 'lottie-react'

import down from '@/public/images/home/intro/down.json'

// window 객체에 cleanup 함수 타입 추가
declare global {
  interface Window {
    __introCleanup?: () => void
  }
}

// GSAP ScrollTrigger 등록
gsap.registerPlugin(ScrollTrigger)

// 이미지 경로들
const imgMoney = '/images/home/intro/intro-img-money.png'
const imgPaper = '/images/home/intro/intro-img-paper.png'
const imgFolder = '/images/home/intro/intro-img-folder.png'
const imgCheckList = '/images/home/intro/intro-img-check-list.png'
const imgBox = '/images/home/intro/intro-img-wing-box.png'
const imgGiftBox = '/images/home/intro/intro-img-giftbox.png'
const imgBanner = '/images/home/intro/intro-img-banner.png'
const imgBg = '/images/home/intro/intro-bg.svg'

// 텍스트 컨텐츠 정의
const textContents = [
  {
    line1: 'X배너 9,900원',
    line2: '하지만 진짜 궁금한 건 따로 있죠',
  },
  {
    line1: '우리 일정에 맞출 수 있는지',
    line2: '필요한 장비와 시스템을 갖췄는지',
  },
  {
    line1: 'B2B 기업 인쇄',
    line2: '딱 맞는 솔루션과 전문가를 찾아보세요!',
  },
  // {
  //   line1: 'For Your Business Success,',
  //   line2: "KINKO'S B2B",
  // },
]

interface Props {
  onCompleted: () => void
}

export const HomeIntroSection = ({ onCompleted }: Props) => {
  const [isAnimating, setIsAnimating] = useState(false)
  const introRef = useRef<HTMLDivElement>(null)
  const scrollContainerRef = useRef<HTMLDivElement>(null)
  const currentTextIndex = useRef(0)

  const mouseDownInfoRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // body 스크롤 막기
    document.body.style.overflow = 'hidden'

    const introElement = introRef.current
    const scrollContainer = scrollContainerRef.current
    if (!introElement || !scrollContainer) return

    // 이미지 순차 등장 애니메이션
    const imageSequence = [
      { selector: '.img-banner', delay: 0.3 },
      { selector: '.img-gift-box', delay: 0.6 },
      { selector: '.img-box', delay: 0.9 },
      { selector: '.img-folder', delay: 1.1 },
      { selector: '.img-checklist', delay: 1.2 },
      { selector: '.img-paper', delay: 1.5 },
      { selector: '.img-money', delay: 1.8 },
    ]

    // 이미지들과 텍스트들 초기 상태 설정
    gsap.set(
      [
        '.img-banner',
        '.img-gift-box',
        '.img-box',
        '.img-folder',
        '.img-checklist',
        '.img-paper',
        '.img-money',
      ],
      {
        opacity: 0,
        scale: 0,
      },
    )

    // 모든 텍스트 초기 상태 설정
    gsap.set('[data-text-section]', {
      opacity: 0,
    })

    gsap.set('.intro-text', {
      opacity: 0,
      y: 50,
    })

    scrollContainer.style.overflow = 'hidden'

    // Timeline 생성 - 모든 이미지 애니메이션이 끝난 후 첫 번째 텍스트 애니메이션 실행
    const tl = gsap.timeline({
      onComplete: () => {
        gsap.set('[data-index="0"]', { opacity: 1 })

        gsap.to(mouseDownInfoRef.current, {
          opacity: 1,
          duration: 1,
          ease: 'power2.out',
        })

        gsap.fromTo(
          '[data-index="0"] .intro-text',
          { opacity: 0, y: 50 },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            stagger: 0.2,
            ease: 'power2.out',
            onComplete: () => {
              scrollContainer.style.overflow = 'auto'
              // 첫 번째 텍스트 애니메이션 완료 후 이미지 바운스 애니메이션 실행
              startImageBounceAnimation()
              // 기존 cleanup 함수가 있으면 먼저 실행 (Strict Mode 대응)
              if (window.__introCleanup) {
                window.__introCleanup()
                delete window.__introCleanup
              }
              // 그 다음 스크롤 트리거 설정
              const cleanup = setupScrollTriggers()
              // 정리 함수를 저장해두고 언마운트 시 호출
              if (cleanup) {
                // cleanup 함수를 전역으로 저장하거나 ref에 저장
                window.__introCleanup = cleanup
              }
            },
          },
        )
      },
    })

    // 각 이미지 애니메이션을 timeline에 추가
    imageSequence.forEach(({ selector, delay }) => {
      tl.to(
        selector,
        {
          opacity: 1,
          scale: 1,
          duration: 0.5,
          ease: 'back.out(1.7)',
        },
        delay,
      )
    })

    // 이미지 바운스 애니메이션 함수
    const startImageBounceAnimation = () => {
      const imageSelectors = [
        '.img-banner',
        '.img-gift-box',
        '.img-box',
        '.img-folder',
        '.img-checklist',
        '.img-paper',
        '.img-money',
      ]

      // 각 이미지에 균등한 바운스 애니메이션 적용
      imageSelectors.forEach((selector, index) => {
        const bounceDelay = index * 0.1 // 0.1초씩 지연
        const bounceDuration = 1 + Math.random() * 0.4 // 0.6-1.0초 랜덤 지속시간

        gsap.to(selector, {
          y: `-10px`,
          duration: bounceDuration,
          ease: 'none',
          delay: bounceDelay,
          yoyo: true,
          repeat: -1,
        })
      })
    }

    // 섹션 전환 애니메이션 함수 (공통 로직)
    const animateToSection = (
      targetIndex: number,
      direction: 'down' | 'up',
      isScrollBlockedRef: { current: boolean },
      lastScrollTopRef?: { current: number },
    ) => {
      // 애니메이션 중이면 무시
      if (isAnimating || isScrollBlockedRef.current) {
        return false
      }

      // 유효한 인덱스인지 확인
      if (
        targetIndex < 0 ||
        targetIndex >= textContents.length ||
        targetIndex === currentTextIndex.current
      ) {
        return false
      }

      // 스크롤 차단 시작
      isScrollBlockedRef.current = true
      setIsAnimating(true)
      const previousIndex = currentTextIndex.current
      currentTextIndex.current = targetIndex
      const viewportHeight = window.innerHeight
      const targetScrollTop = targetIndex * viewportHeight

      // 스크롤 위치를 즉시 업데이트 (스크롤 이벤트가 잘못된 인덱스를 계산하지 않도록)
      scrollContainer.scrollTop = targetScrollTop
      if (lastScrollTopRef) {
        lastScrollTopRef.current = targetScrollTop
      }

      if (direction === 'down') {
        // 아래로 이동: 이전 텍스트 페이드아웃 → 현재 텍스트 페이드인
        if (previousIndex >= 0) {
          gsap.to(`[data-index="${previousIndex}"]`, {
            opacity: 0,
            duration: 0.5,
          })
        }

        // 현재 텍스트 페이드인
        gsap.set(`[data-index="${targetIndex}"]`, { opacity: 1 })
        gsap.fromTo(
          `[data-index="${targetIndex}"] .intro-text`,
          { opacity: 0, y: 50 },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            stagger: 0.2,
            ease: 'power2.out',
            onComplete: () => {
              setIsAnimating(false)
              isScrollBlockedRef.current = false
            },
          },
        )
      } else {
        // 위로 이동: 현재 텍스트 페이드아웃 → 이전 텍스트 페이드인
        if (previousIndex >= 0) {
          gsap.to(`[data-index="${previousIndex}"]`, {
            opacity: 0,
            duration: 0.5,
          })
        }

        // 이전 텍스트 페이드인
        gsap.set(`[data-index="${targetIndex}"]`, { opacity: 1 })
        gsap.fromTo(
          `[data-index="${targetIndex}"] .intro-text`,
          { opacity: 0, y: 50 },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            stagger: 0.2,
            ease: 'power2.out',
            onComplete: () => {
              setIsAnimating(false)
              isScrollBlockedRef.current = false
            },
          },
        )
      }

      return true
    }

    // 스크롤 트리거 설정 함수
    const setupScrollTriggers = () => {
      const lastScrollTopRef = { current: 0 }
      const isScrollBlockedRef = { current: false }
      const isClickTriggeredRef = { current: false }
      const isExitingRef = { current: false } // 인트로 종료 애니메이션 중인지 추적
      const abortController = new AbortController()

      // 스크롤 이벤트 리스너 추가
      const handleScroll = (e: Event) => {
        // 애니메이션 중이면 스크롤 무시
        if (isAnimating || isScrollBlockedRef.current) {
          e.preventDefault()
          e.stopPropagation()
          // 스크롤 위치를 이전 위치로 되돌리기
          scrollContainer.scrollTop = lastScrollTopRef.current
          return false
        }

        // 클릭으로 인한 스크롤 변경은 무시
        if (isClickTriggeredRef.current) {
          // 다음 이벤트 루프에서 플래그 리셋
          setTimeout(() => {
            isClickTriggeredRef.current = false
          }, 0)
          return
        }

        const scrollTop = scrollContainer.scrollTop
        const viewportHeight = window.innerHeight
        const currentIndex = Math.round(scrollTop / viewportHeight)
        const scrollDirection =
          scrollTop > lastScrollTopRef.current ? 'down' : 'up'

        // 현재 인덱스가 유효하고 이전과 다를 때만 애니메이션 실행
        if (
          currentIndex >= 0 &&
          currentIndex < textContents.length &&
          currentIndex !== currentTextIndex.current
        ) {
          lastScrollTopRef.current = scrollTop
          animateToSection(
            currentIndex,
            scrollDirection,
            isScrollBlockedRef,
            lastScrollTopRef,
          )
        }

        // 마지막 섹션 완료 시 인트로 종료
        if (currentIndex >= textContents.length) {
          // 위로 사라지는 애니메이션
          setIsAnimating(true)
          isExitingRef.current = true // 종료 애니메이션 시작

          gsap.to(introElement, {
            y: '-120vh',
            duration: 1.2,
            ease: 'power2.inOut',
            onComplete: () => {
              onCompleted()
              document.body.style.overflow = ''
            },
          })
        }
      }

      // 클릭 이벤트 리스너 추가
      const handleClick = (e: MouseEvent) => {
        // 종료 애니메이션 중이면 클릭 무시
        if (isExitingRef.current) {
          e.preventDefault()
          e.stopPropagation()
          return
        }

        // 애니메이션 중이면 클릭 무시
        if (isAnimating || isScrollBlockedRef.current) {
          e.preventDefault()
          e.stopPropagation()
          return
        }

        // 이벤트 버블링 방지
        e.preventDefault()
        e.stopPropagation()

        // 클릭으로 인한 스크롤 변경임을 표시
        isClickTriggeredRef.current = true

        // 현재 텍스트 인덱스를 직접 사용 (스크롤 위치 기반 계산 대신)
        const currentIndex = currentTextIndex.current
        const targetIndex = currentIndex + 1

        // 마지막 섹션을 넘어가면 인트로 종료
        if (targetIndex >= textContents.length) {
          isExitingRef.current = true // 종료 애니메이션 시작
          gsap.to(introElement, {
            y: '-120vh',
            duration: 1.2,
            ease: 'power2.inOut',
            onComplete: () => {
              onCompleted()
              document.body.style.overflow = ''
            },
          })
          return
        }

        // 다음 섹션으로 이동
        animateToSection(
          targetIndex,
          'down',
          isScrollBlockedRef,
          lastScrollTopRef,
        )
      }

      // wheel 이벤트도 차단 (마우스 휠)
      const handleWheel = (e: WheelEvent) => {
        if (isAnimating || isScrollBlockedRef.current) {
          e.preventDefault()
          e.stopPropagation()
          return false
        }
      }

      // touch 이벤트도 차단 (터치 스크롤)
      const handleTouchMove = (e: TouchEvent) => {
        if (isAnimating || isScrollBlockedRef.current) {
          e.preventDefault()
          e.stopPropagation()
          return false
        }
      }

      scrollContainer.addEventListener('scroll', handleScroll, {
        passive: false,
        signal: abortController.signal,
      })

      scrollContainer.addEventListener('wheel', handleWheel, {
        passive: false,
        signal: abortController.signal,
      })
      scrollContainer.addEventListener('touchmove', handleTouchMove, {
        passive: false,
        signal: abortController.signal,
      })

      window.addEventListener('click', handleClick, {
        signal: abortController.signal,
      })

      return () => {
        // AbortController를 사용하여 모든 이벤트 리스너를 한 번에 제거
        abortController.abort()
      }
    }

    return () => {
      document.body.style.overflow = ''
      if (window.__introCleanup) {
        window.__introCleanup()
        delete window.__introCleanup
      }
    }
  }, [])

  return (
    <Box
      ref={introRef}
      position="fixed"
      top="0"
      left="0"
      zIndex={'100000000'}
      h="100vh"
      w="100dvw"
      bgImage={`url(${imgBg})`}
      bgColor={'grey.10'}
      bgSize="cover"
      bgRepeat="no-repeat"
    >
      {/* 스크롤 가능한 컨테이너 */}
      <Box
        ref={scrollContainerRef}
        position="absolute"
        top="0"
        cursor="pointer"
        left="0"
        w="100%"
        h="100%"
        overflowY="auto"
        overflowX="hidden"
      >
        {/* 스크롤을 위한 더미 높이: (텍스트 섹션 수 + 1) * 100vh */}
        <Box h={`${(textContents.length + 1) * 100}svh`} position="relative">
          {/* 텍스트 섹션들 - 각각 고정 위치 */}
          {textContents.map((content, index) => (
            <VStack
              position="fixed"
              px={{ base: '20px', sm: '40px', lg: '0px' }}
              w="100%"
              key={index}
              data-index={index}
              data-text-section
              gap={{ base: '10px', lg: '20px' }}
              left="50%"
              top="50%"
              transform="translate(-50%, -50%)"
              textAlign="center"
              opacity={0}
              pointerEvents="none"
              zIndex="10"
            >
              <Box overflow={'hidden'}>
                <Text
                  className="intro-text"
                  textStyle="pre-display-2"
                  color="grey.0"
                  textAlign="center"
                  wordBreak="keep-all"
                >
                  {content.line1}
                </Text>
              </Box>
              <Box overflow={'hidden'}>
                <Text
                  className="intro-text"
                  textStyle="pre-display-2"
                  color="grey.0"
                  textAlign="center"
                  wordBreak="keep-all"
                >
                  {content.line2}
                </Text>
              </Box>
            </VStack>
          ))}
        </Box>
      </Box>

      {/* 이미지들은 반응형 위치 */}
      <Box
        className="img-money"
        position="absolute"
        left={{ base: '60%', sm: '70%', lg: '1084px' }}
        bottom={{ base: '10%', sm: '10%', lg: '119px' }}
        w={{ base: '120px', sm: '150px', lg: '160px' }}
        h={{ base: '150px', sm: '190px', lg: '200px' }}
        transform="rotate(342deg)"
        opacity="0"
        scale="1"
      >
        <Image
          src={imgMoney}
          alt="money"
          w="100%"
          h="100%"
          objectFit="contain"
        />
      </Box>

      <Box
        className="img-paper"
        position="absolute"
        left={{ base: '70%', sm: '80%', lg: '1221px' }}
        bottom="-10px"
        w={{ base: '280px', sm: '360px', lg: '446px' }}
        opacity="0"
        scale="1"
      >
        <Image
          src={imgPaper}
          alt="paper"
          w="100%"
          h="100%"
          objectFit="contain"
        />
      </Box>

      <Box
        className="img-folder"
        position="absolute"
        right={{ base: '-10%', sm: '-10%', lg: '-30px' }}
        top={{
          base: '15%',
          sm: '30%',
          lg: 'calc(50% - 60px)',
        }}
        transform="translateY(-50%) rotate(12deg)"
        w={{ base: '200px', sm: '280px', lg: '350px' }}
        h={{ base: '200px', sm: '280px', lg: '350px' }}
        opacity="0"
        scale="1"
      >
        <Image
          src={imgFolder}
          alt="folder"
          w="100%"
          h="100%"
          objectFit="contain"
        />
      </Box>

      {/* 체크리스트 이미지 - 반응형 위치 */}
      <Box
        className="img-checklist"
        position="absolute"
        display={{ base: 'none', lg: 'block' }}
        left={{ base: '5%', sm: '3%', lg: '31px' }}
        top={{ base: '8%', sm: '6%', lg: '45px' }}
        w={{ base: '150px', sm: '190px', lg: '240px' }}
        h={{ base: '150px', sm: '190px', lg: '240px' }}
        opacity="0"
        scale="1"
      >
        <Image
          src={imgCheckList}
          alt="checklist"
          w="100%"
          h="100%"
          objectFit="contain"
        />
      </Box>

      {/* 박스 이미지 - 반응형 위치 */}
      <Box
        className="img-box"
        position="absolute"
        display={{ base: 'none', lg: 'block' }}
        left={{ base: '65%', sm: '75%', lg: '70%' }}
        top={{ base: '12%', sm: '10%', lg: '5%' }}
        w={{ base: '200px', sm: '260px', lg: '280px' }}
        h={{ base: '160px', sm: '200px', lg: '200px' }}
        opacity="0"
        scale="1"
      >
        <Image src={imgBox} alt="box" w="100%" h="100%" objectFit="contain" />
      </Box>

      {/* 선물상자 이미지 - 반응형 위치 */}
      <Box
        className="img-gift-box"
        position="absolute"
        left={{ base: '0%', sm: '-30px', lg: '227px' }}
        bottom={{ base: '8%', sm: '5%', lg: '64px' }}
        w={{ base: '180px', sm: '240px', lg: '250px' }}
        h={{ base: '190px', sm: '250px', lg: '260px' }}
        opacity="0"
        scale="1"
      >
        <Image
          src={imgGiftBox}
          alt="gift box"
          w="100%"
          h="100%"
          objectFit="contain"
        />
      </Box>

      {/* 배너 이미지 - 반응형 위치 */}
      <Box
        className="img-banner"
        position="absolute"
        left={{ base: '-10%', sm: '-10%', lg: '124px' }}
        top={{ base: '-5%', sm: '-4%', lg: '-39px' }}
        w={{ base: '250px', sm: '330px', lg: '370px' }}
        h={{ base: '320px', sm: '420px', lg: '420px' }}
        opacity="0"
        scale="1"
      >
        <Image
          src={imgBanner}
          alt="banner"
          w="100%"
          h="100%"
          objectFit="contain"
        />
      </Box>
      <Box
        opacity={0}
        ref={mouseDownInfoRef}
        position={'fixed'}
        bottom={'1.25rem'}
        w={'100%'}
        display={'flex'}
        justifyContent={'center'}
        alignItems={'center'}
        gap={'20px'}
        flexDirection={'column'}
      >
        <Text color={'#ffffffc0'} textStyle={'pre-body-4'} fontWeight={'500'}>
          아래로 내려보세요
        </Text>
        <Box w="50px" h="50px" color={'red'}>
          <Lottie
            loop
            animationData={down}
            color="red"
            style={{ color: 'red', fill: 'red' }}
          />
        </Box>
      </Box>
    </Box>
  )
}
