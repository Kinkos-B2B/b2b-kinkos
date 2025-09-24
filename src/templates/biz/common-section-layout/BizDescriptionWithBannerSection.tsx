import * as React from 'react'

import { Box, Container, Grid, Text, VStack } from '@chakra-ui/react'

import { BizDescriptionBanner } from './components/BizDescriptionBanner'
import { BizDescriptionBannerProps } from './components/BizDescriptionBanner'
import {
  BizDescriptionItemProps,
  BizDescriptionSectionItem,
} from './components/BizDescriptionItem'

interface Props {
  banner: BizDescriptionBannerProps
  descriptionItem: BizDescriptionItemProps
}

export const BizDescriptionWithBannerSection = ({
  banner,
  descriptionItem,
}: Props) => {
  return (
    <Container maxW={'1280px'} py={'160px'}>
      <BizDescriptionBanner
        title={banner.title}
        badgeText={banner.badgeText}
        description={banner.description}
      />
      <BizDescriptionSectionItem
        title={descriptionItem.title}
        description={descriptionItem.description}
        images={descriptionItem.images}
        factoryInfo={descriptionItem.factoryInfo}
      />
    </Container>
  )
}
