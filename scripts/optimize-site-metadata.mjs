import { readFileSync, writeFileSync } from 'node:fs';

const origin = 'https://vinyl-x.com';

// Entity facts AI search engines use to identify the company (keep in sync with llms.txt)
const ORGANIZATION = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  '@id': `${origin}/#organization`,
  name: 'VINYL X',
  alternateName: ['바이널엑스', 'VinylX', 'VINYLX', 'Vinyl X'],
  description: '바이널엑스(VINYL X)는 산업 도메인과 사용자 경험을 연결해 AX 컨설팅, UI/UX 컨설팅, 서비스디자인·리빙랩, Company Building을 제공하는 서울 성수동의 서비스 경험 디자인 회사입니다.',
  url: origin,
  logo: `${origin}/images/vinylx-logo-color.png`,
  image: `${origin}/images/vinylx-insight-og.png`,
  email: 'INFO@VINYL-X.COM',
  telephone: '+82-2-6200-6559',
  foundingDate: '2012',
  address: { '@type': 'PostalAddress', streetAddress: '왕십리로 115 서울숲 M타워', addressLocality: '성동구', addressRegion: '서울특별시', addressCountry: 'KR' },
  areaServed: 'KR',
  knowsAbout: ['AX 컨설팅', 'AI 전환', 'AI 기반 서비스 운영모델', 'UI/UX 컨설팅', 'UX 리서치', 'UX 전략', '서비스디자인', '리빙랩', 'AI 경험 설계', 'Company Building', '스타트업 액셀러레이팅'],
  makesOffer: [
    { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'AX 컨설팅', url: `${origin}/ax-consulting.html` } },
    { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'UI/UX 컨설팅', url: `${origin}/ux-consulting.html` } }
  ],
  subOrganization: { '@type': 'Organization', name: 'AX 리빙랩', alternateName: 'AX Living Lab', url: 'https://axlivinglab.com' },
  sameAs: ['https://blog.naver.com/vinylx', 'https://www.instagram.com/vinyl_x_official', 'https://www.facebook.com/vinylxdesign']
};
const pages = {
  'interaction.html': { path: '/', type: 'WebSite', title: 'VINYL X 바이널엑스 | AX 컨설팅 · UI/UX 컨설팅 · 서비스디자인', description: '바이널엑스(VINYL X)는 2012년 설립된 서울 성수동의 서비스 경험 디자인 회사로, AX 컨설팅, UI/UX 컨설팅, 서비스디자인·리빙랩, Company Building을 제공합니다.' },
  'about.html': { path: '/about.html', type: 'AboutPage', title: 'About | VINYL X', description: '산업 도메인과 사용자 경험을 연결해 AX 컨설팅, UI/UX 컨설팅, 서비스디자인으로 비즈니스의 변화를 설계하는 바이널엑스(VINYL X)를 소개합니다.' },
  'portfolio.html': { path: '/portfolio.html', type: 'CollectionPage', title: 'Portfolio | VINYL X', description: '엔터테인먼트, 리테일, 제조, 축산, 공공·지역 분야의 서비스 전략과 UX 프로젝트.' },
  'log.html': { path: '/log.html', type: 'CollectionPage', title: 'Log | VINYL X', description: 'VINYL X의 프로젝트, 실증 과정, 이벤트와 디자인 현장 기록.' },
  'insights.html': { path: '/insights.html', type: 'CollectionPage', title: 'Insight | VINYL X', description: '산업의 변화를 읽고 실제 프로젝트의 질문으로 옮기는 VINYL X의 핵심 인사이트.' },
  'contact.html': { path: '/contact.html', type: 'ContactPage', title: 'Contact | VINYL X', description: '산업별 서비스 전략, UX·AX, 디지털 제품과 지역·공공 경험 프로젝트를 VINYL X와 논의하세요.' },
  'project-livinglab.html': { path: '/project-livinglab.html', type: 'CreativeWork', title: '산업단지 디자인리빙랩 | VINYL X', description: '산업단지의 이동, 안전, 문화와 근로자 경험을 서비스디자인으로 개선한 VINYL X 프로젝트.' }
};

for (const [file, meta] of Object.entries(pages)) {
  let html = readFileSync(file, 'utf8');
  const url = `${origin}${meta.path}`;
  html = html.replace(/\s*<!-- SITE-SEO:START -->[\s\S]*?<!-- SITE-SEO:END -->/g, '');
  html = html.replace(/\s*<link rel="canonical"[^>]*>/gi, '');
  html = html.replace(/\s*<meta property="og:(?:title|description|type|url|image)"[^>]*>/gi, '');
  html = html.replace(/\s*<meta name="twitter:[^"]+"[^>]*>/gi, '');
  html = html.replace(/<title>[\s\S]*?<\/title>/i, `<title>${meta.title}</title>`);
  html = html.replace(/<meta name="description" content="[^"]*">/i, `<meta name="description" content="${meta.description}">`);
  const structured = meta.type === 'WebSite'
    ? [ORGANIZATION, { '@context': 'https://schema.org', '@type': 'WebSite', '@id': `${origin}/#website`, name: 'VINYL X', alternateName: '바이널엑스', url: origin, inLanguage: 'ko-KR', publisher: { '@id': `${origin}/#organization` } }]
    : { '@context': 'https://schema.org', '@type': meta.type, name: meta.title.replace(' | VINYL X', ''), description: meta.description, url, inLanguage: 'ko-KR', isPartOf: { '@type': 'WebSite', name: 'VINYL X', url: origin } };
  const block = `\n  <!-- SITE-SEO:START -->\n  <link rel="canonical" href="${url}">\n  <meta name="robots" content="index,follow,max-image-preview:large,max-snippet:-1,max-video-preview:-1">\n  <meta property="og:title" content="${meta.title}">\n  <meta property="og:description" content="${meta.description}">\n  <meta property="og:type" content="website">\n  <meta property="og:url" content="${url}">\n  <meta property="og:image" content="${origin}/images/vinylx-insight-og.png">\n  <meta name="twitter:card" content="summary_large_image">\n  <meta name="twitter:title" content="${meta.title}">\n  <meta name="twitter:description" content="${meta.description}">\n  <meta name="twitter:image" content="${origin}/images/vinylx-insight-og.png">\n  <script type="application/ld+json">${JSON.stringify(structured).replace(/</g, '\\u003c')}</script>\n  <!-- SITE-SEO:END -->`;
  html = html.replace('</head>', `${block}\n</head>`);
  writeFileSync(file, html);
}

// The root URL must serve real content (not a JS redirect) so crawlers without JS can read the home page.
writeFileSync('index.html', readFileSync('interaction.html', 'utf8'));

console.log(`Optimized metadata for ${Object.keys(pages).length} pages.`);
