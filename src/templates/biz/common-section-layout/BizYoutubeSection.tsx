import { useState } from 'react'

import Link from 'next/link'

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

  return (
    <Box
      w={'100%'}
      py={'100px 200px'}
      bg={'linear-gradient(180deg, #FFF 0%, #CAD7FF 141.55%)'}
    >
      <Container maxW={'1280px'}>
        <HStack justify={'space-between'}>
          <VStack gap={'40px'} align={'stretch'}>
            <VStack gap={'10px'} align={'stretch'}>
              <Text textStyle={'pre-display-4'} color={'grey.10'}>
                {data.title}
              </Text>
              <Text textStyle={'pre-body-4'} color={'grey.7'}>
                {data.description}
              </Text>
            </VStack>
            <HStack gap={'8px'}>
              <Button size={'md'}>{data.buttonText}</Button>
              <Link
                href={
                  data.moreInfoLink || 'https://www.youtube.com/@kinkoskorea'
                }
                target={data.moreInfoLink ? '_self' : '_blank'}
              >
                <Button variant={'outline'} size="md">
                  {data.moreInfoButtonText || '영상으로 미리보기'}
                </Button>
              </Link>
            </HStack>
          </VStack>

          <VStack gap={'16px'} align={'stretch'}>
            <Box borderRadius={'28px'} overflow={'hidden'}>
              <iframe
                src={`https://www.youtube.com/embed/${youtubeVideos[videoIndex].id}`}
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                height={'360px'}
                width={'640px'}
              />
            </Box>
            <HStack justify={'end'}>
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
