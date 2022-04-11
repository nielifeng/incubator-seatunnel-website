"use strict";(self.webpackChunkseatunnel_website=self.webpackChunkseatunnel_website||[]).push([[3367],{3905:function(t,e,n){n.d(e,{Zo:function(){return s},kt:function(){return c}});var r=n(7294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function o(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},l=Object.keys(t);for(r=0;r<l.length;r++)n=l[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(r=0;r<l.length;r++)n=l[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var p=r.createContext({}),u=function(t){var e=r.useContext(p),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},s=function(t){var e=u(t.components);return r.createElement(p.Provider,{value:e},t.children)},g={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},d=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,l=t.originalType,p=t.parentName,s=o(t,["components","mdxType","originalType","parentName"]),d=u(n),c=a,m=d["".concat(p,".").concat(c)]||d[c]||g[c]||l;return n?r.createElement(m,i(i({ref:e},s),{},{components:n})):r.createElement(m,i({ref:e},s))}));function c(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var l=n.length,i=new Array(l);i[0]=d;var o={};for(var p in e)hasOwnProperty.call(e,p)&&(o[p]=e[p]);o.originalType=t,o.mdxType="string"==typeof t?t:a,i[1]=o;for(var u=2;u<l;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},5888:function(t,e,n){n.r(e),n.d(e,{frontMatter:function(){return o},contentTitle:function(){return p},metadata:function(){return u},assets:function(){return s},toc:function(){return g},default:function(){return c}});var r=n(7462),a=n(3366),l=(n(7294),n(3905)),i=["components"],o={},p=void 0,u={unversionedId:"configuration/filter-plugins/Grok",id:"version-1.x/configuration/filter-plugins/Grok",title:"Grok",description:"Filter plugin : Grok",source:"@site/versioned_docs/version-1.x/configuration/filter-plugins/Grok.md",sourceDirName:"configuration/filter-plugins",slug:"/configuration/filter-plugins/Grok",permalink:"/zh-CN/docs/1.x/configuration/filter-plugins/Grok",editUrl:"https://github.com/apache/incubator-seatunnel-website/edit/main/versioned_docs/version-1.x/configuration/filter-plugins/Grok.md",tags:[],version:"1.x",frontMatter:{},sidebar:"docs",previous:{title:"Drop",permalink:"/zh-CN/docs/1.x/configuration/filter-plugins/Drop"},next:{title:"Join",permalink:"/zh-CN/docs/1.x/configuration/filter-plugins/Join"}},s={},g=[{value:"Filter plugin : Grok",id:"filter-plugin--grok",level:2},{value:"Description",id:"description",level:3},{value:"Options",id:"options",level:3},{value:"named_captures_only boolean",id:"named_captures_only-boolean",level:5},{value:"pattern string",id:"pattern-string",level:5},{value:"patterns_dir string",id:"patterns_dir-string",level:5},{value:"source_field string",id:"source_field-string",level:5},{value:"target_field string",id:"target_field-string",level:5},{value:"Example",id:"example",level:3}],d={toc:g};function c(t){var e=t.components,n=(0,a.Z)(t,i);return(0,l.kt)("wrapper",(0,r.Z)({},d,n,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"filter-plugin--grok"},"Filter plugin : Grok"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Author: InterestingLab"),(0,l.kt)("li",{parentName:"ul"},"Homepage: ",(0,l.kt)("a",{parentName:"li",href:"https://interestinglab.github.io/seatunnel-docs"},"https://interestinglab.github.io/seatunnel-docs")),(0,l.kt)("li",{parentName:"ul"},"Version: 1.0.0")),(0,l.kt)("h3",{id:"description"},"Description"),(0,l.kt)("p",null,"Parse arbitrary text into structured data with columns  using Grok Pattern. Please have a look at ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/InterestingLab/seatunnel/blob/master/plugins/grok/files/grok-patterns/grok-patterns"},"available grok pattern"),"."),(0,l.kt)("p",null,"You can also go to ",(0,l.kt)("a",{parentName:"p",href:"http://grokdebug.herokuapp.com"},"http://grokdebug.herokuapp.com")," to debug grok patterns if you need some hint for grok pattern syntax."),(0,l.kt)("h3",{id:"options"},"Options"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"name"),(0,l.kt)("th",{parentName:"tr",align:null},"type"),(0,l.kt)("th",{parentName:"tr",align:null},"required"),(0,l.kt)("th",{parentName:"tr",align:null},"default value"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"#named_captures_only-boolean"},"named_captures_only")),(0,l.kt)("td",{parentName:"tr",align:null},"boolean"),(0,l.kt)("td",{parentName:"tr",align:null},"no"),(0,l.kt)("td",{parentName:"tr",align:null},"true")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"#pattern-string"},"pattern")),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"yes"),(0,l.kt)("td",{parentName:"tr",align:null},"-")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"#patterns_dir-string"},"patterns_dir")),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"no"),(0,l.kt)("td",{parentName:"tr",align:null},"-")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"#source_field-string"},"source_field")),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"no"),(0,l.kt)("td",{parentName:"tr",align:null},"raw_message")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"#target_field-string"},"target_field")),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"no"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"root"))))),(0,l.kt)("h5",{id:"named_captures_only-boolean"},"named_captures_only ","[boolean]"),(0,l.kt)("p",null,"If true, only store named captures from grok."),(0,l.kt)("h5",{id:"pattern-string"},"pattern ","[string]"),(0,l.kt)("p",null,"Grok pattern."),(0,l.kt)("h5",{id:"patterns_dir-string"},"patterns_dir ","[string]"),(0,l.kt)("p",null,"The directory of pattern files. seatunnel ships by default with a bunch of ",(0,l.kt)("a",{parentName:"p",href:"%5Bgrok-patterns%E6%96%87%E4%BB%B6%5D(https://github.com/InterestingLab/seatunnel/tree/master/plugins/grok/files/grok-patterns)"},"patterns"),", so you don\u2019t necessarily need to configure this unless you want to add additional patterns."),(0,l.kt)("h5",{id:"source_field-string"},"source_field ","[string]"),(0,l.kt)("p",null,"Source field."),(0,l.kt)("h5",{id:"target_field-string"},"target_field ","[string]"),(0,l.kt)("p",null,"Target field."),(0,l.kt)("h3",{id:"example"},"Example"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},'grok {\n    source_field = "raw_message"\n    pattern = "%{WORD:name} is %{WORD:gender}, %{NUMBER:age} years old and weighs %{NUMBER:weight} kilograms"\n    target_field = "info_detail"\n}\n')),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Input"))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"+----------------------------------------------------+\n|raw_message                                         |\n+----------------------------------------------------+\n|gary is male, 25 years old and weighs 68.5 kilograms|\n|gary is male, 25 years old and weighs 68.5 kilograms|\n+----------------------------------------------------+\n")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Output"))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"+----------------------------------------------------+------------------------------------------------------------+\n|raw_message                                         |info_detail                                                 |\n+----------------------------------------------------+------------------------------------------------------------+\n|gary is male, 25 years old and weighs 68.5 kilograms|Map(age -> 25, gender -> male, name -> gary, weight -> 68.5)|\n|gary is male, 25 years old and weighs 68.5 kilograms|Map(age -> 25, gender -> male, name -> gary, weight -> 68.5)|\n+----------------------------------------------------+------------------------------------------------------------+\n\n")))}c.isMDXComponent=!0}}]);