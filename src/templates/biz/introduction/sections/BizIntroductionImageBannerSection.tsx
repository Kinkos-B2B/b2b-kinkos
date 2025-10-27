'use client'

import { Box, Container, Image, Text, VStack } from '@chakra-ui/react'

export const BizIntroductionImageBannerSection = () => {
  return (
    <Box display="flex" alignItems="center" bg={'secondary.4'} w={'100%'}>
      <Container
        display={'flex'}
        alignItems={'center'}
        py={{ lg: '0px', sm: '80px 30px', base: '60px 20px' }}
        justifyContent={'space-between'}
        flexDirection={{ lg: 'row', base: 'column' }}
        gap={{ base: '20px', sm: '0px' }}
      >
        <Box
          textAlign={{ lg: 'left', base: 'center' }}
          display="flex"
          flexDirection="column"
          gap="12px"
        >
          <Text
            textStyle="pre-display-3"
            color="grey.0"
            whiteSpace={{ sm: 'nowrap', base: 'pre-wrap' }}
          >
            {'한 장의 출력부터\n대규모 프로젝트까지'},
          </Text>
          <Text
            textStyle="pre-heading-1"
            color="grey.0"
            whiteSpace={{ sm: 'nowrap', base: 'pre-wrap' }}
          >
            킨코스는 귀사의 성공을 위한{'\n'}가장 강력한 실행력입니다
          </Text>
        </Box>
        <VStack gap="0" alignItems={{ base: 'end' }} w={'100%'}>
          <Image
            src="/images/biz/introduce/banner-image.png"
            alt="Kinkos Business"
            w={{ lg: '340px', sm: '280px', base: '200px' }}
            h={{ lg: '340px', sm: '280px', base: '200px' }}
            style={{
              objectFit: 'cover',
              objectPosition: 'center',
            }}
          />
        </VStack>
      </Container>
    </Box>
  )
}
