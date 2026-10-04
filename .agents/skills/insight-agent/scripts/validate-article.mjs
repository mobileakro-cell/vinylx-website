#!/usr/bin/env node
// Insight Agent 기사 검증기 (의존성 없음).
//
// 기본: 기사 1편 = JSON 파일 1개 (COSLAB 형식)
//   node validate-article.mjs <file.json> [--categories "국내 뷰티,글로벌 뷰티"]
// 여러 기사가 한 파일 배열에 있는 사이트 (VINYL X 형식)
//   node validate-article.mjs data/insights.json --array articles --id <id> --required "id,title,summary,sources" --source-url url
//
// 옵션
//   --required     쉼표 구분 필수 필드 (기본: COSLAB 표준)
//   --categories   허용 카테고리 목록 (category 필드 검사)
//   --min-sources  최소 출처 수 (기본 2)
//   --max-title    제목 최대 글자 수 (기본 0 = 검사 안 함)
//   --max-desc     description 최대 글자 수 (기본 0)
//   --require      추가로 비어 있으면 안 되는 점 경로 (예: "visual.prompt,social.captionKo")
//   --slug-file    파일명과 slug 일치 검사 (기본 on, 배열 모드에서는 off)

import { readFileSync } from "node:fs";
import path from "node:path";

const args = process.argv.slice(2);
const file = args.find((a) => !a.startsWith("--") && !isOptionValue(a));
function isOptionValue(a) {
  const i = args.indexOf(a);
  return i > 0 && args[i - 1].startsWith("--");
}
const opt = (name, fallback = "") => {
  const i = args.indexOf(`--${name}`);
  return i >= 0 ? args[i + 1] ?? "" : fallback;
};
const list = (v) => v.split(",").map((s) => s.trim()).filter(Boolean);

if (!file) {
  console.error("usage: validate-article.mjs <file> [options]");
  process.exit(2);
}

const errors = [];
let article;
try {
  const parsed = JSON.parse(readFileSync(file, "utf8"));
  const arrayKey = opt("array");
  if (arrayKey) {
    const items = arrayKey === "." ? parsed : parsed[arrayKey];
    const id = opt("id");
    const idField = opt("id-field", "id");
    article = Array.isArray(items) ? items.find((x) => x?.[idField] === id) : undefined;
    if (!article) errors.push(`배열 '${arrayKey}' 에서 ${idField}=${id} 를 찾지 못함`);
    const ids = (items ?? []).map((x) => x?.[idField]);
    const dup = ids.filter((v, i) => ids.indexOf(v) !== i);
    if (dup.length) errors.push(`중복 ${idField}: ${[...new Set(dup)].join(", ")}`);
  } else {
    article = parsed;
  }
} catch (e) {
  console.error(`JSON 파싱 실패: ${e.message}`);
  process.exit(1);
}

const get = (obj, dotted) => dotted.split(".").reduce((o, k) => (o == null ? undefined : o[k]), obj);
const empty = (v) => v == null || (typeof v === "string" && !v.trim()) || (Array.isArray(v) && v.length === 0);

if (article) {
  const required = list(
    opt("required", "slug,title,description,category,publishedAt,updatedAt,author,keywords,lede,sections,sources"),
  );
  for (const key of required) if (empty(get(article, key))) errors.push(`필수 필드 비어 있음: ${key}`);
  for (const key of list(opt("require"))) if (empty(get(article, key))) errors.push(`비어 있으면 안 됨: ${key}`);

  const sources = article.sources ?? [];
  const minSources = Number(opt("min-sources", "2"));
  if (!Array.isArray(sources) || sources.length < minSources) errors.push(`출처 ${minSources}개 이상 필요 (현재 ${sources.length ?? 0})`);
  const urlField = opt("source-url", "url");
  for (const [i, s] of (Array.isArray(sources) ? sources : []).entries()) {
    const url = s?.[urlField];
    if (!/^https?:\/\//.test(url ?? "")) errors.push(`sources[${i}].${urlField} 가 http(s) URL 이 아님`);
  }
  const urls = (Array.isArray(sources) ? sources : []).map((s) => s?.[urlField]);
  if (new Set(urls).size !== urls.length) errors.push("같은 출처 URL 이 중복됨");

  const cats = list(opt("categories"));
  if (cats.length && article.category != null && !cats.includes(article.category)) {
    errors.push(`카테고리 '${article.category}' 는 허용 목록(${cats.join(" / ")})에 없음`);
  }
  const maxTitle = Number(opt("max-title", "0"));
  if (maxTitle && (article.title ?? "").length > maxTitle) errors.push(`제목 ${article.title.length}자 > ${maxTitle}자`);
  const maxDesc = Number(opt("max-desc", "0"));
  if (maxDesc && (article.description ?? "").length > maxDesc) errors.push(`description ${article.description.length}자 > ${maxDesc}자`);

  for (const key of ["publishedAt", "updatedAt"]) {
    const v = article[key];
    if (v != null && !/^\d{4}-\d{2}-\d{2}$/.test(v)) errors.push(`${key} 형식은 YYYY-MM-DD`);
  }

  const slugCheck = opt("slug-file", opt("array") ? "off" : "on") !== "off";
  if (slugCheck && article.slug) {
    const base = path.basename(file, ".json");
    if (base !== article.slug) errors.push(`slug(${article.slug}) 와 파일명(${base}) 불일치`);
    if (!/^[a-z0-9]+(-[a-z0-9]+)*$/.test(article.slug)) errors.push("slug 는 소문자 kebab-case");
  }

  const channels = article.social?.channels;
  if (channels && typeof channels === "object") {
    for (const [name, c] of Object.entries(channels)) {
      if (empty(c?.text)) errors.push(`social.channels.${name}.text 비어 있음`);
      if (c?.link && !/utm_source=/.test(c.link)) errors.push(`social.channels.${name}.link 에 UTM 없음`);
    }
  }
}

if (errors.length) {
  console.error(`✗ ${file}\n  - ${errors.join("\n  - ")}`);
  process.exit(1);
}
console.log(`✓ ${file}${opt("id") ? ` (${opt("id")})` : ""}`);
