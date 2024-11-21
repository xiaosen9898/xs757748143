import{_ as a,c as t,a2 as e,o as s}from"./chunks/framework.D3LXhGAZ.js";const b=JSON.parse('{"title":"VUE2 前置","description":"","frontmatter":{},"headers":[],"relativePath":"sidebar/vue2/v2/start.md","filePath":"sidebar/vue2/v2/start.md"}'),o={name:"sidebar/vue2/v2/start.md"};function i(n,l,p,c,d,r){return s(),t("div",null,l[0]||(l[0]=[e(`<h1 id="vue2-前置" tabindex="-1">VUE2 前置 <a class="header-anchor" href="#vue2-前置" aria-label="Permalink to &quot;VUE2 前置&quot;">​</a></h1><h2 id="前端开发原则" tabindex="-1">前端开发原则 <a class="header-anchor" href="#前端开发原则" aria-label="Permalink to &quot;前端开发原则&quot;">​</a></h2><div class="tip custom-block github-alert"><p class="custom-block-title">TIP</p><p></p><ul><li>模块化：js 的模块化、css 的模块化、资源的模块化</li><li>组件化：复用现有的 UI 结构、样式、行为</li><li>规范化：目录结构的划分、编码规范化、接口规范化、文档规范化、 Git 分支管理</li><li>自动化：自动化构建、自动部署、自动化测试</li></ul></div><p> </p><h2 id="mvvm" tabindex="-1">MVVM <a class="header-anchor" href="#mvvm" aria-label="Permalink to &quot;MVVM&quot;">​</a></h2><div class="tip custom-block github-alert"><p class="custom-block-title">TIP</p><p></p><ol><li>概念：一种软件架构模式，决定了写代码的方式</li><li>作用：MVVM通过数据双向绑定 让数据自动地双向同步</li><li>三个层面：</li></ol><blockquote><ol><li>模型（Model）：数据</li><li>视图（View）：UI</li><li>视图模型（ViewModel）：数据双向绑定</li></ol></blockquote></div><p> </p><h2 id="组件化开发" tabindex="-1">组件化开发 <a class="header-anchor" href="#组件化开发" aria-label="Permalink to &quot;组件化开发&quot;">​</a></h2><div class="tip custom-block github-alert"><p class="custom-block-title">TIP</p><p></p><ol><li>概念：一个完整页面由多个组件构成，其中组件又可以是由组件构成（vue的一个组件会包含HTML+CSS+JS）</li><li>优点：</li></ol><blockquote><ol><li>容易维护</li><li>便于复用</li></ol></blockquote></div><p> </p><h2 id="vue脚手架" tabindex="-1">VUE脚手架 <a class="header-anchor" href="#vue脚手架" aria-label="Permalink to &quot;VUE脚手架&quot;">​</a></h2><div class="tip custom-block github-alert"><p class="custom-block-title">TIP</p><p></p><ol><li>概念：用来快速构建项目的基本结构</li><li>下载安装：</li></ol><blockquote><ol><li>全局安装：<code>npm install -g @vue/cli</code> or <code>npm install -g @vue/cli@版本号</code></li><li>检查版本：<code>vue -V</code>（V是大写）</li></ol></blockquote><ol start="3"><li>创建一个vue项目：</li></ol><blockquote><ol><li>命令：<code>vue create 项目名称</code></li><li>选择需要的配置</li><li>补充：</li></ol><blockquote><ol><li><p>如果报错：vue : 无法加载文件 C:\\Users\\xiaosen\\AppData\\Roaming\\npm\\vue.ps1，因为在此系统上禁止</p></li><li><p>解决：</p></li></ol><blockquote><ol><li>以管理员身份运行PowerShell</li><li>输入：set-ExecutionPolicy RemoteSigned</li><li>选择y或者a</li></ol></blockquote></blockquote></blockquote><ol start="4"><li>项目的运行：</li></ol><blockquote><ol><li>切换到项目的根目录下运行：<code>npm run dev</code></li><li>用浏览器打开生成的根路径</li><li>如果没有出现本机IP地址，是因为没配回环地址（0.0.0.0），则需要配置代理<code>vue.config.js</code></li></ol></blockquote><ol start="5"><li>项目配置：</li></ol><blockquote><ul><li>项目配置文件：<code>vue.config.js</code></li></ul></blockquote><ol start="6"><li>文件的关联：</li></ol><blockquote><ol><li>入口文件：<code>src/main.js</code></li><li>页面文件：<code>public/index.html</code></li></ol></blockquote><ol start="7"><li>项目目录结构：</li></ol><div class="language-plaintext vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">plaintext</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>vue2-project/</span></span>
<span class="line"><span>  ├── node_modules/                # 存放下载的第三方项目依赖包</span></span>
<span class="line"><span>  ├── public/                      # 公共资源</span></span>
<span class="line"><span>  │   ├── favicon.ico              # 项目的图标</span></span>
<span class="line"><span>  │   └── index.html               # 入口 HTML 文件</span></span>
<span class="line"><span>  ├── src/                         # 源代码文件</span></span>
<span class="line"><span>  │   ├── assets/                  # 静态资源（图片、字体、CSS 等）</span></span>
<span class="line"><span>  │   ├── components/              # 存放 Vue 组件</span></span>
<span class="line"><span>  │   │   └── HelloWorld.vue       # 默认的 HelloWorld 组件</span></span>
<span class="line"><span>  │   ├── App.vue                  # 根组件</span></span>
<span class="line"><span>  │   ├── main.js                  # 项目入口文件</span></span>
<span class="line"><span>  │   └── router.js                # Vue Router 配置（如果选择了 Vue Router）</span></span>
<span class="line"><span>  ├── .gitignore                   # Git 忽略文件</span></span>
<span class="line"><span>  ├── babel.config.js              # Babel 配置</span></span>
<span class="line"><span>  ├── package.json                 # 项目配置信息，依赖关系</span></span>
<span class="line"><span>  ├── package-lock.json            # 锁定依赖版本</span></span>
<span class="line"><span>  ├── README.md                    # 项目说明文档</span></span>
<span class="line"><span>  └── vue.config.js                # Vue CLI 配置文件（可选）</span></span></code></pre></div></div><p> </p><h2 id="vue的生命周期" tabindex="-1">vue的生命周期 <a class="header-anchor" href="#vue的生命周期" aria-label="Permalink to &quot;vue的生命周期&quot;">​</a></h2><div class="tip custom-block github-alert"><p class="custom-block-title">TIP</p><p></p><ol><li>概念：</li></ol><blockquote><ol><li>组件从创建到销毁的全生命过程</li><li>从new Vue() 实例化开始，就会经过每个阶段的生命周期</li></ol></blockquote><ol start="2"><li>钩子函数hook：</li></ol><blockquote><ul><li>Vue组件的函数，会在对应的生命周期调用</li></ul></blockquote><ol start="3"><li>生命周期钩子函数：</li></ol><table><thead><tr><th>阶段</th><th>生命周期钩子</th><th>说明</th></tr></thead><tbody><tr><td rowspan="2">创建阶段</td><td>beforeCreate</td><td>刚出生，啥都没有；</td></tr><tr><td>created</td><td>有data和methods了；用途：调用接口，拉取数据</td></tr><tr><td rowspan="2">挂载阶段</td><td>beforeMount</td><td>准备DOM，但是还没有DOM；</td></tr><tr><td>mounted</td><td>有DOM了；用途：获取首次渲染的DOM</td></tr><tr><td rowspan="2">更新阶段</td><td>beforeUpdate</td><td></td></tr><tr><td>updated</td><td>时机：数据改变导致DOM更新完成后触发，一般使用$nextTick更多</td></tr><tr><td rowspan="2">销毁阶段</td><td>beforeDestroy</td><td></td></tr><tr><td>destroyed</td><td>回收资源，例如定时器等等，防止内存泄漏；当用户关闭页面，但是业务上要记录一些东西的时候</td></tr></tbody></table></div>`,15)]))}const h=a(o,[["render",i]]);export{b as __pageData,h as default};
