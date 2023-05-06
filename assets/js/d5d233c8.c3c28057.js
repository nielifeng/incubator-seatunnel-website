"use strict";(self.webpackChunkseatunnel_website=self.webpackChunkseatunnel_website||[]).push([[14341],{3905:function(e,n,t){t.d(n,{Zo:function(){return c},kt:function(){return m}});var a=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=a.createContext({}),p=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},c=function(e){var n=p(e.components);return a.createElement(s.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},d=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=p(t),m=r,f=d["".concat(s,".").concat(m)]||d[m]||u[m]||o;return t?a.createElement(f,l(l({ref:n},c),{},{components:t})):a.createElement(f,l({ref:n},c))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,l=new Array(o);l[0]=d;var i={};for(var s in n)hasOwnProperty.call(n,s)&&(i[s]=n[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,l[1]=i;for(var p=2;p<o;p++)l[p]=t[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},89230:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return i},contentTitle:function(){return s},metadata:function(){return p},assets:function(){return c},toc:function(){return u},default:function(){return m}});var a=t(87462),r=t(63366),o=(t(67294),t(3905)),l=["components"],i={sidebar_position:4},s=void 0,p={unversionedId:"start-v2/locally/quick-start-spark",id:"version-2.3.1/start-v2/locally/quick-start-spark",title:"quick-start-spark",description:"----------------",source:"@site/versioned_docs/version-2.3.1/start-v2/locally/quick-start-spark.md",sourceDirName:"start-v2/locally",slug:"/start-v2/locally/quick-start-spark",permalink:"/docs/2.3.1/start-v2/locally/quick-start-spark",editUrl:"https://github.com/apache/incubator-seatunnel-website/edit/main/versioned_docs/version-2.3.1/start-v2/locally/quick-start-spark.md",tags:[],version:"2.3.1",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"docs",previous:{title:"quick-start-flink",permalink:"/docs/2.3.1/start-v2/locally/quick-start-flink"},next:{title:"docker",permalink:"/docs/2.3.1/start-v2/docker/"}},c={},u=[{value:"Step 1: Deployment SeaTunnel And Connectors",id:"step-1-deployment-seatunnel-and-connectors",level:2},{value:"Step 2: Deployment And Config Spark",id:"step-2-deployment-and-config-spark",level:2},{value:"Step 3: Add Job Config File to define a job",id:"step-3-add-job-config-file-to-define-a-job",level:2},{value:"Step 3: Run SeaTunnel Application",id:"step-3-run-seatunnel-application",level:2},{value:"What&#39;s More",id:"whats-more",level:2}],d={toc:u};function m(e){var n=e.components,t=(0,r.Z)(e,l);return(0,o.kt)("wrapper",(0,a.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("hr",null),(0,o.kt)("h1",{id:"quick-start-with-spark"},"Quick Start With Spark"),(0,o.kt)("h2",{id:"step-1-deployment-seatunnel-and-connectors"},"Step 1: Deployment SeaTunnel And Connectors"),(0,o.kt)("p",null,"Before starting, make sure you have downloaded and deployed SeaTunnel as described in ",(0,o.kt)("a",{parentName:"p",href:"/docs/2.3.1/start-v2/locally/deployment"},"deployment")),(0,o.kt)("h2",{id:"step-2-deployment-and-config-spark"},"Step 2: Deployment And Config Spark"),(0,o.kt)("p",null,"Please ",(0,o.kt)("a",{parentName:"p",href:"https://spark.apache.org/downloads.html"},"download Spark")," first(",(0,o.kt)("strong",{parentName:"p"},"required version >= 2.4.0"),"). For more information you could\nsee ",(0,o.kt)("a",{parentName:"p",href:"https://spark.apache.org/docs/latest/spark-standalone.html#installing-spark-standalone-to-a-cluster"},"Getting Started: standalone")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Configure SeaTunnel"),": Change the setting in ",(0,o.kt)("inlineCode",{parentName:"p"},"config/seatunnel-env.sh"),", it is base on the path your engine install at ",(0,o.kt)("a",{parentName:"p",href:"/docs/2.3.1/start-v2/locally/deployment"},"deployment"),".\nChange ",(0,o.kt)("inlineCode",{parentName:"p"},"SPARK_HOME")," to the Spark deployment dir."),(0,o.kt)("h2",{id:"step-3-add-job-config-file-to-define-a-job"},"Step 3: Add Job Config File to define a job"),(0,o.kt)("p",null,"Edit ",(0,o.kt)("inlineCode",{parentName:"p"},"config/seatunnel.streaming.conf.template"),", which determines the way and logic of data input, processing, and output after seatunnel is started.\nThe following is an example of the configuration file, which is the same as the example application mentioned above."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-hocon"},'env {\n  execution.parallelism = 1\n  job.mode = "BATCH"\n}\n\nsource {\n    FakeSource {\n      result_table_name = "fake"\n      row.num = 16\n      schema = {\n        fields {\n          name = "string"\n          age = "int"\n        }\n      }\n    }\n}\n\nsink {\n  Console {}\n}\n\n')),(0,o.kt)("p",null,"More information about config please check ",(0,o.kt)("a",{parentName:"p",href:"/docs/2.3.1/concept/config"},"config concept")),(0,o.kt)("h2",{id:"step-3-run-seatunnel-application"},"Step 3: Run SeaTunnel Application"),(0,o.kt)("p",null,"You could start the application by the following commands"),(0,o.kt)("p",null,"spark 2.4.x"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'cd "apache-seatunnel-incubating-${version}"\n./bin/start-seatunnel-spark-2-connector-v2.sh \\\n--master local[4] \\\n--deploy-mode client \\\n--config ./config/seatunnel.streaming.conf.template\n')),(0,o.kt)("p",null,"spark3.x.x"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},'cd "apache-seatunnel-incubating-${version}"\n./bin/start-seatunnel-spark-3-connector-v2.sh \\\n--master local[4] \\\n--deploy-mode client \\\n--config ./config/seatunnel.streaming.conf.template\n')),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"See The Output"),": When you run the command, you could see its output in your console. You can think this\nis a sign that the command ran successfully or not."),(0,o.kt)("p",null,"The SeaTunnel console will prints some logs as below:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"fields : name, age\ntypes : STRING, INT\nrow=1 : elWaB, 1984352560\nrow=2 : uAtnp, 762961563\nrow=3 : TQEIB, 2042675010\nrow=4 : DcFjo, 593971283\nrow=5 : SenEb, 2099913608\nrow=6 : DHjkg, 1928005856\nrow=7 : eScCM, 526029657\nrow=8 : sgOeE, 600878991\nrow=9 : gwdvw, 1951126920\nrow=10 : nSiKE, 488708928\nrow=11 : xubpl, 1420202810\nrow=12 : rHZqb, 331185742\nrow=13 : rciGD, 1112878259\nrow=14 : qLhdI, 1457046294\nrow=15 : ZTkRx, 1240668386\nrow=16 : SGZCr, 94186144\n")),(0,o.kt)("h2",{id:"whats-more"},"What's More"),(0,o.kt)("p",null,"For now, you are already take a quick look about SeaTunnel with Spark, you could see ",(0,o.kt)("a",{parentName:"p",href:"/docs/category/connector-v2"},"connector")," to find all\nsource and sink SeaTunnel supported. Or see ",(0,o.kt)("a",{parentName:"p",href:"/docs/2.3.1/other-engine/spark"},"SeaTunnel With Spark")," if you want to know more about SeaTunnel Run With Spark."),(0,o.kt)("p",null,"SeaTunnel have an own engine named ",(0,o.kt)("inlineCode",{parentName:"p"},"Zeta")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"Zeta")," is the default engine of SeaTunnel. You can follow ",(0,o.kt)("a",{parentName:"p",href:"/docs/2.3.1/start-v2/locally/quick-start-seatunnel-engine"},"Quick Start")," to configure and run a data synchronization job."))}m.isMDXComponent=!0}}]);