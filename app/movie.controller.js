(function() {
    'use strict';

    angular
        .module('movieApp')
        .controller('MovieController', Controller);

    Controller.$inject = ['MovieFactory', '$log'];

    /* @ngInject */
    function Controller(MovieFactory, $log) {
        var vm = this;
        vm.title = 'MovieController';


        vm.find = function(movie) {
            var url = 'http://www.omdbapi.com/?s=' + movie;
            MovieFactory.getMovie(url).then(
                function(response) {
                    vm.results = response.data;
                    vm.movies = vm.results.Search;
                    /*console.log(vm.movies[0]);*/

                },
                function(error) {
                    $log.error('Sorry there has been an error connecting to the API', error)
                });
        };

    };
})();
