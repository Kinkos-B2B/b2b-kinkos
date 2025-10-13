import { Box, Image, useBreakpointValue, useMediaQuery } from '@chakra-ui/react'

import { breakpoints } from '@/configs/theme/breakpoints'

const mock = {
  image:
    '/images/customer-review/customer-reivew-image-banner-desktop-mock.png',
  mobileImage:
    '/images/customer-review/customer-reivew-image-banner-mobile-mock.png',
}

interface Props {
  data?: typeof mock
}

export const CustomerReviewImageBanner = ({ data = mock }: Props) => {
  const isMobile = useMediaQuery(['(max-width: 1280px)'], {
    ssr: false,
  })[0]

  const image = isMobile ? mock.mobileImage : mock.image

  return (
    <Box w={'100%'}>
      <Image src={image} alt={data.image} />
    </Box>
  )
}
