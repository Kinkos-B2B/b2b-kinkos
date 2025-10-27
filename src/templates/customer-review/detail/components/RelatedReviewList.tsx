import Image from 'next/image'
import Link from 'next/link'

import { Box, Container, Flex, Text, VStack } from '@chakra-ui/react'

import dayjs from 'dayjs'

import { GetCustomerReviewDetailTypeEnumType } from '@/generated/apis/@types/data-contracts'
import { useGetCustomerReviewRelationQuery } from '@/generated/apis/CustomerReviewApi/CustomerReviewApi.query'

interface CustomerReviewCardProps {
  image: string
  author?: string
  title: string
  date: string
  id: string
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
      gap={{ base: '20px', sm: '80px' }}
      alignItems={'center'}
      pb={'24px'}
      borderBottom={'1px solid'}
      borderColor={'border.basic.1'}
      width="100%"
      justifyContent={'space-between'}
    >
      <VStack align="start" gap="16px">
        <VStack align="start" gap="8px">
          <Text textStyle="pre-body-3">{author}</Text>
          <Text
            w={'100%'}
            textStyle={{ base: 'pre-heading-5', sm: 'pre-heading-3' }}
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
        <Text color="grey.600" textStyle="pre-body-4">
          {dayjs(date).format('YYYY. MM. DD')}
        </Text>
      </VStack>

      <Box
        position="relative"
        w={{ base: '100px', sm: '190px' }}
        h={{ base: '100px', sm: '120px' }}
      >
        <Image src={image} alt={title} fill style={{ objectFit: 'cover' }} />
      </Box>
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
        id: Number(id!),
      },
    },
    options: {
      enabled: !!type && !!id,
    },
  })

  if (!data?.data?.length) return null

  return (
    <Container maxW={'1280px'} py={{ base: '80px', sm: '100px', lg: '120px' }}>
      <VStack gap={'32px'} align="start" w="100%">
        <Text textStyle={'pre-heading-1'}>고객님을 위한 추가 스토리</Text>
        <VStack w={'100%'} align={'stretch'} gap={'28px'}>
          {data.data?.map((item) => (
            <Link href={`/customer-review/${item.slug}`} key={item.id}>
              <ReleatedCustomerReviewCard
                id={item.slug?.toString() ?? ''}
                image={item.thumbnailImageUrl.url ?? ''}
                author={item.companyName}
                title={item.title}
                date={item.createdAt}
              />
            </Link>
          ))}
        </VStack>
      </VStack>
    </Container>
  )
}
