import Image from 'next/image'

import { Box, Center, Container, Text, VStack } from '@chakra-ui/react'

import { ExpertHeaderType } from '@/generated/apis/@types/data-contracts'

export const ExpertDetailHeader = ({
  header,
}: {
  header: ExpertHeaderType
}) => {
  const imageUrl = header.headerImage?.url || ''

  return (
    <Box
      w={'100%'}
      h={{ base: 'auto', lg: '400px' }}
      overflow={'hidden'}
      position={'relative'}
      py={{ base: '60px 40px', sm: '80px 60px', lg: '35px' }}
    >
      {/* 배경 이미지 (확대 + 블러 + 컬러 필터) */}
      {imageUrl && (
        <Box
          position={'absolute'}
          top={0}
          left={0}
          right={0}
          bottom={0}
          w={'100%'}
          h={'100%'}
          zIndex={0}
        >
          <Image
            fill
            src={imageUrl}
            alt={''}
            style={{
              objectFit: 'cover',
              transform: 'scale(2)',
              filter: 'blur(68px) brightness(1.1) saturate(2)',
              opacity: 0.6,
            }}
            unoptimized
          />
        </Box>
      )}

      {/* 화이트 오버레이 (투명도 적용) */}
      <Box
        position={'absolute'}
        top={0}
        left={0}
        right={0}
        bottom={0}
        w={'100%'}
        h={'100%'}
        bg={'rgba(255, 255, 255, 0.7)'}
        zIndex={1}
      />

      {/* 컨텐츠 */}
      <Center position={'relative'} zIndex={2} w={'100%'} h={'100%'}>
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
            borderRadius={'28px'}
            bg={'rgba(255, 255, 255, 0.2)'}
            backdropFilter={'blur(10px)'}
            border={'1px solid rgba(255, 255, 255, 0.3)'}
            boxShadow={'0 8px 32px 0 rgba(31, 38, 135, 0.15)'}
          >
            <Image
              fill
              src={imageUrl}
              alt={header.headerImage?.alt || ''}
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
    </Box>
  )
}
