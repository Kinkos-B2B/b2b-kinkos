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
      p={{ lg: '20px 32px', sm: '20px 28px', base: '20px' }}
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
  name: [string, string] | string
  description?: string
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
  name: [string, string] | string
  description?: string
}) => {
  return (
    <HStack gap="9px" align="center">
      <Text textStyle="pre-body-3" color="grey.7">
        {Array.isArray(name) ? name[0] : name}
      </Text>
      <Box
        w="1px"
        h="12px"
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <Box w="1px" h="12px" bg="border.basic.2" />
      </Box>
      {Array.isArray(name) && name.length > 1 && (
        <Text textStyle="pre-body-3" color="grey.7">
          {name[1]}
        </Text>
      )}
      {description && (
        <Text textStyle="pre-body-4" color="grey.7" flex="1">
          {description}
        </Text>
      )}
    </HStack>
  )
}
