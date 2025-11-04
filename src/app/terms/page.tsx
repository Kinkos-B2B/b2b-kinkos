import { Metadata } from 'next'

import { TermsTemplate } from '@/templates/terms/TermsTemplate'

export const metadata: Metadata = {
  title: '이용약관',
  description: '킨코스코리아(주) B2B 사이트 이용약관',
}

export default function TermsPage() {
  return <TermsTemplate />
}
