'use client'

import { Box, Container, VStack } from '@chakra-ui/react'

import { usePannelContext } from '@/components/PannelContext'
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
  const { openPannel } = usePannelContext()

  return (
    <VStack w="100%" pt={{ base: '0px', lg: '20px' }} gap={'0px'}>
      <Box w={'100%'} pb={{ base: '64px', sm: '80px' }}>
        <CustomerReviewIntroBanner data={data} />
      </Box>
      <Box
        w={'100%'}
        pb={{ base: '80px', sm: '100px', lg: '120px' }}
        px={{ base: '20px', sm: '40px' }}
      >
        <RecentPost
          title="가장 많이 본 후기"
          article={{
            author: data?.customerReview?.companyName ?? '',
            thumbnailImageUrl:
              data?.customerReview?.thumbnailImageUrl?.url ?? '',
            title: data?.customerReview?.title ?? '',
            createdAt: data?.customerReview?.createdAt ?? '',
          }}
        />
      </Box>
      <Box w={'100%'} pb={{ base: '80px', sm: '100px', lg: '120px' }}>
        <CustomerReviewImageBanner
          data={{
            desktopImageUrl: data?.bannerImageUrl?.url ?? '',
            mobileImageUrl: data?.mobileBannerImageUrl?.url ?? '',
          }}
        />
      </Box>
      <Box w={'100%'} pb={{ base: '80px', sm: '160px' }}>
        <CustomerReviewPostList />
      </Box>
      <Box w={'100%'}>
        <CustomerReviewSolutionEffect />
      </Box>
      <Container py={{ base: '80px', sm: '100px', lg: '120px' }}>
        <PluuugCTA
          text={'비즈니스 고민,\n지금 바로 해결하세요!'}
          buttons={[
            { text: '지금 전문가 연결하기', onClick: () => openPannel() },
          ]}
        />
      </Container>
    </VStack>
  )
}
