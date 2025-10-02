'use client'

import * as React from 'react'

import { Box, Container, Flex, Heading, Tabs, VStack } from '@chakra-ui/react'

import { FaqItem } from '@/components/faq/faq-item'
import { Pagination } from '@/components/pagination'

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

const defaultTabs = [
  { id: 'top-faq', label: 'TOP / FAQ' },
  { id: 'service', label: '서비스' },
  { id: 'member', label: '회원' },
  { id: 'pricing', label: '요금' },
  { id: 'solution', label: '솔루션' },
  { id: 'etc', label: '기타' },
  { id: 'issue', label: '장애' },
]

const defaultFaqData: FaqData[] = [
  {
    id: '1',
    question: '전국 지점/매장에서 동일한 품질로 제작/배송이 가능한가요?',
    answer:
      '답변 내용이 들어가게 됩니다.\n답변 내용이 들어가게 됩니다.\n답변 내용이 들어가게 됩니다.',
    category: '서비스',
  },
  {
    id: '2',
    question: '해외 지사나 글로벌 전시회로도 직접 배송할 수 있나요?',
    answer:
      '답변 내용이 들어가게 됩니다.\n답변 내용이 들어가게 됩니다.\n답변 내용이 들어가게 됩니다.',
    category: '서비스',
  },
  {
    id: '3',
    question:
      '기업용 보안 인쇄(계약서, 내부 문서, 인증 자료 등)는 어떻게 관리하나요?',
    answer:
      '답변 내용이 들어가게 됩니다.\n답변 내용이 들어가게 됩니다.\n답변 내용이 들어가게 됩니다.',
    category: '서비스',
  },
  {
    id: '4',
    question: '브랜드 디자인부터 매장 POP까지 통합 기획이 가능한가요?',
    answer:
      '답변 내용이 들어가게 됩니다.\n답변 내용이 들어가게 됩니다.\n답변 내용이 들어가게 됩니다.',
    category: '솔루션',
  },
  {
    id: '5',
    question:
      '영상/AR 솔루션은 온라인 주문 솔루션(주문 사이트, 기업 인쇄몰)의 장점은 무엇인가요?',
    answer:
      '답변 내용이 들어가게 됩니다.\n답변 내용이 들어가게 됩니다.\n답변 내용이 들어가게 됩니다.',
    category: '솔루션',
  },
  {
    id: '6',
    question: '데이터 보안이 중요한 문서도 안전하게 출력할 수 있나요?',
    answer:
      '답변 내용이 들어가게 됩니다.\n답변 내용이 들어가게 됩니다.\n답변 내용이 들어가게 됩니다.',
    category: '솔루션',
  },
  {
    id: '7',
    question: 'EX감성 분석이 뭔가요?',
    answer:
      '답변 내용이 들어가게 됩니다.\n답변 내용이 들어가게 됩니다.\n답변 내용이 들어가게 됩니다.',
    category: '솔루션',
  },
  {
    id: '8',
    question: '전문가들은 어떤 경력과 자격을 갖고 있나요?',
    answer:
      '답변 내용이 들어가게 됩니다.\n답변 내용이 들어가게 됩니다.\n답변 내용이 들어가게 됩니다.',
    category: '솔루션',
  },
  {
    id: '9',
    question:
      '특정 산업(제약, 금융, 제조 등)에 특화된 경험이 있는 전문가를 배정받을 수 있나요?',
    answer:
      '답변 내용이 들어가게 됩니다.\n답변 내용이 들어가게 됩니다.\n답변 내용이 들어가게 됩니다.',
    category: '솔루션',
  },
  {
    id: '10',
    question:
      '전문가 연결 시 1회성인지, 프로젝트 전담으로 지속 관리가 가능한가요?',
    answer:
      '답변 내용이 들어가게 됩니다.\n답변 내용이 들어가게 됩니다.\n답변 내용이 들어가게 됩니다.',
    category: '솔루션',
  },
]

//@TODO Pagenaition
export const FaqTemplate = (props: FaqTemplateProps) => {
  const {
    faqData = defaultFaqData,
    tabs = defaultTabs,
    currentTab = 'top-faq',
    onTabChange,
    currentPage = 1,
    totalPages = 7,
    onPageChange,
    ...rest
  } = props

  const [selectedTab, setSelectedTab] = React.useState(currentTab)

  const handleTabChange = React.useCallback(
    (value: string | null) => {
      if (value) {
        setSelectedTab(value)
        onTabChange?.(value)
      }
    },
    [onTabChange],
  )

  return (
    <Container>
      <Box w="full" {...rest} pt={'80px'}>
        <VStack gap="56px" align="stretch">
          {/* 헤더 섹션 */}
          <VStack gap="40px" align="center">
            <Heading
              as="h1"
              fontSize="48px"
              fontWeight="bold"
              color="grey.10"
              textAlign="center"
              letterSpacing="-0.48px"
              lineHeight="1.4"
            >
              주요 질문
            </Heading>
            {/* 탭 네비게이션 */}
            <Box w="full" position="relative">
              <Tabs.Root
                value={selectedTab}
                onValueChange={(e) => handleTabChange(e.value)}
                variant="enclosed"
              >
                <Tabs.List
                  gap="8px"
                  h="48px"
                  overflow="hidden"
                  position="relative"
                  w="full"
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                >
                  {tabs.map((tab) => (
                    <Tabs.Trigger
                      key={tab.id}
                      value={tab.id}
                      h="48px"
                      px="16px"
                      py="0"
                      borderRadius="10px"
                      fontSize="18px"
                      fontWeight="600"
                      letterSpacing="-0.36px"
                      lineHeight="1.6"
                      _selected={{
                        bg: 'grey.10',
                        color: 'grey.0',
                      }}
                      _hover={{
                        opacity: 0.8,
                      }}
                    >
                      {tab.label}
                    </Tabs.Trigger>
                  ))}
                </Tabs.List>
              </Tabs.Root>

              {/* 그라데이션 오버레이 */}
              <Box
                position="absolute"
                top="0"
                right="0"
                w="30px"
                h="48px"
                bgGradient="linear(to-l, grey.0, rgba(255, 255, 255, 0))"
                pointerEvents="none"
              />
            </Box>
          </VStack>

          <VStack gap="64px" align="center">
            <VStack gap="0" align="stretch" w="full">
              {faqData.map((faq) => (
                <FaqItem
                  currentTab={selectedTab}
                  key={faq.id}
                  question={faq.question}
                  answer={faq.answer}
                  category={faq.category}
                />
              ))}
            </VStack>
          </VStack>
        </VStack>
      </Box>
    </Container>
  )
}
