'use client'

import { useState } from 'react'

import { useRouter, useSearchParams } from 'next/navigation'

import {
  Box,
  Container,
  HStack,
  Input,
  Tabs,
  Text,
  VStack,
} from '@chakra-ui/react'
import { MagnifyingGlassIcon } from '@phosphor-icons/react/dist/ssr'

import { InputGroup } from '@/components/ui/input-group'
import { GetSearchResponseParamsTypeEnumType } from '@/generated/apis/@types/data-contracts'
import {
  useGetRandomSearchKeywordQuery,
  useGetSearchResponseQuery,
} from '@/generated/apis/HomeApi/HomeApi.query'

import { SearchResultContent } from './SearchResultContent'

interface SearchResultSectionProps {
  searchKeyword: string
  tab: GetSearchResponseParamsTypeEnumType
}

const TAB_OPTIONS = [
  { value: 'CUSTOMER_REVIEW', label: '고객후기' },
  { value: 'HELP_ARTICLE', label: '고민해결' },
  { value: 'EXPERT', label: '전문가' },
] as const

export const SearchResultSection = ({
  searchKeyword,
  tab,
}: SearchResultSectionProps) => {
  const searchParams = useSearchParams()
  const router = useRouter()
  const { data: randomSearchKeyword } = useGetRandomSearchKeywordQuery()

  const [searchValue, setSearchValue] = useState(searchKeyword)
  const [currentQuery, setCurrentQuery] = useState(searchKeyword)
  const [activeTab, setActiveTab] =
    useState<GetSearchResponseParamsTypeEnumType>(tab)

  const [currentPage, setCurrentPage] = useState(1)

  const { data: searchData, isLoading } = useGetSearchResponseQuery({
    variables: {
      query: {
        keyword: currentQuery,
        type: activeTab,
        page: currentPage - 1,
        count: 12,
      },
    },
    options: {
      enabled: !!currentQuery,
    },
  })

  const updateUrlParams = (
    newTab?: GetSearchResponseParamsTypeEnumType,
    newQuery?: string,
  ) => {
    const params = new URLSearchParams(searchParams.toString())

    if (newTab) params.set('activetab', newTab)
    if (newQuery) params.set('q', newQuery)

    router.replace(`/search?${params.toString()}`, { scroll: false })
  }

  const handleSearch = () => {
    if (!searchValue.trim()) return

    const trimmedQuery = searchValue.trim()
    setCurrentQuery(trimmedQuery)
    setCurrentPage(0)
    updateUrlParams(activeTab, trimmedQuery)
  }

  const handleTabChange = (value: string) => {
    const newTab = value as GetSearchResponseParamsTypeEnumType
    setActiveTab(newTab)
    setCurrentPage(1)
    updateUrlParams(newTab, currentQuery)
  }

  const handleRecommendedKeywordClick = (keyword: string) => {
    setSearchValue(keyword)
    setCurrentQuery(keyword)
    setCurrentPage(1)
    updateUrlParams(activeTab, keyword)
  }

  const handlePageChange = (page: number) => {
    setCurrentPage(page - 1)
  }

  const commonProps = {
    isLoading,
    searchData,
    currentPage,
    randomSearchKeyword: randomSearchKeyword?.data,
    onSearchKeywordClick: handleRecommendedKeywordClick,
    onPageChange: handlePageChange,
  }

  console.log(searchData)

  return (
    <VStack gap="0" align="stretch" w="100%">
      <Box
        bg="primary.1"
        h="120px"
        display="flex"
        alignItems="center"
        px="40px"
      >
        <Container px={'0px'}>
          <Text
            textStyle="pre-body-1"
            color="grey.10"
            textAlign={{ base: 'center', lg: 'left' }}
          >
            <Text as="span" fontWeight="600" textStyle="pre-body-1">
              {`'${currentQuery}'`}
            </Text>
            <Text as="span" fontWeight="400" textStyle="pre-body-2">
              에 대한 검색결과 입니다.
            </Text>
          </Text>
        </Container>
      </Box>

      <Container>
        <Box>
          <HStack gap="8px">
            <Tabs.Root
              value={activeTab}
              onValueChange={({ value }) => handleTabChange(value)}
              variant="enclosed"
              size={{ lg: 'large', base: 'small' }}
              w="100%"
            >
              <HStack
                py="16px"
                borderBottom="1px solid"
                borderColor="border.basic.1"
                flexDirection={{ base: 'column-reverse', sm: 'row' }}
              >
                <Tabs.List
                  gap="8px"
                  h="48px"
                  overflow="hidden"
                  position="relative"
                  w="full"
                  display="flex"
                  alignItems="center"
                >
                  {TAB_OPTIONS.map((tab) => (
                    <Tabs.Trigger
                      key={tab.value}
                      value={tab.value}
                      h={{ base: '40px', sm: '48px' }}
                      px="16px"
                      py="0"
                      borderRadius="10px"
                      textStyle={{ sm: 'pre-body-1', base: 'pre-body-3' }}
                      _selected={{ bg: 'grey.10', color: 'grey.0' }}
                      _hover={{ opacity: 0.8 }}
                    >
                      {tab.label}
                    </Tabs.Trigger>
                  ))}
                </Tabs.List>

                <Box
                  ml={{ base: '0px', sm: 'auto' }}
                  w={{ base: '100%', sm: '320px' }}
                >
                  <InputGroup
                    w="100%"
                    bg="grey.1"
                    borderRadius="10px"
                    h="48px"
                    startOffset="0px"
                    startElement={
                      <MagnifyingGlassIcon size={20} color="#9fa4a9" />
                    }
                  >
                    <Input
                      w={'100%'}
                      value={searchValue}
                      onChange={(e) => setSearchValue(e.target.value)}
                      onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
                      placeholder="검색"
                      border="none"
                      bg="transparent"
                      color="grey.9"
                      textStyle={'pre-body-4'}
                      _placeholder={{ color: 'grey.5' }}
                      _focus={{ boxShadow: 'none', border: 'none' }}
                      _hover={{ border: 'none' }}
                    />
                  </InputGroup>
                </Box>
              </HStack>

              {TAB_OPTIONS.map((tab) => (
                <Tabs.Content key={tab.value} value={tab.value} pt="32px">
                  <SearchResultContent {...commonProps} type={tab.value} />
                </Tabs.Content>
              ))}
            </Tabs.Root>
          </HStack>
        </Box>
      </Container>
    </VStack>
  )
}
