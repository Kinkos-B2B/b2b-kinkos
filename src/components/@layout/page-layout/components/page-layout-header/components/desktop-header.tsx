'use client'

import { useEffect, useState } from 'react'

import Link from 'next/link'

import { Box, Button, Flex, HStack, Text, VStack } from '@chakra-ui/react'

import { LAYOUT } from '@/constants/layout'
import { ROUTES } from '@/constants/routes'

import { NavigationItem, navigationItems } from '../header-navigation-constant'
import { LogoButton } from './logo-button'

export const DesktopHeader = () => {
  const [isScrolled, setIsScrolled] = useState(false)

  const [activeSubMenu, setActiveSubMenu] = useState<NavigationItem | null>(
    null,
  )

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleMenuHover = (menuLabel: NavigationItem) => {
    setActiveSubMenu(menuLabel)
  }

  const handleMenuLeave = () => {
    setActiveSubMenu(null)
  }

  const handleKeyDown = (event: React.KeyboardEvent, item: NavigationItem) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault()
      setActiveSubMenu(activeSubMenu === item ? null : item)
    } else if (event.key === 'Escape') {
      setActiveSubMenu(null)
    }
  }

  return (
    <Box
      as="header"
      position="fixed"
      top="0"
      left="0"
      right="0"
      zIndex="sticky"
      w={'100%'}
      bg="background.basic.1"
      transition="all 0.3s ease"
      boxShadow={isScrolled ? '0px 8px 12px 0px rgba(0,0,0,0.08)' : 'none'}
    >
      {/* Main Header */}
      <Flex
        px="40px"
        alignItems="center"
        justifyContent="space-between"
        h={LAYOUT.HEADER.HEIGHT}
        position="relative"
        w={'100%'}
      >
        {/* Logo */}
        <Link href={ROUTES.HOME} aria-label="홈페이지로 이동">
          <LogoButton size={{ width: 180, height: 37 }} />
        </Link>

        {/* Desktop Navigation */}
        <HStack
          gap="0"
          flex="1"
          justify="center"
          as="nav"
          h={'100%'}
          role="navigation"
          aria-label="메인 네비게이션"
          onMouseLeave={handleMenuLeave}
        >
          {navigationItems.map((item) => (
            <Box key={item.label} h={'100%'} position="relative">
              <Link href={item.href || '#'}>
                <Box
                  px="16px"
                  py="0"
                  h="full"
                  display="flex"
                  alignItems="center"
                  position="relative"
                  onMouseEnter={() => {
                    handleMenuHover(item)
                  }}
                  cursor="pointer"
                  data-label={item.label}
                  _hover={{ color: 'primary.4' }}
                  aria-expanded={
                    item.subItems ? activeSubMenu === item : undefined
                  }
                  aria-haspopup={item.subItems ? 'true' : undefined}
                >
                  <Text
                    textStyle="pre-body-1"
                    color={activeSubMenu === item ? 'primary.4' : 'grey.10'}
                    transition="all 0.2s"
                  >
                    {item.label}
                  </Text>
                  {activeSubMenu === item && (
                    <Box
                      position="absolute"
                      bottom="0"
                      left="0"
                      right="0"
                      h="1.5px"
                      bg="primary.4"
                    />
                  )}
                </Box>
              </Link>
            </Box>
          ))}
          {activeSubMenu && activeSubMenu.subItems && (
            <Box
              position="absolute"
              top="100%"
              left="0px"
              right="0px"
              bg="background.basic.1"
              boxShadow="0px 8px 12px 0px rgba(0,0,0,0.08)"
              border="1px solid"
              borderColor="border.basic.1"
              borderRadius="0 0 10px 10px"
              w={'100%'}
              pt="28px"
              pb="32px"
              px="0"
              zIndex="dropdown"
              role="menu"
              aria-label={`${activeSubMenu.label} 서브메뉴`}
            >
              <Flex gap="28px" px="0" py="0" justify="center" w="100%">
                {activeSubMenu.subItems.map((category, categoryIndex) => {
                  console.log(category)
                  if ('items' in category) {
                    return (
                      <VStack key={categoryIndex} gap="8px" align="stretch">
                        <Text
                          px="8px"
                          textStyle="pre-body-3"
                          color="grey.10"
                          mb="4px"
                        >
                          {category.title}
                        </Text>
                        <VStack gap="2px" align="stretch">
                          {category.items?.map((subItem, itemIndex) => (
                            <Link key={itemIndex} href={subItem.href}>
                              <Text
                                px="10px"
                                py="0"
                                h="32px"
                                display="flex"
                                alignItems="center"
                                textStyle="pre-body-5"
                                color="grey.6"
                                cursor="pointer"
                                _hover={{
                                  bg: 'background.basic.2',
                                  color: 'grey.10',
                                }}
                                borderRadius="4px"
                                transition="all 0.2s"
                                role="menuitem"
                              >
                                {subItem.label}
                              </Text>
                            </Link>
                          ))}
                        </VStack>
                      </VStack>
                    )
                  }

                  return (
                    <VStack key={categoryIndex} align="stretch">
                      <Text
                        textStyle="pre-body-3"
                        color="grey.10"
                        px="8px"
                        py="0"
                        display="flex"
                        alignItems="center"
                        cursor="pointer"
                        _hover={{
                          bg: 'background.basic.2',
                          color: 'grey.10',
                        }}
                        borderRadius="4px"
                        transition="all 0.2s"
                        role="menuitem"
                      >
                        {category.title}
                      </Text>
                    </VStack>
                  )
                })}
              </Flex>
            </Box>
          )}
        </HStack>

        {/* CTA Button */}
        <Button variant="solid" size="lg" aria-label="상담 신청하기">
          상담 신청
        </Button>
      </Flex>
    </Box>
  )
}
