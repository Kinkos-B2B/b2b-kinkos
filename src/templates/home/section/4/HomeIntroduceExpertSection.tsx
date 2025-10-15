import * as React from 'react'

import { Box, Container, Flex, Heading, Image, VStack } from '@chakra-ui/react'
import { Marquee } from '@devnomic/marquee'

import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { useGetHomeExpertQuery } from '@/generated/apis/HomeApi/HomeApi.query'

import { HomeExpertCard } from './components/HomeExpertCard'
import './vertical-marquee.css'

export const HomeIntroduceExpertSection = () => {
  const { data } = useGetHomeExpertQuery()
  const experts = data?.data || []

  return (
    <Box
      bg="secondary.1"
      h="780px"
      w="100%"
      position="relative"
      overflow="hidden"
    >
      {/* 배경 원형 요소 */}
      <Box
        h="1518px"
        left="50%"
        position="absolute"
        top="0"
        transform="translateX(-50%)"
        w="1519px"
        zIndex="1"
      >
        <Image
          alt=""
          h="full"
          src="/images/home/expert/expert-section-background-ellipse.svg"
          w="full"
        />
      </Box>

      <Box position="absolute" bottom={'0px'} left={'0px'}>
        <Image
          h={'469px'}
          w={'100%'}
          alt=""
          src="/images/home/expert/expert-section-background-text.png"
        />
      </Box>

      <Container h="100%" position="relative" zIndex="2">
        <Flex align="center" justify="space-between" w="100%" h="100%">
          <VStack align="start" justify="center" gap="40px" flex="1">
            <VStack align="start" gap="16px" flex="none">
              <Badge variant="solid" colorPalette="white" size={'xl'}>
                전문가
              </Badge>
              <Heading
                color="grey.10"
                whiteSpace="nowrap"
                textStyle="pre-display-3"
              >
                우리 기업에 맞는
                <br />
                전문가를 만나보세요
              </Heading>
            </VStack>

            <Button variant="solid" textStyle="pre-body-3">
              전문가 전체보기
            </Button>
          </VStack>

          <Flex w={'100%'} h={'100%'} justifyContent={'end'} gap={'24px'}>
            <Marquee direction="up" style={{ width: 'fit-content' }}>
              <VStack gap="24px" mb={'24px'}>
                {experts.map((expert, index) => (
                  <HomeExpertCard key={index} expert={expert} />
                ))}
              </VStack>
            </Marquee>
            <Marquee direction="up" reverse>
              <VStack gap="24px" mb={'24px'}>
                {experts.map((expert, index) => (
                  <HomeExpertCard key={index} expert={expert} />
                ))}
              </VStack>
            </Marquee>
          </Flex>
        </Flex>
      </Container>
    </Box>
  )
}
