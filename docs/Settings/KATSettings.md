---
sidebar_position: 5
---

# KAT Settings
## KillFrenzy Avatar Text (KAT)

### Send Text to VRChat with KAT
- Send OSC Messages to the Kill Frenzy Avatar Text
### Auto Replay KAT
- Constantly refreshes the KAT text. This is useful since Text only shows for users that are looking at the display when it is outputting
### KAT Sync Parameters
- How messages are chunked, this should match the value you selected in Unity.
### Delay Debug (ms)
- The delay in-between message chunks, too short of a delay can cause parts of the display to be blank for some users. This needs to be scaled with FPS. Lower frames require a larger Delay Debug. The default being 250 ms (a quarter of a second) seems to be the sweet spot.
### Clear KAT
- Clears the text from the kat display
### Hide KAT
- Hides the kat display
### Replay KAT
- Manually repeat the last message