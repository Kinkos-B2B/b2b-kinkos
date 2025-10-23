import { Metadata } from 'next'

import { SolutionCorporatePrintingTemplate } from '@/templates/solutions/online-order/corporate-printing/SolutionCorporatePrintingTemplate'

export const metadata: Metadata = {
  title: '기업 전용 인쇄몰 구축 | 브랜드 관리와 주문 자동화를 한번에',
  description:
    '지점별 인쇄물 주문과 예산 관리가 복잡하셨나요? 우리 회사 전용 맞춤 인쇄몰로 브랜드 통일, 주문 자동화, 비용 절감까지 한번에 해결하세요. 클릭만으로 주문 끝! 지금 바로 데모몰을 체험해 보세요.',
}

export default function SolutionCorporatePrintingPage() {
  return <SolutionCorporatePrintingTemplate />
}
