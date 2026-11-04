# Yifei Zhu — Academic Homepage

A responsive, bilingual academic homepage closely following the visual proportions of Apple's leadership biographies. Includes a transparent portrait, two-column biography, verified public research, paper/code links, and expandable BibTeX citations.

## GitHub Pages

1. Create the public repository `zhuyifeiabcd1.github.io` under the account `zhuyifeiabcd1`.
2. Upload `index.html`, `styles.css`, `app.js`, `.nojekyll` and the `assets` directory into the repository root. Commit to `main`.
3. Open **Settings → Pages**. Choose **Deploy from a branch**, branch **main**, folder **/(root)**, and Save.
4. The homepage will be available at `https://zhuyifeiabcd1.github.io/` after GitHub completes deployment.

The same files work in any repository subdirectory because assets use relative paths. Update the canonical URL and social metadata in `index.html` if deploying elsewhere.

## Edit

- Biography and publication content: `index.html`.
- Chinese translations: `app.js`.
- Layout and typography: `styles.css`.
- Portrait: `assets/portrait.png`.

No dependency installation or build step is needed. The page remains readable without JavaScript. JavaScript provides language switching, the mobile menu, and citation copying. Preferences are stored locally in the visitor's browser. No analytics or external fonts are loaded.

## Content verification

The requested Google Scholar profile is linked directly: https://scholar.google.com/citations?user=qHch5CYAAAAJ

Direct automated access to Scholar was rate-limited during creation. Consequently this is a selected-publications list, not a claimed complete export, and citation metrics are omitted. DynaConTalk and MoRAE titles/authors were checked against their arXiv records and public repositories. DynaConTalk's SIGGRAPH Asia appearance was checked against the official conference program. TOG bibliographic details and advisor information came from the supplied author context.

Primary references:
- https://arxiv.org/abs/2610.09846
- https://arxiv.org/abs/2607.29180
- https://sa2026.conference-schedule.org/presentation/?id=papers_1907&sess=sess132
- https://github.com/zhuyifeiabcd1/DynaConTalk
- https://github.com/zhuyifeiabcd1/MoRAE

Visual reference: https://www.apple.com.cn/leadership/tim-cook/

The layout is independently implemented with system fonts. Portrait supplied by the owner; its background was removed with the built-in image generation tool. The edit request specified preservation of facial identity, hair, glasses, body proportions, clothing, expression, and framing. Only background removal was requested.
