---
sidebar_position: 4
---
# Media Integration Settings

 ![image](https://github.com/VRCWizard/TTS-Voice-Wizard/assets/101527472/b81081df-ce50-4bff-8c47-48a103a56d2d)


## Media Text Customization
You can Customize media text that appears as you wish 
- You can add or remove variables from "Customize Media Output Text" (include them in {})
- You can click the buttons to the right of the text box to automatically add common/useful variables


### General Song Variables
| Variable | Description |
| ------ | ------|
|``{spotifySymbol}`` | Uses your KAT emoji sheet. Only for KAT output |
| ``{title}``| The title of your current song |
| ``{artist}``| The artist of your current song |
| ``{allArtists}``| shows all the artists for the current song |
| ``{album}``| shows the name of the current album |
| ``{source}``| The source of your current song (Windows Media Mode) |
| ``{pause}``|  Show a emoji for whether the current song is paused or playing  |
| ``{progressMinutes}``|     Shows the progress of the current song. This feature may not work properly with windows media mode. |
| ``{durationMinutes}``| Shows the duration of the current song. This feature may not work properly with windows media mode. |
| ``{progressHours}  `` | Shows the progress of the current song. Allows for showing hours place. This feature may not work properly with windows media mode. |
| ``{durationHours}``| Shows the duration of the current song. Allows for showing hours place. This feature may not work properly with windows media mode. |   
| ``{counter(num)}``| ``(num)`` can be a number 1-6 and corresponds to that counter in the VRChat Listener tab|
| ``{time}``| will only be displayed with shader based output like KAT|
| ``{nline}``| create newline using the the Unicode 'LINE SEPARATOR' (U+2028) character: `` `` |


### Heart Rate Variables
These variables require [enabling your heartrate](/docs/HeartRate/HeartRateWithPulsoid)

| Variable | Description |
| ------ | ------|
| ``{bpm}``| Your current heart rate |
| ``{bpmStats}``| Shows if your heartrate is going up or down |

### Controller and Tracker Battery Life Variables
These variables require [OSC Listener Setup](https://github.com/VRCWizard/TTS-Voice-Wizard/wiki/OSC-Listener) and work with XSOverlay or OVR Toolkit

| Variable | Description |
| ------ | ------|
|``{averageTrackerBattery}``| Your trackers average battery life|
| ``{leftControllerBattery}``|Your left controllers battery life|
| ``{rightControllerBattery}``| Your right controllers battery life|
| ``{averageControllerBattery}``|  Your controllers average battery life |
| ``{HMDBattery}`` | Your headsets current battery life|
|``{TCharge}``|  lightning bolt emoji if tracker is charging|
|``{RCharge}`` |   lightning bolt emoji if right controller charging|
| ``{LCharge}``|   lightning bolt emoji if left controller charging |
| ``{AVGCharge}``|  lightning bolt emoji if either controllers are charging |
| ``{HMDCharge}`` | lightning bolt emoji if your headset is charging |


### Additional Customization
Try out different unicode character to customize your output further


## Settings

### Update Interval (ms)
- The interval that text outputs on it can not be less than 1500 ms (1.5 seconds)

### Output Continuously (On Update Interval)
- Have text stay output indefinitly by output it continuously
- Text stays above head "forever"

### Stop Output While Paused
- Text will not output if it paused
- Can be used with continuous output to prevent the song from output based on it's paused state

### Output Spam Log
- Whether the output prints to the log or not

### Presets
- Save the above settings as a preset that can even be exported and sent to others

