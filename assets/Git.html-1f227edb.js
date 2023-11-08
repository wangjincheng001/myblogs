import{_ as a,o as n,c as s,a as e}from"./app-5d30a7d6.js";const i="/myblogs/assets/image-20231107212023813-46525338.png",t={},l=e(`<h2 id="git下载网址" tabindex="-1"><a class="header-anchor" href="#git下载网址" aria-hidden="true">#</a> git下载网址</h2><p>https://git-scm.com/download/win</p><h2 id="什么是git" tabindex="-1"><a class="header-anchor" href="#什么是git" aria-hidden="true">#</a> 什么是Git</h2><blockquote><p>Git 是一个用于管理源代码的分布式版本控制系统。版本控制系统会在您修改文件时记录并保存更改，使您可以随时恢复以前的工作版本。</p></blockquote><p>简而言之，像 Git 这样的版本控制系统可以很容易地</p><ul><li>跟踪代码历史记录</li><li>以团队形式协作编写代码</li><li>查看谁做了哪些更改</li></ul><h2 id="git本地仓库" tabindex="-1"><a class="header-anchor" href="#git本地仓库" aria-hidden="true">#</a> git本地仓库</h2><h3 id="本地仓库初始化" tabindex="-1"><a class="header-anchor" href="#本地仓库初始化" aria-hidden="true">#</a> 本地仓库初始化</h3><blockquote><p>git init 初使化一个本地仓库,同时会生成一个.git的隐藏文件夹(勿删)</p></blockquote><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> init
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,24),c=[l];function o(d,r){return n(),s("div",null,c)}const u=a(t,[["render",o],["__file","Git.html.vue"]]);export{u as default};
