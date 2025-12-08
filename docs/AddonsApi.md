# KenarApiClient.AddonsApi

All URIs are relative to *https://open-api.divar.ir*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addonsCreateBusinessAddon**](AddonsApi.md#addonsCreateBusinessAddon) | **POST** /v1/open-platform/addons/business/{business_token} | ایجاد افزونه کسب‌وکار
[**addonsCreatePostAddonV2**](AddonsApi.md#addonsCreatePostAddonV2) | **POST** /v2/open-platform/addons/post/{token} | ایجاد افزونه آگهی
[**addonsCreateUserAddonV2**](AddonsApi.md#addonsCreateUserAddonV2) | **POST** /v2/open-platform/addons/user/{phone} | ایجاد افزونه کاربر
[**addonsCreateUserAddonV22**](AddonsApi.md#addonsCreateUserAddonV22) | **POST** /v2/open-platform/addons/users/{divar_user_id} | ایجاد افزونه کاربر
[**addonsDeletePostAddon**](AddonsApi.md#addonsDeletePostAddon) | **DELETE** /v1/open-platform/add-ons/post/{token} | حذف افزونه آگهی
[**addonsDeletePostAddon2**](AddonsApi.md#addonsDeletePostAddon2) | **DELETE** /v1/open-platform/addons/post/{token} | حذف افزونه آگهی
[**addonsDeleteUserAddon**](AddonsApi.md#addonsDeleteUserAddon) | **DELETE** /v1/open-platform/addons/user/{id} | حذف افزونه کاربر



## addonsCreateBusinessAddon

> AddonsCreateBusinessAddonResponse addonsCreateBusinessAddon(businessToken, addonsCreateBusinessAddonBody)

ایجاد افزونه کسب‌وکار

این API امکان ایجاد افزونه کسب‌وکار را فراهم می‌کند که روی تمام آگهی‌های منتشر شده یک کسب‌وکار نمایش داده می‌شود.  **نکات مهم**: - ویجت‌ها باید معتبر بوده و از مشخصات فرمت ویجت پیروی کنند - مالکیت کسب‌وکار قبل از ایجاد افزونه بررسی می‌شود  #### دسترسی‌ها:  ##### مجوزهای API Key مورد نیاز:  - &#x60;BUSINESS_ADDON_CREATE&#x60;  ##### OAuth اسکوپ موردنیاز:  - &#x60;BUSINESS_ADDON_CREATE.business_token&#x60;

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

let apiInstance = new KenarApiClient.AddonsApi();
let businessToken = "businessToken_example"; // String | 
let addonsCreateBusinessAddonBody = new KenarApiClient.AddonsCreateBusinessAddonBody(); // AddonsCreateBusinessAddonBody | 
apiInstance.addonsCreateBusinessAddon(businessToken, addonsCreateBusinessAddonBody).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **businessToken** | **String**|  | 
 **addonsCreateBusinessAddonBody** | [**AddonsCreateBusinessAddonBody**](AddonsCreateBusinessAddonBody.md)|  | 

### Return type

[**AddonsCreateBusinessAddonResponse**](AddonsCreateBusinessAddonResponse.md)

### Authorization

[APIKey](../README.md#APIKey), [OAuth](../README.md#OAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## addonsCreatePostAddonV2

> Object addonsCreatePostAddonV2(token, addonsCreatePostAddonV2Body)

ایجاد افزونه آگهی

این API امکان ایجاد افزونه متصل به یک آگهی خاص را فراهم می‌کند. افزونه در صفحه جزئیات آگهی نمایش داده می‌شود.  **نکات مهم**: - ویجت‌ها باید معتبر بوده و از مشخصات فرمت ویجت پیروی کنند - مسیرهای معنایی از ویجت‌ها برای دسته‌بندی استخراج می‌شوند  #### دسترسی‌ها:  ##### مجوزهای API Key مورد نیاز:  - &#x60;ADD_ON_CREATE&#x60;  ##### OAuth اسکوپ موردنیاز:  - &#x60;POST_ADDON_CREATE.post_token&#x60; یا &#x60;USER_POSTS_ADDON_CREATE&#x60;

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

let apiInstance = new KenarApiClient.AddonsApi();
let token = "token_example"; // String | 
let addonsCreatePostAddonV2Body = new KenarApiClient.AddonsCreatePostAddonV2Body(); // AddonsCreatePostAddonV2Body | 
apiInstance.addonsCreatePostAddonV2(token, addonsCreatePostAddonV2Body).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **token** | **String**|  | 
 **addonsCreatePostAddonV2Body** | [**AddonsCreatePostAddonV2Body**](AddonsCreatePostAddonV2Body.md)|  | 

### Return type

**Object**

### Authorization

[APIKey](../README.md#APIKey), [OAuth](../README.md#OAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## addonsCreateUserAddonV2

> AddonsCreateUserAddonResponseV2 addonsCreateUserAddonV2(phone, addonsCreateUserAddonV2Body)

ایجاد افزونه کاربر

این API امکان ایجاد افزونه کاربر را فراهم می‌کند که به صورت خودکار به تمام آگهی‌های کاربر متصل می‌شود. افزونه برای آگهی‌های آینده اعمال شده و همچنین تا 30 آگهی اخیر به عقب برمی‌گردد.  **نکات مهم**: - می‌توان دسته‌بندی‌ها را برای فیلتر کردن آگهی‌هایی که افزونه دریافت می‌کنند مشخص کرد - ویجت‌ها باید معتبر بوده و از مشخصات فرمت ویجت پیروی کنند  #### دسترسی‌ها:  ##### مجوزهای API Key مورد نیاز:  - &#x60;USER_ADDON_CREATE&#x60;  ##### OAuth اسکوپ موردنیاز:  - &#x60;USER_ADDON_CREATE&#x60;

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

let apiInstance = new KenarApiClient.AddonsApi();
let phone = "phone_example"; // String | 
let addonsCreateUserAddonV2Body = new KenarApiClient.AddonsCreateUserAddonV2Body(); // AddonsCreateUserAddonV2Body | 
apiInstance.addonsCreateUserAddonV2(phone, addonsCreateUserAddonV2Body).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **phone** | **String**|  | 
 **addonsCreateUserAddonV2Body** | [**AddonsCreateUserAddonV2Body**](AddonsCreateUserAddonV2Body.md)|  | 

### Return type

[**AddonsCreateUserAddonResponseV2**](AddonsCreateUserAddonResponseV2.md)

### Authorization

[APIKey](../README.md#APIKey), [OAuth](../README.md#OAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## addonsCreateUserAddonV22

> AddonsCreateUserAddonResponseV2 addonsCreateUserAddonV22(divarUserId, addonsCreateUserAddonV2Body)

ایجاد افزونه کاربر

این API امکان ایجاد افزونه کاربر را فراهم می‌کند که به صورت خودکار به تمام آگهی‌های کاربر متصل می‌شود. افزونه برای آگهی‌های آینده اعمال شده و همچنین تا 30 آگهی اخیر به عقب برمی‌گردد.  **نکات مهم**: - می‌توان دسته‌بندی‌ها را برای فیلتر کردن آگهی‌هایی که افزونه دریافت می‌کنند مشخص کرد - ویجت‌ها باید معتبر بوده و از مشخصات فرمت ویجت پیروی کنند  #### دسترسی‌ها:  ##### OAuth اسکوپ موردنیاز:  - &#x60;USER_ADDON_CREATE&#x60;

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

let apiInstance = new KenarApiClient.AddonsApi();
let divarUserId = "divarUserId_example"; // String | 
let addonsCreateUserAddonV2Body = new KenarApiClient.AddonsCreateUserAddonV2Body(); // AddonsCreateUserAddonV2Body | 
apiInstance.addonsCreateUserAddonV22(divarUserId, addonsCreateUserAddonV2Body).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **divarUserId** | **String**|  | 
 **addonsCreateUserAddonV2Body** | [**AddonsCreateUserAddonV2Body**](AddonsCreateUserAddonV2Body.md)|  | 

### Return type

[**AddonsCreateUserAddonResponseV2**](AddonsCreateUserAddonResponseV2.md)

### Authorization

[APIKey](../README.md#APIKey), [OAuth](../README.md#OAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## addonsDeletePostAddon

> Object addonsDeletePostAddon(token)

حذف افزونه آگهی

این API امکان حذف افزونه از یک آگهی را فراهم می‌کند. تمام افزونه‌های ایجاد شده توسط اپلیکیشن شما برای توکن آگهی مشخص شده حذف می‌شوند.  **نکات مهم**: - فقط افزونه‌های ایجاد شده توسط اپلیکیشن شما قابل حذف هستند   #### دسترسی‌ها:  ##### مجوزهای API Key مورد نیاز:  - &#x60;ADD_ON_DELETE&#x60;

### Example

```javascript
import KenarApiClient from 'kenar-api-client';
let defaultClient = KenarApiClient.ApiClient.instance;
// Configure API key authorization: APIKey
let APIKey = defaultClient.authentications['APIKey'];
APIKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIKey.apiKeyPrefix = 'Token';

let apiInstance = new KenarApiClient.AddonsApi();
let token = "token_example"; // String | 
apiInstance.addonsDeletePostAddon(token).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **token** | **String**|  | 

### Return type

**Object**

### Authorization

[APIKey](../README.md#APIKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## addonsDeletePostAddon2

> Object addonsDeletePostAddon2(token)

حذف افزونه آگهی

این API امکان حذف افزونه از یک آگهی را فراهم می‌کند. تمام افزونه‌های ایجاد شده توسط اپلیکیشن شما برای توکن آگهی مشخص شده حذف می‌شوند.  **نکات مهم**: - فقط افزونه‌های ایجاد شده توسط اپلیکیشن شما قابل حذف هستند   #### دسترسی‌ها:  ##### مجوزهای API Key مورد نیاز:  - &#x60;ADD_ON_DELETE&#x60;

### Example

```javascript
import KenarApiClient from 'kenar-api-client';
let defaultClient = KenarApiClient.ApiClient.instance;
// Configure API key authorization: APIKey
let APIKey = defaultClient.authentications['APIKey'];
APIKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIKey.apiKeyPrefix = 'Token';

let apiInstance = new KenarApiClient.AddonsApi();
let token = "token_example"; // String | 
apiInstance.addonsDeletePostAddon2(token).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **token** | **String**|  | 

### Return type

**Object**

### Authorization

[APIKey](../README.md#APIKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## addonsDeleteUserAddon

> Object addonsDeleteUserAddon(id)

حذف افزونه کاربر

این API امکان حذف افزونه کاربر با شناسه را فراهم می‌کند. این کار افزونه کاربر و تمام افزونه‌های آگهی مرتبط را حذف می‌کند.  **نکات مهم**: - فقط افزونه‌های کاربر ایجاد شده توسط اپلیکیشن شما قابل حذف هستند   #### دسترسی‌ها:  ##### مجوزهای API Key مورد نیاز:  - &#x60;USER_ADDON_DELETE&#x60;

### Example

```javascript
import KenarApiClient from 'kenar-api-client';
let defaultClient = KenarApiClient.ApiClient.instance;
// Configure API key authorization: APIKey
let APIKey = defaultClient.authentications['APIKey'];
APIKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIKey.apiKeyPrefix = 'Token';

let apiInstance = new KenarApiClient.AddonsApi();
let id = "id_example"; // String | 
apiInstance.addonsDeleteUserAddon(id).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**|  | 

### Return type

**Object**

### Authorization

[APIKey](../README.md#APIKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

