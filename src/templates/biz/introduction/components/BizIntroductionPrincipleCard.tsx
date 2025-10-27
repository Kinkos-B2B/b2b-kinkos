'use client'

import { useRef } from 'react'

import Image from 'next/image'

import { Badge, Box, Button, Card, Text, chakra } from '@chakra-ui/react'
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

export const BizIntroductionPrincipleCard = ({
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
      w={{
        base: '100%',
        lg: '1280px',
      }}
      bg={backgroundColor}
      borderRadius="28px"
      overflow="hidden"
      display="flex"
      flexDirection={{ base: 'column', lg: 'row' }}
      alignItems="center"
      justifyContent="space-between"
      px={{ base: '20px', sm: '40px', lg: '80px' }}
      py={{ base: '40px 20px', sm: '48px 40px', lg: '76px' }}
      cursor="pointer"
      gap={{ base: '40px', lg: '0' }}
      transition="all 0.3s ease"
    >
      <Box
        display="flex"
        flexDirection="column"
        gap={{ base: '28px', sm: '40px', lg: '56px' }}
        alignItems={{ base: 'center', lg: 'flex-start' }}
        textAlign={{ base: 'center', lg: 'left' }}
        w={{ base: '100%', lg: '460px' }}
        flexShrink={0}
      >
        <Box
          display="flex"
          flexDirection="column"
          gap="20px"
          alignItems={{ base: 'center', lg: 'flex-start' }}
          w="full"
        >
          <Badge
            bg={badgeColor}
            color={buttonColor}
            py="0"
            size={{ base: 'lg', lg: 'xl' }}
            borderRadius="6px"
          >
            {principle}
          </Badge>

          <Box
            display="flex"
            flexDirection="column"
            gap="10px"
            alignItems={{ base: 'center', lg: 'flex-start' }}
            w="full"
          >
            <Text textStyle="pre-display-3" color="grey.10">
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
                  as={'span'}
                  mb={index < description.length - 1 ? '0' : undefined}
                >
                  {line}
                  <chakra.br display={{ base: 'none', sm: 'block' }} />
                </Text>
              ))}
            </Box>
          </Box>
        </Box>

        <Button bg={buttonColor} color="grey.0" py="0">
          더 알아보기
          <CaretRightIcon size={24} />
        </Button>
      </Box>

      <Box
        ref={imageRef}
        bg="background.basic.2"
        w={{ base: '100%', lg: '560px' }}
        maxW={{ base: '560px' }}
        aspectRatio={{ base: 560 / 448, lg: 16 / 9 }}
        borderRadius="28px"
        overflow="hidden"
        position="relative"
        flexShrink={0}
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
