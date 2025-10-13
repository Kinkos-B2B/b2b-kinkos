import { Box } from '@chakra-ui/react'

import Marquee from 'react-fast-marquee'

import { GetExpertMainCustomerReviewResponseType } from '@/generated/apis/@types/data-contracts'
import { useGetExpertMainQuery } from '@/generated/apis/ExpertApi/ExpertApi.query'
import { ExpertReviewCardItem } from '@/templates/expert/components/ExpertReviewCardItem'

const mockData = {
  customerReview: [
    {
      expert: {
        nickname: 'John Doe',
        profileImageUrl: { url: '/images/120.png' },
        industryList: ['VOD', 'POSM(POP)', '판촉물', '홍보물 제작'],
      },
      body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
  ],
}

interface Props {
  reviews: GetExpertMainCustomerReviewResponseType[]
}

export const ExportReviewList = ({ reviews }: Props) => {
  return (
    <Box>
      <Marquee autoFill>
        {reviews?.map((expertReview, index) => (
          <Box key={`${expertReview.expert?.nickname}-${index}`} ml={'24px'}>
            <ExpertReviewCardItem expertReview={expertReview} />
          </Box>
        ))}
      </Marquee>
    </Box>
  )
}
