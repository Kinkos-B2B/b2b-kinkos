import { Box, Grid, GridItem } from '@chakra-ui/react'

import { ImageAsNext } from '@/components/image-as-next'

export const BizImageDescriptionBox = ({
  images,
}: {
  images: { url: string; alt: string }[]
}) => {
  if (images.length === 0) {
    return null
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
