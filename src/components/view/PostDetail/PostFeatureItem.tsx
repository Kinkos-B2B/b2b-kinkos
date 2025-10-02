import { Badge, HStack, Text, VStack } from '@chakra-ui/react'

interface FeatureItemProps {
  /** 번호 */
  number: number
  /** 제목 */
  title: string
  /** 설명 */
  description: string
}

export const PostFeatureItem = ({
  number,
  title,
  description,
}: FeatureItemProps) => {
  return (
    <VStack
      align="start"
      gap="4px"
      role="listitem"
      aria-labelledby={`feature-${number}-title`}
    >
      <HStack gap="8px" align="center">
        <Badge variant="circular" size="md" aria-label={`${number}번째 기능`}>
          <Text lineHeight={'1'}>{number}</Text>
        </Badge>
        <Text
          id={`feature-${number}-title`}
          textStyle="pre-body-3"
          color="grey.10"
          fontWeight="600"
          fontSize="16px"
          lineHeight="1.6"
          letterSpacing="-0.32px"
        >
          {title}
        </Text>
      </HStack>
      <HStack gap="6px" align="start" w="full">
        <Text
          textAlign="center"
          w="22px"
          flexShrink="0"
          color="grey.9"
          fontSize="16px"
          lineHeight="1.6"
          aria-hidden="true"
        >
          •
        </Text>
        <Text
          flex="1"
          textStyle="pre-body-4"
          color="grey.9"
          fontSize="16px"
          lineHeight="1.6"
          letterSpacing="-0.32px"
        >
          {description}
        </Text>
      </HStack>
    </VStack>
  )
}
