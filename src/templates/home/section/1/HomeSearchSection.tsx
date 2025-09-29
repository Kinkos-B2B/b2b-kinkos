import {
  Box,
  Button,
  Container,
  Flex,
  HStack,
  Icon,
  Image,
  Input,
  Text,
  VStack,
} from '@chakra-ui/react'
import { MagnifyingGlassIcon } from '@phosphor-icons/react/dist/ssr'

import { InputGroup } from '@/components/ui/input-group'

const imgChat = '/images/home/search/chat.png'

export const HomeSearchSection = () => {
  return (
    <Container>
      <VStack gap={'80px'} w={'100%'}>
        <VStack gap={'48px'} position={'relative'}>
          <Box position={'absolute'} left={'187px'} top={'-40px'}>
            <Image src={'/images/home/search/arrow2.png'} w={'70px'} />
          </Box>
          <Box position={'absolute'} right={'200px'} top={'32px'}>
            <Image src={'/images/home/search/arrow1.png'} w={'70px'} />
          </Box>

          <Text textStyle="pre-display-2" color="grey.10" textAlign="center">
            B2B 기업 인쇄,{'\n'}딱 맞는 솔루션과 전문가를 찾아보세요!
          </Text>
          <VStack w={'100%'} gap={'20px'}>
            <SearchInput />
            <HStack gap={'10px'}>
              <SerachKeyword title="행사∙이벤트 지원" />
              <SerachKeyword title="행사∙이벤트 지원" />
              <SerachKeyword title="행사∙이벤트 지원" />
              <SerachKeyword title="행사∙이벤트 지원" />
              <SerachKeyword title="행사∙이벤트 지원" />
              <SerachKeyword title="행사∙이벤트 지원" />
            </HStack>
          </VStack>
        </VStack>
        <VStack></VStack>
        <Box w={'100%'}>
          <SearchBanner />
        </Box>
      </VStack>
    </Container>
  )
}

const SerachKeyword = ({ title }: { title: string }) => {
  return (
    <Box
      p={'4px 16px'}
      borderRadius={'full'}
      bg={'grey.0'}
      h={'40px'}
      display={'flex'}
      alignItems={'center'}
      justifyContent={'center'}
      cursor={'pointer'}
      border={'1px solid'}
      borderColor={'grey.3'}
      color={'grey.8'}
      _hover={{
        bg: 'grey.1',
      }}
    >
      <Text textStyle={'pre-body-5'}>{title}</Text>
    </Box>
  )
}

const SearchInput = () => {
  return (
    <Box
      position="relative"
      w="100%"
      borderRadius="9999px"
      border="1px solid"
      borderColor="grey.900"
      transition="all 0.2s"
    >
      <InputGroup
        w="100%"
        endElement={
          <Button
            size="sm"
            bg="grey.900"
            color="white"
            borderRadius="9999px"
            w="40px"
            h="40px"
            p="0"
            minW="40px"
            _hover={{
              bg: 'grey.800',
            }}
            _active={{
              bg: 'grey.700',
            }}
            aria-label="검색"
          >
            <MagnifyingGlassIcon />
          </Button>
        }
      >
        <Input
          placeholder="필요한 서비스나 상황을 입력해보세요"
          border="none"
          borderRadius="9999px"
          px="20px"
          h="60px"
          w={'100%'}
          py="16px"
          fontSize="16px"
          lineHeight="1.6"
          letterSpacing="-0.32px"
          color="grey.900"
          _placeholder={{
            color: 'grey.400',
            fontSize: '16px',
            lineHeight: '1.6',
            letterSpacing: '-0.32px',
          }}
          _focus={{
            boxShadow: 'none',
            border: 'none',
          }}
          _hover={{
            border: 'none',
          }}
        />
      </InputGroup>
    </Box>
  )
}

const SearchBanner = () => {
  return (
    <Flex
      bgGradient="linear-gradient(90deg, #013FFC 0%, #835CF7 80%, #AA2DFE 100%)"
      borderRadius="28px"
      px={{ base: '24px', md: '64px' }}
      py={{ base: '24px', md: '40px' }}
      position="relative"
      overflow="hidden"
      data-node-id="14279:2568"
      role="banner"
      aria-label="상담 문의 섹션"
    >
      <HStack
        gap={{ base: '12px', md: '18px' }}
        align="end"
        flex="1"
        direction={{ base: 'column', md: 'row' }}
      >
        <Text
          textStyle="pre-heading-2"
          color="white"
          whiteSpace="pre"
          textAlign={{ base: 'center', md: 'left' }}
        >
          고민 중이세요?{'\n'}바로 상담해 드릴게요.
        </Text>

        <Button size="md" variant="outline">
          전문가 상담 바로가기
        </Button>
      </HStack>
      <Box
        position="absolute"
        right={{ base: '20px', md: '60px' }}
        top="50%"
        transform="translateY(-50%)"
        w={{ base: '60px', md: '100px' }}
        h={{ base: '60px', md: '100px' }}
        data-node-id="14279:2572"
        display={{ base: 'none', md: 'block' }}
        aria-hidden="true"
      >
        <Image
          src={imgChat}
          alt=""
          w="100%"
          h="100%"
          objectFit="cover"
          objectPosition="50% 50%"
        />
      </Box>
    </Flex>
  )
}
