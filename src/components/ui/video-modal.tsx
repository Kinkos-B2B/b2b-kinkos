'use client'

import { useEffect, useRef } from 'react'

import { Box, Dialog, IconButton, Portal } from '@chakra-ui/react'
import { X } from '@phosphor-icons/react/dist/ssr'

interface VideoModalProps {
  isOpen: boolean
  onClose: () => void
  videoUrl?: string
}

export const VideoModal = ({ isOpen, onClose, videoUrl }: VideoModalProps) => {
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    if (isOpen && videoRef.current) {
      // 모달이 열릴 때 비디오 자동 재생
      videoRef.current.play().catch((error) => {
        console.warn('비디오 자동 재생 실패:', error)
      })
    }
  }, [isOpen])

  const handleClose = () => {
    if (videoRef.current) {
      videoRef.current.pause()
    }
    onClose()
  }

  if (!isOpen) return null

  return (
    <Portal>
      <Dialog.Root open={isOpen} onOpenChange={handleClose}>
        <Dialog.Backdrop
          bg="rgba(0, 0, 0, 0.9)"
          position="fixed"
          top="0"
          left="0"
          w="100vw"
          h="100vh"
          zIndex="9999"
        />
        <Dialog.Positioner
          position="fixed"
          top="0"
          left="0"
          w="100vw"
          m={'0px'}
          h="100vh"
          p={'0'}
          zIndex="10000"
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <Dialog.Content
            bg="transparent"
            p="0"
            maxW="100vw"
            maxH="100vh"
            m={'0px'}
            w="100%"
            h="100%"
            display="flex"
            alignItems="center"
            justifyContent="center"
            position="relative"
          >
            {/* 닫기 버튼 */}
            <IconButton
              position="absolute"
              top="24px"
              right="24px"
              zIndex="10001"
              aria-label="모달 닫기"
              w="52px"
              h="52px"
              m={'0px'}
              borderRadius="8px"
              bg="greytransparent.4"
              color="white"
              border="none"
              onClick={handleClose}
              _hover={{
                bg: 'rgba(0, 0, 0, 0.7)',
              }}
            >
              <X size={24} />
            </IconButton>

            {/* 비디오 */}
            {videoUrl && (
              <Box
                w="100%"
                h="100%"
                display="flex"
                m={'0px'}
                p={'0'}
                alignItems="center"
                justifyContent="center"
              >
                <video
                  ref={videoRef}
                  src={videoUrl}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    borderRadius: '12px',
                  }}
                  autoPlay
                  loop
                  muted
                />
              </Box>
            )}
          </Dialog.Content>
        </Dialog.Positioner>
      </Dialog.Root>
    </Portal>
  )
}
