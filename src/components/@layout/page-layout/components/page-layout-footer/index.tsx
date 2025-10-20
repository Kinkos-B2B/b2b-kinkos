'use client'

import Link from 'next/link'

import {
  Box,
  Link as ChakraLink,
  Container,
  ContainerProps,
  Flex,
  HStack,
  Separator,
  Text,
  VStack,
} from '@chakra-ui/react'

import {
  BIZ_NAVIGATION_ITEMS,
  EXPERT_NAVIGATION_ITEM,
  FAQ_NAVIGATION_ITEM,
  HEADER_NAVIGATION_ITEMS,
  PROBLEM_SOLVE_NAVIGATION_ITEM,
  SOLUTION_NAVIGATION_ITEMS,
} from '../page-layout-header/header-navigation-constant'
import { FOOTER_COMPANY_INFO, FOOTER_LEGAL } from './footer-navigation-constant'

export const PageLayoutFooter = () => {
  return (
    <Box
      as="footer"
      bg="background.inverse.1"
      py={{ base: '32px', lg: '48px' }}
      px={{ base: '20px', lg: '40px' }}
      w="100%"
      role="contentinfo"
      aria-label="사이트 푸터"
    >
      <Container maxW="1280px" px={0}>
        <VStack gap={{ base: '24px', lg: '40px' }} align="stretch">
          {/* 메인 네비게이션 */}
          <Flex
            as="nav"
            justify="space-between"
            align="flex-start"
            wrap="wrap"
            gap={{ base: '24px', lg: '32px' }}
            direction={{ base: 'column', lg: 'row' }}
            role="navigation"
            aria-label="주요 네비게이션"
          >
            <VStack
              align="flex-start"
              gap="14px"
              minW={{ base: '100%', lg: 'auto' }}
            >
              <Text
                as="h3"
                fontSize="15px"
                fontWeight="600"
                color="grey.3"
                letterSpacing="-0.3px"
                lineHeight="1.6"
                id="footer-biz-heading"
              >
                {BIZ_NAVIGATION_ITEMS.label}
              </Text>
              <VStack
                align="flex-start"
                gap="6px"
                role="list"
                aria-labelledby="footer-biz-heading"
              >
                {BIZ_NAVIGATION_ITEMS.subItems?.map((item) => (
                  <Box key={item.href} role="listitem">
                    <ChakraLink
                      as={Link}
                      href={item.href}
                      tabIndex={0}
                      _focus={{
                        outline: '2px solid',
                        outlineColor: 'primary.4',
                        outlineOffset: '2px',
                      }}
                    >
                      <Text
                        fontSize="15px"
                        fontWeight="400"
                        color="grey.6"
                        letterSpacing="-0.3px"
                        lineHeight="1.6"
                        _hover={{ color: 'grey.3' }}
                        transition="color 0.2s"
                      >
                        {item.title}
                      </Text>
                    </ChakraLink>
                  </Box>
                ))}
              </VStack>
            </VStack>

            <VStack
              align="flex-start"
              gap="14px"
              minW={{ base: '100%', lg: 'auto' }}
            >
              <Text
                as="h3"
                fontSize="15px"
                fontWeight="600"
                color="grey.3"
                letterSpacing="-0.3px"
                lineHeight="1.6"
                id="footer-solutions-heading"
              >
                {SOLUTION_NAVIGATION_ITEMS.label}
              </Text>
              <Flex
                gap={{ base: '16px', lg: '32px' }}
                wrap="wrap"
                direction={{ base: 'column', sm: 'row' }}
                role="list"
                aria-labelledby="footer-solutions-heading"
              >
                {SOLUTION_NAVIGATION_ITEMS.subItems?.map((category) => (
                  <VStack
                    key={category.title}
                    align="flex-start"
                    gap="8px"
                    role="listitem"
                  >
                    <Text
                      as="h4"
                      fontSize="15px"
                      fontWeight="600"
                      color="grey.6"
                      letterSpacing="-0.3px"
                      lineHeight="1.6"
                      id={`footer-${category.title.replace(/\s+/g, '-').toLowerCase()}-heading`}
                    >
                      {category.title}
                    </Text>
                    <VStack
                      align="flex-start"
                      gap="6px"
                      role="list"
                      aria-labelledby={`footer-${category.title.replace(/\s+/g, '-').toLowerCase()}-heading`}
                    >
                      {category.items?.map((item) => (
                        <Box key={item.href} role="listitem">
                          <ChakraLink
                            as={Link}
                            href={item.href}
                            tabIndex={0}
                            _focus={{
                              outline: '2px solid',
                              outlineColor: 'primary.4',
                              outlineOffset: '2px',
                            }}
                          >
                            <Text
                              color="grey.6"
                              textStyle="pre-body-6"
                              _hover={{ color: 'grey.3' }}
                              transition="color 0.2s"
                            >
                              {item.label}
                            </Text>
                          </ChakraLink>
                        </Box>
                      ))}
                    </VStack>
                  </VStack>
                ))}
              </Flex>
            </VStack>

            <Box role="listitem">
              <ChakraLink
                as={Link}
                href={
                  HEADER_NAVIGATION_ITEMS.find(
                    (item) => item.label === '고객후기',
                  )?.href
                }
                tabIndex={0}
                _focus={{
                  outline: '2px solid',
                  outlineColor: 'primary.4',
                  outlineOffset: '2px',
                }}
              >
                <Text
                  fontSize="15px"
                  fontWeight="600"
                  color="grey.3"
                  letterSpacing="-0.3px"
                  lineHeight="1.6"
                  _hover={{ color: 'grey.0' }}
                  transition="color 0.2s"
                >
                  {
                    HEADER_NAVIGATION_ITEMS.find(
                      (item) => item.label === '고객후기',
                    )?.label
                  }
                </Text>
              </ChakraLink>
            </Box>
            <Box role="listitem">
              <ChakraLink
                as={Link}
                href={PROBLEM_SOLVE_NAVIGATION_ITEM.href}
                tabIndex={0}
                _focus={{
                  outline: '2px solid',
                  outlineColor: 'primary.4',
                  outlineOffset: '2px',
                }}
              >
                <Text
                  fontSize="15px"
                  fontWeight="600"
                  color="grey.3"
                  letterSpacing="-0.3px"
                  lineHeight="1.6"
                  _hover={{ color: 'grey.0' }}
                  transition="color 0.2s"
                >
                  {PROBLEM_SOLVE_NAVIGATION_ITEM.label}
                </Text>
              </ChakraLink>
            </Box>
            <Box role="listitem">
              <ChakraLink
                as={Link}
                href={EXPERT_NAVIGATION_ITEM.href}
                tabIndex={0}
                _focus={{
                  outline: '2px solid',
                  outlineColor: 'primary.4',
                  outlineOffset: '2px',
                }}
              >
                <Text
                  fontSize="15px"
                  fontWeight="600"
                  color="grey.3"
                  letterSpacing="-0.3px"
                  lineHeight="1.6"
                  _hover={{ color: 'grey.0' }}
                  transition="color 0.2s"
                >
                  {EXPERT_NAVIGATION_ITEM.label}
                </Text>
              </ChakraLink>
            </Box>
            <Box role="listitem">
              <ChakraLink
                as={Link}
                href={FAQ_NAVIGATION_ITEM.href}
                tabIndex={0}
                _focus={{
                  outline: '2px solid',
                  outlineColor: 'primary.4',
                  outlineOffset: '2px',
                }}
              >
                <Text
                  fontSize="15px"
                  fontWeight="600"
                  color="grey.3"
                  letterSpacing="-0.3px"
                  lineHeight="1.6"
                  _hover={{ color: 'grey.0' }}
                  transition="color 0.2s"
                >
                  {FAQ_NAVIGATION_ITEM.label}
                </Text>
              </ChakraLink>
            </Box>
          </Flex>

          {/* 구분선 */}
          <Box position="relative" pt="20px">
            <Separator borderColor="border.inverse.1" />
          </Box>

          {/* 법적 정보 및 회사 정보 */}
          <VStack align="stretch" gap="12px">
            {/* 법적 정보 링크들 */}
            <HStack gap="10px" wrap="wrap" role="list" aria-label="법적 정보">
              {FOOTER_LEGAL.items.map((item, index) => (
                <HStack key={item.href} gap="10px" role="listitem">
                  <ChakraLink
                    as={Link}
                    href={item.href}
                    tabIndex={0}
                    _focus={{
                      outline: '2px solid',
                      outlineColor: 'primary.4',
                      outlineOffset: '2px',
                    }}
                  >
                    <Text
                      fontSize="15px"
                      fontWeight="400"
                      color={
                        'isActive' in item && item.isActive ?
                          'grey.0'
                        : 'grey.5'
                      }
                      letterSpacing="-0.3px"
                      lineHeight="1.6"
                      _hover={{ color: 'grey.3' }}
                      transition="color 0.2s"
                    >
                      {item.label}
                    </Text>
                  </ChakraLink>
                  {index < FOOTER_LEGAL.items.length - 1 && (
                    <Box
                      w="0px"
                      h="12px"
                      display="flex"
                      alignItems="center"
                      justifyContent="center"
                      aria-hidden="true"
                    >
                      <Box
                        w="12px"
                        h="0px"
                        borderTop="1px solid"
                        borderColor="border.inverse.1"
                        transform="rotate(90deg)"
                      />
                    </Box>
                  )}
                </HStack>
              ))}
            </HStack>

            {/* 회사 정보 */}
            <VStack
              align="flex-start"
              gap="2px"
              role="region"
              aria-label="회사 정보"
            >
              <HStack gap="8px" wrap="wrap">
                <Text
                  fontSize="13px"
                  fontWeight="400"
                  color="grey.5"
                  letterSpacing="-0.26px"
                  lineHeight="1.6"
                >
                  {FOOTER_COMPANY_INFO.company}
                </Text>
                <Box
                  w="0px"
                  h="12px"
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  aria-hidden="true"
                >
                  <Box
                    w="12px"
                    h="0px"
                    borderTop="1px solid"
                    borderColor="border.inverse.1"
                    transform="rotate(90deg)"
                  />
                </Box>
                <Text
                  fontSize="13px"
                  fontWeight="400"
                  color="grey.5"
                  letterSpacing="-0.26px"
                  lineHeight="1.6"
                >
                  {FOOTER_COMPANY_INFO.address}
                </Text>
              </HStack>

              <HStack gap="8px" wrap="wrap">
                <Text
                  fontSize="13px"
                  fontWeight="400"
                  color="grey.5"
                  letterSpacing="-0.26px"
                  lineHeight="1.6"
                >
                  {FOOTER_COMPANY_INFO.ceo}
                </Text>
                <Box
                  w="0px"
                  h="12px"
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  aria-hidden="true"
                >
                  <Box
                    w="12px"
                    h="0px"
                    borderTop="1px solid"
                    borderColor="border.inverse.1"
                    transform="rotate(90deg)"
                  />
                </Box>
                <Text
                  fontSize="13px"
                  fontWeight="400"
                  color="grey.5"
                  letterSpacing="-0.26px"
                  lineHeight="1.6"
                >
                  {FOOTER_COMPANY_INFO.phone}
                </Text>
                <Box
                  w="0px"
                  h="12px"
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  aria-hidden="true"
                >
                  <Box
                    w="12px"
                    h="0px"
                    borderTop="1px solid"
                    borderColor="border.inverse.1"
                    transform="rotate(90deg)"
                  />
                </Box>
                <Text
                  fontSize="13px"
                  fontWeight="400"
                  color="grey.5"
                  letterSpacing="-0.26px"
                  lineHeight="1.6"
                >
                  {FOOTER_COMPANY_INFO.businessNumber}
                </Text>
              </HStack>

              <HStack gap="8px" wrap="wrap">
                <Text
                  fontSize="13px"
                  fontWeight="400"
                  color="grey.5"
                  letterSpacing="-0.26px"
                  lineHeight="1.6"
                >
                  {FOOTER_COMPANY_INFO.privacyManager}
                </Text>
                <Box
                  w="0px"
                  h="12px"
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  aria-hidden="true"
                >
                  <Box
                    w="12px"
                    h="0px"
                    borderTop="1px solid"
                    borderColor="border.inverse.1"
                    transform="rotate(90deg)"
                  />
                </Box>
                <Text
                  fontSize="13px"
                  fontWeight="400"
                  color="grey.5"
                  letterSpacing="-0.26px"
                  lineHeight="1.6"
                >
                  {FOOTER_COMPANY_INFO.businessRegistration}
                </Text>
              </HStack>
            </VStack>
          </VStack>
        </VStack>
      </Container>
    </Box>
  )
}
