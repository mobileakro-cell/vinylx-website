// Builds insights.html (card index), insights/<id>.html (article pages), services.html,
// service pages (data/services.json), llms.txt and sitemap.xml.
// Run: node scripts/build-insight-pages.mjs
import { readFileSync, writeFileSync, mkdirSync, readdirSync, rmSync } from 'node:fs';

const ORIGIN = 'https://vinyl-x.com';
const OG_IMAGE = `${ORIGIN}/images/vinylx-insight-og.png`;
const CSS_VERSION = 116;
const data = JSON.parse(readFileSync('data/insights.json', 'utf8'));
const serviceData = JSON.parse(readFileSync('data/services.json', 'utf8'));
const ORG_ID = `${ORIGIN}/#organization`;
const PROVIDER = { '@type': 'Organization', '@id': ORG_ID, name: 'VINYL X', alternateName: '바이널엑스', url: ORIGIN };

const esc = (value = '') => String(value).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
const ldJson = value => `<script type="application/ld+json">${JSON.stringify(value).replace(/</g, '\\u003c')}</script>`;
const formatDate = value => value.replaceAll('-', '.');
const pad = n => String(n).padStart(2, '0');

const hashtags = (keywords, className) => `<span class="${className}">${keywords.map(k => `<span>#${esc(k)}</span>`).join('')}</span>`;

// ---------- Shared partials (root = '' for top-level pages, '../' for articles) ----------
function head({ root, title, description, url, type, structured }) {
  return `<!DOCTYPE html>
<html lang="ko">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${esc(title)}</title>
  <meta name="description" content="${esc(description)}">
  <link rel="icon" href="${root}images/vinylx-logo-color.png" type="image/png">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="${root}css/interaction.css?v=105">
  <link rel="stylesheet" href="${root}css/pages.css?v=${CSS_VERSION}">

  <!-- SITE-SEO:START -->
  <link rel="canonical" href="${url}">
  <meta name="robots" content="index,follow,max-image-preview:large,max-snippet:-1,max-video-preview:-1">
  <meta property="og:title" content="${esc(title)}">
  <meta property="og:description" content="${esc(description)}">
  <meta property="og:type" content="${type}">
  <meta property="og:url" content="${url}">
  <meta property="og:image" content="${OG_IMAGE}">
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:title" content="${esc(title)}">
  <meta name="twitter:description" content="${esc(description)}">
  <meta name="twitter:image" content="${OG_IMAGE}">
  ${ldJson(structured)}
  <!-- SITE-SEO:END -->
</head>`;
}

const NAV = [['about.html', 'About'], ['services.html', 'Service'], ['portfolio.html', 'Portfolio'], ['log.html', 'Log'], ['insights.html', 'Insight'], ['contact.html', 'Contact']];

function chrome(root) {
  return `  <div class="cursor-dot"></div>

  <header class="header">
    <a href="${root}interaction.html" class="logo"><img src="${root}images/vinylx-logo-white.png" alt="VINYL X." class="logo-img"></a>
    <button class="menu-toggle" aria-label="메뉴 열기">MENU</button>
  </header>

  <div class="menu-overlay">
    <nav class="menu-nav">
${NAV.map(([href, label], i) => `      <a href="${root}${href}" class="menu-link" data-num="${pad(i + 1)}">${label}</a>`).join('\n')}
    </nav>
    <div class="menu-footer">
      <a href="mailto:INFO@VINYL-X.COM">INFO@VINYL-X.COM</a>
      <div class="menu-social">
        <a href="https://blog.naver.com/vinylx" target="_blank" rel="noopener">Blog</a>
        <a href="https://www.instagram.com/vinyl_x_official" target="_blank" rel="noopener">Instagram</a>
        <a href="https://www.facebook.com/vinylxdesign" target="_blank" rel="noopener">Facebook</a>
      </div>
    </div>
  </div>`;
}

function footer(root) {
  return `  <footer class="section footer-section" data-theme="dark">
    <div class="footer-main">
      <div class="footer-cta">
        <a href="${root}interaction.html" class="footer-logo-link"><img src="${root}images/vinylx-logo-white.png" alt="VINYL X." class="footer-logo-img"></a>
        <p class="footer-desc">프로덕션과 엑셀러레이팅 전문성으로,<br>가치 있는 브랜드를 연속적으로 만들고 운영합니다.</p>
      </div>
      <div class="footer-nav">
${NAV.map(([href, label]) => `        <a href="${root}${href}" class="footer-link">${label.toUpperCase()}</a>`).join('\n')}
      </div>
    </div>
    <div class="footer-bottom"><span>&copy;2026 VINYL X — All Rights Reserved</span></div>
  </footer>

  <script src="${root}js/interaction.js?v=100"></script>
</body>
</html>
`;
}

// ---------- Index page ----------
function card(article, index) {
  return `          <a class="insight-card" href="insights/${article.id}.html">
            <span class="insight-card-top"><span>${pad(index + 1)}</span><span>${esc(article.region)} · ${article.readTime} MIN</span></span>
            <strong class="insight-card-title">${esc(article.title)}</strong>
            <span class="insight-card-dek">${esc(article.dek)}</span>
            <span class="insight-card-foot">${hashtags(article.keywords, 'insight-tags')}<span class="insight-arrow" aria-hidden="true">↗</span></span>
          </a>`;
}

function buildIndex() {
  const title = 'Insight | VINYL X';
  const description = '산업의 변화를 읽고 실제 프로젝트의 질문으로 옮기는 VINYL X의 핵심 인사이트.';
  const url = `${ORIGIN}/insights.html`;
  const structured = {
    '@context': 'https://schema.org', '@type': 'CollectionPage', name: 'VINYL X Insight', description, url, inLanguage: 'ko-KR',
    isPartOf: { '@type': 'WebSite', name: 'VINYL X', url: ORIGIN },
    hasPart: data.articles.map(a => ({ '@type': 'Article', headline: a.title, url: `${ORIGIN}/insights/${a.id}.html` }))
  };

  return `${head({ root: '', title, description, url, type: 'website', structured })}
<body class="insight-page">
${chrome('')}

  <main class="section insight-index" data-theme="light">
    <header class="insight-intro">
      <p class="section-label section-label-light">INSIGHT</p>
      <h1>Signals worth<br>designing for.</h1>
      <p class="insight-intro-lead">산업의 변화를 읽고, 실제 프로젝트에서 던져야 할 질문으로 옮깁니다.</p>
    </header>

    <div class="insight-grid">
${data.articles.map(card).join('\n')}
    </div>
  </main>

${footer('')}`;
}

// ---------- Article pages ----------
function buildArticle(article) {
  const i = data.articles.indexOf(article);
  const next = data.articles[(i + 1) % data.articles.length];
  const url = `${ORIGIN}/insights/${article.id}.html`;
  const structured = {
    '@context': 'https://schema.org', '@type': 'Article', headline: article.title, description: article.dek,
    datePublished: article.publishedAt, dateModified: data.updatedAt, inLanguage: 'ko-KR', mainEntityOfPage: url,
    image: OG_IMAGE, keywords: article.keywords.join(', '),
    author: { '@type': 'Organization', name: 'VINYL X', url: ORIGIN },
    publisher: { '@type': 'Organization', name: 'VINYL X', url: ORIGIN }
  };

  return `${head({ root: '../', title: `${article.title} | VINYL X Insight`, description: article.dek, url, type: 'article', structured })}
<body class="insight-page">
${chrome('../')}

  <main class="section insight-detail" data-theme="light">
    <article class="insight-article">
      <a class="insight-back" href="../insights.html">← Insight</a>
      <header class="insight-article-header">
        <p class="insight-article-meta">${esc(article.region)} · <time datetime="${article.publishedAt}">${formatDate(article.publishedAt)}</time> · ${article.readTime} MIN READ</p>
        <h1>${esc(article.title)}</h1>
        <p class="insight-article-dek">${esc(article.dek)}</p>
        ${hashtags(article.keywords, 'insight-tags insight-article-tags')}
      </header>
      <p class="insight-article-summary">${esc(article.summary)}</p>
      <div class="insight-article-body">
${article.body.map(text => `        <p>${esc(text)}</p>`).join('\n')}
      </div>
      <section class="insight-framework">
        <p class="insight-article-label">FRAMEWORK</p>
        <h2>${esc(article.framework.title)}</h2>
        <ol>
${article.framework.steps.map((step, n) => `          <li><span>STEP ${pad(n + 1)}</span><strong>${esc(step.name)}</strong><p>${esc(step.desc)}</p></li>`).join('\n')}
        </ol>
      </section>
${article.tips?.length ? `      <aside class="insight-tips">
${article.tips.map(text => `        <p><span>TIP</span>${esc(text)}</p>`).join('\n')}
      </aside>
` : ''}      <blockquote class="insight-question"><small>QUESTION FOR THE BRIEF</small>${esc(article.question)}</blockquote>
      <div class="insight-tools">
        <section class="insight-checklist">
          <p class="insight-article-label">PLANNING CHECKLIST</p>
          <ul>
${article.checklist.map(text => `            <li>${esc(text)}</li>`).join('\n')}
          </ul>
        </section>
        <section class="insight-metrics">
          <p class="insight-article-label">WHAT TO MEASURE</p>
          <ul>
${article.metrics.map(text => `            <li>${esc(text)}</li>`).join('\n')}
          </ul>
        </section>
      </div>
      <section class="insight-takeaways">
        <p class="insight-article-label">TAKEAWAYS</p>
        <ol>
${article.takeaways.map(text => `          <li>${esc(text)}</li>`).join('\n')}
        </ol>
      </section>
      <section class="insight-sources">
        <p class="insight-article-label">SOURCES</p>
${article.sources.map(s => `        <a href="${esc(s.url)}" target="_blank" rel="noopener noreferrer">${esc(s.name)} <span aria-hidden="true">↗</span></a>`).join('\n')}
        <small>바이널엑스가 공개 자료를 토대로 재구성한 인사이트입니다.</small>
      </section>
      <a class="insight-next" href="${next.id}.html">
        <span>NEXT INSIGHT</span>
        <strong>${esc(next.title)}</strong>
      </a>
    </article>
  </main>

${footer('../')}`;
}

// ---------- Service pages (answer-first copy + Service/FAQPage schema for AI search) ----------
const articleById = Object.fromEntries(data.articles.map(a => [a.id, a]));

function buildServiceHub() {
  const { hub, services } = serviceData;
  const url = `${ORIGIN}/services.html`;
  const structured = {
    '@context': 'https://schema.org', '@type': 'CollectionPage', name: 'VINYL X Service', description: hub.description, url, inLanguage: 'ko-KR',
    isPartOf: { '@type': 'WebSite', name: 'VINYL X', url: ORIGIN }, about: PROVIDER,
    hasPart: services.map(s => ({ '@type': 'Service', name: s.title, serviceType: s.serviceType, url: `${ORIGIN}/${s.id}.html`, provider: PROVIDER }))
  };
  return `${head({ root: '', title: hub.title, description: hub.description, url, type: 'website', structured })}
<body class="insight-page">
${chrome('')}

  <main class="section insight-index" data-theme="light">
    <header class="insight-intro">
      <p class="section-label section-label-light">SERVICE</p>
      <h1>${hub.heading}</h1>
      <p class="insight-intro-lead">${esc(hub.lead)}</p>
    </header>

    <div class="insight-grid service-grid">
${services.map((s, i) => `          <a class="insight-card" href="${s.id}.html">
            <span class="insight-card-top"><span>${pad(i + 1)}</span><span>${esc(s.label)}</span></span>
            <strong class="insight-card-title">${esc(s.title)}</strong>
            <span class="insight-card-dek">${esc(s.description)}</span>
            <span class="insight-card-foot">${hashtags(s.keywords, 'insight-tags')}<span class="insight-arrow" aria-hidden="true">↗</span></span>
          </a>`).join('\n')}
    </div>
  </main>

${footer('')}`;
}

function buildService(s) {
  const url = `${ORIGIN}/${s.id}.html`;
  const insights = s.insights.map(id => articleById[id]).filter(Boolean);
  const structured = [
    {
      '@context': 'https://schema.org', '@type': 'Service', '@id': `${url}#service`, name: s.title, alternateName: s.serviceType,
      serviceType: s.serviceType, description: s.description, url, provider: PROVIDER, areaServed: { '@type': 'Country', name: 'South Korea' },
      audience: { '@type': 'BusinessAudience', audienceType: s.industries.join(', ') },
      hasOfferCatalog: { '@type': 'OfferCatalog', name: `${s.title} 프로세스`, itemListElement: s.framework.steps.map(step => ({ '@type': 'Offer', itemOffered: { '@type': 'Service', name: step.title, description: step.text } })) }
    },
    {
      '@context': 'https://schema.org', '@type': 'FAQPage',
      mainEntity: s.faq.map(f => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } }))
    },
    {
      '@context': 'https://schema.org', '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'VINYL X', item: `${ORIGIN}/` },
        { '@type': 'ListItem', position: 2, name: 'Service', item: `${ORIGIN}/services.html` },
        { '@type': 'ListItem', position: 3, name: s.title, item: url }
      ]
    }
  ];
  return `${head({ root: '', title: s.metaTitle, description: s.description, url, type: 'website', structured })}
<body class="insight-page">
${chrome('')}

  <main class="section insight-detail" data-theme="light">
    <article class="insight-article service-article">
      <a class="insight-back" href="services.html">← Service</a>
      <header class="insight-article-header">
        <p class="insight-article-meta">${esc(s.label)} · VINYL X 바이널엑스 · <time datetime="${serviceData.updatedAt}">${formatDate(serviceData.updatedAt)}</time></p>
        <h1>${esc(s.h1)}</h1>
        <p class="insight-article-dek">${esc(s.dek)}</p>
        ${hashtags(s.keywords, 'insight-tags insight-article-tags')}
      </header>
      <p class="insight-article-summary">${esc(s.summary)}</p>
      <div class="insight-article-body">
${s.body.map(p => `        <p>${esc(p)}</p>`).join('\n')}
      </div>
      <section class="insight-framework">
        <p class="insight-article-label">PROCESS</p>
        <h2>${esc(s.framework.title)}</h2>
        <ol>
${s.framework.steps.map((step, i) => `          <li><span>STEP ${pad(i + 1)}</span><strong>${esc(step.title)}</strong><p>${esc(step.text)}</p></li>`).join('\n')}
        </ol>
      </section>
      <blockquote class="insight-question"><small>QUESTION FOR THE BRIEF</small>${esc(s.question)}</blockquote>
      <div class="insight-tools">
        <section class="insight-checklist">
          <p class="insight-article-label">DELIVERABLES</p>
          <ul>
${s.deliverables.map(d => `            <li>${esc(d)}</li>`).join('\n')}
          </ul>
        </section>
        <section class="insight-metrics">
          <p class="insight-article-label">WHAT WE MEASURE</p>
          <ul>
${s.metrics.map(m => `            <li>${esc(m)}</li>`).join('\n')}
          </ul>
        </section>
      </div>
      <section class="insight-takeaways">
        <p class="insight-article-label">INDUSTRIES</p>
        <ol>
${s.industries.map(i => `          <li>${esc(i)}</li>`).join('\n')}
        </ol>
      </section>
      <section class="insight-sources service-related">
        <p class="insight-article-label">RELATED WORK</p>
${s.related.map(r => `        <a href="${esc(r.url)}">${esc(r.name)} — <small>${esc(r.note)}</small> <span aria-hidden="true">↗</span></a>`).join('\n')}
      </section>
      <section class="insight-sources service-related">
        <p class="insight-article-label">RELATED INSIGHT</p>
${insights.map(a => `        <a href="insights/${a.id}.html">${esc(a.title)} <span aria-hidden="true">↗</span></a>`).join('\n')}
      </section>
      <section class="service-faq">
        <p class="insight-article-label">FAQ</p>
        <h2>${esc(s.title)} 자주 묻는 질문</h2>
${s.faq.map(f => `        <details>
          <summary>${esc(f.q)}</summary>
          <p>${esc(f.a)}</p>
        </details>`).join('\n')}
      </section>
      <a class="insight-next" href="contact.html">
        <span>CONTACT</span>
        <strong>${esc(s.title)} 프로젝트를 VINYL X와 논의하세요 — INFO@VINYL-X.COM</strong>
      </a>
    </article>
  </main>

${footer('')}`;
}

// llms.txt — plain-language site map for AI crawlers (llmstxt.org format)
function buildLlmsTxt() {
  const { hub, services } = serviceData;
  return `# VINYL X (바이널엑스)

> ${hub.lead} 주요 서비스는 AX 컨설팅(AI 전환·AI 기반 서비스 운영모델 설계), UI/UX 컨설팅(UX 리서치·UX 전략·UI 디자인), 서비스디자인·리빙랩, Company Building, 스타트업 액셀러레이팅입니다.

- 회사명: VINYL X (바이널엑스, VinylX)
- 설립: 2012년
- 위치: 서울특별시 성동구 왕십리로 115 서울숲 M타워
- 연락처: INFO@VINYL-X.COM, 02-6200-6559

## Services
${services.map(s => `- [${s.title}](${ORIGIN}/${s.id}.html): ${s.description}`).join('\n')}

## Company
- [About](${ORIGIN}/about.html): VINYL X 회사 소개 — Company Building, Service Accelerating, Digital & AI Production
- [Portfolio](${ORIGIN}/portfolio.html): HD HYUNDAI DEVELON, KB 디지털 기부, LLOYD, LOONA 팬클럽 앱, STYLETECH, 101PACKERS 등 프로젝트
- [산업단지 디자인리빙랩](${ORIGIN}/project-livinglab.html): 산업단지 근로자 경험을 서비스디자인으로 개선한 리빙랩 프로젝트
- [Log](${ORIGIN}/log.html): 프로젝트·이벤트·수상 기록
- [Contact](${ORIGIN}/contact.html): 프로젝트 문의

## Insight
${data.articles.map(a => `- [${a.title}](${ORIGIN}/insights/${a.id}.html): ${a.dek}`).join('\n')}
`;
}

// ---------- Write ----------
mkdirSync('insights', { recursive: true });
for (const file of readdirSync('insights')) if (file.endsWith('.html')) rmSync(`insights/${file}`);
for (const article of data.articles) writeFileSync(`insights/${article.id}.html`, buildArticle(article));
writeFileSync('insights.html', buildIndex());
writeFileSync('services.html', buildServiceHub());
for (const s of serviceData.services) writeFileSync(`${s.id}.html`, buildService(s));
writeFileSync('llms.txt', buildLlmsTxt());

const staticPages = ['', 'about.html', 'services.html', ...serviceData.services.map(s => `${s.id}.html`), 'portfolio.html', 'log.html', 'insights.html', 'contact.html', 'project-livinglab.html'];
const urls = [...staticPages.map(path => `${ORIGIN}/${path}`), ...data.articles.map(a => `${ORIGIN}/insights/${a.id}.html`)];
writeFileSync('sitemap.xml', `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls.map(u => `  <url><loc>${u}</loc><lastmod>${data.updatedAt}</lastmod></url>`).join('\n')}\n</urlset>\n`);

console.log(`Built insights.html, ${data.articles.length} article pages, ${serviceData.services.length + 1} service pages, llms.txt and sitemap.xml.`);
