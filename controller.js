var app = angular.app('todoList');

app.controller('controller'), function($scope, dataService){
	$scope.todoList = dataService.getList();
}

$scope.getTodoList = function(){
	
}

$scope.addToList = function(){

}

$scope.checkOffList = function(){

}