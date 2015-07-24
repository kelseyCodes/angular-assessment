$stateProvider.state('todos.detail', {
	url: "/todos/:id",
	controller: "detailController",
	templateUrl: 'todo.detail.html'
})