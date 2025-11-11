import Image from 'next/image'
import Link from 'next/link'

import { Box, Text, VStack } from '@chakra-ui/react'

import dayjs from 'dayjs'

interface CustomerReviewCardProps {
  image: string
  author?: string
  title: string
  date: string
  href: string
}

export const PostCardItem = ({
  image,
  author,
  title,
  date,
  href,
}: CustomerReviewCardProps) => {
  // 타이틀을 45자로 제한하고 2줄로 제한
  const truncateTitle = (text: string, maxLength: number = 45) => {
    if (text.length <= maxLength) return text
    return text.slice(0, maxLength) + '...'
  }

  return (
    <Link href={href} style={{ width: '100%', height: '100%' }}>
      <Box
        height="auto"
        gap={'16px'}
        display="flex"
        flexDirection="column"
        w="100%"
        _hover={{
          '& img': {
            transform: 'scale(1.05)',
            transition: 'transform 0.3s ease',
          },
        }}
      >
        <Box
          position="relative"
          w="100%"
          h={{ lg: '260px' }}
          aspectRatio={{ base: '441 / 260', lg: 'auto' }}
          overflow="hidden"
          borderRadius="28px"
        >
          <Image
            src={image}
            alt={title}
            fill
            objectFit="cover"
            style={{ borderRadius: '28px' }}
          />
        </Box>

        <VStack align="start" gap="16px" width="100%">
          <VStack align="start" gap="8px" width="100%">
            <Text textStyle="pre-body-3">{author}</Text>
            <Text
              textStyle="pre-heading-3"
              css={{
                display: '-webkit-box',
                WebkitLineClamp: 2,
                WebkitBoxOrient: 'vertical',
                overflow: 'hidden',
                textOverflow: 'ellipsis',
              }}
            >
              {truncateTitle(title)}
            </Text>
          </VStack>
          <Text textStyle={'pre-body-6'} color="grey.600">
            {dayjs(date).format('YYYY. MM. DD')}
          </Text>
        </VStack>
      </Box>
    </Link>
  )
}
