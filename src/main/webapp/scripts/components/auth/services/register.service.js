'use strict';

angular.module('invmcmanApp')
    .factory('Register', function ($resource) {
        return $resource('api/register', {}, {
        });
    });


