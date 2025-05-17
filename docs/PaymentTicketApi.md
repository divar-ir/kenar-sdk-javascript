# KenarAPIClient.PaymentTicketApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**paymentTicketValidate**](PaymentTicketApi.md#paymentTicketValidate) | **POST** /v1/open-platform/payment-ticket/validate | Validate a payment ticket



## paymentTicketValidate

> PaymentTicketValidateResponse paymentTicketValidate(paymentTicketValidateRequest)

Validate a payment ticket

Payment tickets are designed to integrate Kenar apps with Divar internal teams. Using this API you can validate a payment ticket and get the issuer payload.

### Example

```javascript
import KenarAPIClient from 'kenar-api-client';

let apiInstance = new KenarAPIClient.PaymentTicketApi();
let paymentTicketValidateRequest = new KenarAPIClient.PaymentTicketValidateRequest(); // PaymentTicketValidateRequest | 
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

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

