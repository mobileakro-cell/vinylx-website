import { readFileSync, writeFileSync } from 'node:fs';
const file='data/insights.json';
const data=JSON.parse(readFileSync(file,'utf8'));
const articles=[
  {
    id:'live-experience-is-the-new-loyalty-layer',publishedAt:'2026-09-25',sourcePublishedAt:'2026-09-14',category:'Entertainment & Culture',region:'Global',readTime:7,
    title:'멤버십보다 강한 충성도는 ‘함께 있었던 순간’에서 나온다',dek:'라이브 경험을 이벤트가 아닌 장기 고객관계 인프라로 설계하는 법.',
    summary:'Live Nation의 2026 글로벌 조사는 디지털 접점이 늘수록 실제 현장 경험에 대한 욕구도 커지고 있음을 보여준다. 엔터테인먼트와 브랜드가 얻어야 할 것은 일회성 노출이 아니라 공연 전 기대, 현장 참여, 공연 후 기억과 커뮤니티가 이어지는 관계 자산이다.',
    body:['라이브 경험의 가치는 무대 위 콘텐츠만으로 결정되지 않는다. 예매, 이동, 대기, 입장, 굿즈, 귀가와 다음 날의 공유까지 연결될 때 팬은 자신이 특별한 관계 안에 있다고 느낀다. 반대로 접근권이 불투명하거나 현장 대기가 길면 가장 강한 감정의 순간이 불신으로 바뀐다.','서비스 전략은 공연을 한 번의 거래가 아니라 전후 여정이 있는 멤버십 경험으로 구성해야 한다. 새로운 비즈니스 모델은 단순 할인보다 우선 접근, 지역 파트너 연계, 팬 제작 콘텐츠, 공연 후 아카이브와 다음 경험 예약처럼 관계 지속에 가치를 둘 수 있다.','UX는 팬이 준비해야 할 일과 현장 상태를 시간순으로 보여주고, AX는 개인화 추천·혼잡 예측·접근성 지원을 제공하되 구매 압박이나 가격 차별로 작동하지 않도록 해야 한다.'],
    framework:{title:'라이브 충성도 여정 4단계',steps:[{name:'기대 형성',desc:'예매 후 준비 정보, 접근성 요청과 동행자 계획을 한곳에서 제공한다.'},{name:'현장 마찰 제거',desc:'입장·대기·굿즈·이동 상태를 실시간으로 안내한다.'},{name:'참여 선택권',desc:'팬이 관람, 응원, 기록, 커뮤니티 참여 강도를 직접 선택하게 한다.'},{name:'기억을 다음 관계로',desc:'공연 후 아카이브와 커뮤니티를 다음 경험으로 연결한다.'}]},
    tips:['혜택 개수보다 공연 전후에 팬의 불확실성을 줄이는 순간을 먼저 찾으세요.'],question:'팬이 티켓을 산 뒤 다음 공연까지 관계가 이어지는 순간은 어디에 있는가?',
    checklist:['예매 이후 준비 여정이 연결되는가?','현장 혼잡과 변경을 실시간 안내하는가?','접근성 요청이 별도 예외가 아닌 기본 흐름인가?','개인화가 구매 압박으로 작동하지 않는가?','공연 후 팬의 기록 소유권이 보장되는가?'],metrics:['예매 후 정보 확인률','현장 문의·대기시간','공연 후 재방문율','팬 콘텐츠 자발 참여율'],takeaways:['라이브를 일회성 이벤트가 아닌 관계 여정으로 본다','할인보다 접근과 기억의 가치를 설계한다','개인화와 팬의 선택권을 함께 보장한다'],keywords:['라이브경험','팬멤버십','엔터테인먼트UX'],
    sources:[{name:'Live Nation — 2026 Return to Real Global Report',url:'https://news.livenationentertainment.com/news/as-live-nation-enters-its-busiest-week-of-the-year-new-global-report-reveals-a-return-to-real'},{name:'Deloitte — 2026 Digital Media Trends',url:'https://www.deloitte.com/us/en/insights/industry/technology/digital-media-trends-consumption-habits-survey.html'}]
  },
  {
    id:'consumer-confidence-needs-value-assurance',publishedAt:'2026-09-25',sourcePublishedAt:'2026-09-23',category:'Retail & Commerce',region:'Korea',readTime:7,
    title:'소비심리가 회복돼도 구매는 자동으로 늘지 않는다',dek:'가격 민감한 시장에서 할인보다 확신을 설계하는 리테일 서비스 전략.',
    summary:'한국은행의 9월 소비자동향에서는 심리가 개선됐지만 최근 소매판매는 감소 흐름을 보였다. 고객이 지출 의향을 실제 구매로 옮기려면 더 많은 프로모션보다 총비용, 품질, 배송, 교환과 사용가치를 빠르게 판단하게 하는 확신의 경험이 필요하다.',
    body:['거시 심리와 개별 구매 행동 사이에는 큰 간격이 있다. 물가 부담이 남아 있는 고객은 가격표뿐 아니라 배송비, 구독 조건, 내구성, 반품 가능성까지 합친 실패 비용을 계산한다. 복잡한 쿠폰과 긴급성 메시지는 단기 클릭을 만들 수 있지만 장기 신뢰를 약화시킨다.','서비스 전략은 할인 탐색을 줄이고 비교, 보증, 교환, 유지관리까지 구매 전 판단에 포함해야 한다. 비즈니스 모델도 반복 할인보다 리필·수리·리커머스·사용량 기반 구독처럼 고객의 총소유비용을 낮추는 방향으로 넓힐 수 있다.','UX는 최종 지불액과 조건을 초기에 명확히 보여주고, AX는 개인별 가격 압박이 아니라 예산과 사용 목적에 맞는 대안을 설명해야 한다. 추천의 목표를 객단가만이 아니라 구매 후 후회와 반품 감소까지 확장해야 한다.'],
    framework:{title:'가치 확신 설계 4단계',steps:[{name:'총비용 공개',desc:'가격, 배송, 구독, 유지 비용을 구매 전에 합산해 보여준다.'},{name:'사용 목적 비교',desc:'스펙보다 고객의 상황에서 생기는 차이를 비교한다.'},{name:'실패 비용 낮추기',desc:'교환·반품·보증 조건과 절차를 선택 단계에서 설명한다.'},{name:'구매 후 가치 증명',desc:'사용 안내, 수리, 재판매와 재구매를 한 서비스로 연결한다.'}]},
    tips:['프로모션 A/B 테스트에 반품률과 구매 후 만족도를 함께 넣어 단기 전환의 숨은 비용을 확인하세요.'],question:'고객은 결제 전에 이 선택이 실패해도 손실을 통제할 수 있다고 느끼는가?',
    checklist:['최종 비용이 초기에 보이는가?','비교 기준이 고객 목적 중심인가?','반품·보증 조건이 이해하기 쉬운가?','추천 이유와 상업적 관계가 구분되는가?','구매 후 서비스가 같은 계정에서 이어지는가?'],metrics:['구매 전 조건 확인률','결제 이탈률','구매 후 후회·반품률','재구매까지 기간'],takeaways:['심리 회복을 할인 확대와 동일시하지 않는다','가격보다 실패 비용을 낮춘다','AI 추천을 객단가가 아닌 장기 가치에 맞춘다'],keywords:['소비심리','리테일전략','가치확신'],
    sources:[{name:'한국은행 — 2026년 9월 소비자동향조사',url:'https://eiec.kdi.re.kr/policy/materialView.do?num=287364&pg=&pp=&topic=P'},{name:'기획재정부 — Current Economic Situation, September 2026',url:'https://english.mofe.go.kr/pc/selectTbPressCenterDtl.do?boardCd=N0001&seq=6480'}]
  },
  {
    id:'regional-ai-transition-needs-a-service-map',publishedAt:'2026-09-25',sourcePublishedAt:'2026-09-15',category:'Place & Public',region:'Korea',readTime:8,
    title:'AI 전환이 지역 격차가 되지 않게 하려면 ‘서비스 지도’가 필요하다',dek:'교육 공급이 아니라 지역의 일자리·이동·기업 수요를 연결하는 전환 경험.',
    summary:'한국은행은 AI 노출과 고용 변화가 지역별 산업구조와 인력 기반에 따라 다르게 나타날 가능성을 짚었다. 지역 AI 정책은 교육 프로그램 수를 늘리는 데서 끝나지 않고 노동자, 기업, 학교와 공공기관이 실제 전환 경로를 찾는 서비스로 설계돼야 한다.',
    body:['같은 기술 변화도 지역의 주력산업, 기업 규모, 교육기관 접근성에 따라 다른 충격을 만든다. 온라인 강좌만 공급하면 시간·이동·기초역량 제약이 큰 사람은 참여하기 어렵고, 수료해도 지역 기업의 실제 직무와 연결되지 않을 수 있다.','서비스 전략은 지역 산업의 변화 업무를 정의하고 개인의 기존 경험을 전환 가능한 역량으로 번역해야 한다. 새로운 운영모델은 기업이 실제 과제를 제공하고 교육기관이 짧은 실증을 운영하며 공공이 이동·돌봄·훈련비 장벽을 낮추는 공동 서비스다.','UX는 사용자가 현재 역량에서 다음 직무까지의 단계와 지원을 보게 하고, AX는 채용·교육 추천에서 지역·학력 편향을 감시해야 한다. 개인을 자동 탈락시키기보다 선택지와 사람 상담을 넓히는 역할로 제한해야 한다.'],
    framework:{title:'지역 AI 전환 서비스 4단계',steps:[{name:'지역 업무 변화 지도',desc:'산업별로 사라지고 바뀌고 새로 생기는 실제 업무를 조사한다.'},{name:'경험을 역량으로 번역',desc:'기존 직무 경험을 전환 가능한 기술과 증거로 구조화한다.'},{name:'짧은 현장 실증',desc:'교육 후 실제 기업 과제를 수행해 전환 가능성을 검증한다.'},{name:'생활 장벽 지원',desc:'이동, 돌봄, 시간, 장비와 상담을 훈련 서비스에 포함한다.'}]},
    tips:['과정 수료율보다 3개월 뒤 실제 업무 변화와 지역 내 고용 연결을 추적하세요.'],question:'이 정책은 교육을 제공하는가, 아니면 한 사람이 실제 다음 일자리로 이동하게 하는가?',
    checklist:['지역 기업의 실제 업무 변화가 조사됐는가?','기존 경험을 인정하는 경로가 있는가?','현장 과제와 채용이 연결되는가?','이동·돌봄 장벽을 지원하는가?','AI 추천에 이의제기와 상담이 있는가?'],metrics:['훈련 후 직무전환율','지역 기업 과제 참여율','중도이탈 사유','전환 후 임금·고용 유지율'],takeaways:['지역의 산업구조에 맞는 전환 경로를 만든다','교육과 실제 기업 과제를 연결한다','AI를 선별보다 선택지 확장에 사용한다'],keywords:['지역노동시장','AI전환','공공서비스디자인'],
    sources:[{name:'한국은행 — AI와 지역 노동시장',url:'https://www.bok.or.kr/portal/main/contents.do?menuNo=200433'},{name:'OECD — From Analysis to Action: Local Policies and Productivity',url:'https://www.oecd.org/en/events/2026/04/from-analysis-to-action-harnessing-local-policies-to-boost-productivity-2nd-edition.html'}]
  },
  {
    id:'responsible-ai-needs-continuous-assurance',publishedAt:'2026-09-25',sourcePublishedAt:'2026-09-01',category:'AX',region:'Global',readTime:8,
    title:'책임 있는 AI는 출시 심사가 아니라 ‘지속 보증’이다',dek:'에이전트의 권한·기억·행동 변화를 운영 중에도 검증하는 AX 체계.',
    summary:'2026 책임 있는 AI 논의는 모델 출시 전 평가에서 실제 배포 이후의 관찰과 개입으로 이동하고 있다. 여러 모델·도구·데이터를 연결하는 에이전트는 사용 과정에서 위험이 변하므로, 정책 준수 여부를 한 번 확인하는 방식만으로는 충분하지 않다.',
    body:['에이전트는 같은 모델을 사용해도 연결된 도구, 권한, 메모리와 사용 맥락에 따라 전혀 다른 위험을 만든다. 따라서 모델 점수 하나보다 실제 업무에서 무엇을 읽고 실행했는지, 사용자가 어디서 개입했는지를 지속적으로 봐야 한다.','서비스 전략은 평가, 승인, 배포, 관찰, 사고 대응을 별도 조직의 문서가 아니라 제품 수명주기의 피드백 루프로 연결해야 한다. 보증 리포트, 정책 템플릿, 런타임 제어와 외부 검증은 기업용 AX의 새로운 서비스 영역이 된다.','UX는 사용자에게 자동화 상태와 변경 이유를 알려야 하고, AX는 위험이 높아질 때 권한을 자동 축소하거나 사람 승인을 요구해야 한다. 사고가 없었다는 결과보다 탐지와 개입이 실제로 작동했는지 증명해야 한다.'],
    framework:{title:'지속 AI 보증 4단계',steps:[{name:'맥락별 위험 지도',desc:'모델이 아닌 실제 사용자·데이터·도구·결정의 위험을 정의한다.'},{name:'배포 전 증거',desc:'평가 결과, 한계, 책임자와 승인 조건을 기록한다.'},{name:'런타임 관찰과 제어',desc:'권한·메모리·도구 행동을 모니터링하고 임계 시 중단한다.'},{name:'사고 후 정책 갱신',desc:'사용자 신고와 사고를 평가셋·가드레일·설명에 반영한다.'}]},
    tips:['정책 준수 체크 수보다 위험 신호가 실제 권한 축소나 사람 개입으로 이어졌는지 테스트하세요.'],question:'배포 후 에이전트의 행동이 달라졌을 때 조직은 무엇을 보고 언제 개입하는가?',
    checklist:['실제 사용 맥락별 위험이 정의됐는가?','평가 결과와 한계가 공개되는가?','권한 변화가 기록되는가?','런타임 중단 기준이 있는가?','사고가 평가와 정책 갱신으로 이어지는가?'],metrics:['위험 신호 탐지시간','자동 권한축소 성공률','사람 개입 후 복구율','동일 사고 재발률'],takeaways:['모델 평가를 실제 사용 보증으로 확장한다','에이전트의 권한과 행동을 런타임에 관찰한다','사고 대응을 제품 학습 루프로 만든다'],keywords:['ResponsibleAI','지속보증','AgentControl'],
    sources:[{name:'Microsoft — 2026 Responsible AI Transparency Report',url:'https://www.microsoft.com/en-us/corporate-responsibility/topics/responsible-ai/reports/transparency-report/'},{name:'Microsoft — Responsible AI in 2026',url:'https://blogs.microsoft.com/on-the-issues/2026/09/01/responsible-ai-in-2026-how-we-are-adapting-for-whats-ahead/'}]
  },
  {
    id:'manufacturing-ai-needs-work-redesign',publishedAt:'2026-09-25',sourcePublishedAt:'2026-06-01',category:'Industry & Manufacturing',region:'Global',readTime:8,
    title:'제조업 AI의 ROI는 인력 감축보다 ‘일의 재설계’에서 나온다',dek:'현장 지식과 자동화를 결합해 생산성과 숙련을 함께 높이는 서비스 모델.',
    summary:'제조업의 AI 도입은 확대되고 있지만 파일럿이 실제 성과로 확장되려면 기술 설치보다 작업자의 역할과 판단 흐름을 다시 설계해야 한다. AI가 반복 분석을 맡고 사람이 예외·품질·안전을 책임지는 구조가 명확할 때 생산성과 숙련 전승을 함께 얻을 수 있다.',
    body:['현장 지식은 매뉴얼에 모두 적혀 있지 않다. 소리, 진동, 원료 상태와 이전 사고 기억을 종합하는 숙련자의 판단을 무시한 자동화는 알람을 늘리거나 우회 사용을 만든다. 반대로 AI를 단순 도구로만 두면 조직 차원의 운영 변화가 일어나지 않는다.','서비스 전략은 직무별 업무를 자동화·증강·사람 전용으로 나누고 교육, 승인, 성과평가를 함께 바꿔야 한다. 비즈니스 모델은 시스템 구축에서 현장 코칭, 지식 구조화, 지속 평가와 운영 개선을 포함하는 전환 서비스로 확장할 수 있다.','UX는 작업자가 AI 제안을 비교·수정하고 자신의 이유를 남기게 해야 한다. AX는 수정 내용을 실패로 보지 않고 현장 지식 자산으로 축적하며, 감시나 개인 평가에 전용되지 않도록 사용 목적을 제한해야 한다.'],
    framework:{title:'AI 기반 일 재설계 4단계',steps:[{name:'업무를 판단 단위로 분해',desc:'클릭이 아니라 입력, 판단, 실행, 예외와 책임을 기준으로 업무를 나눈다.'},{name:'자동화 경계 합의',desc:'AI가 맡을 일과 사람이 최종 책임질 일을 현장과 함께 정한다.'},{name:'현장 수정 학습',desc:'작업자의 수정 이유를 운영 규칙과 지식 자산으로 축적한다.'},{name:'성과와 숙련 함께 측정',desc:'생산성뿐 아니라 안전, 학습시간, 예외 대응과 숙련 전승을 본다.'}]},
    tips:['가장 시간이 오래 걸리는 일보다 판단 근거가 명확하고 되돌릴 수 있는 일부터 증강하세요.'],question:'이 AI는 작업자의 판단을 대체하는가, 더 좋은 판단을 할 증거와 시간을 제공하는가?',
    checklist:['업무가 판단과 책임 단위로 분해됐는가?','현장 작업자가 경계 설계에 참여했는가?','AI 제안을 수정할 수 있는가?','수정 데이터가 감시에 쓰이지 않는가?','숙련과 안전 지표를 함께 보는가?'],metrics:['제안 수정률','예외 해결시간','신규 작업자 숙련기간','품질·안전사고 변화'],takeaways:['기술 도입과 직무 재설계를 함께 한다','현장 수정을 지식 자산으로 본다','생산성과 숙련·안전을 동시에 측정한다'],keywords:['제조업AI','WorkDesign','현장지식'],
    sources:[{name:'PwC — 2026 AI Jobs Barometer: Manufacturing',url:'https://www.pwc.com/gx/en/issues/artificial-intelligence/job-barometer/2026/pwc-aijb-2026-manufacturing-report.pdf'},{name:'World Economic Forum — Advanced Manufacturing and Supply Chains',url:'https://www.weforum.org/centres/centre-for-advanced-manufacturing-and-supply-chains/'}]
  }
];
const existing=new Set(data.articles.map(a=>a.id)); const fresh=articles.filter(a=>!existing.has(a.id));
if(!fresh.length){console.log('No new articles: today\'s five IDs already exist.');process.exit(0);}
if(fresh.length!==articles.length)throw new Error('Partial duplicate detected; refusing a mixed append.');
data.updatedAt='2026-09-25'; data.articles.push(...fresh); writeFileSync(file,`${JSON.stringify(data,null,2)}\n`);
console.log(`Added ${fresh.length} daily insights for 2026-09-25.`);
