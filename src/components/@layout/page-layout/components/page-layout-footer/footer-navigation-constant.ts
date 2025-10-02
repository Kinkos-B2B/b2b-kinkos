export const FOOTER_LEGAL = {
  items: [
    { label: '이용약관', href: '/terms' },
    { label: '개인정보처리방침', href: '/privacy', isActive: true },
    { label: '저작권권정책', href: '/copyright' },
    { label: '영상정정보처리기기운영방침', href: '/cctv-policy' },
    { label: '정보보호인증', href: '/security-certification' },
    { label: '채용안내', href: '/careers' },
    { label: '고객센터', href: '/support' },
  ],
} as const

export const FOOTER_COMPANY_INFO = {
  company: '킨코스코리아(주)',
  address: '서울시 서초구 강남대로 291 남강빌딩 8층',
  ceo: '대표이사 : 박정수',
  phone: '대표번호 : 1600-3696',
  businessNumber: '사업자등록번호 : 129-81-17306',
  privacyManager: '개인정보관리책임 : 고원준',
  businessRegistration: '통신판매업신고번호 : 2019-서울서초-1279',
} as const
