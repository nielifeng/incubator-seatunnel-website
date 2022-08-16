"use strict";(self.webpackChunkseatunnel_website=self.webpackChunkseatunnel_website||[]).push([[8925],{3905:function(e,n,t){t.d(n,{Zo:function(){return u},kt:function(){return f}});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var p=r.createContext({}),s=function(e){var n=r.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},u=function(e){var n=s(e.components);return r.createElement(p.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=s(t),f=a,m=d["".concat(p,".").concat(f)]||d[f]||c[f]||o;return t?r.createElement(m,i(i({ref:n},u),{},{components:t})):r.createElement(m,i({ref:n},u))}));function f(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=d;var l={};for(var p in n)hasOwnProperty.call(n,p)&&(l[p]=n[p]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var s=2;s<o;s++)i[s]=t[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},3664:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return l},contentTitle:function(){return p},metadata:function(){return s},assets:function(){return u},toc:function(){return c},default:function(){return f}});var r=t(87462),a=t(63366),o=(t(67294),t(3905)),i=["components"],l={},p="Download and install",s={unversionedId:"spark/installation",id:"version-2.1.0/spark/installation",title:"Download and install",description:"download",source:"@site/versioned_docs/version-2.1.0/spark/installation.md",sourceDirName:"spark",slug:"/spark/installation",permalink:"/zh-CN/docs/2.1.0/spark/installation",editUrl:"https://github.com/apache/incubator-seatunnel-website/edit/main/versioned_docs/version-2.1.0/spark/installation.md",tags:[],version:"2.1.0",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"deployment",permalink:"/zh-CN/docs/2.1.0/spark/deployment"},next:{title:"Quick start",permalink:"/zh-CN/docs/2.1.0/spark/quick-start"}},u={},c=[{value:"download",id:"download",level:2},{value:"Environmental preparation",id:"environmental-preparation",level:2},{value:"Prepare JDK1.8",id:"prepare-jdk18",level:3},{value:"Get Spark ready",id:"get-spark-ready",level:3},{value:"Install seatunnel",id:"install-seatunnel",level:2}],d={toc:c};function f(e){var n=e.components,t=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"download-and-install"},"Download and install"),(0,o.kt)("h2",{id:"download"},"download"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"https://github.com/apache/incubator-seatunnel/releases\n")),(0,o.kt)("h2",{id:"environmental-preparation"},"Environmental preparation"),(0,o.kt)("h3",{id:"prepare-jdk18"},"Prepare JDK1.8"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"seatunnel")," relies on the ",(0,o.kt)("inlineCode",{parentName:"p"},"JDK1.8")," operating environment."),(0,o.kt)("h3",{id:"get-spark-ready"},"Get Spark ready"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"Seatunnel")," relies on ",(0,o.kt)("inlineCode",{parentName:"p"},"Spark")," . Before installing ",(0,o.kt)("inlineCode",{parentName:"p"},"seatunnel")," , you need to prepare ",(0,o.kt)("inlineCode",{parentName:"p"},"Spark")," . Please ",(0,o.kt)("a",{parentName:"p",href:"https://spark.apache.org/downloads.html"},"download Spark")," first, please select ",(0,o.kt)("inlineCode",{parentName:"p"},"Spark version >= 2.x.x"),". After downloading and decompressing, you can submit the Spark ",(0,o.kt)("inlineCode",{parentName:"p"},"deploy-mode = local")," mode task without any configuration. If you expect the task to run on the ",(0,o.kt)("inlineCode",{parentName:"p"},"Standalone cluster")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"Yarn cluster")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"Mesos cluster"),", please refer to the Spark official website configuration document."),(0,o.kt)("h2",{id:"install-seatunnel"},"Install seatunnel"),(0,o.kt)("p",null,"Download the ",(0,o.kt)("inlineCode",{parentName:"p"},"seatunnel")," installation package and unzip:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"wget https://github.com/apache/incubator-seatunnel/releases/download/v<version>/seatunnel-<version>.zip -O seatunnel-<version>.zip\nunzip seatunnel-<version>.zip\nln -s seatunnel-<version> seatunnel\n")),(0,o.kt)("p",null,"There are no complicated installation and configuration steps. Please refer to ",(0,o.kt)("a",{parentName:"p",href:"/zh-CN/docs/2.1.0/spark/quick-start"},"Quick Start")," for how to use ",(0,o.kt)("inlineCode",{parentName:"p"},"seatunnel")," , and refer to Configuration for ",(0,o.kt)("a",{parentName:"p",href:"./configuration"},"configuration"),"."))}f.isMDXComponent=!0}}]);