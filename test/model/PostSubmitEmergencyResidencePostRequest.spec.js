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

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', process.cwd()+'/src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require(process.cwd()+'/src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.KenarApiClient);
  }
}(this, function(expect, KenarApiClient) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new KenarApiClient.PostSubmitEmergencyResidencePostRequest();
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

  describe('PostSubmitEmergencyResidencePostRequest', function() {
    it('should create an instance of PostSubmitEmergencyResidencePostRequest', function() {
      // uncomment below and update the code to test PostSubmitEmergencyResidencePostRequest
      //var instance = new KenarApiClient.PostSubmitEmergencyResidencePostRequest();
      //expect(instance).to.be.a(KenarApiClient.PostSubmitEmergencyResidencePostRequest);
    });

    it('should have the property city (base name: "city")', function() {
      // uncomment below and update the code to test the property city
      //var instance = new KenarApiClient.PostSubmitEmergencyResidencePostRequest();
      //expect(instance).to.be();
    });

    it('should have the property data (base name: "data")', function() {
      // uncomment below and update the code to test the property data
      //var instance = new KenarApiClient.PostSubmitEmergencyResidencePostRequest();
      //expect(instance).to.be();
    });

    it('should have the property description (base name: "description")', function() {
      // uncomment below and update the code to test the property description
      //var instance = new KenarApiClient.PostSubmitEmergencyResidencePostRequest();
      //expect(instance).to.be();
    });

    it('should have the property district (base name: "district")', function() {
      // uncomment below and update the code to test the property district
      //var instance = new KenarApiClient.PostSubmitEmergencyResidencePostRequest();
      //expect(instance).to.be();
    });

    it('should have the property images (base name: "images")', function() {
      // uncomment below and update the code to test the property images
      //var instance = new KenarApiClient.PostSubmitEmergencyResidencePostRequest();
      //expect(instance).to.be();
    });

    it('should have the property phoneNumber (base name: "phone_number")', function() {
      // uncomment below and update the code to test the property phoneNumber
      //var instance = new KenarApiClient.PostSubmitEmergencyResidencePostRequest();
      //expect(instance).to.be();
    });

    it('should have the property title (base name: "title")', function() {
      // uncomment below and update the code to test the property title
      //var instance = new KenarApiClient.PostSubmitEmergencyResidencePostRequest();
      //expect(instance).to.be();
    });

  });

}));
