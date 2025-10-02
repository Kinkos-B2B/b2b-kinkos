import { ReactNode } from 'react'

import { Flex, Text, VStack, chakra } from '@chakra-ui/react'
import { SealCheckIcon as SealCheckIconOriginal } from '@phosphor-icons/react/dist/ssr'

import {
  ComparisonTable,
  ComparisonTableRow,
} from '@/components/ui/comparison-table'

const SealCheckIcon = chakra(SealCheckIconOriginal)

export const FeatureTableItem = ({
  title,
  description,
  highlightData,
}: {
  title: string
  description: string
  highlightData: ComparisonTableRow[]
}) => {
  return (
    <VStack
      gap={'36px'}
      align={'flex-start'}
      w="100%"
      className="feature-table"
    >
      <FeatureItemTitle title={title} description={description} />
      <ComparisonTable data={highlightData} variant="highlight" size="md" />
    </VStack>
  )
}

export const FeatureDescriptionItem = ({
  title,
  description,
}: {
  title: string
  description: string
}) => {
  return (
    <VStack>
      <FeatureItemTitle title={title} description={description} />
    </VStack>
  )
}

const FeatureItemTitle = ({
  title,
  description,
}: {
  title: string
  description: ReactNode
}) => {
  return (
    <VStack gap={'10px'} align={'flex-start'} w="100%">
      <Flex gap={'8px'} align={'center'}>
        <SealCheckIcon boxSize={'40px'} weight="fill" color="primary.4" />
        <Text textStyle="pre-heading-1" color="grey.10">
          {title}
        </Text>
      </Flex>
      {description}
    </VStack>
  )
}

export const SolutionFeatureItem = {
  Table: FeatureTableItem,
  Description: FeatureDescriptionItem,
}
