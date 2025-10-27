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
    imageSrc: '/images/biz/introduce/kinkos-principle-1.png',
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
    imageSrc: '/images/biz/introduce/kinkos-principle-1.png',
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
    imageSrc: '/images/biz/introduce/kinkos-principle-1.png',
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
    imageSrc: '/images/biz/introduce/kinkos-principle-1.png',
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
        zIndex: 10,
      })

      // 나머지 카드들은 숨김 (아래쪽에서 대기)
      cards.slice(1).forEach((card, i) => {
        gsap.set(card, {
          opacity: 0.3, // 살짝 보이도록
          scale: 0.85,
          y: 100,
          zIndex: 9 - i,
        })
      })

      // 스크롤 트리거 생성 - 화면 고정 및 카드 순차 교체 (Smart Animate 스타일)
      ScrollTrigger.create({
        trigger: section,
        start: 'top top',
        end: `+=${cards.length * 150}%`, // 각 카드당 180%의 스크롤 공간 (더 느리게)
        pin: true,
        pinSpacing: true,
        scrub: 1,
        invalidateOnRefresh: true,

        onLeave: () => {
          // pin이 풀릴 때 마지막 카드를 완전히 보이도록 고정
          const lastCard = cards[cards.length - 1]
          if (lastCard) {
            gsap.set(lastCard, {
              opacity: 1,
              scale: 1,
              y: 0,
              zIndex: 10,
            })
          }
        },
        onEnterBack: () => {
          // 다시 스크롤해서 돌아올 때도 마지막 카드 상태 유지
          const lastCard = cards[cards.length - 1]
          if (lastCard) {
            gsap.set(lastCard, {
              opacity: 1,
              scale: 1,
              y: 0,
              zIndex: 10,
            })
          }
        },
        onUpdate: (self) => {
          const progress = self.progress
          const totalCards = cards.length

          // 각 카드의 표시 구간을 정의 (1단계 30% + 2단계 20% + 고정 50%)
          const stage1Duration = 0.3 // 1단계: 크기 변화만 (opacity 유지)
          const stage2Duration = 0.2 // 2단계: opacity 변화
          const holdDuration = 0.5 // 고정 구간

          // 전체 progress를 카드 개수로 나누어 현재 카드 인덱스 계산
          const exactIndex = progress * totalCards
          const currentIndex = Math.floor(exactIndex)
          const nextIndex = currentIndex + 1

          // 마지막 카드인지 확인
          const isLastCard = currentIndex === totalCards - 1

          // 현재 카드 구간 내에서의 진행도 (0~1)
          const cardProgress = exactIndex - currentIndex

          // Ease in and out 이징 함수
          const easeInOut = (t: number) => {
            return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t
          }

          // 1단계와 2단계 진행도 계산
          let stage1Progress = 0 // 크기 변화 진행도
          let stage2Progress = 0 // opacity 변화 진행도

          if (cardProgress <= stage1Duration) {
            // 1단계: 크기만 변화 (0~0.3)
            stage1Progress = easeInOut(cardProgress / stage1Duration)
            stage2Progress = 0
          } else if (cardProgress <= stage1Duration + stage2Duration) {
            // 2단계: opacity 변화 (0.3~0.5)
            stage1Progress = 1
            stage2Progress = easeInOut(
              (cardProgress - stage1Duration) / stage2Duration,
            )
          } else {
            // 고정 구간: 완전히 전환 완료 (0.5~1.0)
            stage1Progress = 1
            stage2Progress = 1
          }

          cards.forEach((card, index) => {
            if (index === currentIndex && currentIndex < totalCards) {
              if (isLastCard) {
                // 마지막 카드: 사라지지 않고 그대로 유지
                gsap.set(card, {
                  opacity: 1,
                  scale: 1,
                  y: 0,
                  zIndex: 10,
                })
              } else {
                // 현재 카드
                // 1단계: opacity 1 유지, 크기 축소 + 위로 이동
                // 2단계: opacity 0으로 페이드 아웃
                gsap.set(card, {
                  opacity: 1 - stage2Progress, // 2단계에서만 opacity 변화
                  scale: 1 - 0.15 * stage1Progress, // 1.0 → 0.85
                  y: -80 * stage1Progress, // 위로 80px 이동
                  zIndex: 9,
                })
              }
            } else if (index === nextIndex && nextIndex < totalCards) {
              // 다음 카드
              // 1단계: opacity 0.3 → 1로 서서히 나타남, 크기 확대 + 아래에서 중앙으로
              // 2단계: 최종 위치로 이동
              gsap.set(card, {
                opacity: 0.3 + 0.7 * stage1Progress, // 0.3 → 1.0으로 서서히
                scale: 0.85 + 0.15 * stage1Progress, // 0.85 → 1.0
                y: 80 - 80 * stage1Progress, // 아래 80px에서 중앙(0)으로
                zIndex: 10,
              })
            } else if (index < currentIndex) {
              // 이전 카드: 완전히 숨김
              gsap.set(card, {
                opacity: 0,
                scale: 0.85,
                y: -80,
                zIndex: index,
              })
            } else if (index > nextIndex) {
              // 아직 나오지 않은 카드: 살짝 보이는 상태로 대기
              gsap.set(card, {
                opacity: 0.3,
                scale: 0.85,
                y: 80,
                zIndex: 9 - (index - currentIndex),
              })
            }
          })
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
      py={{ base: '60px', lg: '140px' }}
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
                top={'50%'}
                left={'50%'}
                transform={'translate(-50%, -50%)'}
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
