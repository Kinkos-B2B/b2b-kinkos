import { Box, Flex, Image, Separator, Text, VStack } from '@chakra-ui/react'

import dayjs from 'dayjs'

import { CustomerReviewHeaderType } from '@/generated/apis/@types/data-contracts'

const HeaderImage = '/images/customer-review/custom-review-detail-hedaer-bg.jpg'

interface PostHeaderProps {
  header: CustomerReviewHeaderType
}

export const PostHeader = ({ header }: PostHeaderProps) => {
  return (
    <Box
      h={'400px'}
      w={'100%'}
      bg={
        'linear-gradient(270deg, rgba(0, 0, 0, 0.00) 0%, rgba(0, 0, 0, 0.70) 70%), url(' +
        HeaderImage +
        ') lightgray 50% / cover no-repeat;'
      }
      bgSize={'cover'}
      bgPos={'center'}
      position={'relative'}
      display={'flex'}
      alignItems={'center'}
      justifyContent={'center'}
    >
      <VStack>
        <Text color={'grey.2'} textStyle={'pre-body-6'}>
          {dayjs(header.createdAt).format('YYYY.MM.DD')}
        </Text>
        <Text color={'grey.0'} textStyle={'pre-display-3'} mt={'16px'}>
          {header.title}
        </Text>
        {header.companyName && (
          <Flex
            mt={'24px'}
            p={'6px 16px'}
            borderRadius={'full'}
            bg={'whitetrnsparent.2'}
            gap={'10px'}
            alignItems={'center'}
            justifyContent={'center'}
          >
            <Text color={'grey.2'} textStyle={'pre-body-6'}>
              {header.companyName} {header.departmentName}
            </Text>
            <Separator
              h={'12px'}
              w={'1px'}
              orientation="vertical"
              color="border.basic.4"
            />
            <Text color={'grey.2'} textStyle={'pre-body-6'}>
              {header.positionName + ' '}
              {header.contactName}
            </Text>
          </Flex>
        )}
      </VStack>
    </Box>
  )
}
