import{_ as a,o as s,c as n,e}from"./app-68bdc183.js";const i="/myblogs/assets/image-20231107212023813-46525338.png",t="/myblogs/assets/image-20231108213027742-4713db53.png",l="/myblogs/assets/image-20231109185325396-10199f6e.png",d="/myblogs/assets/image-20231109190159266-d3e50a9d.png",c="/myblogs/assets/image-20231109191355856-359fd741.png",o="/myblogs/assets/image-20231109192548249-f31ee18f.png",r="/myblogs/assets/image-20231109193523054-38483049.png",p="/myblogs/assets/image-20231112194912571-0c2ce026.png",u={},b=e(`<h2 id="git下载网址" tabindex="-1"><a class="header-anchor" href="#git下载网址" aria-hidden="true">#</a> git下载网址</h2><p>https://git-scm.com/download/win</p><h2 id="什么是git" tabindex="-1"><a class="header-anchor" href="#什么是git" aria-hidden="true">#</a> 什么是Git</h2><blockquote><p>Git 是一个用于管理源代码的分布式版本控制系统。版本控制系统会在您修改文件时记录并保存更改，使您可以随时恢复以前的工作版本。</p><p>如果您的代码没有一个版本控制系统，您可能会遇到使用不同日期和名称 (例如，2022 年 12 月 2 日-code.php；2022 年 12 月 3 日-code.php) 来手动保存文件的多个版本。在处理数百个文件时，此方法既费时又不切实际。</p><p>它也不会对更改进行上下文说明，以便其他人知道更改了什么、何时更改以及由谁更改。当多个团队成员处理同一个文件时，覆盖很快就会成为一个问题。了解哪个文件是最新版本也变得很困难。因此我们转向版本控制系统来解决这些 (以及更多) 问题。</p><p>使用 Git，您可以轻松访问源代码的修改历史记录。您可以看到版本如何更改以及更改的人。因为整个 Git 历史都存储在共享存储库中，所以 Git 可以防止旧版本的无意覆盖。</p></blockquote><p>简而言之，像 Git 这样的版本控制系统可以很容易地</p><ul><li>跟踪代码历史记录</li><li>以团队形式协作编写代码</li><li>查看谁做了哪些更改</li></ul><h2 id="git本地仓库" tabindex="-1"><a class="header-anchor" href="#git本地仓库" aria-hidden="true">#</a> git本地仓库</h2><h3 id="本地仓库初始化" tabindex="-1"><a class="header-anchor" href="#本地仓库初始化" aria-hidden="true">#</a> 本地仓库初始化</h3><blockquote><p>git init 初使化一个本地仓库,同时会生成一个.git的隐藏文件夹(勿删)</p></blockquote><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> init
Initialized empty Git repository <span class="token keyword">in</span> xxx
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="查看状态" tabindex="-1"><a class="header-anchor" href="#查看状态" aria-hidden="true">#</a> 查看状态</h3><blockquote><p>git status 可以查看文件是否被git管理</p></blockquote><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> status
On branch master

No commits yet

Untracked files:
  <span class="token punctuation">(</span>use <span class="token string">&quot;git add &lt;file&gt;...&quot;</span> to include <span class="token keyword">in</span> what will be committed<span class="token punctuation">)</span>
        <span class="token number">1</span>.txt

nothing added to commit but untracked files present <span class="token punctuation">(</span>use <span class="token string">&quot;git add&quot;</span> to track<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="提交至本地库" tabindex="-1"><a class="header-anchor" href="#提交至本地库" aria-hidden="true">#</a> 提交至本地库</h3><p><img src="`+i+`" alt="image-20231107212023813"></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> <span class="token function">add</span> <span class="token builtin class-name">.</span>
<span class="token function">git</span> commit <span class="token parameter variable">-m</span> <span class="token string">&quot;first&quot;</span>
<span class="token punctuation">[</span>master <span class="token punctuation">(</span>root-commit<span class="token punctuation">)</span> 619e281<span class="token punctuation">]</span> first
 <span class="token number">1</span> <span class="token function">file</span> changed, <span class="token number">1</span> insertion<span class="token punctuation">(</span>+<span class="token punctuation">)</span>
 create mode <span class="token number">100644</span> <span class="token number">1</span>.txt
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="配置基本信息" tabindex="-1"><a class="header-anchor" href="#配置基本信息" aria-hidden="true">#</a> 配置基本信息</h3><blockquote><p>提交到本地库后,形成版本,在形成版本之前,需要告诉git,你的基本信息</p></blockquote><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> config <span class="token parameter variable">--global</span> user.name <span class="token string">&quot;xxx&quot;</span>
<span class="token function">git</span> config <span class="token parameter variable">--global</span> user.email <span class="token string">&quot;xxx@qq.com&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>查看配置</p></blockquote><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> config <span class="token parameter variable">--list</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="查看版本" tabindex="-1"><a class="header-anchor" href="#查看版本" aria-hidden="true">#</a> 查看版本</h3><blockquote><p>git log 查看版本信息</p></blockquote><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> log
commit 619e2818efb309cda99049549763d7a52407a4f7 <span class="token punctuation">(</span>HEAD -<span class="token operator">&gt;</span> master<span class="token punctuation">)</span>
Author: wangjincheng001 <span class="token operator">&lt;</span><span class="token number">3115717617</span>@qq.com<span class="token operator">&gt;</span>
Date:   Tue Nov <span class="token number">7</span> <span class="token number">21</span>:21:19 <span class="token number">2023</span> +0800

    first
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>修改文件内容,再次提交</p></blockquote><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> log
commit 9c0e436fc1c89a940da3d37bcaf25dae0f79dfe2 <span class="token punctuation">(</span>HEAD -<span class="token operator">&gt;</span> master<span class="token punctuation">)</span>
Author: wangjincheng001 <span class="token operator">&lt;</span><span class="token number">3115717617</span>@qq.com<span class="token operator">&gt;</span>
Date:   Wed Nov <span class="token number">8</span> <span class="token number">20</span>:55:24 <span class="token number">2023</span> +0800

    second

commit 619e2818efb309cda99049549763d7a52407a4f7
Author: wangjincheng001 <span class="token operator">&lt;</span><span class="token number">3115717617</span>@qq.com<span class="token operator">&gt;</span>
Date:   Tue Nov <span class="token number">7</span> <span class="token number">21</span>:21:19 <span class="token number">2023</span> +0800

    first
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="版本回退" tabindex="-1"><a class="header-anchor" href="#版本回退" aria-hidden="true">#</a> 版本回退</h3><p><img src="`+t+`" alt="image-20231108213027742"></p><blockquote><p>注意:</p><p>使用<code>git reset --soft</code> 或 <code>git reset head [文件] </code>只是将其变为存在于<strong>暂存区</strong>或<strong>工作区</strong>中的状态,本地文件并未修改</p><p><code>git reset --hard 版本号</code>则是改变版本,此时相对应的本地文件也会更改至<strong>对应版本状态</strong></p></blockquote><h3 id="查看之前的版本" tabindex="-1"><a class="header-anchor" href="#查看之前的版本" aria-hidden="true">#</a> 查看之前的版本</h3><blockquote><p>可据此使用git reset --hard跳转至之前的版本</p></blockquote><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> reflog
9c0e436 HEAD@<span class="token punctuation">{</span><span class="token number">10</span><span class="token punctuation">}</span>: commit: second
619e281 <span class="token punctuation">(</span>HEAD -<span class="token operator">&gt;</span> master<span class="token punctuation">)</span> HEAD@<span class="token punctuation">{</span><span class="token number">11</span><span class="token punctuation">}</span>: commit <span class="token punctuation">(</span>initial<span class="token punctuation">)</span>: first

<span class="token function">git</span> reset <span class="token parameter variable">--hard</span> 9c0e436
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="分支管理" tabindex="-1"><a class="header-anchor" href="#分支管理" aria-hidden="true">#</a> 分支管理</h2><blockquote><p>我们之前都是在master主分支上操作,现在假设我们有一个尝试性的模块,他适合在</p></blockquote><h3 id="查看-新建-删除分支" tabindex="-1"><a class="header-anchor" href="#查看-新建-删除分支" aria-hidden="true">#</a> 查看&amp;新建&amp;删除分支</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> branch
//新建
<span class="token function">git</span> branch 分支
//删除
<span class="token function">git</span> branch <span class="token parameter variable">-d</span> 分支
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="切换分支" tabindex="-1"><a class="header-anchor" href="#切换分支" aria-hidden="true">#</a> 切换分支</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> checkout 分支
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="合并分支" tabindex="-1"><a class="header-anchor" href="#合并分支" aria-hidden="true">#</a> 合并分支</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> merge 分支
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="使用场景" tabindex="-1"><a class="header-anchor" href="#使用场景" aria-hidden="true">#</a> 使用场景</h3><h4 id="新增尝试性功能" tabindex="-1"><a class="header-anchor" href="#新增尝试性功能" aria-hidden="true">#</a> 新增尝试性功能</h4><blockquote><p>新增一个尝试性的功能,例如 斗地主 ,此时应将其放入分支中,此时开发完成50%</p></blockquote><p><img src="`+l+'" alt="image-20231109185325396"></p><h4 id="修复master分支bug" tabindex="-1"><a class="header-anchor" href="#修复master分支bug" aria-hidden="true">#</a> 修复master分支bug</h4><blockquote><p>此时打豆豆功能出现bug,我们新建一个分支修复bug</p></blockquote><p><img src="'+d+'" alt="image-20231109190159266"></p><blockquote><p>修复完毕后,注意我们要上线的是master分支,所以接下来,将<strong>合并分支</strong></p></blockquote><p><img src="'+c+'" alt="image-20231109191355856"></p><blockquote><p>合并完毕后,分支2也就无用了,将其删除git branch -d 分支2</p></blockquote><blockquote><p>此时继续开发,斗地主模块,开发完毕</p></blockquote><p><img src="'+o+'" alt="image-20231109192548249"></p><h4 id="解决合并冲突" tabindex="-1"><a class="header-anchor" href="#解决合并冲突" aria-hidden="true">#</a> 解决合并冲突</h4><blockquote><p>测试完斗地主功能后,发现没有问题,需合并到master分支,上线.此时出现问题 <strong>冲突</strong>.</p><p>解决完冲突部分 (保留修改完bug的部分) ,合并分支</p></blockquote><p><img src="'+r+'" alt="image-20231109193523054"></p><h2 id="远程仓库管理-个人开发" tabindex="-1"><a class="header-anchor" href="#远程仓库管理-个人开发" aria-hidden="true">#</a> 远程仓库管理(个人开发)</h2><blockquote><p>首先你需要有一个远程仓库,GitHub gitee gitlab 皆可</p><p>然后新建一个仓库,以GitHub举例</p><p>有两种地址,HTTPS 和 SSH</p><p>HTTPS使用时需要进行验证,SSH配置后本机无需验证</p></blockquote><p><img src="'+p+`" alt="image-20231112194912571"></p><h3 id="全局设置" tabindex="-1"><a class="header-anchor" href="#全局设置" aria-hidden="true">#</a> 全局设置</h3><blockquote><p>因为Git是分布式版本控制系统，所以，每个机器都必须自报家门：你的名字和Email地址。</p></blockquote><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> config <span class="token parameter variable">--global</span> user.name <span class="token string">&quot;xxx&quot;</span>
<span class="token function">git</span> config <span class="token parameter variable">--global</span> user.email <span class="token string">&quot;xxx@xxx.com&quot;</span>

//--global 表示你这台机器上所有的Git仓库都会使用这个配置
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="关联远程仓库" tabindex="-1"><a class="header-anchor" href="#关联远程仓库" aria-hidden="true">#</a> 关联远程仓库</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>添加远程仓库
<span class="token function">git</span> remote <span class="token function">add</span> 远程仓库别名 远程仓库地址

//查看已关联远程仓库
<span class="token function">git</span> remote


//git remote 远程
//add 添加一个仓库
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="提交至远程仓库" tabindex="-1"><a class="header-anchor" href="#提交至远程仓库" aria-hidden="true">#</a> 提交至远程仓库</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> push <span class="token operator">&lt;</span>远程主机名<span class="token operator">&gt;</span> <span class="token operator">&lt;</span>本地分支名<span class="token operator">&gt;</span>:<span class="token operator">&lt;</span>远程分支名<span class="token operator">&gt;</span>

//如果本地分支名与远程分支名相同，则可以省略冒号：
<span class="token function">git</span> push <span class="token operator">&lt;</span>远程主机名<span class="token operator">&gt;</span> <span class="token operator">&lt;</span>本地分支名<span class="token operator">&gt;</span>

//使用时,有些人会使用git push <span class="token parameter variable">-u</span>
//-u是一个可选参数
//它的作用是将推送的本地分支与远程仓库中对应的分支建立连接
//那么下次git push和git pull已连接分支时,可以不添加参数
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="克隆远程仓库" tabindex="-1"><a class="header-anchor" href="#克隆远程仓库" aria-hidden="true">#</a> 克隆远程仓库</h3><blockquote><p>当本地没有相关项目时,clone远程项目至本地</p></blockquote><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> clone 远程仓库地址
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="拉取远程仓库" tabindex="-1"><a class="header-anchor" href="#拉取远程仓库" aria-hidden="true">#</a> 拉取远程仓库</h3><blockquote><p>当本地有相关项目时,pull最新的项目版本进行开发</p></blockquote><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> pull <span class="token operator">&lt;</span>远程主机名<span class="token operator">&gt;</span> <span class="token operator">&lt;</span>本地分支名<span class="token operator">&gt;</span>:<span class="token operator">&lt;</span>远程分支名<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="使用场景-1" tabindex="-1"><a class="header-anchor" href="#使用场景-1" aria-hidden="true">#</a> 使用场景</h3><blockquote><p>全局设置,SSH连接默认已配置,未配置需先行配置</p></blockquote><h4 id="将代码推送到云端" tabindex="-1"><a class="header-anchor" href="#将代码推送到云端" aria-hidden="true">#</a> 将代码推送到云端</h4><blockquote><p>第一步 : 建立连接</p></blockquote><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> remote <span class="token function">add</span> origin xxxx
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><blockquote><p>第二步 : 推送代码</p></blockquote><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> push <span class="token parameter variable">-u</span> origin master
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="第一次开发远端项目" tabindex="-1"><a class="header-anchor" href="#第一次开发远端项目" aria-hidden="true">#</a> 第一次开发远端项目</h4><blockquote><p>从远程克隆代码</p><p>克隆的代码拥有完整的日志信息</p></blockquote><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> clone xxx
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><blockquote><p>创建分支开发</p></blockquote><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> branch dev
<span class="token function">git</span> checkout dev
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>下班后,提交代码</p></blockquote><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> <span class="token function">add</span> <span class="token builtin class-name">.</span>
<span class="token function">git</span> commit <span class="token parameter variable">-m</span> <span class="token string">&quot;xxx&quot;</span>
<span class="token function">git</span> push <span class="token parameter variable">-u</span> origin dev
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="继续开发远端项目" tabindex="-1"><a class="header-anchor" href="#继续开发远端项目" aria-hidden="true">#</a> 继续开发远端项目</h4><blockquote><p>已拥有部分项目,不需要再clone</p><p>拉取最新项目</p></blockquote><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> checkout dev
<span class="token function">git</span> pull origin dev
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>完成后提交</p></blockquote><p>略</p><h4 id="远端项目开发完成后" tabindex="-1"><a class="header-anchor" href="#远端项目开发完成后" aria-hidden="true">#</a> 远端项目开发完成后</h4><blockquote><p>开发完毕,提交后</p></blockquote><blockquote><p>合并分支</p></blockquote><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> checkout master
<span class="token function">git</span> merge dev
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>推送master</p></blockquote><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> push origin master
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,96),h=[b];function m(v,g){return s(),n("div",null,h)}const f=a(u,[["render",m],["__file","Git.html.vue"]]);export{f as default};
