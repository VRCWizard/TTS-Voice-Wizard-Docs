"use strict";(self.webpackChunkvoice_wizard_docs=self.webpackChunkvoice_wizard_docs||[]).push([[7758],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>h});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),s=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},m=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),c=s(n),u=r,h=c["".concat(p,".").concat(u)]||c[u]||d[u]||i;return n?a.createElement(h,o(o({ref:t},m),{},{components:n})):a.createElement(h,o({ref:t},m))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=u;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[c]="string"==typeof e?e:r,o[1]=l;for(var s=2;s<i;s++)o[s]=n[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},3109:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>s});var a=n(7462),r=(n(7294),n(3905));const i={sidebar_position:1},o="Whisper",l={unversionedId:"SpeechRecognitionMethods/Whisper",id:"SpeechRecognitionMethods/Whisper",title:"Whisper",description:"Implementation using WhisperNet a C# wrapper for whisper.cpp",source:"@site/docs/SpeechRecognitionMethods/Whisper.md",sourceDirName:"SpeechRecognitionMethods",slug:"/SpeechRecognitionMethods/Whisper",permalink:"/docs/SpeechRecognitionMethods/Whisper",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Speech Recognition Methods",permalink:"/docs/category/speech-recognition-methods"},next:{title:"DeepGram",permalink:"/docs/SpeechRecognitionMethods/DeepGram"}},p={},s=[{value:"Requirements",id:"requirements",level:2},{value:"Switching Models",id:"switching-models",level:2},{value:"Manually Adding Models",id:"manually-adding-models",level:2},{value:"Options",id:"options",level:2},{value:"Tips",id:"tips",level:2}],m={toc:s},c="wrapper";function d(e){let{components:t,...n}=e;return(0,r.kt)(c,(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"whisper"},"Whisper"),(0,r.kt)("p",null,"Implementation using ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/Const-me/Whisper"},"WhisperNet")," a C# wrapper for ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/ggerganov/whisper.cpp"},"whisper.cpp")," ",(0,r.kt)("br",null)),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"Keep in mind that this implementation of Whisper uses your GPU."),(0,r.kt)("p",{parentName:"admonition"},"The larger models may cause stuttering in a GPU intensive game like VRChat while in VR.")),(0,r.kt)("h2",{id:"requirements"},"Requirements"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Only supported platform is 64-bit Windows."),(0,r.kt)("li",{parentName:"ul"},"Should work on Windows 8.1 or newer, but I have only tested on Windows 10, Windows 11."),(0,r.kt)("li",{parentName:"ul"},"The library requires a Direct3D 11.0 capable GPU, which in 2023 simply means \u201cany hardware GPU\u201d. The most recent GPU without D3D 11.0 support was Intel ",(0,r.kt)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/Sandy_Bridge"},"Sandy Bridge")," from 2011."),(0,r.kt)("li",{parentName:"ul"},"On the CPU side, the library requires ",(0,r.kt)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/Advanced_Vector_Extensions"},"AVX1")," and ",(0,r.kt)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/F16C"},"F16C")," support."),(0,r.kt)("li",{parentName:"ul"},"Essentially if you CPU and GPU are from 2011 or earlier support is not guarenteed")),(0,r.kt)("h2",{id:"switching-models"},"Switching Models"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"You can use the ",(0,r.kt)("inlineCode",{parentName:"li"},"Auto Download Model")," dropdown to select a model and click the ",(0,r.kt)("inlineCode",{parentName:"li"},"Download or Select")," button to download and or select the chosen model.")),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://github.com/VRCWizard/TTS-Voice-Wizard/assets/101527472/fd51942d-394a-45b9-8ca1-795e34ca59ca",alt:"image"})),(0,r.kt)("h2",{id:"manually-adding-models"},"Manually Adding Models"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"To get started using Whisper Download one of the models below or from the official ",(0,r.kt)("a",{parentName:"li",href:"https://huggingface.co/ggerganov/whisper.cpp"},"whisper.cpp model list"))),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Recommended Model Download"),(0,r.kt)("th",{parentName:"tr",align:null},"Size"),(0,r.kt)("th",{parentName:"tr",align:null},"Memory"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://huggingface.co/ggerganov/whisper.cpp/resolve/main/ggml-medium.bin"},"ggml-medium.bin")),(0,r.kt)("td",{parentName:"tr",align:null},"1.5 GB"),(0,r.kt)("td",{parentName:"tr",align:null},"~2.6 GB")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://huggingface.co/ggerganov/whisper.cpp/resolve/main/ggml-small.bin"},"ggml-small.bin")),(0,r.kt)("td",{parentName:"tr",align:null},"466 MB"),(0,r.kt)("td",{parentName:"tr",align:null},"~1.0 GB")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://huggingface.co/ggerganov/whisper.cpp/resolve/main/ggml-base.bin"},"ggml-base.bin")),(0,r.kt)("td",{parentName:"tr",align:null},"142 MB"),(0,r.kt)("td",{parentName:"tr",align:null},"~500 MB")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://huggingface.co/ggerganov/whisper.cpp/resolve/main/ggml-tiny.bin"},"ggml-tiny.bin")),(0,r.kt)("td",{parentName:"tr",align:null},"75 MB"),(0,r.kt)("td",{parentName:"tr",align:null},"~390 MB")))),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},"Add the model to Speech Provider > Local > Whisper.cpp Model (BIN file)\n",(0,r.kt)("img",{parentName:"li",src:"https://user-images.githubusercontent.com/101527472/219901449-2b699b2c-535e-4da6-a01f-a2f045a34933.png",alt:"image"}))),(0,r.kt)("h2",{id:"options"},"Options"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Min Duration")," minimum audio chunk length"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Max Duration")," maximium audio chunk length")),(0,r.kt)("h2",{id:"tips"},"Tips"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Noises that the Whisper AI recognizes are filtered out by default. It can recognize music, keyboard and mouse clicks etc.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"If you notice that Whisper produces overlapping messages that play at the same time try using the Message Queue System found in the settings tab")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Try using a noise filtering software like ",(0,r.kt)("a",{parentName:"p",href:"https://steelseries.com/nahimic"},"Nahmic")," to filter the background noise coming through your microphone")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"If your computer has 2 GPU (like most gaming laptops) then you should make sure that TTS Voice Wizard is using your high performance GPU for Nvidia (this can be set from the Nvidia Control Panel)"),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{parentName:"p",src:"https://github.com/VRCWizard/TTS-Voice-Wizard/assets/101527472/d0e824ea-94d6-4caf-8022-badcf5509ffe",alt:"Set GPU"})))))}d.isMDXComponent=!0}}]);