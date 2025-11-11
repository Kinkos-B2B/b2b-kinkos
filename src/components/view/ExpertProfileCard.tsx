'use client'

import Image from 'next/image'

import {
  Badge,
  Box,
  Button,
  Image as ChakraImage,
  HStack,
  Text,
  VStack,
  chakra,
} from '@chakra-ui/react'
import { SealCheckIcon as SealCheckIconOriginal } from '@phosphor-icons/react/dist/ssr'

import { ImageInfoType } from '@/generated/apis/@types/data-contracts'

import { usePannelContext } from '../PannelContext'

const SealCheckIcon = chakra(SealCheckIconOriginal)

interface ExpertProfileCardProps {
  nickname: string
  quote: string
  relatedSolutions: string[]
  relatedFields: string[]
  profileImage?: ImageInfoType
}

export const ExpertProfileCard = ({
  nickname,
  quote,
  relatedSolutions,
  relatedFields,
  profileImage,
}: ExpertProfileCardProps) => {
  const { openPannel } = usePannelContext()

  return (
    <Box
      bg="grey.0"
      p={{ lg: '50px', base: '24px', sm: '32px' }}
      borderRadius="28px"
      h={{ base: 'auto', lg: '400px' }}
      boxShadow="0px 20px 48px 0px rgba(1, 45, 181, 0.12)"
      position="relative"
      overflow="hidden"
    >
      <HStack
        align="stretch"
        h="100%"
        overflow="hidden"
        w="100%"
        flex={1}
        flexDir={{ base: 'column', sm: 'row' }}
        gap={{ lg: '0', base: '24px', sm: '0px' }}
      >
        {/* 왼쪽 이미지 */}
        {profileImage?.url && (
          <Box
            position="relative"
            overflow="hidden"
            display="flex"
            flex={1}
            alignItems="center"
            justifyContent="start"
            w={'100%'}
          >
            <ChakraImage
              src={profileImage?.url}
              alt={profileImage?.alt ?? ''}
              w={{ lg: '544px', sm: 'calc(100% - 40px)' }}
              h={{ lg: '300px', sm: 'auto' }}
              style={{
                objectFit: 'cover',
                borderRadius: '12px',
              }}
            />
          </Box>
        )}

        {/* 오른쪽 컨텐츠 */}
        <Box
          flex={0.8}
          position="relative"
          display="flex"
          w={'100%'}
          flexDirection="column"
          justifyContent="space-between"
        >
          <VStack gap="0px" align="start" w="100%">
            {/* 솔루션 태그들 */}
            {relatedSolutions.length > 0 && (
              <HStack gap="8px" align="center" mb="18px" flexWrap="wrap">
                {relatedSolutions.map((solution, index) => (
                  <HStack key={index} gap="8px" align="center">
                    <Text textStyle="pre-caption-1" color="primary.3">
                      {solution}
                    </Text>
                    {index < relatedSolutions.length - 1 && (
                      <Box
                        w="3px"
                        h="3px"
                        borderRadius="50%"
                        bg="rgba(45, 96, 254, 0.50)"
                      />
                    )}
                  </HStack>
                ))}
              </HStack>
            )}

            {/* 닉네임과 인증 아이콘 */}
            <HStack gap="8px" align="center" mb="12px">
              <Text
                textStyle="pre-heading-2"
                color="grey.10"
                fontSize={{ lg: '28px', base: '24px' }}
              >
                {nickname}
              </Text>
              {/* 인증 아이콘 placeholder - 나중에 실제 아이콘으로 교체 가능 */}
              <SealCheckIcon boxSize={'24px'} weight="fill" color="primary.4" />
            </HStack>

            {/* 인용구 */}
            <Text
              textStyle="pre-body-1"
              color="grey.7"
              fontWeight="600"
              fontSize="18px"
              lineHeight="1.6"
              letterSpacing="-0.36px"
              mb={{ lg: '28px', base: '16px', sm: '24px' }}
            >
              &quot;{quote}&quot;
            </Text>

            {/* 관련 분야 섹션 */}
            {relatedFields.length > 0 && (
              <Box
                w="100%"
                borderTop="1px solid"
                borderColor="grey.100"
                pt="18px"
                mb="24px"
              >
                <VStack gap="12px" align="start" w="100%">
                  <Text textStyle="pre-body-3" color="grey.10">
                    관련 분야
                  </Text>
                  <HStack gap="12px" align="center" flexWrap="wrap">
                    {relatedFields.map((field, index) => (
                      <Badge
                        key={index}
                        bg="grey.100"
                        color="grey.7"
                        textStyle="pre-body-5"
                        px="6px"
                        py="0px"
                        h="24px"
                        borderRadius="6px"
                      >
                        {field}
                      </Badge>
                    ))}
                  </HStack>
                </VStack>
              </Box>
            )}
            <Button
              variant={'solid'}
              colorPalette={'primary'}
              w={'100%'}
              h={'48px'}
              borderRadius={'10px'}
              onClick={() => openPannel()}
              fontSize={'16px'}
              fontWeight={'600'}
              lineHeight={'1.6'}
              letterSpacing={'-0.32px'}
            >
              무료 상담 받아보기
            </Button>
          </VStack>
        </Box>
      </HStack>
    </Box>
  )
}
