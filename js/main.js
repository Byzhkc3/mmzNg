/**
 * 入口文件
 * 2016-11-18 egg
 */
require.config({
    baseUrl: "js/",
    paths: {
        "jquery": "libs/jquery203",
        "fastclick": "libs/fastclick",
        "blocksit": "libs/blocksit",
        "idTabs": "libs/idTabs",
        "stickUp": "libs/stickUp",
        "angular": "libs/angular.min",
        "angular-route": "libs/angular-route.min",
        "angular-sanitize": "libs/angular-sanitize.min",

        "telBox": "directives/telBox",
        "fav": "directives/fav",
        "imgList": "directives/imgList",
        "geo": "directives/geo",
        "backButton": "directives/backButton",
        "fliterBox": "directives/fliterBox",
        "jrTab": "directives/jrTab",
        "fixBar": "directives/fixBar",

        "geoFactory": "services/geoFactory",

        "app": "controllers/app",
        "loadingInterceptor": "controllers/loadingInterceptor",


        "homeIndexCtrl": "controllers/homeIndexCtrl",

        "route": "routes/appRoute",
    },
    shim: {
        'angular': {
            exports: 'angular'
        },
        'angular-route': {
            deps: ["angular"],
            exports: 'angular-route'
        },
        'angular-sanitize': {
            deps: ["angular"],
            exports: 'angular-sanitize'
        },
        'blocksit': {
            deps: ["jquery", "angular"],
            exports: 'blocksit'
        },
        'idTabs': {
            deps: ['jquery'],
            exports: 'idTabs'
        },
        'stickUp': {
            deps: ['jquery'],
            exports: 'stickUp'
        }
    }
});


require(['jquery', 'angular', 'angular-route', 'angular-sanitize', 'app',
    'loadingInterceptor', 'route', 'telBox', 'fav', 'geo', 'geoFactory',
    'homeIndexCtrl', 
    'blocksit', 'backButton', 'fliterBox', 'idTabs', 'jrTab', 'stickUp', 'fixBar'
], function($, angular) {

    $(function() {

        angular.bootstrap(document, ["App"]);

    })

});
