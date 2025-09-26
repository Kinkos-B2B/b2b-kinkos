'use client'

import * as React from 'react'

import { Box, Collapsible, Flex, HStack, Text, chakra } from '@chakra-ui/react'
import { CaretDownIcon as CaretDownIconPhosphor } from '@phosphor-icons/react/dist/ssr'

import { Badge } from '@/components/ui/badge'

export interface FaqItemProps {
  /**
   * FAQ 질문
   */
  question: string
  /**
   * FAQ 답변
   */
  answer: string
  /**
   * 카테고리 배지
   */
  category?: string
  /**
   * 초기 열림 상태
   * @default false
   */
  defaultOpen?: boolean
  /**
   * 열림 상태 (제어됨)
   */

  currentTab?: string

  isOpen?: boolean
  /**
   * 열림 상태 변경 핸들러
   *
   *
   */

  onToggle?: (isOpen: boolean) => void
}

const CaretDownIcon = chakra(CaretDownIconPhosphor)

export const FaqItem = React.forwardRef<HTMLDivElement, FaqItemProps>(
  function FaqItem(props, ref) {
    const {
      question,
      answer,
      currentTab,
      category,
      defaultOpen = false,
      isOpen: controlledIsOpen,
      onToggle,
      ...rest
    } = props

    const [internalIsOpen, setInternalIsOpen] = React.useState(defaultOpen)
    const isOpen = controlledIsOpen ?? internalIsOpen

    const handleToggle = React.useCallback(() => {
      const newIsOpen = !isOpen
      if (controlledIsOpen === undefined) {
        setInternalIsOpen(newIsOpen)
      }
      onToggle?.(newIsOpen)
    }, [isOpen, controlledIsOpen, onToggle])

    return (
      <Box
        ref={ref}
        borderBottom="1px solid"
        borderColor="border.basic.1"
        py="30px"
        {...rest}
      >
        <Flex direction="column" gap="4px">
          <Box>
            {currentTab === 'top-faq' && (
              <Badge
                variant="subtle"
                colorPalette="primary"
                size="md"
                showLeftIcon={false}
                showRightIcon={false}
              >
                {category}
              </Badge>
            )}
          </Box>
          <HStack
            gap="200px"
            align="center"
            cursor="pointer"
            onClick={handleToggle}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault()
                handleToggle()
              }
            }}
            _hover={{
              opacity: 0.8,
            }}
          >
            <Flex gap="8px" align="center" flex="1">
              <Text
                color="primary.4"
                fontSize="20px"
                fontWeight="bold"
                lineHeight="1.4"
                letterSpacing="-0.2px"
                flexShrink={0}
              >
                Q
              </Text>
              <Text
                color="grey.10"
                fontSize="20px"
                fontWeight="bold"
                lineHeight="1.4"
                letterSpacing="-0.2px"
                flex="1"
              >
                {question}
              </Text>
            </Flex>

            <Box
              w="24px"
              h="24px"
              display="flex"
              alignItems="center"
              justifyContent="center"
              flexShrink={0}
            >
              <CaretDownIcon
                w="24px"
                h="24px"
                transform={isOpen ? 'rotate(180deg)' : 'rotate(0deg)'}
                transition="transform 0.2s ease"
                color="grey.10"
              />
            </Box>
          </HStack>
        </Flex>

        <Collapsible.Root open={isOpen}>
          <Collapsible.Content>
            <Box pl="20px" pr="0" py="0" pt={'30px'}>
              <Text
                color="grey.7"
                fontSize="18px"
                fontWeight="normal"
                lineHeight="1.6"
                letterSpacing="-0.36px"
              >
                {answer}
              </Text>
            </Box>
          </Collapsible.Content>
        </Collapsible.Root>
      </Box>
    )
  },
)
