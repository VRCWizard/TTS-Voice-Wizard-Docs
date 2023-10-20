"use strict";(self.webpackChunkvoice_wizard_docs=self.webpackChunkvoice_wizard_docs||[]).push([[6277],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>m});var o=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,o,a=function(e,t){if(null==e)return{};var r,o,a={},n=Object.keys(e);for(o=0;o<n.length;o++)r=n[o],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(o=0;o<n.length;o++)r=n[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=o.createContext({}),p=function(e){var t=o.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=p(e.components);return o.createElement(u.Provider,{value:t},e.children)},s="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},h=o.forwardRef((function(e,t){var r=e.components,a=e.mdxType,n=e.originalType,u=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),s=p(r),h=a,m=s["".concat(u,".").concat(h)]||s[h]||d[h]||n;return r?o.createElement(m,i(i({ref:t},c),{},{components:r})):o.createElement(m,i({ref:t},c))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var n=r.length,i=new Array(n);i[0]=h;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l[s]="string"==typeof e?e:a,i[1]=l;for(var p=2;p<n;p++)i[p]=r[p];return o.createElement.apply(null,i)}return o.createElement.apply(null,r)}h.displayName="MDXCreateElement"},6102:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>d,frontMatter:()=>n,metadata:()=>l,toc:()=>p});var o=r(7462),a=(r(7294),r(3905));const n={sidebar_position:4},i="Virtual Cable",l={unversionedId:"getting-started/VirtualCable",id:"getting-started/VirtualCable",title:"Virtual Cable",description:"How to output TTS through a microphone?",source:"@site/docs/getting-started/VirtualCable.md",sourceDirName:"getting-started",slug:"/getting-started/VirtualCable",permalink:"/TTS-Voice-Wizard-Docs/docs/getting-started/VirtualCable",draft:!1,tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Text-To-Speech",permalink:"/TTS-Voice-Wizard-Docs/docs/getting-started/textToSpeech"},next:{title:"Sending Text Via OSC",permalink:"/TTS-Voice-Wizard-Docs/docs/getting-started/TextInVRChat"}},u={},p=[{value:"How to output TTS through a microphone?",id:"how-to-output-tts-through-a-microphone",level:2},{value:"Troubleshooting",id:"troubleshooting",level:2}],c={toc:p},s="wrapper";function d(e){let{components:t,...r}=e;return(0,a.kt)(s,(0,o.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"virtual-cable"},"Virtual Cable"),(0,a.kt)("h2",{id:"how-to-output-tts-through-a-microphone"},"How to output TTS through a microphone?"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Upon clicking the TTS button you should be able to hear the TTS audio through your set speakers device")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"To play audio through your microphone download a virtual audio cable, you can find one here: "),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("a",{parentName:"p",href:"https://vb-audio.com/Cable/"},"VB-Audio Cable")," (Recommended)")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("a",{parentName:"p",href:"https://vac.muzychenko.net/en/download.htm"},"VAC")," (choose the lite one)")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("a",{parentName:"p",href:"https://vb-audio.com/Voicemeeter/potato.htm"},"VoiceMeeter")," (help with VoiceMeeter will not be provided, google tutorials)")))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Make sure that your default devices for recording and playback (in control panel> sound) for your computer did not switch to the virtual cable. Or your desktop audio will play through the cable (or other weird stuff)")),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"This means there should be no green icon next to CABLE Input or CABLE Output")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},'Do NOT enable Control Panel > Sound "Listen to this device" for the virtual cable (IF YOU ARE A USER PRIOR TO UPDATE v1.0.5 TURN THAT OFF)'))))),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://github.com/VRCWizard/TTS-Voice-Wizard/assets/101527472/604b2133-5119-4f21-87c0-83b9c6367a46",alt:"image"})),(0,a.kt)("ol",{start:4},(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"TTS Voices Wizard Audio Devices"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Your microphone/input device for TTSVoiceWizard should be whatever microphone you normally use!"),(0,a.kt)("li",{parentName:"ul"},"Your speakers/1st output device for TTSVoiceWizard should be whatever headphones your normally use!"),(0,a.kt)("li",{parentName:"ul"},"Your 2nd output device for TTSVoiceWizard should be the virtual cable!"),(0,a.kt)("li",{parentName:"ul"},"Make sure to enable ",(0,a.kt)("strong",{parentName:"li"},"USE")," the 2nd output device :)"))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"External App Microphone Settings (e.g. Vrchat, Discord, any other app/game where you use a microphone)"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"In the application you want the audio to play in, like VRChat or Discord you will set your microphone to the virtual cable!"),(0,a.kt)("li",{parentName:"ul"},"In the game or app you wish to play audio in your microphone should be left unmuted (since it plays audio through your microphone...)")))),(0,a.kt)("p",null,"Example photo with TTS Voice Wizard and VRChat\n",(0,a.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/101527472/225780638-dbb7fae6-e365-4dc7-9be9-376418187ac6.png",alt:"image"})),(0,a.kt)("p",null,"Warning: if you have 2 devices with the same name, the first device in the list will always be chosen. If you wanted to use the 2nd device in the list consider changing it's name in Control Panel > Sound > properties for the duplicate device."),(0,a.kt)("h2",{id:"troubleshooting"},"Troubleshooting"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"If the cable suddenly seems to no longer function, check if Input or Output cable is muted/deafened\n",(0,a.kt)("img",{parentName:"li",src:"https://github.com/VRCWizard/TTS-Voice-Wizard/assets/101527472/ea364070-efe0-4581-a80e-2458048d3b9d",alt:"image"}))))}d.isMDXComponent=!0}}]);