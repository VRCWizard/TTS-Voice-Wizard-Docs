---
sidebar_position: 5
---

# Sending Text Via OSC

# How to get Text in VRChat
1.  Make sure to turn on OSC from the VRChat radial menu 

![EnableOSC (1)](https://user-images.githubusercontent.com/101527472/189733533-957f6e92-ebba-4c67-b857-f1abac9d0eb3.gif) 

2. Both text output options are on by default in TTS Voice Wizard > Settings > Text Ouput 
    - So you don't have to mess with this

![image](https://github.com/VRCWizard/TTS-Voice-Wizard/assets/101527472/23789a32-8dd7-4e17-aebe-aed7b73e9a5d)


## Option 1: VRChat Chatbox
- OSC messages will be sent to the VRChat Chatbox by default


![image](https://user-images.githubusercontent.com/101527472/198512098-ea1b84a5-4ca9-4aac-84cb-46f86d1683e2.png)


    
 ## Option 2: KAT
- Another method, that has text output on your avatar in VRChat is [Killfrenzy96's Avatar Text Displayer](https://github.com/killfrenzy96/KillFrenzyAvatarText/) 
- **Download KillFrenzy Avatar Text (KAT) latest release (supports 4, 8, or 16 sync parameters currently)**
    - Make sure to turn on "Send Text to VRChat with KAT" in TTSVoiceWizard Settings > Text Output 
    - If it isn't working after uploading your avatar, you may have to delete your %appdata%..\LocalLow\VRChat\OSC files when re-uploading an avatar with new parameters
    - If you would like to add more functionality to Killfrenzy Avatar Text. [Frosty's Billboard](https://github.com/Frosty704/Billboard) is a KillFrenzy Avatar Text addon, it adds more functionality to the KAT such as making KAT grabbable and poseable. 
    ![Frosty Gif](https://user-images.githubusercontent.com/36753686/236354712-a617f28c-75c1-4591-86de-860f6feb9fcc.gif)

**You CAN NOT run TTS Voice Wizard with the KatOSCApp because the KatOSCApp constantly refreshes the KAT parameters.**
    
    
## Troubleshooting

1. Make sure that OSC is enabled 

![image](https://user-images.githubusercontent.com/101527472/213926548-8e395e6a-1f06-4ab0-a08e-d4d125b3f83b.png)

2. Check if the OSC Debug is empty

![image](https://cdn.discordapp.com/attachments/1122474716448444537/1122591889661624441/686b23ca-95c7-476b-18ac-372022b052c6.gif)

### OSC Debug shows parameters (SOLUTION TO MOST CASES)
- If the OSC debug shows parameters then the rest of these steps should work for you. 
- If Chatbox is not working try resetting the OSC folder by clicking the **Reset Config** button from the VRChat radial menu next to **Enable OSC** 
    - After turning on OSC for the first time you may need to restart VRChat for it to work properly.
- If you did this and the text still does not appear then you must go to %appdata%..\LocalLow\VRChat and delete the OSC folder 
    -  Closing VRChat, deleting the OSC folder, then restarting VRChat is the proper order of operations
- If you did all this and you still see no text in VRChat from the chatbox you may need to restart your computer
- If you are still having trouble, make a help post in the [Discord Server](https://discord.gg/YjgR9SWPnW)

<img src="https://user-images.githubusercontent.com/101527472/189431265-c3005a90-8f0b-49b9-88b6-3300f4e4a465.png" width="800" height="400" />

### OSC Debug Empty

- If the OSC Debug appears to be empty then it is possible another program other than VRChat is listening on port 9000
    - There have also been several cases where a VPN has blocked OSC, try disabling your VPN and trying again.
    - try restarting your computer before following stuff below
- Open console/terminal on your windows machine.
- Type ``` netstat -aon | findstr 9000  ``` into console
- Scroll past TCP ports to find UDP ports 
![image](https://user-images.githubusercontent.com/101527472/213927111-c0b50e1f-14c9-4240-b8c6-818d08d2cc91.png)
- Type this command ```tasklist | findstr <PID>``` replacing the ```<PID>``` with the one you just found

- If what is returned is not VRChat that means you incorrectly set another program to listen on port 9000! (VRChat receives/listens on port 9000 and sends on port 9001)
    - If nothing is returned and you can not find the process using 9000 then VRChat is defaulting to a random port and you may need to change it to a fixed port, if you are having this issue join the discord for help. (Solution reference "[Solved] Unnamed Process using port 9000" in #help channel)
- If you are still having trouble, make a help post in the [Discord Server](https://discord.gg/YjgR9SWPnW)

###  Specific To TTS Voice Wizard

- If you don't know what you are doing, do not change OSC Send Address or OSC Send Port 

![image](https://user-images.githubusercontent.com/101527472/213927348-54146cc0-f9ba-407a-8768-4b0652d75c27.png)

- If media Integration isn't working make sure that you did not enable the Advanced Text Settings by mistake (Media Integration Tab)

![image](https://user-images.githubusercontent.com/101527472/213927405-7fc7ca1d-c376-43ca-a566-c995be6a53f6.png)

- If you don't know what you are doing then do not change Receive Port on the OSC Listener Tab, it is 4026 by default. (It should not be 9000 or 9001)

![image](https://user-images.githubusercontent.com/101527472/213927522-595d8550-a710-481f-84f3-4f66017f4aea.png)

- Make sure that you didn't turn off Send Text to VRChat for the text method you are using in settings.

![image](https://user-images.githubusercontent.com/101527472/213928128-87ac94e0-ca20-4936-9a4a-0bf6598010df.png)

![image](https://user-images.githubusercontent.com/101527472/213928110-ab5cbe05-9679-4884-8a62-3317a1170175.png)