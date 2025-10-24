'use client'

import Image from 'next/image'

import { Avatar, Box, Button, Text, VStack } from '@chakra-ui/react'

import { usePannelContext } from '@/components/PannelContext'
import { GetSolutionExpertType } from '@/generated/apis/@types/data-contracts'

interface RelatedExpertCardProps {
  solutionExpert: GetSolutionExpertType
  onButtonClick?: () => void
}

export const SolutionReleatedExportCard = ({
  solutionExpert,
}: RelatedExpertCardProps) => {
  const { openPannel } = usePannelContext()
  return (
    <Box
      borderRadius="28px"
      p={{
        base: '24px',
        sm: '32px',
        lg: '36px',
      }}
      pb={{
        base: '28px',
        sm: '36px',
        lg: '40px',
      }}
      pt={{
        base: '24px',
        sm: '32px',
        lg: '36px',
      }}
      bg={'background.basic.2'}
      border={'1px solid'}
      borderColor={'border.basic.1'}
      w="100%"
      h="100%"
    >
      <VStack gap="28px" align="stretch" w="100%" h="100%">
        {/* 아바타 섹션 */}
        <Box
          position="relative"
          borderRadius="12px"
          w={{
            base: '100px',
            sm: '110px',
            lg: '125px',
          }}
          h={{
            base: '100px',
            sm: '110px',
            lg: '125px',
          }}
        >
          <Avatar.Root
            borderRadius="12px"
            bg="grey.3"
            w={{
              base: '100px',
              sm: '110px',
              lg: '125px',
            }}
            h={{
              base: '100px',
              sm: '110px',
              lg: '125px',
            }}
          >
            {solutionExpert.profileImage?.url && (
              <Avatar.Image
                src={solutionExpert.profileImage?.url}
                alt={solutionExpert.nickname}
                width={125}
                height={125}
                style={{
                  objectFit: 'cover',
                  borderRadius: '12px',
                }}
              />
            )}
          </Avatar.Root>
        </Box>

        {/* 닉네임과 소개글 섹션 */}
        <VStack gap="10px" align="stretch" w="100%">
          <Box w="100%">
            <Text textStyle="pre-heading-2" color="grey.10">
              {solutionExpert.nickname}
            </Text>
          </Box>
          <Box w="100%">
            <Text textStyle="pre-body-4" color="grey.7" whiteSpace="pre-line">
              {solutionExpert.description}
            </Text>
          </Box>
        </VStack>

        {/* 버튼 섹션 */}
        <Box w="100%">
          <Button
            w={'100%'}
            variant="outline"
            size="md"
            onClick={() => openPannel()}
          >
            무료 상담 받아보기
          </Button>
        </Box>
      </VStack>
    </Box>
  )
}
