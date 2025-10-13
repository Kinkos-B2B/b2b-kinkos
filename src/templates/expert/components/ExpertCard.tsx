'use client'

import * as React from 'react'

import Image from 'next/image'

import { Badge, Box, Flex, HStack, Text, VStack } from '@chakra-ui/react'

import { GetAllExpertResponseType } from '@/generated/apis/@types/data-contracts'

export interface ExpertCardProps {
  expert: GetAllExpertResponseType
}

export const ExpertCard = React.forwardRef<HTMLDivElement, ExpertCardProps>(
  function ExpertCard(props, ref) {
    const { expert, ...rest } = props

    return (
      <VStack ref={ref} gap="16px" align="stretch" {...rest}>
        {/* 이미지 */}
        <Box
          position="relative"
          width="100%"
          height="202px"
          borderRadius="28px"
          overflow="hidden"
          bg="grey.2"
        >
          <Image
            src={expert.thumbnailImage?.url || ''}
            alt={`${expert.nickname}의 프로필 이미지`}
            fill
            style={{ objectFit: 'cover' }}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </Box>

        {/* 콘텐츠 */}
        <VStack gap="16px" align="stretch" pr="24px">
          {/* 닉네임 & 소개 */}
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

          {/* 태그 */}
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
