import { Metadata } from 'next'

import { SolutionVmd3dTemplate } from '@/templates/solutions/design/vmd-3d/SolutionVmd3dTemplate'

export const metadata: Metadata = {
  title: '팝업스토어 VMD | 3D 시뮬레이션·샘플 제작 솔루션 | 킨코스',
  description:
    '머릿속 팝업스토어 아이디어, 3D 이미지와 실물 샘플로 먼저 확인하세요. 킨코스는 VMD 기획부터 3D 디자인, 제작, 당일 설치와 철거까지 원스톱으로 제공하여 확실한 행사 성공을 보장합니다.',
}

export default function SolutionVmd3dPage() {
  return <SolutionVmd3dTemplate />
}
