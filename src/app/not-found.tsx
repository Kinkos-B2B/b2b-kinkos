'use client'

import Link from 'next/link'

import {
  AbsoluteCenter,
  Box,
  Button,
  Flex,
  Text,
  VStack,
} from '@chakra-ui/react'

import { ImageAsNext } from '@/components/image-as-next'
import { ROUTES } from '@/constants/routes'

// 이미지 경로 - Figma MCP에서 생성된 에셋
const imgEllipse199 = '/images/404.png'

/**
 * 404 페이지
 * @see https://nextjs.org/docs/app/api-reference/file-conventions/not-found
 */
export default function NotFound() {
  return (
    <Box
      position="relative"
      w="100%"
      h="calc(100vh - 80px)"
      bg="background.basic.1"
      overflow="hidden"
    >
      <Flex
        position="relative"
        w="100%"
        h="100%"
        alignItems="center"
        justifyContent="center"
        px={{ base: '20px', md: '40px' }}
        py="120px"
      >
        <ImageAsNext
          src={imgEllipse199}
          alt=""
          fill
          position="absolute"
          top="50%"
          left="50%"
          transform="translate(-50%, -50%)"
          zIndex={0}
          width={'100vw'}
          minW={'640px'}
          height={'100vh'}
          unoptimized
          isDisabledSkeleton
        />
        <VStack
          gap="32px"
          alignItems="center"
          maxW="671px"
          textAlign="center"
          zIndex={1}
        >
          <Text
            fontWeight="800"
            fontSize={{ base: '120px', md: '160px', lg: '200px' }}
            lineHeight="1"
            color="primary.4"
            letterSpacing="-2px"
            whiteSpace="nowrap"
          >
            404
          </Text>
          <VStack gap="32px" alignItems="center">
            <VStack gap="0" alignItems="center">
              <Text
                textStyle="pre-heading-3"
                color="grey.10"
                lineHeight="1.4"
                textAlign="center"
              >
                잘못된 페이지 주소가 입력되었거나,
              </Text>
              <Text
                textStyle="pre-heading-3"
                color="grey.10"
                lineHeight="1.4"
                textAlign="center"
              >
                주소가 변경 혹은 삭제되어 요청하신 페이지를 찾을 수 없어요
              </Text>
            </VStack>

            {/* 홈으로 가기 버튼 */}
            <Link href={ROUTES.HOME} aria-label="홈으로 이동">
              <Button variant="outline" size="xl" colorPalette="primary">
                홈으로 이동
              </Button>
            </Link>
          </VStack>
        </VStack>
      </Flex>
    </Box>
  )
}
