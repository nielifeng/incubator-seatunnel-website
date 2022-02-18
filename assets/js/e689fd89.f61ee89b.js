"use strict";(self.webpackChunkseatunnel_website=self.webpackChunkseatunnel_website||[]).push([[9555],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return c}});var r=n(7294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n,r,l={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var o=r.createContext({}),p=function(e){var t=r.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=p(e.components);return r.createElement(o.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,l=e.mdxType,a=e.originalType,o=e.parentName,s=u(e,["components","mdxType","originalType","parentName"]),m=p(n),c=l,k=m["".concat(o,".").concat(c)]||m[c]||d[c]||a;return n?r.createElement(k,i(i({ref:t},s),{},{components:n})):r.createElement(k,i({ref:t},s))}));function c(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var a=n.length,i=new Array(a);i[0]=m;var u={};for(var o in t)hasOwnProperty.call(t,o)&&(u[o]=t[o]);u.originalType=e,u.mdxType="string"==typeof e?e:l,i[1]=u;for(var p=2;p<a;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},5248:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return u},contentTitle:function(){return o},metadata:function(){return p},toc:function(){return s},default:function(){return m}});var r=n(7462),l=n(3366),a=(n(7294),n(3905)),i=["components"],u={},o="InfluxDB",p={unversionedId:"flink/configuration/sink-plugins/InfluxDb",id:"flink/configuration/sink-plugins/InfluxDb",title:"InfluxDB",description:"Sink plugin: InfluxDB [Flink]",source:"@site/docs/flink/configuration/sink-plugins/InfluxDb.md",sourceDirName:"flink/configuration/sink-plugins",slug:"/flink/configuration/sink-plugins/InfluxDb",permalink:"/docs/flink/configuration/sink-plugins/InfluxDb",editUrl:"https://github.com/apache/incubator-seatunnel-website/edit/main/docs/flink/configuration/sink-plugins/InfluxDb.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"File",permalink:"/docs/flink/configuration/sink-plugins/File"},next:{title:"Jdbc",permalink:"/docs/flink/configuration/sink-plugins/Jdbc"}},s=[{value:"Description",id:"description",children:[],level:2},{value:"Options",id:"options",children:[{value:"server_url String",id:"server_url-string",children:[],level:3},{value:"username String",id:"username-string",children:[],level:3},{value:"password String",id:"password-string",children:[],level:3},{value:"datasource String",id:"datasource-string",children:[],level:3},{value:"measurement String",id:"measurement-string",children:[],level:3},{value:"tags List<String>",id:"tags-liststring",children:[],level:3},{value:"fields List<String>",id:"fields-liststring",children:[],level:3},{value:"parallelism Int",id:"parallelism-int",children:[],level:3}],level:2},{value:"Example",id:"example",children:[{value:"Simple",id:"simple",children:[],level:3},{value:"Auth",id:"auth",children:[],level:3}],level:2}],d={toc:s};function m(e){var t=e.components,n=(0,l.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"influxdb"},"InfluxDB"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Sink plugin: InfluxDB ","[Flink]")),(0,a.kt)("h2",{id:"description"},"Description"),(0,a.kt)("p",null,"Write data to InfluxDB."),(0,a.kt)("h2",{id:"options"},"Options"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"name"),(0,a.kt)("th",{parentName:"tr",align:null},"type"),(0,a.kt)("th",{parentName:"tr",align:null},"required"),(0,a.kt)("th",{parentName:"tr",align:null},"default value"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"server_url"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"String")),(0,a.kt)("td",{parentName:"tr",align:null},"yes"),(0,a.kt)("td",{parentName:"tr",align:null},"-")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"username"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"String")),(0,a.kt)("td",{parentName:"tr",align:null},"no"),(0,a.kt)("td",{parentName:"tr",align:null},"-")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"password"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"String")),(0,a.kt)("td",{parentName:"tr",align:null},"no"),(0,a.kt)("td",{parentName:"tr",align:null},"-")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"database"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"String")),(0,a.kt)("td",{parentName:"tr",align:null},"yes"),(0,a.kt)("td",{parentName:"tr",align:null},"-")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"measurement"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"String")),(0,a.kt)("td",{parentName:"tr",align:null},"yes"),(0,a.kt)("td",{parentName:"tr",align:null},"-")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"tags"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"List<String>")),(0,a.kt)("td",{parentName:"tr",align:null},"yes"),(0,a.kt)("td",{parentName:"tr",align:null},"-")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"fields"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"List<String>")),(0,a.kt)("td",{parentName:"tr",align:null},"yes"),(0,a.kt)("td",{parentName:"tr",align:null},"-")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"parallelism"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"Int")),(0,a.kt)("td",{parentName:"tr",align:null},"no"),(0,a.kt)("td",{parentName:"tr",align:null},"-")))),(0,a.kt)("h3",{id:"server_url-string"},"server_url ","[",(0,a.kt)("inlineCode",{parentName:"h3"},"String"),"]"),(0,a.kt)("p",null,"The URL of InfluxDB Server."),(0,a.kt)("h3",{id:"username-string"},"username ","[",(0,a.kt)("inlineCode",{parentName:"h3"},"String"),"]"),(0,a.kt)("p",null,"The username of InfluxDB Server."),(0,a.kt)("h3",{id:"password-string"},"password ","[",(0,a.kt)("inlineCode",{parentName:"h3"},"String"),"]"),(0,a.kt)("p",null,"The password of InfluxDB Server."),(0,a.kt)("h3",{id:"datasource-string"},"datasource ","[",(0,a.kt)("inlineCode",{parentName:"h3"},"String"),"]"),(0,a.kt)("p",null,"The DataSource name in InfluxDB."),(0,a.kt)("h3",{id:"measurement-string"},"measurement ","[",(0,a.kt)("inlineCode",{parentName:"h3"},"String"),"]"),(0,a.kt)("p",null,"The Measurement name in InfluxDB."),(0,a.kt)("h3",{id:"tags-liststring"},"tags ","[",(0,a.kt)("inlineCode",{parentName:"h3"},"List<String>"),"]"),(0,a.kt)("p",null,"The list of Tag in InfluxDB."),(0,a.kt)("h3",{id:"fields-liststring"},"fields ","[",(0,a.kt)("inlineCode",{parentName:"h3"},"List<String>"),"]"),(0,a.kt)("p",null,"The list of Field in InfluxDB."),(0,a.kt)("h3",{id:"parallelism-int"},"parallelism ","[",(0,a.kt)("inlineCode",{parentName:"h3"},"Int"),"]"),(0,a.kt)("p",null,"The parallelism of an individual operator, for InfluxDbSink"),(0,a.kt)("h2",{id:"example"},"Example"),(0,a.kt)("h3",{id:"simple"},"Simple"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-hocon"},'InfluxDbSink {\n  server_url = "http://127.0.0.1:8086/"\n  database = "influxdb"\n  measurement = "m"\n  tags = ["country", "city"]\n  fields = ["count"]\n}\n')),(0,a.kt)("h3",{id:"auth"},"Auth"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-hocon"},'InfluxDbSink {\n  server_url = "http://127.0.0.1:8086/"\n  username = "admin"\n  password = "password"\n  database = "influxdb"\n  measurement = "m"\n  tags = ["country", "city"]\n  fields = ["count"]\n}\n')))}m.isMDXComponent=!0}}]);