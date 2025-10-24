import { VStack } from '@chakra-ui/react'

import { BizDescriptionWithBannerProps } from '../types'
import { BizDescriptionWithBannerSection } from './BizDescriptionWithBannerSection'

interface Props {
  data: BizDescriptionWithBannerProps[]
}

export const BizDescriptionWithBannerListSection = ({ data }: Props) => {
  return (
    <VStack
      py={{ lg: '160px', sm: '140px', base: '100px' }}
      gap={{ lg: '160px', sm: '140px', base: '100px' }}
      w={'100%'}
    >
      {data.map((item, index) => (
        <BizDescriptionWithBannerSection
          key={index}
          banner={item.banner}
          descriptionItem={item.descriptionItem}
        />
      ))}
    </VStack>
  )
}
