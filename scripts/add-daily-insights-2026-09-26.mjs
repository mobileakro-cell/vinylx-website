import { readFileSync, writeFileSync } from 'node:fs';

const file = 'data/insights.json';
const data = JSON.parse(readFileSync(file, 'utf8'));
const articles = [
  {
    id:'healthy-diet-access-is-a-service-system',publishedAt:'2026-09-26',sourcePublishedAt:'2026-09-04',category:'Food & Livestock',region:'Global',readTime:8,
    title:'건강한 식단의 가격은 UX가 아니라 ‘서비스 시스템’의 문제다',dek:'추천 화면을 넘어 가격·재고·이동·문화적 적합성을 함께 설계하는 식품 서비스 전략.',
    summary:'SOFI 2026은 건강한 식단의 높은 비용과 불평등한 접근을 다시 경고했다. 식품 서비스의 과제는 좋은 상품을 추천하는 데서 끝나지 않는다. 예산, 근거리 재고, 이동 수단, 조리 시간과 문화적 선호를 묶어 실제로 선택 가능한 식단을 만드는 일이다.',
    body:['건강한 식품이 존재해도 이용자가 살 수 없거나, 가까운 곳에 없거나, 조리할 시간이 없다면 선택지는 아니다. 개인의 의지 문제로 환원한 추천 UX는 구조적 제약을 숨기고 죄책감만 키울 수 있다.','서비스 전략은 식품 가격과 영양 정보에 지역 재고, 이동, 조리 난이도와 대체재를 연결해야 한다. 새로운 비즈니스 모델은 지역 상점·급식·물류가 참여하는 건강 장바구니 구독, 예산별 묶음, 남는 식품의 재배분처럼 접근 비용을 낮추는 데서 나올 수 있다.','AX는 사용자의 건강을 단정하거나 고가 상품을 우선 노출하지 않고, 예산과 제약 안에서 가능한 선택을 설명해야 한다. 운영자에게는 수요 예측과 재고 이동을 돕되 취약 이용자를 가격 차별 대상으로 만들지 않는 통제가 필요하다.'],
    framework:{title:'식품 접근성 서비스 4단계',steps:[{name:'제약을 함께 보기',desc:'가격·재고·거리·시간·문화적 선호를 한 여정에서 파악한다.'},{name:'실행 가능한 대안',desc:'품절이나 예산 초과 시 영양과 사용 맥락이 비슷한 대안을 제시한다.'},{name:'지역 공급 연결',desc:'상점, 급식, 생산자와 물류가 재고와 수요를 공유하게 한다.'},{name:'공정성 검증',desc:'추천과 가격이 취약 이용자에게 불리하게 작동하는지 점검한다.'}]},
    tips:['추천 정확도보다 한정된 예산으로 실제 구매를 완료한 비율을 먼저 측정하세요.'],question:'이용자가 가진 예산·거리·시간 안에서 오늘 실행할 수 있는 건강한 선택은 무엇인가?',
    checklist:['총 장바구니 비용이 초기에 보이는가?','근거리 재고와 대체재가 연결되는가?','조리 시간과 문화적 선호를 반영하는가?','취약 이용자에 대한 가격 차별을 막는가?','지역 공급자도 수요 정보를 활용할 수 있는가?'],metrics:['예산 내 구매완료율','건강 대체재 선택률','품절 대체 성공률','지역 공급자 폐기 감소율'],takeaways:['식품 선택을 개인 의지가 아닌 접근 시스템으로 본다','추천과 지역 공급 운영을 연결한다','AI 최적화에 공정성과 예산 제약을 포함한다'],keywords:['식품접근성','건강한식단','푸드서비스디자인'],
    sources:[{name:'WHO — The State of Food Security and Nutrition in the World 2026',url:'https://www.who.int/publications/m/item/the-state-of-food-security-and-nutrition-in-the-world-2026'},{name:'FAO CFS — AI, Digitalization and Data Governance for Food Security',url:'https://www.fao.org/cfs/plenary/past-sessions/cfs-46/list-of-documents/cfs-chairperson-s-summary-report-on-the-high-level-forum-on-harnessing-artificial-intelligence--digitalization-and-data-governance-for-food-security-and-nutritioncfs54/en'}]
  },
  {
    id:'agentic-payment-needs-a-permission-contract',publishedAt:'2026-09-26',sourcePublishedAt:'2026-09-10',category:'Retail & Commerce',region:'Korea · Global',readTime:8,
    title:'AI가 결제할 때 인증은 화면이 아니라 ‘권한 계약’이다',dek:'보이지 않는 결제에서 한도·조건·중단·복구를 설계하는 에이전트 커머스 원칙.',
    summary:'AI 에이전트가 탐색과 비교를 넘어 결제까지 수행하면 편의성의 중심은 클릭 감소가 아니라 위임 통제가 된다. 이용자는 무엇을, 얼마까지, 어떤 조건에서 맡겼는지 알고 언제든 멈추고 되돌릴 수 있어야 한다.',
    body:['에이전트 결제는 구매 버튼을 없애지만 책임까지 없애지는 않는다. 상품 변경, 환율, 배송비, 구독 전환처럼 실행 시점에 조건이 달라지면 사전에 받은 포괄 동의만으로는 신뢰를 유지하기 어렵다.','서비스 전략은 인증을 한 번의 본인 확인이 아니라 목적·한도·기간·판매자·예외 조건이 있는 권한 계약으로 바꿔야 한다. 결제 사업자는 승인 API뿐 아니라 위임 기록, 분쟁 증거, 환불과 복구를 묶은 보증 서비스를 새로운 수익 모델로 만들 수 있다.','UX는 자동 실행 전 핵심 조건과 변경점을 짧게 보여주고, AX는 임계값을 넘으면 사람 승인을 요청해야 한다. 금융기관과 판매자는 에이전트의 행동을 고객 행동과 구분해 추적하고, 이상 거래 통제가 정당한 구매를 과도하게 막지 않는지도 측정해야 한다.'],
    framework:{title:'에이전트 결제 권한 4단계',steps:[{name:'위임 범위 선언',desc:'목적, 금액, 기간, 판매자와 금지 조건을 명시한다.'},{name:'변경점 재확인',desc:'가격·상품·배송·구독 조건이 달라지면 다시 승인받는다.'},{name:'실행 증거 남기기',desc:'에이전트가 비교하고 선택한 근거와 결제 주체를 기록한다.'},{name:'중단과 복구',desc:'즉시 중지, 취소, 환불과 분쟁 해결을 같은 흐름에서 제공한다.'}]},
    tips:['자동결제 성공률과 함께 재승인 발생률, 취소 복구시간, 오인 거래율을 운영 지표로 두세요.'],question:'고객이 에이전트에게 맡긴 권한의 경계와 실패했을 때의 책임은 누구에게 보이는가?',
    checklist:['위임의 금액·기간·목적이 명확한가?','조건 변경 시 재승인하는가?','에이전트 실행 기록이 남는가?','즉시 중단과 취소가 가능한가?','분쟁 시 책임과 증거가 연결되는가?'],metrics:['무개입 결제 성공률','조건변경 재승인율','오인 거래 신고율','취소·환불 평균시간'],takeaways:['인증을 로그인에서 위임 계약으로 확장한다','편의성과 재승인 기준을 함께 설계한다','결제 기록을 분쟁 복구의 증거로 만든다'],keywords:['에이전트결제','위임UX','AI커머스'],
    sources:[{name:'삼일PwC — AI 에이전트가 여는 결제의 미래',url:'https://www.pwc.com/kr/ko/press-room/2026/20260910.html'},{name:'Bank of Japan — Generative AI Use and Risk Management at Financial Institutions',url:'https://www.boj.or.jp/research/brp/fsr/fsrb260806.htm'}]
  },
  {
    id:'public-ai-agent-needs-a-civic-mandate',publishedAt:'2026-09-26',sourcePublishedAt:'2026-09-17',category:'Place & Public',region:'Global',readTime:8,
    title:'공공 AI 에이전트는 시민의 ‘위임장’을 가져야 한다',dek:'선제적 행정서비스에서 신원·동의·데이터 출처·이의제기를 연결하는 설계.',
    summary:'공공서비스가 시민의 필요를 예측해 먼저 움직일수록 에이전트의 신원과 권한이 중요해진다. 편리한 자동 신청도 어떤 기관이 어떤 데이터로 무엇을 대신했는지 설명되지 않으면 감시와 오결정의 경험이 된다.',
    body:['공공 에이전트는 여러 기관의 신원·복지·세금·이동 데이터를 넘나들 수 있다. 시민 입장에서는 채널이 하나로 줄어도 내부 위임 관계가 불투명하면 동의 철회, 오류 수정과 책임 기관 찾기가 더 어려워질 수 있다.','서비스 전략은 기관 간 연계를 데이터 통합 프로젝트가 아니라 시민의 목적별 위임 서비스로 설계해야 한다. 공통 신원, 동의 영수증, 데이터 출처, 권한 만료와 이의제기 규격은 공공 디지털 인프라의 핵심 자산이 된다.','UX는 시민이 에이전트의 소속과 현재 권한을 즉시 확인하게 하고, AX는 혜택 안내처럼 저위험 업무부터 시작해 권리 박탈이나 제재에는 사람 심사와 독립적인 이의제기를 유지해야 한다.'],
    framework:{title:'시민 위임 공공 AI 4단계',steps:[{name:'에이전트 신원',desc:'어느 기관을 대신하며 누구에게 책임지는지 표시한다.'},{name:'목적별 동의',desc:'포괄 동의가 아니라 처리 목적과 데이터 범위를 선택하게 한다.'},{name:'출처와 행동 기록',desc:'사용 데이터와 실행·추천 내역을 시민이 확인하게 한다.'},{name:'철회와 이의제기',desc:'권한 회수, 오류 수정과 사람 심사를 한 경로로 연결한다.'}]},
    tips:['선제적 서비스의 도달률만 보지 말고 잘못된 대상 선정과 시민의 정정 성공률을 함께 공개하세요.'],question:'시민은 이 에이전트가 누구를 대신해 어떤 권한으로 움직였는지 한눈에 알 수 있는가?',
    checklist:['에이전트의 소속과 책임자가 보이는가?','동의 범위와 만료일을 선택하는가?','데이터 출처를 확인할 수 있는가?','권한 철회가 즉시 반영되는가?','불이익 결정에 사람 심사가 있는가?'],metrics:['동의 범위 이해도','권한 철회 처리시간','오류 정정 성공률','이의제기 후 결정 변경률'],takeaways:['기관 통합보다 시민의 위임 관계를 먼저 설계한다','신원·동의·출처를 하나의 신뢰 흐름으로 묶는다','고위험 결정에는 사람 심사를 유지한다'],keywords:['공공AI','디지털공공서비스','시민위임'],
    sources:[{name:'ITU — Building trust into the next generation of digital services',url:'https://www.itu.int/hub/2026/09/building-trust-into-the-next-generation-of-digital-services/'},{name:'OECD — Digital Government Outlook 2026',url:'https://www.oecd.org/content/dam/oecd/en/publications/reports/2026/06/digital-government-outlook_4585678e/0496b2bc-en.pdf'}]
  },
  {
    id:'farmer-first-data-means-less-reporting',publishedAt:'2026-09-26',sourcePublishedAt:'2026-09-01',category:'Food & Livestock',region:'Global',readTime:7,
    title:'농업 데이터 현대화는 더 많이 묻는 것이 아니라 ‘덜 입력하게’ 하는 것이다',dek:'농가의 보고 부담을 줄이면서 현장 의사결정 가치를 높이는 데이터 서비스.',
    summary:'농업 데이터에 위성·지리정보·AI를 결합하는 목적은 중앙의 데이터 양을 늘리는 것이 아니라 농가의 반복 보고를 줄이고 더 빠른 판단을 돌려주는 데 있어야 한다. 데이터 제공자에게 직접 가치가 돌아오지 않으면 정확성과 참여도도 떨어진다.',
    body:['농가는 지원금, 방역, 생산 통계와 유통을 위해 같은 정보를 여러 번 제출한다. 현장 연결성이 낮고 계절 노동이 집중되는 상황에서 추가 입력을 요구하는 디지털화는 행정 비용을 농가에 전가한다.','서비스 전략은 이미 존재하는 공공·위성·센서 데이터를 먼저 재사용하고 농가에는 확인과 예외 수정만 요청해야 한다. 새로운 비즈니스 모델은 데이터 판매보다 생산 예측, 공동구매, 보험, 방역과 물류 의사결정을 농가에 되돌려주는 협동형 데이터 서비스에 가깝다.','UX는 불확실한 자동 추정을 확정값처럼 보이지 않게 하고 농가가 수정할 수 있어야 한다. AX는 데이터 사용 목적과 공유 대상을 제한하며, 소규모 농가가 데이터 부족 때문에 지원과 금융에서 배제되지 않도록 대체 심사 경로를 제공해야 한다.'],
    framework:{title:'농가 우선 데이터 4단계',steps:[{name:'반복 입력 찾기',desc:'기관별로 중복 제출하는 필드와 시점을 조사한다.'},{name:'자동 채움과 확인',desc:'공공·위성 데이터를 먼저 채우고 농가는 예외만 수정한다.'},{name:'현장 가치 환류',desc:'수집 데이터를 생산·방역·물류 판단으로 즉시 돌려준다.'},{name:'목적과 공정성 통제',desc:'공유 범위와 보유 기간을 제한하고 배제 위험을 점검한다.'}]},
    tips:['수집 필드 수보다 농가가 절약한 입력 시간과 데이터를 통해 개선한 의사결정을 측정하세요.'],question:'농가가 이 데이터를 제공한 뒤 현장에서 되돌려 받는 구체적인 가치는 무엇인가?',
    checklist:['중복 입력 필드를 제거했는가?','자동 추정을 농가가 수정할 수 있는가?','오프라인·저속 환경을 지원하는가?','데이터 사용 목적과 기간이 보이는가?','데이터 부족 농가의 대체 경로가 있는가?'],metrics:['농가 보고시간 감소','자동채움 확인률','데이터 오류 정정시간','현장 의사결정 활용률'],takeaways:['농업 데이터의 성과를 수집량이 아닌 부담 감소로 본다','데이터 가치를 농가에 다시 돌려준다','소규모 농가의 배제 위험을 통제한다'],keywords:['농업데이터','농가UX','애그리테크'],
    sources:[{name:'USDA — Plan to Modernize Agricultural Data Collection and Put Farmers First',url:'https://usda.azureedge.us/about-usda/news/press-releases/2026/09/01/secretary-rollins-unveils-plan-modernize-agricultural-data-collection-and-put-farmers-first'},{name:'Government of India — ASEAN-India Ministers discuss AI and digital agriculture',url:'https://www.pib.gov.in/PressReleasePage.aspx?PRID=2308621&lang=2&reg=3'}]
  },
  {
    id:'future-public-service-standard-is-end-to-end',publishedAt:'2026-09-26',sourcePublishedAt:'2026-07-02',category:'UX & Service Design',region:'Global',readTime:8,
    title:'미래 공공서비스 표준은 화면 품질이 아니라 ‘끝까지 해결되는 경험’이다',dek:'AI 도입을 채널 개선이 아닌 업무·조직·성과의 재설계로 연결하는 방법.',
    summary:'공공서비스 표준은 웹 접근성과 화면 사용성을 넘어 시민의 문제가 실제로 해결되는 전체 여정을 다뤄야 한다. AI가 접수와 안내를 빠르게 해도 뒤의 심사·협업·예외 처리가 그대로면 대기와 실패는 다른 채널로 이동할 뿐이다.',
    body:['시민은 기관 조직도에 맞춰 문제를 나누지 않는다. 신청 화면이 좋아도 증빙을 반복 제출하거나 부서 사이에서 상태를 잃으면 하나의 실패한 서비스로 기억한다. 직원 역시 불완전한 자동 분류를 수습하느라 더 많은 보이지 않는 노동을 할 수 있다.','서비스 전략은 프런트 화면, 정책 규칙, 데이터, 직원 업무와 기관 간 인계를 하나의 서비스로 정의해야 한다. 새로운 비즈니스 모델은 구축 납품보다 서비스 성과를 지속 측정하고 규칙·업무·채널을 함께 개선하는 운영 파트너십이다.','UX는 전체 진행 상태와 다음 책임 주체를 보여주고, AX는 단순 건을 자동 처리하되 복잡한 사안에는 맥락을 보존해 사람에게 넘겨야 한다. 성과도 처리량만이 아니라 오류 감소, 해결률, 시민 관계와 직원의 일의 질로 평가해야 한다.'],
    framework:{title:'끝까지 해결되는 서비스 4단계',steps:[{name:'전체 여정 정의',desc:'채널과 부서를 넘어 시민의 목적 달성까지 범위를 잡는다.'},{name:'규칙과 업무 가시화',desc:'정책 판단, 데이터, 직원의 예외 처리와 인계를 함께 그린다.'},{name:'자동화와 인계 설계',desc:'AI가 처리할 조건과 맥락을 보존한 사람 전환을 정한다.'},{name:'해결 성과 운영',desc:'속도와 함께 오류, 재접촉, 직원 업무 질을 지속 개선한다.'}]},
    tips:['페이지 완료율 대신 시민이 다시 연락하지 않고 목적을 달성한 비율을 핵심 지표로 두세요.'],question:'화면 뒤의 정책·데이터·직원 업무까지 바뀌어 시민의 문제가 한 번에 해결되는가?',
    checklist:['서비스 범위가 목적 달성까지 이어지는가?','부서 간 인계 상태가 보이는가?','예외 처리 맥락이 보존되는가?','직원 업무 질을 측정하는가?','처리량 외 해결·오류 지표가 있는가?'],metrics:['최초 접촉 해결률','반복 제출·재접촉률','예외 인계 성공률','직원 수정·수습시간'],takeaways:['공공 UX를 화면에서 전체 서비스로 확장한다','AI와 직원 업무를 함께 재설계한다','처리량보다 해결과 관계의 질을 측정한다'],keywords:['공공서비스표준','서비스디자인','EndToEndUX'],
    sources:[{name:'GDS — Evolving the Service Standard for the future of public services',url:'https://gds.blog.gov.uk/2026/07/02/evolving-the-service-standard-for-the-future-of-public-services/'},{name:'IGAS — AI in public administrations: challenges and success factors',url:'https://www.igas.gouv.fr/roll-out-artificial-intelligence-public-administrations-comparative-analysis-challenges-and-success-factors'}]
  }
];

const existing = new Set(data.articles.map(article => article.id));
const fresh = articles.filter(article => !existing.has(article.id));
if (!fresh.length) {
  console.log("No new articles: today's five IDs already exist.");
  process.exit(0);
}
if (fresh.length !== articles.length) throw new Error('Partial duplicate detected; refusing a mixed append.');
data.updatedAt = '2026-09-26';
data.articles.push(...fresh);
writeFileSync(file, `${JSON.stringify(data, null, 2)}\n`);
console.log(`Added ${fresh.length} daily insights for 2026-09-26.`);
