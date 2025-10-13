'use client'

import * as React from 'react'

import { useRouter } from 'next/navigation'

import { Box, Flex, Grid, GridItem, Link, VStack } from '@chakra-ui/react'
import { keepPreviousData } from '@tanstack/react-query'

import { Pagination } from '@/components/pagination'
import { EmptyViewWrapper } from '@/components/view/EmptyViewWrapper'
import { ROUTES } from '@/constants/routes'
import {
  useGetAllExpertQuery,
  useGetAllExpertSearchTypeQuery,
} from '@/generated/apis/ExpertApi/ExpertApi.query'

import { ExpertCard } from './ExpertCard'
import { ExpertFilterSection } from './ExpertFilterSection'

export const ExpertListContainer = () => {
  const [filter, setFilter] = React.useState<{
    industryId: string[]
    printId: string[]
  }>({
    industryId: [],
    printId: [],
  })

  const [currentPage, setCurrentPage] = React.useState(1)

  const { data: searchTypeData } = useGetAllExpertSearchTypeQuery()

  const industryOptions = searchTypeData?.data?.industryTypeList || []
  const budgetOptions = searchTypeData?.data?.printCostBracketTypeList || []

  // API 쿼리 - 필터와 페이지에 따라 데이터 요청
  const { data } = useGetAllExpertQuery({
    variables: {
      query: {
        industryId: filter.industryId.map(Number),
        printId: filter.printId.map(Number),
        page: currentPage - 1,
        count: 9,
      },
    },
    options: {
      placeholderData: keepPreviousData,
    },
  })

  // 페이지네이션 계산
  const totalPages =
    data?.data?.totalElements ?
      Math.ceil(data.data.totalElements / (data.data.size || 9))
    : 1

  return (
    <Flex gap="101px" align="flex-start">
      <ExpertFilterSection
        industryOptions={industryOptions}
        printOptions={budgetOptions}
        filter={filter}
        onFilterChange={setFilter}
      />
      <EmptyViewWrapper
        isEmpty={data?.data?.content?.length === 0}
        description="관련 내용이 준비될 예정이에요!"
      >
        <VStack gap="64px" align="center" flex="1" minW="0">
          <Grid
            templateColumns="repeat(3, 1fr)"
            gap="24px"
            rowGap="48px"
            width="100%"
          >
            {data?.data?.content?.map((expert) => (
              <GridItem key={expert.id} w="100%" cursor="pointer">
                <Link
                  w="100%"
                  display="block"
                  href={ROUTES.EXPERT_DETAIL.replace(
                    ':id',
                    expert.id?.toString() ?? '',
                  )}
                >
                  <ExpertCard expert={expert} />
                </Link>
              </GridItem>
            ))}
          </Grid>
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={setCurrentPage}
            size="lg"
          />
        </VStack>
      </EmptyViewWrapper>
    </Flex>
  )
}
