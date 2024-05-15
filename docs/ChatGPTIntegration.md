---
title: "ChatGPT Integration"
sidebar_position: 15
---
# ChatGPT Integration

:::note

ChatGPT integration can be used as a benefit of [VoiceWizardPro](/docs/VoiceWizardPro/GetVoiceWizardPro) although context is not preserved (it will not remember your previous messages)
:::

:::caution warning
Using the OpenAI API is not free, it cost money!
:::

1. [Get an OpenAI key](https://help.openai.com/en/articles/4936850-where-do-i-find-my-openai-api-key) (if using with VoiceWizardPro then a OpenAI key is not needed)

2. Input your OpenAI key into the API key field of the Speech Provider > OpenAI - (ChatGPT) tab and click apply

3. Enable the "Use ChatGPT" toggle

## Options

### Chat With Context
- When enabled each subsequent call will have the context of your previous calls (Chat history currently isn't preserved when using your Pro key for chatgpt)
### Use Max Chat History
- Prevents excessive usage for long chats (entire chat is used as context for new messages). Messages will be purged from the middle of chat history preserving the initial prompt and recent context. (Chat history currently isn't preserved when using your Pro key for chatgpt)

### Max Chat History
- The max number of messages and responses to preserve in memory if **Use Max Chat History** is enabled (Chat history currently isn't preserved when using your Pro key for chatgpt)

### Clear Chat History
- Button to manually clear all history (Chat history currently isn't preserved when using your Pro key for chatgpt)

### Prompt
- The prompt will be sent to the ChatGPT api before each one of your messages (works with Pro)