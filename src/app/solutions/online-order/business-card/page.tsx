import { Metadata } from 'next'

import { SolutionBusinessCardTemplate } from '@/templates/solutions/online-order/business-card/SolutionBusinessCardTemplate'

export const metadata: Metadata = {
  title: '기업 명함 주문 관리 | 브랜드 통일과 업무 자동화를 한 번에 | 킨코스',
  description:
    '신입사원 명함 신청, 아직도 이메일로 취합하세요? 이제 직원이 직접 주문하는 자동화 시스템으로 브랜드는 지키고 오타 걱정은 없애세요. 관리자 대시보드로 승인도 간편! 담당자의 반복 업무를 획기적으로 줄여줍니다.',
}

export default function SolutionBusinessCardPage() {
  return <SolutionBusinessCardTemplate />
}
