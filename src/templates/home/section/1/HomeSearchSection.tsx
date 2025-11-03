import { useCallback, useEffect, useRef, useState } from 'react'

import dynamic from 'next/dynamic'
import { useRouter } from 'next/navigation'

import {
  Box,
  Button,
  Flex,
  HStack,
  IconButton,
  Image,
  Input,
  Text,
  VStack,
} from '@chakra-ui/react'
import { MagnifyingGlassIcon } from '@phosphor-icons/react/dist/ssr'

import { usePannelContext } from '@/components/PannelContext'
import { InputGroup } from '@/components/ui/input-group'
import {
  useGetRandomSearchKeywordQuery,
  useGetSearchKeywordAutoCompleteQuery,
} from '@/generated/apis/HomeApi/HomeApi.query'
import arrow1Json from '@/public/images/home/search/arrow1.json'
import arrow2Json from '@/public/images/home/search/arrow2.json'

const Lottie = dynamic(() => import('lottie-react'), {
  ssr: false,
})

const imgChat = '/images/home/search/chat.png'

export const HomeSearchSection = () => {
  const { data: randomSearchKeyword } = useGetRandomSearchKeywordQuery()
  const router = useRouter()

  return (
    <VStack gap={{ base: '56px', sm: '80px' }} w={'100%'}>
      <VStack gap={{ base: '40px', sm: '48px' }} position={'relative'}>
        <Box
          position={'absolute'}
          left={{ base: '5%', sm: '17%', lg: '20%' }}
          top={{ base: '-60px', sm: '-45px', lg: '-40px' }}
        >
          <Lottie loop animationData={arrow2Json} width={'70px'} />

          {/* <Image src={'/images/home/search/arrow2.png'} w={'70px'} /> */}
        </Box>
        <Box
          position={'absolute'}
          right={{ base: '-5%', sm: '19%', lg: '21%' }}
          top={{ base: '27%', sm: '0px', lg: '32px' }}
        >
          <Lottie loop animationData={arrow1Json} />
        </Box>

        <Text
          textStyle={{ base: 'pre-display-3', lg: 'pre-display-2' }}
          color="grey.10"
          textAlign="center"
          wordBreak={'break-all'}
        >
          B2B 기업 인쇄{'\n'}딱 맞는 솔루션과 전문가를 찾아보세요!
        </Text>
        <VStack
          w={'100%'}
          gap={{ base: '24px', sm: '20px' }}
          tabIndex={-1}
          maxW={'720px'}
        >
          <SearchInput />
          <HStack
            gap={{ base: '4px', sm: '10px' }}
            rowGap={{ base: '8px', sm: '0px' }}
            flexWrap={'wrap'}
            alignItems={'center'}
            justifyContent={'center'}
            minH={'40px'}
          >
            {randomSearchKeyword?.data?.map((keyword) => (
              <SerachKeyword
                title={keyword.keyword}
                bg={'#F3F3F4'}
                borderColor="none"
                color={'grey.7'}
                key={keyword.keyword}
                onClick={() =>
                  router.push(
                    `/search?q=${encodeURIComponent(keyword.keyword)}`,
                  )
                }
              />
            ))}
          </HStack>
        </VStack>
      </VStack>
      <VStack></VStack>
      <Box w={'100%'}>
        <SearchBanner />
      </Box>
    </VStack>
  )
}

export const SerachKeyword = ({
  title,
  size = 'md',
  bg,
  borderColor,
  color,
  onClick,
}: {
  title: string
  size?: 'md' | 'sm'
  bg?: string
  borderColor?: string
  color?: string
  onClick?: () => void
}) => {
  const sizeStyle = {
    md: {
      h: '40px',
      p: '4px 16px',
      textStyle: 'pre-body-5',
    },
    sm: {
      h: '28px',
      p: '4px 8px',
      textStyle: 'pre-caption-1',
    },
  }

  return (
    <Box
      p={sizeStyle[size].p}
      borderRadius={'full'}
      bg={bg || 'grey.0'}
      h={sizeStyle[size].h}
      display={'flex'}
      alignItems={'center'}
      justifyContent={'center'}
      cursor={'pointer'}
      border={borderColor || '1px solid'}
      lineHeight={'1'}
      borderColor={'grey.3'}
      color={color || 'grey.8'}
      _hover={{
        bg: 'grey.1',
      }}
      onClick={onClick}
    >
      <Text
        textStyle={sizeStyle[size].textStyle}
        whiteSpace={'nowrap'}
        lineHeight={'1'}
      >
        {title}
      </Text>
    </Box>
  )
}

const SearchInput = () => {
  const router = useRouter()
  const [searchValue, setSearchValue] = useState('')
  const [debouncedValue, setDebouncedValue] = useState('')
  const [isOpen, setIsOpen] = useState(false)
  const [selectedIndex, setSelectedIndex] = useState(-1)
  const inputRef = useRef<HTMLInputElement>(null)
  const dropdownRef = useRef<HTMLDivElement>(null)

  // 디바운싱 로직
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedValue(searchValue)
    }, 300) // 300ms 디바운스

    return () => clearTimeout(timer)
  }, [searchValue])

  const { data: autoCompleteData, isLoading } =
    useGetSearchKeywordAutoCompleteQuery({
      variables: {
        query: {
          keyword: debouncedValue,
        },
      },
      options: {
        enabled: debouncedValue.length > 0,
      },
    })

  const autoCompleteOptions = autoCompleteData?.data || []

  const handleInputChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const value = e.target.value
      setSearchValue(value)
      setIsOpen(value.length > 0)
      setSelectedIndex(-1)
    },
    [],
  )

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent<HTMLInputElement>) => {
      switch (e.key) {
        case 'ArrowDown':
          if (isOpen && autoCompleteOptions.length > 0) {
            e.preventDefault()
            setSelectedIndex((prev) =>
              prev < autoCompleteOptions.length - 1 ? prev + 1 : 0,
            )
          }
          break
        case 'ArrowUp':
          if (isOpen && autoCompleteOptions.length > 0) {
            e.preventDefault()
            setSelectedIndex((prev) =>
              prev > 0 ? prev - 1 : autoCompleteOptions.length - 1,
            )
          }
          break
        case 'Enter':
          e.preventDefault()
          if (
            isOpen &&
            selectedIndex >= 0 &&
            selectedIndex < autoCompleteOptions.length
          ) {
            const selectedOption = autoCompleteOptions[selectedIndex]
            setSearchValue(selectedOption.keyword)
            setIsOpen(false)
            setSelectedIndex(-1)
            router.push(
              `/search?q=${encodeURIComponent(selectedOption.keyword)}`,
            )
          } else {
            handleSearch()
          }
          break
        case 'Escape':
          if (isOpen) {
            setIsOpen(false)
            setSelectedIndex(-1)
            inputRef.current?.blur()
          }
          break
      }
    },
    [isOpen, autoCompleteOptions, selectedIndex, router],
  )

  const handleOptionClick = useCallback(
    (keyword: string) => {
      setSearchValue(keyword)
      setIsOpen(false)
      setSelectedIndex(-1)
      router.push(`/search?q=${encodeURIComponent(keyword)}`)
    },
    [router],
  )

  const handleInputFocus = useCallback(() => {
    if (searchValue.length > 0) {
      setIsOpen(true)
    }
  }, [searchValue])

  const handleInputBlur = useCallback((e: React.FocusEvent) => {
    // 드롭다운을 클릭하는 경우에는 닫지 않음
    if (dropdownRef.current?.contains(e.relatedTarget as Node)) {
      return
    }
    setIsOpen(false)
    setSelectedIndex(-1)
  }, [])

  const handleSearch = useCallback(() => {
    if (searchValue.trim()) {
      router.push(`/search?q=${encodeURIComponent(searchValue.trim())}`)
    }
  }, [searchValue, router])

  return (
    <Box position="relative" w="100%">
      <Box
        position="relative"
        w="100%"
        borderRadius="9999px"
        border="1.5px solid"
        borderColor="grey.3"
        transition="all 0.2s"
      >
        <InputGroup
          w="100%"
          endElement={
            <IconButton
              color="white"
              variant={'ghost'}
              mr={'4px'}
              borderRadius="9999px"
              aria-label="검색"
              onClick={handleSearch}
            >
              <MagnifyingGlassIcon
                color={'black'}
                weight="bold"
                style={{
                  width: '32px',
                  height: '32px',
                }}
              />
            </IconButton>
          }
        >
          <Input
            ref={inputRef}
            value={searchValue}
            onChange={handleInputChange}
            onKeyDown={handleKeyDown}
            onFocus={handleInputFocus}
            onBlur={handleInputBlur}
            placeholder="필요한 서비스나 상황을 입력해보세요"
            border="none"
            borderRadius="9999px"
            px="24px"
            h="60px"
            w={'100%'}
            focusRingColor={'grey.10'}
            py="16px"
            boxShadow={'0 0 23px -7px rgba(0, 0, 0, 0.15)'}
            textStyle={'pre-body-4'}
            fontSize={'17px !important'}
            color="grey.900"
            _placeholder={{
              color: 'grey.400',
            }}
            _focus={{
              boxShadow: 'none',
              border: 'none',
            }}
            _hover={{
              border: 'none',
            }}
            aria-expanded={isOpen}
            aria-haspopup="listbox"
            role="combobox"
            aria-autocomplete="list"
          />
        </InputGroup>
      </Box>

      {/* 자동완성 드롭다운 */}
      {isOpen && (
        <Box
          ref={dropdownRef}
          position="absolute"
          top="100%"
          left="0"
          right="0"
          zIndex={1000}
          mt="6px"
          bg="white"
          border="1px solid"
          borderColor="grey.2"
          borderRadius="10px"
          boxShadow="0 20px 80px 0 rgba(27, 28, 29, 0.04), 0 4px 10px 0 rgba(27, 28, 29, 0.04)"
          maxH="200px"
          overflowY="auto"
          role="listbox"
          aria-label="검색 자동완성 옵션"
        >
          {isLoading ?
            <Box p="12px" textAlign="center" color="grey.6">
              <Text textStyle={'pre-body-4'}>검색 중...</Text>
            </Box>
          : autoCompleteOptions.length > 0 ?
            <VStack gap="0" align="stretch">
              {autoCompleteOptions.map((option, index) => (
                <Box
                  key={option.keyword}
                  p="12px"
                  cursor="pointer"
                  bg={selectedIndex === index ? 'grey.1' : 'transparent'}
                  _hover={{
                    bg: 'grey.1',
                  }}
                  onMouseDown={() => handleOptionClick(option.keyword)}
                  role="option"
                  aria-selected={selectedIndex === index}
                  data-node-id="15664:25449"
                >
                  <HStack gap="8px" align="center">
                    <Box w="18px" h="18px" flexShrink={0}>
                      <MagnifyingGlassIcon size={18} color="#6a6d71" />
                    </Box>
                    <Text
                      textStyle={'pre-body-4'}
                      color="grey.8"
                      data-node-id="15664:25450"
                    >
                      {option.keyword}
                    </Text>
                  </HStack>
                </Box>
              ))}
            </VStack>
          : searchValue.length > 0 ?
            <Box p="12px" textAlign="center" color="grey.6">
              <Text textStyle={'pre-body-4'}>검색 결과가 없습니다.</Text>
            </Box>
          : null}
        </Box>
      )}
    </Box>
  )
}

const SearchBanner = () => {
  const { openPannel } = usePannelContext()
  return (
    <Flex
      bgGradient="linear-gradient(90deg, #013FFC 0%, #835CF7 80%, #AA2DFE 100%)"
      borderRadius="28px"
      px={{ sm: '40px', lg: '64px' }}
      py={{ base: '26px', sm: '40px', lg: '40px' }}
      position="relative"
      overflow="hidden"
      data-node-id="14279:2568"
      role="banner"
      aria-label="상담 문의 섹션"
    >
      <HStack
        gap={{ base: '12px', lg: '18px' }}
        align={{ base: 'center', sm: 'end' }}
        flex="1"
        flexDirection={{ base: 'column', sm: 'row' }}
      >
        <Text
          textStyle="pre-heading-2"
          color="white"
          whiteSpace="pre"
          textAlign={{ base: 'center', sm: 'left' }}
        >
          고민 중이세요?{'\n'}바로 상담해 드릴게요.
        </Text>

        <Button size="md" variant="outline" onClick={() => openPannel()}>
          전문가 상담 바로가기
        </Button>
      </HStack>
      <Box
        position="absolute"
        right={{ base: '30px', lg: '60px' }}
        top="50%"
        transform="translateY(-50%)"
        w={'100px'}
        h={'100px'}
        data-node-id="14279:2572"
        display={{ base: 'none', sm: 'block' }}
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
