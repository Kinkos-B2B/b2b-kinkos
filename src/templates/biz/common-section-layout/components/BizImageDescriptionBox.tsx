import { Box, Grid, GridItem, HStack } from '@chakra-ui/react'

import { ImageAsNext } from '@/components/image-as-next'
import { useMediaQuery } from '@/hooks/useMediaQuery'

export const BizImageDescriptionBox = ({
  images,
}: {
  images: { url: string; alt: string }[]
}) => {
  const isMobile = useMediaQuery(['(max-width: 768px)'], { ssr: true })[0]

  if (images.length === 0) {
    return null
  }

  if (isMobile) {
    return (
      <HStack
        w={'100%'}
        overflow={'scroll'}
        gap={'12px'}
        css={{
          '&::-webkit-scrollbar': {
            display: 'none',
          },
        }}
      >
        {images.map((image, index) => (
          <Box
            key={index}
            minW={'375px'}
            h={'250px'}
            borderRadius={'20px'}
            overflow={'hidden'}
            position={'relative'}
          >
            <ImageAsNext
              src={image.url}
              alt={image.alt}
              w={'100%'}
              h={'100%'}
              fill
              objectFit={'cover'}
              objectPosition={'center'}
            />
          </Box>
        ))}
      </HStack>
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
