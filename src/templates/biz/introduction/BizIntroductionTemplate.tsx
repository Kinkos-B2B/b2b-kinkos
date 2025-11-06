'use client'

import { Container, VStack, usePaginationContext } from '@chakra-ui/react'

import { usePannelContext } from '@/components/PannelContext'
import PluuugCTA from '@/components/view/PluuugCTA'

import { BizIntroductionFadeSection } from './sections/BizIntroductionFadeSection'
import { BizIntroductionHeroSection } from './sections/BizIntroductionHeroSection'
import { BizIntroductionImageBannerSection } from './sections/BizIntroductionImageBannerSection'
import { BizIntroductionPrincipleCardSection } from './sections/BizIntroductionPrincipleCardSection'
import { BizIntroductionPrincipleMobileCardSection } from './sections/BizIntroductionPrincipleMobileCardSection'
import { BizIntroductionSlider } from './sections/BizIntroductionSlider'
import { BizIntroductionStatSection } from './sections/BizIntroductionStatSection'

export const BizIntroductionTemplate = () => {
  const { openPannel } = usePannelContext()

  return (
    <VStack w="100%" gap="0px">
      <BizIntroductionHeroSection />
      <BizIntroductionPrincipleMobileCardSection />
      <BizIntroductionPrincipleCardSection />
      <BizIntroductionImageBannerSection />
      <BizIntroductionFadeSection />
      <BizIntroductionSlider />
      <BizIntroductionStatSection />
      <Container py={{ lg: '120px', sm: '100px', base: '80px' }}>
        <PluuugCTA
          text={'비즈니스 고민\n지금 바로 해결하세요!'}
          buttons={[
            {
              text: '무료 상담 받아보기',
              onClick: () => {
                openPannel()
              },
            },
          ]}
        />
      </Container>
    </VStack>
  )
}
