import * as React from 'react'

import { Box, Center, Container, Text, VStack } from '@chakra-ui/react'

import { BizDescriptionBannerData } from '../../types'

export const BizDescriptionBanner = React.forwardRef<
  HTMLDivElement,
  BizDescriptionBannerData
>(function BizDescriptionBanner(props, ref) {
  const { title, badgeText, description } = props

  return (
    <Container maxW="1280px">
      <Center>
        <VStack ref={ref} gap="40px" align="center" w="full" maxW={'1000px'}>
          {/* 제목 섹션 */}
          <Text textStyle="pre-display-3" color="grey.10" textAlign={'center'}>
            {title}
          </Text>
          {/* 배지 및 설명 섹션 */}
          <Box
            bg="primary.1"
            borderRadius="28px"
            p="36px 0 40px 0"
            w="full"
            display="flex"
            flexDirection="column"
            alignItems="center"
            gap="18px"
          >
            {/* 그라데이션 배지 */}
            <Box
              bg="linear-gradient(90deg, #0050FF 38%, #4A5BFF 100%);"
              borderRadius="9999px"
              px="28px"
              py="10px"
              display="flex"
              alignItems="center"
              justifyContent="center"
            >
              <Text
                textStyle="pre-heading-2"
                color="grey.0"
                textAlign={'center'}
                whiteSpace="pre-line"
              >
                {badgeText}
              </Text>
            </Box>

            <Text
              textStyle="pre-body-1"
              color="grey.8"
              textAlign={'center'}
              whiteSpace="pre-line"
            >
              {description}
            </Text>
          </Box>
        </VStack>
      </Center>
    </Container>
  )
})
