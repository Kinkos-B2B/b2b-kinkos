'use client'

import { Box, Container, Heading, Link, Text, VStack } from '@chakra-ui/react'

export const PrivacyTemplate = () => {
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
            개인정보처리방침
          </Heading>
        </VStack>

        {/* 약관 내용 */}
        <Box
          bg="background.basic.1"
          borderRadius="16px"
          p={{ base: '24px', lg: '40px' }}
        >
          <VStack gap={{ base: '32px', lg: '40px' }} align="stretch">
            {/* 총칙 */}
            <VStack gap="16px" align="stretch">
              <Heading
                as="h2"
                color="grey.10"
                textStyle="pre-heading-2"
                fontSize={{ base: '20px', lg: '24px' }}
              >
                총칙
              </Heading>
              <Text
                textStyle="pre-body-2"
                color="grey.9"
                lineHeight="1.8"
                whiteSpace="pre-line"
              >
                킨코스코리아㈜(이하 &quot;킨코스&quot;)는 「개인정보 보호법」 등
                관련 법령을 준수하며, &apos;킨코스 B2B 사이트&apos;(상담 신청
                중심의 킨코스 서비스 정보 제공 웹사이트, 이하
                &quot;사이트&quot;) 이용 과정에서 처리되는 개인정보를 안전하게
                보호하기 위해 다음과 같이 개인정보처리방침을 운영합니다. 본
                방침은 웹사이트에 상시 공개합니다.
              </Text>
            </VStack>

            {/* 제1조 */}
            <VStack gap="16px" align="stretch">
              <Heading
                as="h2"
                color="grey.10"
                textStyle="pre-heading-2"
                fontSize={{ base: '20px', lg: '24px' }}
              >
                제1조(개인 정보의 처리 목적)
              </Heading>
              <VStack gap="12px" align="stretch">
                <Text
                  textStyle="pre-body-2"
                  color="grey.9"
                  lineHeight="1.8"
                  whiteSpace="pre-line"
                >
                  킨코스는 다음의 목적을 위하여 개인정보를 처리합니다. 처리
                  목적이 변경되는 경우에는 법령에 따라 별도 고지·동의를
                  받습니다.
                </Text>
                <Text
                  textStyle="pre-body-2"
                  color="grey.9"
                  lineHeight="1.8"
                  whiteSpace="pre-line"
                >
                  ①상담/문의 접수 및 응대
                </Text>
                <Box pl="16px">
                  <Text
                    textStyle="pre-body-2"
                    color="grey.9"
                    lineHeight="1.8"
                    whiteSpace="pre-line"
                  >
                    - 기업 고객 상담 요청 확인, 추가 질문 및 답변, 견적·제안서
                    제공, 방문(공장/센터) 일정 협의
                  </Text>
                </Box>
                <Text
                  textStyle="pre-body-2"
                  color="grey.9"
                  lineHeight="1.8"
                  whiteSpace="pre-line"
                >
                  ②고객 관리
                </Text>
                <Box pl="16px">
                  <Text
                    textStyle="pre-body-2"
                    color="grey.9"
                    lineHeight="1.8"
                    whiteSpace="pre-line"
                  >
                    - 상담 이력 관리, 재문의 대응, 품질 개선 및 서비스
                    고도화(내부 분석·통계)
                  </Text>
                </Box>
                <Text
                  textStyle="pre-body-2"
                  color="grey.9"
                  lineHeight="1.8"
                  whiteSpace="pre-line"
                >
                  ③마케팅 정보 제공
                </Text>
                <Box pl="16px">
                  <Text
                    textStyle="pre-body-2"
                    color="grey.9"
                    lineHeight="1.8"
                    whiteSpace="pre-line"
                  >
                    - 뉴스레터, 세미나/행사 초청, 서비스 업데이트 소식 안내(사전
                    동의자에 한함)
                  </Text>
                </Box>
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
                제2조(수집 항목 및 수집 방법)
              </Heading>
              <VStack gap="12px" align="stretch">
                <Text
                  textStyle="pre-body-2"
                  color="grey.9"
                  lineHeight="1.8"
                  whiteSpace="pre-line"
                >
                  킨코스는 상담/문의 접수 및 응대를 위해 아래와 같은 개인 정보를
                  수집하고 있습니다.
                </Text>
                <Text
                  textStyle="pre-body-2"
                  color="grey.9"
                  lineHeight="1.8"
                  whiteSpace="pre-line"
                >
                  ①수집 항목
                </Text>
                <Box pl="16px">
                  <Text
                    textStyle="pre-body-2"
                    color="grey.9"
                    lineHeight="1.8"
                    whiteSpace="pre-line"
                  >
                    - 필수: 회사명, 성명, 직책, 연락처(휴대전화 또는 유선),
                    이메일 주소, 의뢰 제목, 의뢰 서비스, 의뢰 내용(예산/기간 등
                    추가 정보)
                  </Text>
                  <Text
                    textStyle="pre-body-2"
                    color="grey.9"
                    lineHeight="1.8"
                    whiteSpace="pre-line"
                  >
                    - 선택: 공장/센터 관람 희망 여부
                  </Text>
                </Box>
                <Text
                  textStyle="pre-body-2"
                  color="grey.9"
                  lineHeight="1.8"
                  whiteSpace="pre-line"
                >
                  ②수집 방법
                </Text>
                <Box pl="16px">
                  <Text
                    textStyle="pre-body-2"
                    color="grey.9"
                    lineHeight="1.8"
                    whiteSpace="pre-line"
                  >
                    - 사이트의 상담 신청 폼 제출(예: 외부 양식 플랫폼 연결
                    포함), 유선/이메일/메신저 문의, 이벤트·세미나·행사 참가 등록
                    등
                  </Text>
                </Box>
                <Text
                  textStyle="pre-body-2"
                  color="grey.9"
                  lineHeight="1.8"
                  whiteSpace="pre-line"
                >
                  ③온라인 맞춤형 광고
                </Text>
                <Box pl="16px">
                  <Text
                    textStyle="pre-body-2"
                    color="grey.9"
                    lineHeight="1.8"
                    whiteSpace="pre-line"
                  >
                    - 다음과 같이 온라인 맞춤형 광고 사업자가 행태정보를
                    수집하도록 허용하고 있습니다.
                  </Text>
                  <Text
                    textStyle="pre-body-2"
                    color="grey.9"
                    lineHeight="1.8"
                    whiteSpace="pre-line"
                  >
                    1) 행태정보를 수집 및 처리하려는 광고 사업자: 구글,
                    페이스북, 네이버, 카카오
                  </Text>
                  <Text
                    textStyle="pre-body-2"
                    color="grey.9"
                    lineHeight="1.8"
                    whiteSpace="pre-line"
                  >
                    2) 행태정보 수집 방법: 이용자가 당사 웹사이트를 방문하거나
                    문의를 접수할 때 자동 수집 및 전송
                  </Text>
                </Box>
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
                제3조(수집한 개인 정보의 처리위탁)
              </Heading>
              <VStack gap="12px" align="stretch">
                <Text
                  textStyle="pre-body-2"
                  color="grey.9"
                  lineHeight="1.8"
                  whiteSpace="pre-line"
                >
                  킨코스는 아래와 같이 귀하의 개인 정보를 외부 전문업체에
                  위탁하여 운영하고 있으며, 관련 법령에 따라 위탁 계약 시 개인
                  정보가 안전하게 관리될 수 있도록 필요한 사항을 규정하고
                  있습니다. 또한 업무위탁에 필요한 정보는 당해 목적을 달성하기
                  위하여 필요한 최소한의 정보에 국한됩니다.
                </Text>
                <Box
                  overflowX="auto"
                  w="full"
                  border="1px solid"
                  borderColor="border.basic.1"
                  borderRadius="8px"
                >
                  <Box as="table" w="full" minW="600px">
                    <Box as="thead" bg="grey.1">
                      <Box as="tr">
                        <Box
                          as="th"
                          p="12px"
                          textAlign="left"
                          borderBottom="1px solid"
                          borderColor="border.basic.1"
                          textStyle="pre-body-2"
                          color="grey.10"
                          fontWeight="600"
                        >
                          위탁업무
                        </Box>
                        <Box
                          as="th"
                          p="12px"
                          textAlign="left"
                          borderBottom="1px solid"
                          borderColor="border.basic.1"
                          textStyle="pre-body-2"
                          color="grey.10"
                          fontWeight="600"
                        >
                          위탁사
                        </Box>
                        <Box
                          as="th"
                          p="12px"
                          textAlign="left"
                          borderBottom="1px solid"
                          borderColor="border.basic.1"
                          textStyle="pre-body-2"
                          color="grey.10"
                          fontWeight="600"
                        >
                          위탁의 범위
                        </Box>
                        <Box
                          as="th"
                          p="12px"
                          textAlign="left"
                          borderBottom="1px solid"
                          borderColor="border.basic.1"
                          textStyle="pre-body-2"
                          color="grey.10"
                          fontWeight="600"
                        >
                          공유되는 정보
                        </Box>
                      </Box>
                    </Box>
                    <Box as="tbody">
                      <Box as="tr">
                        <Box
                          as="td"
                          p="12px"
                          borderBottom="1px solid"
                          borderColor="border.basic.1"
                          textStyle="pre-body-2"
                          color="grey.9"
                        >
                          사이트 유지보수
                        </Box>
                        <Box
                          as="td"
                          p="12px"
                          borderBottom="1px solid"
                          borderColor="border.basic.1"
                          textStyle="pre-body-2"
                          color="grey.9"
                        >
                          주식회사 똑똑한개발자
                        </Box>
                        <Box
                          as="td"
                          p="12px"
                          borderBottom="1px solid"
                          borderColor="border.basic.1"
                          textStyle="pre-body-2"
                          color="grey.9"
                        >
                          사이트 관리, 서버 유지보수
                        </Box>
                        <Box
                          as="td"
                          p="12px"
                          borderBottom="1px solid"
                          borderColor="border.basic.1"
                          textStyle="pre-body-2"
                          color="grey.9"
                        >
                          사이트 이용 고객 정보(성명, 회사명, 직책, 연락처,
                          이메일 등)
                        </Box>
                      </Box>
                      <Box as="tr">
                        <Box
                          as="td"
                          p="12px"
                          borderBottom="1px solid"
                          borderColor="border.basic.1"
                          textStyle="pre-body-2"
                          color="grey.9"
                        >
                          CRM 운영(상담 관리, 고객관리 시스템)
                        </Box>
                        <Box
                          as="td"
                          p="12px"
                          borderBottom="1px solid"
                          borderColor="border.basic.1"
                          textStyle="pre-body-2"
                          color="grey.9"
                        >
                          주식회사 똑똑한개발자 (서비스명: 플러그, PLUUUG)
                        </Box>
                        <Box
                          as="td"
                          p="12px"
                          borderBottom="1px solid"
                          borderColor="border.basic.1"
                          textStyle="pre-body-2"
                          color="grey.9"
                        >
                          상담 데이터 및 이력 관리 등
                        </Box>
                        <Box
                          as="td"
                          p="12px"
                          borderBottom="1px solid"
                          borderColor="border.basic.1"
                          textStyle="pre-body-2"
                          color="grey.9"
                        >
                          상담 신청자 기본 정보(성명, 회사명, 직책, 연락처,
                          이메일, 상담 내용 등)
                        </Box>
                      </Box>
                    </Box>
                  </Box>
                </Box>
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
                제4조(개인 정보의 제3자 제공 및 공유)
              </Heading>
              <VStack gap="12px" align="stretch">
                <Text
                  textStyle="pre-body-2"
                  color="grey.9"
                  lineHeight="1.8"
                  whiteSpace="pre-line"
                >
                  킨코스는 귀하의 개인 정보를 「제3조 수집한 개인 정보의
                  처리위탁」에서 고지한 범위 내에서 사용하며, 동 범위를 초과하여
                  이용하거나 타인 또는 타기업, 기관에 제공하지 않습니다. 다만,
                  다음의 경우에는 예외로 합니다.
                </Text>
                <Text
                  textStyle="pre-body-2"
                  color="grey.9"
                  lineHeight="1.8"
                  whiteSpace="pre-line"
                >
                  ①이용자들이 사전에 동의한 경우
                </Text>
                <Text
                  textStyle="pre-body-2"
                  color="grey.9"
                  lineHeight="1.8"
                  whiteSpace="pre-line"
                >
                  ②법령의 규정에 의거하거나, 수사 목적으로 법령에 정해진 절차와
                  방법에 따라 수사기관의 요구가 있는 경우
                </Text>
                <Text
                  textStyle="pre-body-2"
                  color="grey.9"
                  lineHeight="1.8"
                  whiteSpace="pre-line"
                >
                  ③제휴 관계: 보다 나은 서비스 제공을 위하여 귀하의 개인 정보를
                  제휴사에게 위탁하거나 또는 제휴사와 공유할 수 있습니다.
                </Text>
                <Text
                  textStyle="pre-body-2"
                  color="grey.9"
                  lineHeight="1.8"
                  whiteSpace="pre-line"
                >
                  ④개인 정보를 제공하거나 공유할 경우에는 사전에 귀하께 제휴사가
                  누구인지, 제공 또는 공유되는 개인 정보항목이 무엇인지, 왜
                  그러한 개인 정보가 제공되거나 공유되어야 하는지, 그리고
                  언제까지 어떻게 보호ㆍ관리되는지에 대해 개별적으로 전자우편 및
                  서면을 통해 고지하여 동의를 구하는 절차를 거치게 되며,
                  귀하께서 동의하지 않는 경우에는 제휴사에게 제공하거나 제휴사와
                  공유하지 않습니다.
                </Text>
                <Text
                  textStyle="pre-body-2"
                  color="grey.9"
                  lineHeight="1.8"
                  whiteSpace="pre-line"
                >
                  ⑤제휴관계에 변화가 있거나 제휴관계가 종결될 때에는 사이트를
                  통해 사실을 공지하고 전자메일을 통해 통보하여 드리도록
                  하겠습니다.
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
                제5조(개인 정보 처리 방침)
              </Heading>
              <VStack gap="12px" align="stretch">
                <Text
                  textStyle="pre-body-2"
                  color="grey.9"
                  lineHeight="1.8"
                  whiteSpace="pre-line"
                >
                  ①개인정보란 생존하는 개인에 관한 정보로서 당해 정보에 포함되어
                  있는 성명, 주민등록번호 등의 사항에 의하여 당해 개인을 식별할
                  수 있는 정보(당해 정보만으로는 특정 개인을 식별할 수 없더라도
                  다른 정보와 용이하게 결합하여 식별할 수 있는 것을
                  포함합니다.)를 말합니다. 킨코스는 귀하의 개인정보보호를 매우
                  중요시하며, 『정보통신망 이용 촉진 및 정보보호 등에 관한
                  법률』 및 『개인정보보호법』을 준수하고 있습니다.
                </Text>
                <Text
                  textStyle="pre-body-2"
                  color="grey.9"
                  lineHeight="1.8"
                  whiteSpace="pre-line"
                >
                  ②킨코스는 개인정보처리방침을 통하여 귀하께서 제공하시는 개인
                  정보가 어떠한 용도와 방식으로 이용되고 있으며, 개인 정보보호를
                  위해 어떠한 조치가 취해지고 있는지 알려드립니다.
                </Text>
                <Text
                  textStyle="pre-body-2"
                  color="grey.9"
                  lineHeight="1.8"
                  whiteSpace="pre-line"
                >
                  ③킨코스는 개인정보처리방침의 지속적인 개선을 위하여
                  개인정보처리방침을 개정하는데 필요한 절차를 정하고 있습니다.
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
                제6조(개인 정보의 보유기간 및 이용기간)
              </Heading>
              <VStack gap="12px" align="stretch">
                <Text
                  textStyle="pre-body-2"
                  color="grey.9"
                  lineHeight="1.8"
                  whiteSpace="pre-line"
                >
                  킨코스는 원칙적으로 개인 정보 수집 및 이용 목적이 달성된
                  후에는 해당 정보를 지체 없이 파기합니다. 단, 상법 등 관련
                  법령의 규정에 의하여 다음과 같이 거래 관련 권리 의무 관계의
                  확인 등을 이유로 일정기간 보유하여야 할 필요가 있을 경우에는
                  일정기간 보유합니다.
                </Text>
                <Text
                  textStyle="pre-body-2"
                  color="grey.9"
                  lineHeight="1.8"
                  whiteSpace="pre-line"
                >
                  ①상담/문의 내역 기록 보관: 접수일로부터 1년
                </Text>
                <Text
                  textStyle="pre-body-2"
                  color="grey.9"
                  lineHeight="1.8"
                  whiteSpace="pre-line"
                >
                  ②마케팅 수신 동의 이력: 철회 시까지(철회 즉시 삭제)
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
                제7조(개인 정보의 파기절차 및 방법)
              </Heading>
              <VStack gap="12px" align="stretch">
                <Text
                  textStyle="pre-body-2"
                  color="grey.9"
                  lineHeight="1.8"
                  whiteSpace="pre-line"
                >
                  킨코스는 원칙적으로 개인 정보 수집 및 이용 목적이 달성된
                  후에는 해당 정보를 지체 없이 파기합니다. 파기절차 및 방법은
                  다음과 같습니다.
                </Text>
                <Text
                  textStyle="pre-body-2"
                  color="grey.9"
                  lineHeight="1.8"
                  whiteSpace="pre-line"
                >
                  ①파기절차
                </Text>
                <Box pl="16px">
                  <Text
                    textStyle="pre-body-2"
                    color="grey.9"
                    lineHeight="1.8"
                    whiteSpace="pre-line"
                  >
                    - 목적 달성 후 별도 분리 보관(법령상 보관 필요 시)에 이어
                    지체 없이 파기합니다. 분리 보관된 정보는 법령상 보관 목적
                    외로 이용하지 않습니다.
                  </Text>
                </Box>
                <Text
                  textStyle="pre-body-2"
                  color="grey.9"
                  lineHeight="1.8"
                  whiteSpace="pre-line"
                >
                  ②파기방법
                </Text>
                <Box pl="16px">
                  <Text
                    textStyle="pre-body-2"
                    color="grey.9"
                    lineHeight="1.8"
                    whiteSpace="pre-line"
                  >
                    - 전자적 파일: 복구·재생이 불가능한 기술적 방법으로 삭제
                  </Text>
                  <Text
                    textStyle="pre-body-2"
                    color="grey.9"
                    lineHeight="1.8"
                    whiteSpace="pre-line"
                  >
                    - 종이 출력물: 분쇄 또는 소각
                  </Text>
                </Box>
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
                제8조(이용자 및 법정대리인의 권리와 그 행사방법)
              </Heading>
              <VStack gap="12px" align="stretch">
                <Text
                  textStyle="pre-body-2"
                  color="grey.9"
                  lineHeight="1.8"
                  whiteSpace="pre-line"
                >
                  ①이용자는 언제든지 자신의 개인정보에 대한
                  열람·정정·삭제·처리정지 요구 및 수신동의 철회를 할 수
                  있습니다.
                </Text>
                <Text
                  textStyle="pre-body-2"
                  color="grey.9"
                  lineHeight="1.8"
                  whiteSpace="pre-line"
                >
                  ②권리 행사는 서면, 이메일, 유선 등으로 요청할 수 있으며
                  킨코스는 법령에 따라 지체 없이 조치합니다.
                </Text>
                <Text
                  textStyle="pre-body-2"
                  color="grey.9"
                  lineHeight="1.8"
                  whiteSpace="pre-line"
                >
                  ③대리인을 통하여 권리를 행사할 경우 &apos;개인정보 처리 방법에
                  관한 고시&apos; 소정의 위임장 등 증빙을 제출하셔야 합니다.
                </Text>
                <Text
                  textStyle="pre-body-2"
                  color="grey.9"
                  lineHeight="1.8"
                  whiteSpace="pre-line"
                >
                  ④킨코스는 만 14세 미만 아동의 개인정보를 고의로 수집하지
                  않으며, 아동이 상담을 요청하는 경우에는 법정대리인의 동의를
                  받습니다.
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
                제9조(개인 정보 자동 수집 장치의 설치, 운영 및 그 거부에 관한
                사항)
              </Heading>
              <VStack gap="12px" align="stretch">
                <Text
                  textStyle="pre-body-2"
                  color="grey.9"
                  lineHeight="1.8"
                  whiteSpace="pre-line"
                >
                  킨코스는 귀하의 정보를 수시로 저장하고 찾아내는 쿠키 등을
                  운용합니다. 쿠키란 웹사이트를 운영하는데 이용되는 서버가
                  귀하의 브라우저에 보내는 아주 작은 텍스트 파일로서 귀하의
                  컴퓨터 하드디스크에 저장됩니다.
                </Text>
                <Text
                  textStyle="pre-body-2"
                  color="grey.9"
                  lineHeight="1.8"
                  whiteSpace="pre-line"
                >
                  ①쿠키 등 사용 목적
                </Text>
                <Box pl="16px">
                  <Text
                    textStyle="pre-body-2"
                    color="grey.9"
                    lineHeight="1.8"
                    whiteSpace="pre-line"
                  >
                    - 웹사이트 이용 통계 분석 및 성과 측정
                  </Text>
                  <Text
                    textStyle="pre-body-2"
                    color="grey.9"
                    lineHeight="1.8"
                    whiteSpace="pre-line"
                  >
                    - 광고 효율 분석 및 맞춤형 광고 제공(리타게팅 등)
                  </Text>
                  <Text
                    textStyle="pre-body-2"
                    color="grey.9"
                    lineHeight="1.8"
                    whiteSpace="pre-line"
                  >
                    - 마케팅 캠페인 성과 관리 및 서비스 개선
                  </Text>
                </Box>
                <Text
                  textStyle="pre-body-2"
                  color="grey.9"
                  lineHeight="1.8"
                  whiteSpace="pre-line"
                >
                  ②쿠키 설정 거부 방법
                </Text>
                <Box pl="16px">
                  <Text
                    textStyle="pre-body-2"
                    color="grey.9"
                    lineHeight="1.8"
                    whiteSpace="pre-line"
                  >
                    - 쿠키 설정을 거부하는 방법으로는 회원님이 사용하시는 웹
                    브라우저의 옵션을 선택함으로써 모든 쿠키를 허용하거나 쿠키를
                    저장할 때마다 확인을 거치거나, 모든 쿠키의 저장을 거부할 수
                    있습니다.
                  </Text>
                </Box>
                <Text
                  textStyle="pre-body-2"
                  color="grey.9"
                  lineHeight="1.8"
                  whiteSpace="pre-line"
                >
                  ③Google Analytics
                </Text>
                <Box pl="16px">
                  <Text
                    textStyle="pre-body-2"
                    color="grey.9"
                    lineHeight="1.8"
                    whiteSpace="pre-line"
                  >
                    - 킨코스는 고객에게 더 나은 서비스를 제공하기 위한 목적으로
                    Google, Inc. (이하 &apos;Google&apos;)이 제공하는 웹 분석
                    서비스인 Google Analytics를 사용하여 고객들이 킨코스의
                    서비스를 어떻게 이용하는지 분석 및 평가하고 고객의 수요를
                    파악하며, 서비스와 제품을 개선하고 맞춤화하여 효율적인
                    서비스를 제공하는 것에 목적이 있습니다.
                  </Text>
                  <Text
                    textStyle="pre-body-2"
                    color="grey.9"
                    lineHeight="1.8"
                    whiteSpace="pre-line"
                  >
                    - Google Analytics를 통해 수집되는 정보의 처리는 Google
                    개인정보보호정책과 Google Analytics 이용약관을 적용
                    받습니다.
                  </Text>
                  <Text
                    textStyle="pre-body-2"
                    color="grey.9"
                    lineHeight="1.8"
                    whiteSpace="pre-line"
                  >
                    - Google 개인정보보호정책:{' '}
                    <Link
                      href="https://www.google.com/intl/ko/policies/privacy/"
                      target="_blank"
                      rel="noopener noreferrer"
                      color="primary.9"
                      textDecoration="underline"
                      _hover={{ color: 'primary.10' }}
                    >
                      https://www.google.com/intl/ko/policies/privacy/
                    </Link>
                  </Text>
                  <Text
                    textStyle="pre-body-2"
                    color="grey.9"
                    lineHeight="1.8"
                    whiteSpace="pre-line"
                  >
                    - Google Analytics 이용약관:{' '}
                    <Link
                      href="https://www.google.com/analytics/terms/kr.html"
                      target="_blank"
                      rel="noopener noreferrer"
                      color="primary.9"
                      textDecoration="underline"
                      _hover={{ color: 'primary.10' }}
                    >
                      https://www.google.com/analytics/terms/kr.html
                    </Link>
                  </Text>
                  <Text
                    textStyle="pre-body-2"
                    color="grey.9"
                    lineHeight="1.8"
                    whiteSpace="pre-line"
                  >
                    킨코스는 Google Analytics를 통해 익명의
                    쿠키정보(인구통계학적 데이터 등)를 수집합니다.
                  </Text>
                  <Text
                    textStyle="pre-body-2"
                    color="grey.9"
                    lineHeight="1.8"
                    whiteSpace="pre-line"
                  >
                    킨코스는 Google Analytics를 통해 개인을 식별할 수 있는
                    정보는 수집하지 않으며, 수집한 정보를 다른 경로를 통해 얻은
                    개인식별 정보와 결합하지 않습니다.
                  </Text>
                </Box>
                <Text
                  textStyle="pre-body-2"
                  color="grey.9"
                  lineHeight="1.8"
                  whiteSpace="pre-line"
                >
                  ④ 설정 방법
                </Text>
                <Box pl="16px">
                  <Text
                    textStyle="pre-body-2"
                    color="grey.9"
                    lineHeight="1.8"
                    whiteSpace="pre-line"
                  >
                    - 인터넷 익스플로어의 경우: 웹 브라우저 상단의 도구 &gt;
                    인터넷 옵션 &gt; 개인정보 ※ 단, 귀하께서 쿠키 설치를
                    거부하였을 경우 서비스 제공에 어려움이 있을 수 있습니다.
                  </Text>
                </Box>
              </VStack>
            </VStack>

            {/* 제10조 */}
            <VStack gap="16px" align="stretch">
              <Heading
                as="h2"
                color="grey.10"
                textStyle="pre-heading-2"
                fontSize={{ base: '20px', lg: '24px' }}
              >
                제10조(개인 정보의 안정성 확보 조치)
              </Heading>
              <VStack gap="12px" align="stretch">
                <Text
                  textStyle="pre-body-2"
                  color="grey.9"
                  lineHeight="1.8"
                  whiteSpace="pre-line"
                >
                  킨코스는 개인정보보호법 제29조에 따라 다음과 같이 안전성
                  확보에 필요한 기술적/관리적 및 물리적 조치를 하고 있습니다.
                </Text>
                <Text
                  textStyle="pre-body-2"
                  color="grey.9"
                  lineHeight="1.8"
                  whiteSpace="pre-line"
                >
                  ①정기적인 자체 감사 실시
                </Text>
                <Box pl="16px">
                  <Text
                    textStyle="pre-body-2"
                    color="grey.9"
                    lineHeight="1.8"
                    whiteSpace="pre-line"
                  >
                    - 개인 정보 처리 관련 안정성 확보를 위해 정기적(반기
                    1회)으로 자체 감사를 실시하고 있습니다.
                  </Text>
                </Box>
                <Text
                  textStyle="pre-body-2"
                  color="grey.9"
                  lineHeight="1.8"
                  whiteSpace="pre-line"
                >
                  ②개인 정보 처리 직원의 최소화 및 교육
                </Text>
                <Box pl="16px">
                  <Text
                    textStyle="pre-body-2"
                    color="grey.9"
                    lineHeight="1.8"
                    whiteSpace="pre-line"
                  >
                    - 개인 정보를 취급하는 직원을 지정하고 담당자에 한정시켜
                    최소화하여 개인 정보를 관리하는 대책을 시행하고 있습니다.
                  </Text>
                </Box>
                <Text
                  textStyle="pre-body-2"
                  color="grey.9"
                  lineHeight="1.8"
                  whiteSpace="pre-line"
                >
                  ③내부관리 계획의 수립 및 시행
                </Text>
                <Box pl="16px">
                  <Text
                    textStyle="pre-body-2"
                    color="grey.9"
                    lineHeight="1.8"
                    whiteSpace="pre-line"
                  >
                    - 개인 정보의 안전한 처리를 위하여 내부관리 계획을 수립하고
                    시행하고 있습니다.
                  </Text>
                </Box>
                <Text
                  textStyle="pre-body-2"
                  color="grey.9"
                  lineHeight="1.8"
                  whiteSpace="pre-line"
                >
                  ④해킹 등에 대비한 기술적 대책
                </Text>
                <Box pl="16px">
                  <Text
                    textStyle="pre-body-2"
                    color="grey.9"
                    lineHeight="1.8"
                    whiteSpace="pre-line"
                  >
                    - 개인정보 접근 권한 관리, 접근통제시스템 운영, 개인정보
                    암호화, 해킹 등에 대비한 보안 프로그램 설치 및 갱신,
                    접속기록의 보관 및 위·변조 방지 등 기술적 보호조치를
                    이행하고 있습니다.
                  </Text>
                </Box>
                <Text
                  textStyle="pre-body-2"
                  color="grey.9"
                  lineHeight="1.8"
                  whiteSpace="pre-line"
                >
                  ⑤개인 정보의 암호화
                </Text>
                <Box pl="16px">
                  <Text
                    textStyle="pre-body-2"
                    color="grey.9"
                    lineHeight="1.8"
                    whiteSpace="pre-line"
                  >
                    - 이용자의 개인 정보는 비밀번호는 암호화되어 저장 및
                    관리되고 있어, 본인만이 알 수 있으며 중요한 데이터는 파일 및
                    전송 데이터를 암호화하거나 파일 잠금 기능을 사용하는 등의
                    별도 보안기능을 사용하고 있습니다.
                  </Text>
                </Box>
                <Text
                  textStyle="pre-body-2"
                  color="grey.9"
                  lineHeight="1.8"
                  whiteSpace="pre-line"
                >
                  ⑥접속기록의 보관 및 위변조 방지
                </Text>
                <Box pl="16px">
                  <Text
                    textStyle="pre-body-2"
                    color="grey.9"
                    lineHeight="1.8"
                    whiteSpace="pre-line"
                  >
                    - 개인 정보처리시스템에 접속한 기록을 최소 6개월 이상 보관
                    및 관리하고 있으며, 접속 기록이 위변조 및 도난, 분실되지
                    않도록 보안기능을 사용하고 있습니다.
                  </Text>
                </Box>
                <Text
                  textStyle="pre-body-2"
                  color="grey.9"
                  lineHeight="1.8"
                  whiteSpace="pre-line"
                >
                  ⑦개인 정보에 대한 접근 제한
                </Text>
                <Box pl="16px">
                  <Text
                    textStyle="pre-body-2"
                    color="grey.9"
                    lineHeight="1.8"
                    whiteSpace="pre-line"
                  >
                    - 개인 정보를 처리하는 데이터베이스 시스템에 대한 접근권한의
                    부여, 변경, 말소를 통하여 개인 정보에 대한 접근통제를 위하여
                    필요한 조치를 하고 있으며 침입차단시스템을 이용하여
                    외부로부터의 무단 접근을 통제하고 있습니다.
                  </Text>
                </Box>
                <Text
                  textStyle="pre-body-2"
                  color="grey.9"
                  lineHeight="1.8"
                  whiteSpace="pre-line"
                >
                  ⑧문서보안을 위한 잠금장치 사용
                </Text>
                <Box pl="16px">
                  <Text
                    textStyle="pre-body-2"
                    color="grey.9"
                    lineHeight="1.8"
                    whiteSpace="pre-line"
                  >
                    - 개인 정보가 포함된 서류, 보조 저장매체 등을 잠금장치가
                    있는 안전한 장소에 보관하고 있습니다.
                  </Text>
                </Box>
              </VStack>
            </VStack>

            {/* 제11조 */}
            <VStack gap="16px" align="stretch">
              <Heading
                as="h2"
                color="grey.10"
                textStyle="pre-heading-2"
                fontSize={{ base: '20px', lg: '24px' }}
              >
                제11조(개인정보에 관한 민원 서비스)
              </Heading>
              <VStack gap="12px" align="stretch">
                <Text
                  textStyle="pre-body-2"
                  color="grey.9"
                  lineHeight="1.8"
                  whiteSpace="pre-line"
                >
                  킨코스는 고객의 개인 정보를 보호하고 개인 정보와 관련한 불만을
                  처리하기 위하여 아래와 같이 관련 부서 및 개인 정보보호
                  책임자를 지정하고 있습니다.
                </Text>
                <Text
                  textStyle="pre-body-2"
                  color="grey.9"
                  lineHeight="1.8"
                  whiteSpace="pre-line"
                >
                  ①개인정보보호 책임자
                </Text>
                <Box pl="16px">
                  <Text
                    textStyle="pre-body-2"
                    color="grey.9"
                    lineHeight="1.8"
                    whiteSpace="pre-line"
                  >
                    - 고원준 상무 T. 02-510-8810 E.{' '}
                    <Link
                      href="mailto:wonjoon.ko@kinkos.co.kr"
                      color="primary.9"
                      textDecoration="underline"
                      _hover={{ color: 'primary.10' }}
                    >
                      wonjoon.ko@kinkos.co.kr
                    </Link>
                  </Text>
                </Box>
                <Text
                  textStyle="pre-body-2"
                  color="grey.9"
                  lineHeight="1.8"
                  whiteSpace="pre-line"
                >
                  ②개인정보보호 관리자
                </Text>
                <Box pl="16px">
                  <Text
                    textStyle="pre-body-2"
                    color="grey.9"
                    lineHeight="1.8"
                    whiteSpace="pre-line"
                  >
                    - 서현숙 팀장 T. 02-510-8840 E.{' '}
                    <Link
                      href="mailto:hyunsook.seo@kinkos.co.kr"
                      color="primary.9"
                      textDecoration="underline"
                      _hover={{ color: 'primary.10' }}
                    >
                      hyunsook.seo@kinkos.co.kr
                    </Link>
                  </Text>
                </Box>
                <Text
                  textStyle="pre-body-2"
                  color="grey.9"
                  lineHeight="1.8"
                  whiteSpace="pre-line"
                >
                  ③고객서비스 관리자
                </Text>
                <Box pl="16px">
                  <Text
                    textStyle="pre-body-2"
                    color="grey.9"
                    lineHeight="1.8"
                    whiteSpace="pre-line"
                  >
                    - 이슬 과장 T. 02-510-8814 E.{' '}
                    <Link
                      href="mailto:seul2.lee@kinkos.co.kr"
                      color="primary.9"
                      textDecoration="underline"
                      _hover={{ color: 'primary.10' }}
                    >
                      seul2.lee@kinkos.co.kr
                    </Link>
                  </Text>
                </Box>
                <Text
                  textStyle="pre-body-2"
                  color="grey.9"
                  lineHeight="1.8"
                  whiteSpace="pre-line"
                >
                  귀하께서는 킨코스의 서비스를 이용하시며 발생하는 모든
                  개인정보보호 관련 민원을 개인정보보호 책임자 혹은 담당 부서로
                  신고하실 수 있습니다. 킨코스는 이용자들의 신고사항에 대해
                  신속하게 충분한 답변을 드릴 것입니다.
                </Text>
                <Text
                  textStyle="pre-body-2"
                  color="grey.9"
                  lineHeight="1.8"
                  whiteSpace="pre-line"
                >
                  기타 개인 정보 침해에 대한 신고나 상담이 필요하신 경우에는
                  아래 기관에 문의하시기 바랍니다.
                </Text>
                <Box pl="16px">
                  <Text
                    textStyle="pre-body-2"
                    color="grey.9"
                    lineHeight="1.8"
                    whiteSpace="pre-line"
                  >
                    - 개인 정보 침해신고센터:{' '}
                    <Link
                      href="http://privacy.kisa.or.kr"
                      target="_blank"
                      rel="noopener noreferrer"
                      color="primary.9"
                      textDecoration="underline"
                      _hover={{ color: 'primary.10' }}
                    >
                      http://privacy.kisa.or.kr
                    </Link>{' '}
                    / (국번없이)118
                  </Text>
                  <Text
                    textStyle="pre-body-2"
                    color="grey.9"
                    lineHeight="1.8"
                    whiteSpace="pre-line"
                  >
                    - 대검찰청 사이버수사과:{' '}
                    <Link
                      href="http://www.spo.go.kr"
                      target="_blank"
                      rel="noopener noreferrer"
                      color="primary.9"
                      textDecoration="underline"
                      _hover={{ color: 'primary.10' }}
                    >
                      http://www.spo.go.kr
                    </Link>{' '}
                    / 02-3480-3571
                  </Text>
                  <Text
                    textStyle="pre-body-2"
                    color="grey.9"
                    lineHeight="1.8"
                    whiteSpace="pre-line"
                  >
                    - 경찰청 사이버안전국:{' '}
                    <Link
                      href="http://www.cyber.go.kr"
                      target="_blank"
                      rel="noopener noreferrer"
                      color="primary.9"
                      textDecoration="underline"
                      _hover={{ color: 'primary.10' }}
                    >
                      http://www.cyber.go.kr
                    </Link>{' '}
                    / 1566-0112
                  </Text>
                </Box>
              </VStack>
            </VStack>

            {/* 개인정보처리방침 변경일자 */}
            <VStack gap="16px" align="stretch" pt="16px">
              <Heading
                as="h2"
                color="grey.10"
                textStyle="pre-heading-2"
                fontSize={{ base: '20px', lg: '24px' }}
              >
                개인정보처리방침 변경일자
              </Heading>
              <Text
                textStyle="pre-body-2"
                color="grey.9"
                lineHeight="1.8"
                whiteSpace="pre-line"
              >
                현 개인정보처리방침은 2025년 12월 01일에 제정되었으며 정부의
                정책 또는 킨코스의 필요에 의하여 변경될 수 있습니다.
              </Text>
              <Text
                textStyle="pre-body-2"
                color="grey.9"
                lineHeight="1.8"
                whiteSpace="pre-line"
              >
                ①개인정보처리방침 변경일자： 2025.12.01
              </Text>
            </VStack>
          </VStack>
        </Box>
      </VStack>
    </Container>
  )
}
