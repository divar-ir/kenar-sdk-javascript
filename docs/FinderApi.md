# KenarApiClient.FinderApi

All URIs are relative to *https://open-api.divar.ir*

Method | HTTP request | Description
------------- | ------------- | -------------
[**finderGetPost**](FinderApi.md#finderGetPost) | **GET** /v1/open-platform/finder/post/{token} | دریافت آگهی دیوار
[**finderGetUser**](FinderApi.md#finderGetUser) | **POST** /v1/open-platform/users | دریافت اطلاعات کاربر
[**finderGetUser2**](FinderApi.md#finderGetUser2) | **GET** /v1/open-platform/users | دریافت اطلاعات کاربر
[**finderGetUserPosts**](FinderApi.md#finderGetUserPosts) | **GET** /v1/open-platform/finder/user-posts | دریافت آگهی‌های کاربر
[**finderSearchPostV2**](FinderApi.md#finderSearchPostV2) | **POST** /v2/open-platform/finder/post | جستجو آگهی‌های دیوار با فیلترهایی



## finderGetPost

> FinderGetPostResponse finderGetPost(token)

دریافت آگهی دیوار

This API allows you to get details about Divar post by its token. You can use the token to get the post data and its state 

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

پس از دریافت توکن دسترسی، می‌توانید از این API برای دریافت اطلاعات کاربر استفاده کنید. با scope &#x60;USER_PHONE&#x60; می‌توانید شماره تلفن کاربر را دریافت کنید. با scope &#x60;USER_ID&#x60; می‌توانید شناسه کاربر را دریافت کرده و می‌توانید روی منحصر به فرد بودن این شناسه تکیه کنید. 

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

[APIKey](../README.md#APIKey)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## finderGetUser2

> FinderUser finderGetUser2()

دریافت اطلاعات کاربر

پس از دریافت توکن دسترسی، می‌توانید از این API برای دریافت اطلاعات کاربر استفاده کنید. با scope &#x60;USER_PHONE&#x60; می‌توانید شماره تلفن کاربر را دریافت کنید. با scope &#x60;USER_ID&#x60; می‌توانید شناسه کاربر را دریافت کرده و می‌توانید روی منحصر به فرد بودن این شناسه تکیه کنید. 

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

[APIKey](../README.md#APIKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## finderGetUserPosts

> FinderGetUserPostsResponse finderGetUserPosts()

دریافت آگهی‌های کاربر

این API به شما امکان دریافت تمام آگهی‌های یک کاربر را می‌دهد. می‌توانید از این API برای نمایش آگهی‌های کاربر در سرویس خود استفاده کنید.

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

[APIKey](../README.md#APIKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## finderSearchPostV2

> FinderSearchPostV2Response finderSearchPostV2(finderSearchPostsV2Request)

جستجو آگهی‌های دیوار با فیلترهایی

این API به شما امکان جستجو آگهی‌های دیوار با برخی فیلترها را می‌دهد. می‌توانید آگهی‌ها را بر اساس دسته‌بندی، شهر، منطقه و برخی فیلترهای دیگر جستجو کنید. آگهی‌ها بر اساس زمان آنها مرتب می‌شوند. 

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

