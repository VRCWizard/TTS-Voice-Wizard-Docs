---
sidebar_position: 14
---
# Custom Voices

How do I download custom voices? Can I use this with RVC models? Are there more voices to download?

If you are unhappy with the selection of voices and services avaliable in TTS Voice Wizard there are a couple ways futher customize TTS audio. You of course can't just download random models and expect them to work with TTS Voice Wizard so here is some compiled information on "custom voices".

## Creating Custom TTS Voices / Voice Cloning

[Eleven Labs](https://elevenlabs.io/) is the most common and high quality piece of software used for synthesizing TTS with cloned voices. Follow the steps to [find your eleven labs key](https://ttsvoicewizard.com/docs/TTSMethods/ElevenLabs) and input it into TTS Voice Wizard. Any voices you create in Eleven Labs will appear as an option in TTS Voice Wizard after reloading.

## Using RVC with TTS Voice Wizard 
This will essentially be applying a voice changer to any voices you decide to use. RVC by it's nature "takes the unique qualities of one voice and applys them to another". Requiring there to be audio as input, either your voice, or in this case the Text to Speech audio synthesized in TTS Voice Wizard.

If you need help finding a RVC application to use [w-okada/voice-changer](https://github.com/w-okada/voice-changer) is free and works great, here is a setup guide for it: https://youtu.be/_JXbvSTGPoo?si=beHBS7FOP8eWG3Vo

Connecting the voice changer with TTS Voice Wizard is just simple audio routing, that can be done with something like VoiceMeeter or just 2 separate virtual cables.

So the first virtual cable would be used as described in TTS Voice Wizard's instructions and you would use the output as the input in the voice changer. (as shown in the picture below)

Then if you wanted to output the audio through your microphone in a game or platform... you would download a 2nd virtual cable and use the 2nd virtual cable as the output in the voice changer and the input in the game or platform you want to speak in.

## Voice Changers

Any voice changer can be used in conjuction with TTS Voice Wizard in the same way the RVC voice changer mentioned above can.



## Locally Hosted Options

The Locally Hosted option in TTS Voices Wizard allows you to interact with any locally hosted TTS synthesizing scripts with a couple examples and more information at https://ttsvoicewizard.com/docs/TTSMethods/LocallyHosted .

