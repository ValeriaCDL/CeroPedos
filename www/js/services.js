angular.module('ceropedos.services', ['ngResource'])

.factory('Multas', [function($resource){
        var r='Reglamento_Ensenada'
        return $resource('raw'+r+'/multas.json');
}]);

