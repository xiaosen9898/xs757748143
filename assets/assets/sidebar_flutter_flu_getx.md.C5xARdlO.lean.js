import{_ as o,c as i,a2 as t,o as e}from"./chunks/framework.D3LXhGAZ.js";const q=JSON.parse('{"title":"GetX","description":"","frontmatter":{},"headers":[],"relativePath":"sidebar/flutter/flu/getx.md","filePath":"sidebar/flutter/flu/getx.md"}'),a={name:"sidebar/flutter/flu/getx.md"};function c(u,l,r,p,b,s){return e(),i("div",null,l[0]||(l[0]=[t('<h1 id="getx" tabindex="-1">GetX <a class="header-anchor" href="#getx" aria-label="Permalink to &quot;GetX&quot;">​</a></h1><h2 id="getx的意义" tabindex="-1">GetX的意义 <a class="header-anchor" href="#getx的意义" aria-label="Permalink to &quot;GetX的意义&quot;">​</a></h2><div class="tip custom-block github-alert"><p class="custom-block-title">TIP</p><p></p><ol><li><p>性能</p></li><li><p>效率</p></li><li><p>结构</p></li></ol></div><p> </p><h2 id="作用" tabindex="-1">作用 <a class="header-anchor" href="#作用" aria-label="Permalink to &quot;作用&quot;">​</a></h2><div class="tip custom-block github-alert"><p class="custom-block-title">TIP</p><p></p><ol><li><p>状态管理</p></li><li><p>路由管理</p></li><li><p>主题管理</p></li><li><p>国际化多语言管理</p></li><li><p>Obx局部更新</p></li><li><p>网络请求</p></li><li><p>数据验证</p></li></ol></div><p> </p><h2 id="组件" tabindex="-1">组件 <a class="header-anchor" href="#组件" aria-label="Permalink to &quot;组件&quot;">​</a></h2><div class="tip custom-block github-alert"><p class="custom-block-title">TIP</p><p></p><ol><li><p>Dialog</p></li><li><p>snackbar</p></li><li><p>BottomSheet</p></li></ol></div><p> </p><h2 id="使用-路由管理" tabindex="-1">使用-路由管理 <a class="header-anchor" href="#使用-路由管理" aria-label="Permalink to &quot;使用-路由管理&quot;">​</a></h2><div class="tip custom-block github-alert"><p class="custom-block-title">TIP</p><p></p><ol><li>路由跳转：</li></ol><blockquote><ol><li>前进：</li></ol><blockquote><ol><li>普通路由：Get.to()</li><li>命名路由：</li></ol><blockquote><ul><li>无参：Get.toNamed(&quot;/&quot;)</li><li>传参：</li></ul><blockquote><ol><li>传：Get.toNamed(&quot;/&quot;, arguments: { &quot;id&quot;: 1 } )</li><li>接：Get.arguments</li></ol></blockquote></blockquote></blockquote><blockquote><ol start="3"><li>其他路由：Get.off(NextScreen())</li></ol><blockquote><ul><li>进入下一个页面时不显示返回上一页的按钮</li></ul></blockquote></blockquote></blockquote><p> </p><ol start="2"><li>配置路由</li></ol><blockquote><ol><li>defaultTransition配置默认动画</li><li>GetPage配置路由</li><li>路由抽离到单独文件</li></ol></blockquote><p> </p><ol start="3"><li>中间件：</li></ol><blockquote><ul><li><code>Redirect</code>：配置权限路由</li><li><code>onPageCalled</code>：在调用页面时，这个函数会先被调用</li><li><code>onBindingsStart</code>：这个函数将在绑定初始化之前被调用</li><li><code>OnPageBuilt</code>：这个函数将在GetPage.page调用之后被调用，并给出函数结果和获取将要显示的widget</li><li><code>OnPageDispose</code>：这个函数将在处理完页面的所有相关对象之后被调用</li></ul></blockquote></div><p> </p><h2 id="使用-状态管理" tabindex="-1">使用-状态管理 <a class="header-anchor" href="#使用-状态管理" aria-label="Permalink to &quot;使用-状态管理&quot;">​</a></h2><div class="tip custom-block github-alert"><p class="custom-block-title">TIP</p><p></p><ol><li>响应式状态：</li></ol><blockquote><ol><li>声明响应式状态：</li></ol><blockquote><ol><li><code>final Rx状态类型 状态 = 值.obs</code></li><li><code>final 状态 = Rx状态类型(值)</code></li><li><code>final 状态 = Rx&lt;状态类型&gt;(值)</code></li></ol></blockquote><ol start="2"><li>使用响应式状态：</li></ol><blockquote><ol><li>简单数据类型：<code>Obx(() =&gt; { 状态.value })</code></li><li>LIst数据类型：直接使用list，不需要再使用 .value</li><li>类：</li></ol><blockquote><ol><li>创建类时，属性使用 .obs</li></ol><blockquote><ul><li>获取：<code>Obx(() =&gt; { 实例的属性 })</code>，不需要 . value</li><li>修改：<code>实例.属性.value</code>，需要 .value</li></ul></blockquote></blockquote><blockquote><ol start="2"><li>在实例化类的时候使用 .obs</li></ol><blockquote><ul><li>获取：<code>Obx(() =&gt; { 实例.value.属性 })</code></li><li>修改：</li></ul><blockquote><ol><li><code>实例.value.属性 = newValue</code></li><li><code>实例.value = 实例.value</code></li></ol></blockquote></blockquote></blockquote></blockquote></blockquote><p> </p><ol start="2"><li>简单的状态controller：</li></ol><blockquote><ol><li><p>作用：状态共享</p></li><li><p>使用：</p></li></ol><blockquote><ol><li>创建一个继承controller的类</li><li>需要使用controller里边的状态时：</li></ol><blockquote><ul><li>引入controller文件</li><li>通过Get.put()实例化controller</li><li>Obx(()=&gt; Text( &quot;${controller.XXX }&quot; ))</li></ul></blockquote></blockquote><ol start="2"><li>使用Binging：</li></ol><blockquote><ol><li>作用：把所有模块的状态聚集到一起，相当于状态总管</li><li>步骤：</li></ol><blockquote><ol><li>引入get.dart、状态文件</li><li>实现Bindings接口</li><li>实现每个状态文件依赖</li></ol></blockquote><ol start="3"><li>使用：</li></ol><blockquote><ol><li>在main.dart中引入</li><li>在GetMaterialApp中调用</li><li>在需要使用状态的地方通过Get.find()实例化状态</li></ol></blockquote></blockquote></blockquote></div>',15)]))}const k=o(a,[["render",c]]);export{q as __pageData,k as default};
