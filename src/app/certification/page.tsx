import { Metadata } from 'next'

import { CertificationTemplate } from '@/templates/certification/CertificationTemplate'

export const metadata: Metadata = {
  title: '정보보호인증',
  description:
    '킨코스코리아(주) ISO/IEC 27001 정보보호 인증 및 보안 제작 지원 센터',
}

export default function CertificationPage() {
  return <CertificationTemplate />
}
