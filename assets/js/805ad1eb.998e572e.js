"use strict";(self.webpackChunkseatunnel_website=self.webpackChunkseatunnel_website||[]).push([[2741],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),c=p(n),m=r,k=c["".concat(s,".").concat(m)]||c[m]||d[m]||i;return n?a.createElement(k,l(l({ref:t},u),{},{components:n})):a.createElement(k,l({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=c;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var p=2;p<i;p++)l[p]=n[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},4114:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return o},contentTitle:function(){return s},metadata:function(){return p},toc:function(){return u},default:function(){return c}});var a=n(7462),r=n(3366),i=(n(7294),n(3905)),l=["components"],o={},s="Elasticsearch",p={unversionedId:"spark/configuration/sink-plugins/Elasticsearch",id:"spark/configuration/sink-plugins/Elasticsearch",title:"Elasticsearch",description:"Sink plugin : Elasticsearch [Spark]",source:"@site/docs/spark/configuration/sink-plugins/Elasticsearch.md",sourceDirName:"spark/configuration/sink-plugins",slug:"/spark/configuration/sink-plugins/Elasticsearch",permalink:"/docs/spark/configuration/sink-plugins/Elasticsearch",editUrl:"https://github.com/apache/incubator-seatunnel-website/edit/main/docs/spark/configuration/sink-plugins/Elasticsearch.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Doirs",permalink:"/docs/spark/configuration/sink-plugins/Doris"},next:{title:"Email",permalink:"/docs/spark/configuration/sink-plugins/Email"}},u=[{value:"Description",id:"description",children:[],level:2},{value:"Options",id:"options",children:[{value:"hosts array",id:"hosts-array",children:[],level:3},{value:"index_type string",id:"index_type-string",children:[{value:"index_time_format string",id:"index_time_format-string",children:[],level:4}],level:3},{value:"index string",id:"index-string",children:[],level:3},{value:"es.* string",id:"es-string",children:[],level:3},{value:"common options string",id:"common-options-string",children:[],level:3}],level:2},{value:"Examples",id:"examples",children:[],level:2}],d={toc:u};function c(e){var t=e.components,n=(0,r.Z)(e,l);return(0,i.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"elasticsearch"},"Elasticsearch"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Sink plugin : Elasticsearch ","[Spark]")),(0,i.kt)("h2",{id:"description"},"Description"),(0,i.kt)("p",null,"Output data to ",(0,i.kt)("inlineCode",{parentName:"p"},"Elasticsearch")," , the supported ",(0,i.kt)("inlineCode",{parentName:"p"},"ElasticSearch version is >= 2.x and <7.0.0")," ."),(0,i.kt)("h2",{id:"options"},"Options"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"name"),(0,i.kt)("th",{parentName:"tr",align:null},"type"),(0,i.kt)("th",{parentName:"tr",align:null},"required"),(0,i.kt)("th",{parentName:"tr",align:null},"default value"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"hosts"),(0,i.kt)("td",{parentName:"tr",align:null},"array"),(0,i.kt)("td",{parentName:"tr",align:null},"yes"),(0,i.kt)("td",{parentName:"tr",align:null},"-")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"index_type"),(0,i.kt)("td",{parentName:"tr",align:null},"string"),(0,i.kt)("td",{parentName:"tr",align:null},"no"),(0,i.kt)("td",{parentName:"tr",align:null},"log")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"index_time_format"),(0,i.kt)("td",{parentName:"tr",align:null},"string"),(0,i.kt)("td",{parentName:"tr",align:null},"no"),(0,i.kt)("td",{parentName:"tr",align:null},"yyyy.MM.dd")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"index"),(0,i.kt)("td",{parentName:"tr",align:null},"string"),(0,i.kt)("td",{parentName:"tr",align:null},"no"),(0,i.kt)("td",{parentName:"tr",align:null},"seatunnel")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"es.*"),(0,i.kt)("td",{parentName:"tr",align:null},"string"),(0,i.kt)("td",{parentName:"tr",align:null},"no"),(0,i.kt)("td",{parentName:"tr",align:null})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"common-options"),(0,i.kt)("td",{parentName:"tr",align:null},"string"),(0,i.kt)("td",{parentName:"tr",align:null},"no"),(0,i.kt)("td",{parentName:"tr",align:null},"-")))),(0,i.kt)("h3",{id:"hosts-array"},"hosts ","[array]"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"Elasticsearch")," cluster address, the format is ",(0,i.kt)("inlineCode",{parentName:"p"},"host:port")," , allowing multiple hosts to be specified. Such as ",(0,i.kt)("inlineCode",{parentName:"p"},'["host1:9200", "host2:9200"]')," ."),(0,i.kt)("h3",{id:"index_type-string"},"index_type ","[string]"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"Elasticsearch")," index type"),(0,i.kt)("h4",{id:"index_time_format-string"},"index_time_format ","[string]"),(0,i.kt)("p",null,"When the format in the ",(0,i.kt)("inlineCode",{parentName:"p"},"index")," parameter is ",(0,i.kt)("inlineCode",{parentName:"p"},"xxxx-${now}")," , ",(0,i.kt)("inlineCode",{parentName:"p"},"index_time_format")," can specify the time format of the index name, and the default value is ",(0,i.kt)("inlineCode",{parentName:"p"},"yyyy.MM.dd")," . The commonly used time formats are listed as follows:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Symbol"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"y"),(0,i.kt)("td",{parentName:"tr",align:null},"Year")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"M"),(0,i.kt)("td",{parentName:"tr",align:null},"Month")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"d"),(0,i.kt)("td",{parentName:"tr",align:null},"Day of month")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"H"),(0,i.kt)("td",{parentName:"tr",align:null},"Hour in day (0-23)")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"m"),(0,i.kt)("td",{parentName:"tr",align:null},"Minute in hour")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"s"),(0,i.kt)("td",{parentName:"tr",align:null},"Second in minute")))),(0,i.kt)("p",null,"See ",(0,i.kt)("a",{parentName:"p",href:"https://docs.oracle.com/javase/tutorial/i18n/format/simpleDateFormat.html"},"Java SimpleDateFormat")," for detailed time format syntax."),(0,i.kt)("h3",{id:"index-string"},"index ","[string]"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"Elasticsearch")," index name. If you need to generate an ",(0,i.kt)("inlineCode",{parentName:"p"},"index")," based on time, you can specify a time variable, such as ",(0,i.kt)("inlineCode",{parentName:"p"},"seatunnel-${now}")," . ",(0,i.kt)("inlineCode",{parentName:"p"},"now")," represents the current data processing time."),(0,i.kt)("h3",{id:"es-string"},"es.* ","[string]"),(0,i.kt)("p",null,"Users can also specify multiple optional parameters. For a detailed list of parameters, see ",(0,i.kt)("a",{parentName:"p",href:"https://www.elastic.co/guide/en/elasticsearch/hadoop/current/configuration.html#cfg-mapping"},"Parameters Supported by Elasticsearch"),"."),(0,i.kt)("p",null,"For example, the way to specify ",(0,i.kt)("inlineCode",{parentName:"p"},"es.batch.size.entries")," is: ",(0,i.kt)("inlineCode",{parentName:"p"},"es.batch.size.entries = 100000")," . If these non-essential parameters are not specified, they will use the default values given in the official documentation."),(0,i.kt)("h3",{id:"common-options-string"},"common options ","[string]"),(0,i.kt)("p",null,"Sink plugin common parameters, please refer to ",(0,i.kt)("a",{parentName:"p",href:"/docs/spark/configuration/sink-plugins/sink-plugin"},"Sink Plugin")," for details"),(0,i.kt)("h2",{id:"examples"},"Examples"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'elasticsearch {\n    hosts = ["localhost:9200"]\n    index = "seatunnel"\n}\n')),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Write the result to the ",(0,i.kt)("inlineCode",{parentName:"p"},"index")," of the ",(0,i.kt)("inlineCode",{parentName:"p"},"Elasticsearch")," cluster named ",(0,i.kt)("inlineCode",{parentName:"p"},"seatunnel"))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'elasticsearch {\n    hosts = ["localhost:9200"]\n    index = "seatunnel-${now}"\n    es.batch.size.entries = 100000\n    index_time_format = "yyyy.MM.dd"\n}\n')),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Create ",(0,i.kt)("inlineCode",{parentName:"p"},"index")," by day, for example ",(0,i.kt)("inlineCode",{parentName:"p"},"seatunnel-2020.01.01"))))}c.isMDXComponent=!0}}]);