import { Box, Flex, Text, VStack } from '@chakra-ui/react'

import Marquee from 'react-fast-marquee'

import { Badge } from '@/components/ui/badge'

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
      gap={'0px'}
      // position="fixed"
      // top="90px"
      h={'calc(100vh - 90px)'}
      pt={'80px'}
    >
      <Flex
        width="100%"
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
      <Flex
        width="100%"
        h={'100%'}
        flex={1}
        flexDirection="column"
        justify={'end'}
        align={'stretch'}
      >
        <Marquee direction="right" speed={30} gradient={false}>
          {images.map((image, index) => (
            <Box
              aspectRatio="400 / 540"
              key={index}
              borderRadius="28px"
              w={'300px'}
              backgroundImage={`url(${image})`}
              backgroundSize="cover"
              backgroundPosition="center"
              backgroundRepeat="no-repeat"
              marginRight="20px"
              flexShrink={0}
            />
          ))}
        </Marquee>
      </Flex>
    </VStack>
  )
}
