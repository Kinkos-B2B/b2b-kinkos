import { Metadata } from 'next'

import { BizSupportTemplate } from '@/templates/biz/support/BizSupportTemplate'

export const metadata: Metadata = {
  title: '인쇄 제작 전문가 | 기획 디자인부터 사후 관리까지 전담 지원 - 킨코스',
  description:
    '단순 제작을 넘어 기획부터 디자인 사후관리까지 전담 전문가가 1:1 맞춤 케어를 제공합니다. 끝까지 책임지는 킨코스의 인력 지원을 경험하세요.',
}

export default function BizSupportPage() {
  return <BizSupportTemplate />
}
