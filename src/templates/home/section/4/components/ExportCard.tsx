import * as React from 'react'

import Image from 'next/image'

import { Badge, Box, Flex, Text, VStack } from '@chakra-ui/react'

export interface ExpertCardProps {
  /**
   * 전문가 이미지 URL
   */
  imageUrl: string
  /**
   * 전문가 이름/제목
   */
  title: string
  /**
   * 전문가 설명
   */
  description: string
  /**
   * 전문 분야 태그들
   */
  tags: string[]
  /**
   * 카드 클릭 핸들러
   */
  onClick?: () => void
}

export const ExpertCard = React.forwardRef<HTMLDivElement, ExpertCardProps>(
  function ExpertCard({ imageUrl, title, description, tags, onClick }, ref) {
    return (
      <Box
        ref={ref}
        bg="grey.0"
        borderRadius="28px"
        boxShadow="0px 4px 40px 0px rgba(0,0,0,0.1)"
        overflow="hidden"
        position="relative"
        w="320px"
      >
        <Box h="257px" overflow="hidden" position="relative" w="full">
          <Image
            alt={title}
            height={480}
            width={320}
            objectFit="cover"
            src={imageUrl}
          />
        </Box>
        <VStack align="start" gap="16px" px={'30px'} py={'24px'}>
          <VStack align="start" gap="4px" w="full">
            <Text color="grey.9" textStyle="pre-heading-3">
              {title}
            </Text>
            <Text color="grey.7" pr="20px" textStyle="pre-body-6">
              {description}
            </Text>
          </VStack>

          {/* 태그들 */}
          <Flex
            align="center"
            flexWrap="wrap"
            gap="8px"
            justify="start"
            w="full"
          >
            {tags.map((tag, index) => (
              <Badge
                key={index}
                bg="grey.2"
                borderRadius="6px"
                color="grey.7"
                h="24px"
                px="6px"
                py="0"
                variant="solid"
                colorPalette="secondary"
                textStyle="pre-caption-1"
              >
                {tag}
              </Badge>
            ))}
          </Flex>
        </VStack>
      </Box>
    )
  },
)
