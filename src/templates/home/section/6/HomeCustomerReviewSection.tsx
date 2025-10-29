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
      '기업 전용 인쇄몰을 활용하여 업무 효율이 높아졌고, 전국 가맹점에 동일한 홍보물을 공급할 수 있어 관리가 수월해졌어요.​',
    company: '크린토피아',
    name: '황선경',
    color: ['#8270DB', '#C1B7F5'],
  },
  {
    review:
      '여러 단계를 거치던 판매 과정을 킨코스에서 주문부터 제작, 배송까지 한 번에 처리할 수 있어 업무 효율이 높아졌어요. 홍보물 퀄리티도 기대 이상으로 만족스러워요!​',
    company: '아소비교육',
    name: '이현진',
    color: ['#F4B240', '#F5D3B7'],
  },
  {
    review:
      '문의 후 빠른 대응과 높은 품질의 결과물을 받아 업무 진행에 큰 도움이 되었고, 전반적인 협업 과정이 매우 만족스러웠습니다.',
    company: '텐퍼센트커피',
    name: '강지현',
    color: ['#61CFE0', '#B7DDF5'],
  },
  {
    review:
      '긴급한 요청에도 빠르게 대응해 주셔서 프로젝트 일정에 큰 도움이 되었어요. 꼼꼼한 확인은 물론, 인쇄 품질도 좋아서 믿고 맡길 수 있었습니다!​',
    company: '현대드림투어',
    name: '김효진',
    color: ['#E85ABE', '#F4B7F5'],
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
                    color={review.color as [string, string]}
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
