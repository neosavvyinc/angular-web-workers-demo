Neosavvy.Controllers.controller('view.ContentController',
    ['$scope', '$rootScope', '$routeParams', 'constants.Configuration',
        function ($scope, $rootScope, $routeParams, configuration) {

            this.numbers = [];

            for (var i = 0; i < 1000; i++) {
                this.numbers.push(i);
            }
        }]);