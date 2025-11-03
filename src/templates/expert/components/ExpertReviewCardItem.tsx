'use client'

import { useMemo } from 'react'

import {
  Avatar,
  Box,
  HStack,
  Separator,
  Text,
  VStack,
  chakra,
} from '@chakra-ui/react'
import { ChatCenteredDotsIcon } from '@phosphor-icons/react/dist/ssr'

import {
  GetAllExpertResponseType,
  GetExpertMainCustomerReviewResponseType,
} from '@/generated/apis/@types/data-contracts'

interface Props {
  expertReview: GetExpertMainCustomerReviewResponseType
}

export const ExpertReviewCardItem = ({ expertReview }: Props) => {
  const color = useMemo(() => {
    // id가 없을 경우 기본값 사용
    const id = expertReview.id ?? 0

    // id를 기반으로 결정적인 색상 생성
    // HSL 색상 공간을 사용하여 연속된 id에도 드라마틱한 색상 변화 생성
    // 같은 id는 항상 같은 색상이 나오도록 보장

    // HSL to RGB 변환 함수
    const hslToRgb = (h: number, s: number, l: number): string => {
      h = h / 360
      const c = (1 - Math.abs(2 * l - 1)) * s
      const x = c * (1 - Math.abs(((h * 6) % 2) - 1))
      const m = l - c / 2
      let r = 0,
        g = 0,
        b = 0

      if (h < 1 / 6) {
        r = c
        g = x
        b = 0
      } else if (h < 2 / 6) {
        r = x
        g = c
        b = 0
      } else if (h < 3 / 6) {
        r = 0
        g = c
        b = x
      } else if (h < 4 / 6) {
        r = 0
        g = x
        b = c
      } else if (h < 5 / 6) {
        r = x
        g = 0
        b = c
      } else {
        r = c
        g = 0
        b = x
      }

      r = Math.round((r + m) * 255)
      g = Math.round((g + m) * 255)
      b = Math.round((b + m) * 255)

      return `#${r.toString(16).padStart(2, '0')}${g.toString(16).padStart(2, '0')}${b.toString(16).padStart(2, '0')}`
    }

    // id를 기반으로 Hue를 넓게 분산 (골든 앵글 비율 사용)
    const goldenAngle = 137.508 // 골든 앵글 (색상 분산에 최적)
    const hue1 = (id * goldenAngle) % 360
    const hue2 = (id * goldenAngle + 60) % 360 // 첫 번째 색상에서 60도 떨어진 색상

    // Saturation과 Lightness도 id 기반으로 약간 변화
    const sat1 = 60 + ((id * 7) % 30) // 60-90% 범위
    const sat2 = 60 + ((id * 13) % 30)
    const light1 = 50 + ((id * 11) % 15) // 50-65% 범위
    const light2 = 50 + ((id * 17) % 15)

    const color1 = hslToRgb(hue1, sat1 / 100, light1 / 100)
    const color2 = hslToRgb(hue2, sat2 / 100, light2 / 100)

    return [color1, color2]
  }, [expertReview.id])
  console.log(color)

  return (
    <Box
      bg="background.basic.2"
      borderRadius="28px"
      p={{ base: '28px', sm: '24px 24px 20px 24px', lg: '32px 36px' }}
      w="382px"
      h={{ base: '225px', sm: '250px' }}
      maxW={'382px'}
      justifyContent="space-between"
      gap={{ base: '16px', sm: '24px' }}
      display="flex"
      flexDirection="column"
    >
      <VStack align="start" gap={{ base: '8px', sm: '12px', lg: '16px' }}>
        <Text textStyle="pre-heading-3" color="grey.9">
          {expertReview.title}
        </Text>
        <Text
          textStyle="pre-body-2"
          color="grey.8"
          lineClamp={3}
          overflow="hidden"
          textOverflow="ellipsis"
        >
          {`${expertReview.body}`}
        </Text>
      </VStack>
      <chakra.div
        display="flex"
        gap="16px"
        alignItems="center"
        justifyContent="flex-start"
      >
        <ChatCenteredDotsIcon
          size={44}
          weight="fill"
          fill={`url(#gradient-${color[0].substring(1)})`}
        />
        <svg width="0" height="0">
          <defs>
            <linearGradient
              id={`gradient-${color[0].substring(1)}`}
              gradientTransform="rotate(136)"
            >
              <stop offset="-3.69%" stopColor={color[0]} />
              <stop offset="100.23%" stopColor={color[1]} />
            </linearGradient>
          </defs>
        </svg>

        <chakra.div
          bg="background.basic.1"
          border="1px solid"
          borderColor="border.basic.1"
          borderRadius="999px"
          px="12px"
          py="4px"
          position="relative"
          flexShrink="0"
        >
          <chakra.div
            display="flex"
            gap="8px"
            alignItems="center"
            justifyContent="flex-start"
            w="100%"
          >
            <chakra.span
              color="grey.7"
              textStyle="pre-body-5"
              whiteSpace="nowrap"
            >
              {expertReview.companyName}
            </chakra.span>

            <Separator
              h={'12px'}
              w={'1px'}
              orientation="vertical"
              color="border.basic.4"
            />

            <chakra.span
              textStyle="pre-body-5"
              color="grey.7"
              whiteSpace="nowrap"
            >
              {expertReview.customerName}
            </chakra.span>
          </chakra.div>
        </chakra.div>
      </chakra.div>

      {/* <HStack
        bg="grey.0"
        borderRadius="9999px"
        p="8px 20px 8px 8px"
        h="57px"
        gap="12px"
        border="1px solid"
        borderColor="border.basic.1"
        w="full"
      >
        <VStack
          align="start"
          gap="0"
          flex="1"
          minW="0"
          justify={'start'}
          h={'100%'}
        >
          <Text
            textStyle="pre-body-5"
            color="grey.7"
            whiteSpace="nowrap"
            overflow="hidden"
            textOverflow="ellipsis"
          >
            {expertReview.companyName}
          </Text>
          <Text
            textStyle="pre-caption-2"
            color="grey.7"
            whiteSpace="nowrap"
            overflow="hidden"
            textOverflow="ellipsis"
          >
            {expertReview.customerName}
          </Text>
        </VStack>
      </HStack> */}
    </Box>
  )
}
