import { Fragment, useRef } from 'react'

import Image from 'next/image'

import { Box, Container, Flex, VStack } from '@chakra-ui/react'
import { useGSAP } from '@gsap/react'

import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

import { ComparisonTableRow } from '@/components/ui/comparison-table'

import { SolutionFeatureItem } from './SolutionFeatureItem'

export const SolutionFeatureSection = () => {
  const section1Ref = useRef<HTMLDivElement>(null)
  const section2Ref = useRef<HTMLDivElement>(null)
  const section3Ref = useRef<HTMLDivElement>(null)
  const section4Ref = useRef<HTMLDivElement>(null)

  const sections = [section1Ref, section2Ref, section3Ref, section4Ref]
  // 전역에서 ScrollTrigger 플러그인 등록

  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger)

    sections.forEach((sectionRef, index) => {
      if (index === 0) {
        return
      }

      const section = sectionRef.current?.querySelector('.feature-section')

      if (!section) return
      gsap.set(section, {
        opacity: 0,
      })
    })

    sections.forEach((sectionRef, index) => {
      const triggerEl = sectionRef.current?.querySelector('.feature-section')
      if (!triggerEl) return

      const isLastSection = index === sections.length - 1
      const nextSectionRef = sections[index + 1]

      const PIN_OFFSET = 160
      const START_POINT = `top-=${PIN_OFFSET}px top`

      const endTriggerEl =
        isLastSection ? sectionRef.current : nextSectionRef?.current
      if (!endTriggerEl) return

      const getEndValue = () => {
        if (isLastSection) {
          const featureHeight = triggerEl.clientHeight
          return `bottom top+=${featureHeight + PIN_OFFSET}px`
        }

        return `top top+=${PIN_OFFSET}px`
      }

      const handleUpdate = ({ progress }: { progress: number }) => {
        const section = sectionRef.current?.querySelector('.feature-section')
        if (!section) return

        let shouldHide: boolean

        if (isLastSection) {
          shouldHide = progress === 0
        } else if (index === 0) {
          shouldHide = progress === 1
        } else {
          shouldHide = progress === 1 || progress === 0
        }

        gsap.set(section, {
          opacity: shouldHide ? 0 : 1,
          duration: 0.1,
          ease: 'power1.in',
        })
      }

      ScrollTrigger.create({
        trigger: triggerEl,
        pin: true,
        scrub: true,
        start: START_POINT,
        end: getEndValue(),
        endTrigger: endTriggerEl,
        onUpdate: handleUpdate,
      })
    })
  })

  const highlightData: ComparisonTableRow[] = [
    {
      category: '간편성 및 자동화 수준',
      kinkos: 'O',
      competitorA: 'O',
      competitorB: 'O',
    },
    {
      category: '내부DB 연동 개발 여부',
      kinkos: 'O',
      competitorA: 'X',
      competitorB: 'X',
    },
  ]

  return (
    <Container
      py={'160px'}
      overflow={'unset'}
      gap={'40px'}
      display={'flex'}
      maxW={'1280px'}
      flexDirection={'column'}
      position={'relative'}
      className="feature-section-container"
    >
      {sections.map((sectionRef, index) => {
        return (
          <Flex
            align={'start'}
            justify={'space-between'}
            key={index}
            ref={sectionRef}
          >
            <Box zIndex={100} w={'560px'} className="feature-section">
              <SolutionFeatureItem.Table
                title={`${index + 1}번째 기능`}
                description={Array.from({ length: index + 1 })
                  .map(
                    (_, i) =>
                      `킨코스는 간편성 및 자동화 수준을 최적화하여 사용자의 편의성을 극대화합니다. ${i + 1}`,
                  )
                  .join('\n')}
                highlightData={highlightData}
              />
            </Box>
            <VStack
              gap={'40px'}
              align={'end'}
              className="feature-image-section"
            >
              <Image
                style={{
                  height: 'auto',
                  borderRadius: '28px',
                }}
                src={'/images/solutions/solutions-hero-section.jpg'}
                alt="feature"
                width={600}
                height={600}
                objectFit={'cover'}
              />
              <Image
                className="feature-image"
                style={{
                  height: 'auto',
                  borderRadius: '28px',
                }}
                src={'/images/solutions/solutions-feature-mock-img.jpg'}
                alt="feature"
                width={600}
                height={600}
                objectFit={'cover'}
              />
              <Image
                className="feature-image"
                style={{
                  height: 'auto',
                  borderRadius: '28px',
                }}
                src={'/images/solutions/solutions-feature-mock-img.jpg'}
                alt="feature"
                width={600}
                height={600}
                objectFit={'cover'}
              />
            </VStack>
          </Flex>
        )
      })}
    </Container>
  )
}
