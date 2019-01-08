(window.webpackJsonp=window.webpackJsonp||[]).push([[46],{413:function(t,s,a){"use strict";a.r(s);var n=a(0),e=Object(n.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"content"},[a("h1",{attrs:{id:"如何基于nuls搭建私链"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#如何基于nuls搭建私链","aria-hidden":"true"}},[t._v("#")]),t._v(" 如何基于NULS搭建私链")]),t._v(" "),a("h2",{attrs:{id:"简介"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#简介","aria-hidden":"true"}},[t._v("#")]),t._v(" 简介")]),t._v(" "),a("p",[t._v("​\t本教程是基于NULS源代码介绍如何搭建私链，目的是为了方便学习了解NULS区块链网络运行，开发或者实验。自己搭建一条链来全方位的了解各节点是如何运行以及数据交互等，可以更好的把握NULS区块链网络的整体运行机制，有助于更深一步的研究。我们默认本文阅读者是具备Java开发环境的构建和调试技能的。")]),t._v(" "),a("h2",{attrs:{id:"环境搭建"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#环境搭建","aria-hidden":"true"}},[t._v("#")]),t._v(" 环境搭建")]),t._v(" "),a("ul",[a("li",[t._v("操作系统：macOS、Windows")]),t._v(" "),a("li",[t._v("构建工具：Maven")]),t._v(" "),a("li",[t._v("开发工具：IntelliJ IDEA")]),t._v(" "),a("li",[t._v("NULS源码github地址：https://github.com/nuls-io/nuls")])]),t._v(" "),a("h2",{attrs:{id:"开始"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#开始","aria-hidden":"true"}},[t._v("#")]),t._v(" 开始")]),t._v(" "),a("p",[t._v("​\t由于区块链是去中心化网络，是由多个节点组成，我们将以3个节点搭建一条私链为例进行介绍。虽然我们建议使用Linux服务器来作为运行NULS主网共识节点的服务器，但由于涉及到开发调试的需求，本文我们将在可以搭建Java开发环境的macOS系统上运行调试节点。")]),t._v(" "),a("h2",{attrs:{id:"开发环境"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#开发环境","aria-hidden":"true"}},[t._v("#")]),t._v(" 开发环境")]),t._v(" "),a("p",[t._v("​\t首先使用IntelliJ IDEA克隆NULS源代码，并打开项目。确保Java使用的是jdk1.8，以及Maven工具配置正确。")]),t._v(" "),a("h2",{attrs:{id:"如何搭建"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#如何搭建","aria-hidden":"true"}},[t._v("#")]),t._v(" 如何搭建")]),t._v(" "),a("p",[t._v("​\t1.打开module.ini 文件，该文件为加入或组建网络的配置文件，此示例是NULS测试网的配置信息。")]),t._v(" "),a("p",[a("img",{attrs:{src:"images/image-20190103193901967.png",alt:"image-20190103193901967"}})]),t._v(" "),a("p",[t._v("2.我们将用3个节点来搭建一条私链，首先需要准备可供3个节点运行的设备(可以是虚拟机)。")]),t._v(" "),a("ul",[a("li",[t._v("节点A：192.168.1.1")]),t._v(" "),a("li",[t._v("节点B：192.168.1.2")]),t._v(" "),a("li",[t._v("节点C：192.168.1.3")])]),t._v(" "),a("p",[t._v("我们还需要设置一个种子节点，用来进行维持区块链的运行，即打包出块。同时我们还需要准备一个出块地址（包括私钥，用于在种子节点导入该地址），可以事先准备。")]),t._v(" "),a("p",[t._v("本例我们准备的初始出块地址为："),a("code",[t._v("Nse4zpZHsUuU7h5ymv28pcGbwHju3joV")])]),t._v(" "),a("p",[t._v('PS：如果你比较细心你可能为发现我们准备的地址和图中测试网的地址的开头字母是不一样的，那是为了让用户更容易识别测试网地址和主网地址，以免混淆导致不良后果，我们特意将测试网地址设置为以"TT"开头，将主网地址设置为"Ns"开头，而本教程使用的是NULS主分支代码，所以使用"Ns"开头的地址。如果您想自定义私链的账户地址开头字母，可以尝试修改nuls.ini文件中的'),a("code",[t._v("chain.id")]),t._v("参数，同一条链的节点该参数必须一致。")]),t._v(" "),a("ol",{attrs:{start:"3"}},[a("li",[t._v("假设节点A为种子节点，那么将A、B、C三个节点的module.ini配置文件的network、consensus节都按照以下配置进行修改：")])]),t._v(" "),a("div",{staticClass:"language-ini line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-ini"}},[a("code",[a("span",{pre:!0,attrs:{class:"token selector"}},[t._v("[network]")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("bootstrap")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),t._v("io.nuls.network.netty.module.impl.NettyNetworkModuleBootstrap")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("network.server.port")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),t._v("8003")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("network.magic")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),t._v("20190101")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("network.max.in")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),t._v("100")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("network.max.out")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),t._v("10")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("network.seed.ip")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),t._v("192.168.1.1:8003")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token selector"}},[t._v("[consensus]")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("bootstrap")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),t._v("io.nuls.consensus.poc.module.impl.PocConsensusModuleBootstrap")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("partake.packing")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),t._v("true")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("min.upgrade.delay")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),t._v("1000")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("seed.nodes")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),t._v("Nse4zpZHsUuU7h5ymv28pcGbwHju3joV")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br"),a("span",{staticClass:"line-number"},[t._v("11")]),a("br"),a("span",{staticClass:"line-number"},[t._v("12")]),a("br"),a("span",{staticClass:"line-number"},[t._v("13")]),a("br")])]),a("ul",[a("li",[t._v("将"),a("code",[t._v("work.seed.ip")]),t._v("修改为种子节点的ip和端口。")]),t._v(" "),a("li",[t._v("将"),a("code",[t._v("seed.nodes")]),t._v("修改为出块地址。")]),t._v(" "),a("li",[t._v("必须保证私链所有节点的魔法参数"),a("code",[t._v("network.magic")]),t._v("一致")])]),t._v(" "),a("ol",{attrs:{start:"4"}},[a("li",[t._v("通过IntelliJ IDEA分别将3个节点运行起来，如果只需要调试其中一个节点，那么其他两个节点可以用maven打包发送到Linux服务器中运行，但是要注意的是需要准备一个jre放到NULS根目录中才能正常运行。")]),t._v(" "),a("li",[t._v("这3个节点启动后直到IntelliJ IDEA控制台有类似以下日志输出，则表示3个节点已近组成一个私有链的网络，但是没有打包出块，高度为0。如果没有日志输出，需要打开logback.xml中"),a("code",[t._v('<appender-ref ref="STDOUT"/>')]),t._v("的注释。")])]),t._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("io.nuls.client.Bootstrap.sysStart(Bootstrap.java:156):bestHeight:0 , txCount : 1 io.nuls.client.Bootstrap.sysStart(Bootstrap.java:174):height:0,count:2, hash:xxxxxxx,192.168.1.2:8003,192.168.1.2:8003\n\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br")])]),a("ol",{attrs:{start:"6"}},[a("li",[t._v("这时在种子节点A的钱包界面中，导入事先准备的出块账户"),a("code",[t._v("Nse4zpZHsUuU7h5ymv28pcGbwHju3joV")]),t._v("，稍等一会儿，则可以看见控制台的最新高度在增加了，表示网络已经在打包出块了，而与此同时B节点、C节点高度也会增加并且3个节点高度保持一致，此时表示私有链网络已经搭建完成。")])]),t._v(" "),a("h2",{attrs:{id:"总结"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#总结","aria-hidden":"true"}},[t._v("#")]),t._v(" 总结")]),t._v(" "),a("p",[t._v("​\t本文主要介绍使用最简便的方式搭建一个用于开发调试NULS的私链，并没有修改NULS的源代码。如果您需要更进一步探索NULS，可以查阅NULS的相关文档并在此基础上对源码进行修改调试，或许您会发现更多的奥秘！")])])}],!1,null,null,null);e.options.__file="buildPrivateChain.md";s.default=e.exports}}]);