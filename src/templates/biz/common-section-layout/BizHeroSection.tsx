import { Box, Flex, Text, VStack } from '@chakra-ui/react'

import Marquee from 'react-fast-marquee'

import { Badge } from '@/components/ui/badge'

interface Props {
  badge: string
  title: string
  description: string
  images: string[]
}

export const mockData = {
  badge: '생산&제작',
  title: '우리의 기술력,\n당신의 성공을 인쇄합니다',
  description:
    '대량부터 소량까지, 킨코스의 첨단 인프라와 스마트한 생산 공정으로\n당신의 비즈니스를 최고 품질로 완성하세요.',
  images: [
    '/images/home/biz/biz-card-1.png',
    '/images/home/biz/biz-card-2.png',
    '/images/home/biz/biz-card-3.png',
    '/images/home/biz/biz-card-4.png',
    '/images/home/biz/biz-card-1.png',
    '/images/home/biz/biz-card-2.png',
    '/images/home/biz/biz-card-3.png',
  ],
}

export const BizHeroSection = ({
  badge,
  title,
  description,
  images,
}: Props) => {
  return (
    <VStack
      width="100%"
      minHeight="100vh"
      backgroundColor="background.basic.1"
      gap="0"
      overflow="hidden"
    >
      {/* Hero Content */}
      <Flex
        width="100%"
        paddingTop={{ base: '120px', md: '170px' }}
        paddingBottom={{ base: '60px', md: '80px' }}
        paddingX={{ base: '20px', md: '0' }}
        flexDirection="column"
        gap="24px"
        alignItems="center"
        justifyContent="center"
      >
        <VStack
          gap="10px"
          alignItems="center"
          width={{ base: '100%', md: '515px' }}
          maxWidth="515px"
        >
          <Badge size="lg" colorPalette="secondary">
            {badge}
          </Badge>
          <Text
            textStyle="pre-display-3"
            color="grey.10"
            textAlign="center"
            whiteSpace="pre-line"
          >
            {title}
          </Text>
        </VStack>
        <Text
          textStyle="pre-heading-3"
          color="grey.9"
          textAlign="center"
          whiteSpace="pre-line"
          maxWidth="515px"
        >
          {description}
        </Text>
      </Flex>

      {/* Image Marquee */}
      <Box
        width="100%"
        height={{ base: '300px', md: '540px' }}
        marginTop="auto"
      >
        <Marquee
          direction="right"
          speed={30}
          gradient={false}
          style={{ height: '100%' }}
        >
          {images.map((image, index) => (
            <Box
              key={index}
              width={{ base: '280px', md: '400px' }}
              height={{ base: '300px', md: '540px' }}
              borderRadius="28px"
              backgroundImage={`url(${image})`}
              backgroundSize="cover"
              backgroundPosition="center"
              backgroundRepeat="no-repeat"
              marginRight="20px"
              flexShrink={0}
            />
          ))}
        </Marquee>
      </Box>
    </VStack>
  )
}
