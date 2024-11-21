import{_ as s,c as l,a2 as a,o as e}from"./chunks/framework.D3LXhGAZ.js";const r=JSON.parse('{"title":"数据类型","description":"","frontmatter":{},"headers":[],"relativePath":"sidebar/python/py/dataType.md","filePath":"sidebar/python/py/dataType.md"}'),n={name:"sidebar/python/py/dataType.md"};function t(p,i,o,h,k,d){return e(),l("div",null,i[0]||(i[0]=[a(`<h1 id="数据类型" tabindex="-1">数据类型 <a class="header-anchor" href="#数据类型" aria-label="Permalink to &quot;数据类型&quot;">​</a></h1><h2 id="number-数字" tabindex="-1">Number（数字） <a class="header-anchor" href="#number-数字" aria-label="Permalink to &quot;Number（数字）&quot;">​</a></h2><div class="tip custom-block github-alert"><p class="custom-block-title">TIP</p><p></p><ul><li>int、float、bool、complex（复数）</li></ul></div><p> </p><h2 id="bool-布尔类型" tabindex="-1">bool（布尔类型） <a class="header-anchor" href="#bool-布尔类型" aria-label="Permalink to &quot;bool（布尔类型）&quot;">​</a></h2><div class="tip custom-block github-alert"><p class="custom-block-title">TIP</p><p></p><ol><li>成立：</li></ol><blockquote><ul><li><code>True==1</code>：True 会被转换成 1</li><li><code>False==0</code>：False 会被转换成 0</li></ul></blockquote><ol start="2"><li>隐式转换：</li></ol><blockquote><ul><li><code>True</code>：非零的数字和非空的字符串、列表、元组</li><li><code>False</code>：0、空字符串、空列表、空元组</li></ul></blockquote></div><p> </p><h2 id="string-字符串" tabindex="-1">String（字符串） <a class="header-anchor" href="#string-字符串" aria-label="Permalink to &quot;String（字符串）&quot;">​</a></h2><div class="tip custom-block github-alert"><p class="custom-block-title">TIP</p><p></p><ol><li>两种索引方式：</li></ol><blockquote><ul><li>从左往右以0开始</li><li>从右往左以-1开始</li></ul></blockquote><ol start="2"><li><p>截取：<code>str[头下标(0): 尾下标(-1): 间隔]</code></p></li><li><p><code>+</code> 是字符串的拼接，* 是复制当前字符串</p></li><li><p><code>\\</code> 是转义特殊字符，在字符串前面添加一个 r表示不转义</p></li><li><p>字符串格式化（3.6之后）</p></li></ol><div class="language-python vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">name </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;Jack&#39;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">f</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;Hello </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">{</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">name</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">}</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  # &#39;Hello Jack&#39;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><ol start="6"><li>字符串不能被改变</li></ol></div><p> </p><h2 id="tuple-元组" tabindex="-1">Tuple（元组） <a class="header-anchor" href="#tuple-元组" aria-label="Permalink to &quot;Tuple（元组）&quot;">​</a></h2><div class="tip custom-block github-alert"><p class="custom-block-title">TIP</p><p></p><ol><li>说明：</li></ol><blockquote><ul><li>与列表List相似，使用 ( ) 表示，但元组的元素不能修改</li><li>只有一个元素时，需要在元素后面加个逗号，以表示是一个元组</li></ul></blockquote><ol start="2"><li>元素操作：</li></ol><blockquote><ol><li>读取：<code>tup[n]</code></li></ol><blockquote><ol><li><code>tup[2]</code>：第三个元素</li><li><code>tup[头下标:尾下标]</code>：不包括尾下标的元素</li></ol></blockquote><ol start="2"><li>修改：元素的值是不能修改，但是可以对元组操作（连接等）</li><li>删除：元素是不能被删除的，但是可以通过 del 删除整个元组</li></ol></blockquote><ol start="3"><li>关键字</li></ol><blockquote><ul><li><code>in</code>：判断某个元素是否存在于元组，返回bool</li><li><code>del tuple</code>：删除整个元组</li><li><code>for item in tuple</code>：</li></ul><div class="language-python vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">tuple</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">2</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">3</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">for</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> item </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">in</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> tuple</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    print</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(item, </span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">end</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot; &quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)   </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 1 2 3</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div></blockquote><ol start="4"><li>运算符：<code>len(tup)</code> <code>+</code> <code>+=</code> <code>*</code></li></ol></div><p> </p><h2 id="list-列表" tabindex="-1">List（列表） <a class="header-anchor" href="#list-列表" aria-label="Permalink to &quot;List（列表）&quot;">​</a></h2><div class="tip custom-block github-alert"><p class="custom-block-title">TIP</p><p></p><ol><li>说明：</li></ol><blockquote><ul><li>索引值以 0 为开始值，-1 为从末尾的开始位置</li><li>列表中的元素是可以改变的</li></ul></blockquote><ol start="2"><li>元素操作：</li></ol><blockquote><ol><li>读取：<code>list[n]</code></li></ol><blockquote><ol><li><code>list[头下标:尾下标]</code>：不包括尾下标的元素</li><li><code>list[头下标(0): 尾下标(-1): 间隔]</code></li><li><code>list[n:]</code>：从下标第n开始直到结束</li></ol></blockquote><ol start="2"><li>修改：<code>list[n] = XXX</code></li></ol></blockquote><ol start="3"><li>关键字</li></ol><blockquote><ul><li><code>in</code>：判断某个元素是否存在于列表，返回bool</li><li><code>del list[n]</code>：删除列表第n个元素</li><li><code>for item in list</code>：</li></ul><div class="language-python vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">list</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">2</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">3</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">4</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">5</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">]</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">for</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> item </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">in</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> list</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    print</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(item, </span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">end</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot; &quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#1 2 3 4 5</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div></blockquote><ol start="4"><li>运算符：</li></ol><blockquote><ul><li><code>+</code>：[1, 2, 3] + [4, 5, 6] → [1, 2, 3, 4, 5, 6]</li><li><code>*+*</code>：[&#39;hi&#39;] * 3 → [&#39;hi&#39;, &#39;hi&#39;, &#39;hi&#39;]</li></ul></blockquote><ol start="5"><li>内置方法：</li></ol><blockquote><ul><li><code>len(list)</code>：获取列表长度</li><li><code>append()</code>：追加元素</li><li><code>pop()</code>：默认删除最后一个元素，并且返回该元素的值</li><li><code>max(list)</code>：返回列表元素最大值</li><li><code>min(list)</code>：返回列表元素最小值</li><li><code>list(seq)</code>：将元组转换为列表</li></ul></blockquote></div><p> </p><h2 id="dictionary-字典" tabindex="-1">Dictionary（字典） <a class="header-anchor" href="#dictionary-字典" aria-label="Permalink to &quot;Dictionary（字典）&quot;">​</a></h2><div class="tip custom-block github-alert"><p class="custom-block-title">TIP</p><p></p><ol><li>说明：</li></ol><blockquote><ul><li>字典使用 <code>{ }</code> 表示，且是一个无序的 <code>键: 值</code> 对的集合</li><li>在同一个字典中，键(key)必须是唯一的</li></ul></blockquote><ol start="2"><li>元素操作：</li></ol><blockquote><ol><li><p>读取：<code>dict[&#39;key&#39;]</code></p></li><li><p>修改：<code>dict[&#39;key&#39;] = XXX</code></p></li><li><p>删除：<code>del dict[&#39;key&#39;]</code></p></li></ol></blockquote><ol start="3"><li>关键字</li></ol><blockquote><ul><li><code>del dict</code>：删除字典</li><li><code>key in dict</code>：如果键在字典dict里返回true，否则返回false</li></ul></blockquote><ol start="4"><li>内置方法：</li></ol><blockquote><ul><li><code>dict.keys()</code>：输出所有键</li><li><code>dict.values()</code>：输出所有值</li><li><code>dict.clear()</code>：清空字典</li></ul></blockquote><ol start="5"><li>遍历：</li></ol><div class="language-python vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">person </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;name&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;Jack&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;age&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">20</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">for</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> key, value </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">in</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> person.items():</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    print</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(key, value)</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div></div><p> </p><h2 id="set-集合" tabindex="-1">Set（集合） <a class="header-anchor" href="#set-集合" aria-label="Permalink to &quot;Set（集合）&quot;">​</a></h2><div class="tip custom-block github-alert"><p class="custom-block-title">TIP</p><p></p><ol><li>说明：</li></ol><blockquote><ul><li>使用 <code>{ }</code> 表示，是一种无序、可变且存储唯一元素的数据类型</li><li>创建一个空集合必须用<code>set()</code>，因为 <code>{ }</code> 是用来创建一个空字典</li></ul></blockquote><ol start="2"><li>元组操作：</li></ol><blockquote><ol><li>添加：<code>dict[&#39;key&#39;]</code></li></ol><blockquote><ol><li><code>s.add(x, y, ... )</code></li><li><code>s.update(x)</code>：此方式参数可以是列表，元组，字典等</li></ol></blockquote><ol start="2"><li>删除：<code>dict[&#39;key&#39;]</code></li></ol><blockquote><ol><li><code>s.remove(x)</code>：元素不存在时，会发生错误</li><li><code>s.discard(x)</code>：元素不存在时，不会发生错误</li><li><code>s.pop()</code>：随机删除一个元素</li></ol></blockquote></blockquote><ol start="3"><li>关键字</li></ol><blockquote><ul><li><code>x in s</code>：判断元素 x 是否在集合 s 中，存在返回 True，不存在返回 False</li></ul></blockquote><ol start="4"><li>内置方法：</li></ol><blockquote><ul><li><code>s.clear()</code>：清空集合</li><li><code>len(s)</code>：集合元素个数</li></ul></blockquote><ol start="5"><li>集合运算：</li></ol><blockquote><blockquote><ol><li><code>-</code>：差集</li><li><code>|</code>：并集</li><li><code>&amp;</code>：交集</li><li><code>*</code>：两者中不同时存在的元素</li></ol></blockquote></blockquote></div><p> </p><h2 id="数据类型检测" tabindex="-1">数据类型检测 <a class="header-anchor" href="#数据类型检测" aria-label="Permalink to &quot;数据类型检测&quot;">​</a></h2><div class="tip custom-block github-alert"><p class="custom-block-title">TIP</p><p></p><ol><li><p><code>type()</code>：不会认为子类是一种父类类型</p></li><li><p><code>isinstance(a, int)</code>：会认为子类是一种父类类型</p></li></ol></div><p> </p><h2 id="数据类型转换" tabindex="-1">数据类型转换 <a class="header-anchor" href="#数据类型转换" aria-label="Permalink to &quot;数据类型转换&quot;">​</a></h2><div class="tip custom-block github-alert"><p class="custom-block-title">TIP</p><p></p><ol><li>隐式转换：</li></ol><blockquote><ol><li><code>float + int = float</code></li><li><code>int + string</code>：无法转换，报错</li></ol></blockquote><ol start="2"><li>显示转换：</li></ol><blockquote><ol><li><code>int(&#39;1&#39;)</code>：强制转换为 int 1</li><li><code>int(2.8)</code>：强制转换为 int 2</li><li><code>float(1)</code>：强制转换为 float 1.0</li><li><code>str(2)</code>：强制转换为 string &#39;2&#39;</li></ol></blockquote></div><p> </p><h2 id="推导式" tabindex="-1">推导式 <a class="header-anchor" href="#推导式" aria-label="Permalink to &quot;推导式&quot;">​</a></h2><div class="tip custom-block github-alert"><p class="custom-block-title">TIP</p><p></p><ol><li>列表(list)推导式：</li></ol><div class="language-python vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">[表达式 </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">for</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 变量 </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">in</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 列表] </span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">[out_exp_res </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">for</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> out_exp </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">in</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> input_list]</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 或</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">[表达式 </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">for</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 变量 </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">in</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 列表 </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">if</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 条件]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">[out_exp_res </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">for</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> out_exp </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">in</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> input_list </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">if</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> condition]</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><p> </p><ol start="2"><li>字典(dict)推导式：</li></ol><div class="language-python vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{ key_expr: value_expr </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">for</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> value </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">in</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> collection }</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 或</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{ key_expr: value_expr </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">for</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> value </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">in</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> collection </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">if</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> condition }</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p> </p><ol start="3"><li>集合(set)推导式：</li></ol><div class="language-python vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{ expression </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">for</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> item </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">in</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> Sequence }</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 或</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{ expression </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">for</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> item </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">in</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> Sequence </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">if</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> conditional }</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p> </p><ol start="4"><li>元组(tuple)推导式：</li></ol><div class="language-python vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(expression </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">for</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> item </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">in</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> Sequence )</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 或</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(expression </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">for</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> item </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">in</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> Sequence </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">if</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> conditional )</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div></div>`,30)]))}const u=s(n,[["render",t]]);export{r as __pageData,u as default};
