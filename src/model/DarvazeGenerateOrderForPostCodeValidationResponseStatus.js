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
* Enum class DarvazeGenerateOrderForPostCodeValidationResponseStatus.
* @enum {}
* @readonly
*/
export default class DarvazeGenerateOrderForPostCodeValidationResponseStatus {
    
        /**
         * value: "SUCCESS"
         * @const
         */
        "SUCCESS" = "SUCCESS";

    
        /**
         * value: "FAILED"
         * @const
         */
        "FAILED" = "FAILED";

    

    /**
    * Returns a <code>DarvazeGenerateOrderForPostCodeValidationResponseStatus</code> enum value from a Javascript object name.
    * @param {Object} data The plain JavaScript object containing the name of the enum value.
    * @return {module:model/DarvazeGenerateOrderForPostCodeValidationResponseStatus} The enum <code>DarvazeGenerateOrderForPostCodeValidationResponseStatus</code> value.
    */
    static constructFromObject(object) {
        return object;
    }
}

