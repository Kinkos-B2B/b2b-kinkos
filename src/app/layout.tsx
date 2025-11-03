import { Metadata, Viewport } from 'next'

import { PageLayout } from '@/components/@layout/page-layout/page-layout'
import { Provider as ThemeProvider } from '@/components/ui/provider'
import { ENV } from '@/configs/env'
import { pretendard } from '@/generated/fonts/next-fonts'
import { AppProvider } from '@/providers/app-provider'

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1.0,
}

export const metadata: Metadata = {
  ...(ENV.DOMAIN && { metadataBase: new URL(ENV.DOMAIN) }),
  title: {
    default:
      'B2B 인쇄·패키지 디자인·홍보·사인물 인쇄·기업 인쇄몰·기업 홍보물 인쇄 전문 솔루션 | 킨코스코리아(주)',
    template: `%s | 킨코스코리아(주)`,
  },
  description:
    '대량·소량·특수 인쇄부터 포장, 물류, 보안까지. 30년 노하우와 첨단 기술력으로 기업 홍보물 인쇄를 원스톱 지원. ESG 친환경 솔루션 제공',
  applicationName: 'B2B 킨코스',
  keywords: ['B2B 킨코스', '...'],
  icons: [
    { rel: 'apple-touch-icon', url: '/120.png', sizes: '120x120' },
    { rel: 'apple-touch-icon', url: '/152.png', sizes: '152x152' },
    { rel: 'apple-touch-icon', url: '/180.png', sizes: '180x180' },
    { rel: 'apple-touch-icon', url: '/192.png', sizes: '192x192' },
    {
      url: '/images/favicon-16x16.png',
      sizes: '16x16',
      type: 'image/png',
      rel: 'icon',
    },
    {
      url: '/images/favicon-32x32.png',
      sizes: '32x32',
      type: 'image/png',
      rel: 'icon',
    },
    {
      url: '/favicon.ico',
      rel: 'icon',
    },
    {
      rel: 'shortcut icon',
      url: '/favicon.ico',
    },
  ],
  manifest: '/manifest.json',
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
  formatDetection: {
    telephone: false,
    address: false,
    email: false,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="ko"
      className={`${pretendard.variable}`}
      suppressHydrationWarning
    >
      <body>
        <AppProvider>
          <ThemeProvider forcedTheme="light">
            <PageLayout>{children}</PageLayout>
          </ThemeProvider>
        </AppProvider>
      </body>
    </html>
  )
}
