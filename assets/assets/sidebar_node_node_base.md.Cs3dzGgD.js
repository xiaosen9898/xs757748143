import{_ as o,c as e,a2 as i,o as a}from"./chunks/framework.D3LXhGAZ.js";const u=JSON.parse('{"title":"NODE 基础","description":"","frontmatter":{},"headers":[],"relativePath":"sidebar/node/node/base.md","filePath":"sidebar/node/node/base.md"}'),t={name:"sidebar/node/node/base.md"};function d(c,l,s,r,n,b){return a(),e("div",null,l[0]||(l[0]=[i('<h1 id="node-基础" tabindex="-1">NODE 基础 <a class="header-anchor" href="#node-基础" aria-label="Permalink to &quot;NODE 基础&quot;">​</a></h1><h2 id="node-js应用" tabindex="-1">node.js应用 <a class="header-anchor" href="#node-js应用" aria-label="Permalink to &quot;node.js应用&quot;">​</a></h2><div class="tip custom-block github-alert"><p class="custom-block-title">TIP</p><p></p><ul><li>开发服务器应用：</li></ul><blockquote><ol><li>开发工具类应用：Webpack、Vite、Babel</li><li>开发桌面端应用：VSCode、Postman</li></ol></blockquote></div><p> </p><h2 id="node-js定义" tabindex="-1">node.js定义 <a class="header-anchor" href="#node-js定义" aria-label="Permalink to &quot;node.js定义&quot;">​</a></h2><div class="tip custom-block github-alert"><p class="custom-block-title">TIP</p><p></p><ol><li>定义：</li></ol><blockquote><ol><li>是一个基于 Chrome V8 引擎的 JavaScript 运行时环境</li><li>运行时，理解为一个容器，用来运行代码的环境；这个环境让JS有读写文件，操作数据库，开启web服务器等能力</li><li>浏览器是JS的前端运行环境，Node.js是JS的后端运行环境</li></ol></blockquote><ol start="2"><li>组成：</li></ol><blockquote><ol><li>浏览器端：js由三部分组成：ECMAScript + BOM + DOM</li><li>Node.js端：由ECMAScript + 内置模块(fs, http, path等) + 第三方模块(别人开发的模块)</li></ol></blockquote><ul><li>注意：NodeJS中没有 DOM 和 BOM，也没有window对象，但是有一个全局对象global，也可以用globalThis访问顶级对象</li></ul></div><p> </p><h2 id="安装使用" tabindex="-1">安装使用 <a class="header-anchor" href="#安装使用" aria-label="Permalink to &quot;安装使用&quot;">​</a></h2><div class="tip custom-block github-alert"><p class="custom-block-title">TIP</p><p></p><ol><li>下载：去<a href="https://nodejs.org/en/download/package-manager" target="_blank" rel="noreferrer">官网</a>下载（长期支持版）</li></ol><blockquote><ol><li>点击下载到的安装包，一路下一步默认安装；</li><li>打开小黑窗输入 node -v 能看到版本号表示安装成功</li></ol><ul><li>注意：不能安装到中文目录如d:/软件，建议一直点击next即可</li></ul></blockquote><ol start="2"><li>在Node环境中运行代码：</li></ol><blockquote><ol><li>新建一个项目code，里面新建js文件；</li><li>打开小黑窗，输入：node 文件名</li></ol></blockquote></div><p> </p><h2 id="node常用命令" tabindex="-1">node常用命令 <a class="header-anchor" href="#node常用命令" aria-label="Permalink to &quot;node常用命令&quot;">​</a></h2><div class="tip custom-block github-alert"><p class="custom-block-title">TIP</p><p></p><ol><li><code>node js文件</code>：运行某个js文件；</li><li><code>Ctrl + C</code>：停止Node程序；</li><li><code>clear 或 cls</code>：清屏；</li><li><code>cd 目录名</code>：进入到目录中去；</li><li><code>cd ..</code>：返回上一级目录；</li><li><code>cd \\</code>：跳到根目录；</li><li><code>dir</code>：查看文件夹下的内容；</li></ol><ul><li>输入部分文件名后按 Tab键，补全文件名或目录名</li></ul></div>',12)]))}const h=o(t,[["render",d]]);export{u as __pageData,h as default};
