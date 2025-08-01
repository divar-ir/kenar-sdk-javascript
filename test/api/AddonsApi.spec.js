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
    instance = new KenarApiClient.AddonsApi();
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

  describe('AddonsApi', function() {
    describe('addonsCreateBusinessAddon', function() {
      it('should call addonsCreateBusinessAddon successfully', function(done) {
        //uncomment below and update the code to test addonsCreateBusinessAddon
        //instance.addonsCreateBusinessAddon(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('addonsCreatePostAddonV2', function() {
      it('should call addonsCreatePostAddonV2 successfully', function(done) {
        //uncomment below and update the code to test addonsCreatePostAddonV2
        //instance.addonsCreatePostAddonV2(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('addonsCreateUserAddonV2', function() {
      it('should call addonsCreateUserAddonV2 successfully', function(done) {
        //uncomment below and update the code to test addonsCreateUserAddonV2
        //instance.addonsCreateUserAddonV2(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('addonsCreateUserAddonV22', function() {
      it('should call addonsCreateUserAddonV22 successfully', function(done) {
        //uncomment below and update the code to test addonsCreateUserAddonV22
        //instance.addonsCreateUserAddonV22(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('addonsDeletePostAddon', function() {
      it('should call addonsDeletePostAddon successfully', function(done) {
        //uncomment below and update the code to test addonsDeletePostAddon
        //instance.addonsDeletePostAddon(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('addonsDeletePostAddon2', function() {
      it('should call addonsDeletePostAddon2 successfully', function(done) {
        //uncomment below and update the code to test addonsDeletePostAddon2
        //instance.addonsDeletePostAddon2(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('addonsDeleteUserAddon', function() {
      it('should call addonsDeleteUserAddon successfully', function(done) {
        //uncomment below and update the code to test addonsDeleteUserAddon
        //instance.addonsDeleteUserAddon(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('addonsGetUserAddons', function() {
      it('should call addonsGetUserAddons successfully', function(done) {
        //uncomment below and update the code to test addonsGetUserAddons
        //instance.addonsGetUserAddons(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('addonsGetUserAddons2', function() {
      it('should call addonsGetUserAddons2 successfully', function(done) {
        //uncomment below and update the code to test addonsGetUserAddons2
        //instance.addonsGetUserAddons2(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
