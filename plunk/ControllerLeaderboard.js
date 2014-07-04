(function(){
  var app = angular.module("kevKaraoke");
  var ControllerLeaderboard = function($scope,karaoke){
    
    var onKaraoke = function(data){
      $scope.dac = data;
    }
    
    var onError = function(reason){
      console.log(reason);
    }
    
    karaoke.getDone().then(onKaraoke,onError);
    
  }
  
  app.controller("ControllerLeaderboard",ControllerLeaderboard);
  
  
}());