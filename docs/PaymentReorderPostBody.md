# KenarApiClient.PaymentReorderPostBody

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** | A Version 4 uuid that must be unique for each payment. This uuid must be generated on your side and sent in the request. If an id is sent that has a successful or semi-successful transaction on the Kenar side, you will receive an error. | [optional] 
**extraDetails** | **String** | Additional details that you want to send to the Kenar side. This field is optional and can be used to solve inconsistencies in the transaction. | [optional] 


