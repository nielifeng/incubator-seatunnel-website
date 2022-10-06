"use strict";(self.webpackChunkseatunnel_website=self.webpackChunkseatunnel_website||[]).push([[88834],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return m}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=a.createContext({}),p=function(e){var t=a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=p(e.components);return a.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,u=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),c=p(n),m=r,k=c["".concat(u,".").concat(m)]||c[m]||d[m]||l;return n?a.createElement(k,o(o({ref:t},s),{},{components:n})):a.createElement(k,o({ref:t},s))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,o=new Array(l);o[0]=c;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var p=2;p<l;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},32369:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return i},contentTitle:function(){return u},metadata:function(){return p},assets:function(){return s},toc:function(){return d},default:function(){return m}});var a=n(87462),r=n(63366),l=(n(67294),n(3905)),o=["components"],i={},u="IoTDB",p={unversionedId:"connector-v2/source/IoTDB",id:"connector-v2/source/IoTDB",title:"IoTDB",description:"IoTDB source connector",source:"@site/docs/connector-v2/source/IoTDB.md",sourceDirName:"connector-v2/source",slug:"/connector-v2/source/IoTDB",permalink:"/zh-CN/docs/connector-v2/source/IoTDB",editUrl:"https://github.com/apache/incubator-seatunnel-website/edit/main/docs/connector-v2/source/IoTDB.md",tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"Apache Iceberg",permalink:"/zh-CN/docs/connector-v2/source/Iceberg"},next:{title:"JDBC",permalink:"/zh-CN/docs/connector-v2/source/Jdbc"}},s={},d=[{value:"Description",id:"description",level:2},{value:"Key features",id:"key-features",level:2},{value:"Options",id:"options",level:2},{value:"single node, you need to set host and port to connect to the remote data source.",id:"single-node-you-need-to-set-host-and-port-to-connect-to-the-remote-data-source",level:3},{value:"multi node, you need to set node_urls to connect to the remote data source.",id:"multi-node-you-need-to-set-node_urls-to-connect-to-the-remote-data-source",level:3},{value:"other parameters",id:"other-parameters",level:3},{value:"fields string",id:"fields-string",level:3},{value:"option parameters",id:"option-parameters",level:3},{value:"fetch_size int",id:"fetch_size-int",level:3},{value:"username string",id:"username-string",level:3},{value:"password string",id:"password-string",level:3},{value:"lower_bound long",id:"lower_bound-long",level:3},{value:"upper_bound long",id:"upper_bound-long",level:3},{value:"num_partitions int",id:"num_partitions-int",level:3},{value:"thrift_default_buffer_size int",id:"thrift_default_buffer_size-int",level:3},{value:"enable_cache_leader boolean",id:"enable_cache_leader-boolean",level:3},{value:"version string",id:"version-string",level:3},{value:"split partitions",id:"split-partitions",level:3},{value:"num_partitions int",id:"num_partitions-int-1",level:4},{value:"upper_bound long",id:"upper_bound-long-1",level:3},{value:"lower_bound long",id:"lower_bound-long-1",level:3},{value:"common options",id:"common-options",level:3},{value:"Examples",id:"examples",level:2},{value:"Case1",id:"case1",level:3}],c={toc:d};function m(e){var t=e.components,n=(0,r.Z)(e,o);return(0,l.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"iotdb"},"IoTDB"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"IoTDB source connector")),(0,l.kt)("h2",{id:"description"},"Description"),(0,l.kt)("p",null,"Read external data source data through IoTDB."),(0,l.kt)("h2",{id:"key-features"},"Key features"),(0,l.kt)("ul",{className:"contains-task-list"},(0,l.kt)("li",{parentName:"ul",className:"task-list-item"},(0,l.kt)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ",(0,l.kt)("a",{parentName:"li",href:"/zh-CN/docs/concept/connector-v2-features"},"batch")),(0,l.kt)("li",{parentName:"ul",className:"task-list-item"},(0,l.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ",(0,l.kt)("a",{parentName:"li",href:"/zh-CN/docs/concept/connector-v2-features"},"stream")),(0,l.kt)("li",{parentName:"ul",className:"task-list-item"},(0,l.kt)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ",(0,l.kt)("a",{parentName:"li",href:"/zh-CN/docs/concept/connector-v2-features"},"exactly-once")),(0,l.kt)("li",{parentName:"ul",className:"task-list-item"},(0,l.kt)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ",(0,l.kt)("a",{parentName:"li",href:"/zh-CN/docs/concept/connector-v2-features"},"schema projection"))),(0,l.kt)("p",null,"supports query SQL and can achieve projection effect."),(0,l.kt)("ul",{className:"contains-task-list"},(0,l.kt)("li",{parentName:"ul",className:"task-list-item"},(0,l.kt)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ",(0,l.kt)("a",{parentName:"li",href:"/zh-CN/docs/concept/connector-v2-features"},"parallelism")),(0,l.kt)("li",{parentName:"ul",className:"task-list-item"},(0,l.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ",(0,l.kt)("a",{parentName:"li",href:"/zh-CN/docs/concept/connector-v2-features"},"support user-defined split"))),(0,l.kt)("h2",{id:"options"},"Options"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"name"),(0,l.kt)("th",{parentName:"tr",align:null},"type"),(0,l.kt)("th",{parentName:"tr",align:null},"required"),(0,l.kt)("th",{parentName:"tr",align:null},"default value"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"host"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"no"),(0,l.kt)("td",{parentName:"tr",align:null},"-")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"port"),(0,l.kt)("td",{parentName:"tr",align:null},"int"),(0,l.kt)("td",{parentName:"tr",align:null},"no"),(0,l.kt)("td",{parentName:"tr",align:null},"-")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"node_urls"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"no"),(0,l.kt)("td",{parentName:"tr",align:null},"-")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"username"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"yes"),(0,l.kt)("td",{parentName:"tr",align:null},"-")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"password"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"yes"),(0,l.kt)("td",{parentName:"tr",align:null},"-")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"sql"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"yes"),(0,l.kt)("td",{parentName:"tr",align:null},"-")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"fields"),(0,l.kt)("td",{parentName:"tr",align:null},"config"),(0,l.kt)("td",{parentName:"tr",align:null},"yes"),(0,l.kt)("td",{parentName:"tr",align:null},"-")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"fetch_size"),(0,l.kt)("td",{parentName:"tr",align:null},"int"),(0,l.kt)("td",{parentName:"tr",align:null},"no"),(0,l.kt)("td",{parentName:"tr",align:null},"-")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"lower_bound"),(0,l.kt)("td",{parentName:"tr",align:null},"long"),(0,l.kt)("td",{parentName:"tr",align:null},"no"),(0,l.kt)("td",{parentName:"tr",align:null},"-")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"upper_bound"),(0,l.kt)("td",{parentName:"tr",align:null},"long"),(0,l.kt)("td",{parentName:"tr",align:null},"no"),(0,l.kt)("td",{parentName:"tr",align:null},"-")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"num_partitions"),(0,l.kt)("td",{parentName:"tr",align:null},"int"),(0,l.kt)("td",{parentName:"tr",align:null},"no"),(0,l.kt)("td",{parentName:"tr",align:null},"-")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"thrift_default_buffer_size"),(0,l.kt)("td",{parentName:"tr",align:null},"int"),(0,l.kt)("td",{parentName:"tr",align:null},"no"),(0,l.kt)("td",{parentName:"tr",align:null},"-")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"enable_cache_leader"),(0,l.kt)("td",{parentName:"tr",align:null},"boolean"),(0,l.kt)("td",{parentName:"tr",align:null},"no"),(0,l.kt)("td",{parentName:"tr",align:null},"-")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"version"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"no"),(0,l.kt)("td",{parentName:"tr",align:null},"-")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"common-options"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"no"),(0,l.kt)("td",{parentName:"tr",align:null},"-")))),(0,l.kt)("h3",{id:"single-node-you-need-to-set-host-and-port-to-connect-to-the-remote-data-source"},"single node, you need to set host and port to connect to the remote data source."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"host")," ","[string]"," the host of the IoTDB when you select host of the IoTDB"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"port")," ","[int]"," the port of the IoTDB when you select"),(0,l.kt)("h3",{id:"multi-node-you-need-to-set-node_urls-to-connect-to-the-remote-data-source"},"multi node, you need to set node_urls to connect to the remote data source."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"node_urls")," ","[string]"," the node_urls of the IoTDB when you select"),(0,l.kt)("p",null,"e.g."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-text"},"127.0.0.1:8080,127.0.0.2:8080\n")),(0,l.kt)("h3",{id:"other-parameters"},"other parameters"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"sql")," ","[string]","\nexecute sql statement e.g."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"select name,age from test\n")),(0,l.kt)("h3",{id:"fields-string"},"fields ","[string]"),(0,l.kt)("p",null,"the fields of the IoTDB when you select"),(0,l.kt)("p",null,"the field type is SeaTunnel field type ",(0,l.kt)("inlineCode",{parentName:"p"},"org.apache.seatunnel.api.table.type.SqlType")),(0,l.kt)("p",null,"e.g."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"fields{\n    name=STRING\n    age=INT\n    }\n")),(0,l.kt)("h3",{id:"option-parameters"},"option parameters"),(0,l.kt)("h3",{id:"fetch_size-int"},"fetch_size ","[int]"),(0,l.kt)("p",null,"the fetch_size of the IoTDB when you select"),(0,l.kt)("h3",{id:"username-string"},"username ","[string]"),(0,l.kt)("p",null,"the username of the IoTDB when you select"),(0,l.kt)("h3",{id:"password-string"},"password ","[string]"),(0,l.kt)("p",null,"the password of the IoTDB when you select"),(0,l.kt)("h3",{id:"lower_bound-long"},"lower_bound ","[long]"),(0,l.kt)("p",null,"the lower_bound of the IoTDB when you select"),(0,l.kt)("h3",{id:"upper_bound-long"},"upper_bound ","[long]"),(0,l.kt)("p",null,"the upper_bound of the IoTDB when you select"),(0,l.kt)("h3",{id:"num_partitions-int"},"num_partitions ","[int]"),(0,l.kt)("p",null,"the num_partitions of the IoTDB when you select"),(0,l.kt)("h3",{id:"thrift_default_buffer_size-int"},"thrift_default_buffer_size ","[int]"),(0,l.kt)("p",null,"the thrift_default_buffer_size of the IoTDB when you select"),(0,l.kt)("h3",{id:"enable_cache_leader-boolean"},"enable_cache_leader ","[boolean]"),(0,l.kt)("p",null,"enable_cache_leader of the IoTDB when you select"),(0,l.kt)("h3",{id:"version-string"},"version ","[string]"),(0,l.kt)("p",null,"Version represents the SQL semantic version used by the client, which is used to be compatible with the SQL semantics of\n0.12 when upgrading 0.13. The possible values are: V_0_12, V_0_13."),(0,l.kt)("h3",{id:"split-partitions"},"split partitions"),(0,l.kt)("p",null,"we can split the partitions of the IoTDB and we used time column split"),(0,l.kt)("h4",{id:"num_partitions-int-1"},"num_partitions ","[int]"),(0,l.kt)("p",null,"split num"),(0,l.kt)("h3",{id:"upper_bound-long-1"},"upper_bound ","[long]"),(0,l.kt)("p",null,"upper bound of the time column"),(0,l.kt)("h3",{id:"lower_bound-long-1"},"lower_bound ","[long]"),(0,l.kt)("p",null,"lower bound of the time column"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},'     split the time range into numPartitions parts\n     if numPartitions is 1, use the whole time range\n     if numPartitions < (upper_bound - lower_bound), use (upper_bound - lower_bound) partitions\n     \n     eg: lower_bound = 1, upper_bound = 10, numPartitions = 2\n     sql = "select * from test where age > 0 and age < 10"\n     \n     split result\n\n     split 1: select * from test  where (time >= 1 and time < 6)  and (  age > 0 and age < 10 )\n     \n     split 2: select * from test  where (time >= 6 and time < 11) and (  age > 0 and age < 10 )\n\n')),(0,l.kt)("h3",{id:"common-options"},"common options"),(0,l.kt)("p",null,"Source plugin common parameters, please refer to ",(0,l.kt)("a",{parentName:"p",href:"/zh-CN/docs/connector-v2/source/common-options"},"Source Common Options")," for details"),(0,l.kt)("h2",{id:"examples"},"Examples"),(0,l.kt)("h3",{id:"case1"},"Case1"),(0,l.kt)("p",null,"Common options:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-hocon"},'source {\n  IoTDB {\n    node_urls = "localhost:6667"\n    username = "root"\n    password = "root"\n  }\n}\n')),(0,l.kt)("p",null,"When you assign ",(0,l.kt)("inlineCode",{parentName:"p"},"sql"),"\u3001",(0,l.kt)("inlineCode",{parentName:"p"},"fields"),"\u3001",(0,l.kt)("inlineCode",{parentName:"p"},"partition"),", for example:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-hocon"},'sink {\n  IoTDB {\n    ...\n    sql = "SELECT temperature, moisture FROM root.test_group.* WHERE time < 4102329600000 align by device"\n    lower_bound = 1\n    upper_bound = 4102329600000\n    num_partitions = 10\n    fields {\n      ts = bigint\n      device_name = string\n\n      temperature = float\n      moisture = bigint\n    }\n  }\n}\n')),(0,l.kt)("p",null,"Upstream ",(0,l.kt)("inlineCode",{parentName:"p"},"IoTDB")," data format is the following:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"IoTDB> SELECT temperature, moisture FROM root.test_group.* WHERE time < 4102329600000 align by device;\n+------------------------+------------------------+--------------+-----------+\n|                    Time|                  Device|   temperature|   moisture|\n+------------------------+------------------------+--------------+-----------+\n|2022-09-25T00:00:00.001Z|root.test_group.device_a|          36.1|        100|\n|2022-09-25T00:00:00.001Z|root.test_group.device_b|          36.2|        101|\n|2022-09-25T00:00:00.001Z|root.test_group.device_c|          36.3|        102|\n+------------------------+------------------------+--------------+-----------+\n")),(0,l.kt)("p",null,"Loaded to SeaTunnelRow data format is the following:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"ts"),(0,l.kt)("th",{parentName:"tr",align:null},"device_name"),(0,l.kt)("th",{parentName:"tr",align:null},"temperature"),(0,l.kt)("th",{parentName:"tr",align:null},"moisture"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"1664035200001"),(0,l.kt)("td",{parentName:"tr",align:null},"root.test_group.device_a"),(0,l.kt)("td",{parentName:"tr",align:null},"36.1"),(0,l.kt)("td",{parentName:"tr",align:null},"100")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"1664035200001"),(0,l.kt)("td",{parentName:"tr",align:null},"root.test_group.device_b"),(0,l.kt)("td",{parentName:"tr",align:null},"36.2"),(0,l.kt)("td",{parentName:"tr",align:null},"101")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"1664035200001"),(0,l.kt)("td",{parentName:"tr",align:null},"root.test_group.device_c"),(0,l.kt)("td",{parentName:"tr",align:null},"36.3"),(0,l.kt)("td",{parentName:"tr",align:null},"102")))))}m.isMDXComponent=!0}}]);