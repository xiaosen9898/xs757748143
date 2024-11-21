import{_ as o,c as i,a2 as t,o as a}from"./chunks/framework.D3LXhGAZ.js";const b=JSON.parse('{"title":"补充","description":"","frontmatter":{},"headers":[],"relativePath":"sidebar/miniprogram/mini/other.md","filePath":"sidebar/miniprogram/mini/other.md"}'),e={name:"sidebar/miniprogram/mini/other.md"};function r(c,l,u,s,n,d){return a(),i("div",null,l[0]||(l[0]=[t('<h1 id="补充" tabindex="-1">补充 <a class="header-anchor" href="#补充" aria-label="Permalink to &quot;补充&quot;">​</a></h1><h2 id="微信支付" tabindex="-1">微信支付 <a class="header-anchor" href="#微信支付" aria-label="Permalink to &quot;微信支付&quot;">​</a></h2><div class="tip custom-block github-alert"><p class="custom-block-title">TIP</p><p></p><h4 id="_1-设置收货地址" tabindex="-1">1. 设置收货地址 <a class="header-anchor" href="#_1-设置收货地址" aria-label="Permalink to &quot;1. 设置收货地址&quot;">​</a></h4><ol><li><p>在微信软件上设置收货地址</p></li><li><p>调用api来获取收货地址</p></li><li><p>实际业务：</p></li></ol><blockquote><ol><li>打开页面的时候，判断一下 data中有没有收货地址信息</li><li>没有收货地址信息，显示：按钮-获取收货地址</li></ol><blockquote><ol><li>给按钮绑定点击事件</li><li>调用获取收货地址的api （需要在mainfest.json 文件中，进行配置获取收货地址）</li><li>地址获取成功，存到data中</li></ol></blockquote><ol start="3"><li>有收货地址信息，显示收货地址</li></ol></blockquote><p> </p><h4 id="_2-支付流程" tabindex="-1">2. 支付流程 <a class="header-anchor" href="#_2-支付流程" aria-label="Permalink to &quot;2. 支付流程&quot;">​</a></h4><ol><li>获取临时凭据：</li></ol><blockquote><ul><li>调用小程序登录 wx.login 获取 code，5分钟有效期（临时凭据）</li></ul></blockquote><ol start="2"><li>获取openid：</li></ol><blockquote><ul><li>将code发送给后端换取openid</li></ul></blockquote><ol start="3"><li>获取订单信息：</li></ol><blockquote><ul><li>使用openid和订单相关参数（收货地址、订单总价格、购买的商品信息） 获取订单信息</li></ul></blockquote><ol start="4"><li>获取预支付信息：</li></ol><blockquote><ul><li>使用订单信息获取预支付信息</li></ul></blockquote><ol start="5"><li>支付：</li></ol><blockquote><ul><li>使用预支付信息发起微信支付（wx.requestPayment()），微信后台返回支付结果</li></ul></blockquote><ol start="6"><li>支付结果：</li></ol><blockquote><ul><li>支付成功：展示订单状态、查询订单状态、跳转到订单页面</li><li>支付失败：提示失败信息</li></ul></blockquote></div>',3)]))}const h=o(e,[["render",r]]);export{b as __pageData,h as default};