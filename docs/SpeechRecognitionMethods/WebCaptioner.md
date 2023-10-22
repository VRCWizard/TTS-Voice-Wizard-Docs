---
sidebar_position: 5
---
# Web Captioner


1. Select Web Captioner from Speech to Text Options

![image](https://user-images.githubusercontent.com/101527472/211923184-9ac0d13e-ff42-4620-8667-0a586bd0821b.png)


2. Go to https://webcaptioner.com/captioner 
3.  Settings (bottom right) > Channels > Webhook
4.  Set 'http://localhost:54026/' as the Webhook URL and experiment with different chunking values (I recommend a large value so it only sends when you finish talking). 
5.  Now you're all set to click 'Start Captioning' in Web Captioner
6.  Note that you will have to use a separate option for TTS such as Azure, System Speech, Tiktok or FonixTalk

![image](https://user-images.githubusercontent.com/101527472/219952392-00bf29bb-3726-4372-8fa9-0ed9543581e1.png)

7. You can then enable speech to text to speech in TTS Voice Wizard and start captioning in Web Captioner
![image](https://user-images.githubusercontent.com/101527472/211923652-c34403b9-471c-4f4e-a9a2-e8c3271ef076.png)


## Troubleshooting
For ```Access Denied``` Error, run TTS Voice Wizard as admin or grant permission to the url. Relevant Info: https://stackoverflow.com/questions/4019466/httplistener-access-denied