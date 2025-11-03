import { Box, Flex, SimpleGrid, Text } from '@chakra-ui/react'

import { Pagination } from '@/components/pagination'
import {
  GetHomeSearchKeywordResponseType,
  GetSearchResponseParamsTypeEnumType,
  ResponseDTOPageResponseDTOSearchResponseType,
  SearchResponseType,
} from '@/generated/apis/@types/data-contracts'
import { SearchResultCard } from '@/templates/search/section/SearchResultCard'

import { EmptySearchResult } from './EmptySearchResult'
import { SearchResultCardSkeleton } from './SearchResultSkeleton'

interface SearchResultContentProps {
  isLoading: boolean
  type: GetSearchResponseParamsTypeEnumType
  searchData?: ResponseDTOPageResponseDTOSearchResponseType
  currentPage: number
  randomSearchKeyword?: GetHomeSearchKeywordResponseType[]
  onSearchKeywordClick: (keyword: string) => void
  onPageChange: (page: number) => void
}

// 공통 그리드 컨테이너
const GridContainer = ({ children }: { children: React.ReactNode }) => (
  <Box>
    <SimpleGrid columns={{ base: 1, sm: 2, lg: 3 }} gap="27px">
      {children}
    </SimpleGrid>
  </Box>
)

const getSearchTypeLink = (
  type: GetSearchResponseParamsTypeEnumType,
  id: string,
) => {
  switch (type) {
    case 'CUSTOMER_REVIEW':
      return `/customer-review/${id}`
    case 'HELP_ARTICLE':
      return `/help-article/${id}`
    case 'EXPERT':
      return `/expert/${id}`
  }
}

export const SearchResultContent = ({
  isLoading,
  type,
  searchData,
  currentPage,
  randomSearchKeyword,
  onSearchKeywordClick,
  onPageChange,
}: SearchResultContentProps) => {
  const totalPages = Math.ceil((searchData?.data?.totalElements || 0) / 12) || 1

  const hasResults =
    searchData?.data?.content && searchData.data.content.length > 0

  if (isLoading) {
    return (
      <GridContainer>
        {Array.from({ length: 12 }, (_, index) => (
          <SearchResultCardSkeleton key={index} />
        ))}
      </GridContainer>
    )
  }

  if (!hasResults) {
    return (
      <Flex justify="center" height={'400px'}>
        <EmptySearchResult
          recommendedKeywords={randomSearchKeyword}
          onSearchKeywordClick={onSearchKeywordClick}
        />
      </Flex>
    )
  }

  return (
    <Flex direction={'column'} gap={'64px'}>
      <GridContainer>
        {searchData?.data?.content?.map(
          (item: SearchResponseType, index: number) => (
            <SearchResultCard
              key={index}
              item={item}
              href={getSearchTypeLink(type, item.slug.toString())}
            />
          ),
        )}
      </GridContainer>
      <Box display="flex" justifyContent="center">
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={onPageChange}
        />
      </Box>
    </Flex>
  )
}
