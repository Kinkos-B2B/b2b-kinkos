'use client'

import { Box, Button, Center, Container, Text, VStack } from '@chakra-ui/react'

import { usePannelContext } from '@/components/PannelContext'
import { ExpertProfileCard } from '@/components/view/ExpertProfileCard'
import { PostHeader } from '@/components/view/PostDetail/PostHeader'
import {
  useGetHelpArticleDetailBySlugQuery,
  useGetHelpArticleDetailQuery,
} from '@/generated/apis/HelpArticleApi/HelpArticleApi.query'
import { ExpertHelpArticleList } from '@/templates/expert/detail/components/ExpertHelpArticleList'

import { ProblemSolveArticleContent } from './components/ProblemSolveArticleContent'

interface Props {
  id: string
}

export const ProblemSolveDetailTemplate = ({ id }: Props) => {
  const { data } = useGetHelpArticleDetailBySlugQuery({
    variables: {
      query: {
        slug: id,
      },
    },
  })

  return (
    <VStack w="100%" pt={'0px'} gap={'0px'}>
      <PostHeader header={data?.data?.header} />
      <Box
        py={{ base: '48px 100px', sm: '64px 140px', lg: '80px 160px' }}
        w={{ base: '100%', lg: 'auto' }}
        px={{ base: '20px', sm: '40px' }}
        position={'relative'}
      >
        <ProblemSolveArticleContent content={data?.data} />
      </Box>
      <Box
        py={{ base: '64px', lg: '80px' }}
        w={'100%'}
        bg={'background.basic.2'}
      >
        <Container>
          <ExpertHelpArticleList
            articles={data?.data?.relationArticleList ?? []}
          />
        </Container>
      </Box>

      <Box py={{ base: '64px', lg: '80px' }} bg={'primary.3'} w={'100%'}>
        <Container>
          <Center flexDirection={'column'} gap={'28px'}>
            <VStack gap={'12px'}>
              <Text textStyle={'pre-display-4'} color={'grey.0'}>
                궁금하신 점이 있으신가요?
              </Text>
            </VStack>
            <Box w={{ base: '100%', lg: '1280px' }}>
              <ExpertProfileCard
                profileImage={data?.data?.expert?.profileImage ?? undefined}
                nickname={data?.data?.expert?.nickname ?? ''}
                quote={data?.data?.expert?.description ?? ''}
                relatedSolutions={data?.data?.expert?.solutionList ?? []}
                relatedFields={data?.data?.expert?.industryList ?? []}
              />
            </Box>
          </Center>
        </Container>
      </Box>
    </VStack>
  )
}
