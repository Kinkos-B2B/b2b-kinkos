import { useState } from 'react'

import Link from 'next/link'
import { useRouter } from 'next/navigation'

import {
  Box,
  Button,
  Container,
  Grid,
  HStack,
  IconButton,
  Text,
  VStack,
} from '@chakra-ui/react'
import { CaretLeftIcon, CaretRightIcon } from '@phosphor-icons/react/dist/ssr'

import { usePannelContext } from '@/components/PannelContext'

import { BizVideoSectionData } from '../types'

const youtubeVideos = [
  {
    id: 'dQw4w9WgXcQ',
    title: 'YouTube video player',
  },
  {
    id: 'dQw4w9WgXcQ',
    title: 'YouTube video player',
  },
  {
    id: 'dQw4w9WgXcQ',
    title: 'YouTube video player',
  },
  {
    id: 'dQw4w9WgXcQ',
    title: 'YouTube video player',
  },
]

interface Props {
  data: BizVideoSectionData
}

export const BizViedoSection = ({ data }: Props) => {
  const [videoIndex, setVideoIndex] = useState(0)
  const { openPannel, isOpen } = usePannelContext()
  const router = useRouter()

  console.log(isOpen)

  return (
    <Box
      w={'100%'}
      py={{ lg: '100px 200px', sm: '80px 120px', base: '64px 100px' }}
      bg={'linear-gradient(180deg, #FFF 0%, #CAD7FF 141.55%)'}
    >
      <Container maxW={'1280px'}>
        <HStack
          justify={'space-between'}
          gap={{ lg: 'auto', sm: '64px', base: '56px' }}
          flexDirection={{ lg: 'row', sm: 'column', base: 'column' }}
        >
          <VStack
            gap={{ base: '32px', sm: '40px' }}
            align={{ base: 'center', lg: 'stretch' }}
          >
            <VStack gap={'10px'} align={{ base: 'center', lg: 'stretch' }}>
              <Text
                textStyle={'pre-display-4'}
                color={'grey.10'}
                textAlign={{ base: 'center', lg: 'left' }}
              >
                {data.title}
              </Text>
              <Text
                textStyle={'pre-body-4'}
                color={'grey.7'}
                textAlign={{ base: 'center', lg: 'left' }}
              >
                {data.description}
              </Text>
            </VStack>
            <HStack gap={'8px'}>
              <Button
                size={'md'}
                onClick={() => {
                  if (data.buttonLink) {
                    router.push(data.buttonLink)
                  } else {
                    openPannel()
                  }
                }}
              >
                {data.buttonText}
              </Button>
              <Link
                href={
                  data.moreInfoLink?.url ||
                  'https://www.youtube.com/@kinkoskorea'
                }
                target={data.moreInfoLink?.target || '_blank'}
              >
                <Button variant={'outline'} size="md">
                  {data.moreInfoButtonText || '영상으로 미리보기'}
                </Button>
              </Link>
            </HStack>
          </VStack>

          <VStack
            gap={'16px'}
            marginX={'auto'}
            w={{ base: '100%', sm: 'auto' }}
          >
            <Box
              borderRadius={'28px'}
              overflow={'hidden'}
              w={{ base: '100%', sm: '640px', lg: '640px' }}
              h={{ base: 'auto', sm: '360px', lg: '360px' }}
              aspectRatio={'640 / 360'}
            >
              <iframe
                src={`https://www.youtube.com/embed/${youtubeVideos[videoIndex].id}`}
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                style={{ width: '100%', height: '100%' }}
              />
            </Box>
            <HStack justify={'end'} w={'full'}>
              <IconButton
                size={'md'}
                variant={'grey-capsule'}
                onClick={() => setVideoIndex(videoIndex - 1)}
                disabled={videoIndex === 0}
              >
                <CaretLeftIcon />
              </IconButton>
              <IconButton
                variant={'grey-capsule'}
                size={'md'}
                onClick={() => setVideoIndex(videoIndex + 1)}
                disabled={videoIndex === youtubeVideos.length - 1}
              >
                <CaretRightIcon />
              </IconButton>
            </HStack>
          </VStack>
        </HStack>
      </Container>
    </Box>
  )
}
