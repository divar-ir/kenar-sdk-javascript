# KenarApiClient.SemanticApi

All URIs are relative to *https://open-api.divar.ir*

Method | HTTP request | Description
------------- | ------------- | -------------
[**semanticCreatePostSemantic**](SemanticApi.md#semanticCreatePostSemantic) | **POST** /experimental/open-platform/semantic/post/{token} | ایجاد اطلاعات معنایی آگهی
[**semanticCreateUserSemantic**](SemanticApi.md#semanticCreateUserSemantic) | **POST** /v1/open-platform/semantic/user/{phone} | ایجاد اطلاعات معنایی کاربر
[**semanticCreateUserSemantic2**](SemanticApi.md#semanticCreateUserSemantic2) | **POST** /v1/open-platform/semantic/users/{divar_user_id} | ایجاد اطلاعات معنایی کاربر
[**semanticDeleteUserSemantic**](SemanticApi.md#semanticDeleteUserSemantic) | **DELETE** /v1/open-platform/semantic/user/{phone} | حذف اطلاعات معنایی کاربر
[**semanticDeleteUserSemantic2**](SemanticApi.md#semanticDeleteUserSemantic2) | **DELETE** /v1/open-platform/semantic/users/{divar_user_id} | حذف اطلاعات معنایی کاربر



## semanticCreatePostSemantic

> Object semanticCreatePostSemantic(token, semanticCreatePostSemanticBody)

ایجاد اطلاعات معنایی آگهی

این API امکان ذخیره اطلاعات درباره یک آگهی در دیوار بدون افزودن افزونه را فراهم می‌کند.  #### دسترسی‌ها:  ##### مجوزهای API Key مورد نیاز:  - &#x60;POST_SEMANTIC_CREATE&#x60;  ##### OAuth اسکوپ موردنیاز:  - &#x60;POST_SEMANTIC_CREATE.post_token&#x60;

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

let apiInstance = new KenarApiClient.SemanticApi();
let token = "token_example"; // String | توکن آگهی
let semanticCreatePostSemanticBody = new KenarApiClient.SemanticCreatePostSemanticBody(); // SemanticCreatePostSemanticBody | 
apiInstance.semanticCreatePostSemantic(token, semanticCreatePostSemanticBody).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **token** | **String**| توکن آگهی | 
 **semanticCreatePostSemanticBody** | [**SemanticCreatePostSemanticBody**](SemanticCreatePostSemanticBody.md)|  | 

### Return type

**Object**

### Authorization

[APIKey](../README.md#APIKey), [OAuth](../README.md#OAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## semanticCreateUserSemantic

> SemanticCreateUserSemanticResponse semanticCreateUserSemantic(phone, semanticCreateUserSemanticBody)

ایجاد اطلاعات معنایی کاربر

این API امکان ایجاد یا به‌روزرسانی semantic کاربر بدون افزودن افزونه را می‌دهد.  **نکات مهم**: - امکان ارسال اطلاعات معنایی و تیکت پرداخت (اختیاری) وجود دارد  #### دسترسی‌ها:  ##### مجوزهای API Key مورد نیاز:  - &#x60;USER_SEMANTIC_CREATE&#x60;  ##### OAuth اسکوپ موردنیاز:  - &#x60;USER_VERIFICATION_CREATE&#x60;

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

let apiInstance = new KenarApiClient.SemanticApi();
let phone = "phone_example"; // String | شماره موبایل کاربر
let semanticCreateUserSemanticBody = new KenarApiClient.SemanticCreateUserSemanticBody(); // SemanticCreateUserSemanticBody | 
apiInstance.semanticCreateUserSemantic(phone, semanticCreateUserSemanticBody).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **phone** | **String**| شماره موبایل کاربر | 
 **semanticCreateUserSemanticBody** | [**SemanticCreateUserSemanticBody**](SemanticCreateUserSemanticBody.md)|  | 

### Return type

[**SemanticCreateUserSemanticResponse**](SemanticCreateUserSemanticResponse.md)

### Authorization

[APIKey](../README.md#APIKey), [OAuth](../README.md#OAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## semanticCreateUserSemantic2

> SemanticCreateUserSemanticResponse semanticCreateUserSemantic2(divarUserId, semanticCreateUserSemanticBody)

ایجاد اطلاعات معنایی کاربر

این API امکان ایجاد یا به‌روزرسانی semantic کاربر بدون افزودن افزونه را می‌دهد.  **نکات مهم**: - امکان ارسال اطلاعات معنایی و تیکت پرداخت (اختیاری) وجود دارد  #### دسترسی‌ها:  ##### مجوزهای API Key مورد نیاز:  - &#x60;USER_SEMANTIC_CREATE&#x60;  ##### OAuth اسکوپ موردنیاز:  - &#x60;USER_VERIFICATION_CREATE&#x60;

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

let apiInstance = new KenarApiClient.SemanticApi();
let divarUserId = "divarUserId_example"; // String | شناسه کاربر دیوار
let semanticCreateUserSemanticBody = new KenarApiClient.SemanticCreateUserSemanticBody(); // SemanticCreateUserSemanticBody | 
apiInstance.semanticCreateUserSemantic2(divarUserId, semanticCreateUserSemanticBody).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **divarUserId** | **String**| شناسه کاربر دیوار | 
 **semanticCreateUserSemanticBody** | [**SemanticCreateUserSemanticBody**](SemanticCreateUserSemanticBody.md)|  | 

### Return type

[**SemanticCreateUserSemanticResponse**](SemanticCreateUserSemanticResponse.md)

### Authorization

[APIKey](../README.md#APIKey), [OAuth](../README.md#OAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## semanticDeleteUserSemantic

> Object semanticDeleteUserSemantic(phone, opts)

حذف اطلاعات معنایی کاربر

این API امکان حذف اطلاعات معنایی یک کاربر را فراهم می‌کند.  #### دسترسی‌ها:  ##### مجوزهای API Key مورد نیاز:  - &#x60;USER_SEMANTIC_DELETE&#x60;

### Example

```javascript
import KenarApiClient from 'kenar-api-client';
let defaultClient = KenarApiClient.ApiClient.instance;
// Configure API key authorization: APIKey
let APIKey = defaultClient.authentications['APIKey'];
APIKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIKey.apiKeyPrefix = 'Token';

let apiInstance = new KenarApiClient.SemanticApi();
let phone = "phone_example"; // String | شماره موبایل کاربر
let opts = {
  'divarUserId': "divarUserId_example" // String | شناسه کاربر دیوار
};
apiInstance.semanticDeleteUserSemantic(phone, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **phone** | **String**| شماره موبایل کاربر | 
 **divarUserId** | **String**| شناسه کاربر دیوار | [optional] 

### Return type

**Object**

### Authorization

[APIKey](../README.md#APIKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## semanticDeleteUserSemantic2

> Object semanticDeleteUserSemantic2(divarUserId, phone)

حذف اطلاعات معنایی کاربر

این API امکان حذف اطلاعات معنایی یک کاربر را فراهم می‌کند.  #### دسترسی‌ها:  ##### مجوزهای API Key مورد نیاز:  - &#x60;USER_SEMANTIC_DELETE&#x60;

### Example

```javascript
import KenarApiClient from 'kenar-api-client';
let defaultClient = KenarApiClient.ApiClient.instance;
// Configure API key authorization: APIKey
let APIKey = defaultClient.authentications['APIKey'];
APIKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIKey.apiKeyPrefix = 'Token';

let apiInstance = new KenarApiClient.SemanticApi();
let divarUserId = "divarUserId_example"; // String | شناسه کاربر دیوار
let phone = "phone_example"; // String | شماره موبایل کاربر
apiInstance.semanticDeleteUserSemantic2(divarUserId, phone).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **divarUserId** | **String**| شناسه کاربر دیوار | 
 **phone** | **String**| شماره موبایل کاربر | 

### Return type

**Object**

### Authorization

[APIKey](../README.md#APIKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

