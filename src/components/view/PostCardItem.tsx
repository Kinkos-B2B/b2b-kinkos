import Link from 'next/link'

import { Box, Image, Text, VStack } from '@chakra-ui/react'

import dayjs from 'dayjs'

import { ROUTES } from '@/constants/routes'

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
    <Link href={href}>
      <Box
        height="auto"
        bg="white"
        gap={'16px'}
        display="flex"
        flexDirection="column"
      >
        <Image
          src={image}
          alt={title}
          width="411px"
          height={{ base: '211px', lg: '260px' }}
          objectFit="cover"
          borderRadius="28px"
        />
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
          <Text
            fontSize="14px"
            fontWeight="400"
            color="grey.600"
            lineHeight="1.6"
            letterSpacing="-0.28px"
            fontFamily="Pretendard Variable"
          >
            {dayjs(date).format('YYYY.MM.DD')}
          </Text>
        </VStack>
      </Box>
    </Link>
  )
}
