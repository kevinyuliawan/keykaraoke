(function() {
  var app = angular.module("kevKaraoke");

  var ControllerAdmin = function($scope, karaoke) {
    $scope.submitSuccess = false;
    $scope.finishCurrent = function() {
      karaoke.finishCurrent();
    };

    $scope.submitFront = function() {
      var song = $scope.request.artist + '-' + $scope.request.title;
      karaoke.submitFront($scope.request.name, $scope.request.artist, $scope.request.title);
      $scope.submitSuccess = true;
    }

  }
  app.controller("ControllerAdmin", ControllerAdmin);
}());