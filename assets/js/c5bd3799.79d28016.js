"use strict";(self.webpackChunkseatunnel_website=self.webpackChunkseatunnel_website||[]).push([[5377],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=l(n),m=o,f=u["".concat(c,".").concat(m)]||u[m]||d[m]||a;return n?r.createElement(f,i(i({ref:t},p),{},{components:n})):r.createElement(f,i({ref:t},p))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=u;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var l=2;l<a;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},9700:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return c},metadata:function(){return l},assets:function(){return p},toc:function(){return d},default:function(){return m}});var r=n(7462),o=n(3366),a=(n(7294),n(3905)),i=["components"],s={},c="How To Add New License",l={unversionedId:"development/new-license",id:"development/new-license",title:"How To Add New License",description:"If you have any new Jar binary package adding in you PR, you need to follow the steps below to notice license",source:"@site/docs/development/new-license.md",sourceDirName:"development",slug:"/development/new-license",permalink:"/docs/development/new-license",editUrl:"https://github.com/apache/incubator-seatunnel-website/edit/main/docs/development/new-license.md",tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"Set Up Develop Environment",permalink:"/docs/development/setup"},next:{title:"FAQ",permalink:"/docs/faq"}},p={},d=[],u={toc:d};function m(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"how-to-add-new-license"},"How To Add New License"),(0,a.kt)("p",null,"If you have any new Jar binary package adding in you PR, you need to follow the steps below to notice license"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"declared in ",(0,a.kt)("inlineCode",{parentName:"p"},"tools/dependencies/known-dependencies.txt"))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Add the corresponding License file under ",(0,a.kt)("inlineCode",{parentName:"p"},"seatunnel-dist/release-docs/licenses"),", if it is a standard Apache License, it does not need to be added")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Add the corresponding statement in ",(0,a.kt)("inlineCode",{parentName:"p"},"seatunnel-dist/release-docs/LICENSE")),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"# At the same time, you can also use the script to assist the inspection.\n# Because it only uses the Python native APIs and does not depend on any third-party libraries, it can run using the original Python environment.\n# Please refer to the documentation if you do not have a Python env: https://www.python.org/downloads/\n\n# First, generate the seatunnel-dist/target/THIRD-PARTY.txt temporary file\n./mvnw license:aggregate-add-third-party -DskipTests -Dcheckstyle.skip\n# Second, run the script to assist the inspection\npython3 tools/dependencies/license.py seatunnel-dist/target/THIRD-PARTY.txt seatunnel-dist/release-docs/LICENSE true\n"))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Add the corresponding statement in ",(0,a.kt)("inlineCode",{parentName:"p"},"seatunnel-dist/release-docs/NOTICE")))),(0,a.kt)("p",null,"If you want to learn more about strategy of License, you could read\n",(0,a.kt)("a",{parentName:"p",href:"https://seatunnel.apache.org/community/submit_guide/license"},"License Notice")," in submit guide."))}m.isMDXComponent=!0}}]);