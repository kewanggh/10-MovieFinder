(function(){

	'use strict'
	//define top-level module container
	var app = angular.module('movieApp',['ui.router']);
	//additional configuration goes here

	app.config(function($stateProvider, $urlRouterProvider) {
    
    // For any unmatched url, redirect to /state1
    $urlRouterProvider.otherwise("/main");
    
        // Now set up the states
        $stateProvider
        .state('main', {
          url: "/main",
          templateUrl: "app/partials/main.html",
             controller: "MovieController",
		  controllerAs:"vm"
        })
        .state('main.results', {
          url: "/results",
          templateUrl: "app/partials/results.html",
           controller: "MovieController"

		  
        })
        .state('main.details', {
          url: "/details/:name",
          templateUrl: "app/partials/details.html",
          controller: "MovieDetailsController",
          controllerAs: "vm"

         
        });
         
      
       
    });

})();

// a self closing function, when the page loads, it will automatically loads.
