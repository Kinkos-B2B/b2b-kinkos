import {
  Badge,
  Box,
  Container,
  Flex,
  Image,
  Text,
  VStack,
} from '@chakra-ui/react'

export const ExpertIntroBanner = () => {
  return (
    <Box w={'100%'} px={'40px'}>
      <Box
        w={'100%'}
        bgSize="cover"
        borderRadius="28px"
        bgPos="center"
        bgRepeat="no-repeat"
        bgImage="url('/images/expert/expert-intro-banner-bg.png')"
      >
        <Container maxW="1280px">
          <Box
            position="relative"
            w="100%"
            h={{ md: '480px' }}
            overflow="hidden"
          >
            <Flex
              position="relative"
              h="100%"
              align="center"
              justify="space-between"
              display={{ base: 'none', lg: 'flex' }}
            >
              <VStack align="flex-start" gap="32px" maxW="755px" flex="1">
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
              <Image
                src="/images/expert/expert-intro-banner-icon.png"
                h={'330px'}
              />
            </Flex>
          </Box>
        </Container>
      </Box>
    </Box>
  )
}
