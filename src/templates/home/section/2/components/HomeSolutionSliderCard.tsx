'use client'

import React from 'react'

import { Box, Card, Flex, HStack, Image, Text, VStack } from '@chakra-ui/react'
import { SquareHalf } from '@phosphor-icons/react/dist/ssr'

import { Badge } from '@/components/ui/badge'
import { ROUTES } from '@/constants/routes'

interface FeatureItemProps {
  title: string
  description: string
  icon: React.ReactNode
}

const FeatureItem: React.FC<FeatureItemProps> = ({
  title,
  description,
  icon,
}) => {
  return (
    <VStack gap="4px" align="stretch" width="100%">
      <HStack gap="10px" align="center">
        <Box
          bg="secondary.4"
          borderRadius="4px"
          width="22px"
          height="22px"
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          {icon}
        </Box>
        <Text textStyle={'pre-heading-4'} color="grey.10" whiteSpace="nowrap">
          {title}
        </Text>
      </HStack>
      <Box pl="32px">
        <Text color="grey.7" textStyle={'pre-body-4'}>
          {description}
        </Text>
      </Box>
    </VStack>
  )
}

interface HomeSolutionSliderCardProps {
  href: string
  badge: string
  title: string
  image: string
  alt: string
  features: FeatureItemProps[]
}

export const HomeSolutionSliderCard: React.FC<HomeSolutionSliderCardProps> = ({
  href,
  badge,
  title,
  image,
  alt,
  features,
}) => {
  return (
    <Card.Root
      bg="white"
      height={'100%'}
      borderRadius="24px"
      overflow={'hidden'}
      boxShadow="0px 30px 80px 0px rgba(1, 45, 181, 0.1)"
      p={{ base: '32px 20px', sm: '40px 48px', lg: '56px 64px' }}
      width={{ base: 'calc(100vw - 40px)', sm: '100%' }}
      border={'none'}
    >
      <VStack
        gap={{ base: '20px', sm: '40px', lg: '40px' }}
        align="stretch"
        width="100%"
      >
        {/* 헤더 섹션 */}
        <VStack
          gap="10px"
          align="center"
          pb={{ base: '16px', sm: '32px', lg: '32px' }}
          borderBottom="1px solid"
          borderColor="border.basic.1"
        >
          <Badge
            colorPalette="secondary"
            variant="subtle"
            textStyle={'pre-body-1'}
            fontSize={'19px !important'}
          >
            {badge}
          </Badge>
          <Text
            textStyle={'pre-heading-1'}
            color="grey.10"
            whiteSpace={{ base: 'wrap', sm: 'nowrap' }}
            textAlign="center"
          >
            {title}
          </Text>
        </VStack>

        {/* 메인 콘텐츠 */}
        <Flex
          gap={{ base: '24px', sm: '32px', lg: '40px' }}
          align="center"
          justify="space-between"
          width="100%"
          direction={{ base: 'column', sm: 'column', lg: 'row' }}
        >
          {/* 이미지 영역 */}
          <Box
            width={{ base: '250px', sm: '400px', lg: '380px' }}
            height={{ base: '150px', sm: '240px', lg: '320px' }}
            borderRadius="24px"
            bgGradient="linear(to-b, secondary.1, secondary.2)"
            position="relative"
            overflow="hidden"
            flexShrink={0}
            alignSelf="center"
          >
            <Image
              src={image}
              alt={alt}
              width="100%"
              height="100%"
              objectFit="cover"
              objectPosition={
                href === ROUTES.SOLUTIONS.ONLINE_ORDER.CORPORATE_PRINTING ?
                  'left'
                : 'center'
              }
              borderRadius="24px"
            />
          </Box>

          {/* 특징 리스트 */}
          <VStack
            gap={{ base: '16px', sm: '20px', lg: '20px' }}
            align="stretch"
            width={{ base: '100%', sm: '100%', lg: '540px' }}
            flexShrink={0}
          >
            {features.map((feature, index) => (
              <FeatureItem
                key={index}
                title={feature.title}
                description={feature.description}
                icon={feature.icon}
              />
            ))}
          </VStack>
        </Flex>
      </VStack>
    </Card.Root>
  )
}
