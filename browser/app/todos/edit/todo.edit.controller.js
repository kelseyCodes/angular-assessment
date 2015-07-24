app.controller('TodoEditCtrl', function($scope, 'Todo', $state){
	$scope.keepChanges = function(){
		Todo.update($scope.id, $scope.todo);
		$state.go('todos.detail');
	}
})