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
 * The PostEditPostBody model module.
 * @module model/PostEditPostBody
 * @version 0.1.0
 */
class PostEditPostBody {
    /**
     * Constructs a new <code>PostEditPostBody</code>.
     * @alias module:model/PostEditPostBody
     */
    constructor() { 
        
        PostEditPostBody.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>PostEditPostBody</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PostEditPostBody} obj Optional instance to populate.
     * @return {module:model/PostEditPostBody} The populated <code>PostEditPostBody</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PostEditPostBody();

            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
            if (data.hasOwnProperty('image_paths')) {
                obj['image_paths'] = ApiClient.convertToType(data['image_paths'], ['String']);
            }
            if (data.hasOwnProperty('title')) {
                obj['title'] = ApiClient.convertToType(data['title'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>PostEditPostBody</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>PostEditPostBody</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['description'] && !(typeof data['description'] === 'string' || data['description'] instanceof String)) {
            throw new Error("Expected the field `description` to be a primitive type in the JSON string but got " + data['description']);
        }
        // ensure the json data is an array
        if (!Array.isArray(data['image_paths'])) {
            throw new Error("Expected the field `image_paths` to be an array in the JSON data but got " + data['image_paths']);
        }
        // ensure the json data is a string
        if (data['title'] && !(typeof data['title'] === 'string' || data['title'] instanceof String)) {
            throw new Error("Expected the field `title` to be a primitive type in the JSON string but got " + data['title']);
        }

        return true;
    }

/**
     * @return {String}
     */
    getDescription() {
        return this.description;
    }

    /**
     * @param {String} description
     */
    setDescription(description) {
        this['description'] = description;
    }
/**
     * @return {Array.<String>}
     */
    getImagePaths() {
        return this.image_paths;
    }

    /**
     * @param {Array.<String>} imagePaths
     */
    setImagePaths(imagePaths) {
        this['image_paths'] = imagePaths;
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
 * @member {String} description
 */
PostEditPostBody.prototype['description'] = undefined;

/**
 * @member {Array.<String>} image_paths
 */
PostEditPostBody.prototype['image_paths'] = undefined;

/**
 * @member {String} title
 */
PostEditPostBody.prototype['title'] = undefined;






export default PostEditPostBody;

