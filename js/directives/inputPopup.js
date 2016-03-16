angular.module('directives.inputPopup', [])

.directive('inputPopup', function() {
    return {
        restrict: 'E',
        transclude: true,
        scope: {
            popupId: '@',
            
            submitName: '=', 
            submitFn: '&',
            
            setupFn: '&',
            
            title: '=',
            
            inputs: '=',
            
            btnClass: '@'
        },
//        scope: {
//            submitFn: '&',
//            btnadd: '@',
//            btncancel: '@',
//            btnsubmit: '@',            
//            inputs: '=',
//            inputclass: '@',
//            labelclass: '@',
//            btnclass: '@'
//        },
        templateUrl: 'templates/input_popup.html',
        link: function (scope) {
            
//            scope.name = inputs;
        }
    };
});