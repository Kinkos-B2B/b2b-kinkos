import { Metadata } from 'next'

import { SolutionFranchisePrintingTemplate } from '@/templates/solutions/online-order/franchise-printing/SolutionFranchisePrintingTemplate'

export const metadata: Metadata = {
  title: '프랜차이즈 인쇄물 관리 | 본사·가맹점 통합 주문 제작 솔루션',
  description:
    '본사와 가맹점의 복잡한 인쇄물 관리, 이제 하나의 시스템으로 해결하세요. 브랜드 통일성 강화, 실시간 주문 관리, 투명한 비용 통제 등 프랜차이즈에 최적화된 기능으로 모두가 만족합니다.',
}

export default function SolutionFranchisePrintingPage() {
  return <SolutionFranchisePrintingTemplate />
}
