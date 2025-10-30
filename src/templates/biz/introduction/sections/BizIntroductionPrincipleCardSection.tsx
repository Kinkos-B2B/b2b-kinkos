'use client'

import { useRef } from 'react'

import { Box, Container, Stack, Text } from '@chakra-ui/react'
import { useGSAP } from '@gsap/react'

import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

import { ROUTES } from '@/constants/routes'

import { BizIntroductionPrincipleCard } from '../components/BizIntroductionPrincipleCard'

// GSAP ScrollTrigger 플러그인 등록
gsap.registerPlugin(ScrollTrigger)

export const principleCardsData = [
  {
    principle: '원칙1. 본질에 집중합니다',
    title: '품질과 속도',
    description: [
      '원하는 품질을, 원하는 시간에, 전국 어디서나 동일하게.',
      '최고의 품질 관리 시스템으로 고객이 원하는 결과물을 정확하게 완성합니다.',
    ],
    imageSrc: '/images/biz/introduce/kinkos-principle-1.png',
    imageAlt: '품질과 속도 이미지',
    backgroundColor: 'accent.violet1',
    badgeColor: 'primary.1',
    buttonColor: 'primary.4',
    href: ROUTES.BIZ.PRODUCTION,
  },
  {
    principle: '원칙2. 끝까지 책임집니다.',
    title: '원스톱 포장 & 배송',
    description: [
      "우리의 일은 '인쇄 완료'에서 끝나지 않습니다.",
      '고객의 결과물이 최종 목적지에 안전하게 도착할 때까지 끝까지 관리하고',
      '책임집니다.',
    ],
    imageSrc: '/images/biz/introduce/kinkos-principle-2.png',
    imageAlt: '원스톱 포장 & 배송 이미지',
    backgroundColor: 'accent.yellow1',
    badgeColor: 'grey.0',
    buttonColor: 'secondary.4',
    href: ROUTES.BIZ.PACKAGING,
  },
  {
    principle: '원칙3. 자산을 관리합니다.',
    title: '정보 보안 시스템',
    description: [
      "파트너십의 가장 기본은 고객의 자산을 지키는 '신뢰'입니다.",
      '국제 표준 보안 시스템으로 고객의 모든 디지털 자산을 안전하게 보호하고',
      '관리합니다.',
    ],
    imageSrc: '/images/biz/introduce/kinkos-principle-3.png',
    imageAlt: '정보 보안 시스템 이미지',
    backgroundColor: 'primary.2',
    badgeColor: 'primary.1',
    buttonColor: 'primary.4',
    href: ROUTES.BIZ.IT_SECURITY,
  },
  {
    principle: '원칙4. 전문가가 담당합니다.',
    title: '1:1 전문가 지원',
    description: [
      "작업자는 주어진 '정답'을 수행하지만, 파트너는 '최적의 답'을 찾습니다.",
      '킨코스의 전문가들이 더 나은 품질, 효율적인 공정, 합리적인 비용을 먼저',
      '제안해 드립니다.',
    ],
    imageSrc: '/images/biz/introduce/kinkos-principle-4.png',
    imageAlt: '1:1 전문가 지원 이미지',
    backgroundColor: 'accent.red1',
    badgeColor: 'grey.0',
    buttonColor: 'secondary.4',
    href: ROUTES.BIZ.SUPPORT,
  },
  {
    principle: '원칙5. 가능성을 제공합니다.',
    title: '센터 네트워크',
    description: [
      '전국 20여 개 센터의 네트워크가 당신의 비즈니스를 지원합니다.',
      '강력한 네트워크로 전국 동시 프로모션부터 지사별 맞춤 제작까지',
      '비즈니스를 현실로 만듭니다.',
    ],
    imageSrc: '/images/biz/introduce/kinkos-principle-5.png',
    imageAlt: '센터 네트워크 이미지',
    backgroundColor: 'accent.blue1',
    badgeColor: 'primary.1',
    buttonColor: 'primary.4',
    href: ROUTES.BIZ.NETWORK,
  },
]

export const BizIntroductionPrincipleCardSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null)
  const headerRef = useRef<HTMLDivElement>(null)
  const cardsRef = useRef<HTMLDivElement[]>([])

  useGSAP(
    () => {
      const section = sectionRef.current
      const header = headerRef.current
      const cards = cardsRef.current

      if (!section || !header || !cards.length) return

      // 초기 상태 설정
      gsap.set(header, {
        opacity: 1,
      })

      gsap.set(cards[0], {
        opacity: 1,
        scale: 1,
        y: 0,
      })

      // 나머지 카드들은 화면 아래로 대기(불투명도는 유지, 클리핑으로 보이지 않게)
      cards.slice(1).forEach((card, i) => {
        gsap.set(card, {
          opacity: 0,
          scale: 0.9,
          y: 120,
          zIndex: 0,
        })
      })

      const renderByProgress = (progress: number) => {
        const total = cards.length
        const steps = total - 1
        if (steps <= 0) return

        const exact = progress * steps
        const current = Math.floor(exact)
        const next = Math.min(current + 1, steps)
        const local = exact - current // 0~1

        // 세 단계: hold(현재 고정) -> swap(교체) -> holdNext(다음 고정)
        const HOLD = 0.4
        const TRANSITION = 0.2
        const phase =
          local < HOLD ? 'hold'
          : local < HOLD + TRANSITION ? 'swap'
          : 'holdNext'
        const t = phase === 'swap' ? (local - HOLD) / TRANSITION : 0

        const Y = 80
        const SCALE = 0.15 // 현재 카드가 구겨져 보이지 않도록 축소 폭 최소화

        const curCard = cards[current]
        const nxtCard = cards[next]
        if (!curCard || !nxtCard) return

        const NEXT_START_Y = Math.max(
          160,
          Math.round((curCard.offsetHeight || 600) * 0.9),
        )

        // 먼 카드들 즉시 정리 (대상 두 장만 애니메이션)
        cards.forEach((card, index) => {
          if (index < current) {
            gsap.set(card, {
              opacity: 0,
              scale: 0.85,
              y: -Y,
            })
          } else if (index > next) {
            gsap.set(card, {
              opacity: 0, // 다음 이후 카드는 절대 노출되지 않도록 0으로 유지
              scale: 0.9,
              y: NEXT_START_Y,
            })
          }
        })

        gsap.killTweensOf([curCard, nxtCard])

        if (phase === 'hold') {
          gsap.to(curCard, {
            opacity: 1,
            scale: 1,
            y: 0,
            rotateX: 0,
            duration: 0.3,
            ease: 'power2.out',
            overwrite: 'auto',
          })
          gsap.set(nxtCard, {
            opacity: 0, // 홀드 구간에서는 절대 보이지 않도록
            scale: 0.98,
            y: NEXT_START_Y,
          })
          return
        }

        if (phase === 'swap') {
          // opacity는 현재/다음 모두 1로 고정, 위치/스케일만 교차
          gsap.to(curCard, {
            opacity: 1 - t,
            scale: 1 - SCALE * t,
            y: -Y * t,
            duration: 0.3,
            ease: 'power2.out',
            overwrite: 'auto',
          })

          gsap.to(nxtCard, {
            opacity: 1,
            scale: 0.98 + (1 - 0.98) * t,
            y: NEXT_START_Y * (1 - t),
            duration: 0.3,
            ease: 'power2.out',
            overwrite: 'auto',
          })
          return
        }

        gsap.set(curCard, {
          opacity: 0,
          scale: 0.98,
          y: -Y,
        })

        gsap.to(nxtCard, {
          opacity: 1,
          scale: 1,
          y: 0,
          duration: 0.3,
          ease: 'power2.out',
          overwrite: 'auto',
        })
      }

      // 초기 렌더링
      renderByProgress(0)

      ScrollTrigger.create({
        trigger: section,
        start: 'top top',
        end: `+=${cards.length * 90}%`,
        pin: true,
        pinSpacing: true,
        scrub: 1,
        invalidateOnRefresh: true,
        onUpdate: (self) => {
          renderByProgress(self.progress)
        },
        onLeave: () => {
          const lastCard = cards[cards.length - 1]
          if (lastCard) {
            gsap.set(lastCard, { opacity: 1, scale: 1, y: 0 })
          }
        },
        onEnterBack: () => {
          const lastCard = cards[cards.length - 1]
          if (lastCard) {
            gsap.set(lastCard, { opacity: 1, scale: 1, y: 0 })
          }
        },
      })
    },
    { scope: sectionRef, dependencies: [] },
  )

  return (
    <Box
      ref={sectionRef}
      w="100%"
      h={'100dvh'}
      pt={{ base: '60px', lg: '13vh' }}
      overflow={'hidden'}
      pb={{ base: '60px', lg: '80px' }}
      display={{ base: 'none', lg: 'block' }}
    >
      <Container maxW="none" px={{ base: '24px', lg: '0' }} h={'100%'}>
        <Box
          display="flex"
          flexDirection="column"
          alignItems="center"
          h={'100%'}
          w={'100%'}
        >
          {/* 섹션 헤더 - 상단 고정 */}
          <Box
            ref={headerRef}
            display="flex"
            flexDirection="column"
            gap={{ base: '8px', lg: '12px' }}
            alignItems="center"
            textAlign="center"
            mb="64px"
            flexShrink={0}
          >
            <Text textStyle="pre-heading-3" color="secondary.4">
              5가지 원칙과 가치
            </Text>

            <Box
              display="flex"
              flexDirection="column"
              gap={{ base: '16px', lg: '20px' }}
              alignItems="center"
            >
              <Text textStyle="pre-display-3" color="grey.10" fontWeight="bold">
                킨코스가 일하는 방식
              </Text>

              <Box
                color="grey.7"
                textStyle="pre-body-4"
                maxW={{ base: '100%', lg: '760px' }}
                textAlign="center"
              >
                <Text mb="0">
                  고객의 성공을 위한 최상의 솔루션은 단순히 좋은 기술만으로
                  만들어지지 않습니다.
                </Text>
                <Text>
                  킨코스는 지난 30여 년간 고객과 함께하며, 성공적인 비즈니스
                  파트너가 되기 위한 5가지 일하는 방식을 만들고 지켜왔습니다.
                </Text>
              </Box>
            </Box>
          </Box>

          {/* 카드들 - 중앙 고정 */}
          <Box
            position="relative"
            w="100%"
            display="flex"
            alignItems="center"
            flex={1}
            justifyContent="center"
          >
            {principleCardsData.map((card, index) => (
              <Box
                key={index}
                ref={(el: HTMLDivElement | null) => {
                  if (el) cardsRef.current[index] = el
                }}
                position={'absolute'}
                h={'100%'}
                left={'50%'}
                transform={'translateX(-50%)'}
              >
                <BizIntroductionPrincipleCard {...card} />
              </Box>
            ))}
          </Box>
        </Box>
      </Container>
    </Box>
  )
}
