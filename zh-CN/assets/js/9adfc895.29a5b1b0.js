"use strict";(self.webpackChunkseatunnel_website=self.webpackChunkseatunnel_website||[]).push([[5699],{3905:function(e,n,t){t.d(n,{Zo:function(){return p},kt:function(){return f}});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=r.createContext({}),u=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},p=function(e){var n=u(e.components);return r.createElement(s.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=u(t),f=a,m=d["".concat(s,".").concat(f)]||d[f]||c[f]||o;return t?r.createElement(m,l(l({ref:n},p),{},{components:t})):r.createElement(m,l({ref:n},p))}));function f(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,l=new Array(o);l[0]=d;var i={};for(var s in n)hasOwnProperty.call(n,s)&&(i[s]=n[s]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var u=2;u<o;u++)l[u]=t[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},8929:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return i},contentTitle:function(){return s},metadata:function(){return u},assets:function(){return p},toc:function(){return c},default:function(){return f}});var r=t(7462),a=t(3366),o=(t(7294),t(3905)),l=["components"],i={},s="Download and install",u={unversionedId:"flink/installation",id:"flink/installation",title:"Download and install",description:"Download",source:"@site/docs/flink/installation.md",sourceDirName:"flink",slug:"/flink/installation",permalink:"/zh-CN/docs/flink/installation",editUrl:"https://github.com/apache/incubator-seatunnel-website/edit/main/docs/flink/installation.md",tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"Command usage instructions",permalink:"/zh-CN/docs/spark/commands/start-seatunnel-spark.sh"},next:{title:"Quick start",permalink:"/zh-CN/docs/flink/quick-start"}},p={},c=[{value:"Download",id:"download",level:2},{value:"Environmental preparation",id:"environmental-preparation",level:2},{value:"Prepare JDK1.8",id:"prepare-jdk18",level:3},{value:"Get Flink ready",id:"get-flink-ready",level:3},{value:"Install seatunnel",id:"install-seatunnel",level:3}],d={toc:c};function f(e){var n=e.components,t=(0,a.Z)(e,l);return(0,o.kt)("wrapper",(0,r.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"download-and-install"},"Download and install"),(0,o.kt)("h2",{id:"download"},"Download"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"https://github.com/apache/incubator-seatunnel/releases\n")),(0,o.kt)("h2",{id:"environmental-preparation"},"Environmental preparation"),(0,o.kt)("h3",{id:"prepare-jdk18"},"Prepare JDK1.8"),(0,o.kt)("p",null,"seatunnel relies on the JDK1.8 runtime environment."),(0,o.kt)("h3",{id:"get-flink-ready"},"Get Flink ready"),(0,o.kt)("p",null,"Please ",(0,o.kt)("a",{parentName:"p",href:"https://flink.apache.org/downloads.html"},"download Flink")," first, please choose Flink version >= 1.9.0. The download is complete to ",(0,o.kt)("a",{parentName:"p",href:"https://nightlies.apache.org/flink/flink-docs-release-1.14/zh/docs/deployment/resource-providers/standalone/overview"},"install flink")),(0,o.kt)("h3",{id:"install-seatunnel"},"Install seatunnel"),(0,o.kt)("p",null,"Download the seatunnel installation package and unzip"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"wget https://github.com/apache/incubator-seatunnel/releases/download/v<version>/seatunnel-<version>.zip -O seatunnel-<version>.zip\nunzip seatunnel-<version>.zip\nln -s seatunnel-<version> seatunnel\n")),(0,o.kt)("p",null,"Without any complicated installation and configuration steps, please refer to ",(0,o.kt)("a",{parentName:"p",href:"/zh-CN/docs/flink/quick-start"},"Quick Start")," for the usage of seatunnel, and refer to Configuration for ",(0,o.kt)("a",{parentName:"p",href:"./configuration"},"configuration"),"."),(0,o.kt)("p",null,"If you want to deploy ",(0,o.kt)("inlineCode",{parentName:"p"},"seatunnel")," to run on ",(0,o.kt)("inlineCode",{parentName:"p"},"Flink Standalone/Yarn cluster")," , please refer to ",(0,o.kt)("a",{parentName:"p",href:"/zh-CN/docs/flink/deployment"},"seatunnel deployment")))}f.isMDXComponent=!0}}]);