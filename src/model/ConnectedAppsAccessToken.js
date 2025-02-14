/**
 * Kinde Management API
 * Provides endpoints to manage your Kinde Businesses
 *
 * The version of the OpenAPI document: 1
 * Contact: support@kinde.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';

/**
 * The ConnectedAppsAccessToken model module.
 * @module model/ConnectedAppsAccessToken
 * @version 1
 */
class ConnectedAppsAccessToken {
    /**
     * Constructs a new <code>ConnectedAppsAccessToken</code>.
     * @alias module:model/ConnectedAppsAccessToken
     */
    constructor() { 
        
        ConnectedAppsAccessToken.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ConnectedAppsAccessToken</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ConnectedAppsAccessToken} obj Optional instance to populate.
     * @return {module:model/ConnectedAppsAccessToken} The populated <code>ConnectedAppsAccessToken</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ConnectedAppsAccessToken();

            if (data.hasOwnProperty('access_token')) {
                obj['access_token'] = ApiClient.convertToType(data['access_token'], 'String');
            }
            if (data.hasOwnProperty('access_token_expiry')) {
                obj['access_token_expiry'] = ApiClient.convertToType(data['access_token_expiry'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>ConnectedAppsAccessToken</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>ConnectedAppsAccessToken</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['access_token'] && !(typeof data['access_token'] === 'string' || data['access_token'] instanceof String)) {
            throw new Error("Expected the field `access_token` to be a primitive type in the JSON string but got " + data['access_token']);
        }
        // ensure the json data is a string
        if (data['access_token_expiry'] && !(typeof data['access_token_expiry'] === 'string' || data['access_token_expiry'] instanceof String)) {
            throw new Error("Expected the field `access_token_expiry` to be a primitive type in the JSON string but got " + data['access_token_expiry']);
        }

        return true;
    }


}



/**
 * The access token to access a third-party provider
 * @member {String} access_token
 */
ConnectedAppsAccessToken.prototype['access_token'] = undefined;

/**
 * The date and time that the access token expires
 * @member {String} access_token_expiry
 */
ConnectedAppsAccessToken.prototype['access_token_expiry'] = undefined;






export default ConnectedAppsAccessToken;

