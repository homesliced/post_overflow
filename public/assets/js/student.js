(function() {

  var app = angular.module('hello', []);
  app.controller('StringGameController', ['$scope', function($scope) {
    $scope.firstString = 'string1';
    $scope.secondString = 'string2';

    $scope.concatenate = function() {
      return $scope.firstString + $scope.secondString;
    }
  }]);

})();