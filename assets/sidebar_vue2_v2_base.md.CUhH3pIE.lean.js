import{_ as e,c as n,a2 as a,j as s,a as i,o as t}from"./chunks/framework.D3LXhGAZ.js";const E=JSON.parse('{"title":"VUE2 基础","description":"","frontmatter":{},"headers":[],"relativePath":"sidebar/vue2/v2/base.md","filePath":"sidebar/vue2/v2/base.md"}'),p={name:"sidebar/vue2/v2/base.md"};function h(o,l,k,r,c,d){return t(),n("div",null,l[0]||(l[0]=[a('<h1 id="vue2-基础" tabindex="-1">VUE2 基础 <a class="header-anchor" href="#vue2-基础" aria-label="Permalink to &quot;VUE2 基础&quot;">​</a></h1><h2 id="插值表达式" tabindex="-1">插值表达式 <a class="header-anchor" href="#插值表达式" aria-label="Permalink to &quot;插值表达式&quot;">​</a></h2><div class="tip custom-block github-alert"><p class="custom-block-title">TIP</p><p></p><ol><li>语法： {{ 表达式 }}</li><li>作用：使用data中的数据渲染视图</li><li>注意：</li></ol><blockquote><ul><li>使用的数据必须在 data 选项中存在</li><li>能使用表达式，但是不能使用语句 if for ...</li><li>不能在标签属性中使用 {{ }} 插值</li></ul></blockquote></div><p> </p><h2 id="组件选项" tabindex="-1">组件选项 <a class="header-anchor" href="#组件选项" aria-label="Permalink to &quot;组件选项&quot;">​</a></h2>',5),s("div",{class:"tip custom-block github-alert"},[s("p",{class:"custom-block-title"},"TIP"),s("p"),s("h4",{id:"_1-name",tabindex:"-1"},[i("1. name "),s("a",{class:"header-anchor",href:"#_1-name","aria-label":'Permalink to "1. name"'},"​")]),s("blockquote",null,[s("ul",null,[s("li",null,"作用：给当前组件取一个名称")])]),s("p",null," "),s("h4",{id:"_2-components",tabindex:"-1"},[i("2. components "),s("a",{class:"header-anchor",href:"#_2-components","aria-label":'Permalink to "2. components"'},"​")]),s("blockquote",null,[s("ol",null,[s("li",null,"作用：某个组件中，注册子组件的地方"),s("li",null,"使用：")]),s("blockquote",null,[s("ol",null,[s("li",null,"引入：import Comp from '路径'"),s("li",{Comp:""},"注册：components:"),s("li",null,[i("使用："),s("code",null,"<Comp />")])])])]),s("p",null," "),s("h4",{id:"_3-data",tabindex:"-1"},[i("3. data "),s("a",{class:"header-anchor",href:"#_3-data","aria-label":'Permalink to "3. data"'},"​")]),s("blockquote",null,[s("ul",null,[s("li",null,"作用：return返回的对象里，是声明变量的地方")])]),s("p",null," "),s("h4",{id:"_4-methods",tabindex:"-1"},[i("4. methods "),s("a",{class:"header-anchor",href:"#_4-methods","aria-label":'Permalink to "4. methods"'},"​")]),s("blockquote",null,[s("ol",null,[s("li",null,"作用：声明函数的地方"),s("li",null,"使用：")]),s("blockquote",null,[s("ul",null,[s("li",null,[s("code",null,"方法名() { 函数体 }")]),s("li",null,"方法用到data的成员时，需要this.成员（固定写法）")])])]),s("p",null," "),s("h4",{id:"_5-计算属性computed",tabindex:"-1"},[i("5. 计算属性computed "),s("a",{class:"header-anchor",href:"#_5-计算属性computed","aria-label":'Permalink to "5. 计算属性computed"'},"​")]),s("blockquote",null,[s("ol",null,[s("li",null,"作用：一个特殊属性, 值依赖于另外一些数据动态计算出来"),s("li",null,"特点：")]),s("blockquote",null,[s("ul",null,[s("li",null,"计算后会立刻缓存，下次直接读缓存"),s("li",null,"依赖项改变, 函数会重新执行 并 重新缓存")])]),s("ol",{start:"3"},[s("li",null,"语法：")]),s("div",{class:"language-js vp-adaptive-theme line-numbers-mode"},[s("button",{title:"Copy Code",class:"copy"}),s("span",{class:"lang"},"js"),s("pre",{class:"shiki shiki-themes github-light github-dark vp-code",tabindex:"0"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"}},"/* 语法1 */")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"computed"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},": {")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"     属性名(){  ")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"        return"),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},'  "值"')]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"}}")]),i(`
`),s("span",{class:"line"}),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"}},"/* 语法2 */")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"computed"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},":{")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    属性名: {")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"       get"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"(){  "),s("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"return"),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},' "值"'),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"  }，")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"       set"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"(参数){ ")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"}},"         //修改的代码 ")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"       }")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    }")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"}")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"}},"// 1. get为计算逻辑，set为修改逻辑")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"}},"// 2. 当修改计算属性，会触发set函数")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"}},"// 3. get方法必须返回一个值，这个值会返回给“属性名”")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"}},"// 4. get方法的值会作为set方法的实参")])])]),s("div",{class:"line-numbers-wrapper","aria-hidden":"true"},[s("span",{class:"line-number"},"1"),s("br"),s("span",{class:"line-number"},"2"),s("br"),s("span",{class:"line-number"},"3"),s("br"),s("span",{class:"line-number"},"4"),s("br"),s("span",{class:"line-number"},"5"),s("br"),s("span",{class:"line-number"},"6"),s("br"),s("span",{class:"line-number"},"7"),s("br"),s("span",{class:"line-number"},"8"),s("br"),s("span",{class:"line-number"},"9"),s("br"),s("span",{class:"line-number"},"10"),s("br"),s("span",{class:"line-number"},"11"),s("br"),s("span",{class:"line-number"},"12"),s("br"),s("span",{class:"line-number"},"13"),s("br"),s("span",{class:"line-number"},"14"),s("br"),s("span",{class:"line-number"},"15"),s("br"),s("span",{class:"line-number"},"16"),s("br"),s("span",{class:"line-number"},"17"),s("br"),s("span",{class:"line-number"},"18"),s("br"),s("span",{class:"line-number"},"19"),s("br")])]),s("ol",{start:"4"},[s("li",null,"注意：")]),s("blockquote",null,[s("ul",null,[s("li",null,"计算属性必须定义在 computed 节点中"),s("li",null,"计算属性必须有返回值"),s("li",null,"计算属性实质是一个属性, 要作为属性来用")])])]),s("p",null," "),s("h4",{id:"_6-侦听器watch",tabindex:"-1"},[i("6. 侦听器watch "),s("a",{class:"header-anchor",href:"#_6-侦听器watch","aria-label":'Permalink to "6. 侦听器watch"'},"​")]),s("blockquote",null,[s("ol",null,[s("li",null,"作用：可以侦听到 data/computed 属性值的改变"),s("li",null,"侦听方式：")]),s("blockquote",null,[s("ol",null,[s("li",null,"基本类型：")]),s("div",{class:"language-js vp-adaptive-theme line-numbers-mode"},[s("button",{title:"Copy Code",class:"copy"}),s("span",{class:"lang"},"js"),s("pre",{class:"shiki shiki-themes github-light github-dark vp-code",tabindex:"0"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"watch"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},": {")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"     要侦听的属性名 (newValue,oldValue){")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"}},"         // 执行的代码")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"}}")])])]),s("div",{class:"line-numbers-wrapper","aria-hidden":"true"},[s("span",{class:"line-number"},"1"),s("br"),s("span",{class:"line-number"},"2"),s("br"),s("span",{class:"line-number"},"3"),s("br"),s("span",{class:"line-number"},"4"),s("br")])]),s("ol",{start:"2"},[s("li",null,"引用类型：")]),s("div",{class:"language-js vp-adaptive-theme line-numbers-mode"},[s("button",{title:"Copy Code",class:"copy"}),s("span",{class:"lang"},"js"),s("pre",{class:"shiki shiki-themes github-light github-dark vp-code",tabindex:"0"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"watch"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},": {")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"  要侦听的复杂类型属性名：{")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"  immediate："),s("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},"true"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"，"),s("span",{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"}},"//立即执行")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"  deep："),s("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},"true"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"，  "),s("span",{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"}},"//深度侦听复杂类型的变化   ")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"  handler（newValue,oldValue）{")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"}},"     // 执行的代码")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"}}}")])])]),s("div",{class:"line-numbers-wrapper","aria-hidden":"true"},[s("span",{class:"line-number"},"1"),s("br"),s("span",{class:"line-number"},"2"),s("br"),s("span",{class:"line-number"},"3"),s("br"),s("span",{class:"line-number"},"4"),s("br"),s("span",{class:"line-number"},"5"),s("br"),s("span",{class:"line-number"},"6"),s("br"),s("span",{class:"line-number"},"7"),s("br")])])])]),s("p",null," "),s("h4",{id:"_7-生命周期hook函数",tabindex:"-1"},[i("7. 生命周期hook函数 "),s("a",{class:"header-anchor",href:"#_7-生命周期hook函数","aria-label":'Permalink to "7. 生命周期hook函数"'},"​")]),s("ol",null,[s("li",null,[s("code",null,"created()")]),s("li",null,[s("code",null,"mounted()")]),s("li",null,[s("code",null,"updated()"),i("、"),s("code",null,"$nextTick()")]),s("li",null,[s("code",null,"destroyed()")])])],-1),a(`<p> </p><h2 id="修饰符" tabindex="-1">修饰符 <a class="header-anchor" href="#修饰符" aria-label="Permalink to &quot;修饰符&quot;">​</a></h2><div class="tip custom-block github-alert"><p class="custom-block-title">TIP</p><p></p><ol><li>阻止默认行为：</li></ol><blockquote><ul><li>简写：<code>@事件类型.prevent = &quot;函数名&quot;</code></li><li>不使用简写：</li></ul><blockquote><ul><li>注意：带参数时，<code>$event</code>在哪里占位，哪个就是事件对象</li></ul></blockquote><div class="vp-code-group vp-adaptive-theme"><div class="tabs"><input type="radio" name="group-BqLD2" id="tab-aZ9uLae" checked><label data-title="无参" for="tab-aZ9uLae">无参</label><input type="radio" name="group-BqLD2" id="tab-i1Wn4zf"><label data-title="带参" for="tab-i1Wn4zf">带参</label></div><div class="blocks"><div class="language-vue vp-adaptive-theme active line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">template</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">div</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">el-button</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> type</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;primary&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> @click</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;fn&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;按钮&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">el-button</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  &lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">div</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">template</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">script</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">/* eslint-disable */</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">export</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> default</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  name: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;Test&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  data</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">() { </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">return</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> { } },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  methods: {</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    fn</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">e</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      console.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">log</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(e)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">script</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br></div></div><div class="language-vue vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">template</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">div</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">el-button</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> type</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;primary&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> @click</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;fn(123, $event)&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;按钮&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">el-button</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  &lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">div</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">template</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">script</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">/* eslint-disable */</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">export</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> default</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  name: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;Test&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  data</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">() { </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">return</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> { } },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  methods: {</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    fn</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">val</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">e</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      console.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">log</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(val)  </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 参数</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      console.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">log</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(e)    </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 事件对象</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">script</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br></div></div></div></div></blockquote><p> </p><ol start="2"><li>阻止冒泡：</li></ol><blockquote><ul><li>语法：<code>@事件类型.stop = &quot;函数名&quot;</code></li><li>事件：绑定在最里层的盒子标签</li></ul></blockquote><p> </p><ol start="3"><li>键盘事件-按键修饰符：</li></ol><blockquote><ul><li>语法：<code>@键盘事件.某个键</code></li><li>事件：@键盘事件.某个键</li><li>作用：按下某个键时，执行对应代码</li><li>举例：<code>@keyup.enter</code>，监听键盘回车键</li><li>vue内置按键修饰符：<code>.enter</code>、<code>.tab</code>、<code>.delete</code>、<code>.esc</code>、<code>.space</code>、<code>.up</code>、<code>.down</code></li></ul></blockquote></div><p> </p><h2 id="vue指令" tabindex="-1">vue指令 <a class="header-anchor" href="#vue指令" aria-label="Permalink to &quot;vue指令&quot;">​</a></h2><div class="tip custom-block github-alert"><p class="custom-block-title">TIP</p><p></p><p>定义：特殊的 html 标签属性（特点: v- 开头）</p><p>作用：每个 v- 开头的指令, 都有着自己独立的功能, 将来vue解析时, 会根据不同的指令提供不同的功能</p><h4 id="_1-v-bind" tabindex="-1">1. v-bind <a class="header-anchor" href="#_1-v-bind" aria-label="Permalink to &quot;1. v-bind&quot;">​</a></h4><blockquote><ul><li>语法：<code>v-bind:属性名 = &quot;值&quot;</code></li><li>简写：<code>:属性名 = &quot;值&quot;</code></li><li>作用：绑定标签的属性，使其值变成变量形式</li></ul></blockquote><p> </p><h4 id="_2-v-on" tabindex="-1">2. v-on <a class="header-anchor" href="#_2-v-on" aria-label="Permalink to &quot;2. v-on&quot;">​</a></h4><blockquote><ul><li>语法1：<code>v-on:事件类型 = &quot;执行语句&quot;</code>，简写：<code>@事件类型 = &quot;执行语句&quot;</code></li><li>语法2：<code>v-on:事件类型 = &quot;函数名(参数)&quot;</code>，简写：<code>@事件类型 = &quot;函数名(实参)&quot;</code></li><li>作用：给标签绑定事件</li><li>其他：监听多个事件</li></ul></blockquote><p> </p><h4 id="_3-v-show" tabindex="-1">3. v-show <a class="header-anchor" href="#_3-v-show" aria-label="Permalink to &quot;3. v-show&quot;">​</a></h4><blockquote><ul><li>语法1：<code>v-show=&quot;布尔值&quot;</code> （true显示, false隐藏）</li><li>作用：控制盒子的显示/隐藏</li><li>原理：实质是在控制元素的 css 样式，<code>display: none;</code></li><li>应用场景：如果是频繁的切换显示隐藏, 用<code>v-show</code></li></ul></blockquote><p> </p><h4 id="_4-v-if" tabindex="-1">4. v-if <a class="header-anchor" href="#_4-v-if" aria-label="Permalink to &quot;4. v-if&quot;">​</a></h4><blockquote><ol><li><code>v-if</code>：</li></ol><blockquote><ul><li>语法：<code>v-if=&quot;布尔值&quot;</code> （true显示, false隐藏）</li><li>作用：控制盒子的显示隐藏</li><li>原理：实质是在动态的创建/删除元素节点</li><li>应用场景：如果是不用频繁切换, 要么显示, 要么隐藏的情况, 适合于用 v-if</li></ul></blockquote><ol start="2"><li><code>v-else</code>：</li></ol><blockquote><ul><li>语法：<code>v-else=&quot;布尔值&quot;</code> （true显示, false隐藏）</li><li>作用：控制盒子的显示隐藏</li></ul></blockquote><ol start="3"><li><code>v- else-if</code>：</li></ol><blockquote><ul><li>语法：<code>v-else-if=&quot;布尔值&quot;</code> （true显示, false隐藏）</li><li>作用：控制盒子的显示隐藏</li></ul></blockquote></blockquote><p> </p><h4 id="_5-v-model" tabindex="-1">5. v-model <a class="header-anchor" href="#_5-v-model" aria-label="Permalink to &quot;5. v-model&quot;">​</a></h4><blockquote><ul><li>语法：<code>v-model = &quot;值&quot;</code></li><li>作用：双向数据绑定，给表单元素使用，数据⇄视图</li><li>注意：v-model 会忽略掉表单元素原本的value, checked等初始值</li><li>v-model修饰符：</li></ul><blockquote><ol><li><code>.number</code>：把数据类型转为parseFloat类型；</li><li><code>.trim</code>：去除数据（变量）首尾空白字符；</li><li><code>.lazy</code>：表单失去焦点，才把值赋给数据（变量）</li></ol></blockquote></blockquote><p> </p><h4 id="_6-v-for" tabindex="-1">6. v-for <a class="header-anchor" href="#_6-v-for" aria-label="Permalink to &quot;6. v-for&quot;">​</a></h4><blockquote><ol><li>数组：</li></ol><blockquote><ul><li>语法：<code>v-for = &quot;(item，index) in 数组&quot; :key = &quot;item.id&quot;</code></li><li>作用：循环遍历生成列表</li></ul></blockquote><p> </p><ol start="2"><li>对象：</li></ol><blockquote><ul><li>语法：<code>v-for = &quot;(value，key) in 对象&quot; :key = &quot;key&quot;</code> （value是值，key是键）</li></ul></blockquote><p> </p><ol start="3"><li>数字：</li></ol><blockquote><ul><li>语法：<code>v-for = &quot;item in 数字&quot; :key = &quot;item&quot;</code></li><li>说明：item从1开始，包括数字</li></ul></blockquote></blockquote><p> </p><h4 id="_7-v-text" tabindex="-1">7. v-text <a class="header-anchor" href="#_7-v-text" aria-label="Permalink to &quot;7. v-text&quot;">​</a></h4><blockquote><ul><li>语法：<code>v-text=&quot;值&quot;</code></li><li>作用：更新元素的innerText</li><li>注意：不会解析标签</li></ul></blockquote><p> </p><h4 id="_8-v-html" tabindex="-1">8. v-html <a class="header-anchor" href="#_8-v-html" aria-label="Permalink to &quot;8. v-html&quot;">​</a></h4><blockquote><ul><li>语法：<code>v-html=&quot;值&quot;</code></li><li>作用：更新元素的innerHTML</li><li>注意：会解析标签</li></ul></blockquote></div><p> </p><h2 id="动态控制样式" tabindex="-1">动态控制样式 <a class="header-anchor" href="#动态控制样式" aria-label="Permalink to &quot;动态控制样式&quot;">​</a></h2><div class="tip custom-block github-alert"><p class="custom-block-title">TIP</p><p></p><h4 id="_1-控制类" tabindex="-1">1. 控制类 <a class="header-anchor" href="#_1-控制类" aria-label="Permalink to &quot;1. 控制类&quot;">​</a></h4><blockquote><ol><li>语法1：<code>:class=&quot;{类名: 布尔值}&quot;</code></li></ol><blockquote><ul><li>如果键值对的值为true，那么就有这个类，否则没有这个类</li></ul></blockquote><ol start="2"><li>语法2：<code>:class=&quot;[类名1，类名2]&quot;</code></li></ol><blockquote><ul><li>数组中所有的类，都会添加到盒子上</li></ul></blockquote><ol start="3"><li>注意：</li></ol><blockquote><ul><li>class 不会影响到原来的 class 属性</li><li>类名如果带-，则只能用单引号引起来：<code>:class=&quot;{&#39;text-center&#39;: true}&quot;</code></li></ul></blockquote></blockquote><p> </p><h4 id="_2-控制行内样式" tabindex="-1">2. 控制行内样式 <a class="header-anchor" href="#_2-控制行内样式" aria-label="Permalink to &quot;2. 控制行内样式&quot;">​</a></h4><blockquote><ol><li><p>语法1：<code>:style=&quot;{样式名: 样式的值}&quot;</code></p></li><li><p>语法2：<code>:style=&quot;[{ 样式名: 样式的值 }, {样式名: 样式的值 }...]&quot;</code></p></li><li><p>注意：</p></li></ol><blockquote><ul><li>样式名如果带横线，可以用小驼峰或者单引号</li></ul></blockquote></blockquote></div><p> </p><h2 id="vue的渲染" tabindex="-1">vue的渲染 <a class="header-anchor" href="#vue的渲染" aria-label="Permalink to &quot;vue的渲染&quot;">​</a></h2><div class="tip custom-block github-alert"><p class="custom-block-title">TIP</p><p></p><ol><li><p>就地复用策略：数据改变，vue会尽可能复用旧的DOM，对比变化，只更新变化的部分</p></li><li><p>虚拟DOM：</p></li></ol><blockquote><ol><li>作用：用来描述标签的信息的js对象</li><li>虚拟dom对比性能高</li><li>对比出变化的内容，减少dom操作，性能</li></ol></blockquote><ol start="3"><li>diff算法：</li></ol><blockquote><ol><li>根节点：</li></ol><blockquote><ol><li>如果类型变化，不再复用，删除旧dom，重新创建dom树；</li><li>如果类型不变，对比根节点属性，然后对比子节点</li></ol></blockquote><ol start="2"><li>列表默认索引对比：</li></ol><blockquote><ol><li>如果提供了key，按key进行对比，列表默认按索引对比；</li><li>key主要是在列表顺序变化的时候，性能提升很明显</li></ol></blockquote></blockquote></div>`,12)]))}const b=e(p,[["render",h]]);export{E as __pageData,b as default};
