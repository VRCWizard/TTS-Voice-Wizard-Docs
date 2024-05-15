---
sidebar_position: 3
---
# OSC to TTS

- Have a program send an osc message to ```/TTSVoiceWizard/TextToSpeech``` or (`/TTSVoiceWizard/TextToText` for no TTS) on the specified Receive Port with the OSC Listener Enabled.
- The string will use what ever settings are selected in the Text to Speech tab when received.
- Additionally, you can optionally sent 2 bools along side the string which override whether to send text to the vrchat chatbox and killfrenzy avatar text.

Examples:

```sendOSC("/TTSVoiceWizard/TextToSpeech",string text) ```

```sendOSC("/TTSVoiceWizard/TextToSpeech",string text, bool useChatbox, bool useKillFrenzyAvatarText) ```

```sendOSC("/TTSVoiceWizard/TextToText",string text) ```

```sendOSC("/TTSVoiceWizard/TextToText",string text, bool useChatbox, bool useKillFrenzyAvatarText) ```

![image](https://user-images.githubusercontent.com/101527472/228613630-73dc0bad-7c0c-4831-8ea4-92389b8a9f26.png)
