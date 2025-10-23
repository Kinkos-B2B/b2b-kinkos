import { Metadata } from 'next'

import { BizItSecurityTemplate } from '@/templates/biz/it-security/BizItSecurityTemplate'

export const metadata: Metadata = {
  title: '기업 인쇄 보안 | ISO 27001 인증 & 전용 주문 몰 구축 - 킨코스',
  description:
    '기밀 문서도 안심하고 맡기세요. ISO 27001 인증 보안 관리 체계와 기업 전용 인쇄몰로 스마트한 주문 및 철저한 정보 보호 환경을 제공합니다.',
}

export default function BizItSecurityPage() {
  return <BizItSecurityTemplate />
}
