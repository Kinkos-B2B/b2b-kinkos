'use client'

import { Box, Container, VStack } from '@chakra-ui/react'

import { PluuugCTA } from '@/components/view/PluuugCTA'
import { RecentPost } from '@/components/view/RecentPost'

import { CustomerReviewImageBanner } from './components/CustomerReviewImageBanner'
import { CustomerReviewIntroBanner } from './components/CustomerReviewIntroBanner'
import { CustomerReviewPostList } from './components/CustomerReviewPostList'
import { CustomerReviewSolutionEffect } from './components/CustomerReviewSolutionEffect'

export const CustomerReviewTemplate = () => {
  return (
    <VStack w="100%" pt={'20px'}>
      <Box w={'100%'} pb={'80px'}>
        <CustomerReviewIntroBanner />
      </Box>
      <Box w={'100%'} pb={'120px'}>
        <RecentPost title="가장 많이 본 후기" />
      </Box>
      <Box w={'100%'} pb={'120px'}>
        <CustomerReviewImageBanner />
      </Box>
      <Box w={'100%'} pb={'120px'}>
        <CustomerReviewPostList />
      </Box>
      <CustomerReviewSolutionEffect />
      <Container>
        <PluuugCTA
          text={'비즈니스 고민,\n지금 바로 해결하세요!'}
          buttons={[{ text: '지금 전문가 연결하기', onClick: () => {} }]}
        />
      </Container>
    </VStack>
  )
}
