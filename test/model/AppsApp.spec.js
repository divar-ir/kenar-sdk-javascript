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
    instance = new KenarApiClient.AppsApp();
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

  describe('AppsApp', function() {
    it('should create an instance of AppsApp', function() {
      // uncomment below and update the code to test AppsApp
      //var instance = new KenarApiClient.AppsApp();
      //expect(instance).to.be.a(KenarApiClient.AppsApp);
    });

    it('should have the property avatar (base name: "avatar")', function() {
      // uncomment below and update the code to test the property avatar
      //var instance = new KenarApiClient.AppsApp();
      //expect(instance).to.be();
    });

    it('should have the property display (base name: "display")', function() {
      // uncomment below and update the code to test the property display
      //var instance = new KenarApiClient.AppsApp();
      //expect(instance).to.be();
    });

    it('should have the property divarIdentificationKey (base name: "divar_identification_key")', function() {
      // uncomment below and update the code to test the property divarIdentificationKey
      //var instance = new KenarApiClient.AppsApp();
      //expect(instance).to.be();
    });

    it('should have the property serviceTags (base name: "service_tags")', function() {
      // uncomment below and update the code to test the property serviceTags
      //var instance = new KenarApiClient.AppsApp();
      //expect(instance).to.be();
    });

    it('should have the property serviceType (base name: "service_type")', function() {
      // uncomment below and update the code to test the property serviceType
      //var instance = new KenarApiClient.AppsApp();
      //expect(instance).to.be();
    });

    it('should have the property slug (base name: "slug")', function() {
      // uncomment below and update the code to test the property slug
      //var instance = new KenarApiClient.AppsApp();
      //expect(instance).to.be();
    });

    it('should have the property status (base name: "status")', function() {
      // uncomment below and update the code to test the property status
      //var instance = new KenarApiClient.AppsApp();
      //expect(instance).to.be();
    });

  });

}));
