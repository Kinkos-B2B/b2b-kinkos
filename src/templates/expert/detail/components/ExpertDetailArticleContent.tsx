import { Badge, Box, Button, Flex, Image, Text, VStack } from '@chakra-ui/react'

import { usePannelContext } from '@/components/PannelContext'
import { PostFeatureItem } from '@/components/view/PostDetail/PostFeatureItem'
import { PostSectionWrapper } from '@/components/view/PostDetail/PostSectionWrapper'
import { LAYOUT } from '@/constants/layout'
import {
  ExpertCareerType,
  ExpertIntroType,
  ExpertStrengthType,
  GetExpertResponseType,
  HelpArticleFeasibleDetailType,
} from '@/generated/apis/@types/data-contracts'

const ExpertIntroSection = ({ content }: { content: ExpertIntroType }) => {
  return (
    <PostSectionWrapper
      title="전문가 소개"
      subTitle={content.subTitle ?? ''}
      fragment="intro"
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

const ExpertCareerSection = ({ content }: { content: ExpertCareerType }) => {
  return (
    <PostSectionWrapper
      title="경력&전문 분야"
      subTitle={content.subTitle ?? ''}
      fragment="career"
    >
      <VStack gap={'20px'} alignItems={'start'} w={'100%'}>
        <VStack gap={'12px'} alignItems={'start'} w={'100%'}>
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
              alt={content.secondImage?.alt ?? ''}
              src={content.secondImage?.url}
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

const ExpertStrengthSection = ({
  content,
}: {
  content: ExpertStrengthType
}) => {
  return (
    <PostSectionWrapper
      title="전문가 강점"
      subTitle={content.subTitle ?? ''}
      fragment="strength"
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

export const ExpertDetailArticleContent = ({
  content,
}: {
  content?: GetExpertResponseType
}) => {
  const { openPannel } = usePannelContext()

  return (
    <Flex
      position={'relative'}
      gap={{ base: '56px', lg: '80px' }}
      flexDir={{ base: 'column', lg: 'row' }}
    >
      <VStack
        display={{ base: 'flex', lg: 'none' }}
        p={'28px'}
        alignItems={'start'}
        border={'1px solid'}
        borderColor={'border.basic.1'}
        borderRadius={'28px'}
        gap={'16px'}
      >
        <Text textStyle={'pre-body-1'} color={'grey.10'}>
          {content?.profile.nickname}
        </Text>
        <Flex gap={'8px'} flexWrap={'wrap'}>
          {content?.profile.industryList?.map((item, index) => (
            <Badge colorPalette="grey" variant="subtle" key={index}>
              {item}
            </Badge>
          ))}
        </Flex>
      </VStack>

      <VStack align={'start'} gap={'64px'}>
        <ExpertIntroSection content={content?.intro ?? {}} />
        <ExpertCareerSection content={content?.career ?? {}} />
        <ExpertStrengthSection content={content?.strength ?? {}} />
      </VStack>
      <Flex
        display={{ base: 'none', lg: 'flex' }}
        position={'sticky'}
        right={0}
        top={`calc(${LAYOUT.HEADER.HEIGHT} + 30px)`}
        w={'280px'}
        h={'fit-content'}
        flexDirection={'column'}
        gap={'24px'}
        p={'28px'}
        border={'1px solid'}
        borderColor={'border.basic.1'}
        borderRadius={'28px'}
      >
        <VStack
          align={'start'}
          gap={'8px'}
          pb={'24px'}
          borderBottom={'1px solid'}
          borderColor={'border.basic.1'}
        >
          <VStack gap={'16px'} align={'start'}>
            <Text textStyle={'pre-body-1'} color={'grey.10'}>
              {content?.profile.nickname}
            </Text>
            <Flex gap={'8px'} flexWrap={'wrap'}>
              {content?.profile.industryList?.map((item, index) => (
                <Badge colorPalette="grey" variant="subtle" key={index}>
                  {item}
                </Badge>
              ))}
            </Flex>
          </VStack>
        </VStack>
        <VStack align={'start'} gap={'8px'}>
          <Text textStyle={'pre-caption-2'} color={'grey.7'}>
            이 전문가가 마음에 든다면?
          </Text>
          <Button w={'100%'} onClick={() => openPannel()}>
            무료 상담 받아보기
          </Button>
        </VStack>
      </Flex>
    </Flex>
  )
}
