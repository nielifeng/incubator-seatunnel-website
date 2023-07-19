"use strict";(self.webpackChunkseatunnel_website=self.webpackChunkseatunnel_website||[]).push([[7964],{3905:function(e,n,t){t.d(n,{Zo:function(){return p},kt:function(){return d}});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var c=r.createContext({}),s=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},p=function(e){var n=s(e.components);return r.createElement(c.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),m=s(t),d=a,f=m["".concat(c,".").concat(d)]||m[d]||u[d]||o;return t?r.createElement(f,l(l({ref:n},p),{},{components:t})):r.createElement(f,l({ref:n},p))}));function d(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,l=new Array(o);l[0]=m;var i={};for(var c in n)hasOwnProperty.call(n,c)&&(i[c]=n[c]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var s=2;s<o;s++)l[s]=t[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},60732:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return i},contentTitle:function(){return c},metadata:function(){return s},assets:function(){return p},toc:function(){return u},default:function(){return d}});var r=t(87462),a=t(63366),o=(t(67294),t(3905)),l=["components"],i={},c="Sink Common Options",s={unversionedId:"connector-v2/sink/common-options",id:"connector-v2/sink/common-options",title:"Sink Common Options",description:"Common parameters of sink connectors",source:"@site/docs/connector-v2/sink/common-options.md",sourceDirName:"connector-v2/sink",slug:"/connector-v2/sink/common-options",permalink:"/docs/connector-v2/sink/common-options",editUrl:"https://github.com/apache/incubator-seatunnel-website/edit/main/docs/connector-v2/sink/common-options.md",tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"Vertica",permalink:"/docs/connector-v2/sink/Vertica"},next:{title:"Error Quick Reference Manual",permalink:"/docs/connector-v2/Error-Quick-Reference-Manual"}},p={},u=[{value:"source_table_name string",id:"source_table_name-string",level:3},{value:"parallelism int",id:"parallelism-int",level:3},{value:"Examples",id:"examples",level:2}],m={toc:u};function d(e){var n=e.components,t=(0,a.Z)(e,l);return(0,o.kt)("wrapper",(0,r.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"sink-common-options"},"Sink Common Options"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Common parameters of sink connectors")),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"name"),(0,o.kt)("th",{parentName:"tr",align:null},"type"),(0,o.kt)("th",{parentName:"tr",align:null},"required"),(0,o.kt)("th",{parentName:"tr",align:null},"default value"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"source_table_name"),(0,o.kt)("td",{parentName:"tr",align:null},"string"),(0,o.kt)("td",{parentName:"tr",align:null},"no"),(0,o.kt)("td",{parentName:"tr",align:null},"-")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"parallelism"),(0,o.kt)("td",{parentName:"tr",align:null},"int"),(0,o.kt)("td",{parentName:"tr",align:null},"no"),(0,o.kt)("td",{parentName:"tr",align:null},"-")))),(0,o.kt)("h3",{id:"source_table_name-string"},"source_table_name ","[string]"),(0,o.kt)("p",null,"When ",(0,o.kt)("inlineCode",{parentName:"p"},"source_table_name")," is not specified, the current plug-in processes the data set ",(0,o.kt)("inlineCode",{parentName:"p"},"dataset")," output by the previous plugin in the configuration file;"),(0,o.kt)("p",null,"When ",(0,o.kt)("inlineCode",{parentName:"p"},"source_table_name")," is specified, the current plug-in is processing the data set corresponding to this parameter."),(0,o.kt)("h3",{id:"parallelism-int"},"parallelism ","[int]"),(0,o.kt)("p",null,"When ",(0,o.kt)("inlineCode",{parentName:"p"},"parallelism")," is not specified, the ",(0,o.kt)("inlineCode",{parentName:"p"},"parallelism")," in env is used by default."),(0,o.kt)("p",null,"When parallelism is specified, it will override the parallelism in env."),(0,o.kt)("h2",{id:"examples"},"Examples"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'source {\n    FakeSourceStream {\n      parallelism = 2\n      result_table_name = "fake"\n      field_name = "name,age"\n    }\n}\n\ntransform {\n    Filter {\n      source_table_name = "fake"\n      fields = [name]\n      result_table_name = "fake_name"\n    }\n    Filter {\n      source_table_name = "fake"\n      fields = [age]\n      result_table_name = "fake_age"\n    }\n}\n\nsink {\n    Console {\n      source_table_name = "fake_name"\n    }\n    Console {\n      source_table_name = "fake_age"\n    }\n}\n')),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"If the job only have one source and one(or zero) transform and one sink, You do not need to specify ",(0,o.kt)("inlineCode",{parentName:"p"},"source_table_name")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"result_table_name")," for connector.\nIf the number of any operator in source, transform and sink is greater than 1, you must specify the ",(0,o.kt)("inlineCode",{parentName:"p"},"source_table_name")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"result_table_name")," for each connector in the job.")))}d.isMDXComponent=!0}}]);