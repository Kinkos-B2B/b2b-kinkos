import * as React from 'react'

import Image from 'next/image'

import { Badge, Box, Flex, Text, VStack } from '@chakra-ui/react'

import { GetHomeExpertResponseType } from '@/generated/apis/@types/data-contracts'

export interface Props {
  expert: GetHomeExpertResponseType
  onClick?: () => void
}

export const HomeExpertCard = React.forwardRef<HTMLDivElement, Props>(
  function HomeExpertCard({ expert, onClick }, ref) {
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
          {expert.profileImage?.url && (
            <Image
              alt={expert.nickname}
              fill
              objectFit="contain"
              src={expert.profileImage?.url || ''}
            />
          )}
        </Box>
        <VStack align="start" gap="16px" px={'30px'} py={'24px'}>
          <VStack align="start" gap="4px" w="full">
            <Text color="grey.9" textStyle="pre-heading-3">
              {expert.nickname}
            </Text>
            <Text color="grey.7" pr="20px" textStyle="pre-body-6">
              {expert.description}
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
            {expert.industryList.map((industry, index) => (
              <Badge
                key={index}
                color="grey.7"
                variant="subtle"
                colorPalette="grey"
                textStyle="pre-caption-1"
              >
                {industry.name}
              </Badge>
            ))}
          </Flex>
        </VStack>
      </Box>
    )
  },
)
