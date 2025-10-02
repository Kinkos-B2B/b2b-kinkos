import React from 'react'

import { Box, Container, Flex, Text } from '@chakra-ui/react'

import { StatCard } from './StatCard'
import { StatDivider } from './StatDivider'

export interface StatisticData {
  id: string
  icon: string
  iconAlt: string
  value: number
  description: string
  dataNodeId?: string
  suffix?: string
}

export const STATISTICS_DATA: StatisticData[] = [
  {
    id: 'partners',
    icon: '/images/customer-review/customer-review-effect-1.svg',
    iconAlt: '기업 파트너 아이콘',
    value: 30000,
    description: '기업 파트너 수',
  },
  {
    id: 'contracts',
    icon: '/images/customer-review/customer-review-effect-2.svg',
    iconAlt: '연간 솔루션 계약 아이콘',
    value: 15000,
    description: '연간 솔루션 계약수',
  },
  {
    id: 'productivity',
    icon: '/images/customer-review/customer-review-effect-3.svg',
    iconAlt: '업무 생산성 개선 아이콘',
    value: 90,
    description: '업무 생산성 개선 응답률',
    suffix: '%',
  },
  {
    id: 'advertising',
    icon: '/images/customer-review/customer-review-effect-4.svg',
    iconAlt: '광고 판촉 효과 아이콘',
    value: 65,
    description: '광고·판촉 효과 증가율',
    suffix: '%',
  },
]

export const CustomerReviewSolutionEffect = () => {
  return (
    <Box
      bg={'background.basic.2'}
      h={'640px'}
      display="flex"
      alignItems="center"
      justifyContent="center"
      flexDirection="column"
      position="relative"
      w="100%"
      data-node-id="14676:16078"
    >
      <Container
        display="flex"
        flexDirection="column"
        alignItems="center"
        gap={'56px'}
        w={{ base: '100%', md: '90%', lg: '1280px' }}
        px={{ base: '16px', md: '24px', lg: '0' }}
        data-node-id="14676:16079"
      >
        {/* 제목 */}
        <Text
          textStyle={'pre-display-4'}
          w="100%"
          data-node-id="14676:16080"
          color={'grey.10'}
          textAlign={'center'}
        >
          킨코스 솔루션,
          <br />
          고객이 직접 체감하는 확실한 결과
        </Text>

        {/* 통계 카드들 */}
        <Flex
          gap={'40px'}
          align="center"
          direction={{ base: 'column', lg: 'row' }}
          w="100%"
        >
          {STATISTICS_DATA.map((stat, index) => (
            <React.Fragment key={stat.id}>
              <StatCard
                icon={stat.icon}
                iconAlt={stat.iconAlt}
                value={stat.value}
                description={stat.description}
                suffix={stat.suffix}
                index={index}
              />
              {index < STATISTICS_DATA.length - 1 && <StatDivider />}
            </React.Fragment>
          ))}
        </Flex>
      </Container>
    </Box>
  )
}
