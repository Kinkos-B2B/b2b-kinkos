import * as React from 'react'

import { Container, VStack } from '@chakra-ui/react'

import {
  BizDescriptionItemProps,
  BizDescriptionSectionItem,
} from './components/BizDescriptionItem'
import { orderToKorean } from './utils'

export const BizOrderedDescriptionSection = ({
  data,
}: {
  data: BizDescriptionItemProps[]
}) => {
  return (
    <Container maxW="1280px">
      <VStack gap={'120px'}>
        {data.map((item, index) => (
          <BizDescriptionSectionItem
            key={index}
            {...item}
            badge={`#${orderToKorean(index + 1)}`}
          />
        ))}
      </VStack>
    </Container>
  )
}
