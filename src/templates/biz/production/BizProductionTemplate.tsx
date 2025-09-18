'use client'

import { VStack } from '@chakra-ui/react'

import {
  BizHeroSection,
  mockData,
} from '../common-section-layout/BizHeroSection'

export const BizProductionTemplate = () => {
  return (
    <VStack gap={'0px'}>
      <BizHeroSection {...mockData} />
    </VStack>
  )
}
