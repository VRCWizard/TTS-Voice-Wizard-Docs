---
sidebar_position: 2
---
# Counters

## Adding and using Counters
![image](https://user-images.githubusercontent.com/101527472/229305262-290ea0c0-6497-4759-8351-79db05d34682.png)

0. Enable OSC in VRChat

1. In your hierarchy right click and select **Create Empty**

2. For that empty Object Select **Add Component** and select VRC Contact Receiver

3. Next you decided what the contact will be for, in these case we are making a "boop" contact receiver for when someone touches your nose with a finger contact

4. Name the parameter appropriately if you do this for multiple avatars you will want to use the same Parameter name in this case it will be "Boop"(case-sensitive)

5. Set the Receiver Type to **Constant**

6. The contact receiver will do nothing if we do not specify **Collision Tags**. In this case we want it to activate when touched by a **Finger** contact. So we would click **Add** and select **finger**

7. In TTS Voice Wizard need to add the parameter. Since we named it "Boop" we will name the Counter Avatar Parameter in TTS Voice Wizard ```/avatar/parameters/Boop```. The Message box can be anything but here is a good example ``` 🫵 Boops: {counter}``` where {counter} is the actual number that is incremented.

![image](https://user-images.githubusercontent.com/101527472/229306182-76ebd63c-fc54-4fdd-b504-2d4e5a9f2fc5.png)


8. If you have just added a counter to an existing avatar VRChat will not understand that in terms of OSC. You can attempt using the radial menu and navigating to OSC > Reset OSC Config... although the most sure way to actually reset the OSC config is by deleting the OSC folder as detailed in [OSC Troubleshooting Step 4](https://ttsvoicewizard.com/docs/getting-started/TextInVRChat#osc-debug-shows-parameters-solution-to-most-cases)

9. Now you can activate the VRChat Listener, you can enable Activate VRChat Listener on Start to enable the feature automatically each time. (You still have to click the big "*Activate VRChat Listener button** the first time).

![image](https://user-images.githubusercontent.com/101527472/229306205-b003e8b8-7174-40af-8e26-1cb7ed4e2558.png)