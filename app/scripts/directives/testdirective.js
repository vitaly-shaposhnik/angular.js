'use strict';

/**
 * @ngdoc directive
 * @name angularApp.directive:testDirective
 * @description
 * # testDirective
 */
angular.module('angularApp')
  .directive('testDirective', function () {
    return {
      template: '<div></div>',
      restrict: 'E',
      link: function postLink(scope, element, attrs) {
        element.text('this is the testDirective directive');
      }
    };
  });
