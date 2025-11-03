import {
  Box,
  Card,
  Flex,
  Grid,
  GridItem,
  HStack,
  Image,
  Link,
  Text,
  VStack,
} from '@chakra-ui/react'

import dayjs from 'dayjs'

import { ExpertRelationHelpArticleType } from '@/generated/apis/@types/data-contracts'

interface Props {
  articles: ExpertRelationHelpArticleType[]
}

export const ExpertHelpArticleList = ({ articles }: Props) => {
  return (
    <Flex flexDirection={'column'} gap={'32px'}>
      <Text
        textStyle={'pre-heading-1'}
        px={{ base: '20px', sm: '40px', lg: 0 }}
      >
        관련 고민해결 사례를 확인해 보세요
      </Text>
      <Grid
        px={{ base: '20px', sm: '40px', lg: 0 }}
        pb={{ base: '60px', lg: 0 }}
        gap={'24px'}
        w={'100%'}
        overflow={{ base: 'auto', lg: 'unset' }}
        gridTemplateColumns={{
          sm: 'repeat(3,minmax(380px,1fr))',
          base: 'repeat(3,minmax(300px,1fr))',
        }}
        position={'relative'}
      >
        {articles.map((article, index) => (
          <GridItem key={index}>
            <Link
              href={`/problem-solve/${article.id}`}
              display={'flex'}
              bg={'background.basic.1'}
              borderRadius={'28px'}
              h={'100%'}
            >
              <VStack
                h={'100%'}
                gap={'0px'}
                w={'100%'}
                borderRadius={'28px'}
                overflow={'hidden'}
                boxShadow={'0 20px 48px 0 rgba(1, 45, 181, 0.12)'}
              >
                <Image
                  src={article.thumbnailImage?.url}
                  h={{ base: '190px', sm: '240px', lg: '260px' }}
                  w={'100%'}
                />
                <VStack
                  gap={'30px'}
                  align={'start'}
                  px={{ base: '20px', sm: '32px' }}
                  py={'24px'}
                  w={'100%'}
                >
                  <VStack align={'start'}>
                    <Text textStyle={'pre-body-3'} color={'grey.9'}>
                      {article.typeDisplayName}
                    </Text>
                    <Text textStyle={'pre-heading-3'} color={'grey.9'}>
                      {article.title}
                    </Text>
                  </VStack>
                  <Text textStyle={'pre-body-6'} color={'grey.7'}>
                    {dayjs(article.createdAt).format('YYYY. MM. DD')}
                  </Text>
                </VStack>
              </VStack>
            </Link>
          </GridItem>
        ))}
      </Grid>
    </Flex>
  )
}
