# KenarApiClient.AssetsApi

All URIs are relative to *https://open-api.divar.ir*

Method | HTTP request | Description
------------- | ------------- | -------------
[**assetsGetBodyStatuses**](AssetsApi.md#assetsGetBodyStatuses) | **GET** /v1/open-platform/assets/body-status | Get available body-status options in Divar vehicle categories
[**assetsGetBrandModels**](AssetsApi.md#assetsGetBrandModels) | **GET** /v1/open-platform/assets/brand-model/{category} | Get brand models in a Divar category
[**assetsGetCategories**](AssetsApi.md#assetsGetCategories) | **GET** /v1/open-platform/assets/category | Get Divar categories
[**assetsGetCities**](AssetsApi.md#assetsGetCities) | **GET** /v1/open-platform/assets/city | Get Divar cities
[**assetsGetColors**](AssetsApi.md#assetsGetColors) | **GET** /v1/open-platform/assets/color/{category} | Get colors in a Divar category
[**assetsGetDistricts**](AssetsApi.md#assetsGetDistricts) | **GET** /v1/open-platform/assets/district | Get Divar districts
[**assetsGetDistricts2**](AssetsApi.md#assetsGetDistricts2) | **GET** /v1/open-platform/assets/district/{city_slug} | Get Divar districts
[**assetsGetInternalStorages**](AssetsApi.md#assetsGetInternalStorages) | **GET** /v1/open-platform/assets/internal-storage | Get available internal-storage options in Divar mobile/tablet/laptop categories
[**assetsGetOAuthScopes**](AssetsApi.md#assetsGetOAuthScopes) | **GET** /v1/open-platform/assets/oauth-scope | Get KenarDivar OAuth scopes
[**assetsGetPermissions**](AssetsApi.md#assetsGetPermissions) | **GET** /v1/open-platform/assets/permission | Get KenarDivar permissions
[**assetsGetRamMemories**](AssetsApi.md#assetsGetRamMemories) | **GET** /v1/open-platform/assets/ram-memory | Get available ram-memory options in Divar mobile/tablet/laptop categories
[**assetsGetServiceTypes**](AssetsApi.md#assetsGetServiceTypes) | **GET** /v1/open-platform/assets/service-type | Get available service types in KenarDivar



## assetsGetBodyStatuses

> AssetsGetBodyStatusesResponse assetsGetBodyStatuses()

Get available body-status options in Divar vehicle categories

Get all available body-status options in Divar vehicle categories.This provides persian translations for each body-status options which used in posts.

### Example

```javascript
import KenarApiClient from 'kenar-api-client';

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

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## assetsGetBrandModels

> AssetsGetBrandModelsResponse assetsGetBrandModels(category)

Get brand models in a Divar category

Get all Divar brand models in specified category.This provides persian translations for each brand models which used in posts.

### Example

```javascript
import KenarApiClient from 'kenar-api-client';

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

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## assetsGetCategories

> AssetsGetCategoriesResponse assetsGetCategories()

Get Divar categories

Get all Divar categories. This provides persian translations for each category which used in posts.

### Example

```javascript
import KenarApiClient from 'kenar-api-client';

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

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## assetsGetCities

> AssetsGetCitiesResponse assetsGetCities()

Get Divar cities

Get all Divar cities. This provides persian translations for each city which used in posts.

### Example

```javascript
import KenarApiClient from 'kenar-api-client';

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

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## assetsGetColors

> AssetsGetColorsResponse assetsGetColors(category)

Get colors in a Divar category

Get all Divar colors in specified category.This provides persian translations for each color which used in posts.

### Example

```javascript
import KenarApiClient from 'kenar-api-client';

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

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## assetsGetDistricts

> AssetsGetDistrictsResponse assetsGetDistricts(opts)

Get Divar districts

Get all Divar districts. This provides persian translations for each district which used in posts.

### Example

```javascript
import KenarApiClient from 'kenar-api-client';

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

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## assetsGetDistricts2

> AssetsGetDistrictsResponse assetsGetDistricts2(citySlug)

Get Divar districts

Get all Divar districts. This provides persian translations for each district which used in posts.

### Example

```javascript
import KenarApiClient from 'kenar-api-client';

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

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## assetsGetInternalStorages

> AssetsGetInternalStoragesResponse assetsGetInternalStorages()

Get available internal-storage options in Divar mobile/tablet/laptop categories

Get all available internal-storage options in Divar mobile categories.This provides persian translations for each internal-storage options which used in posts.

### Example

```javascript
import KenarApiClient from 'kenar-api-client';

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

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## assetsGetOAuthScopes

> AssetsGetOAuthScopesResponse assetsGetOAuthScopes()

Get KenarDivar OAuth scopes

These are available scopes for KenarDivar OAuth2.0. Use scopes in OAuth flow to request access to user data or perform actions on their behalf.

### Example

```javascript
import KenarApiClient from 'kenar-api-client';

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

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## assetsGetPermissions

> AssetsGetPermissionsResponse assetsGetPermissions()

Get KenarDivar permissions

These permission are used to control access in KenarDivar Apps. Don&#39;t mistake them with OAuth scopes. It&#39;s expected that apps be blind about these permissions.These are created for internal usages only, but feel free to request to be enabled for you app as needed.

### Example

```javascript
import KenarApiClient from 'kenar-api-client';

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

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## assetsGetRamMemories

> AssetsGetRamMemoriesResponse assetsGetRamMemories()

Get available ram-memory options in Divar mobile/tablet/laptop categories

Get all available ram-memory options in Divar mobile/tablet/laptop categories.This provides persian translations for each ram-memory options which used in posts.

### Example

```javascript
import KenarApiClient from 'kenar-api-client';

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

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## assetsGetServiceTypes

> AssetsGetServiceTypesResponse assetsGetServiceTypes()

Get available service types in KenarDivar

These service types is used to group similar services in KenarDivar. Any new idea with new service types are welcome. Feel free to request them as needed.

### Example

```javascript
import KenarApiClient from 'kenar-api-client';

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

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

