import Image from 'next/image'

import { Box, Button, Flex, Text, VStack } from '@chakra-ui/react'

import { usePannelContext } from '@/components/PannelContext'
import { PostFeatureItem } from '@/components/view/PostDetail/PostFeatureItem'
import { PostSectionNavItem } from '@/components/view/PostDetail/PostSectionNavItem'
import { PostSectionWrapper } from '@/components/view/PostDetail/PostSectionWrapper'
import { LAYOUT } from '@/constants/layout'
import {
  GetHelpArticleResponseType,
  HelpArticleAdvantageDetailType,
  HelpArticleChangeDetailType,
  HelpArticleDifficultDetailType,
  HelpArticleFeasibleDetailType,
  HelpArticleIntroDetailType,
  HelpArticleSolutionDetailType,
} from '@/generated/apis/@types/data-contracts'
import { useScrollSpy } from '@/hooks/useScrollSpy'

const ContentIntroSection = ({
  content,
}: {
  content: HelpArticleIntroDetailType
}) => {
  return (
    <PostSectionWrapper
      title="인트로"
      subTitle={content.subTitle ?? ''}
      fragment="intro"
    >
      <VStack gap={'20px'} alignItems={'start'} w={'100%'}>
        {content.image?.url && (
          <Image
            src={content.image?.url}
            alt="intro"
            width={820}
            height={400}
            style={{
              maxHeight: '400px',
              borderRadius: '28px',
              objectFit: 'cover',
            }}
          />
        )}
        <Text
          textStyle={'pre-body-4'}
          color={'grey.9'}
          dangerouslySetInnerHTML={{ __html: content.body ?? '' }}
        ></Text>
      </VStack>
    </PostSectionWrapper>
  )
}

const ContentDifficultSection = ({
  content,
}: {
  content: HelpArticleDifficultDetailType
}) => {
  return (
    <PostSectionWrapper
      title="어려운 이유"
      subTitle={content.subTitle ?? ''}
      fragment="difficult"
    >
      <VStack gap={'20px'} alignItems={'start'} w={'100%'}>
        {content.image?.url && (
          <Image
            src={content.image?.url}
            alt="difficult"
            width={820}
            height={400}
            style={{
              maxHeight: '400px',
              borderRadius: '28px',
              objectFit: 'cover',
            }}
          />
        )}
        <VStack gap={'10px'} alignItems={'start'} w={'100%'}>
          {content.difficultList?.map((item, index) => (
            <PostFeatureItem
              key={index}
              number={index + 1}
              title={item.subTitle ?? ''}
              description={item.body ?? ''}
            />
          ))}
        </VStack>
      </VStack>
    </PostSectionWrapper>
  )
}

const ContentSolutionSection = ({
  content,
}: {
  content: HelpArticleSolutionDetailType
}) => {
  return (
    <PostSectionWrapper
      title="문제해결, 킨코스"
      subTitle={content.subTitle ?? ''}
      fragment="solution"
    >
      <VStack gap={'40px'} alignItems={'start'} w={'100%'}>
        {content.firstBody && (
          <Text
            textStyle={'pre-body-4'}
            color={'grey.9'}
            dangerouslySetInnerHTML={{ __html: content.firstBody ?? '' }}
          ></Text>
        )}
        {content.mainText && (
          <Box
            w={'100%'}
            bg={'#FFEEE580'}
            color={'secondary.4'}
            p={'60px 45px'}
            borderRadius={'28px'}
            display={'flex'}
            alignItems={'center'}
            justifyContent={'center'}
          >
            <Text
              textStyle={'pre-heading-1'}
              textAlign={'center'}
            >{`"${content.mainText}"`}</Text>
          </Box>
        )}
        {content.secondBody && (
          <Text
            textStyle={'pre-body-4'}
            color={'grey.9'}
            dangerouslySetInnerHTML={{ __html: content.secondBody ?? '' }}
          ></Text>
        )}
      </VStack>
    </PostSectionWrapper>
  )
}

const ContentFeasibleSection = ({
  content,
}: {
  content: HelpArticleFeasibleDetailType
}) => {
  return (
    <PostSectionWrapper
      title="가능한 이유"
      subTitle={content.subTitle ?? ''}
      fragment="feasible"
    >
      <VStack gap={'20px'} alignItems={'start'} w={'100%'}>
        {content.image?.url && (
          <Image
            src={content.image?.url}
            alt="change"
            width={820}
            height={400}
            style={{
              maxHeight: '400px',
              borderRadius: '28px',
              objectFit: 'cover',
            }}
          />
        )}
        <VStack gap={'10px'} alignItems={'start'} w={'100%'}>
          {content.feasibleList?.map((item, index) => (
            <PostFeatureItem
              key={index}
              number={index + 1}
              title={item.subTitle ?? ''}
              description={item.body ?? ''}
            />
          ))}
        </VStack>
      </VStack>
    </PostSectionWrapper>
  )
}

const ContentChangeSection = ({
  content,
}: {
  content: HelpArticleChangeDetailType
}) => {
  return (
    <PostSectionWrapper
      title="도입 후 변화"
      subTitle={content.subTitle ?? ''}
      fragment="change"
    >
      <VStack gap={'20px'} alignItems={'start'} w={'100%'}>
        {content.image?.url && (
          <Image
            src={content.image?.url}
            alt="change"
            width={820}
            height={400}
            style={{
              maxHeight: '400px',
              borderRadius: '28px',
              objectFit: 'cover',
            }}
          />
        )}
        <Text
          textStyle={'pre-body-4'}
          color={'grey.9'}
          dangerouslySetInnerHTML={{ __html: content.body ?? '' }}
        ></Text>
      </VStack>
    </PostSectionWrapper>
  )
}

const ContentAdvantageSection = ({
  content,
}: {
  content: HelpArticleAdvantageDetailType
}) => {
  return (
    <PostSectionWrapper
      title="이 해결책의 장점"
      subTitle={content.subTitle ?? ''}
      fragment="advantage"
    >
      <VStack gap={'20px'} alignItems={'start'} w={'100%'}>
        {content.image?.url && (
          <Image
            src={content.image?.url}
            alt="advantage"
            width={820}
            height={400}
            style={{
              maxHeight: '400px',
              borderRadius: '28px',
              objectFit: 'cover',
            }}
          />
        )}
        <VStack gap={'10px'} alignItems={'start'} w={'100%'}>
          {content.advantageList?.map((item, index) => (
            <PostFeatureItem
              key={index}
              number={index + 1}
              title={item.subTitle ?? ''}
              description={item.body ?? ''}
            />
          ))}
        </VStack>
      </VStack>
    </PostSectionWrapper>
  )
}

const navItems = [
  { title: '인트로', fragment: 'intro' },
  { title: '어려운 이유', fragment: 'difficult' },
  { title: '문제해결, 킨코스', fragment: 'solution' },
  { title: '가능한 이유', fragment: 'feasible' },
  { title: '도입 후 변화', fragment: 'change' },
  { title: '이 해결책의 장점', fragment: 'advantage' },
]

export const ProblemSolveArticleContent = ({
  content,
}: {
  content?: GetHelpArticleResponseType
}) => {
  const { openPannel } = usePannelContext()

  const activeId = useScrollSpy({
    sectionIds: navItems.map((s) => s.fragment),
    headerOffset: 80, // 고정 헤더 높이로 조정
    minVisibleRatio: 0.4,
  })

  return (
    <Flex position={'relative'} gap={'80px'}>
      <VStack align={'start'} gap={'64px'}>
        <ContentIntroSection content={content?.intro ?? {}} />
        <ContentDifficultSection content={content?.difficult ?? {}} />
        <ContentSolutionSection content={content?.solution ?? {}} />
        <ContentFeasibleSection content={content?.feasible ?? {}} />
        <ContentChangeSection content={content?.change ?? {}} />
        <ContentAdvantageSection content={content?.advantage ?? {}} />
      </VStack>
      <Flex
        display={{ base: 'none', lg: 'flex' }}
        position={'sticky'}
        right={0}
        top={`calc(${LAYOUT.HEADER.HEIGHT} + 30px)`}
        h={'fit-content'}
        flexDirection={'column'}
        gap={'24px'}
      >
        <VStack
          gap={'8px'}
          pb={'24px'}
          borderBottom={'1px solid'}
          borderColor={'grey.3'}
        >
          {navItems.map((item) => (
            <PostSectionNavItem
              key={item.fragment}
              title={item.title}
              active={activeId === item.fragment}
              fragment={item.fragment}
            />
          ))}
        </VStack>
        <Button onClick={openPannel}>전문가 연결하기</Button>
      </Flex>
    </Flex>
  )
}
