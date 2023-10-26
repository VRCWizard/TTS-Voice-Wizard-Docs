---
sidebar_position: 6
---

# Text For Streaming/Recording
1. Turn on OBS Text in the settings tab of TTS Voice Wizard 

![image](https://github.com/VRCWizard/TTS-Voice-Wizard-Docs/assets/101527472/0720b10f-f6c0-4546-926e-45487662f897)

2. Go to OBS, create a text source then tick "Read from file" then select "Output/TextOutput/OBSText.txt" located in the TTS Voice Wizard download folder.
    - Note that this feature will not work if you disable outputting transcript to log

![image](https://user-images.githubusercontent.com/101527472/213609633-90624707-c358-43a5-8169-08783c7f5fb2.png)

## Editing Text Source In OBS
I recommend checking out a couple settings in the text source properties
1. Use Custom Text Extents (fixes auto scaling)
2. Wrap (line breaks)
3. Set font size really high so it's not blury
4. Resize the text source by dragging it's corner smaller (this keeps the high text resolution from the font size and makes it smaller so it actually fits in the window)
5. Additionally look into [OBS text plugins](https://youtu.be/r8yNA9aBO6c?si=hCdJyYOxdphx5hRV) for additional customizability