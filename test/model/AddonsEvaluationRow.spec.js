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
    instance = new KenarApiClient.AddonsEvaluationRow();
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

  describe('AddonsEvaluationRow', function() {
    it('should create an instance of AddonsEvaluationRow', function() {
      // uncomment below and update the code to test AddonsEvaluationRow
      //var instance = new KenarApiClient.AddonsEvaluationRow();
      //expect(instance).to.be.a(KenarApiClient.AddonsEvaluationRow);
    });

    it('should have the property iconName (base name: "icon_name")', function() {
      // uncomment below and update the code to test the property iconName
      //var instance = new KenarApiClient.AddonsEvaluationRow();
      //expect(instance).to.be();
    });

    it('should have the property indicatorPercentage (base name: "indicator_percentage")', function() {
      // uncomment below and update the code to test the property indicatorPercentage
      //var instance = new KenarApiClient.AddonsEvaluationRow();
      //expect(instance).to.be();
    });

    it('should have the property indicatorText (base name: "indicator_text")', function() {
      // uncomment below and update the code to test the property indicatorText
      //var instance = new KenarApiClient.AddonsEvaluationRow();
      //expect(instance).to.be();
    });

    it('should have the property left (base name: "left")', function() {
      // uncomment below and update the code to test the property left
      //var instance = new KenarApiClient.AddonsEvaluationRow();
      //expect(instance).to.be();
    });

    it('should have the property middle (base name: "middle")', function() {
      // uncomment below and update the code to test the property middle
      //var instance = new KenarApiClient.AddonsEvaluationRow();
      //expect(instance).to.be();
    });

    it('should have the property right (base name: "right")', function() {
      // uncomment below and update the code to test the property right
      //var instance = new KenarApiClient.AddonsEvaluationRow();
      //expect(instance).to.be();
    });

  });

}));
