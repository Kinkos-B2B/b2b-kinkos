import * as React from 'react'

import { Box, Container, Grid, Text, VStack } from '@chakra-ui/react'

import { PageLinkCard } from '@/components/view/PageLinkCard'
import { ROUTES } from '@/constants/routes'

export interface BizMoreInfoSectionProps {
  onSolutionClick?: () => void
  onReviewClick?: () => void
  onProblemClick?: () => void
  onExpertClick?: () => void
}

export const BizMoreInfoSection = React.forwardRef<
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
    <Box ref={ref} bg="primary.1" py="80px" {...rest} w={'100%'}>
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
              templateColumns={{ base: '1fr', sm: '1fr 1fr' }}
              templateRows={'1fr 1fr'}
              gap="24px"
            >
              <PageLinkCard type="SOLUTION" />
              <PageLinkCard type="REVIEW" />
              <PageLinkCard type="PROBLEM" />
              <PageLinkCard type="EXPERT" />
            </Grid>
          </VStack>
        </VStack>
      </Container>
    </Box>
  )
})
