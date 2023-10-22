"use strict";(self.webpackChunkvoice_wizard_docs=self.webpackChunkvoice_wizard_docs||[]).push([[6894],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>y});var n=a(7294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var s=n.createContext({}),u=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},p=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),c=u(a),m=i,y=c["".concat(s,".").concat(m)]||c[m]||d[m]||r;return a?n.createElement(y,l(l({ref:t},p),{},{components:a})):n.createElement(y,l({ref:t},p))}));function y(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=a.length,l=new Array(r);l[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[c]="string"==typeof e?e:i,l[1]=o;for(var u=2;u<r;u++)l[u]=a[u];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},3874:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>d,frontMatter:()=>r,metadata:()=>o,toc:()=>u});var n=a(7462),i=(a(7294),a(3905));const r={sidebar_position:1},l="General Settings",o={unversionedId:"Settings/GeneralSettings",id:"Settings/GeneralSettings",title:"General Settings",description:"Dark Mode",source:"@site/docs/Settings/GeneralSettings.md",sourceDirName:"Settings",slug:"/Settings/GeneralSettings",permalink:"/TTS-Voice-Wizard-Docs/docs/Settings/GeneralSettings",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"In-App Settings",permalink:"/TTS-Voice-Wizard-Docs/docs/category/in-app-settings"},next:{title:"Hotkeys",permalink:"/TTS-Voice-Wizard-Docs/docs/Settings/Hotkeys"}},s={},u=[{value:"Dark Mode",id:"dark-mode",level:3},{value:"Always on Top",id:"always-on-top",level:3},{value:"Close Home Screen Banner on Start",id:"close-home-screen-banner-on-start",level:3},{value:"Auto Clear TTS Text Box Field",id:"auto-clear-tts-text-box-field",level:3},{value:"Auto Send TTS (for copy/paste)",id:"auto-send-tts-for-copypaste",level:3},{value:"Minimalist Navbar",id:"minimalist-navbar",level:3},{value:"Allow Minimizing to System Tray",id:"allow-minimizing-to-system-tray",level:3},{value:"Disable Windows Media (Debug)",id:"disable-windows-media-debug",level:3},{value:"Stop Currently Playing TTS on New TTS",id:"stop-currently-playing-tts-on-new-tts",level:3},{value:"Message Queue System",id:"message-queue-system",level:3},{value:"Delay Before Audio (ms)",id:"delay-before-audio-ms",level:3}],p={toc:u},c="wrapper";function d(e){let{components:t,...a}=e;return(0,i.kt)(c,(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"general-settings"},"General Settings"),(0,i.kt)("h3",{id:"dark-mode"},"Dark Mode"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Toggle between 2 color schemes")),(0,i.kt)("h3",{id:"always-on-top"},"Always on Top"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"TTS Voice Wizard will appear on top of other applications")),(0,i.kt)("h3",{id:"close-home-screen-banner-on-start"},"Close Home Screen Banner on Start"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Disposes of WebViewer resources from the home tab immediately after launch")),(0,i.kt)("h3",{id:"auto-clear-tts-text-box-field"},"Auto Clear TTS Text Box Field"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Clears the Text to Speech text field after clicking the Play button.")),(0,i.kt)("h3",{id:"auto-send-tts-for-copypaste"},"Auto Send TTS (for copy/paste)"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Automatically sends a TTS Message when the Text to Speech text field is changed. Primary for use in quickly copy and pasting text. ")),(0,i.kt)("h3",{id:"minimalist-navbar"},"Minimalist Navbar"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"make the navbatr more simple and compact")),(0,i.kt)("h3",{id:"allow-minimizing-to-system-tray"},"Allow Minimizing to System Tray"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"The minimize button now sends TTS Voice Wizard to the system tray"),(0,i.kt)("li",{parentName:"ul"},"TTS Voice Wizard will minimize to system tray on launch"),(0,i.kt)("li",{parentName:"ul"},"Double click the icon in system try to bring the app back to the foreground")),(0,i.kt)("h3",{id:"disable-windows-media-debug"},"Disable Windows Media (Debug)"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"When this toggle is enabled Windows Media Mode will not be initialized on program launch an be unusable"),(0,i.kt)("li",{parentName:"ul"},"Requires restarting the application"),(0,i.kt)("li",{parentName:"ul"},"This setting may be used if you believe windows media mode may be causing crashing.")),(0,i.kt)("h3",{id:"stop-currently-playing-tts-on-new-tts"},"Stop Currently Playing TTS on New TTS"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Upon playing a new TTS Message the currently playing message will be stopped")),(0,i.kt)("h3",{id:"message-queue-system"},"Message Queue System"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"The Message Queue System allows multiple TTS Messages to be queued and played after each other"),(0,i.kt)("li",{parentName:"ul"},"Delay Before Next in Queue (ms) ",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"add a delay before playing new TTS Messages"))),(0,i.kt)("li",{parentName:"ul"},"Delay After No TTS (ms)",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},'set the amount of time to wait for moving to the next message for "No TTS" Messages'))),(0,i.kt)("li",{parentName:"ul"},"Smart String Splitting",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Automatically break a message longer than the specified character limit into multiple messages")))),(0,i.kt)("h3",{id:"delay-before-audio-ms"},"Delay Before Audio (ms)"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"add a delay between text output and audio output")))}d.isMDXComponent=!0}}]);