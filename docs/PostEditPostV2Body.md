# KenarApiClient.PostEditPostV2Body

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**updateMask** | **[String]** | فیلد ماسک مشخص می‌کند کدام فیلدها به‌روزرسانی شوند. از مسیرهای تو در تو برای هر دو general_data و category_data استفاده کنید (مثلاً، &#39;general_data.title&#39;، &#39;category_data.price&#39;). این امکان تمایز بین حذف یک فیلد و به‌روزرسانی نکردن آن را فراهم می‌کند. | 
**categoryData** | **Object** | فیلدهای ویژه هر دسته‌بندی که باید مطابق قالب مشخص شده تکمیل شوند. قالب را از اینجا ببینید: https://kenar.divar.dev/openapi-doc/assets-get-submit-schema/ | [optional] 
**generalData** | [**PostPostGeneralData**](PostPostGeneralData.md) |  | [optional] 


