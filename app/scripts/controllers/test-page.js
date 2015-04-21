'use strict';

/**
 * @ngdoc function
 * @name angularApp.controller:TestPageCtrl
 * @description
 * # TestPageCtrl
 * Controller of the angularApp
 */
angular.module('angularApp')
.controller('TestPageCtrl', function ($scope, $q, $timeout) {
    $scope.user = {
      name: 'John',
      age: 28
    };

    $scope.a = 20;
    $scope.b = 10;

    $scope.getCars = function() {
      var deferred = $q.defer();
      $timeout(function(){
        var data = [
          {brand: "BMW", model: "328i", year: 2014, price: 54444},
          {brand: "Ford", model: "Mustang GT", year: 2011, price: 40000}
        ];
        deferred.resolve(data);
      }, 5000);
      $timeout(function(){deferred.reject('error');}, 6000);
      return deferred.promise;
    };

    $scope.getCars().then(
      function(response){console.warn(response);},
      function(error){console.warn(error);}
    );
  });
