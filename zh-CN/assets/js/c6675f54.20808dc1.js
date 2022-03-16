"use strict";(self.webpackChunkseatunnel_website=self.webpackChunkseatunnel_website||[]).push([[239],{3905:function(n,e,t){t.d(e,{Zo:function(){return c},kt:function(){return m}});var o=t(7294);function r(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function i(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(n);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,o)}return t}function a(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?i(Object(t),!0).forEach((function(e){r(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}function l(n,e){if(null==n)return{};var t,o,r=function(n,e){if(null==n)return{};var t,o,r={},i=Object.keys(n);for(o=0;o<i.length;o++)t=i[o],e.indexOf(t)>=0||(r[t]=n[t]);return r}(n,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(n);for(o=0;o<i.length;o++)t=i[o],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(r[t]=n[t])}return r}var u=o.createContext({}),s=function(n){var e=o.useContext(u),t=e;return n&&(t="function"==typeof n?n(e):a(a({},e),n)),t},c=function(n){var e=s(n.components);return o.createElement(u.Provider,{value:e},n.children)},f={inlineCode:"code",wrapper:function(n){var e=n.children;return o.createElement(o.Fragment,{},e)}},p=o.forwardRef((function(n,e){var t=n.components,r=n.mdxType,i=n.originalType,u=n.parentName,c=l(n,["components","mdxType","originalType","parentName"]),p=s(t),m=r,g=p["".concat(u,".").concat(m)]||p[m]||f[m]||i;return t?o.createElement(g,a(a({ref:e},c),{},{components:t})):o.createElement(g,a({ref:e},c))}));function m(n,e){var t=arguments,r=e&&e.mdxType;if("string"==typeof n||r){var i=t.length,a=new Array(i);a[0]=p;var l={};for(var u in e)hasOwnProperty.call(e,u)&&(l[u]=e[u]);l.originalType=n,l.mdxType="string"==typeof n?n:r,a[1]=l;for(var s=2;s<i;s++)a[s]=t[s];return o.createElement.apply(null,a)}return o.createElement.apply(null,t)}p.displayName="MDXCreateElement"},1720:function(n,e,t){t.r(e),t.d(e,{frontMatter:function(){return l},contentTitle:function(){return u},metadata:function(){return s},assets:function(){return c},toc:function(){return f},default:function(){return m}});var o=t(7462),r=t(3366),i=(t(7294),t(3905)),a=["components"],l={},u="Config Examples",s={unversionedId:"flink/configuration/ConfigExamples",id:"flink/configuration/ConfigExamples",title:"Config Examples",description:"Full configuration file example [Flink]",source:"@site/docs/flink/configuration/ConfigExamples.md",sourceDirName:"flink/configuration",slug:"/flink/configuration/ConfigExamples",permalink:"/zh-CN/docs/flink/configuration/ConfigExamples",editUrl:"https://github.com/apache/incubator-seatunnel-website/edit/main/docs/flink/configuration/ConfigExamples.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Command usage instructions",permalink:"/zh-CN/docs/flink/commands/start-seatunnel-flink.sh"},next:{title:"Console",permalink:"/zh-CN/docs/flink/configuration/sink-plugins/Console"}},c={},f=[],p={toc:f};function m(n){var e=n.components,t=(0,r.Z)(n,a);return(0,i.kt)("wrapper",(0,o.Z)({},p,t,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"config-examples"},"Config Examples"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Full configuration file example ","[Flink]")),(0,i.kt)("p",null,"An example is as follows:"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"In the configuration, the behavior comment beginning with ",(0,i.kt)("inlineCode",{parentName:"p"},"#"),".")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'######\n###### This config file is a demonstration of streaming processing in seatunnel config\n######\n\nenv {\n    # You can set flink configuration here\n    execution.parallelism = 1\n    #execution.checkpoint.interval = 10000\n    #execution.checkpoint.data-uri = "hdfs://localhost:9000/checkpoint"\n}\n\nsource {\n    # This is a example source plugin **only for test and demonstrate the feature source plugin**\n    FakeSourceStream {\n      result_table_name = "fake"\n      field_name = "name,age"\n    }\n\n    # If you would like to get more information about how to configure seatunnel and see full list of source plugins,\n    # please go to https://seatunnel.apache.org/docs/flink/configuration/source-plugins/Fake\n}\n\ntransform {\n    sql {\n      sql = "select name,age from fake"\n    }\n\n    # If you would like to get more information about how to configure seatunnel and see full list of transform plugins,\n    # please go to https://seatunnel.apache.org/docs/flink/configuration/transform-plugins/Sql\n}\n\nsink {\n    ConsoleSink {}\n\n    # If you would like to get more information about how to configure seatunnel and see full list of sink plugins,\n    # please go to https://seatunnel.apache.org/docs/flink/configuration/sink-plugins/Console\n}\n')),(0,i.kt)("p",null,"If you want to know the details of this format configuration, Please see ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/lightbend/config/blob/main/HOCON.md"},"HOCON"),"."))}m.isMDXComponent=!0}}]);