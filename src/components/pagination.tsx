'use client'

import * as React from 'react'

import {
  Box,
  Button,
  Flex,
  HStack,
  IconButton,
  Text,
  chakra,
} from '@chakra-ui/react'
import {
  CaretLeftIcon as CaretLeftIconPhosphor,
  CaretRightIcon as CaretRightIconPhosphor,
} from '@phosphor-icons/react/dist/ssr'

const CaretLeftIcon = chakra(CaretLeftIconPhosphor)
const CaretRightIcon = chakra(CaretRightIconPhosphor)

export interface PaginationProps {
  /**
   * 현재 페이지
   */
  currentPage: number
  /**
   * 총 페이지 수
   */
  totalPages: number
  /**
   * 페이지 변경 핸들러
   */
  onPageChange: (page: number) => void
  /**
   * 이전 페이지로 이동 핸들러
   */
  onPrevious?: () => void
  /**
   * 다음 페이지로 이동 핸들러
   */
  onNext?: () => void
  /**
   * 페이지 크기
   * @default "md"
   */
  size?: 'sm' | 'md' | 'lg'
  /**
   * 표시할 최대 페이지 번호 수
   * @default 5
   */
  maxVisiblePages?: number
}

export const Pagination = React.forwardRef<HTMLDivElement, PaginationProps>(
  function Pagination(props, ref) {
    const {
      currentPage,
      totalPages,
      onPageChange,
      onPrevious,
      onNext,
      size = 'md',
      maxVisiblePages = 5,
      ...rest
    } = props

    const handlePrevious = React.useCallback(() => {
      if (currentPage > 1) {
        onPageChange(currentPage - 1)
        onPrevious?.()
      }
    }, [currentPage, onPageChange, onPrevious])

    const handleNext = React.useCallback(() => {
      if (currentPage < totalPages) {
        onPageChange(currentPage + 1)
        onNext?.()
      }
    }, [currentPage, totalPages, onPageChange, onNext])

    const getVisiblePages = React.useCallback(() => {
      const pages: (number | string)[] = []
      const half = Math.floor(maxVisiblePages / 2)

      let start = Math.max(1, currentPage - half)
      const end = Math.min(totalPages, start + maxVisiblePages - 1)

      if (end - start + 1 < maxVisiblePages) {
        start = Math.max(1, end - maxVisiblePages + 1)
      }

      if (start > 1) {
        pages.push(1)
        if (start > 2) {
          pages.push('...')
        }
      }

      for (let i = start; i <= end; i++) {
        pages.push(i)
      }

      if (end < totalPages) {
        if (end < totalPages - 1) {
          pages.push('...')
        }
        pages.push(totalPages)
      }

      return pages
    }, [currentPage, totalPages, maxVisiblePages])

    const visiblePages = getVisiblePages()

    const getButtonSize = () => {
      switch (size) {
        case 'sm':
          return { w: '40px', h: '40px', fontSize: '12px' }
        case 'lg':
          return { w: '48px', h: '48px', fontSize: '16px' }
        default:
          return { w: '48px', h: '48px', fontSize: '14px' }
      }
    }

    const buttonSize = getButtonSize()

    return (
      <Flex ref={ref} gap="8px" align="center" {...rest}>
        {/* 이전 버튼 */}
        <IconButton
          variant="ghost"
          onClick={handlePrevious}
          _disabled={{
            opacity: 0.5,
            bg: 'transparent',
            cursor: 'not-allowed',
          }}
          color={'grey.8'}
          disabled={currentPage <= 1}
          w={buttonSize.w}
          h={buttonSize.h}
          minW={buttonSize.w}
        >
          <CaretLeftIcon w="24px" h="24px" />
        </IconButton>

        {/* 페이지 번호들 */}
        <HStack gap="8px">
          {visiblePages.map((page, index) => {
            if (page === '...') {
              return (
                <Button
                  key={`ellipsis-${index}`}
                  variant="ghost"
                  size="sm"
                  w={buttonSize.w}
                  h={buttonSize.h}
                  minW={buttonSize.w}
                  p="0"
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  borderRadius="10px"
                  cursor="default"
                  _hover={{
                    bg: 'transparent',
                  }}
                >
                  <Text
                    fontSize={buttonSize.fontSize}
                    fontWeight="600"
                    color="grey.8"
                    letterSpacing="-0.24px"
                  >
                    ...
                  </Text>
                </Button>
              )
            }

            const pageNumber = page as number
            const isSelected = pageNumber === currentPage

            return (
              <Button
                key={pageNumber}
                variant={isSelected ? 'solid' : 'ghost'}
                colorPalette={isSelected ? 'primary' : 'grey'}
                size="sm"
                onClick={() => onPageChange(pageNumber)}
                w={buttonSize.w}
                h={buttonSize.h}
                minW={buttonSize.w}
                p="0"
                display="flex"
                textStyle="pre-body-3"
                alignItems="center"
                color={isSelected ? 'grey.0' : 'grey.8'}
                justifyContent="center"
                borderRadius="10px"
                fontSize={buttonSize.fontSize}
                _hover={{
                  bg: isSelected ? 'primary.4' : 'grey.1',
                }}
              >
                {pageNumber}
              </Button>
            )
          })}
        </HStack>

        {/* 다음 버튼 */}
        <IconButton
          variant="ghost"
          onClick={handleNext}
          _disabled={{
            opacity: 0.5,
            bg: 'transparent',
            cursor: 'not-allowed',
          }}
          color={'grey.8'}
          disabled={currentPage >= totalPages}
          w={buttonSize.w}
          h={buttonSize.h}
          minW={buttonSize.w}
        >
          <CaretRightIcon w="24px" h="24px" />
        </IconButton>
      </Flex>
    )
  },
)
