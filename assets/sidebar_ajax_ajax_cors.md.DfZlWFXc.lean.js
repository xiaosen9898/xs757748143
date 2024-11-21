import{_ as a,c as o,a2 as t,o as e}from"./chunks/framework.D3LXhGAZ.js";const b=JSON.parse('{"title":"同源&跨域","description":"","frontmatter":{},"headers":[],"relativePath":"sidebar/ajax/ajax/cors.md","filePath":"sidebar/ajax/ajax/cors.md"}'),i={name:"sidebar/ajax/ajax/cors.md"};function r(c,l,s,n,p,u){return e(),o("div",null,l[0]||(l[0]=[t('<h1 id="同源-跨域" tabindex="-1">同源&amp;跨域 <a class="header-anchor" href="#同源-跨域" aria-label="Permalink to &quot;同源&amp;跨域&quot;">​</a></h1><h2 id="同源" tabindex="-1">同源 <a class="header-anchor" href="#同源" aria-label="Permalink to &quot;同源&quot;">​</a></h2><div class="tip custom-block github-alert"><p class="custom-block-title">TIP</p><p></p><p>同源：协议，域名(IP),端口都一致则同源，否则跨域</p></div><p> </p><h2 id="特性" tabindex="-1">特性 <a class="header-anchor" href="#特性" aria-label="Permalink to &quot;特性&quot;">​</a></h2><div class="tip custom-block github-alert"><p class="custom-block-title">TIP</p><p></p><ol><li>浏览器的安全策略；</li><li>允许客户端向服务器发起请求，但是请求的响应结果会被浏览器拦截，意味着我们获取不到响应的结果</li></ol></div><p> </p><h2 id="解决方案" tabindex="-1">解决方案 <a class="header-anchor" href="#解决方案" aria-label="Permalink to &quot;解决方案&quot;">​</a></h2><div class="tip custom-block github-alert"><p class="custom-block-title">TIP</p><p></p><h4 id="_1-jsonp" tabindex="-1">1. jsonp <a class="header-anchor" href="#_1-jsonp" aria-label="Permalink to &quot;1. jsonp&quot;">​</a></h4><blockquote><ol><li>事实：</li></ol><blockquote><ol><li>src和href属性天然可以跨域；</li><li>script也有src属性，天然可以跨域（只能是get方式），并且通过script的src属性获取到的内容默认会以js语法来解析</li></ol></blockquote></blockquote><blockquote><ol start="2"><li>原理：</li></ol><blockquote><ol><li>jsonp本质上是利用了script标签的src属性的天然跨域特性来实现的；</li><li>它向后台接口发起请求，传递一个前台拥有的函数名称，后台服务器响应函数的调用形式，且拼接响应的内容</li></ol></blockquote></blockquote><blockquote><ol start="3"><li>注意：</li></ol><blockquote><ol><li>它和异步对象没有任何的关系；</li><li>由于是属性发起请求，所以只能发起get请求；</li><li>它严重的依赖服务器的配合</li></ol></blockquote></blockquote><p> </p><h4 id="_2-cors" tabindex="-1">2.CORS <a class="header-anchor" href="#_2-cors" aria-label="Permalink to &quot;2.CORS&quot;">​</a></h4><blockquote><ol><li>CORS跨域资源共享网址：<a href="http://www.ruanyifeng.com/blog/2016/04/cors.html" target="_blank" rel="noreferrer">http://www.ruanyifeng.com/blog/2016/04/cors.html</a></li><li>服务器端跨域，在服务器端设置可以跨域；</li><li>在服务器进行跨域设置，当请求发起之后，会在响应头中带有access-control-allow-origin，这个时候浏览器就会解除跨域的限制，从而获取从服务器端响应的内容</li></ol></blockquote><p> </p><h4 id="_3-代理服务器" tabindex="-1">3. 代理服务器 <a class="header-anchor" href="#_3-代理服务器" aria-label="Permalink to &quot;3. 代理服务器&quot;">​</a></h4><blockquote><ul><li>服务器端没有跨域的限制，所以我们可以借助一个服务器A向另外一个服务器B发起请求，服务器A就称为代理服务器</li></ul></blockquote></div>',9)]))}const d=a(i,[["render",r]]);export{b as __pageData,d as default};