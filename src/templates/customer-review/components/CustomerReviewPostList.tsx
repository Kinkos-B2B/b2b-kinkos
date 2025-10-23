import { useState } from 'react'

import Link from 'next/link'

import {
  Box,
  Card,
  Center,
  Container,
  Grid,
  GridItem,
  HStack,
  Image,
  Text,
  VStack,
} from '@chakra-ui/react'

import { CustomSelect } from '@/components/CustomSelect'
import { Pagination } from '@/components/pagination'
import { Select } from '@/components/select'
import { EmptyViewWrapper } from '@/components/view/EmptyViewWrapper'
import { PostCardItem } from '@/components/view/PostCardItem'
import { ROUTES } from '@/constants/routes'
import { GetAllCustomerReviewParamsTypeEnumType } from '@/generated/apis/@types/data-contracts'
import { useGetAllCustomerReviewQuery } from '@/generated/apis/CustomerReviewApi/CustomerReviewApi.query'
import { getCustomerReviewOptions } from '@/helper/getCustomerReviewOptions'

export const CustomerReviewPostList = () => {
  const [currentPage, setCurrentPage] = useState(1)
  const [filter, setFilter] = useState<GetAllCustomerReviewParamsTypeEnumType>()

  const { data } = useGetAllCustomerReviewQuery({
    variables: {
      query: {
        page: currentPage - 1,
        count: 9,
        type: filter,
      },
    },
    options: {
      select: (data) => data.data,
    },
  })

  const totalPages = Math.ceil((data?.totalElements ?? 0) / 9)

  return (
    <Container maxW={'1280px'}>
      <VStack width="100%" alignItems={'start'} gap={'0px'}>
        <Text mb={'32px'} textStyle={'pre-heading-1'}>
          다양한 고객 후기를 만나보세요
        </Text>
        <Box w={'200px'}>
          <CustomSelect
            size={'lg'}
            options={getCustomerReviewOptions()}
            placeholder="관련 분야"
            value={filter ? [filter] : []}
            onValueChange={({ value }) => {
              setFilter(value[0] as GetAllCustomerReviewParamsTypeEnumType)
            }}
          />
        </Box>
        <Center w={'100%'} flexDirection={'column'} gap={'64px'} mt={'28px'}>
          <EmptyViewWrapper
            isEmpty={data?.content?.length === 0}
            description="관련 내용이 준비될 예정이에요!"
          >
            <Grid
              w="100%"
              templateColumns={{
                lg: 'repeat(3, 1fr)',
                sm: 'repeat(2, 1fr)',
                base: '1fr',
              }}
              gap={'24px'}
              rowGap={{ base: '40px', lg: '48px' }}
            >
              {data?.content?.map((review, index) => (
                <GridItem key={index} w="100%" h="100%">
                  <PostCardItem
                    href={ROUTES.CUSTOMER_REVIEW_DETAIL.replace(
                      ':id',
                      review.id?.toString() ?? '',
                    )}
                    image={review.thumbnailImageUrl?.url ?? ''}
                    author={review.companyName ?? ''}
                    title={review.companyName ?? ''}
                    date={review.createdAt ?? ''}
                  />
                </GridItem>
              ))}
            </Grid>
            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={setCurrentPage}
            />
          </EmptyViewWrapper>
        </Center>
      </VStack>
    </Container>
  )
}
