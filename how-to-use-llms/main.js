// ═══════════════════════════════════════════════
// I18N — page translations
// ═══════════════════════════════════════════════
(function(){
  window.AppI18n.registerTranslations('zh', {
    'How to Use LLMs — A Practical Guide': '如何使用大语言模型 — 实用指南',
    'Skip to main content': '跳到主要内容',
    'Reading progress': '阅读进度',
    'Chapter navigation': '章节导航',
    'Language selector': '语言选择器',
    '← Part 1': '← 第 1 部分',
    'Part 3 →': '第 3 部分 →',
    'Intro': '导言',
    'ZIP File': 'ZIP 文件',
    'Models': '模型',
    'Thinking': '思考',
    'Search': '搜索',
    'Research': '研究',
    'Docs': '文档',
    'Code': '代码',
    'Agents': '智能体',
    'Voice': '语音',
    'Vision': '视觉',
    'Memory': '记忆',
    'Resources': '资源',
    'Summary': '总结',
    'Part 2 · A Practical Guide': '第 2 部分 · 实用指南',
    'How to Use': '如何使用',
    'LLMs': '大语言模型',
    'Beyond the internals — a practical walkthrough of how to actually use large language models in your daily work. Based on Andrej Karpathy\'s follow-up to his LLM deep dive.': '不止理解内部原理——这是一份关于如何在日常工作中真正使用大语言模型的实用指南，基于 Andrej Karpathy 对 LLM 深度解析的后续内容。',
    'Tools Covered': '覆盖工具',
    'Use Cases': '使用场景',
    'Source': '来源',
    'Companion to': '配套阅读：',
    'Part 1: How LLMs Work': '第 1 部分：大语言模型如何工作',
    'All content and examples traced directly to Karpathy\'s 2025 video.': '所有内容和示例均直接追溯到 Karpathy 2025 年的视频。',
    'Scroll to explore': '向下滚动探索',
    'Practical Tip': '实用提示',
    'Practical LLM tip': '实用 LLM 提示',
    'Q: What should I know before using this?': '问：使用前我应该知道什么？',
    'Chapter 1 · Foundation': '第 1 章 · 基础',
    "You're Talking to": '你正在对话的是',
    'a ZIP File': '一个 ZIP 文件',
    'The Introduction': '自我介绍',
    'Context window': '上下文窗口',
    'Training cutoff': '训练截止时间',
    'No live web by default': '默认没有实时联网',
    'Thinking...': '思考中...',
    'Run Demo': '运行演示',
    'Run again': '再次运行',
    'thinking for': '已思考',
    'Done.': '完成。',
    'thought for': '思考完成，用时',
    'Let me think about what it means for a number to be odd...': '先想想一个数是奇数意味着什么...',
    'An odd number can be written as 2k+1 for some integer k. Let me use that definition.': '奇数可以写成 2k+1，其中 k 是整数。用这个定义来推导。',
    'If I have two odd numbers: a = 2j+1 and b = 2k+1...': '如果有两个奇数：a = 2j+1，b = 2k+1...',
    'Their sum: a + b = (2j+1) + (2k+1) = 2j + 2k + 2 = 2(j+k+1)': '它们的和：a + b = (2j+1) + (2k+1) = 2j + 2k + 2 = 2(j+k+1)',
    'Since j+k+1 is an integer, 2(j+k+1) is divisible by 2 — which is the definition of even.': '由于 j+k+1 是整数，2(j+k+1) 可以被 2 整除——这正是偶数的定义。',
    'Let two odd integers be a = 2j+1 and b = 2k+1. Then a+b = 2j+1 + 2k+1 = 2(j+k+1). Since j+k+1 ∈ ℤ, the sum is even. □': '设两个奇整数为 a = 2j+1 和 b = 2k+1。则 a+b = 2j+1 + 2k+1 = 2(j+k+1)。由于 j+k+1 ∈ ℤ，所以它们的和是偶数。□',
    'It has no memory of you, its knowledge is 6–12 months stale, and every answer is a probabilistic sample. Treat it like a brilliant intern — not an oracle.': '它不会记住你，知识通常滞后 6–12 个月，每个答案都是概率采样。把它当作聪明的实习生，而不是神谕。',
    'For timeless knowledge, skip web search — the weights are enough. For anything recent, time-sensitive, or esoteric — enable search or use Perplexity.': '对于稳定知识，可以不使用网页搜索——模型权重已经足够。对于近期、时效性强或冷门的问题，请开启搜索或使用 Perplexity。',
    'Voice removes half the friction. Super Whisper can route ~50% of your queries hands-free. Switch to typing for product names and library names Whisper gets wrong.': '语音能减少一半阻力。Super Whisper 可让约 50% 的查询免手输入。遇到 Whisper 容易听错的产品名和库名时再切回键盘。',
    "Thinking models (o1, o3) are for hard problems. They're slower and pricier — don't waste them on simple tasks. Claude Sonnet often beats o1 Pro on nuanced code.": '思考模型（o1、o3）适合难题。它们更慢也更贵——别浪费在简单任务上。复杂代码场景下 Claude Sonnet 经常优于 o1 Pro。'
  });
  window.AppI18n.init();
})();

// ═══════════════════════════════════════════════
// HERO CANVAS — Floating Usage Words
// ═══════════════════════════════════════════════
(function(){
  const canvas = document.getElementById('hero-canvas');
  const ctx = canvas.getContext('2d');
  let W, H, tokens = [];
  const WORDS = ['search','voice','code','docs','think','chat','agent','plan','debug','read','write','API','tool','PDF','ask','plot','research','query','zip','model','o1','o3','GPT','Claude','Gemini','Cursor','prompt','memory','image','vision','memo','Whisper','draft','edit','run','cite','parse','RAG','deep','tune','eval'];

  function resize() { W = canvas.width = canvas.offsetWidth; H = canvas.height = canvas.offsetHeight; }

  function makeToken() {
    const word = WORDS[Math.floor(Math.random() * WORDS.length)];
    const size = 10 + Math.floor(Math.random() * 5);
    const alpha = 0.05 + Math.random() * 0.085;
    return { x: Math.random() * W, y: Math.random() * H, vx: (Math.random() - .5) * 0.17, vy: -0.11 - Math.random() * 0.13, word, size, alpha };
  }

  function init() { resize(); tokens = Array.from({length: 45}, makeToken); }

  function draw() {
    ctx.clearRect(0, 0, W, H);
    for (const t of tokens) {
      t.x += t.vx; t.y += t.vy;
      if (t.y < -30) Object.assign(t, makeToken(), { x: Math.random() * W, y: H + 20 });
      if (t.x < -60) t.x = W + 20;
      if (t.x > W + 60) t.x = -20;
      ctx.font = `${t.size}px 'JetBrains Mono', monospace`;
      const mw = ctx.measureText(t.word).width;
      const pad = 5, ph = t.size + 6;
      ctx.strokeStyle = `rgba(13,148,136,${t.alpha * 0.6})`;
      ctx.lineWidth = 0.5;
      ctx.strokeRect(t.x - pad/2, t.y - ph + 3, mw + pad, ph);
      ctx.fillStyle = `rgba(10,22,40,${t.alpha})`;
      ctx.fillText(t.word, t.x, t.y);
    }
    requestAnimationFrame(draw);
  }

  init();
  requestAnimationFrame(draw);
  window.addEventListener('resize', () => { resize(); init(); });
})();

// ═══════════════════════════════════════════════
// TYPEWRITER
// ═══════════════════════════════════════════════
(function(){
  const el = document.getElementById('tw-response');
  const messages = [
    "It has no memory of you, its knowledge is 6–12 months stale, and every answer is a probabilistic sample. Treat it like a brilliant intern — not an oracle.",
    "For timeless knowledge, skip web search — the weights are enough. For anything recent, time-sensitive, or esoteric — enable search or use Perplexity.",
    "Voice removes half the friction. Super Whisper can route ~50% of your queries hands-free. Switch to typing for product names and library names Whisper gets wrong.",
    "Thinking models (o1, o3) are for hard problems. They're slower and pricier — don't waste them on simple tasks. Claude Sonnet often beats o1 Pro on nuanced code."
  ];
  let mi = 0, ci = 0, deleting = false;

  window.addEventListener('i18n:change', () => {
    ci = 0;
    deleting = false;
    if (el) el.innerHTML = '<span class="tw-cursor"></span>';
  });

  function type() {
    const msg = window.i18n ? window.i18n.t(messages[mi]) : messages[mi];
    if (!deleting) {
      if (ci < msg.length) {
        el.innerHTML = msg.slice(0, ++ci) + '<span class="tw-cursor"></span>';
        setTimeout(type, 24 + Math.random() * 18);
      } else {
        setTimeout(() => { deleting = true; type(); }, 3200);
      }
    } else {
      if (ci > 0) {
        el.innerHTML = msg.slice(0, --ci) + '<span class="tw-cursor"></span>';
        setTimeout(type, 10);
      } else {
        deleting = false;
        mi = (mi + 1) % messages.length;
        setTimeout(type, 400);
      }
    }
  }
  setTimeout(type, 1000);
})();

// ═══════════════════════════════════════════════
// THINKING DEMO
// ═══════════════════════════════════════════════
(function(){
  const stepsEl = document.getElementById('thinking-steps');
  const answerEl = document.getElementById('thinking-answer');
  const contentEl = document.getElementById('ta-content');
  const timeEl = document.getElementById('thinking-time');
  const runBtn = document.getElementById('thinking-run-btn');

  const steps = [
    { icon: '🔍', text: "Let me think about what it means for a number to be odd..." },
    { icon: '📐', text: "An odd number can be written as 2k+1 for some integer k. Let me use that definition." },
    { icon: '🔄', text: "If I have two odd numbers: a = 2j+1 and b = 2k+1..." },
    { icon: '➕', text: "Their sum: a + b = (2j+1) + (2k+1) = 2j + 2k + 2 = 2(j+k+1)" },
    { icon: '✓', text: "Since j+k+1 is an integer, 2(j+k+1) is divisible by 2 — which is the definition of even." },
  ];

  const answer = "Let two odd integers be a = 2j+1 and b = 2k+1. Then a+b = 2j+1 + 2k+1 = 2(j+k+1). Since j+k+1 ∈ ℤ, the sum is even. □";

  let running = false;

  runBtn.addEventListener('click', function() {
    if (running) return;
    running = true;
    runBtn.disabled = true;
    runBtn.textContent = window.i18n ? window.i18n.t('Thinking...') : 'Thinking...';
    stepsEl.innerHTML = '';
    answerEl.style.display = 'none';

    let elapsed = 0;
    const timer = setInterval(() => {
      elapsed++;
      timeEl.textContent = window.i18n && window.i18n.currentLanguage() === 'zh' ? `已思考 ${elapsed} 秒...` : `thinking for ${elapsed}s...`;
    }, 1000);

    steps.forEach((step, i) => {
      setTimeout(() => {
        const div = document.createElement('div');
        div.className = 'thinking-step';
        div.innerHTML = `<span class="ts-icon">${step.icon}</span><span class="ts-text">${window.i18n ? window.i18n.t(step.text) : step.text}</span>`;
        stepsEl.appendChild(div);
      }, i * 700);
    });

    setTimeout(() => {
      clearInterval(timer);
      timeEl.textContent = window.i18n && window.i18n.currentLanguage() === 'zh' ? `思考完成，用时 ${steps.length - 1} 秒` : `thought for ${steps.length - 1}s`;
      answerEl.style.display = 'block';
      contentEl.textContent = window.i18n ? window.i18n.t(answer) : answer;
      runBtn.disabled = false;
      runBtn.textContent = window.i18n && window.i18n.currentLanguage() === 'zh' ? '↺ 再次运行' : '↺ Run again';
      running = false;
    }, steps.length * 700 + 300);
  });
})();

// ═══════════════════════════════════════════════
// RESEARCH PIPELINE
// ═══════════════════════════════════════════════
(function(){
  const runBtn = document.getElementById('rp-run-btn');
  const resultEl = document.getElementById('rp-result');
  const steps = [0,1,2,3].map(i => document.getElementById(`rp-s${i}`));
  let running = false;

  function resetSteps() {
    steps.forEach(s => s && s.classList.remove('rp-active'));
    resultEl.style.display = 'none';
  }

  function runDemo() {
    if (running) return;
    running = true;
    runBtn.disabled = true;
    runBtn.textContent = 'Simulating...';
    resetSteps();

    const timings = [0, 800, 1700, 2700];
    timings.forEach((t, i) => {
      setTimeout(() => {
        steps.forEach(s => s && s.classList.remove('rp-active'));
        steps[i] && steps[i].classList.add('rp-active');
      }, t);
    });

    setTimeout(() => {
      resultEl.style.display = 'block';
      runBtn.disabled = false;
      runBtn.textContent = '↺ Simulate again';
      running = false;
    }, 3700);
  }

  runBtn.addEventListener('click', () => { resetSteps(); setTimeout(runDemo, 80); });
})();

// ═══════════════════════════════════════════════
// CODE DEMO + CHART
// ═══════════════════════════════════════════════
(function(){
  const runBtn = document.getElementById('code-run-btn');
  const steps = [0,1,2].map(i => document.getElementById(`cd-step-${i}`));
  let running = false;

  function drawChart() {
    const canvas = document.getElementById('chart-canvas');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    const W = canvas.width, H = canvas.height;
    const pad = { l: 36, r: 12, t: 12, b: 24 };
    const cW = W - pad.l - pad.r, cH = H - pad.t - pad.b;

    ctx.clearRect(0, 0, W, H);
    ctx.fillStyle = '#0A1628';
    ctx.fillRect(0, 0, W, H);

    const countries = ['USA','Japan','Germany','UK','France','Italy','Canada'];
    const colors = ['#0D9488','#6EE7E7','#FCD34D','#C4B5FD','#F9A8D4','#86EFAC','#FCA5A5'];
    const years = Array.from({length: 34}, (_, i) => 1990 + i);

    function gdpSeed(baseGDP, volatility, trend, countryIdx) {
      return years.map((_, i) => {
        const noise = Math.sin(i * 2.3 + countryIdx * 1.7) * volatility;
        return baseGDP + trend * i + noise;
      });
    }

    const series = [
      gdpSeed(5.9, 0.3, 0.38, 0),
      gdpSeed(3.2, 0.2, 0.08, 1),
      gdpSeed(1.8, 0.15, 0.11, 2),
      gdpSeed(1.2, 0.1, 0.08, 3),
      gdpSeed(1.1, 0.1, 0.07, 4),
      gdpSeed(1.0, 0.1, 0.04, 5),
      gdpSeed(0.7, 0.08, 0.05, 6),
    ];

    const allVals = series.flat();
    const minV = Math.min(...allVals) * 0.9;
    const maxV = Math.max(...allVals) * 1.05;

    ctx.strokeStyle = 'rgba(255,255,255,0.06)';
    ctx.lineWidth = 0.5;
    for (let i = 0; i <= 4; i++) {
      const y = pad.t + (i / 4) * cH;
      ctx.beginPath(); ctx.moveTo(pad.l, y); ctx.lineTo(W - pad.r, y); ctx.stroke();
      const val = (maxV - (i / 4) * (maxV - minV)).toFixed(0);
      ctx.fillStyle = 'rgba(255,255,255,0.3)';
      ctx.font = '8px JetBrains Mono';
      ctx.fillText(`$${val}T`, 0, y + 3);
    }

    ['1990','2000','2010','2023'].forEach((yr, i) => {
      const x = pad.l + (i / 3) * cW;
      ctx.fillStyle = 'rgba(255,255,255,0.3)';
      ctx.font = '8px JetBrains Mono';
      ctx.fillText(yr, x - 10, H - 4);
    });

    series.forEach((data, si) => {
      ctx.beginPath();
      data.forEach((val, i) => {
        const x = pad.l + (i / (years.length - 1)) * cW;
        const y = pad.t + ((maxV - val) / (maxV - minV)) * cH;
        i === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y);
      });
      ctx.strokeStyle = colors[si];
      ctx.lineWidth = si === 0 ? 1.8 : 1.2;
      ctx.globalAlpha = si === 0 ? 1 : 0.7;
      ctx.stroke();
      ctx.globalAlpha = 1;

      const lastVal = data[data.length - 1];
      const lastX = pad.l + cW;
      const lastY = pad.t + ((maxV - lastVal) / (maxV - minV)) * cH;
      ctx.font = '8px JetBrains Mono';
      ctx.fillStyle = colors[si];
      ctx.fillText(countries[si], lastX - 38, lastY - 3);
    });
  }

  runBtn.addEventListener('click', function() {
    if (running) return;
    running = true;
    runBtn.disabled = true;
    steps.forEach(s => { if (s) s.style.display = 'none'; });

    setTimeout(() => {
      steps[0].style.display = 'block';
    }, 100);

    setTimeout(() => {
      steps[0].style.display = 'none';
      steps[1].style.display = 'block';
    }, 1400);

    setTimeout(() => {
      steps[1].style.display = 'none';
      steps[2].style.display = 'block';
      drawChart();
      runBtn.disabled = false;
      runBtn.textContent = window.i18n && window.i18n.currentLanguage() === 'zh' ? '↺ 再次运行' : '↺ Run again';
      running = false;
    }, 2400);
  });
})();

// ═══════════════════════════════════════════════
// AGENT LOOP ANIMATION
// ═══════════════════════════════════════════════
(function(){
  const runBtn = document.getElementById('al-run-btn');
  const steps = [0,1,2,3].map(i => document.getElementById(`al-s${i}`));
  let running = false;

  runBtn.addEventListener('click', function() {
    if (running) return;
    running = true;
    runBtn.disabled = true;
    steps.forEach(s => s && s.classList.remove('al-active'));

    let i = 0;
    const interval = setInterval(() => {
      steps.forEach(s => s && s.classList.remove('al-active'));
      if (i < steps.length) {
        steps[i] && steps[i].classList.add('al-active');
        i++;
      } else {
        clearInterval(interval);
        runBtn.disabled = false;
        runBtn.textContent = '↺ Animate again';
        running = false;
      }
    }, 600);
  });
})();

// ═══════════════════════════════════════════════
// SCROLL OBSERVER — Animations + Nav + Progress
// ═══════════════════════════════════════════════
(function(){
  const sections = document.querySelectorAll('.section');
  const navBtns = document.querySelectorAll('.tnav-btn');
  const progressBar = document.getElementById('progress-bar');
  const pipelineStages = document.querySelectorAll('.pipeline-stage');

  window.addEventListener('scroll', () => {
    const scrolled = window.scrollY;
    const total = document.body.scrollHeight - window.innerHeight;
    const pct = Math.round(scrolled / total * 100);
    progressBar.style.width = pct + '%';
    progressBar.setAttribute('aria-valuenow', pct);
  }, {passive: true});

  document.querySelectorAll('.fade-up').forEach(el => el.classList.add('animate-ready'));

  const fadeObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) entry.target.classList.add('visible');
    });
  }, { threshold: 0.07, rootMargin: '0px 0px -40px 0px' });

  document.querySelectorAll('.fade-up').forEach(el => fadeObserver.observe(el));

  const pipelineObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        pipelineStages.forEach((s, i) => setTimeout(() => s.classList.add('visible'), i * 120));
        pipelineObserver.disconnect();
      }
    });
  }, { threshold: 0.05 });

  const summarySection = document.getElementById('s-summary');
  if (summarySection) pipelineObserver.observe(summarySection);

  function setActiveNav(sectionId) {
    navBtns.forEach(btn => {
      const isActive = btn.dataset.section === sectionId;
      btn.classList.toggle('active', isActive);
      if (isActive) {
        btn.setAttribute('aria-current', 'true');
        btn.scrollIntoView({block:'nearest', inline:'center'});
      } else {
        btn.removeAttribute('aria-current');
      }
    });
  }

  const sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) setActiveNav(entry.target.id);
    });
  }, { threshold: 0.35 });

  sections.forEach(s => sectionObserver.observe(s));

  navBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const section = document.getElementById(btn.dataset.section);
      if (section) section.scrollIntoView({ behavior: 'smooth' });
    });
  });
})();
