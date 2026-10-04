import { readFileSync, writeFileSync } from 'node:fs';
const file = 'data/insights.json';
const data = JSON.parse(readFileSync(file, 'utf8'));
const articles = [
  {
    id:'factory-agents-need-operational-boundaries',publishedAt:'2026-09-24',sourcePublishedAt:'2026-09-14',category:'Industry & Manufacturing',region:'Global',readTime:8,
    title:'공장 AI 에이전트에는 기능보다 ‘작업 경계’가 먼저다',dek:'제조 현장의 파일럿을 안전한 운영 서비스로 확장하는 AX 설계.',
    summary:'제조 현장의 AI가 설비 이상을 설명하는 수준을 넘어 작업을 계획하고 실행하기 시작했다. 그러나 물리적 안전과 생산 연속성이 걸린 환경에서는 더 많은 자율성보다 어떤 조건에서 멈추고 사람에게 넘길지를 정의하는 작업 경계가 먼저다.',
    body:['Google Cloud가 소개한 2026 제조업 흐름은 AI의 투자수익을 확인한 기업은 많지만 전사 확장에 성공한 비율은 낮다는 실행 격차를 보여준다. 현장 파일럿이 확장되지 않는 이유는 모델 성능만이 아니라 설비 권한, 실시간 데이터, 안전 승인과 책임 구조가 분리돼 있기 때문이다.','서비스 전략은 예지보전·품질·작업지시를 개별 도구로 만들기보다 발견–판단–승인–실행–복구의 운영 흐름으로 연결해야 한다. 비즈니스 모델도 소프트웨어 라이선스에서 가동률, 품질, 에너지 절감처럼 검증 가능한 운영 성과 기반 서비스로 확장될 수 있다.','UX는 작업자에게 에이전트의 판단 근거와 예상 영향을 보여주고, AX는 읽기·제안·실행 권한을 설비와 위험 수준별로 분리해야 한다. 안전 임계값을 넘으면 자동화가 아니라 즉시 중단과 사람 승인으로 전환돼야 한다.'],
    framework:{title:'현장 에이전트 작업 경계 4단계',steps:[{name:'권한을 세 단계로 분리',desc:'설비 상태 읽기, 작업 제안, 실제 실행을 별도 권한으로 관리한다.'},{name:'물리적 영향 예측',desc:'작업 전 생산량·품질·안전·다운타임 영향을 요약한다.'},{name:'위험 기반 승인',desc:'비가역 작업과 안전 임계 초과는 지정 작업자의 승인을 받는다.'},{name:'중단과 복구 기록',desc:'긴급 정지, 수동 전환, 롤백과 원인 기록을 동일한 흐름에 둔다.'}]},
    tips:['가장 자율적인 작업이 아니라 반복되지만 되돌릴 수 있는 작업부터 운영 경계를 검증하세요.'],question:'이 에이전트가 잘못 판단했을 때 누가 몇 초 안에 멈추고 복구할 수 있는가?',
    checklist:['읽기·제안·실행 권한이 분리됐는가?','안전 임계값과 승인자가 명시됐는가?','작업 전 물리적 영향을 보여주는가?','네트워크·모델 장애 시 수동 운영이 가능한가?','모든 실행과 개입이 감사 기록으로 남는가?'],metrics:['승인 없는 실행 차단률','수동 전환 시간','복구 성공률','가동률·품질 개선'],takeaways:['자율성보다 작업 경계를 먼저 정의한다','모델과 설비 권한을 분리한다','성공률과 함께 중단·복구 능력을 측정한다'],keywords:['제조AX','산업AI','현장에이전트'],
    sources:[{name:'Google Cloud — A Manufacturing Blueprint for Secure Agentic AI',url:'https://cloud.google.com/transform/a-manufacturing-blueprint-for-secure-agentic-ai'},{name:'PwC — 2026 AI Jobs Barometer: Manufacturing',url:'https://www.pwc.com/gx/en/issues/artificial-intelligence/job-barometer/2026/pwc-aijb-2026-manufacturing-report.pdf'}]
  },
  {
    id:'shadow-agents-make-governance-a-product',publishedAt:'2026-09-24',sourcePublishedAt:'2026-09-22',category:'AX',region:'Global',readTime:8,
    title:'보이지 않는 AI 에이전트, 거버넌스도 제품이 되어야 한다',dek:'정책 문서를 넘어 권한·행동·사고를 실시간으로 다루는 운영 경험.',
    summary:'조직의 AI 정책은 늘고 있지만 승인받지 않은 에이전트와 우회 사용을 탐지하지 못하는 간극도 커지고 있다. AX 거버넌스는 연 1회 검토 문서가 아니라 에이전트 등록, 최소 권한, 행동 모니터링, 사고 복구를 일상 업무 안에서 제공하는 내부 제품이어야 한다.',
    body:['EY 조사에서는 공식 AI 거버넌스 정책을 갖춘 조직조차 긴급 도입 과정에서 절차를 건너뛴 경험과 승인되지 않은 에이전트를 찾지 못하는 문제가 나타났다. Akamai는 사람 계정뿐 아니라 API와 시스템을 오가는 비인간 정체성의 행동을 관리해야 한다고 지적한다.','서비스 전략은 금지 중심 심사에서 안전한 도입을 빠르게 지원하는 셀프서비스 플랫폼으로 바뀌어야 한다. 에이전트 카탈로그, 권한 템플릿, 데이터 사용 승인, 평가 결과와 사고 이력을 한곳에서 관리하면 거버넌스가 배포 속도를 늦추는 장벽이 아니라 재사용 가능한 기반이 된다.','UX는 팀이 필요한 통제와 승인 상태를 이해하게 하고, AX는 에이전트가 어떤 도구와 데이터에 접근했는지 행동 단위로 기록해야 한다. 정책 준수율보다 미등록 에이전트 발견 시간과 권한 회수 시간을 운영 지표로 삼아야 한다.'],
    framework:{title:'에이전트 거버넌스 제품 4단계',steps:[{name:'에이전트 등록',desc:'소유자, 목적, 사용 데이터, 연결 도구와 위험 등급을 등록한다.'},{name:'최소 권한 템플릿',desc:'업무 유형별 읽기·제안·실행 권한의 안전한 기본값을 제공한다.'},{name:'행동 기반 관찰',desc:'로그인 여부가 아니라 실제 데이터 접근과 도구 실행을 모니터링한다.'},{name:'사고 대응과 학습',desc:'권한 회수, 작업 중단, 영향 조사와 정책 개선을 하나의 흐름으로 연결한다.'}]},
    tips:['승인 화면부터 만들기보다 조직에서 이미 쓰는 에이전트와 연결 도구를 먼저 인벤토리로 만드세요.'],question:'조직은 지금 실행 중인 모든 에이전트의 소유자와 권한을 10분 안에 확인할 수 있는가?',
    checklist:['모든 에이전트에 책임 소유자가 있는가?','도구별 최소 권한 기본값이 있는가?','민감정보 입력과 전송을 탐지하는가?','권한을 즉시 회수할 수 있는가?','사고가 정책과 제품 개선으로 연결되는가?'],metrics:['미등록 에이전트 발견시간','과도 권한 비율','권한 회수시간','사고 후 재발률'],takeaways:['거버넌스를 심사가 아닌 내부 제품으로 만든다','정체성보다 실제 행동을 관찰한다','배포 속도와 통제 품질을 함께 측정한다'],keywords:['AI거버넌스','ShadowAI','AgentSecurity'],
    sources:[{name:'EY — 2026 AI Risk and Governance Survey',url:'https://www.ey.com/en_us/newsroom/2026/09/ey-survey-finds-that-autonomous-ai-implementation-outpaces-oversight-yielding-an-ai-governance-gap'},{name:'Akamai — The Agentic Threat Landscape',url:'https://www.akamai.com/newsroom/press-release/akamai-report-securing-agentic-ai-requires-shift-to-behavioral-governance'}]
  },
  {
    id:'old-downtown-regeneration-needs-a-content-engine',publishedAt:'2026-09-24',sourcePublishedAt:'2026-09-08',category:'Place & Public',region:'Korea',readTime:8,
    title:'원도심 재생은 건물보다 ‘콘텐츠 엔진’을 설계해야 한다',dek:'RE:CORE 프로젝트가 보여주는 공간·상권·문화의 공동 운영 과제.',
    summary:'국토교통부·문화체육관광부·중소벤처기업부의 원도심 RE:CORE 시범사업은 빈 공간, 문화 콘텐츠, 지역상권을 함께 다룬다. 성패는 거점 공간의 완공보다 콘텐츠를 계속 만들고 방문을 지역 소비와 주민 활동으로 연결하는 운영 엔진에 달려 있다.',
    body:['원도심 문제는 빈 건물 하나가 아니라 인구 이동, 상권 약화, 생활서비스 부족과 지역 이미지가 연결된 시스템 문제다. 물리적 리모델링만으로는 방문 이유가 반복되지 않고, 이벤트만으로는 지역 사업자의 일상 매출과 주민 편익이 남지 않는다.','서비스 전략은 발견–방문–체류–소비–재방문의 여정을 지역 사업자와 문화 기획자의 운영 흐름에 연결해야 한다. 비즈니스 모델은 공간 임대료 외에도 공동 프로그램, 지역 상품 유통, 멤버십, 공공조달과 성과기반 지원을 조합할 수 있다.','UX는 관광객·주민·상인의 서로 다른 목적을 같은 지역 서비스 안에서 연결하고, AX는 콘텐츠 일정·상점 정보·이동 데이터를 최신 상태로 유지하되 유명 거점에만 추천이 편중되지 않게 해야 한다.'],
    framework:{title:'원도심 콘텐츠 엔진 4단계',steps:[{name:'반복 행동 정의',desc:'행사 방문이 아니라 매주 다시 일어날 주민·방문자 행동을 정한다.'},{name:'콘텐츠 공급망 설계',desc:'기획자, 상인, 창작자, 공공기관의 제작·승인·정산 흐름을 연결한다.'},{name:'거점과 상권 연결',desc:'프로그램 참여가 주변 이동과 구매로 이어지는 동선과 혜택을 만든다.'},{name:'운영 데이터 환류',desc:'체류·재방문·상점 참여 데이터를 다음 편성과 지원 결정에 반영한다.'}]},
    tips:['개장 행사보다 개장 후 12개월의 콘텐츠 캘린더와 담당자·예산을 먼저 작성하세요.'],question:'지원이 끝난 뒤에도 매주 새로운 방문 이유를 만드는 주체와 수익은 무엇인가?',
    checklist:['주민의 반복 이용 이유가 있는가?','콘텐츠 제작·승인·정산 역할이 명확한가?','거점 방문이 주변 상권으로 이어지는가?','소규모 상인도 참여하기 쉬운가?','운영 데이터가 다음 편성에 쓰이는가?'],metrics:['재방문율','프로그램 후 상권 이동률','참여 상점 유지율','자체 수익 비중'],takeaways:['준공보다 반복 콘텐츠를 먼저 설계한다','문화와 상권의 운영 흐름을 연결한다','방문자 수보다 재방문과 지역 내 순환을 측정한다'],keywords:['원도심재생','상권디자인','콘텐츠운영'],
    sources:[{name:'대한민국 정책브리핑 — 원도심 RE:CORE 프로젝트',url:'https://www.korea.kr/briefing/pressReleaseView.do?newsId=156780630&pWise=main&pWiseMain=L5'},{name:'OECD — Area-based Initiatives to Transform Neighbourhoods',url:'https://www.oecd.org/en/events/2026/02/launch-of-area-based-initiatives-to-transform-neighbourhoods.html'}]
  },
  {
    id:'food-safety-ai-needs-an-evidence-chain',publishedAt:'2026-09-24',sourcePublishedAt:'2026-09-18',category:'Food & Livestock',region:'Global',readTime:8,
    title:'식품 안전 AI의 핵심은 예측이 아니라 ‘증거 사슬’이다',dek:'검사·사고·회수 업무를 빠르게 하면서 사람의 판단을 지키는 서비스 설계.',
    summary:'영국 식품기준청은 검사 기록과 사고 데이터를 AI로 연결하는 실증을 진행하고 있다. 식품 안전처럼 오류 비용이 큰 영역에서 AI는 최종 판단자가 아니라 흩어진 증거를 빠르게 정리하고 위험 신호를 우선순위화하는 조력자로 설계돼야 한다.',
    body:['식품 안전 업무는 현장 검사, 실험실 결과, 사업자 기록, 민원과 회수 이력처럼 형식이 다른 증거를 다룬다. 음성 기록과 AI 분석은 행정 부담을 줄일 수 있지만 원본, 수정 이력, 판단 근거가 끊기면 빠른 결과가 오히려 책임성을 약화시킨다.','서비스 전략은 검사–분석–경보–조치–회수의 전체 흐름에서 AI가 시간을 줄일 부분과 전문가가 책임질 부분을 분리해야 한다. 새로운 비즈니스 모델은 단순 분석 도구가 아니라 규제기관·생산자·유통사가 공유하는 추적성과 사고 대응 서비스로 확장될 수 있다.','UX는 위험 점수보다 근거 문서와 누락 정보를 먼저 보여주고, AX는 모델이 만든 요약과 사람이 확인한 사실을 구분해 보존해야 한다. 회수 판단과 사업자 제재처럼 고위험 결정에는 반드시 사람 승인과 이의제기 경로가 필요하다.'],
    framework:{title:'식품 안전 증거 사슬 4단계',steps:[{name:'원본과 변환 분리',desc:'음성·문서 원본과 AI 전사·요약·분류 결과를 연결해 보존한다.'},{name:'위험 신호 우선순위화',desc:'점수와 함께 근거, 누락 데이터, 확신도와 유사 사고를 제시한다.'},{name:'전문가 승인',desc:'회수·제재·공개 경보는 지정 전문가가 증거를 검토한 뒤 실행한다.'},{name:'조치 결과 환류',desc:'오탐, 미탐, 실제 피해와 대응 시간을 다음 규칙과 모델 평가에 반영한다.'}]},
    tips:['AI 요약만 저장하지 말고 모든 문장이 어떤 원본 증거에서 왔는지 추적 가능하게 만드세요.'],question:'이 위험 판단을 법적·현장 책임자가 원본 증거까지 거슬러 검증할 수 있는가?',
    checklist:['원본과 AI 생성 정보가 구분되는가?','누락·불확실성을 표시하는가?','고위험 조치에 사람 승인이 있는가?','사업자의 정정·이의제기 경로가 있는가?','오탐과 미탐을 지속 측정하는가?'],metrics:['검사 기록 처리시간','경보 근거 추적 성공률','오탐·미탐률','사고 인지부터 조치까지 시간'],takeaways:['AI 결과보다 근거 추적성을 우선한다','고위험 판단은 사람에게 남긴다','조치 결과를 모델과 운영 개선에 함께 쓴다'],keywords:['식품안전AI','증거사슬','규제서비스'],
    sources:[{name:'UK Food Standards Agency — Progress Against Economic Growth Goals',url:'https://www.gov.uk/government/publications/food-standards-agency-business-committee-meeting-september-2026/progress-against-the-economic-growth-goals-fsa-business-committee'},{name:'UK Food Standards Agency — AI in Food Safety Assurance',url:'https://www.gov.uk/government/publications/report-artificial-intelligence-applications'}]
  },
  {
    id:'ai-speed-is-outgrowing-accessibility-qa',publishedAt:'2026-09-24',sourcePublishedAt:'2026-09-16',category:'UX & Service Design',region:'Global',readTime:7,
    title:'AI가 제작을 빠르게 할수록 접근성 QA는 더 앞에 있어야 한다',dek:'생성 속도와 검증 속도의 격차를 줄이는 디자인 운영 모델.',
    summary:'2026 디지털 접근성 조사에서는 AI가 기획·디자인·개발 속도를 높였지만 QA와 테스트의 가속은 상대적으로 더뎠다. 결과물을 더 빨리 만드는 조직일수록 접근성을 마지막 검사 단계에 두면 검증 부채가 쌓인다. 접근성은 생성 규칙, 조달, 디자인 시스템과 사용자 테스트에 분산돼야 한다.',
    body:['AI 도구는 화면과 콘텐츠 변형을 대량으로 만들지만 접근성팀의 검토 시간은 같은 속도로 늘지 않는다. 샘플 몇 개를 수동 검사하는 방식은 변형된 상태와 언어, 오류 상황을 놓치기 쉽다.','서비스 전략은 접근성을 전문팀의 마지막 승인에서 전 팀이 사용하는 품질 플랫폼으로 전환해야 한다. 규칙이 포함된 디자인 시스템, 자동 테스트, 실제 사용자 패널과 접근성 적합성 문서를 연결하는 서비스는 조달과 운영까지 포함하는 새로운 전문 영역이 된다.','UX는 핵심 과업의 성공과 인지 부하를 실제 사용자로 검증하고, AX는 생성 전에 금지 패턴과 최소 규칙을 적용해야 한다. 자동검사 통과율만으로 품질을 선언하지 말고 사용자 과업 실패와 회귀 오류까지 함께 관리해야 한다.'],
    framework:{title:'AI 시대 접근성 QA 4단계',steps:[{name:'기획 조건에 포함',desc:'핵심 과업, 장애 상황과 대체 경로를 요구사항에 넣는다.'},{name:'생성 규칙으로 제한',desc:'구조, 대비, 초점, 알림과 언어 규칙을 디자인 시스템에 적용한다.'},{name:'자동·사람 검증 결합',desc:'대량 자동검사와 장애 사용자 과업 테스트의 역할을 분리한다.'},{name:'회귀를 운영 지표화',desc:'릴리스마다 다시 생기는 오류와 해결 시간을 팀 단위로 추적한다.'}]},
    tips:['AI로 생성한 변형 수만큼 수동 검수를 늘리려 하지 말고, 생성 전 제약과 실패 시 기본 패턴을 먼저 만드세요.'],question:'팀의 생성 속도가 두 배가 되어도 접근성 실패가 함께 늘지 않는 운영 장치는 무엇인가?',
    checklist:['접근성이 기획 요구사항에 포함되는가?','생성 도구에 금지 패턴이 있는가?','자동검사가 CI에 연결되는가?','장애 사용자 테스트가 정기적인가?','조달 문서가 실제 사용자 영향과 연결되는가?'],metrics:['접근성 회귀 오류율','핵심 과업 성공률','자동검사 해결시간','사용자 테스트 발견사항 재발률'],takeaways:['접근성을 마지막 QA에서 생성 규칙으로 옮긴다','자동검사와 사용자 테스트를 결합한다','제작 속도와 검증 부채를 함께 측정한다'],keywords:['접근성QA','AIDesignOps','서비스디자인'],
    sources:[{name:'Level Access — 2026 State of Digital Accessibility',url:'https://www.levelaccess.com/news/press-releases-news/level-access-research-finds-broad-ai-adoption-isnt-closing-the-accessibility-gap/'},{name:'Section508.gov — Accessibility Updates, September 2026',url:'https://www.section508.gov/whats-new/'}]
  }
];
const existing=new Set(data.articles.map(a=>a.id));
const fresh=articles.filter(a=>!existing.has(a.id));
if(!fresh.length){console.log('No new articles: today\'s five IDs already exist.');process.exit(0);}
if(fresh.length!==articles.length) throw new Error('Partial duplicate detected; refusing a mixed append.');
data.updatedAt='2026-09-24'; data.articles.push(...fresh);
writeFileSync(file,`${JSON.stringify(data,null,2)}\n`);
console.log(`Added ${fresh.length} daily insights for 2026-09-24.`);
