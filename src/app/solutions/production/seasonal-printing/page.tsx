import { Metadata } from 'next'

import { SolutionSeasonalPrintingTemplate } from '@/templates/solutions/production/seasonal-printing/SolutionSeasonalPrintingTemplate'

export const metadata: Metadata = {
  title: '기업 다이어리 맞춤 제작ㅣ기획·디자인·납품까지 전문가 해결 | 킨코스',
  description:
    '매년 반복되는 다이어리, 캘린더 제작 고민은 이제 끝! 킨코스가 브랜드 기획, 디자인, 소량 제작(10권~), 정확한 납품까지 원스톱으로 해결합니다. 실물 샘플로 직접 확인하고 직원들이 자랑하는 특별한 기업 굿즈를 만들어보세요.',
}

export default function SolutionSeasonalPrintingPage() {
  return <SolutionSeasonalPrintingTemplate />
}
