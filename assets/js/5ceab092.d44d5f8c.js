"use strict";(self.webpackChunkseatunnel_website=self.webpackChunkseatunnel_website||[]).push([[6579],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return d}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),c=p(n),d=a,k=c["".concat(s,".").concat(d)]||c[d]||m[d]||i;return n?r.createElement(k,l(l({ref:t},u),{},{components:n})):r.createElement(k,l({ref:t},u))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=c;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var p=2;p<i;p++)l[p]=n[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},6134:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return o},contentTitle:function(){return s},metadata:function(){return p},assets:function(){return u},toc:function(){return m},default:function(){return d}});var r=n(7462),a=n(3366),i=(n(7294),n(3905)),l=["components"],o={},s="Hive",p={unversionedId:"spark/configuration/sink-plugins/Hive",id:"spark/configuration/sink-plugins/Hive",title:"Hive",description:"Sink plugin: Hive [Spark]",source:"@site/docs/spark/configuration/sink-plugins/Hive.md",sourceDirName:"spark/configuration/sink-plugins",slug:"/spark/configuration/sink-plugins/Hive",permalink:"/docs/spark/configuration/sink-plugins/Hive",editUrl:"https://github.com/apache/incubator-seatunnel-website/edit/main/docs/spark/configuration/sink-plugins/Hive.md",tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"Hbase",permalink:"/docs/spark/configuration/sink-plugins/Hbase"},next:{title:"Hudi",permalink:"/docs/spark/configuration/sink-plugins/Hudi"}},u={},m=[{value:"Description",id:"description",level:3},{value:"Options",id:"options",level:3},{value:"sql string",id:"sql-string",level:5},{value:"Source_table_name string",id:"source_table_name-string",level:5},{value:"result_table_name string",id:"result_table_name-string",level:5},{value:"save_mode string",id:"save_mode-string",level:5},{value:"sink_columns string",id:"sink_columns-string",level:5},{value:"partition_by [Arraystring]",id:"partition_by-arraystring",level:5},{value:"Example",id:"example",level:3}],c={toc:m};function d(e){var t=e.components,n=(0,a.Z)(e,l);return(0,i.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"hive"},"Hive"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Sink plugin: Hive ","[Spark]")),(0,i.kt)("h3",{id:"description"},"Description"),(0,i.kt)("p",null,"Write Rows to ",(0,i.kt)("a",{parentName:"p",href:"https://hive.apache.org"},"Apache Hive"),"."),(0,i.kt)("h3",{id:"options"},"Options"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"name"),(0,i.kt)("th",{parentName:"tr",align:null},"type"),(0,i.kt)("th",{parentName:"tr",align:null},"required"),(0,i.kt)("th",{parentName:"tr",align:null},"default value"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"#sql-string"},"sql")),(0,i.kt)("td",{parentName:"tr",align:null},"string"),(0,i.kt)("td",{parentName:"tr",align:null},"no"),(0,i.kt)("td",{parentName:"tr",align:null},"-")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"#source_table_name-string"},"source_table_name")),(0,i.kt)("td",{parentName:"tr",align:null},"string"),(0,i.kt)("td",{parentName:"tr",align:null},"no"),(0,i.kt)("td",{parentName:"tr",align:null},"-")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"#result_table_name-string"},"result_table_name")),(0,i.kt)("td",{parentName:"tr",align:null},"string"),(0,i.kt)("td",{parentName:"tr",align:null},"no"),(0,i.kt)("td",{parentName:"tr",align:null},"-")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"#sink_columns-string"},"sink_columns")),(0,i.kt)("td",{parentName:"tr",align:null},"string"),(0,i.kt)("td",{parentName:"tr",align:null},"no"),(0,i.kt)("td",{parentName:"tr",align:null},"-")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"#save_mode-string"},"save_mode")),(0,i.kt)("td",{parentName:"tr",align:null},"string"),(0,i.kt)("td",{parentName:"tr",align:null},"no"),(0,i.kt)("td",{parentName:"tr",align:null},"-")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"#partition_by-arraystring"},"partition_by")),(0,i.kt)("td",{parentName:"tr",align:null},"Array","[string]"),(0,i.kt)("td",{parentName:"tr",align:null},"no"),(0,i.kt)("td",{parentName:"tr",align:null},"-")))),(0,i.kt)("h5",{id:"sql-string"},"sql ","[string]"),(0,i.kt)("p",null,"Hive sql\uff1athe whole insert data sql, such as ",(0,i.kt)("inlineCode",{parentName:"p"},"insert into/overwrite $table  select * from xxx_table "),", If this option exists, other options will be ignored."),(0,i.kt)("h5",{id:"source_table_name-string"},"Source_table_name ","[string]"),(0,i.kt)("p",null,"Datasource of this plugin."),(0,i.kt)("h5",{id:"result_table_name-string"},"result_table_name ","[string]"),(0,i.kt)("p",null,"The output hive table name if the ",(0,i.kt)("inlineCode",{parentName:"p"},"sql")," option doesn't specified."),(0,i.kt)("h5",{id:"save_mode-string"},"save_mode ","[string]"),(0,i.kt)("p",null,"Same with option ",(0,i.kt)("inlineCode",{parentName:"p"},"spark.mode")," in Spark, combined with ",(0,i.kt)("inlineCode",{parentName:"p"},"result_table_name")," if the ",(0,i.kt)("inlineCode",{parentName:"p"},"sql")," option doesn't specified."),(0,i.kt)("h5",{id:"sink_columns-string"},"sink_columns ","[string]"),(0,i.kt)("p",null,"Specify the selected fields which write to result_table_name, separated by commas, combined with ",(0,i.kt)("inlineCode",{parentName:"p"},"result_table_name"),"\xa0if the ",(0,i.kt)("inlineCode",{parentName:"p"},"sql")," option doesn't specified."),(0,i.kt)("h5",{id:"partition_by-arraystring"},"partition_by [Array","[string]","]"),(0,i.kt)("p",null,"Hive partition fields, combined with ",(0,i.kt)("inlineCode",{parentName:"p"},"result_table_name")," if the ",(0,i.kt)("inlineCode",{parentName:"p"},"sql")," option doesn't specified."),(0,i.kt)("h3",{id:"example"},"Example"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-conf"},'sink {\n  Hive {\n    sql = "insert overwrite table seatunnel.test1 partition(province) select name,age,province from myTable2"\n  }\n}\n')),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-conf"},'sink {\n  Hive {\n    source_table_name = "myTable2"\n    result_table_name = "seatunnel.test1"\n    save_mode = "overwrite"\n    sink_columns = "name,age,province"\n    partition_by = ["province"]\n  }\n}\n')))}d.isMDXComponent=!0}}]);