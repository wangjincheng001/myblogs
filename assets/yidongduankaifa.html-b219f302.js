import{_ as i,o as e,c as a,a as l}from"./app-3d09ee74.js";const s="/myblogs/assets/1698284247326.56e75334-f10cd7c7.png",r="/myblogs/assets/1698284813023.8b7aa028-13d0164f.png",t="/myblogs/assets/1698287298435.d21f2fce-6649f63d.png",n="/myblogs/assets/85539aba20b740f0981c81207c86effb-6522f138.png",o={},p=l('<h2 id="前置内容" tabindex="-1"><a class="header-anchor" href="#前置内容" aria-hidden="true">#</a> 前置内容</h2><h3 id="屏幕尺寸" tabindex="-1"><a class="header-anchor" href="#屏幕尺寸" aria-hidden="true">#</a> 屏幕尺寸</h3><blockquote><p>指屏幕对角线的长度</p><p>单位:英寸(1英寸=2.54厘米)</p></blockquote><h3 id="屏幕分辨率" tabindex="-1"><a class="header-anchor" href="#屏幕分辨率" aria-hidden="true">#</a> 屏幕分辨率</h3><blockquote><p>指屏幕在：横向、纵向上所拥有的 物理像素点（发光点） 总数。一般表示用 n * m 表示。例: iPhone 6 的屏幕分辨率为 750 * 1334。</p></blockquote><ul><li>屏幕分辨率为固定值,出厂时已经决定,无法修改.</li><li>但是可以通过修改显示分辨率</li><li>显示分辨率即设备所用到的<strong>物理像素点数</strong>,即:显示分辨率&lt;=屏幕分辨率.</li></ul><h3 id="屏幕密度" tabindex="-1"><a class="header-anchor" href="#屏幕密度" aria-hidden="true">#</a> 屏幕密度</h3><blockquote><p>指屏幕上每英寸里包含的物理像素点个数，单位是 ppi （pixels per inch），其实这里还有另一个单位 dpi（dots per inch），两个值的计算方式都一样，只是使用的场景不同。 ppi主要用来衡量屏幕，dpi 用来衡量打印机等。</p><p>公式 : 屏幕密度 = <strong>√（横向像素数² + 纵向像素数²）/ 屏幕尺寸</strong></p></blockquote><h3 id="单位分类" tabindex="-1"><a class="header-anchor" href="#单位分类" aria-hidden="true">#</a> 单位分类</h3><h4 id="绝对长度" tabindex="-1"><a class="header-anchor" href="#绝对长度" aria-hidden="true">#</a> 绝对长度</h4><ul><li>cm、pt之类的都是绝对长度，它们是物理长度</li><li>1cm是1/100米</li><li>1pt则是1/72英寸，而1英寸换算到公制是2.54cm。</li></ul><h4 id="相对长度" tabindex="-1"><a class="header-anchor" href="#相对长度" aria-hidden="true">#</a> 相对长度</h4><p><strong>em</strong></p><blockquote><p>em通过寻找父标签的font-size。然后通过计算得出自身的font-size.</p><p>例:父元素font-size=10px,则1em=10px</p></blockquote><p><strong>rem</strong></p><blockquote><p>参考HTML标签的font-size</p><p>例:HTML元素font-size=10px,则1em=10px</p></blockquote><p><strong>vw&amp;vh</strong></p><blockquote><p>1vw = 视窗宽度1%</p><p>1vh = 视窗高度1%</p></blockquote><h3 id="像素分类" tabindex="-1"><a class="header-anchor" href="#像素分类" aria-hidden="true">#</a> 像素分类</h3><h4 id="物理像素" tabindex="-1"><a class="header-anchor" href="#物理像素" aria-hidden="true">#</a> 物理像素</h4><ul><li>说白了就是分辨率，和开发无关，开发时，面对的是设备独立像素</li><li>指的是显示器上的真实像素，每个像素的大小是屏幕固有的属性，屏幕出厂以后就不会改变了；</li><li>我们在购买显示器或者手机的时候，提到的设备分辨率就是物理像素的大小；</li><li>比如iPhone X的分辨率 1125x2436，指的就是设备像素；</li></ul><h4 id="css像素" tabindex="-1"><a class="header-anchor" href="#css像素" aria-hidden="true">#</a> CSS像素</h4><ul><li>又称： 逻辑像素，css像素是一个抽象的长度单位，单位也是px，它是为 Web 开发者创造的，用来精确的度量Web 页面上的内容大小。我们在编写css、js、less中所使用的都是css像素（可以理解为：“程序员像素”）</li><li>我代码中所写的1px（css像素），到了屏幕上到底对应几个物理像素呢？要搞懂它到底映射成几个发光点，你需要知道设备独立像素。</li></ul><h4 id="设备独立像素" tabindex="-1"><a class="header-anchor" href="#设备独立像素" aria-hidden="true">#</a> 设备独立像素</h4><ul><li>程序员开发，面对的不是物理像素，不是分辨率，我们面对的是设备独立像素。</li><li>不同的手机有自己不同的设备独立像素，这个也是手机出厂定死的。</li><li>设备独立像素简称 DIP 或 DP（device-independent pixel），又称：屏幕密度无关像素。</li></ul><p>有了物理像素，为什么又出来一个设备独立像素呢？</p><blockquote><p>引言： 在没出现【高清屏】的年代，1个css像素对应1个物理像素，但自从【高清屏】问世，二者就不再是1对1的关系了。苹果公司在2010年推出了一种新的显示标准：<strong>在屏幕尺寸不变的前提下</strong>，把更多的物理像素点<strong>压缩</strong>至一块屏幕里，这样分辨率就会更高，显示效果就会更佳细腻。苹果将这种屏幕称为：<strong>Retina 屏幕（又名：视网膜屏幕）</strong>，与此同时推出了配备这种屏幕的划时代数码产品——iPhone4。</p></blockquote><p>非高清屏，CSS像素和设备独立像素是1:1，设备独立像素和物理像素是1:1，如写一个div，宽高是320*480，会正好撑满整个手机屏。</p><p><img src="'+s+'" alt="1698284247326.56e75334"></p><p>现在它们的比例关系是这样的：</p><ul><li>写1px * 1px像素的CSS像素，CSS像素 和 设备独立像素是 1:1关系</li><li>1px * 1px 设备独立像素 映射成发光点（物理像素）就成了 2px * 2px的发光点。</li></ul><h3 id="像素比dpr" tabindex="-1"><a class="header-anchor" href="#像素比dpr" aria-hidden="true">#</a> 像素比DPR</h3><p>像素比（dpr）: 单一方向上设备【物理像素】和【设备独立像素】的比例。即：dpr = 物理像素 / 设备独立像素。</p><ul><li>2010年，iPhone4问世，不仅仅带来了移动互联网，还带来了Retina屏幕</li><li>Retina屏幕翻译为视网膜显示屏，可以为用户带来更好的显示</li><li>在Retina屏幕中，一个逻辑像素在长度上对应两个物理像素，这个比例称之为设备像素比（device pixel ratio）</li><li>我们可以通过window.devicePixelRatio获取到当前屏幕上的DPR值<img src="'+r+'" alt="1698284813023.8b7aa028"></li></ul><h3 id="三种像素之间的关系" tabindex="-1"><a class="header-anchor" href="#三种像素之间的关系" aria-hidden="true">#</a> 三种像素之间的关系</h3><p><strong>在不考虑缩放的情况下（理想状态下）：</strong></p><ul><li>普通屏(dpr = 1)：1css像素 = 1设备独立像素 = 1物理像素</li><li>高清屏(dpr = 2)：1css像素 = 1设备独立像素 = 2物理像素</li><li>高清屏(dpr = 3)：1css像素 = 1设备独立像素 = 3物理像素</li></ul><p><strong>程序员写了一个width为100px的盒子，那么：</strong></p><ul><li>代表100个css像素</li><li>若用户不进行缩放，则对应100个设备独立像素</li><li>在dpr为2的设备上，这100个css像素占据了100*2=200个物理像素（横向）</li></ul><p><strong>现在以iPhone6为例，我们描述一下屏幕（横向上），描述一下你的屏幕</strong>：</p><ul><li>物理像素：750px</li><li>设备独立像素：375px</li><li>css像素：375px</li></ul><p><strong>设备独立像素 与 物理像素关系</strong>：</p><ul><li>普通屏幕下 1 个设备独立像素 对应 1 个物理像素</li><li>高清屏幕下 1 个设备独立像素 对应 N 个物理像素</li></ul><p><strong>设备独立像素 与 css像素关系</strong>：</p><ul><li>在无缩放的情况下（标准情况）：1css像素 = 1设备独立像素</li></ul><h2 id="视口" tabindex="-1"><a class="header-anchor" href="#视口" aria-hidden="true">#</a> 视口</h2><p><strong>把PC端的网页，放到手机端，整体会缩小，分两步</strong>：</p><ul><li>第一步：把你的网页放到虚拟容器中，如果生成的网页，宽度是980px，虚拟容器如果也是980px，那么网页正好放到虚拟容器中，如果网页宽度大于980px，就会在虚拟容器中，产生水平的滚动条。如果生成的网页小于980px，网页也可以装进去，水平方向肯定装不满。这个虚拟容器是真实存在的，并且大部分的手机上这个虚拟容器的宽度就是980px。 这个980也是手机出厂时，就定死。</li><li>第二步：把上面的虚拟容器塞到手机中，你需要知道手机的宽度，这里说的宽度是指设备独立像素，不是指屏幕分辨率。也就是，以iphone6为例：你需要把980px的虚拟容器，塞到375的手机，此时，它需要把虚拟容器，缩小后，放到手机中，虚拟容器压缩了，就意味着，它把网页上的每一个盒子都压缩变小了。<img src="'+t+'" alt="1698287298435.d21f2fce"></li></ul><p><strong>上面，所说的虚拟容器，就叫视口，全称叫布局视口。大部分手机上的布局视口都是980px。</strong></p><ul><li>在PC端：1个css像素对应1个设备独立像素 1个设备独立像素对应1个物理像素</li><li>在iPhone5中：需要先放到虚拟容器中（980px）, 接着，压缩，放到320的手机中</li><li>在iPhone6中：需要先放到虚拟容器中（980px）, 接着，压缩，放到375的手机中</li><li>在iPhone6P中：需要先放到虚拟容器中（980px）, 接着，压缩，放到414的盒子</li></ul><p><strong>结论：同一个盒子，在不同的手机中，看到的大小是不一样的，手机宽度（设备独立像素）越小，压缩越狠。所以，我说到手机的宽度，都是指设备独立像素，不是指分辨率。</strong>：</p><p>上面的说的虚拟容器，就是视口，在移动端，视口分三类：</p><ul><li>布局视口：就是980那个虚拟容器</li><li>视觉视口：就是手机的宽度（设备独立像素）</li><li>理想视口：把布局视口设置成和手机宽度一样，就成了理想视口，设置理想视口的目的就是不让盒子压缩。</li></ul><h3 id="设置理想视口" tabindex="-1"><a class="header-anchor" href="#设置理想视口" aria-hidden="true">#</a> 设置理想视口</h3><meta name="viewport" content="width=device-width, initial-scale=1.0"><p>可以设置meta中的viewport:</p><p><img src="'+n+'" alt="85539aba20b740f0981c81207c86effb"></p><blockquote><p>宽度width，移动端的宽度都不一致，一般不给一个固定值 width=device-width这样就可以根据设备的宽度自动调节 宽度height，没有浏览器用过 设备宽度与viewport大小之间的缩放比例，initial-scale，一般设置为1.0 设置用户无法缩放当前页面，user-scalable，默认yes指可以缩放，no不可以缩放，有的浏览器会忽略这个规则，所以需要设置下面的maximum-scale和minimum-scale 定义缩放的最大值，maximum，一般设置为1.0 定义缩放的最小值，minimum，一般设置为1.0</p></blockquote><h2 id="移动端适配" tabindex="-1"><a class="header-anchor" href="#移动端适配" aria-hidden="true">#</a> 移动端适配</h2><p>前面设置视口的目的是防止盒子压缩，说白了，就是让一个盒子在所有的手机上显示的大小是一样的。那这样合理呢？</p><p>答：不合理，手机屏幕有大有小，我们想的效果是，屏幕大的手机，盒子显示的大一点，屏幕小的手机，盒子显示的小一点。这就需要我们进行适配。所谓的适配就是同一个盒子，在大屏上显示大一点，在小屏上显示小一点。</p>',61),d=[p];function h(c,u){return e(),a("div",null,d)}const b=i(o,[["render",h],["__file","yidongduankaifa.html.vue"]]);export{b as default};
