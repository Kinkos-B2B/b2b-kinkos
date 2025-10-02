import { Container, Grid, GridItem, Text, VStack } from '@chakra-ui/react'

import { SolutionCardItem } from '@/components/view/SolutionLinkCard'
import {
  CustomerReviewSolutionSolutionTypeEnumType,
  CustomerReviewSolutionType,
} from '@/generated/apis/@types/data-contracts'

export const ReviewSolutionCardList = ({
  solutionList,
}: {
  solutionList: CustomerReviewSolutionType[]
}) => {
  return (
    <VStack gap={'24px'} align="start" w="100%">
      <Text textStyle={'pre-heading-1'}>관련 솔루션을 확인해 보세요</Text>
      <Grid templateColumns={'repeat(3, 1fr)'} gap={'24px'} w="100%">
        {solutionList?.map((solution) => (
          <GridItem key={solution.title}>
            <SolutionCardItem type={solution.solutionType as any} />
          </GridItem>
        ))}
      </Grid>
    </VStack>
  )
}
