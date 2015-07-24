app.controller('TodoItemCtrl', function($scope, 'Todo', $state){
	


	$scope.theTodo = {complete: false};
	$scope.toggleComplete = function(){
		if ($scope.theTodo.complete === true){
			$scope.theTodo.complete = false;
		} else {
			$scope.theTodo.complete = true;
		}
	};

	$scope.removeTodo = function(){
		Todo.destroy($scope.theTodo);
		$state.go('todos');
	}

})