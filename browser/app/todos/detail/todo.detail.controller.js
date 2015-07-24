app.controller('detailController', function($scope, 'Todo'){
	$scope.todo = function(id){
		Todo.getOne(id);
	}

})