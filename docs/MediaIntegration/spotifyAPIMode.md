---
sidebar_position: 3
---
# Spotify API
1. This method takes  bit longer to setup. You don't have to set up both methods. Windows Media Mode can be used with Spotify too.
2.  Go to the Spotify developer dashboard https://developer.spotify.com/dashboard/
3.  Create a new app
![image](https://user-images.githubusercontent.com/101527472/189543060-73dce2e7-0539-46d9-8d29-8d95fc582b09.png)

4. Add the correct redirect URI http://localhost:5000/callback
![image](https://user-images.githubusercontent.com/101527472/184249336-b0c075c3-6a71-4b6f-b60b-0bd6ce012af7.png)
![image](https://user-images.githubusercontent.com/101527472/184249358-79ef66c1-890a-46ab-84ea-db3ec70d872f.png)
5. Save the changes
6. In TTS Voice Wizard Navigate to **Addons > Media Integration** and **Enable Spotify API Mode**
7. You can now copy your **Client ID** into TTS Voice Wizard and click the **Connect Spotify** Button 

:::caution warning
If a windows appears showing **"INVALID_CLIENT: Invalid redirect URI"** that means you didn't copy the redirect URL correctly (http://localhost:5000/callback notice that it is not https) [Tutorial Video @ 1:03](https://youtu.be/6-zFSiRFu-A?si=XBDG1Vxl2bIq4nRa&t=63)

If a windows appears showing **"INVALID_CLIENT: Invalid client"** that means you didn't copy your client id correctly. [Tutorial Video @ 1:20](https://youtu.be/6-zFSiRFu-A?si=OdYxJf8JGmEZjnNZ&t=80)
:::

![image](https://user-images.githubusercontent.com/101527472/184249500-e217f021-1473-4056-8476-d19cb2e16af8.png)
![image](https://user-images.githubusercontent.com/101527472/197616561-71417189-be96-400e-8fd1-3e444e3ef99a.png)

8. YOU MAY HAVE TO RESTART THE APP AFTER CONNECTING SPOTIFY FOR THE FIRST TIME.

     






