import { GetAllCustomerReviewParamsTypeEnumType } from '@/generated/apis/@types/data-contracts'

export const getCustomerReviewOptions = (): {
  label: string
  value: GetAllCustomerReviewParamsTypeEnumType | ''
}[] => {
  return [
    {
      label: '전체보기',
      value: '',
    },
    {
      label: 'VMD',
      value: 'VMD',
    },
    {
      label: 'POSM(POP)',
      value: 'POSM_POP',
    },
    {
      label: '다이어리/캘린더',
      value: 'DIARY_CALENDAR',
    },
    {
      label: '쇼카드',
      value: 'SHOW_CARD',
    },
    {
      label: '디자인 기획/구독',
      value: 'DESIGN_PLANNING_SUBSCRIPTION',
    },
    {
      label: '부스/전시회/시공',
      value: 'BOOTH_EXHIBITION_CONSTRUCTION',
    },
    {
      label: '판촉물',
      value: 'PROMOTIONAL_ITEM',
    },
    {
      label: '굿즈 제작',
      value: 'GOODS_PRODUCTION',
    },
    {
      label: '홍보물 제작',
      value: 'PROMOTIONAL_MATERIAL',
    },
    {
      label: '스캔(전자문서물)',
      value: 'SCAN_E_DOCUMENT',
    },
    {
      label: '안전사인물',
      value: 'SAFETY_SIGNAGE',
    },
    {
      label: '물류',
      value: 'LOGISTICS',
    },
    {
      label: '보관',
      value: 'STORAGE',
    },
    {
      label: '영상',
      value: 'VIDEO',
    },
    {
      label: '디지털 영상',
      value: 'DIGITAL_VIDEO',
    },
    {
      label: 'AR',
      value: 'AR',
    },
    {
      label: 'DID',
      value: 'DID',
    },
  ]
}
