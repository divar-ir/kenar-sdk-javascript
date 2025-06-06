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
import ImageCarouselRowImageItem from './ImageCarouselRowImageItem';

/**
 * The AddonsImageCarouselRow model module.
 * @module model/AddonsImageCarouselRow
 * @version 0.1.0
 */
class AddonsImageCarouselRow {
    /**
     * Constructs a new <code>AddonsImageCarouselRow</code>.
     * @alias module:model/AddonsImageCarouselRow
     */
    constructor() { 
        
        AddonsImageCarouselRow.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>AddonsImageCarouselRow</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/AddonsImageCarouselRow} obj Optional instance to populate.
     * @return {module:model/AddonsImageCarouselRow} The populated <code>AddonsImageCarouselRow</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new AddonsImageCarouselRow();

            if (data.hasOwnProperty('has_divider')) {
                obj['has_divider'] = ApiClient.convertToType(data['has_divider'], 'Boolean');
            }
            if (data.hasOwnProperty('items')) {
                obj['items'] = ApiClient.convertToType(data['items'], [ImageCarouselRowImageItem]);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>AddonsImageCarouselRow</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>AddonsImageCarouselRow</code>.
     */
    static validateJSON(data) {
        if (data['items']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['items'])) {
                throw new Error("Expected the field `items` to be an array in the JSON data but got " + data['items']);
            }
            // validate the optional field `items` (array)
            for (const item of data['items']) {
                ImageCarouselRowImageItem.validateJSON(item);
            };
        }

        return true;
    }

/**
     * @return {Boolean}
     */
    getHasDivider() {
        return this.has_divider;
    }

    /**
     * @param {Boolean} hasDivider
     */
    setHasDivider(hasDivider) {
        this['has_divider'] = hasDivider;
    }
/**
     * @return {Array.<module:model/ImageCarouselRowImageItem>}
     */
    getItems() {
        return this.items;
    }

    /**
     * @param {Array.<module:model/ImageCarouselRowImageItem>} items
     */
    setItems(items) {
        this['items'] = items;
    }

}



/**
 * @member {Boolean} has_divider
 */
AddonsImageCarouselRow.prototype['has_divider'] = undefined;

/**
 * @member {Array.<module:model/ImageCarouselRowImageItem>} items
 */
AddonsImageCarouselRow.prototype['items'] = undefined;






export default AddonsImageCarouselRow;

