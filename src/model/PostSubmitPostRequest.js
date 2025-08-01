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
import PostTemporaryResidenceFields from './PostTemporaryResidenceFields';

/**
 * The PostSubmitPostRequest model module.
 * @module model/PostSubmitPostRequest
 * @version 0.1.0
 */
class PostSubmitPostRequest {
    /**
     * Constructs a new <code>PostSubmitPostRequest</code>.
     * @alias module:model/PostSubmitPostRequest
     */
    constructor() { 
        
        PostSubmitPostRequest.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>PostSubmitPostRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PostSubmitPostRequest} obj Optional instance to populate.
     * @return {module:model/PostSubmitPostRequest} The populated <code>PostSubmitPostRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PostSubmitPostRequest();

            if (data.hasOwnProperty('chat_enabled')) {
                obj['chat_enabled'] = ApiClient.convertToType(data['chat_enabled'], 'Boolean');
            }
            if (data.hasOwnProperty('city')) {
                obj['city'] = ApiClient.convertToType(data['city'], 'String');
            }
            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
            if (data.hasOwnProperty('district')) {
                obj['district'] = ApiClient.convertToType(data['district'], 'String');
            }
            if (data.hasOwnProperty('hide_phone')) {
                obj['hide_phone'] = ApiClient.convertToType(data['hide_phone'], 'Boolean');
            }
            if (data.hasOwnProperty('images')) {
                obj['images'] = ApiClient.convertToType(data['images'], ['String']);
            }
            if (data.hasOwnProperty('latitude')) {
                obj['latitude'] = ApiClient.convertToType(data['latitude'], 'Number');
            }
            if (data.hasOwnProperty('longitude')) {
                obj['longitude'] = ApiClient.convertToType(data['longitude'], 'Number');
            }
            if (data.hasOwnProperty('temporary_residence')) {
                obj['temporary_residence'] = PostTemporaryResidenceFields.constructFromObject(data['temporary_residence']);
            }
            if (data.hasOwnProperty('title')) {
                obj['title'] = ApiClient.convertToType(data['title'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>PostSubmitPostRequest</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>PostSubmitPostRequest</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['city'] && !(typeof data['city'] === 'string' || data['city'] instanceof String)) {
            throw new Error("Expected the field `city` to be a primitive type in the JSON string but got " + data['city']);
        }
        // ensure the json data is a string
        if (data['description'] && !(typeof data['description'] === 'string' || data['description'] instanceof String)) {
            throw new Error("Expected the field `description` to be a primitive type in the JSON string but got " + data['description']);
        }
        // ensure the json data is a string
        if (data['district'] && !(typeof data['district'] === 'string' || data['district'] instanceof String)) {
            throw new Error("Expected the field `district` to be a primitive type in the JSON string but got " + data['district']);
        }
        // ensure the json data is an array
        if (!Array.isArray(data['images'])) {
            throw new Error("Expected the field `images` to be an array in the JSON data but got " + data['images']);
        }
        // validate the optional field `temporary_residence`
        if (data['temporary_residence']) { // data not null
          PostTemporaryResidenceFields.validateJSON(data['temporary_residence']);
        }
        // ensure the json data is a string
        if (data['title'] && !(typeof data['title'] === 'string' || data['title'] instanceof String)) {
            throw new Error("Expected the field `title` to be a primitive type in the JSON string but got " + data['title']);
        }

        return true;
    }

/**
     * Returns امکان چت فعال باشد
     * @return {Boolean}
     */
    getChatEnabled() {
        return this.chat_enabled;
    }

    /**
     * Sets امکان چت فعال باشد
     * @param {Boolean} chatEnabled امکان چت فعال باشد
     */
    setChatEnabled(chatEnabled) {
        this['chat_enabled'] = chatEnabled;
    }
/**
     * Returns شهر آگهی
     * @return {String}
     */
    getCity() {
        return this.city;
    }

    /**
     * Sets شهر آگهی
     * @param {String} city شهر آگهی
     */
    setCity(city) {
        this['city'] = city;
    }
/**
     * Returns توضیحات آگهی
     * @return {String}
     */
    getDescription() {
        return this.description;
    }

    /**
     * Sets توضیحات آگهی
     * @param {String} description توضیحات آگهی
     */
    setDescription(description) {
        this['description'] = description;
    }
/**
     * Returns محله آگهی
     * @return {String}
     */
    getDistrict() {
        return this.district;
    }

    /**
     * Sets محله آگهی
     * @param {String} district محله آگهی
     */
    setDistrict(district) {
        this['district'] = district;
    }
/**
     * Returns عدم نمایش شماره تماس به کاربران
     * @return {Boolean}
     */
    getHidePhone() {
        return this.hide_phone;
    }

    /**
     * Sets عدم نمایش شماره تماس به کاربران
     * @param {Boolean} hidePhone عدم نمایش شماره تماس به کاربران
     */
    setHidePhone(hidePhone) {
        this['hide_phone'] = hidePhone;
    }
/**
     * @return {Array.<String>}
     */
    getImages() {
        return this.images;
    }

    /**
     * @param {Array.<String>} images
     */
    setImages(images) {
        this['images'] = images;
    }
/**
     * Returns عرض جغرافیایی آگهی
     * @return {Number}
     */
    getLatitude() {
        return this.latitude;
    }

    /**
     * Sets عرض جغرافیایی آگهی
     * @param {Number} latitude عرض جغرافیایی آگهی
     */
    setLatitude(latitude) {
        this['latitude'] = latitude;
    }
/**
     * Returns طول جغرافیایی آگهی
     * @return {Number}
     */
    getLongitude() {
        return this.longitude;
    }

    /**
     * Sets طول جغرافیایی آگهی
     * @param {Number} longitude طول جغرافیایی آگهی
     */
    setLongitude(longitude) {
        this['longitude'] = longitude;
    }
/**
     * @return {module:model/PostTemporaryResidenceFields}
     */
    getTemporaryResidence() {
        return this.temporary_residence;
    }

    /**
     * @param {module:model/PostTemporaryResidenceFields} temporaryResidence
     */
    setTemporaryResidence(temporaryResidence) {
        this['temporary_residence'] = temporaryResidence;
    }
/**
     * Returns عنوان آگهی
     * @return {String}
     */
    getTitle() {
        return this.title;
    }

    /**
     * Sets عنوان آگهی
     * @param {String} title عنوان آگهی
     */
    setTitle(title) {
        this['title'] = title;
    }

}



/**
 * امکان چت فعال باشد
 * @member {Boolean} chat_enabled
 */
PostSubmitPostRequest.prototype['chat_enabled'] = undefined;

/**
 * شهر آگهی
 * @member {String} city
 */
PostSubmitPostRequest.prototype['city'] = undefined;

/**
 * توضیحات آگهی
 * @member {String} description
 */
PostSubmitPostRequest.prototype['description'] = undefined;

/**
 * محله آگهی
 * @member {String} district
 */
PostSubmitPostRequest.prototype['district'] = undefined;

/**
 * عدم نمایش شماره تماس به کاربران
 * @member {Boolean} hide_phone
 */
PostSubmitPostRequest.prototype['hide_phone'] = undefined;

/**
 * @member {Array.<String>} images
 */
PostSubmitPostRequest.prototype['images'] = undefined;

/**
 * عرض جغرافیایی آگهی
 * @member {Number} latitude
 */
PostSubmitPostRequest.prototype['latitude'] = undefined;

/**
 * طول جغرافیایی آگهی
 * @member {Number} longitude
 */
PostSubmitPostRequest.prototype['longitude'] = undefined;

/**
 * @member {module:model/PostTemporaryResidenceFields} temporary_residence
 */
PostSubmitPostRequest.prototype['temporary_residence'] = undefined;

/**
 * عنوان آگهی
 * @member {String} title
 */
PostSubmitPostRequest.prototype['title'] = undefined;






export default PostSubmitPostRequest;

