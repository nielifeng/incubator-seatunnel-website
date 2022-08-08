"use strict";(self.webpackChunkseatunnel_website=self.webpackChunkseatunnel_website||[]).push([[376],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var r=n(7294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n,r,l={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var u=r.createContext({}),s=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,l=e.mdxType,a=e.originalType,u=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),c=s(n),m=l,k=c["".concat(u,".").concat(m)]||c[m]||d[m]||a;return n?r.createElement(k,i(i({ref:t},p),{},{components:n})):r.createElement(k,i({ref:t},p))}));function m(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var a=n.length,i=new Array(a);i[0]=c;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o.mdxType="string"==typeof e?e:l,i[1]=o;for(var s=2;s<a;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},7623:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return o},contentTitle:function(){return u},metadata:function(){return s},assets:function(){return p},toc:function(){return d},default:function(){return m}});var r=n(7462),l=n(3366),a=(n(7294),n(3905)),i=["components"],o={},u="Assert",s={unversionedId:"connector/sink/Assert",id:"connector/sink/Assert",title:"Assert",description:"Assert sink connector",source:"@site/docs/connector/sink/Assert.md",sourceDirName:"connector/sink",slug:"/connector/sink/Assert",permalink:"/zh-CN/docs/connector/sink/Assert",editUrl:"https://github.com/apache/incubator-seatunnel-website/edit/main/docs/connector/sink/Assert.md",tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"Sink",permalink:"/zh-CN/docs/category/sink"},next:{title:"Clickhouse",permalink:"/zh-CN/docs/connector/sink/Clickhouse"}},p={},d=[{value:"Description",id:"description",level:2},{value:"Options",id:"options",level:2},{value:"rules ConfigList",id:"rules-configlist",level:3},{value:"field_name string",id:"field_name-string",level:3},{value:"field_type string",id:"field_type-string",level:3},{value:"field_value ConfigList",id:"field_value-configlist",level:3},{value:"rule_type string",id:"rule_type-string",level:3},{value:"rule_value double",id:"rule_value-double",level:3},{value:"Example",id:"example",level:2}],c={toc:d};function m(e){var t=e.components,n=(0,l.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"assert"},"Assert"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Assert sink connector")),(0,a.kt)("h2",{id:"description"},"Description"),(0,a.kt)("p",null,"A flink sink plugin which can assert illegal data by user defined rules"),(0,a.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"Engine Supported and plugin name"),(0,a.kt)("ul",{parentName:"div",className:"contains-task-list"},(0,a.kt)("li",{parentName:"ul",className:"task-list-item"},(0,a.kt)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","Spark\uff1aAssert"),(0,a.kt)("li",{parentName:"ul",className:"task-list-item"},(0,a.kt)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","Flink: Assert")))),(0,a.kt)("h2",{id:"options"},"Options"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"name"),(0,a.kt)("th",{parentName:"tr",align:null},"type"),(0,a.kt)("th",{parentName:"tr",align:null},"required"),(0,a.kt)("th",{parentName:"tr",align:null},"default value"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"rules"),(0,a.kt)("td",{parentName:"tr",align:null},"ConfigList"),(0,a.kt)("td",{parentName:"tr",align:null},"yes"),(0,a.kt)("td",{parentName:"tr",align:null},"-")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"rules.field_name"),(0,a.kt)("td",{parentName:"tr",align:null},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"yes"),(0,a.kt)("td",{parentName:"tr",align:null},"-")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"rules.field_type"),(0,a.kt)("td",{parentName:"tr",align:null},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"no"),(0,a.kt)("td",{parentName:"tr",align:null},"-")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"rules.field_value"),(0,a.kt)("td",{parentName:"tr",align:null},"ConfigList"),(0,a.kt)("td",{parentName:"tr",align:null},"no"),(0,a.kt)("td",{parentName:"tr",align:null},"-")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"rules.field_value.rule_type"),(0,a.kt)("td",{parentName:"tr",align:null},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"no"),(0,a.kt)("td",{parentName:"tr",align:null},"-")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"rules.field_value.rule_value"),(0,a.kt)("td",{parentName:"tr",align:null},"double"),(0,a.kt)("td",{parentName:"tr",align:null},"no"),(0,a.kt)("td",{parentName:"tr",align:null},"-")))),(0,a.kt)("h3",{id:"rules-configlist"},"rules ","[ConfigList]"),(0,a.kt)("p",null,"Rule definition of user's available data.  Each rule represents one field validation."),(0,a.kt)("h3",{id:"field_name-string"},"field_name ","[string]"),(0,a.kt)("p",null,"field name\uff08string\uff09"),(0,a.kt)("h3",{id:"field_type-string"},"field_type ","[string]"),(0,a.kt)("p",null,"field type (string),  e.g. ",(0,a.kt)("inlineCode",{parentName:"p"},"string,boolean,byte,short,int,long,float,double,char,void,BigInteger,BigDecimal,Instant")),(0,a.kt)("h3",{id:"field_value-configlist"},"field_value ","[ConfigList]"),(0,a.kt)("p",null,"A list value rule define the data value validation"),(0,a.kt)("h3",{id:"rule_type-string"},"rule_type ","[string]"),(0,a.kt)("p",null,"The following rules are supported for now\n",(0,a.kt)("inlineCode",{parentName:"p"},"NOT_NULL,   // value can't be null\nMIN,        // define the minimum value of data\nMAX,        // define the maximum value of data\nMIN_LENGTH, // define the minimum string length of a string data\nMAX_LENGTH  // define the maximum string length of a string data")),(0,a.kt)("h3",{id:"rule_value-double"},"rule_value ","[double]"),(0,a.kt)("p",null,"the value related to rule type"),(0,a.kt)("h2",{id:"example"},"Example"),(0,a.kt)("p",null,"the whole config obey with ",(0,a.kt)("inlineCode",{parentName:"p"},"hocon")," style"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-hocon"},"\nAssert {\n   rules = \n        [{\n            field_name = name\n            field_type = string\n            field_value = [\n                {\n                    rule_type = NOT_NULL\n                },\n                {\n                    rule_type = MIN_LENGTH\n                    rule_value = 3\n                },\n                {\n                     rule_type = MAX_LENGTH\n                     rule_value = 5\n                }\n            ]\n        },{\n            field_name = age\n            field_type = int\n            field_value = [\n                {\n                    rule_type = NOT_NULL\n                },\n                {\n                    rule_type = MIN\n                    rule_value = 10\n                },\n                {\n                     rule_type = MAX\n                     rule_value = 20\n                }\n            ]\n        }\n        ]\n    \n}\n\n")))}m.isMDXComponent=!0}}]);