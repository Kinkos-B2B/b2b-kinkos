'use client'

import Image from 'next/image'

import { chakra } from '@chakra-ui/react'

import FastMarquee from 'react-fast-marquee'

const companyImages = [
  {
    src: '/images/home/customer-review/company-1.png',
    alt: '회사 로고 1',
    width: 156,
    height: 32,
  },
  {
    src: '/images/home/customer-review/company-2.png',
    alt: '회사 로고 2',
    width: 157,
    height: 37,
  },
  {
    src: '/images/home/customer-review/company-3.png',
    alt: '회사 로고 3',
    width: 127,
    height: 50,
  },
  {
    src: '/images/home/customer-review/company-4.png',
    alt: '회사 로고 4',
    width: 145,
    height: 30,
  },
  {
    src: '/images/home/customer-review/company-5.png',
    alt: '회사 로고 5',
    width: 95,
    height: 42,
  },
  {
    src: '/images/home/customer-review/company-6.png',
    alt: '회사 로고 6',
    width: 140,
    height: 50,
  },
  {
    src: '/images/home/customer-review/company-7.png',
    alt: '회사 로고 7',
    width: 138,
    height: 42,
  },
  {
    src: '/images/home/customer-review/company-8.png',
    alt: '회사 로고 8',
    width: 156,
    height: 32,
  },
]

export function CompanyMarquee() {
  return (
    <chakra.div
      display="flex"
      flexDirection="column"
      gap="56px"
      alignItems="center"
      justifyContent="flex-start"
      py="32px"
      w="100%"
    >
      <FastMarquee direction="right" style={{ width: '100%', height: '60px' }}>
        <chakra.div
          display="flex"
          gap="96px"
          alignItems="center"
          justifyContent="flex-start"
          mr="96px"
        >
          {companyImages.map((image, index) => (
            <chakra.div
              key={index}
              display="flex"
              flexDirection="column"
              gap="10px"
              h="60px"
              alignItems="flex-start"
              justifyContent="center"
              py="9px"
            >
              <Image
                src={image.src}
                alt={image.alt}
                width={image.width}
                height={image.height}
                style={{ objectFit: 'contain' }}
              />
            </chakra.div>
          ))}
        </chakra.div>
      </FastMarquee>

      <FastMarquee direction="left" style={{ width: '100%', height: '60px' }}>
        <chakra.div
          display="flex"
          gap="96px"
          alignItems="center"
          justifyContent="flex-start"
          mr="96px"
        >
          {companyImages.map((image, index) => (
            <chakra.div
              key={`second-${index}`}
              display="flex"
              flexDirection="column"
              gap="10px"
              h="60px"
              alignItems="flex-start"
              justifyContent="center"
              py="9px"
            >
              <chakra.div
                position="relative"
                backgroundSize="cover"
                backgroundPosition="center"
                backgroundRepeat="no-repeat"
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  width={image.width}
                  height={image.height}
                  style={{ objectFit: 'contain' }}
                />
              </chakra.div>
            </chakra.div>
          ))}
        </chakra.div>
      </FastMarquee>
    </chakra.div>
  )
}
