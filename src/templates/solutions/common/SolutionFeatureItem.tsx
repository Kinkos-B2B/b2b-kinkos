import { ReactNode } from 'react'

import { Flex, HStack, Text, VStack, chakra } from '@chakra-ui/react'
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
  descriptionData,
}: {
  title: string
  description: string
  descriptionData: string[]
}) => {
  return (
    <VStack
      gap={'36px'}
      w="100%"
      className="feature-table"
      align={'flex-start'}
    >
      <FeatureItemTitle title={title} description={description} />
      <VStack gap={'12px'} align={'flex-start'} w="100%">
        {descriptionData.map((item, index) => (
          <HStack
            key={index}
            gap="6px"
            align="start"
            w="full"
            p={'15px 20px'}
            bg={'grey.0'}
            borderRadius={'12px'}
          >
            <Text
              textAlign="center"
              flexShrink="0"
              color="grey.9"
              aria-hidden="true"
            >
              •
            </Text>
            <Text textStyle="pre-body-4" color="grey.9">
              {item}
            </Text>
          </HStack>
        ))}
      </VStack>
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
      <Flex gap={'8px'} align={'flex-start'}>
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
