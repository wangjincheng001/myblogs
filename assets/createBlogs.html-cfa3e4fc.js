import{_ as n,r as i,o as r,c as t,a as s,b as a,d as l,e as d}from"./app-68bdc183.js";const c="/myblogs/assets/image-20230906100302170-b710a9d7.png",p="/myblogs/assets/image-20231106190353180-bacf6669.png",o="/myblogs/assets/image-20230906112532667-bdc7e613.png",m="/myblogs/assets/image-20230906142043123-68f81e6a.png",h="/myblogs/assets/image-20230906142000030-8eb8a486.png",u="/myblogs/assets/image-20230906142412203-56e9a073.png",g="/myblogs/assets/image-20230906143339347-7fcd1853.png",b="/myblogs/assets/image-20230906143750585-0f18fb7e.png",v="/myblogs/assets/image-20231106190955364-115d4888.png",_="/myblogs/assets/image-20230906144231601-6ef62826.png",k="/myblogs/assets/image-20230906162503111-f0d6f585.png",f="/myblogs/assets/image-20230906175741138-e96f36cf.png",x={},y=s("h2",{id:"vuepress-reco搭建博客",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#vuepress-reco搭建博客","aria-hidden":"true"},"#"),a(" Vuepress-reco搭建博客")],-1),q={href:"https://vuepress-theme-reco.recoluan.com/docs/theme/series.html",target:"_blank",rel:"noopener noreferrer"},S=d(`<h3 id="_1-安装博客主题" tabindex="-1"><a class="header-anchor" href="#_1-安装博客主题" aria-hidden="true">#</a> 1.安装博客主题</h3><p>npm:</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>// 初始化，并选择 <span class="token number">2</span>.x
<span class="token function">npm</span> <span class="token function">install</span> @vuepress-reco/theme-cli@1.0.7 <span class="token parameter variable">-g</span>
//创建博客
theme-cli init
//切换目录
<span class="token builtin class-name">cd</span> <span class="token operator">&lt;</span>文件名<span class="token operator">&gt;</span>
//安装
<span class="token function">npm</span> i
//启动
<span class="token function">npm</span> run dev
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-创建一个远程仓库" tabindex="-1"><a class="header-anchor" href="#_2-创建一个远程仓库" aria-hidden="true">#</a> 2.创建一个远程仓库</h3><p><img src="`+c+'" alt="image-20230906100302170"></p><p><img src="'+p+`" alt="image-20231106190353180"></p><blockquote><p>随后选择ssh</p></blockquote><h3 id="_3-配置ssh" tabindex="-1"><a class="header-anchor" href="#_3-配置ssh" aria-hidden="true">#</a> 3.配置SSH</h3><p>原因:我们在往github上push项目的时候，如果走https的方式，每次都需要输入账号密码，非常麻烦。而采用ssh的方式，就不再需要输入，只需要在github自己账号下配置一个ssh key即可。</p><p>git使用SSH配置， 初始需要以下三个步骤</p><ol><li>使用秘钥生成工具生成rsa秘钥和公钥</li><li>将rsa公钥添加到代码托管平台</li><li>将rsa秘钥添加到ssh-agent中，为ssh client指定使用的秘钥文件</li></ol><p>具体操作如下：</p><h4 id="第一步-检查本地主机是否已经存在ssh-key" tabindex="-1"><a class="header-anchor" href="#第一步-检查本地主机是否已经存在ssh-key" aria-hidden="true">#</a> 第一步：检查本地主机是否已经存在ssh key</h4><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token builtin class-name">cd</span> ~/.ssh
<span class="token function">ls</span>
//看是否存在 id_rsa 和 id_rsa.pub文件，如果存在，说明已经有SSH Key
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如下图所示，则表明已经存在</p><p><img src="`+o+`" alt="image-20230906112532667"></p><p>如果存在，直接跳到第三步</p><h4 id="第二步-生成ssh-key" tabindex="-1"><a class="header-anchor" href="#第二步-生成ssh-key" aria-hidden="true">#</a> 第二步：生成ssh key</h4><p>如果不存在ssh key，使用如下命令生成</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>ssh-keygen <span class="token parameter variable">-t</span> rsa <span class="token parameter variable">-C</span> <span class="token string">&quot;xxx@xxx.com&quot;</span>
//执行后一直回车即可
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>生成完以后再用第二步命令，查看ssh key</p><h4 id="第三步-获取ssh-key公钥内容-id-rsa-pub" tabindex="-1"><a class="header-anchor" href="#第三步-获取ssh-key公钥内容-id-rsa-pub" aria-hidden="true">#</a> 第三步：获取ssh key公钥内容（id_rsa.pub）</h4><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token builtin class-name">cd</span> ~/.ssh
<span class="token function">cat</span> id_rsa.pub
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>如下图所示，复制该内容</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>ssh-rsa 
...
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="第四步-github账号上添加公钥" tabindex="-1"><a class="header-anchor" href="#第四步-github账号上添加公钥" aria-hidden="true">#</a> 第四步：Github账号上添加公钥</h4><p>进入Settings设置</p><p><img src="`+m+'" alt="image-20230906142043123"></p><p>添加ssh key，把刚才复制的内容粘贴上去保存即可</p><p><img src="'+h+`" alt="image-20230906142000030"></p><h4 id="第五步-验证是否设置成功" tabindex="-1"><a class="header-anchor" href="#第五步-验证是否设置成功" aria-hidden="true">#</a> 第五步：验证是否设置成功</h4><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">ssh</span> <span class="token parameter variable">-T</span> git@github.com
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>显示如下信息表明设置成功 <img src="`+u+'" alt="image-20230906142412203"> 设置成功后，即可不需要账号密码clone和push代码</p><p><strong>注意之后在clone仓库的时候要使用ssh的url，而不是https！</strong></p><h4 id="验证原理" tabindex="-1"><a class="header-anchor" href="#验证原理" aria-hidden="true">#</a> 验证原理</h4><p>SSH登录安全性由非对称加密保证，产生密钥时，一次产生两个密钥，一个公钥，一个私钥，在git中一般命名为id_rsa.pub, id_rsa。</p><p>那么如何使用生成的一个私钥一个公钥进行验证呢？</p><p>本地生成一个密钥对，其中公钥放到远程主机，私钥保存在本地 当本地主机需要登录远程主机时，本地主机向远程主机发送一个登录请求，远程收到消息后，随机生成一个字符串并用公钥加密，发回给本地。本地拿到该字符串，用存放在本地的私钥进行解密，再次发送到远程，远程比对该解密后的字符串与源字符串是否等同，如果等同则认证成功。</p><h3 id="_4-初始化本地仓库-关联远程仓库" tabindex="-1"><a class="header-anchor" href="#_4-初始化本地仓库-关联远程仓库" aria-hidden="true">#</a> 4.初始化本地仓库,关联远程仓库</h3><blockquote><p>提前准备好已完成的博客内容</p><p>博客内容一般为markdown写就的文档</p><p>可安装typora书写markdown文档</p></blockquote><p>初始化为本地仓库</p><p><img src="'+g+`" alt="image-20230906143339347"></p><p>给git配置用户名和邮箱，如下：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> config <span class="token parameter variable">--global</span> user.name  wangcai  【和你注册github时的账号一样】
<span class="token function">git</span> config <span class="token parameter variable">--global</span> user.email xxx@qq.com    【和你注册github时的邮箱一样】
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="`+b+'" alt="image-20230906143750585"></p><blockquote><p>注意:</p><p>vuepress中需配置base,值与网页路由相同</p><p><img src="'+v+`" alt="image-20231106190955364"></p></blockquote><p>提交到暂存区</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> <span class="token function">add</span> <span class="token builtin class-name">.</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>提交到本地储存库</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> commit <span class="token parameter variable">-m</span> <span class="token string">&quot;部署博客&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><img src="`+_+`" alt="image-20230906144231601"></p><p>然后让本地仓库与远程仓库进行关联,给远程仓库起个别名,这里的别名为origin</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> remote <span class="token function">add</span> origin git@github.com:s375fuudj/myblog.git
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>把本地仓库的代码推送到远程仓库，如下：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> push <span class="token parameter variable">-u</span> origin master
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>成功:</p><p><img src="`+k+'" alt="image-20230906162503111"></p><p>查看远程仓库如下:</p><h3 id="_5-部署" tabindex="-1"><a class="header-anchor" href="#_5-部署" aria-hidden="true">#</a> 5.部署</h3><p><img src="'+f+'" alt="image-20230906175741138"></p><p>部署成功!</p>',61);function B(V,H){const e=i("ExternalLinkIcon");return r(),t("div",null,[y,s("p",null,[a("地址："),s("a",q,[a("系列 | vuepress-reco (recoluan.com)"),l(e)])]),S])}const w=n(x,[["render",B],["__file","createBlogs.html.vue"]]);export{w as default};
