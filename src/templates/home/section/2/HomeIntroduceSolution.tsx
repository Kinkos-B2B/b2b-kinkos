'use client'

import { Box, Container } from '@chakra-ui/react'

import { SOLUTION_NAVIGATION_ITEMS } from '@/components/@layout/page-layout/components/page-layout-header/header-navigation-constant'
import { useGetHomeConfigHelpArticleQuery } from '@/generated/apis/HomeApi/HomeApi.query'
import { HomeSolutionSlider } from '@/templates/home/section/2/components/HomeSolutionSlider'

// 샘플 데이터
const sampleSlides =
  SOLUTION_NAVIGATION_ITEMS.subItems
    ?.flatMap((item) => item.items ?? [])
    ?.map((item) => ({
      title: item.label,
      image: '/images/home/solutions/solutions-slide-item.png',
    })) ?? []

export const HomeIntroduceSolution = () => {
  return (
    <Box
      bg="primary.1"
      py={{ base: '100px', sm: '120px 40px' }}
      w={'100%'}
      px={{ sm: '40px', base: '20px' }}
    >
      <HomeSolutionSlider slides={sampleSlides} />
    </Box>
  )
}
