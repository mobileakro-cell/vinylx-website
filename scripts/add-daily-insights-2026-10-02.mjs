import { readFileSync, writeFileSync } from 'node:fs';
const file='data/insights.json';
const data=JSON.parse(readFileSync(file,'utf8'));
const articles=[
  {
    id:'public-ai-procurement-needs-usage-governance',publishedAt:'2026-10-02',sourcePublishedAt:'2026-09-10',category:'AX',region:'Global',readTime:8,
    title:'공공 AI의 종량제는 가격모델이 아니라 ‘사용 거버넌스’다',dek:'전 정부 단위 AI 계약에서 비용·품질·위험을 업무별로 통제하는 방법.',
    summary:'미국 GSA의 OneGov AI 계약은 2026년 10월부터 할인된 종량제 방식으로 연방기관의 AI 접근을 확대한다. 중앙계약이 도입 장벽을 낮추지만 사용량이 곧 가치가 되지는 않는다. 어떤 업무가 어떤 모델을 왜 사용했는지 관리하는 서비스가 필요하다.',
    body:['종량제는 작은 실험을 쉽게 하지만 부서별 중복 사용, 무분별한 프롬프트와 예상치 못한 비용을 만들 수 있다. 같은 토큰도 초안 작성과 권리 결정 지원에서는 위험과 가치가 전혀 다르다.','서비스 전략은 모델 접근권을 업무 카탈로그, 데이터 등급, 승인 기준과 성과 지표에 연결해야 한다. 새로운 비즈니스 모델은 좌석 판매보다 업무별 비용·품질·위험을 최적화하는 FinOps형 AX 운영 서비스다.','UX는 공무원에게 비용과 데이터 취급 수준, 결과 검토 책임을 작업 시점에 알려야 한다. AX는 민감 데이터나 고위험 업무를 자동 감지해 안전한 모델·사람 검토 경로로 전환해야 한다.'],
    framework:{title:'AI 사용 거버넌스 4단계',steps:[{name:'업무 분류',desc:'목적·데이터·결정 위험별로 허용 사용을 정한다.'},{name:'비용 가시화',desc:'기관·팀·업무별 사용량과 단위 가치를 연결한다.'},{name:'품질 검토',desc:'오류와 사람 수정 비용을 사용량과 함께 본다.'},{name:'계약 학습',desc:'성과에 따라 모델·한도·조달 조건을 조정한다.'}]},
    tips:['토큰 단가보다 업무 한 건을 안전하게 완료하는 총비용을 비교하세요.'],question:'이 AI 사용량은 어떤 공공업무 성과와 위험 감소로 이어지는가?',
    checklist:['업무별 사용 기준이 있는가?','민감 데이터 경로가 분리되는가?','비용이 업무 성과와 연결되는가?','사람 검토 책임이 보이는가?','모델 전환과 종료가 가능한가?'],metrics:['업무당 총비용','사람 수정률','정책 위반 차단률','모델 전환 소요시간'],takeaways:['종량제를 사용 거버넌스로 확장한다','비용·품질·위험을 업무 단위로 본다','조달에 전환과 종료 가능성을 포함한다'],keywords:['공공AI조달','AIFinOps','AX거버넌스'],
    sources:[{name:'US GSA — OneGov AI consumption-based access',url:'https://www.gsa.gov/about-gsa/newsroom/news-releases/gsa-expands-onegov-ai-offerings-with-discounted-openais-chatgpt-09102026'},{name:'OECD — Digital Government Outlook 2026',url:'https://www.oecd.org/en/publications/digital-government-outlook_0496b2bc-en/full-report/adopting-and-governing-ai-in-government_7ef312a9.html'}]
  },
  {
    id:'farmer-ai-needs-a-local-trust-network',publishedAt:'2026-10-02',sourcePublishedAt:'2026-10-01',category:'Food & Livestock',region:'Global',readTime:8,
    title:'농업 AI의 마지막 1마일은 챗봇이 아니라 ‘지역 신뢰망’이다',dek:'지도사·협동조합·농가가 AI 조언을 검증하고 현장에 적용하는 서비스.',
    summary:'Extension Foundation의 2026 보고서는 농업 연구·지도 체계에서 AI의 기회와 함께 문화, 윤리, 신뢰, 역량과 인프라를 강조한다. 농가는 답변만 받는 것이 아니라 지역 조건에 맞는지 확인하고 실패했을 때 도움받을 사람이 필요하다.',
    body:['작물과 축산 조언은 토양, 기후, 품종과 규정에 따라 달라진다. 범용 AI가 그럴듯한 답을 내도 지역 전문가의 검증과 책임이 없으면 농가가 위험을 떠안는다.','서비스 전략은 AI를 지도사의 대체재가 아니라 지역 지식과 최신 연구를 찾고 번역하는 공동 도구로 설계해야 한다. 비즈니스 모델은 챗봇 구독보다 협동조합·공공기관이 검증, 교육과 현장 지원을 묶어 제공하는 공동 서비스다.','UX는 답변의 지역 적합성, 출처, 불확실성과 전문가 연결을 보여줘야 한다. AX는 농가 질문과 수정 경험을 지역 지식베이스로 축적하되 소유권과 재사용 동의를 보장해야 한다.'],
    framework:{title:'지역 농업 신뢰망 4단계',steps:[{name:'지역 맥락',desc:'작물·축종·토양·기후와 규정 정보를 연결한다.'},{name:'근거 있는 조언',desc:'출처·시점·불확실성과 적용 조건을 제시한다.'},{name:'전문가 인계',desc:'고위험 질문을 지역 지도사와 수의사에게 넘긴다.'},{name:'현장 학습',desc:'결과와 수정 내용을 동의 아래 지역 지식으로 축적한다.'}]},
    tips:['답변 건수보다 농가가 조언을 적용한 뒤 문제를 해결하고 다시 신뢰한 비율을 보세요.'],question:'이 조언이 틀리거나 지역 조건에 맞지 않을 때 농가는 누구에게 즉시 확인할 수 있는가?',
    checklist:['지역 조건이 반영되는가?','출처와 시점이 보이는가?','전문가 연결 기준이 있는가?','오프라인 접근을 지원하는가?','농가 데이터 권리가 보장되는가?'],metrics:['현장 적용률','전문가 인계 성공률','조언 후 문제해결률','지역 지식 갱신시간'],takeaways:['농업 AI를 지역 신뢰망의 일부로 본다','답변에 근거와 사람 지원을 연결한다','현장 수정을 공동 지식으로 축적한다'],keywords:['농업AI','지역지도서비스','FarmerUX'],
    sources:[{name:'Extension Foundation — National AI Report 2026',url:'https://extension.org/national-ai-report-2026/'},{name:'FAO — Science & Innovation Forum 2026',url:'https://www.fao.org/science-technology-and-innovation/science-and-innovation-forum-2026/en'}]
  },
  {
    id:'satellite-agriculture-needs-response-orchestration',publishedAt:'2026-10-02',sourcePublishedAt:'2026-09-15',category:'Food & Livestock',region:'Asia',readTime:8,
    title:'위성 농업의 성과는 피해 탐지보다 ‘대응 오케스트레이션’이다',dek:'홍수·가뭄·병해 신호를 현장 확인, 지원금과 복구 행동으로 연결하기.',
    summary:'필리핀 농업부와 우주청은 위성·지리정보·AI를 활용해 농업 피해를 빠르게 파악하고 관개와 기후 대응을 개선하는 5년 협력을 시작했다. 관측이 빨라도 현장 확인, 자원 배분과 농가 안내가 늦으면 피해는 줄지 않는다.',
    body:['위성은 넓은 지역의 이상을 찾지만 구름, 해상도와 작물 차이 때문에 오판이 생긴다. 중앙의 위험지도만 만들면 현장 공무원과 농가는 자신에게 필요한 행동을 알기 어렵다.','서비스 전략은 탐지, 현장 검증, 피해 신청, 자원 배분과 복구 상태를 하나의 사건 흐름으로 연결해야 한다. 비즈니스 모델은 영상 판매보다 정부·보험·협동조합에 대응시간과 복구 성과를 보증하는 회복력 서비스다.','UX는 농가가 지도에서 자신의 필지와 근거를 확인하고 오류를 신고하게 해야 한다. AX는 위성 신호와 현장 제보의 충돌을 표시하며 지원 제외 같은 고위험 판단에는 사람 검토를 요구해야 한다.'],
    framework:{title:'위성 신호 대응 4단계',steps:[{name:'이상 탐지',desc:'위성·기상·생육 데이터로 위험 후보를 찾는다.'},{name:'현장 검증',desc:'농가와 담당자가 사진·관측으로 사실을 확인한다.'},{name:'자원 배분',desc:'급수·방역·보험·복구 지원을 위험도와 기한에 맞춘다.'},{name:'복구 추적',desc:'지원 이후 회복과 오판을 다음 모델에 반영한다.'}]},
    tips:['탐지 정확도와 함께 경보부터 현장 지원 도착까지의 시간을 측정하세요.'],question:'위성이 위험을 발견한 뒤 농가에게 실제 도움을 전달하기까지 누가 어떤 결정을 하는가?',
    checklist:['농가가 필지와 근거를 확인하는가?','현장 검증 절차가 있는가?','오류 신고가 지원 판단에 반영되는가?','자원 배분 기준이 공개되는가?','복구 결과가 학습에 쓰이는가?'],metrics:['탐지-검증 시간','검증-지원 시간','오탐 정정률','지원 후 회복률'],takeaways:['관측을 사건 대응 서비스로 확장한다','위성과 현장 지식을 결합한다','탐지보다 지원과 복구 시간을 관리한다'],keywords:['위성농업','재난서비스','AgriResilience'],
    sources:[{name:'Philippines Department of Agriculture — Space technology for food security',url:'https://www.da.gov.ph/da-philsa-harness-space-technology-to-boost-food-security/'},{name:'ITU — AI for Good Impact Report 2026',url:'https://www.itu.int/dms_pub/itu-t/opb/ai4g/T-AI4G-AI4GOOD-2026-1-PDF-E.pdf'}]
  },
  {
    id:'cultural-ai-needs-build-protect-empower',publishedAt:'2026-10-02',sourcePublishedAt:'2026-10-01',category:'Entertainment & Culture',region:'Canada · Global',readTime:8,
    title:'문화산업 AX는 ‘만들기·보호하기·역량 키우기’를 함께 가야 한다',dek:'창작 도구 도입과 권리·신뢰·조직 준비도를 하나의 전환 로드맵으로 묶는 법.',
    summary:'캐나다의 국가 AI·문화 정상회의 결과는 Build, Protect, Empower라는 세 축으로 행동 과제를 정리했다. 창작 도구만 지원하면 권리와 신뢰가 뒤처지고, 규제만 강화하면 현장 역량과 실험이 멈춘다. 문화 AX는 세 축의 균형이 필요하다.',
    body:['문화기관과 창작자는 AI 활용 수준, 계약 역량과 데이터 접근이 크게 다르다. 대형 조직만 도구와 법률 지원을 확보하면 기술 혜택과 협상력이 더 불균등해질 수 있다.','서비스 전략은 안전한 제작 도구와 공통 인프라, 출처·저작권 보호, 창작자 교육과 조직 운영 변화를 하나의 포트폴리오로 구성해야 한다. 비즈니스 모델은 도구 판매보다 권리 정산, 공동 학습 데이터, 검증과 교육을 묶은 문화산업 지원 서비스다.','UX는 창작자가 AI 사용 범위와 공개 수준을 선택하게 하고, AX는 원주민·지역 공동체의 문화 데이터가 동의 없이 학습·생성되지 않도록 집단 권리와 철회 절차를 지원해야 한다.'],
    framework:{title:'문화 AX 3+1 구조',steps:[{name:'Build',desc:'창작자 필요에 맞는 도구·데이터·공통 인프라를 만든다.'},{name:'Protect',desc:'출처·동의·저작권·정산과 정정 절차를 보장한다.'},{name:'Empower',desc:'창작자·기관의 AI 리터러시와 협상 역량을 높인다.'},{name:'Balance',desc:'세 축의 투자와 성과를 함께 검토한다.'}]},
    tips:['도구 사용자 수와 함께 권리분쟁, 교육 후 협상력, 소규모 창작자 접근성을 보세요.'],question:'이 AI 전환은 창작 능력을 늘리는 만큼 권리와 협상력도 함께 강화하는가?',
    checklist:['창작자 수요가 도구 설계에 반영되는가?','학습 데이터 동의가 있는가?','출처와 정산이 연결되는가?','소규모 조직 교육이 제공되는가?','집단 문화권리 철회가 가능한가?'],metrics:['소규모 창작자 접근률','권리정산 처리시간','교육 후 실무 활용률','분쟁·오인 정정률'],takeaways:['도구·보호·역량을 하나의 전환으로 묶는다','창작자 간 격차를 AX 성과로 관리한다','개인 권리와 집단 문화권리를 함께 본다'],keywords:['문화AX','CreatorRights','AI문화정책'],
    sources:[{name:'Canadian Heritage — What We Heard at the National Summit on AI and Culture',url:'https://www.canada.ca/en/canadian-heritage/services/ai-culture-summit/what-we-heard.html'},{name:'UNESCO — Re|Shaping Policies for Creativity 2026',url:'https://www.unesco.org/en/reshaping-creativity-reports?hub=66708'}]
  },
  {
    id:'advanced-manufacturing-careers-need-visible-pathways',publishedAt:'2026-10-02',sourcePublishedAt:'2026-09-28',category:'Industry & Manufacturing',region:'Korea · Global',readTime:8,
    title:'첨단제조 인력난은 채용공고가 아니라 ‘보이는 경력경로’로 풀어야 한다',dek:'AI·로봇 도입을 현장 직무, 학습과 지역 인재 이동에 연결하는 서비스.',
    summary:'미국 Manufacturing Week는 첨단제조 직업 인식과 차세대 인력 준비를 강조한다. 한국도 제조·과학기술 특화 AI를 확대하고 있다. 기술 투자가 일자리 매력으로 이어지려면 현장 업무가 어떻게 바뀌고 어떤 역량으로 성장할 수 있는지 보여줘야 한다.',
    body:['청년과 전환 노동자는 제조업을 오래된 이미지로 이해하거나 자동화로 사라질 일로 본다. 기업도 필요한 역량을 추상적으로 제시해 교육과 채용이 연결되지 않는다.','서비스 전략은 실제 작업을 관찰해 자동화·증강·사람 전용 업무로 나누고 입문부터 전문 역할까지 경로를 시각화해야 한다. 비즈니스 모델은 학교 교육 납품보다 기업 과제, 현장 실습, 역량 인증과 채용을 묶는 지역 인재 서비스다.','UX는 지원자가 직무의 하루, 안전과 성장 가능성을 미리 경험하게 하고, AX는 학력 중심 선별보다 작업 증거와 학습 잠재력을 평가해야 한다. 추천 결과에 이의제기와 사람 상담도 필요하다.'],
    framework:{title:'제조 경력경로 4단계',steps:[{name:'업무 변화 지도',desc:'AI·로봇으로 바뀌는 판단과 작업을 구체화한다.'},{name:'역량 계단',desc:'입문·숙련·전문 역할의 증거와 학습을 연결한다.'},{name:'현장 실습',desc:'실제 기업 과제로 직무 적합성을 검증한다.'},{name:'채용과 성장',desc:'인증을 채용·배치·승진과 이어준다.'}]},
    tips:['교육 수료율보다 직무 전환, 1년 유지와 다음 역량 단계 이동률을 추적하세요.'],question:'지원자는 이 직무에서 AI와 함께 무엇을 하고 3년 뒤 어디로 성장하는지 볼 수 있는가?',
    checklist:['실제 업무 변화가 조사됐는가?','입문에서 전문까지 경로가 보이는가?','현장 과제가 포함되는가?','학력 외 작업 증거를 인정하는가?','채용 후 성장 데이터를 추적하는가?'],metrics:['실습-채용 전환율','1년 고용유지율','숙련 단계 이동률','지역 인재 정착률'],takeaways:['제조 인재를 경력경로 서비스로 설계한다','AI 도입과 직무·교육 변화를 연결한다','채용보다 장기 성장과 정착을 측정한다'],keywords:['첨단제조인재','WorkforceUX','지역산업'],
    sources:[{name:'Manufacturing.gov — Manufacturing Week 2026',url:'https://www.manufacturing.gov/manufacturing-day'},{name:'대한민국 정책 For U — AI 산업·지역 특화 방향',url:'https://www.youtube.com/watch?v=Z8DMfY409Ho'}]
  }
];
const existing=new Set(data.articles.map(a=>a.id));const fresh=articles.filter(a=>!existing.has(a.id));
if(!fresh.length){console.log("No new articles: today's five IDs already exist.");process.exit(0);}
if(fresh.length!==articles.length)throw new Error('Partial duplicate detected; refusing a mixed append.');
data.updatedAt='2026-10-02';data.articles.push(...fresh);writeFileSync(file,`${JSON.stringify(data,null,2)}\n`);
console.log(`Added ${fresh.length} daily insights for 2026-10-02.`);
