"use strict";(self.webpackChunkseatunnel_website=self.webpackChunkseatunnel_website||[]).push([[15203],{3905:function(e,n,t){t.d(n,{Zo:function(){return p},kt:function(){return f}});var a=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,a,o=function(e,n){if(null==e)return{};var t,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=a.createContext({}),c=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},p=function(e){var n=c(e.components);return a.createElement(s.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},d=a.forwardRef((function(e,n){var t=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=c(t),f=o,m=d["".concat(s,".").concat(f)]||d[f]||u[f]||r;return t?a.createElement(m,l(l({ref:n},p),{},{components:t})):a.createElement(m,l({ref:n},p))}));function f(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var r=t.length,l=new Array(r);l[0]=d;var i={};for(var s in n)hasOwnProperty.call(n,s)&&(i[s]=n[s]);i.originalType=e,i.mdxType="string"==typeof e?e:o,l[1]=i;for(var c=2;c<r;c++)l[c]=t[c];return a.createElement.apply(null,l)}return a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},94539:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return i},contentTitle:function(){return s},metadata:function(){return c},assets:function(){return p},toc:function(){return u},default:function(){return f}});var a=t(87462),o=t(63366),r=(t(67294),t(3905)),l=["components"],i={sidebar_position:3},s=void 0,c={unversionedId:"start-v2/locally/quick-start-flink",id:"start-v2/locally/quick-start-flink",title:"quick-start-flink",description:"----------------",source:"@site/docs/start-v2/locally/quick-start-flink.md",sourceDirName:"start-v2/locally",slug:"/start-v2/locally/quick-start-flink",permalink:"/zh-CN/docs/start-v2/locally/quick-start-flink",editUrl:"https://github.com/apache/incubator-seatunnel-website/edit/main/docs/start-v2/locally/quick-start-flink.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"docs",previous:{title:"quick-start-seatunnel-engine",permalink:"/zh-CN/docs/start-v2/locally/quick-start-seatunnel-engine"},next:{title:"quick-start-spark",permalink:"/zh-CN/docs/start-v2/locally/quick-start-spark"}},p={},u=[{value:"Step 1: Deployment SeaTunnel And Connectors",id:"step-1-deployment-seatunnel-and-connectors",level:2},{value:"Step 2: Deployment And Config Flink",id:"step-2-deployment-and-config-flink",level:2},{value:"Step 3: Add Job Config File to define a job",id:"step-3-add-job-config-file-to-define-a-job",level:2},{value:"Step 3: Run SeaTunnel Application",id:"step-3-run-seatunnel-application",level:2},{value:"What&#39;s More",id:"whats-more",level:2}],d={toc:u};function f(e){var n=e.components,t=(0,o.Z)(e,l);return(0,r.kt)("wrapper",(0,a.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("hr",null),(0,r.kt)("h1",{id:"quick-start-with-flink"},"Quick Start With Flink"),(0,r.kt)("h2",{id:"step-1-deployment-seatunnel-and-connectors"},"Step 1: Deployment SeaTunnel And Connectors"),(0,r.kt)("p",null,"Before starting, make sure you have downloaded and deployed SeaTunnel as described in ",(0,r.kt)("a",{parentName:"p",href:"/zh-CN/docs/start-v2/locally/deployment"},"deployment")),(0,r.kt)("h2",{id:"step-2-deployment-and-config-flink"},"Step 2: Deployment And Config Flink"),(0,r.kt)("p",null,"Please ",(0,r.kt)("a",{parentName:"p",href:"https://flink.apache.org/downloads.html"},"download Flink")," first(",(0,r.kt)("strong",{parentName:"p"},"required version >= 1.12.0"),"). For more information you could see ",(0,r.kt)("a",{parentName:"p",href:"https://nightlies.apache.org/flink/flink-docs-release-1.14/docs/deployment/resource-providers/standalone/overview/"},"Getting Started: standalone")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Configure SeaTunnel"),": Change the setting in ",(0,r.kt)("inlineCode",{parentName:"p"},"config/seatunnel-env.sh"),", it is base on the path your engine install at ",(0,r.kt)("a",{parentName:"p",href:"/zh-CN/docs/start-v2/locally/deployment"},"deployment"),".\nChange ",(0,r.kt)("inlineCode",{parentName:"p"},"FLINK_HOME")," to the Flink deployment dir."),(0,r.kt)("h2",{id:"step-3-add-job-config-file-to-define-a-job"},"Step 3: Add Job Config File to define a job"),(0,r.kt)("p",null,"Edit ",(0,r.kt)("inlineCode",{parentName:"p"},"config/seatunnel.streaming.conf.template"),", which determines the way and logic of data input, processing, and output after seatunnel is started.\nThe following is an example of the configuration file, which is the same as the example application mentioned above."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-hocon"},'env {\n  execution.parallelism = 1\n  job.mode = "BATCH"\n}\n\nsource {\n    FakeSource {\n      result_table_name = "fake"\n      row.num = 16\n      schema = {\n        fields {\n          name = "string"\n          age = "int"\n        }\n      }\n    }\n}\n\nsink {\n  Console {}\n}\n\n')),(0,r.kt)("p",null,"More information about config please check ",(0,r.kt)("a",{parentName:"p",href:"/zh-CN/docs/concept/config"},"config concept")),(0,r.kt)("h2",{id:"step-3-run-seatunnel-application"},"Step 3: Run SeaTunnel Application"),(0,r.kt)("p",null,"You could start the application by the following commands"),(0,r.kt)("p",null,"flink version between ",(0,r.kt)("inlineCode",{parentName:"p"},"1.12.x")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"1.14.x")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'cd "apache-seatunnel-incubating-${version}"\n./bin/start-seatunnel-flink-13-connector-v2.sh --config ./config/seatunnel.streaming.conf.template\n')),(0,r.kt)("p",null,"flink version between ",(0,r.kt)("inlineCode",{parentName:"p"},"1.15.x")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"1.16.x")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'cd "apache-seatunnel-incubating-${version}"\n./bin/start-seatunnel-flink-15-connector-v2.sh --config ./config/seatunnel.streaming.conf.template\n')),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"See The Output"),": When you run the command, you could see its output in your console. You can think this\nis a sign that the command ran successfully or not."),(0,r.kt)("p",null,"The SeaTunnel console will prints some logs as below:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"fields : name, age\ntypes : STRING, INT\nrow=1 : elWaB, 1984352560\nrow=2 : uAtnp, 762961563\nrow=3 : TQEIB, 2042675010\nrow=4 : DcFjo, 593971283\nrow=5 : SenEb, 2099913608\nrow=6 : DHjkg, 1928005856\nrow=7 : eScCM, 526029657\nrow=8 : sgOeE, 600878991\nrow=9 : gwdvw, 1951126920\nrow=10 : nSiKE, 488708928\nrow=11 : xubpl, 1420202810\nrow=12 : rHZqb, 331185742\nrow=13 : rciGD, 1112878259\nrow=14 : qLhdI, 1457046294\nrow=15 : ZTkRx, 1240668386\nrow=16 : SGZCr, 94186144\n")),(0,r.kt)("h2",{id:"whats-more"},"What's More"),(0,r.kt)("p",null,"For now, you are already take a quick look about SeaTunnel with Flink, you could see ",(0,r.kt)("a",{parentName:"p",href:"/docs/category/connector-v2"},"connector")," to find all\nsource and sink SeaTunnel supported. Or see ",(0,r.kt)("a",{parentName:"p",href:"/zh-CN/docs/other-engine/flink"},"SeaTunnel With Flink")," if you want to know more about SeaTunnel Run With Flink."),(0,r.kt)("p",null,"SeaTunnel have an own engine named ",(0,r.kt)("inlineCode",{parentName:"p"},"Zeta")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"Zeta")," is the default engine of SeaTunnel. You can follow ",(0,r.kt)("a",{parentName:"p",href:"/zh-CN/docs/start-v2/locally/quick-start-seatunnel-engine"},"Quick Start")," to configure and run a data synchronization job."))}f.isMDXComponent=!0}}]);