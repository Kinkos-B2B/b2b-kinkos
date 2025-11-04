'use client'

import Link from 'next/link'

import {
  Box,
  Button,
  Container,
  Heading,
  List,
  Text,
  VStack,
} from '@chakra-ui/react'

import { ROUTES } from '@/constants/routes'

export const CertificationTemplate = () => {
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
            정보보호인증
          </Heading>
          <Text
            textStyle="pre-body-2"
            color="grey.8"
            textAlign="center"
            whiteSpace="pre-line"
          >
            킨코스코리아는 ISO/IEC 27001을 획득하여 국제표준 정보보호 수준으로
            고객 정보를 보호합니다.
          </Text>
        </VStack>

        {/* 내용 */}
        <Box
          bg="background.basic.1"
          borderRadius="16px"
          p={{ base: '24px', lg: '40px' }}
        >
          <VStack gap={{ base: '40px', lg: '56px' }} align="stretch">
            {/* Ⅰ. 킨코스코리아 정보보호 정책 */}
            <VStack gap="24px" align="stretch">
              <Heading
                as="h2"
                color="grey.10"
                textStyle="pre-heading-2"
                fontSize={{ base: '22px', lg: '28px' }}
              >
                Ⅰ. 킨코스코리아 정보보호 정책
              </Heading>
              <Text
                textStyle="pre-body-2"
                color="grey.9"
                lineHeight="1.8"
                whiteSpace="pre-line"
              >
                &quot;새로운 가치 창조&quot;의 경영 철학으로, 킨코스코리아㈜는
                사회 발전에 기여하는 제품과 서비스를 제공하기 위해 최선을 다하고
                있습니다.
              </Text>
              <Text
                textStyle="pre-body-2"
                color="grey.9"
                lineHeight="1.8"
                whiteSpace="pre-line"
              >
                우리는 사업 활동과 관련된 가장 중요한 문제 중 하나인 정보
                보호(기밀성, 무결성, 가용성)를 위하여 최선을 다하고 있습니다.
              </Text>
              <Text
                textStyle="pre-body-2"
                color="grey.9"
                lineHeight="1.8"
                whiteSpace="pre-line"
              >
                정보 보호에 대한 우리의 기본적인 접근 방식은 중요한 정보 자산과
                관련된 위험을 완화하기 위하여 효과적인 조치를 적용하고,
                지속적으로 측정하고 평가하여 개선하는 것입니다.
              </Text>
              <Text
                textStyle="pre-heading-3"
                color="grey.10"
                fontWeight="600"
                lineHeight="1.8"
              >
                &quot;사실 기반 경영&quot;
              </Text>

              <VStack gap="20px" align="stretch" pt="8px">
                <VStack gap="12px" align="stretch">
                  <Text
                    textStyle="pre-heading-3"
                    color="grey.10"
                    fontWeight="600"
                  >
                    1. 정보보호 계획 방향
                  </Text>
                  <Text
                    textStyle="pre-body-2"
                    color="grey.9"
                    lineHeight="1.8"
                    whiteSpace="pre-line"
                  >
                    우리는 사업 활동의 과정에서 정보 자산을 보호하기 위해 우리의
                    의무를 인식하면서 지속적으로 제품과 서비스를 제공하기 위하여
                    노력합니다.
                  </Text>
                </VStack>

                <VStack gap="12px" align="stretch">
                  <Text
                    textStyle="pre-heading-3"
                    color="grey.10"
                    fontWeight="600"
                  >
                    2. 법규 및 기타 요구 사항 준수
                  </Text>
                  <Text
                    textStyle="pre-body-2"
                    color="grey.9"
                    lineHeight="1.8"
                    whiteSpace="pre-line"
                  >
                    우리는 사회적 규범과 회사 내부 기준 및 계약의 보호 의무에
                    관하여 한국과 다른 국가의 법적 요구 사항을 준수합니다.
                  </Text>
                  <Text
                    textStyle="pre-body-2"
                    color="grey.9"
                    lineHeight="1.8"
                    whiteSpace="pre-line"
                  >
                    이것을 기초로 우리는 국제 사회에 의해 만들어진 계약을
                    정당하게 수용합니다.
                  </Text>
                </VStack>

                <VStack gap="12px" align="stretch">
                  <Text
                    textStyle="pre-heading-3"
                    color="grey.10"
                    fontWeight="600"
                  >
                    3. 정보보호 관리 시스템 구축
                  </Text>
                  <Text
                    textStyle="pre-body-2"
                    color="grey.9"
                    lineHeight="1.8"
                    whiteSpace="pre-line"
                  >
                    우리는 위험 환경에서 사업 위험과 변화를 파악하고 대응 전략을
                    적절하게 수립하고 유지하기 위하여 정보보호 관리 시스템을
                    확립합니다.
                  </Text>
                  <Text
                    textStyle="pre-body-2"
                    color="grey.9"
                    lineHeight="1.8"
                    whiteSpace="pre-line"
                  >
                    우리는 정보보호를 위해 목표를 설정하여 시스템을 수정하고
                    추가 개발하고 유지하기 위하여 노력합니다.
                  </Text>
                </VStack>

                <VStack gap="12px" align="stretch">
                  <Text
                    textStyle="pre-heading-3"
                    color="grey.10"
                    fontWeight="600"
                  >
                    4. 위험 관리
                  </Text>
                  <Text
                    textStyle="pre-body-2"
                    color="grey.9"
                    lineHeight="1.8"
                    whiteSpace="pre-line"
                  >
                    제조 업체로서 우리는 개발과 생산에서 판매와 서비스 활동과
                    관련된 위험의 폭넓은 범위를 다룰 것입니다.
                  </Text>
                  <Text
                    textStyle="pre-body-2"
                    color="grey.9"
                    lineHeight="1.8"
                    whiteSpace="pre-line"
                  >
                    우리는 위험 평가를 위해 모든 조직 내부에서 정보보호와 관련된
                    이슈 사항을 수집하고 분석하며, 이러한 평가에 근거하여 위험을
                    관리합니다.
                  </Text>
                </VStack>

                <VStack gap="12px" align="stretch">
                  <Text
                    textStyle="pre-heading-3"
                    color="grey.10"
                    fontWeight="600"
                  >
                    5. 위협으로부터 보호
                  </Text>
                  <Text
                    textStyle="pre-body-2"
                    color="grey.9"
                    lineHeight="1.8"
                    whiteSpace="pre-line"
                  >
                    우리는 사고, 장애요인이나 정보 자산에 대한 부적절한 활동과
                    손실, 손상, 변경, 누설과 같은 위협으로부터 정보 자산을
                    보호하기 위하여 적절한 조치를 취할 것입니다.
                  </Text>
                </VStack>

                <VStack gap="12px" align="stretch">
                  <Text
                    textStyle="pre-heading-3"
                    color="grey.10"
                    fontWeight="600"
                  >
                    6. 정보보호 교육 및 훈련
                  </Text>
                  <Text
                    textStyle="pre-body-2"
                    color="grey.9"
                    lineHeight="1.8"
                    whiteSpace="pre-line"
                  >
                    우리는 모든 직원들에게 필요한 교육을 제공하고, 적절하게 정보
                    자산을 사용하고 관리하는 우리의 사회적 책임을 인식하면서
                    업무를 수행합니다.
                  </Text>
                </VStack>

                <VStack gap="12px" align="stretch">
                  <Text
                    textStyle="pre-heading-3"
                    color="grey.10"
                    fontWeight="600"
                  >
                    7. 지속적인 개선
                  </Text>
                  <Text
                    textStyle="pre-body-2"
                    color="grey.9"
                    lineHeight="1.8"
                    whiteSpace="pre-line"
                  >
                    우리는 지속적으로 정보보호 관리 시스템의 프레임워크 내에서
                    필요에 따라 정기적으로 이 정보보호 정책과 관리 대책을
                    검토하고 개선하기 위해 노력할 것입니다.
                  </Text>
                </VStack>

                <VStack gap="12px" align="stretch">
                  <Text
                    textStyle="pre-heading-3"
                    color="grey.10"
                    fontWeight="600"
                  >
                    8. 고지
                  </Text>
                  <Text
                    textStyle="pre-body-2"
                    color="grey.9"
                    lineHeight="1.8"
                    whiteSpace="pre-line"
                  >
                    우리는 이해관계자들에게 위험을 알리고 이에 대한 책임을 져야
                    합니다. 이 정책은 킨코스코리아㈜의 모든 직원과 협력 업체에게
                    공개될 것입니다.
                  </Text>
                </VStack>
              </VStack>
            </VStack>

            {/* Ⅱ. ISO27001 정보보호 인증 */}
            <VStack gap="24px" align="stretch">
              <Heading
                as="h2"
                color="grey.10"
                textStyle="pre-heading-2"
                fontSize={{ base: '22px', lg: '28px' }}
              >
                Ⅱ. ISO27001 정보보호 인증(ISO/IEC 27001)획득
              </Heading>
              <List.Root paddingLeft="20px">
                <List.Item>
                  <Text
                    textStyle="pre-body-2"
                    color="grey.9"
                    lineHeight="1.8"
                    whiteSpace="pre-line"
                  >
                    ISO27001이란 국제표준화기구(ISO) 및
                    국제전기기술위원회(IEC)가 제정한 정보보호 관리체계에 대한
                    국제인증으로 정보보호 분야에서 가장 권위있는 인증입니다.
                  </Text>
                </List.Item>
                <List.Item>
                  <Text
                    textStyle="pre-body-2"
                    color="grey.9"
                    lineHeight="1.8"
                    whiteSpace="pre-line"
                  >
                    원래는 영국표준(BS, British Standard)이던 BS7799이었으나{' '}
                    <Text as="span" fontWeight="bold">
                      2005년 11월에 ISO 표준으로 승격
                    </Text>
                    됐습니다.
                  </Text>
                </List.Item>
                <List.Item>
                  <Text
                    textStyle="pre-body-2"
                    color="grey.9"
                    lineHeight="1.8"
                    whiteSpace="pre-line"
                  >
                    인증범위는 정보보호정책, 통신 · 운영, 접근통제, 정보
                    보호사고 대응 등 정보보호 관리 14개 영역, 114개 항목에 대해
                    얼마나 잘 계획하고 구현하며, 점검-개선하는가를 평가하고 이에
                    대해 인증을 수여합니다.
                  </Text>
                </List.Item>
              </List.Root>
              <Box pt="8px">
                <Link
                  href="https://www.iso.org/standard/27001"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button colorPalette="primary" size="lg">
                    ISO/IEC 27001 자세히 알아보기
                  </Button>
                </Link>
              </Box>
            </VStack>

            {/* Ⅲ. 보안 제작 지원 센터 */}
            <VStack gap="24px" align="stretch">
              <Heading
                as="h2"
                color="grey.10"
                textStyle="pre-heading-2"
                fontSize={{ base: '22px', lg: '28px' }}
              >
                Ⅲ. 보안 제작 지원 센터
              </Heading>
              <List.Root paddingLeft="20px">
                <List.Item>
                  <Text
                    textStyle="pre-body-2"
                    color="grey.9"
                    lineHeight="1.8"
                    whiteSpace="pre-line"
                  >
                    킨코스 보안 제작 지원 센터는 고객은 물론이고 지정된 킨코스
                    직원 외에는 출입이 불가능한{' '}
                    <Text as="span" fontWeight="bold">
                      폐쇄형 제작 지원 센터
                    </Text>
                    입니다.
                  </Text>
                </List.Item>
                <List.Item>
                  <Text
                    textStyle="pre-body-2"
                    color="grey.9"
                    lineHeight="1.8"
                    whiteSpace="pre-line"
                  >
                    원거리에 위치한 일반적인 공장형 제작 지원 시스템과 달리
                    수도권 지역 중심부에 위치하고 있어 기업 고객님의 대량 작업물
                    요청에 빠르게 대응할 수 있습니다.
                  </Text>
                </List.Item>
              </List.Root>
              <Box pt="8px">
                <Link href={ROUTES.BIZ.IT_SECURITY}>
                  <Button colorPalette="primary" size="lg">
                    보안 제작 지원 센터 자세히 알아보기
                  </Button>
                </Link>
              </Box>
            </VStack>

            {/* Ⅳ. 전 센터 인증 획득 */}
            <VStack gap="24px" align="stretch">
              <Heading
                as="h2"
                color="grey.10"
                textStyle="pre-heading-2"
                fontSize={{ base: '22px', lg: '28px' }}
              >
                Ⅳ. 전 센터 인증 획득
              </Heading>
              <List.Root paddingLeft="20px">
                <List.Item>
                  <Text
                    textStyle="pre-body-2"
                    color="grey.9"
                    lineHeight="1.8"
                    whiteSpace="pre-line"
                  >
                    킨코스코리아는 운영중인{' '}
                    <Text as="span" fontWeight="bold">
                      모든 전국 지점 센터의 Operation Process 전반에 관해
                      ISO27001인증을 획득
                    </Text>
                    하였습니다.
                  </Text>
                </List.Item>
                <List.Item>
                  <Text
                    textStyle="pre-body-2"
                    color="grey.9"
                    lineHeight="1.8"
                    whiteSpace="pre-line"
                  >
                    국제표준 정보보호 인증을 통해 킨코스코리아의 서비스 신뢰도를
                    다시 한번 확보하였고 모든 센터 각 직원들의 높은 수준의 보안
                    표준을 이해하고 준수하며, 고객님의 소중한 자료를 보안 실무
                    프로세스를 통해 다시 한번 보호하고 관리합니다.
                  </Text>
                </List.Item>
              </List.Root>
            </VStack>
          </VStack>
        </Box>
      </VStack>
    </Container>
  )
}
