"use strict";(self.webpackChunkseatunnel_website=self.webpackChunkseatunnel_website||[]).push([[9541],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return f}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),u=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=u(e.components);return r.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),m=u(n),f=a,d=m["".concat(c,".").concat(f)]||m[f]||p[f]||i;return n?r.createElement(d,o(o({ref:t},s),{},{components:n})):r.createElement(d,o({ref:t},s))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var u=2;u<i;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},6838:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return c},metadata:function(){return u},toc:function(){return s},default:function(){return m}});var r=n(7462),a=n(3366),i=(n(7294),n(3905)),o=["components"],l={},c=void 0,u={unversionedId:"usecase/README",id:"usecase/README",title:"README",description:"\u884c\u4e1a\u5e94\u7528\u6848\u4f8b",source:"@site/docs/usecase/README.md",sourceDirName:"usecase",slug:"/usecase/",permalink:"/zh-CN/docs/usecase/",editUrl:"https://github.com/apache/incubator-seatunnel-website/edit/main/docs/usecase/README.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Guardian",permalink:"/zh-CN/docs/internal/monitoring"},next:{title:"HDFS\u5bfc\u51fa\u6570\u636e\u5230Clickhouse",permalink:"/zh-CN/docs/usecase/1"}},s=[{value:"\u884c\u4e1a\u5e94\u7528\u6848\u4f8b",id:"\u884c\u4e1a\u5e94\u7528\u6848\u4f8b",children:[],level:3},{value:"\u4f7f\u7528seatunnel\u7684\u516c\u53f8",id:"\u4f7f\u7528seatunnel\u7684\u516c\u53f8",children:[],level:3}],p={toc:s};function m(e){var t=e.components,n=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h3",{id:"\u884c\u4e1a\u5e94\u7528\u6848\u4f8b"},"\u884c\u4e1a\u5e94\u7528\u6848\u4f8b"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/zh-CN/docs/usecase/1"},"\u5982\u4f55\u5feb\u901f\u5730\u628aHDFS\u4e2d\u7684\u6570\u636e\u5bfc\u5165Clickhouse")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/zh-CN/docs/usecase/2"},"\u5982\u4f55\u5feb\u901f\u5730\u5c06Hive\u4e2d\u7684\u6570\u636e\u5bfc\u5165ClickHouse")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/zh-CN/docs/usecase/3"},"\u5982\u4f55\u4f7f\u7528Spark\u5feb\u901f\u5c06\u6570\u636e\u5199\u5165Elasticsearch")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/zh-CN/docs/usecase/4"},"\u4f18\u79c0\u7684\u6570\u636e\u5de5\u7a0b\u5e08\uff0c\u600e\u4e48\u7528Spark\u5728TiDB\u4e0a\u505aOLAP\u5206\u6790")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/zh-CN/docs/usecase/5"},"seatunnel\u4e2dStructuredStreaming\u600e\u4e48\u7528"))),(0,i.kt)("h3",{id:"\u4f7f\u7528seatunnel\u7684\u516c\u53f8"},"\u4f7f\u7528seatunnel\u7684\u516c\u53f8"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://weibo.com"},"\u5fae\u535a"),", \u589e\u503c\u4e1a\u52a1\u90e8\u6570\u636e\u5e73\u53f0")),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://img.t.sinajs.cn/t5/style/images/staticlogo/groups3.png?version=f362a1c5be520a15",alt:"\u5fae\u535aLogo"})),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"http://www.sina.com.cn/"},"\u65b0\u6d6a"),", \u5927\u6570\u636e\u8fd0\u7ef4\u5206\u6790\u5e73\u53f0")),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"http://n.sinaimg.cn/tech/ir/imges/logo.png",alt:"\u65b0\u6d6aLogo"})),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.yixia.com/"},"\u4e00\u4e0b\u79d1\u6280"),", \u4e00\u76f4\u64ad\u6570\u636e\u5e73\u53f0")),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://imgaliyuncdn.miaopai.com/static20131031/miaopai20140729/new_yixia/static/imgs/logo.png",alt:"\u4e00\u4e0b\u79d1\u6280Logo"})),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u5176\u4ed6\u516c\u53f8 ... \u671f\u5f85\u60a8\u7684\u52a0\u5165")))}m.isMDXComponent=!0}}]);