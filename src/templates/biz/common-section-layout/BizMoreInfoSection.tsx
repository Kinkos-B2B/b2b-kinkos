import * as React from 'react'

import { Box, Container, Grid, Text, VStack } from '@chakra-ui/react'

import { PageLinkCard } from '@/components/view/PageLinkCard'
import { ROUTES } from '@/constants/routes'
import { GetRelatedBizParamsTypeEnumType } from '@/generated/apis/@types/data-contracts'
import { useGetRelatedBizQuery } from '@/generated/apis/BizApi/BizApi.query'
import {
  GetRelatedBizParamsTypeEnumTypeOptions,
  SOLUTION_HREF_MAP,
} from '@/helper/options'

export interface BizMoreInfoSectionProps {
  type: GetRelatedBizParamsTypeEnumTypeOptions
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
    type,
    ...rest
  } = props

  const { data } = useGetRelatedBizQuery({
    variables: {
      query: {
        type,
      },
    },
  })

  const solutionHref = data?.data?.relatedSolution
  const reviewHref = data?.data?.relatedCustomerReviewSlug
  const problemHref = data?.data?.relatedHelpArticleSlug
  const expertHref = data?.data?.relatedExpertSlug

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
              <PageLinkCard
                type="SOLUTION"
                injectedHref={
                  solutionHref ? SOLUTION_HREF_MAP[solutionHref] : ''
                }
              />
              <PageLinkCard
                type="REVIEW"
                injectedHref={
                  reviewHref ? `${ROUTES.CUSTOMER_REVIEW}/${reviewHref}` : ''
                }
              />
              <PageLinkCard
                type="PROBLEM"
                injectedHref={
                  problemHref ? `${ROUTES.PROBLEM}/${problemHref}` : ''
                }
              />
              <PageLinkCard
                type="EXPERT"
                injectedHref={
                  expertHref ? `${ROUTES.EXPERT}/${expertHref}` : ''
                }
              />
            </Grid>
          </VStack>
        </VStack>
      </Container>
    </Box>
  )
})
