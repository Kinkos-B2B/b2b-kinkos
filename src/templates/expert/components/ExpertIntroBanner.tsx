import { Badge, Box, Center, Flex, Image, Text, VStack } from '@chakra-ui/react'

export const ExpertIntroBanner = () => {
  return (
    <Box w={'100%'} px={{ base: '0px', lg: '40px' }}>
      <Box
        w={'100%'}
        bgSize="cover"
        borderRadius={{ base: '0px', lg: '28px' }}
        bgPos="center"
        bgRepeat="no-repeat"
        bgImage="url('/images/expert/expert-intro-banner-bg.png')"
        display="flex"
        justifyContent="center"
        alignItems="center"
        px={{ base: '20px', sm: '40px' }}
        py={{ base: '60px', sm: '80px', lg: '0px' }}
      >
        <Box
          maxW="1280px"
          position="relative"
          w="100%"
          overflow="hidden"
          h={{ base: 'auto', lg: '480px' }}
          alignContent={'center'}
        >
          <Box position="relative" w="100%">
            <Flex
              position="relative"
              w="100%"
              h="100%"
              justify="space-between"
              align={{ base: 'start', lg: 'center' }}
              flexDirection={{ base: 'column', lg: 'row' }}
              gap={{ base: '56px', sm: '64px', lg: '0px' }}
            >
              <VStack
                align="flex-start"
                gap={{ base: '28px', sm: '32px' }}
                maxW="755px"
                w={{ base: '100%', sm: 'auto' }}
              >
                <VStack gap="20px" alignItems="flex-start">
                  <Badge bg="accent.green1" color="accent.green2" size="lg">
                    전문가
                  </Badge>
                  <Text
                    textStyle="pre-display-3"
                    color="grey.10"
                    whiteSpace="pre-line"
                  >
                    {`킨코스\n 인쇄 전문가를 만나보세요!`}
                  </Text>
                </VStack>
                <Text textStyle="pre-heading-3" color="grey.8">
                  3만여 기업이 선택한 킨코스, 비용과 시간을 절약하는 가장
                  스마트한 솔루션.{'\n'}복잡한 인쇄 절차를 간소화해 효율적인
                  비즈니스를 지원합니다.
                </Text>
              </VStack>
              <Center w={{ base: '100%', lg: 'auto' }}>
                <Image
                  src="/images/expert/expert-intro-banner-icon.png"
                  w={{ base: '100%', sm: '668px', lg: 'auto' }}
                  h={{ base: 'auto', lg: '330px' }}
                />
              </Center>
            </Flex>
          </Box>
        </Box>
      </Box>
    </Box>
  )
}
