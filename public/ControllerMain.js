(function(){
  var app = angular.module("kevKaraoke");
  var ControllerMain = function($scope,karaoke){
    $scope.current = null;
    $scope.wordsSent = false;
    
    var onKaraoke = function(array){
      $scope.current = array[0];
    }
    
    var onError = function(reason){
      console.log(reason);
    }
    
    $scope.submitWords = function(){
      karaoke.submitWords($scope.words);
      $scope.wordsSent = true;
      $scope.current.thumbs++;
      console.log('submitted');
    }
    
    karaoke.getQueue().then(onKaraoke,onError);
    
  };
  
  app.controller("ControllerMain",ControllerMain);
}());