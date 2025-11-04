export const FOOTER_LEGAL = {
  items: [
    {
      label: '이용약관',
      href: 'https://www.kinkos.co.kr/front/footer/footer.do?flag=cf_stipulation&title=%EC%9D%B4%EC%9A%A9%EC%95%BD%EA%B4%80',
    },
    {
      label: '개인정보처리방침',
      href: 'https://www.kinkos.co.kr/front/footer/footer.do?flag=cf_privacy&title=%EA%B0%9C%EC%9D%B8%EC%A0%95%EB%B3%B4%EC%B2%98%EB%A6%AC%EB%B0%A9%EC%B9%A8',
      isActive: true,
    },
    {
      label: '저작권정책',
      href: 'https://www.kinkos.co.kr/front/footer/footer.do?flag=cf_copyright_law&title=%EC%A0%80%EC%9E%91%EA%B6%8C%EC%A0%95%EC%B1%85',
    },
    {
      label: '정보보호인증',
      href: 'https://www.kinkos.co.kr/front/footer/footer.do?flag=cf_info_protect_cert&title=%EC%A0%95%EB%B3%B4%EB%B3%B4%ED%98%B8%EC%9D%B8%EC%A6%9D',
    },
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
