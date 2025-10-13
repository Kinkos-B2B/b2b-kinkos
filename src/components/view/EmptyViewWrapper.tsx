import { PropsWithChildren, ReactElement, ReactNode } from 'react'

import Image from 'next/image'

import { Center, Text } from '@chakra-ui/react'

interface Props {
  isEmpty: boolean
  description: string
  children: ReactNode
}

export const EmptyViewWrapper = ({ description, isEmpty, children }: Props) => {
  if (isEmpty) {
    return (
      <Center
        w={'100%'}
        h={'100%'}
        gap={'16px'}
        flexDirection={'column'}
        bg={'background.basic.2'}
        borderRadius={'32px'}
        height={'400px'}
      >
        <Image
          src={'/images/empty-view.png'}
          alt={'empty'}
          width={100}
          height={100}
        />
        <Text textStyle={'pre-body-1'} color={'grey.4'}>
          {description}
        </Text>
      </Center>
    )
  }

  return <>{children}</>
}
