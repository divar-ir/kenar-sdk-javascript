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
import GetPostPricingResponseReorder from './GetPostPricingResponseReorder';

/**
 * The PaymentGetPostPricingResponse model module.
 * @module model/PaymentGetPostPricingResponse
 * @version 0.1.0
 */
class PaymentGetPostPricingResponse {
    /**
     * Constructs a new <code>PaymentGetPostPricingResponse</code>.
     * @alias module:model/PaymentGetPostPricingResponse
     */
    constructor() { 
        
        PaymentGetPostPricingResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>PaymentGetPostPricingResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PaymentGetPostPricingResponse} obj Optional instance to populate.
     * @return {module:model/PaymentGetPostPricingResponse} The populated <code>PaymentGetPostPricingResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PaymentGetPostPricingResponse();

            if (data.hasOwnProperty('reorder')) {
                obj['reorder'] = GetPostPricingResponseReorder.constructFromObject(data['reorder']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>PaymentGetPostPricingResponse</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>PaymentGetPostPricingResponse</code>.
     */
    static validateJSON(data) {
        // validate the optional field `reorder`
        if (data['reorder']) { // data not null
          GetPostPricingResponseReorder.validateJSON(data['reorder']);
        }

        return true;
    }

/**
     * @return {module:model/GetPostPricingResponseReorder}
     */
    getReorder() {
        return this.reorder;
    }

    /**
     * @param {module:model/GetPostPricingResponseReorder} reorder
     */
    setReorder(reorder) {
        this['reorder'] = reorder;
    }

}



/**
 * @member {module:model/GetPostPricingResponseReorder} reorder
 */
PaymentGetPostPricingResponse.prototype['reorder'] = undefined;






export default PaymentGetPostPricingResponse;

