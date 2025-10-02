import { Box, Container, HStack, Image, Text, VStack } from '@chakra-ui/react'

const imgImage = '/images/customer-review/best-review-image-mock.png'

const mock = {
  title: '롯데건설, 현장에서 바로 주문하고 당일 배송으로 명함을 받습니다.',
  date: '2025. 09. 10',
  author: '똑똑한개발자',
  image: imgImage,
}

interface Props {
  title: string
  data?: typeof mock
}

export const RecentPost = ({ data = mock, title }: Props) => {
  return (
    <Container maxW={'1280px'}>
      <VStack
        gap={{ base: '24px', md: '32px' }}
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
          textAlign={{ base: 'center', md: 'left' }}
        >
          {title}
        </Text>

        <Box
          as="article"
          bg="white"
          borderRadius={{ base: '16px', md: '28px' }}
          position="relative"
          overflow="hidden"
          boxShadow="0px 20px 80px 0px rgba(27, 28, 29, 0.04), 0px 4px 10px 0px rgba(27, 28, 29, 0.04)"
          _before={{
            content: '""',
            position: 'absolute',
            inset: 0,
            border: '1px solid',
            borderColor: 'border.basic.1',
            borderRadius: { base: '16px', md: '28px' },
            pointerEvents: 'none',
          }}
          role="article"
          aria-labelledby="review-title"
        >
          <HStack
            align="stretch"
            w="full"
            gap={'0px'}
            direction={{ base: 'column', lg: 'row' }}
          >
            <Box
              w={{ base: 'full', md: '680px' }}
              h={{ base: '240px', md: '300px', lg: '431px' }}
              flexShrink={0}
              position="relative"
              overflow="hidden"
            >
              <Image
                src={data.image}
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
              px={{ base: '24px', md: '40px', lg: '80px' }}
              py={{ base: '24px', md: '32px', lg: 0 }}
              w={{ base: 'full', lg: '600px' }}
              h={{ base: 'auto', lg: '431px' }}
              flexShrink={0}
            >
              <VStack
                gap={{ base: '20px', md: '24px', lg: '28px' }}
                align="stretch"
                w="full"
              >
                <VStack
                  gap={{ base: '12px', md: '14px', lg: '16px' }}
                  align="stretch"
                  w="full"
                >
                  {/* 작성자 */}
                  <Text textStyle="pre-body-3" color="grey.9" w="full">
                    {data.author}
                  </Text>

                  {/* 제목 */}
                  <Text
                    id="review-title"
                    as="h3"
                    textStyle="pre-heading-1"
                    color="grey.9"
                    w="full"
                    fontSize={{ base: '24px', md: '28px', lg: '32px' }}
                    lineHeight={{ base: '1.3', md: '1.35', lg: '1.4' }}
                  >
                    {data.title}
                  </Text>
                </VStack>

                {/* 날짜 */}
                <Text
                  as="time"
                  textStyle="pre-body-4"
                  color="grey.7"
                  w="full"
                  {...({ dateTime: '2025-09-10' } as any)}
                >
                  {data.date}
                </Text>
              </VStack>
            </VStack>
          </HStack>
        </Box>
      </VStack>
    </Container>
  )
}
