import { Flex, Image, Text, VStack } from '@chakra-ui/react'

import dayjs from 'dayjs'

import {
  GetCustomerReviewDetailTypeEnumType,
  GetCustomerReviewRelationParamsTypeEnumType,
} from '@/generated/apis/@types/data-contracts'
import { useGetCustomerReviewRelationQuery } from '@/generated/apis/CustomerReviewApi/CustomerReviewApi.query'

interface CustomerReviewCardProps {
  image: string
  author?: string
  title: string
  date: string
  id: number
}

const ReleatedCustomerReviewCard = ({
  image,
  author,
  title,
  date,
  id,
}: CustomerReviewCardProps) => {
  const truncateTitle = (text: string, maxLength: number = 45) => {
    if (text.length <= maxLength) return text
    return text.slice(0, maxLength) + '...'
  }

  return (
    <Flex
      gap={'80px'}
      alignItems={'center'}
      pb={'24px'}
      borderBottom={'1px solid'}
      borderColor={'border.basic.1'}
    >
      <VStack align="start" gap="16px" width="100%">
        <VStack align="start" gap="8px" width="100%">
          <Text textStyle="pre-body-3">{author}</Text>
          <Text
            textStyle="pre-heading-3"
            css={{
              display: '-webkit-box',
              WebkitLineClamp: 2,
              WebkitBoxOrient: 'vertical',
              overflow: 'hidden',
              textOverflow: 'ellipsis',
            }}
          >
            {truncateTitle(title)}
          </Text>
        </VStack>
        <Text
          fontSize="14px"
          fontWeight="400"
          color="grey.600"
          lineHeight="1.6"
          letterSpacing="-0.28px"
          fontFamily="Pretendard Variable"
        >
          {dayjs(date).format('YYYY.MM.DD')}
        </Text>
      </VStack>

      <Image src={image} alt={title} width={198} height={120} />
    </Flex>
  )
}

export const RelatedReviewList = ({
  type,
  id,
}: {
  type?: GetCustomerReviewDetailTypeEnumType
  id?: number
}) => {
  const { data } = useGetCustomerReviewRelationQuery({
    variables: {
      query: {
        type: type as any,
        id: id!,
      },
    },
    options: {
      enabled: !!type && !!id,
    },
  })

  if (!data?.data?.length) return null

  return (
    <VStack gap={'32px'} align="start" w="100%">
      <Text textStyle={'pre-heading-1'}>고객님을 위한 추가 스토리</Text>
      <VStack w={'100%'} align={'stretch'}>
        {data?.data?.map((item) => (
          <ReleatedCustomerReviewCard
            key={item.id}
            id={item.id}
            image={item.thumbnailImageUrl.url ?? ''}
            author={'똑똑한 개발자'}
            title={item.title}
            date={item.createdAt}
          />
        ))}
      </VStack>
    </VStack>
  )
}
