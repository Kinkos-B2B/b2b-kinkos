import { Text, VStack } from '@chakra-ui/react'

export const PostSectionWrapper = ({
  children,
  title,
  subTitle,
  fragment,
}: {
  children: React.ReactNode
  subTitle: string
  title: string
  fragment: string
}) => {
  return (
    <VStack
      alignItems={'start'}
      w={{ base: '100%', lg: '820px' }}
      gap={'24px'}
      id={fragment}
      css={{
        '& i': {
          fontStyle: 'italic',
        },
        '& a': {
          color: 'revert',
          textDecoration: 'revert',
          target: '_blank',
        },
        '& .text-huge': {
          fontSize: '1.8em',
        },
        '& .text-big': {
          fontSize: '1.4em',
        },
        '& .text-small': {
          fontSize: '0.85em',
        },
        '& .text-tiny': {
          fontSize: '0.7em',
        },
        '& ul': {
          all: 'revert',
          'list-style-type': 'disc',
        },
        '& ol': {
          all: 'revert',
          'list-style-type': 'decimal',
        },
      }}
    >
      <VStack gap={'8px'} alignItems={'start'} w={'100%'}>
        <Text textStyle={'pre-body-5'} color={'grey.6'}>
          {title}
        </Text>
        {subTitle && (
          <Text textStyle={'pre-heading-2'} color={'grey.10'}>
            {subTitle}
          </Text>
        )}
      </VStack>
      {children}
    </VStack>
  )
}
