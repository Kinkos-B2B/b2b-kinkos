import * as React from 'react'

import { useRouter } from 'next/navigation'

import { Box, HStack, Text, VStack } from '@chakra-ui/react'

import { Button } from '@/components/ui/button'
import {
  MoreInfoCardCustomerReviewIcon,
  MoreInfoCardExpertIcon,
  MoreInfoCardProblemSolveIcon,
  MoreInfoCardSolutionIcon,
  MoreInfoCardSystemIcon,
} from '@/generated/icons/MyIcons'

export interface InfoCardProps {
  title: string
  description?: string
  buttonText?: string
  icon?: React.ReactNode
  iconBgColor?: string
  onButtonClick?: () => void
}

const PAGE_LINK_CARD_MAP = {
  SOLUTION: {
    title: '관련 솔루션',
    description:
      '킨코스가 제공하는 솔루션이 궁금한가요?\n원하는 솔루션을 찾아보세요.',
    icon: <MoreInfoCardSolutionIcon />,
    iconBgColor: 'accent.blue1',
  },
  REVIEW: {
    title: '관련 고객후기',
    description:
      '실제 작업 사례와 고객의 만족도가 궁금한가요?\n고객후기를 확인해 보세요.',
    icon: <MoreInfoCardCustomerReviewIcon />,
    iconBgColor: 'accent.violet1',
  },
  PROBLEM: {
    title: '관련 고민해결',
    description:
      '지금 겪는 고민을 해결하고 싶으신가요?\n고민 해결 방법을 확인해 보세요.',
    icon: <MoreInfoCardProblemSolveIcon />,
    iconBgColor: 'accent.pink1',
  },
  EXPERT: {
    title: '관련 전문가',
    description:
      '믿고 맡길 수 있는 전문가가 필요하신가요?\n우리 기업에 맞는 전문가를 만나보세요.',
    icon: <MoreInfoCardExpertIcon />,
    iconBgColor: 'accent.yellow1',
  },
  SYSTEM: {
    title: '관련 시스템',
    description:
      '킨코스가 제공하는 시스템이 궁금한가요?\n원하는 시스템을 찾아보세요.',
    icon: <MoreInfoCardSystemIcon />,
    iconBgColor: 'accent.blue1',
  },
}

export const PageLinkCard = ({
  type,
  href,
  boxSize = '100px',
}: {
  type: keyof typeof PAGE_LINK_CARD_MAP
  href: string
  boxSize?: string
}) => {
  const router = useRouter()
  const { title, description, icon, iconBgColor } = PAGE_LINK_CARD_MAP[type]

  return (
    <Box
      bg="grey.0"
      borderRadius="28px"
      boxShadow="0px 20px 48px 0px rgba(1, 45, 181, 0.12)"
      p="36px"
      position="relative"
    >
      <HStack align="end" justify="space-between" h="full">
        <VStack align="start" gap="24px" flex="1">
          <VStack align="start" gap="12px">
            <Text textStyle="pre-heading-2" color="grey.9">
              {title}
            </Text>
            <Text textStyle="pre-body-4" color="grey.7" whiteSpace="pre-line">
              {description}
            </Text>
          </VStack>
          <Button
            size="md"
            variant="outline"
            colorPalette="grey"
            onClick={() => {
              router.push(href)
            }}
          >
            더 자세히 알아보기
          </Button>
        </VStack>
        {icon && (
          <Box
            bg={iconBgColor}
            borderRadius="20%"
            h={boxSize}
            w={boxSize}
            display="flex"
            alignItems="center"
            justifyContent="center"
            flexShrink="0"
          >
            <Box position="relative" w="70%" h="70%">
              {icon}
            </Box>
          </Box>
        )}
      </HStack>
    </Box>
  )
}
