import dynamic from 'next/dynamic'
import Image from 'next/image'

import { Box, Container, Flex } from '@chakra-ui/react'
import { chakra } from '@chakra-ui/react'

import Marquee from 'react-fast-marquee'

import { ComparisonTableRow } from '@/components/ui/comparison-table'
import { useMediaQuery } from '@/hooks/useMediaQuery'

import { SolutionFeatureItem } from './SolutionFeatureItem'
import './feature-section-marquee.css'

const ChakraMarquee = chakra(Marquee)

export const SolutionFeatureMobileSection = () => {
  const isBase = useMediaQuery(['(max-width: 768px)'], {
    ssr: true,
  })[0]

  const featureData: ComparisonTableRow[] = [
    {
      category: '간편성 및 자동화 수준',
      kinkos: 'O',
      competitorA: 'O',
      competitorB: 'O',
    },
    {
      category: '내부DB 연동 개발 여부',
      kinkos: 'O',
      competitorA: 'X',
      competitorB: 'X',
    },
  ]

  const featureImageData = [
    {
      image: '/images/solutions/solutions-hero-section.jpg',
      alt: 'feature',
    },
    {
      image: '/images/solutions/solutions-feature-mock-img.jpg',
      alt: 'feature',
    },
    {
      image: '/images/solutions/solutions-feature-mock-img.jpg',
      alt: 'feature',
    },
  ]

  return (
    <Container
      py={{ base: '100px', sm: '140px', lg: '160px' }}
      gap={{ base: '100px', sm: '140px' }}
      display={'flex'}
      flexDirection={'column'}
      position={'relative'}
    >
      {[featureData, featureData, featureData, featureData].map(
        (feature, index) => {
          return (
            <Flex
              key={index}
              align={'start'}
              gap={{ base: '56px', sm: '80px' }}
              flexDirection={'column'}
            >
              <Box w={'100%'}>
                <SolutionFeatureItem.Table
                  title={`${index + 1}번째 기능`}
                  description={
                    '킨코스는 간편성 및 자동화 수준을 최적화하여 사용자의 편의성을 극대화합니다'
                  }
                  highlightData={feature}
                />
              </Box>
              <Box>
                <ChakraMarquee direction="left" loop={0} autoFill={false}>
                  {featureImageData.map((image, index) => (
                    <Flex
                      key={index}
                      p={'20px'}
                      pt={'0px'}
                      alignItems={'start'}
                    >
                      <Image
                        src={image.image}
                        alt={image.alt}
                        width={isBase ? 240 : 360}
                        height={0}
                        sizes="100vw"
                        style={{
                          borderRadius: '28px',
                          height: '100%',
                          objectFit: 'cover',
                          boxShadow: '0 10px 24px 0 rgba(0, 27, 110, 0.10)',
                        }}
                      />
                    </Flex>
                  ))}
                </ChakraMarquee>
              </Box>
            </Flex>
          )
        },
      )}
    </Container>
  )
}
