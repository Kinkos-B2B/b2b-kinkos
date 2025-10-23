import { Box, Image } from '@chakra-ui/react'

import { useMediaQuery } from '@/hooks/useMediaQuery'

interface Props {
  data?: {
    desktopImageUrl: string
    mobileImageUrl: string
  }
}

export const CustomerReviewImageBanner = ({ data }: Props) => {
  const isMobile = useMediaQuery(['(max-width: 1280px)'], {
    ssr: true,
  })[0]

  const image =
    isMobile ?
      data?.mobileImageUrl || data?.desktopImageUrl
    : data?.desktopImageUrl

  return (
    <Box w={'100%'}>
      <Image
        src={image}
        alt={image}
        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
      />
    </Box>
  )
}
