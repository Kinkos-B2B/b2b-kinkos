import {
  Badge,
  Box,
  Button,
  Container,
  Flex,
  HStack,
  IconButton,
  Image,
  Text,
  VStack,
} from '@chakra-ui/react'
import { PlayIcon } from '@phosphor-icons/react/dist/ssr'

//@TODO gif, link modal 처리

export const ProblemSolveIntroBanner = () => {
  return (
    <Box w={'100%'} px={'40px'}>
      <Box
        w={'100%'}
        bgSize="cover"
        borderRadius="28px"
        bgPos="center"
        bgRepeat="no-repeat"
        bgImage="url('/images/problem-solver/problem-intro-banner-bg.png')"
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
                  <Badge bg="accent.violet1" color="accent.violet2" size="lg">
                    전문가 스토리
                  </Badge>
                  <Text
                    textStyle="pre-display-3"
                    color="grey.10"
                    whiteSpace="pre-line"
                  >
                    {`기업인쇄, 혼자 고민하지 마세요\n전문가와 함께 해결하세요!`}
                  </Text>
                </VStack>
                <Text textStyle="pre-heading-3" color="grey.8">
                  인쇄 파트너십 과정에서 겪는 복잡한 문제,{'\n'}전문가의
                  경험으로 고객의 고민을 시원하게 해결합니다.
                </Text>
              </VStack>
              <Image
                src="/images/problem-solver/problem-intro-banner-icon.png"
                h={'330px'}
              />
            </Flex>
          </Box>
        </Container>
      </Box>
    </Box>
  )
}
