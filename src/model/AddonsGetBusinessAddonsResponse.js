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
import AddonsBusinessAddon from './AddonsBusinessAddon';

/**
 * The AddonsGetBusinessAddonsResponse model module.
 * @module model/AddonsGetBusinessAddonsResponse
 * @version 0.1.0
 */
class AddonsGetBusinessAddonsResponse {
    /**
     * Constructs a new <code>AddonsGetBusinessAddonsResponse</code>.
     * @alias module:model/AddonsGetBusinessAddonsResponse
     */
    constructor() { 
        
        AddonsGetBusinessAddonsResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>AddonsGetBusinessAddonsResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/AddonsGetBusinessAddonsResponse} obj Optional instance to populate.
     * @return {module:model/AddonsGetBusinessAddonsResponse} The populated <code>AddonsGetBusinessAddonsResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new AddonsGetBusinessAddonsResponse();

            if (data.hasOwnProperty('addons')) {
                obj['addons'] = ApiClient.convertToType(data['addons'], [AddonsBusinessAddon]);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>AddonsGetBusinessAddonsResponse</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>AddonsGetBusinessAddonsResponse</code>.
     */
    static validateJSON(data) {
        if (data['addons']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['addons'])) {
                throw new Error("Expected the field `addons` to be an array in the JSON data but got " + data['addons']);
            }
            // validate the optional field `addons` (array)
            for (const item of data['addons']) {
                AddonsBusinessAddon.validateJSON(item);
            };
        }

        return true;
    }

/**
     * @return {Array.<module:model/AddonsBusinessAddon>}
     */
    getAddons() {
        return this.addons;
    }

    /**
     * @param {Array.<module:model/AddonsBusinessAddon>} addons
     */
    setAddons(addons) {
        this['addons'] = addons;
    }

}



/**
 * @member {Array.<module:model/AddonsBusinessAddon>} addons
 */
AddonsGetBusinessAddonsResponse.prototype['addons'] = undefined;






export default AddonsGetBusinessAddonsResponse;

