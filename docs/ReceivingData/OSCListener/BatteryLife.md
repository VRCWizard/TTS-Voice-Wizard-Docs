---
sidebar_position: 2
---
# Tracker Battery Life

## How to connect XSOverlay battery life OSC data (DOES NOT SUPPORT QUEST BATTERY LIFE)
 -  Option to show battery life of Controllers (not for quest controllers) and tracker battery life. 
      -  MUST HAVE XSOVERLAY to use https://store.steampowered.com/app/1173510/XSOverlay/
      -  Battery Updates appear in the log and can be shown with the Spotify Song Output Text feature
      -  Media Integration Text Variables

 ```
{averageTrackerBattery}  // OSC address: /avatar/parameters/averageTrackerBattery
{leftControllerBattery}  // OSC address: /avatar/parameters/leftControllerBattery
{rightControllerBattery}  // OSC address: /avatar/parameters/rightControllerBattery
{averageControllerBattery}  // OSC address: /avatar/parameters/averageControllerBattery

{TCharge} //  lightning bolt emoji if tracker is charging
{RCharge}  //  lightning bolt emoji if right controller charging
{LCharge}  // lightning bolt emoji if left controller charging 
{AVGCharge}  // lightning bolt emoji if either controller avg charging 

```



  - Change the port that XSOverlay sends to from VRChat (9000) to TTS Voice Wizard (4026) 
      - If you don't know what you are doing please don't change TTS Voice Wizard's port from 4026
      - Most people INCORRECTLY change TTS Voice Wizard's OSC Listener Receive port to 9000, which is what you should not do!
      - You want to change the external application (HRToVRChat or XSOverlay) to 4026 from 9000 so it sends to TTS Voice Wizard instead of VRChat

![image](https://user-images.githubusercontent.com/101527472/193479576-d97fdd43-74a9-4286-9c68-ae6ae12c1bf4.png)
![image](https://user-images.githubusercontent.com/101527472/193479591-6b46d2a5-625a-4b37-bfa5-3e0a0ca28d83.png)
  - Press the Activate OSC Listener Button
![image](https://user-images.githubusercontent.com/101527472/193479900-c21c0ad3-0ce9-4754-a1ce-d25fa139a2b9.png)
-  That's it, now when you have XSOverlay open it will send OSC messages to TTS Voice Wizard. To have the messages appear in-game this feature must be used in conjunction with the Spotify Integration feature.

## How to connect Quest Battery Life Data
- Download an app to allow you to send Quest Battery Life Over OSC. Recommended Apps:

| App  | Info| 
| ------------- | ------------- |
[Quest2-TTSVoiceWizard](https://github.com/VRCWizard/Quest2-TTSVoiceWizard) | Quest2-TTSVoiceWizard is a modified version of [Sergey004/Quest2-VRC](https://github.com/Sergey004/Quest2-VRC) |
[quest2-battery-to-vrchat-osc](https://github.com/NekoSuneVR/quest2-battery-to-vrchat-osc) | JavaScript implementation created by NekoSuneVR |


```
{HMDBattery} //Send to TTS Voice Wizard as a float from address: /avatar/parameters/HMDBat
{leftControllerBattery} //Send to TTS Voice Wizard as a float from address: /avatar/parameters/leftControllerBattery
{rightControllerBattery} //Send to TTS Voice Wizard as a float from address: /avatar/parameters/rightControllerBattery
{averageControllerBattery} //Send to TTS Voice Wizard as a float from address: /avatar/parameters/averageControllerBattery
```


#### Battery Life Example Images
![image](https://user-images.githubusercontent.com/101527472/193480329-0fa27ce3-56de-4d42-aedd-6c4e33affada.png)
Quest controller battery life is not supported with XSOverlay as shown in this image using a Quest 2

![image](https://user-images.githubusercontent.com/101527472/193480697-728af0f1-5a6d-459c-82a1-0f40cc9c08ea.png)


![VRChat_2022-10-02_18-12-00 442_1920x1080](https://user-images.githubusercontent.com/101527472/193480633-65cca716-227b-4248-b7b6-1bfce1ab8755.png)