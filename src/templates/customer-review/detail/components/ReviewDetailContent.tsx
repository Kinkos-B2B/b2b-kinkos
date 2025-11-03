import { Button, Flex, Image, Text, VStack } from '@chakra-ui/react'

import { usePannelContext } from '@/components/PannelContext'
import { PostFeatureItem } from '@/components/view/PostDetail/PostFeatureItem'
import { PostSectionNavItem } from '@/components/view/PostDetail/PostSectionNavItem'
import { PostSectionWrapper } from '@/components/view/PostDetail/PostSectionWrapper'
import { LAYOUT } from '@/constants/layout'
import {
  CustomerReviewBackgroundType,
  CustomerReviewInterviewType,
  CustomerReviewOutcomeType,
  CustomerReviewReasonType,
  CustomerReviewRecommendationType,
  GetCustomerReviewDetailType,
} from '@/generated/apis/@types/data-contracts'
import { useScrollSpy } from '@/hooks/useScrollSpy'

const ContentBackgroundSection = ({
  content,
}: {
  content: CustomerReviewBackgroundType
}) => {
  return (
    <PostSectionWrapper
      title="도입 배경"
      subTitle={content.subTitle ?? ''}
      fragment="background"
    >
      <VStack gap={'20px'} alignItems={'start'} w={'100%'}>
        {content.image?.url && (
          <Image
            alt={content.image?.alt ?? ''}
            src={content.image?.url}
            borderRadius={'28px'}
            w={'100%'}
            h={'400px'}
            objectFit={'cover'}
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

const ContentReasonSection = ({
  content,
}: {
  content: CustomerReviewReasonType
}) => {
  return (
    <PostSectionWrapper
      title="선택 이유"
      subTitle={content.subTitle ?? ''}
      fragment="reason"
    >
      <VStack gap={'20px'} alignItems={'start'} w={'100%'}>
        <VStack gap={'12px'} w={'100%'}>
          {content.firstImage?.url && (
            <Image
              alt={content.firstImage?.alt ?? ''}
              src={content.firstImage?.url}
              borderRadius={'28px'}
              w={'100%'}
              h={'400px'}
              objectFit={'cover'}
            />
          )}
          {content.secondImage?.url && (
            <Image
              src={content.secondImage?.url}
              alt={content.secondImage?.alt ?? ''}
              borderRadius={'28px'}
              w={'100%'}
              h={'400px'}
              objectFit={'cover'}
            />
          )}
        </VStack>
        <Text
          textStyle={'pre-body-4'}
          color={'grey.9'}
          dangerouslySetInnerHTML={{ __html: content.body ?? '' }}
        ></Text>
      </VStack>
    </PostSectionWrapper>
  )
}

const ContentOutcomeSection = ({
  content,
}: {
  content: CustomerReviewOutcomeType
}) => {
  return (
    <PostSectionWrapper
      title="도입 성과"
      subTitle={content.subTitle ?? ''}
      fragment="outcome"
    >
      <VStack gap={'40px'} alignItems={'start'} w={'100%'}>
        <VStack gap={'20px'} alignItems={'start'} w={'100%'}>
          <VStack gap={'12px'} w={'100%'}>
            {content.image?.url && (
              <Image
                src={content.image?.url}
                alt={content.image?.alt ?? ''}
                borderRadius={'28px'}
                w={'100%'}
                h={'400px'}
                objectFit={'cover'}
              />
            )}
          </VStack>
          <Text
            textStyle={'pre-body-4'}
            color={'grey.9'}
            dangerouslySetInnerHTML={{ __html: content.body ?? '' }}
          ></Text>
        </VStack>

        <VStack gap={'10px'} alignItems={'start'} w={'100%'}>
          {content.detailList?.map((item, index) => (
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

const ContentRecommendationSection = ({
  content,
}: {
  content: CustomerReviewRecommendationType
}) => {
  return (
    <PostSectionWrapper
      title="추천 대화"
      subTitle={content.subTitle ?? ''}
      fragment="recommendation"
    >
      <VStack gap={'20px'} alignItems={'start'} w={'100%'}>
        {content.image?.url && (
          <Image
            alt={content.image?.alt ?? ''}
            src={content.image?.url}
            borderRadius={'28px'}
            w={'100%'}
            h={'400px'}
            objectFit={'cover'}
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

const ContentInterviewSection = ({
  content,
}: {
  content: CustomerReviewInterviewType
}) => {
  return (
    <PostSectionWrapper
      title="인터뷰 요약"
      subTitle={content.subTitle ?? ''}
      fragment="interview"
    >
      <VStack gap={'40px'} alignItems={'start'} w={'100%'}>
        <VStack gap={'20px'} alignItems={'start'} w={'100%'}>
          <VStack gap={'12px'} w={'100%'}>
            {content.image?.url && (
              <Image
                alt={content.image?.alt ?? ''}
                src={content.image?.url}
                borderRadius={'28px'}
                w={'100%'}
                h={'400px'}
                objectFit={'cover'}
              />
            )}
          </VStack>
          <Text
            textStyle={'pre-body-4'}
            color={'grey.9'}
            dangerouslySetInnerHTML={{ __html: content.body ?? '' }}
          ></Text>
        </VStack>
        <VStack gap={'10px'} alignItems={'start'}>
          {[
            { title: '고민', description: content.interviewProblem },
            { title: '솔루션', description: content.interviewSolution },
            { title: '결과', description: content.interviewResult },
            { title: '결론', description: content.interviewConclusion },
          ]?.map((item, index) => (
            <PostFeatureItem
              key={index}
              number={index + 1}
              title={item.title ?? ''}
              description={item.description ?? ''}
            />
          ))}
        </VStack>
      </VStack>
    </PostSectionWrapper>
  )
}

const navItems = [
  { title: '도입 배경', fragment: 'background' },
  { title: '선택 이유', fragment: 'reason' },
  { title: '도입 성과', fragment: 'outcome' },
  { title: '추천 대화', fragment: 'recommendation' },
  { title: '인터뷰 요약', fragment: 'interview' },
]

export const ReviewDetailContent = ({
  content,
}: {
  content?: GetCustomerReviewDetailType
}) => {
  const activeId = useScrollSpy({
    sectionIds: navItems.map((s) => s.fragment),
    headerOffset: 80, // 고정 헤더 높이로 조정
    minVisibleRatio: 0.4,
  })

  const { openPannel } = usePannelContext()

  return (
    <Flex position={'relative'} gap={'80px'} w={'100%'}>
      <VStack align={'start'} gap={'64px'} w={'100%'}>
        <ContentBackgroundSection content={content?.background ?? {}} />
        <ContentReasonSection content={content?.reason ?? {}} />
        <ContentOutcomeSection content={content?.outcome ?? {}} />
        <ContentRecommendationSection content={content?.recommendation ?? {}} />
        <ContentInterviewSection content={content?.interview ?? {}} />
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
