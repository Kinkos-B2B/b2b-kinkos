'use client'

import { Box, Button, Container, Grid, Text, VStack } from '@chakra-ui/react'

import { SolutionReleatedExportCard } from '@/templates/solutions/common/SolutionReleatedExportCard'

interface ExpertData {
  id: string
  nickname: string
  description: string
  avatarImage?: string
}

interface SolutionReleatedExportSectionProps {
  experts?: ExpertData[]
  onExpertClick?: (id: string) => void
}

export const SolutionReleatedExportSection = ({
  experts = [],
  onExpertClick,
}: SolutionReleatedExportSectionProps) => {
  // 기본 데이터 (Figma 디자인에 맞춤)
  const defaultExperts: ExpertData[] = [
    {
      id: '1',
      nickname: '닉네임',
      description: '간략한 소개글이 들어갑니다.\n간략한 소개글이 들어갑니다.',
    },
    {
      id: '2',
      nickname: '닉네임',
      description:
        '# BMW 미래재단 뉴스레터 기획/디자인 총괄\n# 지멘스 홍보물, 직원 교육 책자 제작 영업 총괄',
    },
    {
      id: '3',
      nickname: '닉네임',
      description:
        '# BMW 미래재단 뉴스레터 기획/디자인 총괄\n# 지멘스 홍보물, 직원 교육 책자 제작 영업 총괄',
    },
  ]

  const expertList = experts.length > 0 ? experts : defaultExperts

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
            {expertList.map((expert) => (
              <SolutionReleatedExportCard
                key={expert.id}
                id={expert.id}
                nickname={expert.nickname}
                description={expert.description}
                avatarImage={expert.avatarImage}
                onButtonClick={onExpertClick}
              />
            ))}
          </Grid>
        </VStack>
        <Button>더 많은 전문가 보기</Button>
      </VStack>
    </Container>
  )
}
