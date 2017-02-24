app.controller('usersController', ['$scope', 'userFactory', function($scope, userFactory){
	$scope.obj = {}
	$scope.objs = []

	$scope.func = function (idx) {
		userFactory.delete( () => {

		})
	}
}]);
