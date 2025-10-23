import { Metadata } from 'next'

import { BizCenterNetworkTemplate } from '@/templates/biz/center-network/BizCenterNetworkTemplate'

export const metadata: Metadata = {
  title: '전국 20개 센터 네트워크 | B2B 기업 전용 광역 인쇄 지원 - 킨코스',
  description:
    '전국 20여 개 센터의 도심 거점 네트워크를 통해 본사 지점 임직원 모두 가까운 곳에서 편리하게 이용하세요. 전국 단위 프로젝트도 문제없이 동시 대응합니다.',
}

export default function BizCenterNetworkPage() {
  return <BizCenterNetworkTemplate />
}
