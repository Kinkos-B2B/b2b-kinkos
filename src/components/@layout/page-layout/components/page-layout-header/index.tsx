'use client'

import { useBreakpointValue } from '@chakra-ui/react'

import { DesktopHeader } from './components/desktop-header'
import { MobileHeader } from './components/mobile-header'

export const PageLayoutHeader = () => {
  const isMobile = useBreakpointValue({ base: true, md: false })
  const isDesktop = useBreakpointValue({ base: false, md: true })

  if (isMobile) {
    return <MobileHeader />
  }

  if (isDesktop) {
    return <DesktopHeader />
  }

  // 태블릿의 경우 데스크톱 헤더 사용
  return <DesktopHeader />
}
