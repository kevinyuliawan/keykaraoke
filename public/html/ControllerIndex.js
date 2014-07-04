(function(){
  var app = angular.module("kevKaraoke");
  
  var ControllerIndex = function($scope,$location,karaoke){
    var onKaraokeComplete = function(data){
      $scope.queue = data;
    };
    var onError = function(reason){
      console.log(reason);
    };
    
     $scope.isActive = function(route) {
        return route === $location.path();
    };
    
    karaoke.getQueue().then(onKaraokeComplete, onError);
    
  }
  
  app.controller("ControllerIndex", ControllerIndex);
}());