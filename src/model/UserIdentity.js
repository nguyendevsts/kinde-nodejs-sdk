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
import UserIdentityResult from './UserIdentityResult';

/**
 * The UserIdentity model module.
 * @module model/UserIdentity
 * @version 1
 */
class UserIdentity {
    /**
     * Constructs a new <code>UserIdentity</code>.
     * @alias module:model/UserIdentity
     */
    constructor() { 
        
        UserIdentity.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>UserIdentity</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/UserIdentity} obj Optional instance to populate.
     * @return {module:model/UserIdentity} The populated <code>UserIdentity</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new UserIdentity();

            if (data.hasOwnProperty('type')) {
                obj['type'] = ApiClient.convertToType(data['type'], 'String');
            }
            if (data.hasOwnProperty('result')) {
                obj['result'] = UserIdentityResult.constructFromObject(data['result']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>UserIdentity</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>UserIdentity</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['type'] && !(typeof data['type'] === 'string' || data['type'] instanceof String)) {
            throw new Error("Expected the field `type` to be a primitive type in the JSON string but got " + data['type']);
        }
        // validate the optional field `result`
        if (data['result']) { // data not null
          UserIdentityResult.validateJSON(data['result']);
        }

        return true;
    }


}



/**
 * The type of identity object created
 * @member {String} type
 */
UserIdentity.prototype['type'] = undefined;

/**
 * @member {module:model/UserIdentityResult} result
 */
UserIdentity.prototype['result'] = undefined;






export default UserIdentity;

