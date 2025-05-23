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
    instance = new KenarApiClient.FinderApi();
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

  describe('FinderApi', function() {
    describe('finderGetPost', function() {
      it('should call finderGetPost successfully', function(done) {
        //uncomment below and update the code to test finderGetPost
        //instance.finderGetPost(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('finderGetUser', function() {
      it('should call finderGetUser successfully', function(done) {
        //uncomment below and update the code to test finderGetUser
        //instance.finderGetUser(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('finderGetUser2', function() {
      it('should call finderGetUser2 successfully', function(done) {
        //uncomment below and update the code to test finderGetUser2
        //instance.finderGetUser2(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('finderGetUserPosts', function() {
      it('should call finderGetUserPosts successfully', function(done) {
        //uncomment below and update the code to test finderGetUserPosts
        //instance.finderGetUserPosts(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('finderSearchPostV2', function() {
      it('should call finderSearchPostV2 successfully', function(done) {
        //uncomment below and update the code to test finderSearchPostV2
        //instance.finderSearchPostV2(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
