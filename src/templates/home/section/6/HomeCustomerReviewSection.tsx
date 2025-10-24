'use client'

import Link from 'next/link'

import { Grid, GridItem, chakra } from '@chakra-ui/react'

import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { ROUTES } from '@/constants/routes'

import { CompanyMarquee } from './components/CompanyMarquee'
import { CustomerReviewCard } from './components/CustomerReviewCard'

const customerReviews = [
  {
    review:
      '문의하고 작업물을 받기까지 시간이 정말 단축되었어요. 킨코스라면 믿고 맡길 수 있기에 추천드려요',
    avatar: '/images/home/customer-review/avatar-1.png',
    company: '똑똑한개발자',
    name: '이지은',
  },
  {
    review:
      '문의하고 작업물을 받기까지 시간이 정말 단축되었어요. 킨코스라면 믿고 맡길 수 있기에 추천드려요',
    avatar: '/images/home/customer-review/avatar-2.png',
    company: '똑똑한개발자',
    name: '이지은',
  },
  {
    review:
      '문의하고 작업물을 받기까지 시간이 정말 단축되었어요. 킨코스라면 믿고 맡길 수 있기에 추천드려요',
    avatar: '/images/home/customer-review/avatar-3.png',
    company: '똑똑한개발자',
    name: '이지은',
  },
  {
    review:
      '문의하고 작업물을 받기까지 시간이 정말 단축되었어요. 킨코스라면 믿고 맡길 수 있기에 추천드려요',
    avatar: '/images/home/customer-review/avatar-4.png',
    company: '똑똑한개발자',
    name: '이지은',
  },
]

export const HomeCustomerReviewSection = () => {
  return (
    <chakra.section
      bg="background.basic.1"
      py={{ base: '100px', sm: '140px', lg: '160px' }}
      w="100%"
    >
      <chakra.div
        display="flex"
        flexDirection="column"
        gap={{ base: '40px', sm: '56px' }}
        alignItems="center"
        justifyContent="flex-start"
        w="100%"
      >
        <chakra.div
          display="flex"
          flexDirection="column"
          gap="48px"
          alignItems="center"
          justifyContent="flex-start"
          w="100%"
        >
          <chakra.div
            display="flex"
            flexDirection="column"
            gap="56px"
            alignItems="center"
            justifyContent="flex-start"
            w="100%"
          >
            <chakra.div
              display="flex"
              flexDirection="column"
              gap="16px"
              alignItems="center"
              justifyContent="flex-start"
              w="100%"
            >
              <Badge
                variant="subtle"
                colorPalette="secondary"
                size="xl"
                showLeftIcon={false}
                showRightIcon={false}
              >
                고객후기
              </Badge>

              <chakra.h2
                textStyle="pre-display-3"
                color="grey.10"
                textAlign="center"
              >
                탄탄한 신뢰로 함께한 여정
              </chakra.h2>
            </chakra.div>
            <CompanyMarquee />
          </chakra.div>

          <chakra.div
            display="flex"
            gap="24px"
            maxW="1600px"
            alignItems="center"
            justifyContent="flex-start"
            w="100%"
            overflowX="auto"
            px={{ base: '20px', sm: '40px', lg: '0px' }}
          >
            <Grid
              templateColumns={{
                base: '1fr',
                sm: 'repeat(2, 1fr)',
                lg: 'repeat(4, 1fr)',
              }}
              gap={{ sm: '24px', base: '20px' }}
            >
              {customerReviews.map((review, index) => (
                <GridItem key={index}>
                  <CustomerReviewCard
                    review={review.review}
                    avatar={review.avatar}
                    company={review.company}
                    name={review.name}
                  />
                </GridItem>
              ))}
            </Grid>
          </chakra.div>
        </chakra.div>
        <Link href={ROUTES.CUSTOMER_REVIEW}>
          <Button size="lg" variant="solid" colorPalette="primary">
            고객후기 전체보기
          </Button>
        </Link>
      </chakra.div>
    </chakra.section>
  )
}
