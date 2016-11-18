define(['app'], function(app){
      
   return app.controller('homeIndexCtrl', ['$scope','$rootScope','$http',
           function ($scope,$rootScope,$http) {

            $rootScope.headTitle = $rootScope.title = "首页";
            $rootScope.favBol = false;
            $rootScope.backBol = false;

            $scope.name = "Yali";

          
    }])

})