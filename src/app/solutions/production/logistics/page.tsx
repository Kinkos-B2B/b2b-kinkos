import { Metadata } from 'next'

import { SolutionLogisticsTemplate } from '@/templates/solutions/production/logistics/SolutionLogisticsTemplate'

export const metadata: Metadata = {
  title: '인쇄물 재고관리 및 전국배송 통합 솔루션 | 킨코스',
  description:
    '바이오·제약·프랜차이즈 인쇄물 관리, 아직도 고민하세요? 킨코스는 컴플라이언스 기준에 맞춘 보관, 실시간 재고관리, 전국 지점 배송을 한 번에 제공합니다. 지금 바로 확인해보세요.',
}

export default function SolutionLogisticsPage() {
  return <SolutionLogisticsTemplate />
}
