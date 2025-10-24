'use client'

import { useState } from 'react'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

import {
  Accordion,
  Box,
  Drawer,
  Flex,
  IconButton,
  Portal,
  Text,
  VStack,
  chakra,
  useDisclosure,
} from '@chakra-ui/react'
import {
  CaretDownIcon as CaretDownIconPhosphor,
  ListIcon,
  XIcon,
} from '@phosphor-icons/react/dist/ssr'

import {
  BIZ_NAVIGATION_ITEMS,
  CUSTOMER_REVIEW_NAVIGATION_ITEM,
  EXPERT_NAVIGATION_ITEM,
  FAQ_NAVIGATION_ITEM,
  PROBLEM_SOLVE_NAVIGATION_ITEM,
  SOLUTION_NAVIGATION_ITEMS,
} from '../header-navigation-constant'
import { LogoButton } from './logo-button'

const CaretDownIcon = chakra(CaretDownIconPhosphor)

export const MobileMenuDrawer = () => {
  const pathname = usePathname()
  const { open, onToggle, onClose } = useDisclosure()

  // 현재 경로가 활성 상태인지 확인하는 함수
  const isActivePath = (href: string) => {
    if (href === '/') return pathname === '/'
    return pathname.startsWith(href)
  }

  const handleLinkClick = () => {
    onClose()
  }

  return (
    <Drawer.Root
      placement="end"
      size={'full'}
      open={open}
      onOpenChange={onToggle}
    >
      <Drawer.Trigger asChild>
        <IconButton
          variant="ghost"
          size="sm"
          p="0"
          minW="40px"
          h="40px"
          colorPalette={'grey'}
          borderRadius="8px"
          aria-label="메뉴 열기"
        >
          {/* Menu Icon */}
          <ListIcon color="grey.8" />
        </IconButton>
      </Drawer.Trigger>

      <Portal>
        <Drawer.Backdrop />
        <Drawer.Positioner>
          <Drawer.Content w="100%" bg={'white'} py={'0px'}>
            <Drawer.Header
              minH={{ base: '80px', sm: '80px' }}
              px={{ base: '20px', sm: '40px' }}
              py={'16px'}
            >
              <Flex justify="space-between" align="center" w="full" h={'100%'}>
                <LogoButton />
                <Drawer.CloseTrigger>
                  <IconButton
                    size={{ base: 'md', lg: 'lg' }}
                    variant={'ghost'}
                    colorPalette={'grey'}
                    borderRadius={'8px'}
                  >
                    <XIcon color={'grey.8'} />
                  </IconButton>
                </Drawer.CloseTrigger>
              </Flex>
            </Drawer.Header>
            <Drawer.Body px={'40px'} pt={'24px'}>
              <VStack gap="0" align="stretch">
                <Accordion.Root collapsible size="md">
                  <Accordion.Item value="biz">
                    <Accordion.ItemTrigger
                      justifyContent="space-between"
                      w="100%"
                      textStyle="pre-heading-4"
                      color="grey.10"
                      px="0"
                      py="12px"
                      _hover={{ color: 'primary.4' }}
                      borderRadius="0"
                      cursor="pointer"
                    >
                      <Text textStyle="pre-heading-4">
                        {BIZ_NAVIGATION_ITEMS.label}
                      </Text>
                      <Accordion.ItemIndicator>
                        <IconButton
                          variant="ghost"
                          size="sm"
                          p="0"
                          minW="40px"
                          h="40px"
                          colorPalette={'grey'}
                          borderRadius="8px"
                          aria-label="메뉴 열기"
                        >
                          <CaretDownIcon color="grey.8" />
                        </IconButton>
                      </Accordion.ItemIndicator>
                    </Accordion.ItemTrigger>
                    <Accordion.ItemContent>
                      <Accordion.ItemBody>
                        <VStack gap="0" align="stretch">
                          {BIZ_NAVIGATION_ITEMS.subItems?.map((item, index) => {
                            const isActive =
                              item.href ? isActivePath(item.href) : false
                            return (
                              <Link
                                key={index}
                                href={item.href || '#'}
                                onClick={handleLinkClick}
                              >
                                <Box
                                  px="16px"
                                  py="12px"
                                  cursor="pointer"
                                  _hover={{ bg: 'primary.1' }}
                                  borderRadius="8px"
                                >
                                  <Text
                                    textStyle={
                                      isActive ? 'pre-body-1' : 'pre-body-2'
                                    }
                                    color={isActive ? 'primary.4' : 'grey.10'}
                                  >
                                    {item.title}
                                  </Text>
                                </Box>
                              </Link>
                            )
                          })}
                        </VStack>
                      </Accordion.ItemBody>
                    </Accordion.ItemContent>
                  </Accordion.Item>
                </Accordion.Root>

                {/* 솔루션 */}
                <Accordion.Root collapsible size="md">
                  <Accordion.Item value="solutions">
                    <Accordion.ItemTrigger
                      justifyContent="space-between"
                      w="100%"
                      textStyle="pre-heading-4"
                      color="grey.10"
                      px="0"
                      py="12px"
                      _hover={{ color: 'primary.4' }}
                      borderRadius="0"
                      cursor="pointer"
                    >
                      <Text textStyle="pre-heading-4">
                        {SOLUTION_NAVIGATION_ITEMS.label}
                      </Text>
                      <Accordion.ItemIndicator>
                        <IconButton
                          variant="ghost"
                          size="sm"
                          p="0"
                          minW="40px"
                          h="40px"
                          colorPalette={'grey'}
                          borderRadius="8px"
                          aria-label="메뉴 열기"
                        >
                          <CaretDownIcon color="grey.8" />
                        </IconButton>
                      </Accordion.ItemIndicator>
                    </Accordion.ItemTrigger>
                    <Accordion.ItemContent>
                      <Accordion.ItemBody>
                        <VStack gap="0" align="stretch">
                          {SOLUTION_NAVIGATION_ITEMS.subItems?.map(
                            (category, categoryIndex) => (
                              <Box key={categoryIndex}>
                                <Box px="16px" py="12px">
                                  <Text textStyle="pre-body-2" color="grey.10">
                                    {category.title}
                                  </Text>
                                  {category.items && (
                                    <VStack gap="0" align="stretch" mt="8px">
                                      {category.items.map(
                                        (subItem, itemIndex) => {
                                          const isSubItemActive = isActivePath(
                                            subItem.href,
                                          )
                                          return (
                                            <Link
                                              key={itemIndex}
                                              href={subItem.href}
                                              onClick={handleLinkClick}
                                            >
                                              <Text
                                                textStyle={
                                                  isSubItemActive ? 'pre-body-3'
                                                  : 'pre-body-4'
                                                }
                                                color={
                                                  isSubItemActive ? 'primary.4'
                                                  : 'grey.6'
                                                }
                                                py="6px"
                                                px="0"
                                                cursor="pointer"
                                                _hover={{ color: 'grey.10' }}
                                              >
                                                {subItem.label}
                                              </Text>
                                            </Link>
                                          )
                                        },
                                      )}
                                    </VStack>
                                  )}
                                </Box>
                              </Box>
                            ),
                          )}
                        </VStack>
                      </Accordion.ItemBody>
                    </Accordion.ItemContent>
                  </Accordion.Item>
                </Accordion.Root>

                {/* 고객후기 */}
                <Link
                  href={CUSTOMER_REVIEW_NAVIGATION_ITEM.href || '#'}
                  onClick={handleLinkClick}
                >
                  <Box
                    w="100%"
                    display="flex"
                    alignItems="center"
                    borderBottom="1px solid"
                    borderColor="border.basic.1"
                    px="0"
                    h={'64px'}
                    py="12px"
                    cursor="pointer"
                    _hover={{ bg: 'primary.1', color: 'primary.4' }}
                    color={
                      isActivePath(CUSTOMER_REVIEW_NAVIGATION_ITEM.href || '') ?
                        'primary.4'
                      : 'grey.10'
                    }
                  >
                    <Text textStyle="pre-heading-4">
                      {CUSTOMER_REVIEW_NAVIGATION_ITEM.label}
                    </Text>
                  </Box>
                </Link>

                {/* 고민해결 */}
                <Link
                  href={PROBLEM_SOLVE_NAVIGATION_ITEM.href || '#'}
                  onClick={handleLinkClick}
                >
                  <Box
                    w="100%"
                    h={'64px'}
                    display="flex"
                    alignItems="center"
                    borderBottom="1px solid"
                    borderColor="border.basic.1"
                    px="0"
                    py="12px"
                    cursor="pointer"
                    _hover={{ bg: 'primary.1', color: 'primary.4' }}
                    color={
                      isActivePath(PROBLEM_SOLVE_NAVIGATION_ITEM.href || '') ?
                        'primary.4'
                      : 'grey.10'
                    }
                  >
                    <Text textStyle="pre-heading-4">
                      {PROBLEM_SOLVE_NAVIGATION_ITEM.label}
                    </Text>
                  </Box>
                </Link>

                {/* 전문가 */}
                <Link
                  href={EXPERT_NAVIGATION_ITEM.href || '#'}
                  onClick={handleLinkClick}
                >
                  <Box
                    w="100%"
                    h={'64px'}
                    display="flex"
                    alignItems="center"
                    borderBottom="1px solid"
                    borderColor="border.basic.1"
                    px="0"
                    py="12px"
                    cursor="pointer"
                    _hover={{ bg: 'primary.1', color: 'primary.4' }}
                    color={
                      isActivePath(EXPERT_NAVIGATION_ITEM.href || '') ?
                        'primary.4'
                      : 'grey.10'
                    }
                  >
                    <Text textStyle="pre-heading-4">
                      {EXPERT_NAVIGATION_ITEM.label}
                    </Text>
                  </Box>
                </Link>

                {/* 주요 질문 */}
                <Link href={FAQ_NAVIGATION_ITEM.href || '#'}>
                  <Box
                    w="100%"
                    h={'64px'}
                    display="flex"
                    alignItems="center"
                    borderBottom="1px solid"
                    borderColor="border.basic.1"
                    px="0"
                    py="12px"
                    cursor="pointer"
                    _hover={{ bg: 'primary.1', color: 'primary.4' }}
                    color={
                      isActivePath(FAQ_NAVIGATION_ITEM.href || '') ? 'primary.4'
                      : 'grey.10'
                    }
                  >
                    <Text textStyle="pre-heading-4">
                      {FAQ_NAVIGATION_ITEM.label}
                    </Text>
                  </Box>
                </Link>
              </VStack>
            </Drawer.Body>
          </Drawer.Content>
        </Drawer.Positioner>
      </Portal>
    </Drawer.Root>
  )
}
