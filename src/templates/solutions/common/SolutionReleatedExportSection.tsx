'use client'

import { Box, Button, Container, Grid, Text, VStack } from '@chakra-ui/react'

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
  onExpertClick?: () => void
}

export const SolutionReleatedExportSection = ({
  solutionId,
  onExpertClick,
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
    <Container w="100%">
      <VStack gap={'56px'}>
        <VStack gap="48px" align="stretch" w="100%">
          <Box w="100%">
            <Text textStyle="pre-display-4" color="grey.10" textAlign="center">
              관련 전문가를 찾고 계신가요?
            </Text>
          </Box>
          <Grid
            templateColumns={{
              base: '1fr',
              sm: 'repeat(2, 1fr)',
              lg: 'repeat(3, 1fr)',
            }}
            gap={{
              base: '16px',
              sm: '20px',
            }}
            w="100%"
          >
            {expertList.map((expert, index) => (
              <SolutionReleatedExportCard
                key={index}
                solutionExpert={expert}
                onButtonClick={() => onExpertClick?.()}
              />
            ))}
          </Grid>
        </VStack>
        <Button>더 많은 전문가 보기</Button>
      </VStack>
    </Container>
  )
}
