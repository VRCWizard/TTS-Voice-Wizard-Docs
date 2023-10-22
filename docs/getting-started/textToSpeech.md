---
sidebar_position: 3
---

# Text-To-Speech
:::tip 

Some Text-To-Speech Methods such as **Google Cloud** and **IBM Watson** are **VoiceWizardPro Only!** Subscribe to the [Patreon](https://www.patreon.com/ttsvoicewizard) or [Kofi](https://ko-fi.com/ttsvoicewizard) to unlock them. 

:::




## Text-to-Speech-Methods

- Change and use various TTS methods from the **Text to Speech Tab**

![image](https://user-images.githubusercontent.com/101527472/221025655-874ca475-17d0-4078-8653-7e7e8c7f57a4.png)

## TTS Methods List
Some of these methods require some sort of setup. Click the name of the Text-to-Speech method to take you to its respective wiki page for more information.

| Text-to-Speech Method  | Included with VoiceWizardPro | Description | Free Character Pricing | Audio Sample
| ------------- | ------------- | ------------- | ------------- | ------------- |
| [System Speech](docs/TTSMethods/SystemSpeech)  | Included by default | This option uses voices from the voice packages you have installed on your windows system. Any SAPI5 voices you install on your system should work.  - Japanese "Anime Style" Voices for SAPI5: [shigobu/SAPIForVOICEVOX](https://github.com/shigobu/SAPIForVOICEVOX)  - Windows XP Voices (including Microsoft Sam) for SAPI5: [Get WinXP_TTS_Voice_v1.3](https://wink.messengergeek.com/uploads/short-url/8tznlBq2ZpwqOOchX0KpXWwbwZP.exe) (file sourced from [here](https://wink.messengergeek.com/t/guys-i-have-the-sapi5-ttsapp-with-microsoft-sam-downloads/19887)) | Unlimited | [download](https://github.com/VRCWizard/TTS-Voice-Wizard/assets/101527472/3efac7a3-3e54-4b8a-a0cf-45da0152786e) |
| [Azure](docs/TTSMethods/AzureTTS)  | Yes | Realistic TTS Voices accessible via API  | 500k characters for free a month **FOREVER** | [download](https://github.com/VRCWizard/TTS-Voice-Wizard/assets/101527472/10dc15bf-d421-411c-b85e-4771275ef519) |
| [Amazon Polly](docs/TTSMethods/AmazonPolly)  | Yes | Realistic TTS Voices accessible via API. These voices are iconically used by many TTS VTubers | 5mill characters (1mill for neural voices) for free each month for the **first 12 months** | [download](https://github.com/VRCWizard/TTS-Voice-Wizard/assets/101527472/125022e5-035c-4a68-8989-d5fff27360d1) |
| [Google Cloud](docs/TTSMethods/GoogleCloud)   | Yes | Realistic TTS Voices only accessible via VoiceWizardPro | N/A | [download](https://github.com/VRCWizard/TTS-Voice-Wizard/assets/101527472/7f7c69a3-d5f1-46b9-a7b0-0518feebc200)|
| TikTok  | Included by default | Voices accessible for free via the TikTok API (made possible by [Weilbyte's Tiktok TTS](https://weilbyte.github.io/tiktok-tts/) endpoint). Best option if you are looking for high fidelity TTS voices to use without limits  |  Unlimited  | [download](https://github.com/VRCWizard/TTS-Voice-Wizard/assets/101527472/8188d9d7-7bf4-4db9-92b3-1743255956ed) |
| [Moonbase](docs/TTSMethods/Moonbase)  | Included by default | Moonbase Alpha style voices (renamed from FonixTalk to Moonbase in update v1.0.3, no longer required x86 version of TTS Voice Wizard). Made possible by [whatsecretproject/SharpTalk](https://github.com/whatsecretproject/SharpTalk) a C# wrapper for FonixTalk the successor to DecTalk | Unlimited |[download](https://github.com/VRCWizard/TTS-Voice-Wizard/assets/101527472/43b8a0c8-668d-4b18-bf8b-40b493cb21e2) |
| [Locally Hosted](docs/TTSMethods/LocallyHosted)  | No | Here is an example of a project that can be used with Local: https://github.com/VRCWizard/TTS-Voice-Wizard/wiki/Glados-TTS . This method works by sending a GET request to http://127.0.0.1:8124/synthesize/ with the string parameter 'text'. If you create compatible projects or models, feel free to share them in the Discord server.|  Unlimited | |
| [Eleven Labs](https://github.com/VRCWizard/TTS-Voice-Wizard/wiki/ElevenLabs-TTS)  | No | Realistic TTS Voices accessible via API. You can also use any voices you clone in TTS Voice Wizard. (expensive pricing and privacy issues)  |   10k for free a month :( | [download](https://github.com/VRCWizard/TTS-Voice-Wizard/assets/101527472/0181a77a-5ea7-4243-84ed-4e60325eacd8) |
| [Uberduck](docs/TTSMethods/Uberduck)  | No | ~~Extensive catalog of voices of actors from Movies, TV Shows and Cartoons~~ as of 7/12/2023 the Uberduck's catalog of voices has been drastically cut  | N/A | [download](https://github.com/VRCWizard/TTS-Voice-Wizard/assets/101527472/40ad4618-37dd-4737-b5a9-e36d2b046a1f) |
| IBM Watson  | Yes |  Realistic TTS Voices only accessible via VoiceWizardPro | N/A | |


## 🔌 Playing Audio Through Your Microphone
1. First, you will need to [download and set up a virtual cable](/docs/getting-started/VirtualCable)
2. You will then need to change TTS Voice Wizard's **output device**  to the **virtual cable** allowing you to play the System Speech TTS through your microphone.
3. Consequently your microphone in other application like VRChat, Discord, Overwatch etc. would be the Virtual Cable.