# KenarApiClient.ChatAPIApi

All URIs are relative to *https://open-api.divar.ir*

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
import KenarApiClient from 'kenar-api-client';
let defaultClient = KenarApiClient.ApiClient.instance;
// Configure API key authorization: APIKey
let APIKey = defaultClient.authentications['APIKey'];
APIKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIKey.apiKeyPrefix = 'Token';

let apiInstance = new KenarApiClient.ChatAPIApi();
let conversationId = "conversationId_example"; // String | Unique identifier for the conversation
let chatAPIChatBotSendMessageBody = new KenarApiClient.ChatAPIChatBotSendMessageBody(); // ChatAPIChatBotSendMessageBody | 
apiInstance.chatAPIChatBotSendMessage(conversationId, chatAPIChatBotSendMessageBody).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **conversationId** | **String**| Unique identifier for the conversation | 
 **chatAPIChatBotSendMessageBody** | [**ChatAPIChatBotSendMessageBody**](ChatAPIChatBotSendMessageBody.md)|  | 

### Return type

[**ChatapiChatBotSendMessageResponse**](ChatapiChatBotSendMessageResponse.md)

### Authorization

[APIKey](../README.md#APIKey)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## chatAPIChatBotSendMessage2

> ChatapiChatBotSendMessageResponse chatAPIChatBotSendMessage2(userId, chatAPIChatBotSendMessageBody)

Send a message to a ChatBot conversation

You can call this API with either conversation_id or user_id. Calling with user_id needs a access_token having CHAT_BOT_USER_MESSAGE_SEND scope.This enables you to start conversation with user from ChatBot.

### Example

```javascript
import KenarApiClient from 'kenar-api-client';
let defaultClient = KenarApiClient.ApiClient.instance;
// Configure API key authorization: APIKey
let APIKey = defaultClient.authentications['APIKey'];
APIKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIKey.apiKeyPrefix = 'Token';

let apiInstance = new KenarApiClient.ChatAPIApi();
let userId = "userId_example"; // String | Unique identifier for the user to start or continue a conversation with
let chatAPIChatBotSendMessageBody = new KenarApiClient.ChatAPIChatBotSendMessageBody(); // ChatAPIChatBotSendMessageBody | 
apiInstance.chatAPIChatBotSendMessage2(userId, chatAPIChatBotSendMessageBody).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | **String**| Unique identifier for the user to start or continue a conversation with | 
 **chatAPIChatBotSendMessageBody** | [**ChatAPIChatBotSendMessageBody**](ChatAPIChatBotSendMessageBody.md)|  | 

### Return type

[**ChatapiChatBotSendMessageResponse**](ChatapiChatBotSendMessageResponse.md)

### Authorization

[APIKey](../README.md#APIKey)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## chatAPIChatBotSendMessage3

> ChatapiChatBotSendMessageResponse chatAPIChatBotSendMessage3(conversationId, chatAPIChatBotSendMessageBody)

Send a message to a ChatBot conversation

You can call this API with either conversation_id or user_id. Calling with user_id needs a access_token having CHAT_BOT_USER_MESSAGE_SEND scope.This enables you to start conversation with user from ChatBot.

### Example

```javascript
import KenarApiClient from 'kenar-api-client';
let defaultClient = KenarApiClient.ApiClient.instance;
// Configure API key authorization: APIKey
let APIKey = defaultClient.authentications['APIKey'];
APIKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIKey.apiKeyPrefix = 'Token';

let apiInstance = new KenarApiClient.ChatAPIApi();
let conversationId = "conversationId_example"; // String | Unique identifier for the conversation
let chatAPIChatBotSendMessageBody = new KenarApiClient.ChatAPIChatBotSendMessageBody(); // ChatAPIChatBotSendMessageBody | 
apiInstance.chatAPIChatBotSendMessage3(conversationId, chatAPIChatBotSendMessageBody).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **conversationId** | **String**| Unique identifier for the conversation | 
 **chatAPIChatBotSendMessageBody** | [**ChatAPIChatBotSendMessageBody**](ChatAPIChatBotSendMessageBody.md)|  | 

### Return type

[**ChatapiChatBotSendMessageResponse**](ChatapiChatBotSendMessageResponse.md)

### Authorization

[APIKey](../README.md#APIKey)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## chatAPIConversationSendMessage

> ChatapiConversationSendMessageResponse chatAPIConversationSendMessage(conversationId, chatAPIConversationSendMessageBody)

Send a message to a conversation

This API is used to send a message to a conversation. You need one of the following scopes to call this API: - CONVERSATION_SEND_MESSAGE.{conversation_id} - CHAT_SUPPLIER_ALL_CONVERSATIONS_MESSAGE_SEND - CHAT_POST_CONVERSATIONS_MESSAGE_SEND.{post_token} 

### Example

```javascript
import KenarApiClient from 'kenar-api-client';
let defaultClient = KenarApiClient.ApiClient.instance;
// Configure API key authorization: APIKey
let APIKey = defaultClient.authentications['APIKey'];
APIKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIKey.apiKeyPrefix = 'Token';

let apiInstance = new KenarApiClient.ChatAPIApi();
let conversationId = "conversationId_example"; // String | Unique identifier for the conversation
let chatAPIConversationSendMessageBody = new KenarApiClient.ChatAPIConversationSendMessageBody(); // ChatAPIConversationSendMessageBody | 
apiInstance.chatAPIConversationSendMessage(conversationId, chatAPIConversationSendMessageBody).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **conversationId** | **String**| Unique identifier for the conversation | 
 **chatAPIConversationSendMessageBody** | [**ChatAPIConversationSendMessageBody**](ChatAPIConversationSendMessageBody.md)|  | 

### Return type

[**ChatapiConversationSendMessageResponse**](ChatapiConversationSendMessageResponse.md)

### Authorization

[APIKey](../README.md#APIKey)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## chatAPIGenerateUploadToken

> ChatapiGenerateUploadTokenResponse chatAPIGenerateUploadToken(body)

Generate an upload token

This API is used to generate an upload token for uploading media files.

### Example

```javascript
import KenarApiClient from 'kenar-api-client';
let defaultClient = KenarApiClient.ApiClient.instance;
// Configure API key authorization: APIKey
let APIKey = defaultClient.authentications['APIKey'];
APIKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIKey.apiKeyPrefix = 'Token';

let apiInstance = new KenarApiClient.ChatAPIApi();
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

[APIKey](../README.md#APIKey)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## chatAPIGetConversation

> ChatapiGetConversationResponse chatAPIGetConversation(conversationId)

Get Conversation by it&#39;s ID

This API is used to get the conversation and messages of a conversation by it&#39;s ID.This API expects access token with &#x60;CHAT_CONVERSATION_READ&#x60; scope.

### Example

```javascript
import KenarApiClient from 'kenar-api-client';
let defaultClient = KenarApiClient.ApiClient.instance;
// Configure API key authorization: APIKey
let APIKey = defaultClient.authentications['APIKey'];
APIKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIKey.apiKeyPrefix = 'Token';

let apiInstance = new KenarApiClient.ChatAPIApi();
let conversationId = "conversationId_example"; // String | Unique identifier for the conversation
apiInstance.chatAPIGetConversation(conversationId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **conversationId** | **String**| Unique identifier for the conversation | 

### Return type

[**ChatapiGetConversationResponse**](ChatapiGetConversationResponse.md)

### Authorization

[APIKey](../README.md#APIKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

