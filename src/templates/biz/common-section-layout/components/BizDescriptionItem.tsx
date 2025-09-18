import * as React from 'react'

import {
  Box,
  Button,
  Container,
  Grid,
  GridItem,
  HStack,
  Text,
  VStack,
} from '@chakra-ui/react'

import { ImageAsNext } from '@/components/image-as-next'
import { Badge } from '@/components/ui/badge'

import { BizImageDescriptionBox } from './BizImageDescriptionBox'
import { DescriptionBox, DescriptionColumnTextBlock } from './DescriptionBox'

export interface FactoryInfo {
  name: string
  description: string
}

export interface BizDescriptionItemProps {
  badge?: string
  title: string
  description: string
  images: string[]
  factoryInfo: FactoryInfo[]
}

const PdfLinkButton = () => {
  return (
    <HStack gap={'20px'}>
      <Text textStyle={'pre-heading-4'} color={'grey.8'}>
        킨코스가 보유한 모든 제작 장비의 이미지와 상세 리스트를 확인하시려면
        왼쪽 버튼을 클릭해주세요.
      </Text>
      <Button variant={'outline'} size={'md'}>
        더 자세히 알아보기
      </Button>
    </HStack>
  )
}

export const BizDescriptionSectionItem = React.forwardRef<
  HTMLDivElement,
  BizDescriptionItemProps & {
    pdfLinkButton?: boolean
  }
>(function BizDescriptionSection(props, ref) {
  const { badge, title, description, images, factoryInfo, pdfLinkButton } =
    props

  return (
    <VStack ref={ref} gap="48px" align="stretch" w="full">
      {/* 상단: 배지, 제목, 설명 */}
      <VStack gap="16px" align="stretch">
        {badge && (
          <Box>
            <Badge
              variant="subtle"
              colorPalette="primary"
              size="md"
              showLeftIcon={false}
              showRightIcon={false}
            >
              {badge}
            </Badge>
          </Box>
        )}
        <VStack gap="10px" align="stretch">
          <Text
            textStyle="pre-display-4"
            color="grey.10"
            fontWeight="700"
            lineHeight="1.4"
            letterSpacing="-0.4px"
          >
            {title}
          </Text>
          <Text
            textStyle="pre-body-4"
            color="grey.7"
            lineHeight="1.6"
            letterSpacing="-0.32px"
          >
            {description}
          </Text>
        </VStack>
      </VStack>
      {/* 중간: 이미지 그리드 */}
      <VStack gap="36px" align="stretch">
        <BizImageDescriptionBox images={images} />
        <VStack align={'stretch'} gap={'24px'}>
          <DescriptionBox>
            {factoryInfo.map((info, index) => (
              <DescriptionColumnTextBlock
                key={index}
                name={info.name}
                description={info.description}
              />
            ))}
          </DescriptionBox>
          {pdfLinkButton && <PdfLinkButton />}
        </VStack>
      </VStack>
    </VStack>
  )
})
