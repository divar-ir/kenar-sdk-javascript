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

در برخی موارد، ذخیره اطلاعات مربوط به آگهی در دیوار بدون افزودن افزونه ضروری است. این API توکن دسترسی با دامنه &#x60;POST_SEMANTIC_CREATE&#x60; را انتظار دارد. 

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
let token = "token_example"; // String | 
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
 **token** | **String**|  | 
 **semanticCreatePostSemanticBody** | [**SemanticCreatePostSemanticBody**](SemanticCreatePostSemanticBody.md)|  | 

### Return type

**Object**

### Authorization

[APIKey](../README.md#APIKey)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## semanticCreateUserSemantic

> SemanticCreateUserSemanticResponse semanticCreateUserSemantic(phone, semanticCreateUserSemanticBody)

ایجاد اطلاعات معنایی کاربر

در برخی موارد، ذخیره اطلاعات مربوط به کاربر در دیوار بدون افزودن افزونه ضروری است. نام کاربری در دیوار همان شماره موبایل است. این API توکن دسترسی با دامنه &#x60;USER_VERIFICATION_CREATE&#x60; را انتظار دارد. از APIهای اطلاعات معنایی کاربر برای این منظور استفاده کنید. این سرویس امکان ارسال اطلاعات معنایی و بلیط پرداخت اختیاری را فراهم می‌کند.

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
let phone = "phone_example"; // String | 
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
 **phone** | **String**|  | 
 **semanticCreateUserSemanticBody** | [**SemanticCreateUserSemanticBody**](SemanticCreateUserSemanticBody.md)|  | 

### Return type

[**SemanticCreateUserSemanticResponse**](SemanticCreateUserSemanticResponse.md)

### Authorization

[APIKey](../README.md#APIKey)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## semanticCreateUserSemantic2

> SemanticCreateUserSemanticResponse semanticCreateUserSemantic2(divarUserId, semanticCreateUserSemanticBody)

ایجاد اطلاعات معنایی کاربر

در برخی موارد، ذخیره اطلاعات مربوط به کاربر در دیوار بدون افزودن افزونه ضروری است. نام کاربری در دیوار همان شماره موبایل است. این API توکن دسترسی با دامنه &#x60;USER_VERIFICATION_CREATE&#x60; را انتظار دارد. از APIهای اطلاعات معنایی کاربر برای این منظور استفاده کنید. این سرویس امکان ارسال اطلاعات معنایی و بلیط پرداخت اختیاری را فراهم می‌کند.

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
let divarUserId = "divarUserId_example"; // String | 
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
 **divarUserId** | **String**|  | 
 **semanticCreateUserSemanticBody** | [**SemanticCreateUserSemanticBody**](SemanticCreateUserSemanticBody.md)|  | 

### Return type

[**SemanticCreateUserSemanticResponse**](SemanticCreateUserSemanticResponse.md)

### Authorization

[APIKey](../README.md#APIKey)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## semanticDeleteUserSemantic

> Object semanticDeleteUserSemantic(phone, opts)

حذف اطلاعات معنایی کاربر

می‌توانید اطلاعات معنایی یک کاربر را با فراخوانی این API حذف کنید.

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
let phone = "phone_example"; // String | 
let opts = {
  'divarUserId': "divarUserId_example" // String | 
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
 **phone** | **String**|  | 
 **divarUserId** | **String**|  | [optional] 

### Return type

**Object**

### Authorization

[APIKey](../README.md#APIKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## semanticDeleteUserSemantic2

> Object semanticDeleteUserSemantic2(divarUserId, opts)

حذف اطلاعات معنایی کاربر

می‌توانید اطلاعات معنایی یک کاربر را با فراخوانی این API حذف کنید.

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
let divarUserId = "divarUserId_example"; // String | 
let opts = {
  'phone': "phone_example" // String | 
};
apiInstance.semanticDeleteUserSemantic2(divarUserId, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **divarUserId** | **String**|  | 
 **phone** | **String**|  | [optional] 

### Return type

**Object**

### Authorization

[APIKey](../README.md#APIKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

