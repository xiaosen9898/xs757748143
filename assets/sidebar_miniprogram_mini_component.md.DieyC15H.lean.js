import{_ as i,c as a,a2 as l,o as e}from"./chunks/framework.D3LXhGAZ.js";const c=JSON.parse('{"title":"小程序标签","description":"","frontmatter":{},"headers":[],"relativePath":"sidebar/miniprogram/mini/component.md","filePath":"sidebar/miniprogram/mini/component.md"}'),t={name:"sidebar/miniprogram/mini/component.md"};function n(p,s,h,o,r,d){return e(),a("div",null,s[0]||(s[0]=[l(`<h1 id="小程序标签" tabindex="-1">小程序标签 <a class="header-anchor" href="#小程序标签" aria-label="Permalink to &quot;小程序标签&quot;">​</a></h1><h2 id="组件" tabindex="-1">组件 <a class="header-anchor" href="#组件" aria-label="Permalink to &quot;组件&quot;">​</a></h2><div class="tip custom-block github-alert"><p class="custom-block-title">TIP</p><p></p><h4 id="_1-view-view" tabindex="-1">1. <code>&lt;view&gt;&lt;/view&gt;</code> <a class="header-anchor" href="#_1-view-view" aria-label="Permalink to &quot;1. \`&lt;view&gt;&lt;/view&gt;\`&quot;">​</a></h4><ul><li>相当于HTML中的<code>&lt;div&gt;&lt;/div&gt;</code>标签</li></ul><p> </p><h4 id="_2-text-text" tabindex="-1">2. <code>&lt;text&gt;&lt;/text&gt;</code> <a class="header-anchor" href="#_2-text-text" aria-label="Permalink to &quot;2. \`&lt;text&gt;&lt;/text&gt;\`&quot;">​</a></h4><ol><li>相当于HTML中的<code>&lt;span&gt;&lt;/span&gt;</code>标签</li><li>属性：</li></ol><blockquote><ul><li><code>user-select</code>：长按可以复制文本</li></ul></blockquote><p> </p><h4 id="_3-image-图片标签" tabindex="-1">3. <code>&lt;image&gt;</code> 图片标签 <a class="header-anchor" href="#_3-image-图片标签" aria-label="Permalink to &quot;3. \`&lt;image&gt;\` 图片标签&quot;">​</a></h4><ol><li>默认大小：320px*240px</li><li>支持懒加载：lazy-load</li><li>通过mode属性控制效果：</li></ol><blockquote><ol><li><code>scaleToFill</code>：标签的宽高多大，图片的宽高就多大</li><li><code>aspectFit</code>：等比缩放，某条边碰到标签边框就停下来</li><li><code>aspectFill</code>：等比缩放，图片填满图片边框，图片超出边框部分被裁减</li><li><code>widthFix</code>：等比缩放，图片的高根据宽按比例变化，设置高无效</li></ol></blockquote><p> </p><h4 id="_4-swiper-轮播图标签" tabindex="-1">4. <code>&lt;swiper&gt;</code> 轮播图标签 <a class="header-anchor" href="#_4-swiper-轮播图标签" aria-label="Permalink to &quot;4. \`&lt;swiper&gt;\` 轮播图标签&quot;">​</a></h4><ol><li>默认大小：100% * 150px</li></ol><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">swiper</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">   &lt;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">swiper-item</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt; &lt;/</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">swiper-item</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">swiper</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><ol start="2"><li>属性：</li></ol><blockquote><ol><li><code>autoplay</code>：自动轮播</li><li><code>indicator-dots</code>：显示器轮播</li><li><code>circular</code>：衔接轮播</li></ol></blockquote><ol start="3"><li>图片与轮播图的适配：</li></ol><blockquote><ul><li>让轮播图标签的高度，去适应图片标签的高度</li><li>图片标签宽度 / 轮播图标签宽度 = 图片标签高度 / 轮播图标签的高度</li></ul></blockquote><p> </p><h4 id="_5-navigator-超链接标签" tabindex="-1">5. <code>&lt;navigator&gt;</code> 超链接标签 <a class="header-anchor" href="#_5-navigator-超链接标签" aria-label="Permalink to &quot;5. \`&lt;navigator&gt;\` 超链接标签&quot;">​</a></h4><ol><li>定位：</li></ol><blockquote><ol><li>是块级元素</li><li>通过设置url来跳转到指定页面</li><li>可以跳转到其它小程序</li></ol></blockquote><ol start="2"><li>类型open-type：</li></ol><blockquote><ol><li><code>navigate</code>：保留当前页面，跳转到应用内的某个页面，但是不能跳到 tabbar 页面(默认)</li><li><code>redirect</code>：关闭当前页面，跳转到应用内的某个页面，但是不允许跳转到 tabbar 页面</li><li><code>switchTab</code>：跳转到 tabBar 页面，并关闭其他所有非 tabBar 页面</li><li><code>reLaunch</code>：关闭所有页面，打开到应用内的某个页面</li><li><code>navigateBack</code>：关闭当前页面，返回上一页面或多级页面</li></ol></blockquote><ol start="3"><li>跳转到其他小程序：</li></ol><blockquote><ol><li>设置 target =“miniProgram”</li><li>填写属性 short-link = &quot;链接&quot; 或者 设置 app-id</li></ol></blockquote><p> </p><h4 id="_6-button-按钮" tabindex="-1">6. <code>&lt;button&gt;</code> 按钮 <a class="header-anchor" href="#_6-button-按钮" aria-label="Permalink to &quot;6. \`&lt;button&gt;\` 按钮&quot;">​</a></h4><ul><li><p>不仅仅是普通的按钮</p></li><li><p>类型open-type：</p></li></ul><blockquote><ol><li><code>share</code>：用户转发（分享）</li><li><code>contact</code>：打开客服会话，如果用户在会话中点击消息卡片后返回小程序，可以从 bindcontact 回调中获得具体信息</li><li><code>feedback</code>：打开“意见反馈”页面，用户可提交反馈内容并上传日志，开发者可以登录小程序管理后台后进入左侧菜单“客服反馈”页面获取到反馈内容</li><li><code>getPhoneNumber</code>：</li></ol><blockquote><ol><li>获取用户手机号，可以从bindgetphonenumber回调中获取到用户信息</li><li>个人小程序没有权限获取手机号码，企业才可以</li><li>在前台获取到的手机号码是加密过的，需要发送给后台，调用小程序相关代码做解密</li></ol></blockquote><ol start="5"><li><code>openSetting</code>：</li></ol><blockquote><ol><li>打开授权列表</li><li>需在app.json配置权限</li></ol></blockquote></blockquote><p> </p><h4 id="_7-rich-text-富文本标签" tabindex="-1">7. <code>&lt;rich-text&gt;</code> 富文本标签 <a class="header-anchor" href="#_7-rich-text-富文本标签" aria-label="Permalink to &quot;7. \`&lt;rich-text&gt;\` 富文本标签&quot;">​</a></h4><ol><li><p>属性：<code>nodes</code></p></li><li><p>使用：</p></li></ol><blockquote><ol><li>定义变量：</li></ol><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">pages</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">({ data：{  html：</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;&lt;h1&gt;大标题&lt;/h1&gt;&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">} })</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><ol start="2"><li>使用：</li></ol><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">rich-text</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> nodes</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;{{ html }}&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;&lt;/</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">rich-text</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div></blockquote></div><p> </p><h2 id="自定义组件" tabindex="-1">自定义组件 <a class="header-anchor" href="#自定义组件" aria-label="Permalink to &quot;自定义组件&quot;">​</a></h2><div class="tip custom-block github-alert"><p class="custom-block-title">TIP</p><p></p><ol><li>创建：</li></ol><blockquote><ol><li>在项目根目录创建文件夹components</li><li>在文件夹内创建一个和组件名称同名的文件夹 比如：MyCom</li><li>在开发工具中选中并右键，选择新建组件并命名(不需要写后缀) 比如： MyCom</li><li>在组件json文件声明 { &quot;component&quot;: true } （第三步自动生成）</li></ol></blockquote><ol start="2"><li>注册：</li></ol><blockquote><ol><li>哪个页面使用，就在哪个页面的json配置文件注册</li></ol><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">  &quot;usingComponents&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">：{</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">      &quot;组件名(自定)&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">：</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;组件路径&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  }  </span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div></blockquote><ol start="3"><li>使用：以注册时的组件名字作为标签使用即可</li></ol></div><p> </p><h2 id="组件传参" tabindex="-1">组件传参 <a class="header-anchor" href="#组件传参" aria-label="Permalink to &quot;组件传参&quot;">​</a></h2><div class="tip custom-block github-alert"><p class="custom-block-title">TIP</p><p></p><h4 id="_1-父传子" tabindex="-1">1. 父传子 <a class="header-anchor" href="#_1-父传子" aria-label="Permalink to &quot;1. 父传子&quot;">​</a></h4><ol><li>父传：在页面中的子组件标签中传</li></ol><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">MyButton</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  name</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;Jack&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> age</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{{</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">24</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}}&gt;&lt;/</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">MyButton</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><ol start="2"><li>子接：</li></ol><div class="vp-code-group vp-adaptive-theme"><div class="tabs"><input type="radio" name="group-53lyI" id="tab-BF8cgEX" checked><label data-title="1. 在子组件的js文件中接收" for="tab-BF8cgEX">1. 在子组件的js文件中接收</label><input type="radio" name="group-53lyI" id="tab-yNvXymn"><label data-title="2. 在子组件的wxml文件中直接使用" for="tab-yNvXymn">2. 在子组件的wxml文件中直接使用</label></div><div class="blocks"><div class="language-js vp-adaptive-theme active line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">Component</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">({</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      properties：{</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">           name</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">             type：String</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">           },</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">           age</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">             type：Number</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">           }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">})</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">view</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;{{ name }}&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">view</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div></div></div><p> </p><h4 id="_2-子传父" tabindex="-1">2. 子传父 <a class="header-anchor" href="#_2-子传父" aria-label="Permalink to &quot;2. 子传父&quot;">​</a></h4><ol><li>子传：</li></ol><blockquote><ol><li>子组件绑定触发传参数事件的方法</li><li>子组件使用triggerEvent方法发送通知修改数据的方法，并且传入要修改的参数</li></ol><div class="vp-code-group vp-adaptive-theme"><div class="tabs"><input type="radio" name="group-R0F0N" id="tab-5bv4D3R" checked><label data-title="1. wxml" for="tab-5bv4D3R">1. wxml</label><input type="radio" name="group-R0F0N" id="tab-U0khqUE"><label data-title="2. js" for="tab-U0khqUE">2. js</label></div><div class="blocks"><div class="language-js vp-adaptive-theme active line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">view</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> bindtap</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;handleTap&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">view</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">Component</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">({</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  methods：{</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">      handleTap</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(){</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">        this</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">triggerEvent</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;receive传&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, 参数)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">     }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">})</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div></div></div></blockquote><ol start="2"><li>父接：</li></ol><blockquote><ol><li>父组件通过 bind 监听子组件传数据的方法</li><li>父组件通过定义接收数据的方法拿到数据</li></ol><div class="vp-code-group vp-adaptive-theme"><div class="tabs"><input type="radio" name="group-cEMr8" id="tab-OjepxvM" checked><label data-title="1. wxml" for="tab-OjepxvM">1. wxml</label><input type="radio" name="group-cEMr8" id="tab-ERKFoHr"><label data-title="2. js" for="tab-ERKFoHr">2. js</label></div><div class="blocks"><div class="language-js vp-adaptive-theme active line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">MyButton</span><span style="--shiki-light:#B31D28;--shiki-light-font-style:italic;--shiki-dark:#FDAEB7;--shiki-dark-font-style:italic;">  bindreceive传=&quot;receive&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  title</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;Jack&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;&lt;/</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">MyButton</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">Page</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">({</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    receive</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">params</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">){</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">})</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div></div></div></blockquote></div><p> </p><h2 id="webview" tabindex="-1">webview <a class="header-anchor" href="#webview" aria-label="Permalink to &quot;webview&quot;">​</a></h2><div class="tip custom-block github-alert"><p class="custom-block-title">TIP</p><p></p><ol><li>定义：</li></ol><blockquote><ol><li>webview是一个特殊的组件，承载网页的容器。会自动铺满整个小程序页面</li><li>个人类型的小程序暂不支持使用</li></ol></blockquote><ol start="2"><li>属性：</li></ol><blockquote><ul><li><code>src</code>：webview 指向网页的链接。可打开关联的公众号的文章，其它网页需登录小程序管理后台配置业务域名</li></ul></blockquote><ol start="3"><li>使用：</li></ol><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">web-view</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> src</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;网址?a=123&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;&lt;/</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">web-view</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div></div>`,12)]))}const b=i(t,[["render",n]]);export{c as __pageData,b as default};
