'use client'

import * as React from 'react'

import Image from 'next/image'

import { Box, Flex, HStack, Text, VStack } from '@chakra-ui/react'

export interface ExpertCardProps {
  /**
   * 전문가 ID
   */
  id: number
  /**
   * 전문가 이미지 URL
   */
  imageUrl: string
  /**
   * 전문가 닉네임
   */
  nickname: string
  /**
   * 전문가 소개
   */
  description: string
  /**
   * 관련 분야 태그 목록
   */
  tags: string[]
  /**
   * 클릭 핸들러
   */
  onClick?: (id: number) => void
}

export const ExpertCard = React.forwardRef<HTMLDivElement, ExpertCardProps>(
  function ExpertCard(props, ref) {
    const { id, imageUrl, nickname, description, tags, onClick, ...rest } =
      props

    const handleClick = React.useCallback(() => {
      onClick?.(id)
    }, [id, onClick])

    return (
      <VStack
        ref={ref}
        gap="16px"
        align="stretch"
        cursor={onClick ? 'pointer' : 'default'}
        onClick={handleClick}
        role={onClick ? 'button' : undefined}
        tabIndex={onClick ? 0 : undefined}
        _hover={
          onClick ?
            {
              transform: 'translateY(-4px)',
              transition: 'transform 0.2s ease-in-out',
            }
          : undefined
        }
        onKeyDown={
          onClick ?
            (e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault()
                handleClick()
              }
            }
          : undefined
        }
        {...rest}
      >
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
            src={imageUrl}
            alt={`${nickname}의 프로필 이미지`}
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
              {nickname}
            </Text>
            <Text
              textStyle="pre-body-2"
              color="grey.8"
              letterSpacing="-0.36px"
              lineHeight="1.6"
            >
              {description}
            </Text>
          </VStack>

          {/* 태그 */}
          <HStack gap="8px" flexWrap="wrap">
            {tags.map((tag, index) => (
              <Box
                key={`${tag}-${index}`}
                as="span"
                bg="grey.2"
                color="grey.7"
                px="6px"
                py="0"
                h="24px"
                display="inline-flex"
                alignItems="center"
                justifyContent="center"
                borderRadius="6px"
                fontSize="12px"
                fontWeight="600"
                letterSpacing="-0.24px"
                lineHeight="1.6"
              >
                {tag}
              </Box>
            ))}
          </HStack>
        </VStack>
      </VStack>
    )
  },
)
