# KenarApiClient.PaymentApi

All URIs are relative to *https://open-api.divar.ir*

Method | HTTP request | Description
------------- | ------------- | -------------
[**paymentCommitWalletTransaction**](PaymentApi.md#paymentCommitWalletTransaction) | **POST** /experimental/open-platform/wallet/payments/commit | نهایی کردن تراکنش کیف پول
[**paymentCreateWalletPayment**](PaymentApi.md#paymentCreateWalletPayment) | **POST** /experimental/open-platform/wallet/payments/create | ایجاد پرداخت کیف پول
[**paymentGetBalance**](PaymentApi.md#paymentGetBalance) | **GET** /experimental/open-platform/balance | دریافت موجودی اپلیکیشن
[**paymentGetPostPricing**](PaymentApi.md#paymentGetPostPricing) | **GET** /v1/open-platform/post/{post_token}/pricing | دریافت قیمت خدمات آگهی
[**paymentGetTransaction**](PaymentApi.md#paymentGetTransaction) | **GET** /experimental/open-platform/transactions/{id} | دریافت جزئیات تراکنش
[**paymentListTransactions**](PaymentApi.md#paymentListTransactions) | **GET** /experimental/open-platform/transactions | لیست تراکنش‌ها
[**paymentPublishUserPost**](PaymentApi.md#paymentPublishUserPost) | **POST** /experimental/open-platform/post/{post_token}/publish | انتشار آگهی کاربر (پرداخت توسط ارائه‌دهنده)
[**paymentRenewPost**](PaymentApi.md#paymentRenewPost) | **POST** /experimental/open-platform/post/{post_token}/renew | تمدید آگهی
[**paymentReorderPost**](PaymentApi.md#paymentReorderPost) | **POST** /experimental/open-platform/post/{post_token}/reorder | نردبان آگهی
[**paymentRetrieveWalletTransaction**](PaymentApi.md#paymentRetrieveWalletTransaction) | **GET** /experimental/open-platform/wallet/payments/{token} | دریافت تراکنش کیف پول
[**paymentSubmitUserPayment**](PaymentApi.md#paymentSubmitUserPayment) | **POST** /v1/open-platform/user-payments | ثبت رکورد پرداخت کاربر



## paymentCommitWalletTransaction

> PaymentCommitWalletTransactionResponse paymentCommitWalletTransaction(paymentCommitWalletTransactionRequest)

نهایی کردن تراکنش کیف پول

این API تراکنش پرداخت کیف پول را پس از پرداخت موفق نهایی می‌کند.  **نکات مهم**: - این قابلیت آزمایشی است و فقط برای اپلیکیشن‌های تایید شده در دسترس است - فقط تراکنش‌هایی که در وضعیت PAID هستند را نهایی کنید  #### دسترسی‌ها:  ##### مجوزهای API Key مورد نیاز:  - &#x60;WALLET_PAYMENT&#x60;  ##### OAuth اسکوپ موردنیاز:  - &#x60;CREATE_WALLET_PAYMENT&#x60;

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

این API امکان شروع تراکنش پرداخت از کیف پول دیوار کاربر را فراهم می‌کند. کاربر برای تکمیل پرداخت هدایت می‌شود و می‌توانید وضعیت تراکنش را پیگیری کنید.  **نکات مهم**: - این قابلیت آزمایشی است و فقط برای اپلیکیشن‌های تایید شده در دسترس است - کاربر برای تکمیل تراکنش به آدرس پرداخت هدایت می‌شود - پس از پرداخت، کاربر به &#x60;redirect_url&#x60; مشخص شده شما هدایت می‌شود - از &#x60;RetrieveWalletTransaction&#x60; برای بررسی وضعیت پرداخت استفاده کنید - از &#x60;CommitWalletTransaction&#x60; برای نهایی کردن تراکنش پس از پرداخت موفق استفاده کنید   #### دسترسی‌ها:  ##### مجوزهای API Key مورد نیاز:  - &#x60;WALLET_PAYMENT&#x60;  ##### OAuth اسکوپ موردنیاز:  - &#x60;CREATE_WALLET_PAYMENT&#x60;

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

این API امکان دریافت موجودی فعلی اپلیکیشن شما به ریال را فراهم می‌کند. برای نظارت بر موجودی حساب قبل از انجام عملیات‌های پولی استفاده کنید.  **نکات مهم**: - این قابلیت فقط برای اپلیکیشن‌های تایید شده در دسترس است - موجودی به ریال ایران برگردانده می‌شود  #### دسترسی‌ها:  ##### مجوزهای API Key مورد نیاز:  - &#x60;BALANCE_RETRIEVE&#x60;

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

دریافت قیمت خدمات آگهی

این API امکان دریافت اطلاعات قیمت‌گذاری برای خدمات مرتبط با آگهی را فراهم می‌کند. قبل از انجام عملیات‌های پولی مانند نردبان، تمدید یا ثبت آگهی از این برای بررسی هزینه‌ها استفاده کنید.  **نکات مهم**: - قیمت‌گذاری مختص اپلیکیشن شما است و ممکن است با قیمت‌گذاری استاندارد دیوار متفاوت باشد - قیمت‌ها ممکن است بر اساس دسته‌بندی و شهر آگهی متفاوت باشند - فلگ &#x60;available&#x60; نشان می‌دهد که آیا سرویس برای این آگهی قابل اعمال است  #### دسترسی‌ها:  ##### مجوزهای API Key مورد نیاز:  - &#x60;POST_PRICING_RETRIEVE&#x60;  ##### OAuth اسکوپ موردنیاز:  - &#x60;PAYMENT_ALL_POSTS_PRICING_READ&#x60;

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

این API امکان دریافت اطلاعات دقیق یک تراکنش خاص با شناسه آن را فراهم می‌کند. برای پیگیری وضعیت تراکنش، هزینه‌ها و متادیتا استفاده کنید.  **نکات مهم**: - این قابلیت فقط برای اپلیکیشن‌های تایید شده در دسترس است - شناسه تراکنش همان UUID است که هنگام ایجاد تراکنش ارسال کردید - وضعیت‌های تراکنش: PENDING، COMPLETED، FAILED، REFUNDED - انواع تراکنش: REORDER، SUBMIT، RENEW - برای تایید تکمیل تراکنش پس از عملیات‌های پولی استفاده کنید  #### دسترسی‌ها:  ##### مجوزهای API Key مورد نیاز:  - &#x60;TRANSACTION_RETRIEVE&#x60;

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

این API امکان دریافت لیست صفحه‌بندی شده از تراکنش‌های اپلیکیشن شما را فراهم می‌کند. برای تاریخچه تراکنش، ممیزی و تسویه حساب استفاده کنید.  **نکات مهم**: - این قابلیت فقط برای اپلیکیشن‌های تایید شده در دسترس است - نتایج صفحه‌بندی شده هستند - از &#x60;page_size&#x60; برای کنترل تعداد آیتم‌ها در هر صفحه استفاده کنید - از &#x60;page_token&#x60; در پاسخ برای دریافت صفحه بعدی استفاده کنید - تراکنش‌ها بر اساس زمان ایجاد مرتب می‌شوند (جدیدترین اول)  #### دسترسی‌ها:  ##### مجوزهای API Key مورد نیاز:  - &#x60;TRANSACTION_LIST&#x60;

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
  'pageSize': 56, // Number | تعداد تراکنش‌ها در هر صفحه
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
 **pageSize** | **Number**| تعداد تراکنش‌ها در هر صفحه | [optional] 
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

انتشار آگهی کاربر (پرداخت توسط ارائه‌دهنده)

این API امکان پرداخت هزینه انتشار آگهی ثبت شده توسط کاربر از طرف اپلیکیشن شما را فراهم می‌کند. هزینه از موجودی اپلیکیشن شما کسر می‌شود و آگهی منتشر می‌شود.  **نکات مهم**: - ابتدا آگهی باید با API &#x60;SubmitUserPost&#x60; ایجاد شده باشد - یک &#x60;id&#x60; منحصر به فرد (UUID v4) برای جلوگیری از تکرار ارسال کنید - آگهی باید در وضعیت نیازمند پرداخت (WAITING_FOR_PAYMENT) باشد - از کافی بودن موجودی اپلیکیشن خود اطمینان حاصل کنید - هزینه‌ها بر اساس دسته‌بندی و شهر آگهی متفاوت است  #### دسترسی‌ها:  ##### مجوزهای API Key مورد نیاز:  - &#x60;PUBLISH_USER_POST&#x60;  ##### OAuth اسکوپ موردنیاز:  - &#x60;SUBMIT_USER_POST&#x60;

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

این API امکان تمدید آگهی را فراهم می‌کند که دوره نمایش آن در دیوار را افزایش می‌دهد. هزینه از موجودی اپلیکیشن شما کسر می‌شود.  **نکات مهم**: - این قابلیت فقط برای اپلیکیشن‌های تایید شده در دسترس است - قبل از تمدید، از &#x60;GetPostPricing&#x60; برای بررسی هزینه استفاده کنید - یک &#x60;id&#x60; منحصر به فرد (UUID v4) برای جلوگیری از تکرار ارسال کنید - آگهی باید در وضعیت PUBLISHED و واجد شرایط تمدید باشد - از کافی بودن موجودی اپلیکیشن خود اطمینان حاصل کنید - هزینه‌ها بر اساس دسته‌بندی و شهر آگهی متفاوت است - تمدید، نمایش آگهی را افزایش داده و عمر آن را بازنشانی می‌کند  #### دسترسی‌ها:  ##### مجوزهای API Key مورد نیاز:  - &#x60;POST_RENEW&#x60;  ##### OAuth اسکوپ موردنیاز:  - &#x60;PAYMENT_ALL_POSTS_RENEW&#x60;

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

این API امکان نردبان کردن آگهی به بالای لیست را فراهم می‌کند. هزینه از موجودی اپلیکیشن شما کسر می‌شود.  **نکات مهم**: - این قابلیت فقط برای اپلیکیشن‌های تایید شده در دسترس است - قبل از نردبان، از &#x60;GetPostPricing&#x60; برای بررسی هزینه استفاده کنید - یک &#x60;id&#x60; منحصر به فرد (UUID v4) برای جلوگیری از تکرار ارسال کنید - آگهی باید در وضعیت PUBLISHED باشد - از کافی بودن موجودی اپلیکیشن خود اطمینان حاصل کنید - هزینه‌ها بر اساس دسته‌بندی و شهر آگهی متفاوت است  #### دسترسی‌ها:  ##### مجوزهای API Key مورد نیاز:  - &#x60;POST_REORDER&#x60;  ##### OAuth اسکوپ موردنیاز:  - &#x60;PAYMENT_ALL_POSTS_REORDER&#x60;

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

دریافت تراکنش کیف پول

این API امکان دریافت وضعیت فعلی و جزئیات تراکنش پرداخت کیف پول را فراهم می‌کند. برای تایید تکمیل پرداخت قبل از commit کردن تراکنش استفاده کنید.  **نکات مهم**: - این قابلیت آزمایشی است و فقط برای اپلیکیشن‌های تایید شده در دسترس است - وضعیت‌های تراکنش: UNKNOWN، CREATED، EXPIRED، PAID، COMMITTED  #### دسترسی‌ها:  ##### مجوزهای API Key مورد نیاز:  - &#x60;WALLET_PAYMENT&#x60;  ##### OAuth اسکوپ موردنیاز:  - &#x60;CREATE_WALLET_PAYMENT&#x60;

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
let token = "token_example"; // String | توکن تراکنشی که می‌خواهید دریافت کنید
apiInstance.paymentRetrieveWalletTransaction(token).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **token** | **String**| توکن تراکنشی که می‌خواهید دریافت کنید | 

### Return type

[**PaymentRetrieveWalletTransactionResponse**](PaymentRetrieveWalletTransactionResponse.md)

### Authorization

[APIKey](../README.md#APIKey), [OAuth](../README.md#OAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## paymentSubmitUserPayment

> Object paymentSubmitUserPayment(paymentSubmitUserPaymentRequest)

ثبت رکورد پرداخت کاربر

این API امکان گزارش پرداخت انجام شده توسط کاربر به سرویس شما را فراهم می‌کند. از این برای اطلاع‌رسانی دیوار درباره تراکنش‌هایی که کاربران از طریق پلتفرم شما پرداخت می‌کنند استفاده کنید.  **نکات مهم**: - باید پرداخت‌ها را در بازه زمانی توافق شده گزارش دهید - &#x60;reference_id&#x60; باید برای هر تراکنش منحصر به فرد باشد (برای تسویه حساب استفاده می‌شود) - شناسه خدماتی که کاربر برای آنها پرداخت کرده را لیست کنید (مثلاً &#39;banner&#39;, &#39;title_refinement&#39;) - این داده‌ها برای تقسیم درآمد و گزارش مالی استفاده می‌شوند   #### دسترسی‌ها:  ##### مجوزهای API Key مورد نیاز:  - &#x60;SUBMIT_USER_PAYMENT&#x60;  ##### OAuth اسکوپ موردنیاز:  - &#x60;SUBMIT_USER_PAYMENT&#x60;

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

