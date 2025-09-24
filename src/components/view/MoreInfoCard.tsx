import * as React from 'react'

import { Box, HStack, Text, VStack } from '@chakra-ui/react'

import { Button } from '@/components/ui/button'

export interface InfoCardProps {
  title: string
  description: string
  buttonText?: string
  icon?: React.ReactNode
  iconBgColor?: string
  onButtonClick?: () => void
}

export const InfoCard = React.forwardRef<HTMLDivElement, InfoCardProps>(
  function InfoCard(props, ref) {
    const {
      title,
      description,
      buttonText = '더 자세히 알아보기',
      icon,
      iconBgColor = 'accent.blue1',
      onButtonClick,
      ...rest
    } = props

    return (
      <Box
        ref={ref}
        bg="grey.0"
        borderRadius="28px"
        boxShadow="0px 20px 48px 0px rgba(1, 45, 181, 0.12)"
        p="36px"
        position="relative"
        {...rest}
      >
        <HStack align="end" justify="space-between" h="full">
          <VStack align="start" gap="24px" flex="1">
            <VStack align="start" gap="12px">
              <Text textStyle="pre-heading-2" color="grey.9" lineHeight="1.4">
                {title}
              </Text>
              <Text
                textStyle="pre-body-4"
                color="grey.7"
                lineHeight="1.6"
                whiteSpace="pre-line"
              >
                {description}
              </Text>
            </VStack>
            <Button
              size="md"
              variant="outline"
              colorPalette="grey"
              onClick={onButtonClick}
            >
              {buttonText}
            </Button>
          </VStack>
          {icon && (
            <Box
              bg={iconBgColor}
              borderRadius="28px"
              h="100px"
              w="100px"
              display="flex"
              alignItems="center"
              justifyContent="center"
              flexShrink="0"
            >
              {icon}
            </Box>
          )}
        </HStack>
      </Box>
    )
  },
)
