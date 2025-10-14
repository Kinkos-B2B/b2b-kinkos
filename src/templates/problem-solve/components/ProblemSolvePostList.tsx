import { useEffect, useRef, useState } from 'react'

import Image from 'next/image'

import {
  Box,
  Center,
  Container,
  Flex,
  Grid,
  GridItem,
  Tabs,
  Text,
  VStack,
} from '@chakra-ui/react'

import { Pagination } from '@/components/pagination'
import { EmptyViewWrapper } from '@/components/view/EmptyViewWrapper'
import { PostCardItem } from '@/components/view/PostCardItem'
import { ROUTES } from '@/constants/routes'
import { useGetAllHelpArticleQuery } from '@/generated/apis/HelpArticleApi/HelpArticleApi.query'
import { getProblemSolveOptions } from '@/helper/getProblemSolveOptions'
import { GetAllHelpArticleParamsTypeEnumType } from '@/helper/options'

const problemSolveOptions = getProblemSolveOptions()

export const ProblemSolvePostList = () => {
  const [selectedTab, setSelectedTab] =
    useState<GetAllHelpArticleParamsTypeEnumType>(problemSolveOptions[0].value)

  const [currentPage, setCurrentPage] = useState<number>(1)

  useEffect(() => {
    setCurrentPage(1)
  }, [selectedTab])

  const { data } = useGetAllHelpArticleQuery({
    variables: {
      query: {
        type: selectedTab,
        page: currentPage - 1,
        count: 9,
      },
    },
    options: {
      select: (data) => data.data,
    },
  })

  const totalPages =
    data?.totalElements ? Math.ceil(data.totalElements / (data.size ?? 9)) : 1

  return (
    <Container>
      <VStack width="100%" alignItems={'start'} gap={'0px'} overflow="hidden">
        <Text textStyle={'pre-heading-1'}>다양한 고민을 해결해 보세요</Text>
        <Tabs.Root
          mt={'32px'}
          width={'100%'}
          value={selectedTab}
          onValueChange={(e) =>
            setSelectedTab(e.value as GetAllHelpArticleParamsTypeEnumType)
          }
          variant="enclosed"
        >
          <Flex position="relative">
            <Box
              position="absolute"
              right="0"
              top="0"
              bottom="0"
              w="30px"
              zIndex={1}
              bgGradient={
                'linear-gradient(270deg, #FFF 0%, rgba(255, 255, 255, 0.00) 100%)'
              }
            />
            <Tabs.List
              gap="8px"
              overflowX="auto"
              w="100%"
              display="flex"
              css={{ scrollbar: 'hidden' }}
            >
              {problemSolveOptions.map((tab) => (
                <Tabs.Trigger
                  flexShrink={0}
                  key={tab.value}
                  value={tab.value}
                  borderRadius="10px"
                  onClick={(e) => {
                    e.currentTarget.scrollIntoView({
                      behavior: 'smooth',
                      block: 'nearest',
                      inline: 'center',
                    })
                  }}
                >
                  {tab.label}
                </Tabs.Trigger>
              ))}
            </Tabs.List>
          </Flex>
        </Tabs.Root>
        <Center
          w={'100%'}
          gap={{ base: '48px', sm: '64px' }}
          display={'flex'}
          mt={{ base: '32px', sm: '40px' }}
          flexDirection={'column'}
        >
          <EmptyViewWrapper
            isEmpty={data?.content?.length === 0}
            description="관련 내용이 준비될 예정이에요!"
          >
            <Grid
              templateColumns={{
                base: 'repeat(auto-fit, minmax(330px, 1fr))',
                sm: 'repeat(auto-fill, minmax(330px, 1fr))',
                lg: 'repeat(auto-fill, minmax(330px, 1fr))',
              }}
              gap={'24px'}
              rowGap={'48px'}
              w="100%"
            >
              {data?.content?.map((article, index) => (
                <GridItem key={index}>
                  <PostCardItem
                    href={ROUTES.PROBLEM_DETAIL.replace(
                      ':id',
                      article.id?.toString() ?? '',
                    )}
                    image={article.thumbnailImage?.url ?? ''}
                    author={article.title ?? ''}
                    title={article.title ?? ''}
                    date={article.createdAt ?? ''}
                  />
                </GridItem>
              ))}
            </Grid>
            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={setCurrentPage}
            />
          </EmptyViewWrapper>
        </Center>
      </VStack>
    </Container>
  )
}
