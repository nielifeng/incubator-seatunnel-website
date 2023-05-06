"use strict";(self.webpackChunkseatunnel_website=self.webpackChunkseatunnel_website||[]).push([[61377],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},k=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),k=s(n),m=a,d=k["".concat(c,".").concat(m)]||k[m]||p[m]||o;return n?r.createElement(d,l(l({ref:t},u),{},{components:n})):r.createElement(d,l({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=k;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var s=2;s<o;s++)l[s]=n[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}k.displayName="MDXCreateElement"},15268:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return i},contentTitle:function(){return c},metadata:function(){return s},assets:function(){return u},toc:function(){return p},default:function(){return m}});var r=n(87462),a=n(63366),o=(n(67294),n(3905)),l=["components"],i={},c="Slack",s={unversionedId:"connector-v2/sink/Slack",id:"version-2.3.1/connector-v2/sink/Slack",title:"Slack",description:"Slack sink connector",source:"@site/versioned_docs/version-2.3.1/connector-v2/sink/Slack.md",sourceDirName:"connector-v2/sink",slug:"/connector-v2/sink/Slack",permalink:"/docs/2.3.1/connector-v2/sink/Slack",editUrl:"https://github.com/apache/incubator-seatunnel-website/edit/main/versioned_docs/version-2.3.1/connector-v2/sink/Slack.md",tags:[],version:"2.3.1",frontMatter:{},sidebar:"docs",previous:{title:"SftpFile",permalink:"/docs/2.3.1/connector-v2/sink/SftpFile"},next:{title:"Socket",permalink:"/docs/2.3.1/connector-v2/sink/Socket"}},u={},p=[{value:"Description",id:"description",level:2},{value:"Key features",id:"key-features",level:2},{value:"Options",id:"options",level:2},{value:"webhooks_url string",id:"webhooks_url-string",level:3},{value:"oauth_token string",id:"oauth_token-string",level:3},{value:"slack_channel string",id:"slack_channel-string",level:3},{value:"common options",id:"common-options",level:3},{value:"Example",id:"example",level:2},{value:"Changelog",id:"changelog",level:2},{value:"new version",id:"new-version",level:3}],k={toc:p};function m(e){var t=e.components,n=(0,a.Z)(e,l);return(0,o.kt)("wrapper",(0,r.Z)({},k,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"slack"},"Slack"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Slack sink connector")),(0,o.kt)("h2",{id:"description"},"Description"),(0,o.kt)("p",null,"Used to send data to Slack Channel. Both support streaming and batch mode."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"For example, if the data from upstream is ","[",(0,o.kt)("inlineCode",{parentName:"p"},"age: 12, name: huan"),"]",", the content send to socket server is the following: ",(0,o.kt)("inlineCode",{parentName:"p"},'{"name":"huan","age":17}'))),(0,o.kt)("h2",{id:"key-features"},"Key features"),(0,o.kt)("ul",{className:"contains-task-list"},(0,o.kt)("li",{parentName:"ul",className:"task-list-item"},(0,o.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ",(0,o.kt)("a",{parentName:"li",href:"/docs/2.3.1/concept/connector-v2-features"},"exactly-once"))),(0,o.kt)("h2",{id:"options"},"Options"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"name"),(0,o.kt)("th",{parentName:"tr",align:null},"type"),(0,o.kt)("th",{parentName:"tr",align:null},"required"),(0,o.kt)("th",{parentName:"tr",align:null},"default value"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"webhooks_url"),(0,o.kt)("td",{parentName:"tr",align:null},"String"),(0,o.kt)("td",{parentName:"tr",align:null},"Yes"),(0,o.kt)("td",{parentName:"tr",align:null},"-")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"oauth_token"),(0,o.kt)("td",{parentName:"tr",align:null},"String"),(0,o.kt)("td",{parentName:"tr",align:null},"Yes"),(0,o.kt)("td",{parentName:"tr",align:null},"-")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"slack_channel"),(0,o.kt)("td",{parentName:"tr",align:null},"String"),(0,o.kt)("td",{parentName:"tr",align:null},"Yes"),(0,o.kt)("td",{parentName:"tr",align:null},"-")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"common-options"),(0,o.kt)("td",{parentName:"tr",align:null}),(0,o.kt)("td",{parentName:"tr",align:null},"no"),(0,o.kt)("td",{parentName:"tr",align:null},"-")))),(0,o.kt)("h3",{id:"webhooks_url-string"},"webhooks_url ","[string]"),(0,o.kt)("p",null,"Slack webhook url"),(0,o.kt)("h3",{id:"oauth_token-string"},"oauth_token ","[string]"),(0,o.kt)("p",null,"Slack oauth token used for the actual authentication"),(0,o.kt)("h3",{id:"slack_channel-string"},"slack_channel ","[string]"),(0,o.kt)("p",null,"slack channel for data write"),(0,o.kt)("h3",{id:"common-options"},"common options"),(0,o.kt)("p",null,"Sink plugin common parameters, please refer to ",(0,o.kt)("a",{parentName:"p",href:"/docs/2.3.1/connector-v2/sink/common-options"},"Sink Common Options")," for details"),(0,o.kt)("h2",{id:"example"},"Example"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-hocon"},'sink {\n SlackSink {\n  webhooks_url = "https://hooks.slack.com/services/xxxxxxxxxxxx/xxxxxxxxxxxx/xxxxxxxxxxxxxxxx"\n  oauth_token = "xoxp-xxxxxxxxxx-xxxxxxxx-xxxxxxxxx-xxxxxxxxxxx"\n  slack_channel = "channel name"\n }\n}\n')),(0,o.kt)("h2",{id:"changelog"},"Changelog"),(0,o.kt)("h3",{id:"new-version"},"new version"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Add Slack Sink Connector")))}m.isMDXComponent=!0}}]);