# KenarApiClient.AddonsApi

All URIs are relative to *https://open-api.divar.ir*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addonsCreateBusinessAddon**](AddonsApi.md#addonsCreateBusinessAddon) | **POST** /v1/open-platform/addons/business/{business_token} | افزودن افزونه جدید به آگهی‌های کسب‌و‌کار
[**addonsCreatePostAddonV2**](AddonsApi.md#addonsCreatePostAddonV2) | **POST** /v2/open-platform/addons/post/{token} | افزودن افزونه جدید به آگهی
[**addonsCreateUserAddonV2**](AddonsApi.md#addonsCreateUserAddonV2) | **POST** /v2/open-platform/addons/user/{phone} | افزودن افزونه جدید به کاربر
[**addonsCreateUserAddonV22**](AddonsApi.md#addonsCreateUserAddonV22) | **POST** /v2/open-platform/addons/users/{divar_user_id} | افزودن افزونه جدید به کاربر
[**addonsDeletePostAddon**](AddonsApi.md#addonsDeletePostAddon) | **DELETE** /v1/open-platform/add-ons/post/{token} | حذف افزونه از آگهی
[**addonsDeletePostAddon2**](AddonsApi.md#addonsDeletePostAddon2) | **DELETE** /v1/open-platform/addons/post/{token} | حذف افزونه از آگهی
[**addonsDeleteUserAddon**](AddonsApi.md#addonsDeleteUserAddon) | **DELETE** /v1/open-platform/addons/user/{id} | حذف افزونه کاربر



## addonsCreateBusinessAddon

> AddonsCreateBusinessAddonResponse addonsCreateBusinessAddon(businessToken, addonsCreateBusinessAddonBody)

افزودن افزونه جدید به آگهی‌های کسب‌و‌کار

با استفاده از این API و با مجوز کاربر، می‌توانید افزونه جدیدی به آگهی‌های کسب‌و‌کار متصل کنید. می‌توانید از ویجت‌های موجود برای طراحی افزونه خود استفاده کنید. این API به توکن دسترسی با یکی از دامنه‌های زیر نیاز دارد: - BUSINESS_ADDON_CREATE.{business_token}  مجوزهای مورد نیاز: BUSINESS_ADDON_CREATE.

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

[APIKey](../README.md#APIKey)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## addonsCreatePostAddonV2

> Object addonsCreatePostAddonV2(token, addonsCreatePostAddonV2Body)

افزودن افزونه جدید به آگهی

با استفاده از این API و با مجوز کاربر، می‌توانید افزونه جدیدی به آگهی متصل کنید. می‌توانید از ویجت‌های موجود برای طراحی افزونه خود استفاده کنید. این API به توکن دسترسی با یکی از دامنه‌های زیر نیاز دارد: - USER_POSTS_ADDON_CREATE - POST_ADDON_CREATE.{post_token}  مجوزهای مورد نیاز: ADD_ON_CREATE.

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

[APIKey](../README.md#APIKey)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## addonsCreateUserAddonV2

> AddonsCreateUserAddonResponseV2 addonsCreateUserAddonV2(phone, addonsCreateUserAddonV2Body)

افزودن افزونه جدید به کاربر

با استفاده از این API و با مجوز کاربر، می‌توانید افزونه کاربر ایجاد کنید. افزونه کاربر به تمام آگهی‌های آینده کاربر متصل می‌شود و همچنین 30 آگهی آخر گذشته را پر می‌کند. می‌توانید از ویجت‌های موجود برای طراحی افزونه کاربر خود استفاده کنید. این API به توکن دسترسی با دامنه &#x60;USER_ADDON_CREATE&#x60; نیاز دارد  مجوزهای مورد نیاز: USER_ADDON_CREATE.

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

[APIKey](../README.md#APIKey)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## addonsCreateUserAddonV22

> AddonsCreateUserAddonResponseV2 addonsCreateUserAddonV22(divarUserId, addonsCreateUserAddonV2Body)

افزودن افزونه جدید به کاربر

با استفاده از این API و با مجوز کاربر، می‌توانید افزونه کاربر ایجاد کنید. افزونه کاربر به تمام آگهی‌های آینده کاربر متصل می‌شود و همچنین 30 آگهی آخر گذشته را پر می‌کند. می‌توانید از ویجت‌های موجود برای طراحی افزونه کاربر خود استفاده کنید. این API به توکن دسترسی با دامنه &#x60;USER_ADDON_CREATE&#x60; نیاز دارد

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

[APIKey](../README.md#APIKey)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## addonsDeletePostAddon

> Object addonsDeletePostAddon(token)

حذف افزونه از آگهی

فقط می‌توانید افزونه‌هایی را حذف کنید که توسط اپلیکیشن شما ایجاد شده‌اند.  مجوزهای مورد نیاز: ADD_ON_DELETE.

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

حذف افزونه از آگهی

فقط می‌توانید افزونه‌هایی را حذف کنید که توسط اپلیکیشن شما ایجاد شده‌اند.

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

این تمام افزونه‌های مرتبط با تمام آگهی‌های کاربر را حذف می‌کند. فقط می‌توانید افزونه‌هایی را حذف کنید که توسط اپلیکیشن شما ایجاد شده‌اند.  مجوزهای مورد نیاز: USER_ADDON_DELETE.

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

