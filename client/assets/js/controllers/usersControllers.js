app.controller('customizeUsersController', ['$scope', 'userFactory', function($scope, userFactory){
	$scope.user = {}
	$scope.addUser = function(){
		console.log($scope);
	}
	$scope.deleteUser = function (idx) {
		userFactory.delete( () => {
			return idx
		})
	}
}]);
