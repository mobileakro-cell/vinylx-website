/* ============================================
   EP Interaction Page – JavaScript
   ============================================ */

document.addEventListener('DOMContentLoaded', () => {

  // ---- Custom Cursor ----
  const cursor = document.querySelector('.cursor-dot');
  let cursorX = 0, cursorY = 0;
  let currentX = 0, currentY = 0;

  // Only enable custom cursor on non-touch devices
  const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;

  if (!isTouchDevice) {
    document.addEventListener('mousemove', (e) => {
      cursorX = e.clientX;
      cursorY = e.clientY;
    });

    function animateCursor() {
      currentX += (cursorX - currentX) * 0.15;
      currentY += (cursorY - currentY) * 0.15;
      if (cursor) {
        cursor.style.left = currentX + 'px';
        cursor.style.top = currentY + 'px';
      }
      requestAnimationFrame(animateCursor);
    }
    animateCursor();

    // Cursor states (event delegation for dynamic elements)
    if (cursor) {
      document.addEventListener('mouseover', (e) => {
        const target = e.target.closest('a, button');
        const row = e.target.closest('.project-row, .mission-row');
        if (row) {
          cursor.classList.add('is-title');
          cursor.classList.remove('is-larger');
        } else if (target) {
          cursor.classList.add('is-larger');
        }
      });

      document.addEventListener('mouseout', (e) => {
        const target = e.target.closest('a, button');
        const row = e.target.closest('.project-row, .mission-row');
        if (row || target) {
          cursor.classList.remove('is-larger');
          cursor.classList.remove('is-title');
        }
      });

      document.addEventListener('mousedown', () => cursor.classList.add('cursor-smaller'));
      document.addEventListener('mouseup', () => cursor.classList.remove('cursor-smaller'));
    }
  }

  // ---- Service Panel ----
  const servicePanel = document.getElementById('servicePanel');
  const servicePanelBackdrop = document.getElementById('servicePanelBackdrop');
  const servicePanelClose = document.querySelector('.service-panel-close');
  const serviceDetails = document.querySelectorAll('.service-detail');

  const isMobileDevice = () => window.innerWidth <= 768;
  let savedScrollY = 0;

  function lockBodyScroll() {
    savedScrollY = window.scrollY;
    document.body.classList.add('no-scroll');
    document.body.style.top = `-${savedScrollY}px`;
  }

  function unlockBodyScroll() {
    document.body.classList.remove('no-scroll');
    document.body.style.top = '';
    window.scrollTo(0, savedScrollY);
  }

  function openServicePanel(serviceId) {
    if (!servicePanel || !servicePanelBackdrop) return;
    serviceDetails.forEach(d => d.classList.remove('is-active'));
    const target = document.querySelector(`[data-detail="${serviceId}"]`);
    if (target) target.classList.add('is-active');
    servicePanel.classList.add('is-open');
    servicePanelBackdrop.classList.add('is-visible');
    lockBodyScroll();
    // On mobile: scroll panel to top
    if (isMobileDevice()) {
      servicePanel.scrollTop = 0;
    }
  }

  function closeServicePanel() {
    if (!servicePanel || !servicePanelBackdrop) return;
    servicePanel.classList.remove('is-open');
    servicePanelBackdrop.classList.remove('is-visible');
    unlockBodyScroll();
    setTimeout(() => {
      serviceDetails.forEach(d => d.classList.remove('is-active'));
    }, 500);
  }

  document.querySelectorAll('.mission-row[data-service]').forEach(row => {
    row.addEventListener('click', () => {
      openServicePanel(row.dataset.service);
    });
  });

  if (servicePanelClose) servicePanelClose.addEventListener('click', closeServicePanel);
  // Backdrop click: only close on desktop (mobile has no backdrop)
  if (servicePanelBackdrop) {
    servicePanelBackdrop.addEventListener('click', () => {
      if (!isMobileDevice()) closeServicePanel();
    });
  }

  // Mobile: prevent background scroll when panel is open
  if (servicePanel) {
    document.addEventListener('touchmove', (e) => {
      if (!servicePanel.classList.contains('is-open')) return;
      if (!isMobileDevice()) return;
      // If project modal is open, don't block any touch — let modal handle scroll
      const pm = document.getElementById('projectModal');
      if (pm && pm.classList.contains('is-open')) return;
      // Allow scroll only inside the service panel
      if (!servicePanel.contains(e.target)) {
        e.preventDefault();
      }
    }, { passive: false });
  }

  // ESC key to close
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeServicePanel();
  });

  // ---- Menu Toggle ----
  const menuToggle = document.querySelector('.menu-toggle');
  const menuOverlay = document.querySelector('.menu-overlay');
  let menuOpen = false;

  if (menuToggle && menuOverlay) {
    menuToggle.addEventListener('click', () => {
      menuOpen = !menuOpen;
      menuOverlay.classList.toggle('active', menuOpen);
      document.body.classList.toggle('no-scroll', menuOpen);
      menuToggle.textContent = menuOpen ? 'CLOSE' : 'MENU';
    });

    document.querySelectorAll('.menu-link').forEach(link => {
      link.addEventListener('click', () => {
        menuOpen = false;
        menuOverlay.classList.remove('active');
        document.body.classList.remove('no-scroll');
        menuToggle.textContent = 'MENU';
      });
    });
  }

  // ---- Parallax Gallery Images ----
  const galleryItems = document.querySelectorAll('.gallery-item');
  const gallerySection = document.querySelector('.gallery-section');

  function updateParallax() {
    if (!gallerySection) return;
    const scrollY = window.scrollY;
    const galleryTop = gallerySection.offsetTop;
    const galleryScroll = scrollY - galleryTop + window.innerHeight;
    const galleryHeight = gallerySection.offsetHeight;

    const isMobile = window.innerWidth <= 768;
    const mobileDampen = isMobile ? 0.65 : 1;

    galleryItems.forEach((item, index) => {
      const speed = parseFloat(item.dataset.speed) || 0.3;
      const scrollRatio = Math.max(0, Math.min(1, galleryScroll / galleryHeight));

      // Y parallax
      const yOffset = Math.max(0, galleryScroll) * speed * 0.5 * mobileDampen;

      // X drift — wave sway
      const xDir = index % 2 === 0 ? 1 : -1;
      const xWave = Math.sin(scrollRatio * Math.PI * 1.5 + index * 0.8);
      const xDrift = xDir * speed * xWave * 55 * mobileDampen;

      // Scale
      const baseScale = 0.88;
      const scale = baseScale + (1 - baseScale) * Math.min(1, scrollRatio * (2 + speed));

      item.style.transform = `translate(${xDrift}px, ${-yOffset}px) scale(${scale})`;
    });
  }

  // ---- Hero Text Scroll Animation ----
  const heroLines_dark = document.querySelectorAll('.hero-text .hero-line');
  const heroLines_light = document.querySelectorAll('.hero-text-overlay .hero-line');
  // ---- Mobile: measure text widths for dynamic layout ----
  // START: Service=left, Experience=right, Design=center
  // END (scroll): S-E-D vertically aligned, block centered on screen

  // Measure actual rendered text width using a temporary inline element
  // (canvas.measureText ignores letter-spacing and may use wrong font before webfont loads)
  const measureSpan = document.createElement('span');
  measureSpan.style.cssText = 'position:absolute;visibility:hidden;white-space:nowrap;pointer-events:none;';
  document.body.appendChild(measureSpan);

  function measureTextWidth(element) {
    const style = getComputedStyle(element);
    measureSpan.style.font = style.font;
    measureSpan.style.fontWeight = style.fontWeight;
    measureSpan.style.letterSpacing = style.letterSpacing;
    measureSpan.textContent = element.textContent.trim();
    return measureSpan.getBoundingClientRect().width;
  }

  function getMobileTextMetrics() {
    const container = heroLines_dark[0]?.parentElement;
    if (!container) return null;
    const containerStyle = getComputedStyle(container);
    const containerWidth = container.clientWidth
      - parseFloat(containerStyle.paddingLeft)
      - parseFloat(containerStyle.paddingRight);
    const widths = Array.from(heroLines_dark).map(line => measureTextWidth(line));
    // widths: [Service, Experience, Design *]
    const maxWidth = Math.max(...widths);
    // Center offset: push all lines right so the block (based on widest) is centered
    const centerBlockOffset = (containerWidth - maxWidth) / 2;
    return { containerWidth, widths, maxWidth, centerBlockOffset };
  }

  function getEndOffsets() {
    const sampleLine = heroLines_dark[0] || heroLines_light[0];
    if (!sampleLine) return [0, 0, 0];
    const fontSize = parseFloat(getComputedStyle(sampleLine).fontSize) || 50;
    const isMobile = window.innerWidth <= 768;

    if (isMobile) {
      // END: S-E-D vertically aligned, block centered on screen
      const m = getMobileTextMetrics();
      if (!m) return [0, 0, 0];
      // All lines get the same offset to center the block
      return [m.centerBlockOffset, m.centerBlockOffset, m.centerBlockOffset];
    }
    return [0, -2.39 * fontSize, -0.43 * fontSize];
  }

  function getStartOffsets() {
    const sampleLine = heroLines_dark[0] || heroLines_light[0];
    if (!sampleLine) return [0, 0, 0];
    const fontSize = parseFloat(getComputedStyle(sampleLine).fontSize) || 50;
    const isMobile = window.innerWidth <= 768;

    if (isMobile) {
      // START: 줄마다 다른 시작 위치로 다이나믹한 레이아웃
      const m = getMobileTextMetrics();
      if (!m) return [0, 0, 0];
      const start1 = 0;   // Service: 왼쪽 정렬
      const start2 = m.containerWidth - m.widths[1] - 20; // Experience: 오른쪽 정렬
      const start3 = m.containerWidth - m.widths[2] - 25; // Design: 우측정렬 (패딩 안쪽, 잘림 방지)
      return [start1, start2, start3];
    }
    return [-1.2 * fontSize, -0.5 * fontSize, 0];
  }

  function easeOutCubic(t) {
    return 1 - Math.pow(1 - t, 3);
  }

  function updateHeroTextMotion() {
    if (!gallerySection) return;
    const scrollY = window.scrollY;
    const galleryTop = gallerySection.offsetTop;
    const galleryHeight = gallerySection.offsetHeight;

    const totalDistance = galleryTop + galleryHeight - window.innerHeight;
    if (totalDistance <= 0) return;

    const rawProgress = Math.max(0, Math.min(1, scrollY / totalDistance));
    const isMobile = window.innerWidth <= 768;

    const endOffsets = getEndOffsets();
    const startOffsets = getStartOffsets();

    // Different easing speeds per line for dynamic feel
    const lineSpeedMultipliers = isMobile ? [0.7, 1.0, 1.5] : [1, 1, 1];

    startOffsets.forEach((startOffset, i) => {
      const endOffset = endOffsets[i];
      // Each line progresses at a different rate
      const lineProgress = Math.max(0, Math.min(1, rawProgress * lineSpeedMultipliers[i]));
      const easedProgress = easeOutCubic(lineProgress);
      const currentX = startOffset + (endOffset - startOffset) * easedProgress;

      if (isMobile) {
        // 모바일: X 이동 위주, Y는 미세하게만 (겹침 방지)
        const yOffsets = [-3, 0, 3];
        const currentY = yOffsets[i] * (1 - easedProgress);
        const tx = `translate(${currentX}px, ${currentY}px)`;

        if (heroLines_dark[i]) heroLines_dark[i].style.transform = tx;
        if (heroLines_light[i]) heroLines_light[i].style.transform = tx;
      } else {
        const tx = `translateX(${currentX}px)`;
        if (heroLines_dark[i]) heroLines_dark[i].style.transform = tx;
        if (heroLines_light[i]) heroLines_light[i].style.transform = tx;
      }
    });
  }

  // ---- Scroll-triggered Text Reveal ----
  const missionLines = document.querySelectorAll('.mission-line');

  if ('IntersectionObserver' in window) {
    const observerOptions = { threshold: 0.2, rootMargin: '0px 0px -80px 0px' };
    const revealObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, observerOptions);
    missionLines.forEach(line => revealObserver.observe(line));
  } else {
    // Fallback: show all immediately
    missionLines.forEach(line => line.classList.add('visible'));
  }

  // ---- Project Row: Floating Image Preview — disabled ----

  // ---- Magnetic Button Effect (CTA arrows) ----
  if (!isTouchDevice) {
    const magneticEls = document.querySelectorAll('.mission-cta-arrow, .project-arrow, .scroll-arrow, .contact-cta-arrow');
    magneticEls.forEach(el => {
      el.addEventListener('mousemove', (e) => {
        const rect = el.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;
        el.style.transform = `translate(${x * 0.3}px, ${y * 0.3}px)`;
      });
      el.addEventListener('mouseleave', () => {
        el.style.transform = '';
      });
    });
  }

  // ---- Log: Horizontal scroll ----
  const logWrapper = document.querySelector('.log-track-wrapper');
  const logThumb = document.querySelector('.log-scrollbar-thumb');

  if (logWrapper) {
    function updateLogThumb() {
      if (!logThumb) return;
      const max = logWrapper.scrollWidth - logWrapper.clientWidth;
      if (max <= 0) return;
      const ratio = logWrapper.scrollLeft / max;
      const thumbWidth = Math.max(10, (logWrapper.clientWidth / logWrapper.scrollWidth) * 100);
      logThumb.style.width = thumbWidth + '%';
      logThumb.style.transform = `translateX(${ratio * ((100 / thumbWidth) * 100 - 100)}%)`;
    }

    logWrapper.addEventListener('scroll', updateLogThumb);
    updateLogThumb();

    logWrapper.addEventListener('wheel', (e) => {
      const max = logWrapper.scrollWidth - logWrapper.clientWidth;
      if (max <= 0) return;

      const atStart = logWrapper.scrollLeft <= 0;
      const atEnd = logWrapper.scrollLeft >= max - 1;

      if (atStart && e.deltaY < 0) return;
      if (atEnd && e.deltaY > 0) return;

      e.preventDefault();
      logWrapper.scrollLeft += e.deltaY;
    }, { passive: false });
  }

  // ---- Scroll indicators ----
  const lightIndicator = document.getElementById('lightScrollIndicator');
  const lightIndicatorText = lightIndicator ? lightIndicator.querySelector('.scroll-indicator-text') : null;
  const missionSection = document.querySelector('.mission-section');

  function updateScrollIndicators() {
    if (!gallerySection || !lightIndicator || !missionSection) return;
    const scrollY = window.scrollY;

    const indicatorY = window.innerHeight - 40 - 25;
    const gTop = gallerySection.offsetTop - scrollY;
    const gBottom = (gallerySection.offsetTop + gallerySection.offsetHeight) - scrollY;
    const mTop = missionSection.offsetTop - scrollY;

    // Color: light bg → dark text, dark bg → white text
    if (gTop < indicatorY && gBottom > indicatorY) {
      lightIndicator.classList.add('is-light');
    } else {
      lightIndicator.classList.remove('is-light');
    }

    // Hide when mission section appears
    if (mTop < window.innerHeight * 0.9) {
      lightIndicator.style.opacity = '0';
      lightIndicator.style.pointerEvents = 'none';
    } else {
      lightIndicator.style.opacity = '1';
      lightIndicator.style.pointerEvents = '';
    }
  }

  // ---- Scroll Handler with rAF throttle ----
  let scrollTicking = false;

  function onScroll() {
    if (!scrollTicking) {
      requestAnimationFrame(() => {
        updateParallax();
        updateHeroTextMotion();
        updateScrollIndicators();
        scrollTicking = false;
      });
      scrollTicking = true;
    }
  }

  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll(); // Initial call

  // Recalculate hero text positions after web fonts load
  if (document.fonts && document.fonts.ready) {
    document.fonts.ready.then(() => {
      onScroll();
    });
  }

  // ---- Image Fade-in on Load ----
  function markImageLoaded(img) {
    img.classList.add('is-loaded');
    // Fallback for browsers without :has() support
    const parent = img.closest('.gallery-item, .log-card-img, .service-project-img');
    if (parent) parent.classList.add('img-loaded');
  }

  function initImageFadeIn() {
    const fadeImages = document.querySelectorAll(
      '.gallery-item img, .log-card-img img, .service-project-img img'
    );
    fadeImages.forEach(img => {
      if (img.complete && img.naturalWidth > 0) {
        markImageLoaded(img);
      } else {
        img.addEventListener('load', () => markImageLoaded(img), { once: true });
        img.addEventListener('error', () => markImageLoaded(img), { once: true });
      }
    });
  }
  initImageFadeIn();

  // ---- Service Panel: Swipe-to-close on touch (desktop only) ----
  // Mobile: panel is full-screen vertical slide, close only via X button
  if (isTouchDevice && servicePanel && !isMobileDevice()) {
    let touchStartX = 0;
    let touchDeltaX = 0;
    const SWIPE_THRESHOLD = 80;

    servicePanel.addEventListener('touchstart', (e) => {
      touchStartX = e.touches[0].clientX;
      touchDeltaX = 0;
      servicePanel.style.transition = 'none';
    }, { passive: true });

    servicePanel.addEventListener('touchmove', (e) => {
      touchDeltaX = e.touches[0].clientX - touchStartX;
      if (touchDeltaX > 0) {
        servicePanel.style.transform = `translateX(${touchDeltaX}px)`;
      }
    }, { passive: true });

    servicePanel.addEventListener('touchend', () => {
      servicePanel.style.transition = '';
      if (touchDeltaX > SWIPE_THRESHOLD) {
        closeServicePanel();
      } else {
        if (servicePanel.classList.contains('is-open')) {
          servicePanel.style.transform = 'translateX(0)';
        }
      }
    }, { passive: true });
  }

});

