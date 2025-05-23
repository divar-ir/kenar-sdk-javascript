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
import AddonsAction from './AddonsAction';
import AddonsWidgetColor from './AddonsWidgetColor';
import DivarIconsIconName from './DivarIconsIconName';

/**
 * The AddonsScoreRow model module.
 * @module model/AddonsScoreRow
 * @version 0.1.0
 */
class AddonsScoreRow {
    /**
     * Constructs a new <code>AddonsScoreRow</code>.
     * @alias module:model/AddonsScoreRow
     */
    constructor() { 
        
        AddonsScoreRow.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>AddonsScoreRow</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/AddonsScoreRow} obj Optional instance to populate.
     * @return {module:model/AddonsScoreRow} The populated <code>AddonsScoreRow</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new AddonsScoreRow();

            if (data.hasOwnProperty('action')) {
                obj['action'] = AddonsAction.constructFromObject(data['action']);
            }
            if (data.hasOwnProperty('descriptive_score')) {
                obj['descriptive_score'] = ApiClient.convertToType(data['descriptive_score'], 'String');
            }
            if (data.hasOwnProperty('has_divider')) {
                obj['has_divider'] = ApiClient.convertToType(data['has_divider'], 'Boolean');
            }
            if (data.hasOwnProperty('icon_name')) {
                obj['icon_name'] = DivarIconsIconName.constructFromObject(data['icon_name']);
            }
            if (data.hasOwnProperty('percentage_score')) {
                obj['percentage_score'] = ApiClient.convertToType(data['percentage_score'], 'Number');
            }
            if (data.hasOwnProperty('score_color')) {
                obj['score_color'] = AddonsWidgetColor.constructFromObject(data['score_color']);
            }
            if (data.hasOwnProperty('title')) {
                obj['title'] = ApiClient.convertToType(data['title'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>AddonsScoreRow</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>AddonsScoreRow</code>.
     */
    static validateJSON(data) {
        // validate the optional field `action`
        if (data['action']) { // data not null
          AddonsAction.validateJSON(data['action']);
        }
        // ensure the json data is a string
        if (data['descriptive_score'] && !(typeof data['descriptive_score'] === 'string' || data['descriptive_score'] instanceof String)) {
            throw new Error("Expected the field `descriptive_score` to be a primitive type in the JSON string but got " + data['descriptive_score']);
        }
        // ensure the json data is a string
        if (data['title'] && !(typeof data['title'] === 'string' || data['title'] instanceof String)) {
            throw new Error("Expected the field `title` to be a primitive type in the JSON string but got " + data['title']);
        }

        return true;
    }

/**
     * @return {module:model/AddonsAction}
     */
    getAction() {
        return this.action;
    }

    /**
     * @param {module:model/AddonsAction} action
     */
    setAction(action) {
        this['action'] = action;
    }
/**
     * @return {String}
     */
    getDescriptiveScore() {
        return this.descriptive_score;
    }

    /**
     * @param {String} descriptiveScore
     */
    setDescriptiveScore(descriptiveScore) {
        this['descriptive_score'] = descriptiveScore;
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
     * @return {module:model/DivarIconsIconName}
     */
    getIconName() {
        return this.icon_name;
    }

    /**
     * @param {module:model/DivarIconsIconName} iconName
     */
    setIconName(iconName) {
        this['icon_name'] = iconName;
    }
/**
     * @return {Number}
     */
    getPercentageScore() {
        return this.percentage_score;
    }

    /**
     * @param {Number} percentageScore
     */
    setPercentageScore(percentageScore) {
        this['percentage_score'] = percentageScore;
    }
/**
     * @return {module:model/AddonsWidgetColor}
     */
    getScoreColor() {
        return this.score_color;
    }

    /**
     * @param {module:model/AddonsWidgetColor} scoreColor
     */
    setScoreColor(scoreColor) {
        this['score_color'] = scoreColor;
    }
/**
     * @return {String}
     */
    getTitle() {
        return this.title;
    }

    /**
     * @param {String} title
     */
    setTitle(title) {
        this['title'] = title;
    }

}



/**
 * @member {module:model/AddonsAction} action
 */
AddonsScoreRow.prototype['action'] = undefined;

/**
 * @member {String} descriptive_score
 */
AddonsScoreRow.prototype['descriptive_score'] = undefined;

/**
 * @member {Boolean} has_divider
 */
AddonsScoreRow.prototype['has_divider'] = undefined;

/**
 * @member {module:model/DivarIconsIconName} icon_name
 */
AddonsScoreRow.prototype['icon_name'] = undefined;

/**
 * @member {Number} percentage_score
 */
AddonsScoreRow.prototype['percentage_score'] = undefined;

/**
 * @member {module:model/AddonsWidgetColor} score_color
 */
AddonsScoreRow.prototype['score_color'] = undefined;

/**
 * @member {String} title
 */
AddonsScoreRow.prototype['title'] = undefined;






export default AddonsScoreRow;

