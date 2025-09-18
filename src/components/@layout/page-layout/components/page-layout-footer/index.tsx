import Link from 'next/link'

import { Container, ContainerProps } from '@chakra-ui/react'

import { ROUTES } from '@/constants/routes'
import { LogoIcon } from '@/generated/icons/MyIcons'

export const PageLayoutFooter = ({ ...props }: ContainerProps) => {
  return (
    <Container
      w={'100%'}
      display={'flex'}
      alignItems="center"
      flexDirection={'column'}
      justifyContent={'center'}
      {...props}
    >
      <Link href={ROUTES.HOME}>
        <LogoIcon boxSize={'50px'} color={'icon.tertiary'} />
      </Link>
    </Container>
  )
}
