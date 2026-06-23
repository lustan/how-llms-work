// Language configuration. Add future locales here; the i18n runtime does not need changes.
window.HowLLMsI18nConfig = {
    en: { label: 'English', nativeLabel: 'English', translations: {} },
    'zh-CN': {
      label: 'Simplified Chinese',
      nativeLabel: '简体中文',
      translations: {
        'How LLMs Work — A Visual Deep Dive': '大语言模型如何工作 — 可视化深度解析',
        'Skip to main content': '跳到主要内容',
        'Reading progress': '阅读进度',
        'Chapter navigation': '章节导航',
        'How LLMs Work': '大语言模型如何工作',
        'Part 2 →': '第二部分 →',
        'Part 3 →': '第三部分 →',
        'Intro': '简介', 'Data': '数据', 'Tokens': '词元', 'Training': '训练', 'Inference': '推理', 'Base Model': '基础模型', 'Post-Train': '后训练', 'Psychology': '心理学', 'RAG': 'RAG', 'Security': '安全', 'Pipeline': '流程',
        'A Visual Deep Dive': '可视化深度解析',
        'How LLMs': '大语言模型', 'Actually': '究竟如何', 'Work': '工作',
        'A complete walkthrough of how large language models like ChatGPT are built — from raw internet text to a conversational assistant. Based on Andrej Karpathy\'s technical deep dive.': '完整解析 ChatGPT 这类大语言模型如何从原始互联网文本构建成对话助手。基于 Andrej Karpathy 的技术深度讲解。',
        'Training Tokens': '训练词元', 'Parameters': '参数量', 'Text Data': '文本数据', 'Token Vocabulary': '词元词表',
        'Representative figures from frontier models circa 2024 — exact numbers shift with every release. The scale is the point, not the precision.': '这些是约 2024 年前沿模型的代表性数字——每次发布的精确数字都会变化。重点在规模，而不是精确值。',
        'Scroll to explore': '向下滚动探索', 'Example LLM conversation': 'LLM 对话示例', 'Live LLM Response': '实时 LLM 回复', 'Human: What is behind this text box?': '用户：这个文本框背后是什么？',
        'Introduction': '简介', 'Data Collection': '数据收集', 'Tokenization': '词元化', 'Neural Network Training': '神经网络训练',
        'Chapter 1 · Pre-Training · Stage 1': '第 1 章 · 预训练 · 阶段 1', 'Downloading': '下载', 'the Internet': '互联网',
        'The first step is collecting an enormous amount of text. Organizations like ': '第一步是收集海量文本。像 ', ' have been crawling the web since 2007 — indexing 2.7 billion pages by 2024. This raw data is then filtered into a high-quality dataset like ': ' 这样的组织自 2007 年起持续抓取网络，到 2024 年已索引 27 亿个页面。随后，这些原始数据会被过滤成类似 ', '.': '。',
        'The goal: ': '目标是：', 'large quantity': '数量巨大', ' of ': ' 的 ', 'high quality': '高质量', 'diverse': '多样化', ' documents. After aggressive filtering, you end up with about ': ' 文档。经过严格过滤后，最终得到约 ', '44 terabytes': '44 TB', ' — roughly 10 consumer hard drives worth of text — representing ~15 trillion tokens.': '——大约相当于 10 块消费级硬盘的文本，约 15 万亿个词元。',
        'Key Insight': '关键洞察', 'The quality and diversity of this training data has more impact on the final model than almost anything else. Garbage in, garbage out — but at a trillion-token scale.': '训练数据的质量和多样性对最终模型的影响几乎超过任何其他因素。垃圾进，垃圾出——只不过是在万亿词元规模上。',
        'Click any stage to read more detail': '点击任意阶段查看详情', 'Data processing pipeline stages': '数据处理流水线阶段',
        '🌐 Common Crawl': '🌐 Common Crawl', '2.7B web pages · Raw HTML · Since 2007': '27 亿网页 · 原始 HTML · 自 2007 年起',
        'A non-profit organization that crawls the web and freely provides its data. Their bots follow links from seed pages, recursively indexing the internet. The raw archive is petabytes of gzip\'d WARC files containing raw HTML.': '一个抓取网络并免费提供数据的非营利组织。它们的机器人从种子页面沿链接递归索引互联网。原始归档是 PB 级 gzip 压缩 WARC 文件，包含原始 HTML。',
        '🚫 URL Filtering': '🚫 URL 过滤', 'Blocklists · Malware · Spam · Adult content': '黑名单 · 恶意软件 · 垃圾内容 · 成人内容',
        '📄 Text Extraction': '📄 文本提取', 'HTML → clean text · Remove navigation & CSS': 'HTML → 干净文本 · 移除导航和 CSS',
        '🌍 Language Filtering': '🌍 语言过滤', '♻️ Deduplication': '♻️ 去重', '🔒 PII Removal': '🔒 个人信息移除', '✅ FineWeb Dataset': '✅ FineWeb 数据集',
        '▶ Animate Pipeline': '▶ 演示流水线', 'Chapter 1 · Pre-Training · Stage 2': '第 1 章 · 预训练 · 阶段 2',
        'Neural networks can\'t process raw text — they need numbers. The solution is ': '神经网络无法直接处理原始文本——它们需要数字。解决办法是 ', 'tokenization': '词元化', ': breaking text into "tokens" (sub-word chunks) and assigning each an ID.': '：把文本拆成“词元”（子词片段），并为每个词元分配 ID。',
        'Why not just use words?': '为什么不直接使用单词？', 'BPE in Action': 'BPE 实战', 'Text to tokenize': '要词元化的文本', 'BPE token strip': 'BPE 词元条', 'Next Merge →': '下一次合并 →', '▶ Auto': '▶ 自动', 'Reset': '重置', 'Try the real tokenizer → tiktokenizer.vercel.app': '试用真实 tokenizer → tiktokenizer.vercel.app',
        'Chapter 1 · Pre-Training · Stage 3': '第 1 章 · 预训练 · 阶段 3', 'Training the': '训练', 'Neural Network': '神经网络', 'Transformer Architecture': 'Transformer 架构', 'Training Loss ↓': '训练损失 ↓', 'Cross-entropy loss': '交叉熵损失', 'Training step': '训练步数', 'Model Output at This Stage': '此阶段的模型输出',
        'Select a training stage to see model output quality': '选择训练阶段查看模型输出质量', 'Step 1': '步骤 1', 'Step 500': '步骤 500', 'Step 5K': '步骤 5K', 'Step 32K': '步骤 32K',
        'What is an Embedding?': '什么是嵌入？', 'Scale': '规模', 'Scaling Laws': '缩放定律',
        'Language': '语言', 'Follow system': '跟随系统', 'English': 'English', 'Simplified Chinese': '简体中文'
      }
    }
  };
