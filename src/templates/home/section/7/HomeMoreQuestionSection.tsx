'use client'

import { useEffect, useRef } from 'react'

import Link from 'next/link'

import {
  Box,
  Container,
  Flex,
  Heading,
  Image,
  Text,
  VStack,
} from '@chakra-ui/react'
import { CaretRightIcon } from '@phosphor-icons/react/dist/ssr'

import gsap from 'gsap'
import { useInView } from 'react-intersection-observer'

import { Badge } from '@/components/ui/badge'
import { ROUTES } from '@/constants/routes'

// 임시 이미지 URL들 (실제로는 public 폴더의 이미지를 사용해야 함)
const imgIdeaGeneration = '/images/home/more-question/idea-generation.png'
const imgChat = '/images/home/more-question/chat.png'
const imgDocument = '/images/home/more-question/document.png'

const cardData = [
  {
    id: 'solution',
    title: '솔루션',
    description: '킨코스가 제공하고 있는 솔루션과\n서비스를 확인해 보세요.',
    icon: imgIdeaGeneration,
    bgColor: 'primary.1',
    href: ROUTES.SOLUTIONS.DESIGN.BRANDING,
  },
  {
    id: 'review',
    title: '고객후기',
    description:
      '킨코스를 거쳐간 다양한 고객사의\n실제 작업 사례와 만족도를 확인해 보세요.',
    icon: imgChat,
    bgColor: 'primary.1',
    href: ROUTES.CUSTOMER_REVIEW,
  },
  {
    id: 'problem-solving',
    title: '고민해결',
    description: '킨코스가 제공하고 있는 솔루션과\n서비스를 확인해 보세요.',
    icon: imgDocument,
    bgColor: 'primary.1',
    href: ROUTES.PROBLEM,
  },
]

export const HomeMoreQuestionSection = () => {
  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: true,
  })

  const cardListRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (cardListRef.current) {
      gsap.set(cardListRef.current, {
        opacity: 0,
        y: 100,
      })

      if (inView) {
        gsap.to(cardListRef.current, {
          opacity: 1,
          duration: 1,
          y: 0,
          ease: 'power2.inOut',
        })
      }
    }
  }, [cardListRef.current, inView])

  return (
    <Box
      w={'100%'}
      ref={ref}
      bg="primary.1"
      py={{ base: '100px', sm: '140px', lg: '160px' }}
    >
      <Container>
        <VStack gap="48px" align="stretch">
          {/* 헤더 섹션 */}
          <VStack gap="16px" align="center">
            <Badge
              variant="subtle"
              colorPalette="secondary"
              size="xl"
              showLeftIcon={false}
              showRightIcon={false}
            >
              더 궁금하다면?
            </Badge>
            <Heading
              as="h2"
              textStyle="pre-display-3"
              color="grey.10"
              textAlign="center"
              whiteSpace={{ base: 'pre-line', sm: 'nowrap' }}
            >
              {'킨코스,\nB2B를 더 잘 활용하는 방법'}
            </Heading>
          </VStack>

          {/* 카드 그리드 */}
          <Flex
            ref={cardListRef}
            gap="24px"
            direction={{ base: 'column', lg: 'row' }}
            wrap="wrap"
            w="100%"
          >
            {cardData.map((card) => (
              <Link
                href={card.href}
                key={card.id}
                style={{ display: 'flex', flex: 1 }}
              >
                <Box
                  flex={{ base: '1', lg: '1' }}
                  minW={{ base: '100%', lg: '300px' }}
                  maxW={{ base: '100%', lg: '400px' }}
                  bg="grey.0"
                  borderRadius="28px"
                  p={{ base: '24px', sm: '36px' }}
                  pt={{ base: '24px', lg: '36px' }}
                  pb={{ base: '24px', lg: '48px' }}
                  position="relative"
                  display={'flex'}
                  cursor={'pointer'}
                  flexDir={{ base: 'column', sm: 'row', lg: 'column' }}
                  gap={{ base: '20px', sm: '30px' }}
                  boxShadow="0px 20px 48px 0px rgba(1, 63, 252, 0.12)"
                  _hover={{
                    transform: 'translateY(-4px)',
                    transition: 'transform 0.2s ease-in-out',
                  }}
                >
                  {/* 아이콘 영역 */}
                  <Box
                    w={{ base: '80px', sm: '100px' }}
                    h={{ base: '80px', sm: '100px' }}
                    bg={card.bgColor}
                    borderRadius="20px"
                    position="relative"
                    overflow="hidden"
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                  >
                    <Image
                      src={card.icon}
                      alt={card.title}
                      w={{
                        base: card.id === 'review' ? '60px' : '80px',
                        lg: card.id === 'review' ? '60px' : '80px',
                      }}
                      h={{
                        base: card.id === 'review' ? '60px' : '80px',
                        lg: card.id === 'review' ? '60px' : '80px',
                      }}
                      objectFit="contain"
                    />
                  </Box>

                  {/* 텍스트 영역 */}
                  <VStack gap="8px" align="start">
                    <Heading as="h3" textStyle="pre-heading-2" color="grey.9">
                      {card.title}
                    </Heading>
                    <Text
                      textStyle="pre-body-2"
                      color="grey.7"
                      whiteSpace="pre-line"
                    >
                      {card.description}
                    </Text>
                  </VStack>

                  <Box
                    position="absolute"
                    top={{ base: '16px', lg: '20px' }}
                    right={{ base: '16px', lg: '20px' }}
                    w={'48px'}
                    h={'48px'}
                    bg="primary.4"
                    borderRadius="full"
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    cursor="pointer"
                  >
                    <CaretRightIcon size={24} color="white" />
                  </Box>
                </Box>
              </Link>
            ))}
          </Flex>
        </VStack>
      </Container>
    </Box>
  )
}
