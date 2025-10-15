import { Fragment, useRef } from 'react'

import Image from 'next/image'

import { Box, Container, Flex, VStack } from '@chakra-ui/react'
import { useGSAP } from '@gsap/react'

import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

import { SolutionFeatureItem } from './SolutionFeatureItem'

//@TODO 코드 정리 필요

export const SolutionFeatureDesktopSection = () => {
  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger)

    const imageSections = document.querySelectorAll(
      '[class*="feature-image-section"]',
    )

    const tableSections = document.querySelectorAll(
      '[class^="feature-table-section"]',
    )

    tableSections.forEach((section, index) => {
      gsap.set(section, {
        top: '0px',
        left: '0',
        zIndex: 100 - index,
        opacity: index === 0 ? 1 : 0,
      })
    })

    imageSections.forEach((imageSection, index) => {
      const featureSection = document.querySelector(
        `.feature-table-section-${index}`,
      )

      const isFirstSection = index === 0
      const isLastSection = index === imageSections.length - 1
      const PIN_OFFSET = 160

      ScrollTrigger.create({
        markers: isLastSection,
        trigger: imageSection,
        start: `top top+=${PIN_OFFSET}px`,
        end: `bottom top+=${PIN_OFFSET}px`,
        onEnter: () => {
          gsap.to(featureSection, {
            opacity: 1,
            duration: 0.5,
            ease: 'power2.out',
          })
        },
        onLeave: () => {
          gsap.to(featureSection, {
            opacity: 0,
            duration: 0.5,
            ease: 'power2.out',
          })

          // 다음 섹션 페이드 인
          if (!isLastSection) {
            const nextFeatureSection = document.querySelector(
              `.feature-table-section-${index + 1}`,
            )
            if (nextFeatureSection) {
              gsap.to(nextFeatureSection, {
                opacity: 1,
                duration: 0.5,
                ease: 'power2.out',
              })
            }
          }
        },
        onEnterBack: () => {
          // 뒤로 돌아올 때 현재 섹션 페이드 인
          gsap.to(featureSection, {
            opacity: 1,
            duration: 0.5,
            ease: 'power2.out',
          })
        },
        onLeaveBack: () => {
          if (isFirstSection) return
          gsap.to(featureSection, {
            opacity: 0,
            duration: 0.5,
            ease: 'power2.out',
          })

          if (index > 0) {
            const prevFeatureSection = document.querySelector(
              `.feature-table-section-${index - 1}`,
            )
            if (prevFeatureSection) {
              gsap.to(prevFeatureSection, {
                opacity: 1,
                duration: 0.5,
                ease: 'power2.out',
              })
            }
          }
        },
      })
    })
  })

  const data = {
    highlightData: [
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
    ],
    images: [
      {
        image: '/images/solutions/solutions-hero-section.jpg',
        alt: 'feature',
      },
      {
        image: '/images/solutions/solutions-feature-mock-img.jpg',
        alt: 'feature',
      },
      {
        image: '/images/solutions/solutions-feature-mock-img.jpg',
        alt: 'feature',
      },
    ],
  }

  const datas = [data, data, data, data]

  return (
    <Container
      py={{ base: '100px', sm: '140px', lg: '160px' }}
      position={'relative'}
      className="feature-section-container"
      overflow={'unset'}
      w={'100%'}
      display={'flex'}
      justifyContent={'space-between'}
    >
      <Box
        w={'560px'}
        zIndex={100}
        overflow={'unset'}
        className="feature-table-container"
        position={'sticky'}
        height={'fit-content'}
        top={'160px'}
      >
        {datas.map((data, index) => (
          <Box
            key={`feature-table-${index}`}
            className={`feature-table-section-${index}`}
            position={'absolute'}
            top={'0px'}
          >
            <SolutionFeatureItem.Table
              title={`${index + 1}번째 기능`}
              description={Array.from({ length: index + 1 })
                .map(
                  (_, i) =>
                    `킨코스는 간편성 및 자동화 수준을 최적화하여 사용자의 편의성을 극대화합니다. ${i + 1}`,
                )
                .join('\n')}
              highlightData={data.highlightData}
            />
          </Box>
        ))}

        {/* {높이 맞춤용 더미 박스} */}
        {datas.at(-1) && (
          <Box opacity={0}>
            <SolutionFeatureItem.Table
              title={`${datas.length}번째 기능`}
              description={Array.from({ length: datas.length })
                .map(
                  (_, i) =>
                    `킨코스는 간편성 및 자동화 수준을 최적화하여 사용자의 편의성을 극대화합니다. ${i + 1}`,
                )
                .join('\n')}
              highlightData={data.highlightData}
            />
          </Box>
        )}
      </Box>
      <VStack gap={'40px'}>
        {datas.map((data, index) => (
          <VStack
            key={`image-${index}`}
            gap={'40px'}
            className={`feature-image-section-${index}`}
            minHeight={'100vh'}
          >
            {data.images.map((image, index) => (
              <Image
                key={index}
                style={{
                  height: 'auto',
                  borderRadius: '28px',
                }}
                src={image.image}
                alt="feature"
                width={600}
                height={600}
                objectFit={'cover'}
              />
            ))}
          </VStack>
        ))}
      </VStack>
    </Container>
  )
}
