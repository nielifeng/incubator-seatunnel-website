"use strict";(self.webpackChunkseatunnel_website=self.webpackChunkseatunnel_website||[]).push([[6512],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return c}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),d=p(n),c=r,k=d["".concat(s,".").concat(c)]||d[c]||m[c]||l;return n?a.createElement(k,i(i({ref:t},u),{},{components:n})):a.createElement(k,i({ref:t},u))}));function c(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=d;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var p=2;p<l;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},8215:function(e,t,n){n.d(t,{Z:function(){return r}});var a=n(7294);function r(e){var t=e.children,n=e.hidden,r=e.className;return a.createElement("div",{role:"tabpanel",hidden:n,className:r},t)}},9877:function(e,t,n){n.d(t,{Z:function(){return u}});var a=n(7462),r=n(7294),l=n(2389),i=n(5450),o=n(6010),s="tabItem_LplD";function p(e){var t,n,l,p=e.lazy,u=e.block,m=e.defaultValue,d=e.values,c=e.groupId,k=e.className,f=r.Children.map(e.children,(function(e){if((0,r.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),g=null!=d?d:f.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),N=(0,i.lx)(g,(function(e,t){return e.value===t.value}));if(N.length>0)throw new Error('Docusaurus error: Duplicate values "'+N.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var v=null===m?m:null!=(t=null!=m?m:null==(n=f.find((function(e){return e.props.default})))?void 0:n.props.value)?t:null==(l=f[0])?void 0:l.props.value;if(null!==v&&!g.some((function(e){return e.value===v})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+v+'" but none of its children has the corresponding value. Available values are: '+g.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var h=(0,i.UB)(),b=h.tabGroupChoices,y=h.setTabGroupChoices,w=(0,r.useState)(v),C=w[0],T=w[1],x=[],O=(0,i.o5)().blockElementScrollPositionUntilNextRender;if(null!=c){var E=b[c];null!=E&&E!==C&&g.some((function(e){return e.value===E}))&&T(E)}var K=function(e){var t=e.currentTarget,n=x.indexOf(t),a=g[n].value;a!==C&&(O(t),T(a),null!=c&&y(c,a))},S=function(e){var t,n=null;switch(e.key){case"ArrowRight":var a=x.indexOf(e.currentTarget)+1;n=x[a]||x[0];break;case"ArrowLeft":var r=x.indexOf(e.currentTarget)-1;n=x[r]||x[x.length-1]}null==(t=n)||t.focus()};return r.createElement("div",{className:"tabs-container"},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":u},k)},g.map((function(e){var t=e.value,n=e.label,l=e.attributes;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:C===t?0:-1,"aria-selected":C===t,key:t,ref:function(e){return x.push(e)},onKeyDown:S,onFocus:K,onClick:K},l,{className:(0,o.Z)("tabs__item",s,null==l?void 0:l.className,{"tabs__item--active":C===t})}),null!=n?n:t)}))),p?(0,r.cloneElement)(f.filter((function(e){return e.props.value===C}))[0],{className:"margin-vert--md"}):r.createElement("div",{className:"margin-vert--md"},f.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==C})}))))}function u(e){var t=(0,l.Z)();return r.createElement(p,(0,a.Z)({key:String(t)},e))}},6729:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return p},contentTitle:function(){return u},metadata:function(){return m},assets:function(){return d},toc:function(){return c},default:function(){return f}});var a=n(7462),r=n(3366),l=(n(7294),n(3905)),i=n(9877),o=n(8215),s=["components"],p={},u="Kafka",m={unversionedId:"connector/source/Kafka",id:"connector/source/Kafka",title:"Kafka",description:"Kafka source connector",source:"@site/docs/connector/source/Kafka.mdx",sourceDirName:"connector/source",slug:"/connector/source/Kafka",permalink:"/docs/connector/source/Kafka",editUrl:"https://github.com/apache/incubator-seatunnel-website/edit/main/docs/connector/source/Kafka.mdx",tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"Jdbc",permalink:"/docs/connector/source/Jdbc"},next:{title:"Kudu",permalink:"/docs/connector/source/Kudu"}},d={},c=[{value:"Description",id:"description",level:2},{value:"Options",id:"options",level:2},{value:"topics string",id:"topics-string",level:3},{value:"consumer.group.id string",id:"consumergroupid-string",level:3},{value:"consumer.bootstrap.servers string",id:"consumerbootstrapservers-string",level:3},{value:"format.type string",id:"formattype-string",level:3},{value:"format.* string",id:"format-string",level:3},{value:"schema string",id:"schema-string",level:3},{value:"rowtime.field string",id:"rowtimefield-string",level:3},{value:"watermark long",id:"watermark-long",level:3},{value:"offset.reset string",id:"offsetreset-string",level:3},{value:"consumer.* string",id:"consumer-string",level:3},{value:"common options string",id:"common-options-string",level:3},{value:"Examples",id:"examples",level:2}],k={toc:c};function f(e){var t=e.components,n=(0,r.Z)(e,s);return(0,l.kt)("wrapper",(0,a.Z)({},k,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"kafka"},"Kafka"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Kafka source connector")),(0,l.kt)("h2",{id:"description"},"Description"),(0,l.kt)("p",null,"To consume data from ",(0,l.kt)("inlineCode",{parentName:"p"},"Kafka")," , supported ",(0,l.kt)("inlineCode",{parentName:"p"},"Kafka version >= 0.10.0")," ."),(0,l.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},"Engine Supported and plugin name"),(0,l.kt)("ul",{parentName:"div",className:"contains-task-list"},(0,l.kt)("li",{parentName:"ul",className:"task-list-item"},(0,l.kt)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","Spark: KafkaStream"),(0,l.kt)("li",{parentName:"ul",className:"task-list-item"},(0,l.kt)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","Flink: Kafka")))),(0,l.kt)("h2",{id:"options"},"Options"),(0,l.kt)(i.Z,{groupId:"engine-type",defaultValue:"spark",values:[{label:"Spark",value:"spark"},{label:"Flink",value:"flink"}],mdxType:"Tabs"},(0,l.kt)(o.Z,{value:"spark",mdxType:"TabItem"},(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"name"),(0,l.kt)("th",{parentName:"tr",align:null},"type"),(0,l.kt)("th",{parentName:"tr",align:null},"required"),(0,l.kt)("th",{parentName:"tr",align:null},"default value"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"topics"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"yes"),(0,l.kt)("td",{parentName:"tr",align:null},"-")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"consumer.group.id"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"yes"),(0,l.kt)("td",{parentName:"tr",align:null},"-")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"consumer.bootstrap.servers"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"yes"),(0,l.kt)("td",{parentName:"tr",align:null},"-")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"consumer.*"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"no"),(0,l.kt)("td",{parentName:"tr",align:null},"-")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"common-options"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"yes"),(0,l.kt)("td",{parentName:"tr",align:null},"-"))))),(0,l.kt)(o.Z,{value:"flink",mdxType:"TabItem"},(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"name"),(0,l.kt)("th",{parentName:"tr",align:null},"type"),(0,l.kt)("th",{parentName:"tr",align:null},"required"),(0,l.kt)("th",{parentName:"tr",align:null},"default value"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"topics"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"yes"),(0,l.kt)("td",{parentName:"tr",align:null},"-")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"consumer.group.id"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"yes"),(0,l.kt)("td",{parentName:"tr",align:null},"-")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"consumer.bootstrap.servers"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"yes"),(0,l.kt)("td",{parentName:"tr",align:null},"-")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"schema"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"yes"),(0,l.kt)("td",{parentName:"tr",align:null},"-")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"format.type"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"yes"),(0,l.kt)("td",{parentName:"tr",align:null},"-")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"format.*"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"no"),(0,l.kt)("td",{parentName:"tr",align:null},"-")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"consumer.*"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"no"),(0,l.kt)("td",{parentName:"tr",align:null},"-")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"rowtime.field"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"no"),(0,l.kt)("td",{parentName:"tr",align:null},"-")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"watermark"),(0,l.kt)("td",{parentName:"tr",align:null},"long"),(0,l.kt)("td",{parentName:"tr",align:null},"no"),(0,l.kt)("td",{parentName:"tr",align:null},"-")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"offset.reset"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"no"),(0,l.kt)("td",{parentName:"tr",align:null},"-")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"common-options"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"no"),(0,l.kt)("td",{parentName:"tr",align:null},"-")))))),(0,l.kt)("h3",{id:"topics-string"},"topics ","[string]"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"Kafka topic")," name. If there are multiple ",(0,l.kt)("inlineCode",{parentName:"p"},"topics"),", use ",(0,l.kt)("inlineCode",{parentName:"p"},",")," to split, for example: ",(0,l.kt)("inlineCode",{parentName:"p"},'"tpc1,tpc2"')),(0,l.kt)("h3",{id:"consumergroupid-string"},"consumer.group.id ","[string]"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"Kafka consumer group id"),", used to distinguish different consumer groups"),(0,l.kt)("h3",{id:"consumerbootstrapservers-string"},"consumer.bootstrap.servers ","[string]"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"Kafka")," cluster address, separated by ",(0,l.kt)("inlineCode",{parentName:"p"},",")),(0,l.kt)(i.Z,{groupId:"engine-type",defaultValue:"spark",values:[{label:"Spark",value:"spark"},{label:"Flink",value:"flink"}],mdxType:"Tabs"},(0,l.kt)(o.Z,{value:"spark",mdxType:"TabItem"}),(0,l.kt)(o.Z,{value:"flink",mdxType:"TabItem"},(0,l.kt)("h3",{id:"formattype-string"},"format.type ","[string]"),(0,l.kt)("p",null,"Currently supports three formats"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"json"),(0,l.kt)("li",{parentName:"ul"},"csv"),(0,l.kt)("li",{parentName:"ul"},"avro")),(0,l.kt)("h3",{id:"format-string"},"format.* ","[string]"),(0,l.kt)("p",null,"The ",(0,l.kt)("inlineCode",{parentName:"p"},"csv")," format uses this parameter to set the separator and so on. For example, set the column delimiter to ",(0,l.kt)("inlineCode",{parentName:"p"},"\\t")," , ",(0,l.kt)("inlineCode",{parentName:"p"},"format.field-delimiter=\\\\t")),(0,l.kt)("h3",{id:"schema-string"},"schema ","[string]"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"csv"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"The ",(0,l.kt)("inlineCode",{parentName:"li"},"schema")," of ",(0,l.kt)("inlineCode",{parentName:"li"},"csv")," is a string of ",(0,l.kt)("inlineCode",{parentName:"li"},"jsonArray")," , such as ",(0,l.kt)("inlineCode",{parentName:"li"},'"[{\\"field\\":\\"name\\",\\"type\\":\\"string\\"},{\\"field\\":\\"age\\ ",\\"type\\":\\"int\\"}]"')," ."))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"json"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"The ",(0,l.kt)("inlineCode",{parentName:"li"},"schema")," parameter of ",(0,l.kt)("inlineCode",{parentName:"li"},"json")," is to provide a ",(0,l.kt)("inlineCode",{parentName:"li"},"json string")," of the original data, and the ",(0,l.kt)("inlineCode",{parentName:"li"},"schema")," can be automatically generated, but the original data with the most complete content needs to be provided, otherwise the fields will be lost."))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"avro"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"The ",(0,l.kt)("inlineCode",{parentName:"li"},"schema")," parameter of ",(0,l.kt)("inlineCode",{parentName:"li"},"avro")," is to provide a standard ",(0,l.kt)("inlineCode",{parentName:"li"},"avro schema JSON string")," , such as ",(0,l.kt)("inlineCode",{parentName:"li"},'{\\"name\\":\\"test\\",\\"type\\":\\"record\\",\\"fields\\":[{ \\"name\\":\\"name\\",\\"type\\":\\"string\\"},{\\"name\\":\\"age\\",\\"type\\":\\"long\\"} ,{\\"name\\":\\"addrs\\",\\"type\\":{\\"name\\":\\"addrs\\",\\"type\\":\\"record\\",\\"fields\\" :[{\\"name\\":\\"province\\",\\"type\\":\\"string\\"},{\\"name\\":\\"city\\",\\"type\\":\\"string \\"}]}}]}')))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"To learn more about how the ",(0,l.kt)("inlineCode",{parentName:"p"},"Avro Schema JSON string")," should be defined, please refer to: ",(0,l.kt)("a",{parentName:"p",href:"https://avro.apache.org/docs/current/spec.html"},"https://avro.apache.org/docs/current/spec.html")))),(0,l.kt)("h3",{id:"rowtimefield-string"},"rowtime.field ","[string]"),(0,l.kt)("p",null,"Extract timestamp using current configuration field for flink event time watermark"),(0,l.kt)("h3",{id:"watermark-long"},"watermark ","[long]"),(0,l.kt)("p",null,"Sets a built-in watermark strategy for rowtime.field attributes which are out-of-order by a bounded time\ninterval. Emits watermarks which are the maximum observed timestamp minus the specified delay."),(0,l.kt)("h3",{id:"offsetreset-string"},"offset.reset ","[string]"),(0,l.kt)("p",null,"The consumer's initial ",(0,l.kt)("inlineCode",{parentName:"p"},"offset")," is only valid for new consumers. There are three modes"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"latest",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Start consumption from the latest offset"))),(0,l.kt)("li",{parentName:"ul"},"earliest",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Start consumption from the earliest offset"))),(0,l.kt)("li",{parentName:"ul"},"specific",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Start consumption from the specified ",(0,l.kt)("inlineCode",{parentName:"li"},"offset")," , and specify the ",(0,l.kt)("inlineCode",{parentName:"li"},"start offset")," of each partition at this time. The setting method is through ",(0,l.kt)("inlineCode",{parentName:"li"},'offset.reset.specific="{0:111,1:123}"'))))))),(0,l.kt)("h3",{id:"consumer-string"},"consumer.* ","[string]"),(0,l.kt)("p",null,"In addition to the above necessary parameters that must be specified by the ",(0,l.kt)("inlineCode",{parentName:"p"},"Kafka consumer")," client, users can also specify multiple ",(0,l.kt)("inlineCode",{parentName:"p"},"consumer")," client non-mandatory parameters, covering ",(0,l.kt)("a",{parentName:"p",href:"https://kafka.apache.org/documentation.html#consumerconfigs"},"all consumer parameters specified in the official Kafka document"),"."),(0,l.kt)("p",null,"The way to specify parameters is to add the prefix ",(0,l.kt)("inlineCode",{parentName:"p"},"consumer.")," to the original parameter name. For example, the way to specify ",(0,l.kt)("inlineCode",{parentName:"p"},"auto.offset.reset")," is: ",(0,l.kt)("inlineCode",{parentName:"p"},"consumer.auto.offset.reset = latest")," . If these non-essential parameters are not specified, they will use the default values given in the official Kafka documentation."),(0,l.kt)("h3",{id:"common-options-string"},"common options ","[string]"),(0,l.kt)("p",null,"Source plugin common parameters, please refer to ",(0,l.kt)("a",{parentName:"p",href:"/docs/connector/source/common-options"},"Source Plugin")," for details"),(0,l.kt)("h2",{id:"examples"},"Examples"),(0,l.kt)(i.Z,{groupId:"engine-type",defaultValue:"spark",values:[{label:"Spark",value:"spark"},{label:"Flink",value:"flink"}],mdxType:"Tabs"},(0,l.kt)(o.Z,{value:"spark",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'kafkaStream {\n    topics = "seatunnel"\n    consumer.bootstrap.servers = "localhost:9092"\n    consumer.group.id = "seatunnel_group"\n}\n'))),(0,l.kt)(o.Z,{value:"flink",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'KafkaTableStream {\n    consumer.bootstrap.servers = "127.0.0.1:9092"\n    consumer.group.id = "seatunnel5"\n    topics = test\n    result_table_name = test\n    format.type = csv\n    schema = "[{\\"field\\":\\"name\\",\\"type\\":\\"string\\"},{\\"field\\":\\"age\\",\\"type\\":\\"int\\"}]"\n    format.field-delimiter = ";"\n    format.allow-comments = "true"\n    format.ignore-parse-errors = "true"\n}\n')))))}f.isMDXComponent=!0}}]);