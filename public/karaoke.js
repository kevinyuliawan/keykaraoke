(function() {
    var karaoke = function($http, $firebase) {





        var getQueue = function() {
            return $http.get('/queue')
                .then(function(response) {
                    return response.data;
                });

        };

        var getDone = function() {

            return $http.get('/done')
                .then(function(response) {
                    return response.data;
                });

        };

        var submitWords = function(words) {
            return $http.get('/thumbs')
                .then(function(response) {
                    return response.data;
                });
        };

        var submitRequest = function(name, artist, song) {
            return $http.get('/request/' + name + '/' + artist + '/' + song)
                .then(function(response) {
                    return response.data;
                });
        };

        var finishCurrent = function() {
            return $http.get('/finish')
                .then(function(response) {
                    return response.data;
                });
        };

        var submitFront = function(name, artist, song) {
            return $http.get('/requestfront/' + name + '/' + artist + '/' + song)
                .then(function(response) {
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