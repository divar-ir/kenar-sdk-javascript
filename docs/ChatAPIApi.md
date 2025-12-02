# KenarApiClient.ChatAPIApi

All URIs are relative to *https://open-api.divar.ir*

Method | HTTP request | Description
------------- | ------------- | -------------
[**chatAPIChatBotSendMessage**](ChatAPIApi.md#chatAPIChatBotSendMessage) | **POST** /v1/open-platform/chat/bot/conversations/{conversation_id}/messages | ارسال پیام به مکالمه ChatBot
[**chatAPIChatBotSendMessage2**](ChatAPIApi.md#chatAPIChatBotSendMessage2) | **POST** /v1/open-platform/chat/bot/users/{user_id}/messages | ارسال پیام به مکالمه ChatBot
[**chatAPIChatBotSendMessage3**](ChatAPIApi.md#chatAPIChatBotSendMessage3) | **POST** /experimental/open-platform/chatbot-conversations/{conversation_id}/messages | ارسال پیام به مکالمه ChatBot
[**chatAPIChatBotSendMessage4**](ChatAPIApi.md#chatAPIChatBotSendMessage4) | **POST** /experimental/open-platform/chat/bot/users/{user_id}/messages | ارسال پیام به مکالمه ChatBot
[**chatAPIChatBotSendMessage5**](ChatAPIApi.md#chatAPIChatBotSendMessage5) | **POST** /experimental/open-platform/chat/bot/conversations/{conversation_id}/messages | ارسال پیام به مکالمه ChatBot
[**chatAPIConversationSendMessage**](ChatAPIApi.md#chatAPIConversationSendMessage) | **POST** /v2/open-platform/conversations/{conversation_id}/messages | ارسال پیام به مکالمه
[**chatAPIGenerateUploadToken**](ChatAPIApi.md#chatAPIGenerateUploadToken) | **POST** /experimental/open-platform/chat/upload | تولید توکن آپلود
[**chatAPIGetConversation**](ChatAPIApi.md#chatAPIGetConversation) | **GET** /v1/open-platform/chat/conversations/{conversation_id} | دریافت مکالمه



## chatAPIChatBotSendMessage

> ChatapiChatBotSendMessageResponse chatAPIChatBotSendMessage(conversationId, chatAPIChatBotSendMessageBody)

ارسال پیام به مکالمه ChatBot

این API امکان ارسال پیام از ربات چت شما به یک مکالمه یا کاربر را فراهم می‌کند. می‌توانید این API را با conversation_id یا user_id فراخوانی کنید.  **نکات مهم**: - هنگام استفاده از user_id، باید با شناسه مبهم شده کاربر احراز هویت شده مطابقت داشته باشد - یا پیام متنی یا توکن رسانه باید ارسال شود (نه هر دو) - می‌توان شبکه دکمه‌ها را به پیام ضمیمه کرد  مجوزهای مورد نیاز: &#x60;CHAT_BOT_SEND_MESSAGE&#x60;. OAuth scope موردنیاز: &#x60;CHAT_BOT_USER_MESSAGE_SEND&#x60;

### Example

```javascript
import KenarApiClient from 'kenar-api-client';
let defaultClient = KenarApiClient.ApiClient.instance;
// Configure API key authorization: APIKey
let APIKey = defaultClient.authentications['APIKey'];
APIKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIKey.apiKeyPrefix = 'Token';
// Configure OAuth2 access token for authorization: OAuth
let OAuth = defaultClient.authentications['OAuth'];
OAuth.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new KenarApiClient.ChatAPIApi();
let conversationId = "conversationId_example"; // String | شناسه منحصر به فرد برای مکالمه
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
 **conversationId** | **String**| شناسه منحصر به فرد برای مکالمه | 
 **chatAPIChatBotSendMessageBody** | [**ChatAPIChatBotSendMessageBody**](ChatAPIChatBotSendMessageBody.md)|  | 

### Return type

[**ChatapiChatBotSendMessageResponse**](ChatapiChatBotSendMessageResponse.md)

### Authorization

[APIKey](../README.md#APIKey), [OAuth](../README.md#OAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## chatAPIChatBotSendMessage2

> ChatapiChatBotSendMessageResponse chatAPIChatBotSendMessage2(userId, chatAPIChatBotSendMessageBody)

ارسال پیام به مکالمه ChatBot

این API امکان ارسال پیام از ربات چت شما به یک مکالمه یا کاربر را فراهم می‌کند. می‌توانید این API را با conversation_id یا user_id فراخوانی کنید.  **نکات مهم**: - هنگام استفاده از user_id، باید با شناسه مبهم شده کاربر احراز هویت شده مطابقت داشته باشد - یا پیام متنی یا توکن رسانه باید ارسال شود (نه هر دو) - می‌توان شبکه دکمه‌ها را به پیام ضمیمه کرد  OAuth scope موردنیاز: &#x60;CHAT_BOT_USER_MESSAGE_SEND&#x60;

### Example

```javascript
import KenarApiClient from 'kenar-api-client';
let defaultClient = KenarApiClient.ApiClient.instance;
// Configure API key authorization: APIKey
let APIKey = defaultClient.authentications['APIKey'];
APIKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIKey.apiKeyPrefix = 'Token';
// Configure OAuth2 access token for authorization: OAuth
let OAuth = defaultClient.authentications['OAuth'];
OAuth.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new KenarApiClient.ChatAPIApi();
let userId = "userId_example"; // String | شناسه منحصر به فرد کاربر برای شروع یا ادامه مکالمه
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
 **userId** | **String**| شناسه منحصر به فرد کاربر برای شروع یا ادامه مکالمه | 
 **chatAPIChatBotSendMessageBody** | [**ChatAPIChatBotSendMessageBody**](ChatAPIChatBotSendMessageBody.md)|  | 

### Return type

[**ChatapiChatBotSendMessageResponse**](ChatapiChatBotSendMessageResponse.md)

### Authorization

[APIKey](../README.md#APIKey), [OAuth](../README.md#OAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## chatAPIChatBotSendMessage3

> ChatapiChatBotSendMessageResponse chatAPIChatBotSendMessage3(conversationId, chatAPIChatBotSendMessageBody)

ارسال پیام به مکالمه ChatBot

این API امکان ارسال پیام از ربات چت شما به یک مکالمه یا کاربر را فراهم می‌کند. می‌توانید این API را با conversation_id یا user_id فراخوانی کنید.  **نکات مهم**: - هنگام استفاده از user_id، باید با شناسه مبهم شده کاربر احراز هویت شده مطابقت داشته باشد - یا پیام متنی یا توکن رسانه باید ارسال شود (نه هر دو) - می‌توان شبکه دکمه‌ها را به پیام ضمیمه کرد  OAuth scope موردنیاز: &#x60;CHAT_BOT_USER_MESSAGE_SEND&#x60;

### Example

```javascript
import KenarApiClient from 'kenar-api-client';
let defaultClient = KenarApiClient.ApiClient.instance;
// Configure API key authorization: APIKey
let APIKey = defaultClient.authentications['APIKey'];
APIKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIKey.apiKeyPrefix = 'Token';
// Configure OAuth2 access token for authorization: OAuth
let OAuth = defaultClient.authentications['OAuth'];
OAuth.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new KenarApiClient.ChatAPIApi();
let conversationId = "conversationId_example"; // String | شناسه منحصر به فرد برای مکالمه
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
 **conversationId** | **String**| شناسه منحصر به فرد برای مکالمه | 
 **chatAPIChatBotSendMessageBody** | [**ChatAPIChatBotSendMessageBody**](ChatAPIChatBotSendMessageBody.md)|  | 

### Return type

[**ChatapiChatBotSendMessageResponse**](ChatapiChatBotSendMessageResponse.md)

### Authorization

[APIKey](../README.md#APIKey), [OAuth](../README.md#OAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## chatAPIChatBotSendMessage4

> ChatapiChatBotSendMessageResponse chatAPIChatBotSendMessage4(userId, chatAPIChatBotSendMessageBody)

ارسال پیام به مکالمه ChatBot

این API امکان ارسال پیام از ربات چت شما به یک مکالمه یا کاربر را فراهم می‌کند. می‌توانید این API را با conversation_id یا user_id فراخوانی کنید.  **نکات مهم**: - هنگام استفاده از user_id، باید با شناسه مبهم شده کاربر احراز هویت شده مطابقت داشته باشد - یا پیام متنی یا توکن رسانه باید ارسال شود (نه هر دو) - می‌توان شبکه دکمه‌ها را به پیام ضمیمه کرد  OAuth scope موردنیاز: &#x60;CHAT_BOT_USER_MESSAGE_SEND&#x60;

### Example

```javascript
import KenarApiClient from 'kenar-api-client';
let defaultClient = KenarApiClient.ApiClient.instance;
// Configure API key authorization: APIKey
let APIKey = defaultClient.authentications['APIKey'];
APIKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIKey.apiKeyPrefix = 'Token';
// Configure OAuth2 access token for authorization: OAuth
let OAuth = defaultClient.authentications['OAuth'];
OAuth.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new KenarApiClient.ChatAPIApi();
let userId = "userId_example"; // String | شناسه منحصر به فرد کاربر برای شروع یا ادامه مکالمه
let chatAPIChatBotSendMessageBody = new KenarApiClient.ChatAPIChatBotSendMessageBody(); // ChatAPIChatBotSendMessageBody | 
apiInstance.chatAPIChatBotSendMessage4(userId, chatAPIChatBotSendMessageBody).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | **String**| شناسه منحصر به فرد کاربر برای شروع یا ادامه مکالمه | 
 **chatAPIChatBotSendMessageBody** | [**ChatAPIChatBotSendMessageBody**](ChatAPIChatBotSendMessageBody.md)|  | 

### Return type

[**ChatapiChatBotSendMessageResponse**](ChatapiChatBotSendMessageResponse.md)

### Authorization

[APIKey](../README.md#APIKey), [OAuth](../README.md#OAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## chatAPIChatBotSendMessage5

> ChatapiChatBotSendMessageResponse chatAPIChatBotSendMessage5(conversationId, chatAPIChatBotSendMessageBody)

ارسال پیام به مکالمه ChatBot

این API امکان ارسال پیام از ربات چت شما به یک مکالمه یا کاربر را فراهم می‌کند. می‌توانید این API را با conversation_id یا user_id فراخوانی کنید.  **نکات مهم**: - هنگام استفاده از user_id، باید با شناسه مبهم شده کاربر احراز هویت شده مطابقت داشته باشد - یا پیام متنی یا توکن رسانه باید ارسال شود (نه هر دو) - می‌توان شبکه دکمه‌ها را به پیام ضمیمه کرد  OAuth scope موردنیاز: &#x60;CHAT_BOT_USER_MESSAGE_SEND&#x60;

### Example

```javascript
import KenarApiClient from 'kenar-api-client';
let defaultClient = KenarApiClient.ApiClient.instance;
// Configure API key authorization: APIKey
let APIKey = defaultClient.authentications['APIKey'];
APIKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIKey.apiKeyPrefix = 'Token';
// Configure OAuth2 access token for authorization: OAuth
let OAuth = defaultClient.authentications['OAuth'];
OAuth.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new KenarApiClient.ChatAPIApi();
let conversationId = "conversationId_example"; // String | شناسه منحصر به فرد برای مکالمه
let chatAPIChatBotSendMessageBody = new KenarApiClient.ChatAPIChatBotSendMessageBody(); // ChatAPIChatBotSendMessageBody | 
apiInstance.chatAPIChatBotSendMessage5(conversationId, chatAPIChatBotSendMessageBody).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **conversationId** | **String**| شناسه منحصر به فرد برای مکالمه | 
 **chatAPIChatBotSendMessageBody** | [**ChatAPIChatBotSendMessageBody**](ChatAPIChatBotSendMessageBody.md)|  | 

### Return type

[**ChatapiChatBotSendMessageResponse**](ChatapiChatBotSendMessageResponse.md)

### Authorization

[APIKey](../README.md#APIKey), [OAuth](../README.md#OAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## chatAPIConversationSendMessage

> ChatapiConversationSendMessageResponse chatAPIConversationSendMessage(conversationId, chatAPIConversationSendMessageBody)

ارسال پیام به مکالمه

این API امکان ارسال پیام متنی یا رسانه به یک مکالمه را فراهم می‌کند. اگر مکالمه وجود نداشته باشد، به صورت خودکار ایجاد می‌شود.  **نکات مهم**: - یا پیام متنی یا توکن رسانه باید ارسال شود (نه هر دو) - می‌توان شبکه دکمه‌ها را برای فرستنده و گیرنده ضمیمه کرد  مجوزهای مورد نیاز: &#x60;CHAT_SEND_MESSAGE_OAUTH&#x60;. OAuth scope موردنیاز: &#x60;CHAT_POST_CONVERSATIONS_MESSAGE_SEND.post_token&#x60; یا &#x60;CHAT_SUPPLIER_ALL_CONVERSATIONS_MESSAGE_SEND&#x60; یا &#x60;CONVERSATION_SEND_MESSAGE.conversation_id&#x60;

### Example

```javascript
import KenarApiClient from 'kenar-api-client';
let defaultClient = KenarApiClient.ApiClient.instance;
// Configure API key authorization: APIKey
let APIKey = defaultClient.authentications['APIKey'];
APIKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIKey.apiKeyPrefix = 'Token';
// Configure OAuth2 access token for authorization: OAuth
let OAuth = defaultClient.authentications['OAuth'];
OAuth.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new KenarApiClient.ChatAPIApi();
let conversationId = "conversationId_example"; // String | شناسه منحصر به فرد برای مکالمه
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
 **conversationId** | **String**| شناسه منحصر به فرد برای مکالمه | 
 **chatAPIConversationSendMessageBody** | [**ChatAPIConversationSendMessageBody**](ChatAPIConversationSendMessageBody.md)|  | 

### Return type

[**ChatapiConversationSendMessageResponse**](ChatapiConversationSendMessageResponse.md)

### Authorization

[APIKey](../README.md#APIKey), [OAuth](../README.md#OAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## chatAPIGenerateUploadToken

> ChatapiGenerateUploadTokenResponse chatAPIGenerateUploadToken(body)

تولید توکن آپلود

این API توکن آپلود برای بارگذاری فایل‌های رسانه‌ای در پیام‌های چت تولید می‌کند.  مجوزهای مورد نیاز: &#x60;CHAT_UPLOAD_MEDIA&#x60;

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

دریافت مکالمه

این API امکان دریافت مکالمه و پیام‌های آن با شناسه مکالمه را فراهم می‌کند. جزئیات مکالمه و پیام‌های متنی تا زمان انقضای توکن OAuth برمی‌گردد.  **نکات مهم**: - فقط پیام‌های متنی برگردانده می‌شوند (سایر انواع پیام فیلتر می‌شوند) - پیام‌ها به ترتیب صعودی برگردانده می‌شوند  مجوزهای مورد نیاز: &#x60;CHAT_READ_CONVERSATION&#x60;. OAuth scope موردنیاز: &#x60;CHAT_CONVERSATION_READ.conversation_id&#x60;

### Example

```javascript
import KenarApiClient from 'kenar-api-client';
let defaultClient = KenarApiClient.ApiClient.instance;
// Configure API key authorization: APIKey
let APIKey = defaultClient.authentications['APIKey'];
APIKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIKey.apiKeyPrefix = 'Token';
// Configure OAuth2 access token for authorization: OAuth
let OAuth = defaultClient.authentications['OAuth'];
OAuth.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new KenarApiClient.ChatAPIApi();
let conversationId = "conversationId_example"; // String | شناسه منحصر به فرد برای مکالمه
apiInstance.chatAPIGetConversation(conversationId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **conversationId** | **String**| شناسه منحصر به فرد برای مکالمه | 

### Return type

[**ChatapiGetConversationResponse**](ChatapiGetConversationResponse.md)

### Authorization

[APIKey](../README.md#APIKey), [OAuth](../README.md#OAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

