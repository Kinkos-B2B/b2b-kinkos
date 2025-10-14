'use client'

import * as React from 'react'

import Image from 'next/image'

import { Button, Flex, HStack, Text, VStack } from '@chakra-ui/react'

const imgImage = '/images/CTA-chat.png'

interface PluuugCTAProps {
  text: string
  buttons: { text: string; onClick: () => void }[]
}

export const PluuugCTA = ({ text, buttons }: PluuugCTAProps) => {
  return (
    <Flex
      py={'45px'}
      bg={'primary.3'}
      align="center"
      justify="center"
      flexDirection="column"
      borderRadius={'28px'}
      gap={'28px'}
    >
      <VStack gap={'12px'}>
        <Image src={imgImage} alt="CTA" width={50} height={50} />
        <Text textStyle={'pre-display-4'} color={'grey.0'} textAlign={'center'}>
          {text}
        </Text>
      </VStack>
      <HStack gap={'8px'} flexDir={{ base: 'column', sm: 'row' }}>
        {buttons.map((button, index) => (
          <Button
            variant={'outline'}
            onClick={button.onClick}
            w={{ base: '240px', sm: '180px' }}
            key={index}
          >
            {button.text}
          </Button>
        ))}
      </HStack>
    </Flex>
  )
}

export default PluuugCTA
