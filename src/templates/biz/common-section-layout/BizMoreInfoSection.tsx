import * as React from 'react'

import { Box, Container, Grid, Text, VStack } from '@chakra-ui/react'
import {
  ChatCenteredDotsIcon,
  CrownSimpleIcon,
  LightbulbIcon,
  NewspaperClippingIcon,
  TextAlignCenterIcon,
} from '@phosphor-icons/react/dist/ssr'

import { InfoCard } from '@/components/view/MoreInfoCard'
import {
  MoreInfoCardCustomerReviewIcon,
  MoreInfoCardExpertIcon,
  MoreInfoCardProblemSolveIcon,
  MoreInfoCardSolutionIcon,
} from '@/generated/icons/MyIcons'

export interface BizMoreInfoSectionProps {
  onSolutionClick?: () => void
  onReviewClick?: () => void
  onProblemClick?: () => void
  onExpertClick?: () => void
}

export const BizMoreInfoSection = React.forwardRef<
  HTMLDivElement,
  BizMoreInfoSectionProps
>(function BizMoreInfoSection(props, ref) {
  const {
    onSolutionClick,
    onReviewClick,
    onProblemClick,
    onExpertClick,
    ...rest
  } = props

  return (
    <Box ref={ref} bg="primary.1" py="80px" {...rest} w={'100%'}>
      <Container maxW={'1280px'}>
        <VStack gap="48px" align="stretch">
          <Text
            textStyle="pre-display-4"
            color="grey.10"
            textAlign="center"
            lineHeight="1.4"
          >
            관련 정보를 더 찾고 계신가요?
          </Text>

          <VStack gap="24px" align="stretch">
            {/* 첫 번째 행 */}
            <Grid templateColumns={{ base: '1fr', md: '1fr 1fr' }} gap="24px">
              <InfoCard
                title="관련 솔루션"
                description={
                  '킨코스가 제공하는 솔루션이 궁금한가요?\n원하는 솔루션을 찾아보세요.'
                }
                onButtonClick={onSolutionClick}
                icon={
                  <Box position="relative" w="60px" h="60px">
                    <MoreInfoCardSolutionIcon />
                  </Box>
                }
                iconBgColor="accent.blue1"
              />

              <InfoCard
                title="관련 고객후기"
                description={
                  '실제 작업 사례와 고객의 만족도가 궁금한가요?\n고객후기를 확인해 보세요.'
                }
                onButtonClick={onReviewClick}
                icon={
                  <Box position="relative" w="60px" h="60px">
                    <MoreInfoCardCustomerReviewIcon />
                  </Box>
                }
                iconBgColor="accent.violet1"
              />
            </Grid>

            {/* 두 번째 행 */}
            <Grid templateColumns={{ base: '1fr', md: '1fr 1fr' }} gap="24px">
              <InfoCard
                title="관련 고민해결"
                description={
                  '지금 겪는 고민을 해결하고 싶으신가요?\n고민 해결 방법을 확인해 보세요.'
                }
                onButtonClick={onProblemClick}
                icon={
                  <Box position="relative" w="60px" h="60px">
                    <MoreInfoCardProblemSolveIcon />
                  </Box>
                }
                iconBgColor="accent.pink1"
              />
              <InfoCard
                title="관련 전문가"
                description={
                  '믿고 맡길 수 있는 전문가가 필요하신가요?\n우리 기업에 맞는 전문가를 만나보세요.'
                }
                onButtonClick={onExpertClick}
                icon={
                  <Box position="relative" w="60px" h="60px">
                    <MoreInfoCardExpertIcon />
                  </Box>
                }
                iconBgColor="accent.yellow1"
              />
            </Grid>
          </VStack>
        </VStack>
      </Container>
    </Box>
  )
})
