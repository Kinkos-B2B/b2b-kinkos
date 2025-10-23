import * as React from 'react'

import { Box, Container, Grid, Text, VStack } from '@chakra-ui/react'

import { BizDescriptionBannerData, BizDescriptionItem } from '../types'
import { BizDescriptionBanner } from './components/BizDescriptionBanner'
import { BizDescriptionSectionItem } from './components/BizDescriptionItem'

interface Props {
  banner: BizDescriptionBannerData
  descriptionItem: BizDescriptionItem
}

export const BizDescriptionWithBannerSection = ({
  banner,
  descriptionItem,
}: Props) => {
  return (
    <Container
      maxW={'1280px'}
      w={'100%'}
      display={'flex'}
      flexDirection={'column'}
      gap={'160px'}
    >
      <BizDescriptionBanner
        title={banner.title}
        badgeText={banner.badgeText}
        description={banner.description}
      />
      <BizDescriptionSectionItem
        title={descriptionItem.title}
        description={descriptionItem.description}
        images={descriptionItem.images}
        infos={descriptionItem.infos}
        pdfLinkButton={descriptionItem.pdfLinkButton}
      />
    </Container>
  )
}
