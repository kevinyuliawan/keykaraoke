(function(){
  var app = angular.module("kevKaraoke", ["ngRoute","firebase"]);
  
  app.config(function($routeProvider){
    $routeProvider
      .when("/main",{
        templateUrl: "main.html",
        controller:"ControllerMain"
      })
      
      .when("/queue", {
        templateUrl: "queue.html",
        controller:"ControllerQueue"
      })
      
      .when("/leaderboard",{
        templateUrl:"leaderboard.html",
        controller:"ControllerLeaderboard"
      })
      .when("/soccer",{
        templateUrl:"admin.html",
        controller:"ControllerAdmin"
      })
      
      .otherwise({redirectTo:"/main"});
  });
}());