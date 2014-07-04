(function() {
  var app = angular.module("kevKaraoke");

  var ControllerQueue = function($scope, karaoke) {
    $scope.viewmore = false;
    $scope.queue = null;
    $scope.songSearch;
    $scope.songSelected;
    $scope.submitSuccess = false;

    var Person = function(name, song, thumbs) {
      this.name = name,
      this.song = song,
      this.thumbs = thumbs;
    };

    var onKaraoke = function(data) {
      $scope.queue = data;
    }

    var onError = function(reason) {
      cosole.log(reason);
    }

    $scope.submitRequest = function() {
      var song = $scope.request.artist + '-' + $scope.request.title;
      karaoke.submitRequest($scope.request.name, $scope.request.artist, $scope.request.title);
      $scope.submitSuccess = true;
      $scope.queue.push(new Person($scope.request.name,song,0));
    }

    karaoke.getQueue().then(onKaraoke, onError);
  };

  app.controller("ControllerQueue", ControllerQueue);
}());