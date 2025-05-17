# KenarAPIClient.ChatAPIApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**chatAPIChatBotSendMessage**](ChatAPIApi.md#chatAPIChatBotSendMessage) | **POST** /experimental/open-platform/chatbot-conversations/{conversation_id}/messages | Send a message to a ChatBot conversation
[**chatAPIChatBotSendMessage2**](ChatAPIApi.md#chatAPIChatBotSendMessage2) | **POST** /experimental/open-platform/chat/bot/users/{user_id}/messages | Send a message to a ChatBot conversation
[**chatAPIChatBotSendMessage3**](ChatAPIApi.md#chatAPIChatBotSendMessage3) | **POST** /experimental/open-platform/chat/bot/conversations/{conversation_id}/messages | Send a message to a ChatBot conversation
[**chatAPIConversationSendMessage**](ChatAPIApi.md#chatAPIConversationSendMessage) | **POST** /v2/open-platform/conversations/{conversation_id}/messages | Send a message to a conversation
[**chatAPIGenerateUploadToken**](ChatAPIApi.md#chatAPIGenerateUploadToken) | **POST** /experimental/open-platform/chat/upload | Generate an upload token
[**chatAPIGetConversation**](ChatAPIApi.md#chatAPIGetConversation) | **GET** /v1/open-platform/chat/conversations/{conversation_id} | Get Conversation by it&#39;s ID



## chatAPIChatBotSendMessage

> ChatapiChatBotSendMessageResponse chatAPIChatBotSendMessage(conversationId, chatAPIChatBotSendMessageBody)

Send a message to a ChatBot conversation

You can call this API with either conversation_id or user_id. Calling with user_id needs a access_token having CHAT_BOT_USER_MESSAGE_SEND scope.This enables you to start conversation with user from ChatBot.

### Example

```javascript
import KenarAPIClient from 'kenar-api-client';

let apiInstance = new KenarAPIClient.ChatAPIApi();
let conversationId = "conversationId_example"; // String | 
let chatAPIChatBotSendMessageBody = new KenarAPIClient.ChatAPIChatBotSendMessageBody(); // ChatAPIChatBotSendMessageBody | 
apiInstance.chatAPIChatBotSendMessage(conversationId, chatAPIChatBotSendMessageBody).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **conversationId** | **String**|  | 
 **chatAPIChatBotSendMessageBody** | [**ChatAPIChatBotSendMessageBody**](ChatAPIChatBotSendMessageBody.md)|  | 

### Return type

[**ChatapiChatBotSendMessageResponse**](ChatapiChatBotSendMessageResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## chatAPIChatBotSendMessage2

> ChatapiChatBotSendMessageResponse chatAPIChatBotSendMessage2(userId, chatAPIChatBotSendMessageBody)

Send a message to a ChatBot conversation

You can call this API with either conversation_id or user_id. Calling with user_id needs a access_token having CHAT_BOT_USER_MESSAGE_SEND scope.This enables you to start conversation with user from ChatBot.

### Example

```javascript
import KenarAPIClient from 'kenar-api-client';

let apiInstance = new KenarAPIClient.ChatAPIApi();
let userId = "userId_example"; // String | 
let chatAPIChatBotSendMessageBody = new KenarAPIClient.ChatAPIChatBotSendMessageBody(); // ChatAPIChatBotSendMessageBody | 
apiInstance.chatAPIChatBotSendMessage2(userId, chatAPIChatBotSendMessageBody).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | **String**|  | 
 **chatAPIChatBotSendMessageBody** | [**ChatAPIChatBotSendMessageBody**](ChatAPIChatBotSendMessageBody.md)|  | 

### Return type

[**ChatapiChatBotSendMessageResponse**](ChatapiChatBotSendMessageResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## chatAPIChatBotSendMessage3

> ChatapiChatBotSendMessageResponse chatAPIChatBotSendMessage3(conversationId, chatAPIChatBotSendMessageBody)

Send a message to a ChatBot conversation

You can call this API with either conversation_id or user_id. Calling with user_id needs a access_token having CHAT_BOT_USER_MESSAGE_SEND scope.This enables you to start conversation with user from ChatBot.

### Example

```javascript
import KenarAPIClient from 'kenar-api-client';

let apiInstance = new KenarAPIClient.ChatAPIApi();
let conversationId = "conversationId_example"; // String | 
let chatAPIChatBotSendMessageBody = new KenarAPIClient.ChatAPIChatBotSendMessageBody(); // ChatAPIChatBotSendMessageBody | 
apiInstance.chatAPIChatBotSendMessage3(conversationId, chatAPIChatBotSendMessageBody).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **conversationId** | **String**|  | 
 **chatAPIChatBotSendMessageBody** | [**ChatAPIChatBotSendMessageBody**](ChatAPIChatBotSendMessageBody.md)|  | 

### Return type

[**ChatapiChatBotSendMessageResponse**](ChatapiChatBotSendMessageResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## chatAPIConversationSendMessage

> ChatapiConversationSendMessageResponse chatAPIConversationSendMessage(conversationId, chatAPIConversationSendMessageBody)

Send a message to a conversation

This API is used to send a message to a conversation. You need one of the following scopes to call this API: - CONVERSATION_SEND_MESSAGE.{conversation_id} - CHAT_SUPPLIER_ALL_CONVERSATIONS_MESSAGE_SEND - CHAT_POST_CONVERSATIONS_MESSAGE_SEND.{post_token} 

### Example

```javascript
import KenarAPIClient from 'kenar-api-client';

let apiInstance = new KenarAPIClient.ChatAPIApi();
let conversationId = "conversationId_example"; // String | 
let chatAPIConversationSendMessageBody = new KenarAPIClient.ChatAPIConversationSendMessageBody(); // ChatAPIConversationSendMessageBody | 
apiInstance.chatAPIConversationSendMessage(conversationId, chatAPIConversationSendMessageBody).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **conversationId** | **String**|  | 
 **chatAPIConversationSendMessageBody** | [**ChatAPIConversationSendMessageBody**](ChatAPIConversationSendMessageBody.md)|  | 

### Return type

[**ChatapiConversationSendMessageResponse**](ChatapiConversationSendMessageResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## chatAPIGenerateUploadToken

> ChatapiGenerateUploadTokenResponse chatAPIGenerateUploadToken(body)

Generate an upload token

This API is used to generate an upload token for uploading media files.

### Example

```javascript
import KenarAPIClient from 'kenar-api-client';

let apiInstance = new KenarAPIClient.ChatAPIApi();
let body = {key: null}; // Object | 
apiInstance.chatAPIGenerateUploadToken(body).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **Object**|  | 

### Return type

[**ChatapiGenerateUploadTokenResponse**](ChatapiGenerateUploadTokenResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## chatAPIGetConversation

> ChatapiGetConversationResponse chatAPIGetConversation(conversationId)

Get Conversation by it&#39;s ID

This API is used to get the conversation and messages of a conversation by it&#39;s ID.This API expects access token with &#x60;CHAT_CONVERSATION_READ&#x60; scope.

### Example

```javascript
import KenarAPIClient from 'kenar-api-client';

let apiInstance = new KenarAPIClient.ChatAPIApi();
let conversationId = "conversationId_example"; // String | 
apiInstance.chatAPIGetConversation(conversationId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **conversationId** | **String**|  | 

### Return type

[**ChatapiGetConversationResponse**](ChatapiGetConversationResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

