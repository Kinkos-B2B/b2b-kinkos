import { Metadata } from 'next'

import { SolutionAllInOneTemplate } from '@/templates/solutions/production/all-in-one/SolutionAllInOneTemplate'

export const metadata: Metadata = {
  title:
    '기업 인쇄물 통합 제작ㅣ디자인부터 전국 지점 배송까지 한 번에 | 킨코스',
  description:
    '디자인, 인쇄, 지점별 개별 배송까지 여러 업체와 소통하느라 힘드셨죠? 이제 킨코스 1:1 전담 매니저가 기획, 품질관리, 맞춤 물류까지 한 번에 해결합니다. 번거로운 과정은 맡기고 마케팅 본연의 업무에만 집중하세요.',
}

export default function SolutionAllInOnePage() {
  return <SolutionAllInOneTemplate />
}
