import { Metadata } from 'next'

import { BizProductionTemplate } from '@/templates/biz/production/BizProductionTemplate'

export const metadata: Metadata = {
  title: 'B2B 인쇄 제작 | 대량·소량·특수 인쇄 솔루션 - 킨코스',
  description:
    '30년 노하우와 첨단 기술력으로 대량부터 긴급 소량까지 최고 품질 인쇄물을 제작합니다. ESG 친환경 인쇄 솔루션으로 비즈니스 가치를 높이세요.',
}

export default function BizProductionPage() {
  return <BizProductionTemplate />
}
