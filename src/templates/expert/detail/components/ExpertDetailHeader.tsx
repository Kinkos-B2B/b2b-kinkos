import Image from 'next/image'

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
      h={{ base: 'auto', lg: '400px' }}
      overflow={'hidden'}
      py={{ base: '60px 40px', sm: '80px 60px', lg: '35px' }}
      bg={{
        lg: 'radial-gradient(56.8% 100% at 50% 100%, rgba(168, 225, 223, 0.50) 0%, rgba(183, 231, 197, 0.30) 30%, #FFF 90%)',
        base: 'radial-gradient(76.84% 100% at 50% 100%, rgba(168, 225, 223, 0.50) 0%, rgba(183, 231, 197, 0.30) 30%, #FFF 90%)',
      }}
    >
      <Container
        display={'flex'}
        flexDir={{ base: 'column', lg: 'row' }}
        justifyContent={'space-between'}
        alignItems={'center'}
        h={'100%'}
        gap={'64px'}
      >
        <VStack
          align={'start'}
          gap={{ base: '28px', sm: '20px', lg: '24px' }}
          w={{ base: '100%', lg: 'auto' }}
        >
          <Text textStyle={'pre-display-3'} color={'grey.10'}>
            {header.title}
          </Text>
          <Text textStyle={'pre-body-4'} color={'grey.9'}>
            {header.nickname}
          </Text>
        </VStack>
        <VStack
          w={{ base: '100%', sm: '608px', lg: '586px' }}
          h={{ base: 'auto', sm: '340px', lg: '330px' }}
          aspectRatio={'335 / 225'}
          position={'relative'}
        >
          <Image
            fill
            src={header.headerImage?.url || ''}
            alt="expert-image"
            style={{
              objectFit: 'cover',
              width: '100%',
              height: '100%',
              borderRadius: '28px',
            }}
          />
        </VStack>
      </Container>
    </Center>
  )
}
