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

export const CustomerReviewIntroBanner = () => {
  return (
    <Box w={'100%'} px={'40px'}>
      <Box
        w={'100%'}
        bgSize="cover"
        borderRadius="28px"
        bgPos="center"
        bgRepeat="no-repeat"
        bgImage="url('/images/customer-review/banner-bg.png')"
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
              <VStack align="flex-start" gap="40px" maxW="755px" flex="1">
                <VStack gap="20px" alignItems="flex-start">
                  <Badge bg="secondary.1" color="secondary.4" size="lg">
                    고객스토리
                  </Badge>
                  <Text
                    textStyle="pre-display-3"
                    color="grey.10"
                    whiteSpace="pre-line"
                    lineHeight="1.4"
                  >
                    {`킨코스 솔루션 도입 후\n달라진 점을 직접 확인하세요`}
                  </Text>
                </VStack>
                <Button>
                  <Text>솔루션 보기</Text>
                </Button>
              </VStack>

              {/* 비디오 섹션 */}
              <Box
                position="relative"
                w="586px"
                h="330px"
                borderRadius="28px"
                bg="grey.8"
                display="flex"
                alignItems="center"
                justifyContent="center"
                flexShrink="0"
              >
                <Image
                  src="/images/home/customer-review/company-1.png"
                  alt="고객 후기 비디오"
                  w="100%"
                  h="100%"
                  objectFit="cover"
                  position="absolute"
                  top="0"
                  left="0"
                />
                <IconButton
                  position="relative"
                  zIndex="1"
                  aria-label="비디오 재생"
                  w="60px"
                  h="60px"
                  borderRadius="50%"
                  bg="whitetrnsparent.5"
                  border="none"
                  color="grey.10"
                  transition="all 0.2s"
                >
                  <PlayIcon weight="fill" color={'#9FA4A9'} size={24} />
                </IconButton>
                <Box
                  w="100%"
                  position="absolute"
                  bottom="0px"
                  bg="grey.0"
                  px="32px"
                  py="24px"
                  transform="translateY(50%)"
                  borderRadius="28px"
                  boxShadow="0px 12px 20px 0px rgba(1, 45, 181, 0.05)"
                  display={{ base: 'none', lg: 'flex' }}
                  flexDirection="column"
                  alignItems="flex-start"
                  maxW="400px"
                  gap="12px"
                >
                  <Text>OB맥주</Text>
                  <Text textStyle="pre-heading-5" color="grey.10">
                    OB맥주, 기업 전용 인쇄몰 도입 후 영업 성과 대폭 상승!
                  </Text>
                </Box>
              </Box>
            </Flex>
          </Box>
        </Container>
      </Box>
    </Box>
  )
}
