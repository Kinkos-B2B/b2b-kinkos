import { Metadata } from 'next'

import { SolutionPopDesignTemplate } from '@/templates/solutions/design/pop-design/SolutionPopDesignTemplate'

export const metadata: Metadata = {
  title: '매장 POP 디자인 제작 | 전문가 현장 방문 맞춤 솔루션 | 킨코스',
  description:
    '매장 POP 사이즈, 소재 고민은 이제 그만! 킨코스 전문가가 직접 방문하여 실측부터 맞춤 디자인, 3D 시뮬레이션, 전국 설치까지 원스톱으로 해결해 드립니다. 담당자님은 완성된 결과만 확인하세요.',
}

export default function SolutionPopDesignPage() {
  return <SolutionPopDesignTemplate />
}
