'use client'

import * as React from 'react'

import { Badge, Text, VStack } from '@chakra-ui/react'

import { Checkbox } from '@/components/ui/checkbox'

const CATEGORY_LABELS: Record<string, string> = {
  SMALL: '소량인쇄',
  PROFESSIONAL: '전문인쇄',
  BULK: '대량인쇄',
}

export const FilterSection = ({
  title,
  children,
}: {
  title: string
  children: React.ReactNode
}) => (
  <VStack gap="8px" align="stretch">
    <Text textStyle="pre-body-5" color="grey.9">
      {title}
    </Text>
    {children}
  </VStack>
)

export const FilterOption = ({
  option,
  checked,
  onToggle,
  ariaLabel,
}: {
  option: { id?: number; name?: string }
  checked: boolean
  onToggle: (checked: boolean) => void
  ariaLabel: string
}) => (
  <Checkbox
    checked={checked}
    onCheckedChange={({ checked }) => onToggle(!!checked)}
    display="flex"
    h="40px"
    alignItems="center"
    gap="8px"
    aria-label={ariaLabel}
  >
    <Text textStyle="pre-body-3" color="grey.7" whiteSpace="nowrap">
      {option.name || ''}
    </Text>
  </Checkbox>
)

export const CategoryBadge = ({ category }: { category: string }) => (
  <Badge colorPalette="grey" variant="subtle" size="md">
    {CATEGORY_LABELS[category] || category}
  </Badge>
)
