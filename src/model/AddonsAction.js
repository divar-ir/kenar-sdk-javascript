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
import AddonsGetDynamicAction from './AddonsGetDynamicAction';
import AddonsOpenPostManagePage from './AddonsOpenPostManagePage';
import AddonsOpenPostPage from './AddonsOpenPostPage';
import AddonsOpenServerLink from './AddonsOpenServerLink';

/**
 * The AddonsAction model module.
 * @module model/AddonsAction
 * @version 0.1.0
 */
class AddonsAction {
    /**
     * Constructs a new <code>AddonsAction</code>.
     * Represents an action that can be performed
     * @alias module:model/AddonsAction
     */
    constructor() { 
        
        AddonsAction.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>AddonsAction</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/AddonsAction} obj Optional instance to populate.
     * @return {module:model/AddonsAction} The populated <code>AddonsAction</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new AddonsAction();

            if (data.hasOwnProperty('get_dynamic_action')) {
                obj['get_dynamic_action'] = AddonsGetDynamicAction.constructFromObject(data['get_dynamic_action']);
            }
            if (data.hasOwnProperty('open_direct_link')) {
                obj['open_direct_link'] = ApiClient.convertToType(data['open_direct_link'], 'String');
            }
            if (data.hasOwnProperty('open_post_manage_page')) {
                obj['open_post_manage_page'] = AddonsOpenPostManagePage.constructFromObject(data['open_post_manage_page']);
            }
            if (data.hasOwnProperty('open_post_page')) {
                obj['open_post_page'] = AddonsOpenPostPage.constructFromObject(data['open_post_page']);
            }
            if (data.hasOwnProperty('open_server_link')) {
                obj['open_server_link'] = AddonsOpenServerLink.constructFromObject(data['open_server_link']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>AddonsAction</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>AddonsAction</code>.
     */
    static validateJSON(data) {
        // validate the optional field `get_dynamic_action`
        if (data['get_dynamic_action']) { // data not null
          AddonsGetDynamicAction.validateJSON(data['get_dynamic_action']);
        }
        // ensure the json data is a string
        if (data['open_direct_link'] && !(typeof data['open_direct_link'] === 'string' || data['open_direct_link'] instanceof String)) {
            throw new Error("Expected the field `open_direct_link` to be a primitive type in the JSON string but got " + data['open_direct_link']);
        }
        // validate the optional field `open_post_manage_page`
        if (data['open_post_manage_page']) { // data not null
          AddonsOpenPostManagePage.validateJSON(data['open_post_manage_page']);
        }
        // validate the optional field `open_post_page`
        if (data['open_post_page']) { // data not null
          AddonsOpenPostPage.validateJSON(data['open_post_page']);
        }
        // validate the optional field `open_server_link`
        if (data['open_server_link']) { // data not null
          AddonsOpenServerLink.validateJSON(data['open_server_link']);
        }

        return true;
    }

/**
     * @return {module:model/AddonsGetDynamicAction}
     */
    getGetDynamicAction() {
        return this.get_dynamic_action;
    }

    /**
     * @param {module:model/AddonsGetDynamicAction} getDynamicAction
     */
    setGetDynamicAction(getDynamicAction) {
        this['get_dynamic_action'] = getDynamicAction;
    }
/**
     * Returns An action to send user to your URL directly with just a resource id (if applicable)
     * @return {String}
     */
    getOpenDirectLink() {
        return this.open_direct_link;
    }

    /**
     * Sets An action to send user to your URL directly with just a resource id (if applicable)
     * @param {String} openDirectLink An action to send user to your URL directly with just a resource id (if applicable)
     */
    setOpenDirectLink(openDirectLink) {
        this['open_direct_link'] = openDirectLink;
    }
/**
     * @return {module:model/AddonsOpenPostManagePage}
     */
    getOpenPostManagePage() {
        return this.open_post_manage_page;
    }

    /**
     * @param {module:model/AddonsOpenPostManagePage} openPostManagePage
     */
    setOpenPostManagePage(openPostManagePage) {
        this['open_post_manage_page'] = openPostManagePage;
    }
/**
     * @return {module:model/AddonsOpenPostPage}
     */
    getOpenPostPage() {
        return this.open_post_page;
    }

    /**
     * @param {module:model/AddonsOpenPostPage} openPostPage
     */
    setOpenPostPage(openPostPage) {
        this['open_post_page'] = openPostPage;
    }
/**
     * @return {module:model/AddonsOpenServerLink}
     */
    getOpenServerLink() {
        return this.open_server_link;
    }

    /**
     * @param {module:model/AddonsOpenServerLink} openServerLink
     */
    setOpenServerLink(openServerLink) {
        this['open_server_link'] = openServerLink;
    }

}



/**
 * @member {module:model/AddonsGetDynamicAction} get_dynamic_action
 */
AddonsAction.prototype['get_dynamic_action'] = undefined;

/**
 * An action to send user to your URL directly with just a resource id (if applicable)
 * @member {String} open_direct_link
 */
AddonsAction.prototype['open_direct_link'] = undefined;

/**
 * @member {module:model/AddonsOpenPostManagePage} open_post_manage_page
 */
AddonsAction.prototype['open_post_manage_page'] = undefined;

/**
 * @member {module:model/AddonsOpenPostPage} open_post_page
 */
AddonsAction.prototype['open_post_page'] = undefined;

/**
 * @member {module:model/AddonsOpenServerLink} open_server_link
 */
AddonsAction.prototype['open_server_link'] = undefined;






export default AddonsAction;

