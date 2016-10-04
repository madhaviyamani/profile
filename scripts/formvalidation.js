
   (function () {
'use strict';

  var app=angular.module('form',[]);
    
app.controller('con',['$scope', function($scope){
        
        $scope.feedback = {
            mychannel:"",
            firstName:"",
            lastName:"",
            agree:false,
            email:""
            
        };
        
    }])
    
    
    .controller('feed',['$scope', function($scope)
         {
             
                                        
                                    }]);




    
})();

