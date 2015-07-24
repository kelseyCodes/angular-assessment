'use strict';

app.directive('ngEnter', ngEnterDirective = function (scope, element, attrs) {
	// fill in here
	//element.on keypress 
	return {restrict: 'A',
			scope: {
				ngEnter: '&'
			}
	}
});