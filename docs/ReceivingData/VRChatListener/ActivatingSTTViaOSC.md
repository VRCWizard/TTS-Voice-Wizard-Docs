---
sidebar_position: 4
---
# Activating Speech to Text via Avatar
1. Activate the VRChat Listener, you can enable Activate VRChat Listener on Start to enable the feature automatically each time. (You still have to click the big "*Activate VRChat Listener button** the first time). 
2. Add a bool to your avatar for ``/avatar/parameters/DoSpeechToText``
3. Speech to Text will be activated whenever a bool is sent (If the method can be toggled then sending another true bool would also deactivate the speech to text)
4. Additionally, ``/avatar/parameters/stt_listening`` is a parameter sent automatically by TTS Voice Wizard and can be used to determine if Speech to Text is currently listening or not.
