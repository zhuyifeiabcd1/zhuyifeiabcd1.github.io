'use strict';
const translations = {
  zh: {
    skip: '跳转到正文', navAbout: '关于', navResearch: '研究方向', navPublications: '学术论文', profile: '学术主页', name: '朱逸飞',
    bio1: '朱逸飞目前在腾讯 Motus AI 团队实习。他在东北大学攻读博士学位，导师为北村喜文教授，并与香港大学 Taku Komura 教授合作。',
    bio2: '他的研究聚焦生成模型与表征学习，涵盖图像、视频、人体动作和时间序列生成。',
    bio3: '他研究数据和潜空间的结构如何影响扩散模型与流匹配的训练和采样，尤其关注少步采样的源分布设计，以及如何利用潜空间的统计结构改进训练目标。',
    bio4: '在计算机图形学方向，他也研究可控三维人体动作生成与实时对话数字人，重点是让虚拟角色在说话和倾听时协调身体、手部和面部动作。',
    publicationsTitle: '论文', allPublications: '查看 Google Scholar', dynaDescription: '在小波空间进行扩散建模，生成长序列且富有表现力的身体、手部与面部动作，并以统一接口实现动作续接和可控编辑。', moraeDescription: '通过预测被遮挡的关节轨迹学习动作特征，再将其压缩到紧凑的潜空间，用流匹配实现文本驱动的动作生成。',
    preprint: 'arXiv 预印本',
    retargetDescription: '通过调整关节姿势和局部变形蒙皮网格，实时修复动画角色的身体穿模。',
    conceptErasureDescription: '评估文本生成图像的扩散模型在擦除某个概念后，仍能生成该概念的难易程度。',
    deeponetDescription: '使用 DeepONet 加速不同光纤参数和输入脉冲条件下的光纤脉冲传播模拟。',
    paper: '论文', project: '项目主页', code: '代码', copy: '复制引用'
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
