# KenarApiClient.AssetsApi

All URIs are relative to *https://open-api.divar.ir*

Method | HTTP request | Description
------------- | ------------- | -------------
[**assetsGetBodyStatuses**](AssetsApi.md#assetsGetBodyStatuses) | **GET** /v1/open-platform/assets/body-status | دریافت گزینه‌های وضعیت بدنه موجود در دسته‌بندی‌های خودرو دیوار
[**assetsGetBrandModels**](AssetsApi.md#assetsGetBrandModels) | **GET** /v1/open-platform/assets/brand-model/{category} | دریافت مدل‌های برند در دسته‌بندی دیوار
[**assetsGetCategories**](AssetsApi.md#assetsGetCategories) | **GET** /v1/open-platform/assets/category | دریافت دسته‌بندی‌های دیوار
[**assetsGetCities**](AssetsApi.md#assetsGetCities) | **GET** /v1/open-platform/assets/city | دریافت شهرهای دیوار
[**assetsGetColors**](AssetsApi.md#assetsGetColors) | **GET** /v1/open-platform/assets/color/{category} | دریافت رنگ‌ها در دسته‌بندی دیوار
[**assetsGetDistricts**](AssetsApi.md#assetsGetDistricts) | **GET** /v1/open-platform/assets/district | دریافت مناطق دیوار
[**assetsGetDistricts2**](AssetsApi.md#assetsGetDistricts2) | **GET** /v1/open-platform/assets/district/{city_slug} | دریافت مناطق دیوار
[**assetsGetInternalStorages**](AssetsApi.md#assetsGetInternalStorages) | **GET** /v1/open-platform/assets/internal-storage | دریافت گزینه‌های حافظه داخلی موجود در دسته‌بندی‌های موبایل/تبلت/لپ‌تاپ دیوار
[**assetsGetOAuthScopes**](AssetsApi.md#assetsGetOAuthScopes) | **GET** /v1/open-platform/assets/oauth-scope | دریافت دامنه‌های OAuth کنار دیوار
[**assetsGetPermissions**](AssetsApi.md#assetsGetPermissions) | **GET** /v1/open-platform/assets/permission | دریافت مجوزهای کنار دیوار
[**assetsGetRamMemories**](AssetsApi.md#assetsGetRamMemories) | **GET** /v1/open-platform/assets/ram-memory | دریافت گزینه‌های حافظه رم موجود در دسته‌بندی‌های موبایل/تبلت/لپ‌تاپ دیوار
[**assetsGetServiceTypes**](AssetsApi.md#assetsGetServiceTypes) | **GET** /v1/open-platform/assets/service-type | دریافت انواع سرویس موجود در کنار دیوار
[**assetsGetSubmitSchema**](AssetsApi.md#assetsGetSubmitSchema) | **GET** /v1/open-platform/assets/submit-schema/{category_slug} | Get submit schema



## assetsGetBodyStatuses

> AssetsGetBodyStatusesResponse assetsGetBodyStatuses()

دریافت گزینه‌های وضعیت بدنه موجود در دسته‌بندی‌های خودرو دیوار

دریافت تمام گزینه‌های وضعیت بدنه موجود در دسته‌بندی‌های خودرو دیوار. این ترجمه فارسی برای هر گزینه وضعیت بدنه که در آگهی‌ها استفاده می‌شود، ارائه می‌دهد.

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

دریافت مدل‌های برند در دسته‌بندی دیوار

دریافت تمام مدل‌های برند دیوار در دسته‌بندی مشخص شده. این ترجمه فارسی برای هر مدل برند که در آگهی‌ها استفاده می‌شود، ارائه می‌دهد.

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

دریافت دسته‌بندی‌های دیوار

دریافت تمام دسته‌بندی‌های دیوار. این ترجمه فارسی برای هر دسته‌بندی که در آگهی‌ها استفاده می‌شود، ارائه می‌دهد.

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

دریافت شهرهای دیوار

دریافت تمام شهرهای دیوار. این ترجمه فارسی برای هر شهر که در آگهی‌ها استفاده می‌شود، ارائه می‌دهد.

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

دریافت رنگ‌ها در دسته‌بندی دیوار

دریافت تمام رنگ‌های دیوار در دسته‌بندی مشخص شده. این ترجمه فارسی برای هر رنگ که در آگهی‌ها استفاده می‌شود، ارائه می‌دهد.

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

دریافت مناطق دیوار

دریافت تمام مناطق دیوار. این ترجمه فارسی برای هر منطقه که در آگهی‌ها استفاده می‌شود، ارائه می‌دهد.

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

دریافت مناطق دیوار

دریافت تمام مناطق دیوار. این ترجمه فارسی برای هر منطقه که در آگهی‌ها استفاده می‌شود، ارائه می‌دهد.

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

دریافت گزینه‌های حافظه داخلی موجود در دسته‌بندی‌های موبایل/تبلت/لپ‌تاپ دیوار

دریافت تمام گزینه‌های حافظه داخلی موجود در دسته‌بندی‌های موبایل دیوار. این ترجمه فارسی برای هر گزینه حافظه داخلی که در آگهی‌ها استفاده می‌شود، ارائه می‌دهد.

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

دریافت دامنه‌های OAuth کنار دیوار

اینها دامنه‌های موجود برای OAuth2.0 کنار دیوار هستند. از دامنه‌ها در جریان OAuth برای درخواست دسترسی به داده‌های کاربر یا انجام اقدامات از طرف آنها استفاده کنید.

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

دریافت مجوزهای کنار دیوار

این مجوزها برای کنترل دسترسی در اپلیکیشن‌های کنار دیوار استفاده می‌شوند. آنها را با دامنه‌های OAuth اشتباه نگیرید. انتظار می‌رود اپلیکیشن‌ها نسبت به این مجوزها کور باشند. اینها فقط برای استفاده‌های داخلی ایجاد شده‌اند، اما در صورت نیاز آزادانه درخواست فعال‌سازی برای اپلیکیشن خود را ارائه دهید.

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

دریافت گزینه‌های حافظه رم موجود در دسته‌بندی‌های موبایل/تبلت/لپ‌تاپ دیوار

دریافت تمام گزینه‌های حافظه رم موجود در دسته‌بندی‌های موبایل/تبلت/لپ‌تاپ دیوار. این ترجمه فارسی برای هر گزینه حافظه رم که در آگهی‌ها استفاده می‌شود، ارائه می‌دهد.

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

دریافت انواع سرویس موجود در کنار دیوار

این انواع سرویس برای گروه‌بندی سرویس‌های مشابه در کنار دیوار استفاده می‌شود. هر ایده جدید با انواع سرویس جدید خوشامد است. در صورت نیاز آزادانه درخواست دهید.

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

Get submit schema

This API allows you to get the submit schema for a given category slug. Response is in JSON Schema format.  The schema defines the structure and validation rules for form fields when submitting posts in a specific category. Each field in the schema can have one of the following types:  **Basic Types:** - &#x60;string&#x60;: Text input fields (e.g., titles, descriptions, time values) - &#x60;integer&#x60;: Numeric input fields for whole numbers (e.g., prices, counts, sizes) - &#x60;float&#x60;: Numeric input fields for decimal numbers - &#x60;boolean&#x60;: True/false checkbox fields - &#x60;array&#x60;: Multi-select fields that allow multiple values  **Enum Fields:** Fields with predefined options use &#x60;enum&#x60; and &#x60;enumNames&#x60; properties: - &#x60;enum&#x60;: Array of internal values used for API communication - &#x60;enumNames&#x60;: Array of display labels shown to users (usually in Persian) - These are used for single-select dropdowns (e.g., floor selection, parking availability)  **Array Fields with Enums:** Multi-select fields combine &#x60;type: \&quot;array\&quot;&#x60; with enum properties: - &#x60;items.enum&#x60;: Available options for selection - &#x60;items.enumNames&#x60;: Display labels for each option - Users can select multiple values (e.g., comfort amenities, heating systems)  **Field Properties:** - &#x60;title&#x60;: Persian display name for the field - &#x60;required&#x60;: Array of field names that must be provided - &#x60;type&#x60;: Data type of the field  **Example Usage:** &#x60;&#x60;&#x60;json {   \&quot;properties\&quot;: {     \&quot;size\&quot;: {       \&quot;title\&quot;: \&quot;متراژ (متر مربع)\&quot;,       \&quot;type\&quot;: \&quot;integer\&quot;     },     \&quot;elevator\&quot;: {       \&quot;enum\&quot;: [\&quot;دارد\&quot;, \&quot;ندارد\&quot;],       \&quot;enumNames\&quot;: [\&quot;دارد\&quot;, \&quot;ندارد\&quot;],       \&quot;title\&quot;: \&quot;آسانسور\&quot;,       \&quot;type\&quot;: \&quot;string\&quot;     },     \&quot;comfort_amenities\&quot;: {       \&quot;items\&quot;: {         \&quot;enum\&quot;: [\&quot;اینترنت_پرسرعت\&quot;, \&quot;تلویزیون\&quot;],         \&quot;enumNames\&quot;: [\&quot;اینترنت پرسرعت\&quot;, \&quot;تلویزیون\&quot;],         \&quot;type\&quot;: \&quot;string\&quot;       },       \&quot;title\&quot;: \&quot;امکانات رفاهی\&quot;,       \&quot;type\&quot;: \&quot;array\&quot;     }   } } &#x60;&#x60;&#x60;

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

