import { Box, Button, HStack, Image, Text } from '@chakra-ui/react'

import { usePannelContext } from '@/components/PannelContext'
import LogoIcon from '@/public/icons/LOGO.svg'

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
      bg={'rgba(243, 243, 243, 0.77)'}
      w={{
        lg: '950px',
        sm: 'calc(100vw - 80px)',
        base: 'calc(100vw - 40px)',
      }}
      py={{ base: '10px', sm: '15px' }}
      px={{ sm: '26px 16px', base: '10px' }}
      borderRadius={'13px'}
      backdropFilter={'blur(20px)'}
      ref={stickyRef}
      zIndex={1000}
    >
      <HStack justifyContent={'space-between'}>
        <HStack gap={'26px'} alignItems={'center'}>
          <Image
            src={LogoIcon.src}
            alt="logo"
            width={'113px'}
            height={'23px'}
            display={{ lg: 'block', sm: 'none', base: 'none' }}
          />
          <Text
            color={'#333537'}
            textStyle={{
              base: 'pre-caption-1',
              sm: 'pre-body-4',
              lg: 'pre-body-2',
            }}
            lineHeight={'1'}
          >
            킨코스 전문가와 바로 연결되고 싶다면?
          </Text>
        </HStack>
        <Button
          colorPalette="primary"
          variant={'solid'}
          onClick={openPannel}
          h={{ base: '34px', sm: '48px' }}
          w={{ base: '113px', sm: '212px' }}
          textStyle={{
            base: 'pre-caption-1',
            sm: 'pre-body-3',
            lg: 'pre-body-3',
          }}
          lineHeight={'1'}
        >
          지금 전문가 연결하기
        </Button>
      </HStack>
    </Box>
  )
}
