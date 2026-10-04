import { readFileSync, writeFileSync } from 'node:fs';
const file='data/insights.json';
const data=JSON.parse(readFileSync(file,'utf8'));
const articles=[
  {
    id:'agentic-shopping-changes-brand-discovery',publishedAt:'2026-09-29',sourcePublishedAt:'2026-09-23',category:'Retail & Commerce',region:'Asia · Global',readTime:8,
    title:'AI 쇼핑 시대, 브랜드는 클릭보다 ‘선택 근거’를 설계해야 한다',dek:'에이전트가 탐색·비교·구매를 중개할 때 필요한 새로운 리테일 경험.',
    summary:'인도 주요 도시 소비자 조사와 글로벌 결제 전망은 AI가 상품 발견부터 구매까지 개입하는 흐름을 보여준다. 브랜드가 사람의 화면 노출만 최적화하면 에이전트의 비교에서 제외될 수 있다. 제품 정보의 정확성, 조건, 증거와 구매 후 지원이 기계와 사람 모두에게 읽혀야 한다.',
    body:['에이전트는 광고 문구보다 가격, 재고, 배송, 반품, 호환성과 검증 가능한 후기를 조합해 선택한다. 데이터가 불완전하거나 채널마다 다르면 브랜드는 검색 결과에 보여도 추천 후보에서 빠질 수 있다.','서비스 전략은 상세페이지를 꾸미는 데서 제품 사실과 거래 조건을 구조화하고 최신 상태로 유지하는 운영으로 확장해야 한다. 비즈니스 모델은 에이전트 전용 할인보다 비교 가능한 보증, 유지관리와 사용 성과를 묶는 관계형 서비스에 있다.','UX는 고객이 에이전트의 추천 이유와 상업적 관계를 확인하게 하고, AX는 특정 브랜드가 데이터 규모나 광고비로 과도하게 우대되지 않는지 감시해야 한다. 브랜드는 전환율뿐 아니라 잘못 추천된 구매와 반품을 함께 측정해야 한다.'],
    framework:{title:'에이전트 발견성 4단계',steps:[{name:'상품 사실 구조화',desc:'사양·가격·재고·조건을 기계가 읽을 수 있게 정리한다.'},{name:'선택 증거 연결',desc:'인증, 후기, 수리와 실제 사용 성과를 근거로 제공한다.'},{name:'추천 투명성',desc:'추천 이유와 광고·제휴 관계를 구분한다.'},{name:'구매 후 학습',desc:'반품과 만족을 다음 추천과 상품 운영에 반영한다.'}]},
    tips:['AI 유입량보다 에이전트 추천 구매의 반품률과 추천 이유 정확도를 함께 보세요.'],question:'에이전트가 우리 상품을 선택해야 할 검증 가능한 이유는 무엇이며 고객도 그 이유를 확인할 수 있는가?',
    checklist:['상품 정보가 채널별로 일치하는가?','총비용과 반품 조건이 구조화됐는가?','추천 근거가 고객에게 보이는가?','광고와 객관 정보가 구분되는가?','구매 후 결과가 데이터에 반영되는가?'],metrics:['에이전트 추천 노출률','추천 이유 확인률','추천 구매 반품률','정보 불일치 수정시간'],takeaways:['브랜드 발견성을 구조화된 선택 근거로 재정의한다','사람과 에이전트가 같은 조건을 검증하게 한다','전환과 구매 후 실패를 함께 관리한다'],keywords:['AgenticCommerce','리테일AX','브랜드발견성'],
    sources:[{name:'NIQ — Agentic Commerce India 2026',url:'https://nielseniq.com/global/en/insights/report/2026/agentic-commerce-india-2026/'},{name:'Mastercard — The future of shopping and payments',url:'https://mastercardcontentexchange.com/news/europe/en/newsroom/press-releases/en/2026/mastercard-report-predicts-that-one-in-10-people-will-routinely-use-ai-agents-to-shop-and-pay-by-2030/'}]
  },
  {
    id:'climate-early-warning-must-reach-farm-decisions',publishedAt:'2026-09-29',sourcePublishedAt:'2026-09-28',category:'Food & Livestock',region:'Europe · Global',readTime:8,
    title:'기후 조기경보의 가치는 예측이 아니라 ‘농가의 다음 행동’에 있다',dek:'폭염·가뭄 데이터를 사료·급수·보험·유통 결정으로 전환하는 서비스.',
    summary:'EU 공동연구센터는 2026년 여름의 극심한 고온과 건조가 작물과 초지, 가축 사료에 큰 압력을 줬다고 밝혔다. 위성과 작황 모델의 예측 정확도만 높여서는 농가의 손실을 줄일 수 없다. 경보가 지역별 행동과 자원 지원으로 이어져야 한다.',
    body:['같은 가뭄 경보도 작물 단계, 토양, 급수 시설과 사료 재고에 따라 의미가 다르다. 일반적인 위험 알림은 불안을 키우지만 무엇을 언제 바꿔야 하는지 알려주지 못한다.','서비스 전략은 예측을 관개, 파종, 사료 공동구매, 출하와 보험 청구 같은 결정에 연결해야 한다. 새로운 비즈니스 모델은 데이터 구독보다 지역 협동조합·보험·물류가 함께 위험을 줄인 성과에 비용을 지불하는 회복력 서비스다.','UX는 예측의 불확실성과 행동 기한을 함께 보여주고, AX는 규모가 작은 농가나 센서가 없는 농가를 낮은 위험으로 오판하지 않도록 공공 관측과 현장 제보를 결합해야 한다.'],
    framework:{title:'경보에서 행동까지 4단계',steps:[{name:'지역 위험 번역',desc:'기후 신호를 작물·축종·생육 단계별 영향으로 바꾼다.'},{name:'행동 우선순위',desc:'기한, 비용과 기대 손실 감소를 기준으로 선택지를 제시한다.'},{name:'자원 연결',desc:'급수, 사료, 금융, 보험과 물류를 바로 신청하게 한다.'},{name:'결과 학습',desc:'농가 행동과 실제 피해를 다음 예측에 반영한다.'}]},
    tips:['알림 열람률보다 경보 후 적시에 행동하고 손실을 줄인 농가 비율을 측정하세요.'],question:'이 경보를 받은 농가는 오늘 무엇을 바꾸고 필요한 자원을 어디서 확보하는가?',
    checklist:['작물·축종별 영향이 구분되는가?','불확실성과 기한이 보이는가?','지원 서비스가 즉시 연결되는가?','센서 없는 농가도 포함되는가?','행동 결과가 환류되는가?'],metrics:['경보 후 행동전환율','지원 연결시간','예상 대비 손실감소','소규모 농가 도달률'],takeaways:['예측 정확도보다 행동 전환을 설계한다','농업·보험·물류 서비스를 연결한다','데이터 격차가 위험 격차가 되지 않게 한다'],keywords:['기후농업','조기경보','축산서비스'],
    sources:[{name:'EU JRC — European agriculture hit hard by hot and dry summer',url:'https://joint-research-centre.ec.europa.eu/jrc-news-and-updates/european-agriculture-hit-hard-exceptionally-hot-and-dry-summer-2026-09-28_en'},{name:'World Bank — Harnessing AI for Agricultural Transformation',url:'https://www.worldbank.org/en/topic/agriculture/publication/harnessing-artificial-intelligence-for-agricultural-transformation'}]
  },
  {
    id:'ai-food-safety-needs-contestable-assurance',publishedAt:'2026-09-29',sourcePublishedAt:'2026-06-25',category:'Food & Livestock',region:'Global',readTime:8,
    title:'AI 식품안전은 탐지율보다 ‘이의를 다루는 방식’이 중요하다',dek:'오염·진위 판정에서 현장 검증, 책임과 복구를 설계하는 AX 원칙.',
    summary:'영국 식품기준청 과학위원회는 식품 안전성과 진위 보증에 AI를 적용할 가능성을 검토했다. 탐지 자동화는 빠르지만 잘못된 경보는 생산자와 유통사에 큰 손실을 준다. 식품 AX는 판정 결과뿐 아니라 근거, 재검사와 시장 복귀 절차를 포함해야 한다.',
    body:['식품 안전 모델은 이미지, 센서와 공급망 데이터를 사용하지만 표본 편향과 계절 변화에 취약하다. 오탐 하나가 폐기, 거래 중단과 평판 손실로 이어지므로 정확도 평균만으로 운영 위험을 설명할 수 없다.','서비스 전략은 AI 경보를 최종 판정이 아니라 위험 기반 검사 우선순위로 사용하고, 독립 재검사와 신속한 이의 절차를 연결해야 한다. 비즈니스 모델은 검사 장비 판매에서 지속 검증, 데이터 품질 관리와 사고 복구를 포함한 보증 서비스로 넓어질 수 있다.','UX는 검사자에게 근거와 불확실성을 보여주고 생산자에게 필요한 증거와 처리 기한을 안내해야 한다. AX는 위험이 높은 결정에 사람 승인과 감사 기록을 유지해야 한다.'],
    framework:{title:'식품 AI 보증 4단계',steps:[{name:'위험별 임계값',desc:'건강 피해와 사업 손실을 함께 고려해 기준을 정한다.'},{name:'근거 있는 경보',desc:'데이터 출처, 신뢰도와 유사 사례를 제시한다.'},{name:'재검사와 이의',desc:'독립 검사와 사람 심사를 정해진 시간 안에 제공한다.'},{name:'복구와 학습',desc:'오판을 정정하고 거래 복귀와 모델 갱신을 연결한다.'}]},
    tips:['전체 정확도와 별도로 생산 중단을 만든 오탐의 빈도와 복구시간을 공개하세요.'],question:'AI 경보가 틀렸을 때 생산자는 어떤 증거로 누구에게 이의를 제기하고 얼마나 빨리 복구되는가?',
    checklist:['경보와 최종 판정이 구분되는가?','불확실성이 표시되는가?','독립 재검사 경로가 있는가?','생산자 이의 기한이 명확한가?','오판이 모델 갱신으로 이어지는가?'],metrics:['중대 위해 탐지율','생산중단 오탐률','이의처리시간','정정 후 시장복귀시간'],takeaways:['AI를 검사 우선순위에 사용한다','오탐의 사업 피해와 복구를 설계한다','지속 검증을 새로운 보증 서비스로 만든다'],keywords:['식품안전AI','Assurance','공급망AX'],
    sources:[{name:'UK Food Standards Agency — AI in food safety assurance',url:'https://www.gov.uk/government/publications/report-artificial-intelligence-applications'},{name:'CAST — AI in Agriculture: Data to Decisions to Action',url:'https://cast-science.org/publication/ai-in-agriculture-transforming-the-food-system-from-data-to-decisions-to-action/'}]
  },
  {
    id:'creative-ai-needs-provenance-as-experience',publishedAt:'2026-09-29',sourcePublishedAt:'2026-09-07',category:'Entertainment & Culture',region:'Korea · Europe',readTime:8,
    title:'AI 콘텐츠의 출처 표시는 법적 문구가 아니라 ‘감상 경험’이어야 한다',dek:'딥페이크·생성형 창작에서 관객 신뢰와 창작자 권리를 함께 설계하는 법.',
    summary:'프랑스 문화부는 AI로 생성·조작된 딥페이크가 문화·창조산업에 미치는 영향을 다뤘고, 국내 AI 콘텐츠 공모도 생성 사실 표시와 활용 기록을 요구한다. 출처 표시는 화면 구석의 배지가 아니라 관객이 창작 의도와 변형 범위를 이해하는 경험이어야 한다.',
    body:['동일한 AI 생성 표시라도 완전 합성, 보정, 번역과 풍자는 의미가 다르다. 단순 워터마크는 규정을 충족할 수 있지만 관객에게 무엇을 믿고 어떻게 해석해야 하는지 알려주지 못한다.','서비스 전략은 작품별 생성 도구, 사람의 기여, 원본 출처와 변형 이력을 단계적으로 공개해야 한다. 새로운 비즈니스 모델은 검증 가능한 제작 기록, 권리 정산과 라이선스를 묶어 유통 플랫폼과 창작자에게 제공하는 출처 인프라다.','UX는 감상을 방해하지 않으면서 필요한 순간 더 깊은 제작 맥락을 열어보게 해야 한다. AX는 프롬프트 공개를 강제해 영업비밀을 침해하지 않되 원저작물과 동의, 기여자 정산을 확인할 증거를 보존해야 한다.'],
    framework:{title:'창작 출처 경험 4단계',steps:[{name:'활용 범위 분류',desc:'생성·보정·번역·합성 등 AI 역할을 구분한다.'},{name:'계층형 표시',desc:'간단한 배지에서 상세 제작 기록까지 단계적으로 연다.'},{name:'권리 증거',desc:'원본, 동의, 라이선스와 기여 기록을 보존한다.'},{name:'관객 피드백',desc:'혼동과 오인을 신고하고 정정 이력을 확인하게 한다.'}]},
    tips:['표시 노출률보다 관객이 무엇이 생성·변형됐는지 정확히 이해하는지 테스트하세요.'],question:'관객은 이 작품에서 AI가 한 일과 사람이 책임지는 부분을 자연스럽게 이해할 수 있는가?',
    checklist:['AI 활용 유형이 구분되는가?','상세 제작 기록에 접근 가능한가?','원본과 라이선스 증거가 있는가?','창작자 기여와 정산이 연결되는가?','오인 신고와 정정 절차가 있는가?'],metrics:['출처 이해도','상세 기록 열람률','권리분쟁 해결시간','오인 신고 재발률'],takeaways:['출처 표시를 감상 경험으로 설계한다','사람과 AI의 기여 범위를 구분한다','제작 기록을 유통과 정산 인프라로 확장한다'],keywords:['AI콘텐츠','콘텐츠출처','CreativeAX'],
    sources:[{name:'French Ministry of Culture — AI-generated deepfakes and creative sectors',url:'https://www.culture.gouv.fr/nous-connaitre/organisation-du-ministere/conseil-superieur-de-la-propriete-litteraire-et-artistique-cspla/travaux-et-publications-du-cspla/missions-du-cspla/rapport-d-etape-de-la-mission-relative-aux-enjeux-pour-les-secteurs-culturels-et-creatifs-des-hypertrucages-generes-ou-manipules-par-l-intelligence'},{name:'경기콘텐츠진흥원 — 2026 대한민국 AI 콘텐츠 어워즈 공고',url:'https://www.swu.seoul.kr/bbs/swu/60/111907/download.do'}]
  },
  {
    id:'forest-restoration-needs-a-local-value-loop',publishedAt:'2026-09-29',sourcePublishedAt:'2026-09-28',category:'Place & Public',region:'Global',readTime:8,
    title:'산림 복원은 조경사업이 아니라 ‘지역 가치 순환’이어야 한다',dek:'생태 회복을 일자리·식량·관광·돌봄과 연결하는 장소 기반 서비스 전략.',
    summary:'FAO의 2026 세계 산림 현황 보고서는 산림과 경관 복원이 식량안보, 생물다양성과 지역 발전에 효과적인 투자라고 강조한다. 나무를 심은 면적만 측정하면 주민의 생계와 장기 관리가 빠진다. 복원은 지역이 지속적으로 가치를 만들고 유지하는 서비스 시스템이어야 한다.',
    body:['복원 사업이 단기 식재와 외부 용역으로 끝나면 관리 예산이 사라진 뒤 다시 훼손될 수 있다. 토지 이용과 생계가 바뀌는 주민에게 참여 권한과 수익이 없다면 갈등도 커진다.','서비스 전략은 생태 목표를 임산물, 농업, 물 관리, 교육, 관광과 지역 일자리로 연결해야 한다. 비즈니스 모델은 탄소 크레딧 하나에 의존하기보다 유지관리 계약, 지역 상품, 방문 프로그램과 생태 성과 보상을 조합해야 한다.','UX는 주민이 토지 변화와 혜택·부담을 지도에서 이해하고 의사결정에 참여하게 해야 한다. AX는 위성 모니터링으로 훼손을 찾되 현장 지식과 주민의 데이터 권리를 함께 보장해야 한다.'],
    framework:{title:'지역 복원 가치순환 4단계',steps:[{name:'생활권 진단',desc:'생태와 주민의 생계·이동·토지 이용을 함께 조사한다.'},{name:'공동 목표',desc:'복원 대상, 혜택과 부담을 주민과 합의한다.'},{name:'수익 포트폴리오',desc:'관리, 상품, 관광과 성과 보상을 결합한다.'},{name:'장기 감시와 환류',desc:'위성·현장 데이터를 공개하고 수익을 관리에 재투자한다.'}]},
    tips:['식재 면적 외에 5년 생존율, 주민 소득과 관리 참여를 같은 대시보드에서 보세요.'],question:'복원된 경관을 10년 뒤에도 지킬 지역의 역할과 지속 수익은 무엇인가?',
    checklist:['주민 토지 이용이 조사됐는가?','혜택과 부담이 합의됐는가?','다중 수익원이 있는가?','데이터와 의사결정이 공개되는가?','수익이 장기 관리에 재투자되는가?'],metrics:['5년 생존·회복률','지역 일자리·소득','주민 의사결정 참여율','관리 재투자 비율'],takeaways:['복원을 지역 서비스와 경제 시스템으로 본다','생태와 생계를 동시에 설계한다','측정 데이터와 수익을 지역에 환류한다'],keywords:['산림복원','지역경제','장소기반디자인'],
    sources:[{name:'FAO — State of the World’s Forests 2026',url:'https://fao.sitefinity.cloud/newsroom/detail/fao-report--restoring-forests-and-landscapes-is-critical-to-meeting-global-food-security-and-development-goals/en'},{name:'UNESCO — Re|Shaping Policies for Creativity 2026',url:'https://www.unesco.org/en/reshaping-creativity-reports?hub=66708'}]
  }
];
const existing=new Set(data.articles.map(a=>a.id));const fresh=articles.filter(a=>!existing.has(a.id));
if(!fresh.length){console.log("No new articles: today's five IDs already exist.");process.exit(0);}
if(fresh.length!==articles.length)throw new Error('Partial duplicate detected; refusing a mixed append.');
data.updatedAt='2026-09-29';data.articles.push(...fresh);writeFileSync(file,`${JSON.stringify(data,null,2)}\n`);
console.log(`Added ${fresh.length} daily insights for 2026-09-29.`);
