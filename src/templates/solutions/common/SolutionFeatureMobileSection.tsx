import dynamic from 'next/dynamic'
import Image from 'next/image'

import { Box, Container, Flex } from '@chakra-ui/react'
import { chakra } from '@chakra-ui/react'

import Marquee from 'react-fast-marquee'

import { ComparisonTableRow } from '@/components/ui/comparison-table'
import { useMediaQuery } from '@/hooks/useMediaQuery'

import { SolutionFeatureItem } from './SolutionFeatureItem'
import { FeatureItem } from './SolutionFeatureSection'
import './feature-section-marquee.css'

const ChakraMarquee = chakra(Marquee)

export const SolutionFeatureMobileSection = ({
  featureItems,
}: {
  featureItems: FeatureItem[]
}) => {
  const isBase = useMediaQuery(['(max-width: 768px)'], {
    ssr: true,
  })[0]

  const tableData: {
    type: 'table' | 'description'
    data: FeatureItem['tableData'] | string[]
  }[] = featureItems.map((item) => {
    if (item.type === 'table') {
      return {
        type: 'table',
        data: item.tableData,
      }
    } else {
      return {
        type: 'description',
        data: item.descriptionData,
      }
    }
  })

  const imageData: FeatureItem['imageData'][] = featureItems.map(
    (item) => item.imageData,
  )

  return (
    <Container
      py={{ base: '100px', sm: '140px', lg: '160px' }}
      gap={{ base: '100px', sm: '140px' }}
      display={'flex'}
      px={0}
      flexDirection={'column'}
      position={'relative'}
    >
      {tableData.map((feature, index) => {
        const featureItem = featureItems[index]
        return (
          <Flex
            key={index}
            align={'start'}
            gap={{ base: '56px', sm: '80px' }}
            flexDirection={'column'}
          >
            <Box
              w={'100%'}
              overflow={'hidden'}
              px={{ lg: '0px', sm: '40px', base: '20px' }}
            >
              {featureItem.type === 'table' && (
                <SolutionFeatureItem.Table
                  title={featureItem.title}
                  description={featureItem.description}
                  highlightData={
                    (feature.data as FeatureItem['tableData']) || []
                  }
                />
              )}
              {feature.type === 'description' && (
                <SolutionFeatureItem.Description
                  title={featureItem.title}
                  description={featureItem.description}
                  descriptionData={
                    (featureItem.descriptionData as string[]) || []
                  }
                />
              )}
            </Box>
            <Box>
              <ChakraMarquee direction="left" loop={0} autoFill={true}>
                {imageData[index].map((image, index) => (
                  <Flex key={index} p={'20px'} pt={'0px'} alignItems={'start'}>
                    {image.url.includes('.mp4') ?
                      <chakra.video
                        src={image.url}
                        autoPlay
                        loop
                        muted
                        playsInline
                        style={{
                          borderRadius: '28px',
                          width: '100%',
                          maxHeight: '500px',
                          objectFit: 'cover',
                          aspectRatio: '8/8',
                        }}
                      />
                    : <Image
                        src={image.url || ''}
                        alt={image.alt || ''}
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
                    }
                  </Flex>
                ))}
              </ChakraMarquee>
            </Box>
          </Flex>
        )
      })}
    </Container>
  )
}
