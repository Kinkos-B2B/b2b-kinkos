import { Metadata } from 'next'

import { PrivacyTemplate } from '@/templates/privacy/PrivacyTemplate'

export const metadata: Metadata = {
  title: '개인정보처리방침',
  description: '킨코스코리아(주) B2B 사이트 개인정보처리방침',
}

export default function PrivacyPage() {
  return <PrivacyTemplate />
}
