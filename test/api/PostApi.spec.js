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
    instance = new KenarApiClient.PostApi();
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

  describe('PostApi', function() {
    describe('postEditPost', function() {
      it('should call postEditPost successfully', function(done) {
        //uncomment below and update the code to test postEditPost
        //instance.postEditPost(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('postGetImageUploadURL', function() {
      it('should call postGetImageUploadURL successfully', function(done) {
        //uncomment below and update the code to test postGetImageUploadURL
        //instance.postGetImageUploadURL(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('postGetPostStats', function() {
      it('should call postGetPostStats successfully', function(done) {
        //uncomment below and update the code to test postGetPostStats
        //instance.postGetPostStats(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('postSubmitEmergencyResidencePost', function() {
      it('should call postSubmitEmergencyResidencePost successfully', function(done) {
        //uncomment below and update the code to test postSubmitEmergencyResidencePost
        //instance.postSubmitEmergencyResidencePost(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('postSubmitPost', function() {
      it('should call postSubmitPost successfully', function(done) {
        //uncomment below and update the code to test postSubmitPost
        //instance.postSubmitPost(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
