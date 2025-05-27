# KenarApiClient.ChatAPIApi

All URIs are relative to *https://open-api.divar.ir*

Method | HTTP request | Description
------------- | ------------- | -------------
[**chatAPIChatBotSendMessage**](ChatAPIApi.md#chatAPIChatBotSendMessage) | **POST** /experimental/open-platform/chatbot-conversations/{conversation_id}/messages | ارسال پیام به مکالمه ChatBot
[**chatAPIChatBotSendMessage2**](ChatAPIApi.md#chatAPIChatBotSendMessage2) | **POST** /experimental/open-platform/chat/bot/users/{user_id}/messages | ارسال پیام به مکالمه ChatBot
[**chatAPIChatBotSendMessage3**](ChatAPIApi.md#chatAPIChatBotSendMessage3) | **POST** /experimental/open-platform/chat/bot/conversations/{conversation_id}/messages | ارسال پیام به مکالمه ChatBot
[**chatAPIConversationSendMessage**](ChatAPIApi.md#chatAPIConversationSendMessage) | **POST** /v2/open-platform/conversations/{conversation_id}/messages | ارسال پیام به مکالمه
[**chatAPIGenerateUploadToken**](ChatAPIApi.md#chatAPIGenerateUploadToken) | **POST** /experimental/open-platform/chat/upload | تولید توکن آپلود
[**chatAPIGetConversation**](ChatAPIApi.md#chatAPIGetConversation) | **GET** /v1/open-platform/chat/conversations/{conversation_id} | دریافت مکالمه با شناسه آن



## chatAPIChatBotSendMessage

> ChatapiChatBotSendMessageResponse chatAPIChatBotSendMessage(conversationId, chatAPIChatBotSendMessageBody)

ارسال پیام به مکالمه ChatBot

می‌توانید این API را با conversation_id یا user_id فراخوانی کنید. فراخوانی با user_id نیاز به access_token با دامنه CHAT_BOT_USER_MESSAGE_SEND دارد. این به شما امکان شروع مکالمه با کاربر از ChatBot را می‌دهد.

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

ارسال پیام به مکالمه ChatBot

می‌توانید این API را با conversation_id یا user_id فراخوانی کنید. فراخوانی با user_id نیاز به access_token با دامنه CHAT_BOT_USER_MESSAGE_SEND دارد. این به شما امکان شروع مکالمه با کاربر از ChatBot را می‌دهد.

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

ارسال پیام به مکالمه ChatBot

می‌توانید این API را با conversation_id یا user_id فراخوانی کنید. فراخوانی با user_id نیاز به access_token با دامنه CHAT_BOT_USER_MESSAGE_SEND دارد. این به شما امکان شروع مکالمه با کاربر از ChatBot را می‌دهد.

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

ارسال پیام به مکالمه

این API برای ارسال پیام به مکالمه استفاده می‌شود. برای فراخوانی این API به یکی از دامنه‌های زیر نیاز دارید: - CONVERSATION_SEND_MESSAGE.{conversation_id} - CHAT_SUPPLIER_ALL_CONVERSATIONS_MESSAGE_SEND - CHAT_POST_CONVERSATIONS_MESSAGE_SEND.{post_token} 

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

تولید توکن آپلود

این API برای تولید توکن آپلود برای آپلود فایل‌های رسانه‌ای استفاده می‌شود.

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

دریافت مکالمه با شناسه آن

این API برای دریافت مکالمه و پیام‌های یک مکالمه با شناسه آن استفاده می‌شود. این API توکن دسترسی با دامنه &#x60;CHAT_CONVERSATION_READ&#x60; را انتظار دارد.

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

