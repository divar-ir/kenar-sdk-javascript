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
import FinderGetUserPostsResponsePost from './FinderGetUserPostsResponsePost';

/**
 * The FinderGetUserPostsResponse model module.
 * @module model/FinderGetUserPostsResponse
 * @version 0.1.0
 */
class FinderGetUserPostsResponse {
    /**
     * Constructs a new <code>FinderGetUserPostsResponse</code>.
     * @alias module:model/FinderGetUserPostsResponse
     */
    constructor() { 
        
        FinderGetUserPostsResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>FinderGetUserPostsResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/FinderGetUserPostsResponse} obj Optional instance to populate.
     * @return {module:model/FinderGetUserPostsResponse} The populated <code>FinderGetUserPostsResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new FinderGetUserPostsResponse();

            if (data.hasOwnProperty('posts')) {
                obj['posts'] = ApiClient.convertToType(data['posts'], [FinderGetUserPostsResponsePost]);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>FinderGetUserPostsResponse</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>FinderGetUserPostsResponse</code>.
     */
    static validateJSON(data) {
        if (data['posts']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['posts'])) {
                throw new Error("Expected the field `posts` to be an array in the JSON data but got " + data['posts']);
            }
            // validate the optional field `posts` (array)
            for (const item of data['posts']) {
                FinderGetUserPostsResponsePost.validateJSON(item);
            };
        }

        return true;
    }

/**
     * @return {Array.<module:model/FinderGetUserPostsResponsePost>}
     */
    getPosts() {
        return this.posts;
    }

    /**
     * @param {Array.<module:model/FinderGetUserPostsResponsePost>} posts
     */
    setPosts(posts) {
        this['posts'] = posts;
    }

}



/**
 * @member {Array.<module:model/FinderGetUserPostsResponsePost>} posts
 */
FinderGetUserPostsResponse.prototype['posts'] = undefined;






export default FinderGetUserPostsResponse;

