import { readFileSync, writeFileSync } from 'node:fs';
const file='data/insights.json';
const data=JSON.parse(readFileSync(file,'utf8'));
const articles=[
  {
    id:'smart-factory-value-is-replication-speed',publishedAt:'2026-09-28',sourcePublishedAt:'2026-09-27',category:'Industry & Manufacturing',region:'Global',readTime:8,
    title:'스마트팩토리의 경쟁력은 파일럿 수가 아니라 ‘복제 속도’다',dek:'한 공장의 성공을 여러 현장으로 옮기는 산업 AX 운영모델.',
    summary:'세계경제포럼은 선도 공장의 개별 성공보다 학습을 공장 네트워크 전체로 얼마나 빠르게 확산하는지가 핵심이라고 짚었다. 제조 AX는 기술 데모가 아니라 공통 기반과 현장별 적응을 동시에 운영하는 서비스가 돼야 한다.',
    body:['한 공장에서 높은 성과를 낸 AI도 설비, 데이터 품질, 작업 표준과 숙련이 다른 현장에서는 그대로 작동하지 않는다. 성공 사례를 제품처럼 배포하면 현장 수정과 우회가 늘고 중앙 조직은 실패 원인을 알기 어렵다.','서비스 전략은 공통 지표·데이터 계약·안전 기준을 바닥으로 두고, 각 공장이 제한된 범위에서 실험하는 이중 구조를 가져야 한다. 비즈니스 모델도 일회성 구축에서 재사용 가능한 모듈, 현장 적응 코칭과 성과 보증을 묶은 확산 서비스로 이동할 수 있다.','UX는 작업자가 모델의 권고와 현장 차이를 기록하게 하고, AX는 그 차이를 오류가 아니라 다음 공장 배포의 학습 데이터로 축적해야 한다. 조직은 최초 ROI뿐 아니라 두 번째, 세 번째 현장으로 옮기는 시간과 비용을 관리해야 한다.'],
    framework:{title:'공장 간 확산 4단계',steps:[{name:'공통 기반',desc:'지표·데이터·안전·책임 규칙을 표준화한다.'},{name:'현장 차이 지도',desc:'설비, 작업, 인력과 예외의 차이를 먼저 기록한다.'},{name:'모듈형 적응',desc:'핵심은 재사용하고 현장 변수만 조정한다.'},{name:'학습 환류',desc:'수정과 실패를 다음 배포 패키지에 반영한다.'}]},
    tips:['첫 공장의 최고 성과보다 다음 공장이 같은 수준에 도달하는 시간을 측정하세요.'],question:'이 성공을 다른 공장으로 옮길 때 무엇이 표준이고 무엇을 현장에서 다시 결정해야 하는가?',
    checklist:['공통 성과지표가 있는가?','현장 차이를 배포 전에 조사하는가?','작업자가 수정 이유를 남길 수 있는가?','안전 중단 기준이 공통인가?','재배포 비용과 시간이 측정되는가?'],metrics:['공장 간 배포기간','재사용 모듈 비율','현장 수정률','두 번째 공장 ROI 도달시간'],takeaways:['파일럿 성과를 네트워크 학습으로 전환한다','표준과 현장 자율을 함께 설계한다','복제 시간과 비용을 핵심 성과로 본다'],keywords:['스마트팩토리','산업AX','ScaleAI'],
    sources:[{name:'World Economic Forum — How manufacturers can scale AI across every factory',url:'https://www.weforum.org/stories/manufacturing-and-value-chains/ai-factories-manufacturing/'},{name:'EIT — AI & Robotics Community and FactoryX',url:'https://www.eit.europa.eu/news-events/news/eit-ai-community-eit-ai-robotics-community'}]
  },
  {
    id:'regional-physical-ai-needs-a-demand-network',publishedAt:'2026-09-28',sourcePublishedAt:'2026-09-22',category:'Place & Public',region:'Korea',readTime:8,
    title:'지역 피지컬 AI 거점은 장비가 아니라 ‘수요 네트워크’여야 한다',dek:'지방정부·금융·산업·대학을 실제 현장 과제로 연결하는 지역 혁신 서비스.',
    summary:'국내 피지컬 AI 지역거점 논의가 확대되고 있다. 그러나 장비와 센터를 먼저 구축하면 지역 기업의 실제 문제와 분리될 위험이 있다. 거점은 지역의 산업 수요를 발굴하고 실증·조달·금융·인재를 연결하는 운영 서비스가 되어야 한다.',
    body:['로봇과 AI 인프라는 눈에 보이지만 기업이 자동화할 업무, 현장 데이터와 안전 책임은 쉽게 보이지 않는다. 특히 중소기업은 실증 이후 구매와 유지 비용을 감당하지 못해 데모가 사업화로 이어지지 않을 수 있다.','서비스 전략은 지역 산업별 반복 난제를 모아 공동 과제로 만들고 공급기업, 대학, 금융과 공공조달을 단계별로 연결해야 한다. 거점의 비즈니스 모델은 공간 임대보다 문제 진단, 공동 실증, 성과 기반 도입과 유지운영 수익에 가깝다.','UX는 기업이 기술명이 아닌 현장 문제로 참여하게 하고, AX는 작업자 안전과 역할 변화를 실증 초기부터 검증해야 한다. 지역 성과는 장비 수보다 도입 기업의 지속 사용과 지역 공급망 매출로 측정해야 한다.'],
    framework:{title:'지역 피지컬 AI 수요망 4단계',steps:[{name:'현장 난제 수집',desc:'지역 기업의 반복 문제를 업무 단위로 모은다.'},{name:'공동 실증 설계',desc:'수요기업·공급기업·작업자가 성공 기준을 합의한다.'},{name:'도입 금융 연결',desc:'실증 이후 구매·리스·성과보상 경로를 준비한다.'},{name:'지역 학습 축적',desc:'안전·운영 지식을 다음 기업에 재사용한다.'}]},
    tips:['장비 가동률보다 실증 6개월 뒤 현장에서 계속 쓰이는 비율을 공개하세요.'],question:'이 거점은 어떤 지역 기업의 어떤 업무 문제를 실제 구매 가능한 서비스로 바꾸는가?',
    checklist:['지역 수요가 기술보다 먼저 정의됐는가?','작업자가 실증에 참여하는가?','도입 금융이 연결되는가?','안전과 고용 영향을 보는가?','지역 공급기업 매출로 이어지는가?'],metrics:['실증 후 지속사용률','도입 전환기간','지역 공급망 매출','작업자 안전·만족도'],takeaways:['거점을 시설이 아닌 수요 연결 서비스로 본다','실증과 구매 금융을 동시에 설계한다','지역 내 지속 사용과 매출을 성과로 삼는다'],keywords:['피지컬AI','지역산업','혁신거점'],
    sources:[{name:'과학기술정보통신부 — 피지컬 AI 지역거점 발전 포럼',url:'https://english.msit.go.kr/'},{name:'EIT — AI & Robotics Community and FactoryX',url:'https://www.eit.europa.eu/news-events/news/eit-ai-community-eit-ai-robotics-community'}]
  },
  {
    id:'heritage-media-art-needs-place-memory',publishedAt:'2026-09-28',sourcePublishedAt:'2026-09-01',category:'Entertainment & Culture',region:'Korea',readTime:7,
    title:'지역 미디어아트는 포토존보다 ‘장소의 기억’을 남겨야 한다',dek:'AI·AR·야간 콘텐츠를 지역 서사와 재방문 경제로 연결하는 문화 경험 전략.',
    summary:'철원 노동당사처럼 역사적 장소를 미디어아트로 재해석하는 프로젝트가 늘고 있다. 기술적 장관만 만들면 관람객은 이미지를 소비하고 떠난다. 지역 문화 경험은 장소의 역사, 주민의 기억과 주변 상권을 한 여정으로 연결해야 한다.',
    body:['프로젝션과 AI 이미지는 강한 첫인상을 만들지만 어디서나 복제 가능한 연출은 장소의 고유성을 약화시킨다. 역사적 상처를 배경으로만 소비하면 주민에게는 소외와 피로가 남을 수 있다.','서비스 전략은 방문 전 맥락 이해, 현장 감각 경험, 주민 해설, 주변 이동과 방문 후 기록을 연결해야 한다. 비즈니스 모델은 입장권보다 지역 해설자·상점·창작자와 수익을 나누는 야간 코스, 시즌 아카이브와 교육 프로그램으로 확장할 수 있다.','UX는 관람객에게 다양한 해석 경로와 조용히 머무를 선택권을 제공하고, AX는 개인화된 서사를 만들더라도 역사적 사실과 생성 콘텐츠를 구분해야 한다. 주민은 데이터 제공자가 아니라 편집권을 가진 공동 제작자여야 한다.'],
    framework:{title:'장소 기억 경험 4단계',steps:[{name:'기억 수집',desc:'주민 구술과 기록을 다층적으로 모은다.'},{name:'해석 경로',desc:'연령과 관심에 따라 다른 서사 진입점을 만든다.'},{name:'지역 연결',desc:'관람 동선을 상점·교통·해설과 잇는다.'},{name:'기억 환류',desc:'방문 기록과 수익을 지역 아카이브에 되돌린다.'}]},
    tips:['체류시간만 보지 말고 관람 후 장소의 의미를 정확히 회상하는지 조사하세요.'],question:'이 기술을 제거해도 이 장소에서만 가능한 이야기와 관계가 남는가?',
    checklist:['주민이 편집 과정에 참여했는가?','사실과 생성 이미지가 구분되는가?','접근성과 휴식 동선이 있는가?','지역 상권과 수익이 연결되는가?','방문 기록의 권리가 명확한가?'],metrics:['장소 의미 회상률','지역 상권 연계율','주민 참여·수익배분율','시즌 재방문율'],takeaways:['기술보다 장소 고유의 기억을 중심에 둔다','주민에게 공동 편집권을 부여한다','관람을 지역의 체류 경제와 연결한다'],keywords:['미디어아트','장소경험','지역문화'],
    sources:[{name:'문화체육관광부 — 2026 국가유산 미디어아트 철원 노동당사',url:'https://www.mcst.go.kr/site/s_culture/festival/festivalList.jsp?pCurrentPage=10&pMenuCD=&pOrder=&pSearchType=&pSearchWord=&pSeason=1&pSeq=4784&pSido='},{name:'EIT Culture & Creativity — AI & Robotics Community',url:'https://www.eit.europa.eu/news-events/news/eit-ai-community-eit-ai-robotics-community'}]
  },
  {
    id:'sme-ai-adoption-needs-a-confidence-service',publishedAt:'2026-09-28',sourcePublishedAt:'2026-04-01',category:'AX',region:'Korea · Global',readTime:8,
    title:'중소기업 AX에 필요한 것은 도구 목록이 아니라 ‘도입 확신 서비스’다',dek:'진단·실증·보안·금융을 한 경로로 묶어 AI 구매 실패를 줄이는 방법.',
    summary:'OECD는 중소기업이 AI의 잠재력을 알면서도 복잡성, 책임, 보안과 비용 때문에 도입을 주저한다고 본다. 국내 바우처도 공급과 수요를 연결하지만, 실제 성과를 내려면 기업이 문제를 고르고 검증하며 운영 역량을 쌓는 전 과정이 필요하다.',
    body:['솔루션 카탈로그에서 제품을 고르게 하면 기술 이해가 낮은 기업일수록 과장된 약속과 잠금 효과에 취약하다. 도입 실패의 원인은 모델 성능보다 데이터 준비, 업무 책임, 보안과 직원 수용성에서 자주 발생한다.','서비스 전략은 업무 진단, 작은 유료 실증, 보안 점검, 성과 검증과 확산 금융을 하나의 단계형 서비스로 묶어야 한다. 공급자는 라이선스보다 성과 측정과 운영 지원을 포함한 구독·성과보상 모델을 제시할 수 있다.','UX는 경영자와 실무자가 비용·위험·필요 변화를 비교하게 하고, AX는 자동화 대상 업무와 사람 승인 지점을 함께 설계해야 한다. 정부 지원은 구매액보다 실증 후 계속 사용하는 기업과 조직 역량의 증가를 평가해야 한다.'],
    framework:{title:'중소기업 도입 확신 4단계',steps:[{name:'문제 진단',desc:'도구가 아니라 비용이 큰 실제 업무를 찾는다.'},{name:'제한 실증',desc:'작은 데이터와 되돌릴 수 있는 범위에서 검증한다.'},{name:'운영 준비',desc:'보안·책임·교육과 사람 승인 기준을 만든다.'},{name:'성과 기반 확산',desc:'검증된 가치에 맞춰 금융과 계약을 확장한다.'}]},
    tips:['지원금 집행률보다 실증 종료 6개월 뒤 유료 사용과 업무 개선이 남았는지 보세요.'],question:'이 기업은 AI를 구매할 준비가 되었는가, 아니면 먼저 업무와 데이터 운영을 바꿔야 하는가?',
    checklist:['업무 문제와 기준선이 있는가?','철회 가능한 실증 범위인가?','보안과 데이터 권리가 명확한가?','직원 교육과 승인 기준이 있는가?','잠금과 전환 비용을 비교했는가?'],metrics:['실증 후 유료전환율','6개월 지속사용률','업무시간·오류 감소','직원 활용역량 변화'],takeaways:['도구 매칭을 도입 확신 서비스로 확장한다','구매 전에 업무·데이터 준비도를 검증한다','지원 성과를 지속 사용과 역량으로 측정한다'],keywords:['중소기업AX','AI바우처','도입전략'],
    sources:[{name:'OECD — 7th Digital for SME Roundtable',url:'https://www.oecd.org/en/events/2026/04/7th-digital-for-sme-d4sme-roundtable.html'},{name:'과학기술정보통신부 — AI 청년창업기업 동반성장 바우처',url:'https://www.msit.go.kr/bbs/view.do?bbsSeqNo=100&nttSeqNo=3186729&sCode=user'}]
  },
  {
    id:'public-employment-ai-needs-human-continuity',publishedAt:'2026-09-28',sourcePublishedAt:'2026-06-01',category:'UX & Service Design',region:'Global',readTime:8,
    title:'고용서비스 AI의 품질은 답변보다 ‘사람에게 이어지는 방식’에서 드러난다',dek:'원스톱 포털과 상담사를 경쟁시키지 않고 하나의 전환 여정으로 설계하는 법.',
    summary:'OECD의 2026 공공고용서비스 조사에서는 원스톱 포털과 AI 활용의 성숙도가 국가별로 크게 다르다. 구직자는 정보만 필요한 것이 아니라 자신의 경력·생활 제약·불안을 해석할 지원이 필요하므로 자동화와 사람 상담 사이의 맥락 연속성이 핵심이다.',
    body:['챗봇이 공고를 빠르게 찾더라도 구직자가 왜 탈락하는지, 어떤 훈련이 현실적인지는 단순 검색으로 해결되지 않는다. 잘못된 자동 분류는 취약한 사람을 반복 입력과 기관 순환으로 밀어낼 수 있다.','서비스 전략은 정보 탐색, 자가진단, 상담, 훈련, 지원과 취업 후 적응을 하나의 상태로 연결해야 한다. 새로운 운영모델은 AI가 반복 행정을 줄이고 상담사가 복합 사례와 동기 지원에 더 많은 시간을 쓰는 협업 구조다.','UX는 자동 추천의 이유와 대안을 보여주고 상담 전환 시 대화와 제출 자료를 보존해야 한다. AX는 취업률만 최적화하지 않고 일자리의 유지, 임금, 이동·돌봄 제약과 이용자의 선택권까지 반영해야 한다.'],
    framework:{title:'AI-사람 연속 고용서비스 4단계',steps:[{name:'필요 구분',desc:'정보, 행정, 상담과 위기 지원을 구분한다.'},{name:'설명 가능한 추천',desc:'직무·훈련 추천의 근거와 대안을 보여준다.'},{name:'맥락 있는 인계',desc:'사람 상담으로 넘어갈 때 기록과 목적을 보존한다.'},{name:'취업 후 학습',desc:'유지와 적응 결과를 다음 추천에 반영한다.'}]},
    tips:['챗봇 해결률이 높아도 상담 전환 후 같은 설명을 반복하는 비율이 높다면 서비스는 연결되지 않은 것입니다.'],question:'AI가 해결하지 못한 순간 이용자는 맥락을 잃지 않고 적절한 사람에게 이어지는가?',
    checklist:['사람 상담 전환 기준이 있는가?','추천 이유와 대안이 보이는가?','인계 시 기록이 보존되는가?','취약 이용자의 오프라인 경로가 있는가?','취업 유지와 질을 추적하는가?'],metrics:['반복 설명률','상담 전환 성공률','첫 접촉 해결률','취업 6개월 유지율'],takeaways:['자동화와 상담을 하나의 여정으로 설계한다','추천보다 맥락 있는 인계를 중시한다','취업 건수 외 일자리의 지속성을 측정한다'],keywords:['고용서비스','HumanHandoff','공공UX'],
    sources:[{name:'OECD — The World of Public Employment Services 2026',url:'https://www.oecd.org/content/dam/oecd/en/publications/reports/2026/06/the-world-of-public-employment-services-2026_781934e6/4aebd080-en.pdf'},{name:'OECD — Digital Government Outlook 2026',url:'https://www.oecd.org/en/publications/digital-government-outlook_0496b2bc-en/full-report/adopting-and-governing-ai-in-government_7ef312a9.html'}]
  }
];
const existing=new Set(data.articles.map(a=>a.id));
const fresh=articles.filter(a=>!existing.has(a.id));
if(!fresh.length){console.log("No new articles: today's five IDs already exist.");process.exit(0);}
if(fresh.length!==articles.length)throw new Error('Partial duplicate detected; refusing a mixed append.');
data.updatedAt='2026-09-28';data.articles.push(...fresh);writeFileSync(file,`${JSON.stringify(data,null,2)}\n`);
console.log(`Added ${fresh.length} daily insights for 2026-09-28.`);
