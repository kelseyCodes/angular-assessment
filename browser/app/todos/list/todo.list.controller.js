app.controller('TodoListCtrl', function($scope, 'Todo'){
	$scope.filterByCompleted = '';

	$scope.setCategory = function(cat){
		if (cat === 'completed') {
			$scope.filterByCompleted = true;
		}

		if (cat === 'active') {
			$scope.filterByCompleted = false;
		}
	};

	$scope.isActiveCategory = function(){
		if (cat === 'all') {
			return true;
		} else if (cat === 'completed' || cat === 'active' ) {
			return false
		}
	};

	$scope.addTodo = function(){
		Todo.add($scope.toAdd);
	};
})