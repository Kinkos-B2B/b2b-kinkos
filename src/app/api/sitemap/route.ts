import { NextRequest, NextResponse } from 'next/server'

import { ENV } from '@/configs/env'
import fetchExtended from '@/configs/fetch/fetch-extend'
import { ROUTES } from '@/constants/routes'
import { CustomerReviewApiApi } from '@/generated/apis/CustomerReviewApi/CustomerReviewApi.api'
import { ExpertApiApi } from '@/generated/apis/ExpertApi/ExpertApi.api'
import { HelpArticleApiApi } from '@/generated/apis/HelpArticleApi/HelpArticleApi.api'

const customerReviewApi = new CustomerReviewApiApi({
  customFetch: fetchExtended,
})
const expertApi = new ExpertApiApi({
  customFetch: fetchExtended,
})
const helpArticleApi = new HelpArticleApiApi({
  customFetch: fetchExtended,
})

/**
 * 모든 페이지의 데이터를 가져오는 헬퍼 함수
 */
async function getAllPages<T>(
  fetchFn: (page: number) => Promise<{
    data?: {
      content?: T[]
      totalElements?: number
      size?: number
    }
  }>,
): Promise<T[]> {
  const allItems: T[] = []
  let page = 0
  const pageSize = 100 // 한 번에 많은 데이터 가져오기

  // eslint-disable-next-line no-constant-condition
  while (true) {
    const response = await fetchFn(page)
    const content = response.data?.content || []
    allItems.push(...content)

    const totalElements = response.data?.totalElements || 0
    const size = response.data?.size || pageSize
    const totalPages = Math.ceil(totalElements / size)

    if (page >= totalPages - 1 || content.length === 0) {
      break
    }
    page++
  }

  return allItems
}

/**
 * 날짜를 ISO 8601 형식으로 변환
 */
function formatDate(dateString?: string): string {
  if (!dateString) return new Date().toISOString()
  return new Date(dateString).toISOString()
}

/**
 * Sitemap XML 생성
 */
function generateSitemapXml(
  domain: string,
  urls: Array<{
    url: string
    lastmod?: string
    priority?: number
    changefreq?: string
  }>,
): string {
  const baseUrl = domain || ENV.DOMAIN

  const urlEntries = urls
    .map(
      ({ url, lastmod, priority = 0.8, changefreq = 'weekly' }) => `
    <url>
      <loc>${baseUrl}${url}</loc>
      ${lastmod ? `<lastmod>${lastmod}</lastmod>` : ''}
      <changefreq>${changefreq}</changefreq>
      <priority>${priority}</priority>
    </url>`,
    )
    .join('')

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urlEntries}
</urlset>`
}

export async function GET(request: NextRequest) {
  try {
    const domain = request.nextUrl.origin
    const urls: Array<{
      url: string
      lastmod?: string
      priority?: number
      changefreq?: string
    }> = []

    // 정적 페이지 추가
    urls.push({
      url: ROUTES.HOME,
      priority: 1.0,
      changefreq: 'daily',
    })

    urls.push({
      url: ROUTES.CUSTOMER_REVIEW,
      priority: 0.9,
      changefreq: 'weekly',
    })

    urls.push({
      url: ROUTES.PROBLEM,
      priority: 0.9,
      changefreq: 'weekly',
    })

    urls.push({
      url: ROUTES.EXPERT,
      priority: 0.9,
      changefreq: 'weekly',
    })

    urls.push({
      url: ROUTES.FAQ,
      priority: 0.7,
      changefreq: 'monthly',
    })

    // BIZ 페이지들
    Object.values(ROUTES.BIZ).forEach((route) => {
      urls.push({
        url: route,
        priority: 0.8,
        changefreq: 'monthly',
      })
    })

    // SOLUTIONS 페이지들
    Object.values(ROUTES.SOLUTIONS.DESIGN).forEach((route) => {
      urls.push({
        url: route,
        priority: 0.8,
        changefreq: 'monthly',
      })
    })

    Object.values(ROUTES.SOLUTIONS.PRODUCTION).forEach((route) => {
      urls.push({
        url: route,
        priority: 0.8,
        changefreq: 'monthly',
      })
    })

    Object.values(ROUTES.SOLUTIONS.VIDEO_AI).forEach((route) => {
      urls.push({
        url: route,
        priority: 0.8,
        changefreq: 'monthly',
      })
    })

    Object.values(ROUTES.SOLUTIONS.ONLINE_ORDER).forEach((route) => {
      urls.push({
        url: route,
        priority: 0.8,
        changefreq: 'monthly',
      })
    })

    // 동적 페이지: Customer Reviews
    try {
      const customerReviews = await getAllPages(async (page) => {
        const response = await customerReviewApi.getAllCustomerReview({
          query: { page, count: 100 },
        })
        return response
      })

      customerReviews.forEach((review) => {
        if (review.id) {
          urls.push({
            url: `/customer-review/${review.slug}`,
            lastmod: formatDate(review.createdAt),
            priority: 0.7,
            changefreq: 'monthly',
          })
        }
      })
    } catch (error) {
      console.error('Error fetching customer reviews:', error)
    }

    // 동적 페이지: Experts
    try {
      const experts = await getAllPages(async (page) => {
        const response = await expertApi.getAllExpert({
          query: { page, count: 100 },
        })
        return response
      })

      experts.forEach((expert) => {
        if (expert.id) {
          urls.push({
            url: `/expert/${expert.slug}`,
            priority: 0.7,
            changefreq: 'monthly',
          })
        }
      })
    } catch (error) {
      console.error('Error fetching experts:', error)
    }

    // 동적 페이지: Problem Solve (Help Articles)
    try {
      const helpArticles = await getAllPages(async (page) => {
        const response = await helpArticleApi.getAllHelpArticle({
          query: { page, count: 100 },
        })
        return response
      })

      helpArticles.forEach((article) => {
        if (article.id) {
          urls.push({
            url: `/problem-solve/${article.slug}`,
            lastmod: formatDate(article.createdAt),
            priority: 0.7,
            changefreq: 'monthly',
          })
        }
      })
    } catch (error) {
      console.error('Error fetching help articles:', error)
    }

    // XML 생성
    const sitemap = generateSitemapXml(domain, urls)

    return new NextResponse(sitemap, {
      status: 200,
      headers: {
        'Content-Type': 'application/xml',
        'Cache-Control': 'public, s-maxage=3600, stale-while-revalidate=86400',
      },
    })
  } catch (error) {
    console.error('Error generating sitemap:', error)
    return new NextResponse('Error generating sitemap', { status: 500 })
  }
}
