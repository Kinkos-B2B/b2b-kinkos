import { Box, Flex, Text, VStack } from '@chakra-ui/react'

import Marquee from 'react-fast-marquee'

import { Badge } from '@/components/ui/badge'
import { LAYOUT } from '@/constants/layout'

interface Props {
  badge: string
  title: string
  description: string
  images: string[]
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
      backgroundColor="background.basic.1"
      gap={'60px'}
      h={`calc(100dvh - ${LAYOUT.HEADER.HEIGHT})`}
      overflow={'hidden'}
      pt={{ base: '60px', sm: '70px', lg: '80px' }}
    >
      <Flex
        width="100%"
        paddingX={{ base: '20px', lg: '0' }}
        flexDirection="column"
        gap="24px"
        alignItems="center"
        justifyContent="center"
      >
        <VStack gap="10px" alignItems="center">
          <Badge size="lg" colorPalette="secondary">
            {badge}
          </Badge>
          <Text textStyle="pre-display-3" color="grey.10" textAlign="center">
            {title}
          </Text>
        </VStack>
        <Text
          textStyle="pre-heading-3"
          color="grey.9"
          textAlign="center"
          whiteSpace="pre-line"
        >
          {description}
        </Text>
      </Flex>
      <Flex
        width="100%"
        h={'100%'}
        flex={1}
        flexDirection="column"
        justify={'end'}
        mb={'40px'}
        align={'stretch'}
      >
        <Marquee direction="left" speed={30} gradient={false} autoFill>
          {images.map((image, index) => (
            <Box
              key={index}
              display="flex"
              w={'30vw'}
              maxW={'740px'}
              borderRadius="28px"
              aspectRatio="740 / 500"
              backgroundImage={`url(${image})`}
              backgroundSize="cover"
              backgroundPosition="center"
              backgroundRepeat="no-repeat"
              marginRight={{ base: '20px', lg: '32px' }}
              flexShrink={0}
            />
          ))}
        </Marquee>
      </Flex>
    </VStack>
  )
}
