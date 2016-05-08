angular.module('ceropedos.services', ['ngResource'])

.factory('Multas', function($resource){
        var r='Reglamento_Ensenada' //otros municipios
        return $resource('raw/'+r+'/multas.json');
})

.factory('BuscarMultas', function($q, $timeout, Multas) {

    var multas=Multas.query();
    
    var buscar = function(searchFilter) {

        var deferred = $q.defer();

	    var matches = multas.filter( function(multa) {
	    	if(multa.infraccion.toLowerCase().indexOf(searchFilter.toLowerCase()) !== -1 ) return true;
	    })

        $timeout( function(){
        
           deferred.resolve( matches );

        }, 100);

        return deferred.promise;

    };

    return {

        buscar : buscar

    }
});

