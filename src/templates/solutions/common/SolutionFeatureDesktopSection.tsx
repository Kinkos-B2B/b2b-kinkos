import { Fragment, useEffect, useRef } from 'react'

import { Box, Container, Flex, Image, VStack } from '@chakra-ui/react'
import { useGSAP } from '@gsap/react'

import { gsap } from 'gsap'
import { ScrollSmoother } from 'gsap/ScrollSmoother'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

import { SolutionFeatureItem } from './SolutionFeatureItem'
import { FeatureItem } from './SolutionFeatureSection'

interface Props {
  featureItems: FeatureItem[]
}

export const SolutionFeatureDesktopSection = ({ featureItems }: Props) => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger, ScrollSmoother)

    setTimeout(() => {
      const imageSections = document.querySelectorAll(
        '[class*="feature-image-section"]',
      )

      const tableSections = document.querySelectorAll(
        '[class^="feature-table-section"]',
      )

      tableSections.forEach((section, index) => {
        if (index === 0) {
          console.log(section)
        }
        gsap.set(section, {
          top: '0px',
          left: '0',
          zIndex: 100 - index,
          opacity: index === 0 ? 1 : 0,
          invalidateOnRefresh: true,
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
          markers: true,
          trigger: imageSection,
          start: `top top+=${PIN_OFFSET}px`,
          end: `bottom top+=${PIN_OFFSET - 40}px`,
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
    }, 1000)
  }, [])

  const datas = featureItems

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
            opacity={0}
            top={'0px'}
          >
            {data.type === 'table' && (
              <SolutionFeatureItem.Table
                title={data.title}
                description={data.description}
                highlightData={data.tableData ?? []}
              />
            )}
            {data.type === 'description' && (
              <SolutionFeatureItem.Description
                title={data.title}
                description={data.description}
                descriptionData={data.descriptionData ?? []}
              />
            )}
          </Box>
        ))}

        {datas.at(-1) && (
          <Box opacity={0}>
            {datas.at(-1)?.type === 'table' && (
              <SolutionFeatureItem.Table
                title={datas.at(-1)?.title ?? ''}
                description={datas.at(-1)?.description ?? ''}
                highlightData={datas.at(-1)?.tableData ?? []}
              />
            )}
            {datas.at(-1)?.type === 'description' && (
              <SolutionFeatureItem.Description
                title={datas.at(-1)?.title ?? ''}
                description={datas.at(-1)?.description ?? ''}
                descriptionData={datas.at(-1)?.descriptionData ?? []}
              />
            )}
          </Box>
        )}
      </Box>
      <VStack gap={'40px'}>
        {datas.map((data, index) => (
          <VStack
            key={`image-${index}`}
            gap={'40px'}
            className={`feature-image-section-${index}`}
          >
            {data.imageData.map((image, index) => (
              <Image
                key={index}
                src={image.url}
                alt={image.alt}
                style={{
                  borderRadius: '28px',
                  width: '600px',
                }}
                objectFit={'cover'}
              />
            ))}
          </VStack>
        ))}
      </VStack>
    </Container>
  )
}
