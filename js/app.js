'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [

  // Directives
  'angucomplete-alt',
  'angularUtils.directives.dirPagination',
  'directives.inputPopup',
  'directives.hashPopup',
  'directives.timeDifference',

    
    //Services
    'services.services',
    
  // Controllers
  'controllers.feed',
    'controllers.LoginModalControl',

  // Routes
  'routes'


]);

function logged_in(set) {
    if (set === undefined) {
        return JSON.parse(sessionStorage.getItem('logged_in'));
    }
}

function requestFailureFunction(data) {


    alert("ERROR: " + JSON.stringify(data));
}