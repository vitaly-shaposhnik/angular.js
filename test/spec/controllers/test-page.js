'use strict';

describe('Controller: TestPageCtrl', function () {

  // load the controller's module
  beforeEach(module('angularApp'));

  var TestPageCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    TestPageCtrl = $controller('TestPageCtrl', {
      $scope: scope
    });
  }));
});
