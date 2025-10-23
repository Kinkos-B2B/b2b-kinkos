import { Metadata } from 'next'

import { SolutionEmotionAnalysisTemplate } from '@/templates/solutions/video-ai/emotion-analysis/SolutionEmotionAnalysisTemplate'

export const metadata: Metadata = {
  title: '디자인 효과 분석 | 소비자 시선·감정 데이터로 보는 EX감성 AI | 킨코스',
  description:
    '"이 디자인, 정말 잘 보일까?" 감이 아닌 데이터로 확인하세요. 킨코스 EX감성 분석은 AI가 소비자의 시선과 감정을 분석해, 패키지·POP·광고 디자인의 전달력을 과학적으로 진단합니다.',
}

export default function SolutionEmotionAnalysisPage() {
  return <SolutionEmotionAnalysisTemplate />
}
