$stateProvider.state('todos.edit', {
	url: "/todos/:id/edit",
	controller: "TodoEditCtrl",
	templateUrl: 'todo.edit.html'
})