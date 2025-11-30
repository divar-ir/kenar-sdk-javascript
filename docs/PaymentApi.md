# KenarApiClient.PaymentApi

All URIs are relative to *https://open-api.divar.ir*

Method | HTTP request | Description
------------- | ------------- | -------------
[**paymentCommitWalletTransaction**](PaymentApi.md#paymentCommitWalletTransaction) | **POST** /experimental/open-platform/wallet/payments/commit | تایید تراکنش کیف پول
[**paymentCreateWalletPayment**](PaymentApi.md#paymentCreateWalletPayment) | **POST** /experimental/open-platform/wallet/payments/create | ایجاد پرداخت کیف پول
[**paymentGetBalance**](PaymentApi.md#paymentGetBalance) | **GET** /experimental/open-platform/balance | دریافت موجودی اپلیکیشن
[**paymentGetPostPricing**](PaymentApi.md#paymentGetPostPricing) | **GET** /v1/open-platform/post/{post_token}/pricing | Get post service pricing
[**paymentGetTransaction**](PaymentApi.md#paymentGetTransaction) | **GET** /experimental/open-platform/transactions/{id} | دریافت جزئیات تراکنش
[**paymentListTransactions**](PaymentApi.md#paymentListTransactions) | **GET** /experimental/open-platform/transactions | لیست تراکنش‌ها
[**paymentPublishUserPost**](PaymentApi.md#paymentPublishUserPost) | **POST** /experimental/open-platform/post/{post_token}/publish | Publish user post (provider pays)
[**paymentRenewPost**](PaymentApi.md#paymentRenewPost) | **POST** /experimental/open-platform/post/{post_token}/renew | تمدید آگهی
[**paymentReorderPost**](PaymentApi.md#paymentReorderPost) | **POST** /experimental/open-platform/post/{post_token}/reorder | نردبان آگهی
[**paymentRetrieveWalletTransaction**](PaymentApi.md#paymentRetrieveWalletTransaction) | **GET** /experimental/open-platform/wallet/payments/{token} | بازیابی تراکنش کیف پول
[**paymentSubmitUserPayment**](PaymentApi.md#paymentSubmitUserPayment) | **POST** /v1/open-platform/user-payments | Submit user payment record



## paymentCommitWalletTransaction

> PaymentCommitWalletTransactionResponse paymentCommitWalletTransaction(paymentCommitWalletTransactionRequest)

تایید تراکنش کیف پول

This API allows you to finalize a wallet payment transaction after the user has successfully paid. Call this endpoint to mark the transaction as complete and trigger your business logic.  **OAuth Scopes**: - &#x60;CREATE_WALLET_PAYMENT&#x60; - Allows creating wallet payment transactions on behalf of the user  **Important Notes**: - This feature is experimental and limited to approved apps only - Only commit transactions that are in PAID status  مجوزهای مورد نیاز: WALLET_PAYMENT. نیاز به دامنه‌های OAuth: CREATE_WALLET_PAYMENT.

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

[APIKey](../README.md#APIKey), [OAuth](../README.md#OAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## paymentCreateWalletPayment

> PaymentCreateWalletPaymentResponse paymentCreateWalletPayment(paymentCreateWalletPaymentRequest)

ایجاد پرداخت کیف پول

This API allows you to initiate a payment transaction from a user&#39;s Divar wallet. The user will be redirected to complete the payment, and you can track the transaction status.  **OAuth Scopes**: - &#x60;CREATE_WALLET_PAYMENT&#x60; - Allows creating wallet payment transactions on behalf of the user  **Important Notes**: - This feature is experimental and limited to approved apps only - User will be redirected to the payment URL to complete the transaction - After payment, user is redirected to your specified &#x60;redirect_url&#x60; - Use &#x60;RetrieveWalletTransaction&#x60; to check payment status - Use &#x60;CommitWalletTransaction&#x60; to finalize the transaction after successful payment   مجوزهای مورد نیاز: WALLET_PAYMENT. نیاز به دامنه‌های OAuth: CREATE_WALLET_PAYMENT.

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

[APIKey](../README.md#APIKey), [OAuth](../README.md#OAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## paymentGetBalance

> PaymentGetBalanceResponse paymentGetBalance()

دریافت موجودی اپلیکیشن

This API allows you to retrieve your app&#39;s current balance in rials. Use this to monitor your account balance before performing paid operations.  **Note**: This API does not require user authorization.  **Important Notes**: - This feature is limited to approved apps only - Balance is returned in Iranian Rials  مجوزهای مورد نیاز: BALANCE_RETRIEVE.

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

Get post service pricing

This API allows you to retrieve pricing information for post-related services. Use this endpoint to check costs before performing paid operations like reordering, renewing, or submitting posts.  **OAuth Scopes**: - &#x60;PAYMENT_ALL_POSTS_PRICING_READ&#x60; - Allows reading pricing for posts on behalf of the user  **Important Notes**: - Pricing is specific to your app and may differ from standard Divar pricing - Prices may vary based on post category and city - The &#x60;available&#x60; flag indicates whether the service can be applied to this post  مجوزهای مورد نیاز: POST_PRICING_RETRIEVE. نیاز به دامنه‌های OAuth: PAYMENT_ALL_POSTS_PRICING_READ.

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

[APIKey](../README.md#APIKey), [OAuth](../README.md#OAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## paymentGetTransaction

> PaymentGetTransactionResponse paymentGetTransaction(id)

دریافت جزئیات تراکنش

This API allows you to retrieve detailed information about a specific transaction using its ID. Use this to track transaction status, costs, and metadata.  **Note**: This API does not require user authorization.  **Important Notes**: - This feature is limited to approved apps only - Transaction ID is the UUID you provided when creating the transaction - Transaction states: PENDING, COMPLETED, FAILED, REFUNDED - Transaction types: REORDER, SUBMIT, RENEW - Use this to verify transaction completion after paid operations  مجوزهای مورد نیاز: TRANSACTION_RETRIEVE.

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

This API allows you to retrieve a paginated list of your app&#39;s transactions. Use this for transaction history, auditing, and reconciliation.  **Note**: This API does not require user authorization.  **Important Notes**: - This feature is limited to approved apps only - Results are paginated - use &#x60;page_size&#x60; to control items per page - Use &#x60;page_token&#x60; from the response to fetch the next page - Transactions are ordered by creation time (newest first)  مجوزهای مورد نیاز: TRANSACTION_LIST.

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

Publish user post (provider pays)

This API allows you to pay for publishing a user-submitted post on behalf of your app. The cost is deducted from your app&#39;s balance, and the post will be published.  **OAuth Scopes** (required): - &#x60;SUBMIT_USER_PAYMENT&#x60; - Allows reporting user payments to Divar  **Important Notes**: - The post must be created using the &#x60;SubmitUserPost&#x60; API first - Provide a unique &#x60;id&#x60; (UUID v4) for idempotency - The post must be in a state that requires payment (WAITING_FOR_PAYMENT) - Ensure your app has sufficient balance - Costs vary by post category and city  مجوزهای مورد نیاز: PUBLISH_USER_POST. نیاز به دامنه‌های OAuth: SUBMIT_USER_PAYMENT.

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

[APIKey](../README.md#APIKey), [OAuth](../README.md#OAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## paymentRenewPost

> PaymentRenewPostResponse paymentRenewPost(postToken, paymentRenewPostBody)

تمدید آگهی

This API allows you to renew a post, which extends its visibility period on Divar. The cost is deducted from your app&#39;s balance.  **OAuth Scopes**: - &#x60;PAYMENT_ALL_POSTS_RENEW&#x60; - Allows renewing posts on behalf of the user  **Important Notes**: - This feature is limited to approved apps only - Use &#x60;GetPostPricing&#x60; to check the cost before renewing - Provide a unique &#x60;id&#x60; (UUID v4) for idempotency - The post must be in PUBLISHED state and eligible for renewal - Ensure your app has sufficient balance - Costs vary by post category and city - Renewal extends the post&#39;s visibility and resets its age  مجوزهای مورد نیاز: POST_RENEW. نیاز به دامنه‌های OAuth: PAYMENT_ALL_POSTS_RENEW.

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

[APIKey](../README.md#APIKey), [OAuth](../README.md#OAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## paymentReorderPost

> PaymentReorderPostResponse paymentReorderPost(postToken, paymentReorderPostBody)

نردبان آگهی

This API allows you to reorder (bump) a post to the top of the listing. The cost is deducted from your app&#39;s balance.  **OAuth Scopes**: - &#x60;PAYMENT_ALL_POSTS_REORDER&#x60; - Allows reordering posts on behalf of the user  **Important Notes**: - This feature is limited to approved apps only - Use &#x60;GetPostPricing&#x60; to check the cost before reordering - Provide a unique &#x60;id&#x60; (UUID v4) for idempotency - The post must be in PUBLISHED state - Ensure your app has sufficient balance - Costs vary by post category and city  مجوزهای مورد نیاز: POST_REORDER. نیاز به دامنه‌های OAuth: PAYMENT_ALL_POSTS_REORDER.

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

[APIKey](../README.md#APIKey), [OAuth](../README.md#OAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## paymentRetrieveWalletTransaction

> PaymentRetrieveWalletTransactionResponse paymentRetrieveWalletTransaction(token)

بازیابی تراکنش کیف پول

This API allows you to retrieve the current status and details of a wallet payment transaction. Use this to verify payment completion before committing the transaction.  **OAuth Scopes**: - &#x60;CREATE_WALLET_PAYMENT&#x60; - Allows creating wallet payment transactions on behalf of the user  **Important Notes**: - This feature is experimental and limited to approved apps only - Transaction statuses: UNKNOWN, CREATED, EXPIRED, PAID, COMMITTED  مجوزهای مورد نیاز: WALLET_PAYMENT. نیاز به دامنه‌های OAuth: CREATE_WALLET_PAYMENT.

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

[APIKey](../README.md#APIKey), [OAuth](../README.md#OAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## paymentSubmitUserPayment

> Object paymentSubmitUserPayment(paymentSubmitUserPaymentRequest)

Submit user payment record

This API allows you to report a payment made by a user to your service. Use this to inform Divar about transactions where users pay for services through your platform.  **OAuth Scopes** (required): - &#x60;SUBMIT_USER_PAYMENT&#x60; - Allows reporting user payments to Divar  **Important Notes**: - You must report payments within the agreed timeframe - The &#x60;reference_id&#x60; must be unique for each transaction (used for reconciliation) - List specific service slugs the user paid for (e.g., &#39;banner&#39;, &#39;title_refinement&#39;) - This data is used for revenue sharing and financial reporting   مجوزهای مورد نیاز: SUBMIT_USER_PAYMENT. نیاز به دامنه‌های OAuth: SUBMIT_USER_PAYMENT.

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

[APIKey](../README.md#APIKey), [OAuth](../README.md#OAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

