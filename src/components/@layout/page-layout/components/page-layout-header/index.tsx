'use client'

import { useBreakpointValue, useMediaQuery } from '@chakra-ui/react'

import { DesktopHeader } from './components/desktop-header'
import { MobileHeader } from './components/mobile-header'

export const PageLayoutHeader = () => {
  const isMobile = useMediaQuery(['(max-width: 768px)'], {
    ssr: false,
  })[0]

  if (isMobile) {
    return <MobileHeader />
  } else {
    return <DesktopHeader />
  }
}
