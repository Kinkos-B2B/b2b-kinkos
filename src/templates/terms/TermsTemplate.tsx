'use client'

import Link from 'next/link'

import {
  Box,
  Link as ChakraLink,
  Container,
  Heading,
  Text,
  VStack,
} from '@chakra-ui/react'

import { ROUTES } from '@/constants/routes'

export const TermsTemplate = () => {
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
            이용약관
          </Heading>
        </VStack>

        {/* 약관 내용 */}
        <Box
          bg="background.basic.1"
          borderRadius="16px"
          p={{ base: '24px', lg: '40px' }}
        >
          <VStack gap={{ base: '32px', lg: '40px' }} align="stretch">
            {/* 제1조 */}
            <VStack gap="16px" align="stretch">
              <Heading
                as="h2"
                color="grey.10"
                textStyle="pre-heading-2"
                fontSize={{ base: '20px', lg: '24px' }}
              >
                제1조(목적)
              </Heading>
              <VStack gap="12px" align="stretch">
                <Text
                  textStyle="pre-body-2"
                  color="grey.9"
                  lineHeight="1.8"
                  whiteSpace="pre-line"
                >
                  본 약관은 킨코스코리아㈜(이하 &quot;킨코스&quot;)가 운영하는
                  웹사이트 &apos;킨코스 B2B 사이트&apos;(이하
                  &quot;사이트&quot;)의 이용과 관련하여 킨코스와 이용자 간의
                  권리, 의무 및 책임사항을 규정함을 목적으로 합니다.
                </Text>
                <Text
                  textStyle="pre-body-2"
                  color="grey.9"
                  lineHeight="1.8"
                  whiteSpace="pre-line"
                >
                  이 사이트는 킨코스의 서비스·솔루션 정보를 제공하고 상담·문의
                  접수를 위한 기업 고객 전용 정보 서비스입니다.
                </Text>
              </VStack>
            </VStack>

            {/* 제2조 */}
            <VStack gap="16px" align="stretch">
              <Heading
                as="h2"
                color="grey.10"
                textStyle="pre-heading-2"
                fontSize={{ base: '20px', lg: '24px' }}
              >
                제2조(용어의 정의)
              </Heading>
              <VStack gap="12px" align="stretch">
                <Text
                  textStyle="pre-body-2"
                  color="grey.9"
                  lineHeight="1.8"
                  whiteSpace="pre-line"
                >
                  ① &quot;사이트&quot;란 킨코스가 운영하는 웹사이트로서, 기업
                  고객을 대상으로 킨코스의 서비스·솔루션을 소개하고 상담 문의를
                  접수받기 위해 구축된 온라인 공간을 말합니다.
                </Text>
                <Text
                  textStyle="pre-body-2"
                  color="grey.9"
                  lineHeight="1.8"
                  whiteSpace="pre-line"
                >
                  ② &quot;이용자&quot;란 사이트에 접속하여 본 약관에 따라
                  사이트를 이용하는 모든 방문자를 말합니다.
                </Text>
                <Text
                  textStyle="pre-body-2"
                  color="grey.9"
                  lineHeight="1.8"
                  whiteSpace="pre-line"
                >
                  ③ &quot;상담 신청자&quot;란 사이트 내 상담·문의 양식을 통해
                  연락처 및 정보를 입력한 개인 또는 법인을 의미합니다.
                </Text>
              </VStack>
            </VStack>

            {/* 제3조 */}
            <VStack gap="16px" align="stretch">
              <Heading
                as="h2"
                color="grey.10"
                textStyle="pre-heading-2"
                fontSize={{ base: '20px', lg: '24px' }}
              >
                제3조(약관의 효력 및 변경)
              </Heading>
              <VStack gap="12px" align="stretch">
                <Text
                  textStyle="pre-body-2"
                  color="grey.9"
                  lineHeight="1.8"
                  whiteSpace="pre-line"
                >
                  ① 본 약관은 사이트 초기 화면 또는 연결 화면에 게시함으로써
                  효력이 발생합니다.
                </Text>
                <Text
                  textStyle="pre-body-2"
                  color="grey.9"
                  lineHeight="1.8"
                  whiteSpace="pre-line"
                >
                  ② 킨코스는 관련 법령을 위반하지 않는 범위 내에서 약관을 개정할
                  수 있으며, 개정 시 개정 내용 및 시행일자를 명시하여
                  공지합니다.
                </Text>
                <Text
                  textStyle="pre-body-2"
                  color="grey.9"
                  lineHeight="1.8"
                  whiteSpace="pre-line"
                >
                  ③ 이용자는 개정된 약관이 게시된 이후에도 사이트를 계속
                  이용함으로써 변경된 약관에 동의한 것으로 봅니다.
                </Text>
              </VStack>
            </VStack>

            {/* 제4조 */}
            <VStack gap="16px" align="stretch">
              <Heading
                as="h2"
                color="grey.10"
                textStyle="pre-heading-2"
                fontSize={{ base: '20px', lg: '24px' }}
              >
                제4조(사이트의 이용)
              </Heading>
              <VStack gap="12px" align="stretch">
                <Text
                  textStyle="pre-body-2"
                  color="grey.9"
                  lineHeight="1.8"
                  whiteSpace="pre-line"
                >
                  ① 사이트는 24시간 이용 가능함을 원칙으로 하나, 시스템
                  점검·보수·천재지변 등의 사유로 서비스 제공이 일시 중단될 수
                  있습니다.
                </Text>
                <Text
                  textStyle="pre-body-2"
                  color="grey.9"
                  lineHeight="1.8"
                  whiteSpace="pre-line"
                >
                  ② 킨코스는 사이트 내 콘텐츠의 정확성, 완전성, 최신성을
                  유지하기 위해 노력하나, 그 내용의 오류나 누락에 대해 법적으로
                  보증하지 않습니다.
                </Text>
                <Text
                  textStyle="pre-body-2"
                  color="grey.9"
                  lineHeight="1.8"
                  whiteSpace="pre-line"
                >
                  ③ 사이트 이용은 비상업적·정보 탐색 목적에 한하며, 킨코스의
                  사전 허락 없이 자료를 복제, 배포, 전송, 변경, 판매, 게시할 수
                  없습니다.
                </Text>
              </VStack>
            </VStack>

            {/* 제5조 */}
            <VStack gap="16px" align="stretch">
              <Heading
                as="h2"
                color="grey.10"
                textStyle="pre-heading-2"
                fontSize={{ base: '20px', lg: '24px' }}
              >
                제5조(상담 및 문의 접수)
              </Heading>
              <VStack gap="12px" align="stretch">
                <Text
                  textStyle="pre-body-2"
                  color="grey.9"
                  lineHeight="1.8"
                  whiteSpace="pre-line"
                >
                  ① 이용자는 사이트 내 상담 신청 또는 문의 양식을 통해 연락처,
                  회사명, 담당자명 등 기본 정보를 제공할 수 있습니다.
                </Text>
                <Text
                  textStyle="pre-body-2"
                  color="grey.9"
                  lineHeight="1.8"
                  whiteSpace="pre-line"
                >
                  ② 킨코스는 상담 목적 외의 용도로 제공받은 정보를 이용하지
                  않으며, 개인정보 처리와 관련된 사항은 별도의{' '}
                  <ChakraLink
                    as={Link}
                    href={ROUTES.PRIVACY}
                    color="primary.9"
                    textDecoration="underline"
                    _hover={{ color: 'primary.10' }}
                  >
                    개인정보처리방침
                  </ChakraLink>
                  에 따릅니다.
                </Text>
                <Text
                  textStyle="pre-body-2"
                  color="grey.9"
                  lineHeight="1.8"
                  whiteSpace="pre-line"
                >
                  ③ 허위 정보나 타인의 정보를 무단으로 사용하는 경우, 상담
                  제공이 제한될 수 있습니다.
                </Text>
              </VStack>
            </VStack>

            {/* 제6조 */}
            <VStack gap="16px" align="stretch">
              <Heading
                as="h2"
                color="grey.10"
                textStyle="pre-heading-2"
                fontSize={{ base: '20px', lg: '24px' }}
              >
                제6조(지식재산권)
              </Heading>
              <VStack gap="12px" align="stretch">
                <Text
                  textStyle="pre-body-2"
                  color="grey.9"
                  lineHeight="1.8"
                  whiteSpace="pre-line"
                >
                  ① 사이트에 게시된 모든 콘텐츠(텍스트, 이미지, 디자인, 로고,
                  영상, 자료 등)의 저작권은 킨코스 또는 해당 저작권자에게
                  귀속됩니다.
                </Text>
                <Text
                  textStyle="pre-body-2"
                  color="grey.9"
                  lineHeight="1.8"
                  whiteSpace="pre-line"
                >
                  ② 이용자는 킨코스의 사전 서면 동의 없이 사이트 콘텐츠를
                  상업적으로 복제·배포·전송·출판·2차 저작물로 제작할 수
                  없습니다.
                </Text>
                <Text
                  textStyle="pre-body-2"
                  color="grey.9"
                  lineHeight="1.8"
                  whiteSpace="pre-line"
                >
                  ③ 킨코스 명칭, 상표, 로고 등은 상표법 및 관련 법률에 의해
                  보호되며, 무단 사용을 금합니다.
                </Text>
              </VStack>
            </VStack>

            {/* 제7조 */}
            <VStack gap="16px" align="stretch">
              <Heading
                as="h2"
                color="grey.10"
                textStyle="pre-heading-2"
                fontSize={{ base: '20px', lg: '24px' }}
              >
                제7조(면책사항)
              </Heading>
              <VStack gap="12px" align="stretch">
                <Text
                  textStyle="pre-body-2"
                  color="grey.9"
                  lineHeight="1.8"
                  whiteSpace="pre-line"
                >
                  ① 사이트 내 게시된 외부 링크나 자료는 이용자의 편의를 위한
                  것이며, 그 내용의 진위나 안전성에 대해 킨코스가 보증하지
                  않습니다.
                </Text>
                <Text
                  textStyle="pre-body-2"
                  color="grey.9"
                  lineHeight="1.8"
                  whiteSpace="pre-line"
                >
                  ② 이용자가 게시물이나 자료를 다운로드 하거나 활용할 수
                  없습니다.
                </Text>
              </VStack>
            </VStack>

            {/* 제8조 */}
            <VStack gap="16px" align="stretch">
              <Heading
                as="h2"
                color="grey.10"
                textStyle="pre-heading-2"
                fontSize={{ base: '20px', lg: '24px' }}
              >
                제8조(이용자의 의무)
              </Heading>
              <VStack gap="12px" align="stretch">
                <Text
                  textStyle="pre-body-2"
                  color="grey.9"
                  lineHeight="1.8"
                  whiteSpace="pre-line"
                >
                  이용자는 다음 행위를 하여서는 아니 됩니다.
                </Text>
                <Text
                  textStyle="pre-body-2"
                  color="grey.9"
                  lineHeight="1.8"
                  whiteSpace="pre-line"
                >
                  ① 타인의 명의 또는 정보를 도용하는 행위
                </Text>
                <Text
                  textStyle="pre-body-2"
                  color="grey.9"
                  lineHeight="1.8"
                  whiteSpace="pre-line"
                >
                  ② 허위 정보 입력, 악성 코드 전송, 시스템 접근 시도 등 사이트
                  운영을 방해하는 행위
                </Text>
                <Text
                  textStyle="pre-body-2"
                  color="grey.9"
                  lineHeight="1.8"
                  whiteSpace="pre-line"
                >
                  ③ 킨코스 또는 제3자의 저작권, 상표권 등 지식재산권을 침해하는
                  행위
                </Text>
                <Text
                  textStyle="pre-body-2"
                  color="grey.9"
                  lineHeight="1.8"
                  whiteSpace="pre-line"
                >
                  ④ 법령 또는 본 약관이 금지하거나 공공질서에 반하는 행위
                </Text>
              </VStack>
            </VStack>

            {/* 제9조 */}
            <VStack gap="16px" align="stretch">
              <Heading
                as="h2"
                color="grey.10"
                textStyle="pre-heading-2"
                fontSize={{ base: '20px', lg: '24px' }}
              >
                제9조(개인정보 보호)
              </Heading>
              <Text
                textStyle="pre-body-2"
                color="grey.9"
                lineHeight="1.8"
                whiteSpace="pre-line"
              >
                킨코스는 사이트 운영 및 상담 제공과 관련하여 수집된 개인정보를
                「개인정보 보호법」 등 관련 법령에 따라 보호하며, 구체적인
                내용은 별도의{' '}
                <ChakraLink
                  as={Link}
                  href={ROUTES.PRIVACY}
                  color="primary.9"
                  textDecoration="underline"
                  _hover={{ color: 'primary.10' }}
                >
                  개인정보처리방침
                </ChakraLink>
                을 따릅니다.
              </Text>
            </VStack>

            {/* 제10조 */}
            <VStack gap="16px" align="stretch">
              <Heading
                as="h2"
                color="grey.10"
                textStyle="pre-heading-2"
                fontSize={{ base: '20px', lg: '24px' }}
              >
                제10조(준거법 및 관할)
              </Heading>
              <Text
                textStyle="pre-body-2"
                color="grey.9"
                lineHeight="1.8"
                whiteSpace="pre-line"
              >
                본 약관은 대한민국 법령에 따르며, 사이트 이용과 관련하여 분쟁이
                발생할 경우 킨코스 본사가 소재한 지역의 관할 법원을 제1심
                전속관할로 합니다.
              </Text>
            </VStack>

            {/* 부칙 */}
            <VStack gap="16px" align="stretch" pt="16px">
              <Heading
                as="h2"
                color="grey.10"
                textStyle="pre-heading-2"
                fontSize={{ base: '20px', lg: '24px' }}
              >
                부칙
              </Heading>
              <Text
                textStyle="pre-body-2"
                color="grey.9"
                lineHeight="1.8"
                whiteSpace="pre-line"
              >
                본 약관은 2025년 12월 01일부터 시행합니다.
              </Text>
            </VStack>
          </VStack>
        </Box>
      </VStack>
    </Container>
  )
}
