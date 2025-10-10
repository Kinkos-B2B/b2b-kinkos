import { Center, Container, Text, VStack } from '@chakra-ui/react'

import { ExpertHeaderType } from '@/generated/apis/@types/data-contracts'

export const ExpertDetailHeader = ({
  header,
}: {
  header: ExpertHeaderType
}) => {
  return (
    <Center
      w={'100%'}
      h={'400px'}
      overflow={'hidden'}
      py={'35px'}
      bg={
        'radial-gradient(56.8% 100% at 50% 100%, rgba(168, 225, 223, 0.50) 0%, rgba(183, 231, 197, 0.30) 30%, #FFF 90%)'
      }
    >
      <Container
        maxW={'1280px'}
        display={'flex'}
        justifyContent={'space-between'}
        alignItems={'center'}
        gap={'94px'}
        h={'100%'}
      >
        <VStack alignItems={'start'} gap={'24px'} flex={1}>
          <Text textStyle={'pre-display-3'} color={'grey.10'}>
            {header.title}
          </Text>
          <Text textStyle={'pre-body-4'} color={'grey.9'}>
            {header.nickname}
          </Text>
        </VStack>
        <VStack w={'100%'} h={'100%'} flex={1}>
          <img
            src={header.headerImage?.url || ''}
            alt="expert-image"
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              borderRadius: '28px',
            }}
          />
        </VStack>
      </Container>
    </Center>
  )
}
