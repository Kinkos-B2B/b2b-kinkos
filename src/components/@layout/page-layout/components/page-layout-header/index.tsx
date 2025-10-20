'use client'

import { useMediaQuery } from '@/hooks/useMediaQuery'

import { DesktopHeader } from './components/desktop-header'
import { MobileHeader } from './components/mobile-header'

export const PageLayoutHeader = () => {
  const isMobile = useMediaQuery(['(max-width: 1280px)'], {
    ssr: true,
  })[0]

  if (isMobile) {
    return <MobileHeader />
  } else {
    return <DesktopHeader />
  }
}
