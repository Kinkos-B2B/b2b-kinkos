'use client'

import Link from 'next/link'

import { Box, Button, Flex, HStack } from '@chakra-ui/react'

import { usePannelContext } from '@/components/PannelContext'
import { LAYOUT } from '@/constants/layout'
import { ROUTES } from '@/constants/routes'

import { LogoButton } from './logo-button'
import { MobileMenuDrawer } from './mobile-menu-drawer'

export const MobileHeader = () => {
  const { openPannel } = usePannelContext()

  return (
    <Box
      as="header"
      position="relative"
      top="0"
      left="0"
      w={'100%'}
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
        <HStack>
          <Button
            size={'md'}
            variant={'solid'}
            lineHeight={'1'}
            onClick={openPannel}
          >
            상담 신청
          </Button>
          <MobileMenuDrawer />
        </HStack>
      </Flex>
    </Box>
  )
}
