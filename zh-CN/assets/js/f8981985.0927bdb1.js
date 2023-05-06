"use strict";(self.webpackChunkseatunnel_website=self.webpackChunkseatunnel_website||[]).push([[24635],{3905:function(e,t,n){n.d(t,{Zo:function(){return m},kt:function(){return u}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var d=a.createContext({}),p=function(e){var t=a.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},m=function(e){var t=p(e.components);return a.createElement(d.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,d=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),c=p(n),u=r,f=c["".concat(d,".").concat(u)]||c[u]||s[u]||i;return n?a.createElement(f,o(o({ref:t},m),{},{components:n})):a.createElement(f,o({ref:t},m))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=c;var l={};for(var d in t)hasOwnProperty.call(t,d)&&(l[d]=t[d]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var p=2;p<i;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},97041:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return d},metadata:function(){return p},assets:function(){return m},toc:function(){return s},default:function(){return u}});var a=n(87462),r=n(63366),i=(n(67294),n(3905)),o=["components"],l={},d="Intro to schema feature",p={unversionedId:"concept/schema-feature",id:"version-2.3.1/concept/schema-feature",title:"Intro to schema feature",description:"Why we need schema",source:"@site/versioned_docs/version-2.3.1/concept/schema-feature.md",sourceDirName:"concept",slug:"/concept/schema-feature",permalink:"/zh-CN/docs/2.3.1/concept/schema-feature",editUrl:"https://github.com/apache/incubator-seatunnel-website/edit/main/versioned_docs/version-2.3.1/concept/schema-feature.md",tags:[],version:"2.3.1",frontMatter:{},sidebar:"docs",previous:{title:"Intro To Connector V2 Features",permalink:"/zh-CN/docs/2.3.1/concept/connector-v2-features"},next:{title:"JobEnvConfig",permalink:"/zh-CN/docs/2.3.1/concept/JobEnvConfig"}},m={},s=[{value:"Why we need schema",id:"why-we-need-schema",level:2},{value:"What type supported at now",id:"what-type-supported-at-now",level:2},{value:"How to use schema",id:"how-to-use-schema",level:2},{value:"When we should use it or not",id:"when-we-should-use-it-or-not",level:2}],c={toc:s};function u(e){var t=e.components,n=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"intro-to-schema-feature"},"Intro to schema feature"),(0,i.kt)("h2",{id:"why-we-need-schema"},"Why we need schema"),(0,i.kt)("p",null,"Some NoSQL databases or message queue are not strongly limited schema, so the schema cannot be obtained through the api. At this time, a schema needs to be defined to convert to SeaTunnelRowType and obtain data."),(0,i.kt)("h2",{id:"what-type-supported-at-now"},"What type supported at now"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Data type"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"string"),(0,i.kt)("td",{parentName:"tr",align:"left"},"string")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"boolean"),(0,i.kt)("td",{parentName:"tr",align:"left"},"boolean")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"tinyint"),(0,i.kt)("td",{parentName:"tr",align:"left"},"-128 to 127 regular. 0 to 255 unsigned*. Specify the maximum number of digits in parentheses.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"smallint"),(0,i.kt)("td",{parentName:"tr",align:"left"},"-32768 to 32767 General. 0 to 65535 unsigned*. Specify the maximum number of digits in parentheses.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"int"),(0,i.kt)("td",{parentName:"tr",align:"left"},"All numbers from -2,147,483,648 to 2,147,483,647 are allowed.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"bigint"),(0,i.kt)("td",{parentName:"tr",align:"left"},"All numbers between -9,223,372,036,854,775,808 and 9,223,372,036,854,775,807 are allowed.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"float"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Float-precision numeric data from -1.79E+308 to 1.79E+308.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"double"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Double precision floating point. Handle most decimals.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"decimal"),(0,i.kt)("td",{parentName:"tr",align:"left"},"DOUBLE type stored as a string, allowing a fixed decimal point.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"null"),(0,i.kt)("td",{parentName:"tr",align:"left"},"null")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"bytes"),(0,i.kt)("td",{parentName:"tr",align:"left"},"bytes.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"date"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Only the date is stored. From January 1, 0001 to December 31, 9999.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"time"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Only store time. Accuracy is 100 nanoseconds.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"timestamp"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Stores a unique number that is updated whenever a row is created or modified. timestamp is based on the internal clock and does not correspond to real time. There can only be one timestamp variable per table.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"row"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Row type,can be nested.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"map"),(0,i.kt)("td",{parentName:"tr",align:"left"},"A Map is an object that maps keys to values. The key type includes ",(0,i.kt)("inlineCode",{parentName:"td"},"int")," ",(0,i.kt)("inlineCode",{parentName:"td"},"string")," ",(0,i.kt)("inlineCode",{parentName:"td"},"boolean")," ",(0,i.kt)("inlineCode",{parentName:"td"},"tinyint")," ",(0,i.kt)("inlineCode",{parentName:"td"},"smallint")," ",(0,i.kt)("inlineCode",{parentName:"td"},"bigint")," ",(0,i.kt)("inlineCode",{parentName:"td"},"float")," ",(0,i.kt)("inlineCode",{parentName:"td"},"double")," ",(0,i.kt)("inlineCode",{parentName:"td"},"decimal")," ",(0,i.kt)("inlineCode",{parentName:"td"},"date")," ",(0,i.kt)("inlineCode",{parentName:"td"},"time")," ",(0,i.kt)("inlineCode",{parentName:"td"},"timestamp")," ",(0,i.kt)("inlineCode",{parentName:"td"},"null")," , and the value type includes ",(0,i.kt)("inlineCode",{parentName:"td"},"int")," ",(0,i.kt)("inlineCode",{parentName:"td"},"string")," ",(0,i.kt)("inlineCode",{parentName:"td"},"boolean")," ",(0,i.kt)("inlineCode",{parentName:"td"},"tinyint")," ",(0,i.kt)("inlineCode",{parentName:"td"},"smallint")," ",(0,i.kt)("inlineCode",{parentName:"td"},"bigint")," ",(0,i.kt)("inlineCode",{parentName:"td"},"float")," ",(0,i.kt)("inlineCode",{parentName:"td"},"double")," ",(0,i.kt)("inlineCode",{parentName:"td"},"decimal")," ",(0,i.kt)("inlineCode",{parentName:"td"},"date")," ",(0,i.kt)("inlineCode",{parentName:"td"},"time")," ",(0,i.kt)("inlineCode",{parentName:"td"},"timestamp")," ",(0,i.kt)("inlineCode",{parentName:"td"},"null")," ",(0,i.kt)("inlineCode",{parentName:"td"},"array")," ",(0,i.kt)("inlineCode",{parentName:"td"},"map"),".")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"array"),(0,i.kt)("td",{parentName:"tr",align:"left"},"A array is a data type that represents a collection of elements. The element type includes ",(0,i.kt)("inlineCode",{parentName:"td"},"int")," ",(0,i.kt)("inlineCode",{parentName:"td"},"string")," ",(0,i.kt)("inlineCode",{parentName:"td"},"boolean")," ",(0,i.kt)("inlineCode",{parentName:"td"},"tinyint")," ",(0,i.kt)("inlineCode",{parentName:"td"},"smallint")," ",(0,i.kt)("inlineCode",{parentName:"td"},"bigint")," ",(0,i.kt)("inlineCode",{parentName:"td"},"float")," ",(0,i.kt)("inlineCode",{parentName:"td"},"double")," ",(0,i.kt)("inlineCode",{parentName:"td"},"array")," ",(0,i.kt)("inlineCode",{parentName:"td"},"map"),".")))),(0,i.kt)("h2",{id:"how-to-use-schema"},"How to use schema"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"schema")," defines the format of the data,it contains",(0,i.kt)("inlineCode",{parentName:"p"},"fields")," properties. ",(0,i.kt)("inlineCode",{parentName:"p"},"fields")," define the field properties,it's a K-V key-value pair, the Key is the field name and the value is field type. Here is an example."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'source {\n  FakeSource {\n    parallelism = 2\n    result_table_name = "fake"\n    row.num = 16\n    schema = {\n      fields {\n        id = bigint\n        c_map = "map<string, smallint>"\n        c_array = "array<tinyint>"\n        c_string = string\n        c_boolean = boolean\n        c_tinyint = tinyint\n        c_smallint = smallint\n        c_int = int\n        c_bigint = bigint\n        c_float = float\n        c_double = double\n        c_decimal = "decimal(2, 1)"\n        c_bytes = bytes\n        c_date = date\n        c_timestamp = timestamp\n      }\n    }\n  }\n}\n')),(0,i.kt)("h2",{id:"when-we-should-use-it-or-not"},"When we should use it or not"),(0,i.kt)("p",null,"If there is a ",(0,i.kt)("inlineCode",{parentName:"p"},"schema")," configuration project in Options,the connector can then customize the schema. Like ",(0,i.kt)("inlineCode",{parentName:"p"},"Fake")," ",(0,i.kt)("inlineCode",{parentName:"p"},"Pulsar")," ",(0,i.kt)("inlineCode",{parentName:"p"},"Http")," source connector etc."))}u.isMDXComponent=!0}}]);