import { Metadata } from 'next'

import { SolutionSafetySignTemplate } from '@/templates/solutions/production/safety-sign/SolutionSafetySignTemplate'

export const metadata: Metadata = {
  title: '건설·물류현장 안전 사인물 | 복잡한 제작 관리, 킨코스에서 한번에',
  description:
    '전국 물류센터, 건설현장 안전 사인물, 아직도 따로 관리하세요? 킨코스가 현장 방문부터 맞춤 디자인, 시뮬레이션, 제작·시공까지 알아서 해결해 드립니다. 이제 더 중요한 안전 관리 업무에 집중하세요.',
}

export default function SolutionSafetySignPage() {
  return <SolutionSafetySignTemplate />
}
