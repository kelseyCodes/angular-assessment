'use strict';

var expect = chai.expect;

describe('Todo detail', function () {

	beforeEach(module('angularAssessment'));

	describe('state', function () {

		var $state;
		beforeEach(inject(function (_$state_) {
			$state = _$state_;
		}));

		it('url compiles correctly', function () {
			var url = $state.href('todos.detail', {id: '123'});
			expect(url).to.equal('/todos/123');
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