---
sidebar_position: 1
---
# Azure (TTS)
:::tip
Use a [VoiceWizardPro API Key](/docs/VoiceWizardPro/GetVoiceWizardPro) instead to gain instant access to a variety of voices including those provided by Azure, Amazon Polly, Google Cloud and IBM Watson. This removes the need to create and manage multiple cloud service accounts.
:::


# How to get your Microsoft Azure Key and Region
1. Speech Recognition through Azure you will need a Azure Subscription Key. For Text-To-Speech with Azure you can use either a VoiceWizardPro key or an Azure Key.
- Option 1: [Free Azure Account](https://azure.microsoft.com/en-us/free/)<br /> 
    - Completely free for the first month. After first month you will be asked to upgrade your account to "pay as you go" but still have access to free monthly limits

![image](https://user-images.githubusercontent.com/101527472/226205975-0f43ff0b-b56e-4ad7-a419-0439c4d8e554.png)



 - Option 2: [Free Azure Account for students (no credit card required)](https://azure.microsoft.com/en-us/free/students/) 
    - Completely free, have to renew every year
 
![image](https://user-images.githubusercontent.com/101527472/226205997-72b07053-8e46-4a6d-9548-d3906babaf7e.png)



2. After making your account you will need to create a speech service to get your Key and Region. You will enter this information in the "Microsoft Azure Cognitive Service" tab located in "Settings" <br />
3. **Follow this video on how to get your key and region information:**<br />


<iframe width="600px" height="338px" src="https://www.youtube.com/embed/dl0amatX5zs?si=LT4Z1khWboiVH_yV&amp;clip=Ugkxe7HlljnV9iwlI7AnAOx6YJSDus7K1GZF&amp;clipt=EM2_ARi8ygQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>


4. The pricing tier for your speech service in azure should be set to **F0 Free** if you wish to take advantage of azures free monthly limits and not be charged
![image](https://user-images.githubusercontent.com/101527472/207149853-6b4a3492-01d3-44c5-94b7-ddddab7bb43c.png)

:::caution warning
- **I am not responsible for any charges you receive if you upgrade from a Free Azure Account and use S0 Standard pricing! It is up to you to monitor your own usage if you are using a pay-as-you-go azure account** <br />
   - [Spending Limits](https://docs.microsoft.com/en-us/azure/cost-management-billing/manage/spending-limit)  <br />
   - [Avoid Charges](https://docs.microsoft.com/en-us/azure/cost-management-billing/manage/avoid-charges-free-account) <br />
   - [Azure Speech Service Pricing and Free Monthly Limits](https://azure.microsoft.com/en-us/pricing/details/cognitive-services/speech-services/) 
(This program uses Speech to Text Standard, Text to Speech Neural, and Speech Translation Standard)
   - [Monitor Usage](https://docs.microsoft.com/en-us/answers/questions/643390/how-to-see-text-to-speech-usage.html) (the location to see your speech service usage can be hard to find, this post should help!)
   - [Budgets and Alerts](https://docs.microsoft.com/en-us/azure/cost-management-billing/costs/cost-mgt-alerts-monitor-usage-spending?WT.mc_id=Portal-Microsoft_Azure_CostManagement)
:::

5.  Your key and region go in the "Microsoft Azure Cognitive Service" tab located in the "Speech Provider" tab

:::info
Make sure to click the ``Apply`` button for both key and region
![image](https://user-images.githubusercontent.com/101527472/226206371-89b04ca0-f94c-4e6b-92e3-c4877c0f67c5.png)
:::




# Features 

### Text to Speech Tab
- Many azure voices have options for selecting **Speaking Styles**
    - These can drastically change the sounds of voices (try them out)
- **Spoken Language** is the language that you speak natively 
- **Translation Language** is the language that you wish to translate to.
    - It should be set to **No Translation (Default)** when not in use
    - Speak to text hours and translation hours are separate you get 5 hours each
        - Pro Tip: You can technically use all your 5 for your free monthly speak to text hours and then use **Translation Language** set to your Spoken Language for an extra 5 extra hours
### Azure Settings
- Profanity filter is on by default turn it off in azure settings.
- **Dictionary** takes advantage of Azure's Phrase List feature to allow users to add new words to be recognized.
    - For instance, it can be used for words like "Pogchamp" or user names that Azure wouldn't know otherwise
    - Separate different words or phrases with commas.
    - Phrase List Example:
```
VRChat, Sippbox, Poiyomi, Pogchamp, Suss E Baka
```
- Continuous Recognition (Azure) allows a user to continuously speak and have their words transcribed without constantly pressing the speech to text button
    - WARNING: You will quickly use up your free azure limit with this feature enabled.
## Additional Notes
- Some voices are preview voices only requiring you to select East US, West Europe, or Southeast Asia when creating the speech service.
    - View all Azure voices here: https://learn.microsoft.com/en-us/azure/cognitive-services/speech-service/language-support?tabs=tts
    - Let me know if there is a voice on here that isn't in the program that you would like added

![image](https://user-images.githubusercontent.com/101527472/229010930-7406177b-393f-469c-81a0-e53d3f60b025.png)

