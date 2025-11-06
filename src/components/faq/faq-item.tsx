'use client'

import * as React from 'react'

import {
  Box,
  BoxProps,
  Collapsible,
  Flex,
  HStack,
  Text,
  chakra,
} from '@chakra-ui/react'
import { CaretDownIcon as CaretDownIconPhosphor } from '@phosphor-icons/react/dist/ssr'

import { Badge } from '@/components/ui/badge'
import { GetAllFaqResponseCategoryEnumType } from '@/generated/apis/@types/data-contracts'
import { CATEGORY_LABELS } from '@/templates/faq/FaqTemplate'

export interface FaqItemProps {
  id?: number
  category?: GetAllFaqResponseCategoryEnumType
  title?: string
  body?: string

  defaultOpen?: boolean
  /**
   * 열림 상태 (제어됨)
   */

  currentTab?: GetAllFaqResponseCategoryEnumType | 'TOP'

  isOpen?: boolean

  boxStyle?: BoxProps

  onToggle?: (isOpen: boolean) => void
}

const CaretDownIcon = chakra(CaretDownIconPhosphor)

export const FaqItem = React.forwardRef<HTMLDivElement, FaqItemProps>(
  function FaqItem(props, ref) {
    const {
      id,
      title,
      body,
      currentTab,
      category,
      defaultOpen = false,
      isOpen: controlledIsOpen,
      onToggle,
      boxStyle,
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
        {...boxStyle}
        borderBottom="1px solid"
        borderColor="border.basic.1"
        py={{ base: '20px', sm: '30px' }}
      >
        <Flex direction="column" gap="4px">
          <Box>
            {currentTab === 'TOP' && category && (
              <Badge
                variant="subtle"
                colorPalette="primary"
                size="md"
                showLeftIcon={false}
                showRightIcon={false}
              >
                {CATEGORY_LABELS[category]}
              </Badge>
            )}
          </Box>
          <HStack
            gap="80px"
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
            <Flex gap="8px" align="start" flex="1" w="full">
              <Text
                color="primary.4"
                textStyle={'pre-heading-3'}
                flexShrink={0}
              >
                Q
              </Text>
              <Text
                color="grey.10"
                textStyle={'pre-heading-3'}
                flex="1"
                w="full"
              >
                {title}
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
            <Box
              pl="20px"
              pr="0"
              py="0"
              pt={{ base: '20px', sm: '30px' }}
              css={{
                '& i': {
                  fontStyle: 'italic',
                },
                '& a': {
                  color: 'revert',
                  textDecoration: 'revert',
                  target: '_blank',
                },
                '& .text-huge': {
                  fontSize: '1.8em',
                },
                '& .text-big': {
                  fontSize: '1.4em',
                },
                '& .text-small': {
                  fontSize: '0.85em',
                },
                '& .text-tiny': {
                  fontSize: '0.7em',
                },
                '& ul': {
                  all: 'revert',
                  'list-style-type': 'disc',
                },
                '& ol': {
                  all: 'revert',
                  'list-style-type': 'decimal',
                },
              }}
            >
              <Text
                color="grey.7"
                textStyle="pre-body-2"
                fontWeight="normal"
                dangerouslySetInnerHTML={{ __html: body ?? '' }}
              />
            </Box>
          </Collapsible.Content>
        </Collapsible.Root>
      </Box>
    )
  },
)
