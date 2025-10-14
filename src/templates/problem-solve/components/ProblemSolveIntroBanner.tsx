import {
  Badge,
  Box,
  Button,
  Center,
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
    <Box w={'100%'} px={{ base: '0px', lg: '40px' }}>
      <Box
        w={'100%'}
        bgSize="cover"
        borderRadius={{ base: '0px', lg: '28px' }}
        bgPos="center"
        bgRepeat="no-repeat"
        bgImage="url('/images/problem-solver/problem-intro-banner-bg.png')"
        display="flex"
        justifyContent="center"
        alignItems="center"
        px={{ base: '20px', sm: '40px' }}
      >
        <Box
          maxW="1280px"
          position="relative"
          w="100%"
          py={{ base: '60px', sm: '80px', lg: '0px' }}
          overflow="hidden"
          h={{ base: 'auto', lg: '480px' }}
          alignContent={'center'}
        >
          <Box position="relative" w="100%" h={{ lg: '480px' }}>
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
              <Center w={{ base: '100%', lg: 'auto' }}>
                <Image
                  src="/images/problem-solver/problem-intro-banner-icon.png"
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
