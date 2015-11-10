(function(){

	var app = angular.module('controller',[]);
	var url = 'http://52.24.166.255:8081/vasco';

	app.controller('vascodemo', ['$scope', '$http', function($scope, $http){

    $http.post(url + "/getAllUsers")
        .success(function(response) {
          $scope.listaUsuarios = response.listaUsuarios;
          //console.log($scope.devices);
          //localStorage.setItem("name", '');
        
        }).error(function(data, status){
          
        console.log('Error: '+data+'\nEstado: '+status);
        });
		    
        $scope.genChal = function(){

          $http.post(url + "/genChal", {serial : ''})
        .success(function(response) {
          $scope.challenge = response.challenge;
          //console.log($scope.devices);
          //localStorage.setItem("name", '');
        
          }).error(function(data, status){
          
          console.log('Error: '+data+'\nEstado: '+status);
          
          });
			
		    }
   
}])

})();