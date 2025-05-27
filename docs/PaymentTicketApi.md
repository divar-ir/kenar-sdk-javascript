# KenarApiClient.PaymentTicketApi

All URIs are relative to *https://open-api.divar.ir*

Method | HTTP request | Description
------------- | ------------- | -------------
[**paymentTicketValidate**](PaymentTicketApi.md#paymentTicketValidate) | **POST** /v1/open-platform/payment-ticket/validate | اعتبارسنجی بلیط پرداخت



## paymentTicketValidate

> PaymentTicketValidateResponse paymentTicketValidate(paymentTicketValidateRequest)

اعتبارسنجی بلیط پرداخت

بلیط‌های پرداخت برای یکپارچه‌سازی اپلیکیشن‌های کنار با تیم‌های داخلی دیوار طراحی شده‌اند. با استفاده از این API می‌توانید بلیط پرداخت را اعتبارسنجی کرده و payload صادرکننده را دریافت کنید.

### Example

```javascript
import KenarApiClient from 'kenar-api-client';
let defaultClient = KenarApiClient.ApiClient.instance;
// Configure API key authorization: APIKey
let APIKey = defaultClient.authentications['APIKey'];
APIKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIKey.apiKeyPrefix = 'Token';

let apiInstance = new KenarApiClient.PaymentTicketApi();
let paymentTicketValidateRequest = new KenarApiClient.PaymentTicketValidateRequest(); // PaymentTicketValidateRequest | 
apiInstance.paymentTicketValidate(paymentTicketValidateRequest).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **paymentTicketValidateRequest** | [**PaymentTicketValidateRequest**](PaymentTicketValidateRequest.md)|  | 

### Return type

[**PaymentTicketValidateResponse**](PaymentTicketValidateResponse.md)

### Authorization

[APIKey](../README.md#APIKey)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

