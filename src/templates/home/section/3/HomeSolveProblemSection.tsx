import Image from 'next/image'

import {
  Box,
  Button,
  Container,
  GridItem,
  HStack,
  Heading,
  SimpleGrid,
  Text,
  VStack,
} from '@chakra-ui/react'

import dayjs from 'dayjs'
import { orderBy } from 'lodash'

import { ImageAsNext } from '@/components/image-as-next'
import { Badge } from '@/components/ui/badge'
import { GetHomeConfigHelpArticleResponseType } from '@/generated/apis/@types/data-contracts'
import { useGetHomeConfigHelpArticleQuery } from '@/generated/apis/HomeApi/HomeApi.query'

// Figma에서 다운로드한 이미지 데이터
const problemCards = [
  {
    id: 1,
    image: '/images/home/solve-problem/card-1.svg',
    logo: '/images/home/solve-problem/logo.svg',
    title: '롯데건설, 현장에서 바로 주문하고 당일 배송으로 명함을 받습니다.',
    date: '2025. 09. 10',
  },
  {
    id: 2,
    image: '/images/home/solve-problem/card-1.svg',
    logo: '/images/home/solve-problem/logo.svg',
    title: '롯데건설, 현장에서 바로 주문하고 당일 배송으로 명함을 받습니다.',
    date: '2025. 09. 10',
  },
  {
    id: 3,
    image: '/images/home/solve-problem/card-1.svg',
    logo: '/images/home/solve-problem/logo.svg',
    title: '롯데건설, 현장에서 바로 주문하고 당일 배송으로 명함을 받습니다.',
    date: '2025. 09. 10',
  },
  {
    id: 4,
    image: '/images/home/solve-problem/card-1.svg',
    logo: '/images/home/solve-problem/logo.svg',
    title: '롯데건설, 현장에서 바로 주문하고 당일 배송으로 명함을 받습니다.',
    date: '2025. 09. 10',
  },
]

const ProblemCard = ({
  thumbnailImageUrl,
  title,
  createdAt,
}: GetHomeConfigHelpArticleResponseType) => {
  return (
    <VStack align="stretch" gap="16px" w="100%">
      {/* 이미지 카드 */}
      <VStack
        position="relative"
        w="100%"
        h="100%"
        borderRadius="28px"
        overflow="hidden"
        bg="grey.100"
      >
        <Image
          src={thumbnailImageUrl?.url || ''}
          alt={title}
          fill
          objectFit="cover"
        />
      </VStack>

      {/* 카드 정보 */}
      <VStack align="stretch" gap="16px">
        <VStack align="stretch" gap="8px">
          <Text textStyle={'pre-body-3'}>똑똑한 개발자</Text>
          <Heading as="h3" textStyle="pre-heading-3" color="grey.9">
            {title}
          </Heading>
        </VStack>

        {/* 날짜 */}
        <Text textStyle="pre-body-6" color="grey.7">
          {dayjs(createdAt).format('YYYY. MM. DD')}
        </Text>
      </VStack>
    </VStack>
  )
}

export const HomeSolveProblemSection = () => {
  const { data } = useGetHomeConfigHelpArticleQuery()

  console.log(data)

  const orderedArticles = orderBy(data?.data, 'displayOrder', 'desc')

  return (
    <Container maxW="container.xl">
      <VStack align="stretch" gap="48px">
        {/* 헤더 */}
        <VStack align="center" gap="16px">
          <Badge
            variant="subtle"
            colorPalette="secondary"
            size="xl"
            showLeftIcon={false}
            showRightIcon={false}
          >
            고민해결
          </Badge>

          <Heading
            as="h2"
            textStyle="pre-display-3"
            color="grey.10"
            textAlign="center"
            lineHeight="1.4"
          >
            성공적인 제작을 위한 팁과 인사이트
          </Heading>
        </VStack>

        {/* 카드 그리드 */}
        <VStack align="stretch" gap="56px">
          <SimpleGrid
            columns={{ base: 1, lg: 2 }}
            gap="24px"
            w="100%"
            h={'852px'}
            templateColumns={'1fr 2fr'}
          >
            <SimpleGrid gap="24px" w="100%">
              <ProblemCard {...orderedArticles[0]} />
            </SimpleGrid>

            <SimpleGrid columns={{ base: 1, lg: 2 }} gap="24px" w="100%">
              {orderedArticles.slice(1).map((card, index) => (
                <ProblemCard {...card} key={index} />
              ))}
            </SimpleGrid>
          </SimpleGrid>

          {/* 전체보기 버튼 */}
          <HStack justify="center">
            <Button size="lg" variant="solid" px="24px" h="48px">
              고민해결 전체보기
            </Button>
          </HStack>
        </VStack>
      </VStack>
    </Container>
  )
}
