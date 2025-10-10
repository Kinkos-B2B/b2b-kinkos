import {
  Box,
  Card,
  Flex,
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
      <Text textStyle={'pre-heading-1'}>
        관련 고민해결 사례를 확인해 보세요
      </Text>

      <HStack gap={'24px'} flex={1}>
        {articles.map((article, index) => (
          <Link
            href={`/problem-solve/${index}`}
            key={index}
            display={'flex'}
            flex={1}
          >
            <VStack
              borderRadius={'28px'}
              gap={'0px'}
              overflow={'hidden'}
              w={'100%'}
              boxShadow={'0 20px 48px 0 rgba(1, 45, 181, 0.12)'}
            >
              <Image src={article.thumbnailImage?.url} h={'260px'} w={'100%'} />
              <VStack
                gap={'30px'}
                align={'start'}
                px={'32px'}
                py={'24px'}
                w={'100%'}
                bg={'background.basic.1'}
              >
                <VStack align={'start'}>
                  <Text textStyle={'pre-body-3'} color={'grey.9'}>
                    {article.title}
                  </Text>
                  <Text textStyle={'pre-body-3'} color={'grey.9'}>
                    {article.createdAt}
                  </Text>
                </VStack>
                <Text textStyle={'pre-body-6'} color={'grey.7'}>
                  {dayjs(article.createdAt).format('YYYY.MM.DD')}
                </Text>
              </VStack>
            </VStack>
          </Link>
        ))}
      </HStack>
    </Flex>
  )
}
