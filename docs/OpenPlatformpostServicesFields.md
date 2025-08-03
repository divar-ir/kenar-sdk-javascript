# KenarApiClient.OpenPlatformpostServicesFields

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**category** | [**PostServicesFieldsCategory**](PostServicesFieldsCategory.md) |  | [optional] 
**expertiseIds** | **[String]** | List of expertise ids | [optional] 
**workHoursEnd** | **Number** | End hour of work in 24-hour format (e.g. 18 for 18:00). Only applicable if &#x60;works_24_7&#x60; is false. | [optional] 
**workHoursStart** | **Number** | Start hour of work in 24-hour format (e.g. 9 for 9:00). Only applicable if &#x60;works_24_7&#x60; is false. | [optional] 
**workOnHolidays** | **Boolean** | Whether the service provider works on holidays | [optional] 
**works247** | **Boolean** | Whether the service provider is available 24/7. If true, &#x60;work_hours_start&#x60; and &#x60;work_hours_end&#x60; are ignored. | [optional] 


