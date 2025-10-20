'use client'

import {
  PropsWithChildren,
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react'

import { ContainerProps, Grid, GridItem } from '@chakra-ui/react'
import { useGSAP } from '@gsap/react'

import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

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
  //
  header = <PageLayoutHeader />,
  footer = <PageLayoutFooter />,
  containerProps,
  children,
}: PropsWithChildren<PageLayoutProps>) => {
  const headerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 91) {
        headerRef.current?.setAttribute('data-scrolled', 'true')
      } else {
        headerRef.current?.setAttribute('data-scrolled', 'false')
      }
    })
  }, [])

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
  )
}
