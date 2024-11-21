import{_ as i,c as a,a2 as l,o as n}from"./chunks/framework.D3LXhGAZ.js";const k=JSON.parse('{"title":"生命周期与内置API","description":"","frontmatter":{},"headers":[],"relativePath":"sidebar/miniprogram/mini/lifecycle.md","filePath":"sidebar/miniprogram/mini/lifecycle.md"}'),e={name:"sidebar/miniprogram/mini/lifecycle.md"};function p(t,s,o,c,r,h){return n(),a("div",null,s[0]||(s[0]=[l(`<h1 id="生命周期与内置api" tabindex="-1">生命周期与内置API <a class="header-anchor" href="#生命周期与内置api" aria-label="Permalink to &quot;生命周期与内置API&quot;">​</a></h1><h2 id="应用生命周期" tabindex="-1">应用生命周期 <a class="header-anchor" href="#应用生命周期" aria-label="Permalink to &quot;应用生命周期&quot;">​</a></h2><div class="tip custom-block github-alert"><p class="custom-block-title">TIP</p><p></p><ol><li><code>onLaunch</code>：生命周期回调——监听小程序初始化</li></ol><blockquote><ul><li>发送请求，获取整个应用需要使用的数据</li><li>初始化云开发的配置</li></ul></blockquote><ol start="2"><li><code>onShow</code>：生命周期回调——监听小程序启动或切前台</li></ol><blockquote><ul><li>重开某些东西</li></ul></blockquote><ol start="3"><li><code>onHide</code>：生命周期回调——监听小程序切后台</li></ol><blockquote><ul><li>暂停某些东西</li></ul></blockquote><ol start="4"><li><code>onError</code>：错误监听函数</li><li><code>onThemeChange</code>：监听系统主题变化</li></ol></div><p> </p><h2 id="页面生命周期" tabindex="-1">页面生命周期 <a class="header-anchor" href="#页面生命周期" aria-label="Permalink to &quot;页面生命周期&quot;">​</a></h2><div class="tip custom-block github-alert"><p class="custom-block-title">TIP</p><p></p><ol><li><code>onLoad</code>：生命周期回调—监听页面加载</li></ol><blockquote><ul><li>发送异步请求</li></ul></blockquote><ol start="2"><li><code>onShow</code>：生命周期回调—监听页面显示</li></ol><blockquote><ul><li>启动定时器</li></ul></blockquote><ol start="3"><li><code>onReady</code>：生命周期回调—监听页面初次渲染完成</li></ol><blockquote><ul><li>操作DOM</li><li>操作一些标签外观等</li><li>启动定时器</li></ul></blockquote><ol start="4"><li><code>onHide</code>：生命周期回调—监听页面隐藏</li></ol><blockquote><ul><li>暂停定时器</li></ul></blockquote><ol start="5"><li><p><code>onUnload</code>：生命周期回调—监听页面卸载</p></li><li><p><code>onPullDownRefresh</code>：监听用户下拉动作</p></li><li><p><code>onReachBottom</code>：页面上拉触底事件的处理函数</p></li><li><p><code>onShareAppMessage</code>：用户点击右上角转发</p></li></ol><blockquote><ul><li>小程序被转发、分享、收藏</li><li>给用户一些奖励</li></ul></blockquote><ol start="9"><li><code>onShareTimeline</code>：用户点击右上角转发到朋友圈</li></ol><blockquote><ul><li>如果不写这个生命周期，页面右上角分享按钮不能点击</li></ul></blockquote><ol start="10"><li><p><code>onAddToFavorites</code>：用户点击右上角收藏</p></li><li><p><code>onPageScroll</code>：页面滚动触发事件的处理函数</p></li><li><p><code>onResize</code>：页面尺寸改变时触发，详见 响应显示区域变化</p></li></ol></div><p> </p><h2 id="组件生命周期" tabindex="-1">组件生命周期 <a class="header-anchor" href="#组件生命周期" aria-label="Permalink to &quot;组件生命周期&quot;">​</a></h2><div class="tip custom-block github-alert"><p class="custom-block-title">TIP</p><p></p><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">Component</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">({</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">     lifetimes：{</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">       //在组件实例进入页面节点树时执行</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">       attached：</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">function</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">（）{</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">       }，</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">       //在组件实例被从页面节点树移除时执行</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">       detached：</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">function</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">（）{</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">       }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">})</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><ul><li><code>attached</code>：初始化数据，发送异步请求</li><li><code>detached</code>：取消定时器</li></ul></div><p> </p><h2 id="内置api" tabindex="-1">内置API <a class="header-anchor" href="#内置api" aria-label="Permalink to &quot;内置API&quot;">​</a></h2><div class="tip custom-block github-alert"><p class="custom-block-title">TIP</p><p></p><h4 id="_1-弹出提示框" tabindex="-1">1. 弹出提示框 <a class="header-anchor" href="#_1-弹出提示框" aria-label="Permalink to &quot;1. 弹出提示框&quot;">​</a></h4><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">wx.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">showToast</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">({</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    title：</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;成功&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    icon：</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;success&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    duration：</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">2000</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">})</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p> </p><h4 id="_2-发送网络请求" tabindex="-1">2. 发送网络请求： <a class="header-anchor" href="#_2-发送网络请求" aria-label="Permalink to &quot;2. 发送网络请求：&quot;">​</a></h4><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">wx.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">request</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">({ </span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">   url：</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39; &#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">，</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">   success：(result) =&gt;{</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    //成功</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }，</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    fail：(err) =&gt; {</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    //错误</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">})</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><blockquote><ul><li>报错：如果是首次发送网络请求，那么会出现以下警告</li><li>分析：在小程序中，如果想要进行网络数据的传输， 那么是需要提前在微信公众平台上进行相应域名配置的</li><li>解决：</li></ul><blockquote><ol><li>方案1：如果只是本地开发测试以下，那么可以在微信开发者工具的详情按钮中 勾选 “不校验合法域名”</li><li>方案2：根据错误提示中的链接，登录微信公众平台进行域名设置操作 (开发设置 → 服务器域名)</li></ol></blockquote></blockquote><p> </p><h4 id="_3-其他" tabindex="-1">3. 其他 <a class="header-anchor" href="#_3-其他" aria-label="Permalink to &quot;3. 其他&quot;">​</a></h4><ol><li>上传文件</li><li>下载文件</li><li>拍摄照片</li></ol></div>`,12)]))}const u=i(e,[["render",p]]);export{k as __pageData,u as default};
