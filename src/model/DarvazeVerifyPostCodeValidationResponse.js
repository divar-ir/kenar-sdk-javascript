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
import DarvazeVerifyPostCodeValidationResponseStatus from './DarvazeVerifyPostCodeValidationResponseStatus';

/**
 * The DarvazeVerifyPostCodeValidationResponse model module.
 * @module model/DarvazeVerifyPostCodeValidationResponse
 * @version 0.1.0
 */
class DarvazeVerifyPostCodeValidationResponse {
    /**
     * Constructs a new <code>DarvazeVerifyPostCodeValidationResponse</code>.
     * @alias module:model/DarvazeVerifyPostCodeValidationResponse
     */
    constructor() { 
        
        DarvazeVerifyPostCodeValidationResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>DarvazeVerifyPostCodeValidationResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/DarvazeVerifyPostCodeValidationResponse} obj Optional instance to populate.
     * @return {module:model/DarvazeVerifyPostCodeValidationResponse} The populated <code>DarvazeVerifyPostCodeValidationResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new DarvazeVerifyPostCodeValidationResponse();

            if (data.hasOwnProperty('status')) {
                obj['status'] = DarvazeVerifyPostCodeValidationResponseStatus.constructFromObject(data['status']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>DarvazeVerifyPostCodeValidationResponse</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>DarvazeVerifyPostCodeValidationResponse</code>.
     */
    static validateJSON(data) {

        return true;
    }

/**
     * @return {module:model/DarvazeVerifyPostCodeValidationResponseStatus}
     */
    getStatus() {
        return this.status;
    }

    /**
     * @param {module:model/DarvazeVerifyPostCodeValidationResponseStatus} status
     */
    setStatus(status) {
        this['status'] = status;
    }

}



/**
 * @member {module:model/DarvazeVerifyPostCodeValidationResponseStatus} status
 */
DarvazeVerifyPostCodeValidationResponse.prototype['status'] = undefined;






export default DarvazeVerifyPostCodeValidationResponse;

