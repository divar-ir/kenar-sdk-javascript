# KenarApiClient.PaymentApi

All URIs are relative to *https://open-api.divar.ir*

Method | HTTP request | Description
------------- | ------------- | -------------
[**paymentCommitWalletTransaction**](PaymentApi.md#paymentCommitWalletTransaction) | **POST** /experimental/open-platform/wallet/payments/commit | تایید تراکنش کیف پول
[**paymentCreateWalletPayment**](PaymentApi.md#paymentCreateWalletPayment) | **POST** /experimental/open-platform/wallet/payments/create | ایجاد پرداخت کیف پول
[**paymentGetBalance**](PaymentApi.md#paymentGetBalance) | **GET** /experimental/open-platform/balance | دریافت موجودی اپلیکیشن
[**paymentGetPostPricing**](PaymentApi.md#paymentGetPostPricing) | **GET** /v1/open-platform/post/{post_token}/pricing | Retrieve the cost of the service
[**paymentGetTransaction**](PaymentApi.md#paymentGetTransaction) | **GET** /experimental/open-platform/transactions/{id} | دریافت جزئیات تراکنش
[**paymentListTransactions**](PaymentApi.md#paymentListTransactions) | **GET** /experimental/open-platform/transactions | لیست تراکنش‌ها
[**paymentPublishUserPost**](PaymentApi.md#paymentPublishUserPost) | **POST** /experimental/open-platform/post/{post_token}/publish | Pay for user post submission on behalf of provider
[**paymentRenewPost**](PaymentApi.md#paymentRenewPost) | **POST** /experimental/open-platform/post/{post_token}/renew | تمدید آگهی
[**paymentReorderPost**](PaymentApi.md#paymentReorderPost) | **POST** /experimental/open-platform/post/{post_token}/reorder | نردبان آگهی
[**paymentRetrieveWalletTransaction**](PaymentApi.md#paymentRetrieveWalletTransaction) | **GET** /experimental/open-platform/wallet/payments/{token} | بازیابی تراکنش کیف پول
[**paymentSubmitUserPayment**](PaymentApi.md#paymentSubmitUserPayment) | **POST** /v1/open-platform/user-payments | Submit a user payment



## paymentCommitWalletTransaction

> PaymentCommitWalletTransactionResponse paymentCommitWalletTransaction(paymentCommitWalletTransactionRequest)

تایید تراکنش کیف پول

(Limited) Using this API you can commit a successful payment. This API is idempotent and you can call it multiple times.  مجوزهای مورد نیاز: WALLET_PAYMENT.

### Example

```javascript
import KenarApiClient from 'kenar-api-client';
let defaultClient = KenarApiClient.ApiClient.instance;
// Configure API key authorization: APIKey
let APIKey = defaultClient.authentications['APIKey'];
APIKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIKey.apiKeyPrefix = 'Token';

let apiInstance = new KenarApiClient.PaymentApi();
let paymentCommitWalletTransactionRequest = new KenarApiClient.PaymentCommitWalletTransactionRequest(); // PaymentCommitWalletTransactionRequest | 
apiInstance.paymentCommitWalletTransaction(paymentCommitWalletTransactionRequest).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **paymentCommitWalletTransactionRequest** | [**PaymentCommitWalletTransactionRequest**](PaymentCommitWalletTransactionRequest.md)|  | 

### Return type

[**PaymentCommitWalletTransactionResponse**](PaymentCommitWalletTransactionResponse.md)

### Authorization

[APIKey](../README.md#APIKey)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## paymentCreateWalletPayment

> PaymentCreateWalletPaymentResponse paymentCreateWalletPayment(paymentCreateWalletPaymentRequest)

ایجاد پرداخت کیف پول

(Limited) Using this API you can start a payment transaction from the users wallet.  مجوزهای مورد نیاز: WALLET_PAYMENT.

### Example

```javascript
import KenarApiClient from 'kenar-api-client';
let defaultClient = KenarApiClient.ApiClient.instance;
// Configure API key authorization: APIKey
let APIKey = defaultClient.authentications['APIKey'];
APIKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIKey.apiKeyPrefix = 'Token';

let apiInstance = new KenarApiClient.PaymentApi();
let paymentCreateWalletPaymentRequest = new KenarApiClient.PaymentCreateWalletPaymentRequest(); // PaymentCreateWalletPaymentRequest | 
apiInstance.paymentCreateWalletPayment(paymentCreateWalletPaymentRequest).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **paymentCreateWalletPaymentRequest** | [**PaymentCreateWalletPaymentRequest**](PaymentCreateWalletPaymentRequest.md)|  | 

### Return type

[**PaymentCreateWalletPaymentResponse**](PaymentCreateWalletPaymentResponse.md)

### Authorization

[APIKey](../README.md#APIKey)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## paymentGetBalance

> PaymentGetBalanceResponse paymentGetBalance()

دریافت موجودی اپلیکیشن

(Limited) Using this API you can retrieve current balance of your app.  مجوزهای مورد نیاز: BALANCE_RETRIEVE.

### Example

```javascript
import KenarApiClient from 'kenar-api-client';
let defaultClient = KenarApiClient.ApiClient.instance;
// Configure API key authorization: APIKey
let APIKey = defaultClient.authentications['APIKey'];
APIKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIKey.apiKeyPrefix = 'Token';

let apiInstance = new KenarApiClient.PaymentApi();
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

Retrieve the cost of the service

Using this API and with user permission, you can get the price of various services like Reorder, Renew, and Submit.The price of this API is not necessarily the same as the price on Divar, and pricing may vary.Use this API to get the price before applying services (such as reordering a post, renewing a post, or submitting a post).  مجوزهای مورد نیاز: POST_PRICING_RETRIEVE.

### Example

```javascript
import KenarApiClient from 'kenar-api-client';
let defaultClient = KenarApiClient.ApiClient.instance;
// Configure API key authorization: APIKey
let APIKey = defaultClient.authentications['APIKey'];
APIKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIKey.apiKeyPrefix = 'Token';

let apiInstance = new KenarApiClient.PaymentApi();
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

دریافت جزئیات تراکنش

(Limited) Using this API you can retrieve transaction details.  مجوزهای مورد نیاز: TRANSACTION_RETRIEVE.

### Example

```javascript
import KenarApiClient from 'kenar-api-client';
let defaultClient = KenarApiClient.ApiClient.instance;
// Configure API key authorization: APIKey
let APIKey = defaultClient.authentications['APIKey'];
APIKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIKey.apiKeyPrefix = 'Token';

let apiInstance = new KenarApiClient.PaymentApi();
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

لیست تراکنش‌ها

(Limited) Using this API you can retrieve a list of transactions. Follow pages till you get an empty list.  مجوزهای مورد نیاز: TRANSACTION_LIST.

### Example

```javascript
import KenarApiClient from 'kenar-api-client';
let defaultClient = KenarApiClient.ApiClient.instance;
// Configure API key authorization: APIKey
let APIKey = defaultClient.authentications['APIKey'];
APIKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIKey.apiKeyPrefix = 'Token';

let apiInstance = new KenarApiClient.PaymentApi();
let opts = {
  'pageSize': 56, // Number | تعداد تراکنش‌ها برای برگرداندن در هر صفحه
  'pageToken': "pageToken_example" // String | توکن برای صفحه بعدی نتایج
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
 **pageSize** | **Number**| تعداد تراکنش‌ها برای برگرداندن در هر صفحه | [optional] 
 **pageToken** | **String**| توکن برای صفحه بعدی نتایج | [optional] 

### Return type

[**PaymentListTransactionsResponse**](PaymentListTransactionsResponse.md)

### Authorization

[APIKey](../README.md#APIKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## paymentPublishUserPost

> PaymentPublishUserPostResponse paymentPublishUserPost(postToken, paymentPublishUserPostBody)

Pay for user post submission on behalf of provider

This API allows providers to pay for user post submission costs. The post_token should be obtained from the SubmitUserPost API in post collection.  مجوزهای مورد نیاز: PUBLISH_USER_POST.

### Example

```javascript
import KenarApiClient from 'kenar-api-client';
let defaultClient = KenarApiClient.ApiClient.instance;
// Configure API key authorization: APIKey
let APIKey = defaultClient.authentications['APIKey'];
APIKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIKey.apiKeyPrefix = 'Token';

let apiInstance = new KenarApiClient.PaymentApi();
let postToken = "postToken_example"; // String | توکن آگهی دریافت شده از RPC SubmitUserPost. شناسه منحصر به فرد 8-9 کاراکتری برای آگهی ثبت شده توسط کاربر.
let paymentPublishUserPostBody = new KenarApiClient.PaymentPublishUserPostBody(); // PaymentPublishUserPostBody | 
apiInstance.paymentPublishUserPost(postToken, paymentPublishUserPostBody).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **postToken** | **String**| توکن آگهی دریافت شده از RPC SubmitUserPost. شناسه منحصر به فرد 8-9 کاراکتری برای آگهی ثبت شده توسط کاربر. | 
 **paymentPublishUserPostBody** | [**PaymentPublishUserPostBody**](PaymentPublishUserPostBody.md)|  | 

### Return type

[**PaymentPublishUserPostResponse**](PaymentPublishUserPostResponse.md)

### Authorization

[APIKey](../README.md#APIKey)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## paymentRenewPost

> PaymentRenewPostResponse paymentRenewPost(postToken, paymentRenewPostBody)

تمدید آگهی

(Limited) Use this API to renew a post, which extends its visibility period. Use GetPostPricing API to get the cost of the service before calling this API.  مجوزهای مورد نیاز: POST_RENEW.

### Example

```javascript
import KenarApiClient from 'kenar-api-client';
let defaultClient = KenarApiClient.ApiClient.instance;
// Configure API key authorization: APIKey
let APIKey = defaultClient.authentications['APIKey'];
APIKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIKey.apiKeyPrefix = 'Token';

let apiInstance = new KenarApiClient.PaymentApi();
let postToken = "postToken_example"; // String | 
let paymentRenewPostBody = new KenarApiClient.PaymentRenewPostBody(); // PaymentRenewPostBody | 
apiInstance.paymentRenewPost(postToken, paymentRenewPostBody).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **postToken** | **String**|  | 
 **paymentRenewPostBody** | [**PaymentRenewPostBody**](PaymentRenewPostBody.md)|  | 

### Return type

[**PaymentRenewPostResponse**](PaymentRenewPostResponse.md)

### Authorization

[APIKey](../README.md#APIKey)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## paymentReorderPost

> PaymentReorderPostResponse paymentReorderPost(postToken, paymentReorderPostBody)

نردبان آگهی

(Limited) Use GetPostPricing API to get the cost of the service before calling this API.  مجوزهای مورد نیاز: POST_REORDER.

### Example

```javascript
import KenarApiClient from 'kenar-api-client';
let defaultClient = KenarApiClient.ApiClient.instance;
// Configure API key authorization: APIKey
let APIKey = defaultClient.authentications['APIKey'];
APIKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIKey.apiKeyPrefix = 'Token';

let apiInstance = new KenarApiClient.PaymentApi();
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


## paymentRetrieveWalletTransaction

> PaymentRetrieveWalletTransactionResponse paymentRetrieveWalletTransaction(token)

بازیابی تراکنش کیف پول

(Limited) Using this API you can retrieve a transaction and its status. Use this API to validate the payment before committing.  مجوزهای مورد نیاز: WALLET_PAYMENT.

### Example

```javascript
import KenarApiClient from 'kenar-api-client';
let defaultClient = KenarApiClient.ApiClient.instance;
// Configure API key authorization: APIKey
let APIKey = defaultClient.authentications['APIKey'];
APIKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIKey.apiKeyPrefix = 'Token';

let apiInstance = new KenarApiClient.PaymentApi();
let token = "token_example"; // String | توکن تراکنشی که می‌خواهید بازیابی کنید
apiInstance.paymentRetrieveWalletTransaction(token).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **token** | **String**| توکن تراکنشی که می‌خواهید بازیابی کنید | 

### Return type

[**PaymentRetrieveWalletTransactionResponse**](PaymentRetrieveWalletTransactionResponse.md)

### Authorization

[APIKey](../README.md#APIKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## paymentSubmitUserPayment

> Object paymentSubmitUserPayment(paymentSubmitUserPaymentRequest)

Submit a user payment

Using this API, you should submit a user payment. It is imperative you use this API to submit a user payment along with the received amount. This API requires an access token with the &#x60;SUBMIT_USER_PAYMENT&#x60; OAuth scope.  مجوزهای مورد نیاز: SUBMIT_USER_PAYMENT.

### Example

```javascript
import KenarApiClient from 'kenar-api-client';
let defaultClient = KenarApiClient.ApiClient.instance;
// Configure API key authorization: APIKey
let APIKey = defaultClient.authentications['APIKey'];
APIKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIKey.apiKeyPrefix = 'Token';

let apiInstance = new KenarApiClient.PaymentApi();
let paymentSubmitUserPaymentRequest = new KenarApiClient.PaymentSubmitUserPaymentRequest(); // PaymentSubmitUserPaymentRequest | 
apiInstance.paymentSubmitUserPayment(paymentSubmitUserPaymentRequest).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **paymentSubmitUserPaymentRequest** | [**PaymentSubmitUserPaymentRequest**](PaymentSubmitUserPaymentRequest.md)|  | 

### Return type

**Object**

### Authorization

[APIKey](../README.md#APIKey)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

