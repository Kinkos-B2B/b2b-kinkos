import { Metadata } from 'next'

import { CopyrightTemplate } from '@/templates/copyright/CopyrightTemplate'

export const metadata: Metadata = {
  title: '저작권 보호 및 이용정책',
  description: '킨코스코리아(주) B2B 사이트 저작권 보호 및 이용정책',
}

export default function CopyrightPage() {
  return <CopyrightTemplate />
}
