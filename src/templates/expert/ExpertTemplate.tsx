'use client'

import { Box, Container, VStack } from '@chakra-ui/react'

import PluuugCTA from '@/components/view/PluuugCTA'
import { useGetExpertMainQuery } from '@/generated/apis/ExpertApi/ExpertApi.query'

import { ExpertIntroBanner } from './components/ExpertIntroBanner'
import { ExpertListContainer } from './components/ExpertListContainer'
import { ExpertReviewList } from './components/ExpertReviewList'

export const ExpertTemplate = () => {
  const { data } = useGetExpertMainQuery()

  return (
    <VStack w="100%" gap={'0px'}>
      <Box w={'100%'} pt={{ base: '0px', lg: '20px' }}>
        <ExpertIntroBanner />
      </Box>
      <Box pt={'56px'} w={'100%'}>
        <ExpertReviewList reviews={data?.data?.customerReview ?? []} />
      </Box>

      <Box pt={{ base: '56px', sm: '80px', lg: '120px' }} w={'100%'}>
        <Container>
          <ExpertListContainer />
        </Container>
      </Box>
      <Box
        py={{ base: '120px 80px', sm: '140px 100px', lg: '160px 120px' }}
        w={'100%'}
      >
        <Container>
          <PluuugCTA
            text={'복잡한 인쇄 고민,\n 지금 바로 전문가와 상담하세요!'}
            buttons={[
              {
                text: '무료 상담 받아보기',
                onClick: () => {},
              },
              {
                text: '궁금한 사항 알아보기',
                onClick: () => {},
              },
            ]}
          />
        </Container>
      </Box>
    </VStack>
  )
}
