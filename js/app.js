(function(){

	var demoVasco = angular.module('demovasco',['controller', 'ngRoute']);

	demoVasco.config(['$routeProvider', function($routeProvider){
		$routeProvider.when('/', { templateUrl : 'views/main_page.html'});

	}]);
})();