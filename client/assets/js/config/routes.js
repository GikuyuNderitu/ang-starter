app.config(function($routeProvider) {
  $routeProvider
	.when('/index', {
		templateUrl: 'partials/main.html'
	})
	.otherwise({
		redirectTo: '/index'
	});
});
