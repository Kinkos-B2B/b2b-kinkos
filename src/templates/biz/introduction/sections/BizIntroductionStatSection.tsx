'use client'

import { Box, Container, Flex, Text, VStack } from '@chakra-ui/react'

import CountUp from 'react-countup'

// 이미지 상수들
const imgHistory = '/images/biz/introduce/stat-icon-1.png'
const imgHistory1 = '/images/biz/introduce/stat-icon-2.png'
const imgHistory2 = '/images/biz/introduce/stat-icon-3.png'
const imgHistory3 = '/images/biz/introduce/stat-icon-4.png'
const imgHistory4 = '/images/biz/introduce/stat-icon-5.png'

// 통계 카드 데이터
const statCards = [
  {
    id: 'since-1995',
    value: 1995,
    prefix: 'Since ',
    suffix: '',
    description: '30년 이상 축적된\n비즈니스 솔루션 경험',
    descriptionMobile: '30년 이상 축적된\n비즈니스 솔루션 경험',
    image: imgHistory,
  },
  {
    id: '500-plus',
    value: 500,
    suffix: '+',
    description: '대한민국 주요 기업\n500개사 이상이 신뢰하는 파트너',
    descriptionMobile: '대한민국 주요 기업\n500개사 이상이 신뢰하는\n파트너',
    image: imgHistory1,
  },
  {
    id: '99-8-percent',
    value: 99.8,
    suffix: '%',
    description: '흔들림 없는 비즈니스를 위한 약속,\n납기 준수율',
    descriptionMobile: '흔들림 없는 비즈니스를 위한 약속, 납기 준수율',
    image: imgHistory2,
  },
  {
    id: '2500-plus',
    value: 2500,
    suffix: '+',
    description: '전국 동시 진행 프로젝트\n연 2,500회 이상 수행',
    descriptionMobile: '전국 동시 진행 프로젝트\n연 2,500회 이상 수행',
    image: imgHistory3,
  },
  {
    id: '100-plus',
    value: 100,
    suffix: '+',
    description: '결과의 차이를 만드는 100명 이상의\n비즈니스 솔루션 전문가',
    descriptionMobile:
      '결과의 차이를 만드는 100명 이상의 비즈니스 솔루션 전문가',
    image: imgHistory4,
  },
]

// 통계 카드 컴포넌트 (Desktop용 - 세로 레이아웃)
const StatCardDesktop = ({
  value,
  suffix,
  prefix,
  description,
  image,
  imageSize,
  px,
  pl,
  pr,
}: {
  value: number
  description: string
  image: string
  imageSize: string
  px?: string
  pl?: string
  pr?: string
  prefix?: string
  suffix?: string
}) => (
  <Flex flex="1" alignItems="center" alignSelf="stretch">
    <Box
      flex="1"
      bg="background.basic.2"
      borderRadius="28px"
      px={px}
      pl={pl}
      pr={pr}
      pt="32px"
      pb="52px"
      position="relative"
      h="100%"
      display="flex"
      flexDirection="column"
      alignItems="flex-end"
      overflow="hidden"
      minH="1px"
      minW="1px"
    >
      <VStack align="start" gap="6px" mb="-20px" w="100%">
        <Text color="primary.3" textStyle="pre-display-3">
          <CountUp
            end={Number(value)}
            separator=","
            duration={2}
            scrollSpyOnce
            enableScrollSpy
            prefix={prefix}
            suffix={suffix}
          />
        </Text>
        <Text color="grey.9" textStyle="pre-body-3" whiteSpace="pre-line">
          {description}
        </Text>
      </VStack>
      <Box
        mb="-20px"
        overflow="hidden"
        w={imageSize}
        h={imageSize}
        position="relative"
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <img
          src={image}
          alt=""
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            objectPosition: '50% 50%',
          }}
        />
      </Box>
    </Box>
  </Flex>
)

// 통계 카드 컴포넌트 (Tablet/Mobile용 - 가로 레이아웃)
const StatCardHorizontal = ({
  value,
  prefix,
  description,
  image,
  pl,
  pr,
  py,
  imageSize,
  suffix,
}: {
  value: number
  description: string
  image: string
  pl: string
  pr: string
  py: string
  imageSize: string
  prefix?: string
  suffix?: string
}) => (
  <Box
    bg="background.basic.2"
    borderRadius="28px"
    pl={pl}
    pr={pr}
    py={py}
    overflow="hidden"
    w="100%"
    display="flex"
    alignItems="center"
    justifyContent="space-between"
  >
    <VStack align="start" gap="6px" flex="1" minW="1px" minH="1px">
      <Text textStyle="pre-display-3" color="primary.3" w="100%">
        <CountUp
          end={Number(value)}
          separator=","
          duration={2}
          scrollSpyOnce
          enableScrollSpy
          prefix={prefix}
          suffix={suffix}
        ></CountUp>
      </Text>
      <Text
        fontSize="16px"
        fontWeight="600"
        color="grey.9"
        lineHeight="1.6"
        letterSpacing="-0.32px"
        w="100%"
        whiteSpace="pre-line"
      >
        {description}
      </Text>
    </VStack>
    <Box
      overflow="hidden"
      w={imageSize}
      h={imageSize}
      flexShrink="0"
      position="relative"
      display="flex"
      alignItems="center"
      justifyContent="center"
    >
      <img
        src={image}
        alt=""
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          objectPosition: '50% 50%',
        }}
      />
    </Box>
  </Box>
)

export const BizIntroductionStatSection = () => {
  return (
    <Container>
      <VStack
        w="100%"
        gap="48px"
        align="start"
        pt={{ lg: '160px', sm: '140px', base: '80px' }}
      >
        {/* 헤더 섹션 */}
        <VStack gap="12px" align="start" w="100%">
          <Text
            fontSize={{ base: '18px', sm: '18px', lg: '20px' }}
            fontWeight="700"
            color="primary.3"
            lineHeight="1.4"
            letterSpacing="-0.18px"
            textAlign="center"
          >
            성과로 입증
          </Text>
          <VStack gap="20px" align="start" w="100%">
            <Text
              fontSize={{ base: '32px', sm: '40px', lg: '48px' }}
              fontWeight="700"
              color="grey.10"
              lineHeight="1.4"
              letterSpacing="-0.4px"
              w="100%"
            >
              숫자로 증명하는 킨코스의 실행력
            </Text>
            <Text
              fontSize="16px"
              fontWeight="400"
              color="grey.9"
              lineHeight="1.6"
              letterSpacing="-0.32px"
              w="100%"
            >
              30년 이상 축적된 노하우와 실적은 단순한 수치가 아니라,{'\n'}
              고객의 성공을 함께 이뤄온 증거입니다.
            </Text>
          </VStack>
        </VStack>

        {/* 통계 카드 그리드 - Desktop (lg 이상) */}
        <VStack
          gap="20px"
          w="100%"
          align="start"
          display={{ base: 'none', lg: 'flex' }}
        >
          {/* 첫 번째 행 (2개 카드) */}
          <Flex gap="20px" w="100%" alignItems="center">
            <StatCardDesktop
              value={statCards[0].value}
              prefix={statCards[0].prefix}
              description={statCards[0].description}
              image={statCards[0].image}
              imageSize="130px"
              px="40px"
            />
            <StatCardDesktop
              value={statCards[1].value}
              suffix={statCards[1].suffix}
              description={statCards[1].description}
              image={statCards[1].image}
              imageSize="130px"
              px="40px"
            />
          </Flex>

          {/* 두 번째 행 (3개 카드) */}
          <Flex gap="20px" w="100%" alignItems="center">
            <StatCardDesktop
              value={statCards[2].value}
              suffix={statCards[2].suffix}
              description={statCards[2].description}
              image={statCards[2].image}
              imageSize="120px"
              pl="40px"
              pr="24px"
            />
            <StatCardDesktop
              value={statCards[3].value}
              suffix={statCards[3].suffix}
              description={statCards[3].description}
              image={statCards[3].image}
              imageSize="120px"
              pl="40px"
              pr="24px"
            />
            <StatCardDesktop
              value={statCards[4].value}
              suffix={statCards[4].suffix}
              description={statCards[4].description}
              image={statCards[4].image}
              imageSize="120px"
              pl="40px"
              pr="24px"
            />
          </Flex>
        </VStack>

        {/* 통계 카드 그리드 - Tablet (md ~ lg) */}
        <VStack
          gap="20px"
          w="100%"
          align="start"
          display={{ base: 'none', sm: 'flex', lg: 'none' }}
        >
          {/* 첫 번째 행 (2개 카드) */}
          <Flex gap="20px" w="100%" alignItems="center">
            <StatCardDesktop
              value={statCards[0].value}
              description={statCards[0].description}
              image={statCards[0].image}
              imageSize="130px"
              px="40px"
            />
            <StatCardDesktop
              value={statCards[1].value}
              description={statCards[1].description}
              image={statCards[1].image}
              imageSize="130px"
              px="40px"
            />
          </Flex>

          {/* 나머지 카드 (full width, 가로 레이아웃) */}
          <VStack gap="20px" w="100%" align="start">
            <StatCardHorizontal
              value={statCards[2].value}
              description={statCards[2].description}
              image={statCards[2].image}
              pl="40px"
              pr="44px"
              py="32px"
              imageSize="120px"
            />
            <StatCardHorizontal
              value={statCards[3].value}
              description={statCards[3].description}
              image={statCards[3].image}
              pl="40px"
              pr="44px"
              py="32px"
              imageSize="120px"
            />
            <StatCardHorizontal
              value={statCards[4].value}
              description={statCards[4].description}
              image={statCards[4].image}
              pl="40px"
              pr="44px"
              py="32px"
              imageSize="120px"
            />
          </VStack>
        </VStack>

        {/* 통계 카드 그리드 - Mobile (base ~ md) */}
        <VStack
          gap="16px"
          w="100%"
          align="start"
          display={{ base: 'flex', sm: 'none' }}
        >
          <StatCardHorizontal
            value={statCards[0].value}
            description={statCards[0].descriptionMobile}
            image={statCards[0].image}
            prefix={statCards[0].prefix}
            suffix={statCards[0].suffix}
            pl="32px"
            pr="16px"
            py="24px"
            imageSize="80px"
          />
          <StatCardHorizontal
            value={statCards[1].value}
            description={statCards[1].descriptionMobile}
            image={statCards[1].image}
            suffix={statCards[1].suffix}
            pl="32px"
            pr="16px"
            py="24px"
            imageSize="80px"
          />
          <StatCardHorizontal
            value={statCards[2].value}
            description={statCards[2].descriptionMobile}
            image={statCards[2].image}
            suffix={statCards[2].suffix}
            pl="32px"
            pr="16px"
            py="24px"
            imageSize="80px"
          />
          <StatCardHorizontal
            value={statCards[3].value}
            description={statCards[3].descriptionMobile}
            image={statCards[3].image}
            suffix={statCards[3].suffix}
            pl="32px"
            pr="16px"
            py="24px"
            imageSize="80px"
          />
          <StatCardHorizontal
            value={statCards[4].value}
            description={statCards[4].descriptionMobile}
            image={statCards[4].image}
            suffix={statCards[4].suffix}
            pl="32px"
            pr="16px"
            py="24px"
            imageSize="80px"
          />
        </VStack>
      </VStack>
    </Container>
  )
}
