import { readFileSync, writeFileSync } from 'node:fs';
const file='data/insights.json';
const data=JSON.parse(readFileSync(file,'utf8'));
const articles=[
  {
    id:'ai-shopping-trust-needs-visible-control',publishedAt:'2026-10-01',sourcePublishedAt:'2026-09-30',category:'Retail & Commerce',region:'Global',readTime:8,
    title:'AI 쇼핑의 신뢰는 추천 정확도보다 ‘보이는 통제권’에서 시작된다',dek:'에이전트 커머스에서 사기 방지·투명성·고객 권한을 하나의 경험으로 설계하기.',
    summary:'Synchrony와 Oxford Economics의 2026 AI 커머스 연구는 에이전트 쇼핑 확산에서 신뢰가 핵심이라고 본다. 고객은 AI가 편리하다는 사실보다 어떤 데이터로 무엇을 대신하며 언제 중단할 수 있는지를 알아야 한다.',
    body:['쇼핑 에이전트가 탐색과 결제를 이어서 수행하면 추천, 광고, 신용과 결제가 한 흐름에 섞인다. 고객이 상업적 관계와 권한 범위를 구분하지 못하면 작은 오류도 전체 서비스에 대한 불신으로 번진다.','서비스 전략은 사기 방지, 추천 투명성, 위임 한도와 책임을 별도 약관이 아니라 구매 여정에 포함해야 한다. 비즈니스 모델은 자동 구매 수수료보다 검증된 판매자, 가격 보호, 분쟁 복구와 보증을 묶은 신뢰 서비스로 확장할 수 있다.','UX는 에이전트가 지금 수행하는 일과 사용한 데이터, 취소 가능 시점을 보여줘야 한다. AX는 이상 징후나 조건 변경이 생기면 자동 실행을 멈추고 고객 승인을 요청해야 한다.'],
    framework:{title:'보이는 통제권 4단계',steps:[{name:'권한 미리보기',desc:'목적·금액·기간·데이터 범위를 실행 전에 보여준다.'},{name:'추천 근거',desc:'선택 이유와 광고·제휴 관계를 구분한다.'},{name:'실시간 중단',desc:'조건 변경과 위험 신호에서 고객 승인을 요청한다.'},{name:'분쟁 복구',desc:'기록, 취소, 환불과 책임 주체를 연결한다.'}]},
    tips:['자동 구매 성공률과 함께 권한 이해도, 중단 성공률과 분쟁 복구시간을 측정하세요.'],question:'고객은 에이전트가 무엇을 대신하고 있으며 지금 멈추면 어떤 일이 생기는지 아는가?',
    checklist:['권한 범위가 실행 전에 보이는가?','추천과 광고가 구분되는가?','조건 변경 시 재승인하는가?','즉시 중단이 가능한가?','분쟁 증거와 책임이 연결되는가?'],metrics:['권한 이해도','재승인 완료율','오인 구매율','분쟁 복구시간'],takeaways:['신뢰를 정확도가 아닌 통제권으로 설계한다','추천·결제·보안을 하나의 여정으로 묶는다','자동화 중단과 복구를 핵심 기능으로 둔다'],keywords:['AI쇼핑','AgenticCommerce','TrustUX'],
    sources:[{name:'Synchrony & Oxford Economics — 2026 AI in Commerce Study',url:'https://www.synchrony.com/contenthub/newsroom/2026-ai-in-commerce-study.html'},{name:'CTA — Artificial Intelligence: Consumer Sentiments 2026',url:'https://www.cta.tech/press-releases/cta-research-shows-consumers-embrace-ai-convenience-tools-as-broader-sentiment-remains-mixed'}]
  },
  {
    id:'convenience-store-ai-must-respect-the-moment',publishedAt:'2026-10-01',sourcePublishedAt:'2026-09-30',category:'Retail & Commerce',region:'Global',readTime:7,
    title:'편의점 AI는 개인화보다 ‘지금 이 순간’을 존중해야 한다',dek:'빠른 구매 현장에서 추천·대기·직원 업무를 함께 개선하는 리테일 전략.',
    summary:'PAR Technology의 2026 소비자 보고서는 편의점 AI가 고객의 조건에 맞아야 한다고 제안한다. 편의점의 맥락은 짧은 체류, 즉시성, 이동 중 사용과 반복 구매다. 복잡한 대화보다 필요한 순간의 작은 도움과 거부할 자유가 중요하다.',
    body:['고객은 출근길, 야간, 주유 중처럼 서로 다른 긴급성으로 방문한다. 모든 고객에게 대화를 요구하거나 과도한 추천을 띄우면 개인화가 마찰이 되고 직원에게 설명 부담을 넘긴다.','서비스 전략은 재고 안내, 빠른 재구매, 식이·알레르기 확인과 대기 분산처럼 순간별 문제를 먼저 해결해야 한다. 비즈니스 모델은 쿠폰 남발보다 시간 절약, 픽업 보증, 지역 상품 큐레이션과 매장 운영 효율을 결합할 수 있다.','UX는 추천을 건너뛸 수 있고 가격과 혜택 조건을 즉시 비교하게 해야 한다. AX는 고객 데이터뿐 아니라 매장 혼잡과 직원 업무량을 고려해 추천 강도와 자동화를 조절해야 한다.'],
    framework:{title:'순간 기반 편의점 AI 4단계',steps:[{name:'방문 맥락',desc:'시간·목적·긴급성에 따라 필요한 도움을 구분한다.'},{name:'마찰 최소화',desc:'가격·재고·알레르기·픽업 정보를 짧게 제공한다.'},{name:'직원 부하 조정',desc:'혼잡과 업무량에 따라 자동화와 알림을 조절한다.'},{name:'거부와 초기화',desc:'개인화를 쉽게 끄고 기록을 지울 수 있게 한다.'}]},
    tips:['추천 클릭률보다 구매시간, 직원 호출, 잘못 적용된 혜택을 함께 보세요.'],question:'이 AI는 고객의 짧은 방문을 더 빠르고 확실하게 만드는가, 대화를 하나 더 추가하는가?',
    checklist:['방문 목적별 흐름이 다른가?','추천을 건너뛸 수 있는가?','가격·혜택 조건이 즉시 보이는가?','직원 업무량을 고려하는가?','개인화 초기화가 쉬운가?'],metrics:['평균 구매시간','직원 호출률','혜택 오류율','개인화 거부 후 완료율'],takeaways:['개인화보다 방문 순간의 목적을 우선한다','고객과 직원 경험을 함께 최적화한다','추천을 거부할 자유를 기본값으로 둔다'],keywords:['편의점AI','RetailUX','MomentDesign'],
    sources:[{name:'PAR Technology — AI on the C-Store Customer’s Terms',url:'https://www.streetinsider.com/Business%2BWire/AI%2Bon%2Bthe%2BC-Store%2BCustomer%E2%80%99s%2BTerms%3A%2BNew%2BConsumer%2BReport%2Bby%2BPAR%2BTechnology/27125285.html'},{name:'NVIDIA — State of AI in Retail and CPG 2026',url:'https://www.nvidia.com/en-au/lp/industries/state-of-ai-in-retail-and-cpg/'}]
  },
  {
    id:'architecture-ai-needs-accountable-design-decisions',publishedAt:'2026-10-01',sourcePublishedAt:'2026-09-30',category:'Industry & Manufacturing',region:'Global',readTime:8,
    title:'건축 AI의 가치는 이미지 생성이 아니라 ‘책임 있는 설계 결정’에 있다',dek:'생성형 설계를 법규·비용·탄소·시공 가능성과 연결하는 산업 UX.',
    summary:'RIBA의 AI Report 2026은 AI를 건축 실무에 내재화하는 문제를 다룬다. 빠른 형태 생성은 시작일 뿐이다. 설계안이 규정, 성능, 비용과 시공 조건을 충족하는지 검증하고 누가 결정했는지 추적할 수 있어야 실제 산업 가치가 된다.',
    body:['건축 설계는 미학뿐 아니라 안전, 접근성, 구조, 유지관리와 지역 맥락이 얽힌 결정이다. AI가 그럴듯한 안을 많이 만들수록 검토 부담과 책임 공백이 오히려 커질 수 있다.','서비스 전략은 생성, 분석, 비교, 승인과 변경 이력을 하나의 의사결정 흐름으로 연결해야 한다. 비즈니스 모델은 렌더링 도구 판매보다 규정 검토, 탄소·비용 시뮬레이션과 감사 가능한 설계 기록을 제공하는 보증 서비스다.','UX는 설계자가 대안의 근거와 트레이드오프를 비교하게 하고, AX는 기준을 위반하거나 입력 데이터가 부족한 경우 확신을 낮춰 표시해야 한다. 최종 전문 책임과 서명은 명확히 남아야 한다.'],
    framework:{title:'책임 설계 결정 4단계',steps:[{name:'제약 조건 입력',desc:'법규·예산·탄소·접근성과 시공 조건을 명시한다.'},{name:'대안과 근거',desc:'형태뿐 아니라 성능과 가정을 함께 생성한다.'},{name:'전문 검증',desc:'분야별 책임자가 위험과 충돌을 확인한다.'},{name:'결정 이력',desc:'선택·수정·승인과 근거를 수명주기 동안 보존한다.'}]},
    tips:['생성 속도보다 검증되지 않은 가정 수와 설계 변경의 원인 추적 시간을 측정하세요.'],question:'AI가 제안한 설계가 왜 선택됐고 어떤 제약을 포기했는지 이후 팀도 설명할 수 있는가?',
    checklist:['핵심 제약이 구조화됐는가?','대안별 가정이 보이는가?','전문가 승인 지점이 있는가?','불확실성을 표시하는가?','변경 이력이 시공까지 이어지는가?'],metrics:['규정 충돌 조기 발견률','검증 소요시간','변경 원인 추적시간','시공단계 재작업률'],takeaways:['건축 AI를 이미지에서 의사결정 시스템으로 확장한다','생성과 전문 검증을 연결한다','책임과 근거를 수명주기 동안 보존한다'],keywords:['건축AI','GenerativeDesign','산업UX'],
    sources:[{name:'RIBA — AI Report 2026',url:'https://www.riba.org/work/insights-and-resources/ai-report/'},{name:'Organization Design Forum — 2026 Practitioner Survey',url:'https://organizationdesignforum.org/wp-content/uploads/2026/03/ODF-Org-Design-Practitioner-Survey-Report-Mar2026.pdf'}]
  },
  {
    id:'regional-ai-startups-need-a-market-path',publishedAt:'2026-10-01',sourcePublishedAt:'2026-09-30',category:'Entertainment & Culture',region:'Korea',readTime:8,
    title:'지역 AI 창업은 아이디어보다 ‘첫 시장 경로’가 필요하다',dek:'부산 전략산업과 문화관광 과제를 실제 고객·실증·조달로 연결하는 방법.',
    summary:'부산 AI 창업 경진대회는 영화영상콘텐츠, 게임, 문화관광을 포함한 지역 전략산업의 아이디어를 발굴한다. 공모전이 창업 생태계가 되려면 시상에서 멈추지 않고 첫 고객, 현장 데이터, 권리와 반복 매출을 연결해야 한다.',
    body:['지역 창업팀은 기술보다 산업 접점과 초기 고객을 구하는 데 어려움을 겪는다. 콘텐츠·관광 분야는 저작권, 계절성, 공공시설과 지역 사업자의 협력이 필요해 일반적인 데모데이만으로 검증하기 어렵다.','서비스 전략은 지역 기관과 기업이 실제 문제와 구매 조건을 먼저 공개하고, 팀이 제한된 현장에서 유료 실증을 하게 해야 한다. 비즈니스 모델은 프로젝트 납품보다 콘텐츠 라이선스, 운영 구독, 지역 파트너 수익배분처럼 반복 가능한 구조를 검증해야 한다.','UX는 방문객·창작자·운영자의 경험을 함께 연구하고, AX는 학습 데이터 권리, 생성물 표시와 현장 직원의 역할 변화를 초기에 다뤄야 한다. 지원 성과는 수상작 수보다 첫 계약과 지역 내 지속 운영으로 측정해야 한다.'],
    framework:{title:'지역 첫 시장 4단계',steps:[{name:'수요 브리프',desc:'지역 기관·기업이 문제와 구매 기준을 공개한다.'},{name:'권리 있는 실증',desc:'데이터·저작권·수익배분을 합의하고 현장에서 검증한다.'},{name:'첫 유료 계약',desc:'성과가 확인되면 작은 운영 계약으로 전환한다.'},{name:'확장 가능한 모델',desc:'다른 장소·고객에도 적용할 공통 요소를 제품화한다.'}]},
    tips:['팀 수와 시상금보다 6개월 내 유료 계약, 재구매와 지역 파트너 매출을 추적하세요.'],question:'이 아이디어가 공모전 이후 누구의 예산으로 어떤 반복 문제를 해결하며 계속 운영되는가?',
    checklist:['실제 수요기관이 참여하는가?','데이터·저작권이 합의됐는가?','유료 실증 경로가 있는가?','지역 파트너 수익이 있는가?','다른 시장으로 확장 가능한가?'],metrics:['첫 유료계약률','6개월 지속운영률','지역 파트너 매출','타 지역 재사용률'],takeaways:['창업 지원을 첫 시장 서비스로 설계한다','실증 전 권리와 구매 조건을 합의한다','수상보다 반복 매출과 지속 운영을 본다'],keywords:['지역창업','문화관광AI','MarketPath'],
    sources:[{name:'2026 AI 창업 경진대회 — 부산 전략산업',url:'https://ai-startup-competition.kr/'},{name:'Creative Industries AI Adoption Plan — GOV.UK',url:'https://www.gov.uk/government/publications/ai-champions-ai-adoption-plans/ai-adoption-plan-creative-industries'}]
  },
  {
    id:'public-ai-needs-interoperable-accountability',publishedAt:'2026-10-01',sourcePublishedAt:'2026-09-30',category:'UX & Service Design',region:'Europe · Global',readTime:8,
    title:'공공 AI의 상호운용성은 데이터 연결보다 ‘책임 연결’이어야 한다',dek:'기관을 넘나드는 자동화에서 시민의 상태·동의·이의제기를 보존하는 설계.',
    summary:'EU의 공공부문 Apply AI 논의는 개방형·상호운용 솔루션과 선제적 서비스를 강조한다. 그러나 시스템만 연결하면 자동 결정의 책임이 기관 사이에서 흩어질 수 있다. 시민 경험에는 데이터 이동과 함께 책임·설명·구제도 이어져야 한다.',
    body:['여러 기관이 AI와 데이터를 공유하면 신청을 줄이고 문제를 먼저 발견할 수 있다. 동시에 잘못된 정보가 기관 사이에 전파되면 시민은 어디서 오류를 고쳐야 하는지 찾기 어렵다.','서비스 전략은 API 규격과 함께 결정 출처, 책임기관, 동의 범위, 정정과 이의 상태를 교환하는 공통 계약을 만들어야 한다. 새로운 서비스 영역은 기관 간 책임 추적, 알고리즘 등록과 시민용 결정 영수증을 운영하는 신뢰 인프라다.','UX는 시민이 한 화면에서 어떤 기관이 어떤 데이터를 사용했는지 확인하고 수정하게 해야 한다. AX는 기관 간 자동화가 고위험 결정으로 확장될수록 사람 검토와 독립 구제 경로를 강화해야 한다.'],
    framework:{title:'책임 상호운용 4단계',steps:[{name:'결정 출처',desc:'데이터와 모델, 책임기관을 함께 기록한다.'},{name:'목적별 동의',desc:'기관 간 공유 목적과 기간을 시민이 확인한다.'},{name:'정정 전파',desc:'한 기관의 오류 수정이 연결 기관에 반영되게 한다.'},{name:'통합 구제',desc:'이의제기 상태와 사람 심사를 기관 간 이어준다.'}]},
    tips:['연결된 기관 수보다 오류 정정이 모든 기관에 반영되는 시간과 이의 해결률을 보세요.'],question:'기관을 넘나든 자동 결정이 틀렸을 때 시민은 한 번의 요청으로 전체 기록을 바로잡을 수 있는가?',
    checklist:['결정 출처와 책임기관이 보이는가?','공유 목적과 기간이 명확한가?','정정이 연결기관에 전파되는가?','이의 상태가 기관 간 이어지는가?','고위험 결정에 사람 심사가 있는가?'],metrics:['기관 간 정정 반영시간','책임기관 식별률','이의 해결률','반복 증빙 감소율'],takeaways:['상호운용성을 책임과 구제까지 확장한다','시민의 상태와 동의를 기관 간 보존한다','데이터 연결의 오류 전파 위험을 통제한다'],keywords:['공공AI','Interoperability','책임UX'],
    sources:[{name:'Interoperable Europe — Apply AI webinar on AI in the public sector',url:'https://interoperable-europe.ec.europa.eu/collection/ai-public-sector/news/apply-ai-webinar-ai-public-sector-30-september-2026'},{name:'OECD — Digital Government Outlook 2026',url:'https://www.oecd.org/en/publications/digital-government-outlook_0496b2bc-en/full-report/adopting-and-governing-ai-in-government_7ef312a9.html'}]
  }
];
const existing=new Set(data.articles.map(a=>a.id));const fresh=articles.filter(a=>!existing.has(a.id));
if(!fresh.length){console.log("No new articles: today's five IDs already exist.");process.exit(0);}
if(fresh.length!==articles.length)throw new Error('Partial duplicate detected; refusing a mixed append.');
data.updatedAt='2026-10-01';data.articles.push(...fresh);writeFileSync(file,`${JSON.stringify(data,null,2)}\n`);
console.log(`Added ${fresh.length} daily insights for 2026-10-01.`);
