import { GetAllHelpArticleParamsTypeEnumType } from './options'

export const getProblemSolveOptions = () => {
  return [
    {
      label: '계약 고민',
      value: GetAllHelpArticleParamsTypeEnumType.CONTRACT,
    },
    {
      label: '제작 고민',
      value: GetAllHelpArticleParamsTypeEnumType.PRODUCTION,
    },
    {
      label: '주문 고민',
      value: GetAllHelpArticleParamsTypeEnumType.ORDER,
    },
    {
      label: '배송/설치 고민',
      value: GetAllHelpArticleParamsTypeEnumType.DELIVERY_INSTALLATION,
    },
    {
      label: '비용 고민',
      value: GetAllHelpArticleParamsTypeEnumType.COST,
    },
    {
      label: '기타 고민',
      value: GetAllHelpArticleParamsTypeEnumType.ETC,
    },
  ]
}
