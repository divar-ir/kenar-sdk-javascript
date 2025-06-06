/**
 * Kenar API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 1.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
/**
* Enum class AppsServiceTag.
* @enum {}
* @readonly
*/
export default class AppsServiceTag {
    
        /**
         * value: "VERIFIED"
         * @const
         */
        "VERIFIED" = "VERIFIED";

    
        /**
         * value: "IDENTITY_VERIFIED"
         * @const
         */
        "IDENTITY_VERIFIED" = "IDENTITY_VERIFIED";

    
        /**
         * value: "POST_VERIFIED"
         * @const
         */
        "POST_VERIFIED" = "POST_VERIFIED";

    
        /**
         * value: "SECURE_PAYMENT"
         * @const
         */
        "SECURE_PAYMENT" = "SECURE_PAYMENT";

    
        /**
         * value: "POST_OWNERSHIP_VERIFIED"
         * @const
         */
        "POST_OWNERSHIP_VERIFIED" = "POST_OWNERSHIP_VERIFIED";

    
        /**
         * value: "EXPERT_INSPECTED"
         * @const
         */
        "EXPERT_INSPECTED" = "EXPERT_INSPECTED";

    
        /**
         * value: "CAR_EXPERT_INSPECTED"
         * @const
         */
        "CAR_EXPERT_INSPECTED" = "CAR_EXPERT_INSPECTED";

    
        /**
         * value: "HOME_EXPERT_INSPECTED"
         * @const
         */
        "HOME_EXPERT_INSPECTED" = "HOME_EXPERT_INSPECTED";

    
        /**
         * value: "MOBILE_EXPERT_INSPECTED"
         * @const
         */
        "MOBILE_EXPERT_INSPECTED" = "MOBILE_EXPERT_INSPECTED";

    

    /**
    * Returns a <code>AppsServiceTag</code> enum value from a Javascript object name.
    * @param {Object} data The plain JavaScript object containing the name of the enum value.
    * @return {module:model/AppsServiceTag} The enum <code>AppsServiceTag</code> value.
    */
    static constructFromObject(object) {
        return object;
    }
}

