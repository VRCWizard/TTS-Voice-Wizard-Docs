---
sidebar_position: 2
---
# Speech-To-Text

:::tip 

**DeepGram** is for **VoiceWizardPro Only!** Subscribe to the [Patreon](https://www.patreon.com/ttsvoicewizard) or [Kofi](https://ko-fi.com/ttsvoicewizard) to unlock it. 

:::

- Convert Speech to Text to send through OSC (to VRChat or anywhere else)

- Change the speech to text method from Settings > Audio > Speech to Text

![image](https://user-images.githubusercontent.com/101527472/219900481-b932ca37-4f67-441f-9ac5-cde7b27883ab.png)

- Each of these methods require some sort of setup (except system speech). Click the name of the Speech-to-Text method to take you to its respective wiki page for more information.


| Speech-to-Text Method  | Description | Free Pricing | Continuous |
| ------------- | ------------- | ------------- | ------------- |
| [System Speech](https://github.com/VRCWizard/TTS-Voice-Wizard/wiki/System-Speech) | This method is the default and has the **worst recognition quality**. Although it can improved with [training](https://www.thewindowsclub.com/windows-speech-recognition-voice-training) and [editing the speech dictionary](https://www.tenforums.com/tutorials/120879-add-delete-prevent-edit-speech-dictionary-words-windows-10-a.html)  | Unlimited | yes |
| [Azure](https://github.com/VRCWizard/TTS-Voice-Wizard/wiki/Azure-Speech-Service) | Great recognition quality without needing to sacrifice computational resources. Built in Translations | **5 speech recognition hours + 5 speech translation hours**. This is actually much more than it seems when not using continuous recognition. (yes you can for example translate from English to English after your recognition hours run out for 10 total hours.) | both |
| [Vosk](https://github.com/VRCWizard/TTS-Voice-Wizard/wiki/Vosk) | Ok recognition quality at the cost of computational resources (CPU and RAM). Can have **higher recognition quality than Web Captioner** depending on model used. (does not work on x86 version) | Unlimited  | yes |
| [Web Captioner](https://github.com/VRCWizard/TTS-Voice-Wizard/wiki/Web-Captioner) | Ok recognition quality using "Web Speech API" through Web Captioner. Only available on Google Chrome. Multi-Language support. | Unlimited  | yes |
| [Whisper](https://github.com/VRCWizard/TTS-Voice-Wizard/wiki/Whisper) | AMAZING recognition quality at the cost of computational resources (GPU and RAM). Can have **higher recognition accuracy than Azure** depending on model used. (Experimental implementation) (does not work on x86 version) | Unlimited | yes |
| [DeepGram](https://github.com/VRCWizard/TTS-Voice-Wizard/wiki/VoiceWizardPro#deepgram-recognition) | Similar quality to Azure Recognition | Only available with [Voice Wizard Pro](https://ko-fi.com/ttsvoicewizard/tiers), limits vary with selected tier| no |

