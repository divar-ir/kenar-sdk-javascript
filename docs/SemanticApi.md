# KenarApiClient.SemanticApi

All URIs are relative to *https://open-api.divar.ir*

Method | HTTP request | Description
------------- | ------------- | -------------
[**semanticCreatePostSemantic**](SemanticApi.md#semanticCreatePostSemantic) | **POST** /experimental/open-platform/semantic/post/{token} | Create Post Semantic
[**semanticCreateUserSemantic**](SemanticApi.md#semanticCreateUserSemantic) | **POST** /v1/open-platform/semantic/user/{phone} | Create User Semantic
[**semanticCreateUserSemantic2**](SemanticApi.md#semanticCreateUserSemantic2) | **POST** /v1/open-platform/semantic/users/{divar_user_id} | Create User Semantic
[**semanticDeleteUserSemantic**](SemanticApi.md#semanticDeleteUserSemantic) | **DELETE** /v1/open-platform/semantic/user/{phone} | Delete User Semantic
[**semanticDeleteUserSemantic2**](SemanticApi.md#semanticDeleteUserSemantic2) | **DELETE** /v1/open-platform/semantic/users/{divar_user_id} | Delete User Semantic



## semanticCreatePostSemantic

> Object semanticCreatePostSemantic(token, semanticCreatePostSemanticBody)

Create Post Semantic

In some cases, it is necessary to store information about the post in Divar without adding an addon. This API expects access token having &#x60;POST_SEMANTIC_CREATE&#x60; scope. 

### Example

```javascript
import KenarApiClient from 'kenar-api-client';

let apiInstance = new KenarApiClient.SemanticApi();
let token = "token_example"; // String | 
let semanticCreatePostSemanticBody = new KenarApiClient.SemanticCreatePostSemanticBody(); // SemanticCreatePostSemanticBody | 
apiInstance.semanticCreatePostSemantic(token, semanticCreatePostSemanticBody).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **token** | **String**|  | 
 **semanticCreatePostSemanticBody** | [**SemanticCreatePostSemanticBody**](SemanticCreatePostSemanticBody.md)|  | 

### Return type

**Object**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## semanticCreateUserSemantic

> SemanticCreateUserSemanticResponse semanticCreateUserSemantic(phone, semanticCreateUserSemanticBody)

Create User Semantic

In some cases, it is necessary to store information about the user in Divar without adding an addon. The username in Divar is the same as the mobile number. This API expects access token having &#x60;USER_VERIFICATION_CREATE&#x60; scope. Use the User Semantic APIs for this purpose.This service allows sending semantic information and an optional payment ticket.

### Example

```javascript
import KenarApiClient from 'kenar-api-client';

let apiInstance = new KenarApiClient.SemanticApi();
let phone = "phone_example"; // String | 
let semanticCreateUserSemanticBody = new KenarApiClient.SemanticCreateUserSemanticBody(); // SemanticCreateUserSemanticBody | 
apiInstance.semanticCreateUserSemantic(phone, semanticCreateUserSemanticBody).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **phone** | **String**|  | 
 **semanticCreateUserSemanticBody** | [**SemanticCreateUserSemanticBody**](SemanticCreateUserSemanticBody.md)|  | 

### Return type

[**SemanticCreateUserSemanticResponse**](SemanticCreateUserSemanticResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## semanticCreateUserSemantic2

> SemanticCreateUserSemanticResponse semanticCreateUserSemantic2(divarUserId, semanticCreateUserSemanticBody)

Create User Semantic

In some cases, it is necessary to store information about the user in Divar without adding an addon. The username in Divar is the same as the mobile number. This API expects access token having &#x60;USER_VERIFICATION_CREATE&#x60; scope. Use the User Semantic APIs for this purpose.This service allows sending semantic information and an optional payment ticket.

### Example

```javascript
import KenarApiClient from 'kenar-api-client';

let apiInstance = new KenarApiClient.SemanticApi();
let divarUserId = "divarUserId_example"; // String | 
let semanticCreateUserSemanticBody = new KenarApiClient.SemanticCreateUserSemanticBody(); // SemanticCreateUserSemanticBody | 
apiInstance.semanticCreateUserSemantic2(divarUserId, semanticCreateUserSemanticBody).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **divarUserId** | **String**|  | 
 **semanticCreateUserSemanticBody** | [**SemanticCreateUserSemanticBody**](SemanticCreateUserSemanticBody.md)|  | 

### Return type

[**SemanticCreateUserSemanticResponse**](SemanticCreateUserSemanticResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## semanticDeleteUserSemantic

> Object semanticDeleteUserSemantic(phone, opts)

Delete User Semantic

You can delete the semantic information of a user by calling this API.

### Example

```javascript
import KenarApiClient from 'kenar-api-client';

let apiInstance = new KenarApiClient.SemanticApi();
let phone = "phone_example"; // String | 
let opts = {
  'divarUserId': "divarUserId_example" // String | 
};
apiInstance.semanticDeleteUserSemantic(phone, opts).then((data) => {
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

**Object**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## semanticDeleteUserSemantic2

> Object semanticDeleteUserSemantic2(divarUserId, opts)

Delete User Semantic

You can delete the semantic information of a user by calling this API.

### Example

```javascript
import KenarApiClient from 'kenar-api-client';

let apiInstance = new KenarApiClient.SemanticApi();
let divarUserId = "divarUserId_example"; // String | 
let opts = {
  'phone': "phone_example" // String | 
};
apiInstance.semanticDeleteUserSemantic2(divarUserId, opts).then((data) => {
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

**Object**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

