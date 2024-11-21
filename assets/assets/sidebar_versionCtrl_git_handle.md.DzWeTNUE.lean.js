import{_ as o,c as i,a2 as t,o as e}from"./chunks/framework.D3LXhGAZ.js";const c="/xs757748143/imgs/git/gitinit.png",b=JSON.parse('{"title":"Git 基本使用","description":"","frontmatter":{},"headers":[],"relativePath":"sidebar/versionCtrl/git/handle.md","filePath":"sidebar/versionCtrl/git/handle.md"}'),a={name:"sidebar/versionCtrl/git/handle.md"};function d(r,l,u,s,h,g){return e(),i("div",null,l[0]||(l[0]=[t('<h1 id="git-基本使用" tabindex="-1">Git 基本使用 <a class="header-anchor" href="#git-基本使用" aria-label="Permalink to &quot;Git 基本使用&quot;">​</a></h1><h2 id="配置邮箱或者ssh" tabindex="-1">配置邮箱或者SSH <a class="header-anchor" href="#配置邮箱或者ssh" aria-label="Permalink to &quot;配置邮箱或者SSH&quot;">​</a></h2><div class="tip custom-block github-alert"><p class="custom-block-title">TIP</p><p></p><ul><li>第一次使用git前先配置邮箱或者ssh</li></ul><h4 id="_1-ssh-方式" tabindex="-1">1. SSH 方式 <a class="header-anchor" href="#_1-ssh-方式" aria-label="Permalink to &quot;1. SSH 方式&quot;">​</a></h4><ol><li>配置公钥：</li></ol><blockquote><ol><li>生成SSH <a href="https://help.gitee.com/base/account/SSH%E5%85%AC%E9%92%A5%E8%AE%BE%E7%BD%AE" target="_blank" rel="noreferrer">官网教程</a></li><li>生成SSH key后在gitee个人设置中 → SSH公钥设置进行配置</li></ol></blockquote><ol start="2"><li>配置邮箱：</li></ol><blockquote><ol><li>git config --global user.name &quot;用户名&quot;</li><li>git config --global user.email &quot;邮箱&quot; （这里的用户名和邮箱可以自己起）</li></ol></blockquote><ol start="3"><li>查看配置信息：</li></ol><blockquote><ol><li>git config --list</li><li>git config --global user.name</li><li>git config --global user.email</li></ol></blockquote><ol start="4"><li>注意：</li></ol><blockquote><ol><li>只要电脑系统不重置，只需要配置一次即可</li><li>如果配置错了，可以覆盖(重新配置)，也可以删除配置后再配置</li><li>第一次push 或 clone时，ssh方式：在配置了ssh公钥、用户名和邮箱之后，命令行会询问是否信任，输入yes表示信任</li></ol></blockquote><p> </p><h4 id="_2-https方式" tabindex="-1">2. HTTPS方式 <a class="header-anchor" href="#_2-https方式" aria-label="Permalink to &quot;2. HTTPS方式&quot;">​</a></h4><ol><li>配置：</li></ol><blockquote><ol><li>配置邮箱：</li></ol><blockquote><ol><li>git config --global user.name &quot;用户名&quot;</li><li>git config --global user.email &quot;邮箱&quot; （这里的用户名和邮箱可以自己起）</li></ol></blockquote></blockquote><blockquote><ol start="2"><li>凭据：</li></ol><blockquote><ol><li>设置凭据：第一次clone项目或者push项目的时候，会弹出一个账户密码框，填写的是gitee的账号和密码</li><li>删除凭据：电脑设置 → 搜索凭据 → windows凭据 → 删除凭据</li></ol></blockquote></blockquote><blockquote><ol start="3"><li>注意：</li></ol><blockquote><ul><li>第一次push 或 clone时，https方式：在配置了用户名和邮箱之后，会弹出一个提示框，输入的是你git的账号和密码</li></ul></blockquote></blockquote></div><p> </p><h2 id="本地仓库" tabindex="-1">本地仓库 <a class="header-anchor" href="#本地仓库" aria-label="Permalink to &quot;本地仓库&quot;">​</a></h2><div class="tip custom-block github-alert"><p class="custom-block-title">TIP</p><p></p><h4 id="_1-工作区-未暂存" tabindex="-1">1. 工作区(未暂存) <a class="header-anchor" href="#_1-工作区-未暂存" aria-label="Permalink to &quot;1. 工作区(未暂存)&quot;">​</a></h4><ol><li><code>mkdir 文件名</code>：创建一个保存项目的文件夹</li><li><code>git init</code>：当前目录下初始化本地仓库</li><li><code>REVISION（非指令）</code>：修改内容</li><li><code>git status</code>：查看仓库当前的状态，显示有变更的文件</li><li><code>git add .</code>：把修改后的内容添加至暂存区</li></ol><p> </p><h4 id="_2-暂存区-已暂存" tabindex="-1">2. 暂存区(已暂存) <a class="header-anchor" href="#_2-暂存区-已暂存" aria-label="Permalink to &quot;2. 暂存区(已暂存)&quot;">​</a></h4><ol><li><code>git status</code>：查看仓库当前的状态，显示有变更的文件</li><li><code>git commit -m &#39;提交说明&#39;</code>：把暂存区的内容提交到本地仓库</li></ol><p> </p><h4 id="_3-本地仓库" tabindex="-1">3. 本地仓库 <a class="header-anchor" href="#_3-本地仓库" aria-label="Permalink to &quot;3. 本地仓库&quot;">​</a></h4><ol><li><code>git rm</code>：将文件从暂存区和工作区中删除</li><li><code>git checkout</code>：分支切换</li><li><code>git switch</code>：更清晰地切换分支</li><li><code>git log</code>：查看提交日志</li><li><code>git reset --hard commitID</code>：版本回退（commitID是提交ID）</li><li><code>git reflog</code>：所有的操作日志</li></ol><p> </p><h4 id="_4-合并分支-正常" tabindex="-1">4. 合并分支-正常 <a class="header-anchor" href="#_4-合并分支-正常" aria-label="Permalink to &quot;4. 合并分支-正常&quot;">​</a></h4><ol><li><code>git branch</code>：查看分支</li><li><code>git branch 分支名</code>：创建分支</li><li><code>git checkout 分支名</code>：切换分支</li><li><code>git checkout -b 分支名</code>：创建并切换到该分支</li><li><code>git merge 分支名</code>：合并分支（注意：要合并到哪个分支就要先切换到那个分支，再合并）</li><li><code>git branch -d 分支名</code>：删除分支：删除时需做各种检查</li><li><code>git branch -D 分支名</code>：删除分支：不做任何检查，强制删除</li></ol><p> </p><h4 id="_5-合并分支-冲突" tabindex="-1">5. 合并分支-冲突 <a class="header-anchor" href="#_5-合并分支-冲突" aria-label="Permalink to &quot;5. 合并分支-冲突&quot;">​</a></h4><ol><li><p>原因：改了同一个文件的同一个地方的内容，合并时产生冲突</p></li><li><p>解决：找到产生冲突的文件：</p></li></ol><blockquote><ol><li>手动修改冲突的内容</li><li>git add .</li><li>git commit -m &quot; &quot;</li></ol></blockquote></div><p> </p><h2 id="远程仓库" tabindex="-1">远程仓库 <a class="header-anchor" href="#远程仓库" aria-label="Permalink to &quot;远程仓库&quot;">​</a></h2><div class="tip custom-block github-alert"><p class="custom-block-title">TIP</p><p></p><h4 id="_1-自己初始化仓库" tabindex="-1">1. 自己初始化仓库 <a class="header-anchor" href="#_1-自己初始化仓库" aria-label="Permalink to &quot;1. 自己初始化仓库&quot;">​</a></h4><ol><li>创建一个远程仓库（没有任何内容，包括readme），本地仓库关联远程仓库：</li></ol><p><img src="'+c+'" alt="git" data-fancybox=""></p><ol start="2"><li>命令：</li></ol><blockquote><ol><li><p><code>git init</code>：初始化仓库</p></li><li><p><code>git add</code>：提交更新到暂存区</p></li><li><p><code>git commit -m &quot;说明&quot;</code>：提交到本地仓库</p></li><li><p><code>git branch -M master</code>：强制将当前分支重命名为master（gitee远程仓库默认分支名为master，github默认为main）</p></li></ol><p> </p><ol start="5"><li><code>git remote</code>：</li></ol><blockquote><ol><li><code>git remote add &lt;仓库名&gt; &lt;远程仓库地址&gt;</code>：添加远程仓库（自己命名），远程仓库名一般就叫origin</li><li><code>git remote</code>：查看远程仓库</li><li><code>git remote -v</code>：查看关联远程仓库的信息</li></ol></blockquote><p> </p><ol start="6"><li><code>git push</code>：</li></ol><blockquote><ol><li><code>git push -u origin &quot;master&quot;</code>：推送更新到远程仓库并将本地分支与远程分支做关联</li></ol><blockquote><ul><li>只有当本地分支名和远程分支名相同时做关联，后续才能使用 git push 推送，否则报错</li><li>注意：如果本地还没有分支或者没有这个分支，则推送失败</li></ul></blockquote><ol start="2"><li><code>git push</code>：将本地当前分支推送到与本地当前分支同名的远程分支上</li></ol><blockquote><ul><li>使用git push需要先做分支关联</li><li>做分支关联需保持本地分支名与远程分支名一致</li></ul></blockquote><ol start="3"><li><code>git push origin &lt;本地分支名&gt;:&lt;远程分支名&gt;</code>：将本地当前分支推送到远程指定分支上</li><li><code>git push origin &lt;本地分支名&gt;</code>：将本地当前分支推送到与本地当前分支同名的远程分支上</li></ol></blockquote><p> </p><ol start="7"><li><code>git fetch </code>：</li></ol><blockquote><ol><li><code>git fetch</code>：将远程仓库的更新，全部取回本地，远程分支不会和本地分支进行合并；如果不指定远端分支名，则抓取所有分支</li><li><code>git fetch &lt;远程仓库&gt;</code>：获取远程仓库的最新信息</li><li><code>git fetch &lt;远程仓库&gt; &lt;分支名&gt;</code>：取回指定分支的更新</li></ol></blockquote><p> </p><ol start="8"><li><code>git pull</code>：</li></ol><blockquote><ol><li><code>git pull</code>：将与本地当前分支的远程分支拉取到本地当前分支上，并且自动进行合并，相当于fetch+merge（需要先做本地与远程分支的关联）</li><li><code>git pull origin &lt;远程分支名&gt;:&lt;本地分支名&gt;</code>：将远程指定分支拉取到本地指定分支上</li><li><code>git pull origin &lt;远程分支名&gt;</code>：将远程指定分支拉取到本地当前分支上</li></ol></blockquote><p> </p><ol start="9"><li><code>git branch -vv</code>：</li></ol><blockquote><ul><li>查看本地分支的状态</li><li>查看本地分支与远程仓库分支的关联关系</li></ul></blockquote></blockquote><p> </p><h4 id="_2-克隆远程仓库" tabindex="-1">2. 克隆远程仓库 <a class="header-anchor" href="#_2-克隆远程仓库" aria-label="Permalink to &quot;2. 克隆远程仓库&quot;">​</a></h4><ol><li><code>git clone &lt;远程仓库地址&gt;</code>：克隆远程仓库到本地</li></ol><blockquote><ul><li>不再需要git init仓库</li><li>本地已经和远程仓库关联</li><li>直接可以使用git push，不需要再做分支关联</li></ul></blockquote><p> </p><h4 id="_2-远程分支" tabindex="-1">2. 远程分支 <a class="header-anchor" href="#_2-远程分支" aria-label="Permalink to &quot;2. 远程分支&quot;">​</a></h4><ol><li><code>git branch -r</code>：查看远程分支</li><li><code>git branch -a</code>：查看本地和远程分支</li><li><code>git checkout -b 本地分支 origin/远程分支</code>：创建本地分支并关联远程分支</li><li><code>git branch --unset-upstream</code>：解除本地与远程分支的关联</li></ol></div>',9)]))}const p=o(a,[["render",d]]);export{b as __pageData,p as default};
