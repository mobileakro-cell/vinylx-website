# job: onboard-site

새 회사 사이트에 Insight Agent 를 붙이는 절차. 사람과 함께 진행한다(질문이 필요한 결정이 많다).

## 1. 사이트 파악
- 기술 스택(Next.js / 정적 HTML / 기타), 배포 방식(main push → Vercel·GitHub Pages 등), 기본 브랜치.
- 이미 있는 인사이트·블로그 구조가 있으면 그 저장 형식을 **그대로 쓴다**(새 스키마를 강요하지 않는다). 없으면 `templates/article.schema.md` 의 표준 형식을 제안한다.
- 기사 페이지가 정적으로 빌드돼야 하면 빌드 명령(예: `node scripts/build-insight-pages.mjs`)을 확인한다.

## 2. 프로필 작성
- `templates/insight-site.md` 를 복사해 사이트 저장소의 `.claude/insight-site.md` 로 만든다.
- 사람에게 확인받을 것: 회사 소개·독자, 카테고리, 발행량·요일, 언어·번역, 금지 주제, SNS 채널, 회사의 시각/감수자 표시 방식.

## 3. 사이트 쪽 준비 (필요한 것만)
- 기사 상세 페이지, 목록, sitemap, RSS, 구조화 데이터(Article JSON-LD), OG 이미지.
- 문의 폼 유입 추적(referrer·UTM·첫 방문 페이지 저장) — SNS 효과 측정의 전제.
- 검색엔진 등록(구글 서치콘솔·네이버 서치어드바이저·Bing) 과 IndexNow.

## 4. 에이전트 설치
- 원본 저장소에서 `scripts/sync-to-site.sh <사이트 저장소 경로>` 실행 → `.claude/skills/insight-agent/` 복사.
- DRY_RUN 으로 daily-article 을 한 번 돌려 결과를 사람과 확인.

## 5. 루틴 등록
- Claude 클라우드 루틴 1개(사이트 저장소를 source 로). 프롬프트는 `templates/routine-prompt.md` 를 쓴다.
- 기존에 같은 일을 하던 다른 자동화(Codex 등)는 중복 발행을 막기 위해 일시정지한다.
- 원본 저장소 `SITES.md` 에 사이트·저장소·루틴 ID·상태를 적는다.
