---
# ── 기계가 읽는 값 ──────────────────────────────
site: example                       # 짧은 영문 키
name: "회사명"
url: "https://www.example.com"
repo: "github-owner/repo"
branch: main
timezone: Asia/Seoul
languages: [ko]                     # 기본 언어가 첫 번째
publish:
  mode: git                         # git = 커밋·push 로 배포 / local = 로컬에만 쌓음(공개 전)
  articles_per_run: 1               # 상한. 0편도 허용
  days: "mon-fri"
categories: ["카테고리A", "카테고리B"]
---

# <회사명> 인사이트 프로필

Insight Agent 가 이 사이트에서 일할 때 따르는 사이트 전용 규칙. 공통 규칙은 `.claude/skills/insight-agent/` 에 있다.

## 회사와 독자
- 회사가 하는 일 (지어내지 말 것 — 여기 적힌 사실만 기사·SNS에 쓸 수 있다):
- 독자(고객사)와 그들이 내리는 결정:
- 회사의 시각: 기사마다 "이 이슈가 독자의 ○○ 결정에 뜻하는 것"을 어떤 관점으로 쓰는가

## 조사 범위
- 주제 축:
- 우선 출처(기관·매체):

## 금지 주제
- (없으면 "없음")

## 콘텐츠 저장 구조
- 기사 파일 위치·이름 규칙:
- 스키마 문서:
- 필수 필드와 길이 제한:
- 문체 참고 기사:
- 문체:

## 번역
- (없으면 "없음")

## 이미지 스타일
- (없으면 "없음")

## SNS 채널
| 채널 | 사용 | 언어 | 저장 필드 | 링크 | 메모 |
|---|---|---|---|---|---|

- UTM 규칙: `?utm_source=<채널>&utm_medium=social&utm_campaign=insight`

## 지식베이스
- (없으면 "없음")

## 검증 명령
- validate-article 옵션:
- 타입 검사·빌드:

## 수정 허용 파일
- daily-article:
- knowledge-update:

## 커밋
- 작성자:
- daily-article 메시지:
- knowledge-update 메시지:
- channel-drafts 메시지:
