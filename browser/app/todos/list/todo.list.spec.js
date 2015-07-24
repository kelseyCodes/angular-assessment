'use strict';

var expect = chai.expect;

describe('Todo list', function () {

	beforeEach(module('angularAssessment'));

	describe('controller', function () {

		var TodoListCtrl, $scope, Todo, $state;
		beforeEach(inject(function ($controller, $rootScope, _$state_, $q) {
			$scope = $rootScope.$new();
			Todo = {add: chai.spy(function () {
				return {
					then: function (f) {
						f({_id: '123'});
					}
				}
			})};
			$state = _$state_;
			$state.go = function () {
				$state._mockUrl = $state.href.apply($state, arguments);
			};
			TodoListCtrl = $controller('TodoListCtrl', {$scope: $scope, todos: [], Todo: Todo, $state: $state});
		}));

		describe('.setCategory method', function () {

			it('properly alters $scope.filterByCompleted', function () {
				$scope.setCategory('all');
				expect($scope.filterByCompleted).to.equal('');
				$scope.setCategory('completed');
				expect($scope.filterByCompleted).to.equal(true);
				$scope.setCategory('active');
				expect($scope.filterByCompleted).to.equal(false);
			});

		});

		describe('.isActiveCategory method', function () {

			it('returns boolean for category string based on whether or not it is selected', function () {
				$scope.setCategory('all');
				expect($scope.isActiveCategory('all')).to.equal(true);
				expect($scope.isActiveCategory('completed')).to.equal(false);
				expect($scope.isActiveCategory('active')).to.equal(false);
			});

		});

		describe('.addTodo method', function () {

			it('uses Todo factory', function () {
				$scope.addTodo();
				expect(Todo.add).to.have.been.called.once;
			});

			it('goes to the todo\'s edit state after it has been added', function () {
				$scope.addTodo();
				expect($state._mockUrl).to.equal('/todos/123/edit');
			});

		});

	});

	describe('state', function () {

		var $state;
		beforeEach(inject(function (_$state_) {
			$state = _$state_;
		}))

		it('url compiles correctly', function () {
			var url = $state.href('todos');
			expect(url).to.equal('/todos');
		});

		it('resolves with all todos', function () {
			var Todo = {getAll: function () {
				return [{_id: 'a'}, {_id: 'b'}];
			}};
			var result = $state.get('todos').resolve.todos(Todo);
			expect(result).to.eql([{_id: 'a'}, {_id: 'b'}]);
		});

	});

});