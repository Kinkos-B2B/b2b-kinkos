'use client'

import { useSearchParams } from 'next/navigation'

import { Box, VStack } from '@chakra-ui/react'

import { GetSearchResponseParamsTypeEnumType } from '@/generated/apis/@types/data-contracts'

import { SearchResultSection } from './section/SearchResultSection'

export const SearchResultTemplate = () => {
  const searchParams = useSearchParams()
  const searchKeyword = searchParams.get('q') || ''
  const activeTab = searchParams.get('activetab') || 'CUSTOMER_REVIEW'

  return (
    <Box w="100%" minH="100vh" bg="white" pb={'160px'}>
      <SearchResultSection
        searchKeyword={searchKeyword}
        tab={activeTab as GetSearchResponseParamsTypeEnumType}
      />
    </Box>
  )
}
