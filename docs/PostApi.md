# KenarApiClient.PostApi

All URIs are relative to *https://open-api.divar.ir*

Method | HTTP request | Description
------------- | ------------- | -------------
[**postEditPost**](PostApi.md#postEditPost) | **PUT** /v1/open-platform/post/{post_token} | ویرایش آگهی
[**postGetImageUploadURL**](PostApi.md#postGetImageUploadURL) | **GET** /v1/open-platform/post/image-upload-url | دریافت URL آپلود تصویر
[**postGetPostStats**](PostApi.md#postGetPostStats) | **GET** /experimental/open-platform/posts/{post_token}/stats | دریافت آمارهای آگهی
[**postSubmitPost**](PostApi.md#postSubmitPost) | **POST** /experimental/open-platform/posts/new | ثبت آگهی
[**postSubmitPostV2**](PostApi.md#postSubmitPostV2) | **POST** /experimental/open-platform/posts/new-v2 | ثبت آگهی با استفاده از اعتبارسنجی قالب JSON
[**postSubmitUserPost**](PostApi.md#postSubmitUserPost) | **POST** /experimental/open-platform/user-posts/new | ثبت آگهی به عنوان کاربر



## postEditPost

> Object postEditPost(postToken, postEditPostBody)

ویرایش آگهی

این API به شما امکان ویرایش آگهی را می‌دهد. این نیاز به دامنه OAuth &#x60;POST_EDIT.{post_token}&#x60; دارد. در حال حاضر فقط می‌توانید عنوان، توضیحات و تصاویر آگهی را ویرایش کنید.

### Example

```javascript
import KenarApiClient from 'kenar-api-client';
let defaultClient = KenarApiClient.ApiClient.instance;
// Configure API key authorization: APIKey
let APIKey = defaultClient.authentications['APIKey'];
APIKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIKey.apiKeyPrefix = 'Token';

let apiInstance = new KenarApiClient.PostApi();
let postToken = "postToken_example"; // String | 
let postEditPostBody = new KenarApiClient.PostEditPostBody(); // PostEditPostBody | 
apiInstance.postEditPost(postToken, postEditPostBody).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **postToken** | **String**|  | 
 **postEditPostBody** | [**PostEditPostBody**](PostEditPostBody.md)|  | 

### Return type

**Object**

### Authorization

[APIKey](../README.md#APIKey)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## postGetImageUploadURL

> PostGetImageUploadURLResponse postGetImageUploadURL()

دریافت URL آپلود تصویر

این API به شما امکان دریافت URL آپلود برای آپلود تصاویر آگهی را می‌دهد. می‌توانید تصاویر را با استفاده از درخواست POST با کدگذاری باینری به URL برگشتی آپلود کنید.

### Example

```javascript
import KenarApiClient from 'kenar-api-client';
let defaultClient = KenarApiClient.ApiClient.instance;
// Configure API key authorization: APIKey
let APIKey = defaultClient.authentications['APIKey'];
APIKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIKey.apiKeyPrefix = 'Token';

let apiInstance = new KenarApiClient.PostApi();
apiInstance.postGetImageUploadURL().then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

This endpoint does not need any parameter.

### Return type

[**PostGetImageUploadURLResponse**](PostGetImageUploadURLResponse.md)

### Authorization

[APIKey](../README.md#APIKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## postGetPostStats

> PostGetPostStatsResponse postGetPostStats(postToken)

دریافت آمارهای آگهی

از این api برای مشاهده‌ی آمارهای یک آگهی (مانند تعداد بازدید‌های آگهی) استفاده کنید. 

### Example

```javascript
import KenarApiClient from 'kenar-api-client';
let defaultClient = KenarApiClient.ApiClient.instance;
// Configure API key authorization: APIKey
let APIKey = defaultClient.authentications['APIKey'];
APIKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIKey.apiKeyPrefix = 'Token';

let apiInstance = new KenarApiClient.PostApi();
let postToken = "postToken_example"; // String | توکن آگهی
apiInstance.postGetPostStats(postToken).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **postToken** | **String**| توکن آگهی | 

### Return type

[**PostGetPostStatsResponse**](PostGetPostStatsResponse.md)

### Authorization

[APIKey](../README.md#APIKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## postSubmitPost

> PostSubmitPostResponse postSubmitPost(postSubmitPostRequest)

ثبت آگهی

این API به شما امکان ثبت آگهی را می‌دهد. این نیاز به دامنه OAuth &#x60;POST_SUBMIT&#x60; دارد. می‌توانید آگهی را با عنوان، توضیحات، تصاویر و سایر فیلدها ثبت کنید. فیلدهای عمومی و فیلدهای مخصوص دسته‌بندی وجود دارند.

### Example

```javascript
import KenarApiClient from 'kenar-api-client';
let defaultClient = KenarApiClient.ApiClient.instance;
// Configure API key authorization: APIKey
let APIKey = defaultClient.authentications['APIKey'];
APIKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIKey.apiKeyPrefix = 'Token';

let apiInstance = new KenarApiClient.PostApi();
let postSubmitPostRequest = new KenarApiClient.PostSubmitPostRequest(); // PostSubmitPostRequest | 
apiInstance.postSubmitPost(postSubmitPostRequest).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **postSubmitPostRequest** | [**PostSubmitPostRequest**](PostSubmitPostRequest.md)|  | 

### Return type

[**PostSubmitPostResponse**](PostSubmitPostResponse.md)

### Authorization

[APIKey](../README.md#APIKey)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## postSubmitPostV2

> PostSubmitPostResponse postSubmitPostV2(postSubmitPostV2Request)

ثبت آگهی با استفاده از اعتبارسنجی قالب JSON

این API به شما امکان ثبت آگهی با استفاده از اعتبارسنجی قالب JSON را می‌دهد. این به مجوز &#x60;POST_SUBMIT&#x60; نیاز دارد. شما داده‌های کامل آگهی را به عنوان یک رشته JSON ارائه می‌دهید که با احترام به قالب ثبت برای دسته‌بندی مشخص شده موجود در دارایی‌ها اعتبارسنجی خواهد شد.

### Example

```javascript
import KenarApiClient from 'kenar-api-client';
let defaultClient = KenarApiClient.ApiClient.instance;
// Configure API key authorization: APIKey
let APIKey = defaultClient.authentications['APIKey'];
APIKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIKey.apiKeyPrefix = 'Token';

let apiInstance = new KenarApiClient.PostApi();
let postSubmitPostV2Request = new KenarApiClient.PostSubmitPostV2Request(); // PostSubmitPostV2Request | 
apiInstance.postSubmitPostV2(postSubmitPostV2Request).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **postSubmitPostV2Request** | [**PostSubmitPostV2Request**](PostSubmitPostV2Request.md)|  | 

### Return type

[**PostSubmitPostResponse**](PostSubmitPostResponse.md)

### Authorization

[APIKey](../README.md#APIKey)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## postSubmitUserPost

> PostSubmitPostResponse postSubmitUserPost(postSubmitUserPostRequest)

ثبت آگهی به عنوان کاربر

این API به شما امکان ثبت آگهی از طرف یک کاربر احراز هویت شده با استفاده از اعتبارسنجی قالب JSON را می‌دهد. این به احراز هویت OAuth با توکن دسترسی معتبر و دامنه OAuth &#x60;SUBMIT_USER_POST&#x60; نیاز دارد. بر خلاف SubmitPostV2 که آگهی‌ها را به عنوان ارائه‌دهنده ثبت می‌کند، این نقطه پایانی آگهی‌ها را به عنوان کاربر مرتبط با توکن دسترسی ارائه شده ثبت می‌کند. آگهی متعلق به کاربر احراز هویت شده خواهد بود. شما داده‌های کامل آگهی را به عنوان یک رشته JSON ارائه می‌دهید که با احترام به قالب ثبت برای دسته‌بندی مشخص شده موجود در دارایی‌ها اعتبارسنجی خواهد شد.

### Example

```javascript
import KenarApiClient from 'kenar-api-client';
let defaultClient = KenarApiClient.ApiClient.instance;
// Configure API key authorization: APIKey
let APIKey = defaultClient.authentications['APIKey'];
APIKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIKey.apiKeyPrefix = 'Token';

let apiInstance = new KenarApiClient.PostApi();
let postSubmitUserPostRequest = new KenarApiClient.PostSubmitUserPostRequest(); // PostSubmitUserPostRequest | 
apiInstance.postSubmitUserPost(postSubmitUserPostRequest).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **postSubmitUserPostRequest** | [**PostSubmitUserPostRequest**](PostSubmitUserPostRequest.md)|  | 

### Return type

[**PostSubmitPostResponse**](PostSubmitPostResponse.md)

### Authorization

[APIKey](../README.md#APIKey)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

