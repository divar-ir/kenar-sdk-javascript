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
    instance = new KenarApiClient.AddonsEventRow();
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

  describe('AddonsEventRow', function() {
    it('should create an instance of AddonsEventRow', function() {
      // uncomment below and update the code to test AddonsEventRow
      //var instance = new KenarApiClient.AddonsEventRow();
      //expect(instance).to.be.a(KenarApiClient.AddonsEventRow);
    });

    it('should have the property hasDivider (base name: "has_divider")', function() {
      // uncomment below and update the code to test the property hasDivider
      //var instance = new KenarApiClient.AddonsEventRow();
      //expect(instance).to.be();
    });

    it('should have the property iconName (base name: "icon_name")', function() {
      // uncomment below and update the code to test the property iconName
      //var instance = new KenarApiClient.AddonsEventRow();
      //expect(instance).to.be();
    });

    it('should have the property imageId (base name: "image_id")', function() {
      // uncomment below and update the code to test the property imageId
      //var instance = new KenarApiClient.AddonsEventRow();
      //expect(instance).to.be();
    });

    it('should have the property label (base name: "label")', function() {
      // uncomment below and update the code to test the property label
      //var instance = new KenarApiClient.AddonsEventRow();
      //expect(instance).to.be();
    });

    it('should have the property subtitle (base name: "subtitle")', function() {
      // uncomment below and update the code to test the property subtitle
      //var instance = new KenarApiClient.AddonsEventRow();
      //expect(instance).to.be();
    });

    it('should have the property title (base name: "title")', function() {
      // uncomment below and update the code to test the property title
      //var instance = new KenarApiClient.AddonsEventRow();
      //expect(instance).to.be();
    });

  });

}));
