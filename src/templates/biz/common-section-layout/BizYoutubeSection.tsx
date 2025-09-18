import { useState } from 'react'

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

export const BizViedoSection = () => {
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
                {'킨코스 생산 & 제작 센터를\n직접 방문해 보고 싶으신가요?'}
              </Text>
              <Text textStyle={'pre-body-4'} color={'grey.7'}>
                고객 관람을 요청하시면 전체 제작 과정을 투명하게 보여 드립니다.
              </Text>
            </VStack>
            <HStack gap={'8px'}>
              <Button size={'md'}>생산공장 관람요청</Button>
              <Button variant={'outline'} size="md">
                유튜브 보러가기
              </Button>
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
