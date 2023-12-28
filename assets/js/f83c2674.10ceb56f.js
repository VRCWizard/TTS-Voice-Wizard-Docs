"use strict";(self.webpackChunkvoice_wizard_docs=self.webpackChunkvoice_wizard_docs||[]).push([[6652],{3905:(t,e,a)=>{a.d(e,{Zo:()=>u,kt:()=>d});var n=a(7294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function o(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?o(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function l(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},o=Object.keys(t);for(n=0;n<o.length;n++)a=o[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(n=0;n<o.length;n++)a=o[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var s=n.createContext({}),p=function(t){var e=n.useContext(s),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},u=function(t){var e=p(t.components);return n.createElement(s.Provider,{value:e},t.children)},c="mdxType",m={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},h=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,o=t.originalType,s=t.parentName,u=l(t,["components","mdxType","originalType","parentName"]),c=p(a),h=r,d=c["".concat(s,".").concat(h)]||c[h]||m[h]||o;return a?n.createElement(d,i(i({ref:e},u),{},{components:a})):n.createElement(d,i({ref:e},u))}));function d(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var o=a.length,i=new Array(o);i[0]=h;var l={};for(var s in e)hasOwnProperty.call(e,s)&&(l[s]=e[s]);l.originalType=t,l[c]="string"==typeof t?t:r,i[1]=l;for(var p=2;p<o;p++)i[p]=a[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}h.displayName="MDXCreateElement"},6089:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>s,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var n=a(7462),r=(a(7294),a(3905));const o={sidebar_position:5},i="Sending Text Via OSC",l={unversionedId:"getting-started/TextInVRChat",id:"getting-started/TextInVRChat",title:"Sending Text Via OSC",description:"1.  Make sure to turn on OSC from the VRChat radial menu",source:"@site/docs/getting-started/TextInVRChat.md",sourceDirName:"getting-started",slug:"/getting-started/TextInVRChat",permalink:"/docs/getting-started/TextInVRChat",draft:!1,tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"Virtual Cable",permalink:"/docs/getting-started/VirtualCable"},next:{title:"Text For Streaming/Recording",permalink:"/docs/getting-started/Text4Streaming"}},s={},p=[{value:"Option 1: VRChat Chatbox",id:"option-1-vrchat-chatbox",level:2},{value:"Option 2: KAT",id:"option-2-kat",level:2},{value:"Troubleshooting",id:"troubleshooting",level:2},{value:"OSC Debug shows parameters (SOLUTION TO MOST CASES)",id:"osc-debug-shows-parameters-solution-to-most-cases",level:3},{value:"OSC Debug Empty",id:"osc-debug-empty",level:3},{value:"Specific To TTS Voice Wizard",id:"specific-to-tts-voice-wizard",level:3}],u={toc:p},c="wrapper";function m(t){let{components:e,...a}=t;return(0,r.kt)(c,(0,n.Z)({},u,a,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"sending-text-via-osc"},"Sending Text Via OSC"),(0,r.kt)("h1",{id:"how-to-get-text-in-vrchat"},"How to get Text in VRChat"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Make sure to turn on OSC from the VRChat radial menu ")),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/101527472/189733533-957f6e92-ebba-4c67-b857-f1abac9d0eb3.gif",alt:"EnableOSC (1)"})," "),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},"Both text output options are on by default in TTS Voice Wizard > Settings > Text Ouput ",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"So you don't have to mess with this")))),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://github.com/VRCWizard/TTS-Voice-Wizard/assets/101527472/23789a32-8dd7-4e17-aebe-aed7b73e9a5d",alt:"image"})),(0,r.kt)("h2",{id:"option-1-vrchat-chatbox"},"Option 1: VRChat Chatbox"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"OSC messages will be sent to the VRChat Chatbox by default",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"The VRChat Chatbox has a limit of 144 characters per request"),(0,r.kt)("li",{parentName:"ul"},"The VRChat Chatbox has 5 messages per 5 seconds limit, if you cross that you will incur a 30 second cooldown.")))),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/101527472/198512098-ea1b84a5-4ca9-4aac-84cb-46f86d1683e2.png",alt:"image"})),(0,r.kt)("h2",{id:"option-2-kat"},"Option 2: KAT"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Another method, that has text output on your avatar in VRChat is ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/killfrenzy96/KillFrenzyAvatarText/"},"Killfrenzy96's Avatar Text Displayer")," "),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Download KillFrenzy Avatar Text (KAT) latest release (supports 4, 8, or 16 sync parameters currently)"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},'Make sure to turn on "Send Text to VRChat with KAT" in TTSVoiceWizard Settings > Text Output '),(0,r.kt)("li",{parentName:"ul"},"If it isn't working after uploading your avatar, you may have to delete your %appdata%..\\LocalLow\\VRChat\\OSC files when re-uploading an avatar with new parameters"),(0,r.kt)("li",{parentName:"ul"},"If you would like to add more functionality to Killfrenzy Avatar Text. ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/Frosty704/Billboard"},"Frosty's Billboard")," is a KillFrenzy Avatar Text addon, it adds more functionality to the KAT such as making KAT grabbable and poseable.\n",(0,r.kt)("img",{parentName:"li",src:"https://user-images.githubusercontent.com/36753686/236354712-a617f28c-75c1-4591-86de-860f6feb9fcc.gif",alt:"Frosty Gif"}))))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"You CAN NOT run TTS Voice Wizard with the KatOSCApp because the KatOSCApp constantly refreshes the KAT parameters.")),(0,r.kt)("h2",{id:"troubleshooting"},"Troubleshooting"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Make sure that OSC is enabled ")),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/101527472/213926548-8e395e6a-1f06-4ab0-a08e-d4d125b3f83b.png",alt:"image"})),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},"Check if the OSC Debug is empty")),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://cdn.discordapp.com/attachments/1122474716448444537/1122591889661624441/686b23ca-95c7-476b-18ac-372022b052c6.gif",alt:"image"})),(0,r.kt)("h3",{id:"osc-debug-shows-parameters-solution-to-most-cases"},"OSC Debug shows parameters (SOLUTION TO MOST CASES)"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"If the OSC debug shows parameters then the rest of these steps should work for you. "),(0,r.kt)("li",{parentName:"ul"},"If Chatbox is not working try resetting the OSC folder by clicking the ",(0,r.kt)("strong",{parentName:"li"},"Reset Config")," button from the VRChat radial menu next to ",(0,r.kt)("strong",{parentName:"li"},"Enable OSC")," ",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"After turning on OSC for the first time you may need to restart VRChat for it to work properly."))),(0,r.kt)("li",{parentName:"ul"},"If you did this and the text still does not appear then you must go to %appdata%..\\LocalLow\\VRChat and delete the OSC folder ",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Closing VRChat, deleting the OSC folder, then restarting VRChat is the proper order of operations"))),(0,r.kt)("li",{parentName:"ul"},"If you did all this and you still see no text in VRChat from the chatbox you may need to restart your computer"),(0,r.kt)("li",{parentName:"ul"},"If you are still having trouble, make a help post in the ",(0,r.kt)("a",{parentName:"li",href:"https://discord.gg/YjgR9SWPnW"},"Discord Server"))),(0,r.kt)("img",{src:"https://user-images.githubusercontent.com/101527472/189431265-c3005a90-8f0b-49b9-88b6-3300f4e4a465.png",width:"800",height:"400"}),(0,r.kt)("h3",{id:"osc-debug-empty"},"OSC Debug Empty"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"If the OSC Debug appears to be empty then it is possible another program other than VRChat is listening on port 9000"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"There have also been several cases where a VPN has blocked OSC, try disabling your VPN and trying again."),(0,r.kt)("li",{parentName:"ul"},"try restarting your computer before following stuff below"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Open console/terminal on your windows machine.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Type ",(0,r.kt)("inlineCode",{parentName:"p"},"netstat -aon | findstr 9000 ")," into console")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Scroll past TCP ports to find UDP ports\n",(0,r.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/101527472/213927111-c0b50e1f-14c9-4240-b8c6-818d08d2cc91.png",alt:"image"}))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Type this command ",(0,r.kt)("inlineCode",{parentName:"p"},"tasklist | findstr <PID>")," replacing the ",(0,r.kt)("inlineCode",{parentName:"p"},"<PID>")," with the one you just found")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"If what is returned is not VRChat that means you incorrectly set another program to listen on port 9000! (VRChat receives/listens on port 9000 and sends on port 9001)"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},'If nothing is returned and you can not find the process using 9000 then VRChat is defaulting to a random port and you may need to change it to a fixed port, if you are having this issue join the discord for help. (Solution reference "',"[Solved]",' Unnamed Process using port 9000" in #help channel)'))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"If you are still having trouble, make a help post in the ",(0,r.kt)("a",{parentName:"p",href:"https://discord.gg/YjgR9SWPnW"},"Discord Server")))),(0,r.kt)("h3",{id:"specific-to-tts-voice-wizard"},"Specific To TTS Voice Wizard"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"If you don't know what you are doing, do not change OSC Send Address or OSC Send Port ")),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/101527472/213927348-54146cc0-f9ba-407a-8768-4b0652d75c27.png",alt:"image"})),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"If media Integration isn't working make sure that you did not enable the Advanced Text Settings by mistake (Media Integration Tab)")),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/101527472/213927405-7fc7ca1d-c376-43ca-a566-c995be6a53f6.png",alt:"image"})),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"If you don't know what you are doing then do not change Receive Port on the OSC Listener Tab, it is 4026 by default. (It should not be 9000 or 9001)")),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/101527472/213927522-595d8550-a710-481f-84f3-4f66017f4aea.png",alt:"image"})),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Make sure that you didn't turn off Send Text to VRChat for the text method you are using in settings.")),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/101527472/213928128-87ac94e0-ca20-4936-9a4a-0bf6598010df.png",alt:"image"})),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/101527472/213928110-ab5cbe05-9679-4884-8a62-3317a1170175.png",alt:"image"})))}m.isMDXComponent=!0}}]);