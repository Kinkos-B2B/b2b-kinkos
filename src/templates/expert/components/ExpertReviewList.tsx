import { Box, Flex, Skeleton } from '@chakra-ui/react'

import Marquee from 'react-fast-marquee'

import { GetExpertMainCustomerReviewResponseType } from '@/generated/apis/@types/data-contracts'
import { ExpertReviewCardItem } from '@/templates/expert/components/ExpertReviewCardItem'
import { SearchResultCardSkeleton } from '@/templates/search/section/SearchResultSkeleton'

interface Props {
  reviews: GetExpertMainCustomerReviewResponseType[]
  isLoading: boolean
}

export const ExpertReviewList = ({ reviews, isLoading }: Props) => {
  if (isLoading) {
    return (
      <Flex w={'100%'} gap={'20px'} maxW={'calc(100% - 80px)'} mx={'auto'}>
        {Array.from({ length: 4 }, (_, index) => (
          <Box key={index} w="100%" h="100%">
            <Skeleton h={{ base: '225px', sm: '250px' }} borderRadius="28px" />
          </Box>
        ))}
      </Flex>
    )
  }
  return (
    <Box>
      <Marquee autoFill>
        {reviews?.map((expertReview, index) => (
          <Box
            key={`${expertReview.id}-${index}`}
            ml={{ base: '20px', lg: '24px' }}
          >
            <ExpertReviewCardItem expertReview={expertReview} />
          </Box>
        ))}
      </Marquee>
    </Box>
  )
}
