import { readFileSync, writeFileSync } from 'node:fs';
const file='data/insights.json';
const data=JSON.parse(readFileSync(file,'utf8'));
const articles=[
  {
    id:'urban-platform-needs-a-common-service-language',publishedAt:'2026-09-30',sourcePublishedAt:'2026-09-29',category:'Place & Public',region:'Asia · Global',readTime:8,
    title:'도시 플랫폼의 핵심은 통합 앱이 아니라 ‘공통 서비스 언어’다',dek:'도시마다 다른 제도와 운영을 연결하면서 지역성을 지키는 디지털 공공 인프라.',
    summary:'인도의 국가 도시 디지털 미션은 도시정부의 디지털 전환과 공통 플랫폼을 추진한다. 도시 서비스를 한 앱에 모으는 것만으로는 주민 경험이 연결되지 않는다. 주소, 민원 상태, 자격, 결제와 동의가 부서와 도시를 넘어 같은 의미로 작동해야 한다.',
    body:['도시마다 시스템과 용어가 다르면 시민은 같은 정보를 반복 제출하고 운영자는 수작업으로 데이터를 맞춘다. 반대로 중앙 표준을 너무 강하게 적용하면 지역의 언어, 절차와 취약계층 지원 방식이 사라진다.','서비스 전략은 화면을 통일하기보다 주민·사업자·공무원이 공유하는 핵심 객체와 상태, 인계 규칙을 표준화해야 한다. 비즈니스 모델은 앱 구축에서 상호운용 API, 품질 인증, 지역 모듈과 지속 운영을 제공하는 도시 서비스 인프라로 이동할 수 있다.','UX는 시민이 어느 기관에 있든 하나의 진행 상태를 보게 하고, AX는 기관 간 추천과 자동 처리를 하되 권한·동의·오류 수정 기록을 남겨야 한다. 지역정부가 표준 위에 자체 서비스를 만들 수 있는 확장성도 필수다.'],
    framework:{title:'도시 공통언어 4단계',steps:[{name:'핵심 객체 정의',desc:'사람·장소·신청·자격·결제의 공통 의미를 정한다.'},{name:'상태와 인계 표준',desc:'접수부터 완료까지 상태와 기관 간 책임을 연결한다.'},{name:'지역 확장',desc:'언어·제도·지원방식은 모듈로 추가하게 한다.'},{name:'시민 통제',desc:'동의·열람·수정과 이력을 한곳에서 제공한다.'}]},
    tips:['통합된 서비스 수보다 반복 입력과 기관 간 재문의가 실제로 줄었는지 측정하세요.'],question:'도시와 부서가 달라져도 시민의 목적과 진행 상태가 끊기지 않는가?',
    checklist:['공통 데이터 의미가 합의됐는가?','기관 간 책임 상태가 연결되는가?','지역 언어와 예외를 지원하는가?','동의와 수정 이력이 보이는가?','표준 잠금 없이 모듈을 교체할 수 있는가?'],metrics:['반복입력 감소율','기관 간 인계 성공률','민원 재문의율','지역 모듈 재사용률'],takeaways:['도시 통합을 앱이 아닌 서비스 언어로 정의한다','표준과 지역 자율성을 함께 설계한다','시민의 상태·동의·수정권을 연결한다'],keywords:['도시플랫폼','공공서비스','UrbanTech'],
    sources:[{name:'India Ministry of Housing and Urban Affairs — National Urban Digital Mission',url:'https://www.nudm.mohua.gov.in/'},{name:'UN-Habitat — World Cities Report 2026',url:'https://unhabitat.org/sites/default/files/2026/05/wcr_2026.pdf'}]
  },
  {
    id:'urban-regeneration-needs-an-evidence-contract',publishedAt:'2026-09-30',sourcePublishedAt:'2026-07-17',category:'Place & Public',region:'Global',readTime:8,
    title:'도시재생은 비전보다 ‘증거 계약’으로 운영해야 한다',dek:'자부심·유동인구·매출·일자리의 변화를 사업 전부터 검증하는 방식.',
    summary:'영국 Towns Fund 최종 평가는 장소 자부심, 유동인구, 사업 성장, 웰빙과 고용을 혼합 방법으로 분석했다. 지역 프로젝트는 완공 사진보다 어떤 변화가 누구에게 생겼는지를 증명해야 한다. 평가를 사후 보고가 아니라 기획 단계의 계약으로 두는 이유다.',
    body:['광장, 문화시설과 상권 개선은 여러 변화가 동시에 일어나 인과를 말하기 어렵다. 방문객 수만 늘어도 기존 상인의 매출이나 주민의 삶이 개선되지 않을 수 있고 임대료 상승으로 밀려날 수도 있다.','서비스 전략은 착수 전에 대상 집단, 기준선, 비교지역과 변화 경로를 합의해야 한다. 새로운 비즈니스 모델은 설계·시공과 분리된 평가가 아니라 운영 실험, 데이터 수집과 개선을 묶은 성과 파트너십이다.','UX는 주민과 상인이 데이터를 이해하고 지표를 수정할 수 있게 해야 한다. AX는 이동·매출·민원 데이터를 결합하되 개인 감시를 피하고, 수치로 포착되지 않는 체감과 갈등을 질적 연구로 보완해야 한다.'],
    framework:{title:'도시재생 증거계약 4단계',steps:[{name:'변화 가설',desc:'공간 개입이 누구의 어떤 행동과 결과를 바꿀지 적는다.'},{name:'기준선과 비교',desc:'사업 전 상태와 비교할 장소·집단을 정한다.'},{name:'운영 실험',desc:'작은 개입을 시험하고 데이터와 현장 의견으로 조정한다.'},{name:'분배 효과',desc:'성과와 비용이 주민·상인·방문객에게 어떻게 나뉘는지 본다.'}]},
    tips:['유동인구 증가만 보고하지 말고 기존 상인의 매출·임대료·체류 이유를 함께 추적하세요.'],question:'이 사업의 성공을 누가 어떤 증거로 판단하며 부작용이 확인되면 무엇을 바꿀 수 있는가?',
    checklist:['사업 전 기준선이 있는가?','비교 가능한 지역·집단이 있는가?','기존 주민과 상인의 지표가 있는가?','질적 의견과 행동 데이터가 결합되는가?','결과에 따른 운영 수정 권한이 있는가?'],metrics:['지역 자부심 변화','기존 상인 매출·생존율','체류시간과 재방문','임대료·이주 변화'],takeaways:['평가를 완공 후 보고가 아닌 기획 조건으로 둔다','평균 성과보다 분배 효과를 본다','데이터와 주민 체감을 함께 사용한다'],keywords:['도시재생','성과평가','상권디자인'],
    sources:[{name:'UK Government — Towns Fund evaluation: final findings',url:'https://www.gov.uk/government/publications/towns-fund-evaluation-final-findings'},{name:'World Bank — Thailand’s Cities Can Be the Engine of Its High-Income Future',url:'https://www.worldbank.org/en/news/press-release/2026/09/22/thailand-s-cities-can-be-the-engine-of-its-high-income-future'}]
  },
  {
    id:'autonomous-logistics-needs-exception-experience',publishedAt:'2026-09-30',sourcePublishedAt:'2026-09-29',category:'Industry & Manufacturing',region:'Global',readTime:8,
    title:'자율 물류의 서비스 품질은 정상 운행보다 ‘예외 처리’에서 결정된다',dek:'무인 운송을 화주·관제·현장·수취인의 연속된 운영 경험으로 설계하기.',
    summary:'Kodiak과 IKEA는 장기간의 협력을 거쳐 2026년 무인 운송 서비스를 시작한다고 밝혔다. 자율주행 성능만으로 물류 서비스가 완성되지는 않는다. 지연, 도로 통제, 적재 이상과 인수 실패가 발생할 때 사람과 시스템이 책임을 넘겨받는 경험이 핵심이다.',
    body:['장거리 무인 운송은 정상 경로에서 효율적이지만 물류센터의 일정 변경, 현장 안전 규칙과 예외 서류를 함께 다뤄야 한다. 예외 상황에서 연락 주체와 권한이 불명확하면 자동화가 오히려 복구를 늦춘다.','서비스 전략은 차량, 관제, 창고, 화주와 수취인을 하나의 사건 대응 흐름으로 연결해야 한다. 비즈니스 모델은 주행거리 판매보다 정시성, 안전, 복구시간과 가시성을 보증하는 물류 운영 서비스로 확장할 수 있다.','UX는 각 역할에 필요한 상태와 다음 행동만 보여주고, AX는 위험 임계값에서 원격 지원이나 현장 사람에게 권한을 넘겨야 한다. 인계 과정과 판단 근거는 사고 조사와 학습을 위해 보존해야 한다.'],
    framework:{title:'자율물류 예외대응 4단계',steps:[{name:'예외 목록',desc:'도로·차량·적재·시설·인수 실패를 시나리오화한다.'},{name:'권한 지도',desc:'상황별 중단·우회·인계 결정권자를 지정한다.'},{name:'맥락 있는 인계',desc:'상태·근거·조치 기록을 사람에게 함께 전달한다.'},{name:'복구 학습',desc:'해결시간과 원인을 운영 규칙에 반영한다.'}]},
    tips:['무개입 주행거리와 함께 예외 발생 후 정상 운영까지 걸린 시간을 공개하세요.'],question:'차량이 스스로 해결하지 못하는 순간 누가 어떤 정보와 권한을 받아 서비스를 복구하는가?',
    checklist:['운영 예외가 충분히 정의됐는가?','중단과 우회 권한이 명확한가?','화주·창고 상태가 연결되는가?','사람 인계 시 맥락이 보존되는가?','사건이 학습과 계약에 반영되는가?'],metrics:['예외 복구시간','인계 성공률','정시 도착률','동일 예외 재발률'],takeaways:['자율주행을 전체 물류 서비스로 확장한다','예외 상황의 권한과 인계를 설계한다','거리보다 복구와 정시성을 보증한다'],keywords:['자율물류','산업AX','ExceptionDesign'],
    sources:[{name:'Kodiak AI — Kodiak and IKEA launch driverless service',url:'https://kodiak.ai/news'},{name:'European Trustworthy AI Association — Digital Factory Day',url:'https://www.trustworthy-ai-association.eu/news/digital-factory-day-september-29-2026/'}]
  },
  {
    id:'enterprise-agent-needs-service-continuity',publishedAt:'2026-09-30',sourcePublishedAt:'2026-09-19',category:'AX',region:'Global',readTime:8,
    title:'기업 에이전트의 신뢰는 지능보다 ‘서비스 연속성’에서 나온다',dek:'핵심 생산시스템에 AI를 넣을 때 변경·중단·복구를 함께 설계하는 AX.',
    summary:'기업용 AI 에이전트가 네트워크와 생산 운영에 들어가면서 모델 성능뿐 아니라 변경 중 무중단, 빠른 대응과 전체 수명주기 관리가 중요해지고 있다. AX는 대화형 화면이 아니라 운영이 흔들릴 때 업무를 지키는 서비스 체계다.',
    body:['핵심 시스템의 에이전트는 여러 도구와 권한을 사용하므로 작은 변경이 연쇄 장애를 만들 수 있다. 좋은 답변을 생성해도 실행 실패, 버전 충돌과 권한 오류가 잦으면 직원은 결국 수동 우회로 돌아간다.','서비스 전략은 모델, 데이터, 도구, 권한과 업무 절차의 변경을 하나의 릴리스 단위로 관리해야 한다. 새로운 비즈니스 모델은 라이선스가 아니라 가용성, 복구시간, 안전한 변경과 사람 전환을 보증하는 관리형 AX 서비스다.','UX는 직원에게 현재 자동화 상태와 장애 시 대체 경로를 알려야 한다. AX는 변경 전에 디지털 트윈이나 샌드박스에서 영향을 시험하고, 이상 시 권한 축소·이전 버전 복귀·사람 승인으로 자동 전환해야 한다.'],
    framework:{title:'에이전트 연속성 4단계',steps:[{name:'의존성 지도',desc:'모델·데이터·도구·권한과 업무 영향을 연결한다.'},{name:'변경 전 시뮬레이션',desc:'실제와 유사한 환경에서 실패와 부하를 시험한다.'},{name:'점진 배포',desc:'범위와 권한을 단계적으로 확대한다.'},{name:'자동 복구와 인계',desc:'이상 시 축소·복귀·사람 전환을 실행한다.'}]},
    tips:['답변 품질 외에 변경 후 업무중단 시간과 수동 우회 횟수를 핵심 AX 지표로 두세요.'],question:'에이전트나 연결 도구가 바뀌어도 핵심 업무를 멈추지 않게 하는 대체 경로는 무엇인가?',
    checklist:['업무 의존성이 가시화됐는가?','변경 전 통합 시험이 있는가?','권한을 점진적으로 확대하는가?','자동 복귀와 사람 전환이 있는가?','장애 경험이 다음 설계에 반영되는가?'],metrics:['업무 가용성','변경 실패율','평균 복구시간','수동 우회 발생률'],takeaways:['AX를 모델 품질에서 운영 연속성으로 확장한다','변경과 권한을 점진적으로 관리한다','가용성과 복구를 서비스 계약으로 만든다'],keywords:['EnterpriseAgent','AX운영','ServiceContinuity'],
    sources:[{name:'Huawei — O3 platform services for the agentic world',url:'https://www.huawei.com/en/news/2026/9/hc-service-enablement'},{name:'European Trustworthy AI Association — Digital Factory Day',url:'https://www.trustworthy-ai-association.eu/news/digital-factory-day-september-29-2026/'}]
  },
  {
    id:'field-built-ai-needs-an-internal-product-path',publishedAt:'2026-09-30',sourcePublishedAt:'2026-09-22',category:'UX & Service Design',region:'Korea',readTime:8,
    title:'현장형 AI가 조직 혁신이 되려면 ‘내부 제품화 경로’가 필요하다',dek:'직원이 만든 작은 도구를 검증·배포·운영하는 조직 서비스 디자인.',
    summary:'관세청은 현장 지식을 가진 AI 분석관이 직접 업무 프로그램을 만들고 본청이 코드 보완, 배포와 매뉴얼 제작을 지원해 성과를 확산한다고 밝혔다. 현장 개발은 문제 적합도가 높지만 개인 도구에 머물면 보안과 유지보수 위험이 커진다.',
    body:['현장 직원은 반복 업무와 예외를 가장 잘 알지만 제품 개발과 운영 책임까지 맡기 어렵다. 반대로 중앙 개발팀만 주도하면 요구사항이 늦게 전달되고 실제 업무의 미묘한 판단이 빠질 수 있다.','서비스 전략은 아이디어 제안, 제한 실험, 보안·법무 검토, 코드 보완, 배포와 운영 담당자 지정까지 내부 제품화 파이프라인을 만들어야 한다. 조직은 이를 직원 혁신 교육과 공통 컴포넌트 플랫폼으로 서비스할 수 있다.','UX는 개발자가 아닌 직원도 문제와 성공 기준을 명확히 표현하게 하고, AX는 생성 코드와 데이터 사용을 자동 점검하되 최종 업무 책임을 흐리지 않아야 한다. 만든 사람의 기여를 인정하면서 조직 차원의 소유권과 유지 책임을 정해야 한다.'],
    framework:{title:'현장 AI 제품화 4단계',steps:[{name:'문제 브리프',desc:'업무 시간·오류·예외와 사용자를 구체적으로 정의한다.'},{name:'안전한 실험',desc:'비식별·샘플 데이터와 제한 권한으로 효용을 검증한다.'},{name:'전문 검증',desc:'보안·법무·접근성·코드 품질을 중앙팀이 보완한다.'},{name:'운영 이관',desc:'소유자, 지원, 버전과 폐기 기준을 정하고 배포한다.'}]},
    tips:['아이디어 수보다 현장 도구가 안전한 공용 제품으로 전환된 비율과 유지 비용을 보세요.'],question:'직원의 좋은 아이디어가 개인 파일을 넘어 누가 책임지는 조직 서비스가 되는 경로가 있는가?',
    checklist:['문제와 기준선이 문서화됐는가?','실험 데이터와 권한이 제한되는가?','전문 검증을 받을 수 있는가?','기여와 조직 소유권이 명확한가?','운영·지원·폐기 책임자가 있는가?'],metrics:['실험에서 제품 전환율','현장 업무시간 감소','보안·품질 결함률','6개월 유지사용률'],takeaways:['현장 개발과 중앙 거버넌스를 연결한다','아이디어부터 운영까지 내부 제품 경로를 만든다','직원 기여와 장기 유지 책임을 함께 정의한다'],keywords:['현장형AI','내부제품','조직AX'],
    sources:[{name:'대한민국 정책브리핑 — 관세청 현장형 인공지능 혁신',url:'https://m.korea.kr/briefing/pressReleaseView.do?newsId=156782924&pWiseMinistry=ministryNews&repCode=B00003&repCodeType=%EC%A0%95%EB%B6%80%EB%B6%80%EC%B2%98'},{name:'OECD — Digital Government Outlook 2026',url:'https://www.oecd.org/en/publications/digital-government-outlook_0496b2bc-en/full-report/adopting-and-governing-ai-in-government_7ef312a9.html'}]
  }
];
const existing=new Set(data.articles.map(a=>a.id));const fresh=articles.filter(a=>!existing.has(a.id));
if(!fresh.length){console.log("No new articles: today's five IDs already exist.");process.exit(0);}
if(fresh.length!==articles.length)throw new Error('Partial duplicate detected; refusing a mixed append.');
data.updatedAt='2026-09-30';data.articles.push(...fresh);writeFileSync(file,`${JSON.stringify(data,null,2)}\n`);
console.log(`Added ${fresh.length} daily insights for 2026-09-30.`);
