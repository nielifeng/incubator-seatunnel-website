"use strict";(self.webpackChunkseatunnel_website=self.webpackChunkseatunnel_website||[]).push([[68932],{3905:function(t,e,n){n.d(e,{Zo:function(){return m},kt:function(){return d}});var a=n(67294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function o(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},l=Object.keys(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var s=a.createContext({}),p=function(t){var e=a.useContext(s),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},m=function(t){var e=p(t.components);return a.createElement(s.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},c=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,l=t.originalType,s=t.parentName,m=o(t,["components","mdxType","originalType","parentName"]),c=p(n),d=r,k=c["".concat(s,".").concat(d)]||c[d]||u[d]||l;return n?a.createElement(k,i(i({ref:e},m),{},{components:n})):a.createElement(k,i({ref:e},m))}));function d(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=n.length,i=new Array(l);i[0]=c;var o={};for(var s in e)hasOwnProperty.call(e,s)&&(o[s]=e[s]);o.originalType=t,o.mdxType="string"==typeof t?t:r,i[1]=o;for(var p=2;p<l;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},62205:function(t,e,n){n.r(e),n.d(e,{frontMatter:function(){return o},contentTitle:function(){return s},metadata:function(){return p},assets:function(){return m},toc:function(){return u},default:function(){return d}});var a=n(87462),r=n(63366),l=(n(67294),n(3905)),i=["components"],o={},s="Email",p={unversionedId:"connector/sink/Email",id:"connector/sink/Email",title:"Email",description:"Email sink connector",source:"@site/docs/connector/sink/Email.md",sourceDirName:"connector/sink",slug:"/connector/sink/Email",permalink:"/docs/connector/sink/Email",editUrl:"https://github.com/apache/incubator-seatunnel-website/edit/main/docs/connector/sink/Email.md",tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"Elasticsearch",permalink:"/docs/connector/sink/Elasticsearch"},next:{title:"File",permalink:"/docs/connector/sink/File"}},m={},u=[{value:"Description",id:"description",level:2},{value:"Options",id:"options",level:2},{value:"subject string",id:"subject-string",level:3},{value:"from string",id:"from-string",level:3},{value:"to string",id:"to-string",level:3},{value:"bodyText string",id:"bodytext-string",level:3},{value:"bodyHtml string",id:"bodyhtml-string",level:3},{value:"cc string",id:"cc-string",level:3},{value:"bcc string",id:"bcc-string",level:3},{value:"host string",id:"host-string",level:3},{value:"port string",id:"port-string",level:3},{value:"password string",id:"password-string",level:3},{value:"limit string",id:"limit-string",level:3},{value:"use_ssl boolean",id:"use_ssl-boolean",level:3},{value:"use_tls boolean",id:"use_tls-boolean",level:3},{value:"Examples",id:"examples",level:2}],c={toc:u};function d(t){var e=t.components,n=(0,r.Z)(t,i);return(0,l.kt)("wrapper",(0,a.Z)({},c,n,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"email"},"Email"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Email sink connector")),(0,l.kt)("h2",{id:"description"},"Description"),(0,l.kt)("p",null,"Supports data output through ",(0,l.kt)("inlineCode",{parentName:"p"},"email attachments"),". The attachments are in the ",(0,l.kt)("inlineCode",{parentName:"p"},"xlsx")," format that supports ",(0,l.kt)("inlineCode",{parentName:"p"},"excel")," to open, which can be used to notify the task statistics results through email attachments."),(0,l.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},"Engine Supported and plugin name"),(0,l.kt)("ul",{parentName:"div",className:"contains-task-list"},(0,l.kt)("li",{parentName:"ul",className:"task-list-item"},(0,l.kt)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","Spark: Email"),(0,l.kt)("li",{parentName:"ul",className:"task-list-item"},(0,l.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Flink")))),(0,l.kt)("h2",{id:"options"},"Options"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"name"),(0,l.kt)("th",{parentName:"tr",align:null},"type"),(0,l.kt)("th",{parentName:"tr",align:null},"required"),(0,l.kt)("th",{parentName:"tr",align:null},"default value"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"subject"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"yes"),(0,l.kt)("td",{parentName:"tr",align:null},"-")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"from"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"yes"),(0,l.kt)("td",{parentName:"tr",align:null},"-")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"to"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"yes"),(0,l.kt)("td",{parentName:"tr",align:null},"-")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"bodyText"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"no"),(0,l.kt)("td",{parentName:"tr",align:null},"-")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"bodyHtml"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"no"),(0,l.kt)("td",{parentName:"tr",align:null},"-")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"cc"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"no"),(0,l.kt)("td",{parentName:"tr",align:null},"-")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"bcc"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"no"),(0,l.kt)("td",{parentName:"tr",align:null},"-")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"host"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"yes"),(0,l.kt)("td",{parentName:"tr",align:null},"-")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"port"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"yes"),(0,l.kt)("td",{parentName:"tr",align:null},"-")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"password"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"yes"),(0,l.kt)("td",{parentName:"tr",align:null},"-")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"limit"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"no"),(0,l.kt)("td",{parentName:"tr",align:null},"100000")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"use_ssl"),(0,l.kt)("td",{parentName:"tr",align:null},"boolean"),(0,l.kt)("td",{parentName:"tr",align:null},"no"),(0,l.kt)("td",{parentName:"tr",align:null},"false")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"use_tls"),(0,l.kt)("td",{parentName:"tr",align:null},"boolean"),(0,l.kt)("td",{parentName:"tr",align:null},"no"),(0,l.kt)("td",{parentName:"tr",align:null},"false")))),(0,l.kt)("h3",{id:"subject-string"},"subject ","[string]"),(0,l.kt)("p",null,"Email Subject"),(0,l.kt)("h3",{id:"from-string"},"from ","[string]"),(0,l.kt)("p",null,"Email sender"),(0,l.kt)("h3",{id:"to-string"},"to ","[string]"),(0,l.kt)("p",null,"Email recipients, multiple recipients separated by ",(0,l.kt)("inlineCode",{parentName:"p"},",")),(0,l.kt)("h3",{id:"bodytext-string"},"bodyText ","[string]"),(0,l.kt)("p",null,"Email content, text format"),(0,l.kt)("h3",{id:"bodyhtml-string"},"bodyHtml ","[string]"),(0,l.kt)("p",null,"Email content, hypertext content"),(0,l.kt)("h3",{id:"cc-string"},"cc ","[string]"),(0,l.kt)("p",null,"Email CC, multiple CCs separated by ",(0,l.kt)("inlineCode",{parentName:"p"},",")),(0,l.kt)("h3",{id:"bcc-string"},"bcc ","[string]"),(0,l.kt)("p",null,"Email Bcc, multiple Bccs separated by ",(0,l.kt)("inlineCode",{parentName:"p"},",")),(0,l.kt)("h3",{id:"host-string"},"host ","[string]"),(0,l.kt)("p",null,"Email server address, for example: ",(0,l.kt)("inlineCode",{parentName:"p"},"stmp.exmail.qq.com")),(0,l.kt)("h3",{id:"port-string"},"port ","[string]"),(0,l.kt)("p",null,"Email server port For example: ",(0,l.kt)("inlineCode",{parentName:"p"},"25")),(0,l.kt)("h3",{id:"password-string"},"password ","[string]"),(0,l.kt)("p",null,"The password of the email sender, the user name is the sender specified by ",(0,l.kt)("inlineCode",{parentName:"p"},"from")),(0,l.kt)("h3",{id:"limit-string"},"limit ","[string]"),(0,l.kt)("p",null,"The number of rows to include, the default is ",(0,l.kt)("inlineCode",{parentName:"p"},"100000")),(0,l.kt)("h3",{id:"use_ssl-boolean"},"use_ssl ","[boolean]"),(0,l.kt)("p",null,"The security properties for encrypted link to smtp server, the default is ",(0,l.kt)("inlineCode",{parentName:"p"},"false")),(0,l.kt)("h3",{id:"use_tls-boolean"},"use_tls ","[boolean]"),(0,l.kt)("p",null,"The security properties for encrypted link to smtp server, the default is ",(0,l.kt)("inlineCode",{parentName:"p"},"false")),(0,l.kt)("h2",{id:"examples"},"Examples"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'Email {\n    subject = "Report statistics",\n    from = "xxxx@qq.com",\n    to = "xxxxx1@qq.com,xxxxx2@qq.com",\n    cc = "xxxxx3@qq.com,xxxxx4@qq.com",\n    bcc = "xxxxx5@qq.com,xxxxx6@qq.com",\n    host= "stmp.exmail.qq.com",\n    port= "25",\n    password = "***********",\n    limit = "1000",\n    use_ssl = true\n}\n')))}d.isMDXComponent=!0}}]);