import Image from 'next/image'

import { Box } from '@chakra-ui/react'

import { MY_IMAGES } from '@/generated/path/images'

interface Props {
  size?: { width: number; height: number }
}

export const LogoButton = ({ size = { width: 180, height: 37 } }: Props) => {
  return (
    <Box width={size.width} height={size.height}>
      <Image src={MY_IMAGES.LOGO.src} alt="logo" width={180} height={37} />
    </Box>
  )
}
