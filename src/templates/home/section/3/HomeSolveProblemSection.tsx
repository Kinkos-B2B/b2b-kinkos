import Image from 'next/image'
import Link from 'next/link'

import {
  Box,
  Button,
  Container,
  Grid,
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
import { ROUTES } from '@/constants/routes'
import { GetHomeConfigHelpArticleResponseType } from '@/generated/apis/@types/data-contracts'
import { useGetHomeConfigHelpArticleQuery } from '@/generated/apis/HomeApi/HomeApi.query'

const ProblemCard = ({
  thumbnailImageUrl,
  typeDisplayName,
  title,
  slug,
  createdAt,
}: GetHomeConfigHelpArticleResponseType) => {
  return (
    <Link href={`${ROUTES.PROBLEM}/${slug}`}>
      <VStack align="stretch" gap="16px" w="100%" h="100%">
        {/* 이미지 카드 */}
        <VStack
          gap={'0px'}
          position="relative"
          w="100%"
          h="100%"
          borderRadius="28px"
          overflow="hidden"
          bg="grey.100"
          _hover={{
            '& img': {
              transform: 'scale(1.05)',
              transition: 'transform 0.3s ease',
            },
          }}
        >
          {thumbnailImageUrl?.url && (
            <Image
              src={thumbnailImageUrl?.url || ''}
              alt={title}
              width={0}
              height={0}
              sizes="100vw"
              style={{
                width: '100%',
                height: '100%',
              }}
            />
          )}{' '}
        </VStack>

        <VStack align="stretch" gap="16px">
          <VStack align="stretch" gap="8px">
            <Text textStyle={'pre-body-3'}>{typeDisplayName}</Text>
            <Heading as="h3" textStyle="pre-heading-3" color="grey.9">
              {title}
            </Heading>
          </VStack>
          <Text textStyle="pre-body-6" color="grey.7">
            {dayjs(createdAt).format('YYYY. MM. DD')}
          </Text>
        </VStack>
      </VStack>
    </Link>
  )
}

export const HomeSolveProblemSection = () => {
  const { data } = useGetHomeConfigHelpArticleQuery()
  const orderedArticles = orderBy(data?.data, 'displayOrder', 'desc')

  return (
    <Container py={{ lg: '160px', sm: '140px', base: '100px' }}>
      <VStack align="stretch" gap={{ base: '32px', sm: '40px', lg: '48px' }}>
        {/* 헤더 */}
        <VStack align="center" gap="16px">
          <Badge
            variant="subtle"
            colorPalette="secondary"
            size={{ base: 'lg', sm: 'xl', lg: 'xl' }}
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
          >
            성공적인 제작을 위한 팁과 인사이트
          </Heading>
        </VStack>

        {/* 카드 그리드 */}
        <VStack align="stretch" gap="56px">
          <Grid
            templateAreas={{
              lg: `"a b c"
                   "a d e"`,
              sm: `"a a"
                   "b c"
                   "d e"`,
              base: `"a"
                   "b"
                   "c"
                   "d"
                   "e"`,
            }}
            w={'100%'}
            h={'100%'}
            gap="24px"
          >
            {/* 첫 번째 카드 - lg에서 2행 차지 */}
            <GridItem area="a">
              <ProblemCard {...orderedArticles[0]} />
            </GridItem>

            {/* 두 번째 카드 */}
            <GridItem area="b">
              <ProblemCard {...orderedArticles[1]} />
            </GridItem>

            {/* 세 번째 카드 */}
            <GridItem area="c">
              <ProblemCard {...orderedArticles[2]} />
            </GridItem>

            {/* 네 번째 카드 */}
            <GridItem area="d">
              <ProblemCard {...orderedArticles[3]} />
            </GridItem>

            {/* 다섯 번째 카드 */}
            <GridItem area="e">
              <ProblemCard {...orderedArticles[4]} />
            </GridItem>
          </Grid>

          <HStack justify="center">
            <Link href={ROUTES.PROBLEM}>
              <Button size="lg" variant="solid" px="24px" h="48px">
                고민해결 전체보기
              </Button>
            </Link>
          </HStack>
        </VStack>
      </VStack>
    </Container>
  )
}
