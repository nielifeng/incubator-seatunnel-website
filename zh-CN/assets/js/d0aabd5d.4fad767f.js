"use strict";(self.webpackChunkseatunnel_website=self.webpackChunkseatunnel_website||[]).push([[61278],{3905:function(e,n,t){t.d(n,{Zo:function(){return p},kt:function(){return m}});var a=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,a,o=function(e,n){if(null==e)return{};var t,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=a.createContext({}),u=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},p=function(e){var n=u(e.components);return a.createElement(s.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},d=a.forwardRef((function(e,n){var t=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=u(t),m=o,f=d["".concat(s,".").concat(m)]||d[m]||c[m]||r;return t?a.createElement(f,l(l({ref:n},p),{},{components:t})):a.createElement(f,l({ref:n},p))}));function m(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var r=t.length,l=new Array(r);l[0]=d;var i={};for(var s in n)hasOwnProperty.call(n,s)&&(i[s]=n[s]);i.originalType=e,i.mdxType="string"==typeof e?e:o,l[1]=i;for(var u=2;u<r;u++)l[u]=t[u];return a.createElement.apply(null,l)}return a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},58215:function(e,n,t){t.d(n,{Z:function(){return o}});var a=t(67294);function o(e){var n=e.children,t=e.hidden,o=e.className;return a.createElement("div",{role:"tabpanel",hidden:t,className:o},n)}},9877:function(e,n,t){t.d(n,{Z:function(){return p}});var a=t(87462),o=t(67294),r=t(72389),l=t(65450),i=t(86010),s="tabItem_LplD";function u(e){var n,t,r,u=e.lazy,p=e.block,c=e.defaultValue,d=e.values,m=e.groupId,f=e.className,h=o.Children.map(e.children,(function(e){if((0,o.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),k=null!=d?d:h.map((function(e){var n=e.props;return{value:n.value,label:n.label,attributes:n.attributes}})),g=(0,l.lx)(k,(function(e,n){return e.value===n.value}));if(g.length>0)throw new Error('Docusaurus error: Duplicate values "'+g.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var v=null===c?c:null!=(n=null!=c?c:null==(t=h.find((function(e){return e.props.default})))?void 0:t.props.value)?n:null==(r=h[0])?void 0:r.props.value;if(null!==v&&!k.some((function(e){return e.value===v})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+v+'" but none of its children has the corresponding value. Available values are: '+k.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var b=(0,l.UB)(),y=b.tabGroupChoices,w=b.setTabGroupChoices,N=(0,o.useState)(v),S=N[0],T=N[1],x=[],E=(0,l.o5)().blockElementScrollPositionUntilNextRender;if(null!=m){var O=y[m];null!=O&&O!==S&&k.some((function(e){return e.value===O}))&&T(O)}var C=function(e){var n=e.currentTarget,t=x.indexOf(n),a=k[t].value;a!==S&&(E(n),T(a),null!=m&&w(m,a))},I=function(e){var n,t=null;switch(e.key){case"ArrowRight":var a=x.indexOf(e.currentTarget)+1;t=x[a]||x[0];break;case"ArrowLeft":var o=x.indexOf(e.currentTarget)-1;t=x[o]||x[x.length-1]}null==(n=t)||n.focus()};return o.createElement("div",{className:"tabs-container"},o.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":p},f)},k.map((function(e){var n=e.value,t=e.label,r=e.attributes;return o.createElement("li",(0,a.Z)({role:"tab",tabIndex:S===n?0:-1,"aria-selected":S===n,key:n,ref:function(e){return x.push(e)},onKeyDown:I,onFocus:C,onClick:C},r,{className:(0,i.Z)("tabs__item",s,null==r?void 0:r.className,{"tabs__item--active":S===n})}),null!=t?t:n)}))),u?(0,o.cloneElement)(h.filter((function(e){return e.props.value===S}))[0],{className:"margin-vert--md"}):o.createElement("div",{className:"margin-vert--md"},h.map((function(e,n){return(0,o.cloneElement)(e,{key:n,hidden:e.props.value!==S})}))))}function p(e){var n=(0,r.Z)();return o.createElement(u,(0,a.Z)({key:String(n)},e))}},4745:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return u},contentTitle:function(){return p},metadata:function(){return c},assets:function(){return d},toc:function(){return m},default:function(){return h}});var a=t(87462),o=t(63366),r=(t(67294),t(3905)),l=t(9877),i=t(58215),s=["components"],u={sidebar_position:2},p="Set Up with Locally",c={unversionedId:"start-v2/local",id:"version-2.2.0-beta/start-v2/local",title:"Set Up with Locally",description:"Let's take an application that randomly generates data in memory, processes it through SQL, and finally outputs it to the console as an example.",source:"@site/versioned_docs/version-2.2.0-beta/start-v2/local.mdx",sourceDirName:"start-v2",slug:"/start-v2/local",permalink:"/zh-CN/docs/2.2.0-beta/start-v2/local",editUrl:"https://github.com/apache/incubator-seatunnel-website/edit/main/versioned_docs/version-2.2.0-beta/start-v2/local.mdx",tags:[],version:"2.2.0-beta",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"docs",previous:{title:"Quick Start - V2",permalink:"/zh-CN/docs/2.2.0-beta/category/start-v2"},next:{title:"Set Up with Docker",permalink:"/zh-CN/docs/2.2.0-beta/start-v2/docker"}},d={},m=[{value:"Step 1: Prepare the environment",id:"step-1-prepare-the-environment",level:2},{value:"Step 2: Download SeaTunnel",id:"step-2-download-seatunnel",level:2},{value:"Step 3: Install connectors plugin",id:"step-3-install-connectors-plugin",level:2},{value:"Step 4: Configure SeaTunnel Application",id:"step-4-configure-seatunnel-application",level:2},{value:"Step 5: Run SeaTunnel Application",id:"step-5-run-seatunnel-application",level:2},{value:"Explore More Build-in Examples",id:"explore-more-build-in-examples",level:2},{value:"What&#39;s More",id:"whats-more",level:2}],f={toc:m};function h(e){var n=e.components,t=(0,o.Z)(e,s);return(0,r.kt)("wrapper",(0,a.Z)({},f,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"set-up-with-locally"},"Set Up with Locally"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Let's take an application that randomly generates data in memory, processes it through SQL, and finally outputs it to the console as an example.")),(0,r.kt)("h2",{id:"step-1-prepare-the-environment"},"Step 1: Prepare the environment"),(0,r.kt)("p",null,"Before you getting start the local run, you need to make sure you already have installed the following software which SeaTunnel required:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://www.java.com/en/download/"},"Java")," (Java 8 or 11, other versions greater than Java 8 can theoretically work as well) installed and ",(0,r.kt)("inlineCode",{parentName:"li"},"JAVA_HOME")," set."),(0,r.kt)("li",{parentName:"ul"},"Download the engine, you can choose and download one of them from below as your favour, you could see more information about ",(0,r.kt)("a",{parentName:"li",href:"/zh-CN/docs/2.2.0-beta/faq#why-i-should-install-computing-engine-like-spark-or-flink"},"why we need engine in SeaTunnel")),(0,r.kt)("li",{parentName:"ul"},"Spark: Please ",(0,r.kt)("a",{parentName:"li",href:"https://spark.apache.org/downloads.html"},"download Spark")," first(",(0,r.kt)("strong",{parentName:"li"},"required version >= 2 and version < 3.x "),"). For more information you could\nsee ",(0,r.kt)("a",{parentName:"li",href:"https://spark.apache.org/docs/latest/spark-standalone.html#installing-spark-standalone-to-a-cluster"},"Getting Started: standalone")),(0,r.kt)("li",{parentName:"ul"},"Flink: Please ",(0,r.kt)("a",{parentName:"li",href:"https://flink.apache.org/downloads.html"},"download Flink")," first(",(0,r.kt)("strong",{parentName:"li"},"required version >= 1.12.0 and version < 1.14.x "),"). For more information you could see ",(0,r.kt)("a",{parentName:"li",href:"https://nightlies.apache.org/flink/flink-docs-release-1.14/docs/deployment/resource-providers/standalone/overview/"},"Getting Started: standalone"))),(0,r.kt)("h2",{id:"step-2-download-seatunnel"},"Step 2: Download SeaTunnel"),(0,r.kt)("p",null,"Enter the ",(0,r.kt)("a",{parentName:"p",href:"https://seatunnel.apache.org/download"},"seatunnel download page")," and download the latest version of distribute\npackage ",(0,r.kt)("inlineCode",{parentName:"p"},"seatunnel-<version>-bin.tar.gz")),(0,r.kt)("p",null,"Or you can download it by terminal"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'export version="2.2.0-beta"\nwget "https://archive.apache.org/dist/incubator/seatunnel/${version}/apache-seatunnel-incubating-${version}-bin.tar.gz"\ntar -xzvf "apache-seatunnel-incubating-${version}-bin.tar.gz"\n')),(0,r.kt)("h2",{id:"step-3-install-connectors-plugin"},"Step 3: Install connectors plugin"),(0,r.kt)("p",null,"Since 2.2.0-beta, the binary package does not provide connector dependencies by default, so when using it for the first time, we need to execute the following command to install the connector: (Of course, you can also manually download the connector from ","[Apache Maven Repository]","(",(0,r.kt)("a",{parentName:"p",href:"https://repo."},"https://repo.")," maven.apache.org/maven2/org/apache/seatunnel/ to download, then manually move to the connectors directory)."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"sh bin/install_plugin.sh 2.2.0-beta\n")),(0,r.kt)("p",null,"If you need to specify the version of the connector, take 2.2.0-beta as an example, we need to execute"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"sh bin/install_plugin.sh 2.2.0-beta\n")),(0,r.kt)("p",null,"Usually we don't need all the connector plugins, so you can specify the plugins you need by configuring ",(0,r.kt)("inlineCode",{parentName:"p"},"config/plugin_config"),", for example, you only need the ",(0,r.kt)("inlineCode",{parentName:"p"},"connector-console")," plugin, then you can modify plugin.properties as"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-plugin_config"},"--seatunnel-connectors--\nconnector-console\n--end--\n")),(0,r.kt)("p",null,"If we want our sample application to work properly, we need to add the following plugins"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-plugin_config"},"--seatunnel-connectors--\nconnector-fake\nconnector-console\n--end--\n")),(0,r.kt)("p",null,"You can find all supported connectors and corresponding plugin_config configuration names under ",(0,r.kt)("inlineCode",{parentName:"p"},"${SEATUNNEL_HOME}/connectors/plugins-mapping.properties"),"."),(0,r.kt)("h2",{id:"step-4-configure-seatunnel-application"},"Step 4: Configure SeaTunnel Application"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Configure SeaTunnel"),": Change the setting in ",(0,r.kt)("inlineCode",{parentName:"p"},"config/seatunnel-env.sh"),", it is base on the path your engine install at ",(0,r.kt)("a",{parentName:"p",href:"#prepare"},"prepare step two"),".\nChange ",(0,r.kt)("inlineCode",{parentName:"p"},"SPARK_HOME")," if you using Spark as your engine, or change ",(0,r.kt)("inlineCode",{parentName:"p"},"FLINK_HOME")," if you're using Flink."),(0,r.kt)("p",null,"Edit ",(0,r.kt)("inlineCode",{parentName:"p"},"config/seatunnel.streaming.conf.template"),", which determines the way and logic of data input, processing, and output after seatunnel is started.\nThe following is an example of the configuration file, which is the same as the example application mentioned above."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-hocon"},'env {\n  # You can set flink configuration here\n  execution.parallelism = 1\n  job.mode = "STREAMING"\n  #execution.checkpoint.interval = 10000\n  #execution.checkpoint.data-uri = "hdfs://localhost:9000/checkpoint"\n\n\n  # For Spark\n  #spark.app.name = "SeaTunnel"\n  #spark.executor.instances = 2\n  #spark.executor.cores = 1\n  #spark.executor.memory = "1g"\n  #spark.master = local\n}\n\nsource {\n    FakeSource {\n      result_table_name = "fake"\n      row.num = 16\n      schema = {\n        fields {\n          name = "string"\n          age = "int"\n        }\n      }\n    }\n}\n\ntransform {\n    sql {\n      sql = "select name,age from fake"\n    }\n}\n\nsink {\n  Console {}\n}\n\n')),(0,r.kt)("p",null,"More information about config please check ",(0,r.kt)("a",{parentName:"p",href:"../concept/config"},"config concept")),(0,r.kt)("h2",{id:"step-5-run-seatunnel-application"},"Step 5: Run SeaTunnel Application"),(0,r.kt)("p",null,"You could start the application by the following commands"),(0,r.kt)(l.Z,{groupId:"engine-type",defaultValue:"spark",values:[{label:"Spark",value:"spark"},{label:"Flink",value:"flink"}],mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"spark",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'cd "apache-seatunnel-incubating-${version}"\n./bin/start-seatunnel-spark-connector-v2.sh \\\n--master local[4] \\\n--deploy-mode client \\\n--config ./config/seatunnel.streaming.conf.template\n'))),(0,r.kt)(i.Z,{value:"flink",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'cd "apache-seatunnel-incubating-${version}"\n./bin/start-seatunnel-flink-connector-v2.sh \\\n--config ./config/seatunnel.streaming.conf.template\n')))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"See The Output"),": When you run the command, you could see its output in your console or in Flink/Spark UI, You can think this\nis a sign that the command ran successfully or not."),(0,r.kt)("p",null,"The SeaTunnel console will prints some logs as below:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"fields : name, age\ntypes : STRING, INT\nrow=1 : elWaB, 1984352560\nrow=2 : uAtnp, 762961563\nrow=3 : TQEIB, 2042675010\nrow=4 : DcFjo, 593971283\nrow=5 : SenEb, 2099913608\nrow=6 : DHjkg, 1928005856\nrow=7 : eScCM, 526029657\nrow=8 : sgOeE, 600878991\nrow=9 : gwdvw, 1951126920\nrow=10 : nSiKE, 488708928\nrow=11 : xubpl, 1420202810\nrow=12 : rHZqb, 331185742\nrow=13 : rciGD, 1112878259\nrow=14 : qLhdI, 1457046294\nrow=15 : ZTkRx, 1240668386\nrow=16 : SGZCr, 94186144\n")),(0,r.kt)("p",null,"If use Flink, The content printed in the TaskManager Stdout log of ",(0,r.kt)("inlineCode",{parentName:"p"},"flink WebUI"),"."),(0,r.kt)("h2",{id:"explore-more-build-in-examples"},"Explore More Build-in Examples"),(0,r.kt)("p",null,"Our local quick start is using one of the build-in example in directory ",(0,r.kt)("inlineCode",{parentName:"p"},"config"),", and we provider more than one out-of-box\nexample you could and feel free to have a try and make your hands dirty. All you have to do is change the started command\noption value in ",(0,r.kt)("a",{parentName:"p",href:"#run-seaTunnel-application"},"running application")," to the configuration you want to run, we use batch\ntemplate in ",(0,r.kt)("inlineCode",{parentName:"p"},"config")," as examples:"),(0,r.kt)(l.Z,{groupId:"engine-type",defaultValue:"spark",values:[{label:"Spark",value:"spark"},{label:"Flink",value:"flink"}],mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"spark",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'cd "apache-seatunnel-incubating-${version}"\n./bin/start-seatunnel-spark-connector-v2.sh \\\n--master local[4] \\\n--deploy-mode client \\\n--config ./config/spark.batch.conf.template\n'))),(0,r.kt)(i.Z,{value:"flink",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'cd "apache-seatunnel-incubating-${version}"\n./bin/start-seatunnel-flink-connector-v2.sh \\\n--config ./config/flink.batch.conf.template\n')))),(0,r.kt)("h2",{id:"whats-more"},"What's More"),(0,r.kt)("p",null,"For now, you are already take a quick look about SeaTunnel, you could see ",(0,r.kt)("a",{parentName:"p",href:"/category/connector"},"connector")," to find all\nsource and sink SeaTunnel supported. Or see ",(0,r.kt)("a",{parentName:"p",href:"/zh-CN/docs/2.2.0-beta/deployment"},"deployment")," if you want to submit your application in other\nkind of your engine cluster."))}h.isMDXComponent=!0}}]);