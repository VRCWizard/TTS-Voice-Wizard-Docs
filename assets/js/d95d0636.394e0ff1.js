"use strict";(self.webpackChunkvoice_wizard_docs=self.webpackChunkvoice_wizard_docs||[]).push([[8671],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>h});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=c(n),m=i,h=u["".concat(s,".").concat(m)]||u[m]||p[m]||r;return n?a.createElement(h,o(o({ref:t},d),{},{components:n})):a.createElement(h,o({ref:t},d))}));function h(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:i,o[1]=l;for(var c=2;c<r;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},7408:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>p,frontMatter:()=>r,metadata:()=>l,toc:()=>c});var a=n(7462),i=(n(7294),n(3905));const r={sidebar_position:2},o="DeepGram",l={unversionedId:"SpeechRecognitionMethods/DeepGram",id:"SpeechRecognitionMethods/DeepGram",title:"DeepGram",description:"This feature is only available with a VoiceWizardPro API Key",source:"@site/docs/SpeechRecognitionMethods/DeepGram.md",sourceDirName:"SpeechRecognitionMethods",slug:"/SpeechRecognitionMethods/DeepGram",permalink:"/docs/SpeechRecognitionMethods/DeepGram",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Whisper",permalink:"/docs/SpeechRecognitionMethods/Whisper"},next:{title:"Azure (STT)",permalink:"/docs/SpeechRecognitionMethods/AzureSTT"}},s={},c=[{value:"Adjusting Settings",id:"adjusting-settings",level:3},{value:"Automatically Adjusting Silence Threshold",id:"automatically-adjusting-silence-threshold",level:4},{value:"Manually Adjusting Silence Threshold",id:"manually-adjusting-silence-threshold",level:4},{value:"Other Settings",id:"other-settings",level:4}],d={toc:c},u="wrapper";function p(e){let{components:t,...n}=e;return(0,i.kt)(u,(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"deepgram"},"DeepGram"),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"This feature is only available with a ",(0,i.kt)("a",{parentName:"p",href:"/docs/VoiceWizardPro/GetVoiceWizardPro"},"VoiceWizardPro API Key")," ")),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Select Deepgram (Pro Only) from Settings > Audio ")),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://github.com/VRCWizard/TTS-Voice-Wizard/assets/101527472/d007ce38-0680-49d8-93f7-a593d4d86756",alt:"image"})),(0,i.kt)("ol",{start:2},(0,i.kt)("li",{parentName:"ol"},"Go to the Speech Provider > Voice Wizard Pro and scroll down to DeepGram Recognition.")),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://github.com/VRCWizard/TTS-Voice-Wizard/assets/101527472/dfde059b-3a60-4017-b358-e04d03e8d84a",alt:"image"})),(0,i.kt)("h3",{id:"adjusting-settings"},"Adjusting Settings"),(0,i.kt)("h4",{id:"automatically-adjusting-silence-threshold"},"Automatically Adjusting Silence Threshold"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Click the calibrate button and wait 3 seconds for the silence threshold to be calibration. You should not talk during this time as it is sampling your baseline background sound.")),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://github.com/VRCWizard/TTS-Voice-Wizard-Docs/assets/101527472/03b85941-d115-415f-9bf9-9e4c6e5637ee",alt:"image"})),(0,i.kt)("h4",{id:"manually-adjusting-silence-threshold"},"Manually Adjusting Silence Threshold"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Click you're speech to text hotkey (Ctrl + G) by default to activate speech recognition while in this tab."),(0,i.kt)("li",{parentName:"ul"},"Monitor The dial")),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://github.com/VRCWizard/TTS-Voice-Wizard/assets/101527472/8358977d-da90-4ba8-8e13-ef221cfe578a",alt:"image"})),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"If the ",(0,i.kt)("strong",{parentName:"li"},"needle seems to ignore your voice")," then your environment is really quiet and you need to more the slider to the left towards ",(0,i.kt)("strong",{parentName:"li"},"silent"),".")),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://github.com/VRCWizard/TTS-Voice-Wizard/assets/101527472/e000ed05-9841-4eb0-b0b7-fc3c290969c3",alt:"image"})),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"If needle seems to ",(0,i.kt)("strong",{parentName:"li"},"think you're talking when you aren't")," you have a loud environment and you need to move the slider to the right towards ",(0,i.kt)("strong",{parentName:"li"},"loud"),". ")),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://github.com/VRCWizard/TTS-Voice-Wizard/assets/101527472/aed02ad4-c7c4-4035-9eed-48195c2ad7ee",alt:"image"})),(0,i.kt)("h4",{id:"other-settings"},"Other Settings"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Minimum Audio Duration is the shortest duration a audio clip can have in seconds"),(0,i.kt)("li",{parentName:"ul"},"Maximum audio duration is the longest duration an audio clip can have with a soft cap of 25 seconds and a hard cap in the API of 30 seconds."),(0,i.kt)("li",{parentName:"ul"},"Minimum Valid VAD Duration is shortest concurrent voice activation needed for a clip to be valid (processed by the API)"),(0,i.kt)("li",{parentName:"ul"},"Silence Scale is essentially how long of a pause you can take before the audio clip is processed. A larger number means you can take a longer pause/ must wait longer before clip will be processed.")))}p.isMDXComponent=!0}}]);