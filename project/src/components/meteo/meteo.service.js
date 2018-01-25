(function() {
    'use strict';
  
    function meteoService(settingService, $http) {
        var service = {};
    	service.meteoListe = [];
        service.settingService = settingService;
        service.getMeteo = getMeteo;
        
	    function getMeteo(){
            return $http.get('http://api.openweathermap.org/data/2.5/forecast?q='+service.settingService.city+'&APPID=585b8c072fcc16743eaf2c63f1ef660f&units=metric')
            .then(function(response){
                service.meteoListe = response.data.list;
            })
            .catch(function(error){
                service.meteoListe = [];
            });
        }

        return service;
    }

    meteoService.$inject = ['settingService','$http'];
    
    angular.module('daproject')
        .factory('meteoService', meteoService);
  
})();