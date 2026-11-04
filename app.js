'use strict';
const translations = {
  zh: {
    skip: '跳转到正文', navAbout: '关于', navResearch: '研究方向', navPublications: '学术论文', navConnect: '联系', profile: '学术主页', name: '朱逸飞', role: '博士研究生', affiliation: '东北大学',
    bio1: '朱逸飞是日本东北大学信息科学研究科的博士研究生，导师为北村喜文教授，同时与香港大学的 Taku Komura 教授开展合作研究。',
    bio2: '他的研究位于计算机图形学、计算机视觉与生成式建模的交叉领域，专注于人体动作生成与富有表现力的数字角色。',
    bio3: '他探索如何将语言、语音与协调的身体、手部及面部动作相结合，使虚拟角色能够自然地运动，并通过动作进行富有表现力的交流。',
    bio4: '他的工作关注动作生成背后的表征与学习机制，尤其是潜空间几何、扩散模型和流匹配如何影响生成动作的质量与可控性。',
    bio5: '他目前的研究兴趣包括实时具身对话：让虚拟角色在全双工交互中，能够持续地说话、倾听并生成自然动作。',
    publicationsTitle: '代表性论文', allPublications: '查看 Google Scholar', dynaDescription: '在小波空间进行扩散建模，生成长序列且富有表现力的身体、手部与面部动作，并以统一接口实现动作续接和可控编辑。', moraeDescription: '构建紧凑的动作表征，改善频谱条件与解码器敏感性，为高质量的文本驱动动作流匹配生成提供支持。',
    paper: '论文', project: '项目主页', code: '代码', copy: '复制引用', motion: '人体动作生成', conversation: '具身对话', models: '生成式模型', profiles: '学术与代码', institution: '所属机构', school: '信息科学研究科', location: '日本 · 仙台', rights: '保留所有权利。', backTop: '返回顶部 ↑'
  }
};
const translatable = [...document.querySelectorAll('[data-i18n]')];
const english = new Map(translatable.map(el => [el, el.innerHTML]));
const languageButton = document.querySelector('.language-toggle');
let language = 'en';
function setLanguage(next) {
  language = next;
  document.documentElement.lang = next === 'zh' ? 'zh-CN' : 'en';
  translatable.forEach(el => { el.innerHTML = next === 'zh' ? translations.zh[el.dataset.i18n] || english.get(el) : english.get(el); });
  languageButton.textContent = next === 'zh' ? 'English' : '中文';
  languageButton.setAttribute('aria-label', next === 'zh' ? 'Switch to English' : '切换为中文');
  document.title = next === 'zh' ? '朱逸飞 — 学术主页' : 'Yifei Zhu — Academic Profile';
  try { localStorage.setItem('yifei-language', next); } catch {}
}
languageButton.addEventListener('click', () => setLanguage(language === 'en' ? 'zh' : 'en'));
try { if (localStorage.getItem('yifei-language') === 'zh') setLanguage('zh'); } catch {}
const nav = document.querySelector('.globalnav');
const menuButton = document.querySelector('.menu-toggle');
function closeMenu() { nav.classList.remove('menu-open'); menuButton.setAttribute('aria-expanded', 'false'); }
menuButton.addEventListener('click', () => { const open = nav.classList.toggle('menu-open'); menuButton.setAttribute('aria-expanded', String(open)); });
document.querySelectorAll('.nav-links a').forEach(a => a.addEventListener('click', closeMenu));
document.addEventListener('keydown', event => { if (event.key === 'Escape' && nav.classList.contains('menu-open')) { closeMenu(); menuButton.focus(); } });
document.querySelectorAll('.copy-citation').forEach(button => button.addEventListener('click', async () => {
  const citation = button.previousElementSibling.textContent;
  try {
    await navigator.clipboard.writeText(citation);
    button.textContent = language === 'zh' ? '已复制' : 'Copied';
    document.querySelector('#status').textContent = language === 'zh' ? '引用已复制到剪贴板。' : 'Citation copied to clipboard.';
  } catch {
    const selection = window.getSelection();
    const range = document.createRange();
    range.selectNodeContents(button.previousElementSibling);
    selection.removeAllRanges(); selection.addRange(range);
    button.textContent = language === 'zh' ? '已选中，请复制' : 'Selected — press Copy';
    document.querySelector('#status').textContent = language === 'zh' ? '请手动复制已选中的引用。' : 'Please copy the selected citation manually.';
  }
  window.setTimeout(() => { button.textContent = language === 'zh' ? '复制引用' : 'Copy citation'; }, 2200);
}));
document.querySelector('#year').textContent = new Date().getFullYear();
