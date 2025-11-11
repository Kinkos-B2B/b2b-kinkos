'use client'

import { useCallback, useEffect, useState } from 'react'

import { Box, Grid, GridItem, HStack, Image, VStack } from '@chakra-ui/react'

import Autoplay from 'embla-carousel-autoplay'
import useEmblaCarousel from 'embla-carousel-react'

import { ImageAsNext } from '@/components/image-as-next'
import { useMediaQuery } from '@/hooks/useMediaQuery'

import './biz-image-description-box.css'

export const BizImageDescriptionBox = ({
  images,
}: {
  images: { url: string; alt: string }[]
}) => {
  const isMobile = useMediaQuery(['(max-width: 768px)'], { ssr: true })[0]
  const [selectedIndex, setSelectedIndex] = useState(0)

  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop: false,
      align: 'start',
      containScroll: 'trimSnaps',
      dragFree: false,
    },
    isMobile ? [Autoplay({ delay: 3000 })] : [],
  )

  const onSelect = useCallback(() => {
    if (!emblaApi) return
    setSelectedIndex(emblaApi.selectedScrollSnap())
  }, [emblaApi])

  useEffect(() => {
    if (!emblaApi) return

    emblaApi.on('select', onSelect)
    emblaApi.on('reInit', onSelect)

    return () => {
      emblaApi.off('select', onSelect)
      emblaApi.off('reInit', onSelect)
    }
  }, [emblaApi, onSelect])

  if (images.length === 0) {
    return null
  }

  if (isMobile) {
    return (
      <VStack gap={'16px'} w={'100%'}>
        <Box className="biz-image-description-box" w={'100%'}>
          <div className="embla" ref={emblaRef}>
            <div className="embla__container">
              {images.map((image, index) => (
                <div key={index} className="embla__slide">
                  <Box
                    w={'100%'}
                    borderRadius={'20px'}
                    overflow={'hidden'}
                    position={'relative'}
                  >
                    <Image
                      src={image.url}
                      alt={image.alt}
                      w={'100%'}
                      h={'100%'}
                      objectFit={'cover'}
                      objectPosition={'center'}
                    />
                  </Box>
                </div>
              ))}
            </div>
          </div>
        </Box>
        <HStack gap={'8px'}>
          {images.map((_, index) => (
            <Box
              key={index}
              w={'8px'}
              h={'8px'}
              borderRadius={'4px'}
              bg={selectedIndex === index ? 'grey.10' : 'grey.2'}
              transition={'all 0.3s ease'}
              cursor={'pointer'}
              onClick={() => emblaApi?.scrollTo(index)}
              aria-label={`슬라이드 ${index + 1}로 이동`}
            />
          ))}
        </HStack>
      </VStack>
    )
  }

  return (
    <Grid
      templateColumns={{
        lg: 'repeat(3, 1fr)',
        base: 'repeat(2, 1fr)',
      }}
      gap={{ lg: '24px', sm: '20px', base: '12px' }}
      w="full"
    >
      {images.map((image, index) => (
        <GridItem key={index}>
          <Box
            w="100%"
            h={{ lg: '274px' }}
            aspectRatio={'334 / 223'}
            borderRadius="28px"
            overflow="hidden"
            position="relative"
          >
            <ImageAsNext
              src={image.url}
              alt={image.alt}
              w="100%"
              h="100%"
              objectFit="cover"
              objectPosition="center"
            />
          </Box>
        </GridItem>
      ))}
    </Grid>
  )
}
