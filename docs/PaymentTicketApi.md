# KenarApiClient.PaymentTicketApi

All URIs are relative to *https://open-api.divar.ir*

Method | HTTP request | Description
------------- | ------------- | -------------
[**paymentTicketValidate**](PaymentTicketApi.md#paymentTicketValidate) | **POST** /v1/open-platform/payment-ticket/validate | اعتبارسنجی تیکت پرداخت



## paymentTicketValidate

> PaymentTicketValidateResponse paymentTicketValidate(paymentTicketValidateRequest)

اعتبارسنجی تیکت پرداخت

این API امکان اعتبارسنجی تیکت پرداخت و دریافت payload صادرکننده آن را فراهم می‌کند. برای تایید تیکت‌های ارائه شده توسط کاربران جهت یکپارچه‌سازی با سرویس‌های دیوار استفاده کنید.  **نکات مهم**: - این API توسط اپلیکیشن‌های کنار برای اعتبارسنجی تیکت‌ها استفاده می‌شود - پاسخ شامل payload ارائه شده توسط صادرکننده است  مجوزهای مورد نیاز: &#x60;PAYMENT_TICKET_VALIDATE&#x60;

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

