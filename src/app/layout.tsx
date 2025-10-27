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
    default: 'B2B 킨코스',
    template: `%s | B2B 킨코스`,
  },
  description: 'B2B 킨코스',
  applicationName: 'B2B 킨코스',
  keywords: ['B2B 킨코스', '...'],
  icons: [
    { rel: 'apple-touch-icon', url: '/icons/120.png', sizes: '120x120' },
    { rel: 'apple-touch-icon', url: '/icons/152.png', sizes: '152x152' },
    { rel: 'apple-touch-icon', url: '/icons/167.png', sizes: '167x167' },
    { rel: 'apple-touch-icon', url: '/icons/180.png', sizes: '180x180' },
    { rel: 'apple-touch-icon', url: '/icons/192.png', sizes: '192x192' },
    { rel: 'apple-touch-icon', url: '/icons/384.png', sizes: '384x384' },
    { rel: 'apple-touch-icon', url: '/icons/512.png', sizes: '512x512' },
    {
      rel: 'icon',
      url: '/favicon.ico',
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
    siteName: 'B2B 킨코스',
    title: {
      default: 'B2B 킨코스',
      template: `B2B 킨코스 | %s`,
    },
    description: 'B2B 킨코스',
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
    title: 'B2B 킨코스',
    description: 'B2B 킨코스',
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
