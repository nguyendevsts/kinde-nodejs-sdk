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
    instance = new KindeManagementApi.CreateOrganizationRequest();
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

  describe('CreateOrganizationRequest', function() {
    it('should create an instance of CreateOrganizationRequest', function() {
      // uncomment below and update the code to test CreateOrganizationRequest
      //var instance = new KindeManagementApi.CreateOrganizationRequest();
      //expect(instance).to.be.a(KindeManagementApi.CreateOrganizationRequest);
    });

    it('should have the property name (base name: "name")', function() {
      // uncomment below and update the code to test the property name
      //var instance = new KindeManagementApi.CreateOrganizationRequest();
      //expect(instance).to.be();
    });

    it('should have the property featureFlags (base name: "feature_flags")', function() {
      // uncomment below and update the code to test the property featureFlags
      //var instance = new KindeManagementApi.CreateOrganizationRequest();
      //expect(instance).to.be();
    });

    it('should have the property externalId (base name: "external_id")', function() {
      // uncomment below and update the code to test the property externalId
      //var instance = new KindeManagementApi.CreateOrganizationRequest();
      //expect(instance).to.be();
    });

    it('should have the property backgroundColor (base name: "background_color")', function() {
      // uncomment below and update the code to test the property backgroundColor
      //var instance = new KindeManagementApi.CreateOrganizationRequest();
      //expect(instance).to.be();
    });

    it('should have the property buttonColor (base name: "button_color")', function() {
      // uncomment below and update the code to test the property buttonColor
      //var instance = new KindeManagementApi.CreateOrganizationRequest();
      //expect(instance).to.be();
    });

    it('should have the property buttonTextColor (base name: "button_text_color")', function() {
      // uncomment below and update the code to test the property buttonTextColor
      //var instance = new KindeManagementApi.CreateOrganizationRequest();
      //expect(instance).to.be();
    });

    it('should have the property linkColor (base name: "link_color")', function() {
      // uncomment below and update the code to test the property linkColor
      //var instance = new KindeManagementApi.CreateOrganizationRequest();
      //expect(instance).to.be();
    });

  });

}));
