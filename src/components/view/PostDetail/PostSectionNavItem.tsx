import { Box, Text } from '@chakra-ui/react'

export const PostSectionNavItem = ({
  title,
  fragment,
  active,
}: {
  title: string
  fragment: string
  active: boolean
}) => {
  const handleClick = () => {
    const element = document.getElementById(fragment)
    if (element) {
      const headerOffset = 64
      const elementPosition =
        element.getBoundingClientRect().top + window.scrollY - headerOffset
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth',
      })
    }
  }

  return (
    <Box
      p={'7px 16px'}
      h={'40px'}
      w={'160px'}
      onClick={handleClick}
      display={'flex'}
      alignItems={'center'}
      data-fragment={fragment}
      justifyContent={'start'}
      cursor={'pointer'}
      borderRadius={'12px'}
      bg={active ? '#CAD7FF80' : 'transparent'}
      textStyle={active ? 'pre-body-3' : 'pre-body-4'}
      transition={'all 0.1s ease-in-out'}
      _hover={{
        bg: '#CAD7FF80',
      }}
    >
      <Text>{title}</Text>
    </Box>
  )
}
