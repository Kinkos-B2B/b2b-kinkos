import { Box, Flex } from '@chakra-ui/react'

import { ImageAsNext } from '@/components/image-as-next'

interface StatDividerProps {
  dataNodeId?: string
}

export const StatDivider = ({ dataNodeId }: StatDividerProps) => {
  return (
    <Flex h="84px" align="center" justify="center" w="1px">
      <Box h="84px" w="1.5px" position="relative" bg={'greytransparent.2'} />
    </Flex>
  )
}
