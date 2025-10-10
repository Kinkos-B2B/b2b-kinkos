'use client'

import { Box, Container, VStack } from '@chakra-ui/react'

import PluuugCTA from '@/components/view/PluuugCTA'

import { ExpertIntroBanner } from './components/ExpertIntroBanner'
import { ExpertListContainer } from './components/ExpertListContainer'
import { ExportReviewList } from './components/ExportReviewList'

export const ExpertTemplate = () => {
  return (
    <VStack w="100%" pt={'20px'}>
      <Box w={'100%'} pb={'80px'}>
        <ExpertIntroBanner />
      </Box>
      <Box pt={'56px'} w={'100%'}>
        <ExportReviewList />
      </Box>

      <Box py={'120px'} w={'100%'}>
        <Container maxW="1280px" px="20px">
          <ExpertListContainer />
        </Container>
      </Box>
      <Box py={'120px'} w={'100%'}>
        <Container maxW="1280px" px="20px">
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
