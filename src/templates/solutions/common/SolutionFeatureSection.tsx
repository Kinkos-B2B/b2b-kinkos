import { Fragment, useRef } from 'react'

import Image from 'next/image'

import { useMediaQuery } from '@/hooks/useMediaQuery'

import { SolutionFeatureDesktopSection } from './SolutionFeatureDesktopSection'
import { SolutionFeatureMobileSection } from './SolutionFeatureMobileSection'

export type FeatureItem = {
  title: string
  description: string
  type: 'table' | 'description'
  descriptionData?: string[]
  tableData?: {
    category: string
    kinkos: string
    competitorA: string
    competitorB: string
  }[]
  imageData: {
    imageUrl: string
  }[]
}

interface Props {
  featureItems: FeatureItem[]
}

export const SolutionFeatureSection = ({ featureItems }: Props) => {
  console.log(featureItems)

  const isDesktop = useMediaQuery(['(min-width: 1280px)'], {
    ssr: true,
  })[0]

  if (isDesktop) {
    return <SolutionFeatureDesktopSection featureItems={featureItems} />
  } else {
    return <SolutionFeatureMobileSection featureItems={featureItems} />
  }
}
