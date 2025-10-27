'use client'

import { useRef } from 'react'

import Image from 'next/image'

import { Badge, Box, Button, Card, Text } from '@chakra-ui/react'
import { ArrowRightIcon, CaretRightIcon } from '@phosphor-icons/react/dist/ssr'

interface BizIntroductionFeatureCardProps {
  principle: string
  title: string
  description: string[]
  imageSrc: string
  imageAlt: string
  backgroundColor: string
  badgeColor: string
  buttonColor: string
}

export const BizIntroductionMobilePrincipleCard = ({
  principle,
  title,
  description,
  imageSrc,
  imageAlt,
  backgroundColor,
  badgeColor,
  buttonColor,
}: BizIntroductionFeatureCardProps) => {
  const cardRef = useRef<HTMLDivElement>(null)
  const imageRef = useRef<HTMLDivElement>(null)

  return (
    <Card.Root
      border={'none'}
      ref={cardRef}
      w={{ base: '100%', lg: '1280px' }}
      bg={backgroundColor}
      borderRadius="28px"
      overflow="hidden"
      display="flex"
      flexDirection={{ base: 'column', lg: 'row' }}
      alignItems="center"
      justifyContent="space-between"
      px={{ base: '24px', lg: '80px' }}
      py={{ base: '40px', lg: '76px' }}
      cursor="pointer"
      transition="all 0.3s ease"
    >
      <Box
        display="flex"
        flexDirection="column"
        gap={{ base: '32px', lg: '56px' }}
        alignItems="flex-start"
        w={{ base: '100%', lg: '460px' }}
        flexShrink={0}
        order={{ base: 2, lg: 1 }}
      >
        <Box
          display="flex"
          flexDirection="column"
          gap="20px"
          alignItems="flex-start"
          w="full"
        >
          <Badge
            bg={badgeColor}
            color={buttonColor}
            textStyle="pre-body-1"
            py="0"
            h={{ base: '32px', lg: '36px' }}
            borderRadius="6px"
          >
            {principle}
          </Badge>

          <Box
            display="flex"
            flexDirection="column"
            gap="10px"
            alignItems="flex-start"
            w="full"
          >
            <Text textStyle="pre-display-3" color="grey.10" fontWeight="bold">
              {title}
            </Text>

            <Box
              color="grey.9"
              textStyle="pre-body-4"
              w="min-content"
              minW="full"
            >
              {description.map((line, index) => (
                <Text
                  key={index}
                  mb={index < description.length - 1 ? '0' : undefined}
                >
                  {line}
                </Text>
              ))}
            </Box>
          </Box>
        </Box>

        <Button
          bg={buttonColor}
          color="grey.0"
          py="0"
          w={{ base: '100%', lg: 'auto' }}
        >
          더 알아보기
          <CaretRightIcon size={24} />
        </Button>
      </Box>

      <Box
        ref={imageRef}
        bg="background.basic.2"
        w={{ lg: '560px' }}
        aspectRatio={16 / 9}
        borderRadius="28px"
        overflow="hidden"
        position="relative"
        flexShrink={0}
        order={{ base: 1, lg: 2 }}
        mb={{ base: '24px', lg: '0' }}
      >
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          style={{
            objectFit: 'cover',
            objectPosition: 'center',
          }}
        />
      </Box>
    </Card.Root>
  )
}
