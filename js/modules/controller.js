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

        $scope.verifyPwd = function(serial, seqNum, appName, challenge){

          console.log(serial);
          console.log(seqNum);
          console.log(appName);
          console.log(challenge);
          console.log($scope.pwd);
          $http.post(url + "/verifyPwd", {
                                            serial : serial+'',
                                            appName : appName+'',
                                            seqNum : seqNum+'',
                                            challenge : challenge + '',
                                            password : $scope.pwd+'',
                                            kParmSetName : ''
                                          }

          )
            .success(function(response) {
              
              $scope.retCode = response.retCode;
              $scope.message = response.message;
              $scope.verify = '';
              console.log('****** Error codigo ' + response.retCode);
              console.log('****** Error codigo ' + response.message);
              if(response.retCode == '0'){
                $scope.verify = 'OTP Válido !';
                alert('OTP Válido');
              }else{
                //alert('NO');
                $scope.verify = 'OTP NO VÁLIDO';
              }
              //console.log($scope.devices);
              //localStorage.setItem("name", '');
        
          }).error(function(data, status){
          //console.log('****** Error codigo1 ' + response.retCode)
          console.log('Error: '+data+'\nEstado: '+status);
          
          });

        }
   
}])

})();