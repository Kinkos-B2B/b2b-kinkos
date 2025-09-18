import { Container, VStack } from '@chakra-ui/react'

import { HomeSearchSection } from './section/1/HomeSearchSection'
import { HomeIntroduceSolution } from './section/2/HomeIntroduceSolution'
import { HomeSolveProblemSection } from './section/3/HomeSolveProblemSection'
import { HomeIntroduceExpertSection } from './section/4/HomeIntroduceExpertSection'
import { HomeIntroduceBizSection } from './section/5/HomeIntroduceBizSection'
import { HomeCustomerReviewSection } from './section/6/HomeCustomerReviewSection'
import { HomeMoreQuestionSection } from './section/7/HomeMoreQuestionSection'

export const HomeTemplate = () => {
  return (
    <VStack w={'100%'} gap={'0px'}>
      <Container
        css={{
          pt: '120px',
          pb: '160px',
        }}
      >
        <HomeSearchSection />
      </Container>
      <Container
        css={{
          pt: '120px',
          pb: '140px',
        }}
      >
        <HomeIntroduceSolution />
      </Container>
      <Container
        css={{
          py: '160px',
        }}
      >
        <HomeSolveProblemSection />
      </Container>
      <HomeIntroduceExpertSection />
      <HomeIntroduceBizSection />
      <HomeCustomerReviewSection />
      <HomeMoreQuestionSection />
    </VStack>
  )
}
