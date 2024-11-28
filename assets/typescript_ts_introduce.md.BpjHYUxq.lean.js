import{_ as l,c as e,a2 as i,o}from"./chunks/framework.D3LXhGAZ.js";const b=JSON.parse('{"title":"Typescript 前置","description":"","frontmatter":{},"headers":[],"relativePath":"typescript/ts/introduce.md","filePath":"typescript/ts/introduce.md"}'),a={name:"typescript/ts/introduce.md"};function s(c,t,r,p,d,u){return o(),e("div",null,t[0]||(t[0]=[i('<h1 id="typescript-前置" tabindex="-1">Typescript 前置 <a class="header-anchor" href="#typescript-前置" aria-label="Permalink to &quot;Typescript 前置&quot;">​</a></h1><h2 id="概念" tabindex="-1">概念 <a class="header-anchor" href="#概念" aria-label="Permalink to &quot;概念&quot;">​</a></h2><div class="tip custom-block github-alert"><p class="custom-block-title">TIP</p><p></p><p>简称TS，微软出品，是 JavaScript 的超集，JS有的TS都有，编译后就是js</p></div><p> </p><h2 id="ts的作用" tabindex="-1">TS的作用 <a class="header-anchor" href="#ts的作用" aria-label="Permalink to &quot;TS的作用&quot;">​</a></h2><div class="tip custom-block github-alert"><p class="custom-block-title">TIP</p><p></p><ol><li>给 JS 添加类型检查</li><li>提前到在编写代码的同时就发现代码中的错误，减少出bug的风险</li></ol></div><p> </p><h2 id="ts的编译" tabindex="-1">TS的编译 <a class="header-anchor" href="#ts的编译" aria-label="Permalink to &quot;TS的编译&quot;">​</a></h2><div class="tip custom-block github-alert"><p class="custom-block-title">TIP</p><p></p><ol><li>背景：Node.js/浏览器，只认识 JS 代码，不认识 TS 代码，需要先将 TS 代码转化为 JS 代码，然后才能运行</li><li>安装：</li></ol><blockquote><ol><li>安装命令：<code>npm i -g typescript@4</code></li><li>验证是否安装成功：<code>tsc –v</code></li><li>注意：</li></ol><blockquote><ul><li>Mac 电脑安装全局包时，需要添加 sudo 获取权限：sudo npm i -g typescript yarn</li><li>全局安装：sudo yarn global add typescript</li></ul></blockquote></blockquote><ol start="3"><li>运行：</li></ol><blockquote><ol><li>创建hello文件；</li><li>将TS编译为JS：在终端中输入命令：tsc hello.ts；</li><li>执行 JS 代码：在终端中输入命令：node hello.js</li></ol></blockquote><ol start="4"><li>项目中：</li></ol><blockquote><ul><li>交由vite 或者 webpack执行（yarn create vite(选择 vue + ts)）；</li></ul></blockquote></div>',9)]))}const h=l(a,[["render",s]]);export{b as __pageData,h as default};