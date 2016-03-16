'use strict';

angular.module('controllers.feed', [])

.controller('feedCtrl', ['$scope', '$http', '$rootScope', function ($scope, $http, $rootScope, $dialogs) {

    $scope.gwartz = [];
    $scope.klug = [];
    $scope.gwartz_points = 0;
    $scope.klug_points = 0;
    $scope.gwartz_text = "";
    $scope.klug_text = "";

    /*    
    $http.get(PATH_TO_API + 'events/gwartz').then(function(data){
    $scope.gwartz = data.data;
    $scope.gwartz_points = data.data.length
    }, function(data) { requestFailureFunction(data); });
    
    $http.get(PATH_TO_API + 'events/klug').then(function(data){
    $scope.klug = data.data;
    $scope.klug_points = data.data.length
    }, function(data) { requestFailureFunction(data); });
    
    */

    $scope.submit_gwartz = function () {
        $scope.gwartz_points++;
        var temp = {time: Date.now(), text: $scope.gwartz_text}
        //post temp object to data store
        $scope.gwartz.push(temp);
    }
    
    $scope.submit_klug = function () {
        $dialogs.notify("HELLO")    

    }

}]);