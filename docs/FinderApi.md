# KenarApiClient.FinderApi

All URIs are relative to *https://open-api.divar.ir*

Method | HTTP request | Description
------------- | ------------- | -------------
[**finderGetPost**](FinderApi.md#finderGetPost) | **GET** /v1/open-platform/finder/post/{token} | دریافت آگهی دیوار
[**finderGetUser**](FinderApi.md#finderGetUser) | **POST** /v1/open-platform/users | دریافت اطلاعات کاربر
[**finderGetUser2**](FinderApi.md#finderGetUser2) | **GET** /v1/open-platform/users | دریافت اطلاعات کاربر
[**finderGetUserIDByPhone**](FinderApi.md#finderGetUserIDByPhone) | **POST** /v1/open-platform/get-user-id-by-phone | دریافت شناسه کاربر دیوار با شماره تلفن
[**finderGetUserPosts**](FinderApi.md#finderGetUserPosts) | **GET** /v1/open-platform/finder/user-posts | دریافت آگهی‌های کاربر
[**finderSearchPostV2**](FinderApi.md#finderSearchPostV2) | **POST** /v2/open-platform/finder/post | جستجوی آگهی‌های دیوار



## finderGetPost

> FinderGetPostResponse finderGetPost(token)

دریافت آگهی دیوار

این API امکان دریافت داده‌های عمومی آگهی با توکن را فراهم می‌کند. جزئیات آگهی شامل داده‌های دسته‌بندی، موقعیت، وضعیت، زمان‌ها و اطلاعات کسب‌وکار برمی‌گردد.  **نکات مهم**: - فقط داده‌های عمومی آگهی برگردانده می‌شوند (فیلدهای خصوصی حذف می‌شوند) - می‌توان هر آگهی منتشر شده‌ای را دریافت کرد، محدود به آگهی‌های خود کاربر نیست  مجوزهای مورد نیاز: &#x60;GET_POST&#x60;

### Example

```javascript
import KenarApiClient from 'kenar-api-client';
let defaultClient = KenarApiClient.ApiClient.instance;
// Configure API key authorization: APIKey
let APIKey = defaultClient.authentications['APIKey'];
APIKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIKey.apiKeyPrefix = 'Token';

let apiInstance = new KenarApiClient.FinderApi();
let token = "token_example"; // String | 
apiInstance.finderGetPost(token).then((data) => {
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

[**FinderGetPostResponse**](FinderGetPostResponse.md)

### Authorization

[APIKey](../README.md#APIKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## finderGetUser

> FinderUser finderGetUser(body)

دریافت اطلاعات کاربر

این API اطلاعات کاربر احراز هویت شده را برمی‌گرداند. داده‌های برگشتی به OAuth scopeهای اعطا شده بستگی دارد.  **نکات مهم**: - با scope &#x60;USER_PHONE&#x60;: شماره تلفن کاربر برمی‌گردد - با scope &#x60;USER_ID&#x60;: شناسه مبهم‌شده کاربر برمی‌گردد (یکتا برای هر اپلیکیشن)  مجوزهای مورد نیاز: &#x60;USER_RETRIEVE&#x60;. OAuth scope موردنیاز: &#x60;USER_ID&#x60; یا &#x60;USER_PHONE&#x60;

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

let apiInstance = new KenarApiClient.FinderApi();
let body = {key: null}; // Object | 
apiInstance.finderGetUser(body).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **Object**|  | 

### Return type

[**FinderUser**](FinderUser.md)

### Authorization

[APIKey](../README.md#APIKey), [OAuth](../README.md#OAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## finderGetUser2

> FinderUser finderGetUser2()

دریافت اطلاعات کاربر

این API اطلاعات کاربر احراز هویت شده را برمی‌گرداند. داده‌های برگشتی به OAuth scopeهای اعطا شده بستگی دارد.  **نکات مهم**: - با scope &#x60;USER_PHONE&#x60;: شماره تلفن کاربر برمی‌گردد - با scope &#x60;USER_ID&#x60;: شناسه مبهم‌شده کاربر برمی‌گردد (یکتا برای هر اپلیکیشن)  OAuth scope موردنیاز: &#x60;USER_ID&#x60; یا &#x60;USER_PHONE&#x60;

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

let apiInstance = new KenarApiClient.FinderApi();
apiInstance.finderGetUser2().then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

This endpoint does not need any parameter.

### Return type

[**FinderUser**](FinderUser.md)

### Authorization

[APIKey](../README.md#APIKey), [OAuth](../README.md#OAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## finderGetUserIDByPhone

> FinderGetUserIDByPhoneResponse finderGetUserIDByPhone(finderGetUserIDByPhoneRequest)

دریافت شناسه کاربر دیوار با شماره تلفن

این API امکان پیدا کردن شناسه کاربر با شماره تلفن را می‌دهد. مناسب برای یکپارچه‌سازی با سیستم‌های CRM یا پشتیبانی.  **نکات مهم**: - شناسه مبهم‌شده برمی‌گردد (یکتا برای هر اپلیکیشن، نه شناسه واقعی کاربر دیوار)   مجوزهای مورد نیاز: &#x60;GET_USER_ID_BY_PHONE&#x60;

### Example

```javascript
import KenarApiClient from 'kenar-api-client';
let defaultClient = KenarApiClient.ApiClient.instance;
// Configure API key authorization: APIKey
let APIKey = defaultClient.authentications['APIKey'];
APIKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIKey.apiKeyPrefix = 'Token';

let apiInstance = new KenarApiClient.FinderApi();
let finderGetUserIDByPhoneRequest = new KenarApiClient.FinderGetUserIDByPhoneRequest(); // FinderGetUserIDByPhoneRequest | 
apiInstance.finderGetUserIDByPhone(finderGetUserIDByPhoneRequest).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **finderGetUserIDByPhoneRequest** | [**FinderGetUserIDByPhoneRequest**](FinderGetUserIDByPhoneRequest.md)|  | 

### Return type

[**FinderGetUserIDByPhoneResponse**](FinderGetUserIDByPhoneResponse.md)

### Authorization

[APIKey](../README.md#APIKey)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## finderGetUserPosts

> FinderGetUserPostsResponse finderGetUserPosts()

دریافت آگهی‌های کاربر

این API امکان دریافت لیست آگهی‌های متعلق به کاربر احراز هویت شده را فراهم می‌کند. اطلاعات پایه شامل توکن، عنوان، تصاویر، دسته‌بندی و وضعیت نمایش شماره تلفن برمی‌گردد.  **نکات مهم**: - فقط آگهی‌های متعلق به کاربر احراز هویت شده برگردانده می‌شوند - آگهی‌ها در وضعیت‌های مختلف برگردانده می‌شوند: منتشر شده، در انتظار پرداخت، در انتظار بررسی یا نیازمند اصلاح  مجوزهای مورد نیاز: &#x60;GET_USER_POSTS&#x60;. OAuth scope موردنیاز: &#x60;USER_POSTS_GET&#x60;

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

let apiInstance = new KenarApiClient.FinderApi();
apiInstance.finderGetUserPosts().then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

This endpoint does not need any parameter.

### Return type

[**FinderGetUserPostsResponse**](FinderGetUserPostsResponse.md)

### Authorization

[APIKey](../README.md#APIKey), [OAuth](../README.md#OAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## finderSearchPostV2

> FinderSearchPostV2Response finderSearchPostV2(finderSearchPostsV2Request)

جستجوی آگهی‌های دیوار

این API امکان جستجوی آگهی‌های منتشر شده دیوار با فیلتر را فراهم می‌کند. می‌توانید بر اساس دسته‌بندی، شهر، محله و فیلدهای ویژه دسته‌بندی مانند محدوده قیمت، متراژ، تعداد اتاق و سال تولید فیلتر کنید.  **نکات مهم**: - آگهی‌ها بر اساس زمان آخرین تغییر مرتب می‌شوند - فقط آگهی‌های منتشر شده برگردانده می‌شوند  مجوزهای مورد نیاز: &#x60;SEARCH_POST&#x60;

### Example

```javascript
import KenarApiClient from 'kenar-api-client';
let defaultClient = KenarApiClient.ApiClient.instance;
// Configure API key authorization: APIKey
let APIKey = defaultClient.authentications['APIKey'];
APIKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIKey.apiKeyPrefix = 'Token';

let apiInstance = new KenarApiClient.FinderApi();
let finderSearchPostsV2Request = new KenarApiClient.FinderSearchPostsV2Request(); // FinderSearchPostsV2Request | 
apiInstance.finderSearchPostV2(finderSearchPostsV2Request).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **finderSearchPostsV2Request** | [**FinderSearchPostsV2Request**](FinderSearchPostsV2Request.md)|  | 

### Return type

[**FinderSearchPostV2Response**](FinderSearchPostV2Response.md)

### Authorization

[APIKey](../README.md#APIKey)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

