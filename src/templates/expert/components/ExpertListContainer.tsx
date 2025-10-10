'use client'

import * as React from 'react'

import { useRouter } from 'next/navigation'

import {
  useGetAllExpertQuery,
  useGetAllExpertSearchTypeQuery,
} from '@/generated/apis/ExpertApi/ExpertApi.query'

import { ExpertList } from './ExpertList'

export const ExpertListContainer = () => {
  const router = useRouter()

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
  const { data } = useGetAllExpertQuery()

  // 페이지네이션 계산
  const totalPages =
    data?.data?.totalElements ?
      Math.ceil(data.data.totalElements / (data.data.size || 9))
    : 1

  return (
    <ExpertList
      experts={data?.data?.content ?? []}
      industryOptions={industryOptions}
      printOptions={budgetOptions}
      filter={filter}
      currentPage={currentPage}
      totalPages={totalPages}
      onFilterChange={(filter) => setFilter(filter)}
      onPageChange={setCurrentPage}
    />
  )
}
