'use client'

import * as React from 'react'

import { Box, Container, Flex, Heading, Tabs, VStack } from '@chakra-ui/react'
import { keepPreviousData } from '@tanstack/react-query'

import { FaqItem } from '@/components/faq/faq-item'
import { Pagination } from '@/components/pagination'
import { useGetAllFaqQuery } from '@/generated/apis/FaqApi/FaqApi.query'
import { GetAllFaqParamsCategoryEnumType } from '@/helper/options'

export interface FaqData {
  id: string
  question: string
  answer: string
  category: string
}

export interface FaqTemplateProps {
  /**
   * FAQ 데이터
   */
  faqData?: FaqData[]
  /**
   * 탭 목록
   */
  tabs?: Array<{
    id: string
    label: string
  }>
  /**
   * 현재 선택된 탭
   */
  currentTab?: string
  /**
   * 탭 변경 핸들러
   */
  onTabChange?: (tabId: string) => void
  /**
   * 현재 페이지
   */
  currentPage?: number
  /**
   * 총 페이지 수
   */
  totalPages?: number
  /**
   * 페이지 변경 핸들러
   */
  onPageChange?: (page: number) => void
}

export const CATEGORY_LABELS: Record<GetAllFaqParamsCategoryEnumType, string> =
  {
    [GetAllFaqParamsCategoryEnumType.GUIDE]: '이용 안내',
    [GetAllFaqParamsCategoryEnumType.PRODUCTION]: '제작 지원',
    [GetAllFaqParamsCategoryEnumType.SOLUTIONS]: '솔루션',
    [GetAllFaqParamsCategoryEnumType.EXPERTS]: '전문가',
    [GetAllFaqParamsCategoryEnumType.BILLING]: '정산',
    [GetAllFaqParamsCategoryEnumType.OTHERS]: '기타',
  }

const defaultTabs = [
  { id: 'TOP', label: 'TOP / FAQ' },
  { id: GetAllFaqParamsCategoryEnumType.GUIDE, label: '이용 안내' },
  { id: GetAllFaqParamsCategoryEnumType.PRODUCTION, label: '제작 지원' },
  { id: GetAllFaqParamsCategoryEnumType.SOLUTIONS, label: '솔루션' },
  { id: GetAllFaqParamsCategoryEnumType.EXPERTS, label: '전문가' },
  { id: GetAllFaqParamsCategoryEnumType.BILLING, label: '정산' },
  { id: GetAllFaqParamsCategoryEnumType.OTHERS, label: '기타' },
]

export const FaqTemplate = (props: FaqTemplateProps) => {
  const [selectedTab, setSelectedTab] = React.useState<
    GetAllFaqParamsCategoryEnumType | 'TOP'
  >('TOP')

  const [currentPage, setCurrentPage] = React.useState(1)

  const { data } = useGetAllFaqQuery({
    variables: {
      query: {
        page: currentPage - 1,
        count: 10,
        isTop: selectedTab === 'TOP',
        category: selectedTab === 'TOP' ? undefined : selectedTab,
      },
    },
    options: {
      placeholderData: keepPreviousData,
    },
  })

  React.useEffect(() => {
    setCurrentPage(1)
  }, [selectedTab])

  const totalPages =
    data?.data?.totalElements ?
      Math.ceil(data.data.totalElements / (data.data.size || 10))
    : 1

  return (
    <Container
      maxW={'1280px'}
      pt={{ base: '56px', lg: '80px' }}
      pb={{ base: '140px', lg: '160px' }}
    >
      <Box w="full">
        <VStack gap={{ lg: '56px', sm: '40px', base: '32px' }} align="stretch">
          {/* 헤더 섹션 */}
          <VStack gap={{ lg: '40px', sm: '32px', base: '24px' }} align="center">
            <Heading
              as="h1"
              color="grey.10"
              textStyle="pre-display-3"
              textAlign="center"
            >
              주요 질문
            </Heading>
            {/* 탭 네비게이션 */}
            <Box w="full" position="relative">
              <Tabs.Root
                value={selectedTab}
                onValueChange={({ value }) =>
                  setSelectedTab(
                    value as GetAllFaqParamsCategoryEnumType | 'TOP',
                  )
                }
                variant="enclosed"
              >
                <Tabs.List
                  gap="8px"
                  overflow="auto"
                  position="relative"
                  w="full"
                  h="48px"
                  display="flex"
                  alignItems={{ base: 'center', sm: 'center' }}
                  justifyContent={{ base: 'flex-start', sm: 'center' }}
                  css={{
                    scrollbar: 'hidden',
                  }}
                >
                  {defaultTabs.map((tab) => (
                    <Tabs.Trigger
                      key={tab.id}
                      h={{ base: '40px', sm: '48px' }}
                      value={tab.id}
                      px="16px"
                      py="0"
                      borderRadius="10px"
                      flexShrink={0}
                      whiteSpace={'nowrap'}
                      textStyle={{ sm: 'pre-body-1', base: 'pre-body-3' }}
                      _selected={{ bg: 'grey.10', color: 'grey.0' }}
                      _hover={{ opacity: 0.8 }}
                    >
                      {tab.label}
                    </Tabs.Trigger>
                  ))}
                </Tabs.List>
              </Tabs.Root>
              <Box
                position="absolute"
                top="0"
                display={{ base: 'block', sm: 'none' }}
                right="0"
                w="30px"
                h="48px"
                bg="linear-gradient(270deg, #FFFFFF, #FFFFFF00)"
                pointerEvents="none"
              />
            </Box>
          </VStack>
          <VStack gap="64px" align="center">
            <VStack
              gap="0"
              align="stretch"
              w="full"
              borderTop="1px solid"
              borderColor="border.basic.1"
            >
              {data?.data?.content?.map((faq) => (
                <FaqItem
                  currentTab={selectedTab}
                  key={faq.id}
                  title={faq.title}
                  body={faq.body}
                  category={faq.category}
                />
              ))}
            </VStack>
            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={setCurrentPage}
            />
          </VStack>
        </VStack>
      </Box>
    </Container>
  )
}
