"use strict";(self.webpackChunkvoice_wizard_docs=self.webpackChunkvoice_wizard_docs||[]).push([[4190],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>h});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var p=a.createContext({}),s=function(e){var t=a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},l="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,p=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),l=s(r),d=n,h=l["".concat(p,".").concat(d)]||l[d]||m[d]||o;return r?a.createElement(h,i(i({ref:t},u),{},{components:r})):a.createElement(h,i({ref:t},u))}));function h(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=d;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c[l]="string"==typeof e?e:n,i[1]=c;for(var s=2;s<o;s++)i[s]=r[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},3823:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>c,toc:()=>s});var a=r(7462),n=(r(7294),r(3905));const o={sidebar_position:1},i="Heartrate With HRToVRChat",c={unversionedId:"HeartRate/HRToVRChat",id:"HeartRate/HRToVRChat",title:"Heartrate With HRToVRChat",description:"For receiving heartrate data the Pulsoid Integration is a much better and easy to setup option than the OSC Listener route.",source:"@site/docs/HeartRate/HRToVRChat.md",sourceDirName:"HeartRate",slug:"/HeartRate/HRToVRChat",permalink:"/docs/HeartRate/HRToVRChat",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Heart Rate Integration",permalink:"/docs/category/heart-rate-integration"},next:{title:"Heartrate With Pulsoid",permalink:"/docs/HeartRate/HeartrateWithPulsoid"}},p={},s=[],u={toc:s},l="wrapper";function m(e){let{components:t,...r}=e;return(0,n.kt)(l,(0,a.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"heartrate-with-hrtovrchat"},"Heartrate With HRToVRChat"),(0,n.kt)("admonition",{type:"tip"},(0,n.kt)("p",{parentName:"admonition"},"For receiving heartrate data the ",(0,n.kt)("a",{parentName:"p",href:"/docs/HeartRate/HeartrateWithPulsoid"},"Pulsoid Integration")," is a much better and easy to setup option than the OSC Listener route.")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/200Tigersbloxed/HRtoVRChat_OSC"},"https://github.com/200Tigersbloxed/HRtoVRChat_OSC")),(0,n.kt)("li",{parentName:"ul"},"only thing you would change in the setup process is for port in HRtoVRChat_OSC to be changed to TTS Voice Wizard (4026 or what ever you changed the receive port to) ")),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/101527472/212259695-e9f289a4-03bd-468c-811c-f6f6d13f904b.png",alt:"image"}),"\n",(0,n.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/101527472/212259763-4ea0dc48-884c-4b0b-9961-92b9a2f154c9.png",alt:"image"})),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"You can also use my modified ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/VRCWizard/vrc-osc-miband-hrm-TTSVoiceWizard-compatible"},"https://github.com/VRCWizard/vrc-osc-miband-hrm-TTSVoiceWizard-compatible"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Once you have OSC Listener enabled and your Heartrate app running and sending to TTS Voice Wizard you can either use the default output by turning on ",(0,n.kt)("strong",{parentName:"p"},"Output Heartrate")," or set up the media integration tab like so\n",(0,n.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/101527472/213950293-cf5616a9-f958-4c5b-a1e9-228de7a994c3.png",alt:"image"})))))}m.isMDXComponent=!0}}]);