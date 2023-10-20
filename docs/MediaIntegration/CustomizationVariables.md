---
sidebar_position: 4
---
# Media Text Customization

Customization
- You can even Customize the text that appears as you wish 
- Variables you can add or remove from "Customize Media Output Text" (include them in {})
```
{spotifySymbol}      (Use with KAT)
{title}
{artist}
{source}
{pause}
{progressMinutes}     (progress and duration may only work with the Spotify Desktop App for windows media mode)
{durationMinutes} 
{progressHours}   
{durationHours}   
{counter#} (# can be a number 1-6 and corresponds to that counter in the VRChat Listener tab)
```
- Other Variables require [OSC Listener Setup](https://github.com/VRCWizard/TTS-Voice-Wizard/wiki/OSC-Listener)
```
{bpm}
{bpmStats} (shows if your heartrate is going up or down)

{averageTrackerBattery}
{leftControllerBattery}
{rightControllerBattery}
{averageControllerBattery}


{TCharge} //  lightning bolt emoji if tracker is charging
{RCharge}  //  lightning bolt emoji if right controller charging
{LCharge}  // lightning bolt emoji if left controller charging 
{AVGCharge}  // lightning bolt emoji if either controller avg charging 