"use strict";(self.webpackChunkseatunnel_website=self.webpackChunkseatunnel_website||[]).push([[58164],{3905:function(e,n,a){a.d(n,{Zo:function(){return c},kt:function(){return d}});var t=a(67294);function r(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}function l(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,t)}return a}function o(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?l(Object(a),!0).forEach((function(n){r(e,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}))}return e}function u(e,n){if(null==e)return{};var a,t,r=function(e,n){if(null==e)return{};var a,t,r={},l=Object.keys(e);for(t=0;t<l.length;t++)a=l[t],n.indexOf(a)>=0||(r[a]=e[a]);return r}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(t=0;t<l.length;t++)a=l[t],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=t.createContext({}),i=function(e){var n=t.useContext(s),a=n;return e&&(a="function"==typeof e?e(n):o(o({},n),e)),a},c=function(e){var n=i(e.components);return t.createElement(s.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},m=t.forwardRef((function(e,n){var a=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,c=u(e,["components","mdxType","originalType","parentName"]),m=i(a),d=r,f=m["".concat(s,".").concat(d)]||m[d]||p[d]||l;return a?t.createElement(f,o(o({ref:n},c),{},{components:a})):t.createElement(f,o({ref:n},c))}));function d(e,n){var a=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var l=a.length,o=new Array(l);o[0]=m;var u={};for(var s in n)hasOwnProperty.call(n,s)&&(u[s]=n[s]);u.originalType=e,u.mdxType="string"==typeof e?e:r,o[1]=u;for(var i=2;i<l;i++)o[i]=a[i];return t.createElement.apply(null,o)}return t.createElement.apply(null,a)}m.displayName="MDXCreateElement"},58215:function(e,n,a){a.d(n,{Z:function(){return r}});var t=a(67294);function r(e){var n=e.children,a=e.hidden,r=e.className;return t.createElement("div",{role:"tabpanel",hidden:a,className:r},n)}},9877:function(e,n,a){a.d(n,{Z:function(){return c}});var t=a(87462),r=a(67294),l=a(72389),o=a(65450),u=a(86010),s="tabItem_LplD";function i(e){var n,a,l,i=e.lazy,c=e.block,p=e.defaultValue,m=e.values,d=e.groupId,f=e.className,b=r.Children.map(e.children,(function(e){if((0,r.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),k=null!=m?m:b.map((function(e){var n=e.props;return{value:n.value,label:n.label,attributes:n.attributes}})),v=(0,o.lx)(k,(function(e,n){return e.value===n.value}));if(v.length>0)throw new Error('Docusaurus error: Duplicate values "'+v.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var h=null===p?p:null!=(n=null!=p?p:null==(a=b.find((function(e){return e.props.default})))?void 0:a.props.value)?n:null==(l=b[0])?void 0:l.props.value;if(null!==h&&!k.some((function(e){return e.value===h})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+h+'" but none of its children has the corresponding value. Available values are: '+k.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var g=(0,o.UB)(),y=g.tabGroupChoices,T=g.setTabGroupChoices,N=(0,r.useState)(h),x=N[0],O=N[1],w=[],j=(0,o.o5)().blockElementScrollPositionUntilNextRender;if(null!=d){var S=y[d];null!=S&&S!==x&&k.some((function(e){return e.value===S}))&&O(S)}var E=function(e){var n=e.currentTarget,a=w.indexOf(n),t=k[a].value;t!==x&&(j(n),O(t),null!=d&&T(d,t))},Z=function(e){var n,a=null;switch(e.key){case"ArrowRight":var t=w.indexOf(e.currentTarget)+1;a=w[t]||w[0];break;case"ArrowLeft":var r=w.indexOf(e.currentTarget)-1;a=w[r]||w[w.length-1]}null==(n=a)||n.focus()};return r.createElement("div",{className:"tabs-container"},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,u.Z)("tabs",{"tabs--block":c},f)},k.map((function(e){var n=e.value,a=e.label,l=e.attributes;return r.createElement("li",(0,t.Z)({role:"tab",tabIndex:x===n?0:-1,"aria-selected":x===n,key:n,ref:function(e){return w.push(e)},onKeyDown:Z,onFocus:E,onClick:E},l,{className:(0,u.Z)("tabs__item",s,null==l?void 0:l.className,{"tabs__item--active":x===n})}),null!=a?a:n)}))),i?(0,r.cloneElement)(b.filter((function(e){return e.props.value===x}))[0],{className:"margin-vert--md"}):r.createElement("div",{className:"margin-vert--md"},b.map((function(e,n){return(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==x})}))))}function c(e){var n=(0,l.Z)();return r.createElement(i,(0,t.Z)({key:String(n)},e))}},93400:function(e,n,a){a.r(n),a.d(n,{frontMatter:function(){return i},contentTitle:function(){return c},metadata:function(){return p},assets:function(){return m},toc:function(){return d},default:function(){return b}});var t=a(87462),r=a(63366),l=(a(67294),a(3905)),o=a(9877),u=a(58215),s=["components"],i={},c="Command usage",p={unversionedId:"command/usage",id:"command/usage",title:"Command usage",description:"Command Entrypoint",source:"@site/docs/command/usage.mdx",sourceDirName:"command",slug:"/command/usage",permalink:"/zh-CN/docs/command/usage",editUrl:"https://github.com/apache/incubator-seatunnel-website/edit/main/docs/command/usage.mdx",tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"Split",permalink:"/zh-CN/docs/transform-v2/split"},next:{title:"SeaTunnel Engine",permalink:"/zh-CN/docs/seatunnel-engine/about"}},m={},d=[{value:"Command Entrypoint",id:"command-entrypoint",level:2},{value:"Options",id:"options",level:2},{value:"Example",id:"example",level:2}],f={toc:d};function b(e){var n=e.components,a=(0,r.Z)(e,s);return(0,l.kt)("wrapper",(0,t.Z)({},f,a,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"command-usage"},"Command usage"),(0,l.kt)("h2",{id:"command-entrypoint"},"Command Entrypoint"),(0,l.kt)(o.Z,{groupId:"engine-type",defaultValue:"spark2",values:[{label:"Spark 2",value:"spark2"},{label:"Spark 3",value:"spark3"},{label:"Flink 13 14",value:"flink13"},{label:"Flink 15 16",value:"flink15"}],mdxType:"Tabs"},(0,l.kt)(u.Z,{value:"spark2",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"bin/start-seatunnel-spark-2-connector-v2.sh\n"))),(0,l.kt)(u.Z,{value:"spark3",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"bin/start-seatunnel-spark-3-connector-v2.sh\n"))),(0,l.kt)(u.Z,{value:"flink13",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"bin/start-seatunnel-flink-13-connector-v2.sh\n"))),(0,l.kt)(u.Z,{value:"flink15",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"bin/start-seatunnel-flink-15-connector-v2.sh\n")))),(0,l.kt)("h2",{id:"options"},"Options"),(0,l.kt)(o.Z,{groupId:"engine-type",defaultValue:"spark2",values:[{label:"Spark 2",value:"spark2"},{label:"Spark 3",value:"spark3"},{label:"Flink 13 14",value:"flink13"},{label:"Flink 15 16",value:"flink15"}],mdxType:"Tabs"},(0,l.kt)(u.Z,{value:"spark2",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"Usage: start-seatunnel-spark-2-connector-v2.sh [options]\n  Options:\n    --check           Whether check config (default: false)\n    -c, --config      Config file\n    -e, --deploy-mode Spark deploy mode, support [cluster, client] (default: \n                      client) \n    -h, --help        Show the usage message\n    -m, --master      Spark master, support [spark://host:port, \n                      mesos://host:port, yarn, k8s://https://host:port, \n                      local], default local[*] (default: local[*])\n    -n, --name        SeaTunnel job name (default: SeaTunnel)\n    -i, --variable    Variable substitution, such as -i city=beijing, or -i \n                      date=20190318 (default: [])\n"))),(0,l.kt)(u.Z,{value:"spark3",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"Usage: start-seatunnel-spark-3-connector-v2.sh [options]\n  Options:\n    --check           Whether check config (default: false)\n    -c, --config      Config file\n    -e, --deploy-mode Spark deploy mode, support [cluster, client] (default: \n                      client) \n    -h, --help        Show the usage message\n    -m, --master      Spark master, support [spark://host:port, \n                      mesos://host:port, yarn, k8s://https://host:port, \n                      local], default local[*] (default: local[*])\n    -n, --name        SeaTunnel job name (default: SeaTunnel)\n    -i, --variable    Variable substitution, such as -i city=beijing, or -i \n                      date=20190318 (default: [])\n"))),(0,l.kt)(u.Z,{value:"flink13",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"Usage: start-seatunnel-flink-13-connector-v2.sh [options]\n  Options:\n    --check            Whether check config (default: false)\n    -c, --config       Config file\n    -e, --deploy-mode  Flink job deploy mode, support [run, run-application] \n                       (default: run)\n    -h, --help         Show the usage message\n    --master, --target Flink job submitted target master, support [local, \n                       remote, yarn-session, yarn-per-job, kubernetes-session, \n                       yarn-application, kubernetes-application]\n    -n, --name         SeaTunnel job name (default: SeaTunnel)\n    -i, --variable     Variable substitution, such as -i city=beijing, or -i \n                       date=20190318 (default: [])\n"))),(0,l.kt)(u.Z,{value:"flink15",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"Usage: start-seatunnel-flink-15-connector-v2.sh [options]\n  Options:\n    --check            Whether check config (default: false)\n    -c, --config       Config file\n    -e, --deploy-mode  Flink job deploy mode, support [run, run-application] \n                       (default: run)\n    -h, --help         Show the usage message\n    --master, --target Flink job submitted target master, support [local, \n                       remote, yarn-session, yarn-per-job, kubernetes-session, \n                       yarn-application, kubernetes-application]\n    -n, --name         SeaTunnel job name (default: SeaTunnel)\n    -i, --variable     Variable substitution, such as -i city=beijing, or -i \n                       date=20190318 (default: [])\n")))),(0,l.kt)("h2",{id:"example"},"Example"),(0,l.kt)(o.Z,{groupId:"engine-type",defaultValue:"spark2",values:[{label:"Spark 2",value:"spark2"},{label:"Spark 3",value:"spark3"},{label:"Flink 13 14",value:"flink13"},{label:"Flink 15 16",value:"flink15"}],mdxType:"Tabs"},(0,l.kt)(u.Z,{value:"spark2",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"bin/start-seatunnel-spark-2-connector-v2.sh --config config/v2.batch.config.template -m local -e client\n"))),(0,l.kt)(u.Z,{value:"spark3",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"bin/start-seatunnel-spark-3-connector-v2.sh --config config/v2.batch.config.template -m local -e client\n"))),(0,l.kt)(u.Z,{value:"flink13",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"bin/start-seatunnel-flink-13-connector-v2.sh --config config/v2.batch.config.template\n"))),(0,l.kt)(u.Z,{value:"flink15",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"bin/start-seatunnel-flink-15-connector-v2.sh --config config/v2.batch.config.template\n")))))}b.isMDXComponent=!0}}]);