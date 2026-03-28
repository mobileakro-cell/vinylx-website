/* ============================================
   VINYL X - Main JavaScript
   ============================================ */

document.addEventListener('DOMContentLoaded', () => {

  // ---- Mobile Navigation ----
  const hamburger = document.querySelector('.hamburger');
  const navMenu = document.querySelector('.nav-menu');

  if (hamburger) {
    hamburger.addEventListener('click', () => {
      hamburger.classList.toggle('active');
      navMenu.classList.toggle('active');
    });

    // Close menu when clicking a link
    document.querySelectorAll('.nav-menu a').forEach(link => {
      link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
      });
    });

    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
      if (!hamburger.contains(e.target) && !navMenu.contains(e.target)) {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
      }
    });
  }

  // ---- Hero Slider ----
  const slides = document.querySelectorAll('.hero-slide');
  const dots = document.querySelectorAll('.slider-dot');
  const prevBtn = document.querySelector('.slider-arrow.prev');
  const nextBtn = document.querySelector('.slider-arrow.next');
  let currentSlide = 0;
  let slideInterval;

  function showSlide(index) {
    if (slides.length === 0) return;

    slides.forEach(s => s.classList.remove('active'));
    dots.forEach(d => d.classList.remove('active'));

    currentSlide = (index + slides.length) % slides.length;
    slides[currentSlide].classList.add('active');
    if (dots[currentSlide]) {
      dots[currentSlide].classList.add('active');
    }
  }

  function nextSlide() {
    showSlide(currentSlide + 1);
  }

  function prevSlide() {
    showSlide(currentSlide - 1);
  }

  function startAutoSlide() {
    slideInterval = setInterval(nextSlide, 6000);
  }

  function resetAutoSlide() {
    clearInterval(slideInterval);
    startAutoSlide();
  }

  if (slides.length > 0) {
    if (prevBtn) {
      prevBtn.addEventListener('click', () => { prevSlide(); resetAutoSlide(); });
    }
    if (nextBtn) {
      nextBtn.addEventListener('click', () => { nextSlide(); resetAutoSlide(); });
    }
    dots.forEach((dot, i) => {
      dot.addEventListener('click', () => { showSlide(i); resetAutoSlide(); });
    });
    startAutoSlide();
  }

  // ---- Portfolio Filter ----
  const filterBtns = document.querySelectorAll('.filter-btn');
  const portfolioItems = document.querySelectorAll('.portfolio-item, .work-item');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filter = btn.getAttribute('data-filter');

      portfolioItems.forEach(item => {
        if (filter === 'all' || item.getAttribute('data-category') === filter) {
          item.style.display = '';
          setTimeout(() => { item.style.opacity = '1'; item.style.transform = 'scale(1)'; }, 50);
        } else {
          item.style.opacity = '0';
          item.style.transform = 'scale(0.8)';
          setTimeout(() => { item.style.display = 'none'; }, 300);
        }
      });
    });
  });

  // ---- Scroll Animations ----
  const animateElements = document.querySelectorAll('.service-card, .portfolio-item, .work-item, .news-card, .service-detail');

  // Add CSS for animation
  const style = document.createElement('style');
  style.textContent = `
    .scroll-hidden { opacity: 0; transform: translateY(30px); transition: opacity 0.6s ease, transform 0.6s ease; }
    .scroll-visible { opacity: 1 !important; transform: translateY(0) !important; }
  `;
  document.head.appendChild(style);

  animateElements.forEach(el => el.classList.add('scroll-hidden'));

  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('scroll-visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -30px 0px' });

    animateElements.forEach(el => observer.observe(el));

    // Fallback: reveal all after 2s in case observer doesn't fire
    setTimeout(() => {
      animateElements.forEach(el => el.classList.add('scroll-visible'));
    }, 2000);
  } else {
    // No IntersectionObserver support — show everything
    animateElements.forEach(el => el.classList.add('scroll-visible'));
  }

  // ---- Header Scroll Effect ----
  const header = document.querySelector('.header');
  if (header) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 100) {
        header.style.background = 'rgba(0, 0, 0, 0.95)';
        header.style.boxShadow = '0 2px 10px rgba(0,0,0,0.3)';
      } else {
        header.style.background = '#000';
        header.style.boxShadow = 'none';
      }
    });
  }

  // ---- Active Navigation ----
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-menu a').forEach(link => {
    const href = link.getAttribute('href');
    if (href === currentPage || (currentPage === '' && href === 'index.html')) {
      link.classList.add('active');
    }
  });

});
