'use client'

import * as React from 'react'

import { Box, Button, Text, VStack } from '@chakra-ui/react'

import { usePannelContext } from '@/components/PannelContext'

import {
  CategoryBadge,
  FilterOption,
  FilterSection,
} from './expert-filter/FilterItem'
import { FilterLogicProps, useExpertFilter } from './hooks/useExpertFilter'

export interface ExpertFilterSectionProps extends FilterLogicProps {}

export const ExpertFilterSection = React.forwardRef<
  HTMLDivElement,
  ExpertFilterSectionProps
>(function ExpertFilterSection(props, ref) {
  const { industryOptions, printOptions, filter, onFilterChange } = props
  const { openPannel } = usePannelContext()
  const { printGroupedOptions, handleIndustryToggle, handlePrintToggle } =
    useExpertFilter({
      industryOptions,
      printOptions,
      filter,
      onFilterChange,
    })

  return (
    <VStack ref={ref} gap="24px" align="stretch" flexShrink={0}>
      <VStack gap="36px" align="stretch">
        {/* 관련 분야 섹션 */}
        <FilterSection title="관련 분야">
          <VStack gap="0" align="start">
            {industryOptions.map((option) => (
              <FilterOption
                key={option.id}
                option={option}
                checked={filter.industryId.includes(
                  option.id?.toString() || '',
                )}
                onToggle={(checked) =>
                  handleIndustryToggle(option.id?.toString() || '', checked)
                }
                ariaLabel={`${option.name} 관련 분야 선택`}
              />
            ))}
          </VStack>
        </FilterSection>

        {/* 연간 인쇄 비용 섹션 */}
        <FilterSection title="연간 인쇄 비용">
          <VStack gap="16px" align="start">
            {Object.entries(printGroupedOptions).map(([category, options]) => (
              <VStack key={category} gap="2px" align="start">
                <CategoryBadge category={category} />
                <VStack gap="0" align="start">
                  {options.map((option) => (
                    <FilterOption
                      key={option.id}
                      option={option}
                      checked={filter.printId.includes(
                        option.id?.toString() || '',
                      )}
                      onToggle={(checked) =>
                        handlePrintToggle(option.id?.toString() || '', checked)
                      }
                      ariaLabel={`${option.name} 연간 인쇄 비용 선택`}
                    />
                  ))}
                </VStack>
              </VStack>
            ))}
          </VStack>
        </FilterSection>
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
            onClick={() => openPannel()}
          >
            전문가 추천받기
          </Button>
        </VStack>
      </Box>
    </VStack>
  )
})
