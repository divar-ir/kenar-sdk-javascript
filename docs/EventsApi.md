# KenarApiClient.EventsApi

All URIs are relative to *https://open-api.divar.ir*

Method | HTTP request | Description
------------- | ------------- | -------------
[**eventsGetEventAction**](EventsApi.md#eventsGetEventAction) | **POST** /v1/open-platform/events/get-action | 
[**eventsRegisterEventSubscription**](EventsApi.md#eventsRegisterEventSubscription) | **POST** /v1/open-platform/events/subscriptions | اشتراک در رویداد
[**eventsSendEvent**](EventsApi.md#eventsSendEvent) | **POST** /experimental/open-platform/events/send | Send an event to a user



## eventsGetEventAction

> WidgetsGeneralNetworkCallResponse eventsGetEventAction(eventsGetEventActionRequest)



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
let eventsGetEventActionRequest = new KenarApiClient.EventsGetEventActionRequest(); // EventsGetEventActionRequest | 
apiInstance.eventsGetEventAction(eventsGetEventActionRequest).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **eventsGetEventActionRequest** | [**EventsGetEventActionRequest**](EventsGetEventActionRequest.md)|  | 

### Return type

[**WidgetsGeneralNetworkCallResponse**](WidgetsGeneralNetworkCallResponse.md)

### Authorization

[APIKey](../README.md#APIKey)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


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

> Object eventsSendEvent(primaryButtonActionOpenPostPagePostToken, primaryButtonActionOpenPostManagePagePostToken, opts)

Send an event to a user

Using this API, you can send an event to a user. The event can be specific to a post or general. The event can include buttons with custom actions allowing users to interact with your app.

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
let primaryButtonActionOpenPostPagePostToken = "primaryButtonActionOpenPostPagePostToken_example"; // String | Token of the post to open
let primaryButtonActionOpenPostManagePagePostToken = "primaryButtonActionOpenPostManagePagePostToken_example"; // String | Token of the post to redirect to its management page
let opts = {
  'message': "message_example", // String | The event message to display to the user
  'primaryButtonTitle': "primaryButtonTitle_example", // String | The text to display on the button
  'primaryButtonActionOpenDirectLink': "primaryButtonActionOpenDirectLink_example", // String | An action to send user to your URL directly with just a resource id (if applicable)
  'primaryButtonActionOpenServerLinkData': {key: null}, // Object | A data that you can set and will be returned to you upon user click to recognize the action
  'primaryButtonActionGetDynamicActionData': {key: null}, // Object | A data that you can set and will be returned to you upon user click to recognize the action
  'targetType': "targetType_example", // String | Target of the event; USER or POST
  'targetResourceId': "targetResourceId_example" // String | id of the target. When target type is USER, it should be the Divar User ID of that user and when target type is POST, it should be the post token. 
};
apiInstance.eventsSendEvent(primaryButtonActionOpenPostPagePostToken, primaryButtonActionOpenPostManagePagePostToken, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **primaryButtonActionOpenPostPagePostToken** | **String**| Token of the post to open | 
 **primaryButtonActionOpenPostManagePagePostToken** | **String**| Token of the post to redirect to its management page | 
 **message** | **String**| The event message to display to the user | [optional] 
 **primaryButtonTitle** | **String**| The text to display on the button | [optional] 
 **primaryButtonActionOpenDirectLink** | **String**| An action to send user to your URL directly with just a resource id (if applicable) | [optional] 
 **primaryButtonActionOpenServerLinkData** | [**Object**](.md)| A data that you can set and will be returned to you upon user click to recognize the action | [optional] 
 **primaryButtonActionGetDynamicActionData** | [**Object**](.md)| A data that you can set and will be returned to you upon user click to recognize the action | [optional] 
 **targetType** | **String**| Target of the event; USER or POST | [optional] 
 **targetResourceId** | **String**| id of the target. When target type is USER, it should be the Divar User ID of that user and when target type is POST, it should be the post token.  | [optional] 

### Return type

**Object**

### Authorization

[APIKey](../README.md#APIKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

