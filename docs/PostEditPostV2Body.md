# KenarApiClient.PostEditPostV2Body

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**updateMask** | **[String]** | مشخص می‌کند کدام فیلدها به‌روزرسانی شوند. از مسیرهای تودرتو مانند &#39;general_data.title&#39; یا &#39;category_data.price&#39; استفاده کنید. این کار تمایز بین پاک کردن یک فیلد و تغییر ندادن آن را ممکن می‌سازد. | 
**categoryData** | **Object** | فیلدهای مختص دسته‌بندی که باید مطابق schema تکمیل شوند. schema را اینجا ببینید: https://kenar.divar.dev/openapi-doc/assets-get-submit-schema/ | [optional] 
**generalData** | [**PostPostGeneralData**](PostPostGeneralData.md) |  | [optional] 


