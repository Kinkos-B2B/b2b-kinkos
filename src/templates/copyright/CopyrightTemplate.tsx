'use client'

import { Box, Container, Heading, Text, VStack } from '@chakra-ui/react'

export const CopyrightTemplate = () => {
  return (
    <Container
      maxW="1280px"
      pt={{ base: '56px', lg: '80px' }}
      pb={{ base: '80px', lg: '120px' }}
      px={{ base: '20px', sm: '40px' }}
    >
      <VStack gap={{ base: '40px', lg: '56px' }} align="stretch">
        {/* 헤더 */}
        <VStack gap={{ base: '16px', lg: '24px' }} align="center">
          <Heading
            as="h1"
            color="grey.10"
            textStyle="pre-display-3"
            textAlign="center"
          >
            저작권 보호 및 이용정책
          </Heading>
        </VStack>

        {/* 내용 */}
        <Box
          bg="background.basic.1"
          borderRadius="16px"
          p={{ base: '24px', lg: '40px' }}
        >
          <VStack gap={{ base: '32px', lg: '40px' }} align="stretch">
            <VStack gap="16px" align="stretch">
              <Text
                textStyle="pre-body-2"
                color="grey.9"
                lineHeight="1.8"
                whiteSpace="pre-line"
              >
                ① 본 사이트에 게시된 모든 콘텐츠(텍스트, 이미지, 디자인, 로고,
                영상, 문서 등)의 저작권은 킨코스코리아㈜(이하 “킨코스”) 또는
                해당 저작권자에게 있으며, 관련 법령에 따라 보호받습니다.
              </Text>
              <Text
                textStyle="pre-body-2"
                color="grey.9"
                lineHeight="1.8"
                whiteSpace="pre-line"
              >
                ②이용자는 킨코스의 사전 서면 동의 없이 본 사이트의 콘텐츠를
                복제, 배포, 전송, 게시하거나 상업적 용도로 사용할 수 없습니다.
              </Text>
              <Text
                textStyle="pre-body-2"
                color="grey.9"
                lineHeight="1.8"
                whiteSpace="pre-line"
              >
                ③사이트 내에 게재된 타 브랜드명, 상표, 로고 등은 각 소유자의
                자산이며, 킨코스는 이를 허가 없이 사용하지 않습니다.
              </Text>
              <Text
                textStyle="pre-body-2"
                color="grey.9"
                lineHeight="1.8"
                whiteSpace="pre-line"
              >
                ④ 이용자가 킨코스에 제공하는 파일·이미지·문구 등은 반드시
                제3자의 저작권을 침해하지 않아야 하며, 그로 인해 발생하는 법적
                책임은 이용자에게 있습니다.
              </Text>
            </VStack>
          </VStack>
        </Box>
      </VStack>
    </Container>
  )
}
