// Shared internationalization runtime for the static guide pages.
// Add new languages by registering another locale dictionary with AppI18n.registerTranslations().
(function () {
  const DEFAULT_STORAGE_KEY = 'how-llms-work-language';
  const ATTRIBUTE_NAMES = ['aria-label', 'title', 'placeholder', 'alt'];
  const translations = { en: {} };
  const languageLabels = {
    en: { short: 'EN', name: 'English', htmlLang: 'en' },
    zh: { short: '中', name: '中文', htmlLang: 'zh-CN' }
  };
  let storageKey = DEFAULT_STORAGE_KEY;
  let supportedLanguages = ['en', 'zh'];

  function normalize(text) {
    return String(text || '').replace(/\s+/g, ' ').trim();
  }

  function preserveWhitespace(original, translated) {
    const leading = original.match(/^\s*/)[0];
    const trailing = original.match(/\s*$/)[0];
    return `${leading}${translated}${trailing}`;
  }

  function currentLanguage() {
    const htmlLang = document.documentElement.lang.toLowerCase();
    return htmlLang.startsWith('zh') ? 'zh' : (htmlLang.split('-')[0] || 'en');
  }

  function registerTranslations(lang, dictionary, meta) {
    translations[lang] = Object.assign(translations[lang] || {}, dictionary || {});
    languageLabels[lang] = Object.assign(languageLabels[lang] || { short: lang.toUpperCase(), name: lang }, meta || {});
    if (!supportedLanguages.includes(lang)) supportedLanguages.push(lang);
  }

  function translateText(text, lang = currentLanguage()) {
    if (lang === 'en') return text;
    const key = normalize(text);
    return translations[lang] && translations[lang][key] ? translations[lang][key] : text;
  }

  function translateTextNode(node, lang) {
    if (!node.__i18nSource) node.__i18nSource = node.nodeValue;
    const key = normalize(node.__i18nSource);
    if (!key) return;
    const translated = translateText(node.__i18nSource, lang);
    node.nodeValue = translated === node.__i18nSource ? node.__i18nSource : preserveWhitespace(node.__i18nSource, translated);
  }

  function translateAttributes(el, lang) {
    ATTRIBUTE_NAMES.forEach((attr) => {
      if (!el.hasAttribute(attr)) return;
      const sourceAttr = `data-i18n-source-${attr}`;
      if (!el.hasAttribute(sourceAttr)) el.setAttribute(sourceAttr, el.getAttribute(attr));
      const source = el.getAttribute(sourceAttr);
      el.setAttribute(attr, translateText(source, lang));
    });
  }

  function updateSwitchers(lang) {
    document.querySelectorAll('[data-lang]').forEach((btn) => {
      const active = btn.dataset.lang === lang;
      btn.classList.toggle('active', active);
      btn.setAttribute('aria-pressed', String(active));
      if (btn.tagName === 'BUTTON') btn.type = 'button';
    });
  }

  function applyLanguage(lang) {
    const nextLang = supportedLanguages.includes(lang) ? lang : 'en';
    document.documentElement.lang = (languageLabels[nextLang] && languageLabels[nextLang].htmlLang) || nextLang;
    const titleSource = document.documentElement.dataset.i18nTitle || document.title;
    document.documentElement.dataset.i18nTitle = titleSource;
    document.title = translateText(titleSource, nextLang);

    const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, {
      acceptNode(node) {
        const parent = node.parentElement;
        if (!parent || ['SCRIPT', 'STYLE', 'NOSCRIPT', 'TEXTAREA'].includes(parent.tagName)) return NodeFilter.FILTER_REJECT;
        if (parent.closest('[data-i18n-ignore]')) return NodeFilter.FILTER_REJECT;
        return normalize(node.nodeValue) ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_REJECT;
      }
    });

    const textNodes = [];
    while (walker.nextNode()) textNodes.push(walker.currentNode);
    textNodes.forEach((node) => translateTextNode(node, nextLang));
    document.querySelectorAll('*').forEach((el) => translateAttributes(el, nextLang));
    updateSwitchers(nextLang);

    try { localStorage.setItem(storageKey, nextLang); } catch (_) {}
    window.dispatchEvent(new CustomEvent('i18n:change', { detail: { lang: nextLang } }));
  }

  function detectInitialLanguage(defaultLanguage) {
    let saved = null;
    try { saved = localStorage.getItem(storageKey); } catch (_) {}
    if (saved && supportedLanguages.includes(saved)) return saved;
    if (defaultLanguage && supportedLanguages.includes(defaultLanguage)) return defaultLanguage;
    const browserLanguage = (navigator.language || '').toLowerCase();
    if (browserLanguage.startsWith('zh') && supportedLanguages.includes('zh')) return 'zh';
    return 'en';
  }

  function init(options = {}) {
    storageKey = options.storageKey || storageKey;
    supportedLanguages = options.languages || supportedLanguages;
    document.querySelectorAll('[data-lang]').forEach((btn) => {
      btn.addEventListener('click', () => applyLanguage(btn.dataset.lang));
    });
    applyLanguage(detectInitialLanguage(options.defaultLanguage));
  }

  window.AppI18n = {
    init,
    registerTranslations,
    applyLanguage,
    currentLanguage,
    t: translateText,
    translations,
    languageLabels
  };
  window.i18n = window.AppI18n;
})();
