import { Box, HStack, Image, Text, VStack } from '@chakra-ui/react'

import { GetHomeSearchKeywordResponseType } from '@/generated/apis/@types/data-contracts'
import { SerachKeyword } from '@/templates/home/section/1/HomeSearchSection'

const imgSearch = '/images/empty-search.png'

interface EmptySearchResultProps {
  recommendedKeywords?: GetHomeSearchKeywordResponseType[]
  onSearchKeywordClick?: (keyword: string) => void
}

export const EmptySearchResult = ({
  onSearchKeywordClick,
  recommendedKeywords,
}: EmptySearchResultProps) => {
  return (
    <Box
      bg="background.basic.2"
      borderRadius="32px"
      p="40px"
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      gap="20px"
      w="100%"
    >
      {/* 검색 아이콘과 메시지 */}
      <VStack gap="12px" align="center">
        <Box w="100px" h="100px">
          <Image
            src={imgSearch}
            alt="검색 결과 없음"
            w="100%"
            h="100%"
            objectFit="contain"
          />
        </Box>
        <Text textStyle="pre-body-1" color="grey.4" textAlign="center">
          검색 결과가 없어요!{'\n'}이런 검색어는 어떤가요?
        </Text>
      </VStack>

      <Box
        bg={'greytransparent.1'}
        borderRadius="12px"
        p="10px 12px"
        display="flex"
        alignItems="center"
        gap="10px"
      >
        <Text
          textStyle="pre-body-5"
          color="grey.8"
          whiteSpace="nowrap"
          lineHeight={'1'}
        >
          자주 찾는 검색어
        </Text>
        <Box h="14px" w="1px" bg="grey.3" flexShrink={0} />
        <HStack gap="2px" flexWrap="wrap">
          {recommendedKeywords?.map((keyword) => (
            <SerachKeyword
              onClick={() => onSearchKeywordClick?.(keyword.keyword)}
              title={keyword.keyword}
              key={keyword.keyword}
              size="sm"
            />
          ))}
        </HStack>
      </Box>
    </Box>
  )
}
