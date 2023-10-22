"use strict";(self.webpackChunkvoice_wizard_docs=self.webpackChunkvoice_wizard_docs||[]).push([[9321],{3905:(t,e,a)=>{a.d(e,{Zo:()=>c,kt:()=>h});var r=a(7294);function n(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function o(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,r)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?o(Object(a),!0).forEach((function(e){n(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function l(t,e){if(null==t)return{};var a,r,n=function(t,e){if(null==t)return{};var a,r,n={},o=Object.keys(t);for(r=0;r<o.length;r++)a=o[r],e.indexOf(a)>=0||(n[a]=t[a]);return n}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(r=0;r<o.length;r++)a=o[r],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(n[a]=t[a])}return n}var s=r.createContext({}),d=function(t){var e=r.useContext(s),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},c=function(t){var e=d(t.components);return r.createElement(s.Provider,{value:e},t.children)},p="mdxType",m={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},u=r.forwardRef((function(t,e){var a=t.components,n=t.mdxType,o=t.originalType,s=t.parentName,c=l(t,["components","mdxType","originalType","parentName"]),p=d(a),u=n,h=p["".concat(s,".").concat(u)]||p[u]||m[u]||o;return a?r.createElement(h,i(i({ref:e},c),{},{components:a})):r.createElement(h,i({ref:e},c))}));function h(t,e){var a=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var o=a.length,i=new Array(o);i[0]=u;var l={};for(var s in e)hasOwnProperty.call(e,s)&&(l[s]=e[s]);l.originalType=t,l[p]="string"==typeof t?t:n,i[1]=l;for(var d=2;d<o;d++)i[d]=a[d];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}u.displayName="MDXCreateElement"},5899:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>s,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>l,toc:()=>d});var r=a(7462),n=(a(7294),a(3905));const o={sidebar_position:3},i="Text-To-Speech",l={unversionedId:"getting-started/textToSpeech",id:"getting-started/textToSpeech",title:"Text-To-Speech",description:"Some Text-To-Speech Methods such as Google Cloud and IBM Watson are VoiceWizardPro Only! Subscribe to the Patreon or Kofi to unlock them.",source:"@site/docs/getting-started/textToSpeech.md",sourceDirName:"getting-started",slug:"/getting-started/textToSpeech",permalink:"/TTS-Voice-Wizard-Docs/docs/getting-started/textToSpeech",draft:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Speech-To-Text",permalink:"/TTS-Voice-Wizard-Docs/docs/getting-started/speechToText"},next:{title:"Virtual Cable",permalink:"/TTS-Voice-Wizard-Docs/docs/getting-started/VirtualCable"}},s={},d=[{value:"Text-to-Speech-Methods",id:"text-to-speech-methods",level:2},{value:"TTS Methods List",id:"tts-methods-list",level:2},{value:"\ud83d\udd0c Playing Audio Through Your Microphone",id:"-playing-audio-through-your-microphone",level:2}],c={toc:d},p="wrapper";function m(t){let{components:e,...a}=t;return(0,n.kt)(p,(0,r.Z)({},c,a,{components:e,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"text-to-speech"},"Text-To-Speech"),(0,n.kt)("admonition",{type:"tip"},(0,n.kt)("p",{parentName:"admonition"},"Some Text-To-Speech Methods such as ",(0,n.kt)("strong",{parentName:"p"},"Google Cloud")," and ",(0,n.kt)("strong",{parentName:"p"},"IBM Watson")," are ",(0,n.kt)("strong",{parentName:"p"},"VoiceWizardPro Only!")," Subscribe to the ",(0,n.kt)("a",{parentName:"p",href:"https://www.patreon.com/ttsvoicewizard"},"Patreon")," or ",(0,n.kt)("a",{parentName:"p",href:"https://ko-fi.com/ttsvoicewizard"},"Kofi")," to unlock them. ")),(0,n.kt)("h2",{id:"text-to-speech-methods"},"Text-to-Speech-Methods"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Change and use various TTS methods from the ",(0,n.kt)("strong",{parentName:"li"},"Text to Speech Tab"))),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/101527472/221025655-874ca475-17d0-4078-8653-7e7e8c7f57a4.png",alt:"image"})),(0,n.kt)("h2",{id:"tts-methods-list"},"TTS Methods List"),(0,n.kt)("p",null,"Some of these methods require some sort of setup. Click the name of the Text-to-Speech method to take you to its respective wiki page for more information."),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Text-to-Speech Method"),(0,n.kt)("th",{parentName:"tr",align:null},"Included with VoiceWizardPro"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"),(0,n.kt)("th",{parentName:"tr",align:null},"Free Character Pricing"),(0,n.kt)("th",{parentName:"tr",align:null},"Audio Sample"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"docs/TTSMethods/SystemSpeechTTS"},"System Speech")),(0,n.kt)("td",{parentName:"tr",align:null},"Included by default"),(0,n.kt)("td",{parentName:"tr",align:null},'This option uses voices from the voice packages you have installed on your windows system. Any SAPI5 voices you install on your system should work.  - Japanese "Anime Style" Voices for SAPI5: ',(0,n.kt)("a",{parentName:"td",href:"https://github.com/shigobu/SAPIForVOICEVOX"},"shigobu/SAPIForVOICEVOX"),"  - Windows XP Voices (including Microsoft Sam) for SAPI5: ",(0,n.kt)("a",{parentName:"td",href:"https://wink.messengergeek.com/uploads/short-url/8tznlBq2ZpwqOOchX0KpXWwbwZP.exe"},"Get WinXP_TTS_Voice_v1.3")," (file sourced from ",(0,n.kt)("a",{parentName:"td",href:"https://wink.messengergeek.com/t/guys-i-have-the-sapi5-ttsapp-with-microsoft-sam-downloads/19887"},"here"),")"),(0,n.kt)("td",{parentName:"tr",align:null},"Unlimited"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://github.com/VRCWizard/TTS-Voice-Wizard/assets/101527472/3efac7a3-3e54-4b8a-a0cf-45da0152786e"},"download"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"docs/TTSMethods/AzureTTS"},"Azure")),(0,n.kt)("td",{parentName:"tr",align:null},"Yes"),(0,n.kt)("td",{parentName:"tr",align:null},"Realistic TTS Voices accessible via API"),(0,n.kt)("td",{parentName:"tr",align:null},"500k characters for free a month ",(0,n.kt)("strong",{parentName:"td"},"FOREVER")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://github.com/VRCWizard/TTS-Voice-Wizard/assets/101527472/10dc15bf-d421-411c-b85e-4771275ef519"},"download"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"docs/TTSMethods/AmazonPolly"},"Amazon Polly")),(0,n.kt)("td",{parentName:"tr",align:null},"Yes"),(0,n.kt)("td",{parentName:"tr",align:null},"Realistic TTS Voices accessible via API. These voices are iconically used by many TTS VTubers"),(0,n.kt)("td",{parentName:"tr",align:null},"5mill characters (1mill for neural voices) for free each month for the ",(0,n.kt)("strong",{parentName:"td"},"first 12 months")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://github.com/VRCWizard/TTS-Voice-Wizard/assets/101527472/125022e5-035c-4a68-8989-d5fff27360d1"},"download"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"docs/TTSMethods/GoogleCloud"},"Google Cloud")),(0,n.kt)("td",{parentName:"tr",align:null},"Yes"),(0,n.kt)("td",{parentName:"tr",align:null},"Realistic TTS Voices only accessible via VoiceWizardPro"),(0,n.kt)("td",{parentName:"tr",align:null},"N/A"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://github.com/VRCWizard/TTS-Voice-Wizard/assets/101527472/7f7c69a3-d5f1-46b9-a7b0-0518feebc200"},"download"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"TikTok"),(0,n.kt)("td",{parentName:"tr",align:null},"Included by default"),(0,n.kt)("td",{parentName:"tr",align:null},"Voices accessible for free via the TikTok API (made possible by ",(0,n.kt)("a",{parentName:"td",href:"https://weilbyte.github.io/tiktok-tts/"},"Weilbyte's Tiktok TTS")," endpoint). Best option if you are looking for high fidelity TTS voices to use without limits"),(0,n.kt)("td",{parentName:"tr",align:null},"Unlimited"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://github.com/VRCWizard/TTS-Voice-Wizard/assets/101527472/8188d9d7-7bf4-4db9-92b3-1743255956ed"},"download"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"docs/TTSMethods/Moonbase"},"Moonbase")),(0,n.kt)("td",{parentName:"tr",align:null},"Included by default"),(0,n.kt)("td",{parentName:"tr",align:null},"Moonbase Alpha style voices (renamed from FonixTalk to Moonbase in update v1.0.3, no longer required x86 version of TTS Voice Wizard). Made possible by ",(0,n.kt)("a",{parentName:"td",href:"https://github.com/whatsecretproject/SharpTalk"},"whatsecretproject/SharpTalk")," a C# wrapper for FonixTalk the successor to DecTalk"),(0,n.kt)("td",{parentName:"tr",align:null},"Unlimited"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://github.com/VRCWizard/TTS-Voice-Wizard/assets/101527472/43b8a0c8-668d-4b18-bf8b-40b493cb21e2"},"download"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"docs/TTSMethods/LocallyHosted"},"Locally Hosted")),(0,n.kt)("td",{parentName:"tr",align:null},"No"),(0,n.kt)("td",{parentName:"tr",align:null},"Here is an example of a project that can be used with Local: ",(0,n.kt)("a",{parentName:"td",href:"https://github.com/VRCWizard/TTS-Voice-Wizard/wiki/Glados-TTS"},"https://github.com/VRCWizard/TTS-Voice-Wizard/wiki/Glados-TTS")," . This method works by sending a GET request to ",(0,n.kt)("a",{parentName:"td",href:"http://127.0.0.1:8124/synthesize/"},"http://127.0.0.1:8124/synthesize/")," with the string parameter 'text'. If you create compatible projects or models, feel free to share them in the Discord server."),(0,n.kt)("td",{parentName:"tr",align:null},"Unlimited"),(0,n.kt)("td",{parentName:"tr",align:null})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://github.com/VRCWizard/TTS-Voice-Wizard/wiki/ElevenLabs-TTS"},"Eleven Labs")),(0,n.kt)("td",{parentName:"tr",align:null},"No"),(0,n.kt)("td",{parentName:"tr",align:null},"Realistic TTS Voices accessible via API. You can also use any voices you clone in TTS Voice Wizard. (expensive pricing and privacy issues)"),(0,n.kt)("td",{parentName:"tr",align:null},"10k for free a month :("),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://github.com/VRCWizard/TTS-Voice-Wizard/assets/101527472/0181a77a-5ea7-4243-84ed-4e60325eacd8"},"download"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"docs/TTSMethods/Uberduck"},"Uberduck")),(0,n.kt)("td",{parentName:"tr",align:null},"No"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("del",{parentName:"td"},"Extensive catalog of voices of actors from Movies, TV Shows and Cartoons")," as of 7/12/2023 the Uberduck's catalog of voices has been drastically cut"),(0,n.kt)("td",{parentName:"tr",align:null},"N/A"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://github.com/VRCWizard/TTS-Voice-Wizard/assets/101527472/40ad4618-37dd-4737-b5a9-e36d2b046a1f"},"download"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"IBM Watson"),(0,n.kt)("td",{parentName:"tr",align:null},"Yes"),(0,n.kt)("td",{parentName:"tr",align:null},"Realistic TTS Voices only accessible via VoiceWizardPro"),(0,n.kt)("td",{parentName:"tr",align:null},"N/A"),(0,n.kt)("td",{parentName:"tr",align:null})))),(0,n.kt)("h2",{id:"-playing-audio-through-your-microphone"},"\ud83d\udd0c Playing Audio Through Your Microphone"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"First, you will need to ",(0,n.kt)("a",{parentName:"li",href:"/docs/getting-started/VirtualCable"},"download and set up a virtual cable")),(0,n.kt)("li",{parentName:"ol"},"You will then need to change TTS Voice Wizard's ",(0,n.kt)("strong",{parentName:"li"},"output device"),"  to the ",(0,n.kt)("strong",{parentName:"li"},"virtual cable")," allowing you to play the System Speech TTS through your microphone."),(0,n.kt)("li",{parentName:"ol"},"Consequently your microphone in other application like VRChat, Discord, Overwatch etc. would be the Virtual Cable.")))}m.isMDXComponent=!0}}]);