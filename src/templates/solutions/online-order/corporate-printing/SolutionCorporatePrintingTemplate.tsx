'use client'

import { useEffect, useRef } from 'react'

import { Box, Container, HStack, Text, VStack } from '@chakra-ui/react'

import gsap from 'gsap'
import { useInView } from 'react-intersection-observer'

import { Button } from '@/components/ui/button'

import { SolutionHeroSection } from '../../common/SolutionHeroSection'
import { SoultionCardsSection } from '../../common/SoultionCardsSection'

const mockData = {
  badge: '기업 전용 인쇄몰',
  title: (
    <VStack textAlign={'center'} textStyle={'pre-display-3'} gap={'0px'}>
      <Text color={'primary.4'}>기업 전용 인쇄몰</Text>
      <Text>아직도 복잡하게 주문하세요?</Text>
    </VStack>
  ),
  buttonContent: '지금 전문가 연결하기',
  link: '/solutions/online-order/corporate-printing',
}

const cardsMockData = {
  title: '고민은 끝!\n기업 전용인쇄몰이 필요한 이유',
  cards: [
    {
      title: '브랜드 이미지 통일',
      description:
        '우리 회사 전용 디자인 템플릿으로 어디서든 일관된 브랜드 이미지를 유지하세요.',
    },
    {
      title: '브랜드 이미지 통일',
      description:
        '우리 회사 전용 디자인 템플릿으로 어디서든 일관된 브랜드 이미지를 유지하세요.',
    },
    {
      title: '브랜드 이미지 통일',
      description:
        '우리 회사 전용 디자인 템플릿으로 어디서든 일관된 브랜드 이미지를 유지하세요.',
    },
    {
      title: '브랜드 이미지 통일',
      description:
        '우리 회사 전용 디자인 템플릿으로 어디서든 일관된 브랜드 이미지를 유지하세요.',
    },
  ],
}

export const SolutionCorporatePrintingTemplate = () => {
  const { ref, inView } = useInView()
  const stickyRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (inView) {
      gsap.to(stickyRef.current, {
        bottom: '20px',
        duration: 0.3,
        ease: 'ease-in-out',
      })
    } else {
      gsap.to(stickyRef.current, {
        bottom: '-100px',
        duration: 0.3,
        ease: 'ease-in-out',
      })
    }
  }, [inView])

  return (
    <VStack position={'relative'} gap={'0px'}>
      <Box w={'100%'}>
        <SolutionHeroSection introBlockData={mockData} />
      </Box>

      <Box py={'160px'} ref={ref}>
        <Container>
          <SoultionCardsSection {...cardsMockData} />
        </Container>
      </Box>

      <Box py={'160px'}>
        <Container>
          <SoultionCardsSection {...cardsMockData} />
        </Container>
      </Box>

      <Box py={'160px'}>
        <Container>
          <SoultionCardsSection {...cardsMockData} />
        </Container>
      </Box>

      <Box py={'160px'}>
        <Container>
          <SoultionCardsSection {...cardsMockData} />
        </Container>
      </Box>

      <Box
        position={'fixed'}
        bottom={'20px'}
        left={'50%'}
        transform={'translateX(-50%)'}
        maxW={'90vw'}
        bg={'background.inverse.2'}
        p={'8px 8px 8px 32px'}
        borderRadius={'12px'}
        ref={stickyRef}
        zIndex={1000}
      >
        <HStack w={'1200px'} justifyContent={'space-between'}>
          <Text color={'grey.0'} textStyle={'pre-body-2'}>
            브랜딩 전문가와 바로 연결되고 싶다면?
          </Text>
          <Button colorPalette="secondary" variant={'solid'} w={'240px'}>
            지금 전문가 연결하기
          </Button>
        </HStack>
      </Box>
    </VStack>
  )
}
