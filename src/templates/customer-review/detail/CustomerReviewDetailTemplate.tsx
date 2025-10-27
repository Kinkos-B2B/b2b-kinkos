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

import { usePannelContext } from '@/components/PannelContext'
import PluuugCTA from '@/components/view/PluuugCTA'
import { PostHeader } from '@/components/view/PostDetail/PostHeader'
import {
  useGetCustomerReviewDetailBySlugQuery,
  useGetCustomerReviewDetailQuery,
} from '@/generated/apis/CustomerReviewApi/CustomerReviewApi.query'

import { RelatedReviewList } from './components/RelatedReviewList'
import { ReviewDetailContent } from './components/ReviewDetailContent'
import { ReviewSolutionCardList } from './components/ReviewSolutionCardList'

interface CustomerReviewDetailTemplateProps {
  reviewId: string
}

export const CustomerReviewDetailTemplate = ({
  reviewId,
}: CustomerReviewDetailTemplateProps) => {
  const { openPannel } = usePannelContext()
  const { data } = useGetCustomerReviewDetailBySlugQuery({
    variables: {
      query: {
        slug: reviewId.toString(),
      },
    },
  })

  return (
    <VStack gap={'0px'} w={'100%'}>
      <PostHeader header={data?.data?.header ?? {}} />
      <Box
        py={{ base: '48px 80px', sm: '64px 100px', lg: '80px 120px' }}
        position={'relative'}
        w={{ base: '100%', lg: 'auto' }}
        px={{ base: '20px', sm: '40px' }}
      >
        <ReviewDetailContent content={data?.data} />
      </Box>

      <Box
        w={'100%'}
        bg={'background.basic.2'}
        py={{ base: '64px', lg: '80px' }}
      >
        <Container>
          <ReviewSolutionCardList
            solutionList={data?.data?.solutionList ?? []}
          />
        </Container>
      </Box>
      <Container pt={{ base: '80px', lg: '120px' }}>
        <PluuugCTA
          text={'비즈니스 고민,\n지금 바로 해결하세요!'}
          buttons={[
            { text: '지금 전문가 연결하기', onClick: () => openPannel() },
          ]}
        />
      </Container>
      <Container
        maxW={'1280px'}
        py={{ base: '80px', sm: '100px', lg: '120px' }}
      >
        <RelatedReviewList type={data?.data?.type} id={data?.data?.id} />
      </Container>
    </VStack>
  )
}
