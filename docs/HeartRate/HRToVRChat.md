---
sidebar_position: 2
---

# Heart Rate With HRToVRChat

:::tip
For receiving heartrate data the [Pulsoid Integration](/docs/HeartRate/HeartrateWithPulsoid) is a much better and easy to setup option than the OSC Listener route.
:::

- https://github.com/200Tigersbloxed/HRtoVRChat_OSC
- only thing you would change in the setup process is for port in HRtoVRChat_OSC to be changed to TTS Voice Wizard (4026 or what ever you changed the receive port to) 


![image](https://user-images.githubusercontent.com/101527472/212259695-e9f289a4-03bd-468c-811c-f6f6d13f904b.png)
![image](https://user-images.githubusercontent.com/101527472/212259763-4ea0dc48-884c-4b0b-9961-92b9a2f154c9.png)


- You can also use my modified https://github.com/VRCWizard/vrc-osc-miband-hrm-TTSVoiceWizard-compatible

- Once you have OSC Listener enabled and your Heartrate app running and sending to TTS Voice Wizard you can either use the default output by turning on **Output Heartrate** or set up the media integration tab like so
![image](https://user-images.githubusercontent.com/101527472/213950293-cf5616a9-f958-4c5b-a1e9-228de7a994c3.png)
