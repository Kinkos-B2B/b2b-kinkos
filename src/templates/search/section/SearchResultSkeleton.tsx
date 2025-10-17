import { Box, SimpleGrid, Skeleton, VStack } from '@chakra-ui/react'

export const SearchResultCardSkeleton = () => (
  <VStack gap="16px" align="stretch" w="100%">
    {/* 이미지 스켈레톤 */}
    <Box w="100%" h="260px" borderRadius="28px" overflow="hidden" bg="grey.1">
      <Skeleton w="100%" h="100%" borderRadius="28px" />
    </Box>

    <VStack gap="16px" align="stretch" w="100%">
      <VStack gap="8px" align="stretch">
        <Skeleton h="26px" w="100%" borderRadius="12px" />
        <Skeleton h="56px" w="100%" borderRadius="12px" />
      </VStack>
      <Skeleton h="22px" w="100px" borderRadius="12px" />
    </VStack>
  </VStack>
)
