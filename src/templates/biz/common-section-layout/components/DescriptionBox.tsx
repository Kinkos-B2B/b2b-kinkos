import { PropsWithChildren } from 'react'

import { BoxProps, HStack, VStack } from '@chakra-ui/react'
import { Box, Text } from '@chakra-ui/react'

export const DescriptionBox = ({
  children,
  ...props
}: PropsWithChildren<BoxProps>) => {
  return (
    <Box
      bg="background.basic.2"
      borderRadius="28px"
      p="20px 32px"
      w="full"
      gap={'10px'}
      maxW="1280px"
      display="flex"
      flexDirection="column"
      {...props}
    >
      {children}
    </Box>
  )
}

export const DescriptionColumnTextBlock = ({
  name,
  description,
}: {
  name: string
  description: string
}) => {
  return (
    <VStack gap="2px" align="stretch">
      <Text textStyle="pre-body-5" color="grey.7">
        {name}
      </Text>
      <Text textStyle="pre-body-6" color="grey.7" flex="1">
        {description}
      </Text>
    </VStack>
  )
}

export const DescriptionRowTextBlock = ({
  name,
  description,
}: {
  name: string
  description: string
}) => {
  return (
    <HStack gap="9px" align="center" w="360px">
      <Text textStyle="pre-body-5" color="grey.7">
        {name}
      </Text>
      <Box
        w="12px"
        h="12px"
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <Box
          w="12px"
          h="0px"
          borderTop="1px solid"
          borderColor="border.basic.2"
          transform="rotate(90deg)"
        />
      </Box>
      <Text textStyle="pre-body-6" color="grey.7" flex="1">
        {description}
      </Text>
    </HStack>
  )
}
