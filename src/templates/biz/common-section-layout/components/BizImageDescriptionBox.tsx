import { Box, Grid, GridItem } from '@chakra-ui/react'

import { ImageAsNext } from '@/components/image-as-next'

export const BizImageDescriptionBox = ({ images }: { images: string[] }) => {
  if (images.length === 0) {
    return null
  }
  return (
    <Grid templateColumns="repeat(3, 1fr)" gap="24px" w="full">
      {images.map((image, index) => (
        <GridItem key={index}>
          <Box
            w="100%"
            h="274px"
            borderRadius="28px"
            overflow="hidden"
            position="relative"
          >
            <ImageAsNext
              src={image}
              w="100%"
              h="100%"
              alt={`Factory image ${index + 1}`}
              objectFit="cover"
              objectPosition="center"
            />
          </Box>
        </GridItem>
      ))}
    </Grid>
  )
}
