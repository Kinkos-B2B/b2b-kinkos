import * as React from 'react'

import Link from 'next/link'

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
import { useMediaQuery } from '@/hooks/useMediaQuery'

import { BizDescriptionItem } from '../../types'
import { BizImageDescriptionBox } from './BizImageDescriptionBox'
import {
  DescriptionBox,
  DescriptionColumnTextBlock,
  DescriptionRowTextBlock,
} from './DescriptionBox'

const PdfLinkButton = ({ text, link }: { text: string; link: string }) => {
  return (
    <HStack gap={{ base: '12px', lg: '20px' }} flexWrap={'wrap'}>
      <Text textStyle={'pre-heading-4'} color={'grey.8'}>
        {text}
      </Text>
      <Link href={link}>
        <Button variant={'outline'} size={'md'}>
          더 자세히 알아보기
        </Button>
      </Link>
    </HStack>
  )
}

export const BizDescriptionSectionItem = React.forwardRef<
  HTMLDivElement,
  BizDescriptionItem
>(function BizDescriptionSection(props, ref) {
  const { badge, title, description, images, infos, pdfLinkButton } = props
  const isMobile = useMediaQuery(['(max-width: 768px)'], { ssr: true })[0]

  return (
    <VStack
      ref={ref}
      gap={{ lg: '48px', sm: '40px', base: '32px' }}
      align="stretch"
      w="full"
    >
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
          <Text textStyle="pre-display-4" color="grey.10" fontWeight="700">
            {title}
          </Text>
          <Text textStyle="pre-body-4" color="grey.7">
            {description}
          </Text>
        </VStack>
      </VStack>
      {/* 중간: 이미지 그리드 */}
      <VStack gap={{ lg: '36px', sm: '36px', base: '28px' }} align="stretch">
        <BizImageDescriptionBox images={images} />
        <VStack align={'stretch'} gap={'24px'}>
          <DescriptionBox>
            {infos.map((info, index) =>
              isMobile ?
                <DescriptionColumnTextBlock
                  key={index}
                  name={info.name}
                  description={info.description}
                />
              : <DescriptionRowTextBlock
                  key={index}
                  name={info.name}
                  description={info.description}
                />,
            )}
          </DescriptionBox>
          {pdfLinkButton && (
            <PdfLinkButton
              text={pdfLinkButton.text}
              link={pdfLinkButton.link}
            />
          )}
        </VStack>
      </VStack>
    </VStack>
  )
})
