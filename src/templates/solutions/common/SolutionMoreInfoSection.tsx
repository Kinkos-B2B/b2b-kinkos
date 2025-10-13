import * as React from 'react'

import { Box, Container, Grid, Text, VStack } from '@chakra-ui/react'
import {
  ChatCenteredDotsIcon,
  CrownSimpleIcon,
  LightbulbIcon,
  NewspaperClippingIcon,
  TextAlignCenterIcon,
} from '@phosphor-icons/react/dist/ssr'

import { PageLinkCard } from '@/components/view/PageLinkCard'
import { ROUTES } from '@/constants/routes'
import {
  MoreInfoCardCustomerReviewIcon,
  MoreInfoCardExpertIcon,
  MoreInfoCardProblemSolveIcon,
  MoreInfoCardSolutionIcon,
} from '@/generated/icons/MyIcons'

export interface BizMoreInfoSectionProps {
  onSolutionClick?: () => void
  onReviewClick?: () => void
  onProblemClick?: () => void
  onExpertClick?: () => void
}

export const SolutionMoreInfoSection = React.forwardRef<
  HTMLDivElement,
  BizMoreInfoSectionProps
>(function BizMoreInfoSection(props, ref) {
  const {
    onSolutionClick,
    onReviewClick,
    onProblemClick,
    onExpertClick,
    ...rest
  } = props

  return (
    <Box ref={ref} w={'100%'}>
      <Container maxW={'1280px'}>
        <VStack gap="48px" align="stretch">
          <Text
            textStyle="pre-display-4"
            color="grey.10"
            textAlign="center"
            lineHeight="1.4"
          >
            관련 정보를 더 찾고 계신가요?
          </Text>

          <VStack gap="24px" align="stretch">
            <Grid
              templateColumns={{ base: '1fr', lg: '1fr 1fr 1fr' }}
              gap="24px"
            >
              <PageLinkCard
                boxSize="74px"
                type="SYSTEM"
                href={ROUTES.SOLUTIONS.DESIGN.BRANDING}
              />
              <PageLinkCard
                boxSize="74px"
                type="REVIEW"
                href={ROUTES.CUSTOMER_REVIEW}
              />
              <PageLinkCard
                boxSize="74px"
                type="PROBLEM"
                href={ROUTES.PROBLEM}
              />
            </Grid>
          </VStack>
        </VStack>
      </Container>
    </Box>
  )
})
