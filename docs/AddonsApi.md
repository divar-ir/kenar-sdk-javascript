# KenarAPIClient.AddonsApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addonsCreatePostAddonV2**](AddonsApi.md#addonsCreatePostAddonV2) | **POST** /v2/open-platform/addons/post/{token} | Attach a new Addon to a post
[**addonsCreateUserAddonV2**](AddonsApi.md#addonsCreateUserAddonV2) | **POST** /v2/open-platform/addons/user/{phone} | Attach a new Addon to a user
[**addonsCreateUserAddonV22**](AddonsApi.md#addonsCreateUserAddonV22) | **POST** /v2/open-platform/addons/users/{divar_user_id} | Attach a new Addon to a user
[**addonsDeletePostAddon**](AddonsApi.md#addonsDeletePostAddon) | **DELETE** /v1/open-platform/add-ons/post/{token} | Delete an Addon from a post
[**addonsDeletePostAddon2**](AddonsApi.md#addonsDeletePostAddon2) | **DELETE** /v1/open-platform/addons/post/{token} | Delete an Addon from a post
[**addonsDeleteUserAddon**](AddonsApi.md#addonsDeleteUserAddon) | **DELETE** /v1/open-platform/addons/user/{id} | Delete an UserAddon
[**addonsGetUserAddons**](AddonsApi.md#addonsGetUserAddons) | **GET** /v1/open-platform/addons/user/{phone} | Retrieve all UserAddons
[**addonsGetUserAddons2**](AddonsApi.md#addonsGetUserAddons2) | **GET** /v2/open-platform/addons/users/{divar_user_id} | Retrieve all UserAddons



## addonsCreatePostAddonV2

> Object addonsCreatePostAddonV2(token, addonsCreatePostAddonV2Body)

Attach a new Addon to a post

Using this API and with user permission, you can attach a new AD to a post. You can use available widgets to design your Addon. This API need access token having one of the following scopes: - USER_POSTS_ADDON_CREATE - POST_ADDON_CREATE.{post_token}

### Example

```javascript
import KenarAPIClient from 'kenar-api-client';

let apiInstance = new KenarAPIClient.AddonsApi();
let token = "token_example"; // String | 
let addonsCreatePostAddonV2Body = new KenarAPIClient.AddonsCreatePostAddonV2Body(); // AddonsCreatePostAddonV2Body | 
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

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## addonsCreateUserAddonV2

> AddonsCreateUserAddonResponseV2 addonsCreateUserAddonV2(phone, addonsCreateUserAddonV2Body)

Attach a new Addon to a user

Using this API and with user permission, you can create a UserAddon. UserAddon will attach to all user posts in future and also back fills last 30 posts in the past. You can use available widgets to design your UserAddon. This API need access token having &#x60;USER_ADDON_CREATE&#x60; scope

### Example

```javascript
import KenarAPIClient from 'kenar-api-client';

let apiInstance = new KenarAPIClient.AddonsApi();
let phone = "phone_example"; // String | 
let addonsCreateUserAddonV2Body = new KenarAPIClient.AddonsCreateUserAddonV2Body(); // AddonsCreateUserAddonV2Body | 
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

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## addonsCreateUserAddonV22

> AddonsCreateUserAddonResponseV2 addonsCreateUserAddonV22(divarUserId, addonsCreateUserAddonV2Body)

Attach a new Addon to a user

Using this API and with user permission, you can create a UserAddon. UserAddon will attach to all user posts in future and also back fills last 30 posts in the past. You can use available widgets to design your UserAddon. This API need access token having &#x60;USER_ADDON_CREATE&#x60; scope

### Example

```javascript
import KenarAPIClient from 'kenar-api-client';

let apiInstance = new KenarAPIClient.AddonsApi();
let divarUserId = "divarUserId_example"; // String | 
let addonsCreateUserAddonV2Body = new KenarAPIClient.AddonsCreateUserAddonV2Body(); // AddonsCreateUserAddonV2Body | 
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

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## addonsDeletePostAddon

> Object addonsDeletePostAddon(token)

Delete an Addon from a post

You can only delete addons which are created by your app.

### Example

```javascript
import KenarAPIClient from 'kenar-api-client';

let apiInstance = new KenarAPIClient.AddonsApi();
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

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## addonsDeletePostAddon2

> Object addonsDeletePostAddon2(token)

Delete an Addon from a post

You can only delete addons which are created by your app.

### Example

```javascript
import KenarAPIClient from 'kenar-api-client';

let apiInstance = new KenarAPIClient.AddonsApi();
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

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## addonsDeleteUserAddon

> Object addonsDeleteUserAddon(id)

Delete an UserAddon

This will delete all correlated Addons to all user posts. You can only delete Addons which are created by your app.

### Example

```javascript
import KenarAPIClient from 'kenar-api-client';

let apiInstance = new KenarAPIClient.AddonsApi();
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

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## addonsGetUserAddons

> AddonsGetUserAddonsResponse addonsGetUserAddons(phone, opts)

Retrieve all UserAddons

Retrieve all UserAddons of a user.

### Example

```javascript
import KenarAPIClient from 'kenar-api-client';

let apiInstance = new KenarAPIClient.AddonsApi();
let phone = "phone_example"; // String | 
let opts = {
  'divarUserId': "divarUserId_example" // String | 
};
apiInstance.addonsGetUserAddons(phone, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **phone** | **String**|  | 
 **divarUserId** | **String**|  | [optional] 

### Return type

[**AddonsGetUserAddonsResponse**](AddonsGetUserAddonsResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## addonsGetUserAddons2

> AddonsGetUserAddonsResponse addonsGetUserAddons2(divarUserId, opts)

Retrieve all UserAddons

Retrieve all UserAddons of a user.

### Example

```javascript
import KenarAPIClient from 'kenar-api-client';

let apiInstance = new KenarAPIClient.AddonsApi();
let divarUserId = "divarUserId_example"; // String | 
let opts = {
  'phone': "phone_example" // String | 
};
apiInstance.addonsGetUserAddons2(divarUserId, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **divarUserId** | **String**|  | 
 **phone** | **String**|  | [optional] 

### Return type

[**AddonsGetUserAddonsResponse**](AddonsGetUserAddonsResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

