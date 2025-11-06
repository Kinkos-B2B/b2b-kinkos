import Image from 'next/image'

import { Box, BoxProps } from '@chakra-ui/react'

import { MY_IMAGES } from '@/generated/path/images'

interface Props extends BoxProps {}

export const LogoButton = () => {
  return (
    <Box
      width={{ lg: '172px', sm: '160px', base: '120px' }}
      height={{ lg: '35px', sm: '33px', base: '25px' }}
    >
      <Image src={MY_IMAGES.LOGO.src} alt="logo" width={180} height={37} />
    </Box>
  )
}
