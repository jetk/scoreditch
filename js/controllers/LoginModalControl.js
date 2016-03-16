angular.module('controllers.LoginModalControl', [])

.controller('LoginModalCtrl', function ($scope, LoginService) {

    this.cancel = $scope.$dismiss;

    this.submit = function (email, password) {
        LoginService.loginUser(email, password).then(function (user) {
            $scope.$close(user);
        });
    };

});