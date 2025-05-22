# KenarApiClient.EventsApi

All URIs are relative to *https://open-api.divar.ir*

Method | HTTP request | Description
------------- | ------------- | -------------
[**eventsRegisterEventSubscription**](EventsApi.md#eventsRegisterEventSubscription) | **POST** /v1/open-platform/events/subscriptions | Subscribe to an event



## eventsRegisterEventSubscription

> Object eventsRegisterEventSubscription(eventsRegisterEventSubscriptionRequest)

Subscribe to an event

This requests allows you to subscribe to an event. You need to send access-token in this API to check your access. For subscribing on &#x60;NEW_MESSAGE_ON_POST&#x60; you need one of these scopes: - CHAT_POST_CONVERSATIONS_READ.{post_token} - CHAT_SUPPLIER_ALL_CONVERSATIONS_READ For subscribing on &#x60;POST_UPDATE&#x60; you need &#x60;USER_POSTS_GET&#x60; scope. After calling this API, You&#39;ll be notified in your webhook when corresponding event occurs. Make sure webhook URL is set on providers panel for your app. Some events are enabled by default and no subscription is needed for them(e.g chatbot messages).

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

