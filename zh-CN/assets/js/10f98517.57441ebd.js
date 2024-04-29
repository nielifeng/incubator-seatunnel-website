"use strict";(self.webpackChunkseatunnel_website=self.webpackChunkseatunnel_website||[]).push([[6864],{3905:function(e,n,t){t.d(n,{Zo:function(){return p},kt:function(){return h}});var a=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function r(e,n){if(null==e)return{};var t,a,o=function(e,n){if(null==e)return{};var t,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=a.createContext({}),c=function(e){var n=a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},p=function(e){var n=c(e.components);return a.createElement(l.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},d=a.forwardRef((function(e,n){var t=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,p=r(e,["components","mdxType","originalType","parentName"]),d=c(t),h=o,f=d["".concat(l,".").concat(h)]||d[h]||u[h]||i;return t?a.createElement(f,s(s({ref:n},p),{},{components:t})):a.createElement(f,s({ref:n},p))}));function h(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=t.length,s=new Array(i);s[0]=d;var r={};for(var l in n)hasOwnProperty.call(n,l)&&(r[l]=n[l]);r.originalType=e,r.mdxType="string"==typeof e?e:o,s[1]=r;for(var c=2;c<i;c++)s[c]=t[c];return a.createElement.apply(null,s)}return a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},74794:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return r},contentTitle:function(){return l},metadata:function(){return c},assets:function(){return p},toc:function(){return u},default:function(){return h}});var a=t(87462),o=t(63366),i=(t(67294),t(3905)),s=["components"],r={sidebar_position:7},l=void 0,c={unversionedId:"seatunnel-engine/checkpoint-storage",id:"seatunnel-engine/checkpoint-storage",title:"checkpoint-storage",description:"----------------",source:"@site/docs/seatunnel-engine/checkpoint-storage.md",sourceDirName:"seatunnel-engine",slug:"/seatunnel-engine/checkpoint-storage",permalink:"/zh-CN/docs/seatunnel-engine/checkpoint-storage",editUrl:"https://github.com/apache/incubator-seatunnel-website/edit/main/docs/seatunnel-engine/checkpoint-storage.md",tags:[],version:"current",sidebarPosition:7,frontMatter:{sidebar_position:7},sidebar:"docs",previous:{title:"savepoint",permalink:"/zh-CN/docs/seatunnel-engine/savepoint"},next:{title:"rest-api",permalink:"/zh-CN/docs/seatunnel-engine/rest-api"}},p={},u=[{value:"Introduction",id:"introduction",level:2},{value:"Checkpoint Storage",id:"checkpoint-storage-1",level:3},{value:"Checkpoint Storage Configuration",id:"checkpoint-storage-configuration",level:3},{value:"OSS",id:"oss",level:4},{value:"S3",id:"s3",level:4},{value:"HDFS",id:"hdfs",level:4},{value:"LocalFile",id:"localfile",level:4},{value:"Enable cache",id:"enable-cache",level:3}],d={toc:u};function h(e){var n=e.components,t=(0,o.Z)(e,s);return(0,i.kt)("wrapper",(0,a.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("hr",null),(0,i.kt)("h1",{id:"checkpoint-storage"},"Checkpoint Storage"),(0,i.kt)("h2",{id:"introduction"},"Introduction"),(0,i.kt)("p",null,"Checkpoint is a fault-tolerant recovery mechanism. This mechanism ensures that when the program is running, it can recover itself even if it suddenly encounters an exception."),(0,i.kt)("h3",{id:"checkpoint-storage-1"},"Checkpoint Storage"),(0,i.kt)("p",null,"Checkpoint Storage is a storage mechanism for storing checkpoint data."),(0,i.kt)("p",null,"SeaTunnel Engine supports the following checkpoint storage types:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"HDFS (OSS,S3,HDFS,LocalFile)"),(0,i.kt)("li",{parentName:"ul"},"LocalFile (native), (it's deprecated: use Hdfs(LocalFile) instead.")),(0,i.kt)("p",null,"We used the microkernel design pattern to separate the checkpoint storage module from the engine. This allows users to implement their own checkpoint storage modules."),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"checkpoint-storage-api")," is the checkpoint storage module API, which defines the interface of the checkpoint storage module."),(0,i.kt)("p",null,"if you want to implement your own checkpoint storage module, you need to implement the ",(0,i.kt)("inlineCode",{parentName:"p"},"CheckpointStorage")," and provide the corresponding ",(0,i.kt)("inlineCode",{parentName:"p"},"CheckpointStorageFactory")," implementation."),(0,i.kt)("h3",{id:"checkpoint-storage-configuration"},"Checkpoint Storage Configuration"),(0,i.kt)("p",null,"The configuration of the ",(0,i.kt)("inlineCode",{parentName:"p"},"seatunnel-server")," module is in the ",(0,i.kt)("inlineCode",{parentName:"p"},"seatunnel.yaml")," file."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"\nseatunnel:\n    engine:\n        checkpoint:\n            storage:\n                type: hdfs #plugin name of checkpoint storage, we support hdfs(S3, local, hdfs), localfile (native local file) is the default, but this plugin is de\n              # plugin configuration\n                plugin-config: \n                  namespace: #checkpoint storage parent path, the default value is /seatunnel/checkpoint/\n                  K1: V1 # plugin other configuration\n                  K2: V2 # plugin other configuration   \n")),(0,i.kt)("p",null,'Notice: namespace must end with "/".'),(0,i.kt)("h4",{id:"oss"},"OSS"),(0,i.kt)("p",null,"Aliyun oss base on hdfs-file, so you can refer ",(0,i.kt)("a",{parentName:"p",href:"https://hadoop.apache.org/docs/stable/hadoop-aliyun/tools/hadoop-aliyun/index.html"},"hadoop oss docs")," to config oss."),(0,i.kt)("p",null,"Except when interacting with oss buckets, the oss client needs the credentials needed to interact with buckets.\nThe client supports multiple authentication mechanisms and can be configured as to which mechanisms to use, and their order of use. Custom implementations of org.apache.hadoop.fs.aliyun.oss.AliyunCredentialsProvider may also be used.\nif you used AliyunCredentialsProvider (can be obtained from the Aliyun Access Key Management), these consist of an access key, a secret key.\nyou can config like this:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"seatunnel:\n  engine:\n    checkpoint:\n      interval: 6000\n      timeout: 7000\n      storage:\n        type: hdfs\n        max-retained: 3\n        plugin-config:\n          storage.type: oss\n          oss.bucket: your-bucket\n          fs.oss.accessKeyId: your-access-key\n          fs.oss.accessKeySecret: your-secret-key\n          fs.oss.endpoint: endpoint address\n          fs.oss.credentials.provider: org.apache.hadoop.fs.aliyun.oss.AliyunCredentialsProvider\n")),(0,i.kt)("p",null,"For additional reading on the Hadoop Credential Provider API see: ",(0,i.kt)("a",{parentName:"p",href:"https://hadoop.apache.org/docs/stable/hadoop-project-dist/hadoop-common/CredentialProviderAPI.html"},"Credential Provider API"),"."),(0,i.kt)("p",null,"Aliyun oss Credential Provider implements see: ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/aliyun/aliyun-oss-java-sdk/tree/master/src/main/java/com/aliyun/oss/common/auth"},"Auth Credential Providers")),(0,i.kt)("h4",{id:"s3"},"S3"),(0,i.kt)("p",null,"S3 base on hdfs-file, so you can refer ",(0,i.kt)("a",{parentName:"p",href:"https://hadoop.apache.org/docs/stable/hadoop-aws/tools/hadoop-aws/index.html"},"hadoop s3 docs")," to config s3."),(0,i.kt)("p",null,"Except when interacting with public S3 buckets, the S3A client needs the credentials needed to interact with buckets.\nThe client supports multiple authentication mechanisms and can be configured as to which mechanisms to use, and their order of use. Custom implementations of com.amazonaws.auth.AWSCredentialsProvider may also be used.\nif you used SimpleAWSCredentialsProvider (can be obtained from the Amazon Security Token Service), these consist of an access key, a secret key.\nyou can config like this:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"\nseatunnel:\n    engine:\n        checkpoint:\n            interval: 6000\n            timeout: 7000\n            storage:\n                type: hdfs\n                max-retained: 3\n                plugin-config:\n                    storage.type: s3\n                    s3.bucket: your-bucket\n                    fs.s3a.access.key: your-access-key\n                    fs.s3a.secret.key: your-secret-key\n                    fs.s3a.aws.credentials.provider: org.apache.hadoop.fs.s3a.SimpleAWSCredentialsProvider\n                    \n\n")),(0,i.kt)("p",null,"if you used ",(0,i.kt)("inlineCode",{parentName:"p"},"InstanceProfileCredentialsProvider"),", this supports use of instance profile credentials if running in an EC2 VM, you could check ",(0,i.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/zh_cn/AWSEC2/latest/UserGuide/iam-roles-for-amazon-ec2.html"},"iam-roles-for-amazon-ec2"),".\nyou can config like this:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"\nseatunnel:\n  engine:\n    checkpoint:\n      interval: 6000\n      timeout: 7000\n      storage:\n        type: hdfs\n        max-retained: 3\n        plugin-config:\n          storage.type: s3\n          s3.bucket: your-bucket\n          fs.s3a.endpoint: your-endpoint\n          fs.s3a.aws.credentials.provider: org.apache.hadoop.fs.s3a.InstanceProfileCredentialsProvider\n")),(0,i.kt)("p",null,"If you want to use Minio that supports the S3 protocol as checkpoint storage, you should configure it this way:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"\nseatunnel:\n  engine:\n    checkpoint:\n      interval: 10000\n      timeout: 60000\n      storage:\n        type: hdfs\n        max-retained: 3\n        plugin-config:\n          storage.type: s3\n          fs.s3a.access.key: xxxxxxxxx # Access Key  of MinIO\n          fs.s3a.secret.key: xxxxxxxxxxxxxxxxxxxxx # Secret Key of MinIO\n          fs.s3a.endpoint: http://127.0.0.1:9000 # Minio HTTP service access address\n          s3.bucket: s3a://test # test is the bucket name which  storage the checkpoint file\n          fs.s3a.aws.credentials.provider: org.apache.hadoop.fs.s3a.SimpleAWSCredentialsProvider\n       # important: The user of this key needs to have write permission for the bucket, otherwise an exception of 403 will be returned\n")),(0,i.kt)("p",null,"For additional reading on the Hadoop Credential Provider API see: ",(0,i.kt)("a",{parentName:"p",href:"https://hadoop.apache.org/docs/stable/hadoop-project-dist/hadoop-common/CredentialProviderAPI.html"},"Credential Provider API"),"."),(0,i.kt)("h4",{id:"hdfs"},"HDFS"),(0,i.kt)("p",null,"if you used HDFS, you can config like this:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"seatunnel:\n  engine:\n    checkpoint:\n      storage:\n        type: hdfs\n        max-retained: 3\n        plugin-config:\n          storage.type: hdfs\n          fs.defaultFS: hdfs://localhost:9000\n          // if you used kerberos, you can config like this:\n          kerberosPrincipal: your-kerberos-principal\n          kerberosKeytabFilePath: your-kerberos-keytab\n          // if you need hdfs-site config, you can config like this:\n          hdfs_site_path: /path/to/your/hdfs_site_path\n")),(0,i.kt)("p",null,"if HDFS is in HA mode , you can config like this:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"seatunnel:\n  engine:\n    checkpoint:\n      storage:\n        type: hdfs\n        max-retained: 3\n        plugin-config:\n          storage.type: hdfs\n          fs.defaultFS: hdfs://usdp-bing\n          seatunnel.hadoop.dfs.nameservices: usdp-bing\n          seatunnel.hadoop.dfs.ha.namenodes.usdp-bing: nn1,nn2\n          seatunnel.hadoop.dfs.namenode.rpc-address.usdp-bing.nn1: usdp-bing-nn1:8020\n          seatunnel.hadoop.dfs.namenode.rpc-address.usdp-bing.nn2: usdp-bing-nn2:8020\n          seatunnel.hadoop.dfs.client.failover.proxy.provider.usdp-bing: org.apache.hadoop.hdfs.server.namenode.ha.ConfiguredFailoverProxyProvider\n\n")),(0,i.kt)("p",null,"if HDFS has  some other configs in ",(0,i.kt)("inlineCode",{parentName:"p"},"hdfs-site.xml")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"core-site.xml")," , just set HDFS config by using  ",(0,i.kt)("inlineCode",{parentName:"p"},"seatunnel.hadoop."),"  prefix."),(0,i.kt)("h4",{id:"localfile"},"LocalFile"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"seatunnel:\n  engine:\n    checkpoint:\n      interval: 6000\n      timeout: 7000\n      storage:\n        type: hdfs\n        max-retained: 3\n        plugin-config:\n          storage.type: hdfs\n          fs.defaultFS: file:/// # Ensure that the directory has written permission \n\n")),(0,i.kt)("h3",{id:"enable-cache"},"Enable cache"),(0,i.kt)("p",null,"When storage:type is hdfs, cache is disabled by default. If you want to enable it, set ",(0,i.kt)("inlineCode",{parentName:"p"},"disable.cache: false")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"seatunnel:\n  engine:\n    checkpoint:\n      interval: 6000\n      timeout: 7000\n      storage:\n        type: hdfs\n        max-retained: 3\n        plugin-config:\n          storage.type: hdfs\n          disable.cache: false\n          fs.defaultFS: hdfs:///\n\n")),(0,i.kt)("p",null,"or"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"seatunnel:\n  engine:\n    checkpoint:\n      interval: 6000\n      timeout: 7000\n      storage:\n        type: hdfs\n        max-retained: 3\n        plugin-config:\n          storage.type: hdfs\n          disable.cache: false\n          fs.defaultFS: file:///\n")))}h.isMDXComponent=!0}}]);