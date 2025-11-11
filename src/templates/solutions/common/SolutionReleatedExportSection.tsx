'use client'

import Link from 'next/link'

import {
  Box,
  Button,
  Container,
  Grid,
  GridItem,
  Text,
  VStack,
} from '@chakra-ui/react'

import { ROUTES } from '@/constants/routes'
import { useGetSolutionExpertListQuery } from '@/generated/apis/SolutionApi/SolutionApi.query'
import { GetSolutionExpertListParamsTypeEnumType } from '@/helper/options'
import { SolutionReleatedExportCard } from '@/templates/solutions/common/SolutionReleatedExportCard'

interface ExpertData {
  id: string
  nickname: string
  description: string
  avatarImage?: string
}

interface SolutionReleatedExportSectionProps {
  solutionId: GetSolutionExpertListParamsTypeEnumType
}

export const SolutionReleatedExportSection = ({
  solutionId,
}: SolutionReleatedExportSectionProps) => {
  const { data: experts } = useGetSolutionExpertListQuery({
    variables: {
      query: {
        type: solutionId,
      },
    },
  })

  const expertList = experts?.data || []

  return (
    <Container pr={{ base: '0px' }}>
      <VStack gap={{ base: '40px', sm: '48px', lg: '56px' }}>
        <VStack gap="48px" align="stretch" w="100%">
          <Box w="100%">
            <Text textStyle="pre-display-4" color="grey.10" textAlign="center">
              관련 전문가를 찾고 계신가요?
            </Text>
          </Box>
          <Grid
            overflowX={'auto'}
            templateColumns={'repeat(3, 1fr)'}
            gap={{
              base: '16px',
              sm: '20px',
            }}
            pr={{ base: '20px', sm: '40px', lg: '0px' }}
            w="100%"
          >
            {expertList.map((expert, index) => (
              <GridItem key={index} minW={'380px'}>
                <SolutionReleatedExportCard
                  key={index}
                  solutionExpert={expert}
                />
              </GridItem>
            ))}
          </Grid>
        </VStack>
        <Link href={ROUTES.EXPERT}>
          <Button>더 많은 전문가 보기</Button>
        </Link>
      </VStack>
    </Container>
  )
}
