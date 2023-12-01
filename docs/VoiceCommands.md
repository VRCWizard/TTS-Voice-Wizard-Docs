---
title: "Voice Commands"
sidebar_position: 14
---
# Voice Commands

- Voice Commands can be activated using any of the speech to text options
- Upon using a voice command an OSC message will be sent to the Device and Port specified in Text Settings
- When a command is activated a message will display in the log
![image](https://user-images.githubusercontent.com/101527472/206941341-7c44d051-9864-4073-887f-62846fad8c2c.png)


## Adding a New Voice Command

### Spoken Phrase
- The phrase that you will say to activate the command
### Parameter Address
- The address of the VRChat parameter <br/>
- Example:
```
/avatar/parameters/Shirt_Color
```
### Data Type
- Choose between Int, Float, or Bool.
### Value
- Example Int:
```
2
```
- Example Float:
```
0.69
```
- Example Bool:
```
true
```
```
false
```



## Disabling / Deleting a Voice Command
- A Voice Command can be temporarily disabled by unchecking its checkbox
- To delete a Voice Command enable **Delete Command on Double Click** and double click to your heart's content.
    - Alternatively, click the **Clear All** button to remove all commands.

![image](https://user-images.githubusercontent.com/101527472/206941592-5f32d081-1db4-40d7-8419-ffe51b63297c.png)

