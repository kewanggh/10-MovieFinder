(function() {
    'use strict';

    angular
        .module('movieApp')
        .controller('MovieDetailsController', Controller);

    Controller.$inject = ['MovieFactory', '$log', '$stateParams', ];

    /*   @ngInject */
    function Controller(MovieFactory, $log, $stateParams) {
        var vm = this;
        vm.title = 'MovieDetailsController';


        vm.hello = "hello";
        console.log(vm.hello);





        getDetails($stateParams.name);

        function getDetails(movie) {
            var url = 'http://www.omdbapi.com/?t=' + movie;
            MovieFactory.getMovie(url).then(
                function(response) {
                    vm.movie = response.data;

                    console.log(vm.movie);
                },

                function(error) {
                    $log.error('Sorry there has been an error connecting to the API', error)
                });

        };

    };
})();
