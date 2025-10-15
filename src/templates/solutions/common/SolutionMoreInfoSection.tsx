import * as React from 'react'

import { Box, Container, Grid, GridItem, Text, VStack } from '@chakra-ui/react'

import { PageLinkCard, PageLinkKey } from '@/components/view/PageLinkCard'
import { ROUTES } from '@/constants/routes'

export interface Props {
  linkCard: PageLinkKey[]
}

export const SolutionMoreInfoSection = React.forwardRef<HTMLDivElement, Props>(
  function BizMoreInfoSection({ linkCard }, ref) {
    return (
      <Box ref={ref} w={'100%'}>
        <Container>
          <VStack gap="48px" align="stretch">
            <Text textStyle="pre-display-4" color="grey.10" textAlign="center">
              관련 정보를 더 찾고 계신가요?
            </Text>
            <VStack gap="24px" align="stretch">
              <Grid
                gap="20px"
                rowGap="20px"
                templateColumns={{
                  base: '1fr',
                  sm: '1fr 1fr',
                  lg: '1fr 1fr 1fr',
                }}
              >
                <GridItem colSpan={{ base: 1, sm: 1, lg: 1 }}>
                  <PageLinkCard boxSize="74px" type={linkCard[0]} />
                </GridItem>
                <GridItem colSpan={{ base: 1, sm: 1, lg: 1 }}>
                  <PageLinkCard boxSize="74px" type={linkCard[1]} />
                </GridItem>
                <GridItem colSpan={{ base: 1, sm: 2, lg: 1 }}>
                  <PageLinkCard boxSize="74px" type={linkCard[2]} />
                </GridItem>
              </Grid>
            </VStack>
          </VStack>
        </Container>
      </Box>
    )
  },
)
