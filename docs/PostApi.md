# KenarApiClient.PostApi

All URIs are relative to *https://open-api.divar.ir*

Method | HTTP request | Description
------------- | ------------- | -------------
[**postEditPost**](PostApi.md#postEditPost) | **PUT** /v1/open-platform/post/{post_token} | Edit a post
[**postGetImageUploadURL**](PostApi.md#postGetImageUploadURL) | **GET** /v1/open-platform/post/image-upload-url | Get image upload URL



## postEditPost

> Object postEditPost(postToken, postEditPostBody)

Edit a post

This API allows you to edit a post. This needs &#x60;POST_EDIT.{post_token}&#x60; OAuth scope. By now you can only edit title, description, and images of a post.

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

Get image upload URL

This API allows you to get an upload URL for uploading images of a post. You can upload images to the returned URL using a POST request with binary encoding.

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

