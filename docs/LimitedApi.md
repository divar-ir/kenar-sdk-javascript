# KenarApiClient.LimitedApi

All URIs are relative to *https://open-api.divar.ir*

Method | HTTP request | Description
------------- | ------------- | -------------
[**paymentGetBalance**](LimitedApi.md#paymentGetBalance) | **GET** /experimental/open-platform/balance | 
[**paymentGetPostPricing**](LimitedApi.md#paymentGetPostPricing) | **GET** /v1/open-platform/post/{post_token}/pricing | دریافت هزینه سرویس
[**paymentGetTransaction**](LimitedApi.md#paymentGetTransaction) | **GET** /experimental/open-platform/transactions/{id} | 
[**paymentListTransactions**](LimitedApi.md#paymentListTransactions) | **GET** /experimental/open-platform/transactions | 
[**paymentReorderPost**](LimitedApi.md#paymentReorderPost) | **POST** /experimental/open-platform/post/{post_token}/reorder | 



## paymentGetBalance

> PaymentGetBalanceResponse paymentGetBalance()



با استفاده از این API می‌توانید موجودی فعلی اپلیکیشن خود را دریافت کنید.

### Example

```javascript
import KenarApiClient from 'kenar-api-client';
let defaultClient = KenarApiClient.ApiClient.instance;
// Configure API key authorization: APIKey
let APIKey = defaultClient.authentications['APIKey'];
APIKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIKey.apiKeyPrefix = 'Token';

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

[APIKey](../README.md#APIKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## paymentGetPostPricing

> PaymentGetPostPricingResponse paymentGetPostPricing(postToken)

دریافت هزینه سرویس

با استفاده از این API و با مجوز کاربر، می‌توانید قیمت سرویس‌های مختلف مانند نردبان را دریافت کنید. قیمت این API لزوماً با قیمت روی دیوار یکسان نیست و قیمت‌گذاری ممکن است متفاوت باشد. از این API برای دریافت قیمت قبل از اعمال سرویس‌ها (مانند نردبان آگهی) استفاده کنید.

### Example

```javascript
import KenarApiClient from 'kenar-api-client';
let defaultClient = KenarApiClient.ApiClient.instance;
// Configure API key authorization: APIKey
let APIKey = defaultClient.authentications['APIKey'];
APIKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIKey.apiKeyPrefix = 'Token';

let apiInstance = new KenarApiClient.LimitedApi();
let postToken = "postToken_example"; // String | شناسه منحصر به فرد 8-9 کاراکتری برای آگهی
apiInstance.paymentGetPostPricing(postToken).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **postToken** | **String**| شناسه منحصر به فرد 8-9 کاراکتری برای آگهی | 

### Return type

[**PaymentGetPostPricingResponse**](PaymentGetPostPricingResponse.md)

### Authorization

[APIKey](../README.md#APIKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## paymentGetTransaction

> PaymentGetTransactionResponse paymentGetTransaction(id)



با استفاده از این API می‌توانید جزئیات تراکنش را دریافت کنید.

### Example

```javascript
import KenarApiClient from 'kenar-api-client';
let defaultClient = KenarApiClient.ApiClient.instance;
// Configure API key authorization: APIKey
let APIKey = defaultClient.authentications['APIKey'];
APIKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIKey.apiKeyPrefix = 'Token';

let apiInstance = new KenarApiClient.LimitedApi();
let id = "id_example"; // String | شناسه منحصر به فرد برای تراکنش، همان id در درخواست
apiInstance.paymentGetTransaction(id).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| شناسه منحصر به فرد برای تراکنش، همان id در درخواست | 

### Return type

[**PaymentGetTransactionResponse**](PaymentGetTransactionResponse.md)

### Authorization

[APIKey](../README.md#APIKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## paymentListTransactions

> PaymentListTransactionsResponse paymentListTransactions(opts)



با استفاده از این api میتوانید لیست تراکنش‌های اپ را مشاهده کنید. برای مشاهده‌ی تمام تراکنش‌ها، صفحات را دنبال کنید.

### Example

```javascript
import KenarApiClient from 'kenar-api-client';
let defaultClient = KenarApiClient.ApiClient.instance;
// Configure API key authorization: APIKey
let APIKey = defaultClient.authentications['APIKey'];
APIKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIKey.apiKeyPrefix = 'Token';

let apiInstance = new KenarApiClient.LimitedApi();
let opts = {
  'pageSize': 56, // Number | Number of transactions to return per page
  'pageToken': "pageToken_example" // String | Token for the next page of results
};
apiInstance.paymentListTransactions(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **pageSize** | **Number**| Number of transactions to return per page | [optional] 
 **pageToken** | **String**| Token for the next page of results | [optional] 

### Return type

[**PaymentListTransactionsResponse**](PaymentListTransactionsResponse.md)

### Authorization

[APIKey](../README.md#APIKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## paymentReorderPost

> PaymentReorderPostResponse paymentReorderPost(postToken, paymentReorderPostBody)



قبل از فراخوانی این API، از API GetPostPricing برای دریافت هزینه سرویس استفاده کنید.

### Example

```javascript
import KenarApiClient from 'kenar-api-client';
let defaultClient = KenarApiClient.ApiClient.instance;
// Configure API key authorization: APIKey
let APIKey = defaultClient.authentications['APIKey'];
APIKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIKey.apiKeyPrefix = 'Token';

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

[APIKey](../README.md#APIKey)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

