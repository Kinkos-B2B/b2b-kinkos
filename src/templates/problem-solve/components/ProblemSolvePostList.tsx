import { useEffect, useState } from 'react'

import Image from 'next/image'

import { Center, Container, Grid, Tabs, Text, VStack } from '@chakra-ui/react'

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
    <Container maxW={'1280px'}>
      <VStack width="100%" alignItems={'start'} gap={'0px'}>
        <Text textStyle={'pre-heading-1'}>다양한 고민을 해결해 보세요</Text>
        <Tabs.Root
          mt={'32px'}
          value={selectedTab}
          onValueChange={(e) =>
            setSelectedTab(e.value as GetAllHelpArticleParamsTypeEnumType)
          }
          variant="enclosed"
        >
          <Tabs.List
            gap="8px"
            h="48px"
            overflow="hidden"
            position="relative"
            w="full"
            display="flex"
            alignItems="center"
            justifyContent="center"
          >
            {problemSolveOptions.map((tab) => (
              <Tabs.Trigger
                key={tab.value}
                value={tab.value}
                h="48px"
                px="16px"
                py="0"
                borderRadius="10px"
                colorPalette="grey"
                _hover={{
                  opacity: 0.8,
                }}
                color="grey.6"
                _selected={{
                  bg: 'grey.10',
                  color: 'grey.0',
                }}
              >
                {tab.label}
              </Tabs.Trigger>
            ))}
          </Tabs.List>
        </Tabs.Root>
        <Center
          w={'100%'}
          gap={'64px'}
          display={'flex'}
          mt={'40px'}
          flexDirection={'column'}
        >
          <EmptyViewWrapper
            isEmpty={data?.content?.length === 0}
            description="관련 내용이 준비될 예정이에요!"
          >
            <Grid
              templateColumns={'repeat(3, 1fr)'}
              gap={'24px'}
              rowGap={'48px'}
            >
              {data?.content?.map((article, index) => (
                <PostCardItem
                  key={index}
                  href={ROUTES.PROBLEM_DETAIL.replace(
                    ':id',
                    article.id?.toString() ?? '',
                  )}
                  image={article.thumbnailImage?.url ?? ''}
                  author={article.title ?? ''}
                  title={article.title ?? ''}
                  date={article.createdAt ?? ''}
                />
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
