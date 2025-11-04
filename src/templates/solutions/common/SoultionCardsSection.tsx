import { ReactElement } from 'react'
import React from 'react'

import { Box, Card, Center, Grid, GridItem, VStack } from '@chakra-ui/react'
import { Text } from '@chakra-ui/react'
import { IconProps } from '@phosphor-icons/react/dist/lib/types'

interface Props {
  title: ReactElement
  cards: {
    title: string
    description: string
    icon: React.ReactNode
  }[]
}
export const SoultionCardsSection = ({ title, cards }: Props) => {
  return (
    <VStack gap={{ base: '32px', sm: '40px', lg: '48px' }}>
      {title}
      <Grid
        w={'100%'}
        templateColumns={{
          base: '1fr',
          sm: 'repeat(2, 1fr)',
          lg: 'repeat(4, 1fr)',
        }}
        gap={'24px'}
      >
        {cards.map((card, index) => (
          <GridItem key={index}>
            <Card.Root
              variant="elevated"
              borderRadius="28px"
              p="36px"
              pb={'40px'}
              bg="grey.0"
              boxShadow="0px 20px 48px 0px rgba(1,45,181,0.12)"
              width="100%"
              height="100%"
              role="article"
              aria-labelledby={`card-title-${index}`}
              aria-describedby={`card-description-${index}`}
              tabIndex={0}
            >
              <Card.Body gap="12px" p={'0px'}>
                <Box
                  boxSize={'40px'}
                  bg={'secondary.4'}
                  borderRadius={'8px'}
                  as={Center}
                >
                  {React.cloneElement(
                    card.icon as React.ReactElement<IconProps>,
                    {
                      size: 28,
                      color: 'white',
                    },
                  )}
                </Box>
                <VStack align="flex-start" gap="16px" flex="1">
                  <Text
                    id={`card-title-${index}`}
                    textStyle="pre-heading-2"
                    color="grey.10"
                    as="h3"
                  >
                    {card.title}
                  </Text>
                  <Text
                    id={`card-description-${index}`}
                    textStyle="pre-body-2"
                    color="grey.7"
                  >
                    {card.description}
                  </Text>
                </VStack>
              </Card.Body>
            </Card.Root>
          </GridItem>
        ))}
      </Grid>
    </VStack>
  )
}
