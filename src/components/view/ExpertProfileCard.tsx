'use client'

import { Badge, Box, HStack, Text, VStack } from '@chakra-ui/react'

interface ExpertProfileCardProps {
  nickname: string
  quote: string
  relatedSolutions: string[]
  relatedFields: string[]
}

export const ExpertProfileCard = ({
  nickname,
  quote,
  relatedSolutions,
  relatedFields,
}: ExpertProfileCardProps) => {
  return (
    <Box
      bg="grey.0"
      borderRadius="28px"
      p="24px 32px 28px"
      boxShadow="0px 20px 48px 0px rgba(1, 45, 181, 0.12)"
      w="100%"
    >
      <VStack gap="20px" align="stretch" w="100%">
        {/* 닉네임과 인용구 섹션 */}
        <VStack gap="12px" align="center" w="100%">
          <VStack gap="10px" align="start">
            <VStack gap="4px" align="center" w="100%">
              <Text
                textStyle="pre-heading-5"
                color="grey.10"
                textAlign="center"
                fontWeight="700"
              >
                {nickname}
              </Text>
              <Text
                textStyle="pre-caption-1"
                color="grey.8"
                textAlign="center"
                fontWeight="600"
              >
                {`"${quote}"`}
              </Text>
            </VStack>
          </VStack>
        </VStack>

        {/* 관련 솔루션과 관련 분야 섹션 */}
        <HStack gap="10px" align="stretch" w="100%">
          {/* 관련 솔루션 */}
          <Box
            flex="1"
            bg="grey.1"
            borderRadius="12px"
            p="10px 16px"
            minH="0"
            minW="0"
          >
            <VStack gap="8px" align="center" w="100%">
              <Text
                textStyle="pre-caption-1"
                color="grey.8"
                textAlign="center"
                fontWeight="600"
                w="100%"
              >
                관련 솔루션
              </Text>
              <HStack
                gap="8px"
                align="center"
                justify="center"
                w="100%"
                wrap="wrap"
              >
                {relatedSolutions.map((solution, index) => (
                  <Badge
                    key={index}
                    size="md"
                    variant="subtle"
                    colorPalette="grey"
                  >
                    {solution}
                  </Badge>
                ))}
              </HStack>
            </VStack>
          </Box>

          {/* 관련 분야 */}
          <Box
            flex="1"
            bg="grey.1"
            borderRadius="12px"
            p="10px 16px"
            minH="0"
            minW="0"
          >
            <VStack gap="8px" align="center" w="100%">
              <Text
                textStyle="pre-caption-1"
                color="grey.8"
                textAlign="center"
                fontWeight="600"
                w="100%"
              >
                관련 분야
              </Text>
              <HStack
                gap="8px"
                align="center"
                justify="center"
                w="100%"
                wrap="wrap"
              >
                {relatedFields.map((field, index) => (
                  <Badge
                    key={index}
                    size="md"
                    variant="subtle"
                    colorPalette="grey"
                  >
                    {field}
                  </Badge>
                ))}
              </HStack>
            </VStack>
          </Box>
        </HStack>
      </VStack>
    </Box>
  )
}
