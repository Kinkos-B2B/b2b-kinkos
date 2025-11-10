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

import { usePannelContext } from '@/components/PannelContext'
import PluuugCTA from '@/components/view/PluuugCTA'
import { useGetExpertDetailBySlugQuery } from '@/generated/apis/ExpertApi/ExpertApi.query'

import { ExpertDetailArticleContent } from './components/ExpertDetailArticleContent'
import { ExpertDetailHeader } from './components/ExpertDetailHeader'
import { ExpertHelpArticleList } from './components/ExpertHelpArticleList'

interface Props {
  id: string
}

export const ExpertDetailTemplate = ({ id }: Props) => {
  const { openPannel } = usePannelContext()

  const { data } = useGetExpertDetailBySlugQuery({
    variables: {
      query: {
        slug: id,
      },
    },
  })

  return (
    <VStack w="100%" gap={'0px'}>
      <Box pt={{ base: '0px', lg: '0px' }} w={'100%'}>
        <ExpertDetailHeader header={data?.data?.header ?? {}} />
      </Box>

      <Box
        py={{ base: '40px 80px', sm: '48px 140px', lg: '64px 160px' }}
        position={'relative'}
        px={{ base: '20px', sm: '40px' }}
      >
        <ExpertDetailArticleContent content={data?.data} />
      </Box>

      <Box
        w={'100%'}
        bg={'background.basic.2'}
        py={{ base: '64px', sm: '80px' }}
        pb={{ base: '0px' }}
      >
        <Container px={{ base: 0, sm: '20px', lg: '40px' }}>
          <ExpertHelpArticleList articles={data?.data?.helpArticleList ?? []} />
        </Container>
      </Box>
      <Container py={{ base: '80px', sm: '100px', lg: '120px' }}>
        <PluuugCTA
          text="이 전문가가 마음에 든다면?"
          buttons={[
            { text: '무료 상담 받아보기', onClick: () => openPannel() },
          ]}
        />
      </Container>
    </VStack>
  )
}
