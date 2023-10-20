---
sidebar_position: 1
---
# Receiving Data from VRChat

:::note 
ONLY 1 OSC APP CAN LISTEN TO VRCHAT ON PORT 9001. IF YOU HAVE ANOTHER OSC APP OPEN THAT ALSO RECEIVES ON PORT 9001 ONLY THE APP WITH THE LISTENER FOR 9001 THAT WAS ACTIVATED FIRST WILL WORK

This can be circumvented using if the application implements OSCQuery or using a seperate OSC routing application.
:::

This feature specifically receives data from VRChat for certain features. Only one OSC program can listen to VRChat on port 9001. You can have an AFK message that displays when ever you go AFK in VRChat. Counters are meant to be used with [VRChat Contact Receivers](https://youtu.be/LOZu6e8ozns). Although they can be used to count when any bool is enabled. 

![image](https://user-images.githubusercontent.com/101527472/226207333-1eb0f1d9-707f-4a61-8952-93b389bc9a3f.png)