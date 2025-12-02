# KenarApiClient.AssetsApi

All URIs are relative to *https://open-api.divar.ir*

Method | HTTP request | Description
------------- | ------------- | -------------
[**assetsGetBodyStatuses**](AssetsApi.md#assetsGetBodyStatuses) | **GET** /v1/open-platform/assets/body-status | لیست گزینه‌های وضعیت بدنه
[**assetsGetBrandModels**](AssetsApi.md#assetsGetBrandModels) | **GET** /v1/open-platform/assets/brand-model/{category} | لیست مدل برندها بر اساس دسته‌بندی
[**assetsGetCategories**](AssetsApi.md#assetsGetCategories) | **GET** /v1/open-platform/assets/category | لیست همه دسته‌بندی‌ها
[**assetsGetCities**](AssetsApi.md#assetsGetCities) | **GET** /v1/open-platform/assets/city | لیست همه شهرها
[**assetsGetColors**](AssetsApi.md#assetsGetColors) | **GET** /v1/open-platform/assets/color/{category} | لیست رنگ‌ها بر اساس دسته‌بندی
[**assetsGetDistricts**](AssetsApi.md#assetsGetDistricts) | **GET** /v1/open-platform/assets/district | لیست محله‌ها
[**assetsGetDistricts2**](AssetsApi.md#assetsGetDistricts2) | **GET** /v1/open-platform/assets/district/{city_slug} | لیست محله‌ها
[**assetsGetInternalStorages**](AssetsApi.md#assetsGetInternalStorages) | **GET** /v1/open-platform/assets/internal-storage | لیست گزینه‌های حافظه داخلی
[**assetsGetOAuthScopes**](AssetsApi.md#assetsGetOAuthScopes) | **GET** /v1/open-platform/assets/oauth-scope | لیست دامنه‌های OAuth
[**assetsGetPermissions**](AssetsApi.md#assetsGetPermissions) | **GET** /v1/open-platform/assets/permission | لیست مجوزهای کنار دیوار
[**assetsGetRamMemories**](AssetsApi.md#assetsGetRamMemories) | **GET** /v1/open-platform/assets/ram-memory | لیست گزینه‌های حافظه RAM
[**assetsGetServiceTypes**](AssetsApi.md#assetsGetServiceTypes) | **GET** /v1/open-platform/assets/service-type | لیست انواع سرویس
[**assetsGetSubmitSchema**](AssetsApi.md#assetsGetSubmitSchema) | **GET** /v1/open-platform/assets/submit-schema/{category_slug} | دریافت schema ثبت آگهی برای دسته‌بندی



## assetsGetBodyStatuses

> AssetsGetBodyStatusesResponse assetsGetBodyStatuses()

لیست گزینه‌های وضعیت بدنه

این API امکان دریافت گزینه‌های وضعیت بدنه موجود برای دسته‌بندی‌های خودرو را فراهم می‌کند.

### Example

```javascript
import KenarApiClient from 'kenar-api-client';
let defaultClient = KenarApiClient.ApiClient.instance;
// Configure API key authorization: APIKey
let APIKey = defaultClient.authentications['APIKey'];
APIKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIKey.apiKeyPrefix = 'Token';

let apiInstance = new KenarApiClient.AssetsApi();
apiInstance.assetsGetBodyStatuses().then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

This endpoint does not need any parameter.

### Return type

[**AssetsGetBodyStatusesResponse**](AssetsGetBodyStatusesResponse.md)

### Authorization

[APIKey](../README.md#APIKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## assetsGetBrandModels

> AssetsGetBrandModelsResponse assetsGetBrandModels(category)

لیست مدل برندها بر اساس دسته‌بندی

این API امکان دریافت مدل برندها برای یک دسته‌بندی خاص را فراهم می‌کند. دسته‌بندی‌های پشتیبانی شده: &#x60;light&#x60; (خودرو) و &#x60;mobile-phones&#x60;.  **نکات مهم**: - مدل برندها با نام‌های فارسی برگردانده می‌شوند - دسته‌بندی باید یکی از دسته‌بندی‌های پشتیبانی شده باشد، در غیر این صورت خطا برمی‌گردد

### Example

```javascript
import KenarApiClient from 'kenar-api-client';
let defaultClient = KenarApiClient.ApiClient.instance;
// Configure API key authorization: APIKey
let APIKey = defaultClient.authentications['APIKey'];
APIKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIKey.apiKeyPrefix = 'Token';

let apiInstance = new KenarApiClient.AssetsApi();
let category = "category_example"; // String | 
apiInstance.assetsGetBrandModels(category).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **category** | **String**|  | 

### Return type

[**AssetsGetBrandModelsResponse**](AssetsGetBrandModelsResponse.md)

### Authorization

[APIKey](../README.md#APIKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## assetsGetCategories

> AssetsGetCategoriesResponse assetsGetCategories()

لیست همه دسته‌بندی‌ها

این API امکان دریافت همه دسته‌بندی‌های دیوار را فراهم می‌کند. شناسه دسته‌بندی‌ها و نام‌های فارسی آنها برای استفاده در ثبت و جستجوی آگهی برمی‌گردد.

### Example

```javascript
import KenarApiClient from 'kenar-api-client';
let defaultClient = KenarApiClient.ApiClient.instance;
// Configure API key authorization: APIKey
let APIKey = defaultClient.authentications['APIKey'];
APIKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIKey.apiKeyPrefix = 'Token';

let apiInstance = new KenarApiClient.AssetsApi();
apiInstance.assetsGetCategories().then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

This endpoint does not need any parameter.

### Return type

[**AssetsGetCategoriesResponse**](AssetsGetCategoriesResponse.md)

### Authorization

[APIKey](../README.md#APIKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## assetsGetCities

> AssetsGetCitiesResponse assetsGetCities()

لیست همه شهرها

این API امکان دریافت همه شهرهای دیوار را فراهم می‌کند. شناسه شهرها و نام‌های فارسی آنها برای استفاده در ثبت و جستجوی آگهی برمی‌گردد.

### Example

```javascript
import KenarApiClient from 'kenar-api-client';
let defaultClient = KenarApiClient.ApiClient.instance;
// Configure API key authorization: APIKey
let APIKey = defaultClient.authentications['APIKey'];
APIKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIKey.apiKeyPrefix = 'Token';

let apiInstance = new KenarApiClient.AssetsApi();
apiInstance.assetsGetCities().then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

This endpoint does not need any parameter.

### Return type

[**AssetsGetCitiesResponse**](AssetsGetCitiesResponse.md)

### Authorization

[APIKey](../README.md#APIKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## assetsGetColors

> AssetsGetColorsResponse assetsGetColors(category)

لیست رنگ‌ها بر اساس دسته‌بندی

این API امکان دریافت رنگ‌های موجود برای یک دسته‌بندی خاص را فراهم می‌کند. دسته‌بندی‌های پشتیبانی شده: &#x60;light&#x60; (خودرو) و &#x60;mobile-phones&#x60;.  **نکات مهم**: - رنگ‌ها با نام‌های فارسی برگردانده می‌شوند - دسته‌بندی باید یکی از دسته‌بندی‌های پشتیبانی شده باشد، در غیر این صورت خطا برمی‌گردد

### Example

```javascript
import KenarApiClient from 'kenar-api-client';
let defaultClient = KenarApiClient.ApiClient.instance;
// Configure API key authorization: APIKey
let APIKey = defaultClient.authentications['APIKey'];
APIKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIKey.apiKeyPrefix = 'Token';

let apiInstance = new KenarApiClient.AssetsApi();
let category = "category_example"; // String | 
apiInstance.assetsGetColors(category).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **category** | **String**|  | 

### Return type

[**AssetsGetColorsResponse**](AssetsGetColorsResponse.md)

### Authorization

[APIKey](../README.md#APIKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## assetsGetDistricts

> AssetsGetDistrictsResponse assetsGetDistricts(opts)

لیست محله‌ها

این API امکان دریافت محله‌های دیوار را فراهم می‌کند. می‌توان بدون پارامتر برای دریافت همه محله‌ها یا با city_slug برای دریافت محله‌های یک شهر خاص فراخوانی کرد.

### Example

```javascript
import KenarApiClient from 'kenar-api-client';
let defaultClient = KenarApiClient.ApiClient.instance;
// Configure API key authorization: APIKey
let APIKey = defaultClient.authentications['APIKey'];
APIKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIKey.apiKeyPrefix = 'Token';

let apiInstance = new KenarApiClient.AssetsApi();
let opts = {
  'citySlug': "citySlug_example" // String | 
};
apiInstance.assetsGetDistricts(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **citySlug** | **String**|  | [optional] 

### Return type

[**AssetsGetDistrictsResponse**](AssetsGetDistrictsResponse.md)

### Authorization

[APIKey](../README.md#APIKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## assetsGetDistricts2

> AssetsGetDistrictsResponse assetsGetDistricts2(citySlug)

لیست محله‌ها

این API امکان دریافت محله‌های دیوار را فراهم می‌کند. می‌توان بدون پارامتر برای دریافت همه محله‌ها یا با city_slug برای دریافت محله‌های یک شهر خاص فراخوانی کرد.

### Example

```javascript
import KenarApiClient from 'kenar-api-client';
let defaultClient = KenarApiClient.ApiClient.instance;
// Configure API key authorization: APIKey
let APIKey = defaultClient.authentications['APIKey'];
APIKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIKey.apiKeyPrefix = 'Token';

let apiInstance = new KenarApiClient.AssetsApi();
let citySlug = "citySlug_example"; // String | 
apiInstance.assetsGetDistricts2(citySlug).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **citySlug** | **String**|  | 

### Return type

[**AssetsGetDistrictsResponse**](AssetsGetDistrictsResponse.md)

### Authorization

[APIKey](../README.md#APIKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## assetsGetInternalStorages

> AssetsGetInternalStoragesResponse assetsGetInternalStorages()

لیست گزینه‌های حافظه داخلی

این API امکان دریافت گزینه‌های حافظه داخلی موجود برای دسته‌بندی‌های موبایل، تبلت و لپ‌تاپ را فراهم می‌کند.

### Example

```javascript
import KenarApiClient from 'kenar-api-client';
let defaultClient = KenarApiClient.ApiClient.instance;
// Configure API key authorization: APIKey
let APIKey = defaultClient.authentications['APIKey'];
APIKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIKey.apiKeyPrefix = 'Token';

let apiInstance = new KenarApiClient.AssetsApi();
apiInstance.assetsGetInternalStorages().then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

This endpoint does not need any parameter.

### Return type

[**AssetsGetInternalStoragesResponse**](AssetsGetInternalStoragesResponse.md)

### Authorization

[APIKey](../README.md#APIKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## assetsGetOAuthScopes

> AssetsGetOAuthScopesResponse assetsGetOAuthScopes()

لیست دامنه‌های OAuth

این API لیست OAuth scopeهای موجود برای کنار دیوار را برمی‌گرداند. از این scopeها در جریان OAuth برای درخواست دسترسی به داده‌های کاربر استفاده کنید.  **نکات مهم**: - هر scope شامل وضعیت چرخه حیات است (آزمایشی، فعال، در حال منسوخ شدن، منسوخ شده) - برخی scopeها نیاز به resource id دارند (مثلاً توکن آگهی، شناسه مکالمه)

### Example

```javascript
import KenarApiClient from 'kenar-api-client';
let defaultClient = KenarApiClient.ApiClient.instance;
// Configure API key authorization: APIKey
let APIKey = defaultClient.authentications['APIKey'];
APIKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIKey.apiKeyPrefix = 'Token';

let apiInstance = new KenarApiClient.AssetsApi();
apiInstance.assetsGetOAuthScopes().then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

This endpoint does not need any parameter.

### Return type

[**AssetsGetOAuthScopesResponse**](AssetsGetOAuthScopesResponse.md)

### Authorization

[APIKey](../README.md#APIKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## assetsGetPermissions

> AssetsGetPermissionsResponse assetsGetPermissions()

لیست مجوزهای کنار دیوار

این API امکان دریافت مجوزهای موجود کنار دیوار را فراهم می‌کند. این مجوزها برای کنترل دسترسی در اپلیکیشن‌های کنار دیوار استفاده می‌شوند و با دامنه‌های OAuth متفاوت هستند.  **نکات مهم**: - مجوزها برای استفاده داخلی هستند و اپلیکیشن‌ها نباید مستقیماً به آنها وابسته باشند - هر مجوز شامل وضعیت چرخه حیات آن است (آزمایشی، فعال، در حال منسوخ شدن، منسوخ شده)

### Example

```javascript
import KenarApiClient from 'kenar-api-client';
let defaultClient = KenarApiClient.ApiClient.instance;
// Configure API key authorization: APIKey
let APIKey = defaultClient.authentications['APIKey'];
APIKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIKey.apiKeyPrefix = 'Token';

let apiInstance = new KenarApiClient.AssetsApi();
apiInstance.assetsGetPermissions().then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

This endpoint does not need any parameter.

### Return type

[**AssetsGetPermissionsResponse**](AssetsGetPermissionsResponse.md)

### Authorization

[APIKey](../README.md#APIKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## assetsGetRamMemories

> AssetsGetRamMemoriesResponse assetsGetRamMemories()

لیست گزینه‌های حافظه RAM

این API امکان دریافت گزینه‌های حافظه RAM موجود برای دسته‌بندی‌های موبایل، تبلت و لپ‌تاپ را فراهم می‌کند.

### Example

```javascript
import KenarApiClient from 'kenar-api-client';
let defaultClient = KenarApiClient.ApiClient.instance;
// Configure API key authorization: APIKey
let APIKey = defaultClient.authentications['APIKey'];
APIKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIKey.apiKeyPrefix = 'Token';

let apiInstance = new KenarApiClient.AssetsApi();
apiInstance.assetsGetRamMemories().then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

This endpoint does not need any parameter.

### Return type

[**AssetsGetRamMemoriesResponse**](AssetsGetRamMemoriesResponse.md)

### Authorization

[APIKey](../README.md#APIKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## assetsGetServiceTypes

> AssetsGetServiceTypesResponse assetsGetServiceTypes()

لیست انواع سرویس

این API امکان دریافت انواع سرویس موجود در کنار دیوار را فراهم می‌کند. انواع سرویس برای گروه‌بندی سرویس‌های مشابه استفاده می‌شوند.  **نکات مهم**: - می‌توان انواع سرویس جدید را در صورت نیاز درخواست داد

### Example

```javascript
import KenarApiClient from 'kenar-api-client';
let defaultClient = KenarApiClient.ApiClient.instance;
// Configure API key authorization: APIKey
let APIKey = defaultClient.authentications['APIKey'];
APIKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIKey.apiKeyPrefix = 'Token';

let apiInstance = new KenarApiClient.AssetsApi();
apiInstance.assetsGetServiceTypes().then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

This endpoint does not need any parameter.

### Return type

[**AssetsGetServiceTypesResponse**](AssetsGetServiceTypesResponse.md)

### Authorization

[APIKey](../README.md#APIKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## assetsGetSubmitSchema

> AssetsGetSubmitSchemaResponse assetsGetSubmitSchema(categorySlug)

دریافت schema ثبت آگهی برای دسته‌بندی

این API به شما امکان دریافت قالب ثبت آگهی برای یک دسته‌بندی مشخص را می‌دهد. پاسخ در قالب JSON Schema است.  قالب تعریف کننده ساختار و قوانین برای فیلدهای فرم زمانی که آگهی در یک دسته‌بندی مشخص ثبت می‌شود. هر فیلد در قالب می‌تواند یکی از انواع زیر را داشته باشد:  **انواع اصلی:** - &#x60;string&#x60;: فیلدهای ورودی متنی (مانند عنوان، توضیحات، مقادیر زمانی) - &#x60;integer&#x60;: فیلدهای ورودی عددی برای اعداد صحیح (مانند قیمت، تعداد، اندازه) - &#x60;float&#x60;: فیلدهای ورودی عددی برای اعداد اعشاری - &#x60;boolean&#x60;: فیلدهای ورودی بولین (صحیح/غلط) - &#x60;array&#x60;: فیلدهای ورودی چندگانه که امکان انتخاب چند مقدار را دارند  **فیلدهای Enum:** فیلدها با گزینه‌های پیش‌تعریف شده از &#x60;enum&#x60; و &#x60;enumNames&#x60; استفاده می‌کنند: - &#x60;enum&#x60;: آرایه از مقادیر داخلی استفاده شده برای ارتباط API - &#x60;enumNames&#x60;: آرایه از برچسب‌های نمایشی نشان داده شده به کاربر (معمولاً به زبان فارسی) - اینها برای فیلدهای ورودی چندگانه (مانند انتخاب طبقه، امکان استفاده از پارکینگ) استفاده می‌شوند  **فیلدهای آرایه با Enum:** فیلدهای ورودی چندگانه ترکیب &#x60;type: \&quot;array\&quot;&#x60; با کلید Enum را دارند: - &#x60;items.enum&#x60;: گزینه‌های موجود برای انتخاب - &#x60;items.enumNames&#x60;: برچسب‌های نمایشی برای هر گزینه - کاربران می‌توانند چند مقدار را انتخاب کنند (مانند امکانات رفاهی، سیستم‌های گرمایش)  **ویژگی‌های فیلد:** - &#x60;title&#x60;: نام نمایشی فارسی برای فیلد - &#x60;required&#x60;: آرایه از نام فیلدهای اجباری که باید ارائه شوند - &#x60;type&#x60;: نوع داده فیلد  **مثال استفاده:** &#x60;&#x60;&#x60;json {   \&quot;properties\&quot;: {     \&quot;size\&quot;: {       \&quot;title\&quot;: \&quot;متراژ (متر مربع)\&quot;,       \&quot;type\&quot;: \&quot;integer\&quot;     },     \&quot;elevator\&quot;: {       \&quot;enum\&quot;: [\&quot;دارد\&quot;, \&quot;ندارد\&quot;],       \&quot;enumNames\&quot;: [\&quot;دارد\&quot;, \&quot;ندارد\&quot;],       \&quot;title\&quot;: \&quot;آسانسور\&quot;,       \&quot;type\&quot;: \&quot;string\&quot;     },     \&quot;comfort_amenities\&quot;: {       \&quot;items\&quot;: {         \&quot;enum\&quot;: [\&quot;اینترنت_پرسرعت\&quot;, \&quot;تلویزیون\&quot;],         \&quot;enumNames\&quot;: [\&quot;اینترنت پرسرعت\&quot;, \&quot;تلویزیون\&quot;],         \&quot;type\&quot;: \&quot;string\&quot;       },       \&quot;title\&quot;: \&quot;امکانات رفاهی\&quot;,       \&quot;type\&quot;: \&quot;array\&quot;     }   } } &#x60;&#x60;&#x60;

### Example

```javascript
import KenarApiClient from 'kenar-api-client';
let defaultClient = KenarApiClient.ApiClient.instance;
// Configure API key authorization: APIKey
let APIKey = defaultClient.authentications['APIKey'];
APIKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIKey.apiKeyPrefix = 'Token';

let apiInstance = new KenarApiClient.AssetsApi();
let categorySlug = "categorySlug_example"; // String | 
apiInstance.assetsGetSubmitSchema(categorySlug).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **categorySlug** | **String**|  | 

### Return type

[**AssetsGetSubmitSchemaResponse**](AssetsGetSubmitSchemaResponse.md)

### Authorization

[APIKey](../README.md#APIKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

