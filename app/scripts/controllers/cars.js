'use strict';

/**
 * @ngdoc function
 * @name angularApp.controller:CarsCtrl
 * @description
 * # CarsCtrl
 * Controller of the angularApp
 */
angular.module('angularApp')
  .controller('CarsCtrl', function ($scope, $http) {
    $scope.cars = [];
    $http.get('json/carsData.json').then(
      function(response){$scope.cars = response.data;},
      function(error){console.warn(error);}
    );

    $scope.gridOptions = {
      data: 'cars',
      resizable: true,
      columnDefs: [
        {
          field: 'brand',
          displayName: 'Brand'
        },
        {
          field: 'model',
          displayName: 'Model'
        },
        {
          field: 'year',
          displayName: 'Year'
        },
        {
          field: 'price',
          displayName: 'Price'
        },
        {
          field:'small_image',
          displayName:'Image',
          cellTemplate: '<img height="37px;" src="{{row.entity.small_image}}" />',
          resizable: true
        }
      ]
    };
  });
