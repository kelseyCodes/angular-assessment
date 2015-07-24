app.factory('Todo', function($http){

	//not bringing the model to the front... I think this is why I'm not passing test specs
	//return res?? store those values somewhere maybe??
	getOne: function(id){
		return $http.get('/:' + id, function(res){
			return res;
		})
	},
	getAll: function(){
		return $http.get('/', function(res){
			return res;
		})
	},
	destroy: function(id){
		return $http.delete('/:'+ id, function(res){
			return res;
		})
	},
	add: function(newTodo){
		return $http.post('/', newTodo, function(res){
			return res;
		})
	},
	update: function(id, data){
		return $http.post('/:'+id, data, function(res){
			return res;
		})
	}
})