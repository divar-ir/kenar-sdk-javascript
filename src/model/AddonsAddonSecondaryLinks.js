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
import AddonsAddonSecondaryLinkage from './AddonsAddonSecondaryLinkage';

/**
 * The AddonsAddonSecondaryLinks model module.
 * @module model/AddonsAddonSecondaryLinks
 * @version 0.1.0
 */
class AddonsAddonSecondaryLinks {
    /**
     * Constructs a new <code>AddonsAddonSecondaryLinks</code>.
     * @alias module:model/AddonsAddonSecondaryLinks
     */
    constructor() { 
        
        AddonsAddonSecondaryLinks.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>AddonsAddonSecondaryLinks</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/AddonsAddonSecondaryLinks} obj Optional instance to populate.
     * @return {module:model/AddonsAddonSecondaryLinks} The populated <code>AddonsAddonSecondaryLinks</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new AddonsAddonSecondaryLinks();

            if (data.hasOwnProperty('secondary_linkages')) {
                obj['secondary_linkages'] = ApiClient.convertToType(data['secondary_linkages'], [AddonsAddonSecondaryLinkage]);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>AddonsAddonSecondaryLinks</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>AddonsAddonSecondaryLinks</code>.
     */
    static validateJSON(data) {
        if (data['secondary_linkages']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['secondary_linkages'])) {
                throw new Error("Expected the field `secondary_linkages` to be an array in the JSON data but got " + data['secondary_linkages']);
            }
            // validate the optional field `secondary_linkages` (array)
            for (const item of data['secondary_linkages']) {
                AddonsAddonSecondaryLinkage.validateJSON(item);
            };
        }

        return true;
    }

/**
     * @return {Array.<module:model/AddonsAddonSecondaryLinkage>}
     */
    getSecondaryLinkages() {
        return this.secondary_linkages;
    }

    /**
     * @param {Array.<module:model/AddonsAddonSecondaryLinkage>} secondaryLinkages
     */
    setSecondaryLinkages(secondaryLinkages) {
        this['secondary_linkages'] = secondaryLinkages;
    }

}



/**
 * @member {Array.<module:model/AddonsAddonSecondaryLinkage>} secondary_linkages
 */
AddonsAddonSecondaryLinks.prototype['secondary_linkages'] = undefined;






export default AddonsAddonSecondaryLinks;

