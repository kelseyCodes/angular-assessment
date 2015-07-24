'use strict';

var expect = chai.expect;

describe('Todo edit', function () {

	beforeEach(module('angularAssessment'));

	describe('controller', function () {

		var TodoEditCtrl, $scope, Todo, $state;
		beforeEach(inject(function ($controller, $rootScope, _$state_) {
			$scope = $rootScope.$new();
			Todo = {update: chai.spy(function () {
				return {
					then: function (f) {
						f();
					}
				}
			})};
			$state = _$state_;
			$state.go = function () {
				$state._mockUrl = $state.href.apply($state, arguments);
			};
			TodoEditCtrl = $controller('TodoEditCtrl', {$scope: $scope, Todo: Todo, $state: $state, todo: {_id: '456'}});
		}));

		describe('.keepChanges method', function () {

			it('uses the Todo factory', function () {
				$scope.keepChanges();
				expect(Todo.update).to.have.been.called.once;
			});

			it('goes to the todo\'s detail state after it has been updated', function () {
				$scope.keepChanges();
				expect($state._mockUrl).to.equal('/todos/456');
			});

		});

	});

	describe('state', function () {

		var $state;
		beforeEach(inject(function (_$state_) {
			$state = _$state_;
		}));

		it('url compiles correctly', function () {
			var url = $state.href('todos.edit', {id: '123'});
			expect(url).to.equal('/todos/123/edit');
		});

		it('resolves with given todo', function () {
			var Todo = {getOne: function (id) {
				return {_id: id};
			}};
			var result = $state.get('todos.detail').resolve.todo(Todo, {id: '123'});
			expect(result).to.eql({_id: '123'});
		});

	});

});