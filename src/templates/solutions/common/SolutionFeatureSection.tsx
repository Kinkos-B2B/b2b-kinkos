import { Fragment, useRef } from 'react'

import Image from 'next/image'

import { Box, Container, Flex, VStack, useMediaQuery } from '@chakra-ui/react'
import { useGSAP } from '@gsap/react'

import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

import { ComparisonTableRow } from '@/components/ui/comparison-table'

import { SolutionFeatureDesktopSection } from './SolutionFeatureDesktopSection'
import { SolutionFeatureItem } from './SolutionFeatureItem'
import { SolutionFeatureMobileSection } from './SolutionFeatureMobileSection'

export const SolutionFeatureSection = () => {
  const isDesktop = useMediaQuery(['(min-width: 1280px)'], {
    ssr: false,
  })[0]

  if (isDesktop) {
    return <SolutionFeatureDesktopSection />
  } else {
    return <SolutionFeatureMobileSection />
  }
}
