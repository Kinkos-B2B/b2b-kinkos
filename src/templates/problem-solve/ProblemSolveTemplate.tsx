'use client'

import { Box, Container, VStack } from '@chakra-ui/react'

import { PluuugCTA } from '@/components/view/PluuugCTA'
import { RecentPost } from '@/components/view/RecentPost'
import { useGetHelpArticleMainConfigQuery } from '@/generated/apis/HelpArticleApi/HelpArticleApi.query'
import { useGetHomeConfigHelpArticleQuery } from '@/generated/apis/HomeApi/HomeApi.query'

import { ProblemSolveIntroBanner } from './components/ProblemSolveIntroBanner'
import { ProblemSolvePostList } from './components/ProblemSolvePostList'

export const ProblemSolveTemplate = () => {
  const { data } = useGetHelpArticleMainConfigQuery()

  return (
    <VStack w="100%" gap={'0px'}>
      <Box w={'100%'} pb={'80px'} pt={{ base: '0px', lg: '20px' }}>
        <ProblemSolveIntroBanner />
      </Box>
      <Box
        w={'100%'}
        pb={{ base: '80px', sm: '100px', lg: '120px' }}
        px={{ base: '20px', sm: '40px' }}
      >
        <RecentPost
          title="최신 고민 해결 사례"
          article={{
            author: data?.data?.helpArticle?.typeDisplayName ?? '',
            thumbnailImageUrl:
              data?.data?.helpArticle?.thumbnailImageUrl?.url ?? '',
            title: data?.data?.helpArticle?.title ?? '',
            createdAt: data?.data?.helpArticle?.createdAt ?? '',
          }}
        />
      </Box>
      <Box w={'100%'} pb={'120px'}>
        <ProblemSolvePostList />
      </Box>
      <Container pb={'120px'}>
        <PluuugCTA
          text={'혼자 고민하지 마시고,\n킨코스와 해결하세요!'}
          buttons={[
            { text: '전문가 선택하기', onClick: () => {} },
            { text: '고객 후기 알아보기', onClick: () => {} },
          ]}
        />
      </Container>
    </VStack>
  )
}
