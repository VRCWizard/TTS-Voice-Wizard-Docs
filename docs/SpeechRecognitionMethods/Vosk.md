---
sidebar_position: 4
---
# Vosk

:::caution warning
Avoid ``0.22`` models, they have an issue with repeating "the" when nothing is spoken
:::
Download models below or from the official website [here](https://alphacephei.com/vosk/models)


| Recommended Model Download | RAM Usage | 
| ------------- | ------------- |
| [vosk-model-en-us-0.42-gigaspeech](https://alphacephei.com/vosk/models/vosk-model-en-us-0.42-gigaspeech.zip) | High |
| [vosk-model-en-us-daanzu-20200905](https://alphacephei.com/vosk/models/vosk-model-en-us-daanzu-20200905.zip) | Medium |
| [vosk-model-en-us-daanzu-20200905-lgraph](https://alphacephei.com/vosk/models/vosk-model-en-us-daanzu-20200905-lgraph.zip) | Low |


- After downloading the model you wish to use, extract it and select your model folder in Speech Provider > Local
![image](https://user-images.githubusercontent.com/101527472/210264680-49285000-214a-4f61-b532-463c73e30f62.png)

:::note
If you try using Vosk without having a model in the folder the program will crash, caused by System.AccessViolationException: 'Attempted to read or write protected memory. This is often an indication that other memory is corrupt.'

 Crashing may also be noticed when stopping listening when using vosk
:::