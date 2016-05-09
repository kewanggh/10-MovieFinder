(function() {
    'use strict';

    angular
        .module('movieApp')
        .factory('MovieFactory', MovieFactory);

    MovieFactory.$inject = ["$http", "$q", "$log"]; //maybe need ""

    /* @ngInject */
    function MovieFactory($http, $q, $log) {
        var service = {
            getMovie: getMovie

             //, if more functions
        };
        return service;

        ////////////////













        function getMovie(url) {
            var defer = $q.defer();
            /*var url = 'http://www.omdbapi.com/?s=';*/

            $http({
                    method: 'GET',
                    url: url
                        /*   params: {
                                       s: movie,
                                       t: type
                           }*/
                })
                .then(
                    function(response) {
                        if (typeof response.data === 'object') {
                            defer.resolve(response);
                            toastr.success('Successful!');
                        } else {
                            defer.reject(response);
                            toastr.warning('Sorry there has been an error connecting to the API <br/>' + response.config.url);
                        }
                    },
                    //failure
                    function(error) {
                        defer.reject(error);
                        $log.error(error);
                        toastr.error('error: ' + error.data + '<br/>status: ' + error.statusText);
                    });

            return defer.promise;

        } //end getMovie function

    } //end factory function
})(); // last closing notation
