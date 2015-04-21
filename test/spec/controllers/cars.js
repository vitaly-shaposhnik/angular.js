'use strict';

describe('Controller: CarsCtrl', function () {

  // load the controller's module
  beforeEach(module('angularApp'));

  var CarsCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    CarsCtrl = $controller('CarsCtrl', {
      $scope: scope
    });
  }));

  it('check car properties', function() {

  });
});
