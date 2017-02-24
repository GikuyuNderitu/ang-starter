app.config(function($routeProvider) {
  $routeProvider
	.when('/', {
		templateUrl: 'partials/main.html'
	})
	.otherwise({
		redirectTo: '/'
	});
});
