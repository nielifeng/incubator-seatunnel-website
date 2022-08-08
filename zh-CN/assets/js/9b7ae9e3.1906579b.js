"use strict";(self.webpackChunkseatunnel_website=self.webpackChunkseatunnel_website||[]).push([[5168],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return d}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),c=p(n),d=a,f=c["".concat(s,".").concat(d)]||c[d]||m[d]||l;return n?r.createElement(f,i(i({ref:t},u),{},{components:n})):r.createElement(f,i({ref:t},u))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=c;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var p=2;p<l;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},358:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return o},contentTitle:function(){return s},metadata:function(){return p},assets:function(){return u},toc:function(){return m},default:function(){return d}});var r=n(7462),a=n(3366),l=(n(7294),n(3905)),i=["components"],o={},s="Sql",p={unversionedId:"transform/sql",id:"transform/sql",title:"Sql",description:"Sql transform plugin",source:"@site/docs/transform/sql.md",sourceDirName:"transform",slug:"/transform/sql",permalink:"/zh-CN/docs/transform/sql",editUrl:"https://github.com/apache/incubator-seatunnel-website/edit/main/docs/transform/sql.md",tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"Split",permalink:"/zh-CN/docs/transform/split"},next:{title:"udf",permalink:"/zh-CN/docs/transform/udf"}},u={},m=[{value:"Description",id:"description",level:2},{value:"Options",id:"options",level:2},{value:"sql string",id:"sql-string",level:3},{value:"common options string",id:"common-options-string",level:3},{value:"Examples",id:"examples",level:2},{value:"Simple Select",id:"simple-select",level:3},{value:"Use UDF",id:"use-udf",level:3},{value:"Use UDAF",id:"use-udaf",level:3}],c={toc:m};function d(e){var t=e.components,n=(0,a.Z)(e,i);return(0,l.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"sql"},"Sql"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Sql transform plugin")),(0,l.kt)("h2",{id:"description"},"Description"),(0,l.kt)("p",null,"Use SQL to process data and support engine's UDF function."),(0,l.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},"This transform both supported by engine Spark and Flink."))),(0,l.kt)("h2",{id:"options"},"Options"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"name"),(0,l.kt)("th",{parentName:"tr",align:null},"type"),(0,l.kt)("th",{parentName:"tr",align:null},"required"),(0,l.kt)("th",{parentName:"tr",align:null},"default value"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"sql"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"yes"),(0,l.kt)("td",{parentName:"tr",align:null},"-")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"common-options"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"no"),(0,l.kt)("td",{parentName:"tr",align:null},"-")))),(0,l.kt)("h3",{id:"sql-string"},"sql ","[string]"),(0,l.kt)("p",null,"SQL statement, the table name used in SQL configured in the ",(0,l.kt)("inlineCode",{parentName:"p"},"Source")," or ",(0,l.kt)("inlineCode",{parentName:"p"},"Transform")," plugin"),(0,l.kt)("h3",{id:"common-options-string"},"common options ","[string]"),(0,l.kt)("p",null,"Transform plugin common parameters, please refer to ",(0,l.kt)("a",{parentName:"p",href:"/zh-CN/docs/transform/common-options"},"Transform Plugin")," for details"),(0,l.kt)("h2",{id:"examples"},"Examples"),(0,l.kt)("h3",{id:"simple-select"},"Simple Select"),(0,l.kt)("p",null,"Use the SQL plugin for field deletion. Only the ",(0,l.kt)("inlineCode",{parentName:"p"},"username")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"address")," fields are reserved, and the remaining fields will be discarded. ",(0,l.kt)("inlineCode",{parentName:"p"},"user_info")," is the ",(0,l.kt)("inlineCode",{parentName:"p"},"result_table_name")," configured by the previous plugin"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'sql {\n    sql = "select username, address from user_info",\n}\n')),(0,l.kt)("h3",{id:"use-udf"},"Use UDF"),(0,l.kt)("p",null,"Use SQL plugin for data processing, use ",(0,l.kt)("inlineCode",{parentName:"p"},"substring")," functions to intercept the ",(0,l.kt)("inlineCode",{parentName:"p"},"telephone")," field"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'sql {\n    sql = "select substring(telephone, 0, 10) from user_info",\n}\n')),(0,l.kt)("h3",{id:"use-udaf"},"Use UDAF"),(0,l.kt)("p",null,"Use SQL plugin for data aggregation, use avg functions to perform aggregation operations on the original data set, and take out the average value of the ",(0,l.kt)("inlineCode",{parentName:"p"},"age")," field"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'sql {\n    sql = "select avg(age) from user_info",\n    table_name = "user_info"\n}\n')))}d.isMDXComponent=!0}}]);