/* ============================================
   VINYL X – Internationalization (i18n)
   ============================================ */

(function () {
  'use strict';

  var translations = null;
  var currentLang = localStorage.getItem('vinylx-lang') || 'ko';
  var originalTexts = new Map();

  // Fetch translations JSON (cached by browser)
  function loadTranslations() {
    if (translations) return Promise.resolve(translations);
    return fetch('data/translations.json?v=5')
      .then(function (r) { return r.json(); })
      .then(function (data) { translations = data; return data; });
  }

  // Get nested value from object by dot-path key (e.g. "common.footer-desc")
  function getTranslation(key, lang) {
    if (!translations) return null;
    var parts = key.split('.');
    var obj = translations;
    for (var i = 0; i < parts.length; i++) {
      obj = obj[parts[i]];
      if (!obj) return null;
    }
    return obj[lang] || null;
  }

  // Store original Korean text on first run
  function storeOriginal(el, attr) {
    var mapKey = el;
    if (!originalTexts.has(mapKey)) {
      originalTexts.set(mapKey, attr === 'html' ? el.innerHTML : el.textContent);
    }
  }

  // Apply translations to all [data-i18n] elements
  function applyTranslations(lang) {
    var elements = document.querySelectorAll('[data-i18n]');
    elements.forEach(function (el) {
      var key = el.getAttribute('data-i18n');
      var useHtml = el.hasAttribute('data-i18n-html');

      // Store original Korean text
      storeOriginal(el, useHtml ? 'html' : 'text');

      if (lang === 'ko') {
        // Restore original Korean
        var original = originalTexts.get(el);
        if (original !== undefined) {
          if (useHtml) el.innerHTML = original;
          else el.textContent = original;
        }
      } else {
        // Apply English translation
        var text = getTranslation(key, lang);
        if (text) {
          if (useHtml) el.innerHTML = text;
          else el.textContent = text;
        }
      }
    });
  }

  // Update toggle UI
  function updateToggleUI(lang) {
    var toggles = document.querySelectorAll('.lang-toggle');
    toggles.forEach(function (toggle) {
      var options = toggle.querySelectorAll('.lang-option');
      options.forEach(function (opt) {
        if (opt.getAttribute('data-lang') === lang) {
          opt.classList.add('is-active');
        } else {
          opt.classList.remove('is-active');
        }
      });
    });
  }


  // Korean-only pages: show a small notice in English mode
  function updateLangOnlyNotice(lang) {
    var only = document.body && document.body.getAttribute('data-lang-only');
    var el = document.getElementById('langOnlyNotice');
    if (!only || lang === only) { if (el) el.remove(); return; }
    if (el) return;
    el = document.createElement('div');
    el.id = 'langOnlyNotice';
    el.className = 'lang-only-notice';
    el.setAttribute('role', 'status');
    el.innerHTML = '<span>This page is available in Korean only.</span><button type="button" aria-label="Close">×</button>';
    el.querySelector('button').addEventListener('click', function () { el.remove(); });
    document.body.appendChild(el);
  }

  // Set language
  function setLang(lang) {
    currentLang = lang;
    localStorage.setItem('vinylx-lang', lang);
    document.documentElement.lang = lang;

    loadTranslations().then(function () {
      applyTranslations(lang);
      updateToggleUI(lang);
      updateLangOnlyNotice(lang);
      // Dispatch event for dynamic content (portfolio.js)
      document.dispatchEvent(new CustomEvent('vinylx-lang-change', { detail: { lang: lang } }));
    });
  }

  // Get current language
  function getLang() {
    return currentLang;
  }

  // Initialize on DOM ready
  function init() {
    // Set initial html lang
    document.documentElement.lang = currentLang;

    // Update toggle UI
    updateToggleUI(currentLang);
    updateLangOnlyNotice(currentLang);

    // Bind toggle click events
    document.querySelectorAll('.lang-toggle').forEach(function (toggle) {
      toggle.addEventListener('click', function (e) {
        var option = e.target.closest('.lang-option');
        if (!option) return;
        var lang = option.getAttribute('data-lang');
        if (lang && lang !== currentLang) {
          setLang(lang);
        }
      });
    });

    // If English was previously selected, apply translations
    if (currentLang !== 'ko') {
      setLang(currentLang);
    }
  }

  // Run init when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

  // Expose global API
  window.VinylxI18n = {
    setLang: setLang,
    getLang: getLang,
    loadTranslations: loadTranslations
  };

})();
