import { Metadata } from 'next'

import { SolutionGiftPromotionalDesignTemplate } from '@/templates/solutions/design/gift-promotional-design/SolutionGiftPromotionalDesignTemplate'

export const metadata: Metadata = {
  title: '굿즈·판촉물 디자인 제작 |소량 판촉물 디자인 원스톱 전문 | 킨코스',
  description:
    '기업 굿즈·판촉물 맞춤 제작 전문. 소량 제작, 합리적인 비교 견적, 3D 시안 사전 검증, 기획부터 납품까지 전 과정을 원스톱으로 리스크 없이 안전하게 진행하세요.',
}

export default function SolutionGiftPromotionalDesignPage() {
  return <SolutionGiftPromotionalDesignTemplate />
}
