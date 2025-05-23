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
import AssetsEnumOption from './AssetsEnumOption';

/**
 * The AssetsGetDistrictsResponse model module.
 * @module model/AssetsGetDistrictsResponse
 * @version 0.1.0
 */
class AssetsGetDistrictsResponse {
    /**
     * Constructs a new <code>AssetsGetDistrictsResponse</code>.
     * @alias module:model/AssetsGetDistrictsResponse
     */
    constructor() { 
        
        AssetsGetDistrictsResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>AssetsGetDistrictsResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/AssetsGetDistrictsResponse} obj Optional instance to populate.
     * @return {module:model/AssetsGetDistrictsResponse} The populated <code>AssetsGetDistrictsResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new AssetsGetDistrictsResponse();

            if (data.hasOwnProperty('districts')) {
                obj['districts'] = ApiClient.convertToType(data['districts'], [AssetsEnumOption]);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>AssetsGetDistrictsResponse</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>AssetsGetDistrictsResponse</code>.
     */
    static validateJSON(data) {
        if (data['districts']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['districts'])) {
                throw new Error("Expected the field `districts` to be an array in the JSON data but got " + data['districts']);
            }
            // validate the optional field `districts` (array)
            for (const item of data['districts']) {
                AssetsEnumOption.validateJSON(item);
            };
        }

        return true;
    }

/**
     * @return {Array.<module:model/AssetsEnumOption>}
     */
    getDistricts() {
        return this.districts;
    }

    /**
     * @param {Array.<module:model/AssetsEnumOption>} districts
     */
    setDistricts(districts) {
        this['districts'] = districts;
    }

}



/**
 * @member {Array.<module:model/AssetsEnumOption>} districts
 */
AssetsGetDistrictsResponse.prototype['districts'] = undefined;






export default AssetsGetDistrictsResponse;

