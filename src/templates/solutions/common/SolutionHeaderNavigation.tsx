import { useRef } from 'react'

import { Tabs } from '@chakra-ui/react'
import { useGSAP } from '@gsap/react'

import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

import { SOLUTION_NAVIGATION_ITEMS } from '@/components/@layout/page-layout/components/page-layout-header/header-navigation-constant'
import { ROUTES } from '@/constants/routes'

export const SolutionHeaderNavigation = () => {
  const headerRef = useRef<HTMLDivElement>(null)

  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger)

    ScrollTrigger.create({
      trigger: headerRef.current,
      start: 'top top+=91px',
      end: 'max',
      onUpdate: (self) => {
        if (self.direction === 1) {
          gsap.to(headerRef.current, {
            top: '0px',
            duration: 0.3,
            overwrite: 'auto',
          })
        } else {
          gsap.to(headerRef.current, {
            top: '90px',
            duration: 0.3,
            overwrite: 'auto',
          })
        }
      },
    })
  })

  return (
    <Tabs.Root
      variant={'subtle'}
      size={'small'}
      ref={headerRef}
      position={'sticky'}
      top={'90px'}
      defaultValue={ROUTES.SOLUTIONS.ONLINE_ORDER.CORPORATE_PRINTING}
    >
      <Tabs.List>
        {SOLUTION_NAVIGATION_ITEMS.subItems?.map((item) =>
          item.items?.map((item) => (
            <Tabs.Trigger key={item.label} value={item.href || ''}>
              {item.label}
            </Tabs.Trigger>
          )),
        )}
      </Tabs.List>
    </Tabs.Root>
  )
}
