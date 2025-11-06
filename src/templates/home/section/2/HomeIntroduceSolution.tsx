'use client'

import { Box } from '@chakra-ui/react'
import {
  ArrowsLeftRightIcon,
  ArticleIcon,
  CalculatorIcon,
  CalendarCheckIcon,
  ChatCircleIcon,
  CheckSquareIcon,
  CheckSquareOffsetIcon,
  CoinsIcon,
  CrownSimpleIcon,
  CubeIcon,
  CursorClickIcon,
  EyesIcon,
  HandCoinsIcon,
  HardDrivesIcon,
  HourglassHighIcon,
  IdentificationCardIcon,
  ImagesIcon,
  LeafIcon,
  LightbulbFilamentIcon,
  LightbulbIcon,
  MathOperationsIcon,
  NewspaperIcon,
  NoteIcon,
  PackageIcon,
  PaletteIcon,
  PrinterIcon,
  ResizeIcon,
  ScanIcon,
  ScrollIcon,
  SealCheckIcon,
  ShapesIcon,
  SirenIcon,
  SmileyIcon,
  SquareHalfIcon,
  SquaresFourIcon,
  StarIcon,
  StorefrontIcon,
  UserCircleIcon,
  WarningDiamondIcon,
  WarningIcon,
} from '@phosphor-icons/react/dist/ssr'

import { ROUTES } from '@/constants/routes'
import { HomeSolutionSlider } from '@/templates/home/section/2/components/HomeSolutionSlider'

export interface HomeSolutionSliderItem {
  badge: string
  title?: string
  features?: {
    icon: React.ReactNode
    title: string
    description: string
  }[]
  href: string
  image: string
  alt: string
}

export const HOME_INTRODUCE_SOLUTION_SLIDERS: HomeSolutionSliderItem[] = [
  {
    badge: '브랜딩 디자인',
    title: '브랜드를 이해하는 기획, 제작까지 한 번에',
    features: [
      {
        icon: <ChatCircleIcon size={16} color="white" />,
        title: '설명 한 번으로 일관되게',
        description:
          '한 번의 설명으로 브랜드 스타일을 기억하고, 모든 작업에 일관되게 반영합니다.',
      },
      {
        icon: <LightbulbIcon size={16} color="white" />,
        title: '아이디어, 바로 눈앞에',
        description:
          '초기 아이디어를 구체적인 디자인으로 시각화하여 보여드립니다.',
      },
      {
        icon: <HourglassHighIcon size={16} color="white" />,
        title: '알아서, 더 좋게',
        description:
          '"더 좋은 방법은 없을까?" 항상 먼저 고민하고, 수준 높은 디자인을 먼저 제안합니다.',
      },
      {
        icon: <PaletteIcon size={16} color="white" />,
        title: '제작까지, 한 번에',
        description: '디자인 기획부터 최종 제작까지 전 과정을 책임집니다.',
      },
    ],
    href: ROUTES.SOLUTIONS.DESIGN.BRANDING,
    image: '/images/home/solutions/branding.png',
    alt: '베이커리 브랜드의 로고와 포장 디자인 세트가 진열된 모습, 브랜드 아이덴티티를 시각적으로 구현한 브랜딩 디자인 예시',
  },
  {
    badge: '굿즈&판촉물 디자인',
    title: '감각적인 굿즈와 판촉물로 완성되는 브랜드 경험',
    features: [
      {
        icon: <CrownSimpleIcon size={16} color="white" />,
        title: '브랜드 각인 효과',
        description:
          '일상에서 자주 쓰이는 굿즈로 브랜드를 가장 자연스럽게 알립니다.',
      },
      {
        icon: <UserCircleIcon size={16} color="white" />,
        title: '차별화된 고객 경험',
        description:
          '기업의 특성을 살린 굿즈와 판촉물로 특별한 브랜드 경험을 제공합니다.',
      },
      {
        icon: <MathOperationsIcon size={16} color="white" />,
        title: '효율적 예산 활용',
        description:
          '소량 제작부터 단가 비교 제안까지, 예산을 가장 효율적으로 활용할 수 있습니다.',
      },
      {
        icon: <WarningDiamondIcon size={16} color="white" />,
        title: '제작 리스크 최소화',
        description:
          '3D 시안과 샘플링 과정으로 재작업의 위험과 시간 낭비를 최소화합니다.',
      },
    ],
    href: ROUTES.SOLUTIONS.DESIGN.GIFT_PROMOTIONAL_DESIGN,
    image: '/images/home/solutions/gift-promotional-design.png',
    alt: '로고와 메시지가 인쇄된 노트, 파일, 볼펜 등 기업 홍보용 문구 세트, 브랜드 인지도 향상을 위한 판촉물 디자인 예시',
  },
  {
    badge: '매장 POP 디자인',
    title: '사이즈부터 소재, 설치까지 매장 환경에 딱 맞게',
    features: [
      {
        icon: <ResizeIcon size={16} color="white" />,
        title: '사이즈 실패 걱정 끝',
        description:
          '전문가가 실측 후 딱 맞게 제작하니, 오류로 인한 비용과 시간 낭비가 없습니다.',
      },
      {
        icon: <EyesIcon size={16} color="white" />,
        title: '최고의 광고 효과',
        description:
          '매장 환경과 예산에 맞춰 가장 눈에 잘 띄는 소재를 추천해 드립니다.',
      },
      {
        icon: <StorefrontIcon size={16} color="white" />,
        title: '동일한 품질 유지',
        description:
          '전국 모든 매장에 통일된 디자인과 깔끔한 설치를 보장해 드립니다.',
      },
      {
        icon: <CheckSquareOffsetIcon size={16} color="white" />,
        title: '확인만 하면 끝',
        description:
          '사이즈 측정, 소재 선택, 디자인 제작 등 킨코스 전문가가 알아서 해결해 드립니다.',
      },
    ],
    href: ROUTES.SOLUTIONS.DESIGN.POP_DESIGN,
    image: '/images/home/solutions/pop-design.png',
    alt: '떡볶이 매장 벽면에 설치된 메뉴판과 POP 광고물, 소비자 시선을 끄는 매장 홍보 디자인 예시',
  },
  {
    badge: 'VMD(3D) 디자인',
    title: '3D 시뮬레이션으로 미리 완성하는 VMD',
    features: [
      {
        icon: <CubeIcon size={16} color="white" />,
        title: '확실한 행사 성공',
        description:
          '고객의 시선을 사로잡을 매대와 포토존을 3D 공간 연출로 미리 보여드립니다.',
      },
      {
        icon: <CalculatorIcon size={16} color="white" />,

        title: '맞춤형 예산 컨설팅',
        description:
          '단기 팝업, VIP 행사 등 이벤트 성격에 꼭 맞는 맞춤 예산을 제안합니다.',
      },
      {
        icon: <SirenIcon size={16} color="white" />,

        title: '돌발 상황 신속 대응',
        description:
          '행사 당일 예기치 못한 제작물 파손 상황에도 즉시 제작하여 신속하게 해결합니다.',
      },
      {
        icon: <LeafIcon size={16} color="white" />,

        title: '비용 절감과 친환경',
        description:
          '재사용 가능한 모듈형 설계와 친환경 소재를 제안해 드립니다.',
      },
    ],
    href: ROUTES.SOLUTIONS.DESIGN.VMD_3D,
    image: '/images/home/solutions/vmd-3d.png',
    alt: '킨코스 캐릭터와 그래픽으로 꾸며진 전시 부스 공간, 브랜드 콘셉트를 3D로 구현한 VMD 디자인 예시',
  },
  {
    badge: '안전 사인물 제작관리',
    title: '작업자의 안전을 보장하는 현장 최적화 사인물',
    features: [
      {
        icon: <ScanIcon size={16} color="white" />,

        title: '규정·규격 실패 걱정 끝',
        description:
          '안전 전문가가 작업 현장과 법규를 분석해 꼭 맞게 제작합니다.',
      },
      {
        icon: <ShapesIcon size={16} color="white" />,

        title: '최고의 안전 효과',
        description:
          '현장 환경(저조도, 옥외 등)에 맞춰 가장 잘 보이는 소재를 추천합니다.',
      },
      {
        icon: <SealCheckIcon size={16} color="white" />,

        title: '전국 현장 품질 유지',
        description:
          '전국 모든 현장에 통일된 디자인과 검증된 품질의 사인물을 깔끔하게 설치합니다.',
      },
      {
        icon: <CheckSquareOffsetIcon size={16} color="white" />,
        title: '확인만 하면 끝',
        description:
          '현장 실측, 소재 선택, 맞춤 디자인, 긴급 제작 등 복잡한 과정은 킨코스가 해결합니다.',
      },
    ],
    href: ROUTES.SOLUTIONS.PRODUCTION.SAFETY_SIGN,
    image: '/images/home/solutions/safety-sign.png',
    alt: '건설 현장 외벽에 설치된 산업안전 홍보 현수막, 안전 캠페인을 위한 사인물 제작관리 예시',
  },
  {
    badge: '시즌성 인쇄물 제작관리',
    title: '우리 기업만의 특별한 가치를 담은 시즌성 인쇄물',
    features: [
      {
        icon: <LightbulbFilamentIcon size={16} color="white" />,

        title: '아이디어 고민 끝',
        description:
          '국내외 성공 사례를 바탕으로 브랜드 가치를 높일 최적의 아이디어를 제안합니다.',
      },
      {
        icon: <CheckSquareIcon size={16} color="white" />,

        title: '최고의 브랜딩 효과',
        description:
          '기획부터 구성품 하나까지 브랜드 아이덴티티에 맞춰 제작합니다.',
      },
      {
        icon: <MathOperationsIcon size={16} color="white" />,

        title: '수량, 예산 걱정 끝',
        description:
          '10권 소량 제작부터 대량 제작까지 원하는 수량과 예산에 맞춥니다.',
      },
      {
        icon: <CheckSquareOffsetIcon size={16} color="white" />,

        title: '확인만 하면 끝',
        description:
          '아이디어 기획, 디자인, 제작 방식 선택 등 복잡한 과정은 킨코스가 해결합니다.',
      },
    ],
    href: ROUTES.SOLUTIONS.PRODUCTION.SEASONAL_PRINTING,
    image: '/images/home/solutions/seasonal-printing.png',
    alt: '다이어리, 캘린더, 카드 등 연말 선물용 인쇄물 세트, 시즌성 프로모션을 위한 인쇄물 제작관리 예시',
  },
  {
    badge: '통합제작 물류관리',
    title: '인쇄물 보관, 재고 관리, 전국 배송까지 알아서',
    features: [
      {
        icon: <PrinterIcon size={16} color="white" />,

        title: '통합 관리, 빠른 출고',
        description:
          '인쇄물 제작 완료 후 바로 입고, 필요 시 즉시 출고하여 빠르게 지원합니다.',
      },
      {
        icon: <ScrollIcon size={16} color="white" />,

        title: '파손 걱정 끝',
        description:
          '제작 전문가가 물류 관리를 담당하여 훼손 위험없이 최상의 품질을 유지합니다.',
      },
      {
        icon: <CalendarCheckIcon size={16} color="white" />,

        title: '실시간 재고 관리',
        description:
          '실시간 재고 현황을 공유하고 재고 소진 시점에 맞춰 생산을 준비합니다.',
      },
      {
        icon: <CheckSquareOffsetIcon size={16} color="white" />,

        title: '확인만 하면 끝',
        description:
          '제작, 입고, 보관, 재고 확인, 출고 요청 등 복잡한 과정은 킨코스가 해결합니다.',
      },
    ],
    href: ROUTES.SOLUTIONS.PRODUCTION.LOGISTICS,
    image: '/images/home/solutions/logistics.png',
    alt: '물류창고 내부에 정돈된 팔레트 포장물, 인쇄물 제작부터 납품까지 통합 관리되는 물류관리 시스템 예시',
  },
  {
    badge: '통합제작 All-in-One',
    title: '디자인 기획부터 제작, 포장과 배송까지 한 번에',
    features: [
      {
        icon: <ImagesIcon size={16} color="white" />,

        title: '전략적 디자인 기획',
        description:
          '이벤트나 홍보 목적에 맞춰 가장 효과적인 인쇄물을 완성합니다.',
      },
      {
        icon: <HardDrivesIcon size={16} color="white" />,

        title: '데이터 기반 공정 관리',
        description:
          'MES(생산 공정 관리)로 전 공정을 데이터로 제어해, 우수한 품질을 유지합니다.',
      },
      {
        icon: <PackageIcon size={16} color="white" />,

        title: '원스톱 물류 솔루션',
        description:
          '제작물 분류부터 개별 포장, 전국 지점별 맞춤 배송까지 전담합니다.',
      },
      {
        icon: <WarningIcon size={16} color="white" />,

        title: '신속한 위기 대응',
        description:
          '자체 생산 전문 센터를 통해 긴급 추가 제작 등 돌발 상황에도 신속하게 대응합니다.',
      },
    ],
    href: ROUTES.SOLUTIONS.PRODUCTION.ALL_IN_ONE,
    image: '/images/home/solutions/all-in-one.png',
    alt: '사무실 내 디자이너들이 인쇄물 디자인과 패키징 시안을 작업 중인 모습, 디자인부터 제작까지 원스톱으로 관리되는 통합제작 솔루션 예시',
  },
  {
    badge: '디지털 영상 제작',
    title: '매장에서 가장 주목받는 키오스크·DID 영상',
    features: [
      {
        icon: <StarIcon size={16} color="white" />,

        title: '경험 기반 기획',
        description:
          '인쇄물 디자인 노하우를 바탕으로, 시선을 사로잡는 영상 콘셉트를 제안합니다.',
      },
      {
        icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
          >
            <path
              d="M13.2533 12.4881H11.8726V3.40039H13.2533V12.4881Z"
              fill="white"
            />
            <path
              d="M2.7002 12.4881L5.96375 3.40039H7.56415L10.834 12.4881H9.35911L6.79847 5.06355H6.72316L4.15624 12.4881H2.7002ZM9.12062 8.92961V10.0844H4.40101V8.92961H9.12062Z"
              fill="white"
            />
          </svg>
        ),

        title: 'AI 기반 빠른 제작',
        description:
          'AI 기술로 영상 시안을 빠르게 제작하고 데이터로 효과를 검증합니다.',
      },
      {
        icon: <NoteIcon size={16} color="white" />,

        title: '목적 중심 맞춤 제작',
        description:
          '신제품 홍보, 프로모션 등 비즈니스 목적과 전략에 맞게 제작합니다.',
      },
      {
        icon: <HandCoinsIcon size={16} color="white" />,

        title: '인쇄물까지 통합 관리',
        description:
          '영상 콘텐츠와 함께 메뉴판, 포스터 등 인쇄물까지 원스톱으로 관리해 드립니다.',
      },
    ],
    href: ROUTES.SOLUTIONS.VIDEO_AI.DIGITAL_VIDEO,
    image: '/images/home/solutions/digital-video.png',
    alt: '카페 내부의 디지털 키오스크 화면에 홍보 영상이 재생되는 모습, 브랜드 메시지를 시각적으로 전달하는 디지털 영상 제작 예시',
  },
  {
    badge: 'AR 인쇄물 제작',
    title: 'AR로 완성하는 인쇄물의 새로운 인터랙티브 경험',
    features: [
      {
        icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
          >
            <path d="M6 3H4V14H6V3Z" fill="white" />
            <path
              d="M11.7906 13.382C11.248 11.7788 10.2644 10.4518 9.08726 9.43843C9.94394 8.46902 11.9683 6 11.9683 6H9.16341L6 9.66118L6.45056 9.95608C7.71655 10.778 8.57641 11.9012 9.3284 13.7082L9.44897 14H12L11.7906 13.3788V13.382Z"
              fill="white"
            />
          </svg>
        ),
        title: '오래 기억되는 브랜드',
        description:
          'AR 기술로 직접 체험하는 경험은 브랜드 인지도와 호감도를 효과적으로 높여줍니다.',
      },
      {
        icon: <ArticleIcon size={16} color="white" />,

        title: '참여형 콘텐츠 제작',
        description:
          '고객이 직접 참여하는 인터랙티브 콘텐츠로 강력한 바이럴 효과를 만듭니다.',
      },
      {
        icon: <ArrowsLeftRightIcon size={16} color="white" />,

        title: '다양한 비즈니스 연결',
        description:
          '영상, 3D 모델, 웹페이지 등 어떤 콘텐츠든 인쇄물에 연결해 드립니다.',
      },
      {
        icon: <SmileyIcon size={16} color="white" />,

        title: '경쟁사 차별화',
        description: '신선한 재미로 혁신적인 브랜드 이미지를 높입니다.',
      },
    ],
    href: ROUTES.SOLUTIONS.VIDEO_AI.AR_PRINTING,
    image: '/images/home/solutions/ar-printing.png',
    alt: '스마트폰을 포스터에 비추면 할인 쿠폰이 나타나는 AR 인쇄물 제작 예시, 킨코스의 증강현실 기반 마케팅 인쇄 솔루션 사례 이미지',
  },
  {
    badge: 'EX감성 분석',
    title: '과학적 데이터로 완성하는 주목도 높은 디자인',
    features: [
      {
        icon: <HardDrivesIcon size={16} color="white" />,

        title: '메시지 전달력 강화',
        description:
          '소비자의 시선을 데이터로 분석해, 메시지를 더 효과적으로 전달합니다.',
      },
      {
        icon: <PaletteIcon size={16} color="white" />,

        title: '이기는 디자인',
        description:
          '경쟁 제품과의 객관적인 비교 분석으로 디자인 개선 방향을 제안합니다.',
      },
      {
        icon: <EyesIcon size={16} color="white" />,

        title: '소비자 시선 선점',
        description:
          '매대 POP, 포스터 등 홍보물의 최적 배치 방법을 찾아드립니다.',
      },
      {
        icon: <NewspaperIcon size={16} color="white" />,

        title: '이해하기 쉬운 보고서',
        description:
          '광고 클릭을 유도한 시선 데이터 분석으로 소재 디자인 개선을 제안합니다.',
      },
    ],
    href: ROUTES.SOLUTIONS.VIDEO_AI.EMOTION_ANALYSIS,
    image: '/images/home/solutions/emotion-analysis.png',
    alt: '편의점 유리창에 부착된 이벤트 포스터의 시선 집중 구역을 시각화한 화면, 소비자 주목도를 분석하는 EX감성 디자인 분석 예시',
  },
  {
    badge: '온라인 명함 주문 관리',
    title: '명함 신청부터 제작, 배송까지 쉽고 빠르게',
    features: [
      {
        icon: <IdentificationCardIcon size={16} color="white" />,

        title: '체계적인 브랜드 관리',
        description:
          '임직원 전체가 동일한 템플릿을 사용해, 통일감 있는 명함을 제작합니다.',
      },
      {
        icon: <CalculatorIcon size={16} color="white" />,

        title: '투명한 예산 관리',
        description:
          '주문 내역과 비용을 시스템으로 관리해, 예산 계획과 집행이 효율적입니다.',
      },
      {
        icon: <SquaresFourIcon size={16} color="white" />,

        title: '불필요한 업무 제거',
        description:
          '직원들이 자동 입력된 정보로 직접 주문하여 업무 과정이 간소화됩니다.',
      },
      {
        icon: <CheckSquareOffsetIcon size={16} color="white" />,

        title: '확인만 하면 주문 끝',
        description:
          '디자인 시안을 즉시 확인할 수 있어, 오타나 디자인 오류 걱정이 없습니다.',
      },
    ],
    href: ROUTES.SOLUTIONS.ONLINE_ORDER.BUSINESS_CARD,
    image: '/images/home/solutions/business-card.png',
    alt: '기업 로고가 인쇄된 명함 세트가 정갈하게 진열된 모습, 온라인으로 간편하게 명함을 주문하고 관리하는 시스템 예시',
  },
  {
    badge: '기업 전용 인쇄몰',
    title: '오직 우리 회사만을 위한 맞춤형 인쇄 전용몰',
    features: [
      {
        icon: <SquareHalfIcon size={16} color="white" />,

        title: '브랜드 이미지 통일',
        description:
          '우리 회사 전용 디자인 템플릿으로 어디서든 일관된 브랜드 이미지를 유지합니다.',
      },
      {
        icon: <CursorClickIcon size={16} color="white" />,

        title: '클릭 한번으로 주문 끝',
        description:
          '복잡한 텍스트 입력 없이 클릭만으로 주문이 완료되는 자동화 시스템을 제공합니다.',
      },
      {
        icon: <HandCoinsIcon size={16} color="white" />,

        title: '비용 절감 효과',
        description:
          '부서별 예산 한도 설정과 자동 차단 기능으로 불필요한 지출을 막아줍니다.',
      },
      {
        icon: <SmileyIcon size={16} color="white" />,

        title: '실수 없는 완벽한 결과물',
        description:
          '전문가가 검증한 데이터로 오타나 인쇄 사고 걱정을 줄여줍니다.',
      },
    ],
    href: ROUTES.SOLUTIONS.ONLINE_ORDER.CORPORATE_PRINTING,
    image: '/images/home/solutions/corporate-printing.png',
    alt: '킨코스 기업 전용 인쇄몰 웹 화면, 기업 로고와 색상에 맞춰 커스터마이징된 내부 인쇄물 주문 관리 시스템 예시',
  },
  {
    badge: '프랜차이즈 전용 인쇄몰',
    title: '본사와 가맹점을 연결하는 전용 인쇄몰',
    features: [
      {
        icon: <SquareHalfIcon size={16} color="white" />,

        title: '브랜드 이미지 통일',
        description:
          '정해진 디자인 템플릿으로, 브랜드 가이드라인에 맞춘 홍보물 주문이 가능합니다.',
      },
      {
        icon: <SquaresFourIcon size={16} color="white" />,

        title: '간단한 업무, 최고의 효율',
        description:
          '본사는 주문 현황을 한눈에 파악하고, 가맹점주는 필요할 때 언제든 주문합니다.',
      },
      {
        icon: <CoinsIcon size={16} color="white" />,

        title: '투명한 비용 관리',
        description:
          '주문 가능한 항목과 금액이 투명하게 보여 과지출을 막아줍니다.',
      },
      {
        icon: <PackageIcon size={16} color="white" />,

        title: '제작부터 배송까지',
        description:
          '홍보물을 전국 각 지역 매장별로 꼼꼼히 포장하여 배송해 드립니다.',
      },
    ],
    href: ROUTES.SOLUTIONS.ONLINE_ORDER.FRANCHISE_PRINTING,
    image: '/images/home/solutions/franchise-printing.png',
    alt: '카페 앞에 설치된 프로모션 배너 두 개, 매장별 맞춤 홍보물을 온라인으로 주문할 수 있는 프랜차이즈 인쇄몰 예시',
  },
]

export const HomeIntroduceSolution = () => {
  return (
    <Box
      bg="primary.1"
      py={{ base: '70px', sm: '120px 84px', lg: '120px 100px' }}
      w={'100%'}
      px={{ sm: '40px', base: '20px' }}
    >
      <HomeSolutionSlider slides={HOME_INTRODUCE_SOLUTION_SLIDERS} />
    </Box>
  )
}
