'use client'

import { Box, Container } from '@chakra-ui/react'

import { useGetHomeConfigHelpArticleQuery } from '@/generated/apis/HomeApi/HomeApi.query'
import { HomeSolutionSlider } from '@/templates/home/section/2/components/HomeSolutionSlider'

// 샘플 데이터
const sampleSlides = [
  {
    title: '브랜딩 디자인',
    image: '/images/home/solutions/solutions-slide-item.png',
  },
  {
    title: '굿즈 기획&제작',
    image: '/images/home/solutions/solutions-slide-item.png',
  },
  {
    title: '매장 POP 디자인',
    image: '/images/home/solutions/solutions-slide-item.png',
  },
  {
    title: 'VMD(3D) 제작',
    image: '/images/home/solutions/solutions-slide-item.png',
  },
  {
    title: '안전 사인물 제작관리',
    image: '/images/home/solutions/solutions-slide-item.png',
  },
  {
    title: '시즌성 인쇄물 제작관리',
    image: '/images/home/solutions/solutions-slide-item.png',
  },
  {
    title: '통합제작 All-in-One',
    image: '/images/home/solutions/solutions-slide-item.png',
  },
  {
    title: '통합제작 물류관리',
    image: '/images/home/solutions/solutions-slide-item.png',
  },
  {
    title: '디지털 영상 제작',
    image: '/images/home/solutions/solutions-slide-item.png',
  },
  {
    title: 'AR 인쇄물 제작',
    image: '/images/home/solutions/solutions-slide-item.png',
  },
  {
    title: 'EX감성 분석',
    image: '/images/home/solutions/solutions-slide-item.png',
  },
  {
    title: '온라인 명함 주문 관리',
    image: '/images/home/solutions/solutions-slide-item.png',
  },
  {
    title: '기업 전용 인쇄몰',
    image: '/images/home/solutions/solutions-slide-item.png',
  },
  {
    title: '프랜차이즈 전용 인쇄몰',
    image: '/images/home/solutions/solutions-slide-item.png',
  },
]

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
