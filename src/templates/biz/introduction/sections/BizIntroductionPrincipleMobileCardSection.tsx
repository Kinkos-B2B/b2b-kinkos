import { Box, Container, Text } from '@chakra-ui/react'

import Autoplay from 'embla-carousel-autoplay'
import useEmblaCarousel from 'embla-carousel-react'

import { useMediaQuery } from '@/hooks/useMediaQuery'

import { BizIntroductionPrincipleCard } from '../components/BizIntroductionPrincipleCard'
import '../components/biz-principle-slider.css'

const principleCardsData = [
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
  },
  {
    principle: '원칙2 끝까지 책임집니다.',
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
  },
  {
    principle: '원칙3 자산을 관리합니다.',
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
  },
  {
    principle: '원칙4 전문가가 담당합니다.',
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
  },
  {
    principle: '원칙5 가능성을 제공합니다.',
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
  },
]

export const BizIntroductionPrincipleMobileCardSection = () => {
  const isMobile = useMediaQuery(['(max-width: 1280px)'], { ssr: true })[0]

  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop: true,
      align: 'center',
      containScroll: 'trimSnaps',
    },
    isMobile ? [Autoplay({ delay: 2500 })] : [],
  )

  return (
    <Box
      w="100%"
      py={{ base: '100px', sm: '180px' }}
      display={{ base: 'block', lg: 'none' }}
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
                  고객의 성공을 위한 최상의 솔루션은 단순히 좋은
                  <br />
                  기술만으로 만들어지지 않습니다.
                </Text>
                <Text>
                  킨코스는 지난 30여 년간 고객과 함께하며, 성공적인 비즈니스
                  파트너가 되기 위한 5가지 일하는 방식을 만들고 지켜왔습니다.
                </Text>
              </Box>
            </Box>
          </Box>

          <Box className="biz-principle-slider" w={'100dvw'}>
            <div className="embla" ref={emblaRef}>
              <div className="embla__container">
                {principleCardsData.map((slide, index) => (
                  <div key={index} className="embla__slide">
                    <Box
                      w={{
                        base: 'calc(100dvw - 60px)',
                        sm: '640px',
                      }}
                      h={'100%'}
                      display={'flex'}
                      ml={
                        index === 0 ?
                          { lg: '48px', sm: '40px', base: '20px' }
                        : '0px'
                      }
                      className={`slide`}
                    >
                      <BizIntroductionPrincipleCard {...slide} />
                    </Box>
                  </div>
                ))}
              </div>
            </div>
          </Box>
        </Box>
      </Container>
    </Box>
  )
}
