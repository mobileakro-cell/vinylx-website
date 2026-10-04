# job: channel-drafts

기사 하나를 SNS 채널별 초안으로 바꾼다. **게시는 하지 않는다**(사람이 승인 큐에서 게시).

## 입력
- 대상 기사 파일(daily-article 안에서는 방금 쓴 기사, 단독 실행 시 지정된 기사 또는 `social.channels` 가 없는 최근 기사들).
- 프로필 "SNS 채널" 표: 채널 이름, 사용 여부, 언어, 형식, 길이, 마무리 문장, 해시태그 규칙, 링크 규칙.

## 출력 위치
- 기사 JSON 의 `social` 객체. 프로필이 기존 필드(예: `captionKo`, `hashtags`)를 쓰고 있으면 **그대로 유지**하고, 추가 채널은 `social.channels.<채널키>` 에 넣는다:

```json
"social": {
  "captionKo": "...",            // 기존 필드 유지 (사이트 승인 큐가 읽음)
  "hashtags": ["..."],
  "channels": {
    "linkedin": { "lang": "en", "text": "...", "link": "https://.../en/insights/<slug>?utm_source=linkedin&utm_medium=social&utm_campaign=insight" },
    "threads":  { "lang": "ko", "text": "...", "link": "https://.../insights/<slug>?utm_source=threads&utm_medium=social&utm_campaign=insight" }
  }
}
```

## 채널별 기본 원칙 (프로필이 다르게 정하면 프로필 우선)
- **링크드인**: 의사결정자 대상. 첫 줄에 통찰 한 문장 → 근거 2~3줄 → "우리 관점" 한 줄 → 링크. 600~1,200자. 해시태그 3개 이하. 과장·이모지 남발 금지.
- **인스타그램**: 카드 이미지와 함께 게시. 첫 문장은 피드에서 멈추게 하는 핵심 답. 3~5문장. 본문 링크는 클릭되지 않으므로 URL 을 넣지 않고 프로필 링크 안내로 마무리. 해시태그 5~8개.
- **스레드**: 3~5줄의 짧은 글 + 링크. 대화체 가능, 단정적 숫자는 출처에 있는 것만.
- **네이버 블로그(쓰는 경우)**: 원문 복사 금지(유사문서 처리). "핵심 3줄 + 회사의 시각 + 원문 링크" 로 재작성한 요약본. 사람이 붙여넣어 게시.
- 모든 채널: 링크에는 프로필의 UTM 규칙을 붙인다(문의 폼의 유입 추적이 이것으로 채널을 구분한다).

## 단독 실행 시
- 대상 기사들만 수정한다. 검증·커밋은 daily-article 6~7단계와 같은 방식, 커밋 메시지는 프로필의 `channel-drafts` 형식.
