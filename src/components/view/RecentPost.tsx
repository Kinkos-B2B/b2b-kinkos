import { Box, Container, HStack, Image, Text, VStack } from '@chakra-ui/react'

import dayjs from 'dayjs'

const imgImage = '/images/customer-review/best-review-image-mock.png'

interface Props {
  title: string
  article?: {
    author?: string
    title: string
    createdAt: string
    thumbnailImageUrl: string
  }
}

export const RecentPost = ({ article, title }: Props) => {
  return (
    <Container w={'100%'} px={'0px'}>
      <VStack
        gap={{ base: '24px', sm: '32px' }}
        align="stretch"
        w={'100%'}
        role="region"
        aria-labelledby="best-review-heading"
      >
        <Text
          id="best-review-heading"
          as="h2"
          textStyle="pre-heading-1"
          color="grey.10"
          textAlign={'left'}
        >
          {title}
        </Text>
        <Box
          as="article"
          bg="white"
          borderRadius={{ base: '16px', sm: '28px' }}
          position="relative"
          overflow="hidden"
          boxShadow="0px 20px 80px 0px rgba(27, 28, 29, 0.04), 0px 4px 10px 0px rgba(27, 28, 29, 0.04)"
          _before={{
            content: '""',
            position: 'absolute',
            inset: 0,
            border: '1px solid',
            borderColor: 'border.basic.1',
            borderRadius: { base: '16px', sm: '28px' },
            pointerEvents: 'none',
          }}
          display={'flex'}
          flexDirection={{ base: 'column', lg: 'row' }}
          role="article"
          aria-labelledby="review-title"
        >
          <HStack
            align="stretch"
            w="full"
            gap={'0px'}
            flexDirection={{ base: 'column', lg: 'row' }}
          >
            <Box
              w={{ base: 'full', lg: '680px' }}
              h={{ base: 'auto', lg: '431px' }}
              flexShrink={0}
              position="relative"
              overflow="hidden"
            >
              <Image
                src={article?.thumbnailImageUrl}
                alt="고객 후기 이미지"
                w="full"
                h="full"
                objectFit="cover"
                objectPosition="center"
              />
            </Box>

            {/* 텍스트 콘텐츠 영역 */}
            <VStack
              gap="10px"
              align="stretch"
              justify="center"
              px={{ base: '24px', sm: '48px', lg: '80px' }}
              py={{ base: '24px', sm: '48px', lg: 0 }}
              w={{ base: 'full', lg: '600px' }}
              h={{ base: 'auto', lg: '431px' }}
              flexShrink={0}
            >
              <VStack
                gap={{ base: '24px', sm: '28px' }}
                align="stretch"
                w="full"
              >
                <VStack
                  gap={{ base: '12px', sm: '16px' }}
                  align="stretch"
                  w="full"
                >
                  {/* 작성자 */}
                  <Text textStyle="pre-body-3" color="grey.9" w="full">
                    {article?.author}
                  </Text>

                  {/* 제목 */}
                  <Text
                    id="review-title"
                    as="h3"
                    textStyle="pre-heading-1"
                    color="grey.9"
                    w="full"
                  >
                    {article?.title}
                  </Text>
                </VStack>

                {/* 날짜 */}
                <Text as="time" textStyle="pre-body-4" color="grey.7" w="full">
                  {dayjs(article?.createdAt).format('YYYY. MM. DD')}
                </Text>
              </VStack>
            </VStack>
          </HStack>
        </Box>
      </VStack>
    </Container>
  )
}
