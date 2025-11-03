import Link from 'next/link'

import { Box, Image, Text, VStack } from '@chakra-ui/react'

import { SearchResponseType } from '@/generated/apis/@types/data-contracts'

interface SearchResultCardProps {
  item: SearchResponseType
  href: string
}

export const SearchResultCard = ({ item, href }: SearchResultCardProps) => {
  return (
    <Link href={href}>
      <Box w="100%" cursor="pointer">
        <VStack gap="16px" align="stretch">
          {/* 이미지 */}
          <Box
            w="100%"
            h="260px"
            borderRadius="28px"
            overflow="hidden"
            bg="grey.1"
          >
            <Image
              src={item.thumbnailImage.url}
              alt={item.thumbnailImage.alt}
              w="100%"
              h="100%"
              objectFit="cover"
            />
          </Box>

          {/* 내용 */}
          <VStack gap="16px" align="stretch">
            <VStack gap="8px" align="stretch" pr="20px">
              <Text textStyle="pre-body-3" color="grey.9">
                {item.title}
              </Text>
              <Text
                textStyle="pre-heading-3"
                color="grey.9"
                overflow="hidden"
                textOverflow="ellipsis"
                display="-webkit-box"
                style={{
                  WebkitLineClamp: 2,
                  WebkitBoxOrient: 'vertical',
                }}
              >
                {item.description || ''}
              </Text>
            </VStack>

            <Text textStyle="pre-body-6" color="grey.7">
              {item.createdAt ?
                new Date(item.createdAt)
                  .toLocaleDateString('ko-KR', {
                    year: 'numeric',
                    month: '2-digit',
                    day: '2-digit',
                  })
                  .replace(/\./g, '. ')
              : '2025. 09. 10'}
            </Text>
          </VStack>
        </VStack>
      </Box>
    </Link>
  )
}
