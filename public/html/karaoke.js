(function() {
  var karaoke = function($http,$firebase) {
    
    



    var getQueue = function() {
      return $http.get('http://gentle-sierra-9904.herokuapp.com/queue')
        .then(function(response) {
          return response.data;
        });

    };

    var getDone = function() {
      
      return $http.get('http://gentle-sierra-9904.herokuapp.com/done')
        .then(function(response) {
          return response.data;
        });
        
    };
    
    var submitWords = function(words){
      return $http.get('http://gentle-sierra-9904.herokuapp.com/thumbs')
        .then(function(response){
          return response.data;
        });
    };
    
    var submitRequest = function(name,artist,song){
      return $http.get('http://gentle-sierra-9904.herokuapp.com/request/'+name+'/'+artist+'/'+song)
        .then(function(response){
          return response.data;
        });
    };
    
    var finishCurrent = function(){
      return $http.get('http://gentle-sierra-9904.herokuapp.com/finish')
        .then(function(response){
          return response.data;
        });
    };
    
    var submitFront = function(name,artist,song){
      return $http.get('http://gentle-sierra-9904.herokuapp.com/requestfront/'+name+'/'+artist+'/'+song)
        .then(function(response){
          return response.data;
        });
    };

    return {
      getQueue: getQueue,
      getDone: getDone,
      submitWords: submitWords,
      submitRequest: submitRequest,
      finishCurrent: finishCurrent,
      submitFront: submitFront
    };
  };

  var module = angular.module("kevKaraoke");
  module.factory("karaoke", karaoke);


}());