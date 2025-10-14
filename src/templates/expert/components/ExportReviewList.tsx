import { Box } from '@chakra-ui/react'

import Marquee from 'react-fast-marquee'

import { GetExpertMainCustomerReviewResponseType } from '@/generated/apis/@types/data-contracts'
import { useGetExpertMainQuery } from '@/generated/apis/ExpertApi/ExpertApi.query'
import { ExpertReviewCardItem } from '@/templates/expert/components/ExpertReviewCardItem'

interface Props {
  reviews: GetExpertMainCustomerReviewResponseType[]
}

export const ExportReviewList = ({ reviews }: Props) => {
  return (
    <Box>
      <Marquee autoFill>
        {reviews?.map((expertReview, index) => (
          <Box
            key={`${expertReview.expert?.nickname}-${index}`}
            ml={{ base: '20px', lg: '24px' }}
          >
            <ExpertReviewCardItem expertReview={expertReview} />
          </Box>
        ))}
      </Marquee>
    </Box>
  )
}
