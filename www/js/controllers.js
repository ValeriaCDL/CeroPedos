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
     
})
        
.controller('SMSCtrl', function($scope, $state, $cordovaSms, $ionicPopup) {
    // alert('sending sms...?');
    document.addEventListener('deviceready', function () {
        var options = {
            replaceLineBreaks: false, // true to replace \n by a new line, false by default
            android: {
                intent: '' // send SMS with the native android SMS messaging
                //intent: '' // send SMS without open any other app
                //intent: 'INTENT' // send SMS inside a default SMS app
            }
        };
        $cordovaSms
            .send('6461896114', 'Test', options)
            .then(function() {
                alert('sms sent', 'Yay!');
            }, function(error) {
                alert('sms not sent', 'Buu!');
            });
    });

    function alert(template, title){
        $ionicPopup.alert({
            title: title || 'Alert',
            template: template
        });
    }
});



 