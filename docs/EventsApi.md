# KenarApiClient.EventsApi

All URIs are relative to *https://open-api.divar.ir*

Method | HTTP request | Description
------------- | ------------- | -------------
[**eventsRegisterEventSubscription**](EventsApi.md#eventsRegisterEventSubscription) | **POST** /v1/open-platform/events/subscriptions | اشتراک در رویداد
[**eventsSendEvent**](EventsApi.md#eventsSendEvent) | **POST** /experimental/open-platform/events/send | ارسال رویداد به کاربر با استفاده از API



## eventsRegisterEventSubscription

> Object eventsRegisterEventSubscription(eventsRegisterEventSubscriptionRequest)

اشتراک در رویداد

این درخواست به شما امکان اشتراک در رویداد را می‌دهد. باید access-token را در این API ارسال کنید تا دسترسی شما بررسی شود. برای اشتراک در &#x60;NEW_MESSAGE_ON_POST&#x60; به یکی از این دامنه‌ها نیاز دارید: - CHAT_POST_CONVERSATIONS_READ.{post_token} - CHAT_SUPPLIER_ALL_CONVERSATIONS_READ برای اشتراک در &#x60;POST_UPDATE&#x60; به دامنه &#x60;USER_POSTS_GET&#x60; نیاز دارید. پس از فراخوانی این API، هنگام وقوع رویداد مربوطه در webhook خود مطلع خواهید شد. مطمئن شوید URL webhook در پنل ارائه‌دهندگان برای اپلیکیشن شما تنظیم شده است. برخی رویدادها به طور پیش‌فرض فعال هستند و نیازی به اشتراک ندارند (مثل پیام‌های chatbot).

### Example

```javascript
import KenarApiClient from 'kenar-api-client';
let defaultClient = KenarApiClient.ApiClient.instance;
// Configure API key authorization: APIKey
let APIKey = defaultClient.authentications['APIKey'];
APIKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIKey.apiKeyPrefix = 'Token';

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

[APIKey](../README.md#APIKey)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## eventsSendEvent

> Object eventsSendEvent(opts)

ارسال رویداد به کاربر با استفاده از API

با استفاده از این API، می‌توانید رویدادی به کاربر ارسال کنید. رویداد می‌تواند مربوط به یک آگهی خاص یا عمومی باشد. رویداد می‌تواند شامل دکمه‌هایی با عملیات سفارشی باشد که به کاربران اجازه می‌دهد با برنامه شما تعامل داشته باشند.

### Example

```javascript
import KenarApiClient from 'kenar-api-client';
let defaultClient = KenarApiClient.ApiClient.instance;
// Configure API key authorization: APIKey
let APIKey = defaultClient.authentications['APIKey'];
APIKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIKey.apiKeyPrefix = 'Token';

let apiInstance = new KenarApiClient.EventsApi();
let opts = {
  'message': "message_example", // String | پیام رویداد برای نمایش به کاربر
  'targetType': "targetType_example", // String | هدف رویداد؛ USER یا POST
  'targetResourceId': "targetResourceId_example" // String | شناسه هدف. وقتی نوع هدف USER است، باید شناسه کاربر دیوار آن کاربر باشد و وقتی نوع هدف POST است، باید توکن آگهی باشد.
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
 **targetResourceId** | **String**| شناسه هدف. وقتی نوع هدف USER است، باید شناسه کاربر دیوار آن کاربر باشد و وقتی نوع هدف POST است، باید توکن آگهی باشد. | [optional] 

### Return type

**Object**

### Authorization

[APIKey](../README.md#APIKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

