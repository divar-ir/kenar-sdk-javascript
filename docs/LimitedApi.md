# KenarApiClient.LimitedApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**paymentGetBalance**](LimitedApi.md#paymentGetBalance) | **GET** /experimental/open-platform/balance | 
[**paymentGetPostPricing**](LimitedApi.md#paymentGetPostPricing) | **GET** /v1/open-platform/post/{post_token}/pricing | Retrieve the cost of the service
[**paymentGetTransaction**](LimitedApi.md#paymentGetTransaction) | **GET** /experimental/open-platform/transactions/{id} | 
[**paymentReorderPost**](LimitedApi.md#paymentReorderPost) | **POST** /experimental/open-platform/post/{post_token}/reorder | 



## paymentGetBalance

> PaymentGetBalanceResponse paymentGetBalance()



Using this API you can retrieve current balance of your app.

### Example

```javascript
import KenarApiClient from 'kenar-api-client';

let apiInstance = new KenarApiClient.LimitedApi();
apiInstance.paymentGetBalance().then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

This endpoint does not need any parameter.

### Return type

[**PaymentGetBalanceResponse**](PaymentGetBalanceResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## paymentGetPostPricing

> PaymentGetPostPricingResponse paymentGetPostPricing(postToken)

Retrieve the cost of the service

Using this API and with user permission, you can get the price of various services like Reorder.The price of this API is not necessarily the same as the price on Divar, and pricing may vary.Use this API to get the price before applying services (such as reordering a post).

### Example

```javascript
import KenarApiClient from 'kenar-api-client';

let apiInstance = new KenarApiClient.LimitedApi();
let postToken = "postToken_example"; // String | An 8-9 character unique identifier for the post
apiInstance.paymentGetPostPricing(postToken).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **postToken** | **String**| An 8-9 character unique identifier for the post | 

### Return type

[**PaymentGetPostPricingResponse**](PaymentGetPostPricingResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## paymentGetTransaction

> PaymentGetTransactionResponse paymentGetTransaction(id)



Using this API you can retrieve transaction details.

### Example

```javascript
import KenarApiClient from 'kenar-api-client';

let apiInstance = new KenarApiClient.LimitedApi();
let id = "id_example"; // String | The unique identifier for the transaction, same as the id in the request
apiInstance.paymentGetTransaction(id).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| The unique identifier for the transaction, same as the id in the request | 

### Return type

[**PaymentGetTransactionResponse**](PaymentGetTransactionResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## paymentReorderPost

> PaymentReorderPostResponse paymentReorderPost(postToken, paymentReorderPostBody)



Use GetPostPricing API to get the cost of the service before calling this API.

### Example

```javascript
import KenarApiClient from 'kenar-api-client';

let apiInstance = new KenarApiClient.LimitedApi();
let postToken = "postToken_example"; // String | 
let paymentReorderPostBody = new KenarApiClient.PaymentReorderPostBody(); // PaymentReorderPostBody | 
apiInstance.paymentReorderPost(postToken, paymentReorderPostBody).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **postToken** | **String**|  | 
 **paymentReorderPostBody** | [**PaymentReorderPostBody**](PaymentReorderPostBody.md)|  | 

### Return type

[**PaymentReorderPostResponse**](PaymentReorderPostResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

