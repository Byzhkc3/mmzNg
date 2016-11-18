/**
 * 创建angular.module
 */
define(['angular'], function (angular) {
    var app = angular.module('App', ['ngRoute','ngSanitize','ajaxLoading']);
    
    return app;

});
