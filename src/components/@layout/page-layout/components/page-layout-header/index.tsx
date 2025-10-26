'use client'

import { useEffect, useState } from 'react'

import { useMediaQuery } from '@/hooks/useMediaQuery'

import { DesktopHeader } from './components/desktop-header'
import { MobileHeader } from './components/mobile-header'

export const PageLayoutHeader = () => {
  const isMobile = useMediaQuery(['(max-width: 1280px)'], { ssr: true })[0]

  const [mounted, setMounted] = useState(false)

  useEffect(() => setMounted(true), [])

  if (isMobile || !mounted) {
    return <MobileHeader />
  } else {
    return <DesktopHeader />
  }
}
