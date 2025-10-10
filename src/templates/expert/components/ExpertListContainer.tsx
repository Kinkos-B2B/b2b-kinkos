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

  const experts = React.useMemo(() => {
    if (!data?.data?.content) return []

    return data.data.content.map((expert, index) => ({
      id: index + 1, // API에서 id가 없는 경우 임시로 index 사용
      imageUrl: expert.thumbnailImage?.url || '/images/expert/default.png',
      nickname: expert.nickname || '닉네임',
      description:
        expert.description ||
        '인쇄/제작, 시작부터 막막하다면 저희를 통해 비용과 시간을 아껴보세요.',
      tags: expert.industryList || [],
    }))
  }, [data])

  // 페이지네이션 계산
  const totalPages =
    data?.data?.totalElements ?
      Math.ceil(data.data.totalElements / (data.data.size || 9))
    : 1

  return (
    <ExpertList
      experts={experts}
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
