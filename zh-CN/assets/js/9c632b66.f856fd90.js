"use strict";(self.webpackChunkseatunnel_website=self.webpackChunkseatunnel_website||[]).push([[41450],{3905:function(t,e,n){n.d(e,{Zo:function(){return d},kt:function(){return c}});var a=n(67294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function o(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},l=Object.keys(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var s=a.createContext({}),p=function(t){var e=a.useContext(s),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},d=function(t){var e=p(t.components);return a.createElement(s.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},m=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,l=t.originalType,s=t.parentName,d=o(t,["components","mdxType","originalType","parentName"]),m=p(n),c=r,k=m["".concat(s,".").concat(c)]||m[c]||u[c]||l;return n?a.createElement(k,i(i({ref:e},d),{},{components:n})):a.createElement(k,i({ref:e},d))}));function c(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=n.length,i=new Array(l);i[0]=m;var o={};for(var s in e)hasOwnProperty.call(e,s)&&(o[s]=e[s]);o.originalType=t,o.mdxType="string"==typeof t?t:r,i[1]=o;for(var p=2;p<l;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},92804:function(t,e,n){n.r(e),n.d(e,{frontMatter:function(){return o},contentTitle:function(){return s},metadata:function(){return p},assets:function(){return d},toc:function(){return u},default:function(){return c}});var a=n(87462),r=n(63366),l=(n(67294),n(3905)),i=["components"],o={},s="MySQL CDC",p={unversionedId:"connector-v2/source/MySQL-CDC",id:"connector-v2/source/MySQL-CDC",title:"MySQL CDC",description:"MySQL CDC source connector",source:"@site/docs/connector-v2/source/MySQL-CDC.md",sourceDirName:"connector-v2/source",slug:"/connector-v2/source/MySQL-CDC",permalink:"/zh-CN/docs/connector-v2/source/MySQL-CDC",editUrl:"https://github.com/apache/incubator-seatunnel-website/edit/main/docs/connector-v2/source/MySQL-CDC.md",tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"My Hours",permalink:"/zh-CN/docs/connector-v2/source/MyHours"},next:{title:"MySQL",permalink:"/zh-CN/docs/connector-v2/source/Mysql"}},d={},u=[{value:"Support Those Engines",id:"support-those-engines",level:2},{value:"Description",id:"description",level:2},{value:"Key features",id:"key-features",level:2},{value:"Supported DataSource Info",id:"supported-datasource-info",level:2},{value:"Using Dependency",id:"using-dependency",level:2},{value:"Install Jdbc Driver",id:"install-jdbc-driver",level:3},{value:"For Flink Engine",id:"for-flink-engine",level:4},{value:"For SeaTunnel Zeta Engine",id:"for-seatunnel-zeta-engine",level:4},{value:"Creating MySQL user",id:"creating-mysql-user",level:3},{value:"Enabling the MySQL Binlog",id:"enabling-the-mysql-binlog",level:3},{value:"Notes",id:"notes",level:3},{value:"Setting up MySQL session timeouts",id:"setting-up-mysql-session-timeouts",level:4},{value:"Data Type Mapping",id:"data-type-mapping",level:2},{value:"Source Options",id:"source-options",level:2},{value:"Task Example",id:"task-example",level:2},{value:"Simple",id:"simple",level:3},{value:"Support debezium-compatible format send to kafka",id:"support-debezium-compatible-format-send-to-kafka",level:3},{value:"Support custom primary key for table",id:"support-custom-primary-key-for-table",level:3},{value:"Changelog",id:"changelog",level:2},{value:"next version",id:"next-version",level:3}],m={toc:u};function c(t){var e=t.components,n=(0,r.Z)(t,i);return(0,l.kt)("wrapper",(0,a.Z)({},m,n,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"mysql-cdc"},"MySQL CDC"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"MySQL CDC source connector")),(0,l.kt)("h2",{id:"support-those-engines"},"Support Those Engines"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"SeaTunnel Zeta",(0,l.kt)("br",null),"\nFlink ",(0,l.kt)("br",null))),(0,l.kt)("h2",{id:"description"},"Description"),(0,l.kt)("p",null,"The MySQL CDC connector allows for reading snapshot data and incremental data from MySQL database. This document\ndescribes how to set up the MySQL CDC connector to run SQL queries against MySQL databases."),(0,l.kt)("h2",{id:"key-features"},"Key features"),(0,l.kt)("ul",{className:"contains-task-list"},(0,l.kt)("li",{parentName:"ul",className:"task-list-item"},(0,l.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ",(0,l.kt)("a",{parentName:"li",href:"/zh-CN/docs/concept/connector-v2-features"},"batch")),(0,l.kt)("li",{parentName:"ul",className:"task-list-item"},(0,l.kt)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ",(0,l.kt)("a",{parentName:"li",href:"/zh-CN/docs/concept/connector-v2-features"},"stream")),(0,l.kt)("li",{parentName:"ul",className:"task-list-item"},(0,l.kt)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ",(0,l.kt)("a",{parentName:"li",href:"/zh-CN/docs/concept/connector-v2-features"},"exactly-once")),(0,l.kt)("li",{parentName:"ul",className:"task-list-item"},(0,l.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ",(0,l.kt)("a",{parentName:"li",href:"/zh-CN/docs/concept/connector-v2-features"},"column projection")),(0,l.kt)("li",{parentName:"ul",className:"task-list-item"},(0,l.kt)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ",(0,l.kt)("a",{parentName:"li",href:"/zh-CN/docs/concept/connector-v2-features"},"parallelism")),(0,l.kt)("li",{parentName:"ul",className:"task-list-item"},(0,l.kt)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ",(0,l.kt)("a",{parentName:"li",href:"/zh-CN/docs/concept/connector-v2-features"},"support user-defined split"))),(0,l.kt)("h2",{id:"supported-datasource-info"},"Supported DataSource Info"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Datasource"),(0,l.kt)("th",{parentName:"tr",align:null},"Supported versions"),(0,l.kt)("th",{parentName:"tr",align:null},"Driver"),(0,l.kt)("th",{parentName:"tr",align:null},"Url"),(0,l.kt)("th",{parentName:"tr",align:null},"Maven"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"MySQL"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("li",null," ",(0,l.kt)("a",{parentName:"td",href:"https://dev.mysql.com/doc"},"MySQL"),": 5.6, 5.7, 8.0.x "),(0,l.kt)("li",null," ",(0,l.kt)("a",{parentName:"td",href:"https://www.aliyun.com/product/rds/mysql"},"RDS MySQL"),": 5.6, 5.7, 8.0.x ")),(0,l.kt)("td",{parentName:"tr",align:null},"com.mysql.cj.jdbc.Driver"),(0,l.kt)("td",{parentName:"tr",align:null},"jdbc:mysql://localhost:3306/test"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://mvnrepository.com/artifact/mysql/mysql-connector-java/8.0.28"},"https://mvnrepository.com/artifact/mysql/mysql-connector-java/8.0.28"))))),(0,l.kt)("h2",{id:"using-dependency"},"Using Dependency"),(0,l.kt)("h3",{id:"install-jdbc-driver"},"Install Jdbc Driver"),(0,l.kt)("h4",{id:"for-flink-engine"},"For Flink Engine"),(0,l.kt)("blockquote",null,(0,l.kt)("ol",{parentName:"blockquote"},(0,l.kt)("li",{parentName:"ol"},"You need to ensure that the ",(0,l.kt)("a",{parentName:"li",href:"https://mvnrepository.com/artifact/mysql/mysql-connector-java"},"jdbc driver jar package")," has been placed in directory ",(0,l.kt)("inlineCode",{parentName:"li"},"${SEATUNNEL_HOME}/plugins/"),"."))),(0,l.kt)("h4",{id:"for-seatunnel-zeta-engine"},"For SeaTunnel Zeta Engine"),(0,l.kt)("blockquote",null,(0,l.kt)("ol",{parentName:"blockquote"},(0,l.kt)("li",{parentName:"ol"},"You need to ensure that the ",(0,l.kt)("a",{parentName:"li",href:"https://mvnrepository.com/artifact/mysql/mysql-connector-java"},"jdbc driver jar package")," has been placed in directory ",(0,l.kt)("inlineCode",{parentName:"li"},"${SEATUNNEL_HOME}/lib/"),"."))),(0,l.kt)("h3",{id:"creating-mysql-user"},"Creating MySQL user"),(0,l.kt)("p",null,"You have to define a MySQL user with appropriate permissions on all databases that the Debezium MySQL connector monitors."),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"Create the MySQL user:")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"mysql> CREATE USER 'user'@'localhost' IDENTIFIED BY 'password';\n")),(0,l.kt)("ol",{start:2},(0,l.kt)("li",{parentName:"ol"},"Grant the required permissions to the user:")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"mysql> GRANT SELECT, RELOAD, SHOW DATABASES, REPLICATION SLAVE, REPLICATION CLIENT ON *.* TO 'user' IDENTIFIED BY 'password';\n")),(0,l.kt)("ol",{start:3},(0,l.kt)("li",{parentName:"ol"},"Finalize the user\u2019s permissions:")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"mysql> FLUSH PRIVILEGES;\n")),(0,l.kt)("h3",{id:"enabling-the-mysql-binlog"},"Enabling the MySQL Binlog"),(0,l.kt)("p",null,"You must enable binary logging for MySQL replication. The binary logs record transaction updates for replication tools to propagate changes."),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"Check whether the ",(0,l.kt)("inlineCode",{parentName:"li"},"log-bin")," option is already on:")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"mysql> show variables where variable_name in ('log_bin', 'binlog_format', 'binlog_row_image', 'gtid_mode', 'enforce_gtid_consistency');\n+--------------------------+----------------+\n| Variable_name            | Value          |\n+--------------------------+----------------+\n| binlog_format            | ROW            |\n| binlog_row_image         | FULL           |\n| enforce_gtid_consistency | ON             |\n| gtid_mode                | ON             |\n| log_bin                  | ON             |\n+--------------------------+----------------+\n5 rows in set (0.00 sec)\n")),(0,l.kt)("ol",{start:2},(0,l.kt)("li",{parentName:"ol"},"If inconsistent with the above results, configure your MySQL server configuration file(",(0,l.kt)("inlineCode",{parentName:"li"},"$MYSQL_HOME/mysql.cnf"),") with the following properties, which are described in the table below:")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"# Enable binary replication log and set the prefix, expiration, and log format.\n# The prefix is arbitrary, expiration can be short for integration tests but would\n# be longer on a production system. Row-level info is required for ingest to work.\n# Server ID is required, but this will vary on production systems\nserver-id         = 223344\nlog_bin           = mysql-bin\nexpire_logs_days  = 10\nbinlog_format     = row\nbinlog_row_image  = FULL\n\n# enable gtid mode\ngtid_mode = on\nenforce_gtid_consistency = on\n")),(0,l.kt)("ol",{start:3},(0,l.kt)("li",{parentName:"ol"},"Restart MySQL Server")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"/etc/inint.d/mysqld restart\n")),(0,l.kt)("ol",{start:4},(0,l.kt)("li",{parentName:"ol"},"Confirm your changes by checking the binlog status once more:")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"mysql> show variables where variable_name in ('log_bin', 'binlog_format', 'binlog_row_image', 'gtid_mode', 'enforce_gtid_consistency');\n+--------------------------+----------------+\n| Variable_name            | Value          |\n+--------------------------+----------------+\n| binlog_format            | ROW            |\n| binlog_row_image         | FULL           |\n| enforce_gtid_consistency | ON             |\n| gtid_mode                | ON             |\n| log_bin                  | ON             |\n+--------------------------+----------------+\n5 rows in set (0.00 sec)\n")),(0,l.kt)("h3",{id:"notes"},"Notes"),(0,l.kt)("h4",{id:"setting-up-mysql-session-timeouts"},"Setting up MySQL session timeouts"),(0,l.kt)("p",null,"When an initial consistent snapshot is made for large databases, your established connection could timeout while the tables are being read. You can prevent this behavior by configuring interactive_timeout and wait_timeout in your MySQL configuration file."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"interactive_timeout"),": The number of seconds the server waits for activity on an interactive connection before closing it. See ",(0,l.kt)("a",{parentName:"li",href:"https://dev.mysql.com/doc/refman/8.0/en/server-system-variables.html#sysvar_interactive_timeout"},"MySQL\u2019s documentation")," for more details."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"wait_timeout"),": The number of seconds the server waits for activity on a non-interactive connection before closing it. See ",(0,l.kt)("a",{parentName:"li",href:"https://dev.mysql.com/doc/refman/8.0/en/server-system-variables.html#sysvar_wait_timeout"},"MySQL\u2019s documentation")," for more details.")),(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},"For more database settings see ",(0,l.kt)("a",{parentName:"em",href:"https://github.com/debezium/debezium/blob/1.6/documentation/modules/ROOT/pages/connectors/mysql.adoc#set-up"},"Debezium MySQL Connector"))),(0,l.kt)("h2",{id:"data-type-mapping"},"Data Type Mapping"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Mysql Data Type"),(0,l.kt)("th",{parentName:"tr",align:null},"SeaTunnel Data Type"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"BIT(1)",(0,l.kt)("br",null),"TINYINT(1)"),(0,l.kt)("td",{parentName:"tr",align:null},"BOOLEAN")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"TINYINT"),(0,l.kt)("td",{parentName:"tr",align:null},"TINYINT")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"TINYINT UNSIGNED",(0,l.kt)("br",null),"SMALLINT"),(0,l.kt)("td",{parentName:"tr",align:null},"SMALLINT")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"SMALLINT UNSIGNED",(0,l.kt)("br",null),"MEDIUMINT",(0,l.kt)("br",null),"MEDIUMINT UNSIGNED",(0,l.kt)("br",null),"INT",(0,l.kt)("br",null),"INTEGER",(0,l.kt)("br",null),"YEAR"),(0,l.kt)("td",{parentName:"tr",align:null},"INT")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"INT UNSIGNED",(0,l.kt)("br",null),"INTEGER UNSIGNED",(0,l.kt)("br",null),"BIGINT"),(0,l.kt)("td",{parentName:"tr",align:null},"BIGINT")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"BIGINT UNSIGNED"),(0,l.kt)("td",{parentName:"tr",align:null},"DECIMAL(20,0)")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"DECIMAL(p, s) ",(0,l.kt)("br",null),"DECIMAL(p, s) UNSIGNED ",(0,l.kt)("br",null),"NUMERIC(p, s) ",(0,l.kt)("br",null),"NUMERIC(p, s) UNSIGNED"),(0,l.kt)("td",{parentName:"tr",align:null},"DECIMAL(p,s)")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"FLOAT",(0,l.kt)("br",null),"FLOAT UNSIGNED"),(0,l.kt)("td",{parentName:"tr",align:null},"FLOAT")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"DOUBLE",(0,l.kt)("br",null),"DOUBLE UNSIGNED",(0,l.kt)("br",null),"REAL",(0,l.kt)("br",null),"REAL UNSIGNED"),(0,l.kt)("td",{parentName:"tr",align:null},"DOUBLE")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"CHAR",(0,l.kt)("br",null),"VARCHAR",(0,l.kt)("br",null),"TINYTEXT",(0,l.kt)("br",null),"MEDIUMTEXT",(0,l.kt)("br",null),"TEXT",(0,l.kt)("br",null),"LONGTEXT",(0,l.kt)("br",null),"ENUM",(0,l.kt)("br",null),"JSON",(0,l.kt)("br",null),"ENUM"),(0,l.kt)("td",{parentName:"tr",align:null},"STRING")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"DATE"),(0,l.kt)("td",{parentName:"tr",align:null},"DATE")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"TIME(s)"),(0,l.kt)("td",{parentName:"tr",align:null},"TIME(s)")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"DATETIME",(0,l.kt)("br",null),"TIMESTAMP(s)"),(0,l.kt)("td",{parentName:"tr",align:null},"TIMESTAMP(s)")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"BINARY",(0,l.kt)("br",null),"VARBINAR",(0,l.kt)("br",null),"BIT(p)",(0,l.kt)("br",null),"TINYBLOB",(0,l.kt)("br",null),"MEDIUMBLOB",(0,l.kt)("br",null),"BLOB",(0,l.kt)("br",null),"LONGBLOB ",(0,l.kt)("br",null),"GEOMETRY"),(0,l.kt)("td",{parentName:"tr",align:null},"BYTES")))),(0,l.kt)("h2",{id:"source-options"},"Source Options"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Required"),(0,l.kt)("th",{parentName:"tr",align:null},"Default"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"base-url"),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},"Yes"),(0,l.kt)("td",{parentName:"tr",align:null},"-"),(0,l.kt)("td",{parentName:"tr",align:null},"The URL of the JDBC connection. Refer to a case: ",(0,l.kt)("inlineCode",{parentName:"td"},"jdbc:mysql://localhost:3306:3306/test"),".")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"username"),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},"Yes"),(0,l.kt)("td",{parentName:"tr",align:null},"-"),(0,l.kt)("td",{parentName:"tr",align:null},"Name of the database to use when connecting to the database server.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"password"),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},"Yes"),(0,l.kt)("td",{parentName:"tr",align:null},"-"),(0,l.kt)("td",{parentName:"tr",align:null},"Password to use when connecting to the database server.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"database-names"),(0,l.kt)("td",{parentName:"tr",align:null},"List"),(0,l.kt)("td",{parentName:"tr",align:null},"No"),(0,l.kt)("td",{parentName:"tr",align:null},"-"),(0,l.kt)("td",{parentName:"tr",align:null},"Database name of the database to monitor.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"table-names"),(0,l.kt)("td",{parentName:"tr",align:null},"List"),(0,l.kt)("td",{parentName:"tr",align:null},"Yes"),(0,l.kt)("td",{parentName:"tr",align:null},"-"),(0,l.kt)("td",{parentName:"tr",align:null},"Table name of the database to monitor. The table name needs to include the database name, for example: ",(0,l.kt)("inlineCode",{parentName:"td"},"database_name.table_name"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"table-names-config"),(0,l.kt)("td",{parentName:"tr",align:null},"List"),(0,l.kt)("td",{parentName:"tr",align:null},"No"),(0,l.kt)("td",{parentName:"tr",align:null},"-"),(0,l.kt)("td",{parentName:"tr",align:null},'Table config list. for example: [{"table": "db1.schema1.table1","primaryKeys":','["key1"]',"}]")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"startup.mode"),(0,l.kt)("td",{parentName:"tr",align:null},"Enum"),(0,l.kt)("td",{parentName:"tr",align:null},"No"),(0,l.kt)("td",{parentName:"tr",align:null},"INITIAL"),(0,l.kt)("td",{parentName:"tr",align:null},"Optional startup mode for MySQL CDC consumer, valid enumerations are ",(0,l.kt)("inlineCode",{parentName:"td"},"initial"),", ",(0,l.kt)("inlineCode",{parentName:"td"},"earliest"),", ",(0,l.kt)("inlineCode",{parentName:"td"},"latest")," and ",(0,l.kt)("inlineCode",{parentName:"td"},"specific"),". ",(0,l.kt)("br",null)," ",(0,l.kt)("inlineCode",{parentName:"td"},"initial"),": Synchronize historical data at startup, and then synchronize incremental data.",(0,l.kt)("br",null)," ",(0,l.kt)("inlineCode",{parentName:"td"},"earliest"),": Startup from the earliest offset possible.",(0,l.kt)("br",null)," ",(0,l.kt)("inlineCode",{parentName:"td"},"latest"),": Startup from the latest offset.",(0,l.kt)("br",null)," ",(0,l.kt)("inlineCode",{parentName:"td"},"specific"),": Startup from user-supplied specific offsets.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"startup.specific-offset.file"),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},"No"),(0,l.kt)("td",{parentName:"tr",align:null},"-"),(0,l.kt)("td",{parentName:"tr",align:null},"Start from the specified binlog file name. ",(0,l.kt)("strong",{parentName:"td"},"Note, This option is required when the ",(0,l.kt)("inlineCode",{parentName:"strong"},"startup.mode")," option used ",(0,l.kt)("inlineCode",{parentName:"strong"},"specific"),"."))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"startup.specific-offset.pos"),(0,l.kt)("td",{parentName:"tr",align:null},"Long"),(0,l.kt)("td",{parentName:"tr",align:null},"No"),(0,l.kt)("td",{parentName:"tr",align:null},"-"),(0,l.kt)("td",{parentName:"tr",align:null},"Start from the specified binlog file position. ",(0,l.kt)("strong",{parentName:"td"},"Note, This option is required when the ",(0,l.kt)("inlineCode",{parentName:"strong"},"startup.mode")," option used ",(0,l.kt)("inlineCode",{parentName:"strong"},"specific"),"."))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"stop.mode"),(0,l.kt)("td",{parentName:"tr",align:null},"Enum"),(0,l.kt)("td",{parentName:"tr",align:null},"No"),(0,l.kt)("td",{parentName:"tr",align:null},"NEVER"),(0,l.kt)("td",{parentName:"tr",align:null},"Optional stop mode for MySQL CDC consumer, valid enumerations are ",(0,l.kt)("inlineCode",{parentName:"td"},"never"),", ",(0,l.kt)("inlineCode",{parentName:"td"},"latest")," or ",(0,l.kt)("inlineCode",{parentName:"td"},"specific"),". ",(0,l.kt)("br",null)," ",(0,l.kt)("inlineCode",{parentName:"td"},"never"),": Real-time job don't stop the source.",(0,l.kt)("br",null)," ",(0,l.kt)("inlineCode",{parentName:"td"},"latest"),": Stop from the latest offset.",(0,l.kt)("br",null)," ",(0,l.kt)("inlineCode",{parentName:"td"},"specific"),": Stop from user-supplied specific offset.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"stop.specific-offset.file"),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},"No"),(0,l.kt)("td",{parentName:"tr",align:null},"-"),(0,l.kt)("td",{parentName:"tr",align:null},"Stop from the specified binlog file name. ",(0,l.kt)("strong",{parentName:"td"},"Note, This option is required when the ",(0,l.kt)("inlineCode",{parentName:"strong"},"stop.mode")," option used ",(0,l.kt)("inlineCode",{parentName:"strong"},"specific"),"."))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"stop.specific-offset.pos"),(0,l.kt)("td",{parentName:"tr",align:null},"Long"),(0,l.kt)("td",{parentName:"tr",align:null},"No"),(0,l.kt)("td",{parentName:"tr",align:null},"-"),(0,l.kt)("td",{parentName:"tr",align:null},"Stop from the specified binlog file position. ",(0,l.kt)("strong",{parentName:"td"},"Note, This option is required when the ",(0,l.kt)("inlineCode",{parentName:"strong"},"stop.mode")," option used ",(0,l.kt)("inlineCode",{parentName:"strong"},"specific"),"."))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"snapshot.split.size"),(0,l.kt)("td",{parentName:"tr",align:null},"Integer"),(0,l.kt)("td",{parentName:"tr",align:null},"No"),(0,l.kt)("td",{parentName:"tr",align:null},"8096"),(0,l.kt)("td",{parentName:"tr",align:null},"The split size (number of rows) of table snapshot, captured tables are split into multiple splits when read the snapshot of table.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"snapshot.fetch.size"),(0,l.kt)("td",{parentName:"tr",align:null},"Integer"),(0,l.kt)("td",{parentName:"tr",align:null},"No"),(0,l.kt)("td",{parentName:"tr",align:null},"1024"),(0,l.kt)("td",{parentName:"tr",align:null},"The maximum fetch size for per poll when read table snapshot.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"server-id"),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},"No"),(0,l.kt)("td",{parentName:"tr",align:null},"-"),(0,l.kt)("td",{parentName:"tr",align:null},"A numeric ID or a numeric ID range of this database client, The numeric ID syntax is like ",(0,l.kt)("inlineCode",{parentName:"td"},"5400"),", the numeric ID range syntax is like '5400-5408'. ",(0,l.kt)("br",null)," Every ID must be unique across all currently-running database processes in the MySQL cluster. This connector joins the ",(0,l.kt)("br",null)," MySQL cluster as another server (with this unique ID) so it can read the binlog. ",(0,l.kt)("br",null)," By default, a random number is generated between 6500 and 2,148,492,146, though we recommend setting an explicit value.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"server-time-zone"),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},"No"),(0,l.kt)("td",{parentName:"tr",align:null},"UTC"),(0,l.kt)("td",{parentName:"tr",align:null},"The session time zone in database server. If not set, then ZoneId.systemDefault() is used to determine the server time zone.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"connect.timeout.ms"),(0,l.kt)("td",{parentName:"tr",align:null},"Duration"),(0,l.kt)("td",{parentName:"tr",align:null},"No"),(0,l.kt)("td",{parentName:"tr",align:null},"30000"),(0,l.kt)("td",{parentName:"tr",align:null},"The maximum time that the connector should wait after trying to connect to the database server before timing out.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"connect.max-retries"),(0,l.kt)("td",{parentName:"tr",align:null},"Integer"),(0,l.kt)("td",{parentName:"tr",align:null},"No"),(0,l.kt)("td",{parentName:"tr",align:null},"3"),(0,l.kt)("td",{parentName:"tr",align:null},"The max retry times that the connector should retry to build database server connection.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"connection.pool.size"),(0,l.kt)("td",{parentName:"tr",align:null},"Integer"),(0,l.kt)("td",{parentName:"tr",align:null},"No"),(0,l.kt)("td",{parentName:"tr",align:null},"20"),(0,l.kt)("td",{parentName:"tr",align:null},"The jdbc connection pool size.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"chunk-key.even-distribution.factor.upper-bound"),(0,l.kt)("td",{parentName:"tr",align:null},"Double"),(0,l.kt)("td",{parentName:"tr",align:null},"No"),(0,l.kt)("td",{parentName:"tr",align:null},"100"),(0,l.kt)("td",{parentName:"tr",align:null},"The upper bound of the chunk key distribution factor. This factor is used to determine whether the table data is evenly distributed. If the distribution factor is calculated to be less than or equal to this upper bound (i.e., (MAX(id) - MIN(id) + 1) / row count), the table chunks would be optimized for even distribution. Otherwise, if the distribution factor is greater, the table will be considered as unevenly distributed and the sampling-based sharding strategy will be used if the estimated shard count exceeds the value specified by ",(0,l.kt)("inlineCode",{parentName:"td"},"sample-sharding.threshold"),". The default value is 100.0.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"chunk-key.even-distribution.factor.lower-bound"),(0,l.kt)("td",{parentName:"tr",align:null},"Double"),(0,l.kt)("td",{parentName:"tr",align:null},"No"),(0,l.kt)("td",{parentName:"tr",align:null},"0.05"),(0,l.kt)("td",{parentName:"tr",align:null},"The lower bound of the chunk key distribution factor. This factor is used to determine whether the table data is evenly distributed. If the distribution factor is calculated to be greater than or equal to this lower bound (i.e., (MAX(id) - MIN(id) + 1) / row count), the table chunks would be optimized for even distribution. Otherwise, if the distribution factor is less, the table will be considered as unevenly distributed and the sampling-based sharding strategy will be used if the estimated shard count exceeds the value specified by ",(0,l.kt)("inlineCode",{parentName:"td"},"sample-sharding.threshold"),". The default value is 0.05.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"sample-sharding.threshold"),(0,l.kt)("td",{parentName:"tr",align:null},"Integer"),(0,l.kt)("td",{parentName:"tr",align:null},"No"),(0,l.kt)("td",{parentName:"tr",align:null},"1000"),(0,l.kt)("td",{parentName:"tr",align:null},"This configuration specifies the threshold of estimated shard count to trigger the sample sharding strategy. When the distribution factor is outside the bounds specified by ",(0,l.kt)("inlineCode",{parentName:"td"},"chunk-key.even-distribution.factor.upper-bound")," and ",(0,l.kt)("inlineCode",{parentName:"td"},"chunk-key.even-distribution.factor.lower-bound"),", and the estimated shard count (calculated as approximate row count / chunk size) exceeds this threshold, the sample sharding strategy will be used. This can help to handle large datasets more efficiently. The default value is 1000 shards.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"inverse-sampling.rate"),(0,l.kt)("td",{parentName:"tr",align:null},"Integer"),(0,l.kt)("td",{parentName:"tr",align:null},"No"),(0,l.kt)("td",{parentName:"tr",align:null},"1000"),(0,l.kt)("td",{parentName:"tr",align:null},"The inverse of the sampling rate used in the sample sharding strategy. For example, if this value is set to 1000, it means a 1/1000 sampling rate is applied during the sampling process. This option provides flexibility in controlling the granularity of the sampling, thus affecting the final number of shards. It's especially useful when dealing with very large datasets where a lower sampling rate is preferred. The default value is 1000.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"exactly_once"),(0,l.kt)("td",{parentName:"tr",align:null},"Boolean"),(0,l.kt)("td",{parentName:"tr",align:null},"No"),(0,l.kt)("td",{parentName:"tr",align:null},"false"),(0,l.kt)("td",{parentName:"tr",align:null},"Enable exactly once semantic.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"format"),(0,l.kt)("td",{parentName:"tr",align:null},"Enum"),(0,l.kt)("td",{parentName:"tr",align:null},"No"),(0,l.kt)("td",{parentName:"tr",align:null},"DEFAULT"),(0,l.kt)("td",{parentName:"tr",align:null},"Optional output format for MySQL CDC, valid enumerations are ",(0,l.kt)("inlineCode",{parentName:"td"},"DEFAULT"),"\u3001",(0,l.kt)("inlineCode",{parentName:"td"},"COMPATIBLE_DEBEZIUM_JSON"),".")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"debezium"),(0,l.kt)("td",{parentName:"tr",align:null},"Config"),(0,l.kt)("td",{parentName:"tr",align:null},"No"),(0,l.kt)("td",{parentName:"tr",align:null},"-"),(0,l.kt)("td",{parentName:"tr",align:null},"Pass-through ",(0,l.kt)("a",{parentName:"td",href:"https://github.com/debezium/debezium/blob/1.6/documentation/modules/ROOT/pages/connectors/mysql.adoc#connector-properties"},"Debezium's properties")," to Debezium Embedded Engine which is used to capture data changes from MySQL server.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"common-options"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"no"),(0,l.kt)("td",{parentName:"tr",align:null},"-"),(0,l.kt)("td",{parentName:"tr",align:null},"Source plugin common parameters, please refer to ",(0,l.kt)("a",{parentName:"td",href:"/zh-CN/docs/connector-v2/source/common-options"},"Source Common Options")," for details")))),(0,l.kt)("h2",{id:"task-example"},"Task Example"),(0,l.kt)("h3",{id:"simple"},"Simple"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Support multi-table reading")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},'env {\n  parallelism = 1\n  job.mode = "STREAMING"\n  checkpoint.interval = 10000\n}\n\nsource {\n  MySQL-CDC {\n    base-url = "jdbc:mysql://localhost:3306/testdb"\n    username = "root"\n    password = "root@123"\n    table-names = ["testdb.table1", "testdb.table2"]\n    \n    startup.mode = "initial"\n  }\n}\n\nsink {\n  Console {\n  }\n}\n')),(0,l.kt)("h3",{id:"support-debezium-compatible-format-send-to-kafka"},"Support debezium-compatible format send to kafka"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Must be used with kafka connector sink, see ",(0,l.kt)("a",{parentName:"p",href:"/zh-CN/docs/connector-v2/formats/cdc-compatible-debezium-json"},"compatible debezium format")," for details")),(0,l.kt)("h3",{id:"support-custom-primary-key-for-table"},"Support custom primary key for table"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},'env {\n  parallelism = 1\n  job.mode = "STREAMING"\n  checkpoint.interval = 10000\n}\n\nsource {\n  MySQL-CDC {\n    base-url = "jdbc:mysql://localhost:3306/testdb"\n    username = "root"\n    password = "root@123"\n    \n    table-names = ["testdb.table1", "testdb.table2"]\n    table-names-config = [\n      {\n        table = "testdb.table2"\n        primaryKeys = ["id"]\n      }\n    ]\n  }\n}\n\nsink {\n  Console {\n  }\n}\n')),(0,l.kt)("h2",{id:"changelog"},"Changelog"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Add MySQL CDC Source Connector")),(0,l.kt)("h3",{id:"next-version"},"next version"))}c.isMDXComponent=!0}}]);