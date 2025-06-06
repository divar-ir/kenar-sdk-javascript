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
 * The AssetsGetInternalStoragesResponse model module.
 * @module model/AssetsGetInternalStoragesResponse
 * @version 0.1.0
 */
class AssetsGetInternalStoragesResponse {
    /**
     * Constructs a new <code>AssetsGetInternalStoragesResponse</code>.
     * @alias module:model/AssetsGetInternalStoragesResponse
     */
    constructor() { 
        
        AssetsGetInternalStoragesResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>AssetsGetInternalStoragesResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/AssetsGetInternalStoragesResponse} obj Optional instance to populate.
     * @return {module:model/AssetsGetInternalStoragesResponse} The populated <code>AssetsGetInternalStoragesResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new AssetsGetInternalStoragesResponse();

            if (data.hasOwnProperty('internal_storages')) {
                obj['internal_storages'] = ApiClient.convertToType(data['internal_storages'], [AssetsEnumOption]);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>AssetsGetInternalStoragesResponse</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>AssetsGetInternalStoragesResponse</code>.
     */
    static validateJSON(data) {
        if (data['internal_storages']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['internal_storages'])) {
                throw new Error("Expected the field `internal_storages` to be an array in the JSON data but got " + data['internal_storages']);
            }
            // validate the optional field `internal_storages` (array)
            for (const item of data['internal_storages']) {
                AssetsEnumOption.validateJSON(item);
            };
        }

        return true;
    }

/**
     * @return {Array.<module:model/AssetsEnumOption>}
     */
    getInternalStorages() {
        return this.internal_storages;
    }

    /**
     * @param {Array.<module:model/AssetsEnumOption>} internalStorages
     */
    setInternalStorages(internalStorages) {
        this['internal_storages'] = internalStorages;
    }

}



/**
 * @member {Array.<module:model/AssetsEnumOption>} internal_storages
 */
AssetsGetInternalStoragesResponse.prototype['internal_storages'] = undefined;






export default AssetsGetInternalStoragesResponse;

