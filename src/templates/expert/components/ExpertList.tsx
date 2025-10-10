'use client'

import * as React from 'react'

import Link from 'next/link'

import { Box, Flex, Grid, VStack } from '@chakra-ui/react'

import { Pagination } from '@/components/pagination'
import {
  GetAllExpertResponseType,
  IndustryTypeType,
  PrintCostBracketTypeType,
} from '@/generated/apis/@types/data-contracts'

import { ExpertCard, type ExpertCardProps } from './ExpertCard'
import {
  ExpertFilterSection,
  type ExpertFilterSectionProps,
} from './ExpertFilterSection'

export interface ExpertListProps
  extends Omit<
    ExpertFilterSectionProps,
    | 'fieldOptions'
    | 'budgetOptions'
    | 'industryOptions'
    | 'printOptions'
    | 'selectedFields'
    | 'selectedBudgets'
    | 'onFieldChange'
    | 'onBudgetChange'
  > {
  /**
   * 전문가 목록
   */
  experts: GetAllExpertResponseType[]

  industryOptions: IndustryTypeType[]
  printOptions: PrintCostBracketTypeType[]

  currentPage: number
  totalPages: number
  onPageChange: (page: number) => void
}

export const ExpertList = React.forwardRef<HTMLDivElement, ExpertListProps>(
  function ExpertList(props, ref) {
    const {
      experts,
      industryOptions,
      printOptions,
      filter,
      currentPage,
      totalPages,

      onFilterChange,
      onPageChange,
    } = props

    return (
      <Flex ref={ref} gap="101px" align="flex-start">
        <ExpertFilterSection
          industryOptions={industryOptions}
          printOptions={printOptions}
          filter={filter}
          onFilterChange={onFilterChange}
        />

        <VStack gap="64px" align="center" flex="1" minW="0">
          <Grid
            templateColumns="repeat(3, 1fr)"
            gap="24px"
            rowGap="48px"
            width="100%"
          >
            {experts.map((expert) => (
              <Link href={`/expert/${expert.id}`} key={expert.id}>
                <Box>
                  <ExpertCard expert={expert} />
                </Box>
              </Link>
            ))}
          </Grid>

          {totalPages > 1 && (
            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={onPageChange}
              size="lg"
            />
          )}
        </VStack>
      </Flex>
    )
  },
)
