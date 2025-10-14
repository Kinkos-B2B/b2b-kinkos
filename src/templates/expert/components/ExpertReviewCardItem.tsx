'use client'

import { Avatar, Box, HStack, Text, VStack } from '@chakra-ui/react'

import {
  GetAllExpertResponseType,
  GetExpertMainCustomerReviewResponseType,
} from '@/generated/apis/@types/data-contracts'

interface Props {
  expertReview: GetExpertMainCustomerReviewResponseType
}

export const ExpertReviewCardItem = ({ expertReview }: Props) => {
  return (
    <Box
      bg="background.basic.2"
      borderRadius="28px"
      p={{ base: '28px', sm: '24px 24px 20px 24px', lg: '32px 36px' }}
      w="full"
      maxW={'382px'}
      gap={{ base: '16px', sm: '24px' }}
      display="flex"
      flexDirection="column"
    >
      <VStack align="start" gap={{ base: '8px', sm: '12px', lg: '16px' }}>
        <Text textStyle="pre-heading-3" color="grey.9">
          {expertReview.title}
        </Text>
        <Text textStyle="pre-body-2" color="grey.8">
          {`"${expertReview.body}"`}
        </Text>
      </VStack>

      <HStack
        bg="grey.0"
        borderRadius="9999px"
        p="8px 20px 8px 8px"
        h="57px"
        gap="12px"
        border="1px solid"
        borderColor="border.basic.1"
        w="full"
      >
        <Avatar.Root>
          <Avatar.Image src={expertReview.expert?.profileImageUrl?.url} />
        </Avatar.Root>

        <VStack align="start" gap="0" flex="1" minW="0">
          <Text
            textStyle="pre-body-5"
            color="grey.7"
            whiteSpace="nowrap"
            overflow="hidden"
            textOverflow="ellipsis"
          >
            {expertReview.expert?.nickname} 전문가
          </Text>
          <Text
            textStyle="pre-caption-2"
            color="grey.7"
            whiteSpace="nowrap"
            overflow="hidden"
            textOverflow="ellipsis"
          >
            {expertReview.expert?.industryList?.join(', ')}
          </Text>
        </VStack>
      </HStack>
    </Box>
  )
}
