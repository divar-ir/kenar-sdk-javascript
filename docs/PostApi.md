# KenarApiClient.PostApi

All URIs are relative to *https://open-api.divar.ir*

Method | HTTP request | Description
------------- | ------------- | -------------
[**postCanUserSubmitPost**](PostApi.md#postCanUserSubmitPost) | **GET** /experimental/open-platform/user-posts/can-submit | بررسی اینکه آیا کاربر می‌تواند آگهی ارسال کند
[**postCreateBusinessCustomizedButton**](PostApi.md#postCreateBusinessCustomizedButton) | **POST** /experimental/open-platform/business/{business_token}/customized-button | ایجاد دکمه اختصاصی برای آگهی‌های کسب‌و‌کار
[**postDeleteBusinessCustomizedButton**](PostApi.md#postDeleteBusinessCustomizedButton) | **DELETE** /experimental/open-platform/business/{business_token}/customized-button | حذف دکمه اختصاصی از آگهی‌های کسب‌و‌کار
[**postDeletePostCustomizedButton**](PostApi.md#postDeletePostCustomizedButton) | **DELETE** /experimental/open-platform/posts/{post_token}/customized-button | حذف دکمه اختصاصی از آگهی
[**postDeleteUserPost**](PostApi.md#postDeleteUserPost) | **DELETE** /v1/open-platform/post/{post_token} | حذف آگهی
[**postEditPost**](PostApi.md#postEditPost) | **PUT** /v1/open-platform/post/{post_token} | ویرایش آگهی
[**postEditPostV2**](PostApi.md#postEditPostV2) | **PUT** /v2/open-platform/post/{post_token} | ویرایش آگهی با پشتیبانی از فیلد ماسک
[**postGetImageUploadURL**](PostApi.md#postGetImageUploadURL) | **GET** /v1/open-platform/post/image-upload-url | دریافت آدرس اپلود تصاویر آگهی (منسوخ شده)
[**postGetPostStats**](PostApi.md#postGetPostStats) | **GET** /experimental/open-platform/posts/{post_token}/stats | دریافت آمارهای آگهی
[**postGetUploadURLsV2**](PostApi.md#postGetUploadURLsV2) | **GET** /v2/open-platform/post/upload-urls | دریافت آدرس آپلود برای تصاویر و ویدیو‌ی آگهی‌ها
[**postGetUserPost**](PostApi.md#postGetUserPost) | **GET** /v1/open-platform/user-post/{token} | دریافت آگهی با توکن
[**postSetPostCustomizedButton**](PostApi.md#postSetPostCustomizedButton) | **POST** /experimental/open-platform/posts/{post_token}/customized-button | تنظیم دکمه اختصاصی بر روی آگهی ثبت شده
[**postSubmitPost**](PostApi.md#postSubmitPost) | **POST** /experimental/open-platform/posts/new | ثبت آگهی
[**postSubmitPostV2**](PostApi.md#postSubmitPostV2) | **POST** /experimental/open-platform/posts/new-v2 | ثبت آگهی با استفاده از اعتبارسنجی قالب JSON
[**postSubmitUserPost**](PostApi.md#postSubmitUserPost) | **POST** /experimental/open-platform/user-posts/new | ثبت آگهی به عنوان کاربر



## postCanUserSubmitPost

> PostCanUserSubmitPostResponse postCanUserSubmitPost()

بررسی اینکه آیا کاربر می‌تواند آگهی ارسال کند

با این API میتوانید بررسی کنید آیا کاربر می‌تواند آگهی ارسال کند یا خیر.این API انتظار دارد توکن کاربر در درخواست با اسکوپ &#x60;SUBMIT_USER_POST&#x60; موجود باشد.  مجوزهای مورد نیاز: CAN_USER_SUBMIT_POST.

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

[APIKey](../README.md#APIKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## postCreateBusinessCustomizedButton

> Object postCreateBusinessCustomizedButton(businessToken, postCreateBusinessCustomizedButtonBody)

ایجاد دکمه اختصاصی برای آگهی‌های کسب‌و‌کار

این API برای ایجاد دکمه اختصاصی برای تمام آگهی‌های کسب‌وکار استفاده می‌شود. این API به مجوز &#x60;BUSINESS_CUSTOMIZED_BUTTON_CREATE&#x60; و دامنه OAuth &#x60;BUSINESS_CREATE_CUSTOMIZED_BUTTON.{business_ref}&#x60; نیاز دارد.   مجوزهای مورد نیاز: BUSINESS_CUSTOMIZED_BUTTON_CREATE.

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

[APIKey](../README.md#APIKey)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## postDeleteBusinessCustomizedButton

> Object postDeleteBusinessCustomizedButton(businessToken)

حذف دکمه اختصاصی از آگهی‌های کسب‌و‌کار

این API دکمه اختصاصی را از تمام آگهی‌های کسب‌وکار حذف می‌کند. این API به مجوز &#x60;BUSINESS_CUSTOMIZED_BUTTON_CREATE&#x60; نیاز دارد.   مجوزهای مورد نیاز: BUSINESS_CUSTOMIZED_BUTTON_CREATE.

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

این API دکمه اختصاصی را از آگهی ثبت شده توسط سرویس شما حذف می‌کند. این API نیاز به مجوز &#x60;SET_CUSTOMIZED_BUTTON&#x60; دارد.   مجوزهای مورد نیاز: SET_CUSTOMIZED_BUTTON.

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

[APIKey](../README.md#APIKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## postDeleteUserPost

> Object postDeleteUserPost(postToken)

حذف آگهی

این API به شما امکان حذف آگهی را می‌دهد. این نیاز به اسکوپ OAuth &#x60;DELETE_USER_POST&#x60; دارد.  مجوزهای مورد نیاز: DELETE_USER_POST.

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

[APIKey](../README.md#APIKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## postEditPost

> Object postEditPost(postToken, postEditPostBody)

ویرایش آگهی

این API به شما امکان ویرایش آگهی را می‌دهد. این نیاز به دامنه OAuth &#x60;POST_EDIT.{post_token}&#x60; دارد. در حال حاضر فقط می‌توانید عنوان، توضیحات و تصاویر آگهی را ویرایش کنید.  مجوزهای مورد نیاز: EDIT_POST.

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


## postEditPostV2

> Object postEditPostV2(postToken, postEditPostV2Body)

ویرایش آگهی با پشتیبانی از فیلد ماسک

این API به شما امکان ویرایش آگهی با استفاده از احراز هویت OAuth را می‌دهد. توکن دسترسی از یک کاربر با اسکوپ OAuth &#x60;POST_EDIT.{post_token}&#x60; یا &#x60;EDIT_USER_POST&#x60; مورد نیاز است.  می‌توانید عنوان، توضیحات، تصاویر، موقعیت، فیلدهای مخصوص دسته‌بندی و سایر ویژگی‌های آگهی را ویرایش کنید. فیلدهای مخصوص دسته‌بندی باید از قالب دسته‌بندی آگهی پیروی کنند. قالب را از اینجا دریافت کنید: https://kenar.divar.dev/openapi-doc/assets-get-submit-schema/  از فیلد update_mask برای مشخص کردن فیلدهایی که می‌خواهید به‌روزرسانی کنید استفاده کنید.  مجوزهای مورد نیاز: EDIT_POST.

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

[APIKey](../README.md#APIKey)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## postGetImageUploadURL

> PostGetImageUploadURLResponse postGetImageUploadURL()

دریافت آدرس اپلود تصاویر آگهی (منسوخ شده)

این API به شما اجازه می‌دهد یک آدرس اینترنتی برای بارگذاری تصاویر یک پست دریافت کنید. می‌توانید تصاویر را با یک درخواست POST و رمزگذاری باینری به آدرس برگشتی بارگذاری کنید. به جای آن از https://kenar.divar.dev/openapi-doc/post-get-upload-urls-v2/ استفاده کنید  مجوزهای مورد نیاز: UPLOAD_POST_IMAGE.

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

از این api برای مشاهده‌ی آمارهای یک آگهی (مانند تعداد بازدید‌های آگهی) استفاده کنید.   مجوزهای مورد نیاز: POST_STATS_RETRIEVE.

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


## postGetUploadURLsV2

> PostGetUploadURLsV2Response postGetUploadURLsV2()

دریافت آدرس آپلود برای تصاویر و ویدیو‌ی آگهی‌ها

این API به شما امکان دریافت URL آپلود برای آپلود تصاویر و ویدیوهای آگهی را می‌دهد. می‌توانید تصاویر/ویدیوها را با استفاده از درخواست POST یا PUT با کدگذاری باینری به URL برگشتی آپلود کنید. آدرس برگشتی این API به api-key شما برای آپلود نیاز دارد. لطفاً توجه داشته باشید که آدرس برگشتی ممکن است بدون اطلاع قبلی تغییر کند.  مجوزهای مورد نیاز: UPLOAD_POST_IMAGE.

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

این API به شما امکان دریافت اطلاعات دقیق درباره یک آگهی خاص با استفاده از توکن آن را می‌دهد. این نقطه پایانی آگهی‌های ثبت شده توسط کاربران احراز هویت شده از طریق پلتفرم باز را برمی‌گرداند، شامل داده‌های کسب‌وکار، وضعیت و دلایل رد. این API به مجوز &#x60;GET_USER_POST&#x60; نیاز دارد. این API به دامنه OAuth &#x60;USER_POSTS_GET&#x60; نیاز دارد.  مجوزهای مورد نیاز: GET_USER_POST.

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

[APIKey](../README.md#APIKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## postSetPostCustomizedButton

> Object postSetPostCustomizedButton(postToken, postSetPostCustomizedButtonBody)

تنظیم دکمه اختصاصی بر روی آگهی ثبت شده

این API برای تنظیم دکمه اختصاصی برای یک آگهی استفاده می‌شود. اگر دکمه‌ای وجود نداشته باشد، ایجاد خواهد شد. اگر از قبل وجود داشته باشد، داده‌های آن به‌روزرسانی خواهد شد. این API به مجوز &#x60;SET_CUSTOMIZED_BUTTON&#x60; نیاز دارد. اگر این آگهی توسط کاربر ثبت شده باشد، این API به توکن دسترسی کاربر در هدرهای درخواست با دامنه OAuth &#x60;USER_SET_CUSTOMIZED_BUTTON&#x60; نیاز دارد.  مجوزهای مورد نیاز: SET_CUSTOMIZED_BUTTON.

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

[APIKey](../README.md#APIKey)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## postSubmitPost

> PostSubmitPostResponse postSubmitPost(postSubmitPostRequest)

ثبت آگهی

این API به شما امکان ثبت آگهی را می‌دهد. این نیاز به دامنه OAuth &#x60;SUBMIT_POST&#x60; دارد. می‌توانید آگهی را با عنوان، توضیحات، تصاویر و سایر فیلدها ثبت کنید. فیلدهای عمومی و فیلدهای مخصوص دسته‌بندی وجود دارند.  مجوزهای مورد نیاز: SUBMIT_POST.

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

این API به شما امکان ثبت آگهی با استفاده از اعتبارسنجی قالب JSON را می‌دهد. این به مجوز &#x60;SUBMIT_POST&#x60; نیاز دارد. شما داده‌های کامل آگهی را به عنوان یک رشته JSON ارائه می‌دهید که با احترام به قالب ثبت برای دسته‌بندی مشخص شده موجود در دارایی‌ها اعتبارسنجی خواهد شد.  مجوزهای مورد نیاز: SUBMIT_POST.

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

این API به شما امکان ثبت آگهی از طرف یک کاربر احراز هویت شده با استفاده از اعتبارسنجی قالب JSON را می‌دهد. این به احراز هویت OAuth با توکن دسترسی معتبر و دامنه OAuth &#x60;SUBMIT_USER_POST&#x60; نیاز دارد. بر خلاف SubmitPostV2 که آگهی‌ها را به عنوان ارائه‌دهنده ثبت می‌کند، این نقطه پایانی آگهی‌ها را به عنوان کاربر مرتبط با توکن دسترسی ارائه شده ثبت می‌کند. آگهی متعلق به کاربر احراز هویت شده خواهد بود. شما داده‌های کامل آگهی را به عنوان یک رشته JSON ارائه می‌دهید که با احترام به قالب ثبت برای دسته‌بندی مشخص شده موجود در دارایی‌ها اعتبارسنجی خواهد شد.  مجوزهای مورد نیاز: SUBMIT_USER_POST.

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

