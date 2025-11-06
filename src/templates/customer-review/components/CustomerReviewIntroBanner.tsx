import { useEffect, useRef, useState } from 'react'

import { useRouter } from 'next/navigation'

import {
  Badge,
  Box,
  Button,
  Container,
  Flex,
  HStack,
  IconButton,
  Image,
  Text,
  VStack,
} from '@chakra-ui/react'
import { PlayIcon } from '@phosphor-icons/react/dist/ssr'

import { VideoModal } from '@/components/ui/video-modal'
import { ROUTES } from '@/constants/routes'
import { GetCustomerReviewMainConfigType } from '@/generated/apis/@types/data-contracts'

interface Props {
  data?: GetCustomerReviewMainConfigType
}

export const CustomerReviewIntroBanner = ({ data }: Props) => {
  const router = useRouter()
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false)

  return (
    <Box w={'100%'} px={{ base: '0px', lg: '40px' }}>
      <Box
        w={'100%'}
        bgSize="cover"
        borderRadius={{ base: '0px', lg: '28px' }}
        bgPos="center"
        bgRepeat="no-repeat"
        bgImage="url('/images/customer-review/banner-bg.png')"
        display="flex"
        justifyContent="center"
        alignItems="center"
        px={{ base: '20px', sm: '40px' }}
      >
        <Box
          maxW="1280px"
          position="relative"
          w="100%"
          py={{ base: '60px', sm: '80px', lg: '0px' }}
          overflow="hidden"
          h={{ base: 'auto', lg: '480px' }}
          alignContent={'center'}
        >
          <Flex
            position="relative"
            h="100%"
            justify="space-between"
            align={{ base: 'start', lg: 'center' }}
            flexDirection={{ base: 'column', lg: 'row' }}
            gap={{ base: '40px', sm: '64px', lg: '0px' }}
          >
            <VStack
              align="flex-start"
              gap={{ base: '28px', sm: '32px', lg: '40px' }}
            >
              <VStack gap="20px" alignItems="flex-start">
                <Badge
                  bg="#FFF5EF"
                  color="secondary.4"
                  size="lg"
                  lineHeight={'1'}
                >
                  고객스토리
                </Badge>
                <Text
                  textStyle="pre-display-3"
                  color="grey.10"
                  whiteSpace="pre-line"
                >
                  {`킨코스 솔루션 도입 후\n달라진 점을 직접 확인하세요`}
                </Text>
              </VStack>
              <Button
                onClick={() => {
                  router.push(ROUTES.SOLUTIONS.DESIGN.BRANDING)
                }}
              >
                <Text>솔루션 보러가기</Text>
              </Button>
            </VStack>
            <Image
              src={'/images/customer-review/banner-img.png'}
              alt="customer-review-intro-banner-image"
              width={586}
              height={330}
              borderRadius={'28px'}
            />
            {/* <Box
              position="relative"
              borderRadius="28px"
              bg="grey.8"
              w={{ base: '100%', lg: '586px' }}
              h={{ base: 'auto', lg: '330px' }}
              aspectRatio={{ base: '1.7/ 1' }}
              display="flex"
              alignItems="center"
              justifyContent="center"
              flexShrink="0"
            >
              <video
                src={data?.headerGifUrl?.url}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  position: 'absolute',
                  top: '0',
                  left: '0',
                  borderRadius: '28px',
                }}
                autoPlay={false}
                loop
                muted
                playsInline
              />
              <IconButton
                position="relative"
                zIndex="1"
                aria-label="비디오 재생"
                w="60px"
                h="60px"
                borderRadius="50%"
                bg="whitetrnsparent.5"
                border="none"
                color="grey.10"
                transition="all 0.2s"
                onClick={() => {
                  setIsVideoModalOpen(true)
                }}
              >
                <PlayIcon weight="fill" color={'#9FA4A9'} size={24} />
              </IconButton>
            </Box> */}
          </Flex>
        </Box>
      </Box>

      {/* 비디오 모달 */}
      <VideoModal
        isOpen={isVideoModalOpen}
        onClose={() => setIsVideoModalOpen(false)}
        videoUrl={data?.headerGifUrl?.url}
      />
    </Box>
  )
}
