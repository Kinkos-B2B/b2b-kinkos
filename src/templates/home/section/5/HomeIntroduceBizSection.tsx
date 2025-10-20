'use client'

import { useEffect, useRef } from 'react'

import Image from 'next/image'

import { Box, Grid, GridItem, HStack, Text, VStack } from '@chakra-ui/react'

import { gsap } from 'gsap'
import { useInView } from 'react-intersection-observer'

import { Badge } from '@/components/ui/badge'
import { useMediaQuery } from '@/hooks/useMediaQuery'

// 이미지 에셋들 (Figma에서 다운로드한 실제 이미지들)
const imgBriefcase = '/images/home/biz/biz-card-1.png'
const imgStartup = '/images/home/biz/biz-card-2.png'
const imgManagementBusiness = '/images/home/biz/biz-card-3.png'
const imgTargetMission = '/images/home/biz/biz-card-4.png'
const imgEllipse192 = '/images/home/biz/biz-bg-ellipse.svg'

interface BizCardProps {
  title: string
  description: string
  image: string
  rotation: number
  imageSize: number
  finalPosition: string
  delay: number
  isInView: boolean
}

const BizCard = ({
  title,
  description,
  image,
  rotation,
  imageSize,
  finalPosition,
  isInView,
}: BizCardProps) => {
  const cardRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (cardRef.current && isInView) {
      // 뷰포트에 들어왔을 때 애니메이션 실행
      gsap.to(cardRef.current, {
        left: finalPosition,
        ease: 'back.out',
      })
    }
  }, [isInView, finalPosition])

  return (
    <Box
      ref={cardRef}
      display="flex"
      position="absolute"
      transform={`translateY(calc(50% + 50px)) rotate(${rotation}deg)`}
      alignItems="center"
      justifyContent="center"
    >
      <Box flex="none">
        <Box
          w={'302px'}
          h={'372px'}
          backdropFilter="blur(35px)"
          borderRadius="32px"
          p="20px"
          pt="16px"
          pb="48px"
          position="relative"
          bg="linear-gradient(152deg, rgba(255, 255, 255, 0.85) 17.51%, rgba(255, 255, 255, 0.60) 89.55%)"
          boxShadow="0px 20px 48px 0px rgba(1,45,181,0.12)"
          _before={{
            content: '""',
            position: 'absolute',
            inset: 0,
            borderRadius: '32px',
            border: '1.5px solid rgba(255,255,255,0.9)',
            pointerEvents: 'none',
          }}
        >
          {/* 이미지 영역 */}
          <Box
            borderRadius="16px"
            position="relative"
            mb="12px"
            h={'180px'}
            overflow="hidden"
            display="flex"
            alignItems="center"
            justifyContent="center"
          >
            {/* 메인 이미지 */}
            <Image
              src={image}
              alt={title}
              width={imageSize}
              height={imageSize}
            />
          </Box>

          {/* 텍스트 영역 */}
          <VStack gap="10px" align="stretch" h="116px" justify="center">
            <Text textStyle="pre-heading-3" color="grey.10" textAlign="center">
              {title}
            </Text>
            <Text
              textStyle="pre-body-4"
              color="grey.10"
              textAlign="center"
              h="52px"
            >
              {description}
            </Text>
          </VStack>
        </Box>
      </Box>
    </Box>
  )
}

export const HomeIntroduceBizSection = () => {
  const isNoneDesktop = useMediaQuery(['(max-width: 1280px)'], {
    ssr: true,
  })[0]

  const { ref, inView } = useInView({
    threshold: 0.3, // 30% 보일 때 트리거
    triggerOnce: true, // 한 번만 실행
  })

  const cards = [
    {
      title: '믿고 맡기는 B2B 인쇄 파트너',
      description:
        '업종별 니즈에 맞춰, 전국 인프라로\n대응하는 든든한 인쇄 파트너',
      image: imgBriefcase,
      finalPosition: '16%',
      rotation: -15,
      delay: 0.2,
      imageSize: 184,
    },
    {
      title: '비즈니스 효율을 높이는\n인쇄 솔루션',
      description: '기획부터 납품까지,\n기업 환경에 최적화된 출력 서비스',
      image: imgStartup,
      finalPosition: '34%',
      rotation: 8,
      delay: 0.4,
      imageSize: 166,
    },
    {
      title: '업종별 전문가가\n제안하는 인쇄 전략',
      description:
        '30명 이상의 산업별 전문가가 고객의\n상황에 맞는 솔루션을 제안합니다.',
      image: imgManagementBusiness,
      finalPosition: '52.5%',
      rotation: -4,
      delay: 0.6,
      imageSize: 164,
    },
    {
      title: "Kinko's for Business",
      description: '전국 인프라와 전문 컨설팅으로 제공하는\nB2B 인쇄 솔루션',

      image: imgTargetMission,
      finalPosition: '69.6%',
      rotation: 10,
      delay: 0.8,
      imageSize: 192,
    },
  ]

  return (
    <Box
      ref={ref}
      position="relative"
      w="100%"
      minH={'100vh'}
      py={{ base: '100px', sm: '140px', lg: '160px' }}
      gap={{ base: '32px', sm: '40px' }}
      display="flex"
      flexDirection="column"
      bg="primary.2" // #cad7ff
      overflow="hidden"
    >
      <Box
        position="absolute"
        h={'1519px'}
        w={'1518px'}
        borderRadius="full"
        bottom="-709px"
        left="50%"
        transform="translateX(-50%) translateY(0%)"
        backgroundImage={`url('${imgEllipse192}')`}
        backgroundSize="cover"
        backgroundPosition="center"
        backgroundRepeat="no-repeat"
      />

      {/* 헤더 섹션 */}
      <VStack gap="16px" align="center">
        <Badge size="xl" colorPalette="white">
          킨코스 비즈
        </Badge>

        <Text
          textStyle="pre-display-3"
          color="grey.10" // #1b1c1d
          textAlign="center"
        >
          킨코스, 기업을 위한 인쇄 솔루션
        </Text>
      </VStack>

      <HStack justify="center" gap="24px" w={'100%'} position={'relative'}>
        {isNoneDesktop ?
          <Grid
            templateColumns={{ base: '1fr', sm: 'repeat(2, 1fr)' }}
            gap="20px"
            w="100%"
            px={{ base: '20px', sm: '40px' }}
          >
            {cards.map((card, index) => {
              return (
                <GridItem key={index}>
                  <Box
                    backdropFilter="blur(35px)"
                    borderRadius="32px"
                    p="20px"
                    pt="16px"
                    pb="48px"
                    position="relative"
                    bg="linear-gradient(152deg, rgba(255, 255, 255, 0.85) 17.51%, rgba(255, 255, 255, 0.60) 89.55%)"
                    boxShadow="0px 20px 48px 0px rgba(1,45,181,0.12)"
                    _before={{
                      content: '""',
                      position: 'absolute',
                      inset: 0,
                      borderRadius: '32px',
                      border: '1.5px solid rgba(255,255,255,0.9)',
                      pointerEvents: 'none',
                    }}
                  >
                    <Box
                      borderRadius="16px"
                      position="relative"
                      mb="12px"
                      h={'180px'}
                      overflow="hidden"
                      display="flex"
                      alignItems="center"
                      justifyContent="center"
                    >
                      {/* 메인 이미지 */}
                      <Image
                        src={card.image}
                        alt={card.title}
                        width={card.imageSize}
                        height={card.imageSize}
                      />
                    </Box>

                    {/* 텍스트 영역 */}
                    <VStack
                      gap="10px"
                      align="stretch"
                      h="116px"
                      justify="center"
                    >
                      <Text
                        textStyle="pre-heading-3"
                        color="grey.10"
                        textAlign="center"
                      >
                        {card.title}
                      </Text>
                      <Text
                        textStyle="pre-body-4"
                        color="grey.10"
                        textAlign="center"
                        h="52px"
                      >
                        {card.description}
                      </Text>
                    </VStack>
                  </Box>
                </GridItem>
              )
            })}
          </Grid>
        : cards.map((card, index) => (
            <BizCard
              key={index}
              title={card.title}
              description={card.description}
              image={card.image}
              rotation={card.rotation}
              finalPosition={card.finalPosition}
              delay={card.delay}
              isInView={inView}
              imageSize={card.imageSize}
            />
          ))
        }
      </HStack>
    </Box>
  )
}
