'use client'

import { groupBy } from 'lodash'

import {
  IndustryTypeType,
  PrintCostBracketTypeType,
} from '@/generated/apis/@types/data-contracts'

export interface FilterState {
  industryId: string[]
  printId: string[]
}

export interface FilterLogicProps {
  industryOptions: IndustryTypeType[]
  printOptions: PrintCostBracketTypeType[]
  filter: FilterState
  onFilterChange: (filter: FilterState) => void
}

export const useExpertFilter = ({
  industryOptions,
  printOptions,
  filter,
  onFilterChange,
}: FilterLogicProps) => {
  const printGroupedOptions = groupBy(printOptions, 'category')

  const handleIndustryToggle = (optionId: string, checked: boolean) => {
    onFilterChange({
      industryId:
        checked ?
          [...filter.industryId, optionId]
        : filter.industryId.filter((id) => id !== optionId),
      printId: filter.printId,
    })
  }

  const handlePrintToggle = (optionId: string, checked: boolean) => {
    onFilterChange({
      printId:
        checked ?
          [...filter.printId, optionId]
        : filter.printId.filter((id) => id !== optionId),
      industryId: filter.industryId,
    })
  }

  return {
    printGroupedOptions,
    handleIndustryToggle,
    handlePrintToggle,
  }
}
