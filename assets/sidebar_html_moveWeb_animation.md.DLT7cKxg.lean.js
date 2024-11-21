import{_ as a,c as i,a2 as n,o as e}from"./chunks/framework.D3LXhGAZ.js";const k=JSON.parse('{"title":"动画","description":"","frontmatter":{},"headers":[],"relativePath":"sidebar/html/moveWeb/animation.md","filePath":"sidebar/html/moveWeb/animation.md"}'),l={name:"sidebar/html/moveWeb/animation.md"};function t(p,s,r,h,d,c){return e(),i("div",null,s[0]||(s[0]=[n(`<h1 id="动画" tabindex="-1">动画 <a class="header-anchor" href="#动画" aria-label="Permalink to &quot;动画&quot;">​</a></h1><h2 id="动画的使用" tabindex="-1">动画的使用 <a class="header-anchor" href="#动画的使用" aria-label="Permalink to &quot;动画的使用&quot;">​</a></h2><div class="tip custom-block github-alert"><p class="custom-block-title">TIP</p><p></p><ol><li>先定义动画</li></ol><div class="language-css vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">/* 方式一 */</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">@keyframes</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;"> animationName</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">         from</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{}</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">         to</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{}</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> }</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">/* 方式二 */</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">@keyframes</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;"> animationName</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">           0%</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{}</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">           50%</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{}</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">           100%</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{}</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><ol start="2"><li>添加动画效果</li></ol><div class="language-css vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">animation: 动画名称(必须属性) 动画所用时间(必须属性)  ...</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div></div><p> </p><h2 id="动画的属性" tabindex="-1">动画的属性 <a class="header-anchor" href="#动画的属性" aria-label="Permalink to &quot;动画的属性&quot;">​</a></h2><div class="tip custom-block github-alert"><p class="custom-block-title">TIP</p><p></p><div class="language-css vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">animation: 动画名称(必须) 动画时长(必须)  速度的速率(linear 匀速)  延迟播放时间 重复次数(infinte 无限) 动画方向 (alternate 交替播放)  执行完毕时状态(forwards 停在结束状态)</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p> </p><div class="language-css vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">animation-play-state</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 暂停动画 paused为暂停，通常配合:hover使用</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div></div><p> </p><h2 id="逐帧动画" tabindex="-1">逐帧动画 <a class="header-anchor" href="#逐帧动画" aria-label="Permalink to &quot;逐帧动画&quot;">​</a></h2><div class="tip custom-block github-alert"><p class="custom-block-title">TIP</p><p></p><div class="language-css vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">animation-timing-function</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: steps(数字)</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><ol><li>有多少个动作数字就写几，值连写在动画时长后面即可</li><li>开发中，一般配合精灵图实现动画效果：</li></ol><blockquote><ol><li>准备显示区域：设置盒子尺寸是一张小图的尺寸，背景图为当前精灵图</li><li>定义动画：改变背景图的位置（移动的距离就是精灵图的宽度）</li><li>使用动画：添加速度曲线 steps(N)，N 与精灵图上小图个数相同，添加无限重复效果</li></ol></blockquote></div>`,9)]))}const b=a(l,[["render",t]]);export{k as __pageData,b as default};
