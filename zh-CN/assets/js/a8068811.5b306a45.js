"use strict";(self.webpackChunkseatunnel_website=self.webpackChunkseatunnel_website||[]).push([[11791],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return f}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=a.createContext({}),s=function(e){var t=a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=s(e.components);return a.createElement(u.Provider,{value:t},e.children)},o={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,u=e.parentName,d=p(e,["components","mdxType","originalType","parentName"]),m=s(n),f=r,g=m["".concat(u,".").concat(f)]||m[f]||o[f]||l;return n?a.createElement(g,i(i({ref:t},d),{},{components:n})):a.createElement(g,i({ref:t},d))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=m;var p={};for(var u in t)hasOwnProperty.call(t,u)&&(p[u]=t[u]);p.originalType=e,p.mdxType="string"==typeof e?e:r,i[1]=p;for(var s=2;s<l;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},103:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return p},contentTitle:function(){return u},metadata:function(){return s},assets:function(){return d},toc:function(){return o},default:function(){return f}});var a=n(87462),r=n(63366),l=(n(67294),n(3905)),i=["components"],p={},u=void 0,s={unversionedId:"configuration/filter-plugins/Kv",id:"version-1.x/configuration/filter-plugins/Kv",title:"Kv",description:"Filter plugin : Kv",source:"@site/versioned_docs/version-1.x/configuration/filter-plugins/Kv.md",sourceDirName:"configuration/filter-plugins",slug:"/configuration/filter-plugins/Kv",permalink:"/zh-CN/docs/1.x/configuration/filter-plugins/Kv",editUrl:"https://github.com/apache/incubator-seatunnel-website/edit/main/versioned_docs/version-1.x/configuration/filter-plugins/Kv.md",tags:[],version:"1.x",frontMatter:{},sidebar:"docs",previous:{title:"Json",permalink:"/zh-CN/docs/1.x/configuration/filter-plugins/Json"},next:{title:"Lowercase",permalink:"/zh-CN/docs/1.x/configuration/filter-plugins/Lowercase"}},d={},o=[{value:"Filter plugin : Kv",id:"filter-plugin--kv",level:2},{value:"Description",id:"description",level:3},{value:"Options",id:"options",level:3},{value:"default_values array",id:"default_values-array",level:5},{value:"exclude_fields array",id:"exclude_fields-array",level:5},{value:"field_prefix string",id:"field_prefix-string",level:5},{value:"field_split string",id:"field_split-string",level:5},{value:"include_fields array",id:"include_fields-array",level:5},{value:"source_field string",id:"source_field-string",level:5},{value:"target_field string",id:"target_field-string",level:5},{value:"value_split string",id:"value_split-string",level:5},{value:"Examples",id:"examples",level:3}],m={toc:o};function f(e){var t=e.components,n=(0,r.Z)(e,i);return(0,l.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"filter-plugin--kv"},"Filter plugin : Kv"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Author: InterestingLab"),(0,l.kt)("li",{parentName:"ul"},"Homepage: ",(0,l.kt)("a",{parentName:"li",href:"https://interestinglab.github.io/seatunnel-docs"},"https://interestinglab.github.io/seatunnel-docs")),(0,l.kt)("li",{parentName:"ul"},"Version: 1.0.0")),(0,l.kt)("h3",{id:"description"},"Description"),(0,l.kt)("p",null,"Extract all Key-Values of the specified string field with configured ",(0,l.kt)("inlineCode",{parentName:"p"},"field_split"),", which are often used to parse the url parameter."),(0,l.kt)("h3",{id:"options"},"Options"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"name"),(0,l.kt)("th",{parentName:"tr",align:null},"type"),(0,l.kt)("th",{parentName:"tr",align:null},"required"),(0,l.kt)("th",{parentName:"tr",align:null},"default value"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"#default_values-array"},"default_values")),(0,l.kt)("td",{parentName:"tr",align:null},"array"),(0,l.kt)("td",{parentName:"tr",align:null},"no"),(0,l.kt)("td",{parentName:"tr",align:null},"[]")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"#exclude_fields-array"},"exclude_fields")),(0,l.kt)("td",{parentName:"tr",align:null},"array"),(0,l.kt)("td",{parentName:"tr",align:null},"no"),(0,l.kt)("td",{parentName:"tr",align:null},"[]")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"#field_prefix-string"},"field_prefix")),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"no"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"#field_split-string"},"field_split")),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"no"),(0,l.kt)("td",{parentName:"tr",align:null},"&")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"#include_fields-array"},"include_fields")),(0,l.kt)("td",{parentName:"tr",align:null},"array"),(0,l.kt)("td",{parentName:"tr",align:null},"no"),(0,l.kt)("td",{parentName:"tr",align:null},"[]")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"#source_field-string"},"source_field")),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"no"),(0,l.kt)("td",{parentName:"tr",align:null},"raw_message")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"#target_field-string"},"target_field")),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"no"),(0,l.kt)("td",{parentName:"tr",align:null},"_","_","root","_","_")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"#value_split-string"},"value_split")),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"no"),(0,l.kt)("td",{parentName:"tr",align:null},"=")))),(0,l.kt)("h5",{id:"default_values-array"},"default_values ","[array]"),(0,l.kt)("p",null,"Default values can be set by ",(0,l.kt)("inlineCode",{parentName:"p"},"default_values")," by ",(0,l.kt)("inlineCode",{parentName:"p"},"key=defalut_value"),"(key and value are separated by ",(0,l.kt)("inlineCode",{parentName:"p"},"="),")."),(0,l.kt)("p",null,"Multiple default values are specified as follows: ",(0,l.kt)("inlineCode",{parentName:"p"},'default_values = ["mykey1=123", "mykey2=seatunnel"]')),(0,l.kt)("h5",{id:"exclude_fields-array"},"exclude_fields ","[array]"),(0,l.kt)("p",null,"Fields in the ",(0,l.kt)("inlineCode",{parentName:"p"},"exclude_fields")," will be abandoned."),(0,l.kt)("h5",{id:"field_prefix-string"},"field_prefix ","[string]"),(0,l.kt)("p",null,"A string to prepend to all of the extracted keys."),(0,l.kt)("h5",{id:"field_split-string"},"field_split ","[string]"),(0,l.kt)("p",null,"A string of characters to use as single-character field delimiters for parsing key-value pairs."),(0,l.kt)("h5",{id:"include_fields-array"},"include_fields ","[array]"),(0,l.kt)("p",null,"An array specifying the parsed keys which should be added to the event."),(0,l.kt)("h5",{id:"source_field-string"},"source_field ","[string]"),(0,l.kt)("p",null,"Source field."),(0,l.kt)("h5",{id:"target_field-string"},"target_field ","[string]"),(0,l.kt)("p",null,"All extracted fields will be put into ",(0,l.kt)("inlineCode",{parentName:"p"},"target_field"),"."),(0,l.kt)("h5",{id:"value_split-string"},"value_split ","[string]"),(0,l.kt)("p",null,"A non-empty string of characters to use as single-character value delimiters for parsing key-value pairs."),(0,l.kt)("h3",{id:"examples"},"Examples"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"With ",(0,l.kt)("inlineCode",{parentName:"p"},"target_field")),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre"},'kv {\n    source_field = "message"\n    target_field = "kv_map"\n    field_split = "&"\n    value_split = "="\n}\n')),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Input"))),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre"},"+-----------------+\n|message         |\n+-----------------+\n|name=ricky&age=23|\n|name=gary&age=28 |\n+-----------------+\n")),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Output"))),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre"},"+-----------------+-----------------------------+\n|message          |kv_map                    |\n+-----------------+-----------------------------+\n|name=ricky&age=23|Map(name -> ricky, age -> 23)|\n|name=gary&age=28 |Map(name -> gary, age -> 28) |\n+-----------------+-----------------------------+\n")))),(0,l.kt)("ol",{start:2},(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Without ",(0,l.kt)("inlineCode",{parentName:"p"},"target_field")),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre"},'kv {\n        source_field = "message"\n        field_split = "&"\n        value_split = "="\n    }\n')),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Input"))),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre"},"+-----------------+\n|message         |\n+-----------------+\n|name=ricky&age=23|\n|name=gary&age=28 |\n+-----------------+\n")),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Output"))),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre"},"+-----------------+---+-----+\n|message         |age|name |\n+-----------------+---+-----+\n|name=ricky&age=23|23 |ricky|\n|name=gary&age=28 |28 |gary |\n+-----------------+---+-----+\n\n")))))}f.isMDXComponent=!0}}]);