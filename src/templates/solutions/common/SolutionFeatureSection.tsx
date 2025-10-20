import { Fragment, useRef } from 'react'

import Image from 'next/image'

import { useMediaQuery } from '@/hooks/useMediaQuery'

import { SolutionFeatureDesktopSection } from './SolutionFeatureDesktopSection'
import { SolutionFeatureMobileSection } from './SolutionFeatureMobileSection'

export const SolutionFeatureSection = () => {
  const isDesktop = useMediaQuery(['(min-width: 1280px)'], {
    ssr: true,
  })[0]

  if (isDesktop) {
    return <SolutionFeatureDesktopSection />
  } else {
    return <SolutionFeatureMobileSection />
  }
}
