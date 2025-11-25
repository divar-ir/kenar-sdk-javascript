# KenarApiClient.PostTemporaryResidenceFields

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**area** | **Number** | متراژ اقامتگاه به متر مربع | 
**extraPersonCapacity** | **Number** | تعداد افراد اضافه مجاز در اقامتگاه | 
**hasOwnImage** | **Boolean** | تصاویر مربوط به خود ملک بوده و تزئینی نیستند. | 
**priceCostPerExtraPerson** | **String** | هزینه هر نفر اضافه به ازای هر شب به تومان | 
**priceRegularDays** | **String** | قیمت اقامتگاه در روزهای عادی (شنبه تا سه‌شنبه) به تومان | 
**priceSpecialDays** | **String** | قیمت اقامتگاه در روزهای خاص (تعطیلات و مناسبت‌ها) به تومان | 
**priceWeekends** | **String** | قیمت اقامتگاه در آخر هفته (چهارشنبه تا جمعه) به تومان | 
**regularPersonCapacity** | **Number** | ظرفیت استاندارد افراد در اقامتگاه | 
**roomsCount** | [**PostRoomsCount**](PostRoomsCount.md) |  | 
**checkInTime** | **String** | زمان ورود | [optional] 
**checkOutTime** | **String** | زمان خروج | [optional] 
**comfortAmenities** | [**[TemporaryResidenceFieldsComfortAmenity]**](TemporaryResidenceFieldsComfortAmenity.md) |  | [optional] 
**damageDeposit** | **String** | مبلغ ودیعه خسارت به تومان | [optional] 
**fullyFurnished** | **Boolean** | آیا اقامتگاه کاملاً مبله است | [optional] 
**heatingCoolingSystem** | [**[TemporaryResidenceFieldsHeatingCoolingSystem]**](TemporaryResidenceFieldsHeatingCoolingSystem.md) |  | [optional] 
**houseRules** | **String** | قوانین و مقررات خانه | [optional] 
**minimumStay** | **Number** | حداقل تعداد روزهای مورد نیاز برای اقامت | [optional] 
**petsAllowed** | [**TemporaryResidenceFieldsPetsAllowed**](TemporaryResidenceFieldsPetsAllowed.md) |  | [optional] 
**rentalPeriod** | [**TemporaryResidenceFieldsRentalPeriod**](TemporaryResidenceFieldsRentalPeriod.md) |  | [optional] 


