import * as React from 'react'

import { Box, Container, Grid, GridItem, Text, VStack } from '@chakra-ui/react'

import { PageLinkCard, PageLinkKey } from '@/components/view/PageLinkCard'
import { ROUTES } from '@/constants/routes'
import { GetRelatedSolutionParamsTypeEnumType } from '@/generated/apis/@types/data-contracts'
import { useGetRelatedSolutionQuery } from '@/generated/apis/SolutionApi/SolutionApi.query'
import { SOLUTION_HREF_MAP } from '@/helper/options'

export interface Props {
  type: GetRelatedSolutionParamsTypeEnumType
}

export const SolutionMoreInfoSection = React.forwardRef<HTMLDivElement, Props>(
  function BizMoreInfoSection({ type }, ref) {
    const { data } = useGetRelatedSolutionQuery({
      variables: {
        query: {
          type,
        },
      },
    })

    const solutionHref = data?.data?.relatedSolution
    const reviewHref = data?.data?.relatedCustomerReviewSlug
    const problemHref = data?.data?.relatedHelpArticleSlug

    return (
      <Box ref={ref} w={'100%'}>
        <Container>
          <VStack gap="48px" align="stretch">
            <Text textStyle="pre-display-4" color="grey.10" textAlign="center">
              관련 정보를 더 찾고 계신가요?
            </Text>
            <VStack gap="24px" align="stretch">
              <Grid
                gap="20px"
                rowGap="20px"
                templateColumns={{
                  base: '1fr',
                  sm: '1fr 1fr',
                  lg: '1fr 1fr 1fr',
                }}
              >
                <GridItem colSpan={{ base: 1, sm: 1, lg: 1 }}>
                  <PageLinkCard
                    boxSize="74px"
                    type={'SOLUTION'}
                    injectedHref={
                      solutionHref ? SOLUTION_HREF_MAP[solutionHref] : ''
                    }
                  />
                </GridItem>
                <GridItem colSpan={{ base: 1, sm: 1, lg: 1 }}>
                  <PageLinkCard
                    boxSize="74px"
                    type={'REVIEW'}
                    injectedHref={`${reviewHref ? `${ROUTES.CUSTOMER_REVIEW}/${reviewHref}` : ''}`}
                  />
                </GridItem>
                <GridItem colSpan={{ base: 1, sm: 2, lg: 1 }}>
                  <PageLinkCard
                    boxSize="74px"
                    type={'PROBLEM'}
                    injectedHref={`${problemHref ? `${ROUTES.PROBLEM}/${problemHref}` : ''}`}
                  />
                </GridItem>
              </Grid>
            </VStack>
          </VStack>
        </Container>
      </Box>
    )
  },
)
