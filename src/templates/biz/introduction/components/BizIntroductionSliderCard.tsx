'use client'

import * as React from 'react'

import {
  Box,
  Card,
  HStack,
  Image,
  LinkBox,
  LinkOverlay,
  Text,
  VStack,
} from '@chakra-ui/react'
import { ArrowUpRightIcon } from '@phosphor-icons/react/dist/ssr'

export interface BizIntroductionSliderCardProps {
  image: string
  badgeText: string
  titleText: string
  buttons: Array<
    | {
        text: string
        href: string
        icon?: React.ReactNode
      }
    | Array<{
        text: string
        href: string
        icon?: React.ReactNode
      }>
  >
}

export const BizIntroductionSliderCard = React.forwardRef<
  HTMLDivElement,
  BizIntroductionSliderCardProps
>(function BizIntroductionSliderCard(props, ref) {
  const { image, badgeText, titleText, buttons } = props

  return (
    <Card.Root
      ref={ref}
      w={{
        lg: '1280px',
        sm: 'calc(100vw - 120px)',
        base: 'calc(100vw - 56px)',
      }}
      borderRadius="28px"
      border={'none'}
      p={{ lg: '56px', sm: '40px', base: '20px' }}
    >
      <HStack
        gap={{ sm: '40px', base: '28px' }}
        w="100%"
        align="stretch"
        justify={'space-between'}
        flexDir={{ base: 'column', lg: 'row' }}
      >
        {/* 이미지 영역 */}
        <Box
          w={{ lg: '600px', base: '100%' }}
          h={{ lg: '480px', sm: '400px', base: '240px' }}
          borderRadius="28px"
          overflow="hidden"
          position="relative"
          flexShrink={0}
        >
          <Image
            src={image}
            alt=""
            w="100%"
            h="100%"
            objectFit="cover"
            objectPosition="50% 50%"
            borderRadius="28px"
          />
        </Box>

        {/* 텍스트 콘텐츠 영역 */}
        <VStack
          gap={{ sm: '32px', base: '28px' }}
          align="stretch"
          w={{ lg: '430px', base: '100%' }}
          flexShrink={0}
        >
          {/* 제목 영역 */}
          <VStack gap="10px" align="stretch">
            <Text textStyle={'pre-heading-4'} color={'secondary.4'}>
              {badgeText}
            </Text>
            <Text textStyle={'pre-display-4'} whiteSpace={{ base: 'pre-wrap' }}>
              {titleText}
            </Text>
          </VStack>

          {/* 버튼 영역 */}
          <VStack gap={{ lg: '8px', base: '6px' }} align="stretch">
            {buttons.map((button, index) => {
              if (Array.isArray(button)) {
                return (
                  <HStack w={'100%'} key={index}>
                    {button.map((item, index) => (
                      <LinkBox
                        w={'100%'}
                        as="div"
                        key={index}
                        bg="rgba(202, 215, 255, 0.45)"
                        borderRadius="8px"
                      >
                        <HStack
                          h={{ lg: '58px', base: '48px' }}
                          px={{ lg: '28px', base: '20px' }}
                          justify="space-between"
                          align="center"
                          borderRadius="10px"
                        >
                          <LinkOverlay
                            lineHeight={1}
                            href={item.href}
                            _hover={{ textDecoration: 'none' }}
                          >
                            <Text
                              as="span"
                              textStyle={'pre-body-1'}
                              color={'primary.4'}
                            >
                              {item.text}
                            </Text>
                          </LinkOverlay>
                          <Box display={{ base: 'none', sm: 'block' }}>
                            <ArrowUpRightIcon color={'#013FFC'} size={'24px'} />
                          </Box>
                        </HStack>
                      </LinkBox>
                    ))}
                  </HStack>
                )
              }

              return (
                <LinkBox
                  as="div"
                  key={index}
                  bg="rgba(202, 215, 255, 0.45)"
                  borderRadius="8px"
                >
                  <HStack
                    h={{ lg: '58px', base: '48px' }}
                    px={{ lg: '28px', base: '20px' }}
                    justify="space-between"
                    align="center"
                    borderRadius="10px"
                  >
                    <LinkOverlay
                      lineHeight={1}
                      href={button.href}
                      _hover={{ textDecoration: 'none' }}
                    >
                      <Text
                        as="span"
                        textStyle={'pre-body-1'}
                        color={'primary.4'}
                      >
                        {button.text}
                      </Text>
                    </LinkOverlay>
                    <Box display={{ base: 'none', sm: 'block' }}>
                      <ArrowUpRightIcon color={'#013FFC'} size={'24px'} />
                    </Box>
                  </HStack>
                </LinkBox>
              )
            })}
          </VStack>
        </VStack>
      </HStack>
    </Card.Root>
  )
})
