"use strict";(self.webpackChunkvoice_wizard_docs=self.webpackChunkvoice_wizard_docs||[]).push([[3689],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>f});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),d=c(n),u=a,f=d["".concat(s,".").concat(u)]||d[u]||m[u]||o;return n?r.createElement(f,i(i({ref:t},l),{},{components:n})):r.createElement(f,i({ref:t},l))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=u;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p[d]="string"==typeof e?e:a,i[1]=p;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},8183:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>p,toc:()=>c});var r=n(7462),a=(n(7294),n(3905));const o={sidebar_position:3},i="Spotify API",p={unversionedId:"MediaIntegration/spotifyAPIMode",id:"MediaIntegration/spotifyAPIMode",title:"Spotify API",description:"1. This method takes  bit longer to setup. You don't have to set up both methods. Windows Media Mode can be used with Spotify too.",source:"@site/docs/MediaIntegration/spotifyAPIMode.md",sourceDirName:"MediaIntegration",slug:"/MediaIntegration/spotifyAPIMode",permalink:"/docs/MediaIntegration/spotifyAPIMode",draft:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Windows Media",permalink:"/docs/MediaIntegration/windowsMediaMode"},next:{title:"Media Integration Settings",permalink:"/docs/MediaIntegration/CustomizationVariables"}},s={},c=[],l={toc:c},d="wrapper";function m(e){let{components:t,...n}=e;return(0,a.kt)(d,(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"spotify-api"},"Spotify API"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"This method takes  bit longer to setup. You don't have to set up both methods. Windows Media Mode can be used with Spotify too.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Go to the Spotify developer dashboard ",(0,a.kt)("a",{parentName:"p",href:"https://developer.spotify.com/dashboard/"},"https://developer.spotify.com/dashboard/"))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Create a new app\n",(0,a.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/101527472/189543060-73dce2e7-0539-46d9-8d29-8d95fc582b09.png",alt:"image"}))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Add the correct redirect URI http://localhost:5000/callback\n",(0,a.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/101527472/184249336-b0c075c3-6a71-4b6f-b60b-0bd6ce012af7.png",alt:"image"}),"\n",(0,a.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/101527472/184249358-79ef66c1-890a-46ab-84ea-db3ec70d872f.png",alt:"image"}))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Save the changes")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"In TTS Voice Wizard Navigate to ",(0,a.kt)("strong",{parentName:"p"},"Addons > Media Integration")," and ",(0,a.kt)("strong",{parentName:"p"},"Enable Spotify API Mode"))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"You can now copy your ",(0,a.kt)("strong",{parentName:"p"},"Client ID")," into TTS Voice Wizard and click the ",(0,a.kt)("strong",{parentName:"p"},"Connect Spotify")," Button "))),(0,a.kt)("admonition",{title:"warning",type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"If a windows appears showing ",(0,a.kt)("strong",{parentName:"p"},'"INVALID_CLIENT: Invalid redirect URI"')," that means you didn't copy the redirect URL correctly (http://localhost:5000/callback notice that it is not https) ",(0,a.kt)("a",{parentName:"p",href:"https://youtu.be/6-zFSiRFu-A?si=XBDG1Vxl2bIq4nRa&t=63"},"Tutorial Video @ 1:03")),(0,a.kt)("p",{parentName:"admonition"},"If a windows appears showing ",(0,a.kt)("strong",{parentName:"p"},'"INVALID_CLIENT: Invalid client"')," that means you didn't copy your client id correctly. ",(0,a.kt)("a",{parentName:"p",href:"https://youtu.be/6-zFSiRFu-A?si=OdYxJf8JGmEZjnNZ&t=80"},"Tutorial Video @ 1:20"))),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/101527472/184249500-e217f021-1473-4056-8476-d19cb2e16af8.png",alt:"image"}),"\n",(0,a.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/101527472/197616561-71417189-be96-400e-8fd1-3e444e3ef99a.png",alt:"image"})),(0,a.kt)("ol",{start:8},(0,a.kt)("li",{parentName:"ol"},"YOU MAY HAVE TO RESTART THE APP AFTER CONNECTING SPOTIFY FOR THE FIRST TIME.")))}m.isMDXComponent=!0}}]);