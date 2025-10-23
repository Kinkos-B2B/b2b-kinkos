import * as React from 'react'

import { Container, VStack } from '@chakra-ui/react'

import { BizDescriptionItem } from '../types'
import { BizDescriptionSectionItem } from './components/BizDescriptionItem'
import { orderToKorean } from './utils'

export const BizOrderedDescriptionSection = ({
  data,
}: {
  data: BizDescriptionItem[]
}) => {
  return (
    <Container maxW="1280px" py={'160px'}>
      <VStack gap={'120px'}>
        {data.map((item, index) => (
          <BizDescriptionSectionItem
            key={index}
            {...item}
            badge={`#${orderToKorean(index)}`}
          />
        ))}
      </VStack>
    </Container>
  )
}
