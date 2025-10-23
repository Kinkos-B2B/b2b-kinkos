import { Metadata } from 'next'

import { SolutionDigitalVideoTemplate } from '@/templates/solutions/video-ai/digital-video/SolutionDigitalVideoTemplate'

export const metadata: Metadata = {
  title:
    'AI로 만드는 매장 DID·메뉴판 영상 | 디지털 메뉴판·신메뉴 홍보 영상 | 킨코스',
  description:
    '신메뉴 홍보, 프로모션 영상을 찾으시나요? 킨코스는 AI 기반의 빠른 시안 제작과 데이터 검증으로 성공 확률 높은 매장 영상을 만듭니다. 고객의 구매를 유도하는 영상 기획부터 제작까지 전문가에게 맡기세요.',
}

export default function SolutionDigitalVideoPage() {
  return <SolutionDigitalVideoTemplate />
}
