'use client'

import { useState } from 'react'

import Link from 'next/link'

import {
  Box,
  Button,
  Flex,
  IconButton,
  Text,
  VStack,
  useDisclosure,
} from '@chakra-ui/react'

import { LAYOUT } from '@/constants/layout'
import { ROUTES } from '@/constants/routes'

import { navigationItems } from '../header-navigation-constant'
import { LogoButton } from './logo-button'

export const MobileHeader = () => {
  const [expandedMobileMenu, setExpandedMobileMenu] = useState<string | null>(
    null,
  )

  const { open: isOpen, onOpen, onClose } = useDisclosure()

  const handleMobileMenuToggle = (itemLabel: string) => {
    setExpandedMobileMenu(expandedMobileMenu === itemLabel ? null : itemLabel)
  }

  return (
    <Box
      as="header"
      position="fixed"
      top="0"
      left="0"
      right="0"
      zIndex="sticky"
      bg="white"
      transition="all 0.3s ease"
    >
      {/* Main Header */}
      <Flex
        px="20px"
        alignItems="center"
        justifyContent="space-between"
        h={LAYOUT.HEADER.HEIGHT}
        position="relative"
      >
        {/* Logo */}
        <Link href={ROUTES.HOME}>
          <LogoButton size={{ width: 120, height: 25 }} />
        </Link>

        {/* Mobile Menu Button */}
        <IconButton
          variant="ghost"
          size="sm"
          p="0"
          minW="40px"
          h="40px"
          borderRadius="8px"
          onClick={onOpen}
          aria-label="메뉴 열기"
        >
          {/* Menu Icon */}
          <Box w="24px" h="24px">
            <svg viewBox="0 0 24 24" fill="none">
              <path
                d="M3 12H21M3 6H21M3 18H21"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Box>
        </IconButton>
      </Flex>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <Box
          position="fixed"
          top="0"
          left="0"
          right="0"
          bottom="0"
          bg="rgba(0, 0, 0, 0.5)"
          zIndex="overlay"
          onClick={onClose}
        >
          <Box
            position="absolute"
            top="0"
            right="0"
            bottom="0"
            w="300px"
            bg="white"
            boxShadow="lg"
            p="20px"
            onClick={(e) => e.stopPropagation()}
          >
            <Flex justify="space-between" align="center" mb="20px">
              <LogoButton size={{ width: 120, height: 25 }} />
              <IconButton
                variant="ghost"
                size="sm"
                onClick={onClose}
                aria-label="메뉴 닫기"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M18 6L6 18M6 6L18 18"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </IconButton>
            </Flex>

            <VStack gap="0" align="stretch">
              {navigationItems.map((item) => (
                <Box key={item.label}>
                  {item.subItems ?
                    <Box>
                      <Button
                        variant="ghost"
                        justifyContent="space-between"
                        w="100%"
                        h="48px"
                        fontSize="18px"
                        fontWeight="600"
                        color="#1b1c1d"
                        onClick={() => handleMobileMenuToggle(item.label)}
                      >
                        {item.label}
                        <Box
                          transform={
                            expandedMobileMenu === item.label ?
                              'rotate(180deg)'
                            : 'rotate(0deg)'
                          }
                          transition="transform 0.2s"
                        >
                          <svg
                            width="16"
                            height="16"
                            viewBox="0 0 24 24"
                            fill="none"
                          >
                            <path
                              d="M6 9L12 15L18 9"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </Box>
                      </Button>
                      {expandedMobileMenu === item.label && (
                        <VStack gap="0" align="stretch" pl="20px">
                          {item.subItems.map((category, categoryIndex) => (
                            <Box key={categoryIndex}>
                              <Text
                                fontSize="16px"
                                fontWeight="600"
                                color="#1b1c1d"
                                py="8px"
                                px="0"
                              >
                                {category.title}
                              </Text>
                              <VStack gap="0" align="stretch" pl="10px">
                                {category.items?.map((subItem, itemIndex) => (
                                  <Link
                                    key={itemIndex}
                                    href={subItem.href}
                                    onClick={onClose}
                                  >
                                    <Text
                                      fontSize="14px"
                                      fontWeight="600"
                                      color="#888c91"
                                      py="6px"
                                      px="0"
                                      cursor="pointer"
                                      _hover={{ color: '#1b1c1d' }}
                                    >
                                      {subItem.label}
                                    </Text>
                                  </Link>
                                ))}
                              </VStack>
                            </Box>
                          ))}
                        </VStack>
                      )}
                    </Box>
                  : <Link href={item.href || '#'} onClick={onClose}>
                      <Button
                        variant="ghost"
                        justifyContent="flex-start"
                        w="100%"
                        h="48px"
                        fontSize="18px"
                        fontWeight="600"
                        color="#1b1c1d"
                      >
                        {item.label}
                      </Button>
                    </Link>
                  }
                </Box>
              ))}
              <Box pt="20px">
                <Button
                  bg="#013ffc"
                  color="white"
                  borderRadius="10px"
                  px="24px"
                  h="48px"
                  fontSize="16px"
                  fontWeight="600"
                  w="100%"
                  _hover={{ bg: '#0026cc' }}
                  _active={{ bg: '#001a99' }}
                >
                  상담 신청
                </Button>
              </Box>
            </VStack>
          </Box>
        </Box>
      )}
    </Box>
  )
}
