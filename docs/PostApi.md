# KenarApiClient.PostApi

All URIs are relative to *https://open-api.divar.ir*

Method | HTTP request | Description
------------- | ------------- | -------------
[**postEditPost**](PostApi.md#postEditPost) | **PUT** /v1/open-platform/post/{post_token} | ویرایش آگهی
[**postGetImageUploadURL**](PostApi.md#postGetImageUploadURL) | **GET** /v1/open-platform/post/image-upload-url | دریافت URL آپلود تصویر
[**postGetPostStats**](PostApi.md#postGetPostStats) | **GET** /experimental/open-platform/posts/{post_token}/stats | دریافت آمارهای آگهی
[**postSubmitEmergencyResidencePost**](PostApi.md#postSubmitEmergencyResidencePost) | **POST** /experimental/open-platform/posts/emergency-residence | Submit an emergency residence post
[**postSubmitPost**](PostApi.md#postSubmitPost) | **POST** /experimental/open-platform/posts/new | ثبت آگهی



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


## postSubmitEmergencyResidencePost

> PostSubmitEmergencyResidencePostResponse postSubmitEmergencyResidencePost(postSubmitEmergencyResidencePostRequest)

Submit an emergency residence post

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
let postSubmitEmergencyResidencePostRequest = new KenarApiClient.PostSubmitEmergencyResidencePostRequest(); // PostSubmitEmergencyResidencePostRequest | 
apiInstance.postSubmitEmergencyResidencePost(postSubmitEmergencyResidencePostRequest).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **postSubmitEmergencyResidencePostRequest** | [**PostSubmitEmergencyResidencePostRequest**](PostSubmitEmergencyResidencePostRequest.md)|  | 

### Return type

[**PostSubmitEmergencyResidencePostResponse**](PostSubmitEmergencyResidencePostResponse.md)

### Authorization

[APIKey](../README.md#APIKey)

### HTTP request headers

- **Content-Type**: application/json
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

