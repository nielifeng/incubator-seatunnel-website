"use strict";(self.webpackChunkseatunnel_website=self.webpackChunkseatunnel_website||[]).push([[5279],{3905:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return d}});var i=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,i,o=function(e,t){if(null==e)return{};var n,i,o={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=i.createContext({}),u=function(e){var t=i.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},l=function(e){var t=u(e.components);return i.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},m=i.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),m=u(n),d=o,h=m["".concat(c,".").concat(d)]||m[d]||p[d]||a;return n?i.createElement(h,r(r({ref:t},l),{},{components:n})):i.createElement(h,r({ref:t},l))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,r=new Array(a);r[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,r[1]=s;for(var u=2;u<a;u++)r[u]=n[u];return i.createElement.apply(null,r)}return i.createElement.apply(null,n)}m.displayName="MDXCreateElement"},47769:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return c},metadata:function(){return u},assets:function(){return l},toc:function(){return p},default:function(){return d}});var i=n(87462),o=n(63366),a=(n(67294),n(3905)),r=["components"],s={title:"Documentation Notice",sidebar_position:1},c="Documentation Notice",u={unversionedId:"submit_guide/document",id:"submit_guide/document",title:"Documentation Notice",description:"Good documentation is critical for any type of software. Any contribution that can improve the Seatunnel documentation is welcome.",source:"@site/community/submit_guide/document.md",sourceDirName:"submit_guide",slug:"/submit_guide/document",permalink:"/community/submit_guide/document",editUrl:"https://github.com/apache/incubator-seatunnel-website/edit/main/community/submit_guide/document.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"Documentation Notice",sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Become Apache SeaTunnel Committer",permalink:"/community/contribution_guide/committer"},next:{title:"Submit Code",permalink:"/community/submit_guide/submit-code"}},l={},p=[{value:"Get the document project",id:"get-the-document-project",level:2},{value:"Preview and generate static files",id:"preview-and-generate-static-files",level:2},{value:"Directory structure",id:"directory-structure",level:2},{value:"Specification",id:"specification",level:2},{value:"Directory naming convention",id:"directory-naming-convention",level:3},{value:"Vue and the naming convention of static resource files",id:"vue-and-the-naming-convention-of-static-resource-files",level:3},{value:"Resource Path",id:"resource-path",level:3},{value:"Page content modification",id:"page-content-modification",level:3},{value:"Home page modification",id:"home-page-modification",level:3},{value:"Team page modification",id:"team-page-modification",level:3},{value:"User list page modification",id:"user-list-page-modification",level:3},{value:"version List page modification",id:"version-list-page-modification",level:3}],m={toc:p};function d(e){var t=e.components,n=(0,o.Z)(e,r);return(0,a.kt)("wrapper",(0,i.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"documentation-notice"},"Documentation Notice"),(0,a.kt)("p",null,"Good documentation is critical for any type of software. Any contribution that can improve the Seatunnel documentation is welcome."),(0,a.kt)("h2",{id:"get-the-document-project"},"Get the document project"),(0,a.kt)("p",null,"Documentation for the Seatunnel project is maintained in a separate ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/apache/incubator-seatunnel-website"},"git repository"),"."),(0,a.kt)("p",null,"First you need to fork the document project into your own github repository, and then clone the document to your local computer."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"git clone https://github.com/<your-github-user-name>/incubator-seatunnel-website\n")),(0,a.kt)("h2",{id:"preview-and-generate-static-files"},"Preview and generate static files"),(0,a.kt)("p",null,"This website is compiled using node, using Docusaurus framework components"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Download and install nodejs (version>12.5.0)"),(0,a.kt)("li",{parentName:"ol"},"Clone the code to the local ",(0,a.kt)("inlineCode",{parentName:"li"},"git clone git@github.com:apache/incubator-seatunnel-website.git")),(0,a.kt)("li",{parentName:"ol"},"Run ",(0,a.kt)("inlineCode",{parentName:"li"},"npm install")," to install the required dependent libraries."),(0,a.kt)("li",{parentName:"ol"},"Run ",(0,a.kt)("inlineCode",{parentName:"li"},"npm run start")," in the root directory, you can visit http://localhost:3000 to view the English mode preview of the site"),(0,a.kt)("li",{parentName:"ol"},"Run ",(0,a.kt)("inlineCode",{parentName:"li"},"npm run start-zh")," in the root directory, you can visit http://localhost:3000 to view the Chinese mode preview of the site"),(0,a.kt)("li",{parentName:"ol"},"To generate static website resource files, run ",(0,a.kt)("inlineCode",{parentName:"li"},"npm run build"),". The static resources of the build are in the build directory.")),(0,a.kt)("h2",{id:"directory-structure"},"Directory structure"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-html"},"|-- community \n|-- docs     // The next version of the document that will be released soon\n|-- download \n|-- faq      // Q&A\n|-- i18n    \n|   `-- zh-CN  //Internationalized Chinese\n|       |-- code.json\n|       |-- docusaurus-plugin-content-docs\n|       |-- docusaurus-plugin-content-docs-community\n|       |-- docusaurus-plugin-content-docs-download\n|       |-- docusaurus-plugin-content-docs-faq\n|       `-- docusaurus-theme-classic\n|-- resource  // Original project files for architecture/timing diagram/flow chart, etc.\n|-- src\n|   |-- components\n|   |-- css\n|   |-- js\n|   |-- pages\n|   |   |-- home\n|   |   |-- index.jsx\n|   |   |-- team\n|   |   |-- user\n|   |   `-- versions\n|   |-- styles\n|-- static // Picture static resource\n|   |-- doc  // document picture\n|   |-- user // users picture\n|   |-- home // homepage picture\n|   |-- img  // common picture\n|-- docusaurus.config.js\n\n")),(0,a.kt)("h2",{id:"specification"},"Specification"),(0,a.kt)("h3",{id:"directory-naming-convention"},"Directory naming convention"),(0,a.kt)("p",null,"Use all lowercase, separated by underscores. If there is a plural structure, use plural nomenclature, and do not use plural abbreviations"),(0,a.kt)("p",null,"Positive example: ",(0,a.kt)("inlineCode",{parentName:"p"},"scripts / styles / components / images / utils / layouts / demo_styles / demo-scripts / img / doc")),(0,a.kt)("p",null,"Counter example: ",(0,a.kt)("inlineCode",{parentName:"p"},"script / style / demoStyles / imgs / docs")),(0,a.kt)("h3",{id:"vue-and-the-naming-convention-of-static-resource-files"},"Vue and the naming convention of static resource files"),(0,a.kt)("p",null,"All lowercase, separated by a dash"),(0,a.kt)("p",null,"Positive example: ",(0,a.kt)("inlineCode",{parentName:"p"},"render-dom.js / signup.css / index.html / company-logo.png")),(0,a.kt)("p",null,"Counter example: ",(0,a.kt)("inlineCode",{parentName:"p"},"renderDom.js / UserManagement.html")),(0,a.kt)("h3",{id:"resource-path"},"Resource Path"),(0,a.kt)("p",null,"Image resources are unified under ",(0,a.kt)("inlineCode",{parentName:"p"},"static/{module name}")),(0,a.kt)("p",null,"css and other style files are placed in the ",(0,a.kt)("inlineCode",{parentName:"p"},"src/css")," directory"),(0,a.kt)("h3",{id:"page-content-modification"},"Page content modification"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Except for the homepage, team, user, Docs>All Version module page, all other pages can be directly jumped to the corresponding github resource modification page through the'Edit this page' button at the bottom")),(0,a.kt)("h3",{id:"home-page-modification"},"Home page modification"),(0,a.kt)("p",null,"Visit the page ",(0,a.kt)("a",{parentName:"p",href:"https://seatunnel.apache.org"},"https://seatunnel.apache.org"),"\nLocated in ",(0,a.kt)("inlineCode",{parentName:"p"},"src/pages/home")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"\u251c\u2500home\n\u2502 languages.json // Home page Chinese and English configuration\n\u2502 index.less     // homepage style\n")),(0,a.kt)("h3",{id:"team-page-modification"},"Team page modification"),(0,a.kt)("p",null,"Visit the page ",(0,a.kt)("a",{parentName:"p",href:"https://seatunnel.apache.org/team"},"https://seatunnel.apache.org/team"),"\nLocated in ",(0,a.kt)("inlineCode",{parentName:"p"},"src/pages/team")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"\u251c\u2500team\n\u2502 languages.json\n\u2502 index.js\n\u2502 index.less\n")),(0,a.kt)("h3",{id:"user-list-page-modification"},"User list page modification"),(0,a.kt)("p",null,"Visit the page ",(0,a.kt)("a",{parentName:"p",href:"https://seatunnel.apache.org/user"},"https://seatunnel.apache.org/user")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"Located in `src/pages/user`\n\u2514\u2500versions\n        data.json\n        images.json\n        index.js\n        index.less\n        languages.json\n")),(0,a.kt)("h3",{id:"version-list-page-modification"},"version List page modification"),(0,a.kt)("p",null,"Visit the page ",(0,a.kt)("a",{parentName:"p",href:"https://seatunnel.apache.org/versions"},"https://seatunnel.apache.org/versions")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"Located in `src/pages/versions`\n\u2514\u2500versions\n        languages.json\n        index.jsorchestrator/overview.md\n        index.less\n")))}d.isMDXComponent=!0}}]);