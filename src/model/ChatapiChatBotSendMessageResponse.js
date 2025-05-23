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
 * The ChatapiChatBotSendMessageResponse model module.
 * @module model/ChatapiChatBotSendMessageResponse
 * @version 0.1.0
 */
class ChatapiChatBotSendMessageResponse {
    /**
     * Constructs a new <code>ChatapiChatBotSendMessageResponse</code>.
     * @alias module:model/ChatapiChatBotSendMessageResponse
     */
    constructor() { 
        
        ChatapiChatBotSendMessageResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ChatapiChatBotSendMessageResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ChatapiChatBotSendMessageResponse} obj Optional instance to populate.
     * @return {module:model/ChatapiChatBotSendMessageResponse} The populated <code>ChatapiChatBotSendMessageResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ChatapiChatBotSendMessageResponse();

            if (data.hasOwnProperty('conversation_id')) {
                obj['conversation_id'] = ApiClient.convertToType(data['conversation_id'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>ChatapiChatBotSendMessageResponse</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>ChatapiChatBotSendMessageResponse</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['conversation_id'] && !(typeof data['conversation_id'] === 'string' || data['conversation_id'] instanceof String)) {
            throw new Error("Expected the field `conversation_id` to be a primitive type in the JSON string but got " + data['conversation_id']);
        }

        return true;
    }

/**
     * Returns ID of the conversation created or updated
     * @return {String}
     */
    getConversationId() {
        return this.conversation_id;
    }

    /**
     * Sets ID of the conversation created or updated
     * @param {String} conversationId ID of the conversation created or updated
     */
    setConversationId(conversationId) {
        this['conversation_id'] = conversationId;
    }

}



/**
 * ID of the conversation created or updated
 * @member {String} conversation_id
 */
ChatapiChatBotSendMessageResponse.prototype['conversation_id'] = undefined;






export default ChatapiChatBotSendMessageResponse;

