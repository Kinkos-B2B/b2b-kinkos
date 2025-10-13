'use client'

import { Box, Container, VStack } from '@chakra-ui/react'

import { PluuugCTA } from '@/components/view/PluuugCTA'
import { RecentPost } from '@/components/view/RecentPost'
import { useGetCustomerReviewMainConfigQuery } from '@/generated/apis/CustomerReviewApi/CustomerReviewApi.query'

import { CustomerReviewImageBanner } from './components/CustomerReviewImageBanner'
import { CustomerReviewIntroBanner } from './components/CustomerReviewIntroBanner'
import { CustomerReviewPostList } from './components/CustomerReviewPostList'
import { CustomerReviewSolutionEffect } from './components/CustomerReviewSolutionEffect'

export const CustomerReviewTemplate = () => {
  const { data } = useGetCustomerReviewMainConfigQuery({
    options: {
      select: (data) => data.data,
    },
  })

  return (
    <VStack w="100%" pt={{ base: '0px', lg: '20px' }} gap={'0px'}>
      <Box w={'100%'} pb={'80px'}>
        <CustomerReviewIntroBanner data={data} />
      </Box>
      <Box w={'100%'} pb={'120px'}>
        <RecentPost
          title="가장 많이 본 후기"
          article={{
            thumbnailImageUrl:
              data?.customerReview?.thumbnailImageUrl?.url ?? '',
            title: data?.customerReview?.title ?? '',
            createdAt: data?.customerReview?.createdAt ?? '',
          }}
        />
      </Box>
      <Box w={'100%'} pb={'120px'}>
        <CustomerReviewImageBanner />
      </Box>
      <Box w={'100%'} pb={'160px'}>
        <CustomerReviewPostList />
      </Box>
      <Box w={'100%'}>
        <CustomerReviewSolutionEffect />
      </Box>
      <Container py={'120px'}>
        <PluuugCTA
          text={'비즈니스 고민,\n지금 바로 해결하세요!'}
          buttons={[{ text: '지금 전문가 연결하기', onClick: () => {} }]}
        />
      </Container>
    </VStack>
  )
}
