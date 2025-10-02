'use client'

import { useParams } from 'next/navigation'

import {
  Box,
  Container,
  Flex,
  Grid,
  GridItem,
  Text,
  VStack,
} from '@chakra-ui/react'

import PluuugCTA from '@/components/view/PluuugCTA'
import { useGetCustomerReviewDetailQuery } from '@/generated/apis/CustomerReviewApi/CustomerReviewApi.query'

import { RelatedReviewList } from './components/RelatedReviewList'
import { ReviewDetailContent } from './components/ReviewDetailContent'
import { ReviewDetailHeader } from './components/ReviewDetailHeader'
import { ReviewSolutionCardList } from './components/ReviewSolutionCardList'

interface CustomerReviewDetailTemplateProps {
  reviewId: number
}

export const CustomerReviewDetailTemplate = ({
  reviewId,
}: CustomerReviewDetailTemplateProps) => {
  const { data } = useGetCustomerReviewDetailQuery({
    variables: {
      id: reviewId,
    },
  })

  return (
    <VStack>
      <ReviewDetailHeader header={data?.data?.header ?? {}} />
      <Box py={'80px 120px'} position={'relative'}>
        <ReviewDetailContent content={data?.data} />
      </Box>
      <Box w={'100%'} bg={'background.basic.2'} py={'80px'}>
        <Container maxW={'1280px'}>
          <ReviewSolutionCardList
            solutionList={data?.data?.solutionList ?? []}
          />
        </Container>
      </Box>
      <Container maxW={'1280px'} mt={'120px'}>
        <PluuugCTA
          text={'비즈니스 고민,\n지금 바로 해결하세요!'}
          buttons={[{ text: '지금 전문가 연결하기', onClick: () => {} }]}
        />
      </Container>
      <Container maxW={'1280px'} mt={'120px'}>
        <RelatedReviewList type={data?.data?.type} id={reviewId} />
      </Container>
    </VStack>
  )
}
