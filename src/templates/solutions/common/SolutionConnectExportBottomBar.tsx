import { Box, Button, HStack, Text } from '@chakra-ui/react'

import { usePannelContext } from '@/components/PannelContext'

export const SolutionConnectExportBottomBar = ({
  stickyRef,
}: {
  stickyRef: React.RefObject<HTMLDivElement>
}) => {
  const { openPannel } = usePannelContext()

  return (
    <Box
      position={'fixed'}
      bottom={'-100px'}
      left={'50%'}
      transform={'translateX(-50%)'}
      maxW={'90vw'}
      bg={'background.inverse.2'}
      p={'8px 8px 8px 32px'}
      borderRadius={'12px'}
      ref={stickyRef}
      zIndex={1000}
    >
      <HStack w={'1200px'} justifyContent={'space-between'}>
        <Text color={'grey.0'} textStyle={'pre-body-2'}>
          전문가와 바로 연결되고 싶다면?
        </Text>
        <Button
          colorPalette="primary"
          variant={'solid'}
          w={'240px'}
          onClick={openPannel}
        >
          지금 전문가 연결하기
        </Button>
      </HStack>
    </Box>
  )
}
