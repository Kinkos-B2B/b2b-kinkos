import { Box, Container, Text } from '@chakra-ui/react'

import Autoplay from 'embla-carousel-autoplay'
import useEmblaCarousel from 'embla-carousel-react'

import { useMediaQuery } from '@/hooks/useMediaQuery'

import { BizIntroductionPrincipleCard } from '../components/BizIntroductionPrincipleCard'
import '../components/biz-principle-slider.css'
import { principleCardsData } from './BizIntroductionPrincipleCardSection'

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
                maxW={{ sm: '560px', lg: '760px' }}
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
