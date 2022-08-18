"use strict";(self.webpackChunkseatunnel_website=self.webpackChunkseatunnel_website||[]).push([[9333],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return d}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),c=u(n),d=r,f=c["".concat(s,".").concat(d)]||c[d]||m[d]||l;return n?a.createElement(f,o(o({ref:t},p),{},{components:n})):a.createElement(f,o({ref:t},p))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,o=new Array(l);o[0]=c;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var u=2;u<l;u++)o[u]=n[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},79642:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return i},contentTitle:function(){return s},metadata:function(){return u},assets:function(){return p},toc:function(){return m},default:function(){return d}});var a=n(87462),r=n(63366),l=(n(67294),n(3905)),o=["components"],i={},s="NullRate",u={unversionedId:"transform/nullRate",id:"transform/nullRate",title:"NullRate",description:"NULL rate transform plugin",source:"@site/docs/transform/nullRate.md",sourceDirName:"transform",slug:"/transform/nullRate",permalink:"/docs/transform/nullRate",editUrl:"https://github.com/apache/incubator-seatunnel-website/edit/main/docs/transform/nullRate.md",tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"Json",permalink:"/docs/transform/json"},next:{title:"Nulltf",permalink:"/docs/transform/nulltf"}},p={},m=[{value:"Description",id:"description",level:2},{value:"Options",id:"options",level:2},{value:"field string_list",id:"field-string_list",level:3},{value:"rates double_list",id:"rates-double_list",level:3},{value:"throw_exception_enable boolean",id:"throw_exception_enable-boolean",level:3},{value:"save_to_table_name string",id:"save_to_table_name-string",level:3},{value:"common options string",id:"common-options-string",level:3},{value:"Examples",id:"examples",level:2}],c={toc:m};function d(e){var t=e.components,n=(0,r.Z)(e,o);return(0,l.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"nullrate"},"NullRate"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"NULL rate transform plugin")),(0,l.kt)("h2",{id:"description"},"Description"),(0,l.kt)("p",null,"When there is a large amount of data, the final result will always be greatly affected by the problem of data null value. Therefore, early null value detection is particularly important. For this reason, this function came into being"),(0,l.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},"This transform ",(0,l.kt)("strong",{parentName:"p"},"ONLY")," supported by Spark."))),(0,l.kt)("h2",{id:"options"},"Options"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"name"),(0,l.kt)("th",{parentName:"tr",align:null},"type"),(0,l.kt)("th",{parentName:"tr",align:null},"required"),(0,l.kt)("th",{parentName:"tr",align:null},"default value"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"fields"),(0,l.kt)("td",{parentName:"tr",align:null},"string_list"),(0,l.kt)("td",{parentName:"tr",align:null},"yes"),(0,l.kt)("td",{parentName:"tr",align:null},"-")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"rates"),(0,l.kt)("td",{parentName:"tr",align:null},"double_list"),(0,l.kt)("td",{parentName:"tr",align:null},"yes"),(0,l.kt)("td",{parentName:"tr",align:null},"-")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"throw_exception_enable"),(0,l.kt)("td",{parentName:"tr",align:null},"boolean"),(0,l.kt)("td",{parentName:"tr",align:null},"no"),(0,l.kt)("td",{parentName:"tr",align:null},"-")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"save_to_table_name"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"no"),(0,l.kt)("td",{parentName:"tr",align:null},"-")))),(0,l.kt)("h3",{id:"field-string_list"},"field ","[string_list]"),(0,l.kt)("p",null,"Which fields do you want to monitor ."),(0,l.kt)("h3",{id:"rates-double_list"},"rates ","[double_list]"),(0,l.kt)("p",null,"It is consistent with the number of fields. Double type indicates the set null rate value ."),(0,l.kt)("h3",{id:"throw_exception_enable-boolean"},"throw_exception_enable ","[boolean]"),(0,l.kt)("p",null,"Whether to throw an exception when it is greater than the set value. The default value is false ."),(0,l.kt)("h3",{id:"save_to_table_name-string"},"save_to_table_name ","[string]"),(0,l.kt)("p",null,"Whether the current verification value is output to the table. It is not output by defaul ."),(0,l.kt)("h3",{id:"common-options-string"},"common options ","[string]"),(0,l.kt)("p",null,"Transform plugin common parameters, please refer to ",(0,l.kt)("a",{parentName:"p",href:"/docs/transform/common-options"},"Transform Plugin")," for details"),(0,l.kt)("h2",{id:"examples"},"Examples"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'  nullRate {\n     fields = ["msg", "name"]\n     rates = [10.0,3.45]\n     save_to_table_name = "tmp"\n     throw_exception_enable = true\n  }\n}\n')),(0,l.kt)("p",null,"Use ",(0,l.kt)("inlineCode",{parentName:"p"},"NullRate")," in transform's Dataset."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'  transform {\n    NullRate {\n      fields = ["msg", "name"]\n      rates = [10.0,3.45]\n      save_to_table_name = "tmp"\n      throw_exception_enable = true\n    }\n  }\n')))}d.isMDXComponent=!0}}]);