'use client'

import { useCallback, useEffect, useRef, useState } from 'react'

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
  useGetSearchKeywordAutoCompleteQuery,
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

  // URL에서 페이지 번호 읽기 (기본값: 1)
  const pageFromUrl = parseInt(searchParams.get('page') || '1', 10)
  const initialPage = pageFromUrl >= 1 ? pageFromUrl : 1

  const [searchValue, setSearchValue] = useState(searchKeyword)
  const [currentQuery, setCurrentQuery] = useState(searchKeyword)
  const [activeTab, setActiveTab] =
    useState<GetSearchResponseParamsTypeEnumType>(tab)

  const [debouncedValue, setDebouncedValue] = useState('')
  const [isOpen, setIsOpen] = useState(false)
  const [selectedIndex, setSelectedIndex] = useState(-1)
  const [currentPage, setCurrentPage] = useState(initialPage)

  // props 변경 시 상태 동기화
  useEffect(() => {
    setSearchValue(searchKeyword)
    setCurrentQuery(searchKeyword)
  }, [searchKeyword])

  useEffect(() => {
    setActiveTab(tab)
  }, [tab])

  useEffect(() => {
    const newPage = parseInt(searchParams.get('page') || '1', 10)
    if (newPage >= 1 && newPage !== currentPage) {
      setCurrentPage(newPage)
    }
  }, [searchParams, currentPage])

  const inputRef = useRef<HTMLInputElement>(null)
  const dropdownRef = useRef<HTMLDivElement>(null)

  const { data: autoCompleteData, isLoading: isAutoCompleteLoading } =
    useGetSearchKeywordAutoCompleteQuery({
      variables: {
        query: {
          keyword: debouncedValue,
        },
      },
      options: {
        enabled: debouncedValue.length > 0,
      },
    })

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

  const autoCompleteOptions = autoCompleteData?.data || []

  // 디바운싱 로직
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedValue(searchValue)
    }, 300) // 300ms 디바운스

    return () => clearTimeout(timer)
  }, [searchValue])

  const updateUrlParams = useCallback(
    (
      newTab?: GetSearchResponseParamsTypeEnumType,
      newQuery?: string,
      newPage?: number,
    ) => {
      const params = new URLSearchParams(searchParams.toString())

      if (newTab !== undefined) params.set('activetab', newTab)
      if (newQuery !== undefined) params.set('q', newQuery)
      if (newPage !== undefined) {
        if (newPage === 1) {
          params.delete('page')
        } else {
          params.set('page', newPage.toString())
        }
      }

      router.replace(`/search?${params.toString()}`, { scroll: false })
    },
    [searchParams, router],
  )

  const handleInputChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const value = e.target.value
      setSearchValue(value)
      setIsOpen(value.length > 0)
      setSelectedIndex(-1)
    },
    [],
  )

  const handleSearch = useCallback(() => {
    if (!searchValue.trim()) return

    const trimmedQuery = searchValue.trim()
    setCurrentQuery(trimmedQuery)
    setCurrentPage(1)
    updateUrlParams(activeTab, trimmedQuery, 1)
  }, [searchValue, activeTab, updateUrlParams])

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent<HTMLInputElement>) => {
      switch (e.key) {
        case 'ArrowDown':
          if (isOpen && autoCompleteOptions.length > 0) {
            e.preventDefault()
            setSelectedIndex((prev) =>
              prev < autoCompleteOptions.length - 1 ? prev + 1 : 0,
            )
          }
          break
        case 'ArrowUp':
          if (isOpen && autoCompleteOptions.length > 0) {
            e.preventDefault()
            setSelectedIndex((prev) =>
              prev > 0 ? prev - 1 : autoCompleteOptions.length - 1,
            )
          }
          break
        case 'Enter':
          e.preventDefault()
          if (
            isOpen &&
            selectedIndex >= 0 &&
            selectedIndex < autoCompleteOptions.length
          ) {
            const selectedOption = autoCompleteOptions[selectedIndex]
            setSearchValue(selectedOption.keyword)
            setIsOpen(false)
            setSelectedIndex(-1)
            setCurrentQuery(selectedOption.keyword)
            setCurrentPage(1)
            updateUrlParams(activeTab, selectedOption.keyword, 1)
          } else {
            handleSearch()
          }
          break
        case 'Escape':
          if (isOpen) {
            setIsOpen(false)
            setSelectedIndex(-1)
            inputRef.current?.blur()
          }
          break
      }
    },
    [
      isOpen,
      autoCompleteOptions,
      selectedIndex,
      handleSearch,
      activeTab,
      updateUrlParams,
    ],
  )

  const handleTabChange = useCallback(
    (value: string) => {
      const newTab = value as GetSearchResponseParamsTypeEnumType
      setActiveTab(newTab)
      setCurrentPage(1)
      updateUrlParams(newTab, currentQuery, 1)
    },
    [currentQuery, updateUrlParams],
  )

  const handleRecommendedKeywordClick = useCallback(
    (keyword: string) => {
      setSearchValue(keyword)
      setCurrentQuery(keyword)
      setCurrentPage(1)
      updateUrlParams(activeTab, keyword, 1)
    },
    [activeTab, updateUrlParams],
  )

  const handlePageChange = useCallback(
    (page: number) => {
      setCurrentPage(page)
      updateUrlParams(activeTab, currentQuery, page)
      // 페이지 변경 시 스크롤을 상단으로 이동
      window.scrollTo({ top: 0, behavior: 'smooth' })
    },
    [activeTab, currentQuery, updateUrlParams],
  )

  const handleInputFocus = useCallback(() => {
    if (searchValue.length > 0) {
      setIsOpen(true)
    }
  }, [searchValue])

  const handleInputBlur = useCallback((e: React.FocusEvent) => {
    // 드롭다운을 클릭하는 경우에는 닫지 않음
    if (dropdownRef.current?.contains(e.relatedTarget as Node)) {
      return
    }
    setIsOpen(false)
    setSelectedIndex(-1)
  }, [])

  const handleOptionClick = useCallback(
    (keyword: string) => {
      setSearchValue(keyword)
      setCurrentQuery(keyword)
      setCurrentPage(1)
      updateUrlParams(activeTab, keyword, 1)
      setIsOpen(false)
      setSelectedIndex(-1)
    },
    [activeTab, updateUrlParams],
  )

  const commonProps = {
    isLoading,
    searchData,
    currentPage,
    randomSearchKeyword: randomSearchKeyword?.data,
    onSearchKeywordClick: handleRecommendedKeywordClick,
    onPageChange: handlePageChange,
  }

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
                  position="relative"
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
                      onChange={handleInputChange}
                      onFocus={handleInputFocus}
                      onBlur={handleInputBlur}
                      onKeyDown={handleKeyDown}
                      aria-expanded={isOpen}
                      aria-haspopup="listbox"
                      role="combobox"
                      aria-autocomplete="list"
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
                  {isOpen && (
                    <Box
                      ref={dropdownRef}
                      position="absolute"
                      top="100%"
                      right="0"
                      zIndex={1000}
                      mt="6px"
                      bg="white"
                      border="1px solid"
                      borderColor="grey.2"
                      borderRadius="10px"
                      boxShadow="0 20px 80px 0 rgba(27, 28, 29, 0.04), 0 4px 10px 0 rgba(27, 28, 29, 0.04)"
                      maxH="200px"
                      overflowY="auto"
                      w={'100%'}
                      minW={'fit-content'}
                      role="listbox"
                      aria-label="검색 자동완성 옵션"
                    >
                      {isAutoCompleteLoading ?
                        <Box p="12px" textAlign="center" color="grey.6">
                          <Text textStyle={'pre-body-4'}>검색 중...</Text>
                        </Box>
                      : autoCompleteOptions.length > 0 ?
                        <VStack gap="0" align="stretch">
                          {autoCompleteOptions.map((option, index) => (
                            <Box
                              key={option.keyword}
                              p="12px"
                              cursor="pointer"
                              bg={
                                selectedIndex === index ? 'grey.1' : (
                                  'transparent'
                                )
                              }
                              _hover={{
                                bg: 'grey.1',
                              }}
                              onMouseDown={() =>
                                handleOptionClick(option.keyword)
                              }
                              role="option"
                              aria-selected={selectedIndex === index}
                              data-node-id="15664:25449"
                            >
                              <HStack gap="8px" align="center">
                                <Box w="18px" h="18px" flexShrink={0}>
                                  <MagnifyingGlassIcon
                                    size={18}
                                    color="#6a6d71"
                                  />
                                </Box>
                                <Text
                                  textStyle={'pre-body-4'}
                                  color="grey.8"
                                  whiteSpace="nowrap"
                                >
                                  {option.keyword}
                                </Text>
                              </HStack>
                            </Box>
                          ))}
                        </VStack>
                      : searchValue.length > 0 ?
                        <Box p="12px" textAlign="center" color="grey.6">
                          <Text textStyle={'pre-body-4'}>
                            검색 결과가 없습니다.
                          </Text>
                        </Box>
                      : null}
                    </Box>
                  )}
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
