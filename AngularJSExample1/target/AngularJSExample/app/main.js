(function() {
	var app = angular.module("AJSExample", [ 'ngRoute' ]);

	app.config(function($routeProvider) {
		$routeProvider.when("/login", {
			templateUrl : "app/views/login.html"
		}).when("/signup", {
			templateUrl : "app/views/signup.html"
		}).otherwise({
			redirectTo : "/login"
		});
	});

	app.run(function($log) {
		$log.debug("Started running.!");
	})

})();