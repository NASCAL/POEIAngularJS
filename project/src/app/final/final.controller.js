(function() {
  'use strict';

  function FinalCtrl($location,searchConfig,cocktailSearch) {
    var vm = this;
    vm.cocktailSearch = cocktailSearch;
    vm.searchConfig = searchConfig;
    vm.text = '';
    vm.afficherText = afficherText;
    
    function afficherText(){
      vm.searchConfig.ingredient = vm.text;
      vm.cocktailSearch.getCocktail();
    }
  }

  FinalCtrl.$inject = ['$location','searchConfig','cocktailSearch'];

  angular.module('daproject')
    .controller('FinalCtrl', FinalCtrl);

})();
