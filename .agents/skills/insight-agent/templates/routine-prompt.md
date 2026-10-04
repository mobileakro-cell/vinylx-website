# 클라우드 루틴 프롬프트 템플릿

사이트마다 루틴 프롬프트는 이 몇 줄만 둔다. 규칙은 전부 저장소 안(에이전트 + 프로필)에 있으므로 규칙을 바꿀 때 루틴을 고칠 필요가 없다.

```
Insight Agent 로 <JOB> 작업을 실행하라.

1. .claude/skills/insight-agent/SKILL.md 를 읽고 그 "시작 순서"를 따른다.
2. 사이트 프로필은 .claude/insight-site.md 이다.
3. 작업 파일: .claude/skills/insight-agent/jobs/<JOB>.md
4. 사람의 검토 없이 배포된다. 공통 품질 규칙과 프로필의 금지 주제·발행량을 반드시 지킨다.
5. 끝나면 SKILL.md 의 보고 형식으로 한국어 보고를 남긴다.
```

시험 실행은 맨 앞에 `DRY_RUN` 한 줄을 붙인다.
