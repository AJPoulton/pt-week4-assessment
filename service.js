var app = angular.module('pt-week4-assessment');

app.service('service', function(){
	var todoList = []
	{thingsTodo:'Clean car' dueDate:''}

	this.getTodoList = function(){
		return todoList;
	}
	this.addToList = function(toDo){
		todoList.push(toDo);
	}
	this.checkOffList = function(toDo){
	    for(var i = 0; i < todoList.length; i++){
	      if(todoList[i].dueDate === true){
	        todoList.splice(i, 1);
}