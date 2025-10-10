'use client'

import Image from 'next/image'

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
import PluuugCTA from '@/components/view/PluuugCTA'
import { PostHeader } from '@/components/view/PostDetail/PostHeader'
import { useGetExpertDetailQuery } from '@/generated/apis/ExpertApi/ExpertApi.query'

import { ExpertDetailArticleContent } from './components/ExpertDetailArticleContent'
import { ExpertDetailHeader } from './components/ExpertDetailHeader'
import { ExpertHelpArticleList } from './components/ExpertHelpArticleList'

interface Props {
  id: string
}

export const ExpertDetailTemplate = ({ id }: Props) => {
  const { data } = useGetExpertDetailQuery({
    variables: {
      id: Number(id),
    },
  })
  data?.data?.header.title

  return (
    <VStack w="100%" pt={'20px'} gap={'0px'}>
      <ExpertDetailHeader header={data?.data?.header ?? {}} />
      <Box py={'80px 160px'} position={'relative'}>
        <ExpertDetailArticleContent content={data?.data} />
      </Box>

      <Box w={'100%'} bg={'background.basic.2'} py={'80px'}>
        <Container maxW={'1280px'}>
          <ExpertHelpArticleList articles={data?.data?.helpArticleList ?? []} />
        </Container>
      </Box>

      <Container maxW={'1280px'} py={'120px'}>
        <PluuugCTA
          text="이 전문가가 마음에 든다면?"
          buttons={[{ text: '무료 상담 받아보기', onClick: () => {} }]}
        />
      </Container>
    </VStack>
  )
}
