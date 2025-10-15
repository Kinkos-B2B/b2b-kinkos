'use client'

import Link from 'next/link'

import { Box, Flex } from '@chakra-ui/react'

import { LAYOUT } from '@/constants/layout'
import { ROUTES } from '@/constants/routes'

import { LogoButton } from './logo-button'
import { MobileMenuDrawer } from './mobile-menu-drawer'

export const MobileHeader = () => {
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
      <Flex
        px={{ base: '20px', sm: '40px' }}
        alignItems="center"
        justifyContent="space-between"
        h={{ base: LAYOUT.HEADER.HEIGHT_MOBILE }}
        position="relative"
      >
        <Link href={ROUTES.HOME}>
          <LogoButton />
        </Link>

        <MobileMenuDrawer />
      </Flex>
    </Box>
  )
}
