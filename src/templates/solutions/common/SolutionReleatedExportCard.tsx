'use client'

import Image from 'next/image'

import { Avatar, Box, Button, Text, VStack } from '@chakra-ui/react'

interface RelatedExpertCardProps {
  id: string
  nickname: string
  description: string
  avatarImage?: string
  onButtonClick?: (id: string) => void
}

export const SolutionReleatedExportCard = ({
  id,
  nickname,
  description,
  avatarImage,
  onButtonClick,
}: RelatedExpertCardProps) => {
  return (
    <Box
      bg="grey.0"
      borderRadius="28px"
      p={{
        base: '24px',
        sm: '32px',
        md: '36px',
      }}
      pb={{
        base: '28px',
        sm: '36px',
        md: '40px',
      }}
      pt={{
        base: '24px',
        sm: '32px',
        md: '36px',
      }}
      boxShadow="0px 20px 48px 0px rgba(1, 45, 181, 0.12)"
      w="100%"
      h="100%"
    >
      <VStack gap="28px" align="stretch" w="100%" h="100%">
        {/* 아바타 섹션 */}
        <Box
          position="relative"
          borderRadius="12px"
          w={{
            base: '100px',
            sm: '110px',
            md: '125px',
          }}
          h={{
            base: '100px',
            sm: '110px',
            md: '125px',
          }}
        >
          <Avatar.Root
            borderRadius="12px"
            bg="grey.3"
            w={{
              base: '100px',
              sm: '110px',
              md: '125px',
            }}
            h={{
              base: '100px',
              sm: '110px',
              md: '125px',
            }}
          >
            {avatarImage && (
              <Avatar.Image
                as={Image}
                src={avatarImage}
                alt={nickname}
                width={125}
                height={125}
                style={{
                  objectFit: 'cover',
                  borderRadius: '12px',
                }}
              />
            )}
          </Avatar.Root>
        </Box>

        {/* 닉네임과 소개글 섹션 */}
        <VStack gap="10px" align="stretch" w="100%">
          <Box w="100%">
            <Text textStyle="pre-heading-2" color="grey.10">
              {nickname}
            </Text>
          </Box>
          <Box w="100%">
            <Text textStyle="pre-body-4" color="grey.7" whiteSpace="pre-line">
              {description}
            </Text>
          </Box>
        </VStack>

        {/* 버튼 섹션 */}
        <Box w="100%">
          <Button
            w={'100%'}
            variant="outline"
            size="sm"
            onClick={() => onButtonClick?.(id)}
          >
            무료 상담 받아보기
          </Button>
        </Box>
      </VStack>
    </Box>
  )
}
