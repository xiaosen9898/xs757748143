import{_ as i,c as a,a2 as l,o as n}from"./chunks/framework.D3LXhGAZ.js";const c=JSON.parse('{"title":"Dart 基础","description":"","frontmatter":{},"headers":[],"relativePath":"dart/dart/base.md","filePath":"dart/dart/base.md"}'),t={name:"dart/dart/base.md"};function e(p,s,h,k,r,d){return n(),a("div",null,s[0]||(s[0]=[l(`<h1 id="dart-基础" tabindex="-1">Dart 基础 <a class="header-anchor" href="#dart-基础" aria-label="Permalink to &quot;Dart 基础&quot;">​</a></h1><h2 id="dart入口函数" tabindex="-1">dart入口函数 <a class="header-anchor" href="#dart入口函数" aria-label="Permalink to &quot;dart入口函数&quot;">​</a></h2><div class="tip custom-block github-alert"><p class="custom-block-title">TIP</p><p></p><div class="language-dart vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">dart</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">viod </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">main</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">List</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">String</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt; args){ }</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div></div><p> </p><h2 id="dart注释" tabindex="-1">dart注释 <a class="header-anchor" href="#dart注释" aria-label="Permalink to &quot;dart注释&quot;">​</a></h2><div class="tip custom-block github-alert"><p class="custom-block-title">TIP</p><p></p><ol><li><p>单行注释：// 或 ///</p></li><li><p>多行注释：/** */</p></li></ol></div><p> </p><h2 id="dart的输入输出" tabindex="-1">dart的输入输出 <a class="header-anchor" href="#dart的输入输出" aria-label="Permalink to &quot;dart的输入输出&quot;">​</a></h2><div class="tip custom-block github-alert"><p class="custom-block-title">TIP</p><p></p><ol><li>输出：<code>print();</code></li></ol><blockquote><ul><li>可以使用 <code>\${变量}</code> 打印多个变量</li></ul><div class="language-dart vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">dart</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">print</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">\${</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">变量1</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">}</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> \${</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">变量2</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">}</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">print</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">$</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">变量1</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> $</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">变量2</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div></blockquote><ol start="2"><li>输入：</li></ol><div class="language-dart vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">dart</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;dart:io&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">void</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> main</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">() {</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  print</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;请输入您的名字：&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  String</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">?</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> name </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> stdin.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">readLineSync</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">();  </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 读取输入并存入 name 变量</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  print</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;您好, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">$</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">name</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">!&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div></div><p> </p><h2 id="dart变量" tabindex="-1">dart变量 <a class="header-anchor" href="#dart变量" aria-label="Permalink to &quot;dart变量&quot;">​</a></h2><div class="tip custom-block github-alert"><p class="custom-block-title">TIP</p><p></p><ol><li>确定类型声明：</li></ol><blockquote><ol><li><code>int</code>：整数型（支持16进制）</li><li><code>double</code>：浮点型</li><li><code>String</code>：字符串（使用使用三个点<code>&#39;&#39;&#39;</code>包裹表示多行字符串）</li><li><code>bool</code>：布尔值</li></ol></blockquote><ol start="2"><li>不确定类型：</li></ol><blockquote><ol><li><code>var</code>：会自动推断类型</li><li><code>const</code>：定义常量，值必须直接给定一个常量（编译期间就确定下来）</li><li><code>final</code>：定义常量，值可以给一个函数的返回结果</li><li><code>dynamic</code>：值可以给任意的，并且任意的数据类型的值都能重新赋值给变量，不推荐使用</li><li><code>late</code>：延迟初始化变量</li></ol></blockquote><ol start="3"><li><p>声明一个List：<code>List&lt;元素的类型&gt;变量名 = []</code></p></li><li><p>声明一个Set：<code>Set&lt;元素的类型&gt;变量名 = {}</code>，元素不能重复</p></li><li><p>声明一个Map：<code>Map&lt;类型1，类型2&gt;变量名 = { &quot;键&quot;: &quot;值&quot; }</code></p></li></ol></div><p> </p><h2 id="作用域" tabindex="-1">作用域 <a class="header-anchor" href="#作用域" aria-label="Permalink to &quot;作用域&quot;">​</a></h2><div class="tip custom-block github-alert"><p class="custom-block-title">TIP</p><p></p><p>词法作用域</p></div><p> </p><h2 id="运算符" tabindex="-1">运算符 <a class="header-anchor" href="#运算符" aria-label="Permalink to &quot;运算符&quot;">​</a></h2><h4 id="_1-算术运算符" tabindex="-1">1. 算术运算符 <a class="header-anchor" href="#_1-算术运算符" aria-label="Permalink to &quot;1. 算术运算符&quot;">​</a></h4><div class="tip custom-block github-alert"><p class="custom-block-title">TIP</p><p></p><p>算术运算符：<code>加+、减-、乘*、除/、模%、整除 ~/</code></p></div><p> </p><h4 id="_2-关系运算符" tabindex="-1">2. 关系运算符 <a class="header-anchor" href="#_2-关系运算符" aria-label="Permalink to &quot;2. 关系运算符&quot;">​</a></h4><div class="tip custom-block github-alert"><p class="custom-block-title">TIP</p><p></p><ol><li><p>用于比较两个值之间的关系，结果为布尔类型：</p></li><li><p>大于：&gt;、大于等于：&gt;=、小于：&lt;、小于等于：&lt;=</p></li><li><p>相等：==</p></li><li><p>不等：!=</p></li></ol></div><p> </p><h4 id="_3-赋值运算符" tabindex="-1">3. 赋值运算符 <a class="header-anchor" href="#_3-赋值运算符" aria-label="Permalink to &quot;3. 赋值运算符&quot;">​</a></h4><div class="tip custom-block github-alert"><p class="custom-block-title">TIP</p><p></p><ol><li><code>=</code>：基本赋值运算符</li><li><code>?</code>：三目运算符</li><li><code>??=</code>：赋值操作</li></ol><blockquote><div class="language-dart vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">dart</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">var</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> name </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> null</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> </span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">name </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">??=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;Jack&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">print</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">($name)   </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// Jack</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div></blockquote><ol start="4"><li><code>??</code>：条件运算符</li></ol><blockquote><ol><li>表达式1 ?? 表达式2</li><li>如果表达式1不为null，则取它的值，否则取表达式2的值</li></ol></blockquote><ol start="5"><li><code>+= -= *= /= %= ~/=</code>：复合赋值运算符（先运算后赋值）</li></ol></div><p> </p><h4 id="_4-逻辑运算符" tabindex="-1">4. 逻辑运算符 <a class="header-anchor" href="#_4-逻辑运算符" aria-label="Permalink to &quot;4. 逻辑运算符&quot;">​</a></h4><div class="tip custom-block github-alert"><p class="custom-block-title">TIP</p><p></p><ol><li><code>!</code>：逻辑非表达式：真变假, 假变真</li><li><code>&amp;&amp;</code>：逻辑与表达式：</li></ol><blockquote><ol><li>结果：有假为假，全真为真</li><li>逻辑表达式的结果不一定是 true/false,也有可能是其他的值</li></ol></blockquote><ol start="3"><li><code>||</code>：逻辑或表达式：</li></ol><blockquote><ol><li>结果：有真为真，全假为假</li><li>逻辑表达式的结果不一定是 true/false,也有可能是其他的值</li></ol></blockquote><ul><li>优先级： ! &gt; &amp;&amp; &gt; ||</li></ul></div><p> </p><h4 id="_5-级联运算符" tabindex="-1">5. 级联运算符 <a class="header-anchor" href="#_5-级联运算符" aria-label="Permalink to &quot;5. 级联运算符&quot;">​</a></h4><div class="tip custom-block github-alert"><p class="custom-block-title">TIP</p><p></p><p><code>..</code>：级联运算符</p><div class="language-dart vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">dart</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">class</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> Person</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  String</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">?</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> name;</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  int</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">?</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> age;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  </span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  void</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> setName</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">String</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> name) {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    this</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.name </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> name;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  void</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> setAge</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">int</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> age) {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    this</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.age </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> age;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  </span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  void</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> printInfo</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">() {</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    print</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;Name: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">$</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">name</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">, Age: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">$</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">age</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">void</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> main</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">() {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  var</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> person </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> Person</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">()</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    ..</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">setName</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;Alice&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    ..</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">setAge</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">30</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    ..</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">printInfo</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">();  </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 输出: Name: Alice, Age: 30</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br></div></div></div><p> </p><h4 id="_6-自增自减" tabindex="-1">6. 自增自减 <a class="header-anchor" href="#_6-自增自减" aria-label="Permalink to &quot;6. 自增自减&quot;">​</a></h4><div class="tip custom-block github-alert"><p class="custom-block-title">TIP</p><p></p><blockquote><h6 id="_1-自增" tabindex="-1">1. 自增：<code>++</code> <a class="header-anchor" href="#_1-自增" aria-label="Permalink to &quot;1. 自增：\`++\`&quot;">​</a></h6><ol><li>前自增：<code>++i</code>，先加后算</li><li>后自增：<code>i++</code>，先算后加</li></ol></blockquote><p> </p><blockquote><h6 id="_2-自减" tabindex="-1">2. 自减：<code>--</code> <a class="header-anchor" href="#_2-自减" aria-label="Permalink to &quot;2. 自减：\`--\`&quot;">​</a></h6><ol><li>前自减：<code>--i</code>，先减后算</li><li>后自减：<code>i--</code>，先算后减</li></ol></blockquote></div>`,34)]))}const E=i(t,[["render",e]]);export{c as __pageData,E as default};
