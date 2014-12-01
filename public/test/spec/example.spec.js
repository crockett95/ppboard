/*jshint unused: vars */
define([
  'jquery',
  'angular',
  'app/app',
  'angular-mocks'
], function ($, angular, app) {
  'use strict';

  describe('MyApp: overall', function () {

    // // load the controller's module
    // beforeEach(module('MyApp.controllers'));

    // var OtherCtrl,
    //     scope;

    // // Initialize the controller and a mock scope
    // beforeEach(inject(function ($controller, $rootScope) {
    //   scope = $rootScope.$new();
    //   OtherCtrl = $controller('OtherCtrl', {
    //     $scope: scope
    //   });
    // }));

    it('should have a controller called OtherCtrl', function () {
      expect(app).toBeTruthy();
    });

    it('should load jquery', function () {
      expect($().jquery).toBe('2.1.1');
    });
  });
});
