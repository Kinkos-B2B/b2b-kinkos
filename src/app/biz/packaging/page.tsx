import { Metadata } from 'next'

import { BizPackagingTemplate } from '@/templates/biz/packaging/BizPackagingTemplate'

export const metadata: Metadata = {
  title: '인쇄물 포장 배송 | 매장별 맞춤 패키징 및 전국 물류 관리 - 킨코스',
  description:
    '프랜차이즈, 리테일 맞춤형 패키징 및 분할 배송 서비스! 쇼카드/POP 등 판촉물을 세트 단위로 묶어 전국 원하는 시간·장소에 정확히 납품합니다.',
}

export default function BizPackagingPage() {
  return <BizPackagingTemplate />
}
