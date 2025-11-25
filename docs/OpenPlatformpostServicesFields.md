# KenarApiClient.OpenPlatformpostServicesFields

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**category** | [**ServicesFieldsCategory**](ServicesFieldsCategory.md) |  | 
**expertiseIds** | **[String]** | فهرست شناسه‌های تخصص | 
**workHoursEnd** | **Number** | ساعت پایان کار به فرمت 24 ساعته (مثلاً 18 برای 18:00). فقط در صورتی اعمال می‌شود که &#x60;works_24_7&#x60; false باشد. | 
**workHoursStart** | **Number** | ساعت شروع کار به فرمت 24 ساعته (مثلاً 9 برای 9:00). فقط در صورتی اعمال می‌شود که &#x60;works_24_7&#x60; false باشد. | 
**workOnHolidays** | **Boolean** | آیا ارائه‌دهنده سرویس در تعطیلات کار می‌کند | 
**works247** | **Boolean** | آیا ارائه‌دهنده سرویس به صورت 24/7 در دسترس است. اگر true باشد، &#x60;work_hours_start&#x60; و &#x60;work_hours_end&#x60; نادیده گرفته می‌شوند. | 


