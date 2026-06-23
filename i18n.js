// Lightweight config-driven i18n. Add new languages in i18n.config.js only.
(function () {
  const STORAGE_KEY = 'how-llms-work-language';
  const DEFAULT_LANG = 'en';
  const I18N_CONFIG = window.HowLLMsI18nConfig || { en: { label: 'English', nativeLabel: 'English', translations: {} } };

  const translateAttrs = ['aria-label', 'title', 'placeholder', 'value'];
  let currentLang = DEFAULT_LANG;
  let observer;

  function normalizeLang(lang) { return /^zh/i.test(lang || '') ? 'zh-CN' : 'en'; }
  function configuredLang() { return localStorage.getItem(STORAGE_KEY) || 'auto'; }
  function resolveLang(choice) { return choice === 'auto' ? normalizeLang(navigator.language) : choice; }
  function dictionary() { return I18N_CONFIG[currentLang]?.translations || {}; }
  function translateText(text) { return dictionary()[text] || text; }
  function translateTitle() {
    const original = rememberOriginal(document, 'title', document.title);
    document.title = translateText(original);
  }

  function rememberOriginal(node, prop, value) {
    const key = prop === 'text' ? '__i18nOriginalText' : `i18nOriginal${prop}`;
    if (!node[key]) node[key] = value;
    return node[key];
  }

  function translateNode(root) {
    if (!root || root.closest?.('[data-i18n-ignore]')) return;
    const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, {
      acceptNode(node) {
        if (!node.nodeValue.trim() || node.parentElement?.closest('script,style,code,pre,[data-i18n-ignore]')) return NodeFilter.FILTER_REJECT;
        return NodeFilter.FILTER_ACCEPT;
      }
    });
    const textNodes = [];
    while (walker.nextNode()) textNodes.push(walker.currentNode);
    textNodes.forEach((node) => {
      const original = rememberOriginal(node, 'text', node.nodeValue);
      node.nodeValue = original.replace(/\S.*\S|\S/, (match) => translateText(match));
    });
    root.querySelectorAll?.('*').forEach((el) => {
      translateAttrs.forEach((attr) => {
        if (!el.hasAttribute(attr)) return;
        const original = rememberOriginal(el, attr, el.getAttribute(attr));
        el.setAttribute(attr, translateText(original));
      });
    });
  }

  function applyLanguage(lang) {
    currentLang = resolveLang(lang);
    document.documentElement.lang = currentLang;
    if (observer) observer.disconnect();
    translateTitle();
    translateNode(document.body);
    document.querySelectorAll('[data-language-option]').forEach((btn) => {
      const active = btn.dataset.languageOption === configuredLang();
      btn.classList.toggle('active', active);
      btn.setAttribute('aria-pressed', String(active));
    });
    observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => mutation.addedNodes.forEach((node) => {
        if (node.nodeType === Node.ELEMENT_NODE) translateNode(node);
        if (node.nodeType === Node.TEXT_NODE && node.parentElement) translateNode(node.parentElement);
      }));
    });
    observer.observe(document.body, { childList: true, subtree: true });
  }

  function buildSwitcher() {
    const nav = document.getElementById('top-nav-links');
    if (!nav || document.getElementById('language-switcher')) return;
    const wrap = document.createElement('div');
    wrap.id = 'language-switcher';
    wrap.className = 'language-switcher';
    wrap.setAttribute('aria-label', 'Language');
    const options = [['auto', { nativeLabel: 'Follow system' }], ...Object.entries(I18N_CONFIG)];
    options.forEach(([value, meta]) => {
      const btn = document.createElement('button');
      btn.type = 'button';
      btn.className = 'language-btn';
      btn.dataset.languageOption = value;
      btn.textContent = meta.nativeLabel || meta.label || value;
      btn.addEventListener('click', () => { localStorage.setItem(STORAGE_KEY, value); applyLanguage(value); });
      wrap.appendChild(btn);
    });
    nav.prepend(wrap);
  }

  window.HowLLMsI18n = { applyLanguage, config: I18N_CONFIG };
  document.addEventListener('DOMContentLoaded', () => {
    buildSwitcher();
    applyLanguage(configuredLang());
    window.addEventListener('languagechange', () => { if (configuredLang() === 'auto') applyLanguage('auto'); });
  });
}());
