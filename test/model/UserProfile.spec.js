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

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', process.cwd()+'/src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require(process.cwd()+'/src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.KindeManagementApi);
  }
}(this, function(expect, KindeManagementApi) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new KindeManagementApi.UserProfile();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('UserProfile', function() {
    it('should create an instance of UserProfile', function() {
      // uncomment below and update the code to test UserProfile
      //var instance = new KindeManagementApi.UserProfile();
      //expect(instance).to.be.a(KindeManagementApi.UserProfile);
    });

    it('should have the property id (base name: "id")', function() {
      // uncomment below and update the code to test the property id
      //var instance = new KindeManagementApi.UserProfile();
      //expect(instance).to.be();
    });

    it('should have the property preferredEmail (base name: "preferred_email")', function() {
      // uncomment below and update the code to test the property preferredEmail
      //var instance = new KindeManagementApi.UserProfile();
      //expect(instance).to.be();
    });

    it('should have the property providedId (base name: "provided_id")', function() {
      // uncomment below and update the code to test the property providedId
      //var instance = new KindeManagementApi.UserProfile();
      //expect(instance).to.be();
    });

    it('should have the property lastName (base name: "last_name")', function() {
      // uncomment below and update the code to test the property lastName
      //var instance = new KindeManagementApi.UserProfile();
      //expect(instance).to.be();
    });

    it('should have the property firstName (base name: "first_name")', function() {
      // uncomment below and update the code to test the property firstName
      //var instance = new KindeManagementApi.UserProfile();
      //expect(instance).to.be();
    });

  });

}));
