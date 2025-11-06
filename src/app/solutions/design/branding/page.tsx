import { Metadata } from 'next'

import { SolutionBrandingTemplate } from '@/templates/solutions/design/branding/SolutionBrandingTemplate'

export const metadata: Metadata = {
  title: '브랜딩 디자인 | 기획부터 제작까지 원스톱 솔루션',
  description:
    '디자인 따로, 제작 따로 번거로우셨나요? 이제 기획부터 인쇄, 제작, 납품까지 한 번에 해결하세요. 1:1 전담 매니저가 시간 낭비 없이 완성도 높은 결과물을 보장합니다.',
}

export default function SolutionBrandingPage() {
  return <SolutionBrandingTemplate />
}
