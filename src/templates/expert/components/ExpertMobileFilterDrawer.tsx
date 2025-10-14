'use client'

import * as React from 'react'

import {
  Box,
  Button,
  Drawer,
  IconButton,
  Text,
  VStack,
  chakra,
} from '@chakra-ui/react'
import { FadersHorizontalIcon as FadersHorizontalIconPhosphor } from '@phosphor-icons/react/dist/ssr'

import {
  IndustryTypeType,
  PrintCostBracketTypeType,
} from '@/generated/apis/@types/data-contracts'

import {
  CategoryBadge,
  FilterOption,
  FilterSection,
} from './expert-filter/FilterItem'
import {
  FilterLogicProps,
  FilterState,
  useExpertFilter,
} from './hooks/useExpertFilter'

const FadersHorizontalIcon = chakra(FadersHorizontalIconPhosphor)

export interface ExpertMobileFilterDrawerProps extends FilterLogicProps {}

export const ExpertMobileFilterDrawer = React.forwardRef<
  HTMLDivElement,
  ExpertMobileFilterDrawerProps
>(function ExpertMobileFilterDrawer(props, ref) {
  const [open, setOpen] = React.useState(false)

  const { industryOptions, printOptions, filter, onFilterChange } = props

  const [tempFilter, setTempFilter] = React.useState<FilterState>(filter)

  const { printGroupedOptions, handleIndustryToggle, handlePrintToggle } =
    useExpertFilter({
      industryOptions,
      printOptions,
      filter: tempFilter,
      onFilterChange: setTempFilter,
    })

  const onSubmitFilter = () => {
    onFilterChange(tempFilter)
    setOpen(false)
  }

  return (
    <Drawer.Root
      placement="bottom"
      open={open}
      onOpenChange={(details) => setOpen(details.open)}
    >
      <Drawer.Trigger asChild>
        <IconButton size="md" bg="grey.2" onClick={() => setOpen(true)}>
          <FadersHorizontalIcon color="grey.8" />
        </IconButton>
      </Drawer.Trigger>
      <Drawer.Backdrop bg="greytransparent.4" />
      <Drawer.Positioner>
        <Drawer.Content
          bg="white"
          h="720px"
          borderRadius="20px 20px 0 0"
          p={{ base: '20px', sm: '40px' }}
          pt={{ base: '24px', sm: '24px' }}
          pb={{ base: '20px', sm: '20px' }}
          w="full"
        >
          <Drawer.Header
            p="0px"
            pb="12px"
            borderBottom="1px solid"
            borderColor="border.basic.1"
          >
            <Text textStyle="pre-heading-1">필터</Text>
          </Drawer.Header>
          <Drawer.Body
            role="region"
            aria-label="전문가 필터 옵션"
            p="0px"
            pt="24px"
            css={{
              scrollbar: 'none',
            }}
          >
            <VStack gap="32px" align="stretch">
              <VStack gap="36px" align="stretch" pb="60px">
                {/* 관련 분야 섹션 */}
                <FilterSection title="관련 분야">
                  <VStack
                    gap="0"
                    align="start"
                    role="group"
                    aria-label="관련 분야 선택"
                  >
                    {industryOptions.map((option) => (
                      <FilterOption
                        key={option.id}
                        option={option}
                        checked={tempFilter.industryId.includes(
                          option.id?.toString() || '',
                        )}
                        onToggle={(checked) =>
                          handleIndustryToggle(
                            option.id?.toString() || '',
                            checked,
                          )
                        }
                        ariaLabel={`${option.name} 관련 분야 선택`}
                      />
                    ))}
                  </VStack>
                </FilterSection>

                <FilterSection title="연간 인쇄 비용">
                  <VStack
                    gap="16px"
                    align="start"
                    role="group"
                    aria-label="연간 인쇄 비용 선택"
                  >
                    {Object.entries(printGroupedOptions).map(
                      ([category, options]) => (
                        <VStack key={category} gap="2px" align="start">
                          <CategoryBadge category={category} />
                          <VStack gap="0" align="start">
                            {options.map((option) => (
                              <FilterOption
                                key={option.id}
                                option={option}
                                checked={tempFilter.printId.includes(
                                  option.id?.toString() || '',
                                )}
                                onToggle={(checked) =>
                                  handlePrintToggle(
                                    option.id?.toString() || '',
                                    checked,
                                  )
                                }
                                ariaLabel={`${option.name} 연간 인쇄 비용 선택`}
                              />
                            ))}
                          </VStack>
                        </VStack>
                      ),
                    )}
                  </VStack>
                </FilterSection>
              </VStack>

              <Box
                position="absolute"
                bottom="0"
                left="0"
                right="0"
                p="20px"
                w="100%"
              >
                <Button w="100%" onClick={onSubmitFilter}>
                  확인
                </Button>
              </Box>
            </VStack>
          </Drawer.Body>
        </Drawer.Content>
      </Drawer.Positioner>
    </Drawer.Root>
  )
})
