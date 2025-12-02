# KenarApiClient.PostApi

All URIs are relative to *https://open-api.divar.ir*

Method | HTTP request | Description
------------- | ------------- | -------------
[**postCanUserSubmitPost**](PostApi.md#postCanUserSubmitPost) | **GET** /experimental/open-platform/user-posts/can-submit | بررسی اینکه آیا کاربر می‌تواند آگهی ارسال کند
[**postCreateBusinessCustomizedButton**](PostApi.md#postCreateBusinessCustomizedButton) | **POST** /experimental/open-platform/business/{business_token}/customized-button | ایجاد دکمه اختصاصی برای آگهی‌های کسب‌وکار
[**postDeleteBusinessCustomizedButton**](PostApi.md#postDeleteBusinessCustomizedButton) | **DELETE** /experimental/open-platform/business/{business_token}/customized-button | حذف دکمه اختصاصی از آگهی‌های کسب‌و‌کار
[**postDeletePostCustomizedButton**](PostApi.md#postDeletePostCustomizedButton) | **DELETE** /experimental/open-platform/posts/{post_token}/customized-button | حذف دکمه اختصاصی از آگهی
[**postDeleteUserPost**](PostApi.md#postDeleteUserPost) | **DELETE** /v1/open-platform/post/{post_token} | حذف آگهی
[**postEditPost**](PostApi.md#postEditPost) | **PUT** /v1/open-platform/post/{post_token} | ویرایش آگهی
[**postEditPostV2**](PostApi.md#postEditPostV2) | **PUT** /v2/open-platform/post/{post_token} | ویرایش آگهی (پیشرفته)
[**postGetImageUploadURL**](PostApi.md#postGetImageUploadURL) | **GET** /v1/open-platform/post/image-upload-url | دریافت آدرس اپلود تصاویر آگهی (منسوخ شده)
[**postGetPostStats**](PostApi.md#postGetPostStats) | **GET** /experimental/open-platform/posts/{post_token}/stats | دریافت آمارهای آگهی
[**postGetUploadURLsV2**](PostApi.md#postGetUploadURLsV2) | **GET** /v2/open-platform/post/upload-urls | دریافت آدرس آپلود تصاویر و ویدیو
[**postGetUserPost**](PostApi.md#postGetUserPost) | **GET** /v1/open-platform/user-post/{token} | دریافت آگهی با توکن
[**postSetPostCustomizedButton**](PostApi.md#postSetPostCustomizedButton) | **POST** /experimental/open-platform/posts/{post_token}/customized-button | تنظیم دکمه اختصاصی روی آگهی
[**postSubmitPost**](PostApi.md#postSubmitPost) | **POST** /experimental/open-platform/posts/new | ثبت آگهی (منسوخ شده)
[**postSubmitPostV2**](PostApi.md#postSubmitPostV2) | **POST** /experimental/open-platform/posts/new-v2 | ثبت آگهی
[**postSubmitUserPost**](PostApi.md#postSubmitUserPost) | **POST** /experimental/open-platform/user-posts/new | ثبت آگهی به عنوان کاربر



## postCanUserSubmitPost

> PostCanUserSubmitPostResponse postCanUserSubmitPost()

بررسی اینکه آیا کاربر می‌تواند آگهی ارسال کند

این API بررسی می‌کند که آیا کاربر واجد شرایط ثبت آگهی است. تایید می‌کند که کاربر در لیست سیاه نیست، متخلف نیست و احراز هویت شده است.  #### دسترسی‌ها:  ##### مجوزهای API Key مورد نیاز:  - &#x60;CAN_USER_SUBMIT_POST&#x60;  ##### OAuth اسکوپ موردنیاز:  - &#x60;SUBMIT_USER_POST&#x60;

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

let apiInstance = new KenarApiClient.PostApi();
apiInstance.postCanUserSubmitPost().then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

This endpoint does not need any parameter.

### Return type

[**PostCanUserSubmitPostResponse**](PostCanUserSubmitPostResponse.md)

### Authorization

[APIKey](../README.md#APIKey), [OAuth](../README.md#OAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## postCreateBusinessCustomizedButton

> Object postCreateBusinessCustomizedButton(businessToken, postCreateBusinessCustomizedButtonBody)

ایجاد دکمه اختصاصی برای آگهی‌های کسب‌وکار

این API تنظیمات دکمه اختصاصی را برای تمام آگهی‌های کسب‌وکار ایجاد می‌کند.  #### دسترسی‌ها:  ##### مجوزهای API Key مورد نیاز:  - &#x60;BUSINESS_CUSTOMIZED_BUTTON_CREATE&#x60;  ##### OAuth اسکوپ موردنیاز:  - &#x60;BUSINESS_CREATE_CUSTOMIZED_BUTTON.business_token&#x60;

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

let apiInstance = new KenarApiClient.PostApi();
let businessToken = "businessToken_example"; // String | 
let postCreateBusinessCustomizedButtonBody = new KenarApiClient.PostCreateBusinessCustomizedButtonBody(); // PostCreateBusinessCustomizedButtonBody | 
apiInstance.postCreateBusinessCustomizedButton(businessToken, postCreateBusinessCustomizedButtonBody).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **businessToken** | **String**|  | 
 **postCreateBusinessCustomizedButtonBody** | [**PostCreateBusinessCustomizedButtonBody**](PostCreateBusinessCustomizedButtonBody.md)|  | 

### Return type

**Object**

### Authorization

[APIKey](../README.md#APIKey), [OAuth](../README.md#OAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## postDeleteBusinessCustomizedButton

> Object postDeleteBusinessCustomizedButton(businessToken)

حذف دکمه اختصاصی از آگهی‌های کسب‌و‌کار

این API تنظیمات دکمه اختصاصی را از تمام آگهی‌های کسب‌وکار حذف می‌کند.  #### دسترسی‌ها:  ##### مجوزهای API Key مورد نیاز:  - &#x60;BUSINESS_CUSTOMIZED_BUTTON_CREATE&#x60;

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
let businessToken = "businessToken_example"; // String | 
apiInstance.postDeleteBusinessCustomizedButton(businessToken).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **businessToken** | **String**|  | 

### Return type

**Object**

### Authorization

[APIKey](../README.md#APIKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## postDeletePostCustomizedButton

> Object postDeletePostCustomizedButton(postToken)

حذف دکمه اختصاصی از آگهی

این API تنظیمات دکمه اختصاصی را از یک آگهی حذف می‌کند.  #### دسترسی‌ها:  ##### مجوزهای API Key مورد نیاز:  - &#x60;SET_CUSTOMIZED_BUTTON&#x60;  ##### OAuth اسکوپ موردنیاز:  - &#x60;USER_SET_CUSTOMIZED_BUTTON&#x60;

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

let apiInstance = new KenarApiClient.PostApi();
let postToken = "postToken_example"; // String | 
apiInstance.postDeletePostCustomizedButton(postToken).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **postToken** | **String**|  | 

### Return type

**Object**

### Authorization

[APIKey](../README.md#APIKey), [OAuth](../README.md#OAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## postDeleteUserPost

> Object postDeleteUserPost(postToken)

حذف آگهی

این API امکان حذف آگهی را فراهم می‌کند. فقط آگهی‌های متعلق به کاربر احراز هویت شده قابل حذف هستند.  #### دسترسی‌ها:  ##### مجوزهای API Key مورد نیاز:  - &#x60;DELETE_USER_POST&#x60;  ##### OAuth اسکوپ موردنیاز:  - &#x60;DELETE_USER_POST&#x60;

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

let apiInstance = new KenarApiClient.PostApi();
let postToken = "postToken_example"; // String | توکن آگهی برای حذف
apiInstance.postDeleteUserPost(postToken).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **postToken** | **String**| توکن آگهی برای حذف | 

### Return type

**Object**

### Authorization

[APIKey](../README.md#APIKey), [OAuth](../README.md#OAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## postEditPost

> Object postEditPost(postToken, postEditPostBody)

ویرایش آگهی

این API امکان ویرایش آگهی را فراهم می‌کند. می‌توانید عنوان، توضیحات و تصاویر آگهی را به‌روزرسانی کنید.  **نکات مهم**: - عنوان باید بین 3 تا 50 کاراکتر باشد - آگهی نباید منقضی شده باشد  #### دسترسی‌ها:  ##### مجوزهای API Key مورد نیاز:  - &#x60;EDIT_POST&#x60;  ##### OAuth اسکوپ موردنیاز:  - &#x60;POST_EDIT.post_token&#x60;

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

[APIKey](../README.md#APIKey), [OAuth](../README.md#OAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## postEditPostV2

> Object postEditPostV2(postToken, postEditPostV2Body)

ویرایش آگهی (پیشرفته)

این API امکان ویرایش آگهی با پشتیبانی از field mask را فراهم می‌کند. می‌توانید عنوان، توضیحات، تصاویر، موقعیت، فیلدهای ویژه دسته‌بندی و سایر ویژگی‌ها را به‌روزرسانی کنید.  **نکات مهم**: - فیلدهای ویژه دسته‌بندی باید از [قالب](https://kenar.divar.dev/openapi-doc/assets-get-submit-schema/) پیروی کنند - از &#x60;update_mask&#x60; برای مشخص کردن فیلدهای مورد به‌روزرسانی استفاده کنید - هنگام استفاده از اسکوپ &#x60;EDIT_USER_POST&#x60;، آگهی باید متعلق به کاربر احراز هویت شده باشد - آگهی نباید منقضی شده باشد  #### دسترسی‌ها:  ##### مجوزهای API Key مورد نیاز:  - &#x60;EDIT_POST&#x60;  ##### OAuth اسکوپ موردنیاز:  - &#x60;EDIT_USER_POST&#x60; یا &#x60;POST_EDIT.post_token&#x60;

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

let apiInstance = new KenarApiClient.PostApi();
let postToken = "postToken_example"; // String | توکن آگهی
let postEditPostV2Body = new KenarApiClient.PostEditPostV2Body(); // PostEditPostV2Body | 
apiInstance.postEditPostV2(postToken, postEditPostV2Body).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **postToken** | **String**| توکن آگهی | 
 **postEditPostV2Body** | [**PostEditPostV2Body**](PostEditPostV2Body.md)|  | 

### Return type

**Object**

### Authorization

[APIKey](../README.md#APIKey), [OAuth](../README.md#OAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## postGetImageUploadURL

> PostGetImageUploadURLResponse postGetImageUploadURL()

دریافت آدرس اپلود تصاویر آگهی (منسوخ شده)

این API آدرس آپلود برای بارگذاری تصاویر آگهی را برمی‌گرداند.  #### دسترسی‌ها:  ##### مجوزهای API Key مورد نیاز:  - &#x60;UPLOAD_POST_IMAGE&#x60;

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

این API امکان دریافت آمار یک آگهی شامل بازدیدها، نمایش‌ها و چت‌ها را فراهم می‌کند. آمار روزانه برای 7 روز اخیر و تعداد کل برمی‌گردد.  **نکات مهم**: - فقط آمار آگهی‌های متعلق به کاربر احراز هویت شده برگردانده می‌شود  #### دسترسی‌ها:  ##### مجوزهای API Key مورد نیاز:  - &#x60;POST_STATS_RETRIEVE&#x60;  ##### OAuth اسکوپ موردنیاز:  - &#x60;USER_POSTS_STATS_READ&#x60;

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

[APIKey](../README.md#APIKey), [OAuth](../README.md#OAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## postGetUploadURLsV2

> PostGetUploadURLsV2Response postGetUploadURLsV2()

دریافت آدرس آپلود تصاویر و ویدیو

این API امکان دریافت آدرس‌های آپلود برای بارگذاری تصاویر و ویدیوهای آگهی را فراهم می‌کند. می‌توانید تصاویر/ویدیوها را با درخواست POST یا PUT با کدگذاری باینری به آدرس برگشتی آپلود کنید.  **نکات مهم**: - آدرس برگشتی برای آپلود نیاز به api-key شما دارد  #### دسترسی‌ها:  ##### مجوزهای API Key مورد نیاز:  - &#x60;UPLOAD_POST_IMAGE&#x60;

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
apiInstance.postGetUploadURLsV2().then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

This endpoint does not need any parameter.

### Return type

[**PostGetUploadURLsV2Response**](PostGetUploadURLsV2Response.md)

### Authorization

[APIKey](../README.md#APIKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## postGetUserPost

> PostGetUserPostResponse postGetUserPost(token)

دریافت آگهی با توکن

این API امکان دریافت اطلاعات دقیق یک آگهی شامل داده‌های عمومی، داده‌های دسته‌بندی، داده‌های کسب‌وکار، وضعیت و دلیل رد را فراهم می‌کند. فقط آگهی‌های متعلق به کاربر احراز هویت شده قابل دریافت هستند.  #### دسترسی‌ها:  ##### مجوزهای API Key مورد نیاز:  - &#x60;GET_USER_POST&#x60;  ##### OAuth اسکوپ موردنیاز:  - &#x60;USER_POSTS_GET&#x60;

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

let apiInstance = new KenarApiClient.PostApi();
let token = "token_example"; // String | 
apiInstance.postGetUserPost(token).then((data) => {
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

[**PostGetUserPostResponse**](PostGetUserPostResponse.md)

### Authorization

[APIKey](../README.md#APIKey), [OAuth](../README.md#OAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## postSetPostCustomizedButton

> Object postSetPostCustomizedButton(postToken, postSetPostCustomizedButtonBody)

تنظیم دکمه اختصاصی روی آگهی

این API تنظیمات دکمه اختصاصی را برای یک آگهی تعیین می‌کند. اگر دکمه وجود نداشته باشد، ایجاد می‌شود. اگر از قبل وجود داشته باشد، داده‌های آن به‌روزرسانی می‌شوند.  #### دسترسی‌ها:  ##### مجوزهای API Key مورد نیاز:  - &#x60;SET_CUSTOMIZED_BUTTON&#x60;  ##### OAuth اسکوپ موردنیاز:  - &#x60;USER_SET_CUSTOMIZED_BUTTON&#x60;

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

let apiInstance = new KenarApiClient.PostApi();
let postToken = "postToken_example"; // String | 
let postSetPostCustomizedButtonBody = new KenarApiClient.PostSetPostCustomizedButtonBody(); // PostSetPostCustomizedButtonBody | 
apiInstance.postSetPostCustomizedButton(postToken, postSetPostCustomizedButtonBody).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **postToken** | **String**|  | 
 **postSetPostCustomizedButtonBody** | [**PostSetPostCustomizedButtonBody**](PostSetPostCustomizedButtonBody.md)|  | 

### Return type

**Object**

### Authorization

[APIKey](../README.md#APIKey), [OAuth](../README.md#OAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## postSubmitPost

> PostSubmitPostResponse postSubmitPost(postSubmitPostRequest)

ثبت آگهی (منسوخ شده)

این API امکان ثبت آگهی با فیلدهای پایه برای دسته‌بندی‌های خاص را فراهم می‌کند.  #### دسترسی‌ها:  ##### مجوزهای API Key مورد نیاز:  - &#x60;SUBMIT_POST&#x60;

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

ثبت آگهی

این API امکان ثبت آگهی با استفاده از اعتبارسنجی JSON schema را فراهم می‌کند. داده‌های آگهی در برابر قالب دسته‌بندی مشخص شده اعتبارسنجی می‌شوند.  **نکات مهم**: - فیلدهای ویژه دسته‌بندی باید از [قالب](https://kenar.divar.dev/openapi-doc/assets-get-submit-schema/) پیروی کنند - تمام فیلدهای اجباری ذکر شده در قالب باید ارسال شوند، در غیر این صورت ثبت ناموفق خواهد بود - این برای ثبت در سطح اپلیکیشن است (آگهی‌های ارائه‌دهنده)  #### دسترسی‌ها:  ##### مجوزهای API Key مورد نیاز:  - &#x60;SUBMIT_POST&#x60;

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

این API امکان ثبت آگهی از طرف کاربر احراز هویت شده با استفاده از اعتبارسنجی JSON schema را فراهم می‌کند. آگهی متعلق به کاربر احراز هویت شده خواهد بود و می‌توان از طریق APIهای مختص کاربر مدیریت کرد.  **نکات مهم**: - فیلدهای ویژه دسته‌بندی باید از [قالب](https://kenar.divar.dev/openapi-doc/assets-get-submit-schema/) پیروی کنند - تمام فیلدهای اجباری ذکر شده در قالب باید ارسال شوند، در غیر این صورت ثبت ناموفق خواهد بود  #### دسترسی‌ها:  ##### مجوزهای API Key مورد نیاز:  - &#x60;SUBMIT_USER_POST&#x60;  ##### OAuth اسکوپ موردنیاز:  - &#x60;SUBMIT_USER_POST&#x60;

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

[APIKey](../README.md#APIKey), [OAuth](../README.md#OAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

