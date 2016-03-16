angular.module('directives.timeDifference', [])

.directive('timeDifference', ['$interval', 'dateFilter', function($interval, dateFilter) {

  function link(scope, element, attrs) {
    var format  = "H 'hours', m 'minutes', s 'seconds'",
        timeoutId;

    function updateTime() {
        var dateDifference = (new Date(scope.date)-(new Date()));
        
        var dayDifference = parseInt(dateDifference/(24*3600000));
        
        element.text( dayDifference +  " days, "  
                + dateFilter(dateDifference, format));
    }

//    scope.$watch(attrs.myCurrentTime, function(value) {
////      format;
//      updateTime();
//    });

    element.on('$destroy', function() {
      $interval.cancel(timeoutId);
    });

    // start the UI update process; save the timeoutId for canceling
    timeoutId = $interval(function() {
      updateTime(); // update DOM
    }, 1000);
  }

  return {
      restrict: 'E',
    link: link,
    scope: {
        date: '='
    }
  };
}]);