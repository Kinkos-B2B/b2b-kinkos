import * as React from 'react'

import { Box, Container, Flex, Heading, Image, VStack } from '@chakra-ui/react'
import { Marquee } from '@devnomic/marquee'

import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'

import { ExpertCard } from './components/ExportCard'
import './vertical-marquee.css'

// 전문가 데이터
const expertData = [
  {
    id: 1,
    imageUrl: '/images/home/expert/expert-1.png',
    title: '프란차이즈 전문가 그룹',
    description:
      '간략한 소개가 들어갑니다. 텍스트는 띄어쓰기 포함 45자로 제한됩니다.',
    tags: ['VOD', 'POSM(POP)', '판촉물', '홍보물 제작', '홍보물 제작'],
  },
  {
    id: 2,
    imageUrl: '/images/home/expert/expert-2.png',
    title: '프란차이즈 전문가 그룹',
    description:
      '간략한 소개가 들어갑니다. 텍스트는 띄어쓰기 포함 45자로 제한됩니다.',
    tags: ['VOD', 'POSM(POP)', '판촉물', '홍보물 제작', '홍보물 제작'],
  },
  {
    id: 3,
    imageUrl: '/images/home/expert/expert-3.png',
    title: '프란차이즈 전문가 그룹',
    description:
      '간략한 소개가 들어갑니다. 텍스트는 띄어쓰기 포함 45자로 제한됩니다.',
    tags: ['VOD', 'POSM(POP)', '판촉물', '홍보물 제작', '홍보물 제작'],
  },
  {
    id: 4,
    imageUrl: '/images/home/expert/expert-4.png',
    title: '프란차이즈 전문가 그룹',
    description:
      '간략한 소개가 들어갑니다. 텍스트는 띄어쓰기 포함 45자로 제한됩니다.',
    tags: ['VOD', 'POSM(POP)', '판촉물', '홍보물 제작', '홍보물 제작'],
  },
]

export const HomeIntroduceExpertSection = () => {
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
                {expertData.map((expert) => (
                  <ExpertCard
                    key={expert.id}
                    description={expert.description}
                    imageUrl={expert.imageUrl}
                    tags={expert.tags}
                    title={expert.title}
                  />
                ))}
              </VStack>
            </Marquee>
            <Marquee direction="up" reverse>
              <VStack gap="24px" mb={'24px'}>
                {expertData.map((expert) => (
                  <ExpertCard
                    key={`row2-${expert.id}`}
                    description={expert.description}
                    imageUrl={expert.imageUrl}
                    tags={expert.tags}
                    title={expert.title}
                  />
                ))}
              </VStack>
            </Marquee>
          </Flex>
        </Flex>
      </Container>
    </Box>
  )
}
