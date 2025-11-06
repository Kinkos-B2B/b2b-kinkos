import { Metadata } from 'next'

import { ENV } from '@/configs/env'
import { seoApiApi } from '@/generated/apis/SeoApi/SeoApi.query'
import { HomeTemplate } from '@/templates/home/HomeTemplate'

export async function generateMetadata(): Promise<Metadata> {
  try {
    const seoData = await seoApiApi.getSiteSeoInfo()

    const seoInfo = seoData?.data

    return {
      ...(ENV.DOMAIN && { metadataBase: new URL(ENV.DOMAIN) }),
      title:
        seoInfo?.seoTitle ?
          {
            default: seoInfo.seoTitle,
            template: `%s | 킨코스코리아(주)`,
          }
        : {
            default:
              'B2B 인쇄·패키지 디자인·홍보·사인물 인쇄·기업 인쇄몰·기업 홍보물 인쇄 전문 솔루션 | 킨코스코리아(주)',
            template: `%s | 킨코스코리아(주)`,
          },
      description:
        seoInfo?.seoDescription ||
        '대량·소량·특수 인쇄부터 포장, 물류, 보안까지. 30년 노하우와 첨단 기술력으로 기업 홍보물 인쇄를 원스톱 지원. ESG 친환경 솔루션 제공',
      openGraph: {
        type: 'website',
        locale: 'ko',
        siteName:
          '킨코스 B2B | 디자인·제작·품질·보안·물류 등의 통합 솔루션을 갖춘 기업 인쇄 전문 솔루션',
        title:
          seoInfo?.ogTitle ?
            seoInfo.ogTitle
          : {
              default:
                '킨코스 B2B | 디자인·제작·품질·보안·물류 등의 통합 솔루션을 갖춘 기업 인쇄 전문 솔루션',
              template: `킨코스 B2B | %s`,
            },
        description:
          seoInfo?.ogDescription ||
          '30년 노하우와 첨단 기술력으로 기업 인쇄의 모든 과정을 한 번에. 대량·소량·특수 인쇄부터 포장, 물류, 보안까지 ESG 친환경 솔루션으로 비즈니스 가치를 높이세요.',
        images: [
          {
            url: '/images/new_og.png',
            width: 600,
            height: 315,
            alt: 'Og Image Alt',
            type: 'image/png',
          },
        ],
        url: ENV.DOMAIN,
      },
      twitter: {
        card: 'summary_large_image',
        images: `/images/new_og.png`,
        title: seoInfo?.ogTitle || '킨코스 B2B',
        description: seoInfo?.ogDescription || '킨코스 B2B',
        site: '@site',
      },
    }
  } catch (error) {
    console.error('Failed to fetch SEO data:', error)
    // Fallback to default metadata
    return {
      ...(ENV.DOMAIN && { metadataBase: new URL(ENV.DOMAIN) }),
      title: {
        default:
          'B2B 인쇄·패키지 디자인·홍보·사인물 인쇄·기업 인쇄몰·기업 홍보물 인쇄 전문 솔루션 | 킨코스코리아(주)',
        template: `%s | 킨코스코리아(주)`,
      },
      description:
        '대량·소량·특수 인쇄부터 포장, 물류, 보안까지. 30년 노하우와 첨단 기술력으로 기업 홍보물 인쇄를 원스톱 지원. ESG 친환경 솔루션 제공',
      openGraph: {
        type: 'website',
        locale: 'ko',
        siteName:
          '킨코스 B2B | 디자인·제작·품질·보안·물류 등의 통합 솔루션을 갖춘 기업 인쇄 전문 솔루션',
        title: {
          default:
            '킨코스 B2B | 디자인·제작·품질·보안·물류 등의 통합 솔루션을 갖춘 기업 인쇄 전문 솔루션',
          template: `킨코스 B2B | %s`,
        },
        description:
          '30년 노하우와 첨단 기술력으로 기업 인쇄의 모든 과정을 한 번에. 대량·소량·특수 인쇄부터 포장, 물류, 보안까지 ESG 친환경 솔루션으로 비즈니스 가치를 높이세요.',
        images: [
          {
            url: '/images/new_og.png',
            width: 600,
            height: 315,
            alt: 'Og Image Alt',
            type: 'image/png',
          },
        ],
        url: ENV.DOMAIN,
      },
      twitter: {
        card: 'summary_large_image',
        images: `/images/new_og.png`,
        title: '킨코스 B2B',
        description: '킨코스 B2B',
        site: '@site',
      },
    }
  }
}

export default function HomePage() {
  return <HomeTemplate />
}
