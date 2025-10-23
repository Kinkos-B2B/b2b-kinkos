'use client'

import * as React from 'react'

import Image from 'next/image'

import { Badge, Box, Flex, HStack, Text, VStack } from '@chakra-ui/react'

import { GetAllExpertResponseType } from '@/generated/apis/@types/data-contracts'

export interface ExpertCardProps {
  expert: GetAllExpertResponseType
}

export const ZoomImageWrapper = ({
  children,
}: {
  children: React.ReactNode
}) => {
  return (
    <Box
      position="relative"
      overflow="hidden"
      borderRadius="28px"
      _hover={{
        '& img': {
          transform: 'scale(1.05)',
          transition: 'transform 0.3s ease',
        },
      }}
    >
      {children}
    </Box>
  )
}

export const ExpertCard = React.forwardRef<HTMLDivElement, ExpertCardProps>(
  function ExpertCard(props, ref) {
    const { expert, ...rest } = props

    return (
      <VStack ref={ref} gap="16px" align="stretch" {...rest}>
        <ZoomImageWrapper>
          <Image
            src={expert.thumbnailImage?.url || ''}
            alt={`${expert.nickname}의 프로필 이미지`}
            width={0}
            height={0}
            sizes="100vw"
            style={{
              borderRadius: '28px',
              objectFit: 'cover',
              width: '100%',
              height: '100%',
              aspectRatio: '317/202',
            }}
          />
        </ZoomImageWrapper>
        <VStack gap="16px" align="stretch" pr="24px">
          <VStack gap="4px" align="stretch">
            <Text
              textStyle="pre-heading-3"
              color="grey.9"
              letterSpacing="-0.2px"
            >
              {expert.nickname}
            </Text>
            <Text
              textStyle="pre-body-2"
              color="grey.8"
              letterSpacing="-0.36px"
              lineHeight="1.6"
            >
              {expert.description}
            </Text>
          </VStack>

          <HStack gap="8px" flexWrap="wrap">
            {expert.industryList?.map((tag, index) => (
              <Badge
                key={`${tag}-${index}`}
                colorPalette={'grey'}
                variant={'subtle'}
              >
                {tag}
              </Badge>
            ))}
          </HStack>
        </VStack>
      </VStack>
    )
  },
)
