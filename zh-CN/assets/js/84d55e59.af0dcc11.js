"use strict";(self.webpackChunkseatunnel_website=self.webpackChunkseatunnel_website||[]).push([[67227],{3905:function(e,n,t){t.d(n,{Zo:function(){return u},kt:function(){return f}});var r=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=r.createContext({}),c=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},u=function(e){var n=c(e.components);return r.createElement(s.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=c(t),f=o,m=d["".concat(s,".").concat(f)]||d[f]||p[f]||a;return t?r.createElement(m,l(l({ref:n},u),{},{components:t})):r.createElement(m,l({ref:n},u))}));function f(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,l=new Array(a);l[0]=d;var i={};for(var s in n)hasOwnProperty.call(n,s)&&(i[s]=n[s]);i.originalType=e,i.mdxType="string"==typeof e?e:o,l[1]=i;for(var c=2;c<a;c++)l[c]=t[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},69295:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return i},contentTitle:function(){return s},metadata:function(){return c},assets:function(){return u},toc:function(){return p},default:function(){return f}});var r=t(87462),o=t(63366),a=(t(67294),t(3905)),l=["components"],i={sidebar_position:2},s="Quick Start With SeaTunnel Engine",c={unversionedId:"start-v2/locally/quick-start-seatunnel-engine",id:"version-2.3.0/start-v2/locally/quick-start-seatunnel-engine",title:"Quick Start With SeaTunnel Engine",description:"Step 1: Deployment SeaTunnel And Connectors",source:"@site/versioned_docs/version-2.3.0/start-v2/locally/quick-start-seatunnel-engine.md",sourceDirName:"start-v2/locally",slug:"/start-v2/locally/quick-start-seatunnel-engine",permalink:"/zh-CN/docs/2.3.0/start-v2/locally/quick-start-seatunnel-engine",editUrl:"https://github.com/apache/incubator-seatunnel-website/edit/main/versioned_docs/version-2.3.0/start-v2/locally/quick-start-seatunnel-engine.md",tags:[],version:"2.3.0",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"docs",previous:{title:"Deployment",permalink:"/zh-CN/docs/2.3.0/start-v2/locally/deployment"},next:{title:"Quick Start With Flink",permalink:"/zh-CN/docs/2.3.0/start-v2/locally/quick-start-flink"}},u={},p=[{value:"Step 1: Deployment SeaTunnel And Connectors",id:"step-1-deployment-seatunnel-and-connectors",level:2},{value:"Step 2: Add Job Config File to define a job",id:"step-2-add-job-config-file-to-define-a-job",level:2},{value:"Step 3: Run SeaTunnel Application",id:"step-3-run-seatunnel-application",level:2},{value:"What&#39;s More",id:"whats-more",level:2}],d={toc:p};function f(e){var n=e.components,t=(0,o.Z)(e,l);return(0,a.kt)("wrapper",(0,r.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"quick-start-with-seatunnel-engine"},"Quick Start With SeaTunnel Engine"),(0,a.kt)("h2",{id:"step-1-deployment-seatunnel-and-connectors"},"Step 1: Deployment SeaTunnel And Connectors"),(0,a.kt)("p",null,"Before starting, make sure you have downloaded and deployed SeaTunnel as described in ",(0,a.kt)("a",{parentName:"p",href:"/zh-CN/docs/2.3.0/start-v2/locally/deployment"},"deployment")),(0,a.kt)("h2",{id:"step-2-add-job-config-file-to-define-a-job"},"Step 2: Add Job Config File to define a job"),(0,a.kt)("p",null,"Edit ",(0,a.kt)("inlineCode",{parentName:"p"},"config/seatunnel.streaming.conf.template"),", which determines the way and logic of data input, processing, and output after seatunnel is started.\nThe following is an example of the configuration file, which is the same as the example application mentioned above."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-hocon"},'env {\n  execution.parallelism = 1\n  job.mode = "BATCH"\n}\n\nsource {\n    FakeSource {\n      result_table_name = "fake"\n      row.num = 16\n      schema = {\n        fields {\n          name = "string"\n          age = "int"\n        }\n      }\n    }\n}\n\ntransform {\n\n}\n\nsink {\n  Console {}\n}\n\n')),(0,a.kt)("p",null,"More information about config please check ",(0,a.kt)("a",{parentName:"p",href:"/zh-CN/docs/2.3.0/concept/config"},"config concept")),(0,a.kt)("h2",{id:"step-3-run-seatunnel-application"},"Step 3: Run SeaTunnel Application"),(0,a.kt)("p",null,"You could start the application by the following commands"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},'cd "apache-seatunnel-incubating-${version}"\n./bin/seatunnel.sh --config ./config/seatunnel.streaming.conf.template -e local\n\n')),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"See The Output"),": When you run the command, you could see its output in your console. You can think this\nis a sign that the command ran successfully or not."),(0,a.kt)("p",null,"The SeaTunnel console will prints some logs as below:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"fields : name, age\ntypes : STRING, INT\nrow=1 : elWaB, 1984352560\nrow=2 : uAtnp, 762961563\nrow=3 : TQEIB, 2042675010\nrow=4 : DcFjo, 593971283\nrow=5 : SenEb, 2099913608\nrow=6 : DHjkg, 1928005856\nrow=7 : eScCM, 526029657\nrow=8 : sgOeE, 600878991\nrow=9 : gwdvw, 1951126920\nrow=10 : nSiKE, 488708928\nrow=11 : xubpl, 1420202810\nrow=12 : rHZqb, 331185742\nrow=13 : rciGD, 1112878259\nrow=14 : qLhdI, 1457046294\nrow=15 : ZTkRx, 1240668386\nrow=16 : SGZCr, 94186144\n")),(0,a.kt)("h2",{id:"whats-more"},"What's More"),(0,a.kt)("p",null,"For now, you are already take a quick look about SeaTunnel, you could see ",(0,a.kt)("a",{parentName:"p",href:"/docs/category/connector-v2"},"connector")," to find all\nsource and sink SeaTunnel supported. Or see ",(0,a.kt)("a",{parentName:"p",href:"/zh-CN/docs/2.3.0/seatunnel-engine/about"},"SeaTunnel Engine")," if you want to know more about SeaTunnel Engine."),(0,a.kt)("p",null,"SeaTunnel also supports running jobs in Spark/Flink. You can see ",(0,a.kt)("a",{parentName:"p",href:"/zh-CN/docs/2.3.0/start-v2/locally/quick-start-spark"},"Quick Start With Spark")," or ",(0,a.kt)("a",{parentName:"p",href:"/zh-CN/docs/2.3.0/start-v2/locally/quick-start-flink"},"Quick Start With Flink"),"."))}f.isMDXComponent=!0}}]);