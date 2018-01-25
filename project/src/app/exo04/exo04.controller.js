(function() {
  'use strict';

  function Exo04Ctrl($location, settingService, meteoService) {
    var vm = this;
    vm.settingService = settingService;
    vm.meteoService = meteoService;
    vm.text = '';
    vm.afficherText = afficherText;
    function afficherText(){
      vm.settingService.city = vm.text;
      vm.meteoService.getMeteo();
    }
  }

  Exo04Ctrl.$inject = ['$location','settingService','meteoService'];

  angular.module('daproject')
    .controller('Exo04Ctrl', Exo04Ctrl);

})();
