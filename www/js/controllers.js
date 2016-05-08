angular.module('ceropedos.controllers', ['ceropedos.services'])
        
.controller('HomeCtrl', function($scope, $state, BuscarMultas) {
    
    $scope.swipe = function(view){
        $state.go(view);
    }
    
    $scope.data = { "multas" : [], "search" : '' };

    $scope.search = function() {

    	BuscarMultas.buscar($scope.data.search).then(
    		function(matches) {
    			$scope.data.multas = matches;
    		}
    	)
    }
     
});



 