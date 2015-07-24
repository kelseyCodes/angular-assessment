'use strict';

app.directive('todoItem', todoItemDirective = function (scope, element, attrs) {
	// fill in here
	return {
		restrict: 'E',
		scope: {
			theTodo: '='
		}
	}
});