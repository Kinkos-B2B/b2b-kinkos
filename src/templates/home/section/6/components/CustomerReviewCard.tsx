'use client'

import Image from 'next/image'

import { Separator, chakra } from '@chakra-ui/react'
import { ChatCenteredDotsIcon } from '@phosphor-icons/react/dist/ssr'

interface CustomerReviewCardProps {
  review: string
  color: [string, string]
  company: string
  name: string
}

export function CustomerReviewCard({
  review,
  color,
  company,
  name,
}: CustomerReviewCardProps) {
  return (
    <chakra.div
      h={'100%'}
      bg="background.basic.2"
      borderRadius="28px"
      p={{ lg: '36px', base: '24px 36px' }}
      display="flex"
      flexDirection="column"
      gap="20px"
      alignItems="flex-start"
      justifyContent="space-between"
      minW="0"
      flex="1"
    >
      <chakra.p textStyle="pre-body-1" color="grey.8" minW="0">
        {review}
      </chakra.p>

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
              {company}
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
              {name}
            </chakra.span>
          </chakra.div>
        </chakra.div>
      </chakra.div>
    </chakra.div>
  )
}
