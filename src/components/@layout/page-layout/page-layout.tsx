'use client'

import { PropsWithChildren, useCallback, useEffect, useState } from 'react'

import { ContainerProps, Grid, GridItem, GridItemProps } from '@chakra-ui/react'
import { keyframes } from '@emotion/react'

import { LAYOUT } from '@/constants/layout'

import { PageLayoutFooter } from './components/page-layout-footer'
import { PageLayoutHeader } from './components/page-layout-header'

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
  const [isScroll, setIsScroll] = useState(false)

  const handleScroll = useCallback(() => {
    setIsScroll(window.scrollY > 66)
  }, [])

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [handleScroll])

  return (
    <Grid
      w={'100%'}
      minW={'100%'}
      minH={'100vh'}
      pos={'relative'}
      gridAutoColumns={'1fr'}
      bg={'background.basic.1'}
      gridTemplateRows={`${LAYOUT.HEADER.HEIGHT} 1fr auto`}
      templateAreas={`"header" "main" "footer"`}
    >
      <GridItem
        area={'header'}
        as={'header'}
        position="sticky"
        zIndex="sticky"
        w={'100%'}
        display="flex"
        justifyContent={'center'}
        pt={isScroll ? '10px' : '0'}
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
      <GridItem area={'footer'} as={'footer'} h={'100%'} w={'100%'} py={'30px'}>
        {footer}
      </GridItem>
    </Grid>
  )
}
