import { GetAllCustomerReviewParamsTypeEnumType } from './options'

export const getCustomerReviewOptions = () => {
  return [
    {
      label: '전체보기',
      value: '',
    },
    {
      label: 'VMD',
      value: GetAllCustomerReviewParamsTypeEnumType.VBD,
    },
    {
      label: 'POSM(POP)',
      value: GetAllCustomerReviewParamsTypeEnumType.POSM_POP,
    },
    {
      label: '다이어리/캘린더',
      value: GetAllCustomerReviewParamsTypeEnumType.DIARY_CALENDAR,
    },
    {
      label: '쇼카드',
      value: GetAllCustomerReviewParamsTypeEnumType.SHOW_CARD,
    },
    {
      label: '디자인 기획/구독',
      value:
        GetAllCustomerReviewParamsTypeEnumType.DESIGN_PLANNING_SUBSCRIPTION,
    },
    {
      label: '부스/전시회/시공',
      value:
        GetAllCustomerReviewParamsTypeEnumType.BOOTH_EXHIBITION_CONSTRUCTION,
    },
    {
      label: '판촉물',
      value: GetAllCustomerReviewParamsTypeEnumType.PROMOTIONAL_ITEM,
    },
    {
      label: '굿즈 제작',
      value: GetAllCustomerReviewParamsTypeEnumType.GOODS_PRODUCTION,
    },
    {
      label: '홍보물 제작',
      value: GetAllCustomerReviewParamsTypeEnumType.PROMOTIONAL_MATERIAL,
    },
    {
      label: '스캔(전자문서물)',
      value: GetAllCustomerReviewParamsTypeEnumType.SCAN_E_DOCUMENT,
    },
    {
      label: '안전사인물',
      value: GetAllCustomerReviewParamsTypeEnumType.SAFETY_SIGNAGE,
    },
  ]
}
