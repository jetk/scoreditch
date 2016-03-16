'use strict';

angular.module('services.services', [])


.service('LoginService', function ($q) {
    return {
        //returns login function that accepts credentials as parameters
        loginUser: function (name, pw) {
            var deferred = $q.defer();
            var promise = deferred.promise;
            
            
            //hardcoded login credentials, can be replaced by server call
            var key_pair = {
                "jan.klug@gmail.com": "jokes"}
        
            
            //verifies credentials
            if (key_pair[name] == pw) {
                deferred.resolve('Welcome ' + name + '!');
            } else {
                deferred.reject('Wrong credentials.');
            }
            //success callback
            promise.success = function (fn) {
                promise.then(fn);
                return promise;
            }
            //error callback
            promise.error = function (fn) {
                promise.then(null, fn);
                return promise;
            }
            return promise;
        }
    }
})

