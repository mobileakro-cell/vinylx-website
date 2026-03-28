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
  fetch('data/portfolio-db.json')
    .then(res => res.json())
    .then(data => {
      allProjects = data.portfolio.filter(p => p.featured_image_url);
      filteredProjects = [...allProjects];
      updateCount();
      renderGrid();
      initReveal();
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

  function renderGrid() {
    const items = filteredProjects.slice(0, visibleCount);
    grid.innerHTML = items.map((project, i) => {
      const sizeClass = (i % 4 === 0 || i % 4 === 3) ? 'card-large' : 'card-medium';
      const categoryDisplay = categoryMap[project.category?.toLowerCase().replace(/\s+/g, '-')] || project.category || '';
      const awards = project.awards && project.awards.length > 0
        ? `<div class="portfolio-card-awards">${project.awards.map(a => `<span>${a}</span>`).join('')}</div>`
        : '';

      return `
        <a href="#" class="portfolio-card ${sizeClass}" data-slug="${project.slug}"
           style="transition-delay: ${(i % 6) * 0.08}s;">
          <div class="portfolio-card-img">
            <img src="${project.featured_image_url || project.thumbnail_url}" alt="${project.title}" loading="lazy">
          </div>
          <div class="portfolio-card-info">
            <h3 class="portfolio-card-title">${project.title}</h3>
            <div class="portfolio-card-meta">
              <span>${categoryDisplay}</span>
              <span>${project.year || ''}</span>
            </div>
            ${awards}
          </div>
        </a>
      `;
    }).join('');

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

    // Card click → open modal
    grid.querySelectorAll('.portfolio-card').forEach(card => {
      card.addEventListener('click', (e) => {
        e.preventDefault();
        const slug = card.dataset.slug;
        const project = allProjects.find(p => p.slug === slug);
        if (project) openModal(project);
      });
    });
  }

  // ---- Modal Logic ----

  function openModal(project) {
    if (!modal || !modalContent) return;

    const categoryDisplay = categoryMap[project.category?.toLowerCase().replace(/\s+/g, '-')] || project.category || '';

    const awards = project.awards && project.awards.length > 0
      ? `<div class="project-modal-awards">${project.awards.map(a => `<span>${a}</span>`).join('')}</div>`
      : '';

    const tags = project.tags && project.tags.length > 0
      ? `<div class="project-modal-tags">${project.tags.map(t => `<span>${t}</span>`).join('')}</div>`
      : '';

    // Detail images + featured image
    const images = [];
    if (project.featured_image_url) images.push(project.featured_image_url);
    if (project.detail_images && project.detail_images.length > 0) {
      project.detail_images.forEach(img => { if (img) images.push(img); });
    }

    const imagesHTML = images.map(src =>
      `<img src="${src}" alt="${project.title}" loading="lazy">`
    ).join('');

    const linkHTML = project.link
      ? `<a href="${project.link}" target="_blank" rel="noopener" class="project-modal-link">
           VIEW LIVE SITE
           <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
             <path d="M7 17L17 7M17 7H7M17 7v10"/>
           </svg>
         </a>`
      : '';

    modalContent.innerHTML = `
      <h2 class="project-modal-title">${project.title}</h2>
      <div class="project-modal-meta">
        <span>${categoryDisplay}</span>
        <span>${project.year || ''}</span>
        ${project.client ? `<span>${project.client}</span>` : ''}
      </div>
      <p class="project-modal-desc">${(function(){ var l = window.VinylxI18n && window.VinylxI18n.getLang(); return l === 'en' ? (project.description_en || project.description || project.excerpt_en || project.excerpt || '') : (project.description || project.excerpt || ''); })()}</p>
      ${tags}
      ${awards}
      <div class="project-modal-images">${imagesHTML}</div>
      ${linkHTML}
    `;

    // Image fade-in inside modal
    modalContent.querySelectorAll('.project-modal-images img').forEach(img => {
      if (img.complete && img.naturalWidth > 0) {
        img.classList.add('is-loaded');
      } else {
        img.addEventListener('load', () => img.classList.add('is-loaded'), { once: true });
        img.addEventListener('error', () => img.classList.add('is-loaded'), { once: true });
      }
    });

    // Lock body scroll
    savedScrollY = window.scrollY;
    document.body.style.position = 'fixed';
    document.body.style.top = `-${savedScrollY}px`;
    document.body.style.width = '100%';

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
