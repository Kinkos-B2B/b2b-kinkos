import Link from 'next/link'

import {
  Box,
  Card,
  Container,
  Grid,
  HStack,
  Image,
  Text,
  VStack,
} from '@chakra-ui/react'

import { CustomSelect } from '@/components/CustomSelect'
import { Pagination } from '@/components/pagination'
import { Select } from '@/components/select'
import { PostCardItem } from '@/components/view/PostCardItem'
import { ROUTES } from '@/constants/routes'
import { useGetAllCustomerReviewQuery } from '@/generated/apis/CustomerReviewApi/CustomerReviewApi.query'
import { getCustomerReviewOptions } from '@/helper/getCustomerReviewOptions'

export const CustomerReviewPostList = () => {
  const { data } = useGetAllCustomerReviewQuery({
    variables: {
      query: {
        page: 0,
        count: 9,
      },
    },
    options: {
      select: (data) => data.data?.content ?? [],
    },
  })

  return (
    <Container maxW={'1280px'}>
      <VStack width="100%" gap={'0px'} alignItems={'start'}>
        <Text textStyle={'pre-heading-1'}>다양한 고객 후기를 만나보세요</Text>
        <Box mt={'32px'} w={'200px'}>
          <CustomSelect
            size={'lg'}
            options={getCustomerReviewOptions()}
            placeholder="관련 분야"
          />
        </Box>
        <Grid
          templateColumns={'repeat(3, 1fr)'}
          gap={'24px'}
          rowGap={'48px'}
          mt={'28px'}
        >
          {data?.map((review, index) => (
            <PostCardItem
              key={index}
              href={ROUTES.CUSTOMER_REVIEW_DETAIL.replace(
                ':id',
                review.id.toString(),
              )}
              image={review.thumbnailImageUrl.url ?? ''}
              author={review.companyName}
              title={review.companyName}
              date={review.createdAt}
            />
          ))}
        </Grid>
      </VStack>
    </Container>
  )
}
