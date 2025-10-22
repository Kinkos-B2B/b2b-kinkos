'use client'

import { useState } from 'react'

import { Container, Portal, VStack } from '@chakra-ui/react'

import { createPortal } from 'react-dom'

import { HomeSearchSection } from './section/1/HomeSearchSection'
import { HomeIntroduceSolution } from './section/2/HomeIntroduceSolution'
import { HomeSolveProblemSection } from './section/3/HomeSolveProblemSection'
import { HomeIntroduceExpertSection } from './section/4/HomeIntroduceExpertSection'
import { HomeIntroduceBizSection } from './section/5/HomeIntroduceBizSection'
import { HomeCustomerReviewSection } from './section/6/HomeCustomerReviewSection'
import { HomeMoreQuestionSection } from './section/7/HomeMoreQuestionSection'
import { HomeIntroSection } from './section/HomeIntroSection'

export const HomeTemplate = () => {
  const [isIntroComplete, setIsIntroComplete] = useState(false)

  return (
    <>
      {!isIntroComplete &&
        typeof window !== 'undefined' &&
        createPortal(
          <HomeIntroSection
            onCompleted={() => {
              setIsIntroComplete(true)
            }}
          />,
          document.body,
        )}
      <VStack w={'100%'} gap={'0px'} position="relative" zIndex="1">
        <Container
          py={{ base: '48px 80px', sm: '80px 120px ', lg: '120px 160px' }}
        >
          <HomeSearchSection />
        </Container>
        <HomeIntroduceSolution />
        <HomeSolveProblemSection />
        <HomeIntroduceExpertSection />
        <HomeIntroduceBizSection />
        <HomeCustomerReviewSection />
        <HomeMoreQuestionSection />
      </VStack>
    </>
  )
}
