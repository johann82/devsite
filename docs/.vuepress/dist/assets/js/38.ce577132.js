(window.webpackJsonp=window.webpackJsonp||[]).push([[38],{348:function(s,t,a){"use strict";a.r(t);var n=a(0),r=Object(n.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("div",{staticClass:"content"},[a("h1",{attrs:{id:"事件总线模块设计"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#事件总线模块设计","aria-hidden":"true"}},[s._v("#")]),s._v(" 事件总线模块设计")]),s._v(" "),a("h1",{attrs:{id:"事件总线模块设计文档"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#事件总线模块设计文档","aria-hidden":"true"}},[s._v("#")]),s._v(" 事件总线模块设计文档")]),s._v(" "),a("p",[s._v("[TOC]")]),s._v(" "),a("h2",{attrs:{id:"一、总体描述"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#一、总体描述","aria-hidden":"true"}},[s._v("#")]),s._v(" 一、总体描述")]),s._v(" "),a("h3",{attrs:{id:"_1-1-模块概述"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-1-模块概述","aria-hidden":"true"}},[s._v("#")]),s._v(" 1.1 模块概述")]),s._v(" "),a("h4",{attrs:{id:"_1-1-1-为什么要有《事件总线》模块"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-1-1-为什么要有《事件总线》模块","aria-hidden":"true"}},[s._v("#")]),s._v(" 1.1.1 为什么要有《事件总线》模块")]),s._v(" "),a("blockquote",[a("p",[s._v("事件总线模块是专门用来接收及通知处理模块事件的功能性模块，管理着所有模块事件。")])]),s._v(" "),a("h4",{attrs:{id:"_1-1-2-《事件总线》要做什么"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-1-2-《事件总线》要做什么","aria-hidden":"true"}},[s._v("#")]),s._v(" 1.1.2 《事件总线》要做什么")]),s._v(" "),a("blockquote",[a("p",[s._v("提供事件的订阅、接收、发送等功能，是模块间的事件中转站")])]),s._v(" "),a("h4",{attrs:{id:"_1-1-3-《事件总线》在系统中的定位"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-1-3-《事件总线》在系统中的定位","aria-hidden":"true"}},[s._v("#")]),s._v(" 1.1.3 《事件总线》在系统中的定位")]),s._v(" "),a("blockquote",[a("p",[s._v("事件模块是一个边缘系统，提供主要一些异步的消息发送，也就说，即使没有事件总线，系统一样可以正常运行，比较轻量级，而且不依赖其他模块系统。")])]),s._v(" "),a("h3",{attrs:{id:"_1-2-架构图"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-2-架构图","aria-hidden":"true"}},[s._v("#")]),s._v(" 1.2 架构图")]),s._v(" "),a("p",[a("img",{attrs:{src:"image/eventbus/event-bus-module.png",alt:"event-bus-module"}})]),s._v(" "),a("ul",[a("li",[s._v("事件总线模块主要含2部分交互逻辑：\n"),a("ul",[a("li",[s._v("与系统核心模块的微服务注册与服务信息获取。")]),s._v(" "),a("li",[s._v("与其他基础模块间的事件消息创建、订阅、转发管理。")])])])]),s._v(" "),a("h2",{attrs:{id:"二、功能设计"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#二、功能设计","aria-hidden":"true"}},[s._v("#")]),s._v(" 二、功能设计")]),s._v(" "),a("h3",{attrs:{id:"_2-1-功能架构图"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-功能架构图","aria-hidden":"true"}},[s._v("#")]),s._v(" 2.1 功能架构图")]),s._v(" "),a("p",[a("img",{attrs:{src:"image/eventbus/event-bus-content.png",alt:"event-bus-content"}})]),s._v(" "),a("h3",{attrs:{id:"_2-2-模块服务"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-2-模块服务","aria-hidden":"true"}},[s._v("#")]),s._v(" 2.2 模块服务")]),s._v(" "),a("p",[a("img",{attrs:{src:"image/eventbus/event-bus-model.png",alt:"event-bus-model"}})]),s._v(" "),a("blockquote",[a("p",[s._v("该模块提供事件的订阅，事件的转发")])]),s._v(" "),a("h4",{attrs:{id:"_2-2-1-修改系统运行参数"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-2-1-修改系统运行参数","aria-hidden":"true"}},[s._v("#")]),s._v(" 2.2.1 修改系统运行参数")]),s._v(" "),a("blockquote",[a("p",[s._v("只依赖核心系统，核心系统可以对事件模块系统的启动，停止，参数修改等，")])]),s._v(" "),a("h3",{attrs:{id:"_2-3-模块内部功能"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-3-模块内部功能","aria-hidden":"true"}},[s._v("#")]),s._v(" 2.3 模块内部功能")]),s._v(" "),a("p",[a("img",{attrs:{src:"image/eventbus/event-bus-function.png",alt:"event-bus-function"}})]),s._v(" "),a("blockquote",[a("p",[s._v("模块内部工能主要包含，订阅管理器，事件管理器，转发管理器。")])]),s._v(" "),a("ul",[a("li",[s._v("微服务接口信息同步管理\n"),a("ul",[a("li",[s._v("用于与kernel服务治理模块之间的服务接口同步")])])]),s._v(" "),a("li",[s._v("事件储存管理(eventBus)\n"),a("ul",[a("li",[s._v("用于进行事件信息的创建，订阅等储存，并且在模块重启是进行信息的初始化。")])])]),s._v(" "),a("li",[s._v("事件订阅管理(subscribe)\n"),a("ul",[a("li",[s._v("维护订阅事件的“配置表”：包括所有各个模块订阅的重要参数")])])]),s._v(" "),a("li",[s._v("事件转发管理(dispatcher)\n"),a("ul",[a("li",[s._v("开放接口用于事件的接收，对接收事件按订阅进行转发，转发调用接口通过服务信息管理接口获得")])])]),s._v(" "),a("li",[s._v("功能接口管理(rpc)\n"),a("ul",[a("li",[s._v("开放查询接口供外部查询")])])])]),s._v(" "),a("h3",{attrs:{id:"_2-4-事件总线流程"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-4-事件总线流程","aria-hidden":"true"}},[s._v("#")]),s._v(" 2.4 事件总线流程")]),s._v(" "),a("ul",[a("li",[s._v("事件处理时序")])]),s._v(" "),a("p",[a("img",{attrs:{src:"image/eventbus/event-bus-seq-flow.png",alt:"event-bus-seq-flow"}})]),s._v(" "),a("ul",[a("li",[s._v("事件处理基本流程")])]),s._v(" "),a("p",[a("img",{attrs:{src:"image/eventbus/event-bus-main-flow.png",alt:"event-bus-main-flow"}})]),s._v(" "),a("h3",{attrs:{id:"_2-5-业务逻辑"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-5-业务逻辑","aria-hidden":"true"}},[s._v("#")]),s._v(" 2.5 业务逻辑")]),s._v(" "),a("blockquote",[a("p",[s._v("在事件转发失败（比如网络原因）情况下进行的异常逻辑处理 ，按以下2种逻辑处理:")])]),s._v(" "),a("ul",[a("li",[s._v("1、保留事件调用 按队列重复调用，直到转发成功。")]),s._v(" "),a("li",[s._v("2、尝试多次后直接丢弃,(暂定5次)每10秒后重试一次。")])]),s._v(" "),a("h2",{attrs:{id:"三、接口设计"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#三、接口设计","aria-hidden":"true"}},[s._v("#")]),s._v(" 三、接口设计")]),s._v(" "),a("h3",{attrs:{id:"_3-1-模块接口"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-1-模块接口","aria-hidden":"true"}},[s._v("#")]),s._v(" 3.1 模块接口")]),s._v(" "),a("h4",{attrs:{id:"_3-1-1-事件主题订阅"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-1-1-事件主题订阅","aria-hidden":"true"}},[s._v("#")]),s._v(" 3.1.1 事件主题订阅")]),s._v(" "),a("blockquote",[a("p",[s._v("cmd: subscribe")])]),s._v(" "),a("h5",{attrs:{id:"参数说明-request-body"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#参数说明-request-body","aria-hidden":"true"}},[s._v("#")]),s._v(" 参数说明 (request body)")]),s._v(" "),a("div",{staticClass:"language-json line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"cmd"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"subscribe"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"min_version"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"1.0"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"params"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"app.nuls.network.bandwidth"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("//topic 事件主题\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"moduleId"')]),s._v(" //moduleId订阅者模块id\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br")])]),a("h5",{attrs:{id:"返回值说明-response-content"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#返回值说明-response-content","aria-hidden":"true"}},[s._v("#")]),s._v(" 返回值说明 (response content)")]),s._v(" "),a("div",{staticClass:"language-json line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"version"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"1.0"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"code"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("//操作码\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"msg"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"reponse message."')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("//失败时的信息\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"result"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"app_secret"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"xxxxxxxxxxxx"')]),s._v(" // app_secret"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("暂时不需要，后期如果需要不是本机调用可能需要验证\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br")])]),a("h4",{attrs:{id:"_3-1-2-事件取消订阅"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-1-2-事件取消订阅","aria-hidden":"true"}},[s._v("#")]),s._v(" 3.1.2 事件取消订阅")]),s._v(" "),a("blockquote",[a("p",[s._v("cmd: unsubscribe")])]),s._v(" "),a("h5",{attrs:{id:"参数说明-request-body-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#参数说明-request-body-2","aria-hidden":"true"}},[s._v("#")]),s._v(" 参数说明 (request body)")]),s._v(" "),a("div",{staticClass:"language-json line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"cmd"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"unsubscribe"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"min_version"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"1.0"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"params"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"app.nuls.network.bandwidth"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" //topic 事件主题\n  "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"moduleId"')]),s._v(" //moduleId订阅者模块id\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br")])]),a("h5",{attrs:{id:"返回值说明：-response-content"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#返回值说明：-response-content","aria-hidden":"true"}},[s._v("#")]),s._v(" 返回值说明：(response content)")]),s._v(" "),a("div",{staticClass:"language-json line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"version"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"1.0"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"code"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" //操作码\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"msg"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"reponse message."')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("//失败时的信息\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"result"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br")])]),a("h4",{attrs:{id:"_3-1-3-事件发送【自动创建topic】"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-1-3-事件发送【自动创建topic】","aria-hidden":"true"}},[s._v("#")]),s._v(" 3.1.3 事件发送【自动创建topic】")]),s._v(" "),a("blockquote",[a("p",[s._v("在没人订阅情况下是否保留一定时间？")])]),s._v(" "),a("blockquote",[a("p",[s._v("cmd: send")])]),s._v(" "),a("h5",{attrs:{id:"参数说明-request-body-3"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#参数说明-request-body-3","aria-hidden":"true"}},[s._v("#")]),s._v(" 参数说明(request body)")]),s._v(" "),a("div",{staticClass:"language-json line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"cmd"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"send"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"min_version"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"1.0"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"params"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("\n   "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"app.nuls.network.bandwidth"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("//topic 事件主题\n   "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"moduleId"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" //moduleId订阅者模块id\n   "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"key"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"data value"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(" // 需要发送的事件，jsonObj\n "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br")])]),a("h5",{attrs:{id:"返回值说明-response-content-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#返回值说明-response-content-2","aria-hidden":"true"}},[s._v("#")]),s._v(" 返回值说明(response content)")]),s._v(" "),a("div",{staticClass:"language-json line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"version"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"1.0"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"code"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" //操作码\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"msg"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"reponse message."')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("//失败时的信息\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"result"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br")])]),a("h4",{attrs:{id:"_3-1-4-事件广播-推送push-or-dispatcher"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-1-4-事件广播-推送push-or-dispatcher","aria-hidden":"true"}},[s._v("#")]),s._v(" 3.1.4 事件广播(推送push or dispatcher)")]),s._v(" "),a("blockquote",[a("p",[s._v("需要每个接口在订阅事件时提供接口，我在广播时调用即可,我这里是多线程去掉你们接口，你们需要返回正确的code,否则会有走重试机制")])]),s._v(" "),a("h5",{attrs:{id:"参数说明-request-body-4"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#参数说明-request-body-4","aria-hidden":"true"}},[s._v("#")]),s._v(" 参数说明(request body)")]),s._v(" "),a("div",{staticClass:"language-json line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"cmd"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"dispatcher"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"min_version"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"1.0"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"params"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("\n   "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(" //data 需要发送的事件，payload\n "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br")])]),a("h5",{attrs:{id:"返回值说明-response-content-3"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#返回值说明-response-content-3","aria-hidden":"true"}},[s._v("#")]),s._v(" 返回值说明(response content)")]),s._v(" "),a("div",{staticClass:"language-json line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"version"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"1.0"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"code"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" //一定要正确返回"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("不要需要告诉你业务逻辑是否出错，你只要接收到了就告诉我你成功接收到了即可。\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"msg"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"reponse message."')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("//失败时的信息\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"result"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br")])]),a("h3",{attrs:{id:"_3-2-功能接口"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-2-功能接口","aria-hidden":"true"}},[s._v("#")]),s._v(" 3.2 功能接口")]),s._v(" "),a("blockquote",[a("p",[s._v("功能接口是提供给界面和命令行工具使用的接口")])]),s._v(" "),a("h4",{attrs:{id:"获取事件主题信息"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#获取事件主题信息","aria-hidden":"true"}},[s._v("#")]),s._v(" 获取事件主题信息")]),s._v(" "),a("blockquote",[a("p",[s._v("cmd: topics")])]),s._v(" "),a("h5",{attrs:{id:"参数说明-request-body-5"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#参数说明-request-body-5","aria-hidden":"true"}},[s._v("#")]),s._v(" 参数说明(request body)")]),s._v(" "),a("div",{staticClass:"language-json line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"cmd"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"topics"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"min_version"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"1.0"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"params"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br")])]),a("h5",{attrs:{id:"返回值说明-response-content-4"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#返回值说明-response-content-4","aria-hidden":"true"}},[s._v("#")]),s._v(" 返回值说明(response content)")]),s._v(" "),a("div",{staticClass:"language-json line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"version"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"1.0"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"code"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" //一定要正确返回"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("不要需要告诉你业务逻辑是否出错，你只要接收到了就告诉我你成功接收到了即可。\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"msg"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"reponse message."')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("//失败时的信息\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"result"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"topics"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"topic"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('""')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("  //主题id\n        "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"createTime"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('""')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\t//创建时间\n        "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"moduleId"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('""')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("   //主题创建者（模块）Id\n        "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"subscribes"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("//订阅者信息\n            "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n                "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"moduleId"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('""')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" //订阅者\n                "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"subscribeTime"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('""')]),s._v(" //订阅时间\n            "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br")])]),a("h4",{attrs:{id:"获取事件主题信息-包含该主题上所有事件信息？-每个事件其实我不关心的。"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#获取事件主题信息-包含该主题上所有事件信息？-每个事件其实我不关心的。","aria-hidden":"true"}},[s._v("#")]),s._v(" 获取事件主题信息(包含该主题上所有事件信息？) 每个事件其实我不关心的。")]),s._v(" "),a("blockquote",[a("p",[s._v("cmd : get_topic")])]),s._v(" "),a("h2",{attrs:{id:"四、事件说明"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#四、事件说明","aria-hidden":"true"}},[s._v("#")]),s._v(" 四、事件说明")]),s._v(" "),a("blockquote",[a("p",[s._v("不依赖任何事件")])]),s._v(" "),a("h2",{attrs:{id:"五、协议"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#五、协议","aria-hidden":"true"}},[s._v("#")]),s._v(" 五、协议")]),s._v(" "),a("h3",{attrs:{id:"_5-1-网络通讯协议"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_5-1-网络通讯协议","aria-hidden":"true"}},[s._v("#")]),s._v(" 5.1 网络通讯协议")]),s._v(" "),a("p",[s._v("无")]),s._v(" "),a("h3",{attrs:{id:"_5-2-交易协议"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_5-2-交易协议","aria-hidden":"true"}},[s._v("#")]),s._v(" 5.2 交易协议")]),s._v(" "),a("h2",{attrs:{id:"六、模块配置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#六、模块配置","aria-hidden":"true"}},[s._v("#")]),s._v(" 六、模块配置")]),s._v(" "),a("h3",{attrs:{id:"_6-1-配置说明"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_6-1-配置说明","aria-hidden":"true"}},[s._v("#")]),s._v(" 6.1 配置说明")]),s._v(" "),a("blockquote",[a("p",[s._v("一般支持性配置，端口，重试次数，重试时间，默认执行器的线程池大小，网络调用超时配置等。")])]),s._v(" "),a("div",{staticClass:"language-yml line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("server:\n  ip: 127.0.0.1   //本机ip，用于提供服务给其他模块,可以不填，默认自动获取\n  port: 8080    //提供服务的端口,可以不填，默认自动获取\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("h3",{attrs:{id:"_6-2-模块依赖关系"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_6-2-模块依赖关系","aria-hidden":"true"}},[s._v("#")]),s._v(" 6.2 模块依赖关系")]),s._v(" "),a("ul",[a("li",[s._v("内核模块\n"),a("ul",[a("li",[s._v("模块注册")]),s._v(" "),a("li",[s._v("模块注销")]),s._v(" "),a("li",[s._v("模块状态上报（心跳）")]),s._v(" "),a("li",[s._v("服务接口数据获取及定时更新")])])])]),s._v(" "),a("h2",{attrs:{id:"七、java特有的设计"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#七、java特有的设计","aria-hidden":"true"}},[s._v("#")]),s._v(" 七、Java特有的设计")]),s._v(" "),a("blockquote",[a("p",[s._v("核心对象类定义,存储数据结构，......")])]),s._v(" "),a("h2",{attrs:{id:"八、补充内容"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#八、补充内容","aria-hidden":"true"}},[s._v("#")]),s._v(" 八、补充内容")]),s._v(" "),a("blockquote",[a("p",[s._v("上面未涉及的必须的内容")])])])}],!1,null,null,null);r.options.__file="5-5eventBusModuleDesign.md";t.default=r.exports}}]);