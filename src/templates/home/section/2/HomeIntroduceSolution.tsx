'use client'

import { Box, Container } from '@chakra-ui/react'

import { useGetHomeConfigHelpArticleQuery } from '@/generated/apis/HomeApi/HomeApi.query'
import { HomeSolutionSlider } from '@/templates/home/section/2/components/HomeSolutionSlider'

// 샘플 데이터
const sampleSlides = [
  {
    title: '솔루션 1',
    image: '/images/home/solutions/solutions-slide-item.png',
  },
  {
    title: '솔루션 2',
    image: '/images/home/solutions/solutions-slide-item.png',
  },
  {
    title: '솔루션 3',
    image: '/images/home/solutions/solutions-slide-item.png',
  },
  {
    title: '솔루션 4',
    image: '/images/home/solutions/solutions-slide-item.png',
  },
  {
    title: '솔루션 5',
    image: '/images/home/solutions/solutions-slide-item.png',
  },
]

export const HomeIntroduceSolution = () => {
  return (
    <Box bg="primary.1" py="120px" w={'100%'}>
      <HomeSolutionSlider slides={sampleSlides} />
    </Box>
  )
}
