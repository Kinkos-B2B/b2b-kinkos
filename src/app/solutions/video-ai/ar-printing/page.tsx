import { Metadata } from 'next'

import { SolutionArPrintingTemplate } from '@/templates/solutions/video-ai/ar-printing/SolutionArPrintingTemplate'

export const metadata: Metadata = {
  title:
    'AR 인쇄물 제작 | 인터랙티브 콘텐츠로 브랜드 경험을 확장하세요 | 킨코스',
  description:
    '종이 인쇄물에 AR 기술을 더해, 보는 인쇄에서 참여하는 인쇄로 바꿔보세요. 앱 설치 없이 실행되는 Web AR로 고객이 직접 체험·공유하며 브랜드 호감도를 높이고, 실시간 콘텐츠 관리와 성과 분석까지 한 번에 제공합니다.',
}

export default function SolutionArPrintingPage() {
  return <SolutionArPrintingTemplate />
}
