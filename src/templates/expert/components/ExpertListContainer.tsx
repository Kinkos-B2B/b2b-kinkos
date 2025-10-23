'use client'

import * as React from 'react'

import Link from 'next/link'

import { Box, Button, Flex, Grid, GridItem, VStack } from '@chakra-ui/react'
import { keepPreviousData } from '@tanstack/react-query'

import { Pagination } from '@/components/pagination'
import { EmptyViewWrapper } from '@/components/view/EmptyViewWrapper'
import { ROUTES } from '@/constants/routes'
import {
  useGetAllExpertQuery,
  useGetAllExpertSearchTypeQuery,
} from '@/generated/apis/ExpertApi/ExpertApi.query'
import { useMediaQuery } from '@/hooks/useMediaQuery'

import { ExpertCard } from './ExpertCard'
import { ExpertFilterSection } from './ExpertFilterSection'
import { ExpertMobileFilterDrawer } from './ExpertMobileFilterDrawer'

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

  const isMobile = useMediaQuery(['(max-width: 1280px)'], {
    ssr: true,
  })[0]

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
    <Flex
      justify="space-between"
      align="flex-start"
      flexDir={{ base: 'column', lg: 'row' }}
    >
      {isMobile ?
        <Box display={{ base: 'block', lg: 'none' }} w={'100%'} mb={'32px'}>
          <Flex w="100%" justify="space-between">
            <ExpertMobileFilterDrawer
              industryOptions={industryOptions}
              printOptions={budgetOptions}
              filter={filter}
              onFilterChange={setFilter}
            />
            <Button variant={'outline'} size={'md'}>
              전문가 추천 받기
            </Button>
          </Flex>
        </Box>
      : <Box
          width="180px"
          flexShrink={0}
          display={{ base: 'none', lg: 'block' }}
        >
          <ExpertFilterSection
            industryOptions={industryOptions}
            printOptions={budgetOptions}
            filter={filter}
            onFilterChange={setFilter}
          />
        </Box>
      }

      <EmptyViewWrapper
        isEmpty={data?.data?.content?.length === 0}
        description="관련 내용이 준비될 예정이에요!"
      >
        <VStack
          gap={{ base: '48px', lg: '64px' }}
          align="center"
          minW="0"
          w={'100%'}
          maxW={{ base: '100%', lg: '1000px' }}
        >
          <Grid
            width="100%"
            templateColumns={{
              base: 'repeat(auto-fit, minmax(300px, 1fr))',
              sm: 'repeat(auto-fill, minmax(300px, 1fr))',
              lg: 'repeat(auto-fill, minmax(300px, 1fr))',
            }}
            gap={{ base: '20px', lg: '24px' }}
            rowGap={{ base: '40px', lg: '48px' }}
          >
            {data?.data?.content?.map((expert) => (
              <GridItem key={expert.id} w="100%" cursor="pointer">
                <Link
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
          />
        </VStack>
      </EmptyViewWrapper>
    </Flex>
  )
}
