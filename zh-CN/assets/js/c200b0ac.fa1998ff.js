"use strict";(self.webpackChunkseatunnel_website=self.webpackChunkseatunnel_website||[]).push([[1747],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),u=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=u(e.components);return r.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,p=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),d=u(n),m=a,k=d["".concat(p,".").concat(m)]||d[m]||c[m]||l;return n?r.createElement(k,o(o({ref:t},s),{},{components:n})):r.createElement(k,o({ref:t},s))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=d;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var u=2;u<l;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},799:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return i},contentTitle:function(){return p},metadata:function(){return u},toc:function(){return s},default:function(){return d}});var r=n(7462),a=n(3366),l=(n(7294),n(3905)),o=["components"],i={},p=void 0,u={unversionedId:"configuration/input-plugins/Alluxio",id:"configuration/input-plugins/Alluxio",title:"Alluxio",description:"Input plugin : Alluxio [Static]",source:"@site/docs/configuration/input-plugins/Alluxio.md",sourceDirName:"configuration/input-plugins",slug:"/configuration/input-plugins/Alluxio",permalink:"/zh-CN/docs/configuration/input-plugins/Alluxio",editUrl:"https://github.com/apache/incubator-seatunnel-website/edit/main/docs/configuration/input-plugins/Alluxio.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Watermark",permalink:"/zh-CN/docs/configuration/filter-plugins/Watermark"},next:{title:"Elasticsearch",permalink:"/zh-CN/docs/configuration/input-plugins/Elasticsearch"}},s=[{value:"Input plugin : Alluxio Static",id:"input-plugin--alluxio-static",children:[{value:"Description",id:"description",children:[],level:3},{value:"Options",id:"options",children:[{value:"format string",id:"format-string",children:[],level:5},{value:"options object",id:"options-object",children:[],level:5},{value:"options.rowTag string",id:"optionsrowtag-string",children:[],level:5},{value:"path string",id:"path-string",children:[],level:5},{value:"common options string",id:"common-options-string",children:[],level:5}],level:3},{value:"Note",id:"note",children:[],level:3},{value:"Example",id:"example",children:[],level:3}],level:2}],c={toc:s};function d(e){var t=e.components,n=(0,a.Z)(e,o);return(0,l.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"input-plugin--alluxio-static"},"Input plugin : Alluxio ","[Static]"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Author: InterestingLab"),(0,l.kt)("li",{parentName:"ul"},"Homepage: ",(0,l.kt)("a",{parentName:"li",href:"https://interestinglab.github.io/seatunnel-docs"},"https://interestinglab.github.io/seatunnel-docs")),(0,l.kt)("li",{parentName:"ul"},"Version: 1.1.0")),(0,l.kt)("h3",{id:"description"},"Description"),(0,l.kt)("p",null,"\u4eceAlluxio\u6587\u4ef6\u4e2d\u8bfb\u53d6\u6570\u636e\u3002"),(0,l.kt)("h3",{id:"options"},"Options"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"name"),(0,l.kt)("th",{parentName:"tr",align:null},"type"),(0,l.kt)("th",{parentName:"tr",align:null},"required"),(0,l.kt)("th",{parentName:"tr",align:null},"default value"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"#format-string"},"format")),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"no"),(0,l.kt)("td",{parentName:"tr",align:null},"json")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"#options-object"},"options.*")),(0,l.kt)("td",{parentName:"tr",align:null},"object"),(0,l.kt)("td",{parentName:"tr",align:null},"no"),(0,l.kt)("td",{parentName:"tr",align:null},"-")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"#optionsrowTag-string"},"options.rowTag")),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"no"),(0,l.kt)("td",{parentName:"tr",align:null},"-")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"#path-string"},"path")),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"yes"),(0,l.kt)("td",{parentName:"tr",align:null},"-")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"#common-options-string"},"common-options")),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"yes"),(0,l.kt)("td",{parentName:"tr",align:null},"-")))),(0,l.kt)("h5",{id:"format-string"},"format ","[string]"),(0,l.kt)("p",null,"\u4eceAlluxio\u4e2d\u8bfb\u53d6\u6587\u4ef6\u7684\u683c\u5f0f\uff0c\u76ee\u524d\u652f\u6301",(0,l.kt)("inlineCode",{parentName:"p"},"csv"),"\u3001",(0,l.kt)("inlineCode",{parentName:"p"},"json"),"\u3001",(0,l.kt)("inlineCode",{parentName:"p"},"parquet")," \u3001",(0,l.kt)("inlineCode",{parentName:"p"},"xml"),"\u3001",(0,l.kt)("inlineCode",{parentName:"p"},"orc"),"\u548c ",(0,l.kt)("inlineCode",{parentName:"p"},"text"),"."),(0,l.kt)("h5",{id:"options-object"},"options ","[object]"),(0,l.kt)("p",null,"\u81ea\u5b9a\u4e49\u53c2\u6570\uff0c\u5f53",(0,l.kt)("inlineCode",{parentName:"p"},'format = "xml"'),"\u65f6\u5fc5\u987b\u8bbe\u7f6e",(0,l.kt)("inlineCode",{parentName:"p"},"optionss.rowTag"),"\uff0c\u914d\u7f6eXML\u683c\u5f0f\u6570\u636e\u7684Tag\uff0c\u5176\u4ed6\u53c2\u6570\u4e0d\u662f\u5fc5\u586b\u53c2\u6570\u3002"),(0,l.kt)("h5",{id:"optionsrowtag-string"},"options.rowTag ","[string]"),(0,l.kt)("p",null,"\u5f53format\u4e3axml\u5fc5\u987b\u8bbe\u7f6e",(0,l.kt)("inlineCode",{parentName:"p"},"optionss.rowTag"),"\uff0c\u914d\u7f6eXML\u683c\u5f0f\u6570\u636e\u7684Tag"),(0,l.kt)("h5",{id:"path-string"},"path ","[string]"),(0,l.kt)("p",null,"Alluxio\u5185\u5b58\u6587\u4ef6\u8def\u5f84\uff0c\u4ee5alluxio://\u5f00\u5934"),(0,l.kt)("h5",{id:"common-options-string"},"common options ","[string]"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"Input")," \u63d2\u4ef6\u901a\u7528\u53c2\u6570\uff0c\u8be6\u60c5\u53c2\u7167 ",(0,l.kt)("a",{parentName:"p",href:"/zh-cn/v1/configuration/input-plugin"},"Input Plugin")),(0,l.kt)("h3",{id:"note"},"Note"),(0,l.kt)("p",null,"\u5982\u679c\u4f7f\u7528zookeeper\u63a7\u5236alluxio\uff0c\u8bf7\u5c06\u4ee5\u4e0b\u8bed\u53e5\u52a0\u5165\u5230start-seatunnel.sh\u4e2d"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},'driverJavaOpts="-Dalluxio.user.file.writetype.default=CACHE_THROUGH -Dalluxio.zookeeper.address=your.zookeeper.address:zookeeper.port -Dalluxio.zookeeper.enabled=true"\nexecutorJavaOpts="-Dalluxio.user.file.writetype.default=CACHE_THROUGH -Dalluxio.zookeeper.address=your.zookeeper.address:zookeeper.port -Dalluxio.zookeeper.enabled=true"\n')),(0,l.kt)("p",null,"\u6216\u8005\u57281.5\u7248\u672c\u4e4b\u540e\uff0c\u53ef\u4ee5\u901a\u8fc7\u5728\u914d\u7f6e\u6587\u4ef6\u4e2d\u7684spark{}\u589e\u52a0\u4ee5\u4e0b\u53c2\u6570"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},'spark.driverJavaOpts="-Dalluxio.user.file.writetype.default=CACHE_THROUGH -Dalluxio.zookeeper.address=your.zookeeper.address:zookeeper.port -Dalluxio.zookeeper.enabled=true"\nspark.executorJavaOpts="-Dalluxio.user.file.writetype.default=CACHE_THROUGH -Dalluxio.zookeeper.address=your.zookeeper.address:zookeeper.port -Dalluxio.zookeeper.enabled=true"\n')),(0,l.kt)("h3",{id:"example"},"Example"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},'alluxio {\n    path = "alluxio:///var/seatunnel-logs"\n    result_table_name = "access_log"\n    format = "json"\n}\n')),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"\u4eceAlluxio\u4e2d\u8bfb\u53d6json\u6587\u4ef6\uff0c\u52a0\u8f7d\u5230seatunnel\u4e2d\u5f85\u540e\u7eed\u5904\u7406.")),(0,l.kt)("p",null,"\u6216\u8005\u53ef\u4ee5\u6307\u5b9a alluxio name service:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},'alluxio {\n    result_table_name = "access_log"\n    path = "alluxio://m2:19999/seatunnel-logs/access.log"\n}\n')),(0,l.kt)("p",null,"\u4e5f\u652f\u6301\u8bfb\u53d6XML\u683c\u5f0f\u7684\u6587\u4ef6:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},'alluxio {\n    result_table_name = "books"\n    path = "alluxio://m2:19999/seatunnel-logs/books.xml"\n    options.rowTag = "book"\n    format = "xml"\n}\n')))}d.isMDXComponent=!0}}]);