# 표준 기사 형식 (새 사이트용 제안)

이미 자체 형식이 있는 사이트는 그 형식을 그대로 쓴다. 새로 만드는 사이트는 아래 형식(기사 1편 = JSON 1개)을 권장한다. COSLAB 이 쓰는 형식과 같다.

```json
{
  "slug": "2026-10-02-topic-kebab-case",
  "title": "핵심 답이 드러나는 제목 (카드에 들어가므로 40자 이내)",
  "description": "검색 결과용 설명 (90자 이내)",
  "category": "프로필 카테고리 중 하나",
  "publishedAt": "YYYY-MM-DD",
  "updatedAt": "YYYY-MM-DD",
  "author": "회사명",
  "keywords": ["4~6개"],
  "lede": "핵심 답 + 왜 중요한가 (2~3문장)",
  "sections": [{ "heading": "…", "paragraphs": ["…"], "bullets": ["선택"] }],
  "companyTake": "선택: 회사의 시각 3문장",
  "sources": [{ "title": "…", "url": "https://…", "publisher": "…", "publishedAt": "선택" }],
  "visual": { "concept": "…", "prompt": "English, no text/logo/faces", "alt": "…" },
  "social": {
    "captionKo": "인스타그램 캡션",
    "hashtags": ["…"],
    "channels": {
      "linkedin": { "lang": "en", "text": "…", "link": "…?utm_source=linkedin&utm_medium=social&utm_campaign=insight" }
    }
  }
}
```

사이트가 함께 갖추면 좋은 것: 기사 상세·목록 페이지, sitemap, RSS(이미지 enclosure 포함), Article JSON-LD, OG 카드 이미지, 문의 폼 유입 추적, SNS 승인 큐.
