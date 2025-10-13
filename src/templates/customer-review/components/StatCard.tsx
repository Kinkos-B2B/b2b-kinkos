import React from 'react'

import { Box, Flex, Text } from '@chakra-ui/react'

import CountUp from 'react-countup'

import { ImageAsNext } from '@/components/image-as-next'

interface StatCardProps {
  icon: string
  iconAlt: string
  value: number
  description: string
  suffix?: string
  index?: number
}

export const StatCard = ({
  icon,
  iconAlt,
  value,
  description,
  suffix,
  index = 0,
}: StatCardProps) => {
  return (
    <Flex direction="column" gap="8px" align="center" flex="1">
      <Box w={'120px'} h={'120px'} position="relative">
        <ImageAsNext src={icon} alt={iconAlt} w="100%" h="100%" />
      </Box>
      <Flex direction="column" gap="2px" align="center" w="100%">
        <Text textStyle={'pre-display-2'} color="secondary.5">
          <CountUp
            scrollSpyOnce
            enableScrollSpy
            end={Number(value)}
            separator=","
            duration={2}
            suffix={suffix}
          />
        </Text>
        <Text textStyle={'pre-heading-3'} color={'grey.7'}>
          {description}
        </Text>
      </Flex>
    </Flex>
  )
}
