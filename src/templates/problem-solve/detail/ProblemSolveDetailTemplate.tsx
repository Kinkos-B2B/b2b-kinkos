'use client'

import {
  Box,
  Button,
  Center,
  Container,
  HStack,
  Text,
  VStack,
} from '@chakra-ui/react'

import { ExpertProfileCard } from '@/components/view/ExpertProfileCard'
import { PostHeader } from '@/components/view/PostDetail/PostHeader'
import { useGetHelpArticleDetailQuery } from '@/generated/apis/HelpArticleApi/HelpArticleApi.query'

import { ProblemSolveArticleContent } from './components/ProblemSolveArticleContent'

interface Props {
  id: string
}

export const ProblemSolveDetailTemplate = ({ id }: Props) => {
  const { data } = useGetHelpArticleDetailQuery({
    variables: {
      id: Number(id),
    },
  })

  return (
    <VStack w="100%" pt={'20px'} gap={'0px'}>
      <PostHeader header={data?.data?.header ?? {}} />
      <Box
        py={{ base: '48px 100px', sm: '64px 140px', lg: '80px 160px' }}
        w={{ base: '100%', lg: 'auto' }}
        px={{ base: '20px', sm: '40px' }}
        position={'relative'}
      >
        <ProblemSolveArticleContent content={data?.data} />
      </Box>

      <Box py={{ base: '64px', lg: '80px' }} bg={'primary.3'} w={'100%'}>
        <Container>
          <Center flexDirection={'column'} gap={'28px'}>
            <VStack gap={'12px'}>
              <Text textStyle={'pre-display-4'} color={'grey.0'}>
                궁금하신 점이 있으신가요?
              </Text>
              <Text
                textStyle={'pre-heading-3'}
                color={'grey.0'}
                textAlign={'center'}
              >
                전문가와 직접 상담해 보세요.{'\n'} 고객님의 상황에 맞는 맞춤형
                솔루션을 제안해 드립니다.
              </Text>
            </VStack>
            <Box w={{ base: '100%', lg: '820px' }}>
              <ExpertProfileCard
                nickname="닉네임"
                quote="기업 브랜드 가치 상승에 기여하는 것이 저의 목표입니다."
                relatedSolutions={['브랜딩 디자인', '통합제작 All-in-One']}
                relatedFields={[
                  'POSM(POP)',
                  '디자인 기획/구독',
                  '부스/전시회/시공',
                ]}
              />
            </Box>
            <HStack gap={'8px'}>
              <Button variant={'outline'} w={'180px'}>
                무료 상담 받아보기
              </Button>
              <Button variant={'outline'} w={'180px'}>
                무료 상담 받아보기
              </Button>
            </HStack>
          </Center>
        </Container>
      </Box>
    </VStack>
  )
}
