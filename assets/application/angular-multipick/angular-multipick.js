(function() {
    'use strict';

angular.module('angular-multipick',[]).directive('multipick',['$timeout',function($timeout){

			var currentScriptUrl = document.querySelector("script[src$='angular-multipick.js']").src;
			var scriptBaseUrl = currentScriptUrl.split(location.href)[1].split('.js')[0];

			var multipickController = ['$scope','$element',function($scope,$element){
				$scope.selectedItens = [];
				$scope.activeItens = [];		
				$scope.itens = angular.copy($scope.sourceItens);	 	

				$scope.addAll = function(){
					angular.forEach($scope.itens, function(object){
						if( $scope.activeItens.map(function(data){ return data.value }).indexOf(object.value) == -1){
							$scope.activeItens.push(object);
						} 
					});	
					$scope.results = $scope.activeItens;
					$scope.itens = [];
				}

				$scope.add = function(){
					angular.forEach($scope.selectedItens, function(object){
						object = JSON.parse(object);
						if( $scope.activeItens.map(function(data){ return data.value }).indexOf(object.value) == -1){
							$scope.activeItens.push(object);
							$scope.itens.splice($scope.itens.map(function(data){ return data.value }).indexOf(object.value),1);
						} 
					});	

					$scope.results = $scope.activeItens;
				}

				$scope.remove = function(){
					var index = -1;
					angular.forEach($scope.removedItens, function(object){
						object = JSON.parse(object);
						index = $scope.activeItens.map(function(data){ return data.value }).indexOf(object.value);
						if( index != -1){
							$scope.itens.push(object);
							$scope.activeItens.splice(index,1);
						} 
					});	

					$scope.results = $scope.activeItens;
				}

				$scope.removeAll = function(){
					angular.forEach($scope.activeItens, function(object){
						if( $scope.itens.map(function(data){ return data.value }).indexOf(object.value) == -1){
							$scope.itens.push(object);
						} 
					});	

					$scope.activeItens = [];
					$scope.results = $scope.activeItens;
				}

			}];

			return {
				restrict: 'A',
				controller : multipickController,
				scope:{results: '=', sourceItens: '='},
				templateUrl: scriptBaseUrl+'.html'
			}
		}]);
})();
