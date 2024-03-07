"use strict";(self.webpackChunkseatunnel_website=self.webpackChunkseatunnel_website||[]).push([[54187],{3905:function(t,e,n){n.d(e,{Zo:function(){return d},kt:function(){return k}});var a=n(67294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function s(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},l=Object.keys(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var o=a.createContext({}),p=function(t){var e=a.useContext(o),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},d=function(t){var e=p(t.components);return a.createElement(o.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},m=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,l=t.originalType,o=t.parentName,d=s(t,["components","mdxType","originalType","parentName"]),m=p(n),k=r,c=m["".concat(o,".").concat(k)]||m[k]||u[k]||l;return n?a.createElement(c,i(i({ref:e},d),{},{components:n})):a.createElement(c,i({ref:e},d))}));function k(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=n.length,i=new Array(l);i[0]=m;var s={};for(var o in e)hasOwnProperty.call(e,o)&&(s[o]=e[o]);s.originalType=t,s.mdxType="string"==typeof t?t:r,i[1]=s;for(var p=2;p<l;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},10570:function(t,e,n){n.r(e),n.d(e,{frontMatter:function(){return s},contentTitle:function(){return o},metadata:function(){return p},assets:function(){return d},toc:function(){return u},default:function(){return k}});var a=n(87462),r=n(63366),l=(n(67294),n(3905)),i=["components"],s={},o="INFINI Easysearch",p={unversionedId:"connector-v2/sink/Easysearch",id:"connector-v2/sink/Easysearch",title:"INFINI Easysearch",description:"Support Those Engines",source:"@site/docs/connector-v2/sink/Easysearch.md",sourceDirName:"connector-v2/sink",slug:"/connector-v2/sink/Easysearch",permalink:"/docs/connector-v2/sink/Easysearch",editUrl:"https://github.com/apache/incubator-seatunnel-website/edit/main/docs/connector-v2/sink/Easysearch.md",tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"Doris",permalink:"/docs/connector-v2/sink/Doris"},next:{title:"Elasticsearch",permalink:"/docs/connector-v2/sink/Elasticsearch"}},d={},u=[{value:"Support Those Engines",id:"support-those-engines",level:2},{value:"Description",id:"description",level:2},{value:"Using Dependency",id:"using-dependency",level:2},{value:"Data Type Mapping",id:"data-type-mapping",level:2},{value:"Sink Options",id:"sink-options",level:2},{value:"hosts array",id:"hosts-array",level:3},{value:"index string",id:"index-string",level:3},{value:"primary_keys list",id:"primary_keys-list",level:3},{value:"key_delimiter string",id:"key_delimiter-string",level:3},{value:"username string",id:"username-string",level:3},{value:"password string",id:"password-string",level:3},{value:"max_retry_count int",id:"max_retry_count-int",level:3},{value:"max_batch_size int",id:"max_batch_size-int",level:3},{value:"tls_verify_certificate boolean",id:"tls_verify_certificate-boolean",level:3},{value:"tls_verify_hostname boolean",id:"tls_verify_hostname-boolean",level:3},{value:"tls_keystore_path string",id:"tls_keystore_path-string",level:3},{value:"tls_keystore_password string",id:"tls_keystore_password-string",level:3},{value:"tls_truststore_path string",id:"tls_truststore_path-string",level:3},{value:"tls_truststore_password string",id:"tls_truststore_password-string",level:3},{value:"common options",id:"common-options",level:3},{value:"Examples",id:"examples",level:2},{value:"Changelog",id:"changelog",level:2},{value:"2.3.4 2023-11-16",id:"234-2023-11-16",level:3}],m={toc:u};function k(t){var e=t.components,n=(0,r.Z)(t,i);return(0,l.kt)("wrapper",(0,a.Z)({},m,n,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"infini-easysearch"},"INFINI Easysearch"),(0,l.kt)("h2",{id:"support-those-engines"},"Support Those Engines"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Spark",(0,l.kt)("br",null),"\nFlink",(0,l.kt)("br",null),"\nSeaTunnel Zeta",(0,l.kt)("br",null))),(0,l.kt)("h2",{id:"description"},"Description"),(0,l.kt)("p",null,"A sink plugin which use send data to ",(0,l.kt)("inlineCode",{parentName:"p"},"INFINI Easysearch"),"."),(0,l.kt)("h2",{id:"using-dependency"},"Using Dependency"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Depenndency ",(0,l.kt)("a",{parentName:"p",href:"https://central.sonatype.com/artifact/com.infinilabs/easysearch-client"},"easysearch-client")),(0,l.kt)("h2",{parentName:"blockquote",id:"key-features"},"Key features")),(0,l.kt)("ul",{className:"contains-task-list"},(0,l.kt)("li",{parentName:"ul",className:"task-list-item"},(0,l.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ",(0,l.kt)("a",{parentName:"li",href:"/docs/concept/connector-v2-features"},"exactly-once")),(0,l.kt)("li",{parentName:"ul",className:"task-list-item"},(0,l.kt)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ",(0,l.kt)("a",{parentName:"li",href:"/docs/concept/connector-v2-features"},"cdc"))),(0,l.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},"Engine Supported"),(0,l.kt)("ul",{parentName:"div"},(0,l.kt)("li",{parentName:"ul"},"Supported all versions released by ",(0,l.kt)("a",{parentName:"li",href:"https://www.infini.com/download/?product=easysearch"},"INFINI Easysearch"),".")))),(0,l.kt)("h2",{id:"data-type-mapping"},"Data Type Mapping"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Easysearch Data Type"),(0,l.kt)("th",{parentName:"tr",align:null},"SeaTunnel Data Type"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"STRING",(0,l.kt)("br",null),"KEYWORD",(0,l.kt)("br",null),"TEXT"),(0,l.kt)("td",{parentName:"tr",align:null},"STRING")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"BOOLEAN"),(0,l.kt)("td",{parentName:"tr",align:null},"BOOLEAN")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"BYTE"),(0,l.kt)("td",{parentName:"tr",align:null},"BYTE")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"SHORT"),(0,l.kt)("td",{parentName:"tr",align:null},"SHORT")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"INTEGER"),(0,l.kt)("td",{parentName:"tr",align:null},"INT")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"LONG"),(0,l.kt)("td",{parentName:"tr",align:null},"LONG")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"FLOAT",(0,l.kt)("br",null),"HALF_FLOAT"),(0,l.kt)("td",{parentName:"tr",align:null},"FLOAT")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"DOUBLE"),(0,l.kt)("td",{parentName:"tr",align:null},"DOUBLE")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Date"),(0,l.kt)("td",{parentName:"tr",align:null},"LOCAL_DATE_TIME_TYPE")))),(0,l.kt)("h2",{id:"sink-options"},"Sink Options"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"name"),(0,l.kt)("th",{parentName:"tr",align:null},"type"),(0,l.kt)("th",{parentName:"tr",align:null},"required"),(0,l.kt)("th",{parentName:"tr",align:null},"default value"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"hosts"),(0,l.kt)("td",{parentName:"tr",align:null},"array"),(0,l.kt)("td",{parentName:"tr",align:null},"yes"),(0,l.kt)("td",{parentName:"tr",align:null},"-")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"index"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"yes"),(0,l.kt)("td",{parentName:"tr",align:null},"-")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"primary_keys"),(0,l.kt)("td",{parentName:"tr",align:null},"list"),(0,l.kt)("td",{parentName:"tr",align:null},"no"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"key_delimiter"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"no"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"_"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"username"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"no"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"password"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"no"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"max_retry_count"),(0,l.kt)("td",{parentName:"tr",align:null},"int"),(0,l.kt)("td",{parentName:"tr",align:null},"no"),(0,l.kt)("td",{parentName:"tr",align:null},"3")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"max_batch_size"),(0,l.kt)("td",{parentName:"tr",align:null},"int"),(0,l.kt)("td",{parentName:"tr",align:null},"no"),(0,l.kt)("td",{parentName:"tr",align:null},"10")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"tls_verify_certificate"),(0,l.kt)("td",{parentName:"tr",align:null},"boolean"),(0,l.kt)("td",{parentName:"tr",align:null},"no"),(0,l.kt)("td",{parentName:"tr",align:null},"true")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"tls_verify_hostnames"),(0,l.kt)("td",{parentName:"tr",align:null},"boolean"),(0,l.kt)("td",{parentName:"tr",align:null},"no"),(0,l.kt)("td",{parentName:"tr",align:null},"true")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"tls_keystore_path"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"no"),(0,l.kt)("td",{parentName:"tr",align:null},"-")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"tls_keystore_password"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"no"),(0,l.kt)("td",{parentName:"tr",align:null},"-")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"tls_truststore_path"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"no"),(0,l.kt)("td",{parentName:"tr",align:null},"-")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"tls_truststore_password"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"no"),(0,l.kt)("td",{parentName:"tr",align:null},"-")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"common-options"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"no"),(0,l.kt)("td",{parentName:"tr",align:null},"-")))),(0,l.kt)("h3",{id:"hosts-array"},"hosts ","[array]"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"INFINI Easysearch")," cluster http address, the format is ",(0,l.kt)("inlineCode",{parentName:"p"},"host:port")," , allowing multiple hosts to be specified. Such as ",(0,l.kt)("inlineCode",{parentName:"p"},'["host1:9200", "host2:9200"]'),"."),(0,l.kt)("h3",{id:"index-string"},"index ","[string]"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"INFINI Easysearch"),"  ",(0,l.kt)("inlineCode",{parentName:"p"},"index")," name.Index support contains variables of field name,such as ",(0,l.kt)("inlineCode",{parentName:"p"},"seatunnel_${age}"),",and the field must appear at seatunnel row.\nIf not, we will treat it as a normal index."),(0,l.kt)("h3",{id:"primary_keys-list"},"primary_keys ","[list]"),(0,l.kt)("p",null,"Primary key fields used to generate the document ",(0,l.kt)("inlineCode",{parentName:"p"},"_id"),", this is cdc required options."),(0,l.kt)("h3",{id:"key_delimiter-string"},"key_delimiter ","[string]"),(0,l.kt)("p",null,'Delimiter for composite keys ("_" by default), e.g., "$" would result in document ',(0,l.kt)("inlineCode",{parentName:"p"},"_id"),' "KEY1$KEY2$KEY3".'),(0,l.kt)("h3",{id:"username-string"},"username ","[string]"),(0,l.kt)("p",null,"security username"),(0,l.kt)("h3",{id:"password-string"},"password ","[string]"),(0,l.kt)("p",null,"security password"),(0,l.kt)("h3",{id:"max_retry_count-int"},"max_retry_count ","[int]"),(0,l.kt)("p",null,"one bulk request max try size"),(0,l.kt)("h3",{id:"max_batch_size-int"},"max_batch_size ","[int]"),(0,l.kt)("p",null,"batch bulk doc max size"),(0,l.kt)("h3",{id:"tls_verify_certificate-boolean"},"tls_verify_certificate ","[boolean]"),(0,l.kt)("p",null,"Enable certificates validation for HTTPS endpoints"),(0,l.kt)("h3",{id:"tls_verify_hostname-boolean"},"tls_verify_hostname ","[boolean]"),(0,l.kt)("p",null,"Enable hostname validation for HTTPS endpoints"),(0,l.kt)("h3",{id:"tls_keystore_path-string"},"tls_keystore_path ","[string]"),(0,l.kt)("p",null,"The path to the PEM or JKS key store. This file must be readable by the operating system user running SeaTunnel."),(0,l.kt)("h3",{id:"tls_keystore_password-string"},"tls_keystore_password ","[string]"),(0,l.kt)("p",null,"The key password for the key store specified"),(0,l.kt)("h3",{id:"tls_truststore_path-string"},"tls_truststore_path ","[string]"),(0,l.kt)("p",null,"The path to PEM or JKS trust store. This file must be readable by the operating system user running SeaTunnel."),(0,l.kt)("h3",{id:"tls_truststore_password-string"},"tls_truststore_password ","[string]"),(0,l.kt)("p",null,"The key password for the trust store specified"),(0,l.kt)("h3",{id:"common-options"},"common options"),(0,l.kt)("p",null,"Sink plugin common parameters, please refer to ",(0,l.kt)("a",{parentName:"p",href:"/docs/connector-v2/sink/common-options"},"Sink Common Options")," for details"),(0,l.kt)("h2",{id:"examples"},"Examples"),(0,l.kt)("p",null,"Simple"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'sink {\n    Easysearch {\n        hosts = ["localhost:9200"]\n        index = "seatunnel-${age}"\n    }\n}\n')),(0,l.kt)("p",null,"CDC(Change data capture) event"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'sink {\n    Easysearch {\n        hosts = ["localhost:9200"]\n        index = "seatunnel-${age}"\n        \n        # cdc required options\n        primary_keys = ["key1", "key2", ...]\n    }\n}\n')),(0,l.kt)("p",null,"SSL (Disable certificates validation)"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-hocon"},'sink {\n    Easysearch {\n        hosts = ["https://localhost:9200"]\n        username = "admin"\n        password = "admin"\n        \n        tls_verify_certificate = false\n    }\n}\n')),(0,l.kt)("p",null,"SSL (Disable hostname validation)"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-hocon"},'sink {\n    Easysearch {\n        hosts = ["https://localhost:9200"]\n        username = "admin"\n        password = "admin"\n        \n        tls_verify_hostname = false\n    }\n}\n')),(0,l.kt)("p",null,"SSL (Enable certificates validation)"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-hocon"},'sink {\n    Easysearch {\n        hosts = ["https://localhost:9200"]\n        username = "admin"\n        password = "admin"\n        \n        tls_keystore_path = "${your Easysearch home}/config/certs/http.p12"\n        tls_keystore_password = "${your password}"\n    }\n}\n')),(0,l.kt)("h2",{id:"changelog"},"Changelog"),(0,l.kt)("h3",{id:"234-2023-11-16"},"2.3.4 2023-11-16"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Add Easysearch Sink Connector"),(0,l.kt)("li",{parentName:"ul"},"Support http/https protocol"),(0,l.kt)("li",{parentName:"ul"},"Support CDC write DELETE/UPDATE/INSERT events")))}k.isMDXComponent=!0}}]);