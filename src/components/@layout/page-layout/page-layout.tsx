'use client'

import {
  PropsWithChildren,
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react'

import {
  ContainerProps,
  Drawer,
  Flex,
  Grid,
  GridItem,
  IconButton,
  Portal,
  useDisclosure,
} from '@chakra-ui/react'
import { useGSAP } from '@gsap/react'
import { XIcon } from '@phosphor-icons/react/dist/ssr'

import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

import { PannelProvider } from '@/components/PannelContext'
import { LAYOUT } from '@/constants/layout'

import { PageLayoutFooter } from './components/page-layout-footer'
import { PageLayoutHeader } from './components/page-layout-header'

gsap.registerPlugin(ScrollTrigger)

interface PageLayoutProps {
  header?: React.ReactNode
  footer?: React.ReactNode
  containerProps?: ContainerProps
}

export const PageLayout = ({
  header = <PageLayoutHeader />,
  footer = <PageLayoutFooter />,
  containerProps,
  children,
}: PropsWithChildren<PageLayoutProps>) => {
  const { open, onOpen, onClose, onToggle } = useDisclosure()
  const headerRef = useRef<HTMLDivElement>(null)

  useGSAP(() => {
    if (headerRef.current) {
      ScrollTrigger.create({
        start: 'top+=91px top+=91px',
        end: 'max',
        onUpdate: (self) => {
          if (self.direction === -1) {
            gsap.to(headerRef.current, {
              top: '0px',
              duration: 0.3,
              overwrite: 'auto',
            })
            headerRef.current?.setAttribute('data-header-hidden', 'false')
          } else if (self.direction === 1) {
            gsap.to(headerRef.current, {
              top: '-120px',
              duration: 0.3,
              overwrite: 'auto',
            })
            headerRef.current?.setAttribute('data-header-hidden', 'true')
          }
        },
      })
    }
  })

  return (
    <PannelProvider isOpen={open} onOpen={onOpen} onClose={onClose}>
      <Grid
        w={'100%'}
        minW={'100%'}
        minH={'100vh'}
        pos={'relative'}
        gridAutoColumns={'1fr'}
        bg={'background.basic.1'}
        gridTemplateRows={{
          base: `${LAYOUT.HEADER.HEIGHT_MOBILE} 1fr auto`,
          lg: `${LAYOUT.HEADER.HEIGHT} 1fr auto`,
        }}
        templateAreas={`"header" "main" "footer"`}
      >
        <GridItem
          area={'header'}
          as={'header'}
          ref={headerRef}
          position="fixed"
          zIndex="sticky"
          w={'100%'}
          display="flex"
          className="page-layout-header"
          justifyContent={'center'}
          bg="background.basic.1"
          top={'0px'}
          css={{
            '&[data-scrolled="true"]': {
              boxShadow: '0px 8px 12px 0px rgba(0,0,0,0.08)',
            },
          }}
        >
          {header}
        </GridItem>
        <GridItem
          as={'main'}
          area={'main'}
          w={'100%'}
          minW={'100%'}
          {...containerProps}
        >
          {children}
        </GridItem>
        <GridItem area={'footer'} as={'footer'} h={'100%'} w={'100%'}>
          {footer}
        </GridItem>
      </Grid>
      <Drawer.Root open={open} onOpenChange={onToggle}>
        <Drawer.Backdrop bg={'greytransparent.4'} />

        <Portal>
          <Drawer.Positioner>
            <Drawer.Content
              w={{ base: '100%', sm: '50%' }}
              maxW={{ base: '100%', sm: '720px' }}
              boxShadow={'0px 4px 32px 0px rgba(184, 188, 200, 0.40)'}
            >
              <Drawer.CloseTrigger
                pos={'absolute'}
                top={'12px'}
                zIndex={1000000000000}
                right={'12px'}
                display={'flex'}
                alignItems={'center'}
                justifyContent={'center'}
                boxSize={'50px'}
              >
                <IconButton
                  variant="ghost"
                  bg={'transparent'}
                  border="none"
                  colorPalette="grey"
                  borderRadius="8px"
                >
                  <XIcon size={30} color="grey.8" />
                </IconButton>
              </Drawer.CloseTrigger>
              <Drawer.Body p={'0px'}>
                <Flex
                  bg={'white'}
                  h={'100%'}
                  w={'100%'}
                  direction={'column'}
                  zIndex={10000}
                >
                  <iframe
                    src={'https://www.pluuug.com/form/gmD1ac03mB'}
                    style={{
                      display: 'flex',
                      maxHeight: '100dvh',
                      height: '100%',
                    }}
                  />
                </Flex>
              </Drawer.Body>
            </Drawer.Content>
          </Drawer.Positioner>
        </Portal>
      </Drawer.Root>
    </PannelProvider>
  )
}
