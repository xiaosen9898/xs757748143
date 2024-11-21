import{_ as i,c as a,a2 as l,o as e}from"./chunks/framework.D3LXhGAZ.js";const c=JSON.parse('{"title":"约束","description":"","frontmatter":{},"headers":[],"relativePath":"sidebar/mysql/sql/rules.md","filePath":"sidebar/mysql/sql/rules.md"}'),t={name:"sidebar/mysql/sql/rules.md"};function n(p,s,h,k,r,d){return e(),a("div",null,s[0]||(s[0]=[l(`<h1 id="约束" tabindex="-1">约束 <a class="header-anchor" href="#约束" aria-label="Permalink to &quot;约束&quot;">​</a></h1><h2 id="约束的意义" tabindex="-1">约束的意义 <a class="header-anchor" href="#约束的意义" aria-label="Permalink to &quot;约束的意义&quot;">​</a></h2><div class="tip custom-block github-alert"><p class="custom-block-title">TIP</p><p></p><ul><li><p>定义：约束是作用于表中字段上的规则，用于限制存储在表中的数据</p></li><li><p>目的：保证数据库中数据的正确、有效性和完整性</p></li></ul></div><p> </p><h2 id="分类" tabindex="-1">分类 <a class="header-anchor" href="#分类" aria-label="Permalink to &quot;分类&quot;">​</a></h2><div class="tip custom-block github-alert"><p class="custom-block-title">TIP</p><p></p><ol><li><p>非空约束：限制该字段的数据不能为null <code>not null</code></p></li><li><p>唯一约束：保证该字段的所有数据都是唯一的 <code>unique</code></p></li><li><p>主键约束：主键是一行数据的唯一标识，要求非空且唯一 <code>primary key</code></p></li><li><p>默认约束：保存数据时，如果未指定该字段的值，则采用默认值 <code>default</code></p></li><li><p>检查约束：保证字段值满足某一个条件 <code>check</code></p></li><li><p>外键约束：</p></li></ol><blockquote><ol><li><p>用来让两张表的数据之间建立连接，保证数据的一致性和完整性 <code>foreign key</code></p></li><li><p>添加外键：</p></li></ol><div class="language-sql vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sql</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">-- 建表时添加</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">create</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> table</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> 表名</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">   字段名 数据类型,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    ...</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    [constraint] [外键名称] </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">foreign key</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(外键字段名) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">references</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 主表(主表列名)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">-- 建表后添加</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">alter</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> table</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 表名 </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">add</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> constraint</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 外键名称 forreign </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">key</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(外键字段名) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">references</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 主表(主表列名);</span></span></code></pre></div><ol start="3"><li>删除外键：</li></ol><div class="language-sql vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sql</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">alter</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> table</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 表名 </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">drop</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> forreign </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">key</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 外键名称;</span></span></code></pre></div><ol start="4"><li>删除/更新行为：</li></ol><blockquote><ul><li>no action</li><li>restrict</li><li>cascade</li><li>set null</li><li>set default</li></ul></blockquote></blockquote></div>`,6)]))}const E=i(t,[["render",n]]);export{c as __pageData,E as default};
