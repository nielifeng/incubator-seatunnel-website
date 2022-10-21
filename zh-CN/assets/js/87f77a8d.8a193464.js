"use strict";(self.webpackChunkseatunnel_website=self.webpackChunkseatunnel_website||[]).push([[84999],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return d}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),m=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=m(e.components);return a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),u=m(n),d=r,k=u["".concat(s,".").concat(d)]||u[d]||p[d]||l;return n?a.createElement(k,i(i({ref:t},c),{},{components:n})):a.createElement(k,i({ref:t},c))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=u;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var m=2;m<l;m++)i[m]=n[m];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},17836:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return o},contentTitle:function(){return s},metadata:function(){return m},assets:function(){return c},toc:function(){return p},default:function(){return d}});var a=n(87462),r=n(63366),l=(n(67294),n(3905)),i=["components"],o={},s="Email",m={unversionedId:"connector-v2/sink/Email",id:"connector-v2/sink/Email",title:"Email",description:"Email source connector",source:"@site/docs/connector-v2/sink/Email.md",sourceDirName:"connector-v2/sink",slug:"/connector-v2/sink/Email",permalink:"/zh-CN/docs/connector-v2/sink/Email",editUrl:"https://github.com/apache/incubator-seatunnel-website/edit/main/docs/connector-v2/sink/Email.md",tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"Elasticsearch",permalink:"/zh-CN/docs/connector-v2/sink/Elasticsearch"},next:{title:"Enterprise WeChat",permalink:"/zh-CN/docs/connector-v2/sink/Enterprise-WeChat"}},c={},p=[{value:"Description",id:"description",level:2},{value:"Key features",id:"key-features",level:2},{value:"Options",id:"options",level:2},{value:"email_from_address string",id:"email_from_address-string",level:3},{value:"email_to_address string",id:"email_to_address-string",level:3},{value:"email_host string",id:"email_host-string",level:3},{value:"email_transport_protocol string",id:"email_transport_protocol-string",level:3},{value:"email_smtp_auth string",id:"email_smtp_auth-string",level:3},{value:"email_authorization_code string",id:"email_authorization_code-string",level:3},{value:"email_message_headline string",id:"email_message_headline-string",level:3},{value:"email_message_content string",id:"email_message_content-string",level:3},{value:"common options",id:"common-options",level:3},{value:"Example",id:"example",level:2},{value:"Changelog",id:"changelog",level:2},{value:"2.2.0-beta 2022-09-26",id:"220-beta-2022-09-26",level:3}],u={toc:p};function d(e){var t=e.components,n=(0,r.Z)(e,i);return(0,l.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"email"},"Email"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Email source connector")),(0,l.kt)("h2",{id:"description"},"Description"),(0,l.kt)("p",null,"Send the data as a file to email."),(0,l.kt)("p",null," The tested email version is 1.5.6."),(0,l.kt)("h2",{id:"key-features"},"Key features"),(0,l.kt)("ul",{className:"contains-task-list"},(0,l.kt)("li",{parentName:"ul",className:"task-list-item"},(0,l.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ",(0,l.kt)("a",{parentName:"li",href:"/zh-CN/docs/concept/connector-v2-features"},"exactly-once")),(0,l.kt)("li",{parentName:"ul",className:"task-list-item"},(0,l.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ",(0,l.kt)("a",{parentName:"li",href:"/zh-CN/docs/concept/connector-v2-features"},"schema projection"))),(0,l.kt)("h2",{id:"options"},"Options"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"name"),(0,l.kt)("th",{parentName:"tr",align:null},"type"),(0,l.kt)("th",{parentName:"tr",align:null},"required"),(0,l.kt)("th",{parentName:"tr",align:null},"default value"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"email_from_address"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"yes"),(0,l.kt)("td",{parentName:"tr",align:null},"-")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"email_to_address"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"yes"),(0,l.kt)("td",{parentName:"tr",align:null},"-")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"email_host"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"yes"),(0,l.kt)("td",{parentName:"tr",align:null},"-")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"email_transport_protocol"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"yes"),(0,l.kt)("td",{parentName:"tr",align:null},"-")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"email_smtp_auth"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"yes"),(0,l.kt)("td",{parentName:"tr",align:null},"-")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"email_authorization_code"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"yes"),(0,l.kt)("td",{parentName:"tr",align:null},"-")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"email_message_headline"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"yes"),(0,l.kt)("td",{parentName:"tr",align:null},"-")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"email_message_content"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"yes"),(0,l.kt)("td",{parentName:"tr",align:null},"-")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"common-options"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"no"),(0,l.kt)("td",{parentName:"tr",align:null},"-")))),(0,l.kt)("h3",{id:"email_from_address-string"},"email_from_address ","[string]"),(0,l.kt)("p",null,"Sender Email Address ."),(0,l.kt)("h3",{id:"email_to_address-string"},"email_to_address ","[string]"),(0,l.kt)("p",null,"Address to receive mail."),(0,l.kt)("h3",{id:"email_host-string"},"email_host ","[string]"),(0,l.kt)("p",null,"SMTP server to connect to."),(0,l.kt)("h3",{id:"email_transport_protocol-string"},"email_transport_protocol ","[string]"),(0,l.kt)("p",null,"The protocol to load the session ."),(0,l.kt)("h3",{id:"email_smtp_auth-string"},"email_smtp_auth ","[string]"),(0,l.kt)("p",null,"Whether to authenticate the customer."),(0,l.kt)("h3",{id:"email_authorization_code-string"},"email_authorization_code ","[string]"),(0,l.kt)("p",null,"authorization code,You can obtain the authorization code from the mailbox Settings."),(0,l.kt)("h3",{id:"email_message_headline-string"},"email_message_headline ","[string]"),(0,l.kt)("p",null,"The subject line of the entire message."),(0,l.kt)("h3",{id:"email_message_content-string"},"email_message_content ","[string]"),(0,l.kt)("p",null,"The body of the entire message."),(0,l.kt)("h3",{id:"common-options"},"common options"),(0,l.kt)("p",null,"Sink plugin common parameters, please refer to ",(0,l.kt)("a",{parentName:"p",href:"/zh-CN/docs/connector-v2/sink/common-options"},"Sink Common Options")," for details."),(0,l.kt)("h2",{id:"example"},"Example"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'\n EmailSink {\n      email_from_address = "xxxxxx@qq.com"\n      email_to_address = "xxxxxx@163.com"\n      email_host="smtp.qq.com"\n      email_transport_protocol="smtp"\n      email_smtp_auth="true"\n      email_authorization_code=""\n      email_message_headline=""\n      email_message_content=""\n   }\n\n')),(0,l.kt)("h2",{id:"changelog"},"Changelog"),(0,l.kt)("h3",{id:"220-beta-2022-09-26"},"2.2.0-beta 2022-09-26"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Add Email Sink Connector")))}d.isMDXComponent=!0}}]);