'use strict';

angular.module('invmcmanApp')
    .controller('LogoutController', function (Auth) {
        Auth.logout();
    });
