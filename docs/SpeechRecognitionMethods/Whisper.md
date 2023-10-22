---
sidebar_position: 1
---
# Whisper 
Implementation using [WhisperNet](https://github.com/Const-me/Whisper) a C# wrapper for [whisper.cpp](https://github.com/ggerganov/whisper.cpp) <br />

:::note
Keep in mind that this implementation of Whisper uses your GPU.

The larger models may cause stuttering in a GPU intensive game like VRChat while in VR.
:::

## Switching Models
- You can use the ``Auto Download Model`` dropdown to select a model and click the ``Download or Select`` button to download and or select the chosen model.

![image](https://github.com/VRCWizard/TTS-Voice-Wizard/assets/101527472/fd51942d-394a-45b9-8ca1-795e34ca59ca)

## Manually Adding Models
1. To get started using Whisper Download one of the models below or from the official [whisper.cpp model list](https://huggingface.co/ggerganov/whisper.cpp)


| Recommended Model Download  | Size | Memory |
| ------------- | ------------- | ------------- |
| [ggml-medium.bin](https://huggingface.co/ggerganov/whisper.cpp/resolve/main/ggml-medium.bin)  | 1.5 GB | ~2.6 GB |
| [ggml-small.bin](https://huggingface.co/ggerganov/whisper.cpp/resolve/main/ggml-small.bin) | 466 MB | ~1.0 GB |
| [ggml-base.bin](https://huggingface.co/ggerganov/whisper.cpp/resolve/main/ggml-base.bin)| 142 MB  | ~500 MB |
| [ggml-tiny.bin](https://huggingface.co/ggerganov/whisper.cpp/resolve/main/ggml-tiny.bin) | 75 MB | ~390 MB |


2. Add the model to Speech Provider > Local > Whisper.cpp Model (BIN file)
![image](https://user-images.githubusercontent.com/101527472/219901449-2b699b2c-535e-4da6-a01f-a2f045a34933.png)


## Options
- ``Min Duration`` minimum audio chunk length
- ``Max Duration`` maximium audio chunk length

## Tips
 
- Noises that the Whisper AI recognizes are filtered out by default. It can recognize music, keyboard and mouse clicks etc.

- If you notice that Whisper produces overlapping messages that play at the same time try using the Message Queue System found in the settings tab

- Try using a noise filtering software like [Nahmic](https://steelseries.com/nahimic) to filter the background noise coming through your microphone

- If your computer has 2 GPU (like most gaming laptops) then you should make sure that TTS Voice Wizard is using your high performance GPU for Nvidia (this can be set from the Nvidia Control Panel)

 ![Set GPU](https://github.com/VRCWizard/TTS-Voice-Wizard/assets/101527472/d0e824ea-94d6-4caf-8022-badcf5509ffe)

