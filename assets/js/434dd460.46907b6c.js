"use strict";(self.webpackChunkseatunnel_website=self.webpackChunkseatunnel_website||[]).push([[99054],{3905:function(t,e,n){n.d(e,{Zo:function(){return p},kt:function(){return d}});var a=n(67294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function o(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},l=Object.keys(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var s=a.createContext({}),c=function(t){var e=a.useContext(s),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},p=function(t){var e=c(t.components);return a.createElement(s.Provider,{value:e},t.children)},m={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},u=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,l=t.originalType,s=t.parentName,p=o(t,["components","mdxType","originalType","parentName"]),u=c(n),d=r,k=u["".concat(s,".").concat(d)]||u[d]||m[d]||l;return n?a.createElement(k,i(i({ref:e},p),{},{components:n})):a.createElement(k,i({ref:e},p))}));function d(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=n.length,i=new Array(l);i[0]=u;var o={};for(var s in e)hasOwnProperty.call(e,s)&&(o[s]=e[s]);o.originalType=t,o.mdxType="string"==typeof t?t:r,i[1]=o;for(var c=2;c<l;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},850:function(t,e,n){n.r(e),n.d(e,{frontMatter:function(){return o},contentTitle:function(){return s},metadata:function(){return c},assets:function(){return p},toc:function(){return m},default:function(){return d}});var a=n(87462),r=n(63366),l=(n(67294),n(3905)),i=["components"],o={},s="JDBC",c={unversionedId:"connector-v2/sink/Jdbc",id:"connector-v2/sink/Jdbc",title:"JDBC",description:"JDBC sink connector",source:"@site/docs/connector-v2/sink/Jdbc.md",sourceDirName:"connector-v2/sink",slug:"/connector-v2/sink/Jdbc",permalink:"/docs/connector-v2/sink/Jdbc",editUrl:"https://github.com/apache/incubator-seatunnel-website/edit/main/docs/connector-v2/sink/Jdbc.md",tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"IoTDB",permalink:"/docs/connector-v2/sink/IoTDB"},next:{title:"Kudu",permalink:"/docs/connector-v2/sink/Kudu"}},p={},m=[{value:"Description",id:"description",level:2},{value:"Key features",id:"key-features",level:2},{value:"Options",id:"options",level:2},{value:"driver string",id:"driver-string",level:3},{value:"user string",id:"user-string",level:3},{value:"password string",id:"password-string",level:3},{value:"url string",id:"url-string",level:3},{value:"query string",id:"query-string",level:3},{value:"connection_check_timeout_sec int",id:"connection_check_timeout_sec-int",level:3},{value:"max_retriesint",id:"max_retriesint",level:3},{value:"batch_sizeint",id:"batch_sizeint",level:3},{value:"batch_interval_msint",id:"batch_interval_msint",level:3},{value:"is_exactly_onceboolean",id:"is_exactly_onceboolean",level:3},{value:"xa_data_source_class_namestring",id:"xa_data_source_class_namestring",level:3},{value:"max_commit_attemptsint",id:"max_commit_attemptsint",level:3},{value:"transaction_timeout_secint",id:"transaction_timeout_secint",level:3},{value:"common options",id:"common-options",level:3},{value:"tips",id:"tips",level:2},{value:"appendix",id:"appendix",level:2},{value:"Example",id:"example",level:2}],u={toc:m};function d(t){var e=t.components,n=(0,r.Z)(t,i);return(0,l.kt)("wrapper",(0,a.Z)({},u,n,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"jdbc"},"JDBC"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"JDBC sink connector")),(0,l.kt)("h2",{id:"description"},"Description"),(0,l.kt)("p",null,"Write data through jdbc. Support Batch mode and Streaming mode, support concurrent writing, support exactly-once\nsemantics (using XA transaction guarantee)."),(0,l.kt)("h2",{id:"key-features"},"Key features"),(0,l.kt)("ul",{className:"contains-task-list"},(0,l.kt)("li",{parentName:"ul",className:"task-list-item"},(0,l.kt)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ",(0,l.kt)("a",{parentName:"li",href:"/docs/concept/connector-v2-features"},"exactly-once"))),(0,l.kt)("p",null,"Use ",(0,l.kt)("inlineCode",{parentName:"p"},"Xa transactions")," to ensure ",(0,l.kt)("inlineCode",{parentName:"p"},"exactly-once"),". So only support ",(0,l.kt)("inlineCode",{parentName:"p"},"exactly-once")," for the database which is\nsupport ",(0,l.kt)("inlineCode",{parentName:"p"},"Xa transactions"),". You can set ",(0,l.kt)("inlineCode",{parentName:"p"},"is_exactly_once=true")," to enable it."),(0,l.kt)("ul",{className:"contains-task-list"},(0,l.kt)("li",{parentName:"ul",className:"task-list-item"},(0,l.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ",(0,l.kt)("a",{parentName:"li",href:"/docs/concept/connector-v2-features"},"schema projection"))),(0,l.kt)("h2",{id:"options"},"Options"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"name"),(0,l.kt)("th",{parentName:"tr",align:null},"type"),(0,l.kt)("th",{parentName:"tr",align:null},"required"),(0,l.kt)("th",{parentName:"tr",align:null},"default value"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"url"),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},"Yes"),(0,l.kt)("td",{parentName:"tr",align:null},"-")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"driver"),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},"Yes"),(0,l.kt)("td",{parentName:"tr",align:null},"-")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"user"),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},"No"),(0,l.kt)("td",{parentName:"tr",align:null},"-")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"password"),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},"No"),(0,l.kt)("td",{parentName:"tr",align:null},"-")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"query"),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},"Yes"),(0,l.kt)("td",{parentName:"tr",align:null},"-")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"connection_check_timeout_sec"),(0,l.kt)("td",{parentName:"tr",align:null},"Int"),(0,l.kt)("td",{parentName:"tr",align:null},"No"),(0,l.kt)("td",{parentName:"tr",align:null},"30")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"max_retries"),(0,l.kt)("td",{parentName:"tr",align:null},"Int"),(0,l.kt)("td",{parentName:"tr",align:null},"No"),(0,l.kt)("td",{parentName:"tr",align:null},"3")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"batch_size"),(0,l.kt)("td",{parentName:"tr",align:null},"Int"),(0,l.kt)("td",{parentName:"tr",align:null},"No"),(0,l.kt)("td",{parentName:"tr",align:null},"300")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"batch_interval_ms"),(0,l.kt)("td",{parentName:"tr",align:null},"Int"),(0,l.kt)("td",{parentName:"tr",align:null},"No"),(0,l.kt)("td",{parentName:"tr",align:null},"1000")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"is_exactly_once"),(0,l.kt)("td",{parentName:"tr",align:null},"Boolean"),(0,l.kt)("td",{parentName:"tr",align:null},"No"),(0,l.kt)("td",{parentName:"tr",align:null},"false")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"xa_data_source_class_name"),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},"No"),(0,l.kt)("td",{parentName:"tr",align:null},"-")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"max_commit_attempts"),(0,l.kt)("td",{parentName:"tr",align:null},"Int"),(0,l.kt)("td",{parentName:"tr",align:null},"No"),(0,l.kt)("td",{parentName:"tr",align:null},"3")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"transaction_timeout_sec"),(0,l.kt)("td",{parentName:"tr",align:null},"Int"),(0,l.kt)("td",{parentName:"tr",align:null},"No"),(0,l.kt)("td",{parentName:"tr",align:null},"-1")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"common-options"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"no"),(0,l.kt)("td",{parentName:"tr",align:null},"-")))),(0,l.kt)("h3",{id:"driver-string"},"driver ","[string]"),(0,l.kt)("p",null,"The jdbc class name used to connect to the remote data source, if you use MySQL the value is com.mysql.cj.jdbc.Driver.\nWarn: for license compliance, you have to provide any driver yourself like MySQL JDBC Driver, e.g. copy mysql-connector-java-xxx.jar to\n$SEATNUNNEL_HOME/lib for Standalone."),(0,l.kt)("h3",{id:"user-string"},"user ","[string]"),(0,l.kt)("p",null,"userName"),(0,l.kt)("h3",{id:"password-string"},"password ","[string]"),(0,l.kt)("p",null,"password"),(0,l.kt)("h3",{id:"url-string"},"url ","[string]"),(0,l.kt)("p",null,"The URL of the JDBC connection. Refer to a case: jdbc:postgresql://localhost/test"),(0,l.kt)("h3",{id:"query-string"},"query ","[string]"),(0,l.kt)("p",null,"Query statement"),(0,l.kt)("h3",{id:"connection_check_timeout_sec-int"},"connection_check_timeout_sec ","[int]"),(0,l.kt)("p",null,"The time in seconds to wait for the database operation used to validate the connection to complete."),(0,l.kt)("h3",{id:"max_retriesint"},"max_retries","[int]"),(0,l.kt)("p",null,"The number of retries to submit failed (executeBatch)"),(0,l.kt)("h3",{id:"batch_sizeint"},"batch_size","[int]"),(0,l.kt)("p",null,"For batch writing, when the number of buffers reaches the number of ",(0,l.kt)("inlineCode",{parentName:"p"},"batch_size")," or the time reaches ",(0,l.kt)("inlineCode",{parentName:"p"},"batch_interval_ms"),"\n, the data will be flushed into the database"),(0,l.kt)("h3",{id:"batch_interval_msint"},"batch_interval_ms","[int]"),(0,l.kt)("p",null,"For batch writing, when the number of buffers reaches the number of ",(0,l.kt)("inlineCode",{parentName:"p"},"batch_size")," or the time reaches ",(0,l.kt)("inlineCode",{parentName:"p"},"batch_interval_ms"),"\n, the data will be flushed into the database"),(0,l.kt)("h3",{id:"is_exactly_onceboolean"},"is_exactly_once","[boolean]"),(0,l.kt)("p",null,"Whether to enable exactly-once semantics, which will use Xa transactions. If on, you need to\nset ",(0,l.kt)("inlineCode",{parentName:"p"},"xa_data_source_class_name"),"."),(0,l.kt)("h3",{id:"xa_data_source_class_namestring"},"xa_data_source_class_name","[string]"),(0,l.kt)("p",null,"The xa data source class name of the database Driver, for example, mysql is ",(0,l.kt)("inlineCode",{parentName:"p"},"com.mysql.cj.jdbc.MysqlXADataSource"),", and\nplease refer to appendix for other data sources"),(0,l.kt)("h3",{id:"max_commit_attemptsint"},"max_commit_attempts","[int]"),(0,l.kt)("p",null,"The number of retries for transaction commit failures"),(0,l.kt)("h3",{id:"transaction_timeout_secint"},"transaction_timeout_sec","[int]"),(0,l.kt)("p",null,"The timeout after the transaction is opened, the default is -1 (never timeout). Note that setting the timeout may affect\nexactly-once semantics"),(0,l.kt)("h3",{id:"common-options"},"common options"),(0,l.kt)("p",null,"Sink plugin common parameters, please refer to ",(0,l.kt)("a",{parentName:"p",href:"/docs/connector-v2/sink/common-options"},"Sink Common Options")," for details"),(0,l.kt)("h2",{id:"tips"},"tips"),(0,l.kt)("p",null,'In the case of is_exactly_once = "true", Xa transactions are used. This requires database support, and some databases require some setup :\n1 postgres needs to set ',(0,l.kt)("inlineCode",{parentName:"p"},"max_prepared_transactions > 1")," such as ",(0,l.kt)("inlineCode",{parentName:"p"},"ALTER SYSTEM set max_prepared_transactions to 10"),".\n2 mysql version need >= ",(0,l.kt)("inlineCode",{parentName:"p"},"8.0.29")," and Non-root users need to grant ",(0,l.kt)("inlineCode",{parentName:"p"},"XA_RECOVER_ADMIN")," permissions. such as ",(0,l.kt)("inlineCode",{parentName:"p"},"grant XA_RECOVER_ADMIN on test_db.* to 'user1'@'%'"),"."),(0,l.kt)("h2",{id:"appendix"},"appendix"),(0,l.kt)("p",null,"there are some reference value for params above.\n| datasource | driver                                       | url                                                                   | xa_data_source_class_name                              | maven                                                                                 |\n|------------|----------------------------------------------|-----------------------------------------------------------------------|--------------------------------------------------------|---------------------------------------------------------------------------------------|\n| mysql      | com.mysql.cj.jdbc.Driver                     | jdbc:mysql://localhost:3306/test                                      | com.mysql.cj.jdbc.MysqlXADataSource                    | ",(0,l.kt)("a",{parentName:"p",href:"https://mvnrepository.com/artifact/mysql/mysql-connector-java"},"https://mvnrepository.com/artifact/mysql/mysql-connector-java"),"                         |\n| postgresql | org.postgresql.Driver                        | jdbc:postgresql://localhost:5432/postgres                             | org.postgresql.xa.PGXADataSource                       | ",(0,l.kt)("a",{parentName:"p",href:"https://mvnrepository.com/artifact/org.postgresql/postgresql"},"https://mvnrepository.com/artifact/org.postgresql/postgresql"),"                          |                                                             |\n| dm         | dm.jdbc.driver.DmDriver                      | jdbc:dm://localhost:5236                                              | dm.jdbc.driver.DmdbXADataSource                        | ",(0,l.kt)("a",{parentName:"p",href:"https://mvnrepository.com/artifact/com.dameng/DmJdbcDriver18"},"https://mvnrepository.com/artifact/com.dameng/DmJdbcDriver18"),"                          |\n| phoenix    | org.apache.phoenix.queryserver.client.Driver | jdbc:phoenix:thin:url=http://localhost:8765;serialization=PROTOBUF    | /                                                      | ",(0,l.kt)("a",{parentName:"p",href:"https://mvnrepository.com/artifact/com.aliyun.phoenix/ali-phoenix-shaded-thin-client"},"https://mvnrepository.com/artifact/com.aliyun.phoenix/ali-phoenix-shaded-thin-client"),"  |\n| sqlserver  | com.microsoft.sqlserver.jdbc.SQLServerDriver | jdbc:microsoft:sqlserver://localhost:1433                             | com.microsoft.sqlserver.jdbc.SQLServerXADataSource     | ",(0,l.kt)("a",{parentName:"p",href:"https://mvnrepository.com/artifact/com.microsoft.sqlserver/mssql-jdbc"},"https://mvnrepository.com/artifact/com.microsoft.sqlserver/mssql-jdbc"),"                 |"),(0,l.kt)("h2",{id:"example"},"Example"),(0,l.kt)("p",null,"Simple"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},'jdbc {\n    url = "jdbc:mysql://localhost/test"\n    driver = "com.mysql.cj.jdbc.Driver"\n    user = "root"\n    password = "123456"\n    query = "insert into test_table(name,age) values(?,?)"\n}\n\n')),(0,l.kt)("p",null,"Exactly-once"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},'jdbc {\n\n    url = "jdbc:mysql://localhost/test"\n    driver = "com.mysql.cj.jdbc.Driver"\n\n    max_retries = 0\n    user = "root"\n    password = "123456"\n    query = "insert into test_table(name,age) values(?,?)"\n\n    is_exactly_once = "true"\n\n    xa_data_source_class_name = "com.mysql.cj.jdbc.MysqlXADataSource"\n}\n')))}d.isMDXComponent=!0}}]);