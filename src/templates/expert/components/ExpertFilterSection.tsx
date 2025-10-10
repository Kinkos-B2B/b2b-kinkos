'use client'

import * as React from 'react'

import { Badge, Box, Button, Text, VStack } from '@chakra-ui/react'

import { groupBy } from 'lodash'

import { Checkbox } from '@/components/ui/checkbox'
import {
  IndustryTypeType,
  PrintCostBracketTypeType,
} from '@/generated/apis/@types/data-contracts'

export interface ExpertFilterSectionProps {
  industryOptions: IndustryTypeType[]
  printOptions: PrintCostBracketTypeType[]

  filter: {
    industryId: string[]
    printId: string[]
  }
  onFilterChange: (filter: { industryId: string[]; printId: string[] }) => void
}

export const ExpertFilterSection = React.forwardRef<
  HTMLDivElement,
  ExpertFilterSectionProps
>(function ExpertFilterSection(props, ref) {
  const { industryOptions, printOptions, filter, onFilterChange } = props

  const categoryLabels: Record<string, string> = {
    SMALL: '소량인쇄',
    PROFESSIONAL: '전문인쇄',
    BULK: '대량인쇄',
  }

  const printGroupedOptions = groupBy(printOptions, 'category')

  return (
    <VStack ref={ref} gap="24px" align="stretch" width="180px" flexShrink={0}>
      <VStack gap="36px" align="stretch">
        <VStack gap="8px" align="stretch">
          <Text textStyle="pre-body-5" color="grey.9">
            관련 분야
          </Text>
          <VStack gap="0" align="start">
            {industryOptions.map((option) => (
              <Checkbox
                key={option.id}
                checked={filter.industryId.includes(
                  option.id?.toString() || '',
                )}
                onCheckedChange={() =>
                  onFilterChange({
                    industryId: [option.id?.toString() || ''],
                    printId: filter.printId,
                  })
                }
                display="flex"
                h={'40px'}
                alignItems="center"
                gap="8px"
              >
                <Text textStyle="pre-body-3" color="grey.7" whiteSpace="nowrap">
                  {option.name}
                </Text>
              </Checkbox>
            ))}
          </VStack>
        </VStack>

        {/* 연간 인쇄 비용 */}
        <VStack gap="12px" align="stretch">
          <Text textStyle="pre-body-5" color="grey.9">
            연간 인쇄 비용
          </Text>
          <VStack gap="16px" align="start">
            {Object.entries(printGroupedOptions).map(([category, options]) => (
              <VStack key={category} gap="2px" align="start">
                {/* 카테고리 뱃지 */}

                <Badge colorPalette="grey" variant="subtle" size={'md'}>
                  {categoryLabels[category || ''] || category}
                </Badge>
                {/* 옵션 목록 */}
                <VStack gap="0" align="start">
                  {options.map((option) => (
                    <Checkbox
                      key={option.id}
                      h={'40px'}
                      checked={filter.printId.includes(
                        option.id?.toString() || '',
                      )}
                      onCheckedChange={() =>
                        onFilterChange({
                          industryId: filter.industryId,
                          printId: [option.id?.toString() || ''],
                        })
                      }
                      display="flex"
                      gap="8px"
                    >
                      <Text
                        textStyle="pre-body-3"
                        color="grey.7"
                        whiteSpace="nowrap"
                      >
                        {option.name}
                      </Text>
                    </Checkbox>
                  ))}
                </VStack>
              </VStack>
            ))}
          </VStack>
        </VStack>
      </VStack>

      <Box
        borderTop="1px solid"
        borderColor="border.basic.1"
        pt="24px"
        width="100%"
      >
        <VStack gap="8px" align="stretch">
          <Text textStyle="pre-caption-2" color="grey.7" whiteSpace="nowrap">
            선택이 고민된다면?
          </Text>
          <Button
            variant="outline"
            colorPalette="primary"
            size="sm"
            onClick={() => {}}
          >
            전문가 추천받기
          </Button>
        </VStack>
      </Box>
    </VStack>
  )
})
