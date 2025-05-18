# KenarApiClient.FinderApi

All URIs are relative to *https://open-api.divar.ir*

Method | HTTP request | Description
------------- | ------------- | -------------
[**finderGetPost**](FinderApi.md#finderGetPost) | **GET** /v1/open-platform/finder/post/{token} | Get a Divar post
[**finderGetUser**](FinderApi.md#finderGetUser) | **POST** /v1/open-platform/users | Get user information
[**finderGetUser2**](FinderApi.md#finderGetUser2) | **GET** /v1/open-platform/users | Get user information
[**finderGetUserPosts**](FinderApi.md#finderGetUserPosts) | **GET** /v1/open-platform/finder/user-posts | Get user posts
[**finderSearchPostV2**](FinderApi.md#finderSearchPostV2) | **POST** /v2/open-platform/finder/post | Search Divar posts with some filters



## finderGetPost

> FinderGetPostResponse finderGetPost(token)

Get a Divar post

This API allows you to get details about Divar post by its token. You can use the token to get the post data and its state 

### Example

```javascript
import KenarApiClient from 'kenar-api-client';

let apiInstance = new KenarApiClient.FinderApi();
let token = "token_example"; // String | 
apiInstance.finderGetPost(token).then((data) => {
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

[**FinderGetPostResponse**](FinderGetPostResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## finderGetUser

> FinderUser finderGetUser(body)

Get user information

After gaining an access token, you can use this API to get user information. With scope &#x60;USER_PHONE&#x60; you can get user phone number. With scope &#x60;USER_ID&#x60; you can get user id and you can rely on uniqueness of this id. 

### Example

```javascript
import KenarApiClient from 'kenar-api-client';

let apiInstance = new KenarApiClient.FinderApi();
let body = {key: null}; // Object | 
apiInstance.finderGetUser(body).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **Object**|  | 

### Return type

[**FinderUser**](FinderUser.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## finderGetUser2

> FinderUser finderGetUser2()

Get user information

After gaining an access token, you can use this API to get user information. With scope &#x60;USER_PHONE&#x60; you can get user phone number. With scope &#x60;USER_ID&#x60; you can get user id and you can rely on uniqueness of this id. 

### Example

```javascript
import KenarApiClient from 'kenar-api-client';

let apiInstance = new KenarApiClient.FinderApi();
apiInstance.finderGetUser2().then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

This endpoint does not need any parameter.

### Return type

[**FinderUser**](FinderUser.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## finderGetUserPosts

> FinderGetUserPostsResponse finderGetUserPosts()

Get user posts

This API allows you to get all posts of a user. You can use this API to show user posts in your service.

### Example

```javascript
import KenarApiClient from 'kenar-api-client';

let apiInstance = new KenarApiClient.FinderApi();
apiInstance.finderGetUserPosts().then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

This endpoint does not need any parameter.

### Return type

[**FinderGetUserPostsResponse**](FinderGetUserPostsResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## finderSearchPostV2

> FinderSearchPostV2Response finderSearchPostV2(finderSearchPostsV2Request)

Search Divar posts with some filters

This API allows you to search Divar posts with some filters. You can search posts by category, city, district, and some other filters. Posts will be sorted by their timestamp. 

### Example

```javascript
import KenarApiClient from 'kenar-api-client';

let apiInstance = new KenarApiClient.FinderApi();
let finderSearchPostsV2Request = new KenarApiClient.FinderSearchPostsV2Request(); // FinderSearchPostsV2Request | 
apiInstance.finderSearchPostV2(finderSearchPostsV2Request).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **finderSearchPostsV2Request** | [**FinderSearchPostsV2Request**](FinderSearchPostsV2Request.md)|  | 

### Return type

[**FinderSearchPostV2Response**](FinderSearchPostV2Response.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

