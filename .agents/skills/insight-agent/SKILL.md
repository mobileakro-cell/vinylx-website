---
name: insight-agent
description: 회사 웹사이트의 인사이트(블로그) 기사를 조사·작성·검증·발행하고, SNS 채널 초안과 사이트 지식베이스를 함께 관리하는 공통 콘텐츠 에이전트. 사이트별 규칙은 저장소의 .Codex/insight-site.md 에서 읽는다. "인사이트 작성", "데일리 기사", "SNS 초안", "지식베이스 갱신", "새 사이트에 인사이트 붙이기" 요청 시 사용.
---

# Insight Agent

여러 회사 사이트(COSLAB, VINYL X …)에 같은 방식으로 인사이트를 쌓고 SNS로 넓히는 에이전트다.
**공통 규칙은 이 폴더**, **사이트마다 다른 것은 사이트 프로필**(`.Codex/insight-site.md`)에 있다.

> 이 폴더는 `insight-agent` 저장소(github.com/mobileakro-cell/insight-agent)의 `skill/` 을 복사한 것이다.
> 여기서 직접 고치지 말고 원본 저장소를 고친 뒤 `scripts/sync-to-site.sh` 로 다시 복사한다.

## 시작 순서 (모든 작업 공통)

1. 저장소 루트의 `.Codex/insight-site.md` 를 끝까지 읽는다. 없으면 작업을 멈추고 `jobs/onboard-site.md` 를 안내한다.
2. 이 폴더의 `reference/quality-rules.md` 를 읽는다. 모든 작업에 적용되는 사실 검증·발행 원칙이다.
3. 요청된 작업(job) 파일을 읽고 그 순서대로 실행한다.
4. 프로필과 공통 규칙이 부딪히면 **더 엄격한 쪽**을 따른다. 프로필의 "금지 주제", "발행량"은 항상 우선한다.

## 작업 목록

| job | 파일 | 하는 일 | 보통 실행 주기 |
|---|---|---|---|
| `daily-article` | `jobs/daily-article.md` | 기사 1편 조사·작성·번역·검증·커밋 (+ `channel-drafts` 포함) | 평일 1회 |
| `channel-drafts` | `jobs/channel-drafts.md` | 기사별 SNS 채널 초안(인스타·링크드인·스레드 등)과 UTM 링크 작성 | daily-article 안에서 / 단독으로 과거 기사 보충 |
| `knowledge-update` | `jobs/knowledge-update.md` | 프로필에 정의된 사이트 지식베이스(성분·제품·서비스 등) 갱신 | 사이트별 |
| `onboard-site` | `jobs/onboard-site.md` | 새 사이트에 프로필·콘텐츠 저장 구조·루틴을 붙이는 절차 | 사이트 추가 시 1회 |

## 실행 모드

- 기본: 프로필의 `publish` 설정대로 커밋·push 까지 한다.
- 프로필 `publish.mode: local`: 파일 생성·빌드·검증까지만 하고 커밋·push 하지 않는다(사이트 공개 전 단계).
- 프롬프트에 **`DRY_RUN`** 이 있으면 파일 생성·검증까지만 하고 `git commit`/`git push` 를 하지 않는다. 마지막 보고에 `git diff --stat` 과 생성 파일 내용을 요약한다.

## 보고 형식 (모든 작업 공통, 한국어)

- 한 일: 생성·수정 파일, 기사 제목·slug·카테고리, 출처 URL
- 지킨 규칙: 금지 주제와 겹치지 않는 이유 한 줄, 출처 검증 방식(WebFetch 성공/스니펫 기준)
- 결과: 검증 결과, 커밋 해시(또는 DRY_RUN), 건너뛴 주제와 이유
- 아무것도 발행하지 않았으면 그 이유를 쓴다. 빈 커밋은 만들지 않는다.
