/* ============================================
   VINYL X — Portfolio Page Logic
   ============================================ */
(function () {
  const grid = document.getElementById('portfolioGrid');
  const countEl = document.querySelector('.portfolio-count');
  const loadMoreBtn = document.getElementById('loadMoreBtn');
  const modal = document.getElementById('projectModal');
  const backdrop = document.getElementById('projectBackdrop');
  const modalContent = document.getElementById('projectModalContent');
  const modalCloseBtn = document.getElementById('projectModalClose');
  if (!grid) return;

  let allProjects = [];
  let filteredProjects = [];
  let visibleCount = 12;
  let activeFilter = 'all';
  let savedScrollY = 0;

  // Category mapping: DB slug → display name
  const categoryMap = {
    'open-innovation': 'Service Accelerating',
    'digital-transformation': 'Digital & AI Production',
    'company-building': 'Company Building',
    'entertainment-design': 'Entertainment Design'
  };

  // Filter slug mapping: button data-filter → DB category names
  const filterToCategory = {
    'all': null,
    'company-building': 'Company Building',
    'service-accelerating': 'Open Innovation',
    'digital-production': 'Digital Transformation',
    'entertainment-design': 'Entertainment Design'
  };

  // Fetch portfolio data
  fetch('data/portfolio-db.json?v=4')
    .then(res => res.json())
    .then(data => {
      allProjects = data.portfolio.filter(p => p.featured_image_url);
      filteredProjects = [...allProjects];
      updateCount();
      renderGrid();
      initReveal();
      const slug = (location.hash || '').slice(1);
      const target = slug && allProjects.find(p => p.slug === slug);
      if (target && !target.page) openModal(target);
    })
    .catch(err => console.error('Portfolio load error:', err));

  // Filter buttons
  document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('is-active'));
      btn.classList.add('is-active');
      activeFilter = btn.dataset.filter;
      visibleCount = 12;

      if (activeFilter === 'all') {
        filteredProjects = [...allProjects];
      } else {
        const targetCategory = filterToCategory[activeFilter];
        filteredProjects = allProjects.filter(p => p.category === targetCategory);
      }

      updateCount();
      renderGrid();
      setTimeout(initReveal, 50);
    });
  });

  // Load more
  if (loadMoreBtn) {
    loadMoreBtn.addEventListener('click', () => {
      visibleCount += 12;
      renderGrid();
      setTimeout(initReveal, 50);
    });
  }

  function updateCount() {
    if (countEl) countEl.textContent = `${filteredProjects.length} Projects`;
  }

  const isEN = () => (window.VinylxI18n && window.VinylxI18n.getLang && window.VinylxI18n.getLang()) === 'en';
  const yearNum = (p) => { const m = String(p.year || p.date || '').match(/(\d{4})(?!.*\d{4})/); return m ? +m[1] : 0; };
  const ARCHIVE_BEFORE = 2023;
  const tagNameMap = { 'Open Innovation': 'Service Accelerating', 'Digital Transformation': 'Digital & AI Production' };
  const catDisplay = (p) => categoryMap[p.category?.toLowerCase().replace(/\s+/g, '-')] || p.category || '';
  const titleOf = (p) => (isEN() && p.title_en) || p.title;
  const esc = (t) => String(t == null ? '' : t).replace(/[&<>"]/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));

  function cardHTML(project, i) {
    const awards = project.awards && project.awards.length > 0
      ? `<div class="portfolio-card-awards">${project.awards.map(a => `<span>${esc(a)}</span>`).join('')}</div>`
      : '';
    const href = project.page || '#';
    return `
        <a href="${href}" class="portfolio-card" data-slug="${esc(project.slug)}"
           style="transition-delay: ${(i % 6) * 0.06}s;">
          <div class="portfolio-card-img">
            <img src="${esc(project.featured_image_url || project.thumbnail_url)}" alt="${esc(titleOf(project))}" loading="lazy">
          </div>
          <div class="portfolio-card-info">
            <h3 class="portfolio-card-title">${esc(titleOf(project))}</h3>
            <div class="portfolio-card-meta">
              <span>${esc(catDisplay(project))}</span>
              <span>${esc(project.year || '')}</span>
            </div>
            ${awards}
          </div>
        </a>`;
  }

  function renderGrid() {
    const sorted = [...filteredProjects].sort((x, y) => yearNum(y) - yearNum(x));
    filteredProjects = sorted;
    const items = sorted.slice(0, visibleCount);
    let html = '';
    let archiveShown = false;
    items.forEach((project, i) => {
      if (!archiveShown && yearNum(project) < ARCHIVE_BEFORE) {
        archiveShown = true;
        html += `<div class="portfolio-archive-head"><h2>Archive</h2><span>${isEN() ? 'Projects 2019–2022' : '2019–2022 프로젝트'}</span></div>`;
      }
      html += cardHTML(project, i);
    });
    grid.innerHTML = html;

    // Show/hide load more
    if (loadMoreBtn) {
      loadMoreBtn.style.display = visibleCount >= filteredProjects.length ? 'none' : '';
    }

    // Image fade-in
    grid.querySelectorAll('img').forEach(img => {
      if (img.complete && img.naturalWidth > 0) {
        img.classList.add('is-loaded');
      } else {
        img.addEventListener('load', () => img.classList.add('is-loaded'), { once: true });
        img.addEventListener('error', () => img.classList.add('is-loaded'), { once: true });
      }
    });

    // Card click → detail page or modal
    grid.querySelectorAll('.portfolio-card').forEach(card => {
      card.addEventListener('click', (e) => {
        const project = allProjects.find(p => p.slug === card.dataset.slug);
        if (!project || project.page) return;
        e.preventDefault();
        openModal(project);
      });
    });
  }

  // ---- Modal Logic ----

  function openModal(project) {
    if (!modal || !modalContent) return;
    const en = isEN();
    const awards = project.awards && project.awards.length > 0
      ? `<div class="project-modal-awards">${project.awards.map(a => `<span>${esc(a)}</span>`).join('')}</div>`
      : '';
    const CAT_TAGS = ['Open Innovation', 'Digital Transformation', 'Company Building', 'Entertainment Design', 'Design'];
    const scopeTags = (project.tags || []).filter(t => !CAT_TAGS.includes(t));
    const tags = '';

    const images = [];
    if (project.featured_image_url) images.push(project.featured_image_url);
    (project.detail_images || []).forEach(img => { if (img && !images.includes(img)) images.push(img); });
    const imagesHTML = images.map(src => `<img src="${esc(src)}" alt="${esc(titleOf(project))}" loading="lazy">`).join('');

    const linkHTML = project.link
      ? `<a href="${esc(project.link)}" target="_blank" rel="noopener" class="project-modal-link">
           VIEW LIVE SITE
           <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M7 17L17 7M17 7H7M17 7v10"/></svg>
         </a>`
      : '';
    const desc = en ? (project.description_en || project.excerpt_en || project.description || project.excerpt || '')
                    : (project.description || project.excerpt || '');
    const client = en ? (project.client_en || project.client) : project.client;
    const rows = [
      [en ? 'Client' : '클라이언트', client],
      [en ? 'Year' : '연도', project.year],
      [en ? 'Category' : '분야', catDisplay(project)],
      [en ? 'Scope' : '범위', scopeTags.join(' · ')]
    ].filter(r => r[1]);

    const list = filteredProjects.filter(p => !p.page);
    const idx = list.findIndex(p => p.slug === project.slug);
    const prev = idx > 0 ? list[idx - 1] : null;
    const next = idx >= 0 && idx < list.length - 1 ? list[idx + 1] : null;
    const navBtn = (p, dir) => p
      ? `<button type="button" class="pm-nav-btn ${dir}" data-slug="${esc(p.slug)}"><small>${dir === 'prev' ? (en ? 'PREV' : '이전') : (en ? 'NEXT' : '다음')}</small><span>${esc(titleOf(p))}</span></button>`
      : '<span></span>';

    modalContent.innerHTML = `
      <h2 class="project-modal-title">${esc(titleOf(project))}</h2>
      ${desc ? `<p class="project-modal-desc">${esc(desc)}</p>` : ''}
      ${project.confidential ? `<p class="pm-confidential">${en ? 'This is a confidential project, so details are not disclosed.' : '대외비 프로젝트로 상세 내용은 공개하지 않습니다.'}</p>` : ''}
      <dl class="pm-facts">${rows.map(r => `<div><dt>${r[0]}</dt><dd>${esc(r[1])}</dd></div>`).join('')}</dl>
      ${awards}
      ${tags}
      <div class="project-modal-images">${imagesHTML}</div>
      ${linkHTML}
      <nav class="pm-nav">${navBtn(prev, 'prev')}${navBtn(next, 'next')}</nav>
    `;
    modalContent.querySelectorAll('.pm-nav-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const p = allProjects.find(x => x.slug === btn.dataset.slug);
        if (p) { openModal(p); }
      });
    });

    // Image fade-in inside modal
    modalContent.querySelectorAll('.project-modal-images img').forEach(img => {
      if (img.complete && img.naturalWidth > 0) {
        img.classList.add('is-loaded');
      } else {
        img.addEventListener('load', () => img.classList.add('is-loaded'), { once: true });
        img.addEventListener('error', () => img.classList.add('is-loaded'), { once: true });
      }
    });

    // Lock body scroll (once)
    if (!modal.classList.contains('is-open')) {
    savedScrollY = window.scrollY;
    document.body.style.position = 'fixed';
    document.body.style.top = `-${savedScrollY}px`;
    document.body.style.width = '100%';
    }

    // Open
    modal.classList.add('is-open');
    backdrop.classList.add('is-open');
    modal.scrollTop = 0;
  }

  function closeModal() {
    if (!modal) return;
    modal.classList.remove('is-open');
    backdrop.classList.remove('is-open');

    // Unlock body scroll
    document.body.style.position = '';
    document.body.style.top = '';
    document.body.style.width = '';
    window.scrollTo(0, savedScrollY);
  }

  // Close handlers
  if (modalCloseBtn) modalCloseBtn.addEventListener('click', closeModal);
  if (backdrop) backdrop.addEventListener('click', closeModal);
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal && modal.classList.contains('is-open')) closeModal();
  });

  // Touch swipe to close (right swipe)
  if (modal) {
    let touchStartX = 0, touchDeltaX = 0;
    modal.addEventListener('touchstart', (e) => {
      touchStartX = e.touches[0].clientX;
      touchDeltaX = 0;
    }, { passive: true });
    modal.addEventListener('touchmove', (e) => {
      touchDeltaX = e.touches[0].clientX - touchStartX;
      if (touchDeltaX > 0) {
        modal.style.transition = 'none';
        modal.style.transform = `translateX(${touchDeltaX}px)`;
      }
    }, { passive: true });
    modal.addEventListener('touchend', () => {
      modal.style.transition = '';
      if (touchDeltaX > 80) {
        closeModal();
      } else {
        modal.style.transform = modal.classList.contains('is-open') ? 'translateX(0)' : '';
      }
    }, { passive: true });
  }

  function initReveal() {
    if (!('IntersectionObserver' in window)) {
      grid.querySelectorAll('.portfolio-card').forEach(el => el.classList.add('visible'));
      return;
    }
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -30px 0px' });
    grid.querySelectorAll('.portfolio-card:not(.visible)').forEach(el => observer.observe(el));
  }

  // Re-render when language changes
  document.addEventListener('vinylx-lang-change', function() {
    if (allProjects.length > 0) {
      renderGrid();
      setTimeout(initReveal, 50);
    }
  });
})();
