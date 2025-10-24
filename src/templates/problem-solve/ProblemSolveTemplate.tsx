'use client'

import { useRouter } from 'next/navigation'

import { Box, Container, VStack } from '@chakra-ui/react'

import { usePannelContext } from '@/components/PannelContext'
import { PluuugCTA } from '@/components/view/PluuugCTA'
import { RecentPost } from '@/components/view/RecentPost'
import { ROUTES } from '@/constants/routes'
import { useGetHelpArticleMainConfigQuery } from '@/generated/apis/HelpArticleApi/HelpArticleApi.query'
import { GetAllHelpArticleParamsTypeEnumType } from '@/helper/options'

import { ProblemSolveIntroBanner } from './components/ProblemSolveIntroBanner'
import { ProblemSolvePostList } from './components/ProblemSolvePostList'

export const ProblemSolveTemplate = ({
  activeTab,
}: {
  activeTab: GetAllHelpArticleParamsTypeEnumType
}) => {
  const router = useRouter()
  const { openPannel } = usePannelContext()

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
          title="최신 고민해결 사례"
          article={{
            author: data?.data?.helpArticle?.typeDisplayName ?? '',
            thumbnailImageUrl:
              data?.data?.helpArticle?.thumbnailImageUrl?.url ?? '',
            title: data?.data?.helpArticle?.title ?? '',
            createdAt: data?.data?.helpArticle?.createdAt ?? '',
          }}
        />
      </Box>
      <Box w={'100%'} pb={'120px'} id="post-list">
        <ProblemSolvePostList activeTab={activeTab} />
      </Box>
      <Container pb={'120px'}>
        <PluuugCTA
          text={'혼자 고민하지 마시고,\n킨코스와 해결하세요!'}
          buttons={[
            {
              text: '전문가 선택하기',
              onClick: () => {
                openPannel()
              },
            },
            {
              text: '고객 후기 알아보기',
              onClick: () => {
                router.push(ROUTES.CUSTOMER_REVIEW)
              },
            },
          ]}
        />
      </Container>
    </VStack>
  )
}
