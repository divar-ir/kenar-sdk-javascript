# KenarApiClient.EventsApi

All URIs are relative to *https://open-api.divar.ir*

Method | HTTP request | Description
------------- | ------------- | -------------
[**eventsRegisterEventSubscription**](EventsApi.md#eventsRegisterEventSubscription) | **POST** /v1/open-platform/events/subscriptions | اشتراک در رویداد
[**eventsSendEvent**](EventsApi.md#eventsSendEvent) | **POST** /experimental/open-platform/events/send | ارسال رویداد به کاربر



## eventsRegisterEventSubscription

> Object eventsRegisterEventSubscription(eventsRegisterEventSubscriptionRequest)

اشتراک در رویداد

این API امکان اشتراک در رویدادها برای دریافت اعلان‌ها از طریق webhook هنگام وقوع رویدادها را فراهم می‌کند. پس از اشتراک، هنگام وقوع رویداد مربوطه در آدرس webhook شما مطلع خواهید شد.  **نکات مهم**: - برای رویداد &#x60;NEW_MESSAGE_ON_POST&#x60;: نیاز به اسکوپ &#x60;CHAT_POST_CONVERSATIONS_READ.post_token&#x60; یا &#x60;CHAT_SUPPLIER_ALL_CONVERSATIONS_READ&#x60; - برای رویداد &#x60;POST_UPDATE&#x60;: نیاز به اسکوپ &#x60;USER_POSTS_GET&#x60; - آدرس webhook باید در پنل ارائه‌دهندگان برای اپلیکیشن شما تنظیم شده باشد - برخی رویدادها به صورت پیش‌فرض فعال هستند و نیازی به اشتراک ندارند (مثل پیام‌های ربات چت)  #### دسترسی‌ها:  ##### مجوزهای API Key مورد نیاز:  - &#x60;EVENTS_REGISTER_SUBSCRIPTION&#x60;  ##### OAuth اسکوپ موردنیاز:  - &#x60;CHAT_POST_CONVERSATIONS_READ.post_token&#x60; یا &#x60;CHAT_SUPPLIER_ALL_CONVERSATIONS_READ&#x60; یا &#x60;USER_POSTS_GET&#x60;

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

let apiInstance = new KenarApiClient.EventsApi();
let eventsRegisterEventSubscriptionRequest = new KenarApiClient.EventsRegisterEventSubscriptionRequest(); // EventsRegisterEventSubscriptionRequest | 
apiInstance.eventsRegisterEventSubscription(eventsRegisterEventSubscriptionRequest).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **eventsRegisterEventSubscriptionRequest** | [**EventsRegisterEventSubscriptionRequest**](EventsRegisterEventSubscriptionRequest.md)|  | 

### Return type

**Object**

### Authorization

[APIKey](../README.md#APIKey), [OAuth](../README.md#OAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## eventsSendEvent

> Object eventsSendEvent(opts)

ارسال رویداد به کاربر

این API امکان ارسال اعلان رویداد به یک کاربر را فراهم می‌کند. رویداد می‌تواند به یک کاربر خاص یا یک آگهی هدف‌گیری شود. رویدادها می‌توانند شامل دکمه‌هایی با اقدامات سفارشی باشند که به کاربران امکان تعامل با اپلیکیشن شما را می‌دهند.  **نکات مهم**: - عنوان دکمه‌ها باید بین 5 تا 50 کاراکتر باشد - هنگام هدف‌گیری کاربر، target_resource_id باید با شناسه مبهم شده کاربر احراز هویت شده مطابقت داشته باشد - هنگام هدف‌گیری آگهی، آگهی باید متعلق به کاربر احراز هویت شده باشد  #### دسترسی‌ها:  ##### مجوزهای API Key مورد نیاز:  - &#x60;EVENTS_SEND&#x60;  ##### OAuth اسکوپ موردنیاز:  - &#x60;SEND_EVENT&#x60;

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

let apiInstance = new KenarApiClient.EventsApi();
let opts = {
  'message': "message_example", // String | پیام رویداد برای نمایش به کاربر
  'targetType': "targetType_example", // String | هدف رویداد؛ USER یا POST
  'targetResourceId': "targetResourceId_example" // String | شناسه هدف. اگر نوع هدف USER است، باید شناسه کاربر دیوار باشد و اگر POST است، باید توکن آگهی باشد.
};
apiInstance.eventsSendEvent(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **message** | **String**| پیام رویداد برای نمایش به کاربر | [optional] 
 **targetType** | **String**| هدف رویداد؛ USER یا POST | [optional] 
 **targetResourceId** | **String**| شناسه هدف. اگر نوع هدف USER است، باید شناسه کاربر دیوار باشد و اگر POST است، باید توکن آگهی باشد. | [optional] 

### Return type

**Object**

### Authorization

[APIKey](../README.md#APIKey), [OAuth](../README.md#OAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

