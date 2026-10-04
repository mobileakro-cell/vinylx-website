import { readFileSync, writeFileSync } from 'node:fs';

const file = 'data/insights.json';
const data = JSON.parse(readFileSync(file, 'utf8'));

const additions = [
  {
    id: 'agentic-commerce-needs-a-trust-contract', publishedAt: '2026-09-23', sourcePublishedAt: '2026-07-16',
    category: 'Retail & Commerce', region: 'Global · APAC', readTime: 8,
    title: 'AI가 대신 사는 시대, 커머스에는 ‘신뢰 계약’이 필요하다',
    dek: '추천을 넘어 결제까지 실행하는 쇼핑 에이전트의 서비스 전략과 새로운 수익모델.',
    summary: '아시아태평양 소비자는 AI 기반 쇼핑을 빠르게 받아들이지만 구매 결정을 완전히 맡기는 데에는 주저한다. 프라이버시와 정확성에 대한 우려가 큰 만큼, 에이전틱 커머스의 경쟁력은 추천 성능보다 예산·브랜드·개인정보·취소 조건을 사용자가 직접 정하는 신뢰 계약에서 만들어진다.',
    body: [
      'DHL의 2026 아시아태평양 전자상거래 조사에서는 AI 사용 확대와 구매 위임 의향 사이에 분명한 간극이 나타났다. 이는 대화형 검색을 붙이는 것만으로는 서비스 전환이 완성되지 않는다는 시장 신호다. 사용자는 AI가 무엇을 비교했고 왜 이 상품을 골랐는지, 결제 전에 어디까지 실행할지를 알아야 한다.',
      '서비스 전략은 상품 탐색–비교–결제–배송–반품을 하나의 위임 여정으로 다시 구성해야 한다. 비즈니스 모델도 광고 노출 중심에서 검증된 추천, 구매 후 관리, 구독 최적화처럼 사용자의 장기 성과에 보상받는 방식으로 이동할 수 있다. 다만 추천 수수료가 판단을 왜곡하지 않도록 상업적 관계를 분명히 밝혀야 한다.',
      'UX는 에이전트의 근거와 대안을 짧게 비교할 수 있어야 하고, AX는 금액 한도·선호 브랜드·금지 품목·승인 단계를 정책으로 관리해야 한다. 자동구매의 성공률보다 잘못된 구매를 결제 전에 막고 이후 빠르게 취소·반품하는 능력이 신뢰의 핵심 지표가 된다.'
    ],
    framework: { title: '쇼핑 에이전트 신뢰 계약 4단계', steps: [
      { name: '위임 범위 설정', desc: '탐색, 장바구니, 결제, 재구매를 분리하고 사용자가 자동화할 단계를 직접 선택하게 한다.' },
      { name: '추천 근거 공개', desc: '가격, 배송, 리뷰, 브랜드 선호와 광고·수수료 관계를 구분해 보여준다.' },
      { name: '실행 전 영향 확인', desc: '총금액, 구독 여부, 반품 조건, 개인정보 사용 범위를 한 화면에서 승인받는다.' },
      { name: '구매 후 복구 연결', desc: '배송 변경, 취소, 반품, 상담 전환을 에이전트의 동일한 작업 흐름 안에 둔다.' }
    ]},
    tips: ['자동구매를 한 번에 열지 말고 낮은 금액의 반복 구매부터 단계적으로 위임 범위를 넓혀 보세요.'],
    question: '이 에이전트가 사용자의 돈을 쓰기 전에 반드시 다시 물어야 하는 조건은 무엇인가?',
    checklist: ['탐색과 결제 권한이 분리되어 있는가?', '추천에 영향을 준 상업적 관계를 표시하는가?', '예산과 금지 조건을 사용자가 수정할 수 있는가?', '결제 직전 총비용과 구독 조건을 확인하는가?', '취소·반품·사람 상담으로 즉시 전환할 수 있는가?'],
    metrics: ['추천 근거 확인률', '결제 전 사용자 수정률', '자동구매 취소율', '반품·환불 해결 시간'],
    takeaways: ['대화형 검색보다 위임 범위를 먼저 설계한다', '추천 근거와 상업적 이해관계를 구분한다', '구매 성공률과 함께 복구 성공률을 측정한다'],
    keywords: ['에이전틱커머스', '쇼핑에이전트', '리테일AX'],
    sources: [
      { name: 'DHL eCommerce — 2026 APAC E-commerce Trends', url: 'https://www.dhl.com/kr-ko/home/press/press-archive/2026/trends-report-2026-ai-subscriptions-and-digital-payments-reshape-asia-pacific-e-commerce.html' },
      { name: 'Deloitte — Q1 2026 Emerging Retail and Consumer Trends', url: 'https://www.deloitte.com/content/dam/assets-zone3/us/en/docs/industries/consumer/2026/q1-2026-emerging-retail-and-consumer-trends.pdf' }
    ]
  },
  {
    id: 'agriculture-ai-starts-with-data-operations', publishedAt: '2026-09-23', sourcePublishedAt: '2026-07-14',
    category: 'Food & Livestock', region: 'Korea', readTime: 8,
    title: '농축산 AX의 출발점은 모델이 아니라 데이터 운영이다',
    dek: '흩어진 현장 데이터를 표준화하고 농가의 판단으로 되돌리는 서비스 설계.',
    summary: '농림축산식품부가 농업·농촌 AX를 위한 데이터 전략을 제시한 배경에는 기관과 사업별로 흩어진 데이터, 약한 표준화와 품질관리 문제가 있다. 농축산 AI 서비스는 더 큰 모델보다 누가 어떤 데이터를 입력하고 검증하며 현장 판단에 어떻게 되돌려주는지를 먼저 설계해야 한다.',
    body: [
      '농업 데이터는 작물·축종·장비·계절·지역마다 단위와 갱신 주기가 다르다. 센서 수치가 많아도 사료 변경, 질병 징후, 작업자의 관찰 같은 현장 맥락이 연결되지 않으면 AI가 재사용할 수 있는 자산이 되지 못한다. 데이터 표준은 기술 문서가 아니라 여러 참여자가 같은 의미로 기록하게 만드는 서비스 규칙이다.',
      '서비스 전략은 농가의 추가 입력 부담을 최소화하면서 장비 업체, 유통사, 공공기관이 데이터를 다시 활용할 수 있게 해야 한다. 새로운 비즈니스 모델은 장비 판매를 넘어 질병 조기경보, 생산성 개선, 환경 관리처럼 검증 가능한 결과에 기반한 운영 서비스로 확장될 수 있다.',
      'UX는 숫자를 늘어놓는 대시보드보다 오늘 바꿔야 할 작업과 그 이유를 보여줘야 한다. AX는 예측의 확신도, 사용한 데이터의 시점, 사람이 확인해야 할 예외를 분명히 하고, 농가의 수정이 다시 데이터 품질을 높이는 피드백 구조를 가져야 한다.'
    ],
    framework: { title: '농축산 데이터 운영 4단계', steps: [
      { name: '의사결정부터 정의', desc: '질병 대응, 사료 조정, 출하 판단처럼 데이터가 바꿔야 할 현장 행동을 먼저 정한다.' },
      { name: '입력 책임과 단위 통일', desc: '농가·장비·기관별 입력 주체, 단위, 갱신 주기와 오류 수정 권한을 명시한다.' },
      { name: '근거가 보이는 권고', desc: '예측값과 함께 사용한 데이터 시점, 핵심 변수, 확신도와 예외 조건을 제공한다.' },
      { name: '현장 피드백 재학습', desc: '농가가 권고를 수정하거나 거절한 이유를 기록해 모델과 운영 규칙을 함께 개선한다.' }
    ]},
    tips: ['처음부터 모든 데이터를 모으기보다 한 가지 반복 의사결정의 입력과 결과를 끝까지 연결해 보세요.'],
    question: 'AI의 권고가 틀렸을 때 농가는 어떤 근거를 보고 판단을 수정할 수 있는가?',
    checklist: ['데이터가 바꿀 현장 행동이 명확한가?', '입력 단위와 갱신 책임자가 정해졌는가?', '농가의 추가 기록 부담을 측정했는가?', '예측 근거와 데이터 시점을 보여주는가?', '오류 신고와 사람 전문가 전환 경로가 있는가?'],
    metrics: ['필수 데이터 완성도', '권고 수용·수정률', '이상 징후 조기 발견 시간', '농가 입력 소요시간'],
    takeaways: ['데이터 수집보다 현장 의사결정을 먼저 정의한다', '표준을 참여자 간 운영 규칙으로 설계한다', '농가의 수정과 거절을 학습 데이터로 되돌린다'],
    keywords: ['스마트축산', '농업AX', '데이터표준'],
    sources: [
      { name: '농림축산식품부 — 농업·농촌 AX 데이터 전략', url: 'https://www.mafra.go.kr/bbs/english/25/578463/artclView.do' },
      { name: '축산물품질평가원 — 스마트축산 빅데이터 플랫폼', url: 'https://smart.ekape.or.kr/' }
    ]
  },
  {
    id: 'ai-entertainment-discovery-needs-provenance', publishedAt: '2026-09-23', sourcePublishedAt: '2026-04-08',
    category: 'Entertainment & Culture', region: 'Global', readTime: 7,
    title: 'AI가 콘텐츠를 골라줄수록 ‘왜 이 작품인가’가 중요해진다',
    dek: '검색에서 대화형 발견으로 이동하는 엔터테인먼트 서비스의 신뢰 설계.',
    summary: 'Nielsen Gracenote 조사에서 젊은 이용자는 영화와 TV를 찾을 때 AI 챗봇을 적극 활용했지만 정확성과 신뢰에서는 전통 검색을 더 높게 평가했다. 엔터테인먼트 플랫폼의 기회는 챗봇을 추가하는 데 있지 않고, 방대한 카탈로그의 맥락과 출처를 설명하며 감상 행동까지 안전하게 연결하는 데 있다.',
    body: [
      '대화형 발견은 장르나 배우를 고르는 수준을 넘어 기분, 동행자, 이용 가능한 시간, 구독 중인 서비스까지 묶어 질문할 수 있다. 이는 검색 결과 페이지를 개인의 상황에 맞는 편성 서비스로 바꾸지만, 잘못된 작품 정보와 시청 가능 여부는 곧바로 신뢰 손실로 이어진다.',
      '서비스 전략은 콘텐츠 메타데이터, 편성 정보, 이용권 상태와 추천 이유를 하나의 흐름으로 묶어야 한다. 비즈니스 모델은 광고형 추천보다 여러 플랫폼을 가로지르는 발견·예약·리마인드·팬 커뮤니티 기능처럼 지속적인 관계를 만드는 방향으로 확장할 수 있다.',
      'UX는 작품마다 추천 이유와 시청 가능한 경로를 비교하게 하고, AX는 최신성·지역별 권리·연령 제한을 실행 전 검증해야 한다. 추천 다양성과 정확성을 함께 측정하지 않으면 인기작만 반복 노출하는 좁은 경험이 된다.'
    ],
    framework: { title: '대화형 콘텐츠 발견 4단계', steps: [
      { name: '상황을 질문', desc: '장르보다 시간, 기분, 동행자, 접근성 요구와 보유 구독을 먼저 묻는다.' },
      { name: '추천 이유 비교', desc: '각 후보가 조건과 어떻게 맞는지, 어떤 데이터가 근거인지 짧게 설명한다.' },
      { name: '권리와 최신성 검증', desc: '지역별 시청 가능 여부, 가격, 연령 제한과 자막·음성 지원을 실행 직전에 확인한다.' },
      { name: '감상 이후 관계 연결', desc: '평가, 저장, 다음 작품, 커뮤니티 참여를 이용자의 명시적 선택으로 이어준다.' }
    ]},
    tips: ['추천 정확도만 높이면 인기작 쏠림이 커질 수 있으므로 다양성 지표를 함께 대시보드에 두세요.'],
    question: '이 추천은 사용자의 상황을 이해한 결과인가, 단지 많이 본 작품을 다시 보여주는가?',
    checklist: ['추천 이유를 사람이 이해할 수 있는가?', '지역별 시청 가능 정보가 최신인가?', '자막·음성·연령 정보를 함께 제공하는가?', '광고나 자사 콘텐츠 우대가 표시되는가?', '사용자가 추천 기억을 삭제·수정할 수 있는가?'],
    metrics: ['추천 후 재검색률', '시청 시작 성공률', '추천 다양성', '잘못된 시청 가능 정보 신고율'],
    takeaways: ['검색창보다 상황 이해를 먼저 설계한다', '추천 이유와 콘텐츠 출처를 함께 보여준다', '정확성뿐 아니라 다양성과 최신성을 측정한다'],
    keywords: ['콘텐츠디스커버리', '엔터테인먼트AX', '추천신뢰'],
    sources: [
      { name: 'Nielsen Gracenote — TV Search and Discovery in the AI Era', url: 'https://www.nielsen.com/news-center/2026/gen-alpha-leads-shift-to-ai-powered-entertainment-search-discovery-and-recommendations/' },
      { name: 'Google Cloud — 2026 AI Agent Trends in Media and Entertainment', url: 'https://cloud.google.com/resources/content/ai-agent-trends-media-entertainment-2026' }
    ]
  },
  {
    id: 'wcag3-changes-the-unit-of-accessibility', publishedAt: '2026-09-23', sourcePublishedAt: '2026-09-10',
    category: 'UX & Service Design', region: 'Global', readTime: 8,
    title: 'WCAG 3.0 초안이 바꾸는 것: 화면 검수에서 경험의 증거로',
    dek: '정적 체크리스트를 넘어 사람·플랫폼·AI 생성 결과를 함께 검증하는 접근성 운영.',
    summary: '2026년 9월 공개된 WCAG 3.0 작업 초안은 데스크톱과 모바일뿐 아니라 웨어러블, XR, 대체 입력과 동적 콘텐츠까지 넓게 다룬다. 아직 확정 표준은 아니지만, 접근성을 출시 직전 화면 검사로 처리하던 조직이 제품 정책·콘텐츠 운영·사용자 검증을 연결해야 한다는 방향은 분명하다.',
    body: [
      'AI가 화면과 콘텐츠를 매번 다르게 생성하면 대표 시안 몇 장의 적합성만으로 전체 경험을 보증할 수 없다. 자동 검사로 찾을 수 있는 구조적 오류와 실제 장애 사용자가 겪는 과업 실패를 구분하고, 두 증거를 지속적으로 수집해야 한다.',
      '서비스 전략은 접근성을 규제 대응 비용이 아니라 더 많은 상황과 입력 방식을 포용하는 품질 체계로 봐야 한다. 접근성 검증 도구, 사용자 패널, 디자인 시스템 규칙을 결합한 운영 서비스는 새로운 전문 비즈니스 영역이 될 수 있다.',
      'UX팀은 핵심 과업과 대체 경로를 정의하고, AX팀은 AI 생성 결과가 접근성 제약을 통과하지 못하면 안전한 기본 UI로 되돌리는 정책을 설계해야 한다. 자동 점수 하나가 아니라 과업 성공과 복구 가능성을 함께 측정해야 한다.'
    ],
    framework: { title: '지속 접근성 운영 4단계', steps: [
      { name: '핵심 과업과 대체 경로 정의', desc: '로그인, 탐색, 결제처럼 실패 비용이 큰 과업과 키보드·음성·스크린리더 경로를 함께 적는다.' },
      { name: '생성 규칙에 접근성 제약', desc: 'AI가 바꿀 수 없는 구조, 대비, 포커스, 알림 규칙을 디자인 시스템과 코드에 넣는다.' },
      { name: '자동검사와 사람 평가 결합', desc: '기계가 찾는 오류와 실제 사용자 과업 테스트 결과를 같은 품질 리포트에서 관리한다.' },
      { name: '실패 시 기본 경험 복구', desc: '생성 결과가 검증을 통과하지 못하면 접근 가능한 기본 화면을 즉시 제공한다.' }
    ]},
    tips: ['WCAG 3.0은 작업 초안이므로 준수 기준으로 단정하지 말고, 변화 방향을 내부 실험 항목으로 활용하세요.'],
    question: 'AI가 만든 예외 화면에서도 사용자는 같은 과업을 다른 방식으로 끝낼 수 있는가?',
    checklist: ['핵심 과업별 대체 입력 경로가 있는가?', 'AI가 변경할 수 없는 접근성 규칙이 있는가?', '자동검사와 장애 사용자 테스트를 구분하는가?', '동적 알림이 보조기기에 전달되는가?', '검증 실패 시 기본 UI로 복귀하는가?'],
    metrics: ['핵심 과업 접근성 성공률', '생성 결과 자동검사 통과율', '보조기기별 복구 성공률', '접근성 회귀 오류 해결시간'],
    takeaways: ['접근성의 단위를 화면에서 과업으로 넓힌다', '자동검사와 사람 평가를 서로 대체하지 않는다', 'AI 생성 실패에 대비한 기본 경험을 유지한다'],
    keywords: ['WCAG3', '접근성운영', '생성형UI'],
    sources: [
      { name: 'W3C — WCAG 3.0 Working Draft, 10 September 2026', url: 'https://www.w3.org/TR/2026/WD-wcag-3.0-20260910/' },
      { name: 'W3C WAI — Accessibility Activities and Publications, September 2026', url: 'https://www.w3.org/WAI/update/' }
    ]
  },
  {
    id: 'neighborhood-renewal-needs-an-operating-model', publishedAt: '2026-09-23', sourcePublishedAt: '2026-06-23',
    category: 'Place & Public', region: 'Global', readTime: 8,
    title: '동네를 바꾸는 프로젝트에는 공간보다 운영모델이 먼저다',
    dek: '포용적 성장과 지역 임팩트를 서비스·조달·데이터로 연결하는 도시 경험 전략.',
    summary: 'OECD의 2026 도시 포용 성장 사례들은 지역 문제를 물리적 정비 하나로 해결하지 않는다. 주민 참여, 공공조달, 민간 투자, 사회서비스와 성과 측정을 같은 운영 구조로 묶는다. 도시 경험디자인의 역할도 공간 콘셉트를 만드는 데서 이해관계자와 자원이 계속 작동하는 모델을 설계하는 일로 확장된다.',
    body: [
      '지역 문제는 주거, 일자리, 건강, 이동, 상권이 서로 얽혀 있어 한 부서나 단일 시설로 해결하기 어렵다. OECD가 소개한 지역 기반 이니셔티브는 동네 단위를 실험의 장으로 삼되, 사람과 장소를 함께 보고 주민의 지식과 선택권을 정책 설계에 포함한다.',
      '서비스 전략은 주민 여정과 행정·민간 파트너의 운영 흐름을 하나의 블루프린트로 연결해야 한다. 새로운 비즈니스 모델은 공공조달, 성과기반 계약, 임팩트 투자, 지역 사업자의 서비스 공급을 조합해 프로젝트 종료 이후에도 가치가 순환하게 만들 수 있다.',
      'UX는 주민이 참여 결과와 다음 결정을 추적할 수 있게 해야 하고, AX는 여러 기관의 데이터를 연결하되 취약계층을 자동 분류하거나 배제하지 않도록 설명·이의제기·사람 판단 절차를 둬야 한다. 방문자 수보다 서비스 접근성과 반복 이용, 지역 내 가치 순환을 측정하는 것이 중요하다.'
    ],
    framework: { title: '지역 운영모델 설계 4단계', steps: [
      { name: '문제를 생활권으로 묶기', desc: '행정 사업명이 아니라 주민의 이동, 돌봄, 소비, 일자리 여정에서 문제가 만나는 지점을 찾는다.' },
      { name: '역할과 자원 지도 만들기', desc: '주민, 공공, 상인, 복지기관, 투자자의 권한·데이터·예산·책임을 한 장에 표시한다.' },
      { name: '작은 실증과 조달 연결', desc: '현장 프로토타입을 공공조달이나 성과기반 계약으로 이어갈 조건을 처음부터 설계한다.' },
      { name: '공개 성과와 학습 운영', desc: '서비스 접근성, 반복 이용, 지역 내 지출과 주민 피드백을 공개하고 다음 의사결정에 반영한다.' }
    ]},
    tips: ['공간 준공을 종료점으로 두지 말고 운영 주체의 첫 12개월 업무와 예산을 서비스 블루프린트에 포함하세요.'],
    question: '지원사업이 끝난 뒤에도 이 동네에서 계속 작동할 역할·수익·데이터 구조는 무엇인가?',
    checklist: ['주민의 생활 여정으로 문제를 정의했는가?', '참여 결과가 실제 의사결정과 연결되는가?', '운영 주체별 권한과 예산이 명확한가?', '실증 이후 조달·수익 경로가 있는가?', '취약계층의 이의제기와 사람 판단 절차가 있는가?'],
    metrics: ['필수서비스 접근시간', '주민 반복 참여율', '실증 후 지속 운영률', '지역 사업자 조달 비중'],
    takeaways: ['공간보다 지속 운영의 역할과 자원을 먼저 설계한다', '주민 참여를 의견 수집이 아닌 결정 구조로 만든다', '실증을 조달·투자·성과 측정과 연결한다'],
    keywords: ['도시경험디자인', '지역운영모델', '포용성장'],
    sources: [
      { name: 'OECD — What Works for Inclusive Growth in Cities', url: 'https://www.oecd.org/content/dam/oecd/en/publications/reports/2026/06/what-works-for-inclusive-growth-in-cities_aee775c0/680809c3-en.pdf' },
      { name: 'OECD — Place-based Impact Investing in Rotterdam', url: 'https://www.oecd.org/en/publications/inclusive-growth-in-cities_3320b636-en/place-based-impact-investing-in-rotterdam_86804c34-en.html' }
    ]
  }
];

const existing = new Set(data.articles.map(article => article.id));
const fresh = additions.filter(article => !existing.has(article.id));
if (!fresh.length) {
  console.log('No new articles: today\'s five IDs already exist.');
  process.exit(0);
}
if (fresh.length !== additions.length) throw new Error('Partial duplicate detected; refusing a mixed append.');

data.updatedAt = '2026-09-23';
data.articles.push(...fresh);
writeFileSync(file, `${JSON.stringify(data, null, 2)}\n`);
console.log(`Added ${fresh.length} daily insights for 2026-09-23.`);
