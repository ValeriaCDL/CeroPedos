angular.module('ceropedos.controllers', [])
        
.controller('SlideCtrl', function($scope, $state) {
    
    $scope.swipe = function(view){
        $state.go(view);
    }
     
})

.controller('SidemenuCtrl',function($scope,$ionicSideMenuDelegate){
    $scope.toggleLeft = function() {
    $ionicSideMenuDelegate.toggleLeft();
  };
});



 