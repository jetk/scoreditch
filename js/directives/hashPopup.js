angular.module('directives.hashPopup', [])

.directive('hashPopup', function() {
    return {
        restrict: 'E',
        transclude: true,
        scope: {
            popupId: '@',
            
            submitName: '=', 
            submitFn: '&',
            
            setupFn: '&',
            
            title: '=',
            
            inputs: '='
        },
        templateUrl: 'templates/hash_popup.html',
        link: function (scope) {
            
//            scope.name = inputs;
        }
    };
});
