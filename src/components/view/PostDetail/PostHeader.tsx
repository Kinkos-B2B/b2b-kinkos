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
      h={{ base: '300px', sm: '400px' }}
      w={'100%'}
      bg={`linear-gradient(270deg, rgba(0, 0, 0, 0.00) 0%, rgba(0, 0, 0, 0.70) 70%), url('${HeaderImage}') lightgray 50% / cover no-repeat`}
      bgSize={'cover'}
      bgPos={'center'}
      position={'relative'}
      display={'flex'}
      alignItems={'center'}
      justifyContent={'center'}
    >
      <VStack
        gap={'0px'}
        px={{ base: '20px', sm: '40px' }}
        maxW={{ base: '100%', sm: '688px' }}
      >
        <Text
          color={'grey.2'}
          textStyle={{ base: 'pre-body-6', sm: 'pre-body-6' }}
        >
          {dayjs(header.createdAt).format('YYYY.MM.DD')}
        </Text>
        <Text
          mt={{ base: '14px' }}
          color={'grey.0'}
          textStyle={{ base: 'pre-heading-1', sm: 'pre-display-3' }}
          textAlign={'center'}
        >
          {header.title}
        </Text>
        {header.companyName && (
          <Flex
            mt={{ base: '24px' }}
            p={{ base: '4px 12px', sm: '6px 16px' }}
            borderRadius={'full'}
            bg={'whitetrnsparent.2'}
            gap={{ base: '8px', sm: '10px' }}
            alignItems={'center'}
            justifyContent={'center'}
            flexWrap={'wrap'}
            w={{ base: '100%', sm: 'auto' }}
            flexDir={{ base: 'column', sm: 'row' }}
          >
            <Text
              color={'grey.2'}
              textStyle={{ base: 'pre-body-6', sm: 'pre-body-6' }}
            >
              {header.companyName} {header.departmentName}
            </Text>
            <Separator
              display={{ base: 'none', sm: 'block' }}
              h={{ base: '10px', sm: '12px' }}
              w={'1px'}
              orientation="vertical"
              color="border.basic.4"
            />
            <Text
              color={'grey.2'}
              textStyle={{ base: 'pre-body-6', sm: 'pre-body-6' }}
            >
              {header.positionName + ' '}
              {header.contactName}
            </Text>
          </Flex>
        )}
      </VStack>
    </Box>
  )
}
